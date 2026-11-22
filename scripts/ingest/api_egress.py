# L3 — GEB
# Input: Production JP API/CDN requests and job-local proxy controller settings.
# Output: Bounded exit failover; callers retain download and payload validation.
# Pos: [Map](L2-2.md); shared resource and announcement transport.
# Effects/Dependencies: curl, urllib, loopback Mihomo selector API and a job-local lock.
"""Rotate production JP resource exits after network or access failures."""

from __future__ import annotations

import json
import os
import re
import subprocess
import sys
import threading
import urllib.parse
import urllib.request
from contextlib import contextmanager
from pathlib import Path
from typing import Any

RETRYABLE_CURL_CODES = frozenset({5, 6, 7, 18, 28, 35, 52, 55, 56, 92})
_HTTP_FAILURES = {403, 407, 502, 503, 504}
_READ_PATHS = {
    "/app.masterdata.MasterdataService/Version",
    "/app.announcement.AnnouncementService/GetList",
    "/app.announcement.AnnouncementService/Get",
}
_LOCK = threading.Lock()
_TLS12_COMPATIBLE = False


@contextmanager
def _selector_lock():
    import fcntl

    with _LOCK, Path(os.environ["JP_VERSION_PROXY_LOCK"]).open("a") as file:
        fcntl.flock(file, fcntl.LOCK_EX)
        yield


def _controller(method: str = "GET", node: str | None = None) -> dict[str, Any]:
    root = os.environ["JP_VERSION_PROXY_CONTROLLER"].rstrip("/")
    parsed = urllib.parse.urlsplit(root)
    if parsed.scheme != "http" or parsed.hostname != "127.0.0.1":
        raise ValueError("JP proxy controller must use loopback HTTP")
    request = urllib.request.Request(
        root + "/proxies/JP-EGRESS", method=method,
        data=json.dumps({"name": node}).encode() if node is not None else None,
        headers={"Authorization": "Bearer " + os.environ["JP_VERSION_PROXY_SECRET"],
                 "Content-Type": "application/json"},
    )
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
    with opener.open(request, timeout=5) as response:
        payload = response.read()
    return json.loads(payload) if payload else {}


def _nodes(group: dict[str, Any]) -> list[str]:
    priority = ("JP-M1", "JP-M2", "JP-Z1", "JP-G1", "[V6]JP-Z1", "HK-G1", "TW-V1")

    def order(node: str) -> tuple[int, str]:
        name = node.upper()
        label = re.search(r"(?:\[V6\])?(?:JP-[A-Z0-9]+|HK-G1|TW-V1)\b", name)
        key = label[0] if label else ""
        return (priority.index(key) if key in priority else len(priority), node)

    return sorted(dict.fromkeys(group["all"]), key=order)[:8]


def next_cdn_opener(url: str, visited: set[str], *handlers) -> urllib.request.OpenerDirector | None:
    target = urllib.parse.urlsplit(url)
    proxy = os.environ.get("JP_VERSION_PROXY")
    if (target.scheme != "https" or target.hostname != "static.bang-dream-on.jp"
            or not proxy or not os.environ.get("JP_VERSION_PROXY_CONTROLLER")):
        return None
    with _selector_lock():
        group = _controller()
        remaining = [node for node in _nodes(group) if node not in visited]
        if not remaining:
            return None
        node = group["now"] if group["now"] in remaining else remaining[0]
        _controller("PUT", node)
        visited.add(node)
    print(f"JP CDN egress: trying {node}", file=sys.stderr)
    return urllib.request.build_opener(
        urllib.request.ProxyHandler({"http": proxy, "https": proxy}), *handlers,
    )


def _http_status(command: list[str], stdout: bytes) -> int | None:
    headers = stdout
    for option in ("-D", "--dump-header"):
        if option in command:
            filename = command[command.index(option) + 1]
            if filename != "-":
                path = Path(filename)
                headers = path.read_bytes() if path.exists() else b""
            break
    statuses = re.findall(rb"^HTTP/\S+\s+(\d{3})", headers, re.MULTILINE)
    return int(statuses[-1]) if statuses else None


def is_managed_jp_read(url: str, proxy: str | None) -> bool:
    target = urllib.parse.urlsplit(url)
    return bool(
        proxy and proxy == os.environ.get("JP_VERSION_PROXY")
        and os.environ.get("JP_VERSION_PROXY_CONTROLLER")
        and target.hostname == "api.bang-dream-on.jp" and target.path in _READ_PATHS
    )


def _grpcio_execute(
    command: list[str], input_frame: bytes, timeout: float
) -> subprocess.CompletedProcess[bytes] | None:
    try:
        import struct
        import grpc
    except ImportError:
        return None
    url = command[-1]
    parsed = urllib.parse.urlsplit(url)
    if parsed.scheme != "https" or not parsed.hostname or not parsed.path.startswith("/"):
        return None
    if len(input_frame) < 5 or input_frame[0] != 0:
        return None
    msg_len = struct.unpack_from(">I", input_frame, 1)[0]
    raw_req = input_frame[5 : 5 + msg_len]

    out_path: str | None = None
    dump_hdr: str | None = None
    meta: list[tuple[str, str]] = []
    skip_hdrs = {"content-type", "te", "grpc-accept-encoding", "user-agent"}
    idx = 0
    while idx < len(command) - 1:
        arg = command[idx]
        if arg in ("-o", "--output") and idx + 1 < len(command):
            out_path = command[idx + 1]
            idx += 2
        elif arg in ("-D", "--dump-header") and idx + 1 < len(command):
            dump_hdr = command[idx + 1]
            idx += 2
        elif arg in ("-H", "--header") and idx + 1 < len(command):
            hdr = command[idx + 1]
            if ":" in hdr:
                hk, hv = hdr.split(":", 1)
                hk_l = hk.strip().lower()
                if hk_l not in skip_hdrs:
                    meta.append((hk_l, hv.strip()))
            idx += 2
        else:
            idx += 1

    channel = grpc.secure_channel(f"{parsed.hostname}:443", grpc.ssl_channel_credentials())
    try:
        rpc = channel.unary_unary(
            parsed.path,
            request_serializer=lambda x: x,
            response_deserializer=lambda x: x,
        )
        resp_bytes, call = rpc.with_call(raw_req, metadata=meta, timeout=timeout)
        hdr_lines = ["HTTP/2 200 ", "content-type: application/grpc"]
        for k, v in list(call.initial_metadata()) + list(call.trailing_metadata()):
            if isinstance(v, str):
                hdr_lines.append(f"{k.lower()}: {v}")
        hdr_lines.append("grpc-status: 0")
        hdr_blob = ("\r\n".join(hdr_lines) + "\r\n\r\n").encode("utf-8")
        frame = b"\x00" + struct.pack(">I", len(resp_bytes)) + resp_bytes
        if out_path and out_path != "/dev/null":
            Path(out_path).write_bytes(frame)
        stdout_bytes = b""
        if dump_hdr == "-":
            stdout_bytes = hdr_blob
        elif dump_hdr:
            Path(dump_hdr).write_bytes(hdr_blob)
        return subprocess.CompletedProcess(command, 0, stdout_bytes, b"")
    except grpc.RpcError as rpc_err:
        code_num = rpc_err.code().value[0] if hasattr(rpc_err, "code") else 2
        msg = urllib.parse.quote(rpc_err.details() or "") if hasattr(rpc_err, "details") else ""
        hdr_blob = f"HTTP/2 200 \r\ncontent-type: application/grpc\r\ngrpc-status: {code_num}\r\ngrpc-message: {msg}\r\n\r\n".encode("utf-8")
        if out_path and out_path != "/dev/null":
            Path(out_path).write_bytes(b"")
        stdout_bytes = hdr_blob if dump_hdr == "-" else b""
        if dump_hdr and dump_hdr != "-":
            Path(dump_hdr).write_bytes(hdr_blob)
        return subprocess.CompletedProcess(command, 0, stdout_bytes, b"")
    except Exception as exc:
        return subprocess.CompletedProcess(command, 28, b"", str(exc).encode("utf-8"))
    finally:
        channel.close()


def run_api_curl(
    command: list[str], *, proxy: str | None, input: bytes, timeout: float,
    capture_output: bool = True, check: bool = False,
) -> subprocess.CompletedProcess[bytes]:
    if not proxy:
        grpc_res = _grpcio_execute(command, input, timeout)
        if grpc_res is not None:
            return grpc_res
    if not is_managed_jp_read(command[-1], proxy):
        return subprocess.run(command, input=input, timeout=timeout, capture_output=capture_output, check=check)
    global _TLS12_COMPATIBLE
    tls12 = [*command[:-1], "--tlsv1.2", "--tls-max", "1.2", command[-1]]

    def execute(args: list[str]) -> subprocess.CompletedProcess[bytes]:
        return subprocess.run(args, input=input, timeout=timeout, capture_output=capture_output, check=check)

    visited: set[str] = set()
    attempts = 0
    while True:
        attempts += 1
        with _selector_lock():
            group = _controller()
            node = group["now"]
        visited.add(node)
        try:
            compatible = _TLS12_COMPATIBLE
            result: subprocess.CompletedProcess[bytes] | subprocess.TimeoutExpired = execute(tls12 if compatible else command)
            if result.returncode == 0 and _http_status(command, result.stdout) == 403 and not compatible:
                result = execute(tls12)
                if result.returncode == 0 and _http_status(command, result.stdout) == 200:
                    _TLS12_COMPATIBLE = True
                    print("JP API egress: TLS 1.2 accepted by the version service", file=sys.stderr)
        except subprocess.TimeoutExpired as error:
            result = error
            failure = "timeout"
        else:
            status = _http_status(command, result.stdout)
            if result.returncode not in RETRYABLE_CURL_CODES and not (
                result.returncode == 0 and status in _HTTP_FAILURES
            ):
                return result
            failure = f"curl {result.returncode}" if result.returncode else f"HTTP {status}"
        with _selector_lock():
            group = _controller()
            if group["now"] not in visited and attempts < 8:
                continue
            remaining = [item for item in _nodes(group) if item not in visited]
            if not remaining or attempts >= 8:
                if isinstance(result, subprocess.TimeoutExpired):
                    raise result
                return result
            selected = remaining[0]
            _controller("PUT", selected)
            print(f"JP API egress: {node} failed ({failure}); trying {selected}", file=sys.stderr)


def select_preferred_exit() -> None:
    with _selector_lock():
        nodes = _nodes(_controller())
        if not nodes:
            raise RuntimeError("subscription has no configured resource exits")
        _controller("PUT", nodes[0])

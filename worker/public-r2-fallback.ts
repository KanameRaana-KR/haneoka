// Public R2-over-HTTPS read-only fallback for SiriusTrack Workers Static Assets
// Used automatically when env.ASSET_BUCKET is not bound in wrangler.jsonc.

function encodeKey(key: string): string {
  return key
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
}

function parseTotalSize(headers: Headers): number {
  const cr = headers.get("content-range");
  if (cr) {
    const m = /\/(\d+)\s*$/u.exec(cr);
    if (m) return Number(m[1]);
  }
  return Number(headers.get("content-length") || 0);
}

function buildMeta(key: string, headers: Headers) {
  const httpEtag = headers.get("etag") || '""';
  const etag = httpEtag.replace(/^W\//u, "").replace(/^"|"$/gu, "");
  const size = parseTotalSize(headers);
  const lm = headers.get("last-modified");
  const uploaded = lm ? new Date(lm) : new Date(0);
  const httpMetadata: R2HTTPMetadata = {
    contentType: headers.get("content-type") || undefined,
    cacheControl: headers.get("cache-control") || undefined,
    contentDisposition: headers.get("content-disposition") || undefined,
    contentEncoding: headers.get("content-encoding") || undefined,
    contentLanguage: headers.get("content-language") || undefined,
  };
  return {
    key,
    version: etag || "1",
    size,
    etag,
    httpEtag,
    checksums: {} as R2Checksums,
    uploaded,
    httpMetadata,
    customMetadata: {},
    storageClass: "Standard",
    writeHttpMetadata(target: Headers): void {
      if (httpMetadata.contentType) target.set("Content-Type", httpMetadata.contentType);
      if (httpMetadata.contentEncoding) target.set("Content-Encoding", httpMetadata.contentEncoding);
      if (httpMetadata.contentDisposition) target.set("Content-Disposition", httpMetadata.contentDisposition);
      if (httpMetadata.contentLanguage) target.set("Content-Language", httpMetadata.contentLanguage);
      if (httpMetadata.cacheControl) target.set("Cache-Control", httpMetadata.cacheControl);
    },
  };
}

export function createPublicR2Bucket(publicOrigin: string): R2Bucket {
  const origin = publicOrigin.replace(/\/+$/u, "");
  const bucket = {
    async head(key: string): Promise<R2Object | null> {
      const res = await fetch(`${origin}/${encodeKey(key)}`, {
        method: "HEAD",
        headers: { "Accept-Encoding": "identity" },
      });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`Public R2 HEAD ${key} failed with ${res.status}`);
      return buildMeta(key, res.headers) as unknown as R2Object;
    },
    async get(key: string, options?: R2GetOptions): Promise<R2ObjectBody | R2Object | null> {
      const headers = new Headers({ "Accept-Encoding": "identity" });
      if (options?.onlyIf) {
        if (options.onlyIf instanceof Headers) {
          options.onlyIf.forEach((v, k) => headers.set(k, v));
        } else {
          const cond = options.onlyIf as R2Conditional;
          if (cond.etagMatches) headers.set("If-Match", `"${cond.etagMatches.replace(/^"|"$/gu, "")}"`);
          if (cond.etagDoesNotMatch) headers.set("If-None-Match", `"${cond.etagDoesNotMatch.replace(/^"|"$/gu, "")}"`);
          if (cond.uploadedAfter) headers.set("If-Modified-Since", cond.uploadedAfter.toUTCString());
          if (cond.uploadedBefore) headers.set("If-Unmodified-Since", cond.uploadedBefore.toUTCString());
        }
      }
      if (options?.range && "offset" in options.range && options.range.offset !== undefined) {
        const start = options.range.offset;
        const end = options.range.length !== undefined ? start + options.range.length - 1 : "";
        headers.set("Range", `bytes=${start}-${end}`);
      } else if (options?.range && "suffix" in options.range && options.range.suffix !== undefined) {
        headers.set("Range", `bytes=-${options.range.suffix}`);
      }
      const res = await fetch(`${origin}/${encodeKey(key)}`, {
        method: "GET",
        headers,
      });
      if (res.status === 404) {
        await res.body?.cancel();
        return null;
      }
      if (res.status === 304) {
        return buildMeta(key, res.headers) as unknown as R2Object;
      }
      if (!res.ok && res.status !== 206) {
        await res.body?.cancel();
        throw new Error(`Public R2 GET ${key} failed with ${res.status}`);
      }
      const meta = buildMeta(key, res.headers);
      return {
        ...meta,
        body: res.body!,
        get bodyUsed() {
          return res.bodyUsed;
        },
        arrayBuffer: () => res.arrayBuffer(),
        text: () => res.text(),
        json: <T>() => res.json() as Promise<T>,
        blob: () => res.blob(),
        bytes: () => res.bytes(),
      } as unknown as R2ObjectBody;
    },
    async list(): Promise<R2Objects> {
      return { objects: [], truncated: false, delimitedPrefixes: [] };
    },
    async put(): Promise<R2Object | null> {
      throw new Error("Read-only public R2 fallback");
    },
    async delete(): Promise<void> {
      throw new Error("Read-only public R2 fallback");
    },
    async createMultipartUpload(): Promise<R2MultipartUpload> {
      throw new Error("Read-only public R2 fallback");
    },
    resumeMultipartUpload(): R2MultipartUpload {
      throw new Error("Read-only public R2 fallback");
    },
  };
  return bucket as unknown as R2Bucket;
}

const DEFAULT_PUBLIC_BUCKET = createPublicR2Bucket("https://assets.siriustrack.site");

export function ensureAssetBucket<T extends { ASSET_BUCKET?: R2Bucket }>(env: T): T & { ASSET_BUCKET: R2Bucket } {
  if (env.ASSET_BUCKET) return env as T & { ASSET_BUCKET: R2Bucket };
  return { ...env, ASSET_BUCKET: DEFAULT_PUBLIC_BUCKET };
}

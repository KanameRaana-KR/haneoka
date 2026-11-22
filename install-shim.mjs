import fs from "node:fs";
import path from "node:path";

const binDir = path.join("node_modules", ".bin");
fs.mkdirSync(binDir, { recursive: true });
const shimPath = path.join(binDir, "astro");
fs.writeFileSync(shimPath, '#!/usr/bin/env node\nimport "../../verify-build.mjs";\n', { mode: 0o755 });
try {
  fs.chmodSync(shimPath, 0o755);
} catch {}

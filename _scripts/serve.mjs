/**
 * Servidor estático local para showcase de design system.
 *
 * Uso:
 *   node _scripts/serve.mjs <client-dir> [port]
 *
 * Default port: 3000.
 */

import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, resolve, relative, isAbsolute } from "node:path";

const argv = process.argv.slice(2);
if (argv.length < 1) {
  console.error("Uso: node _scripts/serve.mjs <client-dir> [port]");
  process.exit(1);
}

const root = resolve(argv[0]);
const port = parseInt(argv[1] ?? "3000", 10);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".js":   "application/javascript; charset=utf-8",
  ".mjs":  "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg":  "image/svg+xml",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2":"font/woff2",
  ".ttf":  "font/ttf",
  ".otf":  "font/otf",
  ".md":   "text/markdown; charset=utf-8",
};

const server = http.createServer(async (req, res) => {
  try {
    let url = decodeURIComponent(req.url.split("?")[0]);
    if (url === "/" || url.endsWith("/")) url += "index.html";
    const file = resolve(root, "." + url);
    const rel = relative(root, file);
    if (rel.startsWith("..") || isAbsolute(rel)) {
      res.writeHead(403); res.end("forbidden"); return;
    }
    const s = await stat(file);
    if (s.isDirectory()) {
      res.writeHead(302, { location: url + "/index.html" }); res.end(); return;
    }
    const buf = await readFile(file);
    const ext = extname(file).toLowerCase();
    res.writeHead(200, {
      "content-type": MIME[ext] ?? "application/octet-stream",
      "cache-control": "no-cache",
    });
    res.end(buf);
  } catch (e) {
    res.writeHead(404); res.end("not found: " + req.url);
  }
});

server.listen(port, () => {
  console.log(`[serve] http://localhost:${port}  ->  ${root}`);
});

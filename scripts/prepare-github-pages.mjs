import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDir = path.resolve(".output/public");
const basePath = "/M4HEALTHFACTS";

async function rewriteHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await rewriteHtml(filePath);
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith(".html")) continue;

    const html = await readFile(filePath, "utf8");
    const rewritten = html.replace(
      /\b(href|src|action)=(["'])\/(?!\/|M4HEALTHFACTS\/)/g,
      (_match, attribute, quote) => `${attribute}=${quote}${basePath}/`,
    );
    await writeFile(filePath, rewritten);
  }
}

await mkdir(outputDir, { recursive: true });
await rewriteHtml(outputDir);

// GitHub Pages serves this file for unknown paths; the router then resolves the URL.
await cp(path.join(outputDir, "index.html"), path.join(outputDir, "404.html"));
await writeFile(path.join(outputDir, ".nojekyll"), "");
console.log("GitHub Pages output prepared.");

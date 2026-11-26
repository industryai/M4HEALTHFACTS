// @lovable.dev/vite-tanstack-config already includes the TanStack Start and Nitro plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isStaticDeployment = isGitHubPages || process.env.CLOUDFLARE_PAGES === "true";
const githubPagesBasepath = "/M4HEALTHFACTS";

export default defineConfig({
  // GitHub Pages serves this repository below /M4HEALTHFACTS/.
  // Cloudflare Pages serves the project at the domain root.
  base: isGitHubPages ? `${githubPagesBasepath}/` : "/",
  tanstackStart: {
    server: { entry: "server" },
    router: {
      basepath: isGitHubPages ? githubPagesBasepath : "/",
    },
    // Both static hosts need pre-rendered route HTML. Only GitHub Pages needs
    // the repository-prefix rewrite handled by prepare-github-pages.mjs.
    ...(isStaticDeployment
      ? {
          prerender: {
            enabled: true,
            autoSubfolderIndex: true,
            autoStaticPathsDiscovery: true,
            crawlLinks: true,
            concurrency: 4,
            failOnError: true,
          },
        }
      : {}),
  },
});

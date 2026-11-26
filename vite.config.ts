// @lovable.dev/vite-tanstack-config already includes the TanStack Start and Nitro plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasepath = "/M4HEALTHFACTS";

export default defineConfig({
  // GitHub Pages serves this repository below /M4HEALTHFACTS/.
  base: isGitHubPages ? `${githubPagesBasepath}/` : "/",
  tanstackStart: {
    server: { entry: "server" },
    // TanStack Start overwrites the router basepath during client hydration
    // using this plugin-level setting. It must match router.tsx and Vite's base.
    router: {
      basepath: isGitHubPages ? githubPagesBasepath : "/",
    },
    // Generate the public routes as static HTML so GitHub Pages can serve them.
    ...(isGitHubPages
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

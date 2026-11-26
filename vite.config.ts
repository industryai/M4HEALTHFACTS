// @lovable.dev/vite-tanstack-config already includes the TanStack Start and Nitro plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  // GitHub Pages serves this repository below /M4HEALTHFACTS/.
  base: isGitHubPages ? "/M4HEALTHFACTS/" : "/",
  tanstackStart: {
    server: { entry: "server" },
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

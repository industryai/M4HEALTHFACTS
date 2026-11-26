// @lovable.dev/vite-tanstack-config provides TanStack Start and Nitro.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasepath = "/M4HEALTHFACTS";

export default defineConfig({
  // Cloudflare Pages serves this app at the domain root.
  // The repository prefix is only needed for an optional GitHub Pages build.
  base: isGitHubPages ? `${githubPagesBasepath}/` : "/",
  tanstackStart: {
    router: {
      basepath: isGitHubPages ? githubPagesBasepath : "/",
    },
    // Cloudflare Pages runs the TanStack/Nitro server worker directly.
    // Do not enable static prerendering there; it is not needed for SSR.
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

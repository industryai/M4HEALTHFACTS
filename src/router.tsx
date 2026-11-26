import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  // One client per request: a module-level QueryClient leaks cached data between SSR requests.
  const queryClient = new QueryClient();

  // Vite's BASE_URL is "/" on root-hosted deployments (Cloudflare Pages)
  // and "/M4HEALTHFACTS/" on the optional GitHub Pages project-site build.
  const basepath = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};

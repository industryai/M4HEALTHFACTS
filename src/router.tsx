import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  // One client per request: a module-level QueryClient leaks cached data between SSR requests.
  const queryClient = new QueryClient();

  // Keep this identical to tanstackStart.router.basepath in vite.config.ts.
  // Production builds are published below the GitHub Pages repository path;
  // local development continues to run from the domain root.
  const router = createRouter({
    routeTree,
    basepath: import.meta.env.PROD ? "/M4HEALTHFACTS" : "/",
    context: { queryClient },
    scrollRestoration: true,
    // Lets Query own freshness; set caching defaults on the QueryClient, not the router.
    defaultPreloadStaleTime: 0,
  });

  return router;
};

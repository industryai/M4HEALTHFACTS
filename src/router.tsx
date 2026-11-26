import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  // One client per request: a module-level QueryClient leaks cached data between SSR requests.
  const queryClient = new QueryClient();

  // Vite statically replaces import.meta.env.SSR in shared bundles. Detect the
  // browser at runtime so the client router keeps the GitHub Pages subpath,
  // while prerendering and server rendering continue to use the domain root.
  const basepath =
    typeof window !== "undefined"
      ? import.meta.env.BASE_URL.replace(/\/$/, "") || "/"
      : "/";

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    // Lets Query own freshness; set caching defaults on the QueryClient, not the router.
    defaultPreloadStaleTime: 0,
  });

  return router;
};

import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  // One client per request: a module-level QueryClient leaks cached data between SSR requests.
  const queryClient = new QueryClient();

  // The Lovable Vite wrapper leaves BASE_URL as "/" in the browser bundle,
  // even though the Pages build rewrites asset URLs to the repository prefix.
  // Detect the project-site prefix from the actual browser URL instead.
  const basepath =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/M4HEALTHFACTS")
      ? "/M4HEALTHFACTS"
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

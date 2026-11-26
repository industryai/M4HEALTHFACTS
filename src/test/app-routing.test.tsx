import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { articles } from "@/content/articles";
import { lexicon } from "@/content/lexicon";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches the homepage", () => {
    const matches = router.matchRoutes("/");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each([
    "/ernaehrung",
    "/bewegung-fitness",
    "/vitamine-naehrstoffe",
    "/gesundheitswissen",
    "/gesundheitslexikon",
    "/ratgeber/vitamin-d-grundlagen",
    "/ratgeber/magnesium-im-alltag",
    "/ratgeber/besser-schlafen-schlafhygiene",
    "/ratgeber/bewegung-im-alltag",
    "/ratgeber/abwehrkraefte-staerken",
    "/ratgeber/nahrungsergaenzungsmittel-sinnvoll",
    "/ratgeber/freie-zucker-ernaehrung",
    "/ratgeber/hausmittel-erkaeltung-was-hilft",
    "/ratgeber/gesundheitsvorsorge-check-up",
    "/ueber-uns",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/medizinischer-hinweis",
  ])("matches the content route %s", (path) => {
    const matches = router.matchRoutes(path);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("does not link lexicon entries to missing articles", () => {
    const articleSlugs = new Set(articles.map((article) => article.slug));
    for (const entry of lexicon) {
      if (entry.relatedArticle) {
        expect(articleSlugs.has(entry.relatedArticle), entry.term).toBe(true);
      }
    }
  });
});

export function formatDate(iso: string): string {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export const SITE_NAME = "M4healthfacts";

export function pageHead(title: string, description: string, path: string, type = "website") {
  const full = path === "/" ? title : `${title} | ${SITE_NAME}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
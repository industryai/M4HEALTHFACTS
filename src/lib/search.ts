import { articles } from "@/content/articles";
import { lexicon } from "@/content/lexicon";
import { getCategory } from "@/content/categories";
import type { Article, LexiconEntry } from "@/content/types";

export function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

export function searchArticles(q: string): Article[] {
  const n = normalize(q);
  if (!n) return [];
  const terms = n.split(/\s+/);
  return articles.filter((a) => {
    const hay = normalize(
      [a.title, a.intro, a.excerpt, a.tags.join(" "), getCategory(a.category).name, a.sections.map((s) => s.heading).join(" ")].join(" "),
    );
    return terms.every((t) => hay.includes(t));
  });
}

export function searchLexicon(q: string): LexiconEntry[] {
  const n = normalize(q);
  if (!n) return [];
  return lexicon.filter((e) => normalize(e.term + " " + e.definition).includes(n));
}
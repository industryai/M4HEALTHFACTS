export type CategorySlug =
  | "ernaehrung"
  | "vitamine-naehrstoffe"
  | "koerper-gesundheit"
  | "natur-hausmittel"
  | "schlaf-psyche"
  | "praevention";

export interface Category {
  slug: CategorySlug;
  name: string;
  short: string;
  description: string;
  icon: "apple" | "pill" | "heart" | "leaf" | "moon" | "shield";
}

export interface Source {
  title: string;
  publisher?: string;
  url?: string;
  accessed?: string;
}

/** Only set when a real, verifiable review exists. */
export interface ExpertReview {
  name: string;
  qualification: string;
  reviewedAt: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  category: CategorySlug;
  tags: string[];
  intro: string;
  excerpt: string;
  readingMinutes: number;
  publishedAt: string;
  updatedAt?: string;
  keyFacts: string[];
  sections: ArticleSection[];
  /** Empty array => "Quellen werden vor Veröffentlichung ergänzt" */
  sources: Source[];
  expertReview?: ExpertReview;
  popular?: boolean;
}

export interface LexiconEntry {
  term: string;
  slug: string;
  definition: string;
  relatedArticle?: string;
}
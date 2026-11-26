import type { Article, CategorySlug } from "./types";

// Example editorial content. Sources intentionally empty until verified.
export const articles: Article[] = [
  {
    slug: "vitamin-d-grundlagen",
    title: "Vitamin D: Was das „Sonnenvitamin“ im Körper macht",
    category: "vitamine-naehrstoffe",
    tags: ["Vitamin D", "Sonne", "Knochen"],
    intro: "Vitamin D kann der Körper mithilfe von Sonnenlicht in der Haut selbst bilden. Dieser Ratgeber erklärt Grundlagen und zeigt, welche Fragen Sie ärztlich klären können.",
    excerpt: "Warum der Körper Vitamin D selbst bilden kann und wann eine ärztliche Abklärung sinnvoll ist.",
    readingMinutes: 6,
    publishedAt: "2026-10-02",
    updatedAt: "2026-11-12",
    popular: true,
    keyFacts: [
      "Vitamin D kann in der Haut unter Einfluss von UVB-Strahlung gebildet werden.",
      "Ob ein Mangel vorliegt, lässt sich nur ärztlich feststellen.",
      "Präparate nicht ohne Rücksprache hoch dosiert einnehmen.",
    ],
    sections: [
      { id: "was-ist-vitamin-d", heading: "Was ist Vitamin D?", paragraphs: ["Vitamin D ist ein fettlösliches Vitamin, das am Calcium- und Phosphatstoffwechsel beteiligt ist."] },
      { id: "sonnenlicht", heading: "Die Rolle des Sonnenlichts", paragraphs: ["Wie viel gebildet wird, hängt u. a. von Jahreszeit, Tageszeit, Hauttyp und Alter ab. Sonnenschutz bleibt wichtig."] },
      { id: "abklaerung", heading: "Wann eine ärztliche Abklärung sinnvoll ist", paragraphs: ["Unspezifische Beschwerden haben viele Ursachen. Besprechen Sie einen vermuteten Mangel ärztlich."] },
    ],
    sources: [],
  },
  {
    slug: "magnesium-im-alltag",
    title: "Magnesium: Aufgaben, Quellen und häufige Fragen",
    category: "vitamine-naehrstoffe",
    tags: ["Magnesium", "Mineralstoffe"],
    intro: "Magnesium ist ein Mineralstoff, der an zahlreichen Vorgängen im Körper beteiligt ist.",
    excerpt: "Welche Lebensmittel Magnesium liefern und warum Krämpfe nicht automatisch auf einen Mangel hinweisen.",
    readingMinutes: 5,
    publishedAt: "2026-09-18",
    popular: true,
    keyFacts: ["Gute Quellen sind Vollkorn, Hülsenfrüchte, Nüsse und Samen.", "Muskelkrämpfe haben vielfältige Ursachen."],
    sections: [
      { id: "quellen", heading: "Natürliche Quellen", paragraphs: ["Eine abwechslungsreiche Ernährung liefert in der Regel Magnesium."], bullets: ["Vollkorngetreide", "Hülsenfrüchte", "Nüsse und Samen"] },
      { id: "ergaenzung", heading: "Nahrungsergänzung", paragraphs: ["Magnesium kann die Aufnahme einiger Medikamente beeinflussen – sprechen Sie die Einnahme mit Apotheke oder Arztpraxis ab."] },
    ],
    sources: [],
  },
  {
    slug: "besser-schlafen-schlafhygiene",
    title: "Besser schlafen: Grundlagen der Schlafhygiene",
    category: "schlaf-psyche",
    tags: ["Schlaf", "Routine"],
    intro: "Schlafhygiene beschreibt Gewohnheiten, die einen erholsamen Schlaf begünstigen können.",
    excerpt: "Regelmäßige Zeiten und ein ruhiges Schlafzimmer – alltagsnahe Anregungen.",
    readingMinutes: 6,
    publishedAt: "2026-10-20",
    popular: true,
    keyFacts: ["Regelmäßige Schlafzeiten unterstützen den Rhythmus.", "Anhaltende Schlafprobleme ärztlich abklären."],
    sections: [
      { id: "rhythmus", heading: "Ein fester Rhythmus", paragraphs: ["Möglichst gleichbleibende Zeiten können helfen, den Tag-Nacht-Rhythmus zu stabilisieren."] },
      { id: "hilfe", heading: "Wann Sie Hilfe suchen sollten", paragraphs: ["Halten Schlafprobleme über Wochen an, sprechen Sie mit Ihrer Hausarztpraxis."] },
    ],
    sources: [],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
export function articlesByCategory(cat: CategorySlug): Article[] {
  return articles.filter((a) => a.category === cat);
}
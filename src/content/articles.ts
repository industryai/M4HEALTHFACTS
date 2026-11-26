import type { Article, CategorySlug } from "./types";

// Redaktionelle Entwürfe mit Quellenhinweisen; vor Veröffentlichung fachlich gegenprüfen.
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
    sources: [
      {
        title: "Ausgewählte Fragen und Antworten zu Vitamin D",
        publisher: "Bundesinstitut für Risikobewertung (BfR)",
        url: "https://www.bfr.bund.de/veroeffentlichung/ausgewaehlte-fragen-und-antworten-zu-vitamin-d/",
        accessed: "2026-11-26",
      },
    ],
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
      { id: "ergaenzung", heading: "Nahrungsergänzung", paragraphs: ["Bestimmte Medikamente, darunter Diuretika und einige Antibiotika, können den Magnesiumhaushalt beeinflussen. Eine mögliche Ergänzung sollte mit ärztlichem Fachpersonal oder einer Apotheke abgestimmt werden."] },
    ],
    sources: [
      {
        title: "Ausgewählte Fragen und Antworten zu Magnesium",
        publisher: "Deutsche Gesellschaft für Ernährung (DGE)",
        url: "https://www.dge.de/gesunde-ernaehrung/faq/ausgewaehlte-fragen-und-antworten-zu-magnesium/",
        accessed: "2026-11-26",
      },
    ],
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
    sources: [
      {
        title: "Schlafstörungen",
        publisher: "gesund.bund.de – Bundesministerium für Gesundheit",
        url: "https://gesund.bund.de/schlafstoerungen",
        accessed: "2026-11-26",
      },
    ],
  },
  {
    slug: "bewegung-im-alltag",
    title: "Bewegung im Alltag: So findest du einen passenden Einstieg",
    category: "bewegung-fitness",
    tags: ["Bewegung", "Fitness", "Alltag", "Ausdauer", "Kraft"],
    intro: "Regelmäßige Bewegung muss nicht mit intensivem Training beginnen. Schon mehr Aktivität im Alltag kann Gesundheit und Wohlbefinden unterstützen.",
    excerpt: "Wie viel Bewegung empfohlen wird, warum Krafttraining dazugehört und wie kleine Schritte den Einstieg erleichtern.",
    readingMinutes: 6,
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    keyFacts: [
      "Jede zusätzliche Bewegung ist besser als gar keine.",
      "Für Erwachsene bis 65 Jahre werden mindestens 150 Minuten moderate oder 75 Minuten intensive Ausdaueraktivität pro Woche empfohlen.",
      "Zusätzlich sind muskelkräftigende Aktivitäten an mindestens zwei Tagen pro Woche sinnvoll.",
    ],
    sections: [
      {
        id: "warum-bewegung",
        heading: "Warum Bewegung wichtig ist",
        paragraphs: [
          "Regelmäßige körperliche Aktivität kann das Wohlbefinden und die Leistungsfähigkeit fördern. Sie trägt dazu bei, das Risiko für verschiedene chronische Erkrankungen zu senken.",
          "Bewegung muss dabei nicht ausschließlich Sport bedeuten: Gehen, Radfahren, aktive Wege und Bewegung im Haushalt zählen ebenfalls.",
        ],
      },
      {
        id: "empfehlungen",
        heading: "Wie viel Bewegung wird empfohlen?",
        paragraphs: [
          "Für Erwachsene bis 65 Jahre gelten als Orientierung mindestens 150 Minuten mäßig anstrengende, möglichst ausdauerorientierte Bewegung pro Woche oder mindestens 75 Minuten anstrengende Aktivität. Ergänzend werden Kräftigungsübungen an zwei Tagen pro Woche empfohlen.",
          "Für ältere Menschen und Personen mit gesundheitlichen Einschränkungen können zusätzliche Aspekte wie Gleichgewicht, Mobilität und individuelle Belastbarkeit wichtig sein.",
        ],
      },
      {
        id: "kleine-schritte",
        heading: "Mit kleinen Schritten beginnen",
        paragraphs: [
          "Wer bisher wenig aktiv war, kann mit kurzen, gut machbaren Einheiten starten und Umfang sowie Intensität nach und nach steigern. Beispielsweise lassen sich kurze Spaziergänge, Treppensteigen oder Wege mit dem Fahrrad in den Alltag integrieren.",
          "Längere Sitzphasen möglichst regelmäßig zu unterbrechen, ist ebenfalls ein sinnvoller Ansatz. Entscheidend ist eine Bewegungsform, die zur eigenen Situation passt und dauerhaft Freude macht.",
        ],
      },
      {
        id: "gesundheitliche-einschraenkungen",
        heading: "Bei Beschwerden oder Erkrankungen",
        paragraphs: [
          "Bei bestehenden Erkrankungen, körperlichen Einschränkungen oder Unsicherheit zur Belastbarkeit sollte vor einem neuen Trainingsprogramm ärztlicher Rat eingeholt werden. Die Empfehlungen sind allgemeine Orientierungswerte und kein individueller Trainingsplan.",
        ],
      },
    ],
    sources: [
      {
        title: "Gesund durch Bewegung",
        publisher: "gesund.bund.de – Bundesministerium für Gesundheit",
        url: "https://gesund.bund.de/gesund-durch-bewegung",
        accessed: "2026-11-26",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
export function articlesByCategory(cat: CategorySlug): Article[] {
  return articles.filter((a) => a.category === cat);
}
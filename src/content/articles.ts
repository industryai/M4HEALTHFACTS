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
  {
    slug: "abwehrkraefte-staerken",
    title: "Immunsystem stärken: Was im Alltag wirklich hilft",
    category: "koerper-gesundheit",
    tags: ["Immunsystem", "Abwehrkräfte", "Schlaf", "Ernährung", "Bewegung"],
    intro: "Viele Produkte versprechen ein starkes Immunsystem. Verlässliche Grundlagen sind jedoch vor allem ein gesunder Lebensstil und ein realistischer Blick auf Nahrungsergänzungsmittel.",
    excerpt: "Ernährung, Bewegung, Schlaf, Stressabbau und Impfungen: Welche Faktoren die körpereigene Abwehr unterstützen.",
    readingMinutes: 7,
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    keyFacts: [
      "Eine ausgewogene Ernährung, Bewegung und ausreichend Schlaf unterstützen die normale Immunfunktion.",
      "Für viele Präparate zur Stärkung der Abwehrkräfte fehlen verlässliche Wirksamkeitsnachweise.",
      "Impfungen bieten einen gezielten Schutz vor bestimmten Infektionskrankheiten.",
    ],
    sections: [
      {
        id: "aufgabe-immunsystem",
        heading: "Was macht das Immunsystem?",
        paragraphs: [
          "Das Immunsystem schützt den Körper vor Krankheitserregern und weiteren körperfremden Stoffen. Dazu gehören unter anderem bestimmte Bakterien und Viren.",
          "Die Abwehr besteht aus verschiedenen ineinandergreifenden Bestandteilen. Sie lässt sich nicht mit einem einzelnen Lebensmittel oder Präparat gezielt hochfahren.",
        ],
      },
      {
        id: "lebensstil",
        heading: "Welche Alltagsfaktoren unterstützen die Abwehr?",
        paragraphs: [
          "Eine ausgewogene Ernährung, regelmäßige Bewegung, ausreichend Schlaf und Möglichkeiten zum Stressabbau gehören zu den Lebensstilfaktoren, die eine gesunde Immunfunktion unterstützen können.",
          "Auch Aufenthalte im Freien und eine gute allgemeine Gesundheitsvorsorge spielen eine Rolle. Impfungen bieten darüber hinaus einen gezielten Schutz vor bestimmten ansteckenden Krankheiten.",
        ],
      },
      {
        id: "praeparate",
        heading: "Braucht man spezielle Präparate?",
        paragraphs: [
          "Das Angebot an Produkten zur Verbesserung der Abwehrkräfte ist groß. Für viele dieser Präparate gibt es jedoch keine verlässlichen Wirksamkeitsnachweise. Gesunde Erwachsene erhalten die erforderlichen Nährstoffe in der Regel über eine ausgewogene Ernährung.",
          "Bei bestimmten Erkrankungen oder einer nachgewiesenen Unterversorgung kann eine gezielte Ergänzung sinnvoll sein. Ob das im Einzelfall zutrifft, sollte medizinisch abgeklärt werden.",
        ],
      },
      {
        id: "realistische-erwartungen",
        heading: "Realistische Erwartungen",
        paragraphs: [
          "Ein gesunder Lebensstil kann die Abwehr unterstützen, bietet aber keinen vollständigen Schutz vor Infektionen. Bei anhaltenden Beschwerden oder konkreten gesundheitlichen Fragen ist eine ärztliche Einschätzung sinnvoll.",
        ],
      },
    ],
    sources: [
      {
        title: "So lassen sich Abwehrkräfte stärken",
        publisher: "gesund.bund.de – Bundesministerium für Gesundheit",
        url: "https://gesund.bund.de/abwehrkraefte-staerken",
        accessed: "2026-11-26",
      },
    ],
  },
  {
    slug: "nahrungsergaenzungsmittel-sinnvoll",
    title: "Nahrungsergänzungsmittel: Wann sind sie sinnvoll?",
    category: "vitamine-naehrstoffe",
    tags: ["Nahrungsergänzung", "Vitamine", "Mineralstoffe", "BfR"],
    intro: "Vitamine und Mineralstoffe sind wichtig. Daraus folgt aber nicht, dass hoch dosierte Präparate für alle Menschen einen zusätzlichen Nutzen haben.",
    excerpt: "Was Nahrungsergänzungsmittel sind, wann ein Bedarf entstehen kann und warum Dosierung und Wechselwirkungen wichtig sind.",
    readingMinutes: 7,
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    keyFacts: [
      "Nahrungsergänzungsmittel sind rechtlich Lebensmittel und keine Arzneimittel.",
      "Bei ausgewogener Ernährung sind zusätzliche Präparate für viele gesunde Menschen nicht erforderlich.",
      "Hoch dosierte Präparate können zu Überversorgung und Wechselwirkungen mit Arzneimitteln führen.",
    ],
    sections: [
      {
        id: "was-sind-nem",
        heading: "Was sind Nahrungsergänzungsmittel?",
        paragraphs: [
          "Nahrungsergänzungsmittel sind Lebensmittel, die die allgemeine Ernährung ergänzen sollen. Sie können beispielsweise Vitamine, Mineralstoffe, Spurenelemente, Fettsäuren, Pflanzen oder Kräuterextrakte in konzentrierter Form enthalten.",
          "Auch wenn sie als Kapseln, Tabletten oder Pulver angeboten werden, sind sie rechtlich keine Arzneimittel.",
        ],
      },
      {
        id: "wann-sinnvoll",
        heading: "Wann kann eine Ergänzung sinnvoll sein?",
        paragraphs: [
          "Eine Ergänzung kann in bestimmten Lebenssituationen oder bei einem erhöhten Risiko für eine unzureichende Versorgung sinnvoll sein. Beispiele können eine Schwangerschaft, eine einseitige Ernährung, bestimmte Erkrankungen oder Probleme bei der Nährstoffaufnahme sein.",
          "Ob tatsächlich ein Bedarf besteht, hängt von der individuellen Situation ab. Eine pauschale Empfehlung für alle Menschen wäre nicht sachgerecht.",
        ],
      },
      {
        id: "risiken",
        heading: "Welche Risiken gibt es?",
        paragraphs: [
          "Eine zusätzliche Zufuhr über den Bedarf hinaus bietet gut versorgten Menschen in der Regel keinen gesundheitlichen Zusatznutzen. Hoch dosierte oder langfristig eingenommene Präparate können dagegen das Risiko einer Überversorgung erhöhen.",
          "Auch Wechselwirkungen mit Arzneimitteln sind möglich. Wer regelmäßig Medikamente einnimmt oder eine chronische Erkrankung hat, sollte eine längerfristige Einnahme vorher ärztlich oder pharmazeutisch abklären.",
        ],
      },
      {
        id: "entscheidung",
        heading: "Vor der Einnahme prüfen",
        paragraphs: [
          "Entscheidend sind der tatsächliche Bedarf, die enthaltene Menge pro Tagesportion, weitere Präparate und mögliche Arzneimittelwechselwirkungen. Mehr ist nicht automatisch besser.",
        ],
      },
    ],
    sources: [
      {
        title: "Fragen und Antworten zu Nahrungsergänzungsmitteln",
        publisher: "Bundesinstitut für Risikobewertung (BfR)",
        url: "https://www.bfr.bund.de/fragen-und-antworten/thema/fragen-und-antworten-zu-nahrungsergaenzungsmitteln/",
        accessed: "2026-11-26",
      },
      {
        title: "Nutzen und Risiken von Mikronährstoffsupplementen im Alter",
        publisher: "Bundesinstitut für Risikobewertung (BfR)",
        url: "https://www.bfr.bund.de/fragen-und-antworten/thema/nutzen-und-risiken-von-mikronaehrstoffsupplementen-im-alter/",
        accessed: "2026-11-26",
      },
    ],
  },
  {
    slug: "freie-zucker-ernaehrung",
    title: "Zucker in der Ernährung: Freie Zucker richtig einordnen",
    category: "ernaehrung",
    tags: ["Zucker", "Ernährung", "Getränke", "DGE"],
    intro: "Nicht jeder Zucker in Lebensmitteln ist gleich einzuordnen. Fachgesellschaften unterscheiden unter anderem zwischen freien Zuckern und natürlich enthaltenen Zuckern in ganzen Lebensmitteln.",
    excerpt: "Was mit freien Zuckern gemeint ist, wo sie vorkommen und wie sich die Empfehlungen im Alltag umsetzen lassen.",
    readingMinutes: 6,
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    keyFacts: [
      "Die DGE empfiehlt, weniger als zehn Prozent der täglichen Energiezufuhr über freie Zucker aufzunehmen.",
      "Freie Zucker finden sich unter anderem in Süßigkeiten, Limonaden, Sirup und Fruchtsäften.",
      "Natürlich in ganzem Obst und ungesüßter Milch vorkommende Zucker zählen nicht zu den freien Zuckern.",
    ],
    sections: [
      {
        id: "freie-zucker",
        heading: "Was sind freie Zucker?",
        paragraphs: [
          "Als freie Zucker gelten unter anderem Zucker, der Lebensmitteln zugesetzt wird, sowie Zucker in Honig, Sirup und Fruchtsäften. Davon zu unterscheiden sind Zucker, die natürlicherweise in intaktem Obst und Gemüse oder in ungesüßter Milch vorkommen.",
        ],
      },
      {
        id: "empfehlung",
        heading: "Welche Menge wird empfohlen?",
        paragraphs: [
          "Die Deutsche Gesellschaft für Ernährung, die Deutsche Adipositas-Gesellschaft und die Deutsche Diabetes Gesellschaft empfehlen, die Zufuhr freier Zucker auf weniger als zehn Prozent der Gesamtenergiezufuhr zu begrenzen.",
          "Das ist eine Orientierung für die gesamte Ernährung und keine Aufforderung, Obst oder ungesüßte Milchprodukte zu meiden.",
        ],
      },
      {
        id: "alltag",
        heading: "Wie lässt sich die Empfehlung umsetzen?",
        paragraphs: [
          "Ein praktischer Ansatz ist, zuckerhaltige Getränke seltener zu trinken und bei verpackten Lebensmitteln die Zutatenliste zu beachten. Wasser und ungesüßte Getränke können im Alltag eine einfache Alternative sein.",
          "Es geht nicht um einzelne Lebensmittel oder Verbote, sondern um das Ernährungsmuster über längere Zeit.",
        ],
      },
    ],
    sources: [
      {
        title: "Quantitative Empfehlung zur Zuckerzufuhr in Deutschland",
        publisher: "Deutsche Gesellschaft für Ernährung (DGE), Deutsche Adipositas-Gesellschaft (DAG) und Deutsche Diabetes Gesellschaft (DDG)",
        url: "https://www.dge.de/wissenschaft/stellungnahmen-und-positionspapiere/stellungnahmen/quantitative-empfehlung-zur-zuckerzufuhr-in-deutschland/",
        accessed: "2026-11-26",
      },
    ],
  },
  {
    slug: "hausmittel-erkaeltung-was-hilft",
    title: "Hausmittel bei Erkältung: Was ist belegt?",
    category: "natur-hausmittel",
    tags: ["Hausmittel", "Erkältung", "Kräutertee", "Gesundheitswissen"],
    intro: "Bei Erkältungen greifen viele Menschen zu Tee, Honig oder anderen Hausmitteln. Wichtig ist die Unterscheidung zwischen angenehmer Linderung und einem nachgewiesenen Einfluss auf die Krankheitsdauer.",
    excerpt: "Warum Hausmittel Beschwerden begleiten können, aber nicht automatisch Viren bekämpfen oder die Genesung beschleunigen.",
    readingMinutes: 6,
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    keyFacts: [
      "Hausmittel können als angenehm empfunden werden, ihre Wirkung ist aber je nach Anwendung unterschiedlich gut untersucht.",
      "Für viele Hausmittel ist nicht wissenschaftlich belegt, dass sie eine Grippe verkürzen oder die Ursache bekämpfen.",
      "Antibiotika wirken gegen Bakterien, nicht gegen Erkältungs- oder Grippeviren.",
    ],
    sections: [
      {
        id: "hausmittel-einordnen",
        heading: "Was können Hausmittel leisten?",
        paragraphs: [
          "Warme Getränke oder eine Suppe können als wohltuend empfunden werden und dabei helfen, ausreichend Flüssigkeit aufzunehmen. Daraus lässt sich jedoch nicht ableiten, dass sie die Erkältungsviren bekämpfen oder die Krankheitsdauer verkürzen.",
          "Bei Grippe ist für viele verbreitete Hausmittel wie Hühnerbrühe oder Kräutertee nicht wissenschaftlich belegt, dass sie die Erkrankung selbst lindern. Es ist daher sinnvoll, zwischen persönlichem Wohlbefinden und nachgewiesener medizinischer Wirkung zu unterscheiden.",
        ],
      },
      {
        id: "pflanzen-und-praep",
        heading: "Pflanzen, Tees und Präparate",
        paragraphs: [
          "Pflanzliche Mittel werden bei Erkältungsbeschwerden häufig eingesetzt. Für einzelne Präparate gibt es Hinweise auf eine Linderung bestimmter Symptome, die Datenlage ist jedoch je nach Wirkstoff und Anwendung unterschiedlich.",
          "Auch Vitaminpräparate oder frei verkäufliche Produkte beschleunigen die Genesung nicht automatisch. Wer regelmäßig Medikamente einnimmt, schwanger ist oder Vorerkrankungen hat, sollte die Anwendung von Präparaten mit medizinischem Fachpersonal besprechen.",
        ],
      },
      {
        id: "antibiotika",
        heading: "Warum natürliche Mittel keine Antibiotika ersetzen",
        paragraphs: [
          "Antibiotika sind Arzneimittel gegen bakterielle Infektionen. Erkältungen und Grippe werden in der Regel durch Viren verursacht; Antibiotika helfen dagegen nicht.",
          "Die Bezeichnung „natürliches Antibiotikum“ ist für Lebensmittel oder Hausmittel deshalb irreführend. Ein Hausmittel sollte eine notwendige medizinische Behandlung nicht ersetzen.",
        ],
      },
      {
        id: "wann-hilfe",
        heading: "Wann ärztlicher Rat wichtig ist",
        paragraphs: [
          "Wenn Beschwerden ungewöhnlich stark sind, sich deutlich verschlimmern oder Unsicherheit über die Ursache besteht, sollte eine ärztliche Einschätzung eingeholt werden. Hausmittel sind kein Ersatz für Diagnostik oder Behandlung.",
        ],
      },
    ],
    sources: [
      {
        title: "Grippe: Symptome, Behandlung, Vorbeugung",
        publisher: "gesund.bund.de – Bundesministerium für Gesundheit",
        url: "https://gesund.bund.de/grippe-influenza",
        accessed: "2026-11-26",
      },
      {
        title: "Erkältung: Symptome und Behandlung",
        publisher: "gesund.bund.de – Bundesministerium für Gesundheit",
        url: "https://gesund.bund.de/erkaeltung",
        accessed: "2026-11-26",
      },
    ],
  },
  {
    slug: "gesundheitsvorsorge-check-up",
    title: "Gesundheitsvorsorge: Was bringt der Check-up?",
    category: "praevention",
    tags: ["Prävention", "Vorsorge", "Check-up", "Früherkennung"],
    intro: "Vorsorgeuntersuchungen können bestimmte Erkrankungsrisiken frühzeitig sichtbar machen. Welche Angebote sinnvoll sind, hängt unter anderem von Alter, Geschlecht und persönlicher Situation ab.",
    excerpt: "Welche Gesundheits-Check-ups gesetzlich Versicherte nutzen können und warum Vorsorge nicht mit Diagnostik bei Beschwerden verwechselt werden sollte.",
    readingMinutes: 7,
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    keyFacts: [
      "Gesetzlich Versicherte können den Gesundheits-Check-up zwischen 18 und 34 Jahren einmalig und ab 35 Jahren alle drei Jahre nutzen.",
      "Der Check-up dient unter anderem dazu, Risiken für Herz-Kreislauf-Erkrankungen und Typ-2-Diabetes frühzeitig zu erkennen.",
      "Früherkennungsuntersuchungen können Nutzen und Risiken haben; die Teilnahme ist eine persönliche Entscheidung.",
    ],
    sections: [
      {
        id: "check-up",
        heading: "Was ist der Gesundheits-Check-up?",
        paragraphs: [
          "Der Gesundheits-Check-up ist ein Vorsorgeangebot der gesetzlichen Krankenversicherung. Versicherte können ihn zwischen 18 und 34 Jahren einmalig und ab 35 Jahren regelmäßig alle drei Jahre in Anspruch nehmen.",
          "Ziel ist es unter anderem, Risiken für Herz-Kreislauf-Erkrankungen und Typ-2-Diabetes frühzeitig zu erkennen. Zum Angebot gehören je nach Situation ein ärztliches Gespräch, körperliche Untersuchungen und Laboruntersuchungen.",
        ],
      },
      {
        id: "vorsorge-und-diagnostik",
        heading: "Vorsorge ist nicht dasselbe wie Diagnostik",
        paragraphs: [
          "Vorsorgeuntersuchungen richten sich an Menschen ohne konkrete Beschwerden und sollen bestimmte Risiken oder Erkrankungen früh erkennen. Diagnostische Untersuchungen werden dagegen eingesetzt, wenn Beschwerden oder ein konkreter Krankheitsverdacht bestehen.",
          "Bei gesundheitlichen Beschwerden sollte man daher nicht auf den nächsten Vorsorgetermin warten, sondern medizinischen Rat einholen.",
        ],
      },
      {
        id: "nutzen-risiken",
        heading: "Nutzen und mögliche Nachteile abwägen",
        paragraphs: [
          "Früherkennungsuntersuchungen können helfen, Krankheiten oder Vorstufen frühzeitig zu entdecken. Kein Test ist jedoch hundertprozentig zuverlässig; es kann auch zu unklaren Befunden oder weiteren Untersuchungen kommen.",
          "Welche Untersuchungen für die eigene Situation angeboten werden, lässt sich mit der Hausarztpraxis besprechen. Die Teilnahme an Früherkennungsangeboten ist grundsätzlich freiwillig.",
        ],
      },
    ],
    sources: [
      {
        title: "Gesundheits-Check-up für Erwachsene",
        publisher: "gesund.bund.de – Bundesministerium für Gesundheit",
        url: "https://gesund.bund.de/gesundheits-check-up-fuer-erwachsene",
        accessed: "2026-11-26",
      },
      {
        title: "Früherkennung von Krankheiten",
        publisher: "gesund.bund.de – Bundesministerium für Gesundheit",
        url: "https://gesund.bund.de/themen/vorsorge-und-frueherkennung",
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
import type { Article, CategorySlug } from "./types";

// Redaktionelle Entwürfe mit Quellenhinweisen; vor Veröffentlichung fachlich gegenprüfen.
export const articles: Article[] = [
  {
    slug: "vitamin-d-grundlagen",
    title: "Vitamin D3: Aufgaben, Versorgung und sichere Anwendung",
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
      { id: "was-ist-vitamin-d", heading: "Was ist Vitamin D?", paragraphs: ["Vitamin D ist ein fettlösliches Vitamin, das unter anderem die Aufnahme von Calcium und Phosphat unterstützt und damit für Knochen und Muskelfunktion wichtig ist. Es nimmt unter den Vitaminen eine besondere Rolle ein, weil der Körper es unter geeigneten Bedingungen selbst in der Haut bilden kann.", "Vitamin D3 (Cholecalciferol) entsteht in der Haut durch UVB-Strahlung. Vitamin D2 (Ergocalciferol) kommt vor allem in bestimmten Pflanzen und Pilzen vor. Beide Formen können zur Versorgung beitragen."] },
      { id: "sonnenlicht", heading: "Die Rolle des Sonnenlichts", paragraphs: ["Wie viel Vitamin D die Haut bildet, hängt unter anderem von Jahreszeit, Tageszeit, geografischer Lage, Hauttyp, Alter und Kleidung ab. In Deutschland ist die körpereigene Bildung in den Wintermonaten deutlich eingeschränkt.", "Sonnenbrände sollten unbedingt vermieden werden. Die Haut gezielt ungeschützt der Sonne auszusetzen, ist keine sichere Methode zur Vitamin-D-Versorgung."] },
      { id: "lebensmittel", heading: "Welche Lebensmittel enthalten Vitamin D?", paragraphs: ["Nur wenige Lebensmittel liefern nennenswerte Mengen Vitamin D. Dazu zählen fettreiche Fische wie Hering und Lachs, außerdem Eigelb und einige Pilze. Lebensmittel allein decken den Bedarf nicht bei allen Menschen gleich gut.", "Eine abwechslungsreiche Ernährung bleibt wichtig, sollte aber nicht mit einer garantierten ausreichenden Vitamin-D-Versorgung gleichgesetzt werden."] },
      { id: "mangel", heading: "Vitamin-D-Mangel: Symptome und Abklärung", paragraphs: ["Ein ausgeprägter Mangel kann die Knochenmineralisierung beeinträchtigen. Müdigkeit, Muskelschmerzen oder allgemeines Unwohlsein sind dagegen unspezifisch und können viele Ursachen haben.", "Ob ein Mangel vorliegt, lässt sich nicht zuverlässig anhand einzelner Symptome feststellen. Eine Blutuntersuchung ist nicht für jede gesunde Person routinemäßig erforderlich; ob sie sinnvoll ist, sollte anhand von Risikofaktoren und Beschwerden ärztlich entschieden werden."] },
      { id: "supplemente", heading: "Vitamin-D3-Präparate: Wann können sie sinnvoll sein?", paragraphs: ["Eine Ergänzung kann in bestimmten Situationen sinnvoll sein, etwa wenn die körpereigene Bildung langfristig nicht ausreicht oder ein erhöhtes Risiko besteht. Die Entscheidung sollte sich an der persönlichen Situation und medizinischen Einschätzung orientieren.", "Hoch dosierte Einnahmen oder große Einzelgaben sind nicht automatisch besser. Zu viel Vitamin D kann zu erhöhten Calciumwerten und gesundheitlichen Problemen führen. Nehmen Sie hoch dosierte Präparate nicht eigenständig ein und kombinieren Sie mehrere Produkte nicht unbesehen."] },
      { id: "sicherheit", heading: "Sicherheit und Wechselwirkungen", paragraphs: ["Bei bestimmten Erkrankungen, etwa Störungen des Calciumstoffwechsels oder Nierenerkrankungen, ist besondere Vorsicht erforderlich. Auch Medikamente können den Vitamin-D-Stoffwechsel beeinflussen.", "Informieren Sie ärztliches Fachpersonal über alle Präparate, die Sie verwenden. Die BfR weist zudem darauf hin, dass Nahrungsergänzungsmittel teils sehr hohe Vitamin-D-Gehalte enthalten können und dass hoch dosierte Bolusgaben mit Risiken verbunden sein können."] },
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
      { id: "aufgaben", heading: "Welche Aufgaben hat Magnesium?", paragraphs: ["Magnesium ist ein essenzieller Mineralstoff und an zahlreichen enzymatischen Prozessen beteiligt. Es spielt unter anderem eine Rolle bei der normalen Funktion von Muskeln und Nerven, beim Energiestoffwechsel und beim Erhalt normaler Knochen.", "Der Körper kann Magnesium nicht selbst herstellen. Es muss regelmäßig über Lebensmittel aufgenommen werden."] },
      { id: "quellen", heading: "Natürliche Magnesiumquellen", paragraphs: ["Gute Quellen sind pflanzliche Lebensmittel, insbesondere Vollkornprodukte, Hülsenfrüchte, Nüsse und Samen. Auch grünes Gemüse und einige Mineralwässer können zur Aufnahme beitragen."], bullets: ["Vollkorngetreide und Haferflocken", "Bohnen, Linsen und Erbsen", "Mandeln, Cashewkerne und Kürbiskerne", "Grünes Blattgemüse"] },
      { id: "bedarf", heading: "Bedarf und mögliche Unterversorgung", paragraphs: ["Der Magnesiumbedarf hängt unter anderem von Alter und Geschlecht ab. Eine abwechslungsreiche Ernährung deckt den Bedarf bei vielen Menschen. Bestimmte Erkrankungen, chronische Magen-Darm-Beschwerden oder Medikamente können die Versorgung beeinflussen.", "Ein tatsächlicher Magnesiummangel kann sich unter anderem durch neuromuskuläre Beschwerden bemerkbar machen. Muskelkrämpfe allein beweisen jedoch keinen Mangel und können viele andere Ursachen haben."] },
      { id: "supplemente", heading: "Magnesium als Nahrungsergänzung", paragraphs: ["Präparate enthalten unterschiedliche Magnesiumverbindungen, zum Beispiel Citrat oder Oxid. Die Aufnahme und Verträglichkeit können sich unterscheiden. Ein Supplement ist vor allem dann zu erwägen, wenn ein Bedarf nicht ausreichend über die Ernährung gedeckt werden kann oder eine medizinische Indikation besteht.", "Mehr Magnesium bedeutet nicht automatisch mehr Nutzen. Hohe Mengen aus Präparaten können Durchfall und Bauchbeschwerden verursachen. Bei eingeschränkter Nierenfunktion kann sich Magnesium im Körper anreichern und gefährlich werden."] },
      { id: "wechselwirkungen", heading: "Wechselwirkungen und Vorsicht", paragraphs: ["Magnesium kann die Aufnahme bestimmter Arzneimittel beeinträchtigen, darunter einige Antibiotika und Bisphosphonate. Zwischen Einnahmen kann deshalb ein zeitlicher Abstand erforderlich sein; die genaue Regel hängt vom Medikament ab.", "Bestimmte Medikamente, darunter Diuretika und einige Antibiotika, können den Magnesiumhaushalt beeinflussen. Stimmen Sie die Einnahme eines Präparats bei regelmäßiger Medikation mit einer Arztpraxis oder Apotheke ab."] },
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

  {
    slug: "nahrungsergaenzung-wirkung-risiken",
    title: "Nahrungsergänzung: Was steckt wirklich dahinter?",
    category: "vitamine-naehrstoffe",
    tags: ["Nahrungsergänzung", "Schwarzkümmelöl", "Astaxanthin", "Kurkuma", "Ashwagandha", "Vitamin D", "Magnesium"],
    intro: "Schwarzkümmelöl, Astaxanthin, Kurkuma, MSM, Cholin oder Ashwagandha werden online häufig mit großen Gesundheitsversprechen beworben. Was sich daraus tatsächlich ableiten lässt, hängt vom einzelnen Stoff, der Dosierung und der Studienlage ab.",
    excerpt: "Ein sachlicher Überblick über häufig genannte Pflanzenstoffe, Vitamine und Mineralstoffe – einschließlich möglicher Risiken und Wechselwirkungen.",
    readingMinutes: 8,
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    popular: true,
    keyFacts: [
      "Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene Ernährung oder eine medizinische Behandlung.",
      "Ein zusätzlicher Nutzen ist vor allem dann plausibel, wenn tatsächlich eine Unterversorgung oder ein erhöhter Bedarf besteht.",
      "Hoch dosierte Präparate und Pflanzenextrakte können Nebenwirkungen oder Wechselwirkungen mit Medikamenten haben."
    ],
    sections: [
      { id: "was-ist-das", heading: "Was Nahrungsergänzung leisten kann – und was nicht", paragraphs: [
        "Nahrungsergänzungsmittel liefern konzentrierte Nährstoffe oder andere Stoffe, etwa Vitamine, Mineralstoffe, Fettsäuren oder Pflanzenextrakte. Sie sind Lebensmittel und keine zugelassenen Arzneimittel zur Behandlung von Krankheiten.",
        "Ob ein Präparat sinnvoll ist, lässt sich nicht allein aus einem Social-Media-Video oder einer Zutatenliste ableiten. Entscheidend sind unter anderem Ernährungsweise, Lebenssituation, Erkrankungen, Medikamente und die tatsächliche Versorgung."
      ] },
      { id: "haeufige-stoffe", heading: "Häufig genannte Stoffe im Überblick", paragraphs: [
        "Vitamin D trägt unter anderem zur normalen Funktion des Knochenstoffwechsels bei. Eine Ergänzung kann in bestimmten Situationen sinnvoll sein; eine pauschale Hochdosierung ist jedoch nicht für alle Menschen angezeigt.",
        "Magnesium ist an vielen Körperfunktionen beteiligt. Gute Quellen sind beispielsweise Vollkornprodukte, Hülsenfrüchte, Nüsse und Samen. Muskelkrämpfe allein beweisen keinen Magnesiummangel.",
        "Kurkuma beziehungsweise Curcumin, Schwarzkümmelöl, Astaxanthin, MSM und Cholin werden für unterschiedliche Zwecke vermarktet. Für viele der online verbreiteten Krankheits- und Heilversprechen reicht die verfügbare Evidenz nicht aus, um eine verlässliche Wirkung zu bestätigen.",
        "Ashwagandha wird unter anderem im Zusammenhang mit Stress und Schlaf untersucht. Die Studien verwenden unterschiedliche Präparate; Langzeitdaten fehlen. Es gibt zudem Hinweise auf mögliche Auswirkungen auf Leber und Schilddrüse sowie Wechselwirkungen mit Medikamenten."
      ] },
      { id: "risiken", heading: "Risiken, Dosierung und Wechselwirkungen", paragraphs: [
        "Mehr ist nicht automatisch besser. Eine langfristige Überversorgung mit Vitaminen und Mineralstoffen kann gesundheitliche Risiken bergen. Nahrungsergänzungsmittel können außerdem die Wirkung von Arzneimitteln abschwächen oder verstärken.",
        "Besondere Vorsicht ist bei chronischen Erkrankungen, Schwangerschaft, Stillzeit, Leber- oder Schilddrüsenerkrankungen und regelmäßiger Medikamenteneinnahme sinnvoll. Besprechen Sie die Einnahme und Dosierung mit medizinischem Fachpersonal oder einer Apotheke."
      ] },
      { id: "video-einordnung", heading: "Einordnung der Aussagen aus dem Video", paragraphs: [
        "Die im Short gezeigte Liste ist ein Themenüberblick, aber kein Nachweis dafür, dass die genannten Stoffe Krankheiten verhindern, heilen oder Medikamente ersetzen. Die Abkürzung „WPO 3,5 %“ ist im Screenshot nicht eindeutig erklärt und wird deshalb nicht als Wirkstoff oder Anwendungsempfehlung übernommen.",
        "Verwenden Sie keine unbekannten Substanzen oder Produkte aufgrund einer Kurzvideo-Aussage. Bei Beschwerden oder einer bestehenden Diagnose gehört die Behandlung in ärztliche Hände."
      ] }
    ],
    sources: [
      { title: "Fragen und Antworten zu Nahrungsergänzungsmitteln", publisher: "Bundesinstitut für Risikobewertung (BfR)", url: "https://www.bfr.bund.de/fragen-und-antworten/thema/fragen-und-antworten-zu-nahrungsergaenzungsmitteln/", accessed: "2026-11-26" },
      { title: "Ashwagandha: Is it helpful for stress, anxiety, or sleep?", publisher: "NIH Office of Dietary Supplements", url: "https://ods.od.nih.gov/factsheets/Ashwagandha-HealthProfessional/", accessed: "2026-11-26" },
      { title: "Turmeric: Usefulness and Safety", publisher: "National Center for Complementary and Integrative Health (NCCIH)", url: "https://www.nccih.nih.gov/health/turmeric", accessed: "2026-11-26" },
      { title: "Vitamin D – Fact Sheet for Health Professionals", publisher: "NIH Office of Dietary Supplements", url: "https://ods.od.nih.gov/factsheets/VITAMIND-HealthProfessional/", accessed: "2026-11-26" }
    ]
  },
  {
    slug: "lebensmittel-organe-ernaehrung",
    title: "Lebensmittel und Organe: Was Ernährung wirklich bewirken kann",
    category: "ernaehrung",
    tags: ["Ernährung", "Leber", "Nieren", "Darm", "Gehirn", "Lebensmittel"],
    intro: "Rote Bete für die Leber, Blaubeeren fürs Gehirn oder Gurken für die Nieren: Solche Zuordnungen sind in sozialen Medien beliebt. Lebensmittel liefern wichtige Nährstoffe – sie reinigen einzelne Organe aber nicht gezielt.",
    excerpt: "Welche Nährstoffe in Gemüse, Obst, Nüssen und Kräutern stecken und warum der Körper keine Detox-Lebensmittelliste braucht.",
    readingMinutes: 7,
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    popular: true,
    keyFacts: [
      "Leber und Nieren übernehmen zentrale Aufgaben im Stoffwechsel und bei der Ausscheidung von Abbauprodukten.",
      "Kein einzelnes Lebensmittel „reinigt“ ein bestimmtes Organ.",
      "Eine abwechslungsreiche Ernährung unterstützt die allgemeine Gesundheit besser als starre Detox-Versprechen."
    ],
    sections: [
      { id: "organfunktionen", heading: "Wie Leber und Nieren tatsächlich arbeiten", paragraphs: [
        "Die Leber verarbeitet Nährstoffe, baut verschiedene Stoffe um und übernimmt wichtige Aufgaben im Stoffwechsel. Die Nieren filtern das Blut, bilden Urin und regulieren unter anderem Wasser- und Mineralstoffhaushalt.",
        "Diese Organe arbeiten kontinuierlich. Spezielle Lebensmittel können ihre Aufgaben nicht wie eine Reinigungskur übernehmen."
      ] },
      { id: "lebensmittel", heading: "Was die Lebensmittel auf der Grafik beitragen", paragraphs: [
        "Rote Bete, Granatapfel, Knoblauch, Blaubeeren, Walnüsse, Karotten, grünes Gemüse, Beeren, Zitrusfrüchte, Ananas und Ingwer können Teil einer abwechslungsreichen Ernährung sein. Sie liefern je nach Lebensmittel Ballaststoffe, Vitamine, Mineralstoffe und sekundäre Pflanzenstoffe.",
        "Die Nährstoffe wirken nicht exklusiv auf das Organ, neben dem sie in einer Grafik abgebildet sind. Eine Karotte ist beispielsweise nicht nur für die Augen relevant und eine Walnuss nicht ausschließlich für das Gehirn."
      ] },
      { id: "alltag", heading: "Was im Alltag sinnvoll ist", paragraphs: [
        "Setzen Sie auf Vielfalt: Gemüse und Obst in unterschiedlichen Farben, Vollkornprodukte, Hülsenfrüchte, Nüsse und passende Eiweißquellen. Trinken Sie ausreichend und begrenzen Sie Alkohol. Welche Ernährung bei einer bestehenden Leber- oder Nierenerkrankung geeignet ist, muss individuell abgestimmt werden.",
        "Sogenannte Detox-Kuren, extreme Safttage oder hoch dosierte Präparate sind keine notwendige Organreinigung und können je nach Situation sogar ungeeignet sein."
      ] },
      { id: "warnzeichen", heading: "Wann ärztlicher Rat wichtig ist", paragraphs: [
        "Anhaltende Beschwerden, auffällige Laborwerte oder bekannte Erkrankungen von Leber, Nieren oder Darm sollten medizinisch abgeklärt werden. Versuchen Sie nicht, solche Probleme mit einzelnen Lebensmitteln oder Nahrungsergänzungsmitteln selbst zu behandeln."
      ] }
    ],
    sources: [
      { title: "Hepatorenales Syndrom – Aufgaben von Leber und Nieren", publisher: "gesund.bund.de – Bundesministerium für Gesundheit", url: "https://gesund.bund.de/icd-code-suche/k76-7", accessed: "2026-11-26" },
      { title: "Stärkung der Abwehrkräfte", publisher: "gesund.bund.de – Bundesministerium für Gesundheit", url: "https://gesund.bund.de/abwehrkraefte-staerken", accessed: "2026-11-26" },
      { title: "Fragen und Antworten zu Nahrungsergänzungsmitteln", publisher: "Bundesinstitut für Risikobewertung (BfR)", url: "https://www.bfr.bund.de/fragen-und-antworten/thema/fragen-und-antworten-zu-nahrungsergaenzungsmitteln/", accessed: "2026-11-26" }
    ]
  },
  {
    slug: "koerpersignale-symptome-einordnen",
    title: "16 Körpersignale: Mögliche Ursachen richtig einordnen",
    category: "koerper-gesundheit",
    tags: ["Symptome", "Körpersignale", "Müdigkeit", "Kribbeln", "Schlaf", "Gesundheit"],
    intro: "Kribbeln, Müdigkeit, Nachtschweiß oder Muskelkrämpfe können viele Ursachen haben. Eine Symptomliste aus dem Internet kann Hinweise geben, aber keine Diagnose stellen.",
    excerpt: "Von kalten Händen bis Ohrgeräuschen: Warum einzelne Symptome nicht automatisch auf einen bestimmten Mangel oder eine Erkrankung hinweisen.",
    readingMinutes: 9,
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    popular: true,
    keyFacts: [
      "Ein Symptom kann unterschiedliche Ursachen haben – von harmlosen Auslösern bis zu behandlungsbedürftigen Erkrankungen.",
      "Einzelne Beschwerden beweisen keinen Vitamin- oder Mineralstoffmangel.",
      "Neue, starke, anhaltende oder zunehmende Symptome sollten medizinisch abgeklärt werden."
    ],
    sections: [
      { id: "signale", heading: "16 Beispiele – und warum sie keine Diagnose sind", paragraphs: [
        "1. Kribbelnde Hände können beispielsweise durch Druck auf Nerven, eine ungünstige Haltung oder Stoffwechsel- und Nervenerkrankungen entstehen. 2. Müdigkeit trotz Schlaf kann mit Schlafqualität, Stress, Medikamenten oder körperlichen Ursachen zusammenhängen. 3. Ein wahrgenommener Brandgeruch ohne erkennbare Quelle kann eine Riechstörung sein und sollte bei wiederholtem Auftreten abgeklärt werden.",
        "4. Bitterer Geschmack kann unter anderem mit Mundgesundheit, Reflux oder Medikamenten zusammenhängen. 5. Bewegliche Punkte im Sichtfeld sind häufig harmlose Glaskörpertrübungen; plötzlich viele neue Punkte, Lichtblitze oder ein Schatten wie ein Vorhang sind jedoch ein augenärztlicher Notfall. 6. Unruhige Beine am Abend können zu einem Restless-Legs-Syndrom passen, das unter anderem mit dem Eisenstoffwechsel zusammenhängen kann.",
        "7. Zähneknirschen kann mit Stress, Schlaf oder anderen Faktoren verbunden sein. 8. Taube Finger können durch Nervenkompression, etwa am Handgelenk, entstehen. 9. Nachtschweiß kann viele Ursachen haben, darunter Raumtemperatur, Medikamente, Infekte oder hormonelle Veränderungen.",
        "10. Frühes Erwachen kann bei Stress, Schlafstörungen oder psychischen Belastungen auftreten. 11. Ohrgeräusche (Tinnitus) können unter anderem mit Lärm oder Hörveränderungen zusammenhängen. 12. Muskelkrämpfe können durch Belastung, Medikamente oder verschiedene körperliche Faktoren begünstigt werden – nicht nur durch Magnesiummangel.",
        "13. Juckende Kopfhaut kann etwa durch Schuppen, Ekzeme oder andere Hauterkrankungen entstehen. 14. Kalte Hände können eine normale Reaktion auf Kälte sein, aber auch bei Durchblutungs- oder Schilddrüsenproblemen vorkommen. 15. Wortfindungsprobleme können bei Müdigkeit und Stress auftreten, haben aber auch andere mögliche Ursachen. 16. Häufiges nächtliches Schwitzen zusammen mit Fieber, ungewolltem Gewichtsverlust oder deutlicher Leistungsminderung gehört ärztlich abgeklärt."
      ] },
      { id: "beobachten", heading: "Was Sie sinnvoll beobachten können", paragraphs: [
        "Notieren Sie, wann ein Symptom auftritt, wie lange es anhält, wodurch es besser oder schlechter wird und ob weitere Beschwerden dazukommen. Halten Sie auch neue Medikamente oder Nahrungsergänzungsmittel fest. Diese Informationen helfen bei einem Arztgespräch.",
        "Versuchen Sie nicht, aus einer einzelnen Grafik eine Selbstdiagnose abzuleiten oder auf Verdacht hoch dosierte Vitamine und Mineralstoffe einzunehmen."
      ] },
      { id: "sofort-hilfe", heading: "Wann Sie nicht abwarten sollten", paragraphs: [
        "Bei plötzlich auftretenden Lähmungen, Sprach- oder Sehstörungen, starken Brustschmerzen, schwerer Atemnot, Bewusstseinsstörungen oder einem plötzlich einsetzenden ungewöhnlich starken Kopfschmerz ist sofort medizinische Hilfe erforderlich. Bei akuten Notfällen wählen Sie 112.",
        "Auch neue Lichtblitze, ein plötzliches Schwärmen vieler dunkler Punkte oder ein Schatten im Sichtfeld müssen umgehend augenärztlich untersucht werden. Bei anhaltenden oder zunehmenden Beschwerden wenden Sie sich an Ihre Hausarztpraxis."
      ] }
    ],
    sources: [
      { title: "Schilddrüsenunterfunktion", publisher: "gesund.bund.de – Bundesministerium für Gesundheit", url: "https://gesund.bund.de/schilddruesenunterfunktion", accessed: "2026-11-26" },
      { title: "Restless-Legs-Syndrom", publisher: "gesund.bund.de – Bundesministerium für Gesundheit", url: "https://gesund.bund.de/restless-legs-syndrom", accessed: "2026-11-26" },
      { title: "Vitamin-B-Mangel: Symptome und Behandlung", publisher: "gesund.bund.de – Bundesministerium für Gesundheit", url: "https://gesund.bund.de/vitamin-b-mangel", accessed: "2026-11-26" }
    ]
  },
  {
    slug: "naturheilmittel-chronische-beschwerden",
    title: "Natürliche Heilmittel: Was ist bei Beschwerden wirklich belegt?",
    category: "natur-hausmittel",
    tags: ["Naturheilmittel", "Wechseljahre", "Osteoporose", "PCOS", "Parkinson", "Multiple Sklerose"],
    intro: "Videos ordnen bestimmten Beschwerden oft einzelne Vitamine, Mineralstoffe oder Pflanzenstoffe zu. Bei chronischen Erkrankungen ist die Lage komplexer: Eine mögliche unterstützende Rolle ist nicht dasselbe wie eine nachgewiesene Behandlung.",
    excerpt: "Ein kritischer Überblick über natürliche Mittel bei chronischen Beschwerden – mit klarer Trennung zwischen Unterstützung, Studienlage und medizinischer Behandlung.",
    readingMinutes: 8,
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    popular: true,
    keyFacts: [
      "Nahrungsergänzungsmittel heilen weder Multiple Sklerose noch Parkinson, Osteoporose, PCOS oder andere chronische Erkrankungen.",
      "Einzelne Nährstoffe können bei nachgewiesenem Mangel oder besonderem Bedarf medizinisch sinnvoll sein.",
      "Pflanzenextrakte und hoch dosierte Präparate können Neben- und Wechselwirkungen verursachen."
    ],
    sections: [
      { id: "unterstuetzung", heading: "Unterstützung ist keine Therapie", paragraphs: [
        "Eine ausreichende Versorgung mit Nährstoffen ist wichtig für normale Körperfunktionen. Daraus folgt aber nicht, dass zusätzliche Präparate eine chronische Erkrankung behandeln oder deren Verlauf zuverlässig verändern.",
        "Bei Osteoporose, Multipler Sklerose, Parkinson, Neuropathien, PCOS, PMDD, Psoriasis oder Diabetes hängen Behandlung und Verlauf von vielen Faktoren ab. Die Therapie sollte auf Diagnose und individueller Situation beruhen."
      ] },
      { id: "beispiele", heading: "Wie man Nährstofflisten richtig liest", paragraphs: [
        "Vitamin D und Calcium spielen eine Rolle im Knochenstoffwechsel. Ob eine Ergänzung erforderlich ist, hängt unter anderem von Versorgung, Ernährung, Alter, Erkrankungen und Behandlung ab.",
        "B-Vitamine sind für Stoffwechsel und Nervensystem wichtig. Eine Ergänzung kann bei einem nachgewiesenen Mangel sinnvoll sein; unspezifische Beschwerden allein reichen nicht aus, um einen Mangel festzustellen.",
        "Magnesium, Omega-3-Fettsäuren, Zink, Eisen, Inositol oder Pflanzenextrakte werden in unterschiedlichen Zusammenhängen untersucht. Die Studienlage ist je nach Stoff und Erkrankung sehr unterschiedlich. Eine Empfehlung für alle Betroffenen lässt sich daraus nicht ableiten."
      ] },
      { id: "sicherheit", heading: "Warum ärztliche Abstimmung wichtig ist", paragraphs: [
        "Chronische Erkrankungen gehen häufig mit regelmäßiger Medikamenteneinnahme einher. Nahrungsergänzungsmittel können Arzneimittelwirkungen beeinflussen. Manche Präparate sind bei bestimmten Erkrankungen, in Schwangerschaft oder Stillzeit ungeeignet.",
        "Lassen Sie deshalb vor einer längerfristigen Einnahme prüfen, ob tatsächlich ein Bedarf besteht, welches Präparat infrage kommt und ob es mit Ihrer Behandlung vereinbar ist. Setzen Sie verordnete Medikamente nicht eigenständig ab."
      ] },
      { id: "fazit", heading: "Ein realistischer Umgang mit Naturheilmitteln", paragraphs: [
        "Sinnvoll ist eine kritische Frage bei jedem Versprechen: Gibt es gute Studien am Menschen? Für welche konkrete Erkrankung wurde untersucht? Welche Dosis und welches Produkt wurden verwendet? Welche Risiken sind bekannt?",
        "Traditionelle Anwendung, Laborversuche oder einzelne Erfahrungsberichte sind kein Beleg für eine klinisch wirksame Behandlung. Bei neuen oder zunehmenden Beschwerden sollte die Ursache medizinisch abgeklärt werden."
      ] }
    ],
    sources: [
      { title: "Fragen und Antworten zu Nahrungsergänzungsmitteln", publisher: "Bundesinstitut für Risikobewertung (BfR)", url: "https://www.bfr.bund.de/fragen-und-antworten/thema/fragen-und-antworten-zu-nahrungsergaenzungsmitteln/", accessed: "2026-11-26" },
      { title: "Vitamin D – Fact Sheet for Health Professionals", publisher: "NIH Office of Dietary Supplements", url: "https://ods.od.nih.gov/factsheets/VITAMIND-HealthProfessional/", accessed: "2026-11-26" },
      { title: "Turmeric: Usefulness and Safety", publisher: "National Center for Complementary and Integrative Health (NCCIH)", url: "https://www.nccih.nih.gov/health/turmeric", accessed: "2026-11-26" }
    ]
  },

  {
    slug: "schwarzkuemmeloel",
    title: "Schwarzkümmelöl: Inhaltsstoffe, Anwendung und Studienlage",
    category: "vitamine-naehrstoffe",
    tags: ["Schwarzkümmelöl", "Nigella sativa", "Thymochinon", "Pflanzenöle"],
    intro: "Schwarzkümmelöl wird aus den Samen von Nigella sativa gewonnen und traditionell vielfältig verwendet. Was über Inhaltsstoffe, mögliche Effekte und Risiken beim Menschen bekannt ist, zeigt dieser Überblick.",
    excerpt: "Was in Schwarzkümmelöl steckt, welche Anwendungen untersucht werden und wo die wissenschaftlichen Grenzen liegen.",
    readingMinutes: 8,
    publishedAt: "2026-11-26",
    keyFacts: [
      "Schwarzkümmelöl stammt aus den Samen von Nigella sativa; es ist nicht mit echtem Kümmel oder Kreuzkümmel gleichzusetzen.",
      "Thymochinon ist einer der untersuchten Inhaltsstoffe, doch Laborergebnisse belegen noch keinen gesundheitlichen Nutzen beim Menschen.",
      "Für viele beworbene Anwendungsgebiete ist die klinische Evidenz unzureichend."
    ],
    sections: [
      { id: "herkunft", heading: "Was ist Schwarzkümmelöl?", paragraphs: ["Schwarzkümmel (Nigella sativa) ist eine Pflanze aus Teilen Asiens und des Mittelmeerraums. Aus ihren schwarzen Samen wird ein fettreiches Öl gewonnen. Die Samen und das Öl werden seit langer Zeit in unterschiedlichen Ernährungstraditionen verwendet.", "Die Bezeichnung kann verwirren: Nigella sativa ist botanisch weder echter Kümmel noch Kreuzkümmel. Produkte unterscheiden sich zudem in Verarbeitung, Zusammensetzung und Qualität."] },
      { id: "inhaltsstoffe", heading: "Inhaltsstoffe: Thymochinon und Fettsäuren", paragraphs: ["Schwarzkümmelöl enthält verschiedene Fettsäuren und weitere Pflanzenstoffe. Besonders häufig wird Thymochinon untersucht. In Zell- und Tiermodellen werden für einzelne Bestandteile biologische Effekte beschrieben. Solche Ergebnisse lassen sich jedoch nicht ohne Weiteres auf Menschen übertragen.", "Die Zusammensetzung hängt unter anderem von Herkunft, Ernte, Lagerung und Herstellungsverfahren ab. Ein Produktname allein sagt deshalb wenig über den tatsächlichen Gehalt einzelner Inhaltsstoffe aus."] },
      { id: "studienlage", heading: "Was zeigen Studien am Menschen?", paragraphs: ["Kleine klinische Studien untersuchen Schwarzkümmelpräparate unter anderem im Zusammenhang mit Stoffwechselwerten, allergischen Beschwerden oder Entzündungsmarkern. Häufig unterscheiden sich Präparate, Dosierungen und Studiendesigns. Daraus lässt sich keine gesicherte Behandlungsempfehlung für eine Erkrankung ableiten.", "Für Krebs, Infektionen oder eine allgemeine Stärkung des Immunsystems ist Schwarzkümmelöl keine nachgewiesene Therapie und ersetzt keine medizinische Behandlung."] },
      { id: "sicherheit", heading: "Verträglichkeit, Risiken und Wechselwirkungen", paragraphs: ["Auch pflanzliche Öle können Nebenwirkungen verursachen. Möglich sind beispielsweise Magen-Darm-Beschwerden oder allergische Reaktionen. Für konzentrierte Präparate sind Daten zur langfristigen Einnahme begrenzt.", "Wer regelmäßig Medikamente einnimmt, schwanger ist, stillt oder eine chronische Erkrankung hat, sollte die Verwendung eines konzentrierten Präparats vorab ärztlich oder pharmazeutisch abklären. Nicht jedes Öl ist für jede Person und jede Anwendungsform geeignet."] },
      { id: "kauf", heading: "Worauf beim Kauf achten?", paragraphs: ["Achten Sie auf eine klare Kennzeichnung mit botanischem Namen, Zutaten, Herkunft, Mindesthaltbarkeit und Lagerhinweisen. Aussagen wie „heilt“, „entgiftet“ oder „ersetzt Medikamente“ sind Warnsignale. Nahrungsergänzungsmittel sind Lebensmittel und keine zugelassenen Arzneimittel."] }
    ],
    sources: [
      { title: "Black Seed – Überblick zu Anwendung und Evidenz", publisher: "MedlinePlus / U.S. National Library of Medicine", url: "https://medlineplus.gov/druginfo/natural/901.html", accessed: "2026-11-26" },
      { title: "Fragen und Antworten zu Nahrungsergänzungsmitteln", publisher: "Bundesinstitut für Risikobewertung (BfR)", url: "https://www.bfr.bund.de/fragen-und-antworten/thema/fragen-und-antworten-zu-nahrungsergaenzungsmitteln/", accessed: "2026-11-26" }
    ]
  },
  {
    slug: "astaxanthin",
    title: "Astaxanthin: Was das rote Carotinoid wirklich kann",
    category: "vitamine-naehrstoffe",
    tags: ["Astaxanthin", "Carotinoide", "Antioxidantien", "Mikroalgen"],
    intro: "Astaxanthin ist ein rötliches Carotinoid aus bestimmten Mikroalgen. Es wird als Nahrungsergänzung mit zahlreichen Wirkversprechen vermarktet. Dieser Ratgeber trennt biologische Grundlagen von belegten Wirkungen beim Menschen.",
    excerpt: "Herkunft, antioxidative Eigenschaften, Studienlage und wichtige Grenzen der Werbeversprechen.",
    readingMinutes: 7,
    publishedAt: "2026-11-26",
    keyFacts: [
      "Astaxanthin wird unter anderem von der Mikroalge Haematococcus pluvialis gebildet.",
      "Antioxidative Eigenschaften aus Laborversuchen beweisen keine gesundheitliche Wirkung beim Menschen.",
      "Für viele beworbene Effekte, etwa einen Schutz vor Augenerkrankungen oder DNA-Schäden, fehlen überzeugende Humanbelege."
    ],
    sections: [
      { id: "was-ist", heading: "Was ist Astaxanthin?", paragraphs: ["Astaxanthin gehört zu den Carotinoiden. Es kommt in bestimmten Mikroalgen vor und gelangt über die Nahrungskette auch in Tiere wie Lachs, Garnelen und Krill, denen es ihre rötliche Färbung verleihen kann.", "Nahrungsergänzungsmittel enthalten meist Astaxanthin aus Mikroalgen, häufig in Kapseln oder Ölzubereitungen. Die Konzentration und Produktqualität können variieren."] },
      { id: "antioxidans", heading: "Antioxidans: Was bedeutet das?", paragraphs: ["Astaxanthin kann in experimentellen Modellen mit oxidativen Prozessen interagieren. Der Begriff Antioxidans wird in der Werbung jedoch oft so verwendet, als sei damit automatisch ein Schutz vor Krankheiten bewiesen. Das ist nicht der Fall: Ein Labormechanismus allein belegt weder eine klinisch relevante Wirkung noch einen Nutzen für die Allgemeinbevölkerung."] },
      { id: "evidenz", heading: "Wie belastbar ist die Studienlage?", paragraphs: ["Das Deutsche Krebsforschungszentrum weist darauf hin, dass gesundheitsfördernde Wirkungen bislang vor allem in Tier- und Laboruntersuchungen erforscht wurden. Überzeugende Studien am Menschen, die viele der verbreiteten Gesundheitsversprechen belegen, fehlen.", "Insbesondere Aussagen, Astaxanthin schütze die DNA, verbessere die Sehkraft oder verhindere Erkrankungen, sollten nicht als gesicherte Tatsachen dargestellt werden. Bei Augenbeschwerden oder bestehenden Erkrankungen gehört die Abklärung in ärztliche Hände."] },
      { id: "sicherheit", heading: "Sicherheit und Auswahl von Präparaten", paragraphs: ["Auch wenn ein Stoff natürlich vorkommt, ist ein konzentriertes Präparat nicht automatisch risikofrei. Die Sicherheit hängt unter anderem von Menge, Produktqualität, Begleitmedikation und persönlicher Situation ab. Für Schwangere, Stillende und Menschen mit Erkrankungen sind die Daten begrenzt.", "Lassen Sie sich vor der Einnahme beraten, wenn Sie Medikamente verwenden oder eine Erkrankung behandeln lassen. Verlassen Sie sich nicht auf Produkte, die Heilung oder Schutz vor Krebs versprechen."] }
    ],
    sources: [
      { title: "Ist das Novel Food Astaxanthin krebserregend?", publisher: "Deutsches Krebsforschungszentrum (DKFZ), Krebsinformationsdienst", url: "https://www.krebsinformationsdienst.de/aktuelles/detail/ist-das-novel-food-astaxanthin-krebserregend", accessed: "2026-11-26" },
      { title: "Astaxanthin für den guten Durchblick?", publisher: "Verbraucherzentrale", url: "https://www.verbraucherzentrale.de/wissen/lebensmittel/nahrungsergaenzungsmittel/astaxanthin-fuer-den-guten-durchblick-17747", accessed: "2026-11-26" }
    ]
  },
  {
    slug: "kurkuma-curcumin",
    title: "Kurkuma und Curcumin: Gewürz, Extrakt und Evidenz",
    category: "vitamine-naehrstoffe",
    tags: ["Kurkuma", "Curcumin", "Gewürze", "Nahrungsergänzung"],
    intro: "Kurkuma ist ein gelbes Gewürz, dessen Inhaltsstoff Curcumin intensiv erforscht wird. Zwischen der Verwendung in Lebensmitteln und hoch konzentrierten Extrakten bestehen wichtige Unterschiede.",
    excerpt: "Was Curcumin ist, welche Anwendungen erforscht werden und warum hoch bioverfügbare Präparate besondere Vorsicht erfordern.",
    readingMinutes: 8,
    publishedAt: "2026-11-26",
    keyFacts: [
      "Curcumin ist ein Bestandteil der Kurkumawurzel und nicht mit dem gesamten Gewürz gleichzusetzen.",
      "Für viele gesundheitliche Anwendungen ist die Studienlage noch nicht eindeutig.",
      "Bei hoch bioverfügbaren Curcumin-Produkten wurden Fälle von Leberschädigungen berichtet."
    ],
    sections: [
      { id: "grundlagen", heading: "Kurkuma und Curcumin: der Unterschied", paragraphs: ["Kurkuma (Curcuma longa) ist eine Pflanze aus der Familie der Ingwergewächse. Das gelbe Pulver aus dem Wurzelstock wird als Gewürz verwendet. Curcumin ist einer von mehreren Curcuminoiden und trägt wesentlich zur gelben Farbe bei.", "Nahrungsergänzungsmittel können deutlich konzentriertere Extrakte enthalten als übliche Lebensmittel. Manche Produkte werden zusätzlich so formuliert, dass Curcumin besser aufgenommen werden soll."] },
      { id: "forschung", heading: "Welche Wirkungen werden untersucht?", paragraphs: ["Curcumin wird unter anderem wegen seiner entzündungsbezogenen und antioxidativen Eigenschaften in Labor- und klinischen Studien untersucht. Für einzelne Beschwerden gibt es erste Hinweise, die Studien sind jedoch häufig klein, unterschiedlich aufgebaut und nicht ausreichend, um eine allgemeine Therapieempfehlung abzuleiten.", "Ergebnisse aus Zellversuchen oder Tiermodellen dürfen nicht als Beleg dafür ausgegeben werden, dass Kurkuma Erkrankungen beim Menschen verhindert oder heilt."] },
      { id: "lebensmittel", heading: "Kurkuma in der Ernährung", paragraphs: ["Als Gewürz lässt sich Kurkuma in vielen Speisen verwenden. Die übliche kulinarische Verwendung ist nicht mit der Einnahme hoch dosierter Extrakte gleichzusetzen. Wer Kurkuma als Lebensmittel nutzt, muss daraus keine medizinische Wirkung ableiten."] },
      { id: "risiken", heading: "Nebenwirkungen und besondere Risiken", paragraphs: ["Orale Kurkuma- und Curcuminpräparate können unter anderem Übelkeit, Reflux, Magenbeschwerden, Durchfall oder Verstopfung verursachen. Für Formulierungen mit erhöhter Bioverfügbarkeit wurden Leberschädigungen beschrieben.", "Bei ungewöhnlicher Müdigkeit, Übelkeit, Appetitverlust, dunklem Urin oder Gelbfärbung der Haut sollte ein Präparat abgesetzt und umgehend medizinischer Rat eingeholt werden. Curcuminpräparate in der Schwangerschaft sollten nicht ohne medizinische Rücksprache verwendet werden."] },
      { id: "wechselwirkungen", heading: "Wechselwirkungen und Beratung", paragraphs: ["Bei regelmäßiger Medikamenteneinnahme, Leber- oder Gallenwegserkrankungen, Schwangerschaft oder Stillzeit sollte die Einnahme konzentrierter Extrakte vorab medizinisch besprochen werden. Die Sicherheit hängt nicht nur vom Kurkuma-Namen, sondern auch von Extrakt, Zusatzstoffen und Bioverfügbarkeitsverstärkern ab."] }
    ],
    sources: [
      { title: "Turmeric: Usefulness and Safety", publisher: "National Center for Complementary and Integrative Health (NCCIH / NIH)", url: "https://www.nccih.nih.gov/health/turmeric", accessed: "2026-11-26" },
      { title: "Fragen und Antworten zu Nahrungsergänzungsmitteln", publisher: "Bundesinstitut für Risikobewertung (BfR)", url: "https://www.bfr.bund.de/fragen-und-antworten/thema/fragen-und-antworten-zu-nahrungsergaenzungsmitteln/", accessed: "2026-11-26" }
    ]
  },
  {
    slug: "msm",
    title: "MSM: Was hinter Methylsulfonylmethan steckt",
    category: "vitamine-naehrstoffe",
    tags: ["MSM", "Methylsulfonylmethan", "Schwefel", "Gelenke"],
    intro: "MSM steht für Methylsulfonylmethan und wird als Schwefelverbindung in Nahrungsergänzungsmitteln angeboten. Besonders häufig wird es mit Gelenkbeschwerden beworben. Wie belastbar sind die Daten?",
    excerpt: "Grundlagen, untersuchte Einsatzgebiete, begrenzte Studienlage und offene Sicherheitsfragen zu MSM.",
    readingMinutes: 7,
    publishedAt: "2026-11-26",
    keyFacts: [
      "MSM ist eine organische Schwefelverbindung; ein anerkannter MSM-Tagesbedarf ist nicht festgelegt.",
      "Die vergleichsweise meisten Humanstudien betreffen Beschwerden bei Kniearthrose, sind aber begrenzt.",
      "Langzeitdaten und systematische Untersuchungen zu Wechselwirkungen fehlen weitgehend."
    ],
    sections: [
      { id: "definition", heading: "Was ist MSM?", paragraphs: ["Methylsulfonylmethan (MSM), auch Dimethylsulfon genannt, ist eine organische Schwefelverbindung, die in geringen Mengen in Menschen, Tieren und Pflanzen vorkommt. Sie wird synthetisch auch für Nahrungsergänzungsmittel hergestellt.", "MSM ist nicht dasselbe wie DMSO (Dimethylsulfoxid). Für MSM oder Schwefel gibt es keine etablierte empfohlene Tageszufuhr; ein eigenständiger Schwefelmangel gilt nicht als bekannte Ernährungsdiagnose."] },
      { id: "anwendung", heading: "Wofür wird MSM verwendet?", paragraphs: ["MSM wird vor allem für Gelenkbeschwerden und Arthrose vermarktet. Daneben finden sich Werbeaussagen zu Haut, Sportregeneration oder Entzündungen. Die wissenschaftliche Prüfung dieser Anwendungen ist unterschiedlich weit fortgeschritten.", "Bei Kniearthrose deuten einige kleine, kurzzeitige Studien auf eine mögliche geringe Verbesserung von Schmerzen oder Funktion hin. Die Daten reichen nicht aus, um MSM als krankheitsverändernde Behandlung zu bewerten oder eine Wirkung bei anderen Erkrankungen zu behaupten."] },
      { id: "studien", heading: "Was lässt sich aus Studien ableiten?", paragraphs: ["Studien unterscheiden sich in Dosierung, Dauer und Zusammensetzung der Produkte. In Kombinationspräparaten mit Glucosamin oder Chondroitin lässt sich der eigenständige Beitrag von MSM oft nicht bestimmen.", "Ein plausibler Wirkmechanismus aus Laboruntersuchungen ist kein Nachweis für einen klinischen Nutzen. MSM sollte daher nicht als Entgiftungsmittel, Chelatbildner oder Ersatz für eine ärztlich empfohlene Arthrosebehandlung dargestellt werden."] },
      { id: "sicherheit", heading: "Nebenwirkungen und Sicherheit", paragraphs: ["In kurzzeitigen Untersuchungen wurden unter anderem Übelkeit, Blähungen, Durchfall und Magenbeschwerden berichtet. Die längerfristige Sicherheit ist nicht ausreichend untersucht.", "Während Schwangerschaft und Stillzeit sollte MSM mangels ausreichender Sicherheitsdaten vermieden werden. Bei chronischen Erkrankungen oder regelmäßiger Medikamenteneinnahme ist eine vorherige Rücksprache sinnvoll."] }
    ],
    sources: [
      { title: "Methylsulfonylmethane (MSM)", publisher: "MedlinePlus / U.S. National Library of Medicine", url: "https://www.medlineplus.gov/druginfo/natural/522.html", accessed: "2026-11-26" },
      { title: "Methylsulfonylmethane as a Bioactive Nutraceutical: Clinical Evidence and Safety", publisher: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13704369/", accessed: "2026-11-26" }
    ]
  },
  {
    slug: "cholin",
    title: "Cholin: Ein wichtiger Nährstoff für Zellmembranen und Nervensystem",
    category: "vitamine-naehrstoffe",
    tags: ["Cholin", "Leber", "Nervensystem", "Nährstoffe"],
    intro: "Cholin ist ein essenzieller Nährstoff, den der Körper nur in begrenztem Umfang selbst herstellen kann. Es wird für Zellmembranen, Stoffwechselprozesse und die Bildung des Neurotransmitters Acetylcholin benötigt.",
    excerpt: "Aufgaben von Cholin, Lebensmittelquellen, Referenzwerte und Risiken einer zu hohen Zufuhr.",
    readingMinutes: 7,
    publishedAt: "2026-11-26",
    keyFacts: [
      "Cholin ist Bestandteil wichtiger Zellmembran-Phospholipide und Ausgangsstoff für Acetylcholin.",
      "Der Körper bildet etwas Cholin selbst, benötigt aber zusätzlich Cholin aus der Ernährung.",
      "Ein Supplement ist nicht automatisch nötig; hohe Mengen können unerwünschte Wirkungen auslösen."
    ],
    sections: [
      { id: "aufgaben", heading: "Welche Aufgaben hat Cholin?", paragraphs: ["Cholin wird für den Aufbau der Phospholipide Phosphatidylcholin und Sphingomyelin benötigt. Diese Stoffe sind wichtige Bestandteile von Zellmembranen. Außerdem dient Cholin als Ausgangsstoff für Acetylcholin, einen Botenstoff, der unter anderem an Gedächtnis, Stimmung und Muskelsteuerung beteiligt ist.", "Cholin spielt zudem eine Rolle beim Fetttransport und -stoffwechsel sowie bei Prozessen der Genregulation und der frühen Gehirnentwicklung."] },
      { id: "quellen", heading: "In welchen Lebensmitteln steckt Cholin?", paragraphs: ["Cholin kommt sowohl in tierischen als auch in pflanzlichen Lebensmitteln vor. Gute Quellen können Eier, Fisch, Fleisch, Milchprodukte, Sojabohnen und weitere Hülsenfrüchte sein. Die tatsächliche Aufnahme hängt von Auswahl und Menge der Lebensmittel ab.", "Eine abwechslungsreiche Ernährung kann zur Versorgung beitragen. Der Bedarf ist abhängig von Alter und Lebensphase; in Schwangerschaft und Stillzeit gelten besondere Referenzwerte."] },
      { id: "bedarf", heading: "Bedarf und Versorgung", paragraphs: ["Referenzwerte unterscheiden sich zwischen Ländern und Fachgesellschaften. Das NIH Office of Dietary Supplements nennt für Erwachsene in den USA angemessene Zufuhrmengen (Adequate Intake), keine individuell gemessene Sollmenge. Diese Werte sollten nicht unkritisch als deutsche Dosierungsempfehlung übernommen werden.", "Ein routinemäßiger Cholinstatus wird bei gesunden Menschen üblicherweise nicht bestimmt. Ob ein Supplement sinnvoll ist, hängt von Ernährung, Lebensphase und medizinischer Situation ab."] },
      { id: "supplemente", heading: "Cholin als Nahrungsergänzung", paragraphs: ["Cholinpräparate gibt es in unterschiedlichen chemischen Formen, etwa Cholinbitartrat oder Phosphatidylcholin. Diese Formen sind nicht automatisch gleichwertig, und ein höherer Gehalt bedeutet nicht automatisch einen größeren Nutzen.", "Sehr hohe Zufuhrmengen können unter anderem fischartigen Körpergeruch, Erbrechen, starkes Schwitzen, niedrigen Blutdruck und Lebertoxizität verursachen. Beachten Sie deshalb die Gesamtzufuhr aus Lebensmitteln und Präparaten und vermeiden Sie eigenständige Hochdosierungen."] }
    ],
    sources: [
      { title: "Choline – Fact Sheet for Health Professionals", publisher: "National Institutes of Health, Office of Dietary Supplements", url: "https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/", accessed: "2026-11-26" }
    ]
  },
  {
    slug: "vitamin-k2",
    title: "Vitamin K2: Formen, Aufgaben und was die Forschung zeigt",
    category: "vitamine-naehrstoffe",
    tags: ["Vitamin K2", "MK-7", "MK-4", "Knochen", "Blutgerinnung"],
    intro: "Vitamin K2 gehört zur Gruppe der fettlöslichen Vitamin-K-Verbindungen. Es ist an der Aktivierung bestimmter Proteine beteiligt. Welche Rolle K2 für Knochen und Gefäße spielt und was Supplemente leisten, wird hier eingeordnet.",
    excerpt: "Unterschiede zwischen K1 und K2, MK-4 und MK-7, Lebensmittelquellen und wichtige Arzneimittelwechselwirkungen.",
    readingMinutes: 8,
    publishedAt: "2026-11-26",
    keyFacts: [
      "Vitamin K2 bezeichnet eine Gruppe von Menachinonen, darunter MK-4 und MK-7.",
      "Vitamin K ist für die Aktivierung von Proteinen der Blutgerinnung wichtig und an Knochenstoffwechsel beteiligt.",
      "Vitamin-K-Präparate können die Wirkung von Vitamin-K-Antagonisten wie Phenprocoumon beeinflussen."
    ],
    sections: [
      { id: "formen", heading: "Vitamin K1 und K2: Wo liegt der Unterschied?", paragraphs: ["Vitamin K ist eine Sammelbezeichnung. Vitamin K1 (Phyllochinon) kommt vor allem in grünen Blattgemüsen vor. Vitamin K2 umfasst verschiedene Menachinone, die als MK-4, MK-7 und weitere Formen bezeichnet werden.", "K2 ist daher kein einzelner Stoff. Die Formen unterscheiden sich in ihrer chemischen Struktur und Verweildauer im Körper. Daten zur vergleichenden Bioverfügbarkeit und zu langfristigen gesundheitlichen Wirkungen sind begrenzt."] },
      { id: "funktion", heading: "Welche Aufgaben hat Vitamin K?", paragraphs: ["Vitamin K dient als Cofaktor für Enzyme, die bestimmte Proteine aktivieren. Dazu gehören Proteine, die an der Blutgerinnung beteiligt sind, sowie Osteocalcin und Matrix-Gla-Protein, die im Knochen- und Gewebestoffwechsel untersucht werden.", "Aus der biologischen Funktion lässt sich nicht automatisch ableiten, dass zusätzliche K2-Einnahme bei gut versorgten Menschen Knochenbrüche verhindert oder Gefäßverkalkungen rückgängig macht. Die Studienlage zu solchen Supplement-Effekten ist uneinheitlich."] },
      { id: "quellen", heading: "Lebensmittelquellen von Vitamin K2", paragraphs: ["Menachinone finden sich in unterschiedlichen Mengen in fermentierten Lebensmitteln sowie in einigen tierischen Lebensmitteln. Natto, ein fermentiertes Sojaprodukt, kann besonders hohe Mengen bestimmter K2-Formen enthalten. Die Mengen variieren je nach Herstellung und verwendeten Mikroorganismen.", "Vitamin K1 aus grünem Blattgemüse trägt ebenfalls zur Vitamin-K-Versorgung bei. Eine ausgewogene Ernährung ist grundsätzlich die Basis der Nährstoffversorgung."] },
      { id: "supplemente", heading: "K2-Präparate und Kombination mit Vitamin D3", paragraphs: ["K2 wird häufig gemeinsam mit Vitamin D3 und Calcium angeboten. Eine solche Kombination ist jedoch nicht automatisch für jede Person erforderlich. Die Frage, ob ein Präparat sinnvoll ist, sollte sich an der individuellen Ernährung, medizinischen Situation und bestehenden Empfehlungen orientieren.", "Die Daten zu verschiedenen K2-Formen und zur zusätzlichen Einnahme sind begrenzt. Vermeiden Sie es, aus Marketingaussagen wie „bringt Calcium in die Knochen“ eine gesicherte klinische Wirkung abzuleiten."] },
      { id: "wechselwirkungen", heading: "Wichtige Wechselwirkungen", paragraphs: ["Vitamin K kann die Wirkung von Vitamin-K-Antagonisten wie Phenprocoumon (Marcumar) und Warfarin beeinflussen. Wer solche Medikamente einnimmt, sollte Vitamin-K-Zufuhr aus Lebensmitteln und Präparaten möglichst konstant halten und Änderungen unbedingt mit der behandelnden Praxis abstimmen.", "Beginnen oder beenden Sie ein Vitamin-K-Präparat nicht eigenständig, wenn Sie Gerinnungshemmer einnehmen."] }
    ],
    sources: [
      { title: "Vitamin K – Fact Sheet for Health Professionals", publisher: "National Institutes of Health, Office of Dietary Supplements", url: "https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/", accessed: "2026-11-26" },
      { title: "Vitamin K – Informationen zu Aufgaben und Wechselwirkungen", publisher: "National Institutes of Health, Office of Dietary Supplements", url: "https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/", accessed: "2026-11-26" }
    ]
  },
  {
    slug: "ashwagandha",
    title: "Ashwagandha: Wirkung, Studienlage und mögliche Risiken",
    category: "vitamine-naehrstoffe",
    tags: ["Ashwagandha", "Withania somnifera", "Adaptogene", "Stress", "Schlaf"],
    intro: "Ashwagandha ist eine Pflanze aus der traditionellen ayurvedischen Medizin und wird heute häufig als Präparat für Stress und Schlaf beworben. Einige Studien liefern Hinweise, zugleich bestehen wichtige Sicherheitsfragen.",
    excerpt: "Was Studien zu Stress und Schlaf nahelegen, welche Aussagen offenbleiben und wer Ashwagandha meiden sollte.",
    readingMinutes: 8,
    publishedAt: "2026-11-26",
    keyFacts: [
      "Ashwagandha-Präparate enthalten je nach Produkt Wurzel-, Blatt- oder kombinierte Extrakte.",
      "Einige Präparate könnten kurzfristig bei Stress oder Schlafproblemen helfen; Studien sind jedoch oft klein und unterschiedlich.",
      "Es gibt Berichte über Leberschädigungen und mögliche Wechselwirkungen mit mehreren Medikamentengruppen."
    ],
    sections: [
      { id: "pflanze", heading: "Was ist Ashwagandha?", paragraphs: ["Ashwagandha (Withania somnifera) ist ein immergrüner Strauch, der unter anderem in Indien, Afrika und Teilen des Nahen Ostens wächst. Die Pflanze wird seit langer Zeit in der ayurvedischen Tradition verwendet.", "Nahrungsergänzungsmittel enthalten unterschiedliche Pflanzenteile und Extrakte. Withanolide sind eine Gruppe bioaktiver Inhaltsstoffe, deren Gehalt je nach Produkt variieren kann."] },
      { id: "stress-schlaf", heading: "Was sagt die Forschung zu Stress und Schlaf?", paragraphs: ["Einige klinische Studien deuten darauf hin, dass bestimmte Ashwagandha-Präparate kurzfristig Stresswerte oder Schlaf verbessern könnten. Die Studien haben jedoch häufig kleine Teilnehmerzahlen und verwenden unterschiedliche Extrakte und Dosierungen.", "Für Angststörungen, Wechseljahresbeschwerden, sportliche Leistung, Diabetes oder andere Erkrankungen ist die Datenlage nicht ausreichend, um eine verlässliche Wirksamkeit festzustellen. Ashwagandha ist keine Behandlung für psychische Erkrankungen oder Schlafstörungen."] },
      { id: "praeparate", heading: "Warum Extrakte nicht gleichzusetzen sind", paragraphs: ["Wurzelpulver, Wurzelextrakt und Kombinationen aus Wurzel und Blättern können sich deutlich unterscheiden. Auch Extraktionsverfahren und Withanolid-Gehalt beeinflussen die Zusammensetzung. Studienergebnisse zu einem bestimmten Präparat lassen sich daher nicht automatisch auf jedes Produkt übertragen.", "Eine pauschale Dosierung für alle Produkte lässt sich aus der Studienlage nicht ableiten."] },
      { id: "risiken", heading: "Nebenwirkungen und Lebersicherheit", paragraphs: ["Mögliche Nebenwirkungen sind Benommenheit, Magenbeschwerden, Durchfall und Erbrechen. Seltene Fälle von Leberschädigung wurden mit Ashwagandha-Präparaten in Verbindung gebracht. Die Sicherheit einer längerfristigen Einnahme ist nicht ausreichend geklärt.", "Ashwagandha sollte während der Schwangerschaft vermieden und während der Stillzeit nicht verwendet werden. Auch vor Operationen sowie bei Schilddrüsen- oder Autoimmunerkrankungen wird von einer Anwendung abgeraten."] },
      { id: "wechselwirkungen", heading: "Wechselwirkungen und wer besonders vorsichtig sein sollte", paragraphs: ["Mögliche Wechselwirkungen bestehen unter anderem mit Medikamenten gegen Diabetes und Bluthochdruck, Beruhigungs- und Schlafmitteln, Antiepileptika, Immunsuppressiva und Schilddrüsenhormonen. Bei hormonabhängigem Prostatakrebs wird von der Einnahme abgeraten.", "Besprechen Sie die Einnahme vorab mit medizinischem Fachpersonal, besonders wenn Sie Medikamente nehmen oder eine chronische Erkrankung haben. Bei Gelbfärbung der Haut, dunklem Urin, starkem Juckreiz oder ungewöhnlicher Müdigkeit ist eine rasche medizinische Abklärung erforderlich."] }
    ],
    sources: [
      { title: "Ashwagandha: Usefulness and Safety", publisher: "National Center for Complementary and Integrative Health (NCCIH / NIH)", url: "https://www.nccih.nih.gov/health/ashwagandha", accessed: "2026-11-26" },
      { title: "Protokoll der 35. Sitzung der Gemeinsamen Expertenkommission zur Einstufung von Stoffen", publisher: "Bundesinstitut für Arzneimittel und Medizinprodukte (BfArM)", url: "https://www.bfarm.de/SharedDocs/Downloads/DE/Arzneimittel/Zulassung/ZulRelThemen/abgrenzung/Expertenkommission/protokolle/Protokoll_240618_35_Sitzung.pdf?__blob=publicationFile", accessed: "2026-11-26" }
    ]
  }
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
export function articlesByCategory(cat: CategorySlug): Article[] {
  return articles.filter((a) => a.category === cat);
}
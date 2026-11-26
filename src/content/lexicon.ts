import type { LexiconEntry } from "./types";

const raw: Omit<LexiconEntry, "slug">[] = [
  { term: "Ausdauertraining", definition: "Körperliche Aktivität über einen längeren Zeitraum, die vor allem Herz und Kreislauf beansprucht, zum Beispiel zügiges Gehen, Radfahren oder Schwimmen.", relatedArticle: "bewegung-im-alltag" },
  { term: "Bewegung", definition: "Körperliche Aktivität im Alltag, bei der der Körper in Bewegung kommt – etwa beim Gehen, Radfahren, Sport oder bei Haus- und Gartenarbeit.", relatedArticle: "bewegung-im-alltag" },
  { term: "Abwehrkräfte", definition: "Bezeichnung für die körpereigenen Schutz- und Abwehrmechanismen gegen Krankheitserreger.", relatedArticle: "abwehrkraefte-staerken" },
  { term: "Antioxidantien", definition: "Stoffe, die bestimmte chemische Reaktionen (Oxidation) hemmen können. Sie kommen u. a. in pflanzlichen Lebensmitteln vor." },
  { term: "Ballaststoffe", definition: "Weitgehend unverdauliche Nahrungsbestandteile, die unter anderem die Darmtätigkeit beeinflussen und in Vollkorn, Gemüse, Obst und Hülsenfrüchten vorkommen.", relatedArticle: "ballaststoffe-verdauung" },
  { term: "Blutdruck", definition: "Der Druck, den das Blut auf die Gefäßwände ausübt. Er wird in systolischen und diastolischen Werten angegeben.", relatedArticle: "bluthochdruck-verstehen" },
  { term: "Calcium", definition: "Mineralstoff, der u. a. am Aufbau von Knochen und Zähnen beteiligt ist." },
  { term: "Cholesterin", definition: "Fettähnliche Substanz, die der Körper unter anderem für Zellmembranen und Hormone benötigt und in Lipoproteinen transportiert.", relatedArticle: "cholesterin-blutfette" },
  { term: "Diastolischer Wert", definition: "Der untere Blutdruckwert, gemessen während der Entspannungsphase des Herzens." },
  { term: "Eisen", definition: "Spurenelement, das u. a. für den Sauerstofftransport im Blut benötigt wird." },
  { term: "Elektrolyte", definition: "Mineralstoffe wie Natrium, Kalium oder Magnesium, die in Körperflüssigkeiten gelöst sind." },
  { term: "Freie Zucker", definition: "Zucker, die Lebensmitteln zugesetzt werden oder natürlicherweise in Honig, Sirup und Fruchtsäften vorkommen.", relatedArticle: "freie-zucker-ernaehrung" },
  { term: "Fettlösliche Vitamine", definition: "Vitamine A, D, E und K, die zusammen mit Fett aufgenommen und im Körper gespeichert werden können.", relatedArticle: "vitamin-d-grundlagen" },
  { term: "Früherkennung", definition: "Untersuchungen, die Krankheiten oder Vorstufen in einem frühen Stadium erkennen sollen.", relatedArticle: "gesundheitsvorsorge-check-up" },
  { term: "Glykämischer Index", definition: "Maß dafür, wie stark ein kohlenhydrathaltiges Lebensmittel den Blutzucker ansteigen lässt." },
  { term: "Ingwer", definition: "Rhizom einer Gewürzpflanze (Zingiber officinale), das als Lebensmittel und in konzentrierten Präparaten verwendet wird.", relatedArticle: "ingwer-wirkung-anwendung" },
  { term: "Kamille", definition: "Heilpflanze, deren Blüten traditionell unter anderem als Tee verwendet werden; klinische Belege für viele Anwendungen sind begrenzt.", relatedArticle: "kamille-tee-wirkung" },
  { term: "Pfefferminzöl", definition: "Ätherisches Öl aus Pfefferminze; bestimmte magensaftresistente Kapseln wurden bei Reizdarmsymptomen untersucht.", relatedArticle: "pfefferminzoel-reizdarm" },
  { term: "Säuglingsbotulismus", definition: "Seltene, potenziell schwere Erkrankung bei Säuglingen durch das vom Bakterium Clostridium botulinum gebildete Toxin; Honig ist für Kinder unter zwölf Monaten ungeeignet." },
  { term: "Cortisol", definition: "Glukokortikoid aus der Nebennierenrinde, das unter anderem Stoffwechsel und Stressanpassung beeinflusst.", relatedArticle: "stress-cortisol-verstehen" },
  { term: "Insomnie", definition: "Schlafstörung mit Ein- oder Durchschlafproblemen beziehungsweise frühem Erwachen und Beeinträchtigung am Tag.", relatedArticle: "insomnie-schlafstoerungen" },
  { term: "Kognitive Verhaltenstherapie für Insomnie (KVT-I)", definition: "Schlafbezogene psychotherapeutische Behandlung, die laut deutscher S3-Leitlinie als erste Behandlungsoption empfohlen wird.", relatedArticle: "insomnie-schlafstoerungen" },
  { term: "Melatonin", definition: "Hormon, das den Tag-Nacht-Rhythmus mitsteuert und vor allem bei Dunkelheit ausgeschüttet wird.", relatedArticle: "melatonin-schlafmittel" },
  { term: "Schlafapnoe", definition: "Schlafbezogene Atmungsstörung mit wiederholten Verengungen oder Verschlüssen der oberen Atemwege.", relatedArticle: "schlafapnoe-erkennen" },
  { term: "Insulinresistenz", definition: "Verminderte Empfindlichkeit von Körperzellen gegenüber Insulin; sie kann an der Entstehung von Typ-2-Diabetes beteiligt sein.", relatedArticle: "blutzucker-insulinresistenz" },
  { term: "Atherosklerose", definition: "Langfristiger Prozess, bei dem sich Plaques in Arterien bilden und die Durchblutung beeinträchtigen können.", relatedArticle: "gefaessgesundheit-atherosklerose" },
  { term: "Hausmittel", definition: "Überlieferte, meist einfache Anwendungen aus dem Haushalt. Ihre Wirksamkeit ist je nach Anwendung unterschiedlich gut untersucht.", relatedArticle: "hausmittel-erkaeltung-was-hilft" },
  { term: "Immunsystem", definition: "Das körpereigene Abwehrsystem gegen Krankheitserreger und fremde Stoffe.", relatedArticle: "abwehrkraefte-staerken" },
  { term: "Jod", definition: "Spurenelement, das für die Bildung von Schilddrüsenhormonen benötigt wird." },
  { term: "Krafttraining", definition: "Trainingsform, bei der die Muskulatur durch Widerstände gezielt beansprucht und gekräftigt wird.", relatedArticle: "bewegung-im-alltag" },
  { term: "Kalorie", definition: "Maßeinheit für Energie, im Alltag meist als Kilokalorie (kcal) für den Energiegehalt von Lebensmitteln verwendet." },
  { term: "Kamille", definition: "Korbblütler, dessen getrocknete Blüten traditionell als Tee verwendet werden." },
  { term: "Lymphe", definition: "Gewebsflüssigkeit, die über das Lymphsystem transportiert wird und an der Immunabwehr beteiligt ist." },
  { term: "Magnesium", definition: "Mineralstoff, der an vielen Stoffwechselprozessen sowie an Nerven- und Muskelfunktion beteiligt ist.", relatedArticle: "magnesium-im-alltag" },
  { term: "Mikrobiom", definition: "Gemeinschaft der Mikroorganismen und ihrer genetischen Eigenschaften in einem Lebensraum, zum Beispiel im menschlichen Darm.", relatedArticle: "darmmikrobiom-ernaehrung" },
  { term: "Nahrungsergänzungsmittel", definition: "Lebensmittel, die die allgemeine Ernährung ergänzen sollen und beispielsweise Vitamine, Mineralstoffe oder Pflanzenextrakte in konzentrierter Form enthalten.", relatedArticle: "nahrungsergaenzungsmittel-sinnvoll" },
  { term: "Nährstoffdichte", definition: "Verhältnis von Nährstoffen zum Energiegehalt eines Lebensmittels." },
  { term: "Omega-3-Fettsäuren", definition: "Mehrfach ungesättigte Fettsäuren. ALA kommt z. B. in Leinöl und Walnüssen vor; EPA und DHA vor allem in fettem Fisch und Algenöl.", relatedArticle: "omega-3-fettsaeuren" },
  { term: "OPC", definition: "Abkürzung für oligomere Proanthocyanidine – pflanzliche Polyphenole, die unter anderem in Traubenkernen vorkommen.", relatedArticle: "opc-traubenkernextrakt" },
  { term: "Coenzym Q10", definition: "Körpereigene Substanz, die in den Mitochondrien an der Energiegewinnung beteiligt ist.", relatedArticle: "coenzym-q10" },
  { term: "Prävention", definition: "Maßnahmen zur Vorbeugung von Krankheiten.", relatedArticle: "gesundheitsvorsorge-check-up" },
  { term: "Proteine", definition: "Eiweiße aus Aminosäuren, die unter anderem als Baustoffe und Enzyme wichtige Aufgaben im Körper übernehmen.", relatedArticle: "protein-eiweiss-ernaehrung" },
  { term: "Quark", definition: "Frischkäse aus Milch, der vergleichsweise viel Eiweiß enthält." },
  { term: "REM-Schlaf", definition: "Schlafphase mit schnellen Augenbewegungen, in der häufig lebhaft geträumt wird.", relatedArticle: "besser-schlafen-schlafhygiene" },
  { term: "Schlafhygiene", definition: "Gewohnheiten und Rahmenbedingungen, die einen erholsamen Schlaf begünstigen können.", relatedArticle: "besser-schlafen-schlafhygiene" },
  { term: "Spurenelemente", definition: "Mineralstoffe, die der Körper nur in sehr kleinen Mengen benötigt, etwa Eisen, Zink oder Jod." },
  { term: "Stoffwechsel", definition: "Gesamtheit der chemischen Vorgänge im Körper zur Aufnahme, Umwandlung und Ausscheidung von Stoffen." },
  { term: "Systolischer Wert", definition: "Der obere Blutdruckwert, gemessen, wenn das Herz Blut in die Gefäße pumpt." },
  { term: "Tagesrhythmus", definition: "Innerer, etwa 24-stündiger Rhythmus, der u. a. Schlaf und Wachsein steuert." },
  { term: "UVB-Strahlung", definition: "Anteil des Sonnenlichts, der in der Haut die Bildung von Vitamin D anstoßen kann.", relatedArticle: "vitamin-d-grundlagen" },
  { term: "Vitamin D", definition: "Fettlösliches Vitamin, das der Körper mithilfe von Sonnenlicht in der Haut bilden kann.", relatedArticle: "vitamin-d-grundlagen" },
  { term: "Wechselwirkung", definition: "Gegenseitige Beeinflussung von Medikamenten, Nahrungsergänzungsmitteln oder Lebensmitteln." },
  { term: "Zink", definition: "Spurenelement, das an zahlreichen Enzymen im Körper beteiligt ist." },
];

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function firstLetter(term: string): string {
  const c = term.charAt(0).toUpperCase();
  return ({ Ä: "A", Ö: "O", Ü: "U" } as Record<string, string>)[c] ?? c;
}

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const lexicon: LexiconEntry[] = raw
  .map((e) => ({ ...e, slug: slugify(e.term) }))
  .sort((a, b) => a.term.localeCompare(b.term, "de"));
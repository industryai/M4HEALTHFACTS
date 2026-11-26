import type { LexiconEntry } from "./types";

const raw: Omit<LexiconEntry, "slug">[] = [
  { term: "Antioxidantien", definition: "Stoffe, die bestimmte chemische Reaktionen (Oxidation) hemmen können. Sie kommen u. a. in pflanzlichen Lebensmitteln vor." },
  { term: "Ballaststoffe", definition: "Weitgehend unverdauliche Bestandteile pflanzlicher Lebensmittel, etwa aus Vollkorn, Gemüse und Hülsenfrüchten.", relatedArticle: "darm-verdauung-grundlagen" },
  { term: "Blutdruck", definition: "Der Druck, den das Blut auf die Gefäßwände ausübt. Er wird in zwei Werten angegeben: systolisch und diastolisch." },
  { term: "Calcium", definition: "Mineralstoff, der u. a. am Aufbau von Knochen und Zähnen beteiligt ist." },
  { term: "Cholesterin", definition: "Fettähnlicher Stoff, den der Körper selbst bildet und für Zellwände und Hormone benötigt." },
  { term: "Diastolischer Wert", definition: "Der untere Blutdruckwert, gemessen während der Entspannungsphase des Herzens." },
  { term: "Eisen", definition: "Spurenelement, das u. a. für den Sauerstofftransport im Blut benötigt wird." },
  { term: "Elektrolyte", definition: "Mineralstoffe wie Natrium, Kalium oder Magnesium, die in Körperflüssigkeiten gelöst sind." },
  { term: "Fettlösliche Vitamine", definition: "Vitamine A, D, E und K, die zusammen mit Fett aufgenommen und im Körper gespeichert werden können.", relatedArticle: "vitamin-d-grundlagen" },
  { term: "Früherkennung", definition: "Untersuchungen, die Krankheiten in einem frühen Stadium erkennen sollen.", relatedArticle: "vorsorgeuntersuchungen-ueberblick" },
  { term: "Glykämischer Index", definition: "Maß dafür, wie stark ein kohlenhydrathaltiges Lebensmittel den Blutzucker ansteigen lässt." },
  { term: "Hausmittel", definition: "Überlieferte, meist einfache Anwendungen aus dem Haushalt. Ihre Wirksamkeit ist oft nicht wissenschaftlich belegt.", relatedArticle: "ingwer-tradition" },
  { term: "Immunsystem", definition: "Das körpereigene Abwehrsystem gegen Krankheitserreger und fremde Stoffe." },
  { term: "Jod", definition: "Spurenelement, das für die Bildung von Schilddrüsenhormonen benötigt wird." },
  { term: "Kalorie", definition: "Maßeinheit für Energie, im Alltag meist als Kilokalorie (kcal) für den Energiegehalt von Lebensmitteln verwendet." },
  { term: "Kamille", definition: "Korbblütler, dessen getrocknete Blüten traditionell als Tee verwendet werden.", relatedArticle: "kamille-hausmittel" },
  { term: "Lymphe", definition: "Gewebsflüssigkeit, die über das Lymphsystem transportiert wird und an der Immunabwehr beteiligt ist." },
  { term: "Magnesium", definition: "Mineralstoff, der an vielen Stoffwechselprozessen sowie an Nerven- und Muskelfunktion beteiligt ist.", relatedArticle: "magnesium-im-alltag" },
  { term: "Mikrobiom", definition: "Gesamtheit der Mikroorganismen, die z. B. den Darm besiedeln.", relatedArticle: "darm-verdauung-grundlagen" },
  { term: "Nährstoffdichte", definition: "Verhältnis von Nährstoffen zum Energiegehalt eines Lebensmittels." },
  { term: "Omega-3-Fettsäuren", definition: "Mehrfach ungesättigte Fettsäuren, die u. a. in fettem Seefisch, Leinöl und Walnüssen vorkommen." },
  { term: "Prävention", definition: "Maßnahmen zur Vorbeugung von Krankheiten.", relatedArticle: "bewegung-im-alltag" },
  { term: "Proteine", definition: "Eiweiße; Bausteine des Körpers, die aus Aminosäuren bestehen." },
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
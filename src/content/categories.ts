import type { Category, CategorySlug } from "./types";

export const categories: Category[] = [
  { slug: "ernaehrung", name: "Ernährung", short: "Lebensmittel, Essgewohnheiten und Alltagsküche verständlich erklärt.", description: "Was steckt in unseren Lebensmitteln, und wie lässt sich eine ausgewogene Ernährung im Alltag umsetzen? Hier ordnen wir Ernährungsthemen sachlich ein – ohne Diätversprechen.", icon: "apple" },
  { slug: "bewegung-fitness", name: "Bewegung & Fitness", short: "Aktivität, Kraft, Ausdauer und gesunde Bewegung im Alltag.", description: "Bewegung ist ein wichtiger Bestandteil eines gesunden Lebensstils. Hier geht es um Ausdauer, Kraft, Beweglichkeit, Trainingsgrundlagen und alltagstaugliche Aktivität – ohne unrealistische Fitnessversprechen.", icon: "dumbbell" },
  { slug: "vitamine-naehrstoffe", name: "Nährstoffe & Nahrungsergänzung", short: "Vitamine, Mineralstoffe, Pflanzenstoffe und Supplemente sachlich erklärt.", description: "Von Vitamin D3 und Magnesium bis zu Pflanzenextrakten wie Kurkuma oder Ashwagandha: Wir erklären Inhaltsstoffe, natürliche Quellen, Studienlage, mögliche Risiken und Wechselwirkungen – ohne Heilversprechen.", icon: "pill" },
  { slug: "herz-kreislauf", name: "Herz-Kreislauf-Gesundheit", short: "Blutdruck, Cholesterin, Blutzucker und gesunde Gefäße verständlich erklärt.", description: "Wie Herz, Kreislauf und Blutgefäße funktionieren, welche Risikofaktoren wichtig sind und was Forschung und Leitlinien zu Prävention und Behandlung sagen.", icon: "heart" },
  { slug: "koerper-gesundheit", name: "Körper & Gesundheit", short: "Wie der Körper funktioniert – Organe, Abläufe, Zusammenhänge.", description: "Grundwissen über Organe, Stoffwechsel und körperliche Abläufe. Verständlich aufbereitet, damit Sie Gespräche mit Ärztinnen und Ärzten besser einordnen können.", icon: "heart" },
  { slug: "natur-hausmittel", name: "Natur & Hausmittel", short: "Traditionelle Hausmittel – überliefert, eingeordnet, ehrlich bewertet.", description: "Viele Hausmittel werden seit Generationen weitergegeben. Wir beschreiben ihre traditionelle Anwendung und sagen offen, wo die Erkenntnislage begrenzt ist.", icon: "leaf" },
  { slug: "schlaf-psyche", name: "Schlaf & Psyche", short: "Erholsamer Schlaf, Stress und seelisches Wohlbefinden.", description: "Schlaf und psychisches Wohlbefinden hängen eng zusammen. Hier finden Sie Hintergrundwissen und alltagsnahe Anregungen – keine Therapie und keine Diagnose.", icon: "moon" },
  { slug: "praevention", name: "Prävention", short: "Vorsorge, Bewegung und gesunde Routinen für den Alltag.", description: "Vorbeugen beginnt im Alltag: Bewegung, Vorsorgeuntersuchungen und Gewohnheiten. Wir zeigen, welche Fragen Sie mit Ihrer Hausarztpraxis besprechen können.", icon: "shield" },
];

export function getCategory(slug: CategorySlug): Category {
  const c = categories.find((x) => x.slug === slug);
  if (!c) throw new Error(`Unknown category ${slug}`);
  return c;
}
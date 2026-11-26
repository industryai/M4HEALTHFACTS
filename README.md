# M4healthfacts

Eigenständiges digitales Gesundheitsportal mit verständlichen, sorgfältig eingeordneten Informationen zu Ernährung, Vitaminen und Nährstoffen, Körper und Gesundheit, Naturheilkunde, Schlaf, Psyche und Prävention.

## Tech-Stack

- React 19 + TypeScript
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS 4
- Lucide Icons
- Lokale, zentral strukturierte Inhalte in `src/content/`

## Lokal starten

Voraussetzungen: Node.js (aktuelle LTS-Version) und npm oder Bun.

```bash
npm install
npm run dev
```

Produktionsbuild und Prüfungen:

```bash
npm run build
npm run lint
npm test
```

## Projektstruktur

- `src/routes/` – Startseite und dynamische Inhaltsseiten
- `src/content/` – Ratgeber, Kategorien, Fakten und Gesundheitslexikon
- `src/components/ui/` – wiederverwendbare UI-Komponenten
- `src/styles.css` – Designsystem und globale Styles
- `public/` – statische Dateien

## Redaktioneller Hinweis

Die vorhandenen Artikel sind redaktionelle Entwürfe und noch nicht zur Veröffentlichung freigegeben. Fehlende Quellen müssen vor Veröffentlichung ergänzt und medizinische Aussagen geprüft werden. Es werden keine ärztlichen Qualifikationen oder fachlichen Prüfungen behauptet, sofern diese nicht tatsächlich stattgefunden haben.

Die rechtlichen Seiten sind Platzhalter und müssen vor einem öffentlichen Launch mit den tatsächlichen Betreiber- und Datenschutzangaben vervollständigt werden.

## Hosting

Die Hosting- und Domain-Konfiguration wird separat eingerichtet. Die Domain ist noch nicht festgelegt.
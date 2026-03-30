# Plan: Salt.Magic Next.js React Projekt

**Erstellt:** 2026-03-26
**Status:** Implementiert
**Anforderung:** Website als Next.js + Tailwind CSS Projekt aufsetzen, basierend auf der Luxo-Stil Preview V3. Echte Produktfotos, Playfair Display + Inter, centered spa-artiges Design. Soll später in Lovable implementiert/nachgebaut werden.

---

## Überblick

### Was dieser Plan erreicht
                                       
Erstellt ein vollständiges Next.js 14 (App Router) + Tailwind CSS Projekt, das die Salt.Magic Website als funktionsfähige React-Applikation implementiert. Das Design basiert 1:1 auf der abgenommenen Preview V3 (Luxo-Stil): centered Layouts, full-bleed Produktfotos, Droplet-Logo als dekoratives Motiv, grosszügiger Whitespace, spa-artiger Flow.

### Warum das wichtig ist

Die bisherigen Spec-Dokumente und HTML-Previews sind nicht implementierbar — es fehlt eine echte Codebasis. Ein Next.js-Projekt liefert:
- Funktionierende React-Komponenten die direkt in Lovable übernommen oder als Referenz nachgebaut werden können
- SSG/SSR für GEO-Optimierung (Content im initialen HTML für AI-Crawler)
- Lokaler Dev-Server für sofortiges visuelles Feedback
- Komponentenarchitektur die wartbar und erweiterbar ist

---

## Aktueller Zustand

### Relevante bestehende Struktur

- `outputs/preview/index.html` — Abgenommene Preview V3 (Luxo-Stil, 965 Zeilen), dient als Design-Referenz
- `outputs/design-spec-v1.md` — Design-Tokens (Farben, Typography, Spacing)
- `outputs/copy-homepage-v1.md` — GEO-optimierte Copy für alle Sektionen
- `outputs/copy-meta-v1.md` — Meta Tags, Structured Data (JSON-LD)
- `outputs/sitemap-v1.md` — Navigation, Routing, Seitenstruktur
- `reference/product-pics/` — Echte Produktfotos (JPG/HEIC)
- `reference/logos/` — Logo-Varianten (PNG, mit/ohne Hintergrund)
- `reference/mood-board/` — Ästhetik-Referenzen (MarocMaroc, Panpuri, Alo)

### Lücken oder Probleme, die adressiert werden

1. **Kein Code-Projekt** — bisher nur Markdown-Specs und eine statische HTML-Datei
2. **Preview nutzt relative Pfade** zu Assets ausserhalb des Projekts — nicht portabel
3. **Keine Komponentenarchitektur** — alles in einer Datei, nicht wiederverwendbar
4. **Kein Dev-Server** — keine Live-Vorschau während der Entwicklung
5. **Keine SSR/SSG** — die HTML-Preview wird client-seitig gerendert, schlecht für GEO

---

## Vorgeschlagene Änderungen

### Zusammenfassung der Änderungen

- Next.js 14 Projekt mit App Router im Workspace-Root erstellen (Unterordner `site/`)
- Tailwind CSS mit Custom-Design-Tokens konfigurieren
- Produktfotos und Logos in `public/images/` kopieren
- Jede Sektion als eigene React-Komponente
- Scroll-Animationen mit Intersection Observer (kein Framer Motion nötig für V1)
- Responsive Design (Mobile-first)
- Meta Tags und JSON-LD Structured Data
- Testimonial-Carousel und FAQ-Accordion als interaktive Komponenten

### Neue Dateien erstellen

| Dateipfad | Zweck |
|---|---|
| `site/` | Next.js Projekt-Root |
| `site/package.json` | Dependencies (next, react, tailwindcss) |
| `site/next.config.js` | Next.js Konfiguration |
| `site/tailwind.config.ts` | Tailwind mit Salt.Magic Design-Tokens |
| `site/tsconfig.json` | TypeScript Konfiguration |
| `site/postcss.config.js` | PostCSS für Tailwind |
| `site/app/layout.tsx` | Root Layout (Fonts, Meta, Nav, Footer) |
| `site/app/page.tsx` | Homepage — rendert alle Sektionen |
| `site/app/globals.css` | Tailwind Directives + Custom Styles |
| `site/components/Nav.tsx` | Sticky Navigation mit Scroll-Effekt |
| `site/components/Hero.tsx` | Full-viewport Hero mit Produktfoto |
| `site/components/Divider.tsx` | Droplet-Logo Trennmotiv |
| `site/components/TextBlock.tsx` | Centered Text-Sektion (wiederverwendbar) |
| `site/components/Ingredients.tsx` | Drei-Spalten Inhaltsstoffe |
| `site/components/ImageBreak.tsx` | Full-bleed Bild mit optionalem Overlay-Text |
| `site/components/Products.tsx` | Zwei Produktkarten |
| `site/components/Testimonials.tsx` | Carousel mit Auto-Advance |
| `site/components/Partner.tsx` | Split-Layout: Info + Formular |
| `site/components/Faq.tsx` | Accordion mit Plus/Minus Toggle |
| `site/components/CtaBanner.tsx` | Abschluss-CTA auf dunklem Hintergrund |
| `site/components/Footer.tsx` | 4-Spalten Footer |
| `site/components/RevealOnScroll.tsx` | Intersection Observer Wrapper |
| `site/public/images/` | Produktfotos und Logos |

### Zu ändernde Dateien

| Dateipfad | Änderungen |
|---|---|
| `CLAUDE.md` | Neuen `site/` Ordner dokumentieren, Dev-Server Anleitung |

### Zu löschende Dateien

Keine — bestehende Specs bleiben als Referenz erhalten.

---

## Design-Entscheidungen

### Getroffene Schlüsselentscheidungen

1. **Next.js 14 App Router (nicht Pages Router):** App Router ist der aktuelle Standard, bietet Server Components, besseres SEO/SSG, und ist zukunftssicher.

2. **Projekt in `site/` Unterordner:** Der Workspace bleibt ein Planungs-Workspace. Das Next.js-Projekt lebt separat in `site/`, stört keine bestehenden Dateien.

3. **TypeScript:** Lovable nutzt TypeScript. Gleiche Sprache erleichtert die spätere Übernahme.

4. **Kein Framer Motion in V1:** Die Scroll-Animationen aus der Preview (fade-up mit Intersection Observer) lassen sich mit einem einfachen Custom Hook + CSS Transitions umsetzen. Weniger Dependencies = einfacher für Lovable-Transfer.

5. **Bilder als statische Assets in `public/`:** Produktfotos werden einmalig aus `reference/` nach `site/public/images/` kopiert. Next.js Image-Optimierung via `next/image`.

6. **Tailwind Design-Tokens statt CSS Custom Properties:** Die Farben/Fonts aus der Preview werden als Tailwind-Erweiterungen konfiguriert. Das ist der Lovable-kompatible Ansatz.

7. **Einzelne Homepage mit Sektionen (kein Multi-Page Routing):** Wie in der Preview — eine Seite mit Anchor-Navigation. Blog-Seite wird in V2 ergänzt.

8. **Content direkt in Komponenten (kein CMS):** Für V1 ist hardcoded Content der schnellste Weg. CMS-Integration (z.B. für Blog) kommt später.

### Betrachtete Alternativen

- **Vite + React:** Kein SSR/SSG out-of-the-box. Schlecht für GEO-Optimierung. Next.js bietet hier klaren Vorteil.
- **Astro:** Guter Static Site Generator, aber Lovable nutzt React/Next.js. Kompatibilität geht vor.
- **CSS Modules statt Tailwind:** Lovable-Projekte nutzen Tailwind. Gleicher Stack = einfacherer Transfer.

### Offene Fragen

1. **Formular-Backend:** Wohin soll das Partner-Formular submitten? (Für V1: nur Frontend, kein Backend. Formspree/Netlify Forms als spätere Option.)

---

## Schritt-für-Schritt-Aufgaben

### Schritt 1: Next.js Projekt initialisieren

Erstelle das Next.js-Projekt im `site/` Unterordner mit allen nötigen Dependencies.

**Aktionen:**

- `npx create-next-app@latest site --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --no-turbopack` ausführen (oder manuell aufsetzen wenn interaktive Prompts blockieren)
- Falls der interaktive Installer nicht funktioniert: manuell `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js` erstellen und `npm install` ausführen
- Dependencies: `next`, `react`, `react-dom`, `typescript`, `tailwindcss`, `postcss`, `autoprefixer`, `@types/react`, `@types/node`
- Unnötige Boilerplate-Dateien entfernen (default page, default styles, Vercel SVGs)

**Betroffene Dateien:**

- `site/package.json` (neu)
- `site/next.config.js` (neu)
- `site/tsconfig.json` (neu)
- `site/tailwind.config.ts` (neu)
- `site/postcss.config.js` (neu)

---

### Schritt 2: Tailwind Design-Tokens konfigurieren

Übersetze das Farbsystem und die Typography aus der Preview V3 in Tailwind-Konfiguration.

**Aktionen:**

- Tailwind Config erweitern mit Custom Colors:
  ```
  warm-white: #F5F0E8
  cream: #FAF8F5
  ink: #2C2421
  ink-light: #6B5D4F
  ink-faint: #9B8E82
  mineral: #294B6D
  gold: #C4A882
  gold-light: #D4BFAA
  terra: #B86B3E
  sand: #E5DDD2
  ```
- Fonts konfigurieren: `display` (Playfair Display) und `body` (Inter) über `next/font/google`
- Custom Spacing-Werte falls nötig (Tailwind Defaults sind meist ausreichend)

**Betroffene Dateien:**

- `site/tailwind.config.ts`
- `site/app/layout.tsx` (Font-Loading via next/font)

---

### Schritt 3: Assets vorbereiten

Kopiere die benötigten Produktfotos und Logos in den `public/` Ordner des Next.js Projekts.

**Aktionen:**

- Ordner `site/public/images/products/` und `site/public/images/logos/` erstellen
- Folgende Bilder kopieren (basierend auf Preview V3 Nutzung):
  - `Salt Magic Taylor(8).jpg` → Hero
  - `Salt Magic Greenery.JPG` → After "Why" section
  - `Salt Magic Taylor.jpg` → Image break (tropical water)
  - `Salt Magic Taylor(4).jpg` → nicht in V3 preview verwendet, optional
  - `Salt Magic Taylor(10).jpg` → Product card (Glass Jar)
  - `Salt Magic Greenery(1).JPG` → nicht in V3 preview verwendet, optional
  - `Salt Magic Greenery(2).JPG` → Image break 2
  - `Sachet updated creative.jpg` → Product card (Sachet)
  - `Salt Magic Taylor(2).jpg` → Story section
  - `Salt Magic Taylor(6).jpg` → nicht in V3 preview verwendet, optional
  - `logo no background.png` → Nav-Logo + Divider-Motiv
  - `Logo white background.png` → Fallback
- Dateien umbenennen zu URL-freundlichen Namen (keine Klammern/Leerzeichen):
  - `taylor-hero.jpg`, `greenery-jars.jpg`, `taylor-water.jpg`, `taylor-closeup.jpg`, `greenery-duo.jpg`, `sachet.jpg`, `taylor-story.jpg`, `logo.png`, `logo-white.png`

**Betroffene Dateien:**

- `site/public/images/products/` (neu, mit kopierten/umbenannten Bildern)
- `site/public/images/logos/` (neu, mit kopierten Logos)

---

### Schritt 4: Root Layout und Global Styles

Erstelle das Root Layout mit Font-Loading, Meta Tags und globalen Styles.

**Aktionen:**

- `app/layout.tsx`:
  - Playfair Display und Inter via `next/font/google` laden
  - CSS-Variablen für Font-Familien setzen
  - HTML lang="en"
  - Meta-Tags aus `outputs/copy-meta-v1.md` (Title, Description, OG Tags)
  - JSON-LD Structured Data (Organization Schema) als Script-Tag
  - Children rendern zwischen Nav und Footer
- `app/globals.css`:
  - Tailwind Directives (`@tailwind base/components/utilities`)
  - Base Styles: body background, antialiasing, scroll-smooth
  - Utility-Klassen die in Tailwind nicht direkt ausdrückbar sind (z.B. `.gold-line` Divider)

**Betroffene Dateien:**

- `site/app/layout.tsx` (neu)
- `site/app/globals.css` (neu)

---

### Schritt 5: RevealOnScroll Utility-Komponente

Erstelle einen wiederverwendbaren Wrapper für Scroll-Animationen via Intersection Observer.

**Aktionen:**

- `components/RevealOnScroll.tsx`:
  - Client Component (`"use client"`)
  - Nutzt `useRef` und `useEffect` mit `IntersectionObserver`
  - Props: `children`, `delay?` (in ms), `className?`
  - Rendered ein `<div>` das bei Sichtbarkeit von `opacity-0 translate-y-12` zu `opacity-100 translate-y-0` animiert
  - Respektiert `prefers-reduced-motion`
  - Trigger nur einmal (nicht bei Scroll-zurück)

**Betroffene Dateien:**

- `site/components/RevealOnScroll.tsx` (neu)

---

### Schritt 6: Nav-Komponente

Erstelle die fixierte Navigation mit Scroll-Transparenz-Effekt.

**Aktionen:**

- `components/Nav.tsx`:
  - Client Component (braucht scroll listener)
  - Fixed, centered, height 80px
  - Logo links (next/image, Droplet-Logo)
  - Nav-Links rechts: Why, Products, Story, Partner
  - "Shop Now" als Pill-Button (Terracotta)
  - Transparent bei top, wird bei Scroll semi-transparent mit Blur
  - Mobile: nur Logo + Shop Now CTA (keine Hamburger-Menu in V1 — keep it simple)
  - Smooth-scroll zu Anchor-IDs

**Betroffene Dateien:**

- `site/components/Nav.tsx` (neu)

---

### Schritt 7: Hero-Komponente

Full-viewport Hero mit Produktfoto als Hintergrund.

**Aktionen:**

- `components/Hero.tsx`:
  - 100vh Höhe, min-height 600px
  - Hintergrundbild: `taylor-hero.jpg` via next/image mit `fill` und `priority`
  - Gradient-Overlay (transparent oben → dunkel unten)
  - Content centered am unteren Rand:
    - Eyebrow: "Natural Electrolytes"
    - H1: "Rediscover what your water is *missing*" (em für italic)
    - Subtext
    - Zwei CTAs: "Shop Now" (weiss/solid) + "Partner With Us" (ghost/outline)
  - Alles in RevealOnScroll gewrappt

**Betroffene Dateien:**

- `site/components/Hero.tsx` (neu)

---

### Schritt 8: Divider-Komponente

Wiederverwendbares Droplet-Logo Trennmotiv.

**Aktionen:**

- `components/Divider.tsx`:
  - Server Component (kein State)
  - Props: `size?: "sm" | "md"` (32px oder 48px)
  - Centered, padding oben/unten, Logo mit opacity 15%
  - Nutzt next/image

**Betroffene Dateien:**

- `site/components/Divider.tsx` (neu)

---

### Schritt 9: TextBlock-Komponente

Wiederverwendbarer centered Text-Block für Sektionen.

**Aktionen:**

- `components/TextBlock.tsx`:
  - Server Component
  - Props: `eyebrow?`, `title`, `children` (für Body-Text)
  - Max-width 680px, centered
  - Goldener Horizontal-Line oben
  - Eyebrow: uppercase, spaced, gold
  - Titel: Playfair Display, mineral-blue
  - Children: Inter light, ink-light
  - Jedes Element in RevealOnScroll

**Betroffene Dateien:**

- `site/components/TextBlock.tsx` (neu)

---

### Schritt 10: Ingredients-Komponente

Drei-Spalten Grid für die Inhaltsstoffe.

**Aktionen:**

- `components/Ingredients.tsx`:
  - 3-Column Grid (1 Column auf Mobile)
  - Jede Spalte: grosse Zahl (Playfair), Unit (uppercase terra), Titel, Beschreibung
  - Daten: 312mg Magnesium, 160mg Potassium, 152mg Pink Himalayan Salt
  - Staggered Reveal (delay per Spalte)

**Betroffene Dateien:**

- `site/components/Ingredients.tsx` (neu)

---

### Schritt 11: ImageBreak-Komponente

Full-bleed Bild mit optionalem Text-Overlay.

**Aktionen:**

- `components/ImageBreak.tsx`:
  - Props: `src`, `alt`, `tall?` (boolean für extra Höhe), `overlay?` (title + text)
  - Full-width, object-cover
  - Optional: Gradient-Overlay von unten mit weissem Text
  - next/image mit sizes und responsive loading

**Betroffene Dateien:**

- `site/components/ImageBreak.tsx` (neu)

---

### Schritt 12: Products-Komponente

Zwei Produktkarten nebeneinander.

**Aktionen:**

- `components/Products.tsx`:
  - 2-Column Grid (1 Column auf Mobile)
  - Jede Karte: Bild mit rounded corners + hover-zoom, Tag, Name, Preis, Meta, Beschreibung, CTA-Button
  - Daten: Glass Jar (490 THB, 70 servings) + Paper Sachet (290 THB, 30 servings)

**Betroffene Dateien:**

- `site/components/Products.tsx` (neu)

---

### Schritt 13: Testimonials-Komponente

Carousel mit Auto-Advance und Dot-Navigation.

**Aktionen:**

- `components/Testimonials.tsx`:
  - Client Component
  - State: aktiver Slide-Index
  - 5 Testimonials (aus copy-homepage-v1.md)
  - Grosses Playfair-Zitat (italic), Autor, Ort
  - Quote-Mark als dekoratives Element
  - Dot-Navigation unten
  - Auto-advance alle 6 Sekunden
  - Fade-Transition zwischen Slides

**Betroffene Dateien:**

- `site/components/Testimonials.tsx` (neu)

---

### Schritt 14: Partner-Komponente

Split-Layout mit dunklem Info-Panel und hellem Formular.

**Aktionen:**

- `components/Partner.tsx`:
  - Client Component (Formular-State)
  - 2-Column Split (stacked auf Mobile)
  - Links: Mineral-Blue Hintergrund, Eyebrow, Titel, Body, 4 Metric-Karten (90% Retention, 35-40% Margins, 150+ Locations, 4.4x Revenue)
  - Rechts: Cream Hintergrund, Formular mit Name, Company, Role, Email, Message, Submit
  - Formular hat Client-seitige Validierung, Submit zeigt Erfolgs-Message (kein Backend in V1)

**Betroffene Dateien:**

- `site/components/Partner.tsx` (neu)

---

### Schritt 15: FAQ-Komponente

Accordion mit Plus/Minus Toggle.

**Aktionen:**

- `components/Faq.tsx`:
  - Client Component
  - State: offener Index (oder null)
  - 6 FAQ-Items (aus copy-homepage-v1.md)
  - Playfair-Frage, Plus/Minus Icon (CSS), animiertes max-height
  - Nur ein Item gleichzeitig offen

**Betroffene Dateien:**

- `site/components/Faq.tsx` (neu)

---

### Schritt 16: CtaBanner und Footer

Abschluss-CTA und Footer.

**Aktionen:**

- `components/CtaBanner.tsx`:
  - Mineral-Blue Hintergrund
  - Centered: Titel, Subtext, Shop Now Button
- `components/Footer.tsx`:
  - Dunkler Hintergrund (#1D3347)
  - 4-Spalten Grid: Brand+Tagline, Navigate-Links, Connect-Info, Newsletter-Input
  - Bottom-Bar: "Made on Koh Samui" + Copyright
  - Responsive: 2-col auf Tablet, 1-col auf Mobile

**Betroffene Dateien:**

- `site/components/CtaBanner.tsx` (neu)
- `site/components/Footer.tsx` (neu)

---

### Schritt 17: Homepage zusammensetzen

Alle Komponenten in der richtigen Reihenfolge auf der Homepage rendern.

**Aktionen:**

- `app/page.tsx`:
  - Importiere alle Komponenten
  - Rendere in exakter Reihenfolge der Preview V3:
    1. Hero
    2. Divider
    3. TextBlock "Dead Water Crisis" (#why)
    4. ImageBreak (Greenery Jars, padded + rounded)
    5. TextBlock "Three Ingredients" + Ingredients
    6. ImageBreak (Taylor Water, full-bleed, tall, mit Overlay)
    7. TextBlock "For Everyone, Every Day"
    8. Divider (sm)
    9. TextBlock "Find Your Format" + Products (#products)
    10. ImageBreak (Greenery Duo, full-bleed)
    11. Testimonials
    12. Divider (sm)
    13. TextBlock "Born on Koh Samui" (#story) + ImageBreak (padded)
    14. Partner (#partner)
    15. FAQ
    16. CtaBanner
    17. Footer (im Layout, nicht in page.tsx)

**Betroffene Dateien:**

- `site/app/page.tsx` (neu)

---

### Schritt 18: Testen und Validieren

Dev-Server starten und alles prüfen.

**Aktionen:**

- `cd site && npm run dev` — Server starten auf localhost:3000
- Visuell prüfen:
  - Fonts laden korrekt (Playfair Display + Inter)
  - Bilder laden (alle Produktfotos sichtbar)
  - Farben stimmen mit Preview V3 überein
  - Scroll-Animationen funktionieren
  - Testimonial-Carousel rotiert
  - FAQ-Accordion öffnet/schliesst
  - Navigation scrollt smooth zu Anchors
  - Nav wird bei Scroll semi-transparent
  - Responsive: Mobile und Desktop
- Build testen: `npm run build` — keine Fehler

**Betroffene Dateien:**

- Keine neuen Dateien

---

### Schritt 19: CLAUDE.md aktualisieren

Workspace-Dokumentation aktualisieren.

**Aktionen:**

- `site/` Ordner zur Workspace-Struktur hinzufügen
- Dev-Server Anleitung: `cd site && npm run dev`
- Hinweis dass das React-Projekt die Preview V3 als Code implementiert
- Referenz zu den Spec-Dokumenten die weiterhin als Content-Quelle dienen

**Betroffene Dateien:**

- `CLAUDE.md`

---

## Verbindungen & Abhängigkeiten

### Dateien, die diesen Bereich referenzieren

- `CLAUDE.md` — muss aktualisiert werden
- `outputs/preview/index.html` — dient als Design-Referenz, wird nicht geändert
- `outputs/copy-homepage-v1.md` — Content-Quelle für alle Texte
- `outputs/copy-meta-v1.md` — Meta Tags und Structured Data
- `outputs/design-spec-v1.md` — Design-Token-Referenz (Farben, Typography)

### Nötige Updates für Konsistenz

- `CLAUDE.md` — neuen `site/` Ordner und Dev-Workflow dokumentieren

### Auswirkungen auf bestehende Workflows

- Keine bestehenden Workflows werden gestört
- `/prime` liest weiterhin CLAUDE.md und context/
- Die Spec-Dokumente in `outputs/` bleiben als Referenz bestehen
- Neuer Workflow: `cd site && npm run dev` für lokale Entwicklung

---

## Validierungs-Checkliste

- [ ] `npm run dev` startet ohne Fehler auf localhost:3000
- [ ] `npm run build` läuft erfolgreich durch
- [ ] Alle Produktfotos laden korrekt
- [ ] Playfair Display und Inter Fonts sind sichtbar
- [ ] Farbpalette stimmt mit Preview V3 überein
- [ ] Hero ist full-viewport mit Hintergrundbild
- [ ] Droplet-Logo erscheint als Divider zwischen Sektionen
- [ ] Scroll-Animationen (fade-up) funktionieren
- [ ] Nav wird bei Scroll semi-transparent mit Blur
- [ ] Testimonial-Carousel rotiert automatisch, Dots funktionieren
- [ ] FAQ-Accordion öffnet/schliesst mit Plus/Minus Animation
- [ ] Partner-Formular hat Input-Felder und Submit-Button
- [ ] Responsive: Mobile-Layout funktioniert (stacked columns, kleinere Fonts)
- [ ] CLAUDE.md ist aktualisiert
- [ ] Keine TypeScript-Fehler

---

## Erfolgskriterien

Die Implementierung ist abgeschlossen, wenn:

1. Das Next.js-Projekt unter `site/` läuft und visuell der Preview V3 entspricht
2. Alle Sektionen der Homepage sind als React-Komponenten implementiert
3. Echte Produktfotos und Logos werden korrekt angezeigt
4. Der Build (`npm run build`) läuft fehlerfrei
5. Die Seite ist responsive (Mobile + Desktop)
6. CLAUDE.md ist aktualisiert

---

## Notizen

- **Lovable-Transfer:** Die Komponenten sind bewusst einfach gehalten (kein State-Management-Framework, minimale Dependencies). Lovable unterstützt React + Tailwind, daher sollte der Transfer straightforward sein.
- **Blog-Seite:** Nicht in V1 enthalten. Wird als separate Route `/blog` in V2 ergänzt.
- **Formular-Backend:** V1 hat kein Backend. Optionen für V2: Formspree, Netlify Forms, Supabase, oder eigene API Route.
- **Bilder-Optimierung:** next/image sorgt für automatische WebP-Konvertierung und responsive sizes. Für Lovable müssen die Bilder ggf. manuell optimiert werden.
- **Keine Animation-Library:** Bewusste Entscheidung. Die Scroll-Animationen laufen über einen simplen Intersection Observer Hook + CSS Transitions. Das ist leichtgewichtig und Lovable-kompatibel.

---

## Implementierungsnotizen

**Implementiert:** 2026-03-26

### Zusammenfassung

Next.js 14 Projekt mit App Router und Tailwind CSS in `site/` erstellt. Alle 13 Komponenten implementiert (Nav, Hero, Divider, TextBlock, ImageBreak, Ingredients, Products, Testimonials, Partner, Faq, CtaBanner, Footer, RevealOnScroll). Produktfotos und Logos nach `site/public/images/` kopiert und URL-freundlich umbenannt. Homepage assembliert mit exakter Sektionsreihenfolge der Preview V3. Build läuft fehlerfrei.

### Abweichungen vom Plan

- `next.config.js` ohne `output: 'export'` konfiguriert, da `next/image` Optimierung im Default-Modus besser funktioniert. Für statischen Export kann das später ergänzt werden.

### Aufgetretene Probleme

Keine

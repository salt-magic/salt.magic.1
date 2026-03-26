# Plan: Luxo-Style Redesign mit Framer Motion Animationen

**Erstellt:** 2026-03-26
**Status:** Implementiert
**Anforderung:** Komplettes visuelles Redesign der Salt.Magic Website nach dem Vorbild der Luxo Spa Webflow-Vorlage (luxo-128.webflow.io). Smooth Framer Motion Animationen, weisserer/luftigerer Look, zentrierte Nav, Hero-Slider, organische Sektionsuebergaenge. Mineral-Blue bleibt Hauptfarbe, Hintergrund wird Weiss.

---

## Ueberblick

### Was dieser Plan erreicht

Transformiert die bestehende Salt.Magic Next.js-Website von einem warmen, spa-artigen Design zu einem moderneren, luxurioeseren Look inspiriert von der Luxo Webflow-Vorlage. Alle Scroll-Animationen werden von einem einfachen Intersection Observer auf Framer Motion umgestellt fuer butterweiche, professionelle Transitions.

### Warum das wichtig ist

Der Luxo-Stil vermittelt genau die Premium-Positionierung, die Salt.Magic als Marke anstrebt: elegant, clean, vertrauenswuerdig. Die Framer Motion Animationen schaffen ein hochwertiges Web-Erlebnis, das die Qualitaet des Produkts widerspiegelt und sich von generischen Electrolyte-Websites abhebt.

---

## Aktueller Zustand

### Relevante bestehende Struktur

- `site/components/Nav.tsx` — Logo links, Links rechts, Terracotta CTA
- `site/components/Hero.tsx` — Statisches Hintergrundbild, fade-up Reveal
- `site/components/RevealOnScroll.tsx` — Einfacher Intersection Observer Wrapper
- `site/components/TextBlock.tsx` — Gold-Line + Eyebrow + Title + Body
- `site/components/ImageBreak.tsx` — Full-bleed oder padded Bilder
- `site/components/Divider.tsx` — Droplet-Logo mit 15% Opacity
- `site/components/Ingredients.tsx` — 3-Spalten Zahlen-Grid
- `site/components/Products.tsx` — 2-Spalten Produktkarten
- `site/components/Testimonials.tsx` — Carousel mit CSS Transitions
- `site/components/Partner.tsx` — Split Dark/Light mit Formular
- `site/components/Faq.tsx` — Accordion mit CSS max-height
- `site/components/CtaBanner.tsx` — Mineral-Blue Hintergrund, weisser Text
- `site/components/Footer.tsx` — Dunkler Hintergrund, 4-Spalten Grid
- `site/app/globals.css` — Tailwind Directives, `.reveal` CSS Klasse
- `site/app/layout.tsx` — Root Layout mit Fonts und Meta
- `site/app/page.tsx` — Homepage Komposition
- `site/tailwind.config.ts` — Design-Tokens (warm-white, cream, etc.)

### Luecken oder Probleme, die adressiert werden

1. **Animationen zu simpel** — CSS-basierter Intersection Observer, keine Spring-Physics, kein Stagger, kein Parallax
2. **Hintergrund zu warm** — warm-white (#F5F0E8) wirkt weniger modern als reines Weiss
3. **Nav-Layout nicht premium genug** — Logo links ist Standard, zentriertes Logo wirkt luxurioeser
4. **Hero ist statisch** — kein Slider, keine Pfeile, weniger dynamisch
5. **Buttons zu hart** — Solid Terracotta statt eleganter Outline/Soft-Buttons
6. **Keine organischen Uebergaenge** — harte Sektionsgrenzen statt Wellenformen
7. **TextBlocks zu formulaerhaft** — immer Gold-Line + Eyebrow, statt mixed italic Akzente in Headlines
8. **CTA-Sektionen nicht layered** — kein Overlap-Effekt (Card ueber Bild)
9. **Footer ohne organischen Uebergang** — direkt dunkler Block statt Welle

---

## Vorgeschlagene Aenderungen

### Zusammenfassung der Aenderungen

- Framer Motion als Dependency hinzufuegen
- Hintergrundfarbe von warm-white auf Weiss aendern
- RevealOnScroll durch Framer Motion `motion` Components ersetzen
- Nav: Logo zentriert, Links aufgeteilt links/rechts
- Hero: Slider mit Pfeilen und auto-advance
- TextBlock: Groessere Headlines mit inline italic-Akzenten, kein Eyebrow/Gold-Line Default
- Buttons: Outline-Stil und Soft-Rosé als Akzent (neben Mineral-Blue)
- CtaBanner: Weisse Card die ueber ein Bild ragt (Overlap-Effekt)
- Footer: Mineral-Blue Wellenform oben, dann dunkler Bereich
- FAQ: Framer Motion AnimatePresence fuer smooth Open/Close
- Testimonials: Framer Motion Fade-Transitions
- Alle Sektionen: whileInView Animationen mit Stagger
- Parallax-Effekt auf Hero und Image Breaks

### Neue Dateien erstellen

| Dateipfad | Zweck |
|---|---|
| `site/components/Motion.tsx` | Wiederverwendbare Framer Motion Wrapper (FadeIn, SlideUp, StaggerContainer, Parallax) |

### Zu aendernde Dateien

| Dateipfad | Aenderungen |
|---|---|
| `site/package.json` | `framer-motion` als Dependency hinzufuegen |
| `site/tailwind.config.ts` | Hintergrund auf Weiss, Rosé-Akzentfarbe hinzufuegen, ggf. Farbanpassungen |
| `site/app/globals.css` | Body-Background auf Weiss, `.reveal` Klassen entfernen, smooth scroll behalten |
| `site/app/layout.tsx` | Body-Klassen anpassen (weisser Hintergrund) |
| `site/app/page.tsx` | Sektionskomposition anpassen (neue Props, Reihenfolge, Overlap-CTA) |
| `site/components/Nav.tsx` | Logo zentriert, Links links/rechts aufgeteilt |
| `site/components/Hero.tsx` | Slider mit Pfeilen, groessere Typografie, Outline-Button |
| `site/components/TextBlock.tsx` | Groessere Headlines, italic-Akzent Support via `dangerouslySetInnerHTML` oder JSX children, Gold-Line optional |
| `site/components/ImageBreak.tsx` | Framer Motion Parallax, Scale-on-View |
| `site/components/Divider.tsx` | Evtl. groesseres Motiv oder wegfallen lassen (Luxo nutzt kein Divider-Motiv) |
| `site/components/Ingredients.tsx` | Framer Motion Stagger, evtl. Layout-Anpassung |
| `site/components/Products.tsx` | Framer Motion Hover-Effekte, weichere Cards |
| `site/components/Testimonials.tsx` | Framer Motion AnimatePresence fuer Slide-Transitions |
| `site/components/Partner.tsx` | Framer Motion Reveals, weichere Formular-Gestaltung |
| `site/components/Faq.tsx` | Framer Motion AnimatePresence fuer Accordion |
| `site/components/CtaBanner.tsx` | Overlap-Card ueber Bild, Mineral-Blue Akzente |
| `site/components/Footer.tsx` | Mineral-Blue Welle oben (SVG), dunkler Bereich darunter |
| `site/components/RevealOnScroll.tsx` | Entfernen — wird durch Motion.tsx Wrapper ersetzt |
| `CLAUDE.md` | Design-Stil-Update dokumentieren |

### Zu loeschende Dateien

| Dateipfad | Begruendung |
|---|---|
| `site/components/RevealOnScroll.tsx` | Wird durch Framer Motion Wrapper in Motion.tsx ersetzt |

---

## Design-Entscheidungen

### Getroffene Schluesselentscheidungen

1. **Mineral-Blue (#294B6D) bleibt Hauptfarbe:** User-Vorgabe. Wird fuer Headlines, Partner-Sektion, CTA-Akzente und Footer-Welle genutzt. Luxo nutzt Rosé — wir ersetzen Rosé durch Mineral-Blue wo es als Markenfarbe passt.

2. **Weisser Hintergrund (#FFFFFF) statt warm-white:** Wirkt moderner und cleaner, wie bei Luxo. Cream (#FAF8F5) bleibt als sekundaere Flaeche (z.B. Formular-Hintergrund).

3. **Framer Motion statt CSS Intersection Observer:** Ermoeglicht Spring-Physics, Stagger, AnimatePresence, Parallax — alles was den "smooth" Luxo-Feel ausmacht. ~50KB Bundle-Groesse ist akzeptabel fuer die UX-Verbesserung.

4. **Gold (#C4A882) als einzige Kontraerfarbe, sehr sparsam:** Gold wird nur fuer dezente Akzente eingesetzt — Eyebrow-Text, Divider-Linien, dekorative Elemente, Hover-States. Kein Rosé. Kein Terra fuer Buttons — Buttons werden in Mineral-Blue oder als Outline gestaltet. Weniger ist mehr.

5. **Headline-Stil mit inline italic:** Statt separatem Eyebrow-Text werden bestimmte Woerter in der Headline kursiv gesetzt (wie bei Luxo: "Rediscover your *inner peace*"). Das wirkt eleganter und moderner.

6. **Footer-Welle in Mineral-Blue:** Luxo nutzt Rosé — wir adaptieren das Muster mit unserer Markenfarbe Mineral-Blue als SVG-Wave, gefolgt vom dunklen Footer-Bereich.

7. **Hero als Slider:** 2-3 Slides mit den besten Produktfotos, Pfeile links/rechts, Auto-Advance. Framer Motion AnimatePresence fuer Slide-Transitions.

### Betrachtete Alternativen

- **GSAP statt Framer Motion:** Maechtigere Animation-Library, aber deutlich komplexer und nicht React-native. Framer Motion ist der React-Standard und leichter fuer Lovable-Transfer.
- **CSS-only Animationen verbessern:** Moeglich, aber kein Stagger, kein Spring-Physics, kein AnimatePresence. Wuerde sich nie so smooth anfuehlen.
- **Rosé als Akzentfarbe uebernehmen:** Widerspricht Salt.Magic Brand Guidelines. Mineral-Blue + Gold/Terra ist die etablierte Palette.

### Offene Fragen

Keine — User hat Richtung klar vorgegeben (Mineral-Blue bleibt, Hintergrund wird Weiss, Luxo als Referenz).

---

## Schritt-fuer-Schritt-Aufgaben

### Schritt 1: Framer Motion installieren und Basis-Wrapper erstellen

Framer Motion als Dependency hinzufuegen und wiederverwendbare Motion-Wrapper erstellen, die in allen Komponenten genutzt werden.

**Aktionen:**

- `framer-motion` zu `site/package.json` Dependencies hinzufuegen und `npm install` ausfuehren
- `site/components/Motion.tsx` erstellen mit folgenden Exports:
  - `FadeIn` — Wrapper mit `initial={{ opacity: 0, y: 40 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-50px" }}`, `transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}`
  - `StaggerContainer` — Parent mit `staggerChildren: 0.12` in transition
  - `StaggerItem` — Child-Variante die auf Parent-Trigger reagiert
  - `ScaleIn` — Fuer Bilder: `initial={{ opacity: 0, scale: 0.95 }}`, sanft auf 1
  - `SlideIn` — Fuer seitliches Einsliden: `initial={{ opacity: 0, x: -60 }}` oder `x: 60`
  - `ParallaxImage` — Client Component mit `useScroll` + `useTransform` fuer leichten Y-Versatz
  - Alle Components als `"use client"` da Framer Motion Client-seitig ist
- `site/components/RevealOnScroll.tsx` loeschen

**Betroffene Dateien:**

- `site/package.json`
- `site/components/Motion.tsx` (neu)
- `site/components/RevealOnScroll.tsx` (loeschen)

---

### Schritt 2: Design-Tokens und Global Styles anpassen

Farbpalette und Hintergrund auf den neuen Luxo-inspirierten Look umstellen.

**Aktionen:**

- `site/tailwind.config.ts`:
  - `warm-white` Wert auf `#FFFFFF` aendern (oder entfernen und direkt `white` nutzen)
  - Kein Rosé — Gold (#C4A882) bleibt einzige Akzentfarbe, sparsam eingesetzt
  - `footer-wave` Farbe hinzufuegen: gleicher Wert wie `mineral` (#294B6D)
- `site/app/globals.css`:
  - Body-Background auf `#FFFFFF` aendern
  - `.reveal` und `.reveal.visible` Utility-Klassen entfernen (nicht mehr noetig)
  - `.gold-line` beibehalten aber optional machen
  - Smooth scroll und antialiasing behalten
- `site/app/layout.tsx`:
  - Body className: `font-body text-ink bg-white` statt `font-body text-ink`

**Betroffene Dateien:**

- `site/tailwind.config.ts`
- `site/app/globals.css`
- `site/app/layout.tsx`

---

### Schritt 3: Nav-Komponente — Zentriertes Logo

Nav komplett umbauen: Logo in der Mitte, Links aufgeteilt links/rechts.

**Aktionen:**

- `site/components/Nav.tsx` umschreiben:
  - 3-Spalten Layout: Links-Gruppe | Logo (zentriert) | Rechts-Gruppe
  - Links-Gruppe: "Why", "Products" (mit Dropdown-Chevron wie bei Luxo optional)
  - Logo: Zentriert, groesser (48-56px), als Text "Salt.Magic" in Playfair Display ODER Droplet-Logo — User-Praeferenz, Default: Droplet-Logo
  - Rechts-Gruppe: "Story", "Partner", "Shop Now" (Outline-Button statt Solid)
  - Scrolled-State: Weisser Hintergrund mit Blur (statt warm-white)
  - Mobile: Logo zentriert, Hamburger-Menu links (oder nur Logo + Shop CTA)
  - Framer Motion: Nav-Items staggered fade-in beim Page Load

**Betroffene Dateien:**

- `site/components/Nav.tsx`

---

### Schritt 4: Hero-Komponente — Slider mit Framer Motion

Hero von statischem Bild zu einem eleganten Slider umbauen.

**Aktionen:**

- `site/components/Hero.tsx` umschreiben:
  - State fuer aktiven Slide (3 Slides mit verschiedenen Produktfotos)
  - Slides: taylor-hero.jpg, greenery-jars.jpg, taylor-water.jpg
  - Framer Motion `AnimatePresence` fuer Slide-Wechsel (crossfade, nicht slide)
  - Pfeile links/rechts: duenne Linien-Pfeile (SVG, wie bei Luxo), absolut positioniert
  - Auto-advance alle 6 Sekunden
  - Headline deutlich groesser: `clamp(42px,7vw,84px)` statt `clamp(36px,6vw,72px)`
  - Headline mit italic-Akzent: "Rediscover what your water is *missing*"
  - Subtext leichter, mehr Abstand
  - CTAs: "Shop Now" als Outline-Button (weisser Rand, transparent), "Partner With Us" ebenfalls Outline
  - Oder: Nur ein CTA "Learn more" (Outline) wie bei Luxo — schlanker
  - Gradient-Overlay subtiler (weniger abgedunkelt)
  - Parallax-Effekt auf Hintergrund-Bild via `ParallaxImage`

**Betroffene Dateien:**

- `site/components/Hero.tsx`

---

### Schritt 5: TextBlock-Komponente — Groessere Headlines mit Italic-Akzent

TextBlock modernisieren: groessere Serif-Headlines mit einzelnen Woertern in Kursiv.

**Aktionen:**

- `site/components/TextBlock.tsx` umschreiben:
  - Props: `title` wird zu `ReactNode` (erlaubt JSX mit `<em>` Tags)
  - Eyebrow und Gold-Line werden optional (nicht mehr Default)
  - Headline deutlich groesser: `clamp(32px,5vw,56px)`
  - Italic-Woerter in Headlines als Design-Element (via `<em>` mit Playfair Italic)
  - Body-Text bleibt aehnlich, aber etwas groesserer Zeilenabstand
  - Alle Elemente mit `FadeIn` Motion-Wrapper statt RevealOnScroll
  - Kein Stagger innerhalb des TextBlocks — ein einziger FadeIn fuer den ganzen Block

**Betroffene Dateien:**

- `site/components/TextBlock.tsx`
- `site/app/page.tsx` (TextBlock-Aufrufe anpassen — `title` als JSX mit `<em>`)

---

### Schritt 6: ImageBreak-Komponente — Parallax und Scale-In

Bilder-Sektionen mit Framer Motion Parallax und Scale-Effekt aufwerten.

**Aktionen:**

- `site/components/ImageBreak.tsx` umschreiben:
  - `ScaleIn` Wrapper: Bilder starten bei scale 0.95, wachsen auf 1.0 beim Scrollen in den View
  - Padded-Variante: weiterhin abgerundete Ecken
  - Full-bleed Variante: optional mit leichtem Parallax via `ParallaxImage`
  - Overlay-Variante beibehalten

**Betroffene Dateien:**

- `site/components/ImageBreak.tsx`

---

### Schritt 7: Ingredients-Komponente — Staggered Reveal

Ingredients mit Framer Motion Stagger-Animation aufwerten.

**Aktionen:**

- `site/components/Ingredients.tsx` umschreiben:
  - `StaggerContainer` als Wrapper um das Grid
  - Jedes `StaggerItem` faded einzeln ein mit Versatz
  - Zahlen koennten mit einem Count-Up Effekt animiert werden (optional, nice-to-have)
  - Layout bleibt 3-Spalten

**Betroffene Dateien:**

- `site/components/Ingredients.tsx`

---

### Schritt 8: Products-Komponente — Hover-Animationen

Produktkarten mit smootheren Hover-Effekten.

**Aktionen:**

- `site/components/Products.tsx` umschreiben:
  - `FadeIn` mit Stagger fuer die beiden Karten
  - Hover: `motion.div` mit `whileHover={{ y: -8, transition: { duration: 0.3 } }}` — Card schwebt leicht nach oben
  - Bild-Hover: Scale-Effekt bleibt, aber via Framer Motion `whileHover={{ scale: 1.04 }}`
  - CTA-Buttons: Outline-Stil in Mineral-Blue (duenner Rand, transparent, Hover fuellt mit Mineral-Blue)

**Betroffene Dateien:**

- `site/components/Products.tsx`

---

### Schritt 9: Testimonials — Framer Motion Slide-Transitions

Testimonial-Carousel mit smoothen Framer Motion Transitions.

**Aktionen:**

- `site/components/Testimonials.tsx` umschreiben:
  - `AnimatePresence` mit `mode="wait"` fuer Slide-Wechsel
  - Exit: `{{ opacity: 0, y: 20 }}`, Enter: `{{ opacity: 0, y: -20 }}` → `{{ opacity: 1, y: 0 }}`
  - Spring-Transition: `type: "spring", stiffness: 100, damping: 20`
  - Dots bleiben, aber mit `motion.button` und `layoutId` fuer smooth Active-Indikator
  - Zitat-Zeichen als dekoratives Element beibehalten

**Betroffene Dateien:**

- `site/components/Testimonials.tsx`

---

### Schritt 10: FAQ — AnimatePresence Accordion

FAQ-Accordion mit Framer Motion fuer smoothes Open/Close.

**Aktionen:**

- `site/components/Faq.tsx` umschreiben:
  - `AnimatePresence` fuer die Antwort-Sektion
  - `motion.div` mit `initial={{ height: 0, opacity: 0 }}`, `animate={{ height: "auto", opacity: 1 }}`, `exit={{ height: 0, opacity: 0 }}`
  - Plus/Minus Icon: `motion.span` mit `rotate` Animation (0 → 90 Grad)
  - Aeusserer Wrapper mit `FadeIn` fuer den gesamten FAQ-Bereich

**Betroffene Dateien:**

- `site/components/Faq.tsx`

---

### Schritt 11: CtaBanner — Overlap-Card ueber Bild

CTA-Sektion im Luxo-Stil: Full-bleed Bild mit weisser Card die darueber ragt.

**Aktionen:**

- `site/components/CtaBanner.tsx` komplett umschreiben:
  - Oberer Teil: Full-bleed Produktfoto (z.B. greenery-duo.jpg) mit leichtem Gradient
  - Unterer Teil: Weisse Card mit negative margin (-120px) die ueber das Bild ragt
  - Card-Inhalt: Grosse Serif-Headline mit italic-Akzent, Body-Text, CTA-Button
  - CTA-Button in Mineral-Blue (statt Terra) — Outline oder Soft-Fill
  - Card hat Schatten und abgerundete Ecken
  - Framer Motion `FadeIn` + leichter `ScaleIn` fuer die Card

**Betroffene Dateien:**

- `site/components/CtaBanner.tsx`

---

### Schritt 12: Partner-Komponente — Weichere Gestaltung

Partner-Sektion visuell aufwerten.

**Aktionen:**

- `site/components/Partner.tsx` anpassen:
  - Dark-Panel: bleibt Mineral-Blue, aber mit `FadeIn` und `SlideIn` (von links)
  - Form-Panel: `SlideIn` von rechts
  - Metrics: `StaggerContainer` mit `StaggerItem` fuer die 4 Metriken
  - Formular-Submit-Button: Mineral-Blue
  - Insgesamt mehr Padding und Luft

**Betroffene Dateien:**

- `site/components/Partner.tsx`

---

### Schritt 13: Footer — Mineral-Blue Welle + Dunkler Bereich

Footer im Luxo-Stil mit organischem Uebergang.

**Aktionen:**

- `site/components/Footer.tsx` umschreiben:
  - Oberer Bereich: SVG-Welle in Mineral-Blue (#294B6D) als organischer Uebergang vom weissen Content
  - Auf der Welle: Logo zentriert in Weiss (Droplet oder "Salt.Magic" Text)
  - Dünne weisse Linie als Separator
  - Unterer Bereich: Dunkler Hintergrund (#1D3347) wie bisher
  - Grid bleibt 4-5 Spalten: Brand + Social | Navigate | Connect | Stay Hydrated
  - Spalten-Headings in Serif (weiss)
  - Social Icons: SVG Inline-Icons fuer Instagram, Facebook, X
  - Copyright-Bar am Ende

**Betroffene Dateien:**

- `site/components/Footer.tsx`

---

### Schritt 14: Divider-Komponente anpassen

Divider-Motiv ueberarbeiten oder optional machen.

**Aktionen:**

- `site/components/Divider.tsx` anpassen:
  - Luxo nutzt ein dekoratives Icon (Knoten-Symbol) statt Logo — wir behalten unser Droplet-Logo
  - Groesse leicht vergroessern (56px statt 48px)
  - Opacity von 15% auf 20% erhoehen
  - Framer Motion: `ScaleIn` Effekt beim Scrollen
  - Optional: goldene duenne Linie links und rechts vom Logo (wie ein HR mit Icon in der Mitte)

**Betroffene Dateien:**

- `site/components/Divider.tsx`

---

### Schritt 15: Homepage-Komposition anpassen

`page.tsx` aktualisieren fuer neue Komponenten-Props und Sektionsreihenfolge.

**Aktionen:**

- `site/app/page.tsx` umschreiben:
  - TextBlock-Aufrufe: `title` als JSX mit `<em>` fuer italic-Akzente:
    - "Why does your water need *minerals*?"
    - "What's inside *every serving*"
    - "What proper hydration *feels like*"
    - "Two formats, *same formula*"
    - "Five years ago, we noticed something *wrong with our water*"
  - CtaBanner: neue Props (Bild-Pfad, Card-Content)
  - Spacer: Groesserer vertikaler Abstand zwischen Sektionen (Luxo hat sehr viel Luft)
  - Divider: optional an einigen Stellen entfernen fuer cleaneren Look

**Betroffene Dateien:**

- `site/app/page.tsx`

---

### Schritt 16: Testen und Validieren

Build testen und visuell pruefen.

**Aktionen:**

- `npm install` ausfuehren (fuer framer-motion)
- `npm run build` — keine TypeScript-Fehler
- `npm run dev` — visuell pruefen:
  - Weisser Hintergrund ueberall
  - Nav: Logo zentriert, Links aufgeteilt
  - Hero: Slider funktioniert, Pfeile, Auto-Advance
  - Scroll-Animationen: smooth fade-in, stagger, parallax
  - FAQ: smooth open/close mit AnimatePresence
  - Testimonials: smooth Slide-Wechsel
  - Footer: Mineral-Blue Welle, dunkler Bereich
  - CtaBanner: Card ueberlappt Bild
  - Responsive: Mobile-Layout funktioniert

**Betroffene Dateien:**

- Keine neuen Dateien

---

### Schritt 17: CLAUDE.md aktualisieren

Workspace-Dokumentation aktualisieren.

**Aktionen:**

- Design-Referenz aktualisieren: Luxo Webflow-Vorlage als Inspiration
- Framer Motion als Dependency dokumentieren
- Hinweis auf geaenderten visuellen Stil (weisser Hintergrund, zentrierte Nav, Slider Hero)

**Betroffene Dateien:**

- `CLAUDE.md`

---

## Verbindungen & Abhaengigkeiten

### Dateien, die diesen Bereich referenzieren

- `CLAUDE.md` — muss aktualisiert werden
- `site/app/page.tsx` — referenziert alle Komponenten, muss Props anpassen
- `site/app/layout.tsx` — Body-Klassen aendern sich

### Noetige Updates fuer Konsistenz

- `CLAUDE.md` — neuen Design-Stil und Framer Motion dokumentieren
- `plans/2026-03-26-nextjs-react-projekt.md` — Hinweis auf Redesign als Follow-up

### Auswirkungen auf bestehende Workflows

- Keine bestehenden Workflows werden gestoert
- Dev-Server Befehl bleibt gleich: `cd site && npm run dev`
- Build-Prozess bleibt gleich, aber Bundle wird ~50KB groesser (framer-motion)

---

## Validierungs-Checkliste

- [ ] `npm install` installiert framer-motion erfolgreich
- [ ] `npm run build` laeuft fehlerfrei
- [ ] Weisser Hintergrund auf allen Sektionen (ausser Partner Dark, Footer)
- [ ] Nav: Logo zentriert, Links links/rechts aufgeteilt
- [ ] Hero: Slider mit Pfeilen, Auto-Advance, smooth Transition
- [ ] Scroll-Animationen: FadeIn, Stagger, ScaleIn funktionieren
- [ ] Parallax auf Hero/ImageBreak sichtbar
- [ ] FAQ: smooth open/close Animation
- [ ] Testimonials: smooth Slide-Wechsel
- [ ] CtaBanner: weisse Card ueberlappt Bild
- [ ] Footer: Mineral-Blue SVG-Welle sichtbar
- [ ] Responsive: Mobile-Layout funktioniert
- [ ] Keine TypeScript-Fehler
- [ ] CLAUDE.md aktualisiert

---

## Erfolgskriterien

Die Implementierung ist abgeschlossen, wenn:

1. Die Website visuell dem Luxo-Stil entspricht (weiss, luftig, zentrierte Nav, elegante Headlines)
2. Alle Scroll-Animationen smooth via Framer Motion laufen (kein Ruckeln, Spring-Physics)
3. Der Hero-Slider mit Pfeilen und Auto-Advance funktioniert
4. Die CTA-Card ueber dem Bild schwebt (Overlap-Effekt)
5. Der Footer einen organischen Mineral-Blue Wellenuebergang hat
6. `npm run build` fehlerfrei laeuft
7. Die Seite responsive funktioniert (Mobile + Desktop)

---

## Notizen

- **Lovable-Transfer:** Framer Motion ist in Lovable/React-Projekten verfuegbar. Der Transfer sollte weiterhin moeglich sein.
- **Performance:** Framer Motion nutzt GPU-beschleunigte Transforms. Die Animationen sollten auch auf aelteren Geraeten smooth laufen. `viewport={{ once: true }}` verhindert wiederholte Animationen.
- **Reduced Motion:** Alle Framer Motion Animationen respektieren automatisch `prefers-reduced-motion` wenn `useReducedMotion` Hook genutzt wird — das sollte in Motion.tsx eingebaut werden.
- **Bilder fuer Hero-Slider:** Die drei besten Produktfotos (taylor-hero, greenery-jars, taylor-water) werden als Slides genutzt. Spaeter koennen weitere hinzugefuegt werden.
- **Farbdisziplin:** Mineral-Blue als Hauptfarbe, Gold als einzige Kontraerfarbe — sehr sparsam. Kein Terra, kein Rosé fuer Buttons oder grosse Flaechen. Der Look lebt von Weiss + Mineral-Blue + dezenten Gold-Akzenten.

---

## Implementierungsnotizen

**Implementiert:** 2026-03-26

### Zusammenfassung

Komplettes Luxo-Style Redesign aller Komponenten umgesetzt:
- Framer Motion (v11) installiert und Motion.tsx mit FadeIn, StaggerContainer, StaggerItem, ScaleIn, SlideIn, ParallaxImage erstellt
- RevealOnScroll.tsx geloescht, alle Komponenten auf Motion-Wrapper umgestellt
- Hintergrund von warm-white (#F5F0E8) auf Weiss (#FFFFFF)
- Nav: 3-Spalten-Layout mit zentriertem Logo, Outline-CTA, Mobile-Hamburger
- Hero: 3-Slide Slider mit AnimatePresence Crossfade, Pfeilen, Auto-Advance (6s), Parallax
- TextBlock: title als ReactNode mit inline `<em>` Italic-Akzenten, groessere Headlines
- ImageBreak: ScaleIn fuer padded, ParallaxImage fuer full-bleed
- Ingredients: StaggerContainer/StaggerItem
- Products: motion.div whileHover Lift + Scale, Outline-Buttons in Mineral-Blue
- Testimonials: AnimatePresence mode="wait" mit Spring-Transition
- FAQ: AnimatePresence Accordion mit animiertem Plus/Minus Icon
- CtaBanner: Full-bleed Bild + weisse Overlap-Card mit negative margin
- Partner: SlideIn links/rechts, StaggerContainer fuer Metriken, Mineral-Blue Submit-Button
- Footer: SVG-Welle in Mineral-Blue, zentriertes Logo, Social-Icons
- Divider: groesser (56px), goldene Linien links/rechts, ScaleIn
- page.tsx: alle TextBlock titles als JSX mit `<em>`, groessere Spacer, Greenery-Duo Bild nur noch im CtaBanner

### Abweichungen vom Plan

- Greenery-Duo ImageBreak zwischen Products und Testimonials entfernt, da das Bild jetzt im CtaBanner als Hintergrund genutzt wird (vermeidet Dopplung)
- Hero nutzt einen einzelnen "Learn More" Outline-CTA statt zwei Buttons (schlanker, wie bei Luxo)
- Alle Buttons konsequent auf Mineral-Blue umgestellt (keine Terra-Buttons mehr)
- Input-Felder im Partner-Formular: bg-white statt bg-warm-white, focus:border-mineral statt focus:border-terra

### Aufgetretene Probleme

Keine — Build laeuft fehlerfrei, alle TypeScript-Typen korrekt.

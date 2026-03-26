# Plan: V2 Redesign — Reference-Website-basiertes Upgrade

**Erstellt:** 2026-03-26
**Status:** Abgeschlossen
**Anforderung:** Die bestehende Luxo-Style Website (site/) auf Basis der vier Referenz-Websites (Grown Alchemist, Sakara Life, PANPURI, Cure Hydration) upgraden. Brand Colors und Fonts bleiben, Styling und Layout-Patterns werden verfeinert.

---

## Ueberblick

### Was dieser Plan erreicht

Transformiert die bestehende Salt.Magic Website von einem "Luxo-Template-Look" zu einem eigenstaendigen, referenz-informierten Premium-Wellness-Auftritt. Konkret: waermere Farbgebung, groessere Editorial-Typografie, Pill-Buttons, Announcement Bar, mehr Whitespace und verfeinerte Animationen — alles innerhalb der bestehenden Brand-Palette.

### Warum das wichtig ist

Die V1/Luxo-Implementierung war ein solider erster Schritt, aber basierte auf einem generischen Webflow-Template. Mit den vier Referenz-Websites hat Leo eine klare Stilrichtung definiert: "Elevated Natural Luxury" — die Schnittmenge aus klinischer Reinheit (Grown Alchemist), Lifestyle-Ritual (Sakara), Thai Luxury (PANPURI) und Clean-Hydration (Cure). Dieses Upgrade positioniert salt-magic.com auf dem Niveau dieser Referenzen.

---

## Aktueller Zustand

### Relevante bestehende Struktur

| Datei | Rolle | Relevante Details |
|---|---|---|
| `site/tailwind.config.ts` | Design Tokens | warm-white: #FFFFFF, mineral: #294B6D, gold: #C4A882, ink: #2C2421 |
| `site/app/globals.css` | Globale Styles | bg-warm-white, gold-line utility, smooth scroll |
| `site/app/layout.tsx` | Root Layout | Playfair Display + Inter als CSS Variables, SEO Meta |
| `site/app/page.tsx` | Homepage | 16 Sections, clamp()-basiertes Spacing |
| `site/components/Nav.tsx` | Navigation | Fixed, scroll-triggered, zentriertes Logo, backdrop-blur |
| `site/components/Hero.tsx` | Hero Slider | 3 Slides, Auto-Rotation, Gradient Overlay, Pfeile |
| `site/components/Motion.tsx` | Animationen | FadeIn, Stagger, ScaleIn, SlideIn, Parallax |
| `site/components/TextBlock.tsx` | Content Sections | Eyebrow + Title + Gold-Line + Body |
| `site/components/Products.tsx` | Produktkarten | 2-Spalten, Hover-Effekte |
| `site/components/CtaBanner.tsx` | CTA Section | Full-bleed, Mineral Gradient, Overlap-Card |
| `site/components/Footer.tsx` | Footer | Wave Divider, 4-Spalten, Newsletter |
| `site/components/Partner.tsx` | B2B Section | Split Dark/Light, Metriken, Formular |
| `site/components/Testimonials.tsx` | Testimonials | Auto-Carousel, 5 Items, Dot-Navigation |
| `site/components/Faq.tsx` | FAQ | 6-Item Accordion |
| `site/components/Ingredients.tsx` | Inhaltsstoffe | 3-Spalten Grid mit Zahlen |
| `site/components/Divider.tsx` | Logo-Divider | Logo + horizontale Linien |
| `site/components/ImageBreak.tsx` | Bildabschnitte | Full-bleed oder gepadded, Parallax |

### Luecken die adressiert werden

1. **Hintergrund ist Pure White (#FFFFFF)** — Design-Spec V1 definierte #F5F0E8, Implementierung weicht ab. Referenzen bestaetigen: warmes Off-White wirkt luxurioeser
2. **Textfarbe ist #2C2421 (ink)** — zu dunkel/kalt. Referenzen zeigen warmen Charcoal
3. **Buttons sind eckig/kantig** — alle 4 Referenzen nutzen Pill-Shape oder stark gerundete Buttons
4. **Keine Announcement Bar** — 3 von 4 Referenzen haben scrollenden Ticker im Header
5. **Headlines zu klein** — aktuell Standard-Groessen, Referenzen zeigen 48-56px Editorial-Headlines
6. **Kein Uppercase-Styling** — Labels, Nav-Items und CTAs fehlt das Premium-Uppercase mit Letter-Spacing
7. **Whitespace nicht grosszuegig genug** — Referenzen zeigen 30-40% Breathing Room
8. **Gold-Akzent (#C4A882) vs Brand (#D4BFAA)** — Tailwind Config nutzt anderen Gold-Ton als Brand Guidelines
9. **Fehlende Inter Light (300) Nutzung** — Grown Alchemist zeigt: leichte Subheadlines wirken elegant

---

## Vorgeschlagene Aenderungen

### Zusammenfassung der Aenderungen

- Design Tokens in Tailwind Config an Brand Colors + Referenz-Erkenntnisse anpassen
- Globale Typografie-Styles upgraden (groessere Headlines, Uppercase Labels, Inter Light)
- Alle Buttons auf Pill-Shape umstellen
- Neue AnnouncementBar-Komponente erstellen
- Whitespace/Spacing in allen Sections erhoehen
- Nav-Styling verfeinern (Uppercase Links, Letter-Spacing)
- Hero-Overlay und -Typografie an Editorial-Standard anpassen
- CTA-Farben von Terracotta auf Deep Mineral Blue umstellen (Brand-Entscheidung)
- Footer und Partner-Section Feinschliff

### Neue Dateien erstellen

| Dateipfad | Zweck |
|---|---|
| `site/components/AnnouncementBar.tsx` | Scrollender Ticker ueber der Nav (Free Shipping, Thai Heritage, etc.) |

### Zu aendernde Dateien

| Dateipfad | Aenderungen |
|---|---|
| `site/tailwind.config.ts` | Farbtokens anpassen: warm-white -> #F5F0E8, ink -> #3C3028, gold -> #D4BFAA, neue Tokens fuer Spacing/Typography |
| `site/app/globals.css` | Globale Typografie-Utilities (uppercase-label, headline-editorial), Whitespace-Anpassungen, gold-line Update |
| `site/app/layout.tsx` | Inter weight 300 hinzufuegen, AnnouncementBar einbinden |
| `site/app/page.tsx` | Spacing zwischen Sections erhoehen, Breathing Room |
| `site/components/Nav.tsx` | Uppercase + Letter-Spacing fuer Links, Pill-CTA, Abstand unter AnnouncementBar |
| `site/components/Hero.tsx` | Groessere Headlines (48-56px), Uppercase Eyebrow, Pill-Buttons, Overlay-Anpassung |
| `site/components/TextBlock.tsx` | Groessere Titel, Uppercase Eyebrow-Styling, Inter Light fuer Subtitles |
| `site/components/Products.tsx` | Pill-Buttons, angepasste Hintergrundfarben |
| `site/components/CtaBanner.tsx` | Pill-Button, angepasste Farben (Mineral Blue statt Terracotta) |
| `site/components/Partner.tsx` | Pill-Button im Formular, Farbkorrekturen |
| `site/components/Footer.tsx` | Newsletter-Button auf Pill, Farbfeinschliff |
| `site/components/Ingredients.tsx` | Spacing erhoehen, Typografie-Feinschliff |
| `site/components/Testimonials.tsx` | Typografie-Upgrade (Playfair groesser fuer Quotes) |
| `site/components/Faq.tsx` | Spacing-Anpassung, Typografie |
| `site/components/Divider.tsx` | Farbkorrektur auf neue Tokens |
| `site/components/ImageBreak.tsx` | Spacing-Anpassung |

### Zu loeschende Dateien

Keine.

---

## Design-Entscheidungen

### Getroffene Schluesselentscheidungen

1. **Brand Colors bleiben (Leo, 2026-03-26):** Kein Terracotta als CTA, kein neuer Akzent. Deep Mineral Blue #294B6D + Soft Gold #D4BFAA. CTAs werden Mineral Blue statt Terracotta.
2. **Playfair + Inter bleiben (Leo, 2026-03-26):** Styling-Upgrades statt Font-Wechsel. Groessere Headlines, Uppercase Labels, Inter Light fuer Subheadlines.
3. **Bestehende Fotos nutzen (Leo, 2026-03-26):** Lifestyle-Shots spaeter via nanobanana. Design muss auch ohne Lifestyle-Fotos premium wirken.
4. **Warm Off-White #F5F0E8 als Basis:** Konsistent mit Design-Spec V1 und allen warmen Referenzen. Korrigiert die aktuelle Pure-White Implementierung.
5. **Warm Charcoal #3C3028 fuer Text:** Waermer als aktuelles #2C2421, nicht so hell wie Cure's #BAAA9E. Guter Kompromiss fuer Lesbarkeit + Waerme.
6. **Pill-Buttons (border-radius 30px):** 3 von 4 Referenzen nutzen stark gerundete Buttons. Passt zum Wellness-Feel besser als eckige.
7. **Announcement Bar:** Neues Element, inspiriert von Grown Alchemist + Cure. Nutzen fuer Key Messages (Thai Heritage, Natural Ingredients, Free Shipping).

### Betrachtete Alternativen

- **Terracotta als zweiter Akzent (PANPURI):** Verworfen — Leo will bei Brand Colors bleiben
- **Custom Serif Font (Grown Alchemist):** Verworfen — Playfair bleibt, Cormorant Garamond als spaetere V2-Option
- **Reines Schwarz-Weiss (Grown Alchemist):** Zu kalt fuer Salt.Magic's "Elevated Natural Luxury" Positioning

### Offene Fragen

Keine — alle drei Kernentscheidungen (Farbe, Typografie, Fotografie) sind von Leo bestaetigt.

---

## Schritt-fuer-Schritt-Aufgaben

### Schritt 1: Design Tokens aktualisieren

Tailwind Config an Brand Colors anpassen und neue Utility-Tokens einfuehren.

**Aktionen:**

- `warm-white` von `#FFFFFF` auf `#F5F0E8` aendern
- `gold` von `#C4A882` auf `#D4BFAA` aendern (Brand-konform)
- `ink` von `#2C2421` auf `#3C3028` aendern (waermer)
- `ink-light` von `#6B5D4F` auf `#5A4A3C` aendern (proportional waermer)
- `terra` entfernen (kein Terracotta mehr als CTA)
- Neue Tokens hinzufuegen:
  - `mineral-light`: `#3D6588` (Produkt-Hintergruende, existiert schon als Wert)
  - `border-warm`: `#E8DFD3` (subtile Borders, Referenz: Cure #F5F2F0 Bereich)
- Border-Radius Extend: `pill: '30px'` hinzufuegen

**Betroffene Dateien:**

- `site/tailwind.config.ts`

---

### Schritt 2: Globale Typografie-Upgrades

Neue CSS-Utilities fuer Editorial-Typografie und Uppercase-Labels.

**Aktionen:**

- In `globals.css` neue Utility-Klassen definieren:
  ```css
  .label-uppercase {
    @apply uppercase tracking-[0.12em] text-sm font-medium;
  }
  .headline-editorial {
    @apply font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1];
  }
  .subheadline-light {
    @apply font-body text-xl md:text-2xl font-light leading-relaxed;
  }
  ```
- `gold-line` Farbe auf neuen Gold-Token `#D4BFAA` aktualisieren
- Body-Hintergrund auf `bg-warm-white` bestaetigen (wird jetzt korrekt #F5F0E8)

**Betroffene Dateien:**

- `site/app/globals.css`

---

### Schritt 3: Inter Light Weight hinzufuegen

Inter 300 (Light) im Layout registrieren fuer Subheadlines.

**Aktionen:**

- In `layout.tsx` den Inter-Import um weight `300` erweitern: `subsets: ['latin'], weight: ['300', '400', '500', '600']`
- Keine weiteren Aenderungen am Layout noetig

**Betroffene Dateien:**

- `site/app/layout.tsx`

---

### Schritt 4: AnnouncementBar Komponente erstellen

Neue Komponente: scrollender Ticker ueber der Navigation.

**Aktionen:**

- Neue Datei `site/components/AnnouncementBar.tsx` erstellen
- Design-Specs:
  - Hintergrund: `mineral` (#294B6D)
  - Text: Weiss, `label-uppercase` Styling (12-13px, uppercase, tracking)
  - Scrollende Marquee-Animation (CSS keyframes, ~30s Dauer)
  - 3-4 rotierende Messages: "Thailand's Premium Electrolyte Mineralizer", "100% Natural | Zero Sugar | Zero Flavor", "Free Shipping on Orders Over 1,000 THB", "5 Years Trusted | 90% Retention | 200+ Locations"
  - Hoehe: 36px, zentrierter Text
  - Pause on Hover
  - Schliessbar mit X-Button (optional, nice-to-have)
- In `layout.tsx` VOR der Nav einbinden (fixed position, Nav bekommt entsprechenden top-Offset)

**Betroffene Dateien:**

- `site/components/AnnouncementBar.tsx` (neu)
- `site/app/layout.tsx` (AnnouncementBar Import und Einbindung)
- `site/components/Nav.tsx` (top-Offset fuer AnnouncementBar-Hoehe)

---

### Schritt 5: Navigation Styling upgraden

Nav-Links auf Uppercase + Letter-Spacing, CTA-Button auf Pill-Shape + Mineral Blue.

**Aktionen:**

- Nav-Links: `uppercase tracking-[0.08em] text-[13px] font-medium` statt aktuelles Styling
- CTA-Button ("Shop Now" o.ae.): `rounded-pill bg-mineral text-white hover:bg-mineral-light` statt aktuelles Styling
- Padding fuer `top` anpassen wenn AnnouncementBar sichtbar (36px Offset)
- Mobile-Menu Links ebenfalls Uppercase
- Hover-Effekt: subtle underline mit `text-underline-offset: 4px` (Sakara-Pattern)

**Betroffene Dateien:**

- `site/components/Nav.tsx`

---

### Schritt 6: Hero Section Editorial-Upgrade

Groessere Headlines, Uppercase Eyebrow, Pill-CTAs.

**Aktionen:**

- Headline: `headline-editorial` Klasse anwenden (48-56px, Playfair Bold)
- Eyebrow-Text (falls vorhanden): `label-uppercase` Klasse
- Subheadline: `subheadline-light` Klasse (Inter Light 300)
- CTA-Buttons: `rounded-pill` mit Mineral Blue (primaer) und Outline-Variante (sekundaer)
- Gradient-Overlay ggf. anpassen fuer bessere Lesbarkeit auf warmem Hintergrund
- Slide-Inhalt pruefen und ggf. Texte kuerzen fuer klareres Editorial-Layout

**Betroffene Dateien:**

- `site/components/Hero.tsx`

---

### Schritt 7: TextBlock Komponente upgraden

Editorial-Typografie fuer alle Content-Sections.

**Aktionen:**

- Eyebrow: `label-uppercase` + `text-gold` (war vorher normaler kleiner Text)
- Title: `headline-editorial` oder `font-display text-3xl md:text-4xl` (eine Stufe kleiner als Hero)
- Gold-Line: Farbe auf #D4BFAA (neuer Token)
- Body: `text-ink` (jetzt #3C3028)
- Optional: Subheadline-Slot mit `subheadline-light` fuer Sections die es brauchen

**Betroffene Dateien:**

- `site/components/TextBlock.tsx`

---

### Schritt 8: Alle Buttons auf Pill-Shape umstellen

Globaler Button-Style-Update ueber alle Komponenten.

**Aktionen:**

- In folgenden Komponenten alle `rounded-*` Klassen auf `rounded-pill` (30px) aendern:
  - `Products.tsx` — "Shop" / "Learn More" Buttons
  - `CtaBanner.tsx` — CTA Button
  - `Partner.tsx` — Form Submit Button
  - `Footer.tsx` — Newsletter Submit Button
  - `Hero.tsx` — (bereits in Schritt 6 behandelt)
- Primaer-Button-Farbe: `bg-mineral text-white hover:bg-mineral-light`
- Sekundaer-Button: `border border-mineral text-mineral hover:bg-mineral hover:text-white`
- Transition: `transition-all duration-300`

**Betroffene Dateien:**

- `site/components/Products.tsx`
- `site/components/CtaBanner.tsx`
- `site/components/Partner.tsx`
- `site/components/Footer.tsx`

---

### Schritt 9: Whitespace & Spacing erhoehen

Mehr Breathing Room zwischen allen Sections — das staerkste Luxus-Signal.

**Aktionen:**

- In `page.tsx`: Section-Spacing von aktuellem clamp()-Wert um ca. 20-30% erhoehen
  - Aktuelles Pattern pruefen und systematisch anpassen
  - Ziel: mindestens 80-100px Abstand zwischen Major Sections auf Desktop
- Innerhalb der Komponenten:
  - `Ingredients.tsx`: Mehr vertikaler Abstand zwischen Grid-Items
  - `Products.tsx`: Mehr Padding um Produktkarten
  - `Testimonials.tsx`: Mehr vertikaler Raum
  - `Faq.tsx`: Mehr Abstand zwischen Items
- Container max-width pruefen: sollte bei ~1200px bleiben, aber mit mehr Innen-Padding

**Betroffene Dateien:**

- `site/app/page.tsx`
- `site/components/Ingredients.tsx`
- `site/components/Products.tsx`
- `site/components/Testimonials.tsx`
- `site/components/Faq.tsx`

---

### Schritt 10: Testimonials Typografie-Upgrade

Quotes groesser, eleganter — Playfair Italic fuer Zitate.

**Aktionen:**

- Quote-Text: `font-display text-2xl md:text-3xl italic leading-relaxed`
- Autor-Name: `label-uppercase text-ink-light`
- Quotation Marks: groesser, in `text-gold` Farbe
- Dot-Navigation: Farbe auf `bg-gold` (aktiv) / `bg-border-warm` (inaktiv)

**Betroffene Dateien:**

- `site/components/Testimonials.tsx`

---

### Schritt 11: Farbkorrekturen in verbleibenden Komponenten

Alle Komponenten auf neue Token-Werte pruefen und anpassen.

**Aktionen:**

- `Divider.tsx`: Gold-Farbe auf neuen Token pruefen
- `ImageBreak.tsx`: Overlay-Farben pruefen
- `CtaBanner.tsx`: CTA von Terracotta auf Mineral Blue umstellen
- `Partner.tsx`: Mineral-Hintergrund und Formular-Styling pruefen
- `Footer.tsx`: footer-dark Ton pruefen, Newsletter-Input Styling
- Alle hardcodierten Farbwerte (#-Codes direkt im JSX) durch Tailwind-Tokens ersetzen

**Betroffene Dateien:**

- `site/components/Divider.tsx`
- `site/components/ImageBreak.tsx`
- `site/components/CtaBanner.tsx`
- `site/components/Partner.tsx`
- `site/components/Footer.tsx`

---

### Schritt 12: Visueller Review & Feinschliff

Gesamtbild pruefen, Inkonsistenzen beheben.

**Aktionen:**

- Dev-Server starten (`cd site && npm run dev`)
- Jede Section im Browser pruefen:
  - [ ] Farben konsistent (kein Pure White, kein Pure Black, kein Terracotta)
  - [ ] Typografie-Hierarchie stimmt (Headlines > Subheadlines > Body > Labels)
  - [ ] Pill-Buttons ueberall
  - [ ] Uppercase-Labels ueberall wo definiert
  - [ ] Whitespace fuehlbar grosszuegiger als vorher
  - [ ] AnnouncementBar scrollt, Nav hat korrekten Offset
  - [ ] Animationen funktionieren noch korrekt
- Mobile Viewport pruefen (375px)
- Tablet Viewport pruefen (768px)
- Accessibility: Kontrastverhhaeltnisse pruefen (WCAG AA)

**Betroffene Dateien:**

- Keine neuen Aenderungen, nur Validierung und Bugfixes

---

### Schritt 13: Design-Spec und CLAUDE.md aktualisieren

Dokumentation nachziehen.

**Aktionen:**

- `outputs/design-spec-v1.md` auf V2 aktualisieren oder neue `outputs/design-spec-v2.md` erstellen mit:
  - Aktualisierte Farbpalette
  - Neue Typografie-Utilities
  - Pill-Button-Spec
  - AnnouncementBar-Spec
  - Spacing-System
- `CLAUDE.md` aktualisieren:
  - "Current status" Abschnitt auf V2-Status
  - Neue Komponente (AnnouncementBar) in Struktur erwaehnen
- `outputs/reference-websites-analysis.md` Status auf "Umgesetzt" setzen

**Betroffene Dateien:**

- `outputs/design-spec-v1.md` oder neues `outputs/design-spec-v2.md`
- `CLAUDE.md`
- `outputs/reference-websites-analysis.md`

---

## Verbindungen & Abhaengigkeiten

### Dateien, die diesen Bereich referenzieren

- `CLAUDE.md` — beschreibt aktuellen Design-Status
- `outputs/design-spec-v1.md` — aktuelle Design-Spezifikation
- `outputs/reference-websites-analysis.md` — Referenz-Analyse mit Entscheidungen
- `context/brand-guidelines.md` — Brand-Farben und Typografie-Regeln

### Noetige Updates fuer Konsistenz

- Design-Spec muss V2-Stand widerspiegeln
- CLAUDE.md muss neuen Status reflektieren
- Tailwind Tokens muessen mit Brand Guidelines konsistent sein

### Auswirkungen auf bestehende Workflows

- Keine strukturellen Aenderungen am Projekt
- Keine neuen Dependencies noetig
- Alle Aenderungen sind visuelle/styling Updates innerhalb bestehender Architektur
- Dev-Server Command bleibt `cd site && npm run dev`

---

## Validierungs-Checkliste

- [ ] Tailwind Tokens matchen Brand Guidelines (Mineral Blue #294B6D, Soft Gold #D4BFAA)
- [ ] Kein Pure White (#FFFFFF) als Section-Hintergrund
- [ ] Kein Pure Black (#000) als Textfarbe
- [ ] Kein Terracotta in CTAs oder Buttons
- [ ] Alle Buttons haben Pill-Shape (border-radius 30px)
- [ ] AnnouncementBar rendert und scrollt korrekt
- [ ] Nav hat korrekten Offset unter AnnouncementBar
- [ ] Headlines sind 48-56px auf Desktop (Hero) und 36-48px (Sections)
- [ ] Labels/Nav-Items sind Uppercase mit Letter-Spacing
- [ ] Inter Light (300) wird fuer Subheadlines geladen und angezeigt
- [ ] Section-Spacing ist mindestens 80px auf Desktop
- [ ] Mobile Layout funktioniert (375px)
- [ ] WCAG AA Kontrast eingehalten
- [ ] CLAUDE.md und Design-Spec aktualisiert
- [ ] Dev-Server startet ohne Fehler

---

## Erfolgskriterien

Die Implementierung ist abgeschlossen, wenn:

1. Die Website visuell den Referenz-Websites naeherkommt als der aktuellen Luxo-Vorlage — insbesondere in Typografie, Spacing und Button-Styling
2. Alle Brand Colors korrekt angewendet sind (kein Terracotta, kein Pure White/Black)
3. Die AnnouncementBar als neues Premium-Element funktioniert
4. Die Seite auf Desktop, Tablet und Mobile korrekt rendert
5. Dokumentation (Design-Spec, CLAUDE.md) den neuen Stand reflektiert

---

## Notizen

- **Lifestyle-Fotografie (nanobanana):** Separater Arbeitsschritt nach V2. Wenn AI-generierte Lifestyle-Shots verfuegbar sind, koennen Hero-Slides und ImageBreak-Sections damit aufgewertet werden.
- **Typografie V2 (Cormorant Garamond):** Optional spaeter als Alternative zu Playfair testen. Steht in Brand Guidelines als Option.
- **Animations:** Die bestehenden Framer Motion Animationen bleiben unveraendert — sie sind bereits hochwertig. Einzige Ausnahme: AnnouncementBar bekommt eigene CSS-Marquee-Animation.
- **Reihenfolge der Schritte:** Schritte 1-3 (Tokens, CSS, Fonts) muessen zuerst, da alle folgenden Schritte davon abhaengen. Schritte 4-11 koennen teilweise parallel bearbeitet werden. Schritte 12-13 kommen am Ende.

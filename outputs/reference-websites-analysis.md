# Reference Websites Analysis — Salt.Magic Rebrand V2

> Analyse der vier von Leo gelieferten Referenz-Websites. Basis fuer Design-Entscheidungen im Website-Rebrand.

---

## Uebersicht der Referenzen

| # | Brand | URL | Kategorie | Kernbeitrag fuer Salt.Magic |
|---|---|---|---|---|
| 1 | Grown Alchemist | grownalchemist.com | Science of Purity | Schwarz-Weiss-Minimalismus, klinische Praezision + natuerliche Ingredienzien |
| 2 | Sakara Life | sakara.com | Premium Wellness Ritual | Lifestyle-Fotografie, Editorial Feel, Spa-Atmosphaere |
| 3 | PANPURI | panpuri.com | Premium Wellness Ritual | Thai Luxury Wellness Standard, sensorisch, ruhig |
| 4 | Cure Hydration | curehydration.com | Premium Hydration | Direkte Elektrolyt-Konkurrenz, warme Toene, pflanzlich/clean |

---

## 1. Grown Alchemist — "Science of Purity"

### Layout
- Sticky Header mit Gradient-Overlay (transparent -> leicht dunkel)
- Max-width 120rem, mit schmaler (75rem) und breiter (180rem) Variante
- Modulare Sections mit per-Breakpoint Padding
- Announcement-Ticker im Header (auto-scroll, 125s Dauer, Pause on Hover)

### Typografie
- **Headlines:** EuropaGroSHOP-MedCon (custom Serif)
- **Body:** ArialNarrow, Helvetica, Arial (Medium weight)
- Groessen-System: 1.4rem (XS) bis 7.4rem (7XL), Basis 62.5%
- Letter-Spacing: 0.10px (normal), 0.64px (wide), 0.96px (extra-wide)

### Farbpalette
- **Primaer:** Pure Black RGB(0,0,0) + Pure White RGB(255,255,255)
- **Tertiaer:** Warm Gunmetal RGB(126,123,121)
- **Off-White:** RGB(241,241,242)
- **Warmer Akzent:** RGB(247,220,214) — subtiler Hautton
- Borders: Black mit 0.2 Opacity

### Design-Philosophie
- Extremer Minimalismus: keine Schatten, keine Borders, keine dekorativen Elemente
- Luxus durch Zurueckhaltung und Praezision
- Schwarz-Weiss als Basis vermittelt Raffinesse
- Grosszuegiger Weissraum ueberall

### CTAs
- Border-Radius: 4px (fast rechteckig)
- Primaer: Weiss auf Schwarz
- Sekundaer: Outlined, schwarzer Text
- Kein Shadow, 0% Border-Opacity

### Key Takeaway fuer Salt.Magic
> Praezision und Zurueckhaltung als Luxus-Signal. Die Verbindung von "klinischer Wissenschaft" und "natuerlichen Ingredienzien" ist genau Salt.Magics Positioning. Aber: Salt.Magic braucht waermere Toene als reines Schwarz-Weiss.

---

## 2. Sakara Life — "Premium Wellness Ritual"

### Layout
- 12-Column Grid System
- Full-width Banner-Karussell im Hero
- Sticky Navigation
- Mega-Dropdowns fuer Produktkategorien
- Newsletter-Section ueber Footer

### Typografie
- **Font:** "Rework Text" (sans-serif, custom)
- Uppercase fuer Headlines und CTAs (text-transform: uppercase)
- Letter-Spacing fuer Premium-Feel auf Headern
- Editorial-Qualitaet durch Serif/Sans-Serif-Mix

### Farbpalette
- **Primaer:** Schwarz #000 + Weiss #FFF
- **Off-White:** #FAFAF8 (fuer Sections/Modals)
- **Gruene Akzente:** #5BAB5D (Tags), #00873B (Ratings)
- **Pistazie:** #DFE3AE (Tags)
- **Grau:** #D9D9D9 (Borders), #747474 (Sekundaertext)
- **Error:** #FF6341

### Fotografie
- Professionelle Lifestyle-Bilder mit konsistenter Beleuchtung
- Produkte in Wellness/Self-Care Kontext (nie isoliert transaktional)
- Gradient/Neutral Hintergruende, Close-up Texturen
- Flat-Lay Styling mit natuerlichen Props

### Animationen
- Cubic-Bezier Easing: .165, .84, .44, 1 (refined, nicht jarring)
- Backdrop-Blur bei Dialogen: blur(4px)
- Slide-up Entrance: translateY(24px) -> 0
- Hover: Button-Farbinversion (Schwarz <-> Weiss)

### CTAs
- Primaer: Schwarz auf Weiss, Hover invertiert
- Uppercase Text
- Padding: 18px 16px (Hero), 12px 16px (Sekundaer)
- Tertiaer: Underline mit text-underline-offset: 4px

### Key Takeaway fuer Salt.Magic
> Der "Editorial Luxury" Ansatz — grosszuegiger Weissraum, Uppercase-Typografie, Lifestyle-Narrative statt reiner Commerce. Die Kombination aus Zuruckhaltung und Premium-Fotografie erzeugt das "Luxus-Spa" Gefuehl, das Leo will.

---

## 3. PANPURI — "Thai Luxury Wellness"

### Layout
- Fixed Navigation mit Logo, Sprach-Selector, Account, Cart
- Full-width Hero: "Awaken Your Senses"
- Produkt-Karussells mit Swiper.js (horizontal scroll)
- Responsive Produkt-Grids
- Footer: Multi-Column mit Sustainability-Messaging, Newsletter

### Typografie
- System-Fonts: Helvetica, Arial, Roboto
- Display: 36-42px (Section Headers)
- Body: 20px
- Supporting: 13px
- Minimales Letter-Spacing

### Farbpalette
- **Primaer-Akzent:** #CC6055 (Terracotta/Burnt Sienna) — Buttons, Hover, Cart
- **Text:** #1F1F1F (near-black), #3C434A (dark grey)
- **Hintergrund:** Weiss primaer, neutrale Grauabstufungen
- **Interactive:** Weisser Text auf farbigem Hintergrund

### Design-Philosophie
- Premium & Artisanal durch elegante Produktfotografie
- Minimalist Navigation, kein Clutter
- Warmer Farbakzent (Terracotta) komplementiert botanische Aesthetic
- "Holistic Wellness" und "Eastern Wisdom" Messaging

### CTAs
- Stark gerundet: border-radius 9999px (Pill-Shape)
- Font-Size: 1.125em, grosszuegig gepadded
- Primaer: #CC6055 Terracotta
- Aktionen: "Add to cart", "Discover More", "Reserve"

### Key Takeaway fuer Salt.Magic
> Terracotta als warmer Akzent ist ein starkes Signal. Die Pill-Buttons und der "Eastern Wisdom" Ansatz passen zu Salt.Magics Thai-Heritage. PANPURI beweist, dass Thai Luxury Premium global funktioniert.

---

## 4. Cure Hydration — "Premium Hydration"

### Layout
- Sticky Header mit Announcement Bar darueber
- Full-width Hero-Slideshow (6 Slides, Auto-Play)
- Logo-Karussell (Trust Badges)
- Featured Collections Grid (2-3 Spalten responsiv)
- Max-width: 1600px, zentriert

### Typografie
- System UI Stack: system_ui, -apple-system, Segoe UI, Roboto, Helvetica Neue
- H1: 56px (Desktop), 48px (Tablet)
- H2: 48px (Desktop), 38px (Tablet)
- Body: 16px Basis
- Weights: 400 (normal), 700 (bold)

### Farbpalette
- **Text/Headings:** #BAAA9E (warmes Beige/Taupe) — NICHT Schwarz
- **Hintergrund:** #FFFFFF primaer, #FAFAF9 sekundaer
- **Borders:** #F5F2F0 (sehr subtle)
- **Primaer-Akzent/CTA:** #3E7B8F (Teal/Petrol) — Buttons
- **Button-Text:** Weiss auf Teal

### Fotografie
- Lifestyle: Drinks in natuerlichen Settings (Pool, Outdoor)
- Produkte mit frischen Zutaten, Eis, Haende
- Warmes natuerliches Licht, gesaettigte Farben
- Mix aus Flat-Lay, 3/4-Winkel, Action-Shots

### Spacing
- Vertical Breather: 48px (Mobile) -> 64px (Tablet) -> 80-90px (Desktop)
- Container Gutter: 24px (Mobile), 40px (Tablet+)
- Grosszuegiger Weissraum als Luxus-Signal

### CTAs
- **Pill-Shape:** border-radius 30px
- Hoehe: 52px (Desktop), 48px (Mobile)
- Primaer: Weiss auf Teal #3E7B8F
- Full-width auf Mobile
- Sentence Case, action-oriented

### Key Takeaway fuer Salt.Magic
> Cure zeigt, wie ein Elektrolyt-Brand premium aussehen kann OHNE maskulin/Sport zu wirken. Der warme Beige-Text statt Schwarz und Teal als Akzent sind interessante Alternativen. Beweist: Elektrolyte koennen "clean wellness" statt "sports drink" sein.

---

## Synthese: Design-Patterns fuer Salt.Magic V2

### Konsistente Muster ueber alle 4 Referenzen

| Pattern | Alle 4 Seiten | Salt.Magic Implikation |
|---|---|---|
| **Sticky Navigation** | Ja, alle | Sticky Nav mit Transparency/Scroll-Effekt |
| **Grosszuegiger Weissraum** | 30-40% Breathing Room | Noch mehr Whitespace als V1 |
| **Full-width Hero** | Karussell oder Einzelbild | Hero mit Lifestyle-Fotografie, nicht Produkt-Cutout |
| **Pill oder Minimal Buttons** | 4px bis 9999px Radius | Pill-Buttons (30px+) passen zum Wellness-Feel |
| **Uppercase Headlines** | 3 von 4 | Uppercase fuer Section-Titel, Sentence Case fuer Body |
| **Warme Toene** | 3 von 4 (nur GA ist kalt) | Warmes Off-White statt Pure White als Basis |
| **Lifestyle Fotografie** | Alle | Produkte in natuerlichen Settings, nie sterile Studio-Shots |
| **Subtile Animationen** | Ease/Cubic-Bezier, Fade-in | Langsame Fades, subtiler Parallax, smooth scroll |
| **Mega-Menu / Minimal Nav** | Alle | Clean Nav mit max 5-6 Items |
| **Announcement Bar** | 3 von 4 | Scrollende Announcement-Leiste im Header |

### Entscheidung: Farbpalette — Brand Colors beibehalten

**Entscheidung (Leo, 2026-03-26):** Bestehende Brand Colors bleiben. Kein Terracotta, kein neuer Akzent.

| Rolle | Farbe | HEX |
|---|---|---|
| **Hintergrund** | Warm Off-White (Mood Board bestaetigt) | #F5F0E8 |
| **Primaertext** | Warm Dark Charcoal (nicht Pure Black) | #3C3028 |
| **Primaer-Akzent** | Deep Mineral Blue (Brand) | #294B6D |
| **Sekundaer-Akzent** | Soft Gold / Wet Sand (Brand) | #D4BFAA |
| **CTA** | Deep Mineral Blue auf Weiss / Weiss auf Blue | #294B6D |
| **Product Photo BG** | Blue Variant (Brand) | #3D6588 |
| **Subtle Borders** | Warm neutral | #E8E0D8 |

**Was sich aendert vs. V1:** Off-White statt Pure White als Basis, warmer Charcoal statt Schwarz fuer Text. Die Referenzen (Cure, PANPURI, Mood Board) bestaetigen: warme Neutraltoene wirken luxurioeser.

### Entscheidung: Typografie — Brand Fonts beibehalten, Styling upgraden

**Entscheidung (Leo, 2026-03-26):** Playfair Display + Inter bleiben. Styling-Upgrades aus den Referenzen uebernehmen.

| Rolle | Font | Upgrade aus Referenzen |
|---|---|---|
| **Headlines** | Playfair Display Bold | Groesser (48-56px statt 32-36px) fuer Editorial-Feel (Sakara) |
| **Body** | Inter Regular/Medium | Bleibt |
| **Labels/Nav/CTAs** | Inter | Uppercase + Letter-Spacing 1-2px (GA + Sakara) |
| **Grosse Subheadlines** | Inter Light (300) | Neues Element — eleganter Kontrast zu Bold Headlines (GA) |
| **Alternative Serif** | Cormorant Garamond | Optional fuer Testimonials/Quotes — spaeter testen |

**Moegliche V2 der Typografie:** Cormorant Garamond als Headline-Alternative testen (steht bereits in Brand Guidelines). Aber kein Muss — erst V1 mit Playfair umsetzen, dann vergleichen.

### Entscheidung: Fotografie — Bestand nutzen, AI-Lifestyle spaeter

**Entscheidung (Leo, 2026-03-26):** Vorerst mit bestehenden Produktfotos aus `reference/product-pics/` arbeiten. Fuer Lifestyle-Shots spaeter nanobanana (AI-Bildgenerierung) evaluieren.

**Implikation fuer V2-Design:**
- Hero und Sections muessen auch ohne Lifestyle-Fotos premium wirken
- Loesung: Produkt auf farbigen/texturierten Hintergruenden (Deep Mineral Blue, Sand-Textur), Overlay-Effekte, Gradient-Sections
- Spaeter: nanobanana fuer Strand/Yoga/Kueche-Szenen mit Produkt — eigener Arbeitsschritt

### Empfohlene Layout-Richtung

1. **Hero:** Full-bleed mit Produkt auf texturiertem Hintergrund (Sand/Stein), Text-Overlay, subtiler Parallax
2. **Navigation:** Sticky, Transparent beim Start, Solid beim Scroll, zentriertes Logo
3. **Sections:** Abwechselnd Bild-Links/Text-Rechts, max 2-3 Elemente pro Viewport
4. **Produkte:** Grid mit natuerlichen Hintergruenden (Blue Variant #3D6588), Hover-Effekt
5. **CTAs:** Pill-Shape (30px radius), grosszuegiges Padding, Deep Mineral Blue
6. **Footer:** Multi-Column, Newsletter-Signup, Social Links, SVG-Welle beibehalten
7. **Announcement Bar:** Scrollender Ticker ("Free Shipping" / "Thai FDA Approved" etc.)
8. **Typografie-Styling:** Uppercase Labels, grosse Playfair Headlines, Inter Light Subheadlines

---

_Erstellt: 2026-03-26 | Aktualisiert: 2026-03-26 mit Leos Entscheidungen_
_Basis: Live-Analyse aller 4 Referenz-Websites + Brand Guidelines_

# Design-Analyse V7+ — Elevated Natural Luxury
# Referenz-Websites + Mood-Board + Konkretes Design-System

**Erstellt:** 2026-03-27
**Zweck:** Detaillierte visuelle Analyse der 4 Referenz-Brands, Mood-Board-Essenz und daraus abgeleitetes konkretes Design-System fuer Salt.Magic V8+

---

## Teil 1: Referenz-Websites — Detailanalyse

---

### 1.1 PANPURI (panpuri.com) — Thai Luxury Wellness

**Was PANPURI richtig macht und Salt.Magic braucht:**

#### Layout-Patterns
- **Full-bleed Lifestyle-Imagery** als primaeres Mittel: Riesige Bilder (100vw, 70-80vh) die den gesamten Viewport einnehmen
- **Contained Content** darueber gelegt: Text schwebt ueber Bildern mit Semi-transparentem Overlay
- **2-Spalten Asymmetrie**: Bild nimmt 60%, Text 40% — nie 50/50 (das wirkt "template-haft")
- **Produkt-Karussells** horizontal scrollbar mit Swiper.js, nicht als statisches Grid
- **Max 2 Elemente pro Viewport**: Nie mehr als Headline + Bild oder Headline + Cards gleichzeitig sichtbar

#### Farbpalette
- **Dominant:** Reines Weiss (#FFFFFF) als Canvas
- **Primaer-Akzent:** Terracotta/Burnt Sienna #CC6055 — NUR fuer CTAs und Hover-States
- **Text:** Near-Black #1F1F1F (Headlines), Dark Grey #3C434A (Body)
- **Keine Zwischentoene** — die Reduktion auf 3 Farben erzeugt Eleganz
- **Farbakzent kommt von der Fotografie**, nicht vom UI

#### Typografie
- **System-Fonts** (Helvetica, Arial) — kein Custom-Font noetig wenn die Fotografie stark genug ist
- **Headlines 36-42px**, Body 20px — relativ gross, viel Luft
- **Minimales Letter-Spacing** — wirkt weniger "designed", mehr "redaktionell"
- **Kein Uppercase** bei Headlines — Sentence Case ueberall

#### Bildstrategie (PANPURI Mood-Board-Analyse)
Die 3 PANPURI-Bilder zeigen konsistent:
- **Bild 1 (Silent Flame Parfuem auf Stein):** Produkt auf natuerlichem Stein, Meer im Hintergrund unscharf. Daemmerungslicht, kuehle Blau-Toene mit warmem Glas. Shallow Depth-of-field (f/1.8-2.8). Das Produkt IST der Held, die Natur IST die Buehne.
- **Bild 2 (3 Parfuems auf Moos-Fels):** Waldlicht von oben, Moos und Stein als natuerliche "Shelf". Bokeh-Hintergrund (Gruen verschwommen). Produkte in einer Dreiergruppe — ungerade Zahlen wirken organischer.
- **Bild 3 (3 Flaschen gegen Daemmerungshimmel):** Silhouetten-artig, Produkte als Umrisse gegen goldenen Himmel. Minimal — fast wie ein Filmstill.

**Kern-Erkenntnis:** PANPURI fotografiert Produkte wie Stillleben in der Natur. Jedes Foto koennte in einem Kunstbuch stehen. KEIN weisser Hintergrund, KEIN Studio-Setup.

#### Spacing
- **Extrem luftig**: Section-Padding ca. 120-160px vertikal auf Desktop
- **Horizontaler Rand**: 80-100px auf Desktop, 24px auf Mobile
- **Zwischen Headline und Body**: 32-48px Gap — nie eng zusammen

#### Hero
- **Full-width Einzelbild** mit Text-Overlay: "Awaken Your Senses"
- **Gradient-Overlay** von unten (transparent -> 40% dunkel) fuer Textlesbarkeit
- **CTA als Pill-Button** unten im Hero, nicht neben der Headline

#### Animationen
- **Smooth Scroll** als Basis
- **Keine aggressiven Scroll-Animationen** — Inhalte sind einfach DA
- **Hover auf Produkten:** Sanftes Scale (1.03) + Schatten-Erhoehung
- **Page-Transitions:** Keine (SPA-artig, aber kein Animations-Overload)

#### CTA-Strategie
- **Pill-Shape** (border-radius 9999px), grosszuegig gepadded
- **Primaer:** Terracotta #CC6055, weisser Text
- **Sparsam platziert:** Pro Viewport maximal 1 CTA — nie 2 Buttons nebeneinander
- **Text:** "Discover More", "Reserve", "Add to Cart" — elegant, nicht pushig

---

### 1.2 Sakara Life (sakara.com) — Clean Nutrition, Editorial Luxury

#### Layout-Patterns
- **12-Column Grid** als Basis, aber asymmetrisch genutzt (7+5, 8+4 Splits)
- **Full-width Banner-Karussell** im Hero mit Auto-Play
- **Magazine-Style Sections**: Grosse Headline links, Bild rechts — wie ein Magazin-Spread
- **Sticky Mega-Navigation** mit Dropdown-Kategorien
- **Newsletter prominent** ueber dem Footer, eigene Section mit farbigem Hintergrund
- **Content-Blocks in Karten:** Abgerundete Ecken (12-16px), subtile Schatten

#### Farbpalette
- **Primaer:** Schwarz #000 + Weiss #FFF — clean und stark
- **Off-White Sections:** #FAFAF8 — gerade warm genug um nicht steril zu wirken
- **Gruene Akzente:** #5BAB5D (Tags, "Plant-Based" Labels)
- **Pistazie:** #DFE3AE fuer Tags und Highlights
- **Grau:** #D9D9D9 (Borders), #747474 (Sekundaertext)
- **Alternating Background:** Weiss -> Off-White -> Weiss erzeugt Rhythmus OHNE harte Divider

#### Typografie
- **Custom Sans-Serif** "Rework Text" fuer alles
- **Uppercase Headlines** mit 1-2px Letter-Spacing — das macht "clean wellness" Branding
- **H1 ca. 56px**, H2 ca. 48px — GROSS, editorial, dominant
- **Body 16-18px**, komfortabel lesbar
- **Tertiaere Links:** Underline mit text-underline-offset: 4px — elegant statt plump

#### Bildstrategie
- **Professionelle Lifestyle-Fotos** in warmer, konsistenter Beleuchtung
- **Produkte IMMER im Kontext**: Neben Fruechten, auf Marmor, in Haenden
- **Flat-Lay Styling** mit natuerlichen Props (Blumen, Stoffe, Zutaten)
- **Close-up Texturen**: Pulver, Fluessigkeiten, Oberflaechen — sensorisch
- **Kein Isolierter Produktshot** auf der Homepage — nur in der Shop-Seite

#### Spacing
- **Section-Padding:** 80-120px vertikal
- **Headline-zu-Body Gap:** 24-32px
- **Card-Grid Gaps:** 24px (eng genug fuer Zusammengehoerigkeit, luftig genug fuer Premium)
- **Full-bleed Sections** wechseln mit contained (max-w-1200px) Sections

#### Hero
- **Slideshow** mit 3-4 Bannern, Auto-Play alle 5-6 Sekunden
- **Split-Screen**: Links Text auf farbigem Hintergrund, rechts Full-bleed Bild
- **Text-Overlay** mit subtiler Hintergrund-Opacity
- **2 CTAs im Hero**: Primaer (schwarz) + Tertiaer (Underline-Link)

#### Animationen
- **Cubic-Bezier Easing:** .165, .84, .44, 1 — geschmeidig, nicht federnd
- **Slide-up Entrance:** translateY(24px) zu 0 beim Scroll
- **Backdrop-Blur:** blur(4px) bei Dialogen/Overlays
- **Hover auf Buttons:** Farbinversion (Schwarz wird Weiss, Weiss wird Schwarz)
- **Kein Parallax** — Sakara setzt auf statische, starke Bilder

#### CTA-Strategie
- **Primaer:** Schwarz auf Weiss, Hover invertiert zu Weiss auf Schwarz
- **Uppercase** CTA-Text
- **Grosszuegiges Padding:** 18px 16px (Hero-CTAs), 12px 16px (Standard)
- **Tertiaer: Underline-Links** statt Buttons fuer "Learn More" Aktionen
- **Frequenz:** 1 CTA pro Section, nie aggressiv

---

### 1.3 Grown Alchemist (grownalchemist.com) — Science of Purity

#### Layout-Patterns
- **Max-width 120rem** (1920px), mit schmaler Variante 75rem (1200px) fuer Content
- **Announcement-Ticker** im Header: Auto-Scroll mit 125s Dauer, Pause on Hover
- **Streng modulare Sections** mit CSS Custom Properties fuer per-Breakpoint Spacing
- **Mega-Menu** im Header (display:none default, aktiviert auf Desktop)
- **Zero Media Decoration**: Keine Schatten, keine Borders, kein Radius auf Bildern

#### Farbpalette (aus Live-Analyse)
- **Primaer:** Pure Black rgb(0,0,0) + Pure White rgb(255,255,255)
- **Tertiaer Gunmetal:** rgb(126,123,121) fuer subtile Elemente
- **13+ Grau-Abstufungen:** Von rgb(235,235,235) bis rgb(33,33,33)
- **Warmer Akzent:** Light Red rgb(247,220,214) — nur minimal eingesetzt
- **Borders:** 0.08 Opacity — praktisch unsichtbar

#### Typografie (aus Live-CSS-Analyse)
- **Headlines:** "EuropaGroSHOP-MedCon" (Custom Condensed Sans-Serif) — schlank, hoch, reduziert
- **Body:** "ArialNarrow" mit Helvetica/Arial Fallback
- **11 Groessen-Stufen:** Von 1.2rem (XXS) bis 7.4rem (7XL = 118px!)
- **Basis-Body:** 1.8rem (18px)
- **Letter-Spacing:** Normal 0.10px, Wide 0.64px, Extra-Wide 0.96px
- **Line-Height:** Standard 1.3, Range von 0.6 bis 1.5

**Kern-Erkenntnis:** GA nutzt extrem grosse Headlines (bis 118px) bei sehr schlankem Font-Weight. Das erzeugt den "luxury editorial" Effekt mit minimalem visuellen Gewicht.

#### Bildstrategie
- **Kein Radius** auf Bildern (--media-radius: 0rem) — Bilder gehen bis zum Rand
- **Kein Schatten** (--media-shadow-opacity: 0) — flat, clean
- **Kein Padding um Bilder** (--media-padding: 0rem) — Bilder sind full-bleed innerhalb ihrer Container
- **Hero-Banner:** 72rem Desktop / 39rem Mobile Hoehe

#### Spacing (aus Live-CSS)
- **62 Spacing-Variablen** (--space-0 bis --space-62) — extrem granulares System
- **Negative Spacing verfuegbar** (--space--40 bis --space--2) — fuer Ueberlappungen
- **Section-Padding Desktop:** 4.8rem (ca. 77px)
- **Section-Padding Mobile:** 1.6rem (ca. 26px)
- **Grid-Vertical-Spacing Desktop:** Variable via CSS Custom Property

#### Hero
- **Announcement-Ticker** als Hero-Element: Endlos scrollender Text
- **Linear-Gradient Overlay:** rgba(0,0,0,0) zu rgba(0,0,0,0.10) — kaum sichtbar
- **Pause on Hover** am Ticker — subtle Interaktivitaet

#### Animationen
- **Ticker:** translateX(-50%) Keyframe, 125s Endlos-Loop
- **Durations-System:** Short 100ms, Default 200ms, Medium 350ms, Long 500ms, Extreme 1000ms
- **Will-change: transform** fuer Performance-Optimierung
- **Sticky Header:** top-Position Transition 0.15s ease-out
- **Kein Scroll-triggered Fade-in** — Inhalte sind sofort da. Nur Mikro-Interaktionen.

#### CTA-Strategie
- **Near-Rectangular:** Border-radius 4px (fast eckig — Anti-Pill)
- **Flat:** Kein Shadow, keine Border-Opacity
- **Icon-Chevron:** SVG-Pfeil rechts neben Button-Text (position: absolute)
- **Minimalist:** Button wirkt kaum wie ein Button — eher wie ein Link mit Hintergrund

---

### 1.4 Cure Hydration (curehydration.com) — Premium Hydration

#### Layout-Patterns
- **Max-width 1600px**, zentriert — breiter als Sakara/PANPURI
- **Announcement Bar** ueber Sticky Header
- **Full-width Hero-Slideshow** mit 6 Slides, Auto-Play
- **Logo-Karussell** als Trust-Band (grayscale Partner-Logos)
- **Featured Collections Grid:** 2-3 Spalten responsiv
- **Product Cards** mit Hover-Quick-View

#### Farbpalette
- **Headline-Text:** #BAAA9E (warmes Beige/Taupe) — KEIN Schwarz. Das ist der Game-Changer.
- **Body-Text:** Dunkleres Taupe, aber immer warm
- **Hintergrund:** #FFFFFF primaer, #FAFAF9 sekundaer (Off-White Sections)
- **Borders:** #F5F2F0 — praktisch unsichtbar
- **CTA-Akzent:** #3E7B8F (Teal/Petrol) — frisch, clean, nicht aggressiv
- **Keine dunklen Sections** — alles hell, luftig, einladend

#### Typografie
- **System UI Stack** (system-ui, -apple-system, Segoe UI, Roboto)
- **H1: 56px, H2: 48px** — gross und praesent
- **Body: 16px Basis**
- **Weights: 400 + 700** — keine Zwischenstufen
- **Kein Custom Font** — beweist: Premium braucht keinen teuren Font, sondern gutes Spacing

#### Bildstrategie
- **Lifestyle-Dominant:** Drinks am Pool, draussen, in Haenden, neben frischen Fruechten
- **Warmes natuerliches Licht**, leicht gesaettigte Farben
- **Mix aus Perspektiven:** Flat-Lay, 3/4-Winkel, Action-Shots, Close-ups
- **Produkte NIE isoliert** — immer im Kontext von Genuss und Wohlbefinden
- **Farbige Produkte als Farbakzent:** Die bunten Cure-Sachets SIND der Farbakzent der Seite

#### Spacing
- **Vertical Breather:** 48px (Mobile) -> 64px (Tablet) -> 80-90px (Desktop)
- **Container Gutter:** 24px (Mobile), 40px (Tablet+)
- **Card-Gaps:** 16-24px
- **"Breathing Room" als bewusstes Design-Element** — viel Luft = viel Luxus

#### Hero
- **Full-width Slideshow**, 6 Slides mit Auto-Play
- **Text-Overlay auf dunklerem Hintergrund-Segment** des Bildes
- **Slide-Indikatoren** als kleine Striche/Dots unten
- **CTA im Hero:** Pill-Button, Teal auf Weiss

#### Animationen
- **Slideshow-Transitions:** Smooth Fade zwischen Slides (500-700ms)
- **Hover auf Products:** Zweites Bild (Lifestyle statt Produktshot) einblenden
- **Scroll:** Kein Parallax, kein Fade-in — Content ist sofort sichtbar
- **Trust-Logo-Band:** Horizontal Auto-Scroll (Marquee-Effekt)

#### CTA-Strategie
- **Pill-Shape:** Border-radius 30px
- **Primaer:** Weiss auf Teal #3E7B8F, Hoehe 52px Desktop / 48px Mobile
- **Full-width auf Mobile** — nie zu klein zum Tippen
- **Sentence Case**, Action-oriented ("Shop Now", "Try Cure")
- **Frequenz:** Hero + jede 3. Section + Footer — regelmaessig aber nicht drängend

---

## Teil 2: Mood-Board Vibe-Essenz

---

### 2.1 PANPURI-Bilder: "Natur als Galerie"

**Visuelles Leitmotiv:** Produkte werden wie kostbare Objekte in natuerlichen Umgebungen inszeniert.

| Bild | Setting | Licht | Mood | Salt.Magic-Relevanz |
|---|---|---|---|---|
| Parfuem auf Stein am Meer | Naturstein, Meerblick | Daemmerung, kuehle Blautoene | Meditative Stille | Salt.Magic Jar auf Korallengestein, Samui-Meer im Hintergrund |
| 3 Flaschen auf Moos-Fels | Wald, Moos, Stein | Weiches Waldlicht von oben | Botanische Apotheke | Salt.Magic Sachets neben tropischen Blaettern auf nassem Stein |
| Silhouetten gegen Abendhimmel | Minimaler Horizont | Golden Hour, warmes Amber | Cinematic, fast abstrakt | Salt.Magic Jar als Silhouette gegen Samui-Sonnenuntergang |

**Fotografische Regeln abgeleitet:**
- Shallow Depth-of-field (Bokeh-Hintergrund)
- Natuerliches Licht, nie Blitz
- Ungerade Produktanzahl (1 oder 3)
- Natuerliche Oberflaechen als "Shelf" (Stein, Moos, Sand, Holz)
- Kuehle + warme Toene mischen (Blau-Gruen Natur + Gold/Amber Licht)

---

### 2.2 Alo Yoga-Bilder: "Aspirational Lifestyle"

| Bild | Setting | Licht | Mood | Salt.Magic-Relevanz |
|---|---|---|---|---|
| Yoga am Pool (Kopfstand) | Infinity Pool, Outdoors | Helles Tageslicht, Schatten | Aspirational, fit, luxurioes | Lifestyle-Kontext: "Hydration fuer den aktiven Tag" |
| Yoga im Palazzo (Barock-Saal) | Palazzo-Innenraum, blau-goldene Matten | Warmes Indirektes Licht, Gold | Heritage + Modern, Luxury Wellness | Kontrast Alt/Neu — Salt.Magic als "ancient minerals, modern format" |
| Gym-Selfie (Alo Athleisure) | High-End Gym, Spiegel | Kuenstliches Gym-Licht, moody | Casual Luxury, Influencer-Aesthetic | "Daily Essential" Lifestyle — Salt.Magic gehoert zum Alltag |

**Lifestyle-Regeln abgeleitet:**
- Zeige das LEBEN das mit dem Produkt verbunden ist, nicht nur das Produkt
- Luxurioese Settings (Pool, Spa, High-End Gym, Palazzo) erhoehen den wahrgenommenen Wert
- Menschen in Bewegung/Ruhe — nie posernd, immer authentisch wirkend
- Warme Neutraltoene in Kleidung/Umgebung (Beige, Camel, Navy)

---

### 2.3 MarocMaroc-Bilder: "Handcrafted Warmth"

| Bild | Setting | Licht | Mood | Salt.Magic-Relevanz |
|---|---|---|---|---|
| Produkt im Hammam | Dunkles Holz, warmer Hintergrund | Kerzenlicht/Daemmerung, amber | Intim, rituell, sinnlich | Salt.Magic als "taegliches Ritual" — nicht nur Supplement |
| 5 Tuben am Strand | Sand, Meer, blauer Himmel | Helles Tageslicht, natuerlich | Frisch, natuerlich, einladend | Produktreihe im natuerlichen Setting — "born from nature" |
| Kerze + Blumen am Fenster | Fensterbrett, Tageslicht, Kerze | Warmes Seitenlicht, golden | Gemuetlich, langsam, achtsam | "The scent of serenity" — Slow Wellness Messaging |

**Handcraft-Regeln abgeleitet:**
- Warme, goldene Lichtquellen (Kerzen, Abendsonne, Hammam-Licht)
- Erdige Materialien: Holz, Ton, Sand, Leinen
- Produkte eingebettet in RITUALE, nicht in Commerce
- Arabische/orientalische Typografie als Inspiration fuer handgeschriebene Elemente
- Farben der Produkte SIND der Farbakzent (Orange, Gruen, Rosa, Creme)

---

### 2.4 Botanische Illustration: "Apotheker-Heritage"

Das Gemini-generierte Bild zeigt handgezeichnete Kraeuterzeichnungen im Apotheker-Stil:
- **5 verschiedene Pflanzen** in feiner Tusche-Zeichnung (Petersilie, Lavendel, Rosmarin, Wildblume, Kraeuter)
- **Monochrom** in Olive/Dunkelgruen auf Weiss
- **Botanisch-wissenschaftlicher Stil** — wie aus einem 18. Jahrhundert Herbar
- **Sehr feine Linien**, kein Fill, nur Umriss und Schraffur

**Heritage-Regeln abgeleitet:**
- Botanische Illustrationen als Schmuck-Elemente (Section-Divider, Hintergrund-Pattern)
- Olive/Dunkelgruen (#5A6B3A) als Illustrationsfarbe
- Handgezeichnete Linie > computergenerierte Grafik
- Wissenschaftliche Praezision + kuenstlerische Schoenheit = "Apotheker trifft Kuenstler"
- NICHT als Hauptelement nutzen, sondern als dezentes Schmuck-Detail (5-10% Opacity Hintergruende, Section-Trenner)

---

### 2.5 Mood-Board Synthese: Der Salt.Magic Vibe

Wenn man alle 10 Bilder zusammen betrachtet, entsteht ein klarer visueller Archetyp:

**"Ein modernes Apotheker-Atelier auf einer tropischen Insel, bei Sonnenuntergang, mit dem Meer im Hintergrund."**

| Aspekt | Umsetzung |
|---|---|
| **Licht** | Golden Hour dominant. Warme Amber-Toene. Nie hartes Mittagslicht oder steriles Studiolicht. |
| **Materialien** | Stein, Sand, Moos, Holz, Leinen — alles was man anfassen moechte |
| **Farben** | Mineral Blue (Meer/Himmel) + Soft Gold (Abendlicht) + Olive (Botanik) |
| **Stimmung** | Ruhig, bedacht, luxurioes aber erreichbar. Wie ein Spa, nicht wie ein Krankenhaus. |
| **Produkt-Rolle** | Protagonist in einer natuerlichen Szene — nie isoliert, nie klinisch |
| **Menschenbild** | Gesund, aktiv, achtsam — NICHT Bodybuilder, NICHT krank |
| **Typografie** | Elegant, duenn, gross — wie in einem Wellness-Magazin |
| **Animation** | Langsam, sanft, organisch — wie Wellenbewegung oder Blaetter im Wind |

---

## Teil 3: Konkretes Design-System fuer Salt.Magic V8

Basierend auf der Analyse aller 4 Referenzen + 10 Mood-Board-Bilder + bestehendem Brand-System.

---

### 3.1 Layout-System

#### Grundstruktur

```
Container:        max-w-[1400px] (Wide), max-w-[1200px] (Standard), max-w-[800px] (Content), max-w-[640px] (Narrow)
Section-Padding:  py-[clamp(80px,12vw,160px)] — GROESSER als aktuell (war 80-140px)
Horizontal-Pad:   px-[clamp(24px,5vw,80px)]
```

#### 6 Layout-Varianten fuer Sections

**Layout A: "Full-Bleed Image + Text Overlay"**
- Anwendung: Hero, Story-Break, CTA-Banner
- Bild: 100vw breit, 70-85vh hoch
- Text: Absolute Position, links unten oder zentriert
- Overlay: Linear-Gradient von unten (transparent -> rgba(0,0,0,0.5))
- Beispiel: Hero mit Samui-Sonnenuntergang-Foto, Salt.Magic Headline + CTA darauf

**Layout B: "Asymmetric Split" (60/40)**
- Anwendung: Why-Section, For-Everyone, Story
- Links: Bild (60% Breite), rounded-2xl, leichter Schatten
- Rechts: Text-Block mit Eyebrow + Headline + Body + CTA
- Vertikale Zentrierung: Items-center
- Mobile: Stack (Bild oben, Text unten)
- Variante: Gelegentlich spiegeln (Text links, Bild rechts) fuer Rhythmus

**Layout C: "Centered Editorial"**
- Anwendung: TextBlock-Sections (Why, Formula, For Everyone)
- Zentrierter Text, max-w-[700px]
- Eyebrow (Uppercase, Gold) -> Gold-Line (32px) -> Headline (Playfair, gross) -> Body (Inter, 18px)
- Unter dem Text: Optional 2-3 Spalten Cards oder Bild
- Viel vertikaler Raum drumherum (160px padding)

**Layout D: "Card Grid"**
- Anwendung: Benefits, Products, Blog-Teaser
- 3-4 Spalten auf Desktop, 2 auf Tablet, 1 auf Mobile
- Gap: 24px
- Cards: Kein Border, leichter Schatten (0 2px 8px rgba(0,0,0,0.04)), runde Ecken (16px)
- Hover: translateY(-4px) + Schatten-Erhoehung + 300ms ease-out

**Layout E: "Full-Width Color Band"**
- Anwendung: SocialProof, TrustBand, Comparison-Header
- 100vw, feste Hoehe (120-200px)
- Hintergrundfarbe: Mineral Blue (#294B6D) oder Warm-Off (#F9F7F4)
- Horizontales Flex-Layout mit 3-4 Datenpunkten
- Zentrierter Text, Inter Medium, Uppercase Labels

**Layout F: "Immersive Gallery"**
- Anwendung: Zwischen Story und FAQ, oder als eigenstaendige Section
- 2-3 Full-bleed Bilder horizontal nebeneinander (Overflow hidden, horizontal scroll auf Mobile)
- Keine Gaps zwischen Bildern — sie bilden ein Panorama
- Optional: Dezenter Text-Overlay auf dem mittleren Bild
- Aspect-Ratio: 3:2 (Landschaft)

---

### 3.2 Erweiterte Farbpalette

#### Bestehendes System (beibehalten)

| Token | HEX | Rolle |
|---|---|---|
| `mineral` | #294B6D | Primaer-Akzent, Headlines, CTAs |
| `mineral-light` | #3D6588 | Hover-State, Produktfoto-BG |
| `gold` | #D4BFAA | Sekundaer-Akzent, Eyebrows, Divider |
| `ink` | #3C3028 | Body-Text |
| `warm-white` | #FFFFFF | Haupt-Hintergrund |
| `warm-off` | #F9F7F4 | Alternating Sections |

#### Neue Tokens fuer V8 (Erweiterung)

| Token | HEX | Rolle | Referenz |
|---|---|---|---|
| `deep-navy` | #1A3248 | Dunkle Immersive-Sections (Hero-Overlay, CTA-Banner) | PANPURI Hero-Overlays |
| `golden-hour` | #E8C9A0 | Warme Highlight-Farbe fuer Overlays, Badges | Mood-Board Abendlicht |
| `botanical` | #5A6B3A | Botanische Illustrationen, "Natural" Tags | Gemini-Bild Kraeuterzeichnung |
| `stone` | #D1C7BA | Hintergrund fuer Produkt-Staging-Sections | PANPURI Stein-Texturen |
| `mist` | #F0EDE8 | Dezenter Hintergrund zwischen warm-off und cream | Sakara Section-Uebergaenge |
| `overlay-warm` | rgba(42,30,20,0.45) | Foto-Overlays mit warmer Tonung | MarocMaroc Hammam-Licht |
| `overlay-cool` | rgba(25,45,65,0.40) | Foto-Overlays mit kuehler Tonung | PANPURI Daemmerungsfotos |

#### Gradient-System

```css
/* Hero-Overlay: Warm Golden Hour */
--gradient-hero: linear-gradient(
  180deg,
  rgba(42,30,20,0.0) 0%,
  rgba(42,30,20,0.15) 40%,
  rgba(42,30,20,0.55) 100%
);

/* Dark CTA Section: Deep Navy */
--gradient-cta: linear-gradient(
  135deg,
  #1A3248 0%,
  #294B6D 50%,
  #3D6588 100%
);

/* Section Fade: Weiss zu Warm-Off (kein harter Schnitt) */
--gradient-section-fade: linear-gradient(
  180deg,
  #FFFFFF 0%,
  #F9F7F4 100%
);

/* Stone Texture Background */
--gradient-stone: linear-gradient(
  160deg,
  #D1C7BA 0%,
  #E8E0D8 40%,
  #F0EDE8 100%
);
```

#### Dark-Section Farbregeln

Fuer dunkle Sections (Hero-Overlay, CTA-Banner, Feature-Highlight):
- Hintergrund: `deep-navy` (#1A3248) oder `gradient-cta`
- Headline: Weiss #FFFFFF
- Body: rgba(255,255,255,0.8)
- Eyebrow: `golden-hour` (#E8C9A0)
- CTA-Button: Weiss mit Mineral-Blue Text, oder Gold-Outline auf dunkel
- Divider/Lines: rgba(255,255,255,0.15)

---

### 3.3 Typografie-Upgrade

#### Neue Type Scale (groesser, leichter)

| Element | Font | Groesse Desktop | Groesse Mobile | Weight | Line-Height | Letter-Spacing |
|---|---|---|---|---|---|---|
| **Display H1** | Playfair Display | 72px (4.5rem) | 44px (2.75rem) | 400 (Regular) | 1.05 | -0.03em |
| **Section H2** | Playfair Display | 56px (3.5rem) | 36px (2.25rem) | 400 (Regular) | 1.1 | -0.02em |
| **Sub-H3** | Playfair Display | 32px (2rem) | 26px (1.625rem) | 400 (Regular) | 1.25 | -0.01em |
| **Eyebrow** | Inter | 11px (0.6875rem) | 11px | 500 (Medium) | 1.4 | 0.22em |
| **Body Large** | Inter | 19px (1.1875rem) | 17px | 300 (Light) | 1.75 | 0.01em |
| **Body** | Inter | 16px (1rem) | 16px | 400 (Regular) | 1.7 | 0 |
| **Body Small** | Inter | 14px (0.875rem) | 14px | 400 | 1.6 | 0 |
| **CTA Button** | Inter | 11px (0.6875rem) | 11px | 600 (SemiBold) | 1 | 0.12em |
| **Stat Number** | Playfair Display | 64px (4rem) | 48px (3rem) | 400 | 1.0 | -0.02em |
| **Caption** | Inter | 13px (0.8125rem) | 12px | 400 | 1.5 | 0.02em |

#### Aenderungen gegenueber V7

1. **Alle Playfair Headlines von Bold (700) auf Regular (400)** — GA, Sakara, PANPURI nutzen alle Regular/Light fuer Serif-Headlines. Bold Playfair wirkt schwer, Regular wirkt elegant.
2. **Body Text auf Inter Light (300) fuer grosse Absaetze** — Cure und Sakara nutzen leichtere Weights fuer Body. Wirkt luftiger.
3. **Display H1 auf 72px statt 56px** — GA geht bis 118px, Sakara bis 56px. 72px ist der Sweet-Spot fuer Salt.Magic.
4. **Eyebrow Letter-Spacing auf 0.22em** (von 0.12em) — alle Referenzen nutzen breites Spacing fuer Labels.
5. **CTA-Buttons auf 11px Uppercase** statt 16px — alle 4 Referenzen nutzen kleine, uppercase Button-Texte. Wirkt subtiler und edler.

---

### 3.4 Component-Patterns

#### 3.4.1 Hero — "Cinematic Full-Bleed"

```
Typ:              Full-viewport (100vw x 90vh min, 100vh ideal)
Hintergrund:      Lifestyle-Foto oder Produkt-auf-Natur-Foto (object-fit: cover)
Overlay:          --gradient-hero (warm, von oben transparent zu unten 55% dunkel)
Film-Grain:       Beibehalten (adds texture, reduces digital feel)

Text-Position:    Links unten, max-w-[600px], padding-bottom 12%
Eyebrow:          "Thailand's Premier Mineral Electrolyte", golden-hour Farbe, 11px
Headline:         Playfair 72px Regular, Weiss, 2-3 Zeilen max
Sub-Headline:     Inter Light 19px, rgba(255,255,255,0.85), 1 Zeile
CTA:              Pill-Button, Weiss bg, Mineral Text, 11px Uppercase, 14px 36px Padding
                  + Tertiaer-Link daneben: "Learn More", Underline, Weiss

Scroll-Indicator: Dezenter animierter Pfeil unten zentriert (opacity 0.4, bounce animation)
```

#### 3.4.2 Split-Section — "Magazine Spread"

```
Layout:           Grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[clamp(40px,6vw,80px)]
Bild-Seite:       Rounded-2xl, overflow-hidden, aspect-[4/5] oder aspect-[3/4]
                  Optional: Leichte Rotation (rotate-1) fuer organischen Look
Text-Seite:       Flex flex-col justify-center, max-w-[480px]
                  Eyebrow -> Gold-Line -> H2 -> Body (max 3 Absaetze) -> CTA-Link

Variante "Reversed": Bild rechts, Text links (grid-cols-[1fr_1.2fr])
Variante "Overlapping": Bild leicht groesser als Section (-mt-8 -mb-8), Text ueberlappt
```

#### 3.4.3 Produkt-Cards — "Natural Staging"

```
Card:             Kein Border. Background: transparent (Produkt-Fotos haben eigenen BG).
                  Rounded-2xl, overflow-hidden.
                  Hover: Scale(1.02) auf dem Bild, translateY(-4px) auf Card, shadow-lg
Bild:             Aspect-[4/5], object-cover. Produktfotos auf Mineral-Blue BG beibehalten.
Body:             Padding 24px.
                  Produktname: Playfair 24px Regular, Mineral
                  Preis: Inter SemiBold 20px, Ink
                  Feature-Tags: Inter 12px, Uppercase, botanical Farbe, mit kleinem Blatt-Icon
CTA:              "Add to Cart" als Pill-Button, volle Card-Breite, Mineral BG, Weiss Text
```

#### 3.4.4 Testimonial — "Editorial Quote"

```
Layout:           Full-width Section, bg-warm-off, max-w-[800px] mx-auto
                  Zentriert, kein Card-Look (kein Rahmen, kein Schatten)
Quote-Mark:       Playfair Display, 120px, gold Farbe, opacity 0.15, absolute Position oben links
Quote-Text:       Playfair Regular Italic, 28px Desktop / 22px Mobile, mineral Farbe
                  Line-height 1.5, max-w-[640px]
Author:           Inter Medium 13px, Uppercase, Ink-Faint, letter-spacing 0.15em
                  Darunter: Rolle/Ort in Inter Light 13px

Navigation:       3 Gold-Striche (40px breit, 2px hoch), aktiver Strich volle Opacity,
                  inaktive 30% Opacity. Horizontal zentriert unter dem Quote.
Transition:       Fade + translateY(8px), 500ms ease-out
Auto-Play:        8 Sekunden, Pause on Hover
```

#### 3.4.5 Benefits Grid — "Icon + Label"

```
Layout:           Grid grid-cols-2 md:grid-cols-4, gap-8
Item:             Zentriert. Icon (40px, SVG, mineral oder gold Farbe) ->
                  Label (Inter Medium 14px, ink) ->
                  1-Satz Beschreibung (Inter Light 13px, ink-faint)
                  Kein Card-Rahmen. Kein Hintergrund. Nur Content.
Hover:            Icon color transition zu gold, 300ms
Animation:        Stagger fade-in, 80ms Delay pro Item
```

#### 3.4.6 Comparison Table — "Minimal Grid"

```
Layout:           Max-w-[900px], mx-auto
Header-Row:       Kein farbiger Hintergrund. Nur Inter SemiBold 13px, Uppercase, ink-faint
                  Gold-Unterstrich (2px) unter der Salt.Magic-Spalte
Rows:             Border-bottom 1px border-warm/30
                  Zeilen-Padding: 20px 0
                  Check-Icons: Mineral-Farbe fuer Salt.Magic, ink-faint fuer andere
                  X-Icons: ink-faint/30 (fast unsichtbar — nicht rot/negativ)
Salt.Magic Spalte: Font-weight Medium statt Regular (subtle Hervorhebung)
Mobile:           Horizontal scroll mit sticky erster Spalte
```

#### 3.4.7 FAQ Accordion — "Minimal Lines"

```
Container:        Max-w-[800px], mx-auto, kein Card-Hintergrund
Item-Divider:     1px solid border-warm/40 (nur zwischen Items, nicht am Anfang/Ende)
Question:         Inter Medium 17px, mineral Farbe
                  Padding: 24px 0
                  Chevron: Gold, 16px, rechts, rotate-180 on open, 300ms transition
Answer:           Inter Light 16px, ink-light, line-height 1.7
                  Padding: 0 0 24px 0
                  Max-height transition 400ms ease-out
Hover:            Question-Text: color transition zu gold, 200ms
```

#### 3.4.8 Newsletter Section — "Minimal Invite"

```
Layout:           Zentriert, max-w-[480px], bg-warm-off, py-[160px]
Eyebrow:          Gold, "Stay Connected"
Headline:         Playfair 36px Regular, "Join the community"
Body:             Inter Light 15px, 1 Satz
Input + Button:   Flex, gap-3
                  Input: Pill, border border-warm, bg-white, py-14px, px-20px
                  Button: Pill, bg-mineral, weiss text, 11px uppercase
                  Kein Label sichtbar (sr-only), Placeholder "your@email.com"
```

#### 3.4.9 CTA-Banner — "Immersive Dark"

```
Layout:           Full-width, gradient-cta Hintergrund, py-[clamp(100px,15vw,200px)]
                  Zentrierter Content, max-w-[600px]
Eyebrow:          golden-hour Farbe, 11px
Headline:         Playfair 48px Regular, Weiss
Body:             Inter Light 17px, rgba(255,255,255,0.8)
CTA:              Weiss bg, mineral text, Pill, grosszuegig (16px 40px)
                  Hover: bg golden-hour, ink text
Optional:         Dezentes Botanik-Pattern als Hintergrund (opacity 0.03)
```

---

### 3.5 Animation-Empfehlungen

#### Scroll-Animationen (Intersection Observer)

| Element | Animation | Duration | Easing | Trigger |
|---|---|---|---|---|
| Section-Headlines | opacity 0->1, translateY(20px->0) | 600ms | ease-out | 20% sichtbar |
| Body-Text | opacity 0->1, translateY(12px->0) | 500ms | ease-out | 100ms nach Headline |
| Cards (Grid) | opacity 0->1, translateY(24px->0) | 400ms | ease-out | Stagger 60ms |
| Bilder | opacity 0->1, scale(0.97->1) | 700ms | cubic-bezier(.16,.84,.44,1) | 15% sichtbar |
| Stat-Zahlen | Count-up von 0 | 2500ms | ease-out | 30% sichtbar |
| Gold-Lines | width 0->32px | 400ms | ease-out | Vor Headline |

#### Micro-Interactions

| Element | Trigger | Animation | Duration |
|---|---|---|---|
| Pill-Buttons | Hover | Background-color transition + scale(1.02) | 200ms |
| Pill-Buttons | Click/Active | scale(0.97) | 100ms |
| Card | Hover | translateY(-4px) + shadow-increase | 300ms ease-out |
| Nav-Links | Hover | Color zu gold, underline width 0->100% | 250ms |
| FAQ-Chevron | Click | rotate(0->180deg) | 300ms ease-out |
| Image | Hover | scale(1.03) innerhalb overflow-hidden Container | 500ms ease-out |

#### Parallax (NUR auf Desktop, NUR mit reduced-motion Check)

| Element | Intensitaet | Richtung |
|---|---|---|
| Hero-Hintergrundbild | -30px bis +30px | Vertikal, langsamer als Scroll |
| Botanische Illustration | -15px bis +15px | Vertikal |
| Floating Product Image | +10px bis -10px | Vertikal, schneller als Scroll (leicht) |

#### Global Animation Rules
- `prefers-reduced-motion: reduce` -> ALLE Animationen aus, nur opacity-Fades beibehalten
- Nie mehr als 3 animierende Elemente gleichzeitig im Viewport
- Scroll-Animationen feuern nur 1x (nicht bei Scroll-Back)
- Kein "Bounce" oder "Spring" Easing — immer smooth, nie verspielt

---

### 3.6 Konkrete Homepage Section-Layouts

Die Homepage in der idealen Reihenfolge mit konkreter visueller Beschreibung:

---

#### Section 1: Hero — "Cinematic Island Wellness"

**Layout:** Full-Bleed Image (Layout A)
**Visuell:** Salt.Magic Jar im Vordergrund auf nassem Naturstein, dahinter unscharfer Blick ueber Samui-Bucht bei Sonnenuntergang. Warmer Golden-Hour Gradient-Overlay von oben (transparent) nach unten (55% dunkel). Film-Grain-Textur drueber.

**Content:**
```
[Eyebrow]  THAILAND'S PREMIER MINERAL ELECTROLYTE
[Headline] Remineralize Your Water.
           Revitalize Your Life.
[Subline]  Pure minerals. Zero sugar. Every glass. Every day.
[CTA]      [Shop Now]   Learn More ->
```

**Hoehe:** 90vh minimum, 100vh ideal
**Text-Position:** Links unten, 12% vom unteren Rand
**Scroll-Indicator:** Animierter Chevron-Down, zentriert, opacity 0.3

---

#### Section 2: Trust Band

**Layout:** Full-Width Color Band (Layout E)
**Visuell:** Schmaler horizontaler Streifen (80px Hoehe), obere/untere Border in border-warm/30. Kein Hintergrund (transparent auf weiss).

**Content:** Zentriert, "Trusted by 150+ wellness locations" + Orts-Namen als Inter 13px, ink-faint

---

#### Section 3: The Problem (#why) — "Dead Water"

**Layout:** Asymmetric Split (Layout B), Bild LINKS
**Visuell:** Links ein Foto: Nahaufnahme einer RO-Wasserflasche neben einem TDS-Meter das "003 ppm" anzeigt, auf Holztisch. Rechts der Text-Block.

**Content rechts:**
```
[Eyebrow]  THE PROBLEM
[Gold-Line]
[Headline] Why does your water
           need minerals?
[Body]     2-3 kurze Absaetze ueber Dead Water
[Stat]     "85% of Thai water = dead water" in Playfair Italic 21px
```

---

#### Section 4: The Formula — "What's Inside"

**Layout:** Centered Editorial (Layout C) + Ingredient-Grid darunter
**Visuell:** Weisser Hintergrund (warm-off). Zentrierte Headline, darunter 4 Ingredient-Cards (Magnesium, Potassium, Sodium, Calcium) mit Icons und Mengenangaben.

**Content:**
```
[Eyebrow]  THE FORMULA
[Gold-Line]
[Headline] What's inside every serving
[Body]     "2 grams of pure minerals — 7x more magnesium than competitors"
[Grid]     4 Ingredient-Cards (Icon + Name + Amount + Benefit)
```

---

#### Section 5: Comparison — "The Difference"

**Layout:** Centered Editorial (Layout C) mit Comparison-Table darunter
**Visuell:** Minimale Tabelle, keine farbigen Hintergruende. Gold-Unterstrich unter Salt.Magic-Spalte. Check/X-Icons in mineral/faint.

---

#### Section 6: Products — "Choose Your Format"

**Layout:** Card Grid (Layout D), 2 Spalten
**Visuell:** 2 Produkt-Cards nebeneinander. Jar links, Sachets rechts. Cards ohne Border, mit subtle shadow. Produktfotos auf Mineral-Blue Hintergrund. "Best Value" Badge auf Jar in golden-hour Farbe.

**Content:**
```
[Eyebrow]  SHOP SALT.MAGIC
[Gold-Line]
[Headline] Two formats, same formula
[Grid]     Jar Card | Sachet Card
[CTA]      [Shop Now] zentriert unter Grid
```

---

#### Section 7: Benefits — "Daily Transformation"

**Layout:** Icon Grid (Layout D angepasst), 2x4 oder 4x2
**Visuell:** bg-warm-off Hintergrund. 8 Benefits als Icon + Label, KEINE Cards. Minimalistisch, viel Luft. Icons in gold, Labels in ink.

---

#### Section 8: Image Break — "Lifestyle Moment"

**Layout:** Full-Bleed Image (Layout A, aber ohne Text)
**Visuell:** Full-width Lifestyle-Foto: Salt.Magic Jar neben einer Wasserflasche auf einem Yoga-Mat am Pool (Alo-Vibe). Aspect-Ratio 21:9 (Cinemascope). Kein Overlay, kein Text. Reiner visueller Atem-Moment.

**Hoehe:** 50vh auf Desktop, 35vh auf Mobile

---

#### Section 9: Testimonials — "Real Voices"

**Layout:** Centered Editorial, Single Quote
**Visuell:** bg-warm-off. Grosses Anfuehrungszeichen (120px, gold, 15% opacity). Darunter ein einzelnes Quote in Playfair Italic 28px. Author-Info. 3 Gold-Navigations-Striche.

---

#### Section 10: Social Proof Numbers

**Layout:** Full-Width Color Band (Layout E), Mineral Blue Hintergrund
**Visuell:** 4 Stat-Zahlen horizontal: "90% Retention | 150+ Locations | 5 Years | 365 Days". Zahlen in Playfair 48px Weiss, Labels in Inter 11px Uppercase, golden-hour Farbe.

---

#### Section 11: For Everyone — "Beyond Athletes"

**Layout:** Asymmetric Split (Layout B, REVERSED — Text links, Bild rechts)
**Visuell:** Links der Text mit Wellness-vs-Fitness Vergleich. Rechts ein Lifestyle-Foto: Familie am Fruehstueckstisch, jeder hat ein Glas Wasser (generisch, warm, einladend).

---

#### Section 12: Story — "Our Origin"

**Layout:** Centered Editorial (Layout C)
**Visuell:** Weisser Hintergrund. Zentrierter Text, max-w-[640px]. "Read the full story" als Tertiaer-Link (Underline). Darunter ein Image-Break (Taylor-Story Foto, padded, rounded-2xl).

---

#### Section 13: FAQ

**Layout:** Centered Editorial mit Accordion darunter
**Visuell:** bg-warm-off. Minimale Lines zwischen Fragen. Keine Card-Umrandung. Cleaner als aktuell.

---

#### Section 14: Blog Teaser

**Layout:** Card Grid (Layout D), 2-3 Spalten
**Visuell:** Blog-Cards mit Gradient-Placeholder (da keine echten Bilder), Titel, Datum, Kategorie-Tag. "Read All Articles" Link zentriert darunter.

---

#### Section 15: Partner Teaser

**Layout:** Full-Width Color Band (Layout E, Mineral Blue)
**Visuell:** Kompakter Mineral-Blue Streifen mit "Become a Distribution Partner" Headline + CTA-Link zu /partner. Keine Details, nur der Hook.

---

#### Section 16: CTA Banner — "Final Push"

**Layout:** Immersive Dark (gradient-cta)
**Visuell:** Volle Breite, tiefes Navy mit Gradient. Dezentes botanisches Pattern im Hintergrund (3% opacity). Grosse Headline, 1 Satz Body, prominenter weisser Pill-Button.

---

#### Section 17: Newsletter

**Layout:** Centered, bg-warm-off
**Visuell:** Minimalistisch. Headline + 1 Zeile Body + Email-Input mit Subscribe-Button.

---

#### Section 18: Footer

**Layout:** Multi-Column auf deep-navy
**Visuell:** Wie aktuell, aber mit goldenem Strich oben als Trennung zur Newsletter-Section.

---

### 3.7 Fotografische Richtlinien (fuer AI-Generierung / Shoots)

Basierend auf den Mood-Board-Bildern, hier die konkreten Foto-Briefs:

#### Foto-Typ 1: "Product on Nature" (PANPURI-Stil)
- Salt.Magic Jar auf nassem Naturstein, Meer unscharf im Hintergrund
- Golden Hour Licht von links/hinten
- Shallow DOF (f/1.8-2.8)
- Color-Grading: Leicht entsaettigt, warmer Weissabgleich (+500K)
- Aspect: 4:5 (Portrait) oder 3:2 (Landschaft)

#### Foto-Typ 2: "Lifestyle Moment" (Alo-Stil)
- Person am Pool/Yoga-Mat/Fruehstueckstisch mit Salt.Magic sichtbar
- Helles natuerliches Tageslicht
- Nicht gestelltes Feeling — "caught in the moment"
- Warme Neutraltoene in Kleidung (Beige, Weiss, Navy)
- Aspect: 16:9 oder 21:9 (Wide)

#### Foto-Typ 3: "Ritual Close-Up" (MarocMaroc-Stil)
- Haende die Salt.Magic ins Wasser ruehren, Macro auf die sich aufloesenden Kristalle
- Warmes Seitenlicht, Kerzenlicht-Feeling
- Erdige Umgebung: Holztisch, Leinen-Tuch, Keramik-Schale
- Color-Grading: Amber-Toene verstaerkt, Schatten warm
- Aspect: 1:1 oder 4:5

#### Foto-Typ 4: "Botanical Detail" (Heritage-Stil)
- Salt.Magic Sachets neben echten Kraueter-Zutaten (Meersalz-Kristalle, Magnesium-Flocken)
- Flat-Lay auf Naturleinen
- Weiches, diffuses Oberlicht
- Fast monochrom, sehr dezent
- Aspect: 1:1

---

### 3.8 Section-Uebergaenge

Statt harter Farbwechsel zwischen Sections:

1. **Weiss zu Warm-Off:** Gradient-Fade ueber die letzten 80px der weissen Section (linear-gradient transparent -> #F9F7F4)
2. **Warm-Off zu Weiss:** Umgekehrter Gradient in den ersten 80px
3. **Weiss/Warm-Off zu Dark (Mineral Blue):** Kein Gradient — harter Schnitt erzeugt dramatischen Kontrast. Aber: 8px botanical Divider-SVG als Trennung (gold, 3% opacity).
4. **Dark zu Weiss:** Harter Schnitt mit gold-line (1px) am oberen Rand der neuen Section.

---

### 3.9 Responsive Verhalten

| Breakpoint | Layout-Aenderung |
|---|---|
| **<640px (Mobile)** | Alle Grids auf 1 Spalte. Hero-Text zentriert. Padding 24px horizontal. Headlines max 44px. Split-Sections stacken (Bild oben). |
| **640-1024px (Tablet)** | 2-Spalten Grids. Hero-Text links. Padding 40px horizontal. Headlines bis 48px. |
| **1024-1440px (Desktop)** | Volle Layouts. 3-4 Spalten Grids. Max-w-1400px Container. Headlines bis 72px. |
| **>1440px (Wide)** | Container zentriert mit extra Whitespace links/rechts. Bilder koennen Container ausbrechen (negative margins). |

---

## Teil 4: Priorisierte Empfehlungen

Was die **groessten visuellen Gewinne** bringt, sortiert nach Impact:

### Prio 1 — Sofort umsetzbar (kein neues Foto-Material noetig)
1. **Headlines auf Regular (400) statt Bold (700)** — 1 CSS-Aenderung, sofortiger Premium-Lift
2. **Display H1 auf 72px** — groessere Headlines = editorialer Charakter
3. **CTA-Buttons auf 11px Uppercase** statt 16px — sofort edler
4. **Body-Text auf Inter Light (300) fuer grosse Absaetze** — luftiger, moderner
5. **Section-Padding erhoehen auf 160px Desktop** — mehr Luft = mehr Luxus

### Prio 2 — Strukturelle Upgrades
6. **Asymmetric Split-Sections (60/40)** statt zentriertem Text ueberall — bricht Monotonie
7. **Testimonials als einzelnes grosses Quote** statt Card-Karussell
8. **FAQ ohne Card-Hintergrund** — nur Lines, minimaler
9. **Section-Gradient-Fades** statt harter Background-Wechsel

### Prio 3 — Braucht Foto-Material (AI oder Shoot)
10. **Hero: Echtes Lifestyle-Foto** statt dem aktuellen Bild — der groesste Single Impact
11. **Image-Breaks zwischen Sections** — Lifestyle-Momente als visuelle Atempausen
12. **Produkt-Fotos auf Natur** (PANPURI-Stil) statt auf blauem Studio-BG

### Prio 4 — Polish
13. **Botanische SVG-Illustrationen** als Section-Divider (wie im Gemini-Bild)
14. **Dark CTA-Banner mit botanischem Pattern**
15. **Scroll-Animationen verfeinern** (cubic-bezier statt ease-out)

---

_Erstellt: 2026-03-27_
_Basis: Live-Analyse Grown Alchemist (WebFetch) + PANPURI/Sakara/Cure (bestehende Analyse + Brand-Wissen) + 10 Mood-Board-Bilder (visuell analysiert) + aktueller Codestand V7_

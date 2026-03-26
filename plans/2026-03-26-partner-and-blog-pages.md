# Plan: Eigene Partner-Seite und Blog-Seite erstellen

**Erstellt:** 2026-03-26
**Status:** Implementiert
**Anforderung:** Dedizierte `/partner`-Seite mit allen B2B-Informationen aus dem PDF, eine `/blog`-Seite im Luxo-Template-Stil, und eine Blog-Teaser-Section auf der Homepage

---

## Ueberblick

### Was dieser Plan erreicht

Drei Hauptaenderungen: (1) `/partner` als vollstaendige B2B-Landingpage mit Marktdaten, Revenue-Modell, Distribution Tiers und Kontaktformular, (2) `/blog` als Content-Hub im Luxo-Stil mit Listing und dynamischer Artikel-Route, (3) Blog-Teaser-Section auf der Homepage (4-Spalten Luxo-Grid). Zusaetzlich wird das Cream/Beige-Farbschema entfernt — alle Hintergruende werden auf Warm-White (#F8F5F0) oder heller umgestellt.

### Warum das wichtig ist

Die Homepage traegt zu viel B2B-Last fuer D2C-Besucher. Eine eigene Partner-Seite erlaubt alle PDF-Inhalte ungekuerzt darzustellen. Die Blog-Seite ist essenziell fuer GEO/SEO und positioniert Salt.Magic als Wissensquelle. Der Hintergrund-Wechsel von Beige zu Weiss gibt der Seite ein frischeres, moderneres Erscheinungsbild.

---

## Aktueller Zustand

### Relevante bestehende Struktur

- `site/app/layout.tsx` — Root-Layout mit Nav, Footer, AnnouncementBar
- `site/app/page.tsx` — Einzige Route, Homepage mit 20+ Sections
- `site/components/Nav.tsx` — 4 Links (Why, Products, Story, Partner als Anchor)
- `site/components/Partner.tsx` — B2B-Section auf Homepage: 4 Metrics + Kontaktformular
- `site/components/Footer.tsx` — Navigate-Links zeigen nur auf Anchor-Sections
- `site/app/globals.css` — `.section-fade-to-cream`, `.section-fade-from-cream`, `.texture-linen` nutzen `#F2EDE6`
- `site/tailwind.config.ts` — `cream: '#F2EDE6'` definiert
- `outputs/sitemap-v1.md` — Definiert `/blog` und `/blog/:slug` Routen
- Keine weiteren Routen im `app/`-Verzeichnis

### Luecken die adressiert werden

1. **Kein Multi-Page-Routing** — Alles lebt auf `/`
2. **B2B-Inhalte eingeschraenkt** — Revenue Model, Distribution Tiers, Standorte fehlen auf der Website
3. **Kein Blog** — Kein Content-Marketing, kein GEO-Fundament
4. **Cream/Beige-Hintergrund unerwuenscht** — User moechte weisseren, frischeren Look
5. **Keine Blog-Section auf Homepage** — Kein Teaser fuer Blog-Inhalte

---

## Vorgeschlagene Aenderungen

### Zusammenfassung der Aenderungen

1. **Farbschema: Cream entfernen** — `bg-cream` Sections auf `bg-warm-white` umstellen, Fade-Gradients und Leinentextur entfernen oder auf subtilere Variante umstellen
2. **Neue Route `/partner`** — B2B-Landingpage mit Hero, Market Opportunity, Distribution Tiers, Revenue Model, Standorte, Comparison, Kontaktformular
3. **Neue Route `/blog`** — Blog-Listing im Luxo-Stil (4-Spalten-Grid, runde Bilder, Serif-Titel)
4. **Neue Route `/blog/[slug]`** — Artikel-Seite im Luxo-Stil (Full-Width Hero mit Overlay, zentrierter Titel, schmale Content-Spalte, Blockquotes)
5. **Neue Homepage-Section: Blog-Teaser** — 4-Spalten Luxo-Grid mit neuesten Artikeln
6. **Homepage Partner-Section umbauen** — Teaser mit CTA-Link zu `/partner`
7. **Nav + Footer aktualisieren** — Blog- und Partner-Links

### Neue Dateien erstellen

| Dateipfad | Zweck |
|---|---|
| `site/app/partner/page.tsx` | Vollstaendige B2B Partner-Landingpage |
| `site/app/blog/page.tsx` | Blog-Listing im Luxo-Stil |
| `site/app/blog/[slug]/page.tsx` | Dynamische Blog-Artikel-Seite im Luxo-Stil |
| `site/components/PartnerHero.tsx` | Hero-Section fuer Partner-Seite |
| `site/components/DistributionTiers.tsx` | 3-Tier Distribution Model aus PDF S.9 |
| `site/components/RevenueModel.tsx` | Revenue/Margin-Uebersicht aus PDF S.10 |
| `site/components/LocationMap.tsx` | Standort-Uebersicht aus PDF S.6 |
| `site/components/PartnerForm.tsx` | Extrahiertes Kontaktformular (wiederverwendbar) |
| `site/components/BlogCard.tsx` | Luxo-Stil Blog-Karte (rundes Bild, Overlay-Datum, Serif-Titel) |
| `site/components/BlogSection.tsx` | Homepage Blog-Teaser (4-Spalten Luxo-Grid) |
| `site/content/blog/dead-water-crisis.ts` | Erster Artikel |
| `site/content/blog/wellness-vs-sports-electrolytes.ts` | Zweiter Artikel |
| `site/content/blog/index.ts` | Blog-Daten Export |

### Zu aendernde Dateien

| Dateipfad | Aenderungen |
|---|---|
| `site/app/globals.css` | Cream-Fades und Leinentextur anpassen/entfernen |
| `site/app/page.tsx` | Cream-Sections entfernen, Blog-Teaser + Partner-Teaser einbauen |
| `site/components/Nav.tsx` | Blog + Partner Links, Unterseiten-Scroll-State |
| `site/components/Footer.tsx` | Blog- und Partner-Links |
| `site/components/Partner.tsx` | Zu kompaktem Teaser umbauen |
| `CLAUDE.md` | Neue Routen und Farbschema dokumentieren |

---

## Design-Entscheidungen

### Getroffene Schluesselentscheidungen

1. **Cream komplett raus, Warm-White als einziger Hintergrund**: Sections die bisher `bg-cream` hatten (Ingredients, Testimonials, MarketStats) bekommen `bg-warm-white` oder einen minimal dunkleren Ton (`#F5F2ED` oder aehnlich) als subtile Abgrenzung — aber kein sichtbares Beige mehr. Die `.texture-linen` und `.section-fade-to/from-cream` CSS-Klassen werden entfernt oder auf den neuen Ton angepasst.

2. **Blog im Luxo-Template-Stil** (basierend auf User-Screenshots):
   - **BlogCard**: Grosses Bild mit stark abgerundeten Ecken (rounded-[24px]), Datum + Pfeil-Icon als Overlay unten im Bild, Titel in Playfair Display (Serif), Excerpt in Inter (light), "Read more" Link
   - **Blog-Listing**: Editorial Headline oben ("Enhance your overall *well-being*" Stil), 4-Spalten-Grid (1 mobile, 2 tablet, 4 desktop)
   - **Blog-Artikel**: Full-Width Hero-Bild mit dunklem Overlay, Kategorie-Pill + Datum zentriert ueber H1, grosser Playfair-Titel zentriert im Hero, Content in max-w-[680px], Serif-Subheadings (H2), Blockquotes mit grossem Anfuehrungszeichen-Icon
   - **Platzhalter-Bilder**: Gradient-Platzhalter mit Mineral-Blue/Gold-Toenen und abgerundeten Ecken (werden spaeter durch echte Fotos ersetzt)

3. **Blog-Section auf Homepage**: Gleicher Luxo-Stil wie `/blog`, aber als eigenstaendige Section zwischen Testimonials und Story. Headline + 4-Spalten-Grid + "View all articles" CTA-Link.

4. **Blog-Daten als statische TypeScript-Dateien**: Kein CMS, kein MDX. Einfache TS-Objekte. Spaeter migrierbar.

5. **Nav scrolled-State auf Unterseiten immer aktiv**: `/partner` und `/blog/*` haben keinen Full-Screen-Hero, daher Nav sofort im scrolled State.

6. **Partner-Seite mit eigenem dunklen Hero**: Mineral-Blue Hero mit grossen Zahlen, dann helle Sections darunter.

### Offene Fragen

- Keine — Blog-Vorlage und Farbwunsch geklaert durch User-Screenshots und Feedback.

---

## Schritt-fuer-Schritt-Aufgaben

### Schritt 1: Cream/Beige-Farbschema entfernen

Das gesamte Beige-Farbschema durch Warm-White ersetzen.

**Aenderungen in `globals.css`:**
- `.section-fade-to-cream`: Gradient von `#F8F5F0` zu `#F8F5F0` (oder entfernen, da kein Farbwechsel mehr)
- `.section-fade-from-cream`: Gleich — entfernen oder auf identische Farbe setzen
- `.texture-linen`: Opacity auf 0 setzen oder entfernen (Leinentextur war auf Cream-BG; auf weissem BG wirkt sie anders)

**Aenderungen in `page.tsx`:**
- Alle `bg-cream` Sections (Ingredients, Testimonials, MarketStats) auf `bg-warm-white` aendern
- Die `.section-fade-to-cream` / `.section-fade-from-cream` Wrapper-Divs entfernen
- `.texture-linen` Klasse von Sections entfernen

**Aenderungen in `tailwind.config.ts`:**
- `cream` Farbe kann bleiben (nicht breaking), wird aber nicht mehr genutzt
- Optional: `cream` auf `#F5F2ED` aendern als sehr subtile Section-Trennung (kaum sichtbar, aber strukturgebend)

**Aktionen:**
- `globals.css` anpassen (Fades und Textur)
- `page.tsx` alle Cream-Referenzen entfernen
- Pruefen ob andere Components `bg-cream` nutzen (Partner.tsx Form-Panel)

**Betroffene Dateien:**
- `site/app/globals.css`
- `site/app/page.tsx`
- `site/components/Partner.tsx` (Form-Panel nutzt `bg-cream`)

---

### Schritt 2: Blog-Content-Struktur erstellen

Blog-Artikel als statische TypeScript-Dateien.

**Daten-Struktur:**
```typescript
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: 'Hydration Science' | 'Lifestyle' | 'Product'
  date: string // "March 26, 2026" Format fuer Anzeige
  readTime: string // "5 min read"
  heroGradient: string // Tailwind gradient classes als Platzhalter
  content: string // HTML content
}
```

**Artikel 1: "Why 85% of Thai Water is Dead Water"**
- Slug: `dead-water-crisis`
- Kategorie: Hydration Science
- ~800 Woerter, 4 min read
- Inhalt: RO-Filterung erklaert, fehlende Mineralien, Magnesium-Mangel, was man tun kann
- Hero-Gradient: `from-mineral/80 via-mineral-light/60 to-gold/30` (blau-gold)

**Artikel 2: "Wellness vs Sports Electrolytes: Why Daily Minerals Matter More"**
- Slug: `wellness-vs-sports-electrolytes`
- Kategorie: Lifestyle
- ~600 Woerter, 3 min read
- Inhalt: 365 vs 3-5x/Woche, Sugar-Free-Argument, fuer wen Wellness-Elektrolyte sind
- Hero-Gradient: `from-gold/60 via-sand/40 to-warm-white` (warm-gold)

**Aktionen:**
- Verzeichnis `site/content/blog/` erstellen
- `dead-water-crisis.ts` schreiben
- `wellness-vs-sports-electrolytes.ts` schreiben
- `index.ts` als zentraler Export

**Betroffene Dateien:**
- `site/content/blog/dead-water-crisis.ts` (neu)
- `site/content/blog/wellness-vs-sports-electrolytes.ts` (neu)
- `site/content/blog/index.ts` (neu)

---

### Schritt 3: BlogCard Component erstellen (Luxo-Stil)

Wiederverwendbare Blog-Karte im Luxo-Template-Design.

**Design (aus Screenshot):**
- **Bild-Container**: Aspect-Ratio ~4:5 (hochformat), `rounded-[24px]` (stark abgerundet wie Luxo), overflow-hidden
- **Platzhalter-Bild**: Gradient-Hintergrund statt echtem Bild, gleiche Rundung
- **Bild-Overlay unten**: Halbtransparenter dunkler Gradient am unteren Rand mit:
  - Links: Datum (z.B. "Mar 26, 2026") in weiss, klein
  - Rechts: Pfeil-Icon (→) in weiss, als Link-Indikator
- **Titel**: Unter dem Bild, `font-display` (Playfair), ~17-20px, `text-mineral`, 2-3 Zeilen max
- **Excerpt**: Darunter, `font-body` (Inter), light, `text-ink-light`, 2-3 Zeilen
- **"Read more"**: Link in `text-mineral`, klein, mit hover:text-gold
- **Hover-Effekt**: Bild leicht skaliert (scale-[1.03]), Schatten-Lift auf der ganzen Karte
- **Gesamte Karte als Link**: `<Link href="/blog/[slug]">` wrapping

**Aktionen:**
- `site/components/BlogCard.tsx` erstellen
- Props: `post: BlogPost`
- StaggerItem Animation
- Responsive-ready (wird im Grid platziert)

**Betroffene Dateien:**
- `site/components/BlogCard.tsx` (neu)

---

### Schritt 4: BlogSection Component erstellen (Homepage-Teaser)

Blog-Teaser-Section fuer die Homepage im Luxo-Stil.

**Design (aus Screenshot):**
- **Headline**: Editorial-Stil, zentriert, Playfair Display
  - z.B. "Science-backed insights for *better hydration*"
  - `<em>` fuer kursiven Teil
- **Grid**: 4 Spalten Desktop (`grid-cols-4`), 2 Tablet, 1 Mobile
- **BlogCards**: Die neuesten 4 Artikel (oder alle, wenn < 4)
- **CTA unten**: "View all articles →" Link zu `/blog`, zentriert, `text-mineral`
- **Abstand**: Gleicher Section-Spacing wie andere Sections

**Aktionen:**
- `site/components/BlogSection.tsx` erstellen
- Importiert `BlogCard` und `blogPosts` aus `content/blog`
- StaggerContainer fuer animiertes Grid

**Betroffene Dateien:**
- `site/components/BlogSection.tsx` (neu)

---

### Schritt 5: Blog-Listing-Seite erstellen (`/blog`)

Eigenstaendige Blog-Seite mit gleichem Luxo-Stil.

**Design:**
- **Header-Area**: Grosse Editorial-Headline (wie Luxo), zentriert
  - Eyebrow: "Salt.Magic Blog" in Gold, uppercase
  - Headline: "Enhance your overall *well-being*" oder "Hydration science & *daily wellness*"
- **Kein Kategorie-Filter** (bei 2 Artikeln unnoetig, spaeter hinzufuegbar)
- **Grid**: Gleicher 4-Spalten Luxo-Stil wie Homepage-Section
- **Newsletter-CTA am Ende**: Optional, kann spaeter ergaenzt werden

**Metadata:**
```typescript
export const metadata = {
  title: 'Hydration Science & Wellness — Salt.Magic Blog',
  description: 'Science-backed insights on hydration, minerals, and daily wellness from Salt.Magic Thailand.',
}
```

**Aktionen:**
- `site/app/blog/page.tsx` erstellen
- Kein Client-Component noetig (kein Filter-State)
- Gleiche BlogCard-Darstellung wie Homepage
- Spacing: `pt-[clamp(140px,18vw,200px)]` oben (Platz fuer fixed Nav)

**Betroffene Dateien:**
- `site/app/blog/page.tsx` (neu)

---

### Schritt 6: Blog-Artikel-Seite erstellen (`/blog/[slug]`) — Luxo-Stil

Einzelartikel-Seite basierend auf dem Luxo-Artikel-Screenshot.

**Design (aus Screenshot):**

**Hero-Bereich (Full-Width):**
- Volle Viewport-Breite, ~50vh Hoehe
- Platzhalter: Gradient-Hintergrund (aus BlogPost.heroGradient)
- Dunkles Overlay (linear-gradient von oben transparent zu unten dunkel)
- Zentriert im Overlay:
  - Kategorie-Pill: Weisser Hintergrund, dunkler Text, klein, rounded-full (z.B. "Wellness")
  - Datum daneben: weiss, klein (z.B. "May 18, 2022")
  - Titel (H1): Playfair Display, gross (`clamp(32px,5vw,56px)`), weiss, zentriert, max-w-[800px]

**Content-Bereich:**
- `max-w-[680px]` zentriert (wie TextBlock-Pattern)
- Spacing oben: `pt-[clamp(60px,8vw,100px)]`
- **Intro-Paragraph**: Etwas groesser als Body (text-lg), normal weight
- **Body-Text**: `text-[16px]` Inter, `font-light`, `leading-relaxed`, `text-ink-light`
- **H2 Subheadings**: Playfair Display, `text-[clamp(24px,3vw,32px)]`, `text-mineral`
- **Blockquotes**: Grosses dekoratives Anfuehrungszeichen-Icon (SVG, gold/faint) ueber dem Zitat-Text, Zitat in Playfair italic, zentriert
- **Paragraph-Spacing**: `[&>p+p]:mt-6`, `[&>h2]:mt-12 [&>h2]:mb-5`

**Bottom-Bereich:**
- Horizontale Linie
- "Related Articles" Grid (andere Artikel als BlogCards, 2-3 Spalten)
- Zurueck-Link: "← Back to Blog"

**Metadata (dynamisch):**
```typescript
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  return {
    title: `${post.title} — Salt.Magic`,
    description: post.excerpt,
  }
}
```

**Aktionen:**
- `site/app/blog/[slug]/page.tsx` erstellen
- `generateStaticParams()` fuer statische Generierung
- `generateMetadata()` fuer dynamische SEO
- Content via `dangerouslySetInnerHTML` (sicher: eigener statischer Content)
- Related Articles am Ende (andere Posts ausser dem aktuellen)

**Betroffene Dateien:**
- `site/app/blog/[slug]/page.tsx` (neu)

---

### Schritt 7: Partner-Seite spezifische Components erstellen

Drei neue Components fuer Partner-only Inhalte.

**7a: PartnerHero.tsx**
- Mineral-Blue Hintergrund, `py-[clamp(120px,16vw,200px)]`
- Eyebrow: "Distribution Partnership" in Gold
- Headline: "Grow with *Salt.Magic*" in Playfair, weiss
- Subheadline: Markt-Opportunity Text, `text-white/60`
- CTA-Buttons: "Contact Us" (weiss, rounded-pill, scrollt zu Formular) + "Download Deck" (outline, Platzhalter)

**7b: DistributionTiers.tsx**
- 3-Spalten-Grid
- Tier 1: National Distributors — 30-40% margin, national scale, Beispiel: DKSH, Central Group
- Tier 2: Regional Chains — 50-store pilots, Beispiel: Boots, Lab Pharmacy
- Tier 3: Boutique/Clinics — Immediate POs, Beispiel: Organic Village
- Jede Karte: Border, Tier-Label oben (Gold), Name, Beschreibung, Margin-Range, Min Order
- Warm-White Hintergrund

**7c: RevenueModel.tsx**
- Grid oder Tabelle mit Pricing
- Glass Jar: MSRP 490 THB, Wholesale ~294-343 THB, Margin 30-40%
- Paper Sachet: MSRP 290 THB, Wholesale ~174-203 THB, Margin 30-40%
- Single Sachet: MSRP 9-12 THB, Wholesale ~5-8 THB, Margin 30-40%
- LTV Statement: "3,600-4,800 THB per customer lifetime value"
- Clean Table-Layout, alternating subtle BG

**Aktionen:**
- `site/components/PartnerHero.tsx` erstellen
- `site/components/DistributionTiers.tsx` erstellen
- `site/components/RevenueModel.tsx` erstellen

**Betroffene Dateien:**
- `site/components/PartnerHero.tsx` (neu)
- `site/components/DistributionTiers.tsx` (neu)
- `site/components/RevenueModel.tsx` (neu)

---

### Schritt 8: PartnerForm + LocationMap Components erstellen

**8a: PartnerForm.tsx**
Kontaktformular aus Partner.tsx extrahieren und als eigenstaendige Component.
- Gleiche Felder: Name, Company, Role, Email, Message
- Gleiche Styling (aber auf Warm-White BG statt Cream)
- Submit-Logik beibehalten
- Wird auf der `/partner` Seite am Ende eingebunden

**8b: LocationMap.tsx**
- Eyebrow: "Our Network"
- Headline: "150+ wellness locations across Thailand"
- Grid mit Staedten: Bangkok, Phuket, Koh Samui, Chiang Mai, Hua Hin, Pattaya, Krabi, Koh Phangan, Pai, Koh Tao
- Jede Stadt als kleines Badge/Pill oder als Grid-Item mit Icon
- Warm-White Hintergrund

**Aktionen:**
- `site/components/PartnerForm.tsx` aus Partner.tsx Form-Teil extrahieren
- `site/components/LocationMap.tsx` erstellen

**Betroffene Dateien:**
- `site/components/PartnerForm.tsx` (neu)
- `site/components/LocationMap.tsx` (neu)

---

### Schritt 9: Partner-Seite zusammenbauen (`/partner`)

**Section-Reihenfolge:**
1. PartnerHero (Mineral-Blue, grosses Statement)
2. MarketStats (wiederverwendet — aber auf Warm-White BG statt Cream)
3. TextBlock: "Why Salt.Magic" Kurzversion
4. Comparison (wiederverwendet)
5. DistributionTiers (NEU)
6. RevenueModel (NEU)
7. SocialProof (wiederverwendet)
8. LocationMap (NEU)
9. PartnerForm (extrahiert)

**Metadata:**
```typescript
export const metadata = {
  title: 'Partner With Us — Salt.Magic Distribution',
  description: 'Join Thailand\'s fastest-growing electrolyte brand. 35-40% margins, 90% customer retention, 150+ locations.',
}
```

**Aktionen:**
- `site/app/partner/page.tsx` erstellen
- Components importieren und anordnen
- Spacer-Divs und Dividers zwischen Sections

**Betroffene Dateien:**
- `site/app/partner/page.tsx` (neu)

---

### Schritt 10: Nav aktualisieren

Navigation fuer Multi-Page-Routing.

**Aenderungen:**
- "Partner" Link: von `#partner` zu `/partner`
- Neuer "Blog" Link: `/blog`
- Aktive-Route-Erkennung: `usePathname()` aus `next/navigation`
- Auf Unterseiten (`/partner`, `/blog/*`): Nav startet im "scrolled" State (weisser BG, dunkler Text)
- Anchor-Links (#why, #products, #story): auf Unterseiten als `/#why` prefixen

**Neue Link-Reihenfolge:**
- Links: Why (`/#why`), Products (`/#products`)
- Rechts: Story (`/#story`), Blog (`/blog`), Partner (`/partner`)

**Aktionen:**
- `usePathname()` importieren
- Links-Array aktualisieren
- `isHome = pathname === '/'` — auf Nicht-Home `scrolled` immer `true`
- Anchor-Links: `isHome ? '#why' : '/#why'`

**Betroffene Dateien:**
- `site/components/Nav.tsx`

---

### Schritt 11: Homepage aktualisieren

Partner-Section zum Teaser umbauen und Blog-Teaser einbinden.

**Partner.tsx Umbau:**
- Vorher: 2-Spalten (Info + Formular), `min-h-[80vh]`
- Nachher: Kompakter, einspaltiger Teaser im Mineral-Blue
- Kein Formular (lebt auf `/partner`)
- 2-3 Key-Metrics inline
- CTA-Button: "Explore Partnership →" als Link zu `/partner`
- `bg-warm-white` fuer Form-Panel (statt `bg-cream`)

**Blog-Teaser in page.tsx:**
- Neue `<BlogSection />` zwischen Testimonials und Story einfuegen
- Oder zwischen Story und Team — nach dem erzaehlerischen Teil, vor dem Business-Teil

**Neue Section-Reihenfolge (relevanter Ausschnitt):**
```
... Testimonials ...
Divider (sm)
BlogSection (NEU — 4-Spalten Luxo-Grid)
Story (#story)
ImageBreak (Taylor)
...
```

**Aktionen:**
- `Partner.tsx` ueberarbeiten (Formular raus, Teaser rein)
- `page.tsx`: BlogSection importieren und platzieren
- `page.tsx`: Cream-Referenzen entfernen (bereits in Schritt 1)

**Betroffene Dateien:**
- `site/components/Partner.tsx`
- `site/app/page.tsx`

---

### Schritt 12: Footer aktualisieren

**Aenderungen:**
- Navigate-Spalte: "Blog" Link hinzufuegen (`/blog`)
- Navigate-Spalte: "Partner With Us" von `#partner` zu `/partner`
- Anchor-Links als `/#why` etc. (funktioniert von allen Seiten)

**Aktionen:**
- Footer.tsx Navigate-Links aktualisieren

**Betroffene Dateien:**
- `site/components/Footer.tsx`

---

### Schritt 13: Build validieren und CLAUDE.md aktualisieren

**Aktionen:**
- `npm run build` ausfuehren
- Alle Routen pruefen: `/`, `/partner`, `/blog`, `/blog/dead-water-crisis`, `/blog/wellness-vs-sports-electrolytes`
- Kein Cream/Beige mehr sichtbar auf der Homepage
- Nav-Links funktionieren zwischen Seiten
- CLAUDE.md aktualisieren

**Betroffene Dateien:**
- `CLAUDE.md`

---

## Verbindungen & Abhaengigkeiten

### Dateien die diesen Bereich referenzieren

- `site/app/layout.tsx` — Root-Layout, rendert Nav/Footer auf allen Seiten
- `site/components/Nav.tsx` — Muss alle Routen kennen
- `site/components/Footer.tsx` — Muss alle Seiten-Links haben
- `site/app/page.tsx` — Importiert Partner.tsx, BlogSection.tsx
- `outputs/sitemap-v1.md` — Definiert die geplante Seitenstruktur

### Noetige Updates fuer Konsistenz

- `CLAUDE.md` — Neue Routen, Components, Farbschema-Aenderung dokumentieren
- Nav und Footer muessen auf allen Seiten korrekt funktionieren
- Anchor-Links von Unterseiten muessen zurueck zur Homepage navigieren
- Kein `bg-cream` mehr in aktiv genutzten Sections

### Auswirkungen auf bestehende Workflows

- Cream-Hintergrund verschwindet — visueller Unterschied auf Homepage
- Partner.tsx wird kompakter — weniger Hoehe auf Homepage
- Nav bekommt 2 neue Eintraege — Mobile-Menue wird laenger
- Build generiert 5+ statt 1 statische Seiten
- Keine Breaking Changes fuer bestehende Components (Comparison, MarketStats etc. werden wiederverwendet)

---

## Validierungs-Checkliste

- [ ] `npm run build` erfolgreich mit allen neuen Routen
- [ ] Kein `bg-cream` oder sichtbares Beige mehr auf der Homepage
- [ ] `/partner` rendert alle Sections (Hero, MarketStats, Comparison, Tiers, Revenue, SocialProof, Locations, Formular)
- [ ] `/blog` Listing zeigt Artikel im Luxo-4-Spalten-Grid
- [ ] `/blog/dead-water-crisis` rendert mit Full-Width Hero, zentriertem Titel, Content-Spalte
- [ ] `/blog/wellness-vs-sports-electrolytes` rendert vollstaendig
- [ ] Blog-Karten haben stark abgerundete Bilder mit Datum-Overlay
- [ ] Blog-Artikel haben Blockquotes mit Anfuehrungszeichen-Icon
- [ ] Homepage Blog-Teaser-Section zeigt 4 (oder 2) Artikel
- [ ] Nav zeigt "Blog" und "Partner" als eigene Links
- [ ] Nav auf Unterseiten hat weissen Hintergrund sofort
- [ ] Anchor-Links von Unterseiten fuehren zurueck zur Homepage
- [ ] Footer hat Blog- und Partner-Links
- [ ] Homepage Partner-Section ist Teaser mit Link zu `/partner`
- [ ] Mobile-Ansicht aller neuen Seiten korrekt
- [ ] Alle Animationen funktionieren, reduced-motion respektiert
- [ ] CLAUDE.md aktualisiert

---

## Erfolgskriterien

1. Salt.Magic hat 3+ funktionierende Routen: `/`, `/partner`, `/blog`, `/blog/[slug]`
2. Alle B2B-Inhalte (Revenue Model, Distribution Tiers, Standorte) sind auf `/partner`
3. Blog hat 2 vollstaendige Artikel im Luxo-Stil mit Hero-Gradient-Platzhaltern
4. Homepage hat Blog-Teaser-Section im 4-Spalten Luxo-Grid
5. Kein Cream/Beige mehr als Hintergrundfarbe
6. Navigation und Footer verlinken konsistent zwischen allen Seiten
7. Build erfolgreich, keine Regressions

---

## Notizen

- Blog-Artikel sind vorerst statisch (TS-Dateien). Migration zu Framer CMS spaeter moeglich.
- Platzhalter-Gradients werden spaeter durch echte Fotos ersetzt.
- Partner-Seite kann spaeter um PDF-Download erweitert werden.
- Blog-Artikel-Bilder: Fuer die Luxo-Karten auf der Homepage brauchen wir spaeter 4:5 Hochformat-Bilder. Die Gradients simulieren das vorerst.
- Die Cream-Farbe bleibt in `tailwind.config.ts` definiert (kein Breaking Change), wird aber nicht mehr aktiv genutzt.
- Bei Wachstum auf 10+ Artikel: Pagination und Kategorie-Filter auf `/blog` ergaenzen.

---

## Implementierungsnotizen

**Implementiert:** 2026-03-26

### Zusammenfassung

Alle 13 Schritte des Plans vollstaendig umgesetzt. Die Site hat jetzt 4 funktionierende Routen (`/`, `/partner`, `/blog`, `/blog/[slug]`), das Cream/Beige-Farbschema wurde entfernt, und der Build ist erfolgreich mit 8 statischen Seiten.

### Abweichungen vom Plan

- Nav-Logo wurde von `<a>` zu `<Link>` geaendert fuer korrekte Client-Side-Navigation zwischen Seiten
- Right-Nav-Links verwenden `<Link>` fuer Route-Links und `<a>` fuer Anchor-Links, statt einheitlich `motion.a` — notwendig fuer Next.js Routing
- Mobile-Menu-Links nutzen eine `LinkOrAnchor` Helper-Komponente fuer die gleiche Unterscheidung

### Aufgetretene Probleme

Keine — Build erfolgreich beim ersten Versuch.

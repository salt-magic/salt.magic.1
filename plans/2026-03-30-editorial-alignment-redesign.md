# Plan: Editorial Alignment Redesign

**Erstellt:** 2026-03-30
**Status:** Implementiert
**Anforderung:** Visuellen Rhythmus durch Mix aus zentrierten und links-ausgerichteten Sections schaffen — weg von monotoner Zentrierung, inspiriert von Cure Hydration Editorial-Stil mit Luxury-Touch

---

## Überblick

### Was dieser Plan erreicht

Die gesamte Site — Homepage, Partner-Seite, Blog-Listing und Blog-Artikel — bekommt einen alternierenden Rhythmus aus zentrierten und links-ausgerichteten Sections. Statt durchgehender Zentrierung (aktuell ~85% aller Sections site-wide) entsteht ein Editorial-Flow, der moderner wirkt und Dynamik erzeugt — wie bei Cure Hydration, aber kombiniert mit unserem Elevated Natural Luxury Stil.

### Warum das wichtig ist

Alle vier Referenzseiten zeigen: Rein zentrierte Layouts wirken bei Functional-Wellness-Produkten statisch und altbacken. Cure Hydration (direkter Wettbewerber) nutzt konsequent links-ausgerichtete Editorial-Layouts mit alternierenden Split-Sections. Der Mix-Approach gibt uns visuellen Rhythmus ohne den Luxury-Charakter zu verlieren. Das muss konsistent über alle Seiten hinweg gelten — nicht nur auf der Homepage.

---

## Aktueller Zustand

### Relevante bestehende Struktur

| Component | Alignment | Layout-Typ |
|-----------|-----------|------------|
| `site/components/Hero.tsx` | Zentriert | Fullscreen Carousel |
| `site/components/TextBlock.tsx` | Zentriert (`text-center`, `mx-auto`) | Reusable Header-Block |
| `site/components/WhySection.tsx` | **Links** (Split 60/40) | Asymmetrisch ✓ |
| `site/components/Ingredients.tsx` | Innerhalb TextBlock = zentriert | Horizontal-Layout |
| `site/components/Comparison.tsx` | Zentriert Header + Cards | Glass Cards |
| `site/components/Benefits.tsx` | Zentriert (`text-center` auf allen Items) | 4-Spalten Grid |
| `site/components/ForEveryone.tsx` | **Links** (Reversed Split) | Asymmetrisch ✓ |
| `site/components/Products.tsx` | Zentriert (Cards `text-center`) | Grid |
| `site/components/Testimonials.tsx` | Zentriert (`text-center`, `mx-auto`) | Carousel |
| `site/components/SocialProof.tsx` | Zentriert (`text-center`) | Metrics Bar |
| `site/components/StorySection.tsx` | **Links** (Split) | Asymmetrisch ✓ |
| `site/components/Faq.tsx` | Zentriert Header, Links Body | Accordion |
| `site/components/BlogSection.tsx` | Zentriert (`text-center`) | Grid |
| `site/components/CtaBanner.tsx` | Zentriert (`text-center`, `mx-auto`) | Immersiv |
| `site/components/Newsletter.tsx` | Zentriert (`text-center`, `mx-auto`) | Form |

**Partner-Seite (`/partner`):**

| Component | Alignment | Layout-Typ |
|-----------|-----------|------------|
| `site/components/PartnerHero.tsx` | Zentriert (`text-center`, `mx-auto`) | Hero mit Metrics |
| `site/app/partner/page.tsx` inline header "The Opportunity" | Zentriert (`text-center`) | Inline Section-Header |
| `site/components/MarketStats.tsx` | Zentriert (`text-center`) | 3-Spalten Stats |
| `site/components/MarketComparison.tsx` | Zentriert Header (`text-center`) | 2-Spalten Cards |
| `site/components/CategoryProof.tsx` | Zentriert (`text-center`) | Dark Section + Grid |
| `site/components/RevenueComparison.tsx` | Zentriert Header (`text-center`) | 2-Spalten Cards |
| `site/components/DistributionTiers.tsx` | Zentriert Header (`text-center`) | 3-Spalten Tier-Cards |
| `site/components/RevenueModel.tsx` | Zentriert Header (`text-center`) | Table/Cards |
| `site/components/LocationMap.tsx` | Zentriert (`text-center`) | Tag-Cloud |
| `site/components/PartnerForm.tsx` | Zentriert Header (`text-center`) | Form |

**Blog-Seite (`/blog`):**

| Component | Alignment | Layout-Typ |
|-----------|-----------|------------|
| `site/app/blog/page.tsx` header | Zentriert (`text-center`, `mx-auto`) | Page Header |

**Blog-Artikel (`/blog/[slug]`):**

| Component | Alignment | Layout-Typ |
|-----------|-----------|------------|
| `site/app/blog/[slug]/page.tsx` hero | Zentriert (`text-center`, `items-center`) | Full-Width Hero |
| `site/app/blog/[slug]/page.tsx` article | Links (Body-Text) | Article Content |
| `site/app/blog/[slug]/page.tsx` related | Links (`text-left`) | Related Articles |

### Lücken oder Probleme, die adressiert werden

1. **Kein visueller Rhythmus** — Alle Header-Sections nutzen identische zentrierte Ausrichtung
2. **Monotonie** — 11 von 14 sichtbaren Sections sind zentriert, erzeugt statischen, eintönigen Eindruck
3. **Nicht referenz-konform** — Cure Hydration (direkter Wettbewerber) nutzt Editorial-Left-Alignment; unser Layout wirkt im Vergleich veraltet
4. **TextBlock-Component erzwingt Zentrierung** — Keine Option für links-ausgerichtete Variante

---

## Vorgeschlagene Änderungen

### Alignment-Strategie nach Section

Der Grundgedanke: **Zentriert für emotionale/immersive Momente, links-ausgerichtet für informative/editorial Sections.**

| # | Section | VORHER | NACHHER | Begründung |
|---|---------|--------|---------|------------|
| 1 | Hero | Zentriert | **Zentriert** ✓ | Immersiver Fullscreen-Moment — Zentrierung ist Standard |
| 2 | TrustBand | Zentriert | **Zentriert** ✓ | Schmale Trust-Leiste, Zentrierung passt |
| 3 | WhySection | Links (Split) | **Links** ✓ | Bereits asymmetrisch — kein Change nötig |
| 4 | The Formula (TextBlock) | Zentriert | **Links-ausgerichtet** | Editorial-Intro zum Ingredients-Block |
| 5 | Comparison | Zentriert | **Links-ausgerichteter Header** | Editorial-Feel für datengetriebene Section |
| 6 | Benefits | Zentriert | **Links-ausgerichteter Header + Left-Aligned Grid** | Cure-Hydration-Stil: Headline links, Grid darunter |
| 7 | ForEveryone | Links (Split) | **Links** ✓ | Bereits asymmetrisch |
| 8 | Products | Zentriert | **Zentriert** ✓ | Shop-Grid funktioniert zentriert — Standard für E-Commerce |
| 9 | Testimonials | Zentriert | **Links-ausgerichtet** | Grosses Editorial-Quote links statt zentriertes Karussell |
| 10 | SocialProof | Zentriert | **Zentriert** ✓ | Metrics-Bar — Zentrierung funktioniert |
| 11 | StorySection | Links (Split) | **Links** ✓ | Bereits asymmetrisch |
| 12 | FAQ | Zentriert Header | **Links-ausgerichteter Header** | Konsistenz mit Editorial-Flow |
| 13 | BlogSection | Zentriert | **Links-ausgerichteter Header** | Editorial-Magazin-Stil |
| 14 | CtaBanner | Zentriert | **Zentriert** ✓ | Immersiver CTA-Moment — Zentrierung ist richtig |
| 15 | Newsletter | Zentriert | **Zentriert** ✓ | Form-Element — Zentrierung ist Standard |

**Ergebnis-Rhythmus auf der Homepage:**

```
ZENTRIERT  — Hero (immersiv)
ZENTRIERT  — TrustBand (dezent)
LINKS      — WhySection (Split) ✓
LINKS      — The Formula + Ingredients (Editorial)  ← NEU
LINKS      — Comparison (Editorial)  ← NEU
LINKS      — Benefits (Editorial)  ← NEU
LINKS      — ForEveryone (Split) ✓
ZENTRIERT  — Products (Shop Grid)
LINKS      — Testimonials (Editorial Quote)  ← NEU
ZENTRIERT  — SocialProof (Metrics Bar)
LINKS      — StorySection (Split) ✓
LINKS      — FAQ (Editorial)  ← NEU
LINKS      — BlogSection (Magazin)  ← NEU
ZENTRIERT  — CtaBanner (immersiv)
ZENTRIERT  — Newsletter (Form)
```

**Rhythmus: Z → Z → L → L → L → L → L → Z → L → Z → L → L → L → Z → Z**

Das erzeugt zwei klare "zentrierte Blöcke" (Hero-Intro und Final-Conversion) mit einem durchgehend editorialen Mittelteil — genau wie bei Cure Hydration.

---

### Alignment-Strategie: Partner-Seite (`/partner`)

Gleiche Logik: **Immersive Momente zentriert, datengetriebene/informationale Sections links.**

| # | Section | VORHER | NACHHER | Begründung |
|---|---------|--------|---------|------------|
| 1 | PartnerHero | Zentriert | **Zentriert** ✓ | Immersiver Hero — Zentrierung passt |
| 2 | "The Opportunity" Header | Zentriert | **Links-ausgerichtet** | Editorial-Intro zu Market-Daten |
| 3 | MarketStats | Zentriert | **Zentriert** ✓ | Metrics-Grid — Zentrierung funktioniert (wie SocialProof) |
| 4 | MarketComparison | Zentriert Header | **Links-ausgerichteter Header** | Datengetriebene Section |
| 5 | CategoryProof | Zentriert | **Links-ausgerichteter Header** | Editorial-Feel für dunkle Section |
| 6 | TextBlock "Why distribute" | Zentriert | **Links-ausgerichtet** | Editorial-Argument |
| 7 | RevenueComparison | Zentriert Header | **Links-ausgerichteter Header** | Daten-Section |
| 8 | Comparison | Zentriert | **Links-ausgerichteter Header** | Konsistenz mit Homepage |
| 9 | DistributionTiers | Zentriert | **Links-ausgerichteter Header** | Editorial-Section |
| 10 | RevenueModel | Zentriert Header | **Links-ausgerichteter Header** | Daten-Tabelle |
| 11 | SocialProof | Zentriert | **Zentriert** ✓ | Metrics-Bar — Zentrierung |
| 12 | LocationMap | Zentriert | **Links-ausgerichteter Header** | Tag-Cloud kann zentriert bleiben, Header links |
| 13 | PartnerForm | Zentriert | **Zentriert** ✓ | Form-Element — Zentrierung |

**Ergebnis-Rhythmus Partner-Seite:**

```
ZENTRIERT  — PartnerHero (immersiv)
LINKS      — "The Opportunity" Header  ← NEU
ZENTRIERT  — MarketStats (Metrics)
LINKS      — MarketComparison Header  ← NEU
LINKS      — CategoryProof Header  ← NEU
LINKS      — TextBlock "Why distribute"  ← NEU
LINKS      — RevenueComparison Header  ← NEU
LINKS      — Comparison Header (geteilt mit Homepage)  ← bereits in Homepage-Plan
LINKS      — DistributionTiers Header  ← NEU
LINKS      — RevenueModel Header  ← NEU
ZENTRIERT  — SocialProof (Metrics Bar)
LINKS      — LocationMap Header  ← NEU
ZENTRIERT  — PartnerForm (Form)
```

---

### Alignment-Strategie: Blog-Listing (`/blog`)

| # | Section | VORHER | NACHHER | Begründung |
|---|---------|--------|---------|------------|
| 1 | Page Header | Zentriert | **Links-ausgerichtet** | Editorial-Magazin-Stil — Blog-Listing sollte wie ein Magazin wirken |

---

### Alignment-Strategie: Blog-Artikel (`/blog/[slug]`)

| # | Section | VORHER | NACHHER | Begründung |
|---|---------|--------|---------|------------|
| 1 | Hero | Zentriert | **Zentriert** ✓ | Immersiver Full-Width Hero — bleibt |
| 2 | Article Body | Links | **Links** ✓ | Bereits korrekt |
| 3 | "Related Articles" Header | Links | **Links** ✓ | Bereits korrekt |

Blog-Artikel sind bereits editorial (links-ausgerichteter Body). Nur das Blog-Listing braucht Anpassung.

### Zusammenfassung der Änderungen

**Homepage:**
- **TextBlock.tsx** bekommt `align`-Prop (`center` | `left`) — Default bleibt `center` für Abwärtskompatibilität
- **Benefits.tsx** — Header links-ausgerichtet, Grid-Items links-ausgerichtet
- **Comparison.tsx** — Header links-ausgerichtet
- **Testimonials.tsx** — Quote links-ausgerichtet statt zentriert, Autor-Info links
- **Faq.tsx** — Header links-ausgerichtet
- **BlogSection.tsx** — Header links-ausgerichtet
- **page.tsx** — TextBlock "The Formula" mit `align="left"`

**Partner-Seite:**
- **partner/page.tsx** — Inline-Header "The Opportunity" auf links umstellen + TextBlock mit `align="left"`
- **MarketComparison.tsx** — Header links-ausgerichtet
- **CategoryProof.tsx** — Header links-ausgerichtet
- **RevenueComparison.tsx** — Header links-ausgerichtet
- **DistributionTiers.tsx** — Header links-ausgerichtet
- **RevenueModel.tsx** — Header links-ausgerichtet
- **LocationMap.tsx** — Header links-ausgerichtet

**Blog-Listing:**
- **blog/page.tsx** — Page-Header links-ausgerichtet

### Zu ändernde Dateien

| Dateipfad | Änderungen |
|-----------|------------|
| `site/components/TextBlock.tsx` | Neues `align`-Prop, bedingte Klassen für `text-left` vs `text-center` |
| `site/components/Benefits.tsx` | Header von `text-center` auf `text-left`, Grid-Items auf `text-left`, `mx-auto` entfernen |
| `site/components/Comparison.tsx` | Header-Block von `text-center` auf `text-left`, `mx-auto` auf Beschreibung entfernen |
| `site/components/Testimonials.tsx` | Wrapper von `text-center` auf `text-left`, Quote links-ausgerichtet, Autor-Block bleibt links |
| `site/components/Faq.tsx` | Header-Block von `text-center` auf `text-left` |
| `site/components/BlogSection.tsx` | Header von `text-center` auf `text-left`, Footer-Link von `text-center` auf `text-left` |
| `site/app/page.tsx` | TextBlock "The Formula" mit `align="left"` |
| `site/app/partner/page.tsx` | Inline "The Opportunity" Header: `text-center` → `text-left`, TextBlock mit `align="left"` |
| `site/components/MarketComparison.tsx` | Header-Wrapper: `text-center` → `text-left` |
| `site/components/CategoryProof.tsx` | Header: `text-center` → `text-left`, `mx-auto` auf Beschreibung entfernen |
| `site/components/RevenueComparison.tsx` | Header-Wrapper: `text-center` → `text-left` |
| `site/components/DistributionTiers.tsx` | Header: `text-center` → `text-left` |
| `site/components/RevenueModel.tsx` | Header: `text-center` → `text-left` |
| `site/components/LocationMap.tsx` | Header: `text-center` → `text-left` |
| `site/app/blog/page.tsx` | Page-Header: `text-center` → `text-left`, `mx-auto` auf Beschreibung entfernen |

---

## Design-Entscheidungen

### Getroffene Schlüsselentscheidungen

1. **Hero bleibt zentriert**: Fullscreen-Hero mit zentriertem Text ist bei allen Referenzen Standard — auch bei Cure Hydration. Das ist der emotionale Einstieg.

2. **Products bleibt zentriert**: E-Commerce-Grids funktionieren zentriert. Cure und Sakara nutzen beide zentrierte Produkt-Sections.

3. **SocialProof bleibt zentriert**: Metrics-Bars sind immer zentriert — das ist eine visuelle Unterbrechung (Mineral-Blue Hintergrund) die als Rhythmus-Break funktioniert.

4. **CtaBanner + Newsletter bleiben zentriert**: Conversion-Elemente profitieren von zentrierter Aufmerksamkeit. Das sind die "immersiven Momente".

5. **TextBlock bekommt align-Prop statt neue Component**: Vermeidet Duplikation, eine Prop reicht.

6. **Testimonials wird links-ausgerichtet**: Grosse Editorial-Quotes wirken links-ausgerichtet deutlich moderner. Die dekorative Anführungszeichen wird nach links verschoben statt zentriert.

7. **Benefits Grid bleibt 4-Spalten aber Items werden links-ausgerichtet**: Die Grid-Struktur bleibt, nur die Text-Ausrichtung innerhalb der Items ändert sich. Icons links statt zentriert über dem Text.

### Betrachtete Alternativen

- **Alles links**: Zu radikal, verliert den Luxury-Charakter komplett. PANPURI und Grown Alchemist zeigen, dass Zentrierung für Premium-Brands wichtig ist.
- **Nur Headers links, Body zentriert**: Inkonsistent, wirkt halbherzig.
- **Asymmetrische Split-Layouts für alle Sections**: Zu aufwändig, würde die gesamte Seitenstruktur ändern. Die bestehenden Splits (Why, ForEveryone, Story) reichen.

### Offene Fragen

1. **Benefits-Layout**: Sollen die Benefit-Items eine horizontale Variante bekommen (Icon links, Text rechts) statt vertikal (Icon oben, Text unten)? Das wäre noch editorialer, aber ein grösserer Umbau.

---

## Schritt-für-Schritt-Aufgaben

### Schritt 1: TextBlock.tsx — `align`-Prop hinzufügen

TextBlock ist eine wiederverwendbare Component für Section-Header. Sie muss eine `align`-Option bekommen.

**Aktionen:**

- `align?: 'center' | 'left'` Prop hinzufügen (Default: `'center'`)
- Bei `align="left"`:
  - `text-center` → `text-left`
  - `mx-auto` bleibt (für max-width), aber ohne `text-center`
  - Gold-Line bleibt (wird bei left-align natürlich links angezeigt, da das `::before`/Inline-Element dem Text-Flow folgt)
- Bei `align="center"` (Default): Keine Änderung, bleibt wie jetzt

**Betroffene Dateien:**

- `site/components/TextBlock.tsx`

---

### Schritt 2: page.tsx — TextBlock "The Formula" auf links umstellen

**Aktionen:**

- `<TextBlock>` für "The Formula" Section (Zeile 37) bekommt `align="left"`

**Betroffene Dateien:**

- `site/app/page.tsx`

---

### Schritt 3: Benefits.tsx — Editorial-Layout

**Aktionen:**

- Header-Wrapper: `text-center` → `text-left`
- Jeden Benefit-Item: `text-center` → `text-left` auf dem `<div>`
- Icon-Container: `mx-auto` entfernen (Icon bleibt links statt zentriert)
- Beschreibung: `mx-auto` und `max-w-[220px]` entfernen
- Optional: Icon und Text in eine Zeile bringen (Icon links, Text rechts) für noch editorialeren Look

**Vorher (Benefits-Item):**
```jsx
<div className="text-center group">
  <div className="w-14 h-14 mx-auto mb-5 ...">
    {item.icon}
  </div>
  <h3 className="...">
    {item.title}
  </h3>
  <p className="... max-w-[220px] mx-auto">
    {item.desc}
  </p>
</div>
```

**Nachher (Benefits-Item):**
```jsx
<div className="group">
  <div className="w-14 h-14 mb-5 ...">
    {item.icon}
  </div>
  <h3 className="...">
    {item.title}
  </h3>
  <p className="...">
    {item.desc}
  </p>
</div>
```

**Betroffene Dateien:**

- `site/components/Benefits.tsx`

---

### Schritt 4: Comparison.tsx — Header links-ausrichten

**Aktionen:**

- Header-Wrapper (Zeile 96): `text-center` → `text-left`
- Beschreibung (Zeile 104): `mx-auto` entfernen
- Footer-Hinweis (Zeile 173): `text-center` → `text-left`

**Betroffene Dateien:**

- `site/components/Comparison.tsx`

---

### Schritt 5: Testimonials.tsx — Editorial-Quote-Layout

**Aktionen:**

- Wrapper (Zeile 63): `text-center` → entfernen oder `text-left`
- Dekoratives Anführungszeichen (Zeile 66): Von `left-1/2 -translate-x-1/2` (zentriert) auf `left-0` (links) verschieben
- Quote-Block (Zeile 79): `text-center` entfernen
- Blockquote (Zeile 81): `mx-auto` entfernen
- Autor-Block (Zeile 86): `justify-center` → `justify-start` (ist bereits `text-left` innerhalb)
- Indikatoren (Zeile 104): `justify-center` → `justify-start`

**Betroffene Dateien:**

- `site/components/Testimonials.tsx`

---

### Schritt 6: Faq.tsx — Header links-ausrichten

**Aktionen:**

- Header-Block (Zeile 50): `text-center` → `text-left`
- Gold-Line und Eyebrow folgen automatisch der Text-Ausrichtung

**Betroffene Dateien:**

- `site/components/Faq.tsx`

---

### Schritt 7: BlogSection.tsx — Editorial-Magazin-Header

**Aktionen:**

- Header-Wrapper (Zeile 11): `text-center` → `text-left`
- Footer-Link (Zeile 33): `text-center` → `text-left`

**Betroffene Dateien:**

- `site/components/BlogSection.tsx`

---

### Schritt 8: Partner-Seite — Inline-Header "The Opportunity" links-ausrichten

**Aktionen:**

- `site/app/partner/page.tsx` Zeile 30: `text-center` → `text-left` auf dem Section-Header-Div
- TextBlock "Why distribute Salt.Magic?" (Zeile 48): `align="left"` hinzufügen

**Betroffene Dateien:**

- `site/app/partner/page.tsx`

---

### Schritt 9: MarketComparison.tsx — Header links-ausrichten

**Aktionen:**

- Header-Wrapper (Zeile 9): `text-center` → `text-left`

**Betroffene Dateien:**

- `site/components/MarketComparison.tsx`

---

### Schritt 10: CategoryProof.tsx — Header links-ausrichten

**Aktionen:**

- Header-Wrapper (Zeile 32): `text-center` → `text-left`
- Beschreibung (Zeile 39): `mx-auto` entfernen

**Betroffene Dateien:**

- `site/components/CategoryProof.tsx`

---

### Schritt 11: RevenueComparison.tsx — Header links-ausrichten

**Aktionen:**

- Header-Wrapper (Zeile 9): `text-center` → `text-left`

**Betroffene Dateien:**

- `site/components/RevenueComparison.tsx`

---

### Schritt 12: DistributionTiers.tsx — Header links-ausrichten

**Aktionen:**

- Header FadeIn (Zeile 39): `text-center` → `text-left`

**Betroffene Dateien:**

- `site/components/DistributionTiers.tsx`

---

### Schritt 13: RevenueModel.tsx — Header links-ausrichten

**Aktionen:**

- Header-Wrapper (Zeile 28): `text-center` → `text-left`
- LTV-Statement (Zeile 101): `text-center` → `text-left`

**Betroffene Dateien:**

- `site/components/RevenueModel.tsx`

---

### Schritt 14: LocationMap.tsx — Header links-ausrichten

**Aktionen:**

- Header FadeIn (Zeile 19): `text-center` → `text-left`
- Tag-Cloud bleibt `justify-center` (zentriertes Tag-Layout funktioniert, nur Header links)

**Betroffene Dateien:**

- `site/components/LocationMap.tsx`

---

### Schritt 15: Blog-Listing — Page-Header links-ausrichten

**Aktionen:**

- `site/app/blog/page.tsx` Zeile 16: `text-center` → `text-left`
- Beschreibung: `mx-auto` entfernen

**Betroffene Dateien:**

- `site/app/blog/page.tsx`

---

### Schritt 16: Visueller Review + Feinschliff

**Aktionen:**

- Dev-Server starten (`cd site && npm run dev`)
- **Homepage**: Gesamten Flow durchscrollen — Rhythmus zentriert/links erkennbar?
- **Partner-Seite**: `/partner` komplett durchgehen — Editorial-Headers konsistent?
- **Blog-Listing**: `/blog` Header links-ausgerichtet?
- **Blog-Artikel**: `/blog/[slug]` — Hero zentriert, Body links, Related links?
- Prüfen: Gold-Lines bei links-ausgerichteten Sections korrekt positioniert?
- Prüfen: Spacing/Margins bei links-ausgerichteten Headers stimmig?
- Prüfen: Mobile-Ansicht auf allen Seiten — links-ausgerichtete Headers auf kleinen Screens
- Prüfen: Kein visueller Bruch zwischen zentrierten und links-ausgerichteten Sections
- Ggf. Feinabstimmung der `max-width` Werte bei links-ausgerichteten Texten

**Betroffene Dateien:**

- Alle geänderten Components auf allen Seiten

---

## Verbindungen & Abhängigkeiten

### Dateien, die diesen Bereich referenzieren

- `site/app/page.tsx` — Rendert alle Homepage-Components, nutzt TextBlock direkt
- `site/app/partner/page.tsx` — Nutzt TextBlock + eigene Inline-Headers + geteilte Components (Comparison, SocialProof)
- `site/app/blog/page.tsx` — Eigene Header-Struktur
- `site/app/blog/[slug]/page.tsx` — Bereits editorial (links-ausgerichtet)
- `site/app/globals.css` — `.gold-line` CSS-Klasse (muss ggf. für left-align angepasst werden)

### Nötige Updates für Konsistenz

- `CLAUDE.md` — V9 Changelog-Eintrag für Editorial Alignment Redesign
- `.gold-line` CSS-Klasse prüfen — funktioniert sie auch bei `text-left`? (Ist es ein `::before` Pseudo-Element oder ein `div`?)
- Geteilte Components (Comparison, SocialProof) werden auf beiden Seiten genutzt — Änderungen gelten automatisch überall

### Auswirkungen auf bestehende Workflows

- Keine Breaking Changes — TextBlock-Default bleibt `center`
- Geteilte Components (Comparison, SocialProof) ändern sich gleichzeitig auf Homepage und Partner-Seite
- Blog-Artikel bleiben unverändert (bereits editorial)

---

## Validierungs-Checkliste

**Homepage:**
- [ ] TextBlock rendert korrekt mit `align="left"` und `align="center"` (Default)
- [ ] Gold-Lines sind bei links-ausgerichteten Sections korrekt positioniert (links, nicht zentriert)
- [ ] Benefits-Grid sieht bei 2-Spalten (Mobile) und 4-Spalten (Desktop) gut aus mit linker Ausrichtung
- [ ] Testimonials-Quote ist links-ausgerichtet mit dekorativem Anführungszeichen links
- [ ] Comparison-Header ist links-ausgerichtet, Cards bleiben unverändert
- [ ] FAQ-Header ist links-ausgerichtet, Accordion-Items bleiben unverändert (waren bereits `text-left`)
- [ ] BlogSection-Header ist links-ausgerichtet, Blog-Cards-Grid bleibt unverändert
- [ ] Homepage-Flow zeigt klaren Rhythmus: Zentriert (Hero/TrustBand) → Editorial (Mitte) → Zentriert (Products) → Editorial → Zentriert (CTA/Newsletter)

**Partner-Seite:**
- [ ] PartnerHero bleibt zentriert
- [ ] "The Opportunity" Header links-ausgerichtet
- [ ] MarketComparison, CategoryProof, RevenueComparison Header links-ausgerichtet
- [ ] DistributionTiers, RevenueModel Header links-ausgerichtet
- [ ] LocationMap Header links, Tag-Cloud bleibt zentriert
- [ ] PartnerForm bleibt zentriert
- [ ] TextBlock "Why distribute" links-ausgerichtet

**Blog:**
- [ ] Blog-Listing Header links-ausgerichtet
- [ ] Blog-Artikel Hero bleibt zentriert, Body bleibt links

**Übergreifend:**
- [ ] Mobile-Ansicht: Links-ausgerichtete Headers wirken auf allen Seiten natürlich
- [ ] Kein visueller Bruch an Übergängen zwischen zentrierten und links-ausgerichteten Sections
- [ ] Geteilte Components (Comparison, SocialProof) funktionieren auf Homepage und Partner-Seite
- [ ] CLAUDE.md mit V9-Changelog aktualisiert

---

## Erfolgskriterien

Die Implementierung ist abgeschlossen, wenn:

1. **Rhythmus sichtbar auf allen Seiten**: Beim Durchscrollen von Homepage, Partner-Seite und Blog ist ein klarer Wechsel zwischen zentrierten und links-ausgerichteten Sections erkennbar
2. **Kein Bruch**: Übergänge zwischen den Alignment-Stilen fühlen sich natürlich an, keine harten visuellen Sprünge
3. **Mobile funktioniert**: Auf mobilen Screens wirken links-ausgerichtete Headers auf allen Seiten mindestens genauso gut wie zentrierte
4. **Referenz-Nähe**: Der Editorial-Flow erinnert an Cure Hydration, ohne den Luxury-Charakter von PANPURI/Grown Alchemist zu verlieren
5. **Konsistenz über Seiten**: Gleiche Components (Comparison, SocialProof) haben gleiches Alignment auf Homepage und Partner-Seite
6. **Keine Regression**: Alle Seiten und Funktionen arbeiten korrekt

---

## Notizen

- Die Änderungen sind bewusst konservativ — nur Alignment, keine Layout-Restructuring. Die bestehenden Split-Sections (Why, ForEveryone, Story) sind bereits stark und brauchen keine Änderung.
- Falls die Gold-Line (`gold-line` CSS-Klasse) ein zentriertes Pseudo-Element ist, muss sie für left-aligned Sections angepasst werden (z.B. `margin-left: 0` statt `margin: 0 auto`).

---

## Implementierungsnotizen

**Implementiert:** 2026-03-30

### Zusammenfassung

Alle 16 Schritte umgesetzt. Editorial Alignment Redesign über Homepage, Partner-Seite und Blog-Listing. Gold-Line CSS wurde angepasst (context-aware: zentriert in `text-center` Parents, links-ausgerichtet sonst). Benefits wurde auf horizontales Layout umgebaut (Icon links, Text rechts, 2-Spalten statt 4-Spalten Grid).

### Abweichungen vom Plan

1. **Benefits horizontal statt vertikal**: Auf User-Wunsch wurden die Benefit-Items auf horizontales Layout umgebaut (Icon links + Text rechts in einer Zeile, `flex items-start gap-4`). Grid von 4-Spalten auf 2-Spalten geändert (`grid-cols-1 sm:grid-cols-2`).
2. **Gold-Line CSS Fix**: Die `.gold-line` Klasse hatte `margin: 0 auto 24px` (immer zentriert). Geändert zu `margin-bottom: 24px` + `.text-center > .gold-line { margin-left: auto; margin-right: auto; }` damit sie context-aware ist.

### Aufgetretene Probleme

Keine.

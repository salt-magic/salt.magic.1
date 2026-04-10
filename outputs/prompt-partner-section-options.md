# Prompt: Partner Page Section Options

Kopiere diesen Prompt in eine neue Session:

---

/prime

Dann:

Nutze den UI/UX Pro Max Skill. Ich moechte fuer die Partner-Seite (/partner) das gleiche machen wie fuer die Homepage: Fuer jede Section 4 Layout-Alternativen als HTML-Vorschau erstellen.

## Vorgehensweise

1. Lies die Partner-Seite: `site/app/partner/page.tsx` und alle Partner-Components (`PartnerHero.tsx`, `MarketComparison.tsx`, `CategoryProof.tsx`, `RevenueComparison.tsx`, `PartnerForm.tsx`)
2. Lies Leo's Copy Review fuer die Partner-Seite: `reference/V1_Salt-Magic-Copy-Review.docx` — PART 2 (ab "MASTER COPY: Salt.Magic B2B Partner Page")
3. Fuer jede Section: Recherchiere Referenzseiten (Cure Hydration, LMNT, Hydrant, Sakara, PANPURI, Grown Alchemist) mit WebFetch fuer das jeweilige Section-Pattern
4. Erstelle pro Section eine HTML-Datei in `outputs/section-options/partner/` mit 4 Optionen (Desktop + Mobile Preview)
5. Nutze echte Produktfotos aus `site/public/images/products/` und `site/public/images/mood/`

## Partner-Seite Sections (8 Stueck)

| # | Section | Component | Aktuelles Layout |
|---|---------|-----------|-----------------|
| 1 | Hero | PartnerHero.tsx | Zentriert auf Mineral-Blue, Stats-Bar unten |
| 2 | Market Opportunity | MarketComparison.tsx | Zentrierter Header + 85% Callout + 2 USA/APAC Cards |
| 3 | Category Proof | CategoryProof.tsx | Links-ausgerichtet Header + 3 Brand-Rows (Liquid IV, LMNT, Liquid Death) |
| 4 | Why Distribute | Inline in partner/page.tsx | Split: Produktbild links, Text + 3 Bullets rechts |
| 5 | Revenue Difference | RevenueComparison.tsx | Zentrierter Header + 2 Cards (Wellness vs Traditional) |
| 6 | Comparison | Wiederverwendet von Homepage | 4-Spalten auf Wasser-BG |
| 7 | Product Formats | Inline in partner/page.tsx | 2 Bilder nebeneinander mit Gradient-Overlay |
| 8 | Contact Form | PartnerForm.tsx | Zentriertes Formular auf warm-off BG |

## Datei-Namenskonvention

```
outputs/section-options/partner/01-partner-hero-options.html
outputs/section-options/partner/02-market-options.html
outputs/section-options/partner/03-categoryproof-options.html
outputs/section-options/partner/04-whydistribute-options.html
outputs/section-options/partner/05-revenue-options.html
outputs/section-options/partner/06-comparison-options.html
outputs/section-options/partner/07-productformats-options.html
outputs/section-options/partner/08-partnerform-options.html
```

## HTML-Format (gleich wie Homepage)

Jede HTML-Datei soll enthalten:
- Page Header mit Section-Name, aktuellem Layout, und Leo's Kritik (falls vorhanden)
- 4 Optionen mit jeweils:
  - Referenz-Label (welche Brand inspiriert hat)
  - Option Badge + Titel
  - Kurze Beschreibung
  - Desktop Frame (900px) + Mobile Frame (375px)
  - Echte Produktfotos wo passend
- Salt.Magic Brand Farben: Mineral #294B6D, Gold #D4BFAA, Warm-Off #F9F7F4, Ink #3C3028
- Playfair Display + Inter Fonts via Google Fonts

## Referenz: Homepage Options

Die fertigen Homepage-Options liegen in `outputs/section-options/` als Vorlage fuer Stil und Qualitaet:
- `hero-layout-options.html` (6 Optionen)
- `02-trustband-options.html` bis `13-cta-newsletter-partner-options.html` (je 4 Optionen)

Bitte oeffne jede fertige HTML direkt im Browser damit ich sie sofort reviewen kann.

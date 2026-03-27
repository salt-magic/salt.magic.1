# Plan: V7 Reference Vibe Upgrade — Elevated Natural Luxury

**Erstellt:** 2026-03-27
**Status:** Implementiert
**Anforderung:** Die Design-Sprache der Referenzseiten (Grown Alchemist, Sakara, PANPURI, Cure Hydration) besser in die Salt.Magic Homepage einfangen — mehr Editorial Luxury, visuellen Rhythmus und Premium-Signale.

---

## Ueberblick

### Was dieser Plan erreicht

Die Salt.Magic Homepage bekommt 7 gezielte Design-Upgrades, die den "Elevated Natural Luxury" Vibe der Referenzseiten einfangen: groessere Editorial-Headlines, durchgehende Eyebrow-Labels, alternierende Section-Hintergruende, die bereits existierende AnnouncementBar einbinden, eine Newsletter-Section, ein Trust-Logo-Band und verfeinerte Button-Hierarchy.

### Warum das wichtig ist

Die aktuelle Site funktioniert strukturell, wirkt aber im direkten Vergleich mit den Referenzen noch zu "flat" — fehlender visueller Rhythmus, monotoner weisser Hintergrund, Headlines zu klein fuer Editorial-Premium. Diese Upgrades schliessen die Gap zur Referenz-Qualitaet und stuetzen Salt.Magics Premium-Positioning.

---

## Aktueller Zustand

### Relevante bestehende Struktur

- `site/app/page.tsx` — Homepage mit 14 Sections (AIDA-Funnel)
- `site/app/layout.tsx` — Root Layout (hier muss AnnouncementBar rein)
- `site/app/globals.css` — Globale Styles inkl. `.headline-editorial`, `.gold-line`, `.label-uppercase`
- `site/components/TextBlock.tsx` — Wiederverwendbar fuer Section-Headlines (hat `eyebrow` + `showGoldLine` Props)
- `site/components/AnnouncementBar.tsx` — EXISTIERT bereits, ist aber NIRGENDS eingebunden
- `site/components/Nav.tsx` — Sticky Nav mit `top-9` (Platz fuer AnnouncementBar)
- `site/components/Footer.tsx` — Hat Newsletter-Input im Footer-Grid, aber keine eigenstaendige Newsletter-Section
- `site/tailwind.config.ts` — Farb-Tokens (warm-white ist #FFFFFF, cream ist #F2EDE6)

### Luecken oder Probleme

1. **Headlines zu klein:** `clamp(32px,5vw,48px)` vs. Sakara 56px+ / GA 72px+
2. **Kein Eyebrow-System:** Nur in BlogSection und Hero genutzt, nicht durchgehend
3. **Monotoner Hintergrund:** Alles auf reinem Weiss — kein visueller Rhythmus
4. **AnnouncementBar nicht eingebunden:** Component existiert, wird nicht gerendert
5. **Keine Newsletter-Section:** Newsletter nur als kleines Footer-Element, nicht prominent
6. **Kein Trust-Logo-Band:** SocialProof hat Zahlen, aber keine visuellen Trust-Signale
7. **Flache Button-Hierarchy:** Ueberall gleicher Mineral-Blue Pill-Button

---

## Vorgeschlagene Aenderungen

### Zusammenfassung der Aenderungen

1. AnnouncementBar in Layout einbinden + Nav-Offset anpassen
2. Headline-Groessen erhoehen + font-weight von bold auf normal
3. Eyebrow-Labels + Gold-Lines fuer alle TextBlock-Sections
4. Alternierende Section-Hintergruende (neues `warm-off` Token: `#F9F7F4`)
5. Newsletter-Section als eigenstaendige Component vor Footer
6. Trust-Logo-Band nach Hero
7. Tertiaer-Button-Stil als Underline-Link einfuehren

### Neue Dateien erstellen

| Dateipfad | Zweck |
|---|---|
| `site/components/Newsletter.tsx` | Eigenstaendige Newsletter-Section mit E-Mail-Input + CTA |
| `site/components/TrustBand.tsx` | Grayscale-Logo-Band / "Trusted by" Text-Leiste |

### Zu aendernde Dateien

| Dateipfad | Aenderungen |
|---|---|
| `site/app/layout.tsx` | AnnouncementBar vor Nav einbinden |
| `site/app/page.tsx` | Eyebrow-Props, Gold-Lines, Section-Backgrounds, TrustBand + Newsletter einfuegen |
| `site/app/globals.css` | `.headline-editorial` Groessen erhoehen, font-weight normal, neuer `.link-underline` Stil |
| `site/components/TextBlock.tsx` | H2 font-size auf `clamp(36px,5.5vw,56px)`, font-bold -> font-normal |
| `site/components/Hero.tsx` | Headline auf `clamp(44px,6.5vw,72px)`, font-bold -> font-normal |
| `site/components/Nav.tsx` | `top-9` behaelt sich fuer AnnouncementBar-Platz (pruefen ob Offset stimmt) |
| `site/tailwind.config.ts` | Neues Farb-Token `warm-off: '#F9F7F4'` |
| `site/components/Comparison.tsx` | Eyebrow-Label in Header einfuegen |
| `site/components/Benefits.tsx` | Eyebrow-Label + Background `bg-warm-off` |
| `site/components/Faq.tsx` | Background `bg-warm-off` |
| `site/components/Products.tsx` | Kein Background-Change (bleibt weiss), aber Eyebrow kommt via page.tsx TextBlock |

---

## Design-Entscheidungen

### Getroffene Schluesselentscheidungen

1. **`#F9F7F4` statt Cream (#F2EDE6) fuer Alternating Backgrounds:** Cream war zu stark und wurde in V6 bewusst entfernt. `#F9F7F4` ist subtiler — gerade genug um Rhythmus zu erzeugen, ohne den cleanen Look zu brechen. Sakara nutzt `#FAFAF8`, Cure nutzt `#FAFAF9` — wir gehen minimal waermer.

2. **font-normal statt font-bold fuer Serif-Headlines:** Alle 4 Referenzen nutzen Regular/Light weight fuer Serif-Headlines. Bold Playfair wirkt schwer — Regular Playfair wirkt eleganter und editorialer.

3. **AnnouncementBar mit Mineral Blue Background beibehalten:** Die existierende Component nutzt `bg-mineral` — das harmoniert mit dem Brand und Nav-Scrolled-State. Kein Redesign noetig.

4. **Newsletter als eigene Section statt Footer-Upgrade:** Sakara, PANPURI, Cure — alle haben Newsletter prominent ueber dem Footer. Das bestehende Footer-Newsletter-Widget bleibt zusaetzlich als Fallback.

5. **TrustBand als Text statt Logos:** Da keine Partner-/Presse-Logos vorhanden sind, nutzen wir dezente Text-Statements ("Trusted by 150+ wellness locations across Thailand") mit kleinen Location-Icons. Spaeter mit echten Logos ergaenzen.

### Betrachtete Alternativen

- **Cormorant Garamond statt Playfair:** In Brand Guidelines als Alternative gelistet. Fuer V7 zu riskant — waere ein Font-Wechsel der gesamten Site. Kann in V8 als A/B-Test kommen.
- **Volle Cream-Sections zurueck:** In V4/V6 von Leo bewusst entfernt. `#F9F7F4` ist der Kompromiss — subtil genug um nicht als "Cream" aufzufallen.

### Offene Fragen

1. **Newsletter-Backend:** Aktuell kein E-Mail-Service konfiguriert. Soll das Input-Feld trotzdem gerendert werden (als UI-Element fuer spaetere Integration), oder soll es bis zur Backend-Anbindung weggelassen werden?
2. **TrustBand-Content:** Sollen spezifische Location-Namen genannt werden (z.B. "Samui • Bangkok • Chiang Mai • Phuket") oder generisch "150+ locations"?

---

## Schritt-fuer-Schritt-Aufgaben

### Schritt 1: Tailwind Config — Neues Farb-Token

Neues Token `warm-off` in der Farbpalette hinzufuegen.

**Aktionen:**

- In `tailwind.config.ts` unter `colors` hinzufuegen: `'warm-off': '#F9F7F4'`

**Betroffene Dateien:**

- `site/tailwind.config.ts`

---

### Schritt 2: AnnouncementBar in Layout einbinden

Die existierende AnnouncementBar-Component ins Root Layout einbauen, sodass sie auf allen Seiten sichtbar ist.

**Aktionen:**

- In `site/app/layout.tsx` die AnnouncementBar importieren
- Vor `<Nav />` rendern (innerhalb des `<body>`)
- Pruefen, dass Nav `top-9` (36px = AnnouncementBar-Hoehe) korrekt funktioniert
- Auf Subpages pruefen: Nav hat dort `top-0` — muss auf `top-9` angepasst werden wenn AnnouncementBar aktiv ist

**Betroffene Dateien:**

- `site/app/layout.tsx`
- `site/components/Nav.tsx` (evtl. Offset-Anpassung)

---

### Schritt 3: Headline-Groessen + Font-Weight upgraden

Alle Section-Headlines und den Hero auf groessere, elegantere Typografie umstellen.

**Aktionen:**

- `site/components/TextBlock.tsx`: H2 von `text-[clamp(32px,5vw,48px)] font-bold` auf `text-[clamp(36px,5.5vw,56px)] font-normal`
- `site/components/Hero.tsx`: `.headline-editorial` Klasse nutzt `font-bold` — in der Component die Klasse ueberschreiben oder direkt aendern auf `font-normal`
- `site/app/globals.css`: `.headline-editorial` von `font-bold` auf `font-normal` aendern und Groessen auf `text-4xl md:text-5xl lg:text-[4rem]` erhoehen (64px statt 56px)
- Sicherstellen dass `[&>em]:font-normal` in TextBlock weiterhin korrekt aussieht (em-Tags bleiben italic)

**Betroffene Dateien:**

- `site/components/TextBlock.tsx`
- `site/components/Hero.tsx`
- `site/app/globals.css`

---

### Schritt 4: Eyebrow-Labels + Gold-Lines durchgehend

Jede TextBlock-Section bekommt ein Eyebrow-Label und eine Gold-Line fuer visuellen Rhythmus.

**Aktionen:**

In `site/app/page.tsx` folgende TextBlock-Aufrufe erweitern:

- **#why Section:** `<TextBlock eyebrow="The Problem" showGoldLine title={...}>`
- **What's inside:** `<TextBlock eyebrow="The Formula" showGoldLine title={...}>`
- **Products:** `<TextBlock eyebrow="Shop Salt.Magic" showGoldLine title={...} />`
- **For Everyone:** `<TextBlock eyebrow="For Everyone" showGoldLine title={...}>`
- **Story:** `<TextBlock eyebrow="Our Origin" showGoldLine title={...}>`

Fuer Sections mit eigenen Headlines (Comparison, Benefits, Faq, Testimonials), Eyebrow-Labels direkt in den Components ergaenzen:

- `site/components/Comparison.tsx`: Gold-Line + "How We Compare" Eyebrow ueber Headline
- `site/components/Benefits.tsx`: Gold-Line + "Daily Benefits" Eyebrow ueber Headline
- `site/components/Faq.tsx`: Gold-Line + "Questions" Eyebrow bereits vorhanden (hat gold-line) — pruefen ob Eyebrow-Text fehlt

**Betroffene Dateien:**

- `site/app/page.tsx`
- `site/components/Comparison.tsx`
- `site/components/Benefits.tsx`
- `site/components/Faq.tsx` (pruefen)

---

### Schritt 5: Alternierende Section-Hintergruende

Jede zweite "Content-Section" bekommt `bg-warm-off` fuer visuellen Rhythmus. Nicht alle Sections — nur strategisch gewaehlt fuer Abwechslung.

**Aktionen:**

Folgende Sections bekommen `bg-warm-off` mit passendem Padding:

1. **Ingredients-Section** (Schritt 3 in page.tsx, Zeile ~48): `className="bg-warm-off py-[...]"` (hat bereits einen Wrapper — `bg-warm-white` auf `bg-warm-off` aendern)
2. **Benefits** (`site/components/Benefits.tsx`): Aeusserste `<section>` bekommt `bg-warm-off`
3. **Testimonials-Wrapper** in page.tsx: `bg-warm-white` auf `bg-warm-off` aendern
4. **FAQ**: Wrapper in page.tsx um `<Faq />` mit `bg-warm-off` und Padding

Pattern: Weiss → Warm-Off → Weiss → Warm-Off — Sakara/Cure-Rhythmus.

**Betroffene Dateien:**

- `site/app/page.tsx`
- `site/components/Benefits.tsx`
- `site/tailwind.config.ts` (Token aus Schritt 1)

---

### Schritt 6: TrustBand-Component erstellen

Neue Component fuer dezentes Trust-Signal nach dem Hero.

**Aktionen:**

Erstelle `site/components/TrustBand.tsx`:

```tsx
import { FadeIn } from './Motion'

const locations = ['Koh Samui', 'Bangkok', 'Chiang Mai', 'Phuket', 'Hua Hin', 'Koh Phangan']

export default function TrustBand() {
  return (
    <FadeIn>
      <div className="py-10 px-[clamp(24px,5vw,64px)] text-center border-y border-border-warm/50">
        <p className="text-[11px] font-medium tracking-[.18em] uppercase text-ink-faint mb-3">
          Trusted by 150+ wellness locations across Thailand
        </p>
        <p className="text-[13px] font-light text-ink-faint/70">
          {locations.join('  •  ')}
        </p>
      </div>
    </FadeIn>
  )
}
```

In `site/app/page.tsx` nach dem Hero-Spacer und vor #why einfuegen.

**Betroffene Dateien:**

- `site/components/TrustBand.tsx` (neu)
- `site/app/page.tsx`

---

### Schritt 7: Newsletter-Section erstellen

Eigenstaendige, prominente Newsletter-Section vor dem Footer.

**Aktionen:**

Erstelle `site/components/Newsletter.tsx`:

```tsx
import { FadeIn } from './Motion'

export default function Newsletter() {
  return (
    <section className="bg-warm-off py-[clamp(80px,12vw,140px)] px-[clamp(24px,5vw,64px)]">
      <FadeIn className="max-w-[520px] mx-auto text-center">
        <div className="gold-line" />
        <p className="text-[11px] font-medium tracking-[.22em] uppercase text-gold mb-5">
          Stay Connected
        </p>
        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-normal leading-[1.2] text-mineral mb-4 tracking-tight">
          Join the Salt.Magic <em className="italic">community</em>
        </h2>
        <p className="text-[15px] font-light text-ink-light mb-8">
          Wellness tips, product updates, and exclusive offers — delivered to your inbox.
        </p>
        <div className="flex gap-3 max-w-[400px] mx-auto">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Your email"
            className="flex-1 py-3.5 px-5 bg-white border border-border-warm rounded-pill text-[14px] font-light text-ink font-body outline-none placeholder:text-ink-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          />
          <button className="py-3.5 px-7 bg-mineral border-none rounded-pill text-white text-[11px] font-semibold tracking-[.08em] uppercase cursor-pointer font-body hover:bg-mineral-light transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </FadeIn>
    </section>
  )
}
```

In `site/app/page.tsx` nach CtaBanner und vor dem Seitenende einfuegen.

**Betroffene Dateien:**

- `site/components/Newsletter.tsx` (neu)
- `site/app/page.tsx`

---

### Schritt 8: Tertiaer-Button-Stil einfuehren

Neuer `.link-underline` Stil fuer tertiaere Aktionen (z.B. "Learn more" Links in Sections).

**Aktionen:**

In `site/app/globals.css` unter `@layer components` hinzufuegen:

```css
.link-underline {
  @apply text-[13px] font-medium text-mineral underline underline-offset-4 decoration-1 decoration-gold/50 hover:decoration-gold transition-all duration-300;
}
```

Diesen Stil an 1-2 Stellen einsetzen:
- Products-Section: Unter den Produktkarten ein "Compare all formats →" Link
- Story-Section: "Read the full story →" Link am Ende

**Betroffene Dateien:**

- `site/app/globals.css`
- `site/app/page.tsx` (optionale Tertiaer-Links)

---

### Schritt 9: Validierung + Feinschliff

Gesamte Homepage durchgehen und visuell pruefen.

**Aktionen:**

- Dev-Server starten (`cd site && npm run dev`)
- Jeden Section-Uebergang pruefen: Background-Wechsel sauber? Spacings konsistent?
- Headline-Groessen auf Desktop (1440px) und Mobile (375px) pruefen
- AnnouncementBar + Nav-Offset auf allen Seiten testen (Homepage, /blog, /partner)
- Reduced-motion pruefen: Marquee in AnnouncementBar respektiert `prefers-reduced-motion`
- Lighthouse Accessibility-Score pruefen (sollte >90 bleiben)
- sicherstellen, dass keine TypeScript/Build-Fehler auftreten

**Betroffene Dateien:**

- Keine neuen Aenderungen, nur Verifikation

---

### Schritt 10: CLAUDE.md aktualisieren

Workspace-Dokumentation mit V7-Aenderungen aktualisieren.

**Aktionen:**

- Key Changes in V7 Session Block in CLAUDE.md ergaenzen:
  - AnnouncementBar eingebunden
  - Headline-Groessen + font-weight upgrade
  - Eyebrow-Labels durchgehend
  - Alternierende Section-Backgrounds (#F9F7F4)
  - Newsletter-Section + TrustBand Components
  - Tertiaer-Button-Stil
- Background-Farbe `warm-off` in Farb-Palette dokumentieren
- Neue Components listen: Newsletter.tsx, TrustBand.tsx

**Betroffene Dateien:**

- `CLAUDE.md`

---

## Verbindungen & Abhaengigkeiten

### Dateien, die diesen Bereich referenzieren

- `site/app/layout.tsx` — Muss AnnouncementBar importieren
- `site/app/page.tsx` — Zentrale Orchestrierung aller Sections
- `site/components/Nav.tsx` — Offset haengt von AnnouncementBar-Hoehe ab

### Noetige Updates fuer Konsistenz

- Partner-Page (`site/app/partner/page.tsx`): Pruefen ob AnnouncementBar dort auch korrekt angezeigt wird
- Blog-Pages: Gleicher Check
- `outputs/design-spec-v1.md`: Evtl. aktualisieren mit neuem warm-off Token

### Auswirkungen auf bestehende Workflows

- Keine Breaking Changes — alle Aenderungen sind additiv
- Bestehende Components behalten ihre Struktur, bekommen nur zusaetzliche Props/Klassen
- AnnouncementBar war bereits implementiert, wird nur eingebunden

---

## Validierungs-Checkliste

- [ ] `npm run build` laeuft fehlerfrei durch
- [ ] AnnouncementBar sichtbar auf Homepage, /blog, /partner
- [ ] Nav-Offset korrekt: kein Ueberlappen mit AnnouncementBar
- [ ] Headlines groesser und Regular-Weight (nicht mehr Bold)
- [ ] Gold-Lines + Eyebrow-Labels bei allen TextBlock-Sections sichtbar
- [ ] Alternierende Backgrounds: mindestens 3 Sections in #F9F7F4
- [ ] TrustBand nach Hero sichtbar mit Location-Namen
- [ ] Newsletter-Section vor Footer sichtbar mit Input + Button
- [ ] Mobile-Ansicht (375px) pruefen: keine Overflow-Probleme
- [ ] Reduced-motion: AnnouncementBar Marquee stoppt
- [ ] CLAUDE.md mit V7-Aenderungen aktualisiert

---

## Erfolgskriterien

Die Implementierung ist abgeschlossen, wenn:

1. Die Homepage visuellen Rhythmus durch alternating Backgrounds hat (Weiss ↔ Warm-Off)
2. Alle Section-Headlines das Editorial-Format nutzen (groesser, Regular-weight, mit Eyebrow + Gold-Line)
3. AnnouncementBar, TrustBand und Newsletter-Section als neue Premium-Signale sichtbar sind
4. Die Site auf Desktop und Mobile fehlerfrei rendert und der Build sauber durchlaeuft

---

## Notizen

- **Lifestyle-Fotografie (Prio 8)** ist bewusst NICHT in diesem Plan — das ist ein eigener Arbeitsschritt mit nanobanana/AI-Bildgenerierung
- **Cormorant Garamond als Alternative zu Playfair** kann in V8 als A/B-Test evaluiert werden
- **Logo-Trust-Band Upgrade:** Wenn spaeter echte Partner-Logos verfuegbar sind (Pharmacy-Chains, Wellness-Hubs), kann TrustBand auf Grayscale-Logos umgestellt werden
- **Newsletter-Backend:** Muss spaeter mit einem E-Mail-Service (Mailchimp, ConvertKit, Loops) verbunden werden — aktuell nur Frontend-UI

---

## Implementierungsnotizen

**Implementiert:** 2026-03-27

### Zusammenfassung

Alle 10 Schritte des Plans wurden ausgefuehrt. Die Homepage hat jetzt Editorial-Typografie (groessere Regular-weight Headlines), durchgehende Eyebrow-Labels mit Gold-Lines, alternating Section-Backgrounds (Weiss/Warm-Off), ein TrustBand nach dem Hero, eine Newsletter-Section vor dem Footer, und einen neuen Tertiaer-Button-Stil.

### Abweichungen vom Plan

- **Schritt 2 (AnnouncementBar):** War bereits in layout.tsx eingebunden — kein Code-Change noetig, nur Offset-Verifikation
- **Schritt 4 (Comparison Eyebrow):** Eyebrow-Text von "The Difference" auf "How We Compare" geaendert (wie im Plan spezifiziert), Gold-Line hinzugefuegt
- **Schritt 8 (Tertiaer-Links):** Nur 1 statt 2 Tertiaer-Links eingefuegt (Story-Section). Products-Section hat bereits einen prominenten "Shop Now" CTA — ein zusaetzlicher Tertiaer-Link waere redundant
- **Offene Frage 1 (Newsletter-Backend):** Newsletter-Input als UI-Element gerendert fuer spaetere Backend-Integration
- **Offene Frage 2 (TrustBand-Content):** Kombination aus generischer Zahl ("150+ wellness locations") und spezifischen Location-Namen

### Aufgetretene Probleme

Keine

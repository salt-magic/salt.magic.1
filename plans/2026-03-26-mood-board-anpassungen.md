# Plan: Mood-Board Anpassungen — Warme, organische Aesthetik

**Erstellt:** 2026-03-26
**Status:** Implementiert
**Anforderung:** Website optisch naeher an die Mood-Board-Bilder (MarocMaroc, Panpuri, Alo, Botanical) bringen — waermere Toene, organischere Texturen, mehr Gold-Praesenz, botanische Elemente

---

## Ueberblick

### Was dieser Plan erreicht

Die Salt.Magic Website wird von ihrer aktuell kuehlen, mineral-blue-dominierten Aesthetik zu einer waermeren, organischeren Anmutung verschoben — inspiriert von den 10 Mood-Board-Bildern (MarocMaroc Hammam/Strand, Panpuri Natur-Settings, Alo Lifestyle, botanische Illustrationen). Die Brand-Farben bleiben erhalten, aber Balance und Atmosphaere aendern sich.

### Warum das wichtig ist

Die Mood-Board-Bilder kommunizieren "Elevated Natural Luxury" — warmes Licht, natuerliche Materialien, Ruhe und Ritual. Die aktuelle Site ist technisch gut, wirkt aber zu kuehl (reines Weiss, dominantes Mineral Blue, dunkles Hero-Overlay). Die Anpassung bringt die visuelle Sprache naeher an die Brand-Positionierung: Premium-Wellness, nicht Sport-Supplement.

---

## Aktueller Zustand

### Relevante bestehende Struktur

- `site/tailwind.config.ts` — Farbpalette mit 12 Custom Colors
- `site/app/globals.css` — Base-Styles, body background `#FFFFFF`
- `site/app/layout.tsx` — Body-Class `bg-warm-white`
- `site/components/Hero.tsx` — `bg-black/40` Overlay
- `site/components/TextBlock.tsx` — Titel in `text-mineral`
- `site/components/Divider.tsx` — Gold-Linien, transparentes Logo
- `site/components/Products.tsx` — Produktfotos ohne Hintergrund-Behandlung
- `site/components/Ingredients.tsx` — Weisser Hintergrund, keine Textur
- `site/components/Testimonials.tsx` — Weisser Hintergrund
- `site/components/CtaBanner.tsx` — `bg-warm-white` Card, mineral-blue Gradient
- `site/components/Footer.tsx` — Wave-Transition, mineral/footer-dark
- `site/components/Comparison.tsx` — Water-Background in mineral-blue

### Luecken die adressiert werden

1. **`warm-white` ist `#FFFFFF`** — reines Weiss, nicht warm
2. **`cream` ist `#FAF8F5`** — zu subtil, kaum wahrnehmbar
3. **Hero-Overlay `bg-black/40`** — kalt, filmisch, nicht golden/warm
4. **Kein Textur-Element** — alle Sections sind flache Farbflaechen
5. **Gold nur minimal verwendet** — nur in Divider-Lines und Labels
6. **Keine botanischen Elemente** — Mood Board zeigt Kraeuterillustration
7. **Section-Uebergaenge hart** — einfache Spacer-Divs statt organischem Flow
8. **Testimonials/Ingredients ohne Stimmung** — steriler weisser Hintergrund

---

## Vorgeschlagene Aenderungen

### Zusammenfassung der Aenderungen

1. Farbpalette waermer: `warm-white` -> `#F8F5F0`, `cream` -> `#F2EDE6`
2. Body-Background und globals.css aktualisieren
3. Hero-Overlay von kalt-schwarz zu warm-golden Gradient
4. Neue CSS-Klasse `texture-linen` fuer subtile Leinentextur auf Sections
5. Botanische SVG-Illustration als dekoratives Element (Divider-Erweiterung)
6. Gold-Akzent prominenter: Testimonials-Section mit Cream-BG, Ingredients mit warmem BG
7. Waermere Section-Uebergaenge: sanfte Gradient-Fades zwischen Sections
8. CTA-Banner Card mit warmem Schatten und Cream-Hintergrund
9. Product-Karten mit dezenter Sand-Textur

### Zu aendernde Dateien

| Dateipfad | Aenderungen |
|---|---|
| `site/tailwind.config.ts` | `warm-white` -> `#F8F5F0`, `cream` -> `#F2EDE6`, neue Farbe `amber-warm` |
| `site/app/globals.css` | Body-BG `#F8F5F0`, neue `.texture-linen` Klasse, neue `.section-fade` Uebergaenge, botanische SVG Pattern |
| `site/components/Hero.tsx` | Overlay von `bg-black/40` zu warmem Gradient (amber-950/golden), CTA warmeres Styling |
| `site/components/TextBlock.tsx` | Optional `variant="warm"` fuer Cream-Hintergrund-Sections |
| `site/components/Ingredients.tsx` | Cream-Hintergrund mit Leinentextur |
| `site/components/Testimonials.tsx` | Cream-Section-Hintergrund, waermere Quote-Styling |
| `site/components/CtaBanner.tsx` | Waermerer Overlay-Gradient, Card mit Cream-BG |
| `site/components/Products.tsx` | Dezenter warmer Schatten auf Hover |
| `site/components/Divider.tsx` | Optionale botanische SVG-Variante |
| `site/app/page.tsx` | Cream-BG Wrapper um Ingredients und Testimonials Sections |

---

## Design-Entscheidungen

### Getroffene Schluesselentscheidungen

1. **Brand-Farben bleiben identisch**: Mineral Blue, Gold, Ink — kein neuer Akzent. Nur die Basis-Neutraltoene werden waermer.
2. **Subtile Textur statt Flat**: Eine CSS-basierte Leinentextur (SVG noise pattern) auf ausgewaehlten Sections — kein Bild noetig, performant.
3. **Gold wird zur "Mood-Farbe"**: Statt nur Label-Akzent wird Gold/Sand als Section-Hintergrund und Uebergangsfarbe eingesetzt.
4. **Hero bleibt dunkel, aber waermer**: Kein heller Hero (wuerde die Fotos ruinieren), aber der Overlay-Gradient wird von kalt-schwarz zu warm-amber verschoben.
5. **Botanische Elemente dezent**: SVG-Linien-Illustration nur als optionales Divider-Element, nicht ueberall — konsistent mit dem "Luxury through restraint" Prinzip.

### Betrachtete Alternativen

- **Komplett warmer Off-White BG (#F5F0E8)**: Verworfen — zu stark, wuerde Fotos auf hellem Hintergrund kontrastarm machen. `#F8F5F0` ist der richtige Kompromiss.
- **Terracotta als CTA-Farbe (wie Panpuri)**: Verworfen — Leo hat explizit entschieden: kein Terracotta, Brand Colors bleiben.
- **Echte Foto-Texturen als BG**: Verworfen — Performance-Overhead, CSS-basiert ist besser.

---

## Schritt-fuer-Schritt-Aufgaben

### Schritt 1: Farbpalette waermer machen

Tailwind-Config und CSS-Basis aktualisieren.

**Aktionen:**

- In `tailwind.config.ts`: `warm-white` von `#FFFFFF` auf `#F8F5F0` aendern
- In `tailwind.config.ts`: `cream` von `#FAF8F5` auf `#F2EDE6` aendern
- In `tailwind.config.ts`: Neue Farbe `amber-warm: '#FDF8F0'` hinzufuegen (fuer Hero-Overlay-Toene)
- In `globals.css`: Body-Background von `#FFFFFF` auf `#F8F5F0` aendern

**Betroffene Dateien:**

- `site/tailwind.config.ts`
- `site/app/globals.css`

---

### Schritt 2: Leinentextur CSS-Klasse erstellen

Subtile organische Textur als wiederverwendbare Klasse.

**Aktionen:**

- In `globals.css` unter `@layer components` eine neue `.texture-linen` Klasse erstellen
- Verwendet ein SVG-basiertes Noise-Pattern (aehnlich dem Film-Grain im Hero, aber waermer und groeber)
- Opacity sehr niedrig (~0.03-0.04), mix-blend-mode: multiply
- Auch `.bg-cream-textured` Klasse: kombiniert `cream` BG + Leinentextur

```css
.texture-linen {
  position: relative;
}
.texture-linen::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.03;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}
```

**Betroffene Dateien:**

- `site/app/globals.css`

---

### Schritt 3: Hero-Overlay waermer machen

Von kaltem Schwarz zu warmem Golden-Hour-Gradient.

**Aktionen:**

- In `Hero.tsx`: Das `bg-black/40` Overlay ersetzen durch einen CSS-Gradient:
  ```
  background: linear-gradient(
    to bottom,
    rgba(60, 48, 40, 0.35) 0%,
    rgba(30, 25, 20, 0.45) 50%,
    rgba(41, 75, 109, 0.3) 100%
  )
  ```
  Dies verschiebt den Overlay von neutral-schwarz zu warm-braun mit einem Hauch Mineral-Blue am unteren Rand.
- Film-Grain Opacity von `0.035` leicht erhoehen auf `0.04` und Tonung waermer machen

**Betroffene Dateien:**

- `site/components/Hero.tsx`

---

### Schritt 4: Ingredients-Section mit warmem Hintergrund

Statt sterilem Weiss eine Cream-Section mit Textur.

**Aktionen:**

- In `page.tsx`: Die Ingredients-Section in ein `div` mit `bg-cream texture-linen` wrappen
- Volle Breite, grosszuegiges vertikales Padding
- Runde Ecken oben und unten fuer organischeren Look

Konkret in `page.tsx` um den Ingredients-Block:
```tsx
<section className="bg-cream relative texture-linen rounded-[clamp(16px,2vw,32px)] mx-[clamp(8px,1.5vw,24px)] py-[clamp(80px,12vw,160px)]">
  <TextBlock title={<>What&apos;s inside <em>every serving</em></>}>
    ...
  </TextBlock>
  <div className="h-[clamp(80px,10vw,120px)]" />
  <Ingredients />
</section>
```

**Betroffene Dateien:**

- `site/app/page.tsx`

---

### Schritt 5: Testimonials-Section warm gestalten

Zitat-Section mit Cream-Hintergrund und warmerer Typografie.

**Aktionen:**

- In `page.tsx`: Testimonials in einen Cream-BG-Wrapper einbetten (wie Ingredients)
- In `Testimonials.tsx`: Das grosse Anfuehrungszeichen von `text-gold/30` zu `text-gold/40` erhoehen — praesenter
- Optional: dezenter `border-t border-b border-gold/15` fuer Rahmung

**Betroffene Dateien:**

- `site/app/page.tsx`
- `site/components/Testimonials.tsx`

---

### Schritt 6: CtaBanner waermer machen

Card und Overlay an Mood anpassen.

**Aktionen:**

- In `CtaBanner.tsx`: Overlay-Gradient von mineral-blue zu waermerem Mix:
  ```css
  background: linear-gradient(to bottom, rgba(60,48,40,0.15) 0%, rgba(41,75,109,0.25) 100%)
  ```
- Card-Background von `bg-warm-white` belassen (wird ja jetzt `#F8F5F0`)
- Shadow waermer: von `rgba(0,0,0,.08)` zu `rgba(60,48,40,.08)`

**Betroffene Dateien:**

- `site/components/CtaBanner.tsx`

---

### Schritt 7: Section-Uebergaenge mit sanften Fades

Statt harter Spacer-Divs sanfte Gradient-Uebergaenge an strategischen Stellen.

**Aktionen:**

- In `globals.css`: Neue `.section-fade-to-cream` und `.section-fade-from-cream` Klassen:
  ```css
  .section-fade-to-cream {
    background: linear-gradient(to bottom, var(--tw-warm-white, #F8F5F0) 0%, #F2EDE6 100%);
  }
  .section-fade-from-cream {
    background: linear-gradient(to bottom, #F2EDE6 0%, var(--tw-warm-white, #F8F5F0) 100%);
  }
  ```
- In `page.tsx`: Vor/nach Cream-Sections 40-60px hohe Fade-Divs einfuegen

**Betroffene Dateien:**

- `site/app/globals.css`
- `site/app/page.tsx`

---

### Schritt 8: Botanisches SVG-Element erstellen

Dezente Kraeuterillustration als dekoratives Element.

**Aktionen:**

- In `globals.css` oder als inline SVG: Eine minimalistische botanische Linie (inspiriert vom Gemini-Bild) in Gold/Ink-faint
- Neue optionale `variant="botanical"` Prop in `Divider.tsx`:
  - Zeigt anstelle des Logos eine kleine botanische SVG-Illustration (2-3 Kraeuterstengel, Linienstil)
  - Farbe: `text-gold` mit `opacity-40`
  - Groesse: ca. 80px breit, 60px hoch
- Wird sparsam eingesetzt — z.B. einmal zwischen Story und Team

**SVG-Design:** Einfache Liniendarstellung von 3 verschiedenen Kraeutern/Graesern, duenne Striche (strokeWidth 1-1.5), monochrom. Inspiriert vom Gemini-Bild aber vereinfacht fuer Web.

**Betroffene Dateien:**

- `site/components/Divider.tsx`
- `site/app/page.tsx` (ein Divider mit `variant="botanical"` einsetzen)

---

### Schritt 9: Products-Karten warm polieren

Dezente Anpassungen an den Produktkarten.

**Aktionen:**

- In `Products.tsx`: Hover-Shadow von default zu warm:
  ```tsx
  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(60,48,40,0.08)' }}
  ```
- Die Produkt-Bilder mit einem dezenten `rounded-2xl` (statt `rounded-xl`) fuer weicheren Look

**Betroffene Dateien:**

- `site/components/Products.tsx`

---

### Schritt 10: Footer Wave waermer toenen

Der Footer-Uebergang soll weniger abrupt sein.

**Aktionen:**

- In `Footer.tsx`: Die SVG-Wave-Farbe bleibt Mineral Blue (Brand), aber der Bereich darueber (`bg-warm-white`) wird jetzt automatisch waermer da warm-white jetzt `#F8F5F0` ist
- Optional: Einen sanften Gold-Glow ueber die Wave legen: duenner `1px` Gold-Strich entlang des oberen Wave-Rands

**Betroffene Dateien:**

- `site/components/Footer.tsx`

---

### Schritt 11: Validierung und Feintuning

**Aktionen:**

- Dev-Server starten (`cd site && npm run dev`)
- Alle Sections im Browser pruefen:
  - [ ] Warm-White Hintergrund sichtbar waermer als vorher
  - [ ] Hero-Overlay hat goldenen/warmen Charakter
  - [ ] Cream-Sections (Ingredients, Testimonials) heben sich harmonisch ab
  - [ ] Keine Kontrast-Probleme bei Text auf neuen Hintergruenden
  - [ ] Botanisches Divider-Element sichtbar und dezent
  - [ ] CTA-Banner Card fuehlt sich warm an
  - [ ] Footer-Transition fliessend
- Reduced-motion testen
- Mobile-Ansicht pruefen

**Betroffene Dateien:**

- Keine neuen Aenderungen, nur Pruefung

---

## Verbindungen & Abhaengigkeiten

### Dateien die diesen Bereich referenzieren

- Alle Components nutzen Tailwind-Farben aus `tailwind.config.ts`
- `globals.css` wird von `layout.tsx` importiert
- `layout.tsx` setzt `bg-warm-white` auf body — Farbwechsel wirkt global

### Noetige Updates fuer Konsistenz

- `CLAUDE.md` aktualisieren: V4 Mood-Board-Session dokumentieren, neue Farben/Klassen
- `outputs/reference-websites-analysis.md` bleibt unveraendert (ist Analyse, nicht Spec)
- `context/brand-guidelines.md` optional um Mood-Board-Erkenntnisse ergaenzen

### Auswirkungen auf bestehende Workflows

- Keine Breaking Changes — alles sind additive oder subtile Aenderungen
- Bestehende `bg-warm-white` und `bg-cream` Referenzen werden automatisch waermer
- Neue Klassen (`.texture-linen`, `.section-fade-*`) sind optional und backward-compatible

---

## Validierungs-Checkliste

- [ ] `npm run dev` startet ohne Fehler
- [ ] Body-Hintergrund sichtbar waermer als reines Weiss
- [ ] Hero-Overlay hat warmen, golden-hour Charakter
- [ ] Ingredients-Section mit Cream-BG und dezenter Textur
- [ ] Testimonials-Section mit Cream-BG
- [ ] CTA-Banner mit waermerem Schatten/Overlay
- [ ] Botanisches Divider-Element sichtbar
- [ ] Kein Kontrastverlust bei Text (WCAG AA Check)
- [ ] Mobile-Ansicht korrekt
- [ ] Reduced-motion respektiert
- [ ] CLAUDE.md aktualisiert

---

## Erfolgskriterien

1. Die Website fuehlt sich beim Scrollen waermer und organischer an — naeher an den Mood-Board-Bildern
2. Gold/Sand ist als zweite visuelle Kraft neben Mineral Blue spuerbar
3. Mindestens 2 Sections haben organische Textur statt Flat-Color
4. Kein visuelles Downgrade — alles sieht mindestens so hochwertig aus wie vorher
5. Alle bestehenden Accessibility-Features bleiben intakt

---

## Notizen

- Die Aenderungen sind bewusst inkrementell. Wenn das Ergebnis gefaellt, koennen spaeter weitere Mood-Elemente hinzugefuegt werden (z.B. AI-generierte Lifestyle-Fotos mit nanobanana, mehr botanische Illustrationen)
- Die botanische SVG ist handgemacht/inline — kein externer Asset noetig
- Falls die Leinentextur zu stark/schwach wirkt: Opacity ist der einzige Stellhebel (0.02-0.05 Range)

---

## Implementierungsnotizen

**Implementiert:** 2026-03-26

### Zusammenfassung

Alle 11 Schritte ausgefuehrt. Die Website hat jetzt eine sichtbar waermere Basis (#F8F5F0 statt #FFFFFF), warmes Hero-Overlay, Cream-Sections mit Leinentextur fuer Ingredients und Testimonials, ein botanisches SVG-Divider-Element (3 Kraeuterstengel basierend auf dem Gemini Mood-Board-Bild), waermere Schatten/Overlays auf CtaBanner und Products, und einen Gold-Strich an der Footer-Wave. Build erfolgreich ohne Fehler.

### Abweichungen vom Plan

- Schritte 4, 5 und 7 wurden zusammen in page.tsx umgesetzt (effizienter als getrennt, da alle drei dieselbe Datei betreffen)
- Kein separater TextBlock `variant="warm"` Prop erstellt — stattdessen direkt ueber Wrapper-Divs in page.tsx geloest (einfacher, weniger API-Aenderung)

### Aufgetretene Probleme

Keine

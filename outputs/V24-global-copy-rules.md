# V24 — Globale Copy-Regeln (Single Source of Truth)

Aus Leos Feedback (16. April 2026) auf `Salt-Magic-SEO-Copy-Review-V2.docx`. Diese Regeln gelten ab sofort für **jede** Copy-Änderung auf der Website, in Blog-Artikeln, Meta-Tags, JSON-LD, Social-Posts und Partner-Dokumenten.

> **Wichtig:** Bei jedem neuen Copy-Edit diese Liste durchgehen, bevor committet wird.

---

## G1 — Kein "powder"

**Regel:** Das Wort "powder" darf nirgends in der User-facing Copy vorkommen.

**Erlaubte Alternativen:**
- "natural electrolytes"
- "mineral blend"
- "formula" / "hydration formula"
- "natural electrolyte mineralizer"

**Quelle:** Leo zu Hero ("Natural Electrolytes, don't need to say the word 'Powder'"), Comparison ("Remove 'powder'"), Products ("Remove powder"), FAQ (implizit).

**Wo checken:** Hero, Comparison.tsx, Products.tsx, Ingredients.tsx, Faq.tsx, CtaBanner.tsx, Newsletter.tsx, Meta-Tags in layout.tsx, JSON-LD Product-Beschreibungen, Blog-Artikel, Partner-Seite.

---

## G2 — "premium" statt "premier"

**Regel:** Immer "premium", nie "premier".

**Quelle:** Leo zu Section 1 Meta ("We are Thailand's premium (not premier) natural electrolytes").

**Bekannte Fundstellen (Stand V23):**
- `site/app/layout.tsx` — JSON-LD Organization: "Thailand's premier all-natural daily electrolyte mineralizer" → **"Thailand's premium all-natural daily electrolyte mineralizer"**
- `context/business-info.md` Zeile 18: "Thailand's premier all-natural daily electrolyte mineralizer" → **premium**
- Evtl. Hero-Subhead, Meta Description

---

## G3 — Phrase "natural electrolyte power" verboten

**Regel:** Die exakte Phrase "natural electrolyte power" ist verboten. Leo: "Please don't use the phrase".

**Alternative:** "natural electrolytes", "natural electrolyte mineralizer", "natural mineral hydration".

**Hinweis:** Wahrscheinlich ein V23-Keyword-Integration-Artefakt aus dem SEO Cluster "Clean Ingredients & Purity". Bei der Umsetzung ersetzen.

---

## G4 — Keine Wettbewerber-Namen

**Regel:** Kein LMNT, kein Wilder, kein Liquid IV, kein Liquid Death (und keine anderen spezifischen Brand-Namen) in Vergleichen, FAQs oder Copy nennen.

**Quelle:** Leo zu FAQ: "Remove any brand names. I don't want to compete with them."

**Wo checken:**
- `site/components/Faq.tsx` — FAQ "Compare to imported brands"
- `site/components/Comparison.tsx` — falls Brand-Zeilen existieren
- `site/app/partner/page.tsx` + `site/components/CategoryProof.tsx` — nutzt aktuell Liquid IV / LMNT / Liquid Death als "Category Proof"
- Blog-Artikel `site/content/blog/wellness-vs-sports-electrolytes.ts` — prüfen

**Ausnahme TBD:** CategoryProof auf Partner-Seite nutzt Brand-Namen als Unicorn-Proof ("these three all built unicorns"). Leo muss bestätigen, ob das im B2B-Kontext OK ist oder nicht.

---

## G5 — Magnesium ohne "citrate" in Marketing-Copy

**Regel:** In Headlines, Subheads und Marketing-Copy: "most bioavailable magnesium", nicht "most bioavailable magnesium citrate". Der Chemie-Name "Magnesium Citrate 312mg" darf in einer dedizierten Faktenbox / Nutrition-Panel stehen.

**Quelle:** Leo: "The most bioavailable magnesium citrate? Where did this come from? It's probably meant to say the most bioavailable magnesium."

**Wo checken:** `Ingredients.tsx`, `Faq.tsx`, alle SEO-Descriptions.

---

## G6 — Faktum: Serving-Size 3g

**Regel:** Salt.Magic = **3 Gramm pro Serving** (nicht 2g).

**Quelle:** Leo zu Comparison ("It'll be 3 grams moving forward") + FAQ ("3 grams not 2 grams").

**Wo checken:**
- `context/business-info.md` Zeile 34: "Only 2g per serving (vs 10-20g typical)" → **3g**
- `context/current-data.md` — falls erwähnt
- `Comparison.tsx` — Tabellen-Werte
- `Faq.tsx` — Routine-Antwort
- `Ingredients.tsx` — falls Serving-Größe genannt wird
- `site/app/layout.tsx` — JSON-LD nutritionInformation
- Blog-Artikel — Stichprobe

**Begründung zur Marketing-Nachricht:** "Only 3g (vs 10-20g typical)" bleibt ein starker USP, auch wenn +1g größer.

---

## G7 — Faktum: Preise konsistent mit Lazada

**Regel:**
- Glass Jar (70 Servings): **490 THB**
- Travel Sachet (30 Servings): **290 THB**
- Single Sachet (Launch Q1 2026): 9-12 THB (unverändert aus context)

**Quelle:** Leo zu Section 4 Why: "All prices should reflect what's on Lazada. 490 for jars and 290 for sachets."

**Wo checken:**
- `context/business-info.md` Zeile 27-28 (bereits korrekt 490/290 — **validieren**)
- `context/current-data.md`
- `site/components/Products.tsx` — Preis-Labels
- `site/app/layout.tsx` — JSON-LD Product 1 und 2 offers.price
- `site/components/StickyMobileCta.tsx` — falls Preis drin
- Partner-Seite (B2B-Preise weichen ab — nicht verwechseln)

---

## G8 — Kinder-Dosierung: halbe Portion = 1.5g

**Regel:** "Half-serving for children = **1.5g**" (folgt aus G6: 3g ganze Portion → 1.5g halbe).

**Quelle:** Leo zu FAQ "safe for all ages" ("1.5grams will be half a serving").

**Wo checken:** `Faq.tsx` Q8.

---

## G9 — FAQ Routine-Formulierung

**Regel:** Die empfohlene Tages-Routine heißt:
> "Mix 3 grams in 1.5L of water, more or less depending how much you sweat. The more you sweat, the more you need. Stay hydrated!"

NICHT: "1-2 servings per day for optimal hydration" (alte V23-Formulierung).

**Quelle:** Leo zu FAQ Routine-Antwort.

**Wo checken:** `Faq.tsx` Routine-Q, evtl. Hero-Subhead, Blog-Artikel.

---

## G10 — "Magnesium-rich hydration formula" statt "natural pink salt hydration formula"

**Regel:** Die Kern-Positionierung ist eine **magnesium-rich hydration formula** mit wenig Salz — NICHT eine "natural pink salt hydration formula".

**Quelle:** Leo zu FAQ "Just salt water": "It's a magnesium rich hydration formula. We have only a small amount of salt compared to our competitors."

**Wo checken:** FAQ, Formula/Ingredients, Hero-Subhead (falls "pink salt" übergewichtet wird), Meta Description.

**Nuance:** "Pink Himalayan Salt" als Inhaltsstoff bleibt — es geht nur darum, dass das Produkt nicht als Salzprodukt positioniert wird.

---

## Offen (blau/gelb — noch nicht final bestätigt)

### ? FDA approved in Copy

Leo: "We probably need to incorporate FDA approved in copy as well." Das **probably** macht es unverbindlich. Vor Implementierung klären:
- Ist Salt.Magic schon FDA approved oder im Antragsprozess?
- Falls approved: wo überall erwähnen? Hero-Eyebrow, Meta Title, Meta Description, TrustBand, Footer, JSON-LD?
- Falls in process: NICHT in Copy (rechtlich problematisch).

**Aktueller Stand in `context/current-data.md`:** "FDA Approval: In progress — Di-Well finalizing compliant formulation and labeling." → Copy-Erwähnung wäre aktuell noch nicht zulässig.

### ? Brand-Vergleiche auf Partner-Seite (CategoryProof)

G4 verbietet Brand-Namen — aber Partner-Seite nutzt Liquid IV / LMNT / Liquid Death als "Category built unicorns" Beweis. Leo: "Remove any brand names. I don't want to compete with them." — betraf aber FAQ.

**Vor Implementierung klären:** Gilt G4 auch für CategoryProof auf Partner-Seite, oder ist dort Brand-Nennung als Market-Proof OK?

---

## Implementierungs-Checkliste

Bei jedem Copy-Edit in zukünftigen `/implement`-Sessions:

- [ ] G1 — Kein "powder" in neuem Text?
- [ ] G2 — "premium" statt "premier"?
- [ ] G3 — Phrase "natural electrolyte power" vermieden?
- [ ] G4 — Keine Brand-Namen (außer evtl. CategoryProof B2B)?
- [ ] G5 — "magnesium" (nicht "magnesium citrate") in Marketing-Copy?
- [ ] G6 — Serving = 3g (nicht 2g)?
- [ ] G7 — Preise 490/290 THB?
- [ ] G8 — Kinder = 1.5g halbe Portion?
- [ ] G9 — Routine-Formulierung korrekt?
- [ ] G10 — "magnesium-rich" statt "pink salt"-Positionierung?

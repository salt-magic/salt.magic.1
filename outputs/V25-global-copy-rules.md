# V25 — Globale Copy-Regeln (Single Source of Truth)

**Stand:** 16. April 2026 (nach Leos drei Mails: Sodium-Positionierung, Kovic-Formel, Premium Marketing Strategy)
**Ersetzt:** [V24-global-copy-rules.md](V24-global-copy-rules.md) — Regeln G1-G10 bleiben gültig, neue G11-G14 ergänzt

---

## G1 — Kein "powder"

User-facing Copy nutzt **nie** "powder". Erlaubte Alternativen:
- "natural electrolytes" / "natural electrolyte mineralizer"
- "mineral blend" / "mineral salt complex"
- "formula" / "hydration formula"

---

## G2 — "premium" statt "premier"

Immer "premium", nie "premier".

---

## G3 — Phrase "natural electrolyte power" verboten

Alternative: "natural electrolytes", "natural electrolyte mineralizer".

---

## G4 — Keine Wettbewerber-Namen in der Customer-Facing Copy

Kein LMNT, Wilder, Liquid IV, Liquid Death, Salz in FAQ, Hero, Comparison, Products. **Ausnahmen, die geklärt werden müssen:**
- Partner Page CategoryProof (🟡 Q5) — Brand-Namen als Market-Proof; Leo nutzt sie selbst zur Differenzierung in Sales-Pitches
- Comparison-Tabelle nutzt Kategorien ("Sports Drinks", "Coconut Water", "Other Electrolyte Mixes") — nicht Brands

---

## G5 — Magnesium-Wording (präzisiert via Kovic)

**Form:** Trimagnesium Citrate Anhydrous (15% elementares Magnesium)

**Erlaubte Claims:**
- "highly bioavailable form of magnesium"
- "one of the most bioavailable forms of magnesium"
- "Trimagnesium Citrate" (chemische Bezeichnung in Inhaltsstoff-Liste)

**Verboten:**
- "the most bioavailable magnesium" (Superlativ ohne Beleg)
- "magnesium citrate" als Marketing-Claim (zu vage; nutze entweder "Trimagnesium Citrate" technisch oder "magnesium" generisch)

---

## G6 — Faktum: Serving-Size 3g

**3 Gramm pro Serving** — überall.

**Wo checken:**
- `context/business-info.md`, `context/current-data.md`
- `Comparison.tsx` Footnote
- `Faq.tsx` Q2 (Routine)
- `Ingredients.tsx` Body
- `layout.tsx` JSON-LD nutritionInformation
- Blog-Artikel

---

## G7 — Faktum: Preise & Servings (Lazada-konform)

**Glass Jar:** 490 THB / 🟡 **Q1 Servings TBD** (70 oder 46?)
**Travel Sachet:** 290 THB / **20 Servings** (60g ÷ 3g) → 14.5 THB pro Serving
**Single Sachet (Q1 2026 Launch):** 9-12 THB / 1 Serving

---

## G8 — Kinder-Dosierung: halbe Portion = 1.5g

(Folgt aus G6: 3g ganze Portion → 1.5g halbe.)

---

## G9 — FAQ Routine-Formulierung (NEU präzisiert via Mail 3)

> "Add 3 grams (one scoop or one sachet) to **1 to 1.5 liters of water** — more or less depending how much you sweat. It dissolves instantly and is completely flavorless. **Sip all day** rather than gulping it down."

Wichtig: "Sip All Day" ist die offizielle Routine-Philosophie, nicht "drink before/after gym".

---

## G10 — "Magnesium-rich + Potassium-dominant" Positionierung

Mit der Kovic-Formel ist **Potassium quantitativ führend (532mg)**, aber Magnesium liefert den höchsten Daily Value (32%). Konsistente Sprache:

- **Marketing-Headline-Claim:** "magnesium-rich" (Benefit-fokussiert)
- **Faktenliste:** Potassium zuerst nennen (quantitativ), dann Sodium, dann Magnesium
- **Gegen "Just salt water?"-Vorwurf:** Pink Salt ist intentional der **kleinste** Anteil

---

## G11 — NEU: Mineral-Zahlen Kovic-Formel (FDA-konform)

**Pro 3g-Serving:**
- **532mg Potassium** (15% DV) — Potassium Citrate
- **189mg Sodium** (8% DV) — aus Pink Himalayan Salt
- **135mg Magnesium** (32% DV) — Trimagnesium Citrate Anhydrous

**Verboten — alte Werte:**
- 312mg Magnesium (alte Marketing-Zahl, war Magnesium-Citrate-Bruttowert, nicht elementar)
- 160mg Potassium
- 152mg Pink Himalayan Salt

**Wo überall ersetzen:**
- Meta Description, OG, Twitter, JSON-LD Organization, JSON-LD Products, JSON-LD nutritionInformation
- Hero Eyebrow / Body
- WhySection Pull-Quote / Badges
- GEO Key Facts Block (4B)
- Ingredients Section (alle drei Ingredient-Cards)
- Comparison Tabelle
- FAQ Q1, Q3, Q5
- Products Glass Jar Description, Travel Sachet Description
- Partner Page P5 (Bullets), P8 Retail Channel Fit
- `context/business-info.md`, `context/current-data.md`
- Blog-Artikel

---

## G12 — NEU: Sodium-USP (189mg vs 1000mg)

**Differenzierungs-Story:**
> "Most electrolyte mixes pack 1000mg+ sodium per serving — designed for extreme sweat loss. Salt.Magic uses just 189mg, the cardiovascularly responsible amount you can sip all day from morning to night."

**Wo einbauen:**
- Comparison-Tabelle (neue Sodium-Zeile)
- FAQ Q3 (vs imported brands)
- FAQ Q7 (wellness vs sports)
- Ingredient 2 (Sodium-Card im Formula)
- Optional: Hero Secondary Body
- Partner Page P5 Bullets, P8 Boots-Tile

**Verboten:**
- "low-sodium" als alleiniger Claim ohne Kontext (klingt wie Mangel)
- Empfehlungen wie "doctor approved" oder "cardiologist recommended" ohne medizinische Belege

---

## G13 — NEU: Anti-Maltodextrin-Differenzierung (vs Wilder)

**Erlaubter Claim:**
> "Other electrolyte mixes use maltodextrin — a carb filler that can spike glucose. Salt.Magic doesn't. Three ingredients. Zero compromise."

**Verboten:**
- Wilder namentlich nennen (G4)
- "all competitors use maltodextrin" — nur Wilder ist konkret bestätigt

**Wo einbauen:**
- Comparison-Tabelle (neue Filler-Zeile)
- Comparison Verdict "Other Mixes"
- FAQ Q3 (vs imported brands)
- Optional Clean Label Block (4C)

---

## G14 — NEU: "Sip All Day" / Multi-Sachet Lifestyle

Salt.Magic ist designed für **kontinuierliche Hydration über den Tag**, nicht als Recovery-Shot.

**Erlaubte Phrasen:**
- "Sip all day"
- "Built to drink from morning to night"
- "Daily baseline hydration" / "All-day hydration"
- "🟡 Q3 — Multi-sachet hinweis" (Tageslimit von Leo bestätigen lassen)

**Wo einbauen:**
- FAQ Q2 (Routine)
- Hero / Products Body
- Benefits Card "True Hydration", Card "Peak Performance"
- ForEveryone Extended Body

---

## 🟡 Offene Regel — "7x more magnesium" Claim (Q2)

**Status:** Mit Kovic-Formel (135mg elementares Magnesium) ist die alte 7x-Aussage rechnerisch nicht mehr haltbar (vs LMNT ~60mg ≈ 2.25x).

**Drei Optionen für Leo:**
1. **Streichen** — kein Magnesium-Multiplikator mehr, dafür auf Sodium-USP (G12) und DV (32%) shift'en
2. **Umformulieren** — "high-dose bioavailable magnesium", "clinically meaningful magnesium dose"
3. **Neu beziffern** — z.B. "2x more bioavailable magnesium than typical electrolyte mixes" (mit konkreter Quelle)

**Bis Klärung:** Alte 7x-Phrase überall in V25-final-copy als 🟡 Q2 markiert; bei Implementierung Platzhalter setzen.

---

## 🟡 Offene Regel — "Pharmaceutical-grade" Claim (Q7)

**Status:** Leo schlägt "pharmaceutical-grade mineral salt complex" vor (Mail 3). Pharma-Terminologie ohne Pharma-Zulassung kann in TH/EU/US Claim-Verstoß sein.

**Sichere Alternativen:**
- "raw mineral salt complex"
- "clean mineral salt complex"
- "clinically meaningful doses"

**Bis Klärung:** V25-final-copy nutzt "raw mineral salt complex" und "clinically meaningful doses".

---

## Implementierungs-Checkliste

Bei jedem Copy-Edit in `/implement`-Sessions:

- [ ] G1 — Kein "powder"?
- [ ] G2 — "premium" statt "premier"?
- [ ] G3 — Phrase "natural electrolyte power" vermieden?
- [ ] G4 — Keine Brand-Namen außer Partner CategoryProof (Q5)?
- [ ] G5 — Magnesium-Wording: "Trimagnesium Citrate" oder "highly bioavailable magnesium"?
- [ ] G6 — Serving = 3g?
- [ ] G7 — Preise 490/290 + Sachet **20 Servings**?
- [ ] G8 — Kinder = 1.5g?
- [ ] G9 — Routine: 1–1.5L + Sip All Day?
- [ ] G10 — Potassium quantitativ erwähnt, Magnesium als Benefit?
- [ ] G11 — Mineral-Zahlen Kovic (135 / 532 / 189) korrekt?
- [ ] G12 — Sodium-USP (189 vs 1000) erwähnt wo passend?
- [ ] G13 — Maltodextrin nur generisch ("other mixes use"), nie Wilder namentlich?
- [ ] G14 — "Sip All Day" Narrativ in Routine-relevanten Sections?
- [ ] 🟡 Q2 — "7x magnesium" Platzhalter klar markiert?
- [ ] 🟡 Q7 — "pharmaceutical-grade" vermieden, "raw mineral salt complex" verwendet?

# V24 — Leo's Feedback: Live-Site vs. Copy-Review

**Quelle Live-Site:** https://salt-magic-website-v2.vercel.app/ (16. April 2026, Extrakt via WebFetch)
**Quelle Feedback:** `reference/Salt-Magic-SEO-Copy-Review-V2.docx` (Leos inline Notes, 16. April)

---

## Wichtige Erkenntnis vorab

Leo hat auf den **SEO-Vorschlag** im Dokument kommentiert — nicht auf die Live-Site. Viele seiner Kommentare lehnen die SEO-Vorschläge ab. Bei einer Durchsicht gegen die Live-Copy zeigt sich:

- **Bereits live korrekt:** Preise (490/290), kein "powder" in Live-Copy, keine "pink salt morning ritual"-Phrase
- **Muss geändert werden:** Serving 2g→3g (3 Stellen), "premier"→"premium" (1 Stelle), LMNT/Wilder in FAQ-Frage, Kinder 1g→1.5g, FAQ-Routine-Formulierung

---

## Leos 12 Feedback-Notes — Side-by-Side mit Live-Copy

### 1. META / JSON-LD — "premier" → "premium"

**Leo:**
> Please don't use the phrase "natural electrolyte power". We are Thailand's **premium (not premier)** natural electrolytes.

**Live-Copy Check:**
- `site/app/layout.tsx:79` (JSON-LD Organization):
  > "Thailand's **premier** all-natural daily electrolyte mineralizer..." ❌ muss ändern
- `site/app/layout.tsx:108` (JSON-LD Product 1):
  > "**Premium** glass jar with 70 servings..." ✅ bereits korrekt
- Live Hero / Sections: kein "natural electrolyte power" gefunden ✅

**Action:**
- [ ] `site/app/layout.tsx:79` — "premier" → "premium"

---

### 2. META — FDA approved einbauen?

**Leo:**
> We **probably** need to incorporate FDA approved in copy as well.

**Live-Copy Check:** Keine FDA-Erwähnung auf der Live-Site.

**Status:** `context/current-data.md` sagt "FDA Approval: In progress — Di-Well finalizing compliant formulation". Also noch NICHT approved.

**Action:**
- [ ] **Klärung mit Leo:** Ist Salt.Magic bereits FDA approved oder noch im Prozess? Wenn approved: wo erwähnen (Hero-Eyebrow, Meta, TrustBand, Footer)? Wenn noch in Prozess: NICHT in Copy (rechtlich).

---

### 3. HERO — "Powder" raus

**Leo:**
> Natural Electrolytes, don't need to say the word **"Powder"**.

**Live-Copy Check:**
- Hero Live: "Mineralize Your Water, Everywhere." + "Your water is missing what your body needs most." — kein "powder" ✅

**Action:** Keine Änderung in Live-Site nötig. SEO-Vorschlag im Doc enthielt "powder" — wurde von Leo abgelehnt.

---

### 4. PREISE — 490/290 THB laut Lazada

**Leo:**
> All prices should reflect what's on Lazada. **490 for jars and 290 for sachets**.

**Live-Copy Check:**
- Products Live: Glass Jar **490 THB** ✅, Travel Sachet **290 THB** ✅

**Action:** Keine Änderung nötig. Bereits korrekt.

---

### 5. FORMULA / INGREDIENTS — "magnesium" ohne "citrate" als Benefit-Claim

**Leo:**
> The most bioavailable magnesium **citrate**? Where did this come from? It's probably meant to say the **most bioavailable magnesium**.

**Live-Copy Check:**
- Formula Body Live: "highly bioavailable minerals" ✅ (kein "citrate")
- Ingredient-Name Live: "Magnesium Citrate" + Benefit "For deep sleep..." — Inhaltsstoff-Name bleibt (ist der chemische Name)
- FAQ Live Q1: "Magnesium Citrate — the most highly bioavailable **form of magnesium**" ✅ (korrekt formuliert)

**Action:** Keine Änderung in Live-Site nötig. SEO-Vorschlag mit "most bioavailable magnesium citrate" wurde abgelehnt, Live ist OK.

---

### 6. COMPARISON — "Powder" raus

**Leo:**
> Remove "powder"

**Live-Copy Check:**
- Comparison Live: kein "powder" ✅

**Action:** Keine Änderung in Live-Site nötig.

---

### 7. SERVING — 2g → 3g (DREI STELLEN!)

**Leo:**
> It'll be **3 grams** moving forward.

**Live-Copy Check — DREI Fundstellen auf 2g:**

| Stelle | Aktuell | Neu |
|---|---|---|
| Formula Body | "Just **2 grams** of pure, highly bioavailable minerals..." | "Just **3 grams** of pure, highly bioavailable minerals..." |
| Comparison Footnote | "Based on a **2g** serving of Salt.Magic vs typical 16oz servings" | "Based on a **3g** serving of Salt.Magic..." |
| FAQ "How do I use it?" | "Add one scoop (**2g**) or one travel sachet..." | Komplett umformulieren — siehe #10 |

**Action:**
- [ ] `site/components/Ingredients.tsx` oder `site/components/Formula` — 2g → 3g
- [ ] `site/components/Comparison.tsx` — Footnote 2g → 3g
- [ ] `site/components/Faq.tsx` (Q2) — siehe #10

**Nachfolge-Check:** `context/business-info.md` Zeile 34 "Only 2g per serving" → **3g**

---

### 8. PRODUCTS — "Powder" raus

**Leo:**
> Remove powder.

**Live-Copy Check:**
- Products Live: "A beautiful, premium glass jar with a gold lid..." — kein "powder" ✅

**Action:** Keine Änderung in Live-Site nötig.

---

### 9. PRODUCTS — "Pink salt morning drink ritual" Phrase seltsam

**Leo (zum SEO-Vorschlag):**
> "A beautiful glass jar with a gold lid... Inside: Himalayan pink salt electrolyte powder - the cleanest start to your **pink salt morning drink ritual**. Proudly crafted at our Koh Samui hub." **This blurb sounds strange — pink salt morning drink ritual?**

**Live-Copy Check:**
- Products Live Body: "A beautiful, premium glass jar with a gold lid, designed to live on your kitchen counter. Proudly crafted at our Koh Samui hub." — nutzt die "pink salt morning drink ritual"-Phrase **nicht** ✅

**Action:** Keine Änderung in Live-Site nötig. Live-Copy ist besser als der SEO-Vorschlag.

---

### 10. FAQ "How do I use it?" — Neue Routine-Formulierung

**Leo (zum SEO-Vorschlag):**
> The Routine: Most of our users start with a pink salt morning drink and add a second serving in the evening. 1-2 servings per day for optimal hydration. **This doesn't sound correct. Mix 3 grams in 1.5L of water, more or less depending how much you sweat. The more you sweat, the more you need. Stay hydrated!**

**Live-Copy:**
> Q: How do I use it?
> A: "Add one scoop (**2g**) or one travel sachet to any drink. It dissolves instantly and is completely flavorless. The Routine: Most of our users take **1–2 servings per day** (once in the morning, once in the evening)."

**Vorgeschlagene neue Antwort:**
> "Add **3 grams** to 1.5L of water, more or less depending how much you sweat. It dissolves instantly and is completely flavorless. The more you sweat, the more you need. Stay hydrated."

**Action:**
- [ ] `site/components/Faq.tsx` Q2 (Index 1) — Answer komplett ersetzen

---

### 11. FAQ "Just salt?" — Positionierung magnesium-forward

**Leo (zum SEO-Vorschlag):**
> Think of it as a natural pink salt hydration formula, not just salt. No fillers, no additives, nothing artificial. **It's not really a natural pink salt hydration formula. It's a magnesium-rich hydration formula. We have only a small amount of salt compared to our competitors.**

**Live-Copy:**
> Q: Is Salt.Magic just salt?
> A: "No. Pink Himalayan salt makes up just 20% of the blend. The majority (over 50%) is Magnesium Citrate — the most highly bioavailable form of magnesium — and the rest is pure Potassium Citrate. No fillers."

**Einschätzung:** Live-Antwort ist bereits magnesium-forward (Magnesium Citrate 50%, Salz 20%). Könnte noch klarer mit Leos Wording sein.

**Optionale Verfeinerung:**
> "No. Salt.Magic is a **magnesium-rich hydration formula**. Pink Himalayan salt makes up just 20% of the blend, far less than competitors. The majority (over 50%) is Magnesium Citrate — the most highly bioavailable form of magnesium — and the rest is pure Potassium Citrate. No fillers."

**Action:**
- [ ] **Klärung mit Leo:** Live-Antwort reicht, oder mit "magnesium-rich hydration formula" ersetzen?

---

### 12. FAQ — LMNT/Wilder Brand-Namen raus

**Leo:**
> How does it compare to imported brands like LMNT or Wilder? **Remove any brand names. I don't want to compete with them.**

**Live-Copy:**
> Q: "How does it compare to imported brands **like LMNT or Wilder**?" ❌
> A: "We share the same zero-sugar, clean-ingredient philosophy as the premium US brands. The difference? We deliver 7x more magnesium per serving. Crafted locally in Thailand, you pay 7–10 THB per serving instead of the 25–40 THB import markup." ✅ (keine Brand-Namen)

**Vorgeschlagene neue Frage:**
> "How does Salt.Magic compare to imported electrolyte brands?"

**Action:**
- [ ] `site/components/Faq.tsx` Q3 (Index 2) — Frage umformulieren (LMNT/Wilder raus)

---

### 13. FAQ "Safe for children?" — 1g → 1.5g halbe Portion

**Leo:**
> Yes, these are natural minerals safe for all ages. We recommend a half-serving (1g) for children. As always, consult your pediatrician for specific health conditions. **1.5grams will be half a serving.**

**Live-Copy:**
> A: "Yes, these are natural minerals safe for all ages. We recommend a half-serving (**1g**) for children. As always, consult your pediatrician for specific health conditions." ❌

**Action:**
- [ ] `site/components/Faq.tsx` Q4 (Index 3) — "half-serving (1g)" → "half-serving (1.5g)"

---

## Änderungs-Zusammenfassung (Live-Site)

### Muss geändert werden (6 Code-Edits):

1. `site/app/layout.tsx:79` — "premier" → "premium"
2. `site/components/Ingredients.tsx` (Formula Body) — "2 grams" → "3 grams"
3. `site/components/Comparison.tsx` (Footnote) — "2g serving" → "3g serving"
4. `site/components/Faq.tsx` Q2 — Routine-Antwort umschreiben (3g in 1.5L, sweat-based)
5. `site/components/Faq.tsx` Q3 — "LMNT or Wilder" raus, "imported electrolyte brands"
6. `site/components/Faq.tsx` Q4 — "1g" → "1.5g"

### Context aktualisieren:

7. `context/business-info.md` — "2g per serving" → "3g per serving"

### Klärung mit Leo vor Implementierung:

- **FDA approved in Copy:** Status? Wo erwähnen?
- **FAQ Q1 "Just salt?":** Mit "magnesium-rich hydration formula" eröffnen oder Live-Antwort reicht?
- **CategoryProof Partner-Seite (LMNT/Liquid IV/Liquid Death):** Dort auch Brand-Namen raus, oder B2B-Kontext als Markt-Proof OK?

### Nicht zu ändern (SEO-Vorschläge wurden abgelehnt — Live-Copy ist OK):

- "powder"-Wording (Live hat keines)
- "pink salt morning drink ritual" (Live hat diese Phrase nicht)
- Preise (Live hat bereits 490/290)
- "most bioavailable magnesium citrate" (Live formuliert korrekt)

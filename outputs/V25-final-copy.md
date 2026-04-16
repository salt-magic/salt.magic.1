# V25 — Finale Copy für die Live-Site (Kovic-Formel + Premium Marketing)

**Basis:** [V24-final-copy.md](V24-final-copy.md) — komplett überarbeitet mit:
- Neue Formel von Kovic (FDA-konform): 3g Serving, 135mg Mg, 532mg K, 189mg Na
- Sodium-USP (189mg vs Konkurrenz 1000mg)
- Anti-Maltodextrin-Differenzierung (vs Wilder)
- "Water Optimization / Sip All Day" Positionierung
- Clean Label Authority ("Three Ingredients. Zero Compromise.")
- B2B-Pitches: Gourmet Market + Boots
- Travel Sachet: 30 → 20 Servings → 14.5 THB/day

**Status:** Ready-to-implement, mit gelben **🟡 TBD**-Markern für die 8 offenen Klärungspunkte (Q1–Q8 unten).

---

## 🟡 8 Klärungspunkte vor Go-Live (mit Leo)

| # | Frage | Auswirkung wenn ungeklärt |
|---|---|---|
| **Q1** | Glass Jar Servings bei 3g: 70 (Jar größer) oder 46 (Jar gleich)? | Pricing-Narrative (Glass Jar Meta + JSON-LD) |
| **Q2** | "7x more magnesium": streichen, "high-dose bioavailable" oder neu beziffern? | Hero, Meta, GEO Block, Comparison, Benefits — 6 Stellen |
| **Q3** | Multi-Sachet Tageslimit: 1-3, 1-5, unlimitiert? | FAQ Q2 Routine, Multi-Sachet-Lifestyle-Claim |
| **Q4** | Gourmet Market + Boots Pitches: sichtbar auf Partner-Page oder nur intern? | Partner Page Section "Retail Channel Fit" |
| **Q5** | CategoryProof Brand-Namen (Liquid IV / LMNT / Liquid Death): bleiben oder generisch? | Partner CategoryProof Section |
| **Q6** | GEO Key Facts Block: sichtbar oder sr-only? | Section 4B Platzierung |
| **Q7** | "Pharmaceutical-grade mineral salt complex": rechtlich OK? | Clean Label Block Wording |
| **Q8** | Glass Jar "70 days of optimized hydration" Tagline (analog Sachet)? | Glass Jar Meta-Line |

---

## Neue Formel im Überblick (Kovic-spezifiziert)

**Pro 3g-Serving:**
- **532mg Potassium** (15% DV) — als Potassium Citrate
- **189mg Sodium** (8% DV) — aus Pink Himalayan Salt
- **135mg Magnesium** (32% DV) — als **Trimagnesium Citrate Anhydrous** (15% Mg, hoch bioverfügbar)

**Sachet:** 60g = **20 Servings** (vorher 30 bei 2g Serving)
**Glass Jar:** TBD Servings (Q1)

---

# 1. Meta / SEO Tags

**Datei:** `site/app/layout.tsx`

**Title:**
> Salt.Magic | Natural Electrolytes - Thailand

**Meta Description:**
> Salt.Magic is Thailand's premium natural electrolyte mineralizer. Three ingredients: Trimagnesium Citrate, Potassium, and Himalayan Pink Salt. Zero sugar, unflavored, additive free. Buy electrolytes in Thailand.

**OG Description:**
> Natural electrolytes with high-bioavailability magnesium, potassium, and pink Himalayan salt. Zero sugar, zero additives, zero fillers. Thailand's daily mineralizer.

**Twitter Description:**
> Three ingredients. Zero compromise. Thailand's clean daily mineralizer.

**JSON-LD Organization:**
> Thailand's premium natural electrolyte mineralizer and daily mineral supplement. A balanced electrolyte formula with three natural ingredients, zero sugar, zero additives. The best electrolytes in Thailand for daily wellness.

**JSON-LD Product 1 (Glass Jar):**
> Signature Glass Jar — natural electrolyte mineralizer with Trimagnesium Citrate, Potassium Citrate, and Himalayan Pink Salt. Sugar free, flavorless, GMP/HACCP-certified manufacturing. Crafted on Koh Samui. 🟡 Q1: Servings TBD

**JSON-LD Product 2 (Travel Sachet):**
> Travel Sachet — 20 servings of portable natural electrolytes. A sugar-free hydration formula with Trimagnesium Citrate, Potassium Citrate, and Himalayan Pink Salt. GMP/HACCP-certified. Perfect hydration for travel and on-the-go wellness.

**Was geändert ggü. V24:**
- Mineral-Zahlen rausgenommen aus Meta-Strings (zu detailliert für Snippet) — verlagert in JSON-LD nutritionInformation falls vorhanden
- Sachet: 30 → **20 servings**
- "magnesium potassium electrolyte mix" → "Trimagnesium Citrate, Potassium Citrate, Himalayan Pink Salt" (klarer & FDA-präzise)

---

# 2. Announcement Bar

**Datei:** `site/components/AnnouncementBar.tsx`

**Keine Änderung — bleibt:**
> 100% Natural · Zero Sugar · Zero Flavor
> 5 Years Trusted · 90% Retention · 160+ Locations
> Mineralize Your Water, Everywhere.

---

# 3. Hero

**Datei:** `site/components/Hero.tsx`

**Eyebrow:**
> Natural Electrolytes — Mineralize Your Water, Everywhere.

**H1 (Headline):**
> Your water is missing what your body needs most.

**Body:**
> 85% of bottled water in Thailand is "dead water" — purified, but nutritionally empty. One scoop brings it back to life. Three ingredients. Zero compromise. Just minerals your body actually absorbs.

**Optional Secondary Body** (für Mood-Variante; ⚠ wenn Tonic-Phrase):
> A 3g scoop transforms your liter of water into a high-conductivity wellness tonic.

**Primary CTA:** Bring Your Water Back to Life
**Secondary CTA:** Learn More

**Was geändert ggü. V24:**
- Body: "No sugar. No flavor." → "Three ingredients. Zero compromise." (Clean Label Authority)
- Tonic-Phrase als optionale Variante eingefügt (Leo Mail 3)

---

# 4. Why Section (The Problem)

**Datei:** `site/components/WhySection.tsx`

**Eyebrow:** The Problem

**H2:** Your water is missing what your body needs most

**Body 1:**
> 85% of bottled water in Thailand goes through reverse osmosis, stripping away essential natural minerals. The result is "dead water" — purified, but nutritionally empty. When hydration for hot weather matters most, the water you rely on delivers the least.

**Body 2:**
> Your body needs magnesium for energy, recovery, and daily vitality. Without it, true cellular hydration never happens — you lose trace minerals through sweat, air conditioning, and everyday stress, and your body can't replace them from water alone.

**Pull Quote:**
> 50% of people worldwide are magnesium deficient. Your water could be why.

**Badges:** Zero Sugar | 100% Natural | 🟡 Q2 Mg-Claim TBD (war "7x Magnesium")

---

## 4B. GEO Key Facts Block (NEW — empfohlen, 🟡 Q6)

**Platzierung:** Nach WhySection oder nach TrustBand
**Format:** Strukturierter Bullet-Block (sichtbar oder sr-only)

> **Key Facts about Salt.Magic:**
> - 3 natural ingredients per 3g serving: Trimagnesium Citrate (135mg, 32% DV), Potassium Citrate (532mg, 15% DV), Pink Himalayan Salt (189mg Sodium, 8% DV)
> - Zero sugar, zero sweeteners, unflavored
> - 5x less sodium than typical electrolyte mixes (189mg vs 1000mg per serving)
> - 490 THB / 🟡 Q1 servings (Signature Glass Jar) or 290 THB / 20 servings (Travel Sachet)
> - Trusted by 160+ locations across Thailand since 2021
> - Fasting-safe, keto-friendly, suitable for all ages

**Was geändert ggü. V24:**
- Mineral-Zahlen auf Kovic-Werte (135 / 532 / 189)
- Daily Values dazugekommen
- "7x magnesium" → "5x less sodium" (Sodium-USP wird zum Headline-Differentiator)
- Glass Jar Servings TBD

---

## 4C. NEU — Clean Label Authority Block (optional)

**Datei:** Neue Mini-Section oder als Sub-Block in WhySection / Formula

**Eyebrow:** The Difference

**H3:** Three Ingredients. Zero Compromise.

**Body:**
> Most electrolytes hide behind proprietary blends — synthetic flavors, sugar substitutes, maltodextrin fillers. Salt.Magic is a raw mineral salt complex, nothing more. No fillers, no sweeteners, no synthetic anything. What's on the label is exactly what's in the jar.

**Optional CTA:** See the formula

**🟡 Q7 — "raw mineral salt complex"** statt "pharmaceutical-grade mineral salt complex" verwendet (rechtlich sicherer; abhängig von Leos Bestätigung).

---

# 5. The Formula + Ingredients

**Datei:** `site/components/Ingredients.tsx`

**Eyebrow:** The Formula

**H2:** Balanced Electrolyte Formula You Can't Taste

**Body 1:** Everything your water is missing. Nothing you can taste.

**Body 2:**
> Just 3 grams — three natural ingredients in clinically meaningful doses. Trimagnesium Citrate Anhydrous for true bioavailability, Potassium Citrate for natural fluid balance, and Himalayan Pink Salt for essential trace minerals. Dissolves instantly. Completely unflavored. Zero junk.

**Optional Tagline-Phrase (Leo Mail 3):**
> A 3g scoop transforms your liter of water into a high-conductivity wellness tonic.

---

**Ingredient 1 — DOMINANT MINERAL (jetzt Potassium):**
> **532mg — Potassium Citrate (15% DV)** — For sustained energy, muscle cramp relief, and natural fluid balance. Your body's most important everyday electrolyte — depleted by sweat, heat, and stress.

**Ingredient 2:**
> **189mg — Sodium (from Pink Himalayan Salt, 8% DV)** — For complete mineral balance. We use less than a fifth of the sodium typical electrolyte mixes pack into one serving — cardiovascularly responsible hydration that's safe to sip all day.

**Ingredient 3:**
> **135mg — Magnesium (as Trimagnesium Citrate Anhydrous, 32% DV)** — For deep sleep, fast muscle recovery, and calm mental clarity. Trimagnesium Citrate is one of the most bioavailable forms of magnesium — your body absorbs more of every milligram.

**Was geändert ggü. V24:**
- **Ingredient-Reihenfolge umgedreht:** Potassium zuerst (quantitativ führend, 532mg), dann Sodium (mit Sodium-USP), dann Magnesium (mit höchstem DV)
- Mineral-Zahlen auf Kovic-Werte
- "most bioavailable magnesium" → "one of the most bioavailable forms of magnesium" (rechtlich sauberer Claim)
- Sodium-Beschreibung erweitert: USP ("less than a fifth of typical mixes", "safe to sip all day")
- "magnesium potassium mineral blend" → "three natural ingredients in clinically meaningful doses"
- Tonic-Phrase als optionaler Body 3
- 🟡 Q7: "clinically meaningful doses" verwendet (vermeidet "pharmaceutical-grade")

---

# 6. Comparison

**Datei:** `site/components/Comparison.tsx`

**Eyebrow:** How We Compare

**H2:** Clean Hydration, Clear Winner

**Body:**
> Whether you want the best electrolytes for athletes, fasting, or daily wellness in Thailand — here's how we stack up. Maximum minerals. Zero junk. Sodium that's actually safe for daily use.

---

**Vergleichs-Tabelle (NEU mit Sodium-Spalte):**

| | **Salt.Magic** | Sports Drinks | Coconut Water | Other Electrolyte Mixes |
|---|---|---|---|---|
| Sugar | **0g** | 27g+ | 28g | Up to 11g |
| Sodium | **189mg** | 200–500mg | ~30mg | **1000mg+** |
| Magnesium | **135mg** | 0–25mg | ~15mg | 0–50mg |
| Potassium | **532mg** | 50–100mg | ~600mg | 100–300mg |
| Fillers | **None** | Artificial colors & flavors | None | Often Maltodextrin |
| Daily Use | **Yes — sip all day** | Occasional | Sugar limits use | High-sodium limits use |

---

**Verdicts:**

**Salt.Magic:**
> A clean hydration mix you can drink every day. No sweeteners. No artificial anything. No maltodextrin. Cardiovascularly responsible sodium that's safe from morning to night.

**Sports Drinks:**
> High in sugar, low in actual electrolytes. Built for occasional intense workouts, not daily hydration.

**Coconut Water:**
> Natural, but unbalanced. Too much sugar for optimal daily hydration. Not suitable for fasting or keto.

**Other Electrolyte Mixes:**
> Heavy sodium loads (often 1000mg+ per serving) make them unsuitable as a daily drink. Many use maltodextrin — a carb filler that can spike glucose. Read the label.

**Footnote:**
> Based on a 3g serving of Salt.Magic vs typical 16oz servings.

**Was geändert ggü. V24:**
- **Neue Sodium-Zeile** in Vergleichstabelle (USP)
- **Neue Maltodextrin-Zeile** (anti-Wilder)
- **Daily-Use-Zeile** als finale Differenzierung
- Verdict "Other Mixes" konkretisiert (Sodium-Load + Maltodextrin)
- Footnote 2g → 3g
- Salt.Magic-Verdict um "cardiovascularly responsible sodium" erweitert

---

# 7. Benefits (6 Cards)

**Datei:** `site/components/Benefits.tsx`

**Eyebrow:** Daily Benefits

**H2:** Feel the Difference

**Body:** What happens when your water actually works.

**Card 1 — True Hydration:**
> Stop flushing water straight through your system. Real cellular hydration means your body absorbs every drop — not just passes it through. Sip one liter from morning to night for steady, all-day balance.

**Card 2 — Deeper Sleep:**
> Magnesium is nature's relaxant. Ease muscle tension, calm your nervous system, and wake up restored.

**Card 3 — Sustained Focus:**
> Clear the brain fog. Keep your mind sharp and your concentration steady without the caffeine crash.

**Card 4 — Travel & Heat Recovery:**
> Tropical heat, long flights, running empty — your body loses electrolytes faster than you replace them. The hydration for hot weather and travel you actually need.

**Card 5 — Peak Performance:**
> Push harder and recover faster. Maintain your energy and prevent muscle cramps before, during, and after training. A second serving on heavy-sweat days has you covered.

**Card 6 — Natural Hangover Defense:**
> Woke up wrecked? Alcohol strips magnesium, potassium, and sodium overnight. Salt.Magic restores the exact minerals you lost — fast, natural recovery.

**Was geändert ggü. V24:**
- Card 1: "Sip All Day" Hinweis ergänzt
- Card 5: Multi-Sachet-Hinweis ("A second serving on heavy-sweat days") 🟡 Q3 — Tageslimit präzisieren

---

# 8. For Everyone

**Datei:** `site/components/ForEveryone.tsx`

**Eyebrow:** For Everyone

**H2:** Not a Sports Drink. A Daily Essential.

**Body:** Pure hydration for daily life, not just game day.

**Extended Body:**
> Most electrolytes are packed with sugar — or so much sodium they're unsafe to drink more than once. Salt.Magic is different. Whether you're intermittent fasting, training Muay Thai in the tropical heat, heavy sweating through hot yoga, or simply navigating a busy workday, your body burns through minerals every single day. One clean, invisible formula for all of it — built to sip all day, every day.

**The Old Way (Sports Drinks):**
> Occasional use (3–5x a week) | Built for intense workouts | Loaded with sugar & artificial colors

**The Salt.Magic Way:**
> Daily essential (365 days a year) | Built for anyone who drinks water | Pure, invisible, cardiovascularly responsible minerals

**Was geändert ggü. V24:**
- Extended Body: Sodium-USP indirekt eingearbeitet ("so much sodium they're unsafe to drink more than once") + "built to sip all day"
- Salt.Magic Way: "natural minerals" → "cardiovascularly responsible minerals"

---

# 9. Products

**Datei:** `site/components/Products.tsx`

**Eyebrow:** Shop Salt.Magic

**H2:** Ready to Try Natural Electrolytes?

**Body:**
> Choose your daily ritual. Your natural electrolyte mineralizer in Thailand — built to sip all day, every day.

**Badges:** Zero Sugar | 100% Natural | 🟡 Q2 Mg-Claim TBD

---

**Product 1 — The Signature Glass Jar**

- **Tag:** Best Value | 490 THB
- **Meta:** 🟡 **Q1 + Q8 TBD** — Vorschlag wenn 70 Servings: "Over 2 months of daily hydration (70 servings) — Just 7 THB per day · 70 days of optimized hydration"; wenn 46 Servings: "Over 6 weeks of daily hydration (46 servings) — Just 10.7 THB per day"
- **Description:**
  > A beautiful, premium glass jar with a gold lid, designed to live on your kitchen counter. Inside: a clean mineral salt complex that brings your water back to life. Three ingredients. Zero compromise. Proudly crafted at our Koh Samui hub.
- **Badge:** Eco-friendly & reusable
- **CTA:** Shop on Lazada

---

**Product 2 — The Travel Sachet**

- **Tag:** Most Popular | 290 THB
- **Meta:** **One sachet, 20 days of optimized hydration** — Just 14.5 THB per day. Your portable daily ritual.
- **Description:**
  > Your daily minerals, perfectly portable. An unflavored mineral blend in a resealable, GMP/HACCP-certified pouch — built for the gym bag, office drawer, or long flights. Drop one scoop in any liter of water and sip all day, anywhere life takes you.
- **Badge:** Lightweight & travel-ready
- **CTA:** Shop on Lazada

**Was geändert ggü. V24:**
- Travel Sachet: 30 → **20 servings**, 9.6 → **14.5 THB per day**
- Travel Sachet: Neue Tagline "**One sachet, 20 days of optimized hydration**" (Leo Mail 3)
- Travel Sachet Description: "hydration packets for flying" → "sip all day, anywhere life takes you" (Sip-All-Day-Narrativ)
- Glass Jar: "magnesium-rich mineral blend" → "clean mineral salt complex" + "Three ingredients. Zero compromise." (Clean Label)
- H2 Body: "less than the cost of your morning coffee" → "built to sip all day" (neuer Brand-Hook)

---

# 10. Testimonials

**Datei:** `site/components/Testimonials.tsx`

**Keine Änderung — Original-Zitate von Kunden bleiben unverändert.**

---

# 11. Story Section

**Datei:** `site/components/StorySection.tsx`

**Keine Änderung gegenüber Live — bleibt als E-A-T Founder-Story unverändert.**

---

# 12. FAQ (7 + 3 NEW)

**Datei:** `site/components/Faq.tsx`

**Eyebrow:** Questions

**H2:** Got Questions? Let's clear the water.

---

**Q1: Is Salt.Magic just salt?**

**A1:**
> No — quite the opposite. Salt.Magic is a magnesium- and potassium-rich mineral formula. Pink Himalayan Salt is intentionally the smallest portion (just 189mg sodium per 3g serving — about a fifth of what typical electrolyte mixes pack in). The bulk of the formula is Potassium Citrate (532mg) and Trimagnesium Citrate (135mg). Three ingredients. No fillers, no additives, nothing artificial.

---

**Q2: How do I use it?**

**A2:**
> Add 3 grams (one scoop or one sachet) to **1 to 1.5 liters of water** — more or less depending how much you sweat. It dissolves instantly and is completely flavorless. **Sip all day** rather than gulping it down. The more you sweat, the more you need. 🟡 **Q3 TBD** — Multi-sachet hinweis: "Many of our customers add a second serving on heavy-sweat or long-travel days" (Tageslimit von Leo bestätigen lassen).

---

**Q3: How does Salt.Magic compare to imported electrolyte brands?**

**A3:**
> We share the same zero-sugar, clean-ingredient philosophy as the premium imported brands — but with two important differences. First, our sodium load is roughly a fifth of theirs (189mg vs 1000mg+ per serving), which makes Salt.Magic safe to sip all day rather than as a one-shot recovery drink. Second, you'll never find maltodextrin or other carb fillers in our formula. Crafted locally in Thailand, you also pay 7–14 THB per serving instead of the 25–40 THB import markup.

---

**Q4: Is it safe for children?**

**A4:**
> Yes, these are natural minerals safe for all ages. We recommend a half-serving (**1.5g**) for children. As always, consult your pediatrician for specific health conditions.

---

**Q5: Where can I buy electrolytes in Thailand?**

**A5:**
> You can buy Salt.Magic on Lazada for nationwide delivery, or find us in 160+ locations across Thailand — including Bangkok, Phuket, Koh Samui, Chiang Mai, Hua Hin, Pattaya, and Krabi. The best electrolytes in Thailand, available wherever you are.

---

**Q6: Why do you say 85% of Thai water is "dead water"?**

**A6:**
> Most bottled water in Thailand is filtered using reverse osmosis. This removes bacteria, but it also strips away all the natural minerals. The result is ultra-pure but nutritionally empty water. It hydrates you, but lacks the electrolytes your body needs for proper cellular hydration. Salt.Magic puts those minerals back — restoring filtered water to a natural spring water profile.

---

**Q7: What's the difference between "wellness" and "sports" electrolytes?**

**A7:**
> Sports drinks are built for occasional, high-intensity use (3–5 times a week) and are usually packed with sugar, flavors, and a heavy sodium dump designed for extreme sweat loss. Salt.Magic is the opposite: a daily wellness essential — pure, invisible minerals at safe daily doses, meant to be added to your water 365 days a year. Think water optimization, not sports recovery.

---

**Q8 (NEW): Does Salt.Magic break a fast?**

**A8:**
> No. Salt.Magic has zero calories, zero sugar, and zero sweeteners, so it will not break your fast or trigger an insulin response. Many of our customers use it as their daily fasting electrolyte — it dissolves without flavor and keeps headaches, fatigue, and cramps at bay during intermittent or extended fasts. Fasting-safe and keto-friendly by design.

---

**Q9 (NEW): Can I take Salt.Magic while traveling or flying?**

**A9:**
> Absolutely. Our Travel Sachet was designed as portable natural electrolytes for travel. Flights and tropical heat deplete your minerals rapidly. Drop a sachet in your water bottle before boarding and sip throughout the flight — gentle, low-sodium hydration that keeps you balanced across time zones.

---

**Q10 (NEW): Is Salt.Magic good for hangover recovery?**

**A10:**
> Yes. Alcohol is a powerful diuretic that strips your body of essential minerals — especially magnesium, potassium, and sodium. Salt.Magic restores the exact minerals alcohol depletes. Take one serving before bed and one in the morning for the fastest recovery.

**Was geändert ggü. V24:**
- **Q1 komplett neu:** Magnesium-Verhältnisse stimmen mit Kovic-Formel (Pink Salt = 6%, Potassium dominant), Sodium-USP integriert
- **Q2 komplett neu:** "Sip All Day" + 1–1.5L Range + Multi-Sachet-Hinweis (Q3 TBD)
- **Q3:** Sodium-USP + Maltodextrin-Differenzierung; Preis-Range erweitert (7–14 statt 7–10 THB wegen neuer Sachet-Servings)
- **Q4:** unverändert (1.5g Kinder bleibt)
- **Q5:** unverändert
- **Q6:** Schluss erweitert "natural spring water profile" (Leo Mail 1)
- **Q7:** "heavy sodium dump" + "water optimization" (neue Positionierung)
- **Q9:** "low-sodium hydration" Hinweis (Cardiovascularly responsible)
- **Q10:** Schluss-Phrase über cellular hydration entfernt (war redundant)

---

# 13. CTA Banner

**Datei:** `site/components/CtaBanner.tsx`

**Eyebrow:** Start Today

**H2:** Bring Your Water Back to Life

**Body:**
> Three ingredients. Zero compromise. Thousands across Thailand sip this clean mineral formula every day — and never go back.

**CTA:** Shop Salt.Magic on Lazada

**Was geändert ggü. V24:**
- "drink this clean electrolyte blend for daily wellness" → "sip this clean mineral formula every day" (Sip-All-Day-Echo)
- "Three ingredients. Zero compromise." war schon im V24 — bleibt als Brand-Statement.

---

# 14. Newsletter

**Datei:** `site/components/Newsletter.tsx`

**Eyebrow:** Stay Connected

**H2:** Join the Natural Hydration Ritual

**Body:**
> Drop your email for wellness tips, hydration science, and member-only offers. No spam, no fluff, just what works.

**Badge:** Get our free Mineral Guide + 10% off your first order

**CTA:** Unlock 10% Off

**Keine Änderung ggü. V24.**

---

# 15. Footer

**Datei:** `site/components/Footer.tsx`

**Tagline:** Clean Electrolytes. Naturally Powerful.
**Tagline Desktop:** No sugar. No flavors. No waste.
**Navigate:** About | Products | Our Story | Blog | Partner With Us
**Connect:** leo@salt-magic.com | +66 826 020 486 | @saltmagic.electrolytes
**Copyright:** Made on Koh Samui, Thailand

**Keine Änderung ggü. V24.**

---

# PARTNER PAGE

**Datei:** `site/app/partner/page.tsx` + Components

## P1. Partner Page Meta Tags

**Title:**
> Electrolyte Distribution Thailand | Partner With Salt.Magic

**Meta Description:**
> Distribute Thailand's fastest-growing premium electrolyte brand. 35–40% retailer margins, 90% customer retention, 160+ locations. A daily wellness essential — not a once-a-week sports drink.

---

## P2. Partner Hero

**Eyebrow:** Distribution Partnership

**H1:** Capture the Next Wave of Wellness

**Body:**
> The global electrolyte market is exploding — but the Thai market is wide open for a premium daily wellness brand. Partner with Thailand's first 365-day mineralizer and claim your first-mover advantage as a wellness distributor in the country's fastest-growing health category.

**CTAs:** Contact Us | Download Pitch Deck

**Stats:** 90% Customer Retention | 35–40% Retailer Margins | 160+ Locations | 5 Yrs Proven Track Record

---

## P3. Market Opportunity

**Eyebrow:** The Opportunity

**H2:** APAC is 5–7 years behind the USA

**Body:**
> The US hydration product market is already an $11.3B industry dominated by daily wellness brands. Asia-Pacific is at $3.0B — surging with 44% projected growth. Thailand's hydration market is sitting exactly where the US was 7 years ago.

**Callout:**
> 85% of Thai bottled water is filtered, not mineralized. The market is wide open for a clean hydration brand.

**USA:** $11.3B (2023) → $21.3B projected by 2034 (88% growth)
**APAC:** $3.0B (2023) → $4.3B projected by 2030 (44% growth)

**Closing:** The wave is coming.

---

## P4. Category Proof — 🟡 Q5 Klärung

**Eyebrow:** Category Proof

**H2:** Clean hydration builds unicorns.

**Body:**
> The biggest wellness brands of the last decade started exactly where Salt.Magic is now. Clean electrolytes are creating an entirely new, highly lucrative retail category.

**🟡 Q5 — Brand-Namen Variante (aktuell live):**
> Liquid IV — $500M+ (Acquired by Unilever) | LMNT — 8-figure revenue (Dominating DTC and retail) | Liquid Death — $1.4B (100K+ retail stores)

**🟡 Q5 — Generische Variante (falls Leo Brand-Namen raus will):**
> A US wellness brand was acquired for $500M+ by a major FMCG conglomerate. A direct-to-consumer electrolyte brand built 8-figure revenue without a single supermarket. A clean-water beverage company crossed $1.4B with 100,000+ retail listings. The category is creating unicorns. Salt.Magic is positioned to lead it in APAC.

---

## P5. Why Distribute Salt.Magic

**Eyebrow:** Why Distribute

**H2:** Why distribute Salt.Magic?

**Body:**
> Bring Thailand's first sugar-free, flavorless daily electrolyte mineralizer to your customers. A wellness brand partnership with built-in demand and a daily-use product that drives repeat sales.

**Bullets:**
- 35–40% retailer margins — among the highest in the health product category
- 90% customer retention across 160+ partner locations — a product that sells itself
- Cardiovascularly responsible sodium (189mg) — safe for daily, all-day use
- Three ingredients. Zero compromise. Zero sugar. Zero plastic waste.

**CTA:** Become a Distribution Partner

**Was geändert ggü. V24:**
- "7x more magnesium" Bullet entfernt (🟡 Q2)
- Neuer Bullet: Sodium-USP als B2B-Argument
- "Three ingredients. Zero compromise." als Brand-Statement

---

## P6. Revenue Comparison

**Eyebrow:** The Revenue Difference

**H2:** The Bottom Line: 4.4x More Revenue

**Body:**
> We aren't selling an occasional sports recovery drink. We are selling a 365-day habit. Daily wellness positioning isn't just better for your customers — it's significantly better for your bottom line.

**Wellness / Salt.Magic:** 365 days/year | Monthly purchase | 4,200 THB LTV | 90% retention
**Fitness / Traditional:** 3–5 days/week | Irregular purchase | 800 THB LTV | 25–35% retention

**Keine Änderung ggü. V24.**

---

## P7. Partner Contact Form

**Eyebrow:** Get In Touch

**H2:** Become an electrolyte distribution partner in Thailand

**Body:** We'll respond within 48 hours.

**Fields:** Name | Company | Role | Email | Message

**CTA:** Become a Distribution Partner

---

## P8. NEU — Retail Channel Fit (🟡 Q4 Klärung)

**Wenn Leo bestätigt, dass diese B2B-Pitches sichtbar auf der Partner-Seite landen sollen, kommt diese Section neu hinzu:**

**Eyebrow:** Retail Channel Fit

**H2:** Built for premium retail.

**Intro:**
> Salt.Magic is positioned at the intersection of culinary excellence and clinical wellness — a fit for premium grocers and pharmacy chains alike.

---

**Tile 1 — For Premium Grocers (Gourmet Market & similar):**
> The modern epicurean cares about the quality of their water as much as their food. Salt.Magic isn't a post-gym recovery powder — it's a daily water enhancer built around hand-mined Himalayan Pink Salt and essential cellular salts. A culinary-grade hydration product that earns shelf space next to your finest pantry brands.

**Tile 2 — For Pharmacy Chains (Boots & similar):**
> Most electrolytes carry dangerously high sodium loads for the average daily consumer. Salt.Magic delivers therapeutic doses of highly bioavailable Trimagnesium Citrate (135mg) and Potassium Citrate (532mg) for nervous system support and muscle recovery — without the sodium spike. The cardiovascularly responsible choice for the wellness-from-within demographic.

**Layout-Vorschlag:** 2-Spalten Tile-Grid, dunkler Background, gold-akzentuierte Eyebrows pro Tile.

**🟡 Q4:** Wenn Leo entscheidet "nur intern als Sales-Script", entfällt diese Section.

---

# APPENDIX: Blog Topics für unbenutzte Keywords

**Datei:** `site/content/blog/*.ts` (5 neue Artikel — unverändert ggü. V24)

| # | Titel | Keyword-Cluster |
|---|---|---|
| 1 | The Best Electrolytes for Muay Thai Training in Thailand | muay thai hydration, training hydration mix, electrolytes for heavy sweaters |
| 2 | Why Fasting Without Electrolytes is a Mistake | electrolytes for fasting, fasting salt water drink, keto hydration, intermittent fasting |
| 3 | Electrolytes for Hot Yoga: What Your Instructor Won't Tell You | hot yoga electrolytes, hydration for hot weather, natural rehydration salts, muscle cramp relief |
| 4 | Natural Hangover Recovery: The Science Behind Mineral Rehydration | natural hangover recovery, food poisoning hydration, cellular hydration |
| 5 | The Complete Guide to Natural Hydration for Travel | travel electrolytes, hydration packets for flying, travel supplements, fluid balance |

**Wichtig:** Alle Blog-Artikel müssen ebenfalls die neuen Mineral-Zahlen + Sodium-USP + Sip-All-Day-Narrativ einarbeiten.

---

# Implementierungs-Reihenfolge (Vorschlag)

1. **Klärungs-Sweep mit Leo** (vor Code-Edits): Q1, Q2, Q3 zuerst (zahlen-kritisch); Q4–Q8 nachgelagert
2. **Globale Code-Edits** (10 Min): `layout.tsx` JSON-LD mit neuen Mineralien + Sachet-20-Servings
3. **Faktum-Updates** (20 Min): Ingredients (Mineral-Reihenfolge umdrehen + neue Werte), Comparison (neue Tabelle mit Sodium + Maltodextrin), FAQ Q1/Q2/Q3
4. **Copy-Sweeps** (60 Min): Alle 13 Sections der Homepage durch — eine Section pro Component, mit Sip-All-Day-Echos
5. **Partner Page** (30 Min): Sections P1–P7 (P4 nach Q5-Klärung, P8 nach Q4-Klärung)
6. **Optional Sections:** 4B GEO Block (Q6), 4C Clean Label (Q7), P8 Retail Fit (Q4) — nach Klärung
7. **Lokal testen:** `cd site && npm run dev` — alle Sections durchklicken
8. **Push v2 main**

**Gesamtaufwand für Homepage + Partner:** ~2.5 Stunden konzentrierte Arbeit nach Klärungs-Sweep.

# V24 — Finale Copy für die Live-Site

**Basis:** SEO-optimierte SUGGESTED COPY aus `Salt-Magic-SEO-Copy-Review-V2.docx`
**Filter:** Leos inline Annotationen (16. April 2026) eingearbeitet
**Status:** Ready-to-implement — pro Section direkt in Components einsetzbar

---

## Globale Filter, die überall angewendet wurden

| Regel | Was geändert wurde |
|---|---|
| G1 — Kein "powder" | `natural electrolyte powder` → `natural electrolytes` / `natural electrolyte mineralizer` |
| G2 — "premium" statt "premier" | Überall ersetzt |
| G3 — Phrase verboten | `natural electrolyte power` (im SEO-Vorschlag) komplett raus |
| G6 — Serving 3g | `2 grams` / `2g` → `3 grams` / `3g` |
| G5 — Magnesium ohne "citrate" als Claim | `most bioavailable magnesium citrate` → `most bioavailable magnesium` |
| G4 — Keine Brand-Namen | LMNT, Wilder aus FAQ raus (Partner CategoryProof: ⚠ Klärung) |
| G8 — Kinder = 1.5g | "half-serving (1g)" → "(1.5g)" |
| G10 — magnesium-rich Positionierung | FAQ Q1 mit "magnesium-rich hydration formula" eröffnet |
| Pink salt morning drink ritual | Phrase aus Products entfernt |

---

## ⚠️ Offene Klärungspunkte mit Leo (vor Go-Live)

1. **FDA approved** in Copy einbauen — aktuell `context/current-data.md`: "FDA Approval: In progress". Falls noch nicht approved: NICHT erwähnen (rechtlich). Falls approved: Wo? Hero-Eyebrow? Meta? TrustBand?
2. **Partner CategoryProof:** LMNT / Liquid IV / Liquid Death namentlich nennen ist B2B-Markt-Proof. Leos "no brand names"-Regel galt FAQ. Hier auch raus oder OK?
3. **GEO Key Facts Block:** Soll als sichtbare Section unter Hero rein, oder nur als sr-only structured data?

---

# 1. Meta / SEO Tags

**Datei:** `site/app/layout.tsx`

**Title:**
> Salt.Magic | Natural Electrolytes - Thailand

**Meta Description:**
> Salt.Magic is Thailand's premium natural electrolyte mineralizer. 312mg magnesium, potassium, and Himalayan pink salt. Zero sugar, unflavored, additive free. Buy electrolytes in Thailand.

**OG Description:**
> Natural electrolytes with 312mg magnesium, potassium, and pink Himalayan salt. Zero sugar, zero additives. Thailand's trusted daily electrolyte supplement.

**Twitter Description:**
> Natural electrolytes - 312mg magnesium, zero sugar, unflavored. Thailand's clean hydration mix.

**JSON-LD Organization:**
> Thailand's premium natural electrolyte mineralizer and daily mineral supplement. A balanced electrolyte formula with three natural ingredients, zero sugar, zero additives. The best electrolytes in Thailand for daily wellness.

**JSON-LD Product 1 (Glass Jar):**
> Signature Glass Jar — 70 servings of natural electrolytes with Himalayan pink salt. A magnesium potassium electrolyte mix with 312mg magnesium, sugar free, flavorless. Crafted on Koh Samui.

**JSON-LD Product 2 (Travel Sachet):**
> Travel Sachet — 30 servings of portable natural electrolytes for travel. A sugar free hydration formula with 312mg magnesium, GMP/HACCP certified. Perfect hydration packets for flying and on-the-go wellness.

**Was geändert wurde gegenüber SUGGESTED:**
- "Natural Electrolyte Powder" → "Natural Electrolytes" (Title)
- "premier" → "premium" (JSON-LD Org)
- "powder" durchgängig raus
- "magnesium citrate" → "magnesium" (Product JSON-LD)

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
> 85% of bottled water in Thailand is "dead water" — purified, but nutritionally empty. One scoop brings it back to life. No sugar. No flavor. Just minerals your body actually absorbs.

**Primary CTA:** Bring Your Water Back to Life
**Secondary CTA:** Learn More

**Was geändert:**
- "One scoop of pure hydration powder" → "One scoop" (powder raus)
- Eyebrow "Natural Electrolyte Powder" → "Natural Electrolytes"

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

**Badges:** Zero Sugar | 100% Natural | 7x Magnesium

---

## 4B. GEO Key Facts Block (NEW — empfohlen, ⚠ Klärung mit Leo)

**Platzierung:** Nach WhySection oder nach TrustBand
**Format:** Strukturierter Bullet-Block (sichtbar oder sr-only)

> **Key Facts about Salt.Magic:**
> - 3 natural ingredients: Magnesium (312mg), Potassium (160mg), Pink Himalayan Salt (152mg)
> - Zero sugar, zero sweeteners, unflavored
> - 7x more magnesium than leading competitors
> - 490 THB / 70 servings (Signature Glass Jar) or 290 THB / 30 servings (Travel Sachet)
> - Trusted by 160+ locations across Thailand since 2021
> - Fasting-safe, keto-friendly, suitable for all ages

**Was geändert:**
- "unflavored electrolyte powder" → "unflavored"
- Magnesium-Wording ohne "citrate"
- Preise bestätigt (Lazada-konform)

---

# 5. The Formula + Ingredients

**Datei:** `site/components/Ingredients.tsx`

**Eyebrow:** The Formula

**H2:** Balanced Electrolyte Formula You Can't Taste

**Body 1:** Everything your water is missing. Nothing you can taste.

**Body 2:**
> Just 3 grams — a balanced formula of magnesium, potassium, and Himalayan pink salt. This magnesium potassium mineral blend dissolves instantly, is completely unflavored and additive free, and delivers 7x more magnesium than leading competitors. Three natural ingredients. Zero junk.

**Ingredient 1:**
> **312mg — Magnesium Citrate** — For deep sleep, fast muscle recovery, and calm mental clarity. The most bioavailable form of magnesium your body can absorb.

**Ingredient 2:**
> **160mg — Potassium Citrate** — For sustained energy, muscle cramp relief, and natural fluid balance. A potassium-rich mineral your body depletes every day.

**Ingredient 3:**
> **152mg — Pink Himalayan Salt** — For complete balance, delivering essential sodium and 84 vital trace minerals. Natural rehydration salts your body recognizes instantly.

**Was geändert:**
- "Just 2 grams" → "Just **3 grams**"
- "magnesium potassium electrolyte mix" → "magnesium potassium mineral blend" (powder-Vermeidung)
- Ingredient 1 Benefit: "The most bioavailable form of magnesium citrate" → "The most bioavailable form of magnesium your body can absorb" (Leos Korrektur)

---

# 6. Comparison

**Datei:** `site/components/Comparison.tsx`

**Eyebrow:** How We Compare

**H2:** Clean Hydration, Clear Winner

**Body:**
> Whether you want the best electrolytes for athletes, fasting, or daily wellness in Thailand — here's how we stack up. Maximum minerals. Zero junk.

**Salt.Magic Row:**
> 0g sugar | 312mg magnesium | 3 natural minerals | Zero calories
>
> **Verdict:** A clean hydration mix you can take every day. No sweeteners. No artificial anything. Additive free — the way electrolytes should be.

**Sports Drinks Row:**
> 27g+ added sugar | 0–25mg magnesium | Artificial colors & flavors
>
> **Verdict:** High in sugar, low in actual electrolytes. Not a healthy daily choice.

**Coconut Water Row:**
> 28g sugar | ~15mg magnesium | Natural, but unbalanced
>
> **Verdict:** Too much sugar for optimal daily hydration. Not suitable for fasting or keto.

**Other Mixes Row:**
> Up to 11g added sugar | 0–50mg magnesium | Synthetic blends
>
> **Verdict:** Under-dosed, artificial, and full of fillers.

**Footnote:**
> Based on a **3g** serving of Salt.Magic vs typical 16oz servings.

**Was geändert:**
- "Zero calorie electrolyte powder" → "Zero calories"
- "Not a healthy electrolyte drink" → "Not a healthy daily choice" (powder-Echo vermieden)
- "not a pure hydration powder" → "full of fillers" (powder raus)
- Footnote 2g → **3g**

---

# 7. Benefits (6 Cards)

**Datei:** `site/components/Benefits.tsx`

**Eyebrow:** Daily Benefits

**H2:** Feel the Difference

**Body:** What happens when your water actually works.

**Card 1 — True Hydration:**
> Stop flushing water straight through your system. Real cellular hydration means your body absorbs every drop — not just passes it through.

**Card 2 — Deeper Sleep:**
> Magnesium is nature's relaxant. Ease muscle tension, calm your nervous system, and wake up restored.

**Card 3 — Sustained Focus:**
> Clear the brain fog. Keep your mind sharp and your concentration steady without the caffeine crash.

**Card 4 — Travel & Heat Recovery:**
> Tropical heat, long flights, running empty — your body loses electrolytes faster than you replace them. The hydration for hot weather and travel you actually need.

**Card 5 — Peak Performance:**
> Push harder and recover faster. Maintain your energy and prevent muscle cramps before, during, and after training.

**Card 6 — Natural Hangover Defense:**
> Woke up wrecked? Alcohol strips magnesium, potassium, and sodium overnight. Salt.Magic restores the exact minerals you lost — fast, natural recovery.

**Was geändert:**
- Card 6: "natural hangover recovery drink" → "fast, natural recovery" (powder/drink-Echo neutralisiert)

---

# 8. For Everyone

**Datei:** `site/components/ForEveryone.tsx`

**Eyebrow:** For Everyone

**H2:** Not a Sports Drink. A Daily Essential.

**Body:** Pure hydration for daily life, not just game day.

**Extended Body:**
> Most electrolytes are packed with sugar and designed for extreme athletes. Salt.Magic is different. Whether you're intermittent fasting, training Muay Thai in the tropical heat, heavy sweating through hot yoga, or simply navigating a busy workday, your body burns through minerals every single day. One clean, invisible formula for all of it.

**The Old Way (Sports Drinks):**
> Occasional use (3–5x a week) | Built for intense workouts | Loaded with sugar & artificial colors

**The Salt.Magic Way:**
> Daily essential (365 days a year) | Built for anyone who drinks water | Pure, invisible, natural minerals

**Keine Änderung gegenüber SUGGESTED nötig.**

---

# 9. Products

**Datei:** `site/components/Products.tsx`

**Eyebrow:** Shop Salt.Magic

**H2:** Ready to Try Natural Electrolytes?

**Body:**
> Choose your daily ritual. Your natural electrolyte mineralizer in Thailand — less than the cost of your morning coffee.

**Badges:** Zero Sugar | 100% Natural | 7x Magnesium

---

**Product 1 — The Signature Glass Jar**

- **Tag:** Best Value | 490 THB
- **Meta:** Over 2 months of daily hydration (70 servings) — Just 7 THB per day
- **Description:**
  > A beautiful, premium glass jar with a gold lid, designed to live on your kitchen counter. Inside: a magnesium-rich mineral blend that brings your water back to life. Proudly crafted at our Koh Samui hub.
- **Badge:** Eco-friendly & reusable
- **CTA:** Shop on Lazada

---

**Product 2 — The Travel Sachet**

- **Tag:** Most Popular | 290 THB
- **Meta:** A full month's supply (30 servings) — Just 9.6 THB per day. Perfect travel hydration companion.
- **Description:**
  > Your daily minerals, perfectly portable. An unflavored mineral blend in a resealable, GMP/HACCP-certified pouch — built for the gym bag, office drawer, or long flights. Think of them as hydration packets for flying, the gym, the office, or anywhere life takes you.
- **Badge:** Lightweight & travel-ready
- **CTA:** Shop on Lazada

**Was geändert:**
- H2: "Natural Electrolyte Powder" → "Natural Electrolytes"
- Body: "natural electrolyte powder" → "natural electrolyte mineralizer"
- Glass Jar Description: "Himalayan pink salt electrolyte powder — the cleanest start to your pink salt morning drink ritual" → "a magnesium-rich mineral blend that brings your water back to life" (Leos "blurb sounds strange" gelöst, "powder" raus, magnesium-rich Positionierung)
- Travel Sachet: "unflavored electrolyte powder" → "unflavored mineral blend"; "electrolyte powder for travel you'll actually pack" → "built for the gym bag..."
- "travel hydration supplements" → "travel hydration companion"

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
> No. Salt.Magic is a **magnesium-rich hydration formula** — Himalayan pink salt makes up just 20% of the blend, far less than competitors. The majority (over 50%) is Magnesium Citrate (the most bioavailable form of magnesium) and the rest is pure Potassium Citrate. No fillers, no additives, nothing artificial.

---

**Q2: How do I use it?**

**A2:**
> Add **3 grams** to 1.5L of water — more or less depending how much you sweat. It dissolves instantly and is completely flavorless. The more you sweat, the more you need. Stay hydrated.

---

**Q3: How does Salt.Magic compare to imported electrolyte brands?**

**A3:**
> We share the same zero-sugar, clean-ingredient philosophy as the premium imported brands. The difference? Salt.Magic's magnesium potassium mineral blend delivers 7x more magnesium per serving. Crafted locally in Thailand, you pay 7–10 THB per serving instead of the 25–40 THB import markup.

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
> Most bottled water in Thailand is filtered using reverse osmosis. This removes bacteria, but it also strips away all the natural minerals. The result is ultra-pure but nutritionally empty water. It hydrates you, but lacks the electrolytes your body needs for proper cellular hydration — to actually absorb and use that hydration at a cellular level.

---

**Q7: What's the difference between "wellness" and "sports" electrolytes?**

**A7:**
> Sports drinks are built for occasional, high-intensity use (3–5 times a week) and are usually packed with sugar and flavors. Salt.Magic is a daily electrolyte supplement — pure, invisible minerals meant to be added to your water 365 days a year.

---

**Q8 (NEW): Does Salt.Magic break a fast?**

**A8:**
> No. Salt.Magic has zero calories, zero sugar, and zero sweeteners, so it will not break your fast or trigger an insulin response. Many of our customers use it as their daily fasting electrolyte — it dissolves without flavor and keeps headaches, fatigue, and cramps at bay during intermittent or extended fasts. Fasting-safe and keto-friendly by design.

---

**Q9 (NEW): Can I take Salt.Magic while traveling or flying?**

**A9:**
> Absolutely. Our Travel Sachet was designed as portable natural electrolytes for travel. Flights and tropical heat deplete your minerals rapidly. Drop a sachet in your water before boarding — lightweight hydration packets for flying that keep you balanced across time zones.

---

**Q10 (NEW): Is Salt.Magic good for hangover recovery?**

**A10:**
> Yes. Alcohol is a powerful diuretic that strips your body of essential minerals — especially magnesium, potassium, and sodium. Salt.Magic restores the exact minerals alcohol depletes. Take one serving before bed and one in the morning for the fastest recovery. The same minerals that support natural fluid balance and cellular hydration are exactly what your body needs after a night out.

**Was geändert:**
- Q1: "natural pink salt hydration formula" → "magnesium-rich hydration formula" (Leos Kern-Korrektur)
- Q2: Komplett neu — Leos exakte Routine-Formulierung (3g in 1.5L, sweat-based)
- Q3: "imported brands like LMNT or Wilder?" → "imported electrolyte brands?"; "premium US brands" → "premium imported brands" (länderneutral); "magnesium potassium electrolyte mix" → "magnesium potassium mineral blend"
- Q4: 1g → **1.5g**
- Q9: "portable electrolyte powder for travel" → "portable natural electrolytes for travel"
- Q10: "natural hangover recovery drink" → entfernt, direkter formuliert

---

# 13. CTA Banner

**Datei:** `site/components/CtaBanner.tsx`

**Eyebrow:** Start Today

**H2:** Bring Your Water Back to Life

**Body:**
> Three ingredients. Zero compromise. Thousands across Thailand drink this clean electrolyte blend for daily wellness — and never go back.

**CTA:** Shop Salt.Magic on Lazada

**Keine signifikante Änderung — "clean electrolyte blend" ist powder-frei und SEO-natürlich.**

---

# 14. Newsletter

**Datei:** `site/components/Newsletter.tsx`

**Eyebrow:** Stay Connected

**H2:** Join the Natural Hydration Ritual

**Body:**
> Drop your email for wellness tips, hydration science, and member-only offers. No spam, no fluff, just what works.

**Badge:** Get our free Mineral Guide + 10% off your first order

**CTA:** Unlock 10% Off

**Keine Änderung — bereits korrekt.**

---

# 15. Footer

**Datei:** `site/components/Footer.tsx`

**Tagline:** Clean Electrolytes. Naturally Powerful.
**Tagline Desktop:** No sugar. No flavors. No waste.
**Navigate:** About | Products | Our Story | Blog | Partner With Us
**Connect:** leo@salt-magic.com | +66 826 020 486 | @saltmagic.electrolytes
**Copyright:** Made on Koh Samui, Thailand

**Keine Änderung — bleibt unverändert.**

---

# PARTNER PAGE

**Datei:** `site/app/partner/page.tsx` + Components

## P1. Partner Page Meta Tags

**Datei:** `site/app/partner/layout.tsx` (oder Metadata-Export)

**Title:**
> Electrolyte Distribution Thailand | Partner With Salt.Magic

**Meta Description:**
> Distribute Thailand's fastest-growing electrolyte brand. 35–40% retailer margins, 90% customer retention, 160+ locations. Become a wellness product distributor today.

---

## P2. Partner Hero

**Datei:** `site/components/PartnerHero.tsx`

**Eyebrow:** Distribution Partnership

**H1:** Capture the Next Wave of Wellness

**Body:**
> The global electrolyte market is exploding. Partner with Thailand's first daily mineralizer and claim your first-mover advantage as an electrolyte distributor in Thailand's fastest-growing wellness category.

**CTAs:** Contact Us | Download Pitch Deck

**Stats:** 90% Customer Retention | 35–40% Retailer Margins | 160+ Locations | 5 Yrs Proven Track Record

---

## P3. Market Opportunity

**Datei:** `site/components/MarketStats.tsx` + `MarketComparison.tsx`

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

## P4. Category Proof — ⚠ Klärung mit Leo

**Datei:** `site/components/CategoryProof.tsx`

**Eyebrow:** Category Proof

**H2:** Clean hydration builds unicorns.

**Body:**
> The biggest wellness brands of the last decade started exactly where Salt.Magic is now. Clean electrolytes are creating an entirely new, highly lucrative retail category.

**Brands (⚠ KLÄRUNG):**
> Liquid IV — $500M+ (Acquired by Unilever) | LMNT — 8-figure revenue (Dominating DTC and retail) | Liquid Death — $1.4B (100K+ retail stores)

**Klärungsbedarf:** Leos Regel "Remove any brand names. I don't want to compete with them" galt zur FAQ. Hier dienen die Brands als B2B Markt-Proof, nicht als Vergleich. Vor Implementierung mit Leo bestätigen ob OK oder zu generischen Aussagen umformulieren ("$500M+ acquisitions in clean hydration", etc.).

---

## P5. Why Distribute Salt.Magic

**Datei:** `site/components/PartnerForm.tsx` + zugehörige Section

**Eyebrow:** Why Distribute

**H2:** Why distribute Salt.Magic?

**Body:**
> Bring Thailand's first sugar-free, flavorless daily electrolyte mineralizer to your customers. A wellness brand partnership with built-in demand.

**Bullets:**
- 35–40% retailer margins — among the highest in the health product category
- 90% customer retention across 160+ partner locations — a product that sells itself
- 7x more magnesium than competitors. Zero sugar. Zero plastic waste.

**CTA:** Become a Distribution Partner

---

## P6. Revenue Comparison

**Datei:** `site/components/RevenueComparison.tsx`

**Eyebrow:** The Revenue Difference

**H2:** The Bottom Line: 4.4x More Revenue

**Body:**
> We aren't selling an occasional sports recovery drink. We are selling a 365-day habit. Daily wellness positioning isn't just better for your customers — it's significantly better for your bottom line.

**Wellness / Salt.Magic:** 365 days/year | Monthly purchase | 4,200 THB LTV | 90% retention
**Fitness / Traditional:** 3–5 days/week | Irregular purchase | 800 THB LTV | 25–35% retention

---

## P7. Partner Contact Form

**Datei:** `site/components/PartnerForm.tsx`

**Eyebrow:** Get In Touch

**H2:** Become an electrolyte distribution partner in Thailand

**Body:** We'll respond within 48 hours.

**Fields:** Name | Company | Role | Email | Message

**CTA:** Become a Distribution Partner

---

# APPENDIX: Blog Topics für unbenutzte Keywords

**Datei:** `site/content/blog/*.ts` (5 neue Artikel)

| # | Titel | Keyword-Cluster |
|---|---|---|
| 1 | The Best Electrolytes for Muay Thai Training in Thailand | muay thai hydration, training hydration mix, electrolytes for heavy sweaters |
| 2 | Why Fasting Without Electrolytes is a Mistake | electrolytes for fasting, fasting salt water drink, keto hydration, intermittent fasting |
| 3 | Electrolytes for Hot Yoga: What Your Instructor Won't Tell You | hot yoga electrolytes, hydration for hot weather, natural rehydration salts, muscle cramp relief |
| 4 | Natural Hangover Recovery: The Science Behind Mineral Rehydration | natural hangover recovery, food poisoning hydration, cellular hydration |
| 5 | The Complete Guide to Natural Hydration for Travel | travel electrolytes, hydration packets for flying, travel supplements, fluid balance |

**Hinweis:** "powder" in allen Blog-Artikel-Titeln und Bodies vermeiden (G1).

---

# Implementierungs-Reihenfolge (Vorschlag)

1. **Globale Code-Edits** (5 Min): `layout.tsx` premier→premium, business-info.md 2g→3g
2. **Faktum-Updates** (15 Min): Ingredients 2g→3g, Comparison Footnote, FAQ Q2/Q4
3. **Copy-Sweeps** (60 Min): Alle 13 Sections der Homepage durch — eine Section pro Component
4. **Partner Page** (30 Min): Sections P1–P7 (CategoryProof erst nach Leo-Klärung)
5. **Blog Topics** (separate Sessions, 1 Artikel pro Session)
6. **Lokal testen:** `cd site && npm run dev` — alle Sections durchklicken
7. **Push v2 main**

**Gesamtaufwand für Homepage + Partner:** ~2 Stunden konzentrierte Arbeit.

# Website Audit: salt-magic.com (Current State)

**Date:** 2026-03-26
**Platform:** Lovable (SPA, React/Tailwind)
**Source:** Browser extension full-page analysis + screenshot

---

## Site Overview

Single-page application with one long scrolling homepage. Only `/blog` exists as a true standalone page. All nav links (Sustainability, About, FAQ) are anchor links to homepage sections — they 404 when accessed directly.

---

## Navigation

**Main nav (fixed, semi-transparent with blur):**
Salt.Magic (logo) | Why Salt.Magic | Sustainability | About | FAQ | Blog | Contact (dropdown: Instagram, WhatsApp)

**Secondary sticky pill nav** (appears on scroll):
Why | Ingredients | Uses | Sustainability | About | FAQ
- Includes a progress bar indicator
- Duplicates main nav with different labels

**Floating elements:**
- Lazada banner (sticky pill, navy) — "Buy on Lazada Now"
- Back to Top button (bottom-left circle)

---

## Homepage Sections

### 1. Hero
- Eyebrow: `PURE HYDRATION`
- H1: `Salt.Magic™`
- Subheading: `Hydration that powers Relaxation, Clarity, and Recovery`
- Body: `No sugar. No added flavors. Only minerals your body understands.`
- CTAs (3 stacked): `Partner & Bulk Inquiries` | `Learn More` | `Shop Now on Lazada`
- Image: Glass jar with gold lid on deep teal background (right column)

### 2. Why Section (#why)
- Pull quote about hydration being about absorption
- H2: `Pure Hydration from Natural Sources`
- Checklist: No sugar / No added flavors / No artificial colors / Supports fasting / Lowest packaging carbon footprint
- Electrolyte content breakdown (Mg 312mg, K 160mg, Na 152mg)
- Magnesium Matters sub-section with NIH source link
- CTA: `Try Salt.Magic Today`

### 3. Ingredients (#ingredients)
- H2: `What's Inside and Why`
- 3 ingredient cards: Magnesium Citrate, Potassium Citrate, Pink Himalayan Salt
- Trusted Mineral Ratio: 50% Mg / 30% K / 20% Na

### 4. Benefits
- H2: `What It Feels Like`
- 4 icon cards: Clear Thinking | Steady Energy | Body Ease | Less Craving

### 5. Mid-Page CTA Banner
- H2: `Ready to Experience Real Hydration?`
- Dark navy gradient background
- CTAs: Shop Now (Lazada) | Learn More (Instagram)

### 6. Comparison Table
- H2: `Real Hydration vs. Everything Else`
- 4 columns: Dead Water | Mainstream Electrolyte Drinks | Electrolyte Powders | Salt.Magic

### 7. Use Cases
- H2: `We Go Beyond Sports`
- 8 cards: The Grind Set | Fasters & Detox | Sauna Loyalists | Divers & Water Lovers | Flyers & Travelers | Hangovers | Fever Recovery | Sensitive Bellies

### 8. Pricing
- H2: `What You're Paying For`
- Jar: 490 THB / 70 servings / 7 THB per serving
- Sachet: 290 THB / 30 servings / 9.6 THB per serving
- Note: `We are currently at 100+ partner stores throughout Thailand.`

### 9. Sustainability (#sustainability)
- H2: `Sustainability, Built In`
- Bullets: No single-use plastics / Recyclable paper sachets / Reusable jars / No plastic coatings

### 10. Testimonials
- H2: `What Our Customers Say`
- 6-slide carousel: Sarah C., Sarah McLaughlin, Ploy, David, Shannon Diablo, Tom W.

### 11. About (#about)
- H2: `Born on a Tropical Island`
- Team: Eric (Co-Founder), Leo (Co-Founder), Kawin (Partner/COO)

### 12. FAQ (#faq)
- 4 categories: Product & Ingredients | Usage & Dosage | Health & Safety | Performance & Effects
- Accordion-style expandable questions

### 13. Final CTA
- H2: `Ready for Natural Hydration?`
- CTAs: Shop Now | Contact Us

### 14. Footer
- Wordmark + tagline: `Clean Electrolytes. Naturally Powerful. No sugar. No flavors. No waste.`
- Quick Links: Why Salt.Magic | Ingredients | Sustainability | About
- Contact: Instagram + WhatsApp

---

## Blog (/blog)

- Hero: `KNOWLEDGE HUB` / `Hydration Science & Health`
- Only 1 article exists: "The Ultimate Guide to Hydration and Remineralization in Thailand's Tropical Climate"
- "All Articles" grid section is completely empty
- Newsletter section says "delivered to your inbox" but only links to Instagram (no email capture)
- Blog article contains a broken internal link to a non-existent article

---

## Design Analysis

### Colors Used
| Color | HEX/RGB | Usage |
|---|---|---|
| Primary Navy | #294B6B | Logo, headings, primary buttons, footer |
| Charcoal | rgb(45,45,45) | Body text |
| Warm Off-White | rgb(250,250,247) | Alternating section backgrounds |
| Sand/Gold | rgb(212,191,170) | Accent, CTA buttons |
| White | #FFFFFF | Some section backgrounds |
| Deep Teal | ~#1B5E5B | Hero product image background |
| Dark Gradient | Navy to charcoal | CTA banner sections |

### Typography
- **Single font throughout: Inter** (no serif/display font)
- Logo: Bold Inter with period
- Section labels: All-caps, small, in pill badges
- H1: ~60-80px bold | H2: ~36-48px bold | H3: ~20-24px bold | Body: ~16px regular

### Layout
- Tailwind CSS, flexbox/grid hybrid
- Generous section padding (64-112px vertical)
- Alternating white and off-white/navy backgrounds
- Hero: 2-column (text left, product right)
- Content sections: various grid layouts (2-4 columns)

---

## Issues Identified

### Critical
| # | Issue |
|---|---|
| 1 | **4 of 6 nav links 404 when accessed directly** — anchor-only routing breaks shareability and SEO |
| 2 | **Blog "All Articles" section is empty** — looks broken/unfinished |
| 3 | **No email or contact form anywhere** — all contact via Instagram DM or WhatsApp |
| 4 | **No own e-commerce** — 100% dependent on Lazada for purchases |

### Design & UX
| # | Issue |
|---|---|
| 5 | **3 competing CTAs in hero** — no clear primary action |
| 6 | **"Learn More" inconsistency** — scrolls down in hero, links to Instagram in mid-CTA |
| 7 | **Inter-only typography** — lacks personality for a premium wellness brand (brand guidelines specify Playfair Display for headlines) |
| 8 | **Duplicate nav bars** — secondary pill nav uses different labels than main nav |
| 9 | **Floating Lazada banner** — potentially intrusive on mobile |
| 10 | **No lifestyle imagery** — only product shot on solid color background, no natural textures |

### Copy & SEO
| # | Issue |
|---|---|
| 11 | **Grammar error:** "Salt.Magic makes your money worth with highest dosage" |
| 12 | **Grammar error:** "Salt.Magic isn't just clean for your body and it's clean for the planet" |
| 13 | **Duplicate page titles** — blog and article pages use the same generic site title |
| 14 | **Broken internal blog link** — references non-existent coffee/tea article |
| 15 | **Not GEO-optimized** — no question-answer structure, no TL;DR blocks |
| 16 | **Newsletter section has no email capture** — promises inbox delivery but only offers Instagram |

### Brand Guideline Violations
| # | Issue |
|---|---|
| 17 | **Missing Playfair Display** — brand guidelines specify serif headlines, site uses Inter throughout |
| 18 | **Missing Cormorant Garamond** — alternative serif not used |
| 19 | **No warm earth tones** — mood board calls for sand, terracotta, warm off-white; site is heavily navy |
| 20 | **Product photography not on natural textures** — brand guidelines + mood board call for stone, sand, wood staging |
| 21 | **Background too cold** — should be warm off-white (#F5F0E8) not pure white |

---

## Scorecard

| Category | Rating | Notes |
|---|---|---|
| Visual Design | 4/5 | Clean and well-spaced, but generic — doesn't match premium mood board |
| Typography | 3/5 | Inter-only lacks personality; brand fonts not implemented |
| Navigation | 2/5 | Anchor-only links break when shared; Contact as dropdown is unusual |
| CTAs | 3/5 | Too many competing CTAs; inconsistent behavior |
| Copy / Messaging | 4/5 | Strong benefit-driven copy; grammar errors; not GEO-optimized |
| Blog | 2/5 | Only 1 article, empty grid, broken link, no email capture |
| Technical Health | 2/5 | 404s on sub-pages, duplicate titles, SPA routing issues |
| Conversion Path | 3/5 | Over-reliance on Instagram/Lazada; no direct purchase or contact form |
| Brand Alignment | 2/5 | Doesn't match brand guidelines or mood board aesthetic |

---

## Rebrand Priority Summary

### Must Fix
1. Implement brand typography (Playfair Display headlines, Inter body)
2. Warm up color palette — earth tones, warm off-white backgrounds, reduce solid navy blocks
3. Add lifestyle photography on natural textures
4. Fix navigation routing (proper pages or at minimum working anchor URLs)
5. Single clear CTA hierarchy in hero
6. Add proper contact form and B2B inquiry form
7. GEO-optimize all copy (question headings, answer-first paragraphs, citable data)

### Should Fix
8. Fix grammar errors throughout copy
9. Build out blog with more articles
10. Add email capture / newsletter signup
11. Unique page titles for SEO
12. Product photography on natural surfaces (stone, sand, wood)
13. Consider own e-commerce vs Lazada dependency

### Nice to Have
14. Subtle animations (fade-ins, parallax)
15. Remove duplicate nav bar or unify labels
16. 404 page with proper branding and navigation

---

_This audit informs the rebrand plan. Next step: create implementation plan once design reference websites from client are received._

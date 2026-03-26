# Plan: Salt.Magic Website Rebrand V1

**Created:** 2026-03-26
**Status:** Implementiert
**Requirement:** Complete website rebrand — new visual design, new GEO-optimized copy & messaging, brand-aligned presentation. V1 based on brand guidelines, mood board, and website audit. V2 will refine with client's design reference websites.

---

## Overview

### What This Plan Achieves

Transforms salt-magic.com from a generic Lovable template into a premium "Elevated Natural Luxury" wellness brand experience. The rebrand delivers brand-aligned typography, warm earth-tone visuals, GEO-optimized copy that speaks to both D2C consumers and B2B distributors, and fixes critical UX/technical issues identified in the audit.

### Why This Matters

Salt.Magic is transitioning from a 5-year D2C island brand to a national B2B player. The website is the first impression for Tier 1-3 distributors (DKSH, Boots, Watsons) and the primary conversion point for health-conscious consumers. The current site doesn't match the premium brand guidelines or mood-board aesthetic, uses the wrong fonts, lacks warmth, and isn't optimized for AI search engines — all of which undermine credibility at a critical growth stage.

---

## Current State

### Relevant Existing Structure

- **Platform:** Lovable (React SPA with Tailwind CSS)
- **URL:** salt-magic.com
- **Structure:** Single-page homepage with anchor sections + /blog
- **Full audit:** `outputs/website-audit-current.md`
- **Brand guidelines:** `context/brand-guidelines.md`
- **Mood board:** `reference/mood-board/` (MarocMaroc, Panpuri, Alo images)
- **Product photos:** `reference/product-pics/`
- **Logos:** `reference/logos/`

### Gaps & Problems Being Addressed

1. **Typography:** Inter-only throughout — brand guidelines specify Playfair Display for headlines
2. **Color palette:** Too cold/corporate (heavy navy blocks, pure white) — mood board calls for warm earth tones
3. **No lifestyle imagery:** Product shot on flat color only — no natural textures or contextual staging
4. **Not GEO-optimized:** Copy lacks question-answer structure, TL;DR blocks, citable paragraphs
5. **3 competing hero CTAs:** No clear primary action
6. **No contact form or email capture:** All contact via Instagram DM
7. **4 pages 404:** Anchor-only routing breaks shareability
8. **Grammar errors:** Multiple copy issues throughout
9. **Blog underdeveloped:** 1 article, empty grid, broken internal link
10. **Brand guidelines not implemented:** Design doesn't match documented brand identity

---

## Proposed Changes

### Summary of Changes

- Implement brand typography (Playfair Display headlines + Inter body)
- Shift color palette to warm earth tones per mood board
- Rewrite all homepage copy with GEO optimization
- Restructure hero section with single clear CTA
- Add lifestyle imagery direction / specifications
- Fix navigation routing
- Add B2B inquiry form/section
- Add email capture
- Fix all grammar and copy errors
- Create design specification document for Lovable implementation

### New Files to Create

| File Path | Purpose |
|---|---|
| `outputs/design-spec-v1.md` | Complete design specification for the rebranded site (colors, typography, spacing, components) |
| `outputs/copy-homepage-v1.md` | Full rewritten homepage copy, section by section, GEO-optimized |
| `outputs/copy-meta-v1.md` | Page titles, meta descriptions, Open Graph tags — GEO-optimized |
| `outputs/sitemap-v1.md` | Proposed site structure with proper routing |
| `outputs/components/` | React/Tailwind component code for each section, generated via 21st.dev Magic MCP |

### Files to Modify

| File Path | Changes |
|---|---|
| `CLAUDE.md` | Update project status, reference new output files |
| `context/brand-guidelines.md` | Add design-spec cross-reference, note any refinements |

### Files to Delete

None — all current files are reference material worth keeping.

---

## Design Decisions

### Key Decisions Made

1. **Warm off-white (#F5F0E8) as default background instead of pure white:** Mood board analysis shows all three reference brands (MarocMaroc, Panpuri, Alo) use warm, creamy backgrounds. Pure white feels clinical, not wellness.

2. **Playfair Display Bold for all H1/H2 headings:** Brand guidelines explicitly specify this. The current Inter-only approach is the single biggest reason the site feels generic.

3. **Reduce hero CTAs from 3 to 1 primary + 1 secondary:** Three stacked buttons create decision paralysis. Primary CTA should be "Shop Now" for D2C visitors; secondary "Partner With Us" for B2B.

4. **GEO-optimize copy using QAE pattern (Question → Answer → Evidence):** Per the generative-engine-optimization skill, this structure increases AI citation rates by ~35%. Each section heading should be a question consumers actually ask.

5. **Separate B2B section with proper inquiry form:** "Partner & Bulk Inquiries" linking to Instagram DM is not scalable for Tier 1-3 distributor acquisition. Need a dedicated section or page.

6. **Keep single-page structure but fix routing:** Maintain the long-scroll homepage (it works for storytelling), but implement proper route handling so /#about, /#faq etc. don't 404 when accessed directly.

7. **Lead with the "dead water" problem, not the product:** The most compelling narrative is "85% of your water has zero minerals" — this is the hook that creates urgency before introducing Salt.Magic as the solution.

8. **Integrate distribution pitch content as interactive B2B section:** The "Mass Marketing Salt Magic Distribution Partnership Proposal" PDF contains compelling market data, comparison charts, and partnership arguments. Instead of a static "Partner With Us" form, build an interactive B2B experience — animated stat counters, scrollable market data, interactive comparison, and a clear partnership CTA. This turns the website into a live pitch deck for distributors.

9. **Use actual logos and product photos from `reference/`:** All product images (`reference/product-pics/`) and logos (`reference/logos/`) must be used in the design — no placeholder stock images for Salt.Magic's own assets.

10. **Mood board = direction, not source material:** The images in `reference/mood-board/` (MarocMaroc, Panpuri, Alo) define the aesthetic direction — warm light, natural textures, elevated luxury, calm spa feeling. Do NOT use these images on the site. Instead, capture the same mood through: color choices, typography, whitespace, photography styling guidelines, and animation pacing.

### Considered Alternatives

- **Multi-page site:** Rejected — the single-page scroll works well for the brand story and is simpler on Lovable. Sections can still have shareable URLs via proper anchor routing.
- **Full e-commerce integration:** Out of scope for V1 — Lazada dependency is a strategic question, not a rebrand question. Noted for future consideration.
- **Dark mode / full dark design:** Rejected — contradicts the warm, natural, spa-like aesthetic from the mood board.

### Open Questions

1. **Design reference websites:** Leo's client will send reference websites — V2 plan will refine visual components based on these.
2. **New product photography:** Should we commission new lifestyle photography on natural textures, or work with existing product-pics for V1?
3. **Blog strategy:** Should V1 include a blog content plan, or focus solely on homepage rebrand?
4. **Contact form backend:** What should the B2B inquiry form submit to? (Email, CRM, Google Sheet?)

---

## Skills to Invoke

The following installed skills MUST be explicitly invoked during implementation:

### 1. `ui-ux-pro-max` (UI/UX Design Intelligence)
- **Invoke during:** Step 1 (Design Spec), Step 2 (Site Structure), Step 5 (Compile Spec)
- **Trigger by:** Using keywords: "design website", "plan UI/UX", "color system", "typography", "font pairing", "layout", "spacing", "animation", "responsive", "minimalism"
- **Purpose:** Get expert design recommendations for color palettes, font pairings, spacing systems, component specs, and UX guidelines specific to a wellness e-commerce website

### 2. `generative-engine-optimization` (GEO Skill)
- **Invoke during:** Step 3 (Homepage Copy), Step 4 (Meta Tags)
- **Trigger by:** Using keywords: "GEO optimize", "AI search visibility", "generative engine optimization", "optimize for ChatGPT", "optimize for Perplexity"
- **Purpose:** Apply GEO/AEO content strategy — QAE patterns, citable paragraphs, answer-first formatting, platform-specific optimization (Google AI Overviews, Perplexity, ChatGPT)

### 3. `mcp__magic` (21st.dev Magic MCP — Component Library)
- **Invoke during:** Step 1 (Design Spec — inspiration), Step 5 (Compile Spec — build components)
- **Tools available:**
  - `mcp__magic__21st_magic_component_inspiration` — Search 21st.dev for premium UI component references (hero sections, pricing cards, testimonial carousels, FAQ accordions, nav bars, CTAs)
  - `mcp__magic__21st_magic_component_builder` — Generate React/Tailwind component code for each section
  - `mcp__magic__21st_magic_component_refiner` — Refine generated components to match brand guidelines
  - `mcp__magic__logo_search` — Search for any logos needed (e.g., partner logos, social icons)
- **Purpose:** Source high-quality UI component patterns and generate production-ready React code that matches the design spec, then refine to align with Salt.Magic brand

### How to ensure invocation during /implement:
Each relevant step includes a **`[SKILL]`** or **`[MCP]`** tag with the exact prompt to use. When executing that step, invoke the skill/tool BEFORE producing the output.

---

## Step-by-Step Tasks

### Step 1: Create Design Specification

**`[SKILL: ui-ux-pro-max]`** — Before writing the design spec, invoke the ui-ux-pro-max skill with: "Plan and design a UI/UX system for a premium wellness website (Salt.Magic electrolytes). Style: minimalism. Stack: React + Tailwind. Need: color system, typography, font pairing, spacing, layout, animation, and component specs. Brand colors: #294B6D (navy), #D4BFAA (gold), #F5F0E8 (warm white). Fonts: Playfair Display (headlines) + Inter (body)."

**`[MCP: mcp__magic__21st_magic_component_inspiration]`** — Search 21st.dev for component inspiration for each major section:
- Search queries: "wellness hero section", "pricing cards minimal", "testimonial carousel", "FAQ accordion", "sticky navbar transparent", "CTA banner gradient", "team cards", "comparison table", "contact form minimal"
- Use the returned patterns as reference for the design spec component definitions

Create a comprehensive design spec document that translates brand guidelines + mood board into concrete Lovable/Tailwind implementation rules.

**Actions:**

- Define the complete color system with Tailwind custom colors:
  - Background: Warm Off-White `#F5F0E8` (primary bg), Cream `#FAF8F5` (card bg)
  - Text: Warm Dark Brown `#3B2F2F` (body), Deep Mineral Blue `#294B6D` (headings)
  - Accent: Soft Gold `#D4BFAA` (highlights, icons), Terracotta `#C67A4B` (primary CTA)
  - Secondary: Olive `#6B7B3A`, Muted Pink `#D4A5A5`, Burgundy `#722F37`
  - Navy: `#294B6D` (used sparingly — footer, one accent section max)
- Define typography system:
  - H1: Playfair Display Bold, 56-72px, Deep Mineral Blue, letter-spacing -0.02em
  - H2: Playfair Display Bold, 36-48px, Deep Mineral Blue
  - H3: Playfair Display Regular, 24-28px, Deep Mineral Blue
  - Body: Inter Regular, 16-18px, Warm Dark Brown, line-height 1.7
  - Eyebrow/Labels: Inter Medium, 12-14px, uppercase, letter-spacing 0.1em, Soft Gold
  - CTAs: Inter SemiBold, 16px
- Define spacing system (section padding, element gaps, max-widths)
- Define component styles (buttons, cards, testimonial carousel, FAQ accordion, nav)
- Define imagery guidelines (photo treatment, overlay styles, aspect ratios)
- Define animation rules (fade-in timing, parallax intensity, scroll behavior)
- Define imagery rules:
  - **Product photos:** Use actual images from `reference/product-pics/` (jar shots, sachet, partner store photos, lifestyle shots)
  - **Logos:** Use actual logos from `reference/logos/` (white bg, no bg variants)
  - **Mood/aesthetic:** Capture the warm, natural, elevated luxury feel from `reference/mood-board/` (MarocMaroc, Panpuri, Alo) through design decisions — do NOT use these images directly on the site
  - **Photo treatment:** Warm color grading, natural light feel, soft shadows — applied to existing product photos
  - **Background textures:** Subtle linen/sand/stone textures as CSS backgrounds where appropriate

**Affected Files:**

- `outputs/design-spec-v1.md` (new)

---

### Step 2: Create Site Structure & Routing Plan

Define the proper site structure with working routes and navigation.

**Actions:**

- Map current anchor sections to proper shareable URLs
- Define navigation structure (simplify: remove duplicate pill nav)
- Define footer link structure
- Define 404 page with proper branding
- Define meta tags per section/page for SEO/GEO

**Proposed Navigation:**

| Nav Item | Route | Type |
|---|---|---|
| Salt.Magic (logo) | `/` | Link |
| Why Salt.Magic | `/#why` | Anchor (smooth scroll) |
| Products | `/#products` | Anchor |
| Sustainability | `/#sustainability` | Anchor |
| About | `/#about` | Anchor |
| FAQ | `/#faq` | Anchor |
| Blog | `/blog` | Page |
| Partner With Us | `/#partner` | Anchor (or `/partner` page) |

- Remove secondary pill nav bar (reduces clutter, eliminates label inconsistency)
- Remove floating Lazada banner (integrate shop CTAs naturally into sections)
- Keep Back to Top button

**Affected Files:**

- `outputs/sitemap-v1.md` (new)

---

### Step 3: Rewrite Homepage Copy (GEO-Optimized)

**`[SKILL: generative-engine-optimization]`** — Before writing copy, invoke the GEO skill with: "Apply generative engine optimization strategy to website copy for Salt.Magic (electrolyte brand, Thailand). Optimize for AI search visibility across ChatGPT, Perplexity, Google AI Overviews. Need: QAE patterns, citable paragraphs, answer-first formatting, structured content for citation."

Rewrite all homepage sections with clear, GEO-optimized messaging following the QAE pattern. Copy must speak to both D2C consumers and B2B distributors.

**Actions:**

- Apply GEO optimization principles throughout:
  - Question-based section headings (matches how people search)
  - Answer-first paragraphs (40-60 words directly answering the heading question)
  - Evidence blocks (stats, citations, data points AI engines can cite)
  - TL;DR / Key Takeaway callouts per major section
  - Citable data: specific numbers, comparisons, sourced claims
- Maintain brand voice: minimalist, premium, science-backed, trustworthy
- Lead with problem (dead water) → solution (Salt.Magic) → proof (data, testimonials)

**Section-by-Section Copy Plan:**

**1. Hero**
- Remove eyebrow "PURE HYDRATION" (generic)
- H1: Keep `Salt.Magic` brand name
- New subheading: Problem-first hook about dead water / mineral gap
- Body: Clear, one-sentence value prop
- CTA Primary: `Shop Now` (Soft Gold/Terracotta button)
- CTA Secondary: `Partner With Us` (outlined)
- Image: Lifestyle product shot on natural texture (sand/stone/linen)

**2. The Problem (#why)**
- H2 as question: `Why Does Your Water Need Minerals?`
- Answer-first: 85% of Thai bottled water is mineral-stripped RO water
- Evidence: TDS meter data, health impact of mineral deficiency
- Citable stat block: 50% of people are magnesium deficient (NIH source)

**3. The Solution (#solution — rename from #ingredients)**
- H2 as question: `What Makes Salt.Magic Different?`
- Answer: 3 natural minerals, 2g serving, zero additives
- Ingredient cards with benefit-first framing
- Mineral ratio visualization (50/30/20)
- Comparison table (keep — this is strong, but GEO-optimize headers)

**4. Benefits (#benefits)**
- H2 as question: `What Does Proper Hydration Feel Like?`
- Keep 4 benefit cards but rewrite copy for clarity
- Add a daily ritual narrative: morning, afternoon, evening use

**5. Who It's For (#use-cases)**
- H2: `Who Uses Salt.Magic?`
- Keep 8 use case cards but tighten copy
- Frame as personas, not just use cases
- Add "For Everyone, Every Day" positioning callout

**6. Products & Pricing (#products — rename from pricing)**
- H2: `Which Format Is Right for You?`
- Keep jar + sachet cards
- Add single sachet (coming soon) teaser
- Remove "What You're Paying For" heading (sounds defensive)
- Add per-serving cost comparison vs competitors

**7. Sustainability (#sustainability)**
- H2: `How Is Salt.Magic Sustainable?`
- Tighten copy — current version is vague
- Add specific data: 85% less plastic than single-serve packs
- Anti-microplastic brand pillar messaging

**8. Social Proof (#testimonials)**
- H2: `What Do Our Customers Say?`
- Keep 6 testimonials in carousel
- Add headline stats: 90% retention | 5 years | 150+ locations
- Add logos/badges of notable partners if available

**9. About (#about)**
- H2: `Who Is Behind Salt.Magic?`
- Tighten origin story — "Born on a Tropical Island" is good
- Team cards: keep but improve photo styling direction

**10. Partner Section (#partner — NEW, Interactive B2B Pitch)**

This section transforms key content from the "Mass Marketing Distribution Partnership Proposal" PDF into an interactive on-page experience. It should feel like a live pitch deck that sells distributors on partnering with Salt.Magic.

- H2: `Want to Distribute Salt.Magic?`
- **Interactive Market Opportunity Block:**
  - Animated counter: $39.9B → $69.1B global electrolyte market (8.2% CAGR)
  - APAC vs USA comparison visual (APAC 5-7 years behind = early adopter advantage)
  - "85% of bottled water is dead water" stat with visual
- **Why Partner — Key Metrics (animated on scroll):**
  - 90% customer retention (counter animation)
  - 150+ locations across Thailand
  - 5 years established
  - 4,200 THB customer LTV/year
  - 35-40% distributor margins
  - 100% incremental revenue (no cannibalization)
- **Revenue Model Visual:**
  - Wellness (365 days/year) vs Fitness (3-5 days/week) comparison — interactive slider or animated infographic from the PDF
  - Daily habit = 4.4x more revenue per customer
- **Three Revenue Streams:**
  - Glass Jar / Paper Sachet / Single Sachet cards with pricing
- **Partnership Inquiry Form:**
  - Fields: Name, Company, Role, Email, Phone, Message
  - Professional form — NOT an Instagram DM link

**11. FAQ (#faq)**
- Keep accordion structure
- Rewrite questions as actual search queries for GEO
- Ensure answers follow answer-first format
- Add structured FAQ schema markup

**12. Final CTA**
- H2: `Start Your Daily Hydration Ritual`
- Dual CTA: Shop Now | Partner With Us

**13. Footer**
- Add all nav links (including Blog, FAQ, Partner)
- Add email address
- Keep Instagram + WhatsApp
- Add "Made on Koh Samui, Thailand" origin note

**Affected Files:**

- `outputs/copy-homepage-v1.md` (new)

---

### Step 4: Create Meta & SEO/GEO Tags

**`[SKILL: generative-engine-optimization]`** — Invoke GEO skill for meta tag optimization: "GEO optimize page titles, meta descriptions, and structured data for AI search visibility. Platform targets: Google AI Overviews, Perplexity, ChatGPT web search."

Write unique page titles, meta descriptions, and Open Graph tags optimized for both traditional search and AI search engines.

**Actions:**

- Homepage title: Unique, keyword-rich, under 60 chars
- Homepage meta description: Answer-first format, include key differentiators, under 160 chars
- Blog page: Unique title and description
- Blog article: Article-specific title (fix current duplicate title issue)
- Open Graph tags for social sharing
- FAQ schema markup specification
- Product schema markup (fix pricing: currently shows 890 THB, should match actual product line)

**Affected Files:**

- `outputs/copy-meta-v1.md` (new)

---

### Step 5: Compile Design Spec Document

**`[SKILL: ui-ux-pro-max]`** — Invoke for final review: "Review and check the UI/UX design system for a premium wellness website. Validate: color system accessibility, typography scale, spacing consistency, responsive layout, animation rules, component interaction states."

**`[MCP: mcp__magic__21st_magic_component_builder]`** — For each major section, generate production-ready React/Tailwind components using the design spec. Build components for:
1. Hero section (with lifestyle image placeholder, headline, single primary CTA)
2. Problem/Why section (stat blocks, TDS visualization)
3. Ingredients cards (3-column grid with icons)
4. Benefits cards (4-column icon grid)
5. Comparison table (4-column responsive table)
6. Use cases grid (8 cards, 2-column)
7. Product/Pricing cards (2-column with CTA)
8. Testimonial carousel (6 slides)
9. Partner inquiry form
10. FAQ accordion
11. Navigation (sticky, transparent, minimal)
12. Footer

**`[MCP: mcp__magic__21st_magic_component_refiner]`** — After building each component, refine to match Salt.Magic brand: Playfair Display headlines, Inter body, warm off-white (#F5F0E8) backgrounds, Soft Gold (#D4BFAA) accents, Deep Mineral Blue (#294B6D) text, generous whitespace, subtle fade-in animations.

Bring together all visual decisions into one comprehensive reference document that can be handed to a developer or used directly in Lovable.

**Actions:**

- Compile color tokens, typography scale, spacing system
- Document every component's visual spec (buttons, cards, nav, footer, carousel, accordion, forms)
- Include before/after comparisons for key sections
- Reference mood-board images for photography direction
- Specify animation/transition rules
- Include responsive breakpoint guidelines

**Affected Files:**

- `outputs/design-spec-v1.md` (finalize)

---

### Step 6: Review & Validate All Outputs

Cross-check all deliverables for consistency, completeness, and brand alignment.

**Actions:**

- Verify all copy follows GEO optimization principles (question headings, answer-first, citable data)
- Verify all design specs match brand guidelines (colors, fonts, spacing)
- Verify all design specs align with mood-board aesthetic
- Check copy for grammar, clarity, and brand voice consistency
- Ensure D2C and B2B messaging is balanced
- Verify all CTAs have clear destinations
- Cross-reference with website audit issues list — confirm each issue is addressed

**Affected Files:**

- All output files (final review pass)

---

### Step 7: Update Workspace Documentation

Update CLAUDE.md and context files to reflect the completed V1 plan and outputs.

**Actions:**

- Update CLAUDE.md project status
- Note V2 plan will follow when design references arrive
- Add output files to workspace structure documentation

**Affected Files:**

- `CLAUDE.md`

---

## Connections & Dependencies

### Files That Reference This Area

- `CLAUDE.md` — references project scope and outputs
- `context/brand-guidelines.md` — design decisions flow from this
- `context/strategy.md` — B2B distributor acquisition goal drives partner section
- `context/business-info.md` — product details, pricing, distribution for copy

### Needed Updates for Consistency

- `CLAUDE.md` — update with V1 output references and project status
- `outputs/website-audit-current.md` — cross-reference with plan to show issues addressed

### Impact on Existing Workflows

- No existing workflows are disrupted
- New outputs created that can be used in future sessions for implementation
- V2 plan will build on V1 outputs when design references arrive

---

## Validation Checklist

- [ ] Design spec covers all brand colors, typography, spacing, components
- [ ] Design spec aligns with mood-board aesthetic (warm, natural, premium)
- [ ] All homepage copy is rewritten section by section
- [ ] Copy follows GEO optimization (question headings, answer-first, citable data)
- [ ] Copy speaks to both D2C consumers and B2B distributors
- [ ] Meta tags are unique per page and GEO-optimized
- [ ] Site structure resolves all 404 issues from audit
- [ ] All 21 audit issues are addressed in the plan
- [ ] Grammar errors from current site are fixed in new copy
- [ ] Brand voice is consistent throughout: minimalist, premium, science-backed
- [ ] CLAUDE.md updated to reflect current state

---

## Success Criteria

The implementation is complete when:

1. All four output files exist (`design-spec-v1.md`, `copy-homepage-v1.md`, `copy-meta-v1.md`, `sitemap-v1.md`) with complete, actionable content
2. Every section of the homepage has rewritten, GEO-optimized copy
3. The design spec is detailed enough to implement directly in Lovable/Tailwind
4. All 21 issues from the website audit are addressed
5. Copy and design are consistent with brand guidelines and mood-board aesthetic
6. B2B partner section/form is specified
7. CLAUDE.md is updated

---

## Notes

- **V2 Plan:** When Leo's client sends design reference websites, create `plans/2026-XX-XX-website-rebrand-v2.md` that refines visual components, specific UI patterns, and interaction details based on those references. V2 builds on V1, doesn't replace it.
- **Implementation:** The output files from this plan are specifications, not code. Actual implementation happens in Lovable. These specs serve as the creative brief.
- **Photography:** The biggest visual impact will come from new lifestyle photography on natural textures. This may need to be commissioned separately — the spec will define the art direction.
- **Blog Strategy:** Excluded from V1 scope. Should be planned separately once homepage rebrand is complete.
- **E-commerce:** Lazada dependency is a strategic decision, not a rebrand decision. Noted but out of scope.
- **Asset Sources:** Product photos in `reference/product-pics/` include: partner store shots (AharaVeda, Ananda, BM Market, Fair Artisan, etc.), product greenery shots (Salt Magic Greenery), lifestyle/model shots (Salt Magic Taylor series), studio photos (Lamai Muay Thai, One Yoga, Studio Layal Yoga). These should be categorized and assigned to appropriate sections during implementation.
- **Interactive B2B Section:** The distribution pitch data (from the PDF) should use scroll-triggered animations (counter increments, chart reveals, comparison sliders) to create an engaging experience. Libraries like Framer Motion or Intersection Observer work well for this in React/Lovable.

---

## Implementierungsnotizen

**Implementiert:** 2026-03-26

### Zusammenfassung

Alle 7 Schritte des Plans wurden vollständig ausgeführt:

1. **Design Specification** (`outputs/design-spec-v1.md`) — Komplettes Design-System mit 11 Abschnitten: Farben, Typographie, Spacing, 10 Komponentenspezifikationen, Bildrichtlinien, Animation/Motion, Responsive Breakpoints, Accessibility, Section-Hintergrundmuster, Design Tokens, und Component-Referenzen (21st.dev patterns).

2. **Sitemap & Routing** (`outputs/sitemap-v1.md`) — Site-Architektur, Navigation (vereinfacht von 7+ auf 5+1 CTA), Footer-Struktur, Homepage-Sektionsreihenfolge (14 Sektionen), Blog-Struktur, 404-Seite.

3. **Homepage Copy** (`outputs/copy-homepage-v1.md`) — 14 Sektionen GEO-optimierte Copy mit QAE-Pattern (Question → Answer → Evidence), answer-first Paragraphen, Key Takeaway Callouts, citable Stat-Tabellen. Inklusive komplettem B2B Partner-Bereich mit interaktiven Marktdaten und Partnership-Formular.

4. **Meta Tags & Structured Data** (`outputs/copy-meta-v1.md`) — Unique Titel/Descriptions für 4 Seiten, Open Graph + Twitter Cards, 6 JSON-LD Schemas (Organization, 2x Product, FAQPage, Article, WebSite), robots.txt für AI-Crawler, technische GEO-Anforderungen.

5. **Design Spec finalisiert** mit 21st.dev Component-Referenzen (Hero, Testimonial Carousel, FAQ Accordion, Animated Stat Counters).

6. **Validierung** — Alle 11 Checklisten-Punkte bestanden, alle 21 Audit-Issues adressiert.

7. **CLAUDE.md** aktualisiert mit V1 Outputs und Projektstatus.

### Abweichungen vom Plan

- **MCP Component Builder/Refiner nicht direkt genutzt:** Die 21st.dev Magic MCP wurde für Inspiration-Suche genutzt, aber Component-Code wurde nicht generiert, da der Plan klarstellt: "output files from this plan are specifications, not code." Stattdessen wurden Component-Referenzmuster als Implementierungs-Guide in die Design Spec integriert (Section 11).
- **ui-ux-pro-max Script nicht ausführbar:** Das Python-Script existierte nicht als ausführbare Datei. Die Skill-Daten (Quick Reference mit 99+ UX-Regeln) wurden direkt aus der SKILL.md geladen und in die Design-Entscheidungen eingearbeitet.
- **Mid-page CTA Banner entfernt:** Im Plan war keine explizite Entfernung vorgesehen, aber die Sektionsreihenfolge in sitemap-v1.md sieht keinen separaten Mid-CTA vor — CTAs sind natürlich in Sektionen integriert.

### Aufgetretene Probleme

- Keine blockierenden Probleme.

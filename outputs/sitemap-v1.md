# Salt.Magic Site Structure & Routing Plan V1

**Created:** 2026-03-26
**Status:** V1 Draft
**Purpose:** Define the proper site structure, navigation, and routing for the rebranded salt-magic.com.

---

## 1. Site Architecture

### Structure Type
Single-page homepage with anchor sections + standalone pages. This preserves the storytelling scroll experience while enabling proper sharing and SEO.

### Page Map

| Route | Type | Description |
|---|---|---|
| `/` | Page | Homepage (long-scroll with all sections) |
| `/blog` | Page | Blog listing page |
| `/blog/:slug` | Page | Individual blog articles |
| `/#why` | Anchor | The Problem section |
| `/#solution` | Anchor | The Solution / Ingredients section |
| `/#benefits` | Anchor | Benefits section |
| `/#products` | Anchor | Products & Pricing section |
| `/#sustainability` | Anchor | Sustainability section |
| `/#testimonials` | Anchor | Social Proof section |
| `/#about` | Anchor | About / Origin Story section |
| `/#partner` | Anchor | B2B Partner section |
| `/#faq` | Anchor | FAQ section |

### Routing Requirements

1. **Anchor links must work when accessed directly:** Navigating to `salt-magic.com/#faq` must scroll to the FAQ section, not 404.
2. **Implementation:** React Router (or Lovable equivalent) handles `/` and `/blog`. Anchor scrolling uses `scrollIntoView({ behavior: 'smooth' })` with an offset for the fixed header (72px).
3. **URL updates on scroll:** As user scrolls past sections, the URL hash updates via Intersection Observer (passive, no page reload). This enables sharing specific sections.
4. **Back button:** Browser back navigates between hash positions within the page.

---

## 2. Navigation Structure

### Primary Navigation (Sticky Header)

```
[Salt.Magic Logo]                    [Why] [Products] [About] [Blog] [Partner With Us] [Shop Now ➜]
```

| Position | Item | Route | Type |
|---|---|---|---|
| Left | Salt.Magic (logo) | `/` | Link (scroll to top) |
| Right | Why Salt.Magic | `/#why` | Anchor (smooth scroll) |
| Right | Products | `/#products` | Anchor |
| Right | About | `/#about` | Anchor |
| Right | Blog | `/blog` | Page link |
| Right | Partner With Us | `/#partner` | Anchor |
| Right (CTA) | Shop Now | Lazada URL | External link (new tab) |

### Navigation Decisions

- **Removed:** Secondary sticky pill nav bar (duplicate, inconsistent labels, visual clutter)
- **Removed:** Floating Lazada banner (intrusive on mobile, CTA is in nav + hero + sections)
- **Removed:** "Contact" dropdown (replaced by footer contact info + partner form)
- **Simplified:** From 7+ nav items down to 5 + 1 CTA
- **Added:** "Shop Now" as a visible CTA button in nav (terracotta, stands out)

### Mobile Navigation

- Hamburger icon (right side), opens slide-in drawer from right
- Full-screen overlay with warm-white background
- Nav items stacked vertically, larger touch targets (48px height)
- "Shop Now" as prominent CTA button at bottom of drawer
- Close via X button or swipe right

### Kept

- **Back to Top button:** Bottom-right circle, 44x44px, soft-gold background, appears after 300px scroll

---

## 3. Footer Structure

```
┌──────────────────────────────────────────────────────────────┐
│  [Salt.Magic Logo - white]                                    │
│  Clean Electrolytes. Naturally Powerful.                       │
│  No sugar. No flavors. No waste.                              │
│                                                               │
│  Quick Links        Product         Connect        Newsletter │
│  Why Salt.Magic     Glass Jar       Instagram      [Email     │
│  Sustainability     Paper Sachet    WhatsApp        input]    │
│  About              Single Sachet   info@salt-      [Sign Up] │
│  FAQ                                 magic.com                 │
│  Blog               Shop on Lazada  +66 826020486             │
│  Partner With Us                                              │
│                                                               │
│  ─────────────────────────────────────────────────────────── │
│  Made on Koh Samui, Thailand  |  © 2026 Salt.Magic           │
└──────────────────────────────────────────────────────────────┘
```

### Footer Additions (vs. current)

- Email address: info@salt-magic.com
- Phone number: +66 826020486
- Blog link
- Partner With Us link
- FAQ link
- Newsletter email capture field
- "Made on Koh Samui, Thailand" origin note
- Product links (Jar, Sachet, Coming Soon: Single Sachet)

---

## 4. Homepage Section Order

| # | Section ID | Section Name | Background |
|---|---|---|---|
| 1 | `hero` | Hero | warm-white gradient |
| 2 | `why` | The Problem: Why Your Water Needs Minerals | cream |
| 3 | `solution` | The Solution: What Makes Salt.Magic Different | warm-white |
| 4 | `benefits` | Benefits: What Proper Hydration Feels Like | cream |
| 5 | `comparison` | Comparison Table | warm-white |
| 6 | `use-cases` | Who Uses Salt.Magic | cream |
| 7 | `products` | Products & Pricing | warm-white |
| 8 | `sustainability` | Sustainability | cream |
| 9 | `testimonials` | Social Proof | warm-white |
| 10 | `about` | About / Origin Story | cream |
| 11 | `partner` | Partner With Us (B2B) | warm-white + texture |
| 12 | `faq` | FAQ | cream |
| 13 | `final-cta` | Final CTA Banner | navy gradient |
| 14 | `footer` | Footer | navy |

### Changes from Current Site

- **Renamed:** `#ingredients` → `#solution` (benefit-first framing)
- **Moved:** Comparison table from after mid-CTA to after benefits (logical flow: problem → solution → benefits → proof via comparison)
- **Removed:** Mid-page CTA banner (was jarring navy block between content sections). CTAs are now integrated naturally into sections.
- **Added:** `#partner` as dedicated B2B section with inquiry form
- **Added:** `#testimonials` as explicit anchor (was unlabeled before)

---

## 5. Blog Structure

### `/blog` Page

```
Hero: "Salt.Magic Knowledge Hub" / "Science-Backed Hydration Insights"
Filter: All | Hydration Science | Lifestyle | Product
Grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
Each card: Featured image, category tag, title, excerpt, read time, date
```

### `/blog/:slug` Page

```
Header: Article title (H1, Playfair Display), author, date, read time
Featured image: Full-width, 16:9
Content: max-w-prose (680px), Inter body
Sidebar (desktop): Related articles, newsletter CTA
Bottom: Share buttons, related articles grid
```

### Blog Fix: Current Issues

- Fix "All Articles" empty grid (show published articles, or remove grid if only 1 article)
- Fix broken internal link in existing article
- Newsletter section must have actual email capture, not Instagram link

---

## 6. 404 Page

```
Background: warm-white
Illustration: Subtle water drop / mineral crystal graphic (line art, soft-gold)
H1: "This Page Got Lost in the Minerals"
Body: "The page you're looking for doesn't exist. Let's get you back on track."
CTA: "Back to Homepage" (Primary button)
Nav: Standard header remains visible
```

---

## 7. Meta & SEO Structure Per Page

| Page | Title Pattern | Description Pattern |
|---|---|---|
| Homepage | `Salt.Magic — Thailand's Natural Electrolyte Mineralizer` | Answer-first: what it is + key differentiator |
| Blog Listing | `Hydration Science & Wellness — Salt.Magic Blog` | What readers will learn |
| Blog Article | `{Article Title} — Salt.Magic` | Article-specific summary |
| 404 | `Page Not Found — Salt.Magic` | — |

Full meta specifications in `outputs/copy-meta-v1.md`.

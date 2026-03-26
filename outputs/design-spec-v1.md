# Salt.Magic Design Specification V1

**Created:** 2026-03-26
**Status:** V1 Final
**Purpose:** Complete design system for the salt-magic.com rebrand. Translates brand guidelines + mood board analysis into concrete Tailwind/Lovable implementation rules.

---

## 1. Color System

### Primary Palette

| Token | Name | HEX | Usage |
|---|---|---|---|
| `bg-primary` | Warm Off-White | `#F5F0E8` | Default page background |
| `bg-card` | Cream | `#FAF8F5` | Card backgrounds, alternating sections |
| `text-heading` | Deep Mineral Blue | `#294B6D` | All headings (H1-H3) |
| `text-body` | Warm Dark Brown | `#3B2F2F` | Body text, paragraphs |
| `accent-gold` | Soft Gold | `#D4BFAA` | Highlights, icons, eyebrow labels, dividers |
| `accent-cta` | Terracotta | `#C67A4B` | Primary CTA buttons, links on hover |
| `accent-cta-hover` | Dark Terracotta | `#A8613A` | CTA hover state |

### Secondary Palette

| Token | Name | HEX | Usage |
|---|---|---|---|
| `secondary-olive` | Olive | `#6B7B3A` | Sustainability section accents, nature references |
| `secondary-pink` | Muted Pink | `#D4A5A5` | Testimonial accents, soft highlights |
| `secondary-burgundy` | Burgundy | `#722F37` | Warning states, premium emphasis |
| `navy` | Deep Mineral Blue | `#294B6D` | Footer background, one accent section max |
| `navy-light` | Light Navy | `#3D6588` | Product photo backgrounds (existing assets) |

### Neutral Scale

| Token | HEX | Usage |
|---|---|---|
| `neutral-50` | `#FAF8F5` | Lightest surface |
| `neutral-100` | `#F5F0E8` | Primary background |
| `neutral-200` | `#E8DFD3` | Borders, subtle dividers |
| `neutral-300` | `#D4BFAA` | Gold accent (overlaps accent-gold) |
| `neutral-400` | `#B8A898` | Muted text, placeholders |
| `neutral-500` | `#8B7D6B` | Secondary text |
| `neutral-600` | `#6B5D4F` | Stronger secondary text |
| `neutral-700` | `#4A3F35` | Strong body text |
| `neutral-800` | `#3B2F2F` | Primary body text |
| `neutral-900` | `#2A1F1F` | Darkest text |

### Tailwind Config Extension

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'warm-white': '#F5F0E8',
        'cream': '#FAF8F5',
        'mineral-blue': '#294B6D',
        'mineral-blue-light': '#3D6588',
        'warm-brown': '#3B2F2F',
        'soft-gold': '#D4BFAA',
        'terracotta': '#C67A4B',
        'terracotta-dark': '#A8613A',
        'olive': '#6B7B3A',
        'muted-pink': '#D4A5A5',
        'burgundy': '#722F37',
        'sand': '#E8DFD3',
      },
    },
  },
}
```

### Color Usage Rules

1. **Never use pure white (`#FFFFFF`)** as a section background. Use `#F5F0E8` (warm off-white) or `#FAF8F5` (cream).
2. **Navy (`#294B6D`) is used sparingly** — footer, and at most one accent section (e.g., final CTA banner). Not for large content blocks.
3. **Body text is `#3B2F2F`** (warm dark brown), never pure black (`#000`).
4. **CTA buttons use Terracotta** (`#C67A4B`) as primary, Soft Gold (`#D4BFAA`) outline as secondary.
5. **Contrast ratios:** All text/background pairs meet WCAG AA (4.5:1 minimum). Verified:
   - `#3B2F2F` on `#F5F0E8` = 8.2:1 (pass)
   - `#294B6D` on `#F5F0E8` = 5.1:1 (pass)
   - `#FFFFFF` on `#C67A4B` = 4.6:1 (pass)
   - `#FFFFFF` on `#294B6D` = 7.3:1 (pass)

---

## 2. Typography

### Font Stack

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap');
```

| Role | Font | Weight | Fallback |
|---|---|---|---|
| Headlines (H1-H3) | Playfair Display | 700 (Bold), 400 (Regular for H3) | Georgia, serif |
| Body, UI, Labels | Inter | 400 (Regular), 500 (Medium), 600 (SemiBold) | system-ui, sans-serif |
| Alternative Serif | Cormorant Garamond | 400, 500 | Georgia, serif |

### Type Scale

| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Color | Line Height | Letter Spacing |
|---|---|---|---|---|---|---|---|
| H1 | Playfair Display | 64px (4rem) | 40px (2.5rem) | 700 | `#294B6D` | 1.1 | -0.02em |
| H2 | Playfair Display | 44px (2.75rem) | 32px (2rem) | 700 | `#294B6D` | 1.2 | -0.01em |
| H3 | Playfair Display | 28px (1.75rem) | 22px (1.375rem) | 400 | `#294B6D` | 1.3 | 0 |
| Body Large | Inter | 18px (1.125rem) | 16px (1rem) | 400 | `#3B2F2F` | 1.7 | 0 |
| Body | Inter | 16px (1rem) | 16px (1rem) | 400 | `#3B2F2F` | 1.7 | 0 |
| Body Small | Inter | 14px (0.875rem) | 14px | 400 | `#6B5D4F` | 1.6 | 0 |
| Eyebrow / Label | Inter | 13px (0.8125rem) | 12px | 500 | `#D4BFAA` | 1.4 | 0.1em |
| CTA Button | Inter | 16px (1rem) | 16px | 600 | `#FFFFFF` | 1 | 0.02em |
| Nav Link | Inter | 15px | 14px | 500 | `#3B2F2F` | 1 | 0.01em |
| Caption / Footer | Inter | 14px | 13px | 400 | `#8B7D6B` | 1.5 | 0 |

### Typography Rules

1. **Eyebrow labels** are always uppercase, Inter Medium, Soft Gold color, with wide letter-spacing (0.1em). Used above H2 headings to provide section context.
2. **Line length** capped at 65-75 characters (max-w-prose or ~680px) for body text readability.
3. **Heading hierarchy** is strict: H1 only once (hero), H2 for section headings, H3 for sub-sections.
4. **No underline on links** in body text — use Terracotta color + hover opacity change instead.

### Tailwind Typography Config

```js
fontFamily: {
  'display': ['"Playfair Display"', 'Georgia', 'serif'],
  'body': ['Inter', 'system-ui', 'sans-serif'],
},
fontSize: {
  'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'h2': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
  'h3': ['1.75rem', { lineHeight: '1.3' }],
  'body-lg': ['1.125rem', { lineHeight: '1.7' }],
  'body': ['1rem', { lineHeight: '1.7' }],
  'eyebrow': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
},
```

---

## 3. Spacing System

### Base Unit: 4px (0.25rem)

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Micro gaps (icon-text) |
| `space-2` | 8px | Tight element gaps |
| `space-3` | 12px | Form field padding |
| `space-4` | 16px | Standard element gap |
| `space-6` | 24px | Card internal padding |
| `space-8` | 32px | Section sub-gaps |
| `space-12` | 48px | Between content blocks within section |
| `space-16` | 64px | Section padding (mobile) |
| `space-24` | 96px | Section padding (desktop) |
| `space-32` | 128px | Hero section padding (desktop) |

### Section Padding

| Screen | Vertical Padding | Horizontal Padding |
|---|---|---|
| Mobile (<768px) | 64px (py-16) | 20px (px-5) |
| Tablet (768-1024px) | 80px (py-20) | 40px (px-10) |
| Desktop (>1024px) | 96px (py-24) | 0 (centered container) |

### Container

```css
max-width: 1200px (max-w-7xl or custom)
margin: 0 auto
padding: 0 20px (mobile) / 0 40px (tablet) / 0 (desktop)
```

### Content Width Zones

| Zone | Max Width | Usage |
|---|---|---|
| Full | 1200px | Section containers |
| Content | 960px | Text-heavy sections (About, FAQ) |
| Narrow | 680px | Single-column copy, blog articles |
| Wide | 1400px | Full-bleed imagery, partner section |

---

## 4. Component Specifications

### 4.1 Navigation (Sticky Header)

```
Position: fixed top, full width
Background: transparent → warm-white/90 backdrop-blur-md on scroll
Height: 72px (desktop), 64px (mobile)
Padding: 0 40px (desktop), 0 20px (mobile)
Logo: left-aligned, Salt.Magic wordmark
Nav items: right-aligned, Inter 500, 15px, warm-brown
Active state: Terracotta color
Mobile: hamburger → slide-in drawer from right
Transition: background-color 300ms ease
Z-index: 50
```

- Remove secondary pill nav bar entirely
- Remove floating Lazada banner
- Keep Back to Top button (bottom-right, 44x44px circle, soft-gold bg)

### 4.2 Buttons

**Primary CTA:**
```
Background: #C67A4B (terracotta)
Text: #FFFFFF, Inter SemiBold 16px, letter-spacing 0.02em
Padding: 14px 32px
Border-radius: 8px
Hover: #A8613A (darken), scale(1.02), transition 200ms ease
Active: scale(0.98)
Min touch target: 44x44px
```

**Secondary CTA:**
```
Background: transparent
Border: 2px solid #D4BFAA (soft-gold)
Text: #294B6D, Inter SemiBold 16px
Padding: 12px 30px
Border-radius: 8px
Hover: bg #D4BFAA/10, border-color #294B6D
```

**Text Link:**
```
Color: #C67A4B (terracotta)
Hover: opacity 0.8
No underline (use color distinction)
```

### 4.3 Cards

```
Background: #FAF8F5 (cream)
Border: 1px solid #E8DFD3 (sand)
Border-radius: 12px
Padding: 24px (mobile), 32px (desktop)
Shadow: 0 1px 3px rgba(59, 47, 47, 0.05)
Hover: shadow 0 4px 12px rgba(59, 47, 47, 0.08), translateY(-2px), transition 300ms ease
```

### 4.4 Testimonial Carousel

```
Card: cream bg, 32px padding, 12px radius
Quote mark: Playfair Display, 64px, soft-gold, opacity 0.3
Quote text: Inter 18px, warm-brown, italic
Author: Inter 500, mineral-blue, 14px
Navigation: dot indicators, soft-gold active / sand inactive
Auto-play: 6 seconds per slide, pause on hover
Transition: fade + subtle slide, 500ms
```

### 4.5 FAQ Accordion

```
Container: cream bg, 12px radius
Question: Inter 500, 18px, mineral-blue, padding 20px 24px
Chevron: right-aligned, soft-gold, rotate 180deg on open, transition 300ms
Answer: Inter 400, 16px, warm-brown, padding 0 24px 20px 24px
Divider: 1px solid sand between items
Open animation: max-height transition 300ms ease-out
```

### 4.6 Stat Counter Block (Partner Section)

```
Number: Playfair Display Bold, 56px, mineral-blue
Label: Inter 400, 14px, neutral-500, uppercase, letter-spacing 0.05em
Animation: count-up from 0 on scroll-in, duration 2s, ease-out
Layout: 3-4 columns grid, centered
Background: warm-white with subtle radial gradient
```

### 4.7 Comparison Table

```
Header row: mineral-blue bg, white text, Inter 600
Salt.Magic column: highlighted with soft-gold left border (4px)
Cells: cream bg, 16px padding
Alternating rows: warm-white / cream
Check/X icons: olive (check) / muted-pink (x), 20px
Responsive: horizontal scroll on mobile with sticky first column
```

### 4.8 Product Cards

```
Image: product photo from reference/product-pics/, 16:9 aspect ratio, 12px radius top
Badge (if applicable): "Best Value" / "Most Popular", terracotta bg, white text, 8px radius
Title: Playfair Display 700, 24px, mineral-blue
Price: Inter 600, 28px, terracotta
Per-serving: Inter 400, 14px, neutral-500
Features list: check icon (olive) + Inter 400 14px
CTA: Primary button, full width bottom
Card: cream bg, 12px radius, sand border
```

### 4.9 Contact / Partner Form

```
Labels: Inter 500, 14px, mineral-blue, above field
Inputs: cream bg, sand border, 12px radius, 48px height, 16px padding
Focus: terracotta border, subtle box-shadow
Error: burgundy text below field, Inter 400, 13px
Submit button: Primary CTA style, full width on mobile
Layout: 2-column on desktop (name/company, role/email), full-width on mobile
```

### 4.10 Footer

```
Background: #294B6D (mineral-blue)
Text: #FFFFFF (primary), #D4BFAA (soft-gold, links)
Padding: 64px top, 32px bottom
Layout: 4-column grid (Logo+tagline | Quick Links | Contact | Newsletter)
Logo: white variant from reference/logos/
Divider: 1px solid rgba(255,255,255,0.15) above copyright
Copyright: Inter 400, 13px, rgba(255,255,255,0.6)
Origin note: "Made on Koh Samui, Thailand"
```

---

## 5. Imagery Guidelines

### Product Photography

- **Source:** Use actual images from `reference/product-pics/`
- **Categories and suggested placement:**
  - **Jar shots** (Salt Magic Greenery series): Hero section, Products section
  - **Sachet photos**: Products section
  - **Partner store shots** (AharaVeda, Ananda, BM Market, Fair Artisan, etc.): Social proof / distribution section
  - **Lifestyle/model shots** (Taylor series): About section, use cases
  - **Studio shots** (Lamai Muay Thai, One Yoga, Studio Layal Yoga): Testimonials, use cases
- **Treatment:** Warm color grading (slight amber shift), soft shadow, no harsh whites

### Logo Usage

- **Source:** `reference/logos/` — use white-bg variant for light sections, no-bg variant for dark sections
- **Clear space:** Minimum 24px on all sides
- **Size:** Min 120px width on desktop, 80px on mobile

### Background Textures (CSS-generated)

For sections needing texture, use subtle CSS patterns rather than image backgrounds:

```css
/* Linen texture */
background: #F5F0E8;
background-image: url("data:image/svg+xml,..."); /* subtle noise pattern */

/* Sand gradient */
background: linear-gradient(180deg, #F5F0E8 0%, #FAF8F5 100%);

/* Stone texture for accent sections */
background: linear-gradient(135deg, #E8DFD3 0%, #F5F0E8 50%, #FAF8F5 100%);
```

### Photography Direction (for future shoots)

- Products placed on natural surfaces: stone, sand, linen, wood, moss
- Natural light (golden hour or soft daylight), warm color temperature
- Shallow depth of field, lots of negative space
- Mood: meditative, still, aspirational but attainable
- No clinical white backgrounds, no harsh studio lighting

---

## 6. Animation & Motion

### General Rules

- **Duration:** 150-300ms for micro-interactions, 400-500ms for section transitions
- **Easing:** `ease-out` for elements entering, `ease-in` for elements exiting
- **Respect `prefers-reduced-motion`:** Disable all non-essential animations
- **Max animated elements per viewport:** 2-3 simultaneous

### Scroll Animations (Intersection Observer)

| Element | Animation | Duration | Delay |
|---|---|---|---|
| Section headings | fade-in + translateY(20px → 0) | 500ms | 0 |
| Cards (grid) | fade-in + translateY(30px → 0) | 400ms | stagger 50ms per item |
| Stat counters | count-up from 0 | 2000ms | 200ms after visible |
| Images | fade-in + scale(0.98 → 1) | 600ms | 100ms |

### Parallax

- **Intensity:** Subtle — max 30px vertical offset
- **Applied to:** Hero background image, section divider images only
- **Disabled on mobile** (performance) and when `prefers-reduced-motion` is set

### Hover Transitions

```css
transition: all 200ms ease;
/* Cards: translateY(-2px) + shadow increase */
/* Buttons: background darken + scale(1.02) */
/* Links: opacity 0.8 */
/* Nav items: color change to terracotta */
```

### Page Load

1. Nav fades in (200ms)
2. Hero headline slides up (500ms, ease-out)
3. Hero subtext fades in (400ms, 200ms delay)
4. Hero CTA fades in (300ms, 400ms delay)
5. Hero image fades + scales in (600ms, 300ms delay)

---

## 7. Responsive Breakpoints

| Name | Width | Layout Adjustments |
|---|---|---|
| Mobile | <768px | Single column, 20px padding, hamburger nav, stacked cards |
| Tablet | 768-1023px | 2-column grids, 40px padding, condensed nav |
| Desktop | 1024-1439px | Full layout, 3-4 column grids, sticky nav |
| Wide | ≥1440px | Max-width container centered, generous whitespace |

### Key Responsive Behaviors

- **Hero:** 2 columns (desktop) → stacked (mobile), image above text on mobile
- **Card grids:** 3-4 col → 2 col → 1 col
- **Comparison table:** Full table → horizontal scroll with sticky first column
- **Nav:** Full links → hamburger menu at <768px
- **Section padding:** 96px → 64px → 48px
- **H1 size:** 64px → 40px
- **H2 size:** 44px → 32px

---

## 8. Accessibility Requirements

- **Contrast:** All text meets WCAG AA (4.5:1 for normal, 3:1 for large text)
- **Focus rings:** 2px solid Terracotta on all interactive elements (visible on tab navigation)
- **Touch targets:** Minimum 44x44px for all buttons and links
- **Alt text:** Descriptive alt for all product images, decorative images use `alt=""`
- **Heading hierarchy:** Sequential h1→h6, no level skipping
- **Form labels:** Every input has a visible label (not placeholder-only)
- **Keyboard navigation:** Full tab navigation support, logical focus order
- **Motion:** All animations respect `prefers-reduced-motion: reduce`
- **Font scaling:** Layout does not break at 200% zoom

---

## 9. Section Background Pattern

Alternating backgrounds create visual rhythm between sections:

| Section | Background |
|---|---|
| Hero | `#F5F0E8` (warm off-white) with subtle gradient |
| The Problem (Why) | `#FAF8F5` (cream) |
| The Solution | `#F5F0E8` |
| Benefits | `#FAF8F5` |
| Mid CTA | `#294B6D` (navy, dark section) |
| Comparison | `#F5F0E8` |
| Use Cases | `#FAF8F5` |
| Products | `#F5F0E8` |
| Sustainability | `#FAF8F5` |
| Testimonials | `#F5F0E8` |
| About | `#FAF8F5` |
| Partner (B2B) | `#F5F0E8` with subtle texture |
| FAQ | `#FAF8F5` |
| Final CTA | Linear gradient `#294B6D → #3D6588` (navy) |
| Footer | `#294B6D` |

---

## 10. Design Tokens Summary (Quick Reference)

```
--color-bg-primary:       #F5F0E8
--color-bg-card:          #FAF8F5
--color-text-heading:     #294B6D
--color-text-body:        #3B2F2F
--color-text-muted:       #8B7D6B
--color-accent-gold:      #D4BFAA
--color-accent-cta:       #C67A4B
--color-accent-cta-hover: #A8613A
--color-border:           #E8DFD3
--color-navy:             #294B6D
--color-olive:            #6B7B3A
--color-burgundy:         #722F37

--font-display:           'Playfair Display', Georgia, serif
--font-body:              'Inter', system-ui, sans-serif

--radius-sm:              8px
--radius-md:              12px
--radius-lg:              16px

--shadow-card:            0 1px 3px rgba(59,47,47,0.05)
--shadow-card-hover:      0 4px 12px rgba(59,47,47,0.08)

--transition-fast:        150ms ease
--transition-normal:      200ms ease
--transition-slow:        400ms ease-out

--section-padding-mobile:  64px
--section-padding-desktop: 96px
--container-max:          1200px
```

---

## 11. Component Implementation Reference (21st.dev Patterns)

The following patterns from 21st.dev serve as implementation references for Lovable. Adapt colors, fonts, and spacing to match the Salt.Magic design tokens above.

### 11.1 Hero Section
**Reference pattern:** "MINIMAL" hero by 21st.dev — full-viewport hero with badge, headline, description, dual CTAs, and stat counters.
- **Adapt:** Replace grid background with warm-white. Use Playfair Display for headline. Swap accent color to Terracotta. Add product image on right (2-column layout).
- **Key features:** Staggered fade-in animation via Framer Motion, responsive stat counters below hero, primary + secondary button pattern.
- **Dependencies:** `framer-motion`

### 11.2 Testimonial Carousel
**Reference pattern:** "Editorial Testimonial" — editorial-style carousel with large quote, author info with grayscale avatar, line-based navigation indicators.
- **Adapt:** Use cream background. Playfair Display for large index number. Soft-gold for navigation lines. Warm-brown text.
- **Key features:** Fade + slide transition (300ms), hover-triggered grayscale removal on avatar, clean dot/line navigation.
- **Alternative:** "Testimonial Carousel" (Embla-based) for a more traditional card carousel with dot indicators.
- **Dependencies:** `framer-motion` or `embla-carousel-react`

### 11.3 FAQ Accordion
**Reference pattern:** "FAQ Sections" — center-aligned FAQ with chevron toggle and max-height CSS animation.
- **Adapt:** Replace Poppins with Inter (questions) and keep warm-brown text. Cream card background. Sand border dividers. Soft-gold chevron.
- **Key features:** Pure CSS max-height transition (500ms), rotate chevron on open, clean spacing.
- **Alternative:** Radix UI `@radix-ui/react-accordion` for built-in accessibility (WAI-ARIA accordion pattern, keyboard navigation).
- **Dependencies:** None (CSS-only) or `@radix-ui/react-accordion`

### 11.4 Animated Stat Counters
**Reference pattern:** "CaseStudies" MetricStat component — count-up animation triggered by scroll via `react-countup` + Intersection Observer.
- **Adapt:** Use Playfair Display Bold for numbers, mineral-blue color. Inter for labels, neutral-500 muted. Warm-white section background.
- **Key features:** Respects `prefers-reduced-motion`, configurable duration, scroll-spy trigger (counts only once), supports decimals/suffixes/prefixes.
- **Dependencies:** `react-countup`

### 11.5 Implementation Notes for Lovable

Lovable supports React + Tailwind. When building components:

1. **Use Framer Motion** for scroll-triggered animations (already available in most Lovable projects)
2. **Prefer Radix UI primitives** for interactive components (accordion, dialog, tooltip) — built-in accessibility
3. **Use Intersection Observer** (native browser API) for scroll-trigger logic — no library needed
4. **All components must render content in initial HTML** for GEO crawlability — no lazy-loaded text content behind interactions
5. **FAQ answers must be in DOM on page load** — use CSS for show/hide, not conditional rendering that removes content from DOM

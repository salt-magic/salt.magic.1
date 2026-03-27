# CLAUDE.md

This file gives Claude Code instructions for working in this repository.

---

## What This Is

This is the **Salt.Magic Website Rebrand Workspace** — a structured environment for planning and executing a complete website rebrand for Salt.Magic, Thailand's premier all-natural daily electrolyte mineralizer.

The site is built on **Lovable** and lives at **salt-magic.com**. The rebrand covers new visual design, new copy & messaging, and refreshed content — while keeping the existing site structure/pages largely the same.

**This file (CLAUDE.md) is the foundation.** It's loaded automatically at the start of every session. Keep it current — it's the single source of truth for how Claude should understand and work in this workspace.

---

## The Claude-User Relationship

Claude works as an **agent assistant** with access to workspace folders, context files, commands, and outputs. The relationship is:

- **User (Leo):** Founder & CEO of Salt.Magic. Defines goals, provides brand direction, and steers the work via commands
- **Claude:** Reads context, understands brand and business goals, executes commands, produces outputs, and maintains workspace consistency

Claude should always orient via `/prime` at session start, then act with full awareness of who the user is, what he's building, and how this workspace supports that.

---

## Project Scope: Website Rebrand

**Platform:** Lovable (salt-magic.com)

**What's changing:**
- New visual design / look & feel
- New copy & messaging — must be crystal clear and GEO-optimized (Generative Engine Optimization: structured for AI search engines like ChatGPT, Perplexity, Google AI Overviews to surface and cite Salt.Magic content)
- Refreshed brand presentation

**What stays:**
- Existing site structure and pages (largely the same)

**Target audience:** Both D2C customers (health-conscious consumers, expats, families) and B2B distributors (pharmacies, retail chains, wellness hubs)

**Design references:** Luxo Webflow Template (V1 Basis), dann V2 Upgrade basierend auf Grown Alchemist, Sakara Life, PANPURI, Cure Hydration — "Elevated Natural Luxury" Stilrichtung

**Current status:** V8 Complete Reference-Style Redesign (2026-03-27). Next.js 14 + Tailwind CSS + Framer Motion unter `site/`.

Key Changes in V8 Session (Complete Reference-Style Redesign):
- **Hero redesigned**: Text zentriert, groessere Headline (`clamp(44px,6.5vw,72px)`), Eyebrow in Golden-Hour Farbe, waermerer Gradient-Overlay (transparent->55% warm), Pill-Button + Tertiaer-Link, Gold-Bar Slide-Indikatoren mit 44px Touch-Targets
- **WhySection als Asymmetric Split**: Poolside-Foto links (60%), Text rechts (40%) mit Eyebrow + Pull-Quote + 3 Icon-Badges (Zero Sugar, 100% Natural, 7x Magnesium). Reduced-motion Support
- **Products PANPURI-Stil**: Borders und Schatten entfernt, Underline-Links statt Pill-Buttons, Playfair Regular statt Bold, Links auf Lazada
- **Benefits minimalisiert**: Keine Card-Rahmen mehr, nur Icon + Label + Text. Icons in Gold mit Hover zu Mineral-Blue. aria-hidden auf dekorativen SVGs
- **Testimonials Editorial**: Einzelnes grosses Quote (Playfair Italic 30px) mit 160px Anfuehrungszeichen (Gold, 15% Opacity), Gold-Bar Navigation mit 44px Touch-Targets, Pause on Hover, 8s Auto-Play
- **SocialProof upgraded**: Groessere Playfair-Zahlen (64px), animierter CountUp (1.5s ease-out cubic), Golden-Hour Labels
- **ForEveryone.tsx** (NEU): Eigene Component statt Inline-JSX, Reversed Split (Text links, Alo-Lifestyle-Bild rechts), Wellness-vs-Sports Mini-Cards, next/image mit lazy loading
- **CtaBanner immersiv**: Kein Card mehr — Immersiver dunkler Gradient (deep-navy->mineral) mit PANPURI Silhouetten-Bild als Hintergrund (85% Overlay-Opacity), zentrierter Content
- **Ingredients modernisiert**: Horizontales Layout (grosse Zahl links + Name/Benefit rechts), Gold-Line Trenner, botanische Illustration als Hintergrund (4% Opacity)
- **Mood-Board-Bilder integriert**: 10 Bilder aus reference/mood-board/ nach site/public/images/mood/ kopiert. Verwendet in: CtaBanner (panpuri-3), ImageBreak (marocmaroc-2), ForEveryone (alo-1), Ingredients (botanical-illustration)
- **Spacing reduziert**: Section-Padding von `clamp(80px,12vw,160px)` auf `clamp(64px,8vw,100px)` — weniger Weissflaeche
- **Neue Tailwind-Tokens**: `deep-navy: '#1A3248'`, `golden-hour: '#E8C9A0'`
- **transition-all eliminiert**: Durch spezifische `transition-colors` ersetzt (Performance)
- **Dead Links gefixt**: Alle `href="#"` in Nav/Products durch echte Ziele ersetzt
- **UI/UX Audit durchgefuehrt**: 5 Critical, 8 High, 10 Medium Findings identifiziert und gefixt (Touch-Targets, Accessibility, Performance, Consistency)
- **Neue Components**: ForEveryone.tsx
- **Neue Bilder**: site/public/images/mood/ (10 Mood-Board-Bilder)

Key Changes in V7 Session (Reference Vibe Upgrade):
- **AnnouncementBar eingebunden**: War als Component vorhanden, wird jetzt in `layout.tsx` gerendert (Marquee mit Brand-Messages)
- **Headline-Upgrade**: Alle Section-Headlines von `font-bold` auf `font-normal` (Editorial-Stil), Groessen von `clamp(32px,5vw,48px)` auf `clamp(36px,5.5vw,56px)`, Hero `.headline-editorial` auf `4rem`
- **Eyebrow-Labels durchgehend**: Alle TextBlock-Sections haben jetzt `eyebrow` + `showGoldLine` Props (The Problem, The Formula, Shop Salt.Magic, For Everyone, Our Origin)
- **Gold-Lines in Components**: Comparison ("How We Compare"), Benefits ("Daily Benefits"), Faq ("Questions") haben eigene Gold-Lines + Eyebrow-Labels
- **Alternierende Section-Backgrounds**: Neues Farb-Token `warm-off: #F9F7F4` — Ingredients, Benefits, Testimonials, FAQ in `bg-warm-off` fuer visuellen Weiss↔Warm-Off Rhythmus
- **TrustBand.tsx** (NEU): Dezentes Trust-Signal nach Hero — "Trusted by 150+ wellness locations" + 6 Location-Namen (Koh Samui, Bangkok, etc.)
- **Newsletter.tsx** (NEU): Eigenstaendige Newsletter-Section vor Footer mit E-Mail-Input + Subscribe-Button (Frontend-only, Backend-Integration spaeter)
- **Tertiaer-Button-Stil**: Neuer `.link-underline` CSS-Klasse fuer dezente Underline-Links, eingesetzt in Story-Section ("Read the full story")
- **Neue CSS-Klassen**: `.link-underline` (tertiaerer Button-Stil mit Gold-Underline)
- **Neue Components**: TrustBand.tsx, Newsletter.tsx

Key Changes in V6 Session (Multi-Page, Blog, Partner):
- **Multi-Page-Routing**: Site hat jetzt 4 Routen: `/`, `/partner`, `/blog`, `/blog/[slug]`
- **Partner-Seite** (`/partner`): Vollstaendige B2B-Landingpage mit PartnerHero, MarketStats, Comparison, DistributionTiers, RevenueModel, SocialProof, LocationMap, PartnerForm
- **Blog-Seite** (`/blog`): Listing im Luxo-Stil mit 4-Spalten-Grid und BlogCard-Components
- **Blog-Artikel** (`/blog/[slug]`): Full-Width Hero mit Gradient-Platzhalter, zentrierter Titel, schmale Content-Spalte, Blockquotes mit Anfuehrungszeichen-Icon
- **Blog-Content**: 2 Artikel als statische TS-Dateien in `site/content/blog/` (dead-water-crisis, wellness-vs-sports-electrolytes)
- **BlogSection auf Homepage**: 4-Spalten Luxo-Grid Teaser zwischen Testimonials und Story
- **Partner.tsx umgebaut**: Von 2-Spalten (Info + Formular) zu kompaktem Mineral-Blue Teaser mit CTA-Link zu `/partner`
- **Cream/Beige entfernt**: Alle `bg-cream` Sections auf `bg-warm-white` umgestellt, `.section-fade-to/from-cream` neutralisiert, `.texture-linen` bleibt aber wird nicht mehr auf Cream-Sections genutzt
- **Nav aktualisiert**: `usePathname()` fuer Multi-Page, Blog + Partner als eigene Route-Links, scrolled-State sofort aktiv auf Unterseiten, Anchor-Links als `/#why` prefixed fuer Unterseiten-Navigation
- **Footer aktualisiert**: Blog- und Partner-Links, Anchor-Links als `/#why` etc.
- **Neue Components**: PartnerHero, DistributionTiers, RevenueModel, PartnerForm, LocationMap, BlogCard, BlogSection
- **Hintergrund weiss**: `warm-white` von `#F8F5F0` auf `#FFFFFF` geaendert, body-BG ebenfalls `#FFFFFF`
- **Customer Journey Reorder**: Homepage-Sections nach AIDA-Funnel umgeordnet (Attention→Interest→Desire→Trust→Brand→Action)
- **MarketStats + Team von Homepage entfernt**: Nur noch auf `/partner`, nicht mehr auf D2C-Homepage
- **Products frueher im Funnel**: Von Section 11 auf Section 5 verschoben
- **2 Zwischenstop-CTAs eingefuegt**: "Shop Now" nach Products, "Start Your Daily Mineral Routine" nach For-Everyone
- **B2B-Sprache entfernt**: "4.4x more value per customer" ersetzt durch "Daily minerals, not occasional recovery."
- **Spacer normalisiert**: Einheitlich `clamp(80px,12vw,140px)` statt Mischung aus 60-200px
- **UX Fixes**: Blog-Hero groesser (70vh), staerkere Gradients, Nav sofort `top-0` auf Unterseiten, Blog-Grid adaptiv (2 Spalten bei 2 Artikeln), DistributionTiers Tier 2 highlighted, RevenueModel mobile Cards

Key Changes in V5 Session (PDF Content Integration):
- **MarketStats.tsx** (NEU): 3-Spalten Cream-Section mit 85% Dead Water, $69.1B Market, 8.2% CAGR — nach #why platziert
- **Benefits.tsx** (NEU): 8-Item Icon-Grid (Hydration, Sleep, Focus, Digestion, Recovery, Hangover, Workout, All Ages) — nach Comparison
- **SocialProof.tsx** (NEU): Mineral-Blue Zahlenleiste (90% Retention, 150+ Locations, 5 Years, 365 Days) — vor Products
- **Comparison.tsx** erweitert: 3 neue Text-Zeilen (Mineral Source, Daily Use, Target) mit Haekchen-Icons fuer Salt.Magic
- **"For Everyone" Section** erweitert: Wellness vs Fitness 2-Spalten-Vergleich + "4.4x more value" Statement
- **Faq.tsx** erweitert: 2 neue FAQs (Dead Water Erklaerung, Wellness vs Sports Electrolytes), erweiterte Standort-Liste

Key Changes in V4 Session (Mood-Board Warm Shift):
- **Farbpalette:** `warm-white` von `#FFFFFF` auf `#F8F5F0`, `cream` von `#FAF8F5` auf `#F2EDE6` — sichtbar waermere Basis
- **Hero:** Overlay von kaltem `bg-black/40` zu warmem Golden-Hour-Gradient (amber-braun -> mineral-blue), Film-Grain leicht verstaerkt
- **Cream-Sections:** Ingredients + Testimonials in `bg-cream` mit CSS-Leinentextur (`.texture-linen`) und sanften Gradient-Fades an den Raendern
- **Botanischer Divider:** Neues `variant="botanical"` fuer Divider.tsx — handgezeichnetes SVG mit 3 Kraeutern (Petersilie, Lavendel, Wildblume), inspiriert vom Gemini Mood-Board-Bild
- **CtaBanner:** Waermerer Overlay-Gradient und warmer Schatten auf der Card
- **Products:** Weichere Ecken (rounded-2xl), warmer Hover-Shadow
- **Footer:** Dezenter Gold-Strich entlang der Wave-Oberkante
- **Neue CSS-Klassen:** `.texture-linen`, `.section-fade-to-cream`, `.section-fade-from-cream`

Key Changes in V3 Session:
- **Nav:** Echtes PNG-Logo (80px, weiss->blau on scroll), focus-visible States, text-shadow fuer Lesbarkeit, verbesserte Scroll-Transition
- **Hero:** Luxo-Style Overlay, weisser Primary CTA, Film-Grain-Texture, `object-position: center 35%`, reduced-motion Support
- **Bilder:** Alle Produktfotos durch hoechstaufloesende Versionen ersetzt, Logos optimiert (1024px->160px, -90%), externe Framer-URLs lokal gespeichert
- **Performance:** 23 Zombie-Node-Prozesse bereinigt, korrupten .next Cache geloescht, ~990KB weniger Bildgewicht
- **Accessibility:** Skip-to-content Link, focus-visible auf allen interaktiven Elementen, reduced-motion fuer Marquee + Hero-Carousel, Form-Labels, Footer-Kontrast verbessert
- **Neue Components:** Team.tsx (Placeholder mit Initialen, wartet auf Portrait-Fotos), Divider.tsx ueberarbeitet (transparentes Logo, scroll-triggered Animation)

Brand Colors: Mineral Blue #294B6D, Soft Gold #D4BFAA, Warm Charcoal #3C3028. Basis: Pure White #FFFFFF. Warm-Off #F9F7F4 fuer alternating Section-Backgrounds. Cream #F2EDE6 bleibt in Config aber ungenutzt. Kein Terracotta.

**Key brand assets available in `reference/`:**
- Brand guidelines (`reference/brand-guidelines/`)
- Product photography (`reference/product-pics/`)
- Mood board / vibe images (`reference/mood-board/`)
- Logos (`reference/logos/`)
- Business plan & distribution proposal for messaging context

**V1 Rebrand Outputs (in `outputs/`):**
- `outputs/design-spec-v1.md` — Complete design system (colors, typography, spacing, components, animations, responsive rules)
- `outputs/copy-homepage-v1.md` — Full GEO-optimized homepage copy, section by section (14 sections)
- `outputs/copy-meta-v1.md` — Page titles, meta descriptions, Open Graph tags, structured data (JSON-LD)
- `outputs/sitemap-v1.md` — Site structure, navigation, routing, footer, blog, 404 page
- `outputs/website-audit-current.md` — Current site audit (21 issues identified, all addressed in V1 spec)

---

## Workspace Structure

```
.
├── CLAUDE.md              # This file — core context, always loaded
├── .claude/
│   └── commands/          # Slash commands Claude can execute
│       ├── prime.md       # /prime — Session initialization
│       ├── create-plan.md # /create-plan — Create implementation plans
│       ├── implement.md   # /implement — Execute plans
│       └── shutdown.md    # /shutdown — Clean session end
├── context/               # Background context about user, business, strategy
│   ├── business-info.md   # Salt.Magic company overview & product details
│   ├── personal-info.md   # Leo's role & responsibilities
│   ├── strategy.md        # 2026 strategic priorities
│   ├── current-data.md    # Key metrics & market data
│   └── brand-guidelines.md # Brand colors, typography, design rules & mood-board analysis
├── plans/                 # Implementation plans created by /create-plan
├── outputs/               # Work products and deliverables
├── reference/             # Brand assets, templates, reusable patterns
│   ├── brand-guidelines/  # Brand guidelines document
│   ├── product-pics/      # Product photography
│   ├── mood-board/        # Vibe/aesthetic reference images
│   └── logos/             # Logo variants
├── site/                  # Next.js 14 React project (V6 Multi-Page)
│   ├── app/               # App Router: /, /partner, /blog, /blog/[slug]
│   ├── components/        # React components (Nav, Hero, BlogCard, BlogSection, PartnerHero, etc.)
│   ├── content/blog/      # Static blog articles as TS files
│   └── public/images/     # Optimized product photos and logos
└── scripts/               # Automation scripts (if applicable)
```

| Directory    | Purpose                                                                 |
| ------------ | ----------------------------------------------------------------------- |
| `context/`   | Who the user is, role, priorities, strategy. Read by `/prime`.          |
| `plans/`     | Detailed plans. Created with `/create-plan`, executed with `/implement`.|
| `outputs/`   | Deliverables: copy drafts, design specs, page content, analysis.       |
| `reference/` | Brand assets, guidelines, product photos, mood board, templates.       |
| `site/`      | Next.js React project. Run `cd site && npm run dev` for dev server.    |
| `scripts/`   | Automation and tooling scripts.                                        |

---

## Commands

### /prime

**Purpose:** Initialize a new session with full context awareness.

Run at the start of every session. Claude will:

1. Read CLAUDE.md and context files
2. Summarize understanding of user, workspace, and goals
3. Confirm readiness to assist

### /create-plan [requirement]

**Purpose:** Create a detailed implementation plan before making changes.

Use when adding new functionality, commands, scripts, or making structural changes. Generates a thorough plan document in `plans/` capturing context, rationale, and step-by-step tasks.

Example: `/create-plan homepage copy rewrite`

### /implement [plan-path]

**Purpose:** Execute a plan created with /create-plan.

Reads the plan, executes each step sequentially, validates work, and updates plan status.

Example: `/implement plans/2026-03-26-homepage-copy-rewrite.md`

### /shutdown

**Purpose:** End a session cleanly — scan workspace, clean up, update CLAUDE.md, commit and push.

Run at the end of every session. Claude will review the workspace, remove temp files, update documentation, and provide a summary.

---

## Critical Instruction: Maintain This File

**Whenever Claude makes changes to the workspace, Claude MUST check if CLAUDE.md needs updating.**

After any change — whether commands, scripts, workflows, or structural changes — ask:

1. Does this change add new functionality users need to know about?
2. Does it change the workspace structure documented above?
3. Should a new command be listed?
4. Does context/ need new files for this?

If yes, update the relevant sections. This file must always reflect the current workspace state so future sessions have accurate context.

---

## Session Workflow

1. **Start:** Run `/prime` to load context
2. **Work:** Use commands or task Claude directly
3. **Plan changes:** Use `/create-plan` before major additions
4. **Execute:** Use `/implement` to carry out plans
5. **Maintain:** Claude updates CLAUDE.md and context/ as the workspace evolves

---

## Notes

- Keep context minimal but sufficient — no bloat
- Plans in `plans/` with dated filenames for history
- Outputs organized by type/purpose in `outputs/`
- Reference materials in `reference/` for reuse
- All content should align with Salt.Magic brand guidelines
- When design references arrive, add them to this file or `reference/mood-board/`

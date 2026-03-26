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

**Design references:** Luxo Webflow Template (luxo-128.webflow.io) — Premium Spa/Wellness Aesthetic als Hauptreferenz fuer visuellen Stil

**Current status:** Luxo-Style Redesign implementiert (2026-03-26). Next.js 14 + Tailwind CSS + Framer Motion Projekt unter `site/`. Weisser Hintergrund, zentriertes Logo in Nav, Hero-Slider mit Pfeilen und Auto-Advance, Framer Motion Animationen (FadeIn, Stagger, Parallax, AnimatePresence), Overlap-CTA-Card, Mineral-Blue SVG-Welle im Footer. Alle Scroll-Animationen nutzen Framer Motion statt CSS Intersection Observer.

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
├── site/                  # Next.js 14 React project (Preview V3 implementation)
│   ├── app/               # App Router pages and layout
│   ├── components/        # React components (Nav, Hero, Products, FAQ, etc.)
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

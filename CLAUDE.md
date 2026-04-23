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

**Current status:** V31 Trockenuebung Leo Onboarding (2026-04-23). Kerstin hat Leo-Flow als Trockenuebung in eigener Claude Desktop App durchgespielt, 14 Erkenntnisse gesammelt, englische HTML-Anleitung fuer Leo Freitag erstellt. Leo hat bestaetigt dass Claude-Code-Tab in seiner Desktop App sichtbar ist → V30.1-Pro-Plan-Unsicherheit entschaerft, API-Key-Fallback nicht mehr noetig. Einschulung 2026-04-24. Next.js 14 + Tailwind CSS + Framer Motion unter `site/`.

Key Changes in V31 Session (Leo Onboarding Dry Run — 2026-04-23):
- **Anlass**: Vor Freitags-Einschulung von Leo wollte Kerstin die urspruengliche Anleitung `outputs/leo-onboarding-freitag.md` selbst durchspielen (als ob sie Leo waere), um Stolperstellen zu identifizieren. Plan: `C:\Users\offic\.claude\plans\ich-m-chte-heute-bei-declarative-storm.md`
- **Setup**: Kerstin legte frischen Ordner `C:\Users\offic\Desktop\leo-TEST\` an, oeffnete ihn via "Select folder..." in Desktop App Code-Tab, liess Claude Leos Repo `salt-magic/salt.magic.1.git` reinclonen. Separat von v2-Workspace, kein Kreuzkontakt
- **Leo-Flow komplett durchlaufen**: Tools-Install-Check (alles schon da) → gh auth status → git clone (Claude brauchte init+pull Workaround wegen `.claude/` Ordner) → pwd verifiziert (`/c/Users/offic/Desktop/leo-TEST`) → npm install + dev server auf `localhost:3001` (3000 war von v2 belegt) → Hot-Reload-Test mit "(V31 TEST)" in Hero → Rollback → echter Commit mit `<!-- V31 Dry Run ... -->` HTML-Kommentar in CLAUDE.md → Push zu Leos Repo → Vercel-Deploy verifiziert auf salt-magic.com (unveraendert, da CLAUDE.md nicht im Build)
- **Commit-Hash**: `4391437 V31 dry run: Kerstin verified Leo onboarding flow` auf Leos Repo; via `git merge --ff-only leo/main` in v2-Workspace gepullt
- **14 Erkenntnisse fuer die Anleitung**:
  1. Button heisst **"Select folder..."** (nicht "Add Project" wie frueher vermutet) — unten ueber Chat-Input
  2. Der ausgewaehlte Ordner-Name wird direkt im Button angezeigt (Orientierungshilfe)
  3. Session bekommt automatisch einen Namen aus der ersten Anfrage, erscheint links unter "Recents"
  4. Desktop App Titelleiste zeigt **Repo-Name**, nicht Ordner-Name (kosmetisch verwirrend)
  5. **Dependencies via Chat installierbar**: `Please install git, node, gh` — kein Browser-Download noetig. Bei Leo wird `winget install` ausgefuehrt, UAC-Popup kommt
  6. `npm install` dauert 2-3 Minuten beim ersten Mal — Anleitung muss sagen "ist nicht eingefroren, einfach warten"
  7. Wenn Port 3000 belegt ist, wechselt Next.js automatisch auf 3001 etc. Leo muss die URL aus dem Chat nehmen, nicht hardcoded 3000 aufrufen
  8. **Slash-Commands (`/create-plan`, `/implement` etc.) funktionieren nicht im Desktop-App-Autocomplete-Dropdown** — die Dateien sind da, werden aber nicht erkannt. Workaround: `Follow instructions in .claude/commands/create-plan.md for this change`
  9. **Desktop App legt automatisch Side-Branches an** (`claude/pensive-haslett-faa873` etc.) bei komplexeren Aenderungen — Leo kann explizit `work directly on main, no side branch` sagen
  10. **Cleanup-Skill**: `Clean up the experimental branch and go back to main` funktioniert reibungslos
  11. Desktop App nutzt **Git Worktrees** (nicht simple Branches), physisch unter `.claude/worktrees/` — fortgeschritten, muss Leo nicht verstehen
  12. Claude fragt vor destruktiven Ops (cd, rm, git branch -D) immer um Erlaubnis — **Allow once** statt "Always allow"
  13. Autocomplete-Dropdown fuer Slash-Commands zeigt nur globale Commands aus `~/.claude/commands/`, nicht Projekt-Commands
  14. Windows File-Lock auf geloeschten Worktree-Ordnern ist harmlos (leerer Ordner bleibt, verschwindet nach Session-Ende)
- **Luecke in alter Anleitung aufgedeckt**: **Git-Identitaet setzen** (`git config --global user.name` + `user.email`) fehlte komplett. Ohne diesen Schritt scheitert Leos erster Commit mit "Author identity unknown"-Error. In neue HTML-Anleitung als eigene Section eingebaut
- **Neue Anleitung erstellt**: `outputs/leo-onboarding.html` — komplett auf Englisch, Salt.Magic-Branding (Mineral Blue + Gold, Playfair + Inter Fonts), 12 Sections (Prep → Code Tab → Folder → Install → Git Identity → GitHub Login → Clone → Dev Server → First Edit with Safety Net → Commit/Push → Quick Reference Card → Troubleshooting) + Final Checklist zum Abhaken. Gestylte Prompt-Boxen "TYPE THIS IN THE CHAT", Callout-Boxen (Info/Tip/Warning/Danger), Reference-Card mit Cheat-Sheet-Tabellen, responsive fuer Laptop + Mobile. Standalone HTML (inline CSS, nur Google Fonts extern)
- **Alte Anleitung `outputs/leo-onboarding-freitag.md`** bleibt bestehen als deutsches Pendant, koennte bei naechster Gelegenheit auf V31-Stand aktualisiert oder geloescht werden
- **V30.1 Pro-Plan-Unsicherheit aufgeloest**: Leo bestaetigt dass Code-Tab bei ihm sichtbar ist (Anthropic's "existing Pro user nicht betroffen"-Aussage stimmt fuer ihn). API-Key-Fallback-Pfad bleibt dokumentiert in `outputs/leo-onboarding-freitag.md`, wird Freitag voraussichtlich nicht gebraucht
- **leo-TEST Ordner** bleibt auf Kerstins Desktop als Sandbox fuer zukuenftige Tests; kann bei Bedarf manuell geloescht werden
- **Offene Punkte**:
  - Donnerstag Abend: Kerstin fragt Leo kurz ob "/" im Chat-Input ein Autocomplete-Dropdown zeigt (und falls ja, ob /create-plan/etc. drin sind) → das finalisiert ob Anleitungs-Workaround gebraucht wird
  - Freitag live mit Leo: er durchlaeuft die neue HTML-Anleitung als primary guide, Kerstin hilft
  - Falls Freitag glatt: naechster Follow-up-Block "Tag 2: Branches, PRs, Vercel Preview Deployments" als separate Anleitung
  - HTML-Kommentar `<!-- V31 Dry Run ... -->` am Ende von CLAUDE.md kann irgendwann entfernt werden (optional, harmlos)

Key Changes in V30.1 Session (Claude Code Pro Uncertainty — 2026-04-22):
- **Auslöser**: Kerstins Screenshot von claude.com/pricing zeigte Claude Code ❌ bei Pro, ✓ erst ab Max 5x ($100/Monat)
- **Recherche-Ergebnis (22.04.2026, mehrere Quellen)**: Anthropic hat am oder um den 21.04.2026 Claude Code stillschweigend aus Pro entfernt. KEIN offizieller Blogpost/Tweet/Mail. Einziges Statement: Amol Avasare (Anthropic Head of Growth) gegenueber Journalist: "Wir testen das auf ~2% neuer Pro-Signups. Existing Pro/Max-User nicht betroffen"
- **Widerspruch**: Anthropic-eigene Support-Docs + Pricing-Seite teilweise schon auf "Pro ohne Claude Code" geaendert — widerspricht 2%-Test-Aussage. Hacker News Thread (item 47854477) live: manche Pro-User haben noch Zugang (charliebwrites, anakaine), andere sehen Pricing-Seite ohne Claude Code (maxall4, dnw). Anthropic A/B-testet die Pricing-Seite selbst
- **Bei meinem direkten Fetch von claude.com/pricing am 22.04.2026**: Stand "Pro: Includes Claude Code" — also andere Variante als Kerstins Screenshot. Die Seite ist unzuverlaessig, verschiedene User-Buckets sehen verschiedene Versionen
- **Kerstin hat Max-Plan** (nicht Pro) → ihr Code-Tab in der Desktop App ist KEIN Beweis fuer Pro-User
- **Leo hat Pro seit einigen Wochen** → wahrscheinlich "existing user" → 80% Chance dass Claude Code in Desktop App vorhanden. Aber keine Langzeit-Garantie: Anthropic hat bei OpenClaw <24h Vorwarnung gegeben
- **Optionen fuer Leos Einschulung Freitag**:
  1. Verify-First: Leo oeffnet Desktop App → Code-Tab mit `</>`-Icon sichtbar? Wenn ja, Anleitung leicht anpassen ("Code-Tab oeffnen → Select folder → salt.magic.1" statt "Add Project")
  2. Fallback: API-Key ueber console.anthropic.com (~5-20$/Monat bei light use), Budget-Limit setzbar
  3. Max-Plan ($100/Monat) — von Leo/Kerstin abgelehnt
- **Empfehlung**: Anleitung `outputs/leo-onboarding-freitag.md` zweigleisig schreiben (Hauptweg Desktop App, Fallback-Sektion API-Key) um Leo gegen kuenftige Policy-Aenderungen abzusichern
- **Offen**: Kerstin muss Leo fragen, ob Code-Tab in Desktop App sichtbar ist → danach Anleitung entsprechend anpassen. In dieser Session keine Datei-Aenderungen (reine Research-Session)

Key Changes in V30 Session (Leo Onboarding Prep fuer Freitag Einschulung):
- **Neue Datei `outputs/leo-onboarding-freitag.md`**: Schritt-fuer-Schritt Setup-Anleitung fuer Leo (Anfaenger, kein Techniker). Claude Desktop App hat er bereits — Anleitung deckt Git + Node + GitHub CLI Installation, `gh auth login` (statt PAT), `git clone` von `salt-magic/salt.magic.1.git`, Projekt-Zuordnung in Desktop App, Dev-Server-Start per Claude-Anweisung, erste Test-Aenderung + Commit + Push
- **Entscheidungen waehrend Entwurf**:
  1. Personal Access Token verworfen — `gh auth login` ist moderner und funktioniert auch mit private Repos
  2. Option B (lokales Setup mit Desktop App) gewaehlt ueber Web-App-Variante, weil Leo die Desktop App bereits hat und lokale Dev-Server-Preview (localhost:3000, sofortige Updates) fuer Feedback-Loop besser ist als Vercel-Preview-PRs
  3. Anleitung deckt Mac + Windows parallel ab (unbekannt was Leo nutzt)
  4. Repo soll erstmal public bleiben waehrend Einschulung — Private-Switch + Vercel-Pro-Upgrade spaeter als zweiter Schritt, um zwei Unbekannte gleichzeitig zu vermeiden
- **Offen fuer Freitag**: Exakter Button-Name in Claude Desktop App fuer "Add Project" / "Open Folder" (Version-abhaengig, Kerstin checkt vor Termin); Ablauf 1:1 durchspielen; wenn alles glatt lief, Follow-up-Anleitung fuer Tag 2 (Git-Branches, PRs) erwaegen

Key Changes in V29 Session (Nav Logo Bug Fix + Comprehensive Responsive Sweep):
- **Leos Bug-Report**: Logo sah auf Hero verrutscht/kontrastarm aus. Root-Cause-Kaskade identifiziert:
  1. Nav-Container `h-24` (96px) vs Logo `h-[100px]` → 2px Overflow oben (in AnnouncementBar) und unten (in Section darunter)
  2. Weisses Logo auf warm-beigen Hero-Slide-Toenen (yoga-sachet.webp) → niedriger Kontrast, Logo wirkt "floating"
  3. Mobile-Menu-Overlay hatte `z-[-1]` → Menu lag hinter Page-Content, war unsichtbar
- **V29 Commit (3140719)**: Nav-Container `h-[80px] lg:h-[100px]`, Logo `h-[68px] lg:h-[88px]` (erst-Fix), Mobile-Menu `z-[-1]` → `z-40`, Top-Scrim im Hero (`h-[140px] md:h-[180px]` linear-gradient 38%→16%→transparent) fuer Logo-Kontrast, Drop-Shadow verstaerkt auf `0_2px_14px_rgba(0,0,0,.6)`, AnnouncementBar `whitespace-nowrap` + `text-[11px] sm:text-[12px]` + `px-3`, Formula-Section `lg:min-h-[800px]` → `lg:min-h-[640px] xl:min-h-[720px]`, Gold-Divider w-12 → clamp, tote `.section-fade-to/from-warm` CSS entfernt
- **V29.1 Commit (81792fe)**: Nach Kerstin-Feedback "Logo zu klein auf Mobile" → Nav auf `h-[116px]` ueberall, Logo `h-[100px] w-[100px]` ueberall (premium Brand-Feel konsistent wie LMNT/PANPURI). Comparison Mobile-Carousel: `p-4 sm:p-6` → `p-3 sm:p-6`, `min-w-0` gegen Grid-Overflow, Verdict-Text `text-[12px] sm:text-[13px]` + `break-words`. Blog-Grid 4+ Posts: `md:grid-cols-3 lg:grid-cols-4` → `lg:grid-cols-3 xl:grid-cols-4` (fix Orphan-Row bei 768px iPad)
- **V29.2 Commit (1a03b1c)**: `min-h-[44px]` explizit auf Newsletter-Input + Button, PartnerHero Contact/Pitch-Deck Buttons (defensive gegen Line-Height-Quirks die Touch-Target unter 44px drueckten). Audit-Re-measurement: Testimonials-Indicators (252px in 272px = OK), PartnerHero 2x2 Stats bei 768px (fits), Product-Formats 1-col bei 414px (280px h-ratio ok) sind KEINE echten Bugs — Agent-Audit war ueberkonservativ
- **V29.3 Commit (77926e3)**: SocialProof `grid-cols-2 lg:grid-cols-4` → `grid-cols-2 md:grid-cols-4` (fix Luecke bei iPad 768-1023), ForEveryone Old-Way-vs-Salt.Magic-Way Cards `grid-cols-1 sm:grid-cols-2` → `grid-cols-2` (immer 2-col, passt auch auf 320px), Hero-Body-Text `text-[13.5px] md:text-[15px]` → `text-[13.5px] sm:text-[14.5px] md:text-[15px]` (Zwischen-scaling fuer Landscape-Mobile + Tablet)
- **V29.4 Commit (813002c)**: Hero Desktop-Bottom-Padding `md:pb-[clamp(80px,12vw,140px)]` → `md:pb-[clamp(40px,6vw,80px)]` nach Kerstin-Feedback "Copy jetzt zu hoch". Groessere Nav (116px) + Top-Scrim machte visuell top-heavy, Content rutschte gefuehlt hoch. Jetzt Content ~60px tiefer am unteren Rand
- **Responsive-Audit-Ergebnis**: 6 CRITICAL, 5 HIGH, 3 MEDIUM Bugs ueber 8 Viewports (320/375/414/768/1024/1280/1440/1920) identifiziert und behoben. Landscape-Mobile Hero-Fix (`landscape:min-h-0`) war in V29-Erstversuch drin, dann revertiert weil Tailwind `landscape:` auch auf Desktop-Monitore wirkt (orientation=landscape) und Hero kollabierte
- **Neuer Plan**: `plans/2026-04-20-bitte-nimm-den-ux-polymorphic-charm.md` mit Root-Cause-Analyse + 11 priorisierten Responsive-Fixes + Test-Plan
- **Offen**: Keine Responsive-Bugs mehr nach V29.4. Folgeaufgaben bleiben: Leos 8 V25-Klaerungen, Blog-Artikel Mg-Werte-Update (312mg → 135mg), Terms + Imprint Seiten, Newsletter-Consent-Checkbox wenn Mailchimp-Backend live, PartnerForm Backend-Integration

Key Changes in V28 Session (DNS Migration Namecheap → Vercel):
- **Domain-Migration durchgezogen**: Apex `salt-magic.com` + `www.salt-magic.com` zeigen jetzt auf Vercel statt Lovable. Namecheap bleibt Registrar + DNS-Authority (A-Record-Methode, nicht Nameserver-Switch)
- **DNS-Records geaendert**: Apex A-Record `185.158.133.1` (Lovable) → `216.198.79.1` (Vercel). `www` A-Record geloescht, durch CNAME `d1c6af0a970f4ef8.vercel-dns-017.com` ersetzt (Vercel projektspezifisch)
- **MX-Records unveraendert**: Alle 5 Google Workspace MX-Records (aspmx.l.google.com, alt1-4) stehen 1:1. `info@salt-magic.com` + `leo@salt-magic.com` laufen weiter via Gmail. SPF TXT + Google-Site-Verification TXT ebenfalls unveraendert
- **Vercel Primary-Domain umgestellt**: War vorher `salt-magic.com` → 307 Redirect auf `www.salt-magic.com`. Jetzt Apex als Production gesetzt, `www` bekommt 308 Permanent Redirect auf Apex
- **308 statt 307 Redirect**: Vercel-Default war 307 Temporary, bewusst auf 308 Permanent umgestellt fuer SEO-Konsolidierung (Google uebertraegt Ranking-Signale dauerhaft auf Apex)
- **SSL-Zertifikate automatisch provisioniert** durch Vercel auf beiden Domains (`Strict-Transport-Security: max-age=63072000`)
- **Funktionstest 2026-04-19**: `curl -skI https://salt-magic.com` → 200 OK (Server: Vercel, X-Vercel-Cache: HIT). `curl -skI https://www.salt-magic.com` → 308 Permanent Redirect, Location: `https://salt-magic.com/`
- **Pre-Flight-Audit-Dokument**: `outputs/domain-migration-audit.md` mit BEFORE (Lovable-Stand), Sicherheitszone (MX/TXT/NS unveraendert), Aktionszone (nur A + CNAME), AFTER (verifizierte Ziel-Werte), Rollback-Werte
- **SEO-Konsolidierung**: Aller organischer Traffic und alle Backlinks fliessen jetzt auf canonical `salt-magic.com`. Konsistent mit Privacy Policy canonical, Sitemap, JSON-LD
- **Offen**: Optional Test-Mail an info@/leo@ zur Bestaetigung (technisch redundant da MX unveraendert)

Key Changes in V27 Session (Privacy Policy Seite):
- **Neue Route `/privacy`**: PDPA-konforme Datenschutzerklaerung mit 16 Sections, Content 1:1 aus `outputs/Salt-Magic-Privacy-Policy-v1.docx` (Leos Go-Live-Version)
- **Editorial-Layout**: Header-Section mit Gold-Line + Eyebrow + Playfair H1 auf `bg-warm-off`, Reading-Column `max-w-[680px]` fuer Content, Section-Separatoren via `<hr className="border-border-warm">`
- **Typografie-Rollen**: Playfair fuer H1/H2/H3, Inter fuer Body/Listen. H2 `clamp(22px,2.8vw,30px)`, H3 `clamp(17px,2vw,20px)`. `font-normal`/`font-medium` only (V18 Token-Policy)
- **Purpose-Legal-Basis-Tabelle (Sec. 4)**: Responsive Grid `grid-cols-1 sm:grid-cols-[3fr_2fr]` mit `role="table"`/`role="row"`/`role="cell"` + Header-Row in `bg-mineral/5`, Gold-Separatoren zwischen Zeilen
- **Email-Split pro Section**: `info@salt-magic.com` in Sec. 1 (Data Controller) + Sec. 16 (Final Contact), `leo@salt-magic.com` in Sec. 6 (Contact Processing) + Sec. 8 (Newsletter Withdrawal) + Sec. 12 (Rights) - genau wie die Docx
- **Director "Kawin Tanomsat"** in Sec. 1 eingetragen
- **Sec. 7.3-7.6 als aktive Sub-Sections gerendert** (GA4, Meta Pixel Facebook/Instagram, Google Maps, YouTube) - Docx-Vorgabe trotz Sec. 7.2 "Currently: none"
- **Anchor-Links durchgehend**: `id="data-controller"`, `id="cookies"`, `id="newsletter"`, `id="cross-border"`, `id="external-redirects"` etc. + interne Cross-Refs ("see Section 8" → `href="#newsletter"`)
- **Externe Links** mit `target="_blank" rel="noopener noreferrer"` + `aria-label="... (opens in new window)"` fuer PDPC, Resend, Mailchimp
- **Kontakt-Card (Sec. 16)**: `bg-warm-off` Card mit Gold-Line, Playfair-Firmenname, Adresse + info@ Email-Link
- **Footer Bottom-Bar erweitert** (Mobile + Desktop in `site/components/Footer.tsx`): Drei-Element-Flex mit `<Link href="/privacy">Privacy</Link>` zwischen "Made on Koh Samui" und Copyright
- **Sitemap erweitert** (`site/app/sitemap.ts`): `/privacy` Eintrag mit `priority: 0.3` + `changeFrequency: 'yearly'`
- **Metadata**: Title "Privacy Policy - Salt.Magic", `robots: 'index, follow'`, Canonical-URL `https://salt-magic.com/privacy`
- **Build gruen**: `npm run build` erzeugt `/privacy` als statische Route (138 B, First Load JS 87.4 kB)
- **Bewusst NICHT implementiert**: Cookie-Banner (Policy Sec. 7.2 sagt "Currently: none"), DPO-Fussnote (nicht in Docx), Terms-of-Service- und Imprint-Seiten (separater Auftrag), Newsletter-Consent-Checkbox im Footer-Form (offen bis Backend live)
- **Offene Folgeaufgaben**: Thai-Anwalt-Review der Policy vor Public-Go-Live (Leo), Terms + Imprint als weitere Legal-Seiten, Newsletter-Form Consent-Checkbox + Privacy-Link-Verknuepfung wenn Mailchimp-Backend live geht

Key Changes in V26 Session (Hero Carousel Refresh, WhySection & Glass-Jar Swap, Repo Public):
- **Hero Carousel neu bestueckt**: Von 4 alten Slides auf 3 neue KI-generierte Lifestyle-Bilder — `hero-sachet.webp` (Sachet neben Wasserglas, Hero Sachet-Quelle), `hero-new-2.webp` (hf_20260417_141151), `hero-new-3.webp` (hf_20260409_054324)
- **Alte Hero-Bilder geloescht**: `beach-jar-sunset.webp`, `yoga-sachet.webp`, `poolside-yoga.webp`, `hero-new-1.webp` — `taylor-water-nature.jpg` bleibt (noch in StorySection genutzt)
- **WhySection Bild ersetzt**: `why-sachet-pouch.webp` ueberschrieben mit neuem Sachet-Shot (hf_20260417_151057). Alt-Text SEO-optimiert mit Keywords: "natural electrolyte sachet, mineralized water, magnesium, potassium, pink Himalayan salt, daily hydration, Thailand"
- **Glass Jar Produktbild komplett neu**: `glass-jar-final.webp` ersetzt `taylor-closeup.jpg` in Products.tsx. Quelle: `reference/product-pics/NEU/salt magic jar new.png` (schwarzer BG). Python-Pipeline (PIL + numpy): Flood-Fill BG-Removal von Ecken, Content auf 72% Canvas-Hoehe skaliert fuer Size-Paritaet mit Travel Sachet (PANPURI-Stil), 1-px Gaussian Feather Anti-Alias, WebP Quality 88, 1200x1600 final (100 KB)
- **Products.tsx Card-Layout**: von `bg-warm-off` + `aspect-[3/4] object-cover` auf `bg-white` + `aspect-[3/4] flex items-center justify-center p-8 sm:p-10` + `object-contain` fuer sauberes Product-Photo-Framing
- **Neue Bilder optimiert** (alle WebP, Quality 100, max-width 2752px): Hero Sachet (11.5 MB → 499 KB), hf_20260417_135956 (7.2 MB → 750 KB), hf_20260417_141151 (1.6 MB → 254 KB), hf_20260417_151057 (1.4 MB → 199 KB)
- **Referenz-Ordner**: `reference/product-pics/NEU/` (Kopien der 2 neuen Hero-Quellen + Glass Jar Source), `reference/product-pics/KI Product bilder/weboptimiert/` (alle optimierten WebPs)
- **Leo's GitHub-Repo (`salt-magic/salt.magic.1`) ist jetzt PUBLIC**: loest Vercel Hobby-Plan Block fuer Commits von Kerstin (Monstera-creator-01). Vorher: "Deployment Blocked" da Kerstin nicht Contributor auf Leos Vercel
- **Git Remote-Setup dokumentiert**: `git push v2 main` pusht simultan zu `salt-magic-website-v2.git` (Kerstin) UND `salt.magic.1.git` (Leo). `origin` (V1) bleibt unberuehrt
- **Commits dieser Session**: 53423af (Glass Jar swap + Size-Paritaet), 22725fa (Hero + WhySection Photo refresh), 72bd6e1 (empty trigger-commit nach Repo-Public-Switch)
- **Lazada Produkt-Links spezifiziert** (2026-04-18, Commit dc606a4): Glass Jar und Travel Sachet CTAs in `Products.tsx` verlinken jetzt direkt auf die jeweilige Lazada-Produktseite statt auf die Shop-Uebersicht. Gleiche URLs auch im Product JSON-LD (`layout.tsx`). Share-Tracking-Parameter (`dsource=share`, `laz_token` etc.) wurden entfernt — nur kanonische Produkt-URLs. Andere generische "Shop Now"-CTAs (CtaBanner, StickyMobileCta, Blog-Artikel, Footer) zeigen weiterhin auf `/shop/salt-magic/` (Uebersicht) — offen, ob die auch auf ein spezifisches Produkt zeigen sollen

Key Changes in V25 Session (Kovic-Formel + Sodium-USP + Sip-All-Day Positionierung):
- **Drei E-Mails von Leo eingearbeitet**: (1) Sodium-USP & Water-Optimization-Positionierung, (2) Neue FDA-konforme Formel von Kovic, (3) Premium Marketing Strategy (Clean Label + Gourmet/Boots + Sip All Day)
- **Neue Formel von Kovic** (FDA-konform, ersetzt frueheren Marketing-Stand): 3g Serving, **532mg Potassium Citrate** (15% DV, jetzt quantitativ fuehrend), **189mg Sodium** aus Pink Himalayan Salt (8% DV, USP), **135mg Magnesium** als Trimagnesium Citrate Anhydrous (32% DV, hoch bioverfuegbar). Travel Sachet 60g/3g = **20 Servings** (war 30 bei 2g)
- **Sodium-USP**: 189mg vs Konkurrenz 1000mg+ — "cardiovascularly responsible", "safe to sip all day", Multi-Sachet-Lifestyle. Anti-Maltodextrin-Differenzierung (vs Wilder)
- **Positionierungs-Shift**: "Water Optimization" / "Sip All Day" statt "Sports Drink". "Three Ingredients. Zero Compromise." als offizielles Brand-Statement (Clean Label Authority)
- **V24-Klassifizierungs-Pipeline (vorbereitend)**: `outputs/V24-leo-inline-annotations.md` (22 Annotationen), `V24-action-buckets.md` (5 Buckets), `V24-leo-feedback-compare.md` (Live-Site vs Notes), `V24-suggested-copy-with-notes.md`, `V24-final-copy.md`, `V24-global-copy-rules.md`
- **V25 Master-Outputs**: `outputs/V25-final-copy.md` (komplette neue Copy pro Section, 8 TBD-Marker), `V25-global-copy-rules.md` (G1-G14 Regeln + Q2/Q7 offen), `V25-leo-klaerung-mail.md` (Mail-Entwurf an Leo mit 8 priorisierten Fragen)
- **Neue Skripte**: `scripts/extract-leo-annotations.py` (python-docx + difflib Diff-Extraktor), `scripts/extract-suggested-copy.py` (Docx-Section-Parser)
- **Components aktualisiert (12)**: Hero (Three Ingredients Body), WhySection (Badge "Three Ingredients" statt "7x Magnesium"), Ingredients (Reihenfolge K→Na→Mg + neue Werte + subtitle-Feld mit Daily Values), Comparison (135mg Mg, Maltodextrin-Erwaehnung, Footnote 3g, Sodium-USP-Verdict), Products (Sachet 30→20 Servings, 14.5 THB/day, "One sachet, 20 days of optimized hydration"-Tagline, Glass Jar "clean mineral salt complex" Description), Faq (alle 7 Q&A neu + 3 neue Q8/Q9/Q10), ForEveryone (Sodium-USP indirekt + Sip All Day), Benefits (Card 1/5/6 angeschaerft), CtaBanner ("sip" statt "drink"), page.tsx Formula Body, partner/page.tsx Why-Distribute Bullet, layout.tsx Meta + JSON-LD (premier→premium, Sachet 30→20)
- **8 offene Klaerungspunkte mit Leo (per Mail raus)**: Q1 Glass Jar Servings bei 3g (70 oder 46?), Q2 "7x Magnesium" Claim (streichen/umformulieren?), Q3 Multi-Sachet Tageslimit, Q4 Gourmet/Boots Pitches sichtbar?, Q5 CategoryProof Brand-Namen, Q6 GEO Key Facts Block sichtbar/sr-only?, Q7 "pharmaceutical-grade" rechtlich OK?, Q8 Glass Jar Tagline analog Sachet?
- **Kovic ersetzt Di-Well als primaerer B2B-Sachet-Produzent** (FDA-konforme Formel-Spec). FDA-Status weiterhin "in progress" — "FDA approved" darf NOCH NICHT in Website-Copy
- **Defaults bei offenen Klaerungspunkten** (vor Go-Live mit Leo verifizieren): "Three Ingredients" statt "7x Magnesium" (Q2), Glass Jar Meta ohne Servings-Zahl (Q1), FAQ Q2 ohne harten Multi-Sachet-Tageslimit (Q3), "raw/clean mineral salt complex" + "clinically meaningful doses" statt "pharmaceutical-grade" (Q7)
- **Offen**: Blog-Artikel `dead-water-crisis.ts` + `wellness-vs-sports-electrolytes.ts` enthalten noch alte 312mg-Werte — eigener Edit-Sweep nach Leos Antwort. CategoryProof Brand-Namen + GEO Key Facts Block + Gourmet/Boots-Section auf Partner-Page warten auf Leo

Key Changes in V23 Session (SEO Keyword Integration & Copy Review):
- **SEO Copy Review V2 Dokument erstellt**: `outputs/Salt-Magic-SEO-Copy-Review-V2.docx` — 25 Sections (17 Homepage + 7 Partner + Appendix), pro Section "Current Copy" vs "Suggested Copy (SEO-Optimized)" mit Keyword-Highlighting in gruen/bold/unterstrichen
- **50 SEO Keywords in 5 Clustern integriert**: Fasting & Clean Keto (10), Heavy Sweaters & Hot Climates (10), Clean Ingredients & Purity (10), Specific Formulation (10), Travel, Recovery & Wellness (10) + Geo-Targeting Thailand (empfohlen)
- **3-Framework SEO Review**: SEO Content Optimizer + Generative Engine Optimization + Content Creation Skill — Score 68→82/100
- **7 Sweeps Conversion Copywriting Pass**: Joanna Wiebe/Copyhackers Methodik (Clarity, Voice, Proof, Specificity, Stickiness, Emotion, Zero) auf alle Keyword-Vorschlaege angewendet
- **Keyword-Integration Techniken**: "Object of action verb", "Think of it as", "Brand possessive", "Inside: reveal", "Contrast proof", "You'll actually benefit" — Keywords unsichtbar in natuerliche Copy eingebettet
- **Critical Fixes**: "organic electrolyte powder" entfernt (FDA-Risiko), Meta Title/Description auf Zeichenlimit getrimmt, ForEveryone Body von 10→4 Keywords reduziert, FAQ Q8 von 7→3 Keywords
- **H2 Keyword-Integration**: 4 von 12 H2s mit natuerlichen Keywords angereichert: "Balanced Electrolyte Formula You Can't Taste", "Clean Hydration, Clear Winner", "Ready to Try Natural Electrolyte Powder?", "Join the Natural Hydration Ritual"
- **Geo-Targeting Thailand**: "best electrolytes in Thailand", "buy electrolytes in Thailand", "electrolyte distribution Thailand" in Meta, FAQ, Products, Partner Page
- **Partner Page B2B-Keywords**: 7 Partner-Sections mit B2B-Keywords (electrolyte distribution Thailand, wellness brand partnership, retailer margins)
- **GEO Key Facts Block**: Neue Section empfohlen fuer AI-Zitationsrate +35% (ChatGPT, Perplexity, Google AI Overviews)
- **3 neue FAQ-Eintraege vorgeschlagen**: "Does Salt.Magic break a fast?", "Can I take Salt.Magic while traveling?", "Is Salt.Magic good for hangover recovery?"
- **5 Blog-Themen vorgeschlagen**: Muay Thai Training, Fasting Without Electrolytes, Hot Yoga, Hangover Recovery, Travel Hydration
- **Neue Scripts**: `scripts/create-seo-review-doc.js` (V2 Docx-Generator mit Keyword-Highlighting), `scripts/take-v2-screenshots.js` (Playwright Screenshots von V2 Website)
- **Conversion Copywriting Skill installiert**: `conversion-copywriting` (Copyhackers/Joanna Wiebe) als globaler Skill
- **V2 Screenshots**: 17 frische Desktop-Screenshots von salt-magic-website-v2.vercel.app in `outputs/v2-screenshots/`

Key Changes in V22 Session (Partner Section Options & Copy Rename):
- **8 Partner-Seite Layout-Options erstellt**: Fuer alle 8 Partner-Sections (Hero, Market, CategoryProof, WhyDistribute, Revenue, Comparison, ProductFormats, PartnerForm) je 4 Layout-Alternativen als HTML-Preview mit Desktop (900px) + Mobile (375px) Frames. Referenzen: LMNT, Sakara, PANPURI, Cure Hydration, Grown Alchemist. 4 parallele Agents, 32 Optionen insgesamt
- **Outputs reorganisiert**: Alle HTML-Options in neuer `outputs/options/` Struktur — `Homepage/` (27 Dateien) und `Partner/` (14 Dateien). Alte `outputs/section-options/` entfernt
- **"Travel Pouch" → "Travel Sachet" rename**: 6 Edits in 5 Dateien (Products.tsx, partner/page.tsx, layout.tsx JSON-LD, WhySection.tsx alt text, Faq.tsx answer). Homepage + Partner Page + SEO structured data konsistent umbenannt. Bild-Dateinamen (`sachet.jpg`, `why-sachet-pouch.webp`) unveraendert
- **UI/UX Pro Max Skill** als neuer globaler Skill in `.claude/skills/ui-ux-pro-max/` fuer Design-System-Recherche und Layout-Intelligence

Key Changes in V20 Session (Comprehensive Responsive Audit — UI/UX Pro Max):
- **Full Responsive Audit**: Alle 35 Components und 4 Seiten (Homepage, Partner, Blog, Blog Detail) gegen UI/UX Pro Max Regeln geprueft
- **3 CRITICAL Fixes**: PartnerTeaser Stats overflow (grid-cols-3 statt flex auf Mobile), Newsletter Input+Button stacken (flex-col sm:flex-row), ForEveryone Mini-Cards stacken (grid-cols-1 sm:grid-cols-2)
- **5 HIGH Fixes**: Comparison Mobile Padding (p-4 sm:p-6), PartnerHero Buttons stacken (flex-col sm:flex-row + w-full), CategoryProof Mobile Hierarchie (Name+Stat nebeneinander), Blog Detail 11px→12px (Minimum-Font-Regel), AnnouncementBar transition-all→transition-[opacity,transform]
- **6 MEDIUM identifiziert** (nicht gefixt): Footer Mobile focus-visible, StorySection Landscape 50vh, Partner Image-first auf Mobile, Testimonials Grid Indicators, Blog 4-col Jump, Products Badge Spacing
- **3 LOW identifiziert** (nicht gefixt): Badge Sizing, Marquee Doppel-Definition, ImageBreak Parallax auf Mobile
- **7 Dateien geaendert**: PartnerTeaser, Newsletter, ForEveryone, Comparison, PartnerHero, CategoryProof, AnnouncementBar + blog/[slug]/page.tsx

Key Changes in V19 Session (KI Product Images & Image Optimization):
- **Image Optimizer Script**: `scripts/optimize-images.py` — Batch-Resize, WebP-Konvertierung, automatische Watermark-Entfernung (Gemini-Sterne + Letterbox-Balken). 87.5 MB → 1.4 MB (98.5% Ersparnis)
- **KI-Produktbilder integriert**: 12 neue KI-generierte Bilder (Gemini + HuggingFace) in `reference/product-pics/KI Product bilder/`, optimierte WebPs in `weboptimiert/` Unterordner
- **Hero Carousel aktualisiert**: 4 Slides — Beach Sunset Jar (Titelbild, neu), Yoga Sachet (neu), Poolside Yoga (neu), Taylor Water Nature
- **Hero Mobile Fix**: Buttons gestackt (`flex-col` auf Mobile), besseres Padding (`px-5`, `pb-16`), `object-center` statt fixem Offset auf Mobile
- **WhySection Bild getauscht**: Taylor-Poolside → KI-generiertes Sachet-Pouch-Bild
- **ForEveryone Bild getauscht**: Alo-1 Mood → KI-generiertes Yoga-Poolside-Stretch, Gemini-Stern per Crop entfernt, Container auf `aspect-[3/4]`
- **Offen**: 2 Gemini-Bilder haben Stern auf hellem BG (automatische Erkennung schwierig), ggf. manuell mit `--remove-watermark` entfernen

Key Changes in V18 Session (Homepage Consistency, Typography Cleanup & Brand Color Enforcement):
- **Copy Review analysiert**: `reference/V1_Salt-Magic-Copy-Review.docx` vollstaendig durchgelesen, Section-Notes vs Master Copy verglichen, 7 Abweichungen dokumentiert. Section Notes sind die Quelle der Wahrheit
- **Hero text-shadow gefixt**: Shadow vom Container auf einzelne Text-Elemente verschoben, Buttons haben keinen Shadow mehr
- **Typography Option B umgesetzt** (PANPURI/Cure-inspiriert): 15 Italic-Instanzen aus 12 Components entfernt, alle `<em>` Tags eliminiert, font-weights auf 2 reduziert (normal + medium), font-semibold/font-bold/font-light komplett eliminiert, Footer-Labels von uppercase auf sentence case
- **TrustBand Marquee** (Option C): Statisches Trust-Band durch scrollenden CSS-Marquee ersetzt — warm-off BG, uppercase sans-serif, Gold-Dot-Separatoren, 16 Items (6 Metriken + 10 Staedte), `animate-marquee` Keyframe in Tailwind Config
- **SocialProof von Homepage entfernt**: Redundant mit TrustBand (3/4 Metriken identisch), unterbricht Problem→Loesung Flow. Component bleibt fuer Partner-Seite
- **Em-Dashes durch Hyphens ersetzt**: 90 Instanzen in 21 Dateien, ueberall `-` statt `—`
- **"Read the full story" Link entfernt**: StorySection hat nur noch "Shop Now" Button
- **PartnerTeaser: Contained Card** (Option C): Mineral-Blue Card auf warm-off Background statt unsichtbarer Section-Wechsel. Gold-Eyebrow, weisser Text, Gold-Button
- **Homepage Consistency Audit**: Eyebrow-Margins auf mb-5 standardisiert, inline-Klassen auf `.label-uppercase` CSS-Klasse, Body-Text von 5 auf 2 Groessen (15px + 13px), Button-Padding auf 2 Varianten (px-8 py-3.5 Standard, px-10 py-4 Large)
- **Brand Color Enforcement**: `footer-dark` (#1D3347) und `deep-navy` (#1A3248) eliminiert — alles auf `mineral` (#294B6D). `golden-hour` (#E8C9A0) und `gold-light` (#E2D5C5) eliminiert — alles auf `gold` (#D4BFAA). `cream` und `amber-warm` als ungenutzte Tokens entfernt
- **Farbpalette jetzt strikt nach Brand Guidelines**: Brand: mineral (#294B6D), gold (#D4BFAA), warm-white (#FFFFFF), mineral-light (#3D6588). Utility: ink, ink-light, ink-faint, sand, border-warm, warm-off
- **Offen**: Copy Review Section Notes als Grundlage fuer naechste Copy-Implementierung

Key Changes in V17 Session (Partner Page — Leo's Copy Review Implementation):
- **Partner-Seite auf Leo's Copy umgestellt**: Alle 5 Sections aus `reference/V1_Salt-Magic-Copy-Review.docx` PART 2 implementiert
- **Hero**: "Capture the Next Wave of Wellness", Stats-Bar mit einzigartigen Metriken (90%/35-40%/160+/5Yrs), "Download Pitch Deck" aktiv
- **Market Opportunity**: MarketStats + MarketComparison zu einer Section gemergt, 85% Dead Water Callout, "The wave is coming" Closer
- **Category Proof**: "Clean hydration builds unicorns", 3 Brands (Liquid IV/LMNT/Liquid Death), Editorial Rows auf hellem BG
- **Why Distribute**: Leo's exakte Bullets (35-40% Margins, 90% Retention, 7x Magnesium), "Become a Distribution Partner" CTA
- **Revenue Difference**: "The Bottom Line: 4.4x More Revenue" mit Leo's Body-Copy
- **Product Formats**: 3→2 Grid (Single Sachet entfernt), Gradient-Overlay mit Labels (Name/Format/MSRP)
- **6 Sections entfernt**: MarketStats (redundant), The Shift (zu duenn), DistributionTiers, RevenueModel, SocialProof, LocationMap (nicht in Leo's Copy — Details gehoeren ins Pitch Deck, wie LMNT/Cure Hydration)
- **Background-Rhythmus gefixt**: Dunkel→Warm→Weiss→Weiss+Bild→Dunkel→Warm — nie zwei gleiche BGs hintereinander
- **Seite von 14 auf 8 Sections verschlankt**: Hero, Market, CategoryProof, Product, Revenue, Comparison, Formats, Form
- **Offen**: PartnerForm Backend + CTA-Text Update

Key Changes in V16 Session (Homepage UI/UX Audit — Brand Consistency, Typography & Section Flow):
- **Section-Transitions bereinigt**: 8 Gradient-Transition-Divs eingefuegt, dann wieder entfernt (sahen aus wie Schatten). Sections gehen jetzt direkt ineinander ueber.
- **SocialProof nach WhySection verschoben**: Flow jetzt Hero → TrustBand → WhySection (Problem) → SocialProof (Beweis) — psychologisch staerker
- **SocialProof von dunkel auf hell**: `bg-mineral` → `bg-warm-off`, eliminiert harten Hell-Dunkel-Bruch
- **PartnerTeaser von dunkel auf hell**: `bg-mineral` → `bg-warm-off`, reduziert dunkle Section-Stapelung am Seitenende
- **Typografie standardisiert**: Alle Eyebrow-Labels auf `text-[12px] font-medium tracking-eyebrow`, `label-uppercase` von text-sm auf text-[12px], doppeltes Tracking in TextBlock/FAQ/BlogSection entfernt
- **Inline Clamps durch Tokens ersetzt**: Comparison (text-h2), Ingredients (text-stat), Testimonials/FAQ (text-body-lg)
- **Neuer body-lg Token**: `clamp(16px, 1.8vw, 18px)` in tailwind.config.ts
- **Gold Lines standardisiert**: 5 inline Gold Lines durch `.gold-line` CSS-Klasse ersetzt
- **CTA-Buttons vereinheitlicht**: 3 Varianten definiert — Primary auf hell (bg-mineral), Primary auf dunkel (bg-gold/90), Ghost (border white/25). Hero + CtaBanner auf Gold umgestellt.
- **Redundante font-body Klassen entfernt**: Products, Testimonials, FAQ
- **16 Dateien geaendert**: globals.css, page.tsx, tailwind.config.ts + 13 Components

Key Changes in V14 Session (Refined Type Scale + Heading Hierarchy):
- **Refined Type Scale angewendet**: Alle Tailwind-Tokens bereits auf Refined-Werte (display 64px, h1 48px, h2 42px, h3 36px, h4 26px, Section-Padding 48-80px). 6 inline Clamp-Werte durch Tokens ersetzt
- **Type Scale Comparison**: `outputs/type-scale-comparison.html` — Side-by-Side HTML-Vergleich "Aktuell vs Refined" mit Legend-Tabelle (10-19% Reduktion pro Token)
- **Konsistente Heading-Hierarchie durchgesetzt**: Jedes HTML-Heading-Level nutzt exakt einen visuellen Stil:
  - `<h1>` → `headline-editorial` (= text-display, 40-64px) — 4x, 1 pro Seite
  - `<h2>` → `text-h2` (28-42px) — 22x, alle Section-Headers
  - `<h3>` → `text-h3` (24-36px) fuer Section-Sub-Headers ODER originale Mockup-Groesse fuer Card-Level Labels (13-15px)
  - `<h4>` → `text-h4` (20-26px) — BlogCard-Titel
- **Semantik beibehalten**: Alle Headings bleiben als h1/h2/h3/h4 fuer SEO, auch Card-Level Labels
- **23 Dateien geaendert**: Alle Pages (homepage, partner, blog, blog/[slug]) + 19 Components
- **Naechster Schritt**: Leo waehlt Comparison-Option (A/B/C aus `outputs/comparison-options.html`), dann Umsetzung in React

Key Changes in V13 Session (Ingredients Pixel-Match + Comparison Redesign):
- **Ingredients Section pixel-matched**: Alle Werte exakt aus `outputs/transition-a-d.html` Mockup uebernommen — Headline `clamp(28px,4.5vw,40px)`, Content-Padding `56px/40px/64px`, Grid `min-h-[800px]` (hoeher als Mockup wegen Next.js Image fill), Ingredient-Name 13px, Zahlen `clamp(40px,5vw,52px)`
- **Fade-Overlay reduziert**: 35% → 25% Breite auf dem Produktbild
- **Comparison Section Redesign vorbereitet**: 3 HTML-Optionen in `outputs/comparison-options.html` — alle auf hellem BG basierend auf Leo's Feedback ("copy gets lost in dark background", "don't like Salt.Magic box")
  - Option A: Elevated Table (Grown Alchemist Stil)
  - Option B: Hero Card + Ghost List (Salt.Magic dominiert)
  - Option C: Magazine Split (Editorial Zweispalter mit Gold-Divider)
- **Naechster Schritt**: Leo waehlt Comparison-Option, dann Umsetzung in React

Key Changes in V12 Session (Comprehensive UI/UX & Copy Audit):
- **Copy-Dokument V11 aktualisiert**: `outputs/copy-homepage-v1.md` jetzt auf V11-Stand, Section fuer Section aus dem Code extrahiert
- **Partner-Seite Accessibility**: 19x `text-ink-faint` → `text-ink-light`, 12x `text-white/50` → `text-white/70` in 4 Components
- **Partner-Seite Font-Size**: 22x `text-[10px]`/`text-[11px]` → `text-[12px]` in 6 Components (Minimum 12px Regel)
- **Homepage Kontrast**: Footer + Comparison `text-white/60` → `text-white/70`
- **SEO/GEO**: `og:image` + Twitter image + Product JSON-LD Schema (Glass Jar + Travel Pouch) in layout.tsx
- **Lazada Links**: `target="_blank" rel="noopener noreferrer"` auf Products + StickyMobileCta (konsistent mit CtaBanner)
- **transition-all eliminiert**: 6 Stellen in Nav, Hero, PartnerForm, PartnerHero durch spezifische Transitions ersetzt
- **AnnouncementBar**: `role="marquee" aria-label="Brand announcements"` hinzugefuegt
- **Footer**: Toter Facebook `href="#"` auskommentiert (TODO: echte URL von Leo)
- **AboutEditorial.tsx geloescht**: Toter Code seit V11 entfernt
- **business-info.md**: 150+ → 160+ Locations aktualisiert

Key Changes in V11 Session (Copy Review Implementation):
- **Vollstaendiges Copy Review umgesetzt**: Alle 20 Sections aus Leo's Copy Review Dokument (`reference/V1_Salt-Magic-Copy-Review.docx`) implementiert
- **Section 1 (Nav/Hero/AnnouncementBar)**: "Mineralize Your Water, Everywhere", Eyebrow entfernt, Pill-Style Buttons, Logo 80→100px, "Why"→"About"
- **160+ Locations global**: Alle "150+" durch "160+" ersetzt, "wellness" entfernt, 4 neue Staedte (Pai, Koh Tao, Krabi, Khanom)
- **SocialProof verschoben**: Von nach Testimonials auf nach TrustBand (fruehes Trust-Signal)
- **WhySection**: Weniger klinisch ("energy, recovery, vitality" statt "enzymatic reactions")
- **Ingredients/Formula**: "Everything your water is missing. Nothing you can taste." + neue Benefit-Descriptions
- **Comparison komplett umgebaut**: 4-Spalten-Grid mit Verdict-Zeilen, 3 Kernzeilen (Sugar, Magnesium, Ingredients), "The Clear Choice"
- **Benefits 8→6**: "Feel the Difference", punchigere Descriptions, Digestive Support + Safe for All Ages entfernt
- **ForEveryone**: "Not a Sports Drink. A Daily Essential." + Old Way vs Salt.Magic Way Comparison
- **Products**: Single Sachet entfernt, 3→2 Grid, "Signature Glass Jar" + "Travel Pouch", "Ready to upgrade your water?"
- **StorySection**: "The Koh Samui Story" + Trust-Box Highlight
- **AboutEditorial komplett entfernt**: Team-Section von Homepage geloescht
- **PartnerTeaser**: "Stock Salt.Magic" + ans Seitenende verschoben (nach Newsletter)
- **FAQ**: "Got Questions? Let's clear the water." + alle 8 Antworten konversationell umgeschrieben
- **CtaBanner**: "Bring Your Water Back to Life" + Lazada-CTA mit target=_blank
- **Newsletter**: "Join the Ritual" + "Unlock 10% Off" Button
- **UI/UX Pro Max Audit**: 11 Findings gefixt (3 Critical Kontrast, reduced-motion, 12px Minimum, Semantik, line-length)
- **Footer**: "Why Salt.Magic"→"About", 160+ Update

Key Changes in V10 Session (UI/UX Audit & Accessibility Fix):
- **Umfassender UI/UX Audit**: Code-basierte Analyse aller 35 Components gegen WCAG 2.1 AA
- **14 Kontrast-Failures gefixt**: Alle Eyebrow-Labels von `text-gold` (1.77:1) auf `text-ink-light` (8.47:1) auf hellen BGs, `text-golden-hour` auf dunklen BGs
- **ink-faint eliminiert als Body-Text**: Ueberall durch `text-ink-light` ersetzt (3.19:1 → 8.47:1)
- **Minimum Font-Size 12px**: Alle `text-[10px]` und `text-[11px]` Labels auf `text-[12px]` angehoben
- **White-Opacity standardisiert**: Subheadlines auf dunklen BGs einheitlich `text-white/70`, Footer-Text von /40-/55 auf /60-/70
- **Comparison semantisch**: `role="table/row/cell"` + `<dl>/<dt>/<dd>` fuer Screen-Reader
- **Carousel Accessibility**: `aria-current="true"` auf aktive Slides in Hero + Testimonials
- **Reduced-Motion erweitert**: `useReducedMotion()` in Testimonials (stoppt Auto-Rotation) + StickyMobileCta
- **Spacing standardisiert**: Section-Padding einheitlich `py-[clamp(64px,8vw,100px)]`, Heading-Margins mb-6 konsistent
- **Body-Text vereinheitlicht**: `text-[15px]`/`text-[16px]` → `text-base` wo moeglich
- **Hardcoded Colors entfernt**: `#1D3347` → `footer-dark` Token in 3 Components
- **transition-all eliminiert**: Letzte Instanz in `.link-underline` durch `transition-colors` ersetzt
- **Audit-Report**: `outputs/ux-audit-2026-03-30.md` mit allen Findings und Fixes

Key Changes in V9 Session (Editorial Alignment Redesign):
- **Alignment-Rhythmus eingefuehrt**: Mix aus zentrierten (immersive Momente) und links-ausgerichteten (editorial/informative) Sections ueber alle Seiten
- **Homepage Editorial-Flow**: Hero/TrustBand zentriert → WhySection/Formula/Comparison/Benefits/ForEveryone links → Products zentriert → Testimonials links → SocialProof zentriert → Story/FAQ/Blog links → CTA/Newsletter zentriert
- **Benefits horizontal**: Von vertikalem 4-Spalten-Grid (Icon oben, Text unten) zu horizontalem 2-Spalten-Layout (Icon links, Text rechts) — editorialerer Look
- **Testimonials links-ausgerichtet**: Quote und Autor links statt zentriert, dekoratives Anfuehrungszeichen nach links verschoben
- **TextBlock.tsx align-Prop**: Neues `align?: 'center' | 'left'` Prop (Default: center) fuer flexible Ausrichtung
- **Gold-Line context-aware**: CSS geaendert — Gold-Line ist links-ausgerichtet by default, nur in `text-center` Parents zentriert
- **Partner-Seite editorial**: Alle Section-Headers (MarketComparison, CategoryProof, RevenueComparison, DistributionTiers, RevenueModel, LocationMap) auf links umgestellt
- **Blog-Listing editorial**: Page-Header links-ausgerichtet im Magazin-Stil
- **Comparison/FAQ/BlogSection**: Headers durchgehend links-ausgerichtet
- **Referenz-Analyse**: Cure Hydration als Vorbild fuer Editorial-Layout, kombiniert mit PANPURI/Grown Alchemist Luxury-Zentrierung fuer immersive Momente

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

Brand Colors (strikt nach Guidelines): Mineral Blue #294B6D (`mineral`), Soft Gold #D4BFAA (`gold`), Pure White #FFFFFF (`warm-white`), Product Photo BG #3D6588 (`mineral-light`). Utility-Tokens: Warm Charcoal #3C3028 (`ink`), Warm-Off #F9F7F4 (`warm-off`). Eliminiert in V18: footer-dark, deep-navy, golden-hour, gold-light, cream, amber-warm.

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
- `outputs/ux-audit-2026-03-30.md` — V10 UI/UX Audit: 14 WCAG contrast failures, spacing/typography/a11y findings, all fixed

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
<!-- V31 Dry Run — Kerstin verified Leo onboarding flow on 2026-04-23 -->

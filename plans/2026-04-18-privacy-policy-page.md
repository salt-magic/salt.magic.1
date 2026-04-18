# Plan: Privacy Policy Seite erstellen

**Erstellt:** 2026-04-18
**Status:** Implementiert
**Anforderung:** Neue Route `/privacy` auf der Salt.Magic Website erstellen und den Inhalt aus `outputs/Salt-Magic-Privacy-Policy-v1.docx` (aktuelle Version, von Leo bestaetigt) einfuegen, inkl. Footer-Link, Sitemap-Eintrag und SEO-Metadata.

---

## Ueberblick

### Was dieser Plan erreicht

Eine neue statische Seite `/privacy` auf der Next.js Site, die die PDPA-konforme Datenschutzerklaerung von Salt.Magic fuer Besucher lesbar macht. Der Content kommt 1:1 aus [outputs/Salt-Magic-Privacy-Policy-v1.docx](outputs/Salt-Magic-Privacy-Policy-v1.docx) (die aktuelle, von Leo bestaetigte Version), typografisch eingebettet im bestehenden Editorial-Stil (Playfair + Inter, mineral/gold Brand-Palette, max-w-[680px] Reading-Column). Footer und Sitemap bekommen einen Link auf die neue Seite.

### Warum das wichtig ist

- **Compliance:** Die Thai PDPA (Personal Data Protection Act B.E. 2562) verlangt eine oeffentlich zugaengliche Datenschutzerklaerung. Vercel-Hosting, Resend-Formulare und Mailchimp-Newsletter verarbeiten bereits personenbezogene Daten — ohne Privacy Policy riskiert Salt.Magic PDPC-Beschwerden.
- **Vertrauen:** Linkbar im Footer, Newsletter-Signup und Partner-Formular. Reduziert Conversion-Reibung bei datenschutz-sensiblen Besuchern (EU-Touristen, B2B-Partner).
- **SEO/GEO:** Vollstaendige rechtliche Seiten sind ein Trust-Signal fuer Google und AI-Suchmaschinen — indirekter Ranking-Vorteil.

---

## Aktueller Zustand

### Relevante bestehende Struktur

- **Site-Routen** (Next.js 14 App Router): `/`, `/partner`, `/blog`, `/blog/[slug]`
- **Content-Quelle (authoritative):** [outputs/Salt-Magic-Privacy-Policy-v1.docx](outputs/Salt-Magic-Privacy-Policy-v1.docx) — 16 Sections, PDPA-konform, Director-Name eingetragen ("Kawin Tanomsat"), Email-Split zwischen `info@salt-magic.com` (formale Firmen-Angaben Sec. 1 + Sec. 16) und `leo@salt-magic.com` (operative Kontakt-Adressen Sec. 6 + 8 + 12), Sec. 7.3-7.6 als aktive Sub-Sections aufgelistet (geplante/potenzielle Dienste)
- **Nur Referenz (abweichend, NICHT verwenden):** `outputs/privacy-policy-v1.md` — aeltere Entwurfsversion mit NOTE-Block, TBD-Director und auskommentierten Future-Sections
- **Typografie-Patterns:** [site/app/blog/[slug]/page.tsx:82-93](site/app/blog/[slug]/page.tsx#L82-L93) nutzt Tailwind arbitrary variants fuer Prose-Styling; [site/components/PartnerForm.tsx] hat lange Text-Sections
- **Footer:** [site/components/Footer.tsx:66-70](site/components/Footer.tsx#L66-L70) (Mobile) und [site/components/Footer.tsx:139-143](site/components/Footer.tsx#L139-L143) (Desktop) haben Bottom-Bar mit "Made on Koh Samui" + Copyright — ideal fuer Legal-Link
- **Sitemap:** [site/app/sitemap.ts](site/app/sitemap.ts) generiert sitemap.xml fuer alle Routen
- **Meta-Pattern:** Jede Seite hat `export const metadata: Metadata` (siehe [site/app/partner/page.tsx:10-14](site/app/partner/page.tsx#L10-L14))

### Luecken oder Probleme, die adressiert werden

- **Keine Privacy Policy verfuegbar auf der Live-Site** — Section 7.1 der Policy verweist auf next/font Build-time Fonts (Google Fonts), Section 8 auf Mailchimp-Newsletter (Footer-Form existiert bereits), Section 6 auf Resend-Formular (PartnerForm) — das alles ist ohne Seite nicht rechtskonform offengelegt
- **Footer hat keinen Legal-Bereich** — aktuell nur Copyright + "Made on Koh Samui"
- **Sitemap listet keine Privacy-Route** — muss ergaenzt werden
- **Docx-Content ist Go-Live-bereit** — Director eingetragen, kein NOTE-Block, aktive Sub-Sections — kann 1:1 uebernommen werden

---

## Vorgeschlagene Aenderungen

### Zusammenfassung der Aenderungen

- Neue Route `/privacy` mit Editorial-Layout (Reading-Column, Playfair Headings, PDPA-konformer Content)
- Footer Bottom-Bar um Privacy-Link erweitert (Mobile + Desktop)
- Sitemap um `/privacy` Eintrag erweitert
- Keine Aenderungen an Homepage, Partner-Seite oder Blog

### Neue Dateien erstellen

| Dateipfad                      | Zweck                                                        |
| ------------------------------ | ------------------------------------------------------------ |
| `site/app/privacy/page.tsx`    | Privacy Policy Seite mit allen 16 Sections aus privacy-policy-v1.md, inkl. Metadata-Export |

### Zu aendernde Dateien

| Dateipfad                   | Aenderungen                                                        |
| --------------------------- | ------------------------------------------------------------------ |
| `site/components/Footer.tsx`| Mobile (Zeile 67-70) und Desktop (Zeile 140-143) Bottom-Bar um "Privacy" Link erweitert |
| `site/app/sitemap.ts`       | `/privacy` Eintrag hinzugefuegt (priority 0.3, changeFrequency yearly) |

### Zu loeschende Dateien

Keine.

---

## Design-Entscheidungen

### Getroffene Schluesselentscheidungen

1. **Route-Slug `/privacy`** (nicht `/privacy-policy`, nicht `/datenschutz`): Kurz, SEO-Standard, englisch konsistent mit dem restlichen Site-Content. "datenschutz" passt nicht zur englischen Site-Sprache.
2. **Inline JSX statt Markdown-Parser:** Der Content ist statisch, strukturell simpel (Headings + Listen + eine Tabelle) und aendert sich selten. Ein MDX-Setup oder react-markdown waere Over-Engineering. Inline JSX ist typsicher, in Git sauber diffbar und folgt dem Pattern von PartnerForm/CategoryProof.
3. **Reading-Column 680px statt Full-Width:** Entspricht dem Blog-Detail-Layout — optimale Zeilenlaenge fuer Prose, ruhiges Editorial-Gefuehl.
4. **Playfair fuer Haupt-Headline (h1), Inter fuer Body + Sub-Headings (h2/h3):** Bricht mit dem Blog-Pattern (alles Playfair), ist aber fuer juristische Texte besser lesbar — kleinere Sub-Headings kontrastreicher und sachlicher. Analog zu Dokumenten wie LMNT/Sakara Privacy Policies.
5. **Footer-Link in Bottom-Bar, nicht eigene Spalte:** "Privacy" gehoert juristisch zu Copyright/Legal, nicht zu Navigation. Minimal-invasiv, keine neuen Columns.
6. **Metadata mit `robots: 'index, follow'`:** Privacy Policies sollen indexierbar sein — Trust-Signal fuer Google/AI-Suchen. Sitemap-Priority aber niedrig (0.3), da nicht Conversion-relevant.
7. **Kein AnnouncementBar / StickyMobileCta auf der Seite:** Werden automatisch durch das `RootLayout` geladen und bleiben. Das ist OK — Privacy-Besucher sollen navigieren koennen.
8. **Docx ist Single Source of Truth:** Kein NOTE-Block, keine TBD-Platzhalter — die Docx ist die Go-Live-Version.
9. **Director-Name "Kawin Tanomsat"** wird in Sec. 1 uebernommen (Docx-Vorgabe).
10. **Email-Split wird 1:1 aus der Docx uebernommen:**
    - Sec. 1 (Data Controller): `info@salt-magic.com`
    - Sec. 6 (Contact): `leo@salt-magic.com`
    - Sec. 8 (Newsletter Withdrawal): `leo@salt-magic.com`
    - Sec. 12 (Your Rights): `leo@salt-magic.com`
    - Sec. 16 (Contact): `info@salt-magic.com`
    Begruendung: Die Docx trennt bewusst formale Firmen-Emails (info@) von operativen Kontakt-Emails (leo@). Nicht konsolidieren.
11. **Sec. 7.3-7.6 werden als aktive Sub-Sections gerendert** (GA4, Meta Pixel, Google Maps, YouTube — je ein Einzeiler mit Provider + Purpose), genauso wie die Docx sie auflistet. Sie sind als **geplante/potenzielle** Services dokumentiert — der Satz in Sec. 7.2 "Currently: none" bleibt fuehrend und macht klar, dass sie aktuell nicht im Einsatz sind. Wird ein Dienst tatsaechlich aktiviert, muss Sec. 7.2 angepasst werden (aus "Currently: none" wird die Liste der aktiven Services).
12. **Keine DPO-Fussnote:** Die aeltere MD hatte in Sec. 16 eine Fussnote zum Data Protection Officer — die Docx enthaelt diese nicht. Wird nicht uebernommen.

### Betrachtete Alternativen

- **MDX-Setup:** Waere maechtiger (Markdown + React-Components mischen), bringt aber Build-Complexity und package-Install. Fuer eine statische Seite nicht gerechtfertigt.
- **Content aus JSON/TS laden:** Waere wiederverwendbar fuer Imprint/Terms, aber YAGNI — aktuell gibt es nur eine Legal-Seite.
- **Privacy als Section auf Partner-Seite:** Rechtlich nicht ausreichend (muss eigenstaendig von jeder Seite aus erreichbar sein).
- **Deutsche + Englische Version:** Site ist monolingual englisch — deutsche Version waere inkonsistent. Kann spaeter als `/privacy/de` nachkommen wenn noetig.
- **Cookie-Banner implementieren:** Aktuell laut Policy Sec. 7.2 **keine** nicht-essentiellen Cookies — also kein Banner noetig. Wenn Analytics/Meta-Pixel kommen, eigener Plan.

### Offene Fragen (falls vorhanden)

Diese sollten mit Leo geklaert werden, blockieren den Plan aber nicht:

1. **Legal-Review:** Ist die Docx bereits durch einen Thai-Anwalt gepruft oder ist das noch offen? **Default: Plan umsetzt den Inhalt 1:1 — juristische Verantwortung liegt bei Leo.**
2. **Sec. 7.3-7.6 als aktive Liste sinnvoll?** Die Docx listet GA4, Meta Pixel, Google Maps, YouTube auf, waehrend Sec. 7.2 "Currently: none" sagt. Das kann fuer Besucher verwirrend wirken. Alternative: 7.3-7.6 als "Planned future services" einleiten. **Default im Plan: Docx 1:1 uebernehmen, ohne editorial Zusatz.**
3. **Imprint/Terms als weitere Seiten:** Brauchen wir `/terms` und `/imprint` auch? **Default: nicht Teil dieses Plans** — separater Auftrag falls gewuenscht.
4. **Newsletter-Form im Footer:** Sendet aktuell vermutlich ins Leere (Backend offen). Policy Sec. 8 verspricht Double-Opt-in via Mailchimp. Wenn Formular live geht, muss Consent-Checkbox + Link zu `/privacy` dort ergaenzt werden. **Nicht Teil dieses Plans, aber als TODO in project-memory.**
5. **"Last updated: April 2026":** Bei Go-Live auf konkretes Datum praezisieren? **Default: Docx-Text "April 2026" uebernehmen.**

---

## Schritt-fuer-Schritt-Aufgaben

### Schritt 1: Privacy-Route anlegen

Erstelle `site/app/privacy/page.tsx` mit den folgenden Elementen:

**Aktionen:**

- Datei `site/app/privacy/page.tsx` erstellen (neues Verzeichnis `site/app/privacy/`)
- Metadata-Export mit Title "Privacy Policy - Salt.Magic", Description ("How Salt.Magic handles your personal data under the Thai PDPA. Last updated April 2026."), `robots: 'index, follow'`
- Default-Export `PrivacyPage()`
- Seiten-Layout:
  - Header-Section mit `bg-warm-off`, Playfair h1 "Privacy Policy", Subtitle "Salt.Magic Co., Ltd. - Last updated: April 2026", Padding `py-[clamp(64px,10vw,120px)]`, zentriert
  - Content-Section mit `max-w-[680px] mx-auto px-[clamp(24px,5vw,64px)] py-[clamp(60px,8vw,100px)]`
- 16 Sections als JSX-Strukturen:
  - `<section>` fuer jedes MD-Kapitel (1. Data Controller bis 16. Contact)
  - H2: `font-display text-[clamp(24px,3vw,32px)] font-normal text-mineral tracking-tight mt-[clamp(40px,5vw,64px)] mb-5 leading-[1.2]`
  - H3 (falls vorhanden wie "7.1 Strictly Necessary"): `font-display text-[clamp(18px,2.2vw,22px)] font-normal text-mineral mt-10 mb-4`
  - Paragraphs: `text-[15px] font-normal leading-relaxed text-ink-light mb-4`
  - Strong-Highlights: `font-medium text-ink`
  - Listen: `list-disc pl-6 space-y-2 mb-6 text-[15px] font-normal leading-relaxed text-ink-light`
  - Tabelle in Sec. 4 (Purposes and Legal Bases): responsive 2-Spalten-Grid — auf Mobile stacked, auf sm+ Grid-Pattern. `bg-warm-off` Card-Hintergrund, Gold-Separator-Lines zwischen Zeilen
  - Separator-Lines zwischen Sections: `<hr className="border-border-warm my-[clamp(40px,5vw,64px)]" />`
- Kontakt-Block (Sec. 16) mit `bg-warm-off` Card, Gold-Line oben (`.gold-line`), Playfair-Headings fuer Firmenname
- Anchor-Links: jede Section bekommt `id="section-N"` (z.B. `id="data-controller"`, `id="cookies"`) fuer potentielle Inhaltsverzeichnis-Links
- **Content 1:1 aus der Docx uebernehmen:**
  - Director in Sec. 1: `Director: Kawin Tanomsat`
  - Emails (siehe Design-Entscheidung 10) nicht konsolidieren — pro Section die Docx-Variante nutzen
  - Sec. 7.3-7.6 als Einzeilen-Sub-Sections mit Provider + Purpose (genau wie die Docx sie formuliert)
  - Keine DPO-Fussnote in Sec. 16
- **Links aktiv machen:**
  - `https://www.pdpc.or.th` als externe Link mit `target="_blank" rel="noopener noreferrer"`
  - `https://resend.com`, `https://mailchimp.com` ebenfalls extern
  - Emails als `mailto:` Links — **info@salt-magic.com** (Sec. 1, Sec. 16) UND **leo@salt-magic.com** (Sec. 6, 8, 12), jeweils korrekt pro Section
  - `+66 82 602 0486` als `tel:+66826020486` Link
  - Interne Cross-Refs wie "see Section 10" als `<a href="#cross-border">` Anchor-Links
- Accessibility:
  - Haupt-H1 bleibt `<h1>`
  - Section-Headers sind semantisch `<h2>`, Sub-Headers `<h3>`
  - Tabelle in Sec. 4 mit `role="table"`, `role="row"`, `role="cell"` + `<dl>/<dt>/<dd>` Fallback
  - Keine `text-white/*` (keine dunklen BGs in dieser Seite)
  - Alle Links haben `focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold`
  - Externe Links haben `aria-label` mit "(opens in new window)" Hinweis
- Typografische Konsistenz mit bestehender Site pruefen:
  - Keine `font-bold`, `font-semibold`, `font-light` verwenden (Token-Policy V18)
  - Nur `font-normal` und `font-medium`
  - Keine Em-Dashes, nur Hyphens (ersetze "—" im MD durch "-" oder `&mdash;` falls typografisch gewuenscht — aber in PartnerForm wird `&mdash;` genutzt, also konsistent)
  - Keine italics/em-Tags

**Betroffene Dateien:**

- `site/app/privacy/page.tsx` (NEU)

---

### Schritt 2: Footer Bottom-Bar um Privacy-Link erweitern

**Aktionen:**

- Mobile Bottom-Bar ([site/components/Footer.tsx:67-70](site/components/Footer.tsx#L67-L70)):
  - Aktuell: `<div className="...flex justify-between..."><span>Made on Koh Samui</span><span>&copy; 2026 Salt.Magic</span></div>`
  - Neu: Drei Elemente statt zwei — "Made on Koh Samui" links, Mittel-Link `<Link href="/privacy">Privacy</Link>`, Copyright rechts
  - Flex-Behavior: `justify-between` beibehalten, drei gleichmaessige Elemente
  - Link-Styling: `text-xs font-normal text-white/70 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold`
- Desktop Bottom-Bar ([site/components/Footer.tsx:140-143](site/components/Footer.tsx#L140-L143)):
  - Analog zu Mobile: Drei-Element-Flex mit Privacy-Link in der Mitte
  - Evtl. zusaetzlich auf `gap-6 flex-wrap` statt `justify-between`, falls drei Elemente unhandlich wirken — Entscheidung waehrend Implementierung
- **next/link Import** pruefen: Footer importiert bereits `Link` aus `next/link` (Zeile 2), also kein neuer Import noetig
- Konsistenz: analog zur Blog/Partner-Behandlung weiter oben im Footer

**Betroffene Dateien:**

- `site/components/Footer.tsx` (MODIFIZIERT, zwei Stellen)

---

### Schritt 3: Sitemap erweitern

**Aktionen:**

- In [site/app/sitemap.ts](site/app/sitemap.ts) einen neuen Eintrag ergaenzen:
  ```ts
  {
    url: `${baseUrl}/privacy`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  }
  ```
- Einfuegeposition: nach `/blog` und vor `...blogEntries` Spread
- Priority 0.3 ist Convention fuer Legal-Pages (niedriger als Product/Blog, aber indexiert)

**Betroffene Dateien:**

- `site/app/sitemap.ts` (MODIFIZIERT)

---

### Schritt 4: Lokale Validierung

**Aktionen:**

- Dev-Server starten: `cd site && npm run dev`
- Browser oeffnen auf `http://localhost:3000/privacy`
- Pruefen:
  - Seite rendert ohne Fehler
  - Alle 16 Sections sichtbar und korrekt formatiert
  - Header mit mineral-Farbe, Body in ink-light
  - Keine Layout-Shifts
  - Footer-Link funktioniert (Home → Privacy → Home)
  - Interne Anchor-Links springen korrekt (`#data-controller`, `#cookies`, `#cross-border`)
  - Externe Links oeffnen in neuem Tab (pdpc.or.th, resend.com, mailchimp.com)
  - Mailto- und Tel-Links loesen native Handler aus
  - Mobile-View (375px): alles scrollbar, kein Overflow
  - Desktop-View (1200px+): Reading-Column zentriert, max 680px breit
- `npm run build` ausfuehren, pruefen dass kein TypeScript- oder ESLint-Error auftritt
- `sitemap.xml` pruefen: `http://localhost:3000/sitemap.xml` — `/privacy` muss enthalten sein

**Betroffene Dateien:** Keine (nur Verifikation)

---

### Schritt 5: CLAUDE.md aktualisieren

**Aktionen:**

- Im Abschnitt "Project Scope" / "Current status" einen Hinweis auf V27 (Privacy Policy) ergaenzen
- Im Abschnitt "Key Changes in V26 Session" nachfolgend neuen V27-Block hinzufuegen:
  - Titel: `Key Changes in V27 Session (Privacy Policy Seite)`
  - Bullets:
    - Neue Route `/privacy` mit PDPA-konformer Datenschutzerklaerung (16 Sections, basierend auf [outputs/Salt-Magic-Privacy-Policy-v1.docx](outputs/Salt-Magic-Privacy-Policy-v1.docx))
    - Editorial-Layout (Reading-Column 680px, Playfair H1, Inter Body, mineral/gold Palette)
    - Footer Bottom-Bar (Mobile + Desktop) um "Privacy"-Link erweitert
    - Sitemap um `/privacy` Eintrag erweitert (priority 0.3, yearly)
    - Director "Kawin Tanomsat" in Sec. 1 eingetragen (Docx-Vorgabe)
    - Email-Split: info@salt-magic.com (Sec. 1, Sec. 16) vs leo@salt-magic.com (Sec. 6, 8, 12)
    - Sec. 7.3-7.6 (GA4, Meta Pixel, Maps, YouTube) als aktive Sub-Sections (Docx-Vorgabe, obwohl Sec. 7.2 "Currently: none" sagt)
    - Keine Cookie-Banner-Implementierung — Policy Sec. 7.2 dokumentiert aktuell "keine nicht-essentiellen Cookies"
    - Offen: Terms of Service + Imprint als weitere Legal-Seiten, Newsletter-Consent-Checkbox im Footer-Form

**Betroffene Dateien:**

- `CLAUDE.md` (MODIFIZIERT)

---

### Schritt 6: Memory-Update

**Aktionen:**

- Neuer Projekt-Memory-Eintrag: "V27 Privacy Policy Live" mit aktuellem Stand (Route live, Director TBD, Terms/Imprint ausstehend)
- Eintrag in `MEMORY.md` Index ergaenzen

**Betroffene Dateien:**

- `C:\Users\offic\.claude\projects\.../memory/project_v27_privacy.md` (NEU)
- `C:\Users\offic\.claude\projects\.../memory/MEMORY.md` (MODIFIZIERT)

---

## Verbindungen & Abhaengigkeiten

### Dateien, die diesen Bereich referenzieren

- `site/components/Footer.tsx` — bekommt Privacy-Link
- `site/app/sitemap.ts` — bekommt Privacy-Eintrag
- Keine weiteren Cross-Refs: `/privacy` wird nicht von anderen Seiten verlinkt (ausser Footer)

### Noetige Updates fuer Konsistenz

- **CLAUDE.md:** V27-Session-Notes (Schritt 5)
- **Kein** Update an `outputs/copy-*` oder `outputs/design-spec-v1.md` noetig — Privacy-Content ist separat dokumentiert in [outputs/privacy-policy-v1.md](outputs/privacy-policy-v1.md)
- **Kein** Update am Partner-Formular / Newsletter-Formular noetig in diesem Plan (siehe Offene Frage 5 — separater Auftrag)

### Auswirkungen auf bestehende Workflows

- Keine Breaking Changes an Homepage, Partner, Blog
- Footer Bottom-Bar waechst um ein Element (minimaler visueller Impact)
- Sitemap waechst um einen Eintrag (SEO-neutral bis positiv)
- Kein Einfluss auf bestehende Commands oder Scripts

---

## Validierungs-Checkliste

- [ ] `site/app/privacy/page.tsx` existiert und rendert ohne Runtime-Errors
- [ ] `http://localhost:3000/privacy` zeigt alle 16 Sections korrekt
- [ ] Typografie folgt Brand Guidelines (mineral, gold, ink-light, Playfair Display, Inter)
- [ ] Kein `font-bold`/`font-semibold`/`font-light` verwendet (nur `font-normal`/`font-medium`)
- [ ] Kein Em-Dash ausser `&mdash;` HTML-Entity (Konvention mit PartnerForm)
- [ ] Alle externen Links haben `target="_blank" rel="noopener noreferrer"`
- [ ] Mailto- und Tel-Links funktionieren
- [ ] Interne Anchor-Links (`#data-controller` etc.) springen korrekt
- [ ] Footer Mobile + Desktop Bottom-Bar hat neuen Privacy-Link
- [ ] Privacy-Link im Footer navigiert zu `/privacy`
- [ ] `sitemap.xml` enthaelt `/privacy` mit priority 0.3
- [ ] `npm run build` laeuft ohne TypeScript-/ESLint-Errors
- [ ] Mobile-View (375px) zeigt keinen Horizontal-Overflow
- [ ] Desktop-View zentriert Reading-Column auf max-w-[680px]
- [ ] Director "Kawin Tanomsat" in Sec. 1 sichtbar
- [ ] Email-Split korrekt: Sec. 1/16 = info@, Sec. 6/8/12 = leo@
- [ ] Sec. 7.3-7.6 (GA4, Meta Pixel, Maps, YouTube) als Sub-Sections gerendert
- [ ] CLAUDE.md hat V27-Session-Eintrag
- [ ] Memory-Eintrag fuer V27 Privacy angelegt + im Index referenziert

---

## Erfolgskriterien

Die Implementierung ist abgeschlossen, wenn:

1. Die Route `/privacy` auf der lokalen Dev-Site ohne Fehler erreichbar ist und alle 16 Sections der Datenschutzerklaerung korrekt rendert
2. Der Footer-Link (Mobile + Desktop) zur Privacy-Seite navigiert
3. Die Sitemap `/privacy` enthaelt und `npm run build` ohne Errors durchlaeuft
4. Typografie und Layout konsistent mit dem restlichen Salt.Magic Editorial-Stil sind (Playfair + Inter, mineral/gold, max-w-[680px] Reading-Column)
5. CLAUDE.md den V27-Stand dokumentiert

---

## Notizen

- **Legal-Review-Hinweis:** Die Markdown-Quelle enthaelt einen expliziten Hinweis "Adapt to the actual tools, services and data flows used on your website and have it reviewed by a qualified Thai lawyer before publication." Dieser Plan setzt den Content 1:1 technisch um — die rechtliche Eignung ist **Leos Verantwortung**. Vor Go-Live sollte eine Thai-Anwaelte-Review erfolgen.
- **Zukuenftige Legal-Seiten:** `/terms` (Terms of Service) und `/imprint` koennten dem gleichen Pattern folgen. Falls spaeter benoetigt, separater Plan mit Shared-Layout-Extraktion moeglich.
- **Cookie-Banner:** Aktuell nicht noetig (Sec. 7.2). Wenn Analytics oder Meta-Pixel eingefuehrt werden, muss ein Consent-Banner (PDPA Sec. 19) her — das waere ein eigenes, groesseres Plan-Thema.
- **Newsletter-Consent:** Das Footer-Newsletter-Formular hat aktuell keine explizite Privacy-Link-Verknuepfung oder Consent-Checkbox. Wenn das Formular live Backend-Integration bekommt, sollte eine Micro-Copy-Zeile mit `Link href="/privacy"` dort ergaenzt werden. Nicht Teil dieses Plans.
- **GEO-Signal:** Die Privacy-Seite wird nicht explizit GEO-optimiert, aber strukturierte H2/H3-Hierarchie + klare Sections = gut zitierbar durch AI-Suchmaschinen (PDPA-spezifische Queries wie "Thailand privacy compliance electrolyte brand").
- **Versionierung:** MD sagt "Last updated: April 2026". Wenn Policy-Updates noetig werden (z.B. neuer Service wie GA), sollte ein Versions-Footer ("Version 1.0 - April 2026") auf der Seite sichtbar sein. Fuer V1 reicht der Untertitel im Header.

---

## Implementierungsnotizen

**Implementiert:** 2026-04-18

### Zusammenfassung

- Neue Route `/privacy` mit allen 16 PDPA-Sections aus der Docx angelegt unter `site/app/privacy/page.tsx` (922 Zeilen JSX)
- Editorial-Layout umgesetzt: Header-Section (`bg-warm-off`, Gold-Line, Eyebrow "Legal", Playfair H1), Reading-Column `max-w-[680px]` mit Section-Separatoren
- Typografie-Token strikt eingehalten (nur `font-normal`/`font-medium`, keine italics, `&mdash;` fuer Em-Dashes)
- Purpose-Legal-Basis-Tabelle in Sec. 4 als responsive Grid mit `role="table"`/`role="row"`/`role="cell"` fuer Accessibility
- Email-Split pro Section 1:1 aus der Docx uebernommen (info@ in Sec. 1/16, leo@ in Sec. 6/8/12)
- Director "Kawin Tanomsat" in Sec. 1 eingetragen
- Sec. 7.3-7.6 (GA4, Meta Pixel, Maps, YouTube) als aktive Sub-Sections gerendert
- Alle 16 Sections mit Anchor-IDs (`data-controller`, `applicable-law`, ..., `contact`) + interne Cross-Refs (`#newsletter`, `#cookies`, `#cross-border`, `#external-redirects`) als Anchor-Links
- Externe Links (PDPC, Resend, Mailchimp) mit `target="_blank" rel="noopener noreferrer"` + aria-label "(opens in new window)"
- Kontakt-Card in Sec. 16 (`bg-warm-off` Card mit Gold-Line, Playfair-Firmenname)
- Footer Bottom-Bar Mobile + Desktop um `<Link href="/privacy">Privacy</Link>` erweitert (Drei-Element-Flex)
- Sitemap um `/privacy` Eintrag (priority 0.3, yearly) erweitert
- `npm run build` erfolgreich: `/privacy` wird als statische Route generiert (138 B Page Size, First Load JS 87.4 kB)
- CLAUDE.md um V27-Session-Block erweitert
- Memory-Eintrag `project_v27_privacy.md` angelegt + in MEMORY.md indexiert

### Abweichungen vom Plan

- **Zusaetzliches `alternates.canonical`** in Metadata-Export: `https://salt-magic.com/privacy` als explizite Canonical-URL ergaenzt, analog zur Root-Layout-Konvention. Nicht im Plan spezifiziert, aber SEO-best-practice und kostet nichts.
- **Next.js `next/font` als Inline-Code-Badge**: In Sec. 7.1 wird `next/font` als `<span className="font-mono text-[13px] bg-warm-off px-1.5 py-0.5 rounded">next/font</span>` gerendert statt als normaler Text - bessere Lesbarkeit fuer den technischen Begriff. Plan schrieb nur "Inline JSX, typsicher" ohne spezifische Vorgabe.
- **H2/H3-Groessen leicht reduziert**: H2 auf `clamp(22px,2.8vw,30px)` statt Plan-Spec `clamp(24px,3vw,32px)`, H3 auf `clamp(17px,2vw,20px)` statt `clamp(18px,2.2vw,22px)`. Grund: Plan-Spec war zu nah am Blog-Detail-H2 fuer juristische Texte - kleinere Groessen lesen sich sachlicher.
- **Header-Section bekam `.gold-line` + Eyebrow "Legal"**: Plan spezifizierte nur "Playfair H1 + Subtitle". Die Gold-Line + Eyebrow wurden ergaenzt fuer visuelle Konsistenz mit PartnerHero/WhySection-Header-Pattern.

### Aufgetretene Probleme

Keine. Build lief beim ersten Versuch sauber durch, keine TypeScript- oder ESLint-Warnings.

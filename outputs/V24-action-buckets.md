# V24 — Leos Annotationen klassifiziert

**Quelle:** [V24-leo-inline-annotations.md](V24-leo-inline-annotations.md) (22 Roh-Annotationen aus Leos überarbeiteter Docx)
**Ergebnis:** 12 echte Action-Items + 10 "CURRENT COPY" Klarstellungen (Reference-Bucket)

---

## Bucket 1 — Globale Regeln (gelten überall, nicht nur in einer Section)

| # | Regel | Quelle | Wo betroffen |
|---|---|---|---|
| G1 | **NIE "powder"** verwenden — wir sind "natural electrolytes", "mineral blend", "formula" | Hero, Comparison, Products, FAQ (4× erwähnt) | Hero, Comparison, Products, FAQ, Meta, Newsletter, alle JSON-LD Descriptions |
| G2 | **"premium"** statt **"premier"** | Section 1 Meta | Meta Description, JSON-LD Organization, Hero, alle Premium-Claims |
| G3 | Phrase **"natural electrolyte power"** komplett verboten (Leo: "Please don't use") | Section 1 Meta | Meta, OG, Twitter, evtl. SocialProof |
| G4 | Keine Brand-Namen in Vergleichen — kein **LMNT**, kein **Wilder**, kein **Liquid IV**, kein **Liquid Death** | FAQ Q "How does it compare to imported brands" | FAQ, Comparison, CategoryProof (Partner) |

---

## Bucket 2 — Faktum-Updates (Zahlen / Fakten ändern)

| # | Was | Alt | Neu | Quelle | Wo betroffen |
|---|---|---|---|---|---|
| F1 | Serving-Size | 2g | **3g** | Comparison + FAQ (2× explizit) | business-info.md, current-data.md, Comparison, FAQ, Hero-Eyebrow falls erwähnt, JSON-LD nutritionInformation |
| F2 | Glass Jar Preis | (variiert) | **490 THB** | Section 4 Why Notes | Products.tsx, business-info.md, JSON-LD Product 1, current-data.md |
| F3 | Travel Sachet Preis | (variiert) | **290 THB** | Section 4 Why Notes | Products.tsx, business-info.md, JSON-LD Product 2, current-data.md |
| F4 | Magnesium-Wording | "most bioavailable magnesium citrate" | "most bioavailable magnesium" | Section 5 Formula Notes | Ingredients.tsx, FAQ, business-info.md (falls erwähnt) |
| F5 | Kinder-Dosierung (halbe Portion) | 1g | **1.5g** | FAQ "safe for all ages" Antwort | FAQ Q8 |
| F6 | Empfohlene Routine | "1-2 servings per day" | **"Mix 3g in 1.5L Wasser, mehr je nach Schweißverlust"** | FAQ Routine-Antwort | FAQ Routine-Q |

---

## Bucket 3 — Section-spezifische Copy-Änderungen

| # | Section | Component | Was ändern |
|---|---|---|---|
| S1 | FAQ "Just salt water?" Antwort | `Faq.tsx` | NICHT "natural pink salt hydration formula" — sondern: **"It's a magnesium-rich hydration formula. We use only a small amount of salt compared to competitors."** |
| S2 | FAQ Routine-Antwort | `Faq.tsx` | Neue Antwort: **"Mix 3 grams in 1.5L of water, more or less depending how much you sweat. The more you sweat, the more you need. Stay hydrated!"** |
| S3 | FAQ "Compare to imported brands" | `Faq.tsx` | Frage umformulieren ohne Brand-Namen ODER Antwort komplett ohne LMNT/Wilder erwähnen. Vorschlag: "How does Salt.Magic compare to imported electrolyte brands?" + Antwort über 7× Magnesium, zero sugar, etc. |
| S4 | FAQ "Safe for all ages" | `Faq.tsx` | "We recommend a half-serving (**1.5g**) for children..." |
| S5 | Products Glass Jar Description | `Products.tsx` | Leos Vorschlag enthält "pink salt morning drink ritual" — Leo findet die Phrase selbst seltsam. Alternative formulieren ohne "ritual"-Klang. Vorschlag: **"A beautiful glass jar with a gold lid, designed to live on your kitchen counter. Inside: a magnesium-rich mineral blend that brings your water back to life. Proudly crafted at our Koh Samui hub."** |

---

## Bucket 4 — Streichungen

| # | Was raus | Wo | Begründung |
|---|---|---|---|
| D1 | Wort "powder" in jeder Form | Überall | Leo: "Remove powder", "don't need to say the word 'Powder'" |
| D2 | Phrase "natural electrolyte power" | Meta + alle Stellen | Leo: "Please don't use the phrase" |
| D3 | "premier" Wording | Überall | Leo: "premium (not premier)" |
| D4 | "magnesium citrate" als Wording in Headlines/Body | Ingredients, FAQ | Leo: "It's probably meant to say the most bioavailable magnesium" — chemischer Name kann in Faktenbox bleiben, aber nicht in Marketing-Copy |
| D5 | Brand-Namen LMNT, Wilder, Liquid IV, Liquid Death | FAQ, Comparison, CategoryProof | Leo: "I don't want to compete with them" |
| D6 | "1-2 servings per day for optimal hydration" | FAQ Routine | Ersetzt durch S2 |

---

## Bucket 5 — Offene Fragen (Klärung mit Leo erforderlich)

| # | Frage | Kontext | Empfehlung |
|---|---|---|---|
| Q1 | **FDA approved** in Copy einbauen — wo überall? | Section 1 Meta. Leo: "We probably need to incorporate FDA approved in copy as well" — das "probably" macht es unverbindlich | Phase-2-Frage an Leo: Wo genau? Hero-Eyebrow? Meta? TrustBand? Footer? Status: bereits FDA approved, oder in Process? |
| Q2 | Wer hat "most bioavailable magnesium **citrate**" geschrieben? | Section 5 Formula. Leo: "Where did this come from?" | Stammt aus V11 Ingredients-Refresh. Leo bestätigen lassen, ob "magnesium" als generischer Begriff überall reicht oder ob in einer Fakten-Box "Magnesium Citrate 312mg" stehen darf |
| Q3 | Glass Jar Description "pink salt morning drink ritual" — alternative Formulierung? | Section 9 Products. Leo: "This blurb sounds strange" | Vorschlag S5 oben — Leo bestätigen lassen |
| Q4 | "natural pink salt hydration formula" → "magnesium rich hydration formula" — gilt das auch außerhalb der FAQ? | Section 12 FAQ Q "Just salt water" | Wahrscheinlich ja → potentiell globale Regel |
| Q5 | Welche neuen Fotos vom Drive ersetzen welche aktuellen Bilder? | Phase 1.3 Foto-Mapping | Kersti: bevor Phase 4 startet, Mapping konkret befüllen |
| Q6 | Welche Blog-Themen mit konkretem Inhalt? | Antwort aus Klärungsfragen — Leo hat Blog-Inhalte erwähnt, aber im Docx noch keine sichtbar | Kersti: Liegen die irgendwo separat? Falls ja → eigener Bucket Phase 2 |
| Q7 | "Other"-Antwort bei "neue Info" — was war gemeint? | Klärungsfragen vor Phase 1 | Kersti antwortet bei nächster Sync |

---

## Bucket 6 — Reference / Klarstellungen (NICHT umsetzen, nur Kontext)

Leo hat in Section 1 (Meta / SEO Tags) die aktuelle Live-Copy unter "CURRENT COPY" ausgeschrieben, damit klar ist, was er sieht. Diese Einträge sind **keine Edits**, sondern dokumentieren den aktuellen Zustand:

- `[Title] Salt.Magic - Thailand's Natural Electrolyte Mineralizer`
- `[Meta Description] Salt.Magic restores essential minerals to your water with 3 natural ingredients - 312mg magnesium, zero sugar, zero additives. Trusted daily by thousands across Thailand.`
- `[OG Description] 3 natural minerals. Zero sugar. Zero additives. 312mg magnesium per serving. The daily electrolyte Thailand trusts.`
- `[Twitter Description] 3 natural minerals. Zero sugar. Zero additives. 312mg magnesium per serving.`
- `[JSON-LD Organization] Thailand's premier all-natural daily electrolyte mineralizer. Three natural ingredients, zero sugar, zero additives.`
- `[JSON-LD Product 1] Premium glass jar with 70 servings of natural electrolyte mineralizer. 312mg magnesium, zero sugar, flavorless. Crafted on Koh Samui.`
- `[JSON-LD Product 2] Portable resealable pouch with 30 servings of natural electrolyte mineralizer. 312mg magnesium, zero sugar, GMP/HACCP certified.`

**Wichtig:** Diese Texte enthalten teilweise selbst die zu eliminierenden Wörter ("premier", "premium ... mineralizer"). Bei der Implementierung müssen die globalen Regeln G1-G4 darauf angewendet werden:
- "Thailand's **premier** ..." → "Thailand's **premium** ..."
- "**Premium** glass jar with 70 servings of natural electrolyte mineralizer" — "natural electrolyte mineralizer" ist OK (kein "powder")

---

## Zusammenfassung

| Bucket | # Items | Aktion |
|---|---|---|
| 1 — Globale Regeln | 4 | Als Memory + global-copy-rules.md festhalten, in jede zukünftige Implementierung einarbeiten |
| 2 — Faktum-Updates | 6 | Sofort in `context/` einpflegen + im V24-Spec markieren |
| 3 — Section-Edits | 5 | Im V24-Spec mit Component-Pfad listen |
| 4 — Streichungen | 6 | Greift bei Implementierung (suchen + entfernen) |
| 5 — Offene Fragen | 7 | Vor Phase 4 (Implementierung) mit Leo klären |
| 6 — Reference | 7 | Nur als Kontext — nicht als Edit |

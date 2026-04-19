# Domain Migration Audit — salt-magic.com

> Pre-flight DNS audit fuer Migration **Namecheap DNS → Vercel Hosting** (A-Record-Methode).
> Erstellt: 2026-04-19, via `nslookup` aus dem Workspace.
> **Namecheap bleibt Registrar UND DNS-Authority.** Wir aendern nur A + CNAME.

---

## BEFORE (aktueller Zustand, 2026-04-19)

### A-Records (Apex + www)

| Host | Aktueller Wert | Ziel nach Migration |
|---|---|---|
| `salt-magic.com` (Apex) | **A** → `185.158.133.1` | **A** → `76.76.21.21` (Vercel) |
| `www.salt-magic.com` | **A** → `185.158.133.1` | **CNAME** → `cname.vercel-dns.com` (oder projekt-spezifischer Wert aus Vercel-Dashboard) |

**IP `185.158.133.1` = vermutlich Lovable** (aktuelle Produktionsplattform). Kein CNAME fuer www aktuell — ist ein A-Record.

### MX-Records (E-Mail — NICHT ANFASSEN)

| Preference | Mail Exchanger |
|---|---|
| 1 | `aspmx.l.google.com` |
| 5 | `alt1.aspmx.l.google.com` |
| 5 | `alt2.aspmx.l.google.com` |
| 10 | `alt3.aspmx.l.google.com` |
| 10 | `alt4.aspmx.l.google.com` |

**E-Mail-Host: Google Workspace.** `info@salt-magic.com` + `leo@salt-magic.com` laufen ueber Gmail. Diese 5 MX-Records MUESSEN unveraendert bleiben, sonst fallen beide Postfaecher aus.

### TXT-Records (SPF + Google-Verifikation — NICHT ANFASSEN)

| Typ | Wert | Zweck |
|---|---|---|
| TXT | `v=spf1 include:_spf.google.com ~all` | SPF fuer Gmail — darf NICHT entfernt werden (sonst landen outgoing Mails im Spam) |
| TXT | `google-site-verification=haaBoV_vndTaO06iULoyhDjr6gtO4P0hJW8GMUW2YRM` | Google Search Console Verifikation — bleibt bestehen |

### Nameservers (authoritative)

- `dns1.registrar-servers.com` (Namecheap)
- `dns2.registrar-servers.com` (Namecheap)

**Namecheap ist DNS-Authority.** Bestaetigt die A-Record-Strategie: wir wechseln NICHT die Nameserver.

---

## SICHERHEITSZONE — Diese Records bleiben unveraendert

- [ ] Alle 5 **MX**-Records (Google Workspace)
- [ ] **TXT** `v=spf1 include:_spf.google.com ~all`
- [ ] **TXT** `google-site-verification=haaBoV_...`
- [ ] Beide Nameserver (`dns1/dns2.registrar-servers.com`)
- [ ] Eventuell weitere DKIM-Records (in Namecheap-UI pruefen — `google._domainkey.salt-magic.com` CNAME oder TXT)

---

## AKTIONSZONE — Diese Records werden geaendert

- [ ] `@` **A** von `185.158.133.1` → `76.76.21.21`
- [ ] `www` **A** `185.158.133.1` LOESCHEN → neuen **CNAME** `cname.vercel-dns.com` (Wert aus Vercel-Dashboard bestaetigen)

---

## AFTER (Ziel-Zustand — nach erfolgreichem Cutover eingetragen 2026-04-19)

### A-Records
- `salt-magic.com` → **A** `216.198.79.1` (Vercel — Apex)
- `www.salt-magic.com` → **CNAME** `d1c6af0a970f4ef8.vercel-dns-017.com` (Vercel projektspezifisch)

Hinweis: Vercel hat die empfohlene IP von `76.76.21.21` auf `216.198.79.1` aktualisiert — Namecheap-Record wurde entsprechend eingetragen. Vercel-Dashboard bestaetigt "Valid Configuration".

### MX + TXT + NS
- [x] Alle 5 MX-Records (Google Workspace) **unveraendert** vs BEFORE — via `nslookup -type=mx` verifiziert
- [x] TXT SPF `v=spf1 include:_spf.google.com ~all` unveraendert
- [x] Nameserver `dns1/dns2.registrar-servers.com` unveraendert

### Vercel-Dashboard
- [x] `salt-magic.com` = **Valid Configuration** (Production)
- [x] `www.salt-magic.com` = **Valid Configuration** (Redirect → salt-magic.com, 308 Permanent)
- [x] SSL-Zertifikat aktiv auf beiden Domains (`Strict-Transport-Security: max-age=63072000` im Response-Header)

### Funktionstest (via `curl -skI`, 2026-04-19 12:58 UTC)
- [x] `https://salt-magic.com` → **HTTP/1.1 200 OK** (Server: Vercel, X-Vercel-Cache: HIT)
- [x] `https://www.salt-magic.com` → **HTTP/1.1 308 Permanent Redirect** → Location: `https://salt-magic.com/`
- [ ] Test-Mail `info@salt-magic.com` kommt an — **optional (MX unveraendert, technisch redundant)**
- [ ] Test-Mail `leo@salt-magic.com` kommt an — **optional (MX unveraendert, technisch redundant)**

### SEO-Konsolidierung (308-Redirect)
Aktuell konsolidiert der 308 Permanent Redirect alle Ranking-Signale auf den apex `salt-magic.com` — konsistent mit Canonical-URL in Privacy Policy, Sitemap und JSON-LD. Google wird `www.salt-magic.com` nicht mehr separat indexieren.

---

## Rollback-Werte (falls noetig)

Falls etwas schiefgeht, in Namecheap Advanced DNS zurueckaendern auf:

```
A    @    185.158.133.1
A    www  185.158.133.1
```

Das stellt den Lovable-Stand wieder her.

---

## Quellen

- `nslookup salt-magic.com` (2026-04-19, via Workspace Bash)
- `nslookup www.salt-magic.com`
- `nslookup -type=mx salt-magic.com`
- `nslookup -type=txt salt-magic.com`
- `nslookup -type=ns salt-magic.com`
- Vercel Docs: [add-a-domain](https://vercel.com/docs/domains/working-with-domains/add-a-domain), [working-with-dns](https://vercel.com/docs/domains/working-with-dns)

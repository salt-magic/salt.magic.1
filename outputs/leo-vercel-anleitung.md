# Salt.Magic Website auf Vercel deployen

## Was du brauchst
- E-Mail-Adresse
- 20 Minuten Zeit
- Den Ordner "site/" den ich dir schicke (als ZIP)

---

## Schritt 1: GitHub Account erstellen (5 Min)

1. Gehe zu **github.com**
2. Klick "Sign up"
3. E-Mail, Passwort, Username eingeben (z.B. "salt-magic" oder "leosaltmagic")
4. Verifiziere deine E-Mail

---

## Schritt 2: Neues Repository erstellen (3 Min)

1. Auf GitHub eingeloggt: Klick oben rechts das **+** Symbol → "New repository"
2. Repository name: **salt-magic-website**
3. Visibility: **Private** (nur du siehst den Code)
4. NICHT "Add a README" ankreuzen
5. Klick "Create repository"
6. Lass die Seite offen — du brauchst die Befehle gleich

---

## Schritt 3: Code hochladen (5 Min)

### Option A: Ueber die Kommandozeile (wenn Git installiert ist)

Oeffne ein Terminal/CMD im "site/" Ordner und fuehre aus:

```bash
git init
git add .
git commit -m "Initial commit - Salt.Magic Website"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/salt-magic-website.git
git push -u origin main
```

Ersetze DEIN-USERNAME mit deinem GitHub-Usernamen.

### Option B: Ueber GitHub Desktop (einfacher)

1. Lade **GitHub Desktop** herunter: desktop.github.com
2. Installieren und mit deinem GitHub Account anmelden
3. File → Add Local Repository → den "site/" Ordner auswaehlen
4. Falls er fragt "initialize": Ja
5. Unten links: Summary = "Initial commit" → Klick "Commit to main"
6. Oben: "Publish branch" klicken
7. Repository Name: salt-magic-website, Private ankreuzen → Publish

### Option C: Drag & Drop (am einfachsten)

1. Gehe zu deinem leeren Repository auf github.com
2. Klick "uploading an existing file"
3. Ziehe ALLE Dateien aus dem "site/" Ordner rein (NICHT den node_modules Ordner!)
4. Unten "Commit changes" klicken

---

## Schritt 4: Vercel Account erstellen + Deployen (5 Min)

1. Gehe zu **vercel.com**
2. Klick "Sign Up" → "Continue with GitHub"
3. GitHub-Zugriff erlauben
4. Du landest im Vercel Dashboard
5. Klick "Add New..." → "Project"
6. Dein Repository "salt-magic-website" erscheint → Klick "Import"
7. Settings:
   - Framework Preset: **Next.js** (wird automatisch erkannt)
   - Root Directory: **leer lassen** (der Code ist direkt im Repo-Root)
8. Klick **"Deploy"**
9. Warte 1-2 Minuten — Vercel baut die Seite
10. Du bekommst eine URL wie `salt-magic-website.vercel.app` → teste ob alles funktioniert

---

## Schritt 5: Domain verbinden (5 Min + Wartezeit)

1. Im Vercel Dashboard: Dein Projekt → "Settings" → "Domains"
2. Gib ein: **salt-magic.com** → "Add"
3. Vercel zeigt dir DNS-Einstellungen:
   - A Record: `76.76.21.21`
   - CNAME fuer www: `cname.vercel-dns.com`
4. Gehe zu deinem Domain-Registrar (wo du salt-magic.com gekauft hast)
5. DNS-Einstellungen oeffnen
6. Alte A-Records und CNAMEs loeschen (die auf Lovable zeigen)
7. Neue Records eintragen:
   - **A Record**: Host = `@`, Value = `76.76.21.21`
   - **CNAME Record**: Host = `www`, Value = `cname.vercel-dns.com`
8. Speichern
9. Zurueck zu Vercel — nach ein paar Minuten zeigt es "Valid Configuration"
10. SSL wird automatisch eingerichtet

**Wichtig:** MX-Records (fuer E-Mail) NICHT loeschen! Nur A und CNAME aendern.

---

## Fertig!

Deine Seite laeuft jetzt auf salt-magic.com ueber Vercel.

Wenn du spaeter Aenderungen machen willst:
- Code aendern → auf GitHub pushen → Vercel deployt automatisch

---

## Falls etwas nicht klappt

- Vercel Build Error: Meist fehlende Dependencies → im Terminal `npm install` ausfuehren und nochmal pushen
- Domain zeigt noch alte Seite: DNS braucht bis zu 48h (meist aber 15-60 Min)
- SSL-Fehler: Loest sich automatisch nachdem DNS richtig konfiguriert ist

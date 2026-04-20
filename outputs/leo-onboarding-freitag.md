# Leo Onboarding — Claude Desktop App + GitHub Setup

> Schritt-fuer-Schritt Anleitung fuer Freitag. Leo hat die Claude Desktop App bereits installiert. Der Rest wird einmal eingerichtet, danach ist es nur noch "App oeffnen, Projekt waehlen, auf Deutsch anweisen".

---

## Was machen wir heute?

Die Claude Desktop App ist fertig — aber sie braucht noch drei kleine Werkzeuge, damit sie echten Code auf deinem Laptop aendern und auf GitHub hochladen kann:

1. **Git** — das System, das die Code-Versionen verwaltet (wie Google Docs Versionshistorie, aber fuer Code)
2. **Node.js** — damit die Website lokal auf deinem Laptop laufen kann
3. **GitHub CLI** — damit dein Laptop sich bei GitHub einloggt (einmal klicken im Browser, dann ist Ruhe)

Danach:
- Projekt-Ordner einmal auf deinen Laptop holen
- In der Desktop App "Add Project" → fertig

**Dauer:** 20-30 Minuten Setup, dann fuer immer.

---

## Teil 0: Terminal finden

Fuer die Installation brauchen wir einmal das Terminal — das schwarze Fenster, in das man Befehle tippt.

**Auf dem Mac:**
- `Cmd + Space` druecken → "Terminal" tippen → Enter

**Auf Windows:**
- Windows-Taste druecken → "Terminal" tippen → Enter

Das Terminal ist offen, wenn du etwas wie `leo@MacBook ~ %` oder `PS C:\Users\Leo>` siehst. Dort tippst du die Befehle rein, dann Enter druecken. Alles was mit `#` anfaengt ist nur ein Kommentar fuer dich, **nicht** mittippen.

Nach dem Setup brauchst du das Terminal fast nie mehr — Claude macht das in der Desktop App fuer dich.

---

## Teil 1: Die drei Werkzeuge installieren

### Auf einem Mac

**1. Git installieren**

Im Terminal tippen:
```bash
xcode-select --install
```
Ein Fenster poppt auf → "Installieren" klicken → 5 Minuten warten.
Wenn da "already installed" steht, ist alles gut — naechster Schritt.

**2. Node.js installieren**

Browser: https://nodejs.org
→ Grosser gruener Button **"LTS"** → Installer runterladen → doppelklicken → durchklicken.

**3. GitHub CLI installieren**

Browser: https://cli.github.com
→ "Download for macOS" → Installer doppelklicken → durchklicken.

---

### Auf einem Windows-PC

**1. Git installieren**

Browser: https://git-scm.com/download/win
→ Installer runterladen → doppelklicken → **alle Defaults durchklicken** (nichts aendern, einfach Next-Next-Next-Finish).

**2. Node.js installieren**

Browser: https://nodejs.org
→ Grosser gruener Button **"LTS"** → Installer runterladen → doppelklicken → durchklicken.

**3. GitHub CLI installieren**

Browser: https://cli.github.com
→ "Download for Windows" → `.msi`-Installer doppelklicken → durchklicken.

**4. Terminal neu starten**

Offenes Terminal schliessen und neu oeffnen (wichtig, sonst kennt es die neuen Tools nicht).

---

### Installation pruefen (Mac + Windows)

Im Terminal tippen:
```bash
git --version
node --version
gh --version
```

Bei jedem sollte eine Versionsnummer kommen (z.B. `git version 2.43.0`). Wenn "command not found" kommt → Terminal schliessen und neu oeffnen, dann nochmal probieren.

---

## Teil 2: Bei GitHub einloggen

Nur einmal noetig. Danach kann dein Laptop immer clonen und pushen — auch bei privaten Repos.

Tippe:
```bash
gh auth login
```

Es stellt dir vier Fragen. Mit **Pfeiltasten** navigieren, **Enter** zum Auswaehlen:

1. **"Where do you use GitHub?"** → `GitHub.com` waehlen
2. **"Preferred protocol?"** → `HTTPS` waehlen
3. **"Authenticate Git with your GitHub credentials?"** → `Y` (Yes) → Enter
4. **"How would you like to authenticate?"** → `Login with a web browser` waehlen

Jetzt zeigt das Terminal einen **8-stelligen Code** wie `A1B2-C3D4`.
Code kopieren → Enter druecken → Browser oeffnet sich.

Im Browser:
- Bei GitHub einloggen
- Den 8-stelligen Code eintippen
- "Authorize github" klicken

Zurueck ins Terminal. Da sollte stehen:
```
✓ Authentication complete.
✓ Logged in as <dein-github-username>
```

Fertig. Diesen Schritt musst du nie wieder machen.

---

## Teil 3: Das Projekt auf deinen Laptop holen

Wir legen das Projekt auf den Desktop.

**Auf dem Mac:**
```bash
cd ~/Desktop
git clone https://github.com/salt-magic/salt.magic.1.git
```

**Auf Windows:**
```bash
cd C:\Users\%USERNAME%\Desktop
git clone https://github.com/salt-magic/salt.magic.1.git
```

Was gerade passiert ist:
- `git clone` laedt eine Kopie des GitHub-Projekts auf deinen Laptop
- Auf dem Desktop gibt es jetzt einen Ordner `salt.magic.1` mit dem kompletten Projekt

Das Terminal kannst du jetzt schliessen.

---

## Teil 4: Projekt in der Claude Desktop App oeffnen

Ab hier keinerlei Terminal mehr.

1. **Claude Desktop App oeffnen**
2. **Neuen Chat starten**
3. Klick auf **"+ Add Project"** (oder wo auch immer in deiner Version der Button zum Ordner-Auswaehlen ist)
4. Den Ordner **`salt.magic.1`** auf deinem Desktop auswaehlen → oeffnen
5. Claude darf Lese- und Schreibzugriff haben → bestaetigen

Jetzt kennt Claude alle Dateien im Projekt.

**Erste Aktion IMMER:**
```
/prime
```

Claude liest dann automatisch die ganze Projekt-Historie (`CLAUDE.md`, `context/`, alle V1-V29 Sessions). Nach 30 Sekunden kommt eine Zusammenfassung: wer du bist, was das Projekt ist, was der aktuelle Stand ist, was offen ist.

Ab hier einfach auf Deutsch schreiben. Beispiele:
- "Aendere die Hero-Headline auf 'Mineralize Your Water Daily'"
- "Zeig mir den aktuellen Text in der FAQ-Section"
- "Fixe den Typo in der Privacy Policy, Section 3"

Claude zeigt dir den Diff (was sich aendert) und fragt, ob er das speichern soll.

---

## Teil 5: Die Website lokal im Browser sehen

Waehrend du mit Claude arbeitest, willst du die Seite live sehen.

Sag Claude einfach:
> Starte den Dev-Server

Er macht im Hintergrund `cd site && npm install && npm run dev`. Nach 30-60 Sekunden gibt er dir eine URL: **http://localhost:3000**.

Die URL im Browser oeffnen → du siehst die Website live. Wenn Claude etwas aendert, aktualisiert sich der Browser **automatisch**.

**Beim allerersten Mal** dauert `npm install` 2-3 Minuten (laedt alle Libraries). Danach geht der Start in Sekunden.

Wenn du fertig bist: "Stoppe den Dev-Server." — Claude macht's.

---

## Teil 6: Deine erste Aenderung committen und hochladen

Angenommen du hast eine Aenderung gemacht und die passt. Sag Claude:

> Committe das mit einer sinnvollen Message und pushe es

Claude macht:
1. `git add .` (Aenderungen vormerken)
2. `git commit -m "..."` (Version speichern mit Beschreibung)
3. `git push origin main` (auf GitHub hochladen)

Nach 30 Sekunden baut **Vercel** automatisch die neue Version und deployed sie live auf https://salt-magic.com.

---

## Die 5 wichtigsten Claude-Commands

Im Chat tippen:

| Command | Was es macht |
| ------- | ------------ |
| `/prime` | Session-Start — Projektkontext laden |
| `/create-plan [idee]` | Plan fuer groessere Aenderungen erstellen |
| `/implement [plan]` | Einen erstellten Plan ausfuehren |
| `/shutdown` | Session sauber beenden, `CLAUDE.md` updaten, committen |
| `/clear` | Chat-Historie loeschen (bei neuer Aufgabe) |

---

## Was tun wenn...

**"Kerstin hat inzwischen Aenderungen gemacht"**
→ Bevor du anfaengst, sag Claude: "Pull die neuesten Aenderungen von GitHub."

**"Claude hat Mist gebaut, ich will zurueck"**
→ Sag: "Mach die letzten Aenderungen rueckgaengig." Solange noch nicht gepusht ist, kann er das.

**"Der Dev-Server spuckt Fehler aus"**
→ Die Fehlermeldung einfach in den Chat pasten. Claude liest und fixt's.

**"Ich weiss nicht mehr wo ich stehe"**
→ Sag: "Zeig mir den aktuellen Git-Status und was offen ist."

**"Ich habe ausversehen ein falsches Projekt geoeffnet"**
→ In der Desktop App einfach ein neues Projekt oeffnen oder zwischen Projekten wechseln.

---

## Die goldene Regel

**Jeden Session-Start:**
1. Desktop App oeffnen
2. Projekt `salt.magic.1` waehlen
3. Sag: "Pull die neuesten Aenderungen."
4. Dann: `/prime`

**Jedes Session-Ende:**
1. Sag: "Committe alles und pushe."
2. Oder sauberer: `/shutdown` — dann macht Claude alles + updated `CLAUDE.md`

---

## Checkliste fuer Freitag

Abhaken was geklappt hat:

- [ ] Git installiert, `git --version` funktioniert
- [ ] Node.js installiert, `node --version` funktioniert
- [ ] GitHub CLI installiert, `gh --version` funktioniert
- [ ] `gh auth login` erfolgreich (Terminal zeigt "Logged in as ...")
- [ ] Projekt geklont, `salt.magic.1`-Ordner liegt auf Desktop
- [ ] Claude Desktop App kennt das Projekt ("Add Project" gemacht)
- [ ] `/prime` funktioniert, Zusammenfassung kommt
- [ ] "Starte den Dev-Server" funktioniert, http://localhost:3000 zeigt Website
- [ ] Eine Test-Aenderung gemacht, Diff angesehen, gespeichert
- [ ] Claude hat committet und gepusht
- [ ] Vercel hat die Aenderung live deployed auf salt-magic.com

---

_Bei Problemen: Screenshot vom Chat oder Browser + Message an Kerstin._

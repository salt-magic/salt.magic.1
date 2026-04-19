# Salt.Magic Website selbst updaten mit Claude Code

## Was du brauchst
- Deinen Claude Pro Account (hast du schon)
- Einen Computer (Windows oder Mac)
- 15 Minuten fuer die Einrichtung (einmalig)

---

## Einmalige Einrichtung

### 1. Git installieren

**Windows:**
1. Gehe zu git-scm.com/download/win
2. Lade den Installer herunter
3. Installieren — alle Standardeinstellungen beibehalten, einfach immer "Next" klicken

**Mac:**
1. Oeffne das Terminal (Spotlight → "Terminal")
2. Tippe: `git --version`
3. Falls nicht installiert: es kommt automatisch ein Popup zur Installation

### 2. Claude Code Desktop App installieren

1. Gehe zu claude.ai/download
2. Lade die Desktop App herunter (Windows oder Mac)
3. Installieren und mit deinem Claude Pro Account einloggen

### 3. Dein Website-Repo herunterladen

1. Oeffne Claude Code Desktop
2. Sag Claude:

"Klone bitte dieses Repo auf meinen Desktop: https://github.com/___GITHUB-LINK___"

3. Claude erledigt den Rest (klonen, Zugangsdaten einrichten)
4. Falls nach GitHub-Login gefragt: Benutzername + Passwort eingeben

> **Hinweis:** Den genauen Link bekommst du von Kersti — sie hat das Repo fuer dich erstellt.

---

## So updatest du deine Website (ab jetzt immer)

### Schritt 1: Claude Code Desktop oeffnen

Oeffne die Claude Code Desktop App.

### Schritt 2: Projekt-Ordner oeffnen

Klick auf "Open Folder" oder ziehe den `salt-magic-website` Ordner in die App.

### Schritt 3: Sag Claude was du aendern willst

Beispiele was du einfach eintippen kannst:

- "Aendere den Preis vom Travel Sachet auf 599 Baht"
- "Ersetze den Hero-Text mit: Mineralize Your Water, Everywhere You Go"
- "Fuege eine neue FAQ hinzu: Frage ist 'Kann ich Salt.Magic im Smoothie verwenden?' und die Antwort ist 'Ja, ...'"
- "Aendere die Telefonnummer im Footer zu +66 123 456 789"
- "Tausche das Hero-Bild aus" (neues Bild in den Chat ziehen)
- "Zeig mir was auf der Products-Section steht"

Claude versteht natuerliche Sprache. Du musst keinen Code kennen.

### Schritt 4: Aenderungen live stellen

Wenn du zufrieden bist, sag einfach:

"Push das bitte auf GitHub"

Claude fuehrt den Push aus. Vercel erkennt die Aenderung automatisch und deine Website ist in 1-2 Minuten aktualisiert.

---

## Tipps

- **Teste vorher lokal:** Sag Claude "Starte den Dev Server" — dann kannst du die Aenderungen unter localhost:3000 im Browser pruefen bevor du sie live stellst
- **Mehrere Aenderungen auf einmal:** Du kannst beliebig viele Sachen aendern lassen und am Ende einmal "Push das" sagen
- **Rueckgaengig machen:** Falls etwas schiefgeht, sag Claude "Mach die letzte Aenderung rueckgaengig"
- **Bilder tauschen:** Ziehe das neue Bild in den Chat und sag "Ersetze das Hero-Bild mit diesem Foto"

---

## Zusammenfassung

| Was | Wie |
|---|---|
| Claude Code oeffnen | App starten, Ordner oeffnen |
| Aenderung beschreiben | Normal auf Deutsch oder Englisch eintippen |
| Live stellen | "Push das bitte" |
| Wartezeit | 1-2 Minuten bis die Seite aktualisiert ist |

Das war's. Kein Code lernen, kein IDE, kein technisches Wissen noetig.

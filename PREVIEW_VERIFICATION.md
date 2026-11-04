# Prüfstand – 04.11.2026

## Herkunft und Paketgrenze

Arbeitsbereich war zunächst leer. Originalprojekt im benachbarten Ordner „Zwischen den Zeilen“ gefunden und gelesen, einschließlich AGENTS.md, Produkt-/UX-/Design-/Importregeln, Datenvertrag, Free-/Basic-Verträgen, Testplan und Manifest. Originalprojekt unverändert gelassen. Der bisherige React-Prototyp mit Legacy-/Mockadaptern ist nicht Teil dieses isolierten statischen App-Einstiegs. Öffentliche Fach-/Projektdokumente und das bestehende synthetische V1-Testpaket wurden übernommen.

Die drei TXT-Dateien sind unveränderte Originalfixtures, nicht neu generiert: 1418 / 1236 / 1797 Beiträge. SHA-256-Vergleich der separat gelieferten Dateien mit den Repository-Fixtures durchgeführt. Das bestehende SHA-Inventar des Testpakets besteht.

## Bestanden

- Node.js 24: fünf neue Testgruppen. Darin für A/B/C: Mengen, Wörter, alle Stundenbuckets, Prime-Gewinner einschließlich Gleichstände, Wochentage, Streak, Peak, Emojifamilien, längste Pause, Hotcold-Basis und sämtliche Phasen gegen Original-Expected-JSON. Wiederimport und stabile IDs; Ausschlussmasken verändern nur fachlich betroffene Mengen.
- Parser-/Update-Randfälle: leere/ungültige Quelle, ungültiger Kalender, mehrzeilige Beiträge, identische getrennte Sendungen, Konfliktblockierung, Replace, Unicode-Wörter und Emoji, leeres Analysefenster.
- Bestehende 24 Tests unter `tests/v1/validate.test.mjs`: bestanden. Keine Änderung der Originalfixtures oder ihres Oracles.
- DOM-Integration mit vorhandener jsdom-Testumgebung des Originalprojekts: leerer Erstzustand ohne Speicherinhalt, TXT-Paste, Vorschau, erforderliche Zustimmung, Commit, persistierter Bestand, vollständige personengefilterte Belege, Hotcold-Korrektur, Undo, identisches Add-Preview, Abbrechen und Löschen. Diese zusätzliche Testumgebung ist keine Laufzeitabhängigkeit des Pakets.
- Syntaxprüfung der beiden Browsermodule.
- Kein Browserimport von Fixtures/Oracle/Legacy-/Mockadaptern, kein Fetch und keine KI-Verbindung. CSP blockiert Verbindungen. GitHub-Pages-Upload enthält nur index.html, style.css, engine.js, app.js.
- Paket aus ausgewählten Dokumenten, selbst geschriebenem App-Code und manifestierten synthetischen Testdateien aufgebaut. Keine .git-Historie, .env-Dateien, privaten Chats, Backups, Datenbanken oder node_modules übernommen. Suche nach gängigen API-/GitHub-/AWS-Keymustern und privaten Schlüsselblöcken ohne Treffer. Kein formaler vollständiger Secret-Audit.

## Nicht als bestanden behauptet

Keine echte Browser-Layout-/Mobilprüfung, kein vollständiger Browser-E2E-Lauf, keine produktive Browser-/Accessibility-/Performance-Abnahme. Responsive CSS vorhanden, tatsächlicher Test bei 390–430 px steht noch aus. Kein GitHub-Remote angelegt und kein Deployment ausgeführt. Keine produktive AI-/Privacy-/Quality-Abnahme. Kein vollständiger Abschluss aller Anforderungen des V1-Testplans. Nicht implementierte Funktionen und Importgrenzen sind in README und UI ausgewiesen.

GitHub-Veröffentlichungsweg anhand der offiziellen Dokumentation geprüft: [Publishing source konfigurieren](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Der mitgelieferte Workflow muss im tatsächlichen Repository erstmals ausgeführt werden.

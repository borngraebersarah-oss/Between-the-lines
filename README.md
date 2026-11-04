# Zwischen den Zeilen – statische V1-Vorabversion

Die App startet mit **leerer Chatbibliothek**. Es werden keine Demo-Chats, Testfixtures oder Referenzwerte geladen. Erst nach einer bestätigten Importvorschau werden Nachrichten in diesem Browser gespeichert. Ein erneuter Besuch zeigt die selbst importierten Chats. „Chat löschen“ entfernt deren lokalen Bestand.

## Lokal öffnen

1. Node.js 24 oder neuer installieren.
2. Dieses Repository-ZIP vollständig entpacken.
3. Im Ordner mit `package.json` ein Terminal öffnen.
4. `npm start` ausführen. Eine Installation von Paketen ist nicht erforderlich.
5. Im Browser **http://localhost:4173** öffnen.
6. „Chat importieren“ wählen, eine der drei separat gelieferten TXT-Dateien auswählen, „Import prüfen“ anklicken, Angaben prüfen und bestätigen.

Nicht per Doppelklick auf `index.html` öffnen: Browsermodule benötigen einen Webserver. Zum Beenden im Terminal Strg+C drücken.

## Zu GitHub hochladen und veröffentlichen

1. Auf GitHub ein neues, leeres Repository erstellen; Standardbranch **main** verwenden.
2. ZIP entpacken. **Den Inhalt** des entpackten Ordners hochladen: `index.html`, `app.js`, `engine.js`, `style.css`, `package.json`, `server.mjs`, Dokumente, `tests/` sowie den versteckten Ordner **`.github/`** und `.gitignore`. Keinen zusätzlichen äußeren Ordner hochladen. Bei Browserupload die Ordner mitziehen; danach kontrollieren, dass `.github/workflows/pages.yml` vorhanden ist. Alternativ alle entpackten Dateien über GitHub Desktop committen und pushen.
3. Repository → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Unter **Actions → Static preview and tests → Run workflow → main → Run workflow** starten. Bei weiteren Commits auf main läuft die Veröffentlichung automatisch.
5. Nach erfolgreichem Lauf steht die Website-Adresse unter Settings → Pages bzw. im Deployment des Workflows. Typisch: `https://DEIN-NAME.github.io/REPOSITORY-NAME/`.
6. Website öffnen und Testdateien selbst importieren. Das Deployment enthält ausschließlich vier App-Dateien; keine Fixtures. Auch im Repository vorhandene synthetische Tests werden niemals automatisch geladen.

Ohne GitHub Actions können die vier Dateien `index.html`, `app.js`, `engine.js`, `style.css` gemeinsam auf beliebiges statisches Hosting geladen werden. Relative Pfade unterstützen Unterverzeichnisse. Kein Vite-Build, Backend, Konto oder API-Key erforderlich.

## Was tatsächlich funktioniert

- UTF-8-WhatsApp-TXT und eingefügter Text im Profil `TT.MM.JJJJ, HH:mm - Name: Text`; zwei eindeutig benannte Personen, mehrzeilige Inhalte, Datumsvalidierung, Importpreview, Abbrechen und Bestätigen.
- Bibliothek, Browserpersistenz, Zeitraum Gesamt/7/30 Tage/Custom, TXT-Download und bestätigtes Löschen.
- Add/Replace mit stabilen SHA-256-Nachrichtenidentitäten, wiederholte identische Vollimporte ohne Duplikate; erkennbare Bearbeitungs-/Identitätskonflikte werden blockiert. Unterschiedliche gleiche Sendungen innerhalb desselben Imports bleiben getrennt.
- Echt berechnet: Prime Time, Wochentage, Streak, Peak Day, Texting Champion, Emoji DNA, Hot & Cold und Longest Silence. Die Berechnungen wurden an allen drei Original-TXT-Fixtures gegen deren bestehende Sollwerte geprüft.
- Vollständige Beleglisten mit 50 Nachrichten pro Seite, Suche und Sprung zur Originalstelle. Hotcold-Tagesausschlüsse und Silence-Intervallausschlüsse werden gespeichert und direkt neu berechnet; letzte Korrektur innerhalb der Sitzung rückgängig machbar.

## Bewusste Grenzen

Dies ist **keine vollständige Abnahme aller V1-Verträge**. Maßgeblich bleiben die mitgelieferten Fachverträge und der Testplan. Der historische UI-Prototyp wurde nicht als Produktionsengine übernommen; dies ist ein isolierter, kleiner statischer Einstieg.

ZIP-Import, Enhanced-JSON, freie Transkripte ohne unterstützte Header, Gruppen/Dyadenwahl, Aliase, Edit-Auflösung, genaue Teilüberlappungen bei identischen Nachrichten derselben Minute, Datenkorrektur von Sender/Text/Zeit und vollständiges Korrekturjournal sind noch nicht implementiert. Bei partiellen Updates mit mehrfach identischem Sender/Zeit/Text ist die Identität ohne native Quell-ID nicht sicher auflösbar: solche Updates nicht verwenden; vollständigen Export nutzen. Replace braucht ebenfalls beide Teilnehmer und darf nicht leer sein. Keine automatische Alias- oder Edit-Zuordnung.

Vor dem Import müssen Quellenkalender und vollständige Tagesabdeckung bestätigt werden. Die synthetischen Fixtures haben laut Manifest einen festen Zeitbezug +01:00. Reale Exporte mit unbekannter Zone, Zeitumstellung oder Lücken sind nicht abgenommen. Wort-/Emoji-Auswertung kann im Standardtext nicht unsichtbare Zitate, Reactions oder Weiterleitungen rekonstruieren. Keine Sprachklassifikation, kein Stopwortranking.

Move, Response, First & Last, Long Story Short, Greatest Hits, Pulse, Deep Dive und alle sieben semantischen Funktionen sowie Begleiter sind **unavailable**. Keine Mockresultate, kein Produktions-KI-Aufruf, keine erfundenen Events. Keine Login-, Cloud-, Sync- oder produktive Löschinfrastruktur. Browserdaten sind nicht verschlüsselt und können durch Löschen der Websitedaten verloren gehen. Die Chatdownloads enthalten den aktuellen Nachrichtenbestand, keine Korrekturen.

## Testdateien

Die separat gelieferten Dateien sind bytegleich mit `tests/v1/data/main/`:

| Datei | Fiktiver Kontext | Beiträge | Zeitraum |
|---|---|---:|---|
| chat_a_standard.txt | Langzeitbeziehung | 1418 | 01.01.–30.06.2026 |
| chat_b_standard.txt | Kennenlernphase | 1236 | 01.01.–30.06.2026 |
| chat_c_standard.txt | asymmetrischer langjähriger Kontakt | 1797 | 01.01.–30.06.2026 |

„Langjährig“ bezeichnet den erfundenen Beziehungskontext, nicht einen mehrjährigen Export. Seed und Originalgenerator sind unter `tests/v1/` erhalten. Keine Fixtures für Tests neu erfunden. Enhanced-Dateien sind ausschließlich Testprofile, keine unterstützten Produktimporte.

## Prüfen

`npm test` – Parser, Analysevergleich, Importidentität, Konflikte, Randfälle und leerer Start.

`npm run test:fixtures` – bestehende 24 Prüfungen des unveränderten synthetischen Testpakets. Diese Datentests ersetzen nicht die offenen Integrations-/Provider-Abnahmen.

Siehe `PREVIEW_VERIFICATION.md` für den tatsächlichen Prüfstand. Fachlicher Einstieg: `V1_FINAL_HANDOFF.md`, `V1_PRODUCT_DECISIONS.md`, `DATA_AND_COUNTING_RULES.md`, Analyseverträge, `V1_TEST_AND_ACCEPTANCE_PLAN.md`, `V1_SYNTHETIC_DATASET_MANIFEST.md`. Historische Statusdokumente beschreiben den ursprünglichen Prototyp; diese README beschreibt den gelieferten Vorabversions-Einstieg.

# Zwischen den Zeilen – App mit ursprünglicher Navigation

Dieses Paket ersetzt die vereinfachte Ergebnisliste. Es verwendet die neuere vorhandene App-Gestaltung mit sechs Oberkategorien, Funktionsnavigation, Dashboard, Home, Profil und beiden Appearance-Themes. Die ältere HTML-Datei v07 wurde nur als Orientierung gelesen.

**Alle Upload-Dateien liegen direkt nebeneinander. Keine Unterordner und kein `.github/workflows` erforderlich.**

## Bestehende GitHub-Seite aktualisieren

1. Dieses ZIP auf deinem Computer entpacken.
2. In deinem bestehenden GitHub-Repository auf **Code → Add file → Upload files** gehen.
3. **Alle Dateien aus dem entpackten Ordner** gemeinsam hochladen und über **Commit changes** speichern. Besonders `index.html`, `app.js` und `index.css` müssen direkt auf der obersten Repository-Ebene liegen. Nicht das ZIP oder den äußeren Ordner hochladen.
4. Falls du den bisherigen Workflow hochgeladen hast: **Actions → Static preview and tests → Menü mit drei Punkten → Disable workflow**. So veröffentlicht der alte Workflow nicht wieder die vereinfachte Version. Wenn dieser Workflow nicht angezeigt wird, entfällt dieser Schritt.
5. **Settings → Pages → Build and deployment → Source: Deploy from a branch** auswählen.
6. Darunter **Branch: main** und **Ordner: / (root)** auswählen und **Save** anklicken. Wenn dein Standardbranch anders heißt, diesen statt main verwenden.
7. Warten, bis GitHub Pages die neue Version veröffentlicht hat. Dann die Website öffnen und mit **Strg+F5** neu laden. Die Adresszeile bleibt normalerweise gleich.

Der bisherige `.github`-/`workflows`-Ordner wird für dieses Paket nicht gebraucht. Andere alte Projektdateien verhindern den Betrieb nicht; sie werden vom neuen Einstieg nicht geladen. Entscheidend ist, dass die drei neuen Website-Dateien gemeinsam ersetzt werden.

## Lokal ansehen

Node.js 24 oder neuer installieren. Im entpackten Ordner ein Terminal öffnen und `node server.mjs` ausführen. Danach im Browser **http://127.0.0.1:4173** öffnen. Beenden mit Strg+C. Keine Paketinstallation und kein Build erforderlich. `index.html` nicht per Doppelklick öffnen.

## Testen

1. Beim ersten Start ist die Bibliothek leer. Schon früher selbst importierte Chats aus der vereinfachten Version werden auf derselben Website weiterhin aus deinem Browserspeicher angezeigt.
2. **Neuen Chat analysieren → TXT auswählen → Import prüfen → Angaben bestätigen → Bestätigen und importieren**.
3. Das Dashboard öffnen, danach unten **Analyse** wählen.
4. Zwischen **Your Chat Rhythm**, **Who Makes the Move?**, **How You Text**, **Your Language**, **Your Chat Universe** und **Between the Lines** wechseln. Die jeweilige Funktion öffnet ihre eigene Unterseite.
5. Unter **Profil** zwischen Editorial Warm und Night Mode Chic wechseln.

Die drei separat gelieferten Original-TXT-Testdateien bleiben unverändert nutzbar. Sie sind **nicht** in diesem Website-Paket enthalten und werden niemals automatisch geladen.

## Verfügbare Funktionen

Echte berechnete Ergebnisse: Prime Time, Lieblingstag, Chat Streak, Peak Day, Texting Champion, Emoji DNA, Hot & Cold Phases, Longest Silence. Dazu Importvorschau, lokales Speichern, Zeitraumfilter (Gesamt/7/30 Tage/3/12 Monate/Custom), Reader mit Suche/Person/Datum, vollständige Beleglisten, TXT-Download, konservatives Add/Replace, Dashboard-Kartenauswahl und -sortierung sowie gespeicherter Chatkontext. Hotcold-Tagesausschlüsse und Silence-Intervallausschlüsse führen zur Neuberechnung; die letzte Korrektur ist auch nach Reload rückgängig machbar.

Alle Bereiche sind zur Ansicht freigeschaltet; es gibt keine Käufe. Nicht umgesetzte Funktionen stehen an ihrem ursprünglichen Ort und erklären ihren Status. Move, Response, First & Last, Long Story Short, Greatest Hits, Pulse und Deep Dive sind noch nicht implementiert. Die sieben semantischen Funktionen, automatische Ereignisse und Begleiter zeigen „KI noch nicht verbunden“. Spätere Funktionen sind entsprechend gekennzeichnet. Keine simulierten Ergebnisse.

## Grenzen dieser Vorabversion

Kein vollständiger V1-Release. ZIP-/Enhanced-/Gruppenimport, Alias-/Edit-Konfliktauflösung, Datenkorrektur von Sprecher/Text/Zeit, Schlafprofile, manuelle Ereignisverwaltung, Cloudkonto und Mehrgeräte-Sync sind noch nicht angeschlossen. Beziehungs-/Kontextangaben werden gespeichert, ohne KI daraus Interpretationen abzuleiten.

Unterstütztes TXT-Profil: UTF-8, `TT.MM.JJJJ, HH:mm - Name: Text`, genau zwei Personen, gültiger lokaler Kalender. Vollständige Tagesabdeckung und fester Quellenzeitbezug müssen bestätigt werden; unbekannte Zonen, Zeitumstellungen und Importlücken sind nicht abgenommen. Das Manifest der synthetischen Daten verwendet +01:00. Unsichtbare Quotes/Forwards/Replies/Reactions können nicht rekonstruiert werden. Konservative Updates blockieren erkannte Bearbeitungs-/Identitätskonflikte. Partielle Updates mit mehrfach identischen Nachrichten derselben Person und Minute sind ohne Quell-IDs nicht verlässlich auflösbar; vollständigen Export verwenden.

Chats bleiben ausschließlich im lokalen Browserspeicher. Kein Upload an eine KI, keine Secrets und keine produktive KI-Integration. Browserdaten sind nicht verschlüsselt; gelöschte Websitedaten sind nicht wiederherstellbar. Der TXT-Download enthält Nachrichten, keine Kontext-/Korrektursicherung.

Prüfstand und Einschränkungen: `PRUEFBERICHT.txt`. Hinweise zum GitHub-Veröffentlichungsweg: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

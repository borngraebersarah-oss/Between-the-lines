# Abschluss – gezielter UX-/Darstellungskorrekturlauf 2

Stand: 04.10.2026. Ausschließlich das freigegebene Korrekturpaket umgesetzt. Keine neue Produktphase begonnen. Die nachgereichte Dashboard-Eignungsanforderung ist enthalten. Analyseformeln, numerische Referenzen, Feature-IDs, MessageIds, Paletten und Kategorie-Artworks bleiben erhalten.

## Dashboard und Snapshot-Vertrag

Kontext und Analysezeitraum stehen gleich breit und gleich hoch nebeneinander. Beide öffnen den zentralen nativen Dialoghost; Kontext nutzt weiterhin das vorhandene Formular. Das Zeitraum-Control zeigt die aktuelle Auswahl, bei Custom zusätzlich Von/Bis. Der Dialog bietet Gesamter Zeitraum, 7 Tage, 30 Tage, 3 Monate, 12 Monate und Benutzerdefiniert. Auswahl beziehungsweise Anwenden schließt mit Rückfokus und bestehender Erfolgsmeldung.

`DashboardCard` ist jetzt eine diskriminierte TypeScript-Union:

```ts
type DashboardCard =
  | { featureId: FeatureId; dashboardEligible: true;
      primaryValue: string; unit: string; shortLabel: string }
  | { featureId: FeatureId; dashboardEligible: false; reason: string };
```

Die Referenzprojektion liefert explizite Kurzwerte. Gemeinsame Eignungsprüfung für Dashboard und Konfiguration: bekannte, verfügbare Feature-ID, `dashboardEligible`, nichtleerer Primärwert und Kurztext. Die UI leitet keine Kennzahlen aus beliebigen Analyseobjekten ab. Keine neuen Zahlen, Berechnungen oder Fallback-Snapshots.

Aktuell auswählbar sind genau die drei bereits beobachteten Dashboard-Projektionen:

| Feature-ID | Funktion | Primärwert | Kurztext |
|---|---|---|---|
| `prime` | Prime Time | 23–02 Uhr | 38,9 % aller Nachrichten |
| `streak` | Chat Streak | ≥ 70 Tage | 02. Juli–09. September |
| `peak` | Peak Day | 12. August | 652 Nachrichten |

Alle 33 Feature-IDs sind im Snapshot-Katalog erfasst. Bewusst nicht auswählbar:

| IDs | Grund |
|---|---|
| `pulse`, `deepdive`, `lifeevents`, `eras`, `topics`, `topicstarts`, `rituals` | Mehrdimensionale Verläufe, Timeline oder notwendiger semantischer Kontext; keine definierte eindeutige Kurzprojektion. |
| `weekday`, `hotcold`, `silence`, `move`, `response`, `firstlast`, `texting`, `longstory`, `emoji`, `words`, `humor`, `names`, `questions`, `social`, `future`, `futuretrend` | Teilweise grundsätzlich kompakt darstellbar; der aktuelle Dashboard-Adapter enthält dafür jedoch keine explizit definierte und widerspruchsfreie Snapshot-Projektion. Vorhandene Analyseansichten bleiben zugänglich. Es wurde keine Kennzahl neu ausgewählt, zusammengesetzt oder fachlich gekürzt. |
| `qdyn`, `flow`, `closeness`, `mineours`, `opening`, `report`, `changed` | Weiterhin unavailable; kein Dashboard-Ergebnis vorhanden. |

Alte gespeicherte ungeeignete Karten werden beim Anzeigen herausgefiltert. Die Reihenfolge der übrigen Karten bleibt erhalten. Lesen verändert den Speicher nicht; erst eine ausdrückliche Konfigurationsänderung speichert die bereinigte Auswahl. Ein-/Ausblenden, Sortieren, absichtlich leere Auswahl, Reload und Chat-Isolation bleiben erhalten. Keine Texte „Kein gespeicherter Kartenwert“.

## Zeiträume und Persistenz

`lastMessageDate` ermittelt je Chat das Maximum gültiger Nachrichtenzeitstempel; falsche Chat-ID, ungültige Kalendertage, Uhrzeiten und nicht parsebare Werte zählen nicht. Explizite Zeitzonen werden als Zeitpunkte verglichen. Für Kalendergrenzen bleibt das Datum der jeweiligen gespeicherten Nachricht maßgeblich; zeitzonenlose Daten werden deterministisch als Chat-Wanduhrzeit behandelt. Keine Abhängigkeit von heute oder `Date.now()`.

- 7/30 Tage zählen einschließlich des Chatendes: Anfang minus 6/29 Kalendertage.
- 3/12 Monate behalten die bestehende Kalendermonatslogik inklusive Begrenzung auf den letzten gültigen Monatstag.
- Custom wird unverändert verwendet. Ohne gültige Nachricht wird kein relatives Datum erfunden.
- Ein späteres Nachrichtenmaximum verschiebt einen relativen Filter bei der nächsten Verwendung. Import bleibt simuliert; der Updatefall wird mit gezielt ergänzten Testnachrichten geprüft.
- Die öffentlichen 224 Referenznachrichten enden am **23.08.2026**. Das spätere Enddatum mancher gespeicherter Analysewerte wird ausdrücklich nicht als Nachrichtenmaximum verwendet oder korrigiert.

Storage-Keys und Versionen bleiben unverändert:

| Schlüssel | Behandlung |
|---|---|
| `zdz:chat-period:v1:<encodeURIComponent(chatId)>` | Preset und konkrete Grenzen; relative Grenzen beim Lesen am Nachrichtenmaximum neu verankert, ohne Leseschreibzugriff. Eine ausdrückliche Auswahl speichert aktuelle Grenzen. Custom exakt. |
| `zdz:chat-interactions:v2:<encodeURIComponent(chatId)>` | Vorhandene Dashboard-Auswahl/-Reihenfolge und andere Interaktionen pro Chat. Keine neue Schema-Migration. |
| `zdz:preferences:theme:v1` | Unveränderte explizite Auswahl zwischen den zwei bestehenden Themes. |
| Legacy-Originalschlüssel, v1-Interaktionen, Demo-Bibliothek | Keine neue automatische Übernahme, Löschung oder Umdeutung. |

Die zwei bestehenden relativen Zeitraumaufrufe im Mock-Begleiter bekommen ebenfalls explizit das Chatende übergeben, damit keine widersprüchliche zweite Zeitraumdefinition entsteht. Bestätigungs-, Aktions-, Event- und Importlogik wurden nicht verändert.

## Tarife, Einheiten und Chartbedienung

FREE/BASIC/PREMIUM erscheinen als kleine sekundäre Outline-Badges mit semantischen Tokens. Das Schloss bleibt zusätzlich erhalten. Tarifpreise und Zugangsregeln sind unverändert.

`planFeatureCounts` zählt aus Registry und bestehender Access-Hierarchie; unavailable wird ausgeschlossen:

| Tarif | Verfügbare Analysefunktionen | Zusätzlicher Umfang |
|---|---:|---|
| Free | 6 | 6 Kernfunktionen |
| Basic | 17 | +11 gegenüber Free; Free enthalten |
| Premium | 26 | +9 gegenüber Basic; Basic enthalten; dialogischer Begleiter separat |

Die Werte sind berechnet, nicht als Anzeigezahlen hart codiert. Sie gelten in Pro und Paywall.

Prozentwerte tragen unmittelbar `%`, auch an SVG-Balkenwerten und Prozentachsen. Longest Silence zeigt weiterhin ganze gerundete Zahlen: 87 %, 11 %, 2 %, 0 %, 0 %. Rohwerte, Skalierung und bestehende Mengeneinheiten bleiben erhalten.

`useChartInteraction` ist die gemeinsame Steuerung von `SeriesChart` und `ShareBar`: Maus-Hover zeigt temporär Werte; ein reiner Mausklick setzt keinen Pointer-Fokus. `:focus-visible` erhält einen klaren Tastaturindikator. Pfeiltasten und Escape bleiben verfügbar. Touch-Tap öffnet, zweiter Tap auf denselben Punkt oder Pointer außerhalb schließt. Fachliche Klickaktionen, etwa Wortbelege, behalten ihre Aktion und den nötigen Rückfokus. Keine zweite mobile Chartimplementierung.

## What We Talk About

Alle sechs Themen sind anklickbar. Der Dialog zeigt das gewählte Thema und vorhandene Referenzbelege mit Absender, Datum/Zeit, Text und gespeicherter Klassifikations-/Confidence-Information. MessageLinks verwenden ausschließlich stabile vorhandene MessageIds. Reader-Rückkehr erhält Dialog, gewähltes Thema, Fokus und Scrollposition.

**Offene Datenlücke:** Der aktuelle öffentliche Bestand enthält einen allgemeinen Topics-Beleg mit Klassifikation `Beispielbeleg` und ohne Confidence. Er enthält keine eindeutige Zuordnung zu einem der sechs Themen. Deshalb wird für das gewählte Thema `unresolved` ausgewiesen; der allgemeine Beleg erscheint separat mit dem ausdrücklichen Hinweis, dass er diesem Thema nicht zugeordnet ist. Keine Zuordnung aus Textanfang oder Inhalt geraten. Seine Originalnachricht ist `demo-pair:message:question`. Die Themenanteile bleiben unverändert. Tatsächliche themenspezifische Trefferlisten benötigen später explizit zugeordnete Referenzdaten; dieser Teil kann aus dem jetzigen Bestand nicht fachlich vervollständigt werden.

## Dateien

Neu:

- `src/data/fixtures/dashboardSnapshots.ts` – explizite Snapshot-Projektionen und Eignung.
- `src/analysis/useChartInteraction.ts` – gemeinsame Interaktionssteuerung.
- `src/interactions/TopicHits.tsx` – Themenbelegdialog samt transparenter Zuordnungslücke.
- `tests/integration/designCorrections2.test.tsx` – 18 neue Prüfungen.
- `tests/browser/design-corrections-2.cua.js` – wiederholbarer Produktionsbrowserablauf.
- `tests/baselines/DESIGN_CORRECTIONS_2_BROWSER_BASELINE.md` – gemessene Browserergebnisse.
- `MIGRATION_STATUS_DESIGN_CORRECTIONS_2.md` – dieser Abschlussbericht.

Geändert:

- `src/domain/period.ts`, `src/domain/interactions.ts` – Zeitraumdefinition und zwei zusätzliche UI-Dialogziele.
- `src/app/InteractionsContext.tsx`, `src/app/AppShell.tsx` – chatbezogene Zeitraumauflösung und Repository-Anbindung des OverlayHosts.
- `src/components/PeriodControl.tsx`, `src/components/OverlayHost.tsx`, `src/components/PlanCards.tsx`.
- `src/config/plans.ts` – dynamische Funktionsanzahlen.
- `src/data/repositories/shellRepository.ts`, `src/data/fixtures/shellFixtures.ts` – Snapshot-Vertrag/-Bereitstellung.
- `src/screens/Dashboard.tsx`, `src/interactions/DashboardSettings.tsx` – gemeinsamer Eignungsfilter und Darstellung.
- `src/analysis/components.tsx`, `src/analysis/SeriesChart.tsx`, `src/analysis/universe.tsx` – Wertelisten, Charts und Themeneinstieg.
- `src/companion/mockCompanionService.ts` – bestehende Zeitraumaufrufe an expliziten Chatend-Parameter angepasst.
- `src/styles/app.css` – Controls, Mini-Badges, Themenlinks und Fokusdarstellung aus bestehenden Tokens.
- `tests/integration/navigation.test.tsx`, `tests/integration/step6.test.tsx`, `tests/integration/designCorrections.test.tsx` – neue Snapshot-/Dialog-/Prozentdarstellung berücksichtigen.
- `README.md`, `MIGRATION_NOTES.md`, `docs/FRONTEND_DESIGN_SYSTEM.md`, `docs/COMPANION_SERVICE.md` – aktuellen Vertrag und Grenzen dokumentiert.

Keine Änderungen an privatem Originalprototyp, numerischer Analyse-Referenzdatei, Feature-Registry, Message-Fixtures, Theme-Definitionen oder Kategorie-Artworks. Buildausgaben bleiben ignoriert. Keine Git-Veröffentlichung.

## Prüfungen

| Prüfung | Ergebnis |
|---|---|
| `pnpm run typecheck` | Erfolgreich, keine TypeScript-Fehler |
| `pnpm run build` | Erfolgreich, 1.976 Module; JS 422,04 kB / gzip 131,33 kB, CSS 50,24 kB / gzip 8,39 kB |
| `pnpm run test` | **235/235**, 11 Dateien, kompletter separater Lauf erfolgreich |
| `pnpm run test:legacy` | **57/57**, 4 Dateien gegen lokale private Referenz |
| `pnpm run check:privacy` | Erfolgreich: 95 Quelldateien, 3 Builddateien, 13.620 private Text-/Fragmentvarianten lokal geprüft; keine Inhalte ausgegeben |
| Produktionspreview | Erfolgreich unter 127.0.0.1:4174 |

Der erste parallele Gesamtlauf hatte einen Timeout im bestehenden Test, der alle 33 Navigationsziele innerhalb eines 5-Sekunden-Testlimits durchläuft (234/235 bestanden). Der anschließende vollständige öffentliche Lauf ohne parallelen Legacy-Lauf bestand mit 235/235 in 16,21 Sekunden. Testlimit und Assertions wurden dafür nicht abgeschwächt. Kein fachlicher Fehler blieb offen.

Die 18 neuen Tests sichern insbesondere: gültiges Nachrichtenmaximum und Fremdchat-Ausschluss, vier relative Presets, Unabhängigkeit von Systemzeit, neuere Nachrichten, Monatsenden, Custom und Chat-Isolation; Controls/Dialog/Reload; alte gespeicherte Zeitraumgrenzen und ungeeignete Dashboardkarten; alle 33 Snapshot-Einträge; dynamische Tarifzählung bei veränderter Testregistry; Themenreferenz, exakte Original-ID und Scroll-/Fokusrückkehr; Maus-, Tastatur- und Touch-Pointer-Verhalten für Balken/Linien/ShareBar; Prozentzeichen und unveränderten öffentlichen Nachrichtenbestand. Die übrigen Tests sichern vorhandene Zustands-, Import-, Begleiter-, Event-, Speicher- und Navigationsabläufe.

## Reale Browserprüfung

| Theme | Größen | Ergebnis je Größe |
|---|---|---|
| Editorial Warm | 390 × 844, 430 × 932, 1024 × 768 | 33 Ziele, 7 unavailable, 0 Seitenüberläufe, 0 Konsolenwarnungen/-fehler |
| Night Mode Chic | 390 × 844, 430 × 932, 1024 × 768 | 33 Ziele, 7 unavailable, 0 Seitenüberläufe, 0 Konsolenwarnungen/-fehler |

Geprüft: Controls mit gleicher Geometrie, bestehender Kontextdialog, alle relativen Zeiträume und Reload, Dashboard-Auswahl/Reihenfolge/Reload, Sperrbadges/Paywall/Tariftexte, Prozentwerte, Maus- und Tastaturfokus, Themenbeleg → exakte Nachricht → gleicher Dialog → Themenfokus. Zusätzlich Custom/Reload/Chat-Isolation und interner Dashboard-Dialogscroll bei gesperrtem Hintergrund. Screenshots visuell geprüft. Messdetails stehen in `tests/baselines/DESIGN_CORRECTIONS_2_BROWSER_BASELINE.md`.

**Testgrenze:** Die Browsersteuerung bietet keine echten Touch-Taps und keine separate Hover-Bewegung. Mobile Layouts und echte Klick-/Tastaturabläufe wurden im Browser geprüft, Touch- und Hover-Zweige in React-Integrationstests. Eine native Touch-Geräteprüfung bleibt offen; sie wird nicht als erledigt ausgegeben.

## Offene Punkte und Stopp

- Eindeutige themenspezifische öffentliche Belegzuordnungen fehlen weiterhin; allgemeine Referenz und Datenlücke sind sichtbar.
- Weitere Dashboardkarten benötigen bewusst definierte, kompakte und widerspruchsfreie Referenzprojektionen. Derzeit bleiben es drei.
- Echte Reanalyse nach Zeitraumwahl, Belegausschluss oder Kontextänderung fehlt weiterhin. Gespeicherte Kennzahlen bleiben Gesamtbestandsreferenzen.
- Import/Add/Replace bleiben simuliert; kein Parser, keine Deduplizierung, kein Nachrichtenupdate durch Import. Kein LLM, kein Backend, keine vollständigen Belegmengen oder neues Plantracking.
- Physische Touch-Prüfung bleibt offen. Der 33-Ziele-Test kann bei paralleler starker CPU-Auslastung sein bestehendes 5-Sekunden-Limit erreichen.

**Nach diesem Korrekturpaket gestoppt. Keine weitere Phase begonnen.**

## Exakter lokaler Start

Mit vorhandenem Node ≥24 und pnpm 11.19.0 in PowerShell:

```powershell
Set-Location -LiteralPath 'C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen'
pnpm run dev --host 127.0.0.1 --port 5174 --strictPort
```

In der vorliegenden Codex-Umgebung ohne globale pnpm-Installation funktioniert der verwendete vollständige Aufruf:

```powershell
Set-Location -LiteralPath 'C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen'
$env:PATH = 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
& 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs' run dev --host 127.0.0.1 --port 5174 --strictPort
```

Adresse: `http://127.0.0.1:5174/`. Produktionskontrolle nach Build: `pnpm run preview --host 127.0.0.1 --port 4174 --strictPort`. Der private Legacy-Referenzserver darf nicht gleichzeitig denselben Preview-Port belegen.

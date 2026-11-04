# Aktueller Produktstand — Zwischen den Zeilen

Stand der Bestandsaufnahme: **04.11.2026**. Geprüftes Arbeitsverzeichnis: `C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen`.

**Ergebnis:** Die React-Funktionsmigration bis Schritt 6, die Designmodernisierung sowie **DESIGN_CORRECTIONS_1 und DESIGN_CORRECTIONS_2 sind im aktuellen Code vorhanden**. Korrekturlauf 2 existiert nicht nur als Auftrag. Die App ist dennoch ein interaktiver Frontend-Prototyp: **33 registrierte Analyseziele, 26 Ergebnisrenderer, sieben ausdrücklich unavailable; keine produktive Analysepipeline, keine echte Reanalyse, kein echter Chatimport und keine LLM-Anbindung.**

„Implementiert“ muss hier unterschieden werden: Eine fertige Ergebnisansicht, ein persistenter Dialog und eine Berechnung aus importierten Nachrichten sind verschiedene Leistungen. Die 26 Renderer sind kein Nachweis für 26 funktionsfähige Analysealgorithmen.

## Prüfgrundlage und Grenzen

Gelesen und mit dem Code abgeglichen wurden `AGENTS.md`, `CODEX_START_HERE.md`, sämtliche 15 Dateien unter `docs/`, `README.md`, `MIGRATION_NOTES.md`, `KNOWN_LEGACY_DEFECTS.md`, alle acht vorhandenen `MIGRATION_STATUS_*.md`, der aktuelle Quellcode einschließlich Styles, beide Registries, Datenadapter, Fixtures, Speicher, Skripte sowie öffentliche Tests, Characterization-Tests und Browserprüfskripte/Baselines. Zusätzlich wurde der letzte angehängte Auftrag für Korrekturlauf 2 mit der Implementierung verglichen.

Dokumentierte Anforderungen werden nicht als bereits vorhandene Funktion gewertet. Frühere Statusberichte beschreiben ihren jeweiligen Abschlussstand; spätere Freigaben und der tatsächlich vorhandene Code erklären beispielsweise den Wechsel von drei zu zwei Themes. Offene Aufgaben stehen überwiegend in den Spezifikationen, PM-01 bis PM-12 und LD-01 bis LD-31; eine Suche nach `TODO`, `FIXME` und `HACK` in `src`, `scripts`, `tests` und `docs` ergab keine zusätzlichen markierten Aufgaben.

Typecheck, Build, öffentliche Tests, Legacy-Tests und Privacy Check wurden für diese Bestandsaufnahme ausgeführt. Es erfolgte **keine neue Browser-/Geräteabnahme**. Die vorhandenen Browserprotokolle vom 04.10.2026 sind historische Nachweise und werden unten entsprechend eingeordnet. Anwendungscode, Tests und Baselines wurden weder repariert noch aktualisiert. Einzige neue Projektunterlage ist dieser Bericht; der Build erzeugte seine üblichen ignorierten Ausgabedateien. Der abschließende SHA-256-Vergleich bestätigt: Alle 172 zuvor vorhandenen öffentlichen Projektdateien sind unverändert; einzig `CURRENT_PRODUCT_STATE.md` kam hinzu.

## 1. Aktueller technischer Stand

| Bereich | Tatsächlicher Stand |
|---|---|
| Anwendung | Browserseitige Vite-SPA, React/React DOM 19.3.0, TypeScript 7.0.2, Vite 8.3.2, Lucide React 1.51.0. Paketversionen und Lockfile sind festgelegt. |
| Laufzeit/Tests | Node-Anforderung mindestens 24; aktueller Prüflauf mit Node 24.22.1. `packageManager`: pnpm 11.19.0; Vitest 5.0.3 und jsdom 30.1.1. |
| Typprüfung | Strict TypeScript einschließlich `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, ungenutzter Variablen/Parameter und Prüfung der öffentlichen TypeScript-Tests. |
| Navigation | Eigener React-Context/Reducer mit Chatguard und Rückkehrzuständen; keine produktive URL-Routing-/Deep-Link-Lösung. Aktiver Chat, Planvorschau und Navigation sind sitzungsgebunden. |
| UI-Aufteilung | `src/app`, `screens`, `components`, `interactions`, `analysis`, `companion`, `ux`, `theme`, `styles`. Zentraler nativer Dialograhmen, OverlayHost, Toasts und Reader-Rückwege. |
| Datenzugriff | Austauschbare Shell-/Analyse-/Begleiter-Verträge. Die aktive Implementierung ist ein Fixture-/Referenzadapter; mehrere Interaktionen und Resolver greifen weiterhin direkt auf `interactionFixture(chatId)` zu. Ein neuer Backendadapter allein ersetzt daher noch nicht alle Fixture-Abhängigkeiten. |
| Datenhaltung | Versionierter lokaler Browserstorage für Interaktionen, Zeitraum, Theme und simulierte Bibliothek; keine Datenbank, Konten, Synchronisierung oder Serverpersistenz. |
| Backend/Produktion | Kein produktiver API-Server, Authentifizierungssystem, Analyseworker, LLM-Endpunkt, Zahlungsdienst oder Deployment-/CI-Nachweis im Projekt. Der separate Legacy-HTTP-Server ist ausschließlich ein lokales Referenzwerkzeug. |
| Datenschutzgrenze | Private Originaldatei und Extraktion sind ignoriert und vom Vite-Dateizugriff ausgeschlossen. `publicDir: false`. Der öffentliche Build enthält Ersatztexte und erlaubte Zahlenreferenzen. Keine privaten Originalchats als React-Datenquelle. |
| Versionsstand | Im lokalen Git-Verzeichnis gibt es noch **keinen HEAD/Commit**. Die 172 vor der Bestandsaufnahme vorhandenen öffentlichen Dateien sind unversionierte Dateikandidaten. Ein reproduzierbarer Übergabe-Commit ist damit noch nicht vorhanden; in dieser Prüfung wurde keiner erstellt. |

Vorhandene Domainverträge: `ChatSpace`, `Participant`, `SleepProfile`, `ImportSource`, `Message`, `MessageBlock`, `RelationshipContext`, `LifeEvent`, `EvidenceItem`, `UserCorrection`, `AnalysisRun`, `PlanEntity`, `DashboardConfig`, `PeriodFilter` und `RecalculationDependency`, ergänzt um Interaktions-, Dialog-, Reader- und Begleiterverträge. **Typen für MessageBlocks, Korrekturjournal, AnalysisRuns, Plantracking und Abhängigkeiten sind noch keine laufenden Verarbeitungssysteme.** Der aktive Analysevertrag erlaubt derzeit ausdrücklich Referenzergebnisse, nicht beliebige produktiv berechnete Payloads.

## 2. Alle 33 registrierten Analysefunktionen

Maßgeblich für den Iststand sind `src/config/featureRegistry.ts` und `src/analysis/registry.ts`. Kategorien und Anzahlen: Your Chat Rhythm **9**, Who Makes the Move? **5**, How You Text **3**, Your Language **4**, Your Chat Universe **4**, Between the Lines **8**.

**R** = React-Renderer vorhanden, Kennzahlen/Befunde aus gespeicherten Referenzen bzw. fest hinterlegten Präsentationsdaten; keine Berechnung aus dem aktuellen Nachrichtenbestand. **E** = echte lokale Eventverwaltung/-filterung, initial synthetischer Bestand, keine automatische Ereigniserkennung. **U** = `unavailable`, kein Ergebnisrenderer. Die Tarife sind die gegenwärtige Vorschauzuordnung, keine endgültige Monetarisierungsentscheidung.

| Kategorie | Stabile ID | Funktion | Tarif | Stand und wesentliche Grenze |
|---|---|---|---|
| Your Chat Rhythm | `prime` | Prime Time | Free | R — Stundenserie, Zeitfenster und Personenanteile; keine aktuelle Häufigkeitsberechnung. |
| Your Chat Rhythm | `weekday` | Lieblingstag | Free | R — Wochentagsdurchschnitte und Vergleich; Gewinner/Referenzwerte hinterlegt. |
| Your Chat Rhythm | `hotcold` | Hot & Cold Phases | Basic | R — Verlauf, Hot-Flächen und Referenzkontext; Eventprüfung/Flags funktionieren, keine neue Phasenerkennung. |
| Your Chat Rhythm | `silence` | Longest Silence | Basic | R — Roh-/bereinigte Referenzansicht, Pausenreview, Originalsprünge und Ausschluss; Dauer/Verteilung bleibt unverändert. |
| Your Chat Rhythm | `streak` | Chat Streak | Free | R — mindestens 70 Tage, Tagesraster; keine Berechnung aktueller Aktivität. |
| Your Chat Rhythm | `peak` | Peak Day | Free | R — Tages-/24-Stunden-Peak und Rangfolge; widersprüchliche Altwerte bleiben bestehen. |
| Your Chat Rhythm | `pulse` | Communication Pulse | Basic | R — Referenzsummen, Wochenindizes, Personenanteile und Methodik; keine neuen Wochen-/Trendberechnungen. |
| Your Chat Rhythm | `deepdive` | Hot & Cold Deep Dive | Basic | R — hinterlegte Vor-/Phasen-/Folgewerte; bestätigte Treffen werden tatsächlich nach zeitlicher Überschneidung angezeigt. |
| Your Chat Rhythm | `lifeevents` | Life Events | Premium | E — persistent editierbare Events, Liste/Timeline, Kategorien und Zeitraumüberschneidung; KI-Vorschläge/Suche bleiben Fixtures/Mock. Registry führt die Ansicht weiterhin als `legacy-reference`. |
| Who Makes the Move? | `move` | Wer macht den ersten Move? | Basic | R — 80 Starts, Verteilung und Beispiele; keine Gesprächssegmentierung. |
| Who Makes the Move? | `response` | Fast Responder | Basic | R — Median, Mittelwerte, Verteilungen; keine Erkennung aktueller Antwortblöcke. |
| Who Makes the Move? | `firstlast` | First & Last | Basic | R — Nacht-/First-/Last-Referenzen; individuelle Schlafhinweise editierbar, aber nicht eingerechnet. |
| Who Makes the Move? | `qdyn` | Question Dynamics | Premium | U — kein Frage-Antwort-Verlaufsalgorithmus. |
| Who Makes the Move? | `flow` | Conversation Flow | Premium | U — kein belastbares Regelwerk/Ergebnisrenderer. |
| How You Text | `texting` | Texting Champion | Free | R — Nachrichten-/Wortmengen und Personenanteile. |
| How You Text | `longstory` | Long Story Short | Basic | R — Längen/Verteilungen/kurze Antworten; Zitate sind ID-verlinkte Ersatztexte, nicht die Quelle der gezeigten Längen. |
| How You Text | `emoji` | Emoji DNA | Free | R — zwei Top-5-Listen, Anteile, Mengen und Varianten; kein Emoji-Parser. |
| Your Language | `words` | Your Greatest Hits | Basic | R — gemeinsame/persönliche Häufigkeiten und Signature-Werte; zusätzliche echte Teilstringsuche nur in öffentlichen Ersatznachrichten. |
| Your Language | `humor` | Your Humor Code | Premium | R — Lachmarker-/Insiderreferenzen und öffentliche Beispiele; keine neue semantische Erkennung. |
| Your Language | `names` | Name Game | Basic | R — anonymisierte Anrede-/Spitznamenreferenzen; keine aktuelle Anredeerkennung. |
| Your Language | `closeness` | Closeness & Openness | Premium | U — keine semantische Analyse. |
| Your Chat Universe | `topics` | What We Talk About | Premium | R — sechs Themenanteile und klickbare Themen; konkrete Themenbelegzuordnung fehlt im öffentlichen Bestand. |
| Your Chat Universe | `topicstarts` | Who Brings It Up? | Premium | R — hinterlegte Themenstartanteile; keine Erkennung von Themenwechseln. |
| Your Chat Universe | `eras` | Your Eras | Premium | R — drei fest hinterlegte Phasen mit Ersatzbeschreibungen; keine Verlaufssegmentierung. |
| Your Chat Universe | `mineours` | From Mine to Ours | Premium | U — kein Themenentwicklungsmodell. |
| Between the Lines | `questions` | Wer will mehr wissen? | Basic | R — Fragenanzahlen/-quoten; Belegflag ändert noch keine Zahl. |
| Between the Lines | `social` | Social Signals | Premium | R — Komplimente/Dank/Entschuldigungen/Zustimmung/Widerspruch; gruppierte Beispielbelege, keine vollständige Klassifikation. |
| Between the Lines | `future` | What’s Next? | Premium | R — Future Talk, Planarten und Raincheck-Referenzzahlen; kein Plantracking oder vollständiger Raincheck-Review. |
| Between the Lines | `opening` | Opening Up | Premium | U — keine Erkennung persönlicher Offenheit. |
| Between the Lines | `rituals` | Our Rituals | Premium | R — vier kuratierte Muster mit Ersatzgeschichten/-belegen; keine Ritualerkennung. |
| Between the Lines | `futuretrend` | Future Talk Trend | Premium | R — feste Stichprobe von 20 Impulsen, Could/Will und Beispielverlauf; keine neue Trenderkennung. |
| Between the Lines | `report` | Between the Lines Report | Premium | U — keine Synthese-/Berichtspipeline. |
| Between the Lines | `changed` | Something Changed | Premium | U — keine merkmalsübergreifende Wendepunkterkennung. |

Damit sind **25 Referenzanalyseansichten plus eine dynamische Eventansicht** vorhanden. Alle 33 Ziele bleiben erreichbar; auch Premium macht die sieben U-Funktionen nicht verfügbar. Registry-Einträge wie `cost: local`, `rules` oder `semantic-ai` beschreiben den vorgesehenen Typ, nicht eine bereits existierende Engine. Der Begleiter ist zusätzlich vorhanden und gehört nicht zu den 33 Analyse-IDs.

## 3. Verfügbarkeits-, Mock- und Fixture-Grenzen

- Der Standardchat `demo-pair` zeigt die gespeicherten Referenzanalysen. `demo-small` liefert für normale Analysen `insufficient-data`; `demo-empty` und simuliert angelegte Chats liefern keine Analyseergebnisse. Life Events kann deren jeweiligen lokalen Eventbestand trotzdem anzeigen.
- `interactionFixture(chatId)` erzeugt pro Chat **224 synthetische Nachrichten, 15 Evidence-Datensätze, elf Pausenreferenzen und initial zwei Events** mit chatbezogenen IDs. Zwei Teilnehmer sind fest vorgegeben; neutrale Namen in neuen Chats sind kein Ergebnis einer Teilnehmererkennung. Selbst ein Chat ohne Auswertung hat damit noch einen öffentlichen Interaktionsbestand.
- Öffentliche Nachrichten, Wörter, Anreden, Themenbezeichnungen und Geschichten sind teilweise bewusst Ersatzinhalte. Die Kennzahlen wurden nicht aus diesen Ersatzinhalten berechnet. „277 Vorkommen“ und fünf öffentlich auffindbare Nachrichten sind deshalb keine vollständige Herleitung derselben Auswertung.
- Die private Extraktion enthält separat 11.703 Nachrichten, 33 Evidence-Referenzen und fünf Events. Sie wird in lokalen Characterization-Tests geprüft, aber nicht als Produktbestand in die öffentliche React-App geladen.
- Nur `prime`, `streak` und `peak` besitzen derzeit freigegebene kompakte Dashboard-Snapshots. Weitere Karten werden nicht mit geratenen Ersatzwerten angeboten.
- Nicht auflösbare Eventbelege, anonymisierte Signature-Begriffe und fehlende Themenzuordnungen bleiben ausdrücklich `unresolved`. Ein typisierter Vertrag oder ein sichtbares UI-Ziel ersetzt diese fehlenden Daten nicht.

## 4. Stand der Produktbereiche

| Bereich | Funktioniert aktuell | Grenze/offen |
|---|---|---|
| Home | Globale Chatbibliothek, drei initiale öffentliche Chats, CTA zum Wizard, zusätzliche simulierte Chats nach Reload. Keine Analyseergebnisse. Ohne Chat nur Home/Pro/Profil. | Keine echte Importbibliothek, Konten oder vollständige Chatverwaltung/Löschung. |
| Dashboard | Chatwahl öffnet Dashboard; Kontext und Zeitraum nebeneinander; Reader/Datenverwaltung; drei geeignete Karten, Ein-/Ausblenden, Reihenfolge, chatbezogene Persistenz. Alte ungeeignete Auswahlen werden mit erhaltener Restreihenfolge herausgefiltert. | Snapshots statisch, Zeitraum/Korrekturen berechnen sie nicht neu. Weitere fachlich freigegebene Kurzprojektionen fehlen. |
| Analyse | Sechs auswählbare Kategorien, 33 stabile Ziele, 26 Renderer, Methodik, Charts, Personenvergleiche, gesperrte Funktionen sichtbar, Paywall, Rückweg. | Referenzdaten statt Analyseengine; sieben unavailable; Belegvollständigkeit fehlt. |
| Events | Eigener chatbezogener Navigationspunkt; Liste und horizontale Timeline; Kategorie, Titel, Von, Bis, Ort, Notiz, zehn Icons; Pflicht-Titel; Anlage/Bearbeitung/Bestätigung/Verwerfen/Löschen; Notizen und Status persistent. | AI-Ausgangsvorschlag ist Fixture. Keine automatische Suche, Update-Wiedererkennung verworfener Vorschläge oder allgemeines Event-Undo. Datum-/Intervallvalidierung ist noch nicht umfassend: Storage prüft hier vor allem Strings, nicht einen vollständigen fachlichen Zeitvertrag. |
| Chatreader | Text-/Zeitstempelsuche mit nächstem Treffer, exakte MessageId, Fokus, maximal 90 Nachrichten, früher/später um 70 Positionen; Rückkehr zu Screen/Dialog einschließlich Entwurf, Fokus und Scroll. | In-Memory-Fixturebestand; kein dedizierter Datumssprung, Personenfilter, vorherige/nächste Evidence-Stelle oder skalierender Suchindex. |
| Kontext | Beziehung, Familienrolle, Dauer, Kultur, Kommunikationsstil, Notiz, optionale lokale Bilder und individuelle Schlaf-/Aufstehzeiten. Speichern schließt mit Erfolgsmeldung; Reload/chatbezogene Trennung. | Keine automatische Sprach- oder Schlafprofilerkennung. Schlafhinweise werden noch nicht in Analysewerte eingerechnet. |
| Globaler Analysezeitraum | Gesamter Zeitraum, 7/30 Tage, 3/12 Monate, Custom. Zentral je Chat persistent; Auswahl im Dashboarddialog. Relative Grenzen aus letzter gültiger Nachricht, ohne Systemdatum-Fallback; Custom unverändert. | Referenzkennzahlen und Dashboard bleiben Gesamtbestandswerte. Nicht alle Belegdialoge wenden den Zeitraum an. Details siehe Abschnitt 7. |
| Begleiter | Premium-Mock, sitzungsbezogener Thread pro Chat, Loading/Error/Retry, mehrere vorhandene Treffer, Originalsprünge, Evententwurf, konkrete Aktionsvorschau mit Bestätigung und Prüfung auf veralteten Stand. | Regex-/Fixtureantworten, kein allgemeines Sprachverständnis, kein LLM. Thread/Entwürfe gehen bei Reload verloren. Einige spezifizierte Aktionen fehlen. |
| Import/Daten | Wizard Quelle → Teilnehmerdarstellung → Kontext, vor/zurück/abbrechen; getrennte Add-/Replace-Abläufe; persistente Quellenmetadaten. Simulation wird angezeigt. | Keine Datei-/Textverarbeitung, echte Teilnehmererkennung, Deduplizierung, Nachrichtenänderung oder Update-Reanalyse. |
| Evidence/Korrekturen | Kleine Beleglisten, einzelne Gruppen, stabile IDs, Originalsprung/Rückkehr; Ausschluss und Wiederaufnahme persistent. Pausenflags und Hot-&-Cold-Kontextmarkierung ebenfalls persistent. | Keine vollständigen Mengen, Pagination, umfassenden Filter, Reklassifizierung, allgemeines Korrekturjournal oder echte Reanalyse. |
| Themes/Design | Modernisiertes semantisches Designsystem, zwei unterschiedliche Themes, Profil-Previews, explizite persistente Auswahl; Editorial Warm als Default, kein Systemmodus. Lucide-Icons, sechs Kategorie-Artworks, responsive Layouts und Charts. | Native Touch-/Screenreader-Abnahme offen. Sprachwahl/Hilfe/Rechts-/Datenschutzbereiche bleiben unvollständig bzw. deaktiviert. |
| Free/Basic/Premium | Zentrale Access-Ränge, Badge/Schloss, Paywall und bewusste Planvorschau. Dynamische Anzahl verfügbarer Analysen. | Keine tatsächliche Subscription, Bezahlung, Kontingente oder serverseitige Berechtigungsprüfung. Vorschau startet nach Reload wieder bei Free. |

Die aktive Chatnavigation hat inzwischen **sieben Ziele**: Home, Dashboard, Analyse, Ereignisse, Begleiter, Pro, Profil. Home setzt den aktiven Chat zurück; Pro und Profil können den Chatkontext erhalten. Eine sichtbare Stufen-I-/II.A-Vorauswahl gibt es nicht.

### Aktuelle Persistenz

| Schlüssel | Inhalt/Verhalten |
|---|---|
| `zdz:chat-interactions:v2:<encodeURIComponent(chatId)>` | Revision, Dashboardkonfiguration, Kontext/Fotos/Schlafprofile, Events, Quellenmetadaten, Evidence-/Pausenausschlüsse; Event enthält Hot-&-Cold-Wirkungsflag. |
| `zdz:chat-interactions:v1:<encodeURIComponent(chatId)>` | Älterer Interaktionsstand. Validiertes Lesen migriert zunächst nur im Speicher. Erst eine erfolgreiche explizite Änderung schreibt v2; v1 bleibt erhalten. Gemeinsame Schlafhinweise werden als `legacySharedSleep` archiviert, nicht Personen zugeordnet. |
| `zdz:chat-period:v1:<encodeURIComponent(chatId)>` | Preset und konkrete Von/Bis-Grenzen. Relative Auswahl wird bei Verwendung am aktuellen Chatende aufgelöst; reine Wiederherstellung überschreibt den Schlüssel nicht. |
| `zdz:demo-library:v1` | Metadaten der über die Simulation neu angelegten Chats. |
| `zdz:preferences:theme:v1` | Nur explizite Theme-Wahl. Ungültige/entfallene Auswahl zeigt den Default ohne Startüberschreibung; Speicherfehler werden bei Auswahl gemeldet. |
| `zwischen_den_zeilen_proto_v05` | Privater Legacy-Originalschlüssel; wird durch die neue App nicht überschrieben oder gelöscht. |
| `zwischen_den_zeilen_proto_v05:backup-before-v1`, `zdz:migration:v1:<encodeURIComponent(chatId)>` | Nur der ausdrücklich aufgerufene Vorbereitungsadapter erstellt Rohbackup/Migrationshülle. Keine automatische Zuordnung privater Altdaten zu Demo-Chats. |

Absichtlich leere Listen bleiben leer. Vorhandene beschädigte Chat-/Zeitraumdaten werden als Fehler gemeldet statt durch neue Fixtures ersetzt. Erst ein tatsächlich fehlender Interaktionsdatensatz bekommt den definierten synthetischen Ausgangsbestand. Der Interaktionsstore prüft konkurrierende Schreibstände und Schreibfehler; das ist noch kein transaktionales Mehrbenutzer-/Mehrgeräte-System. Fotos liegen als lokale Data-URLs vor; Browserstorage ist keine verschlüsselte Produktionsdatenhaltung. Origin-/Portwechsel erschließen nicht automatisch den bisherigen Speicher.

## 5. Nachweis DESIGN_CORRECTIONS_1 und DESIGN_CORRECTIONS_2

### DESIGN_CORRECTIONS_1: umgesetzt

Der Code enthält die auf das Dashboard beschränkte Zeitraumsteuerung, reduzierte Kategorie-Zusatzicons bei erhaltenen Artworks, Funktionsicons und dezente Tarifkennzeichnung, die korrigierte Prime-Time-Beschriftung, unterscheidbare Hot-/Referenzkontextflächen mit Schraffur, gerundete Silence-Anzeige, die Pulse-Erklärung im Methodikbereich, zweispaltige Emoji- und persönliche Wortlisten, Themen-/Planartenlisten und die horizontale Event-Timeline mit Vorschau. Editorial Warm verwendet die vereinheitlichten Erdtöne; Night Mode behält seine eigene Palette.

Nachweise: `src/analysis/{rhythm,texting,language,universe,between}.tsx`, `src/interactions/EventTimeline.tsx`, `src/theme/themes.ts`, `src/styles/app.css`, `tests/integration/designCorrections.test.tsx`, `MIGRATION_STATUS_DESIGN_CORRECTIONS_1.md` und die gleichnamige Browserbaseline. Einzelne Darstellungsdetails wurden anschließend durch Korrekturlauf 2 weiterentwickelt.

### DESIGN_CORRECTIONS_2: tatsächlich umgesetzt, mit dokumentierten Grenzen

| Auftragsbereich | Umsetzung im aktuellen Code |
|---|---|
| Gleichwertige Dashboard-Controls | Zwei Spalten in `.dashboard-tools`; Kontextbutton plus `PeriodControl`/`PeriodPicker` als Dialog. |
| Relative Zeiträume am Chatende | `src/domain/period.ts`: `lastMessageDate`, `makePeriod`, `resolvePeriod`; ungültige/fremde Nachrichten werden ausgeschlossen, Custom bleibt exakt. Im öffentlichen Hauptchat ist das Chatende **23.08.2026**, nicht das Ende der separaten Analyse-Referenz am 09.09.2026. |
| Dashboard-Snapshot-Vertrag | Typisierte geeignete/ungeeignete Karten in `shellRepository.ts`, bewusste Projektionen in `dashboardSnapshots.ts`; nur Prime Time, Chat Streak und Peak Day auswählbar. Keine UI-seitig geratenen Kennzahlen. |
| Alte Kartenkonfigurationen | Auswahl wird auf erlaubte Snapshots reduziert; verbleibende Reihenfolge bleibt erhalten. Nur eine Nutzeraktion schreibt einen neuen Stand. |
| Mini-Badges/Schloss | `TierBadge` und `.tier-label`: dezente Outline/Rundung; Schloss bleibt bei gesperrten Funktionen. |
| Dynamische Tarifzahlen | `planFeatureCounts()` zählt Registry-Einträge unter Ausschluss von unavailable: Free **6**, Basic **+11 = 17 insgesamt**, Premium **+9 = 26 insgesamt**, Begleiter separat. |
| Silence-Einheiten | Ganzzahlig gerundete Balken mit unmittelbarem `%`; passende Tooltip-/Achsenformatierung, Rohwerte unverändert. |
| Themenbelegnavigation | Themenbuttons öffnen `TopicHits`; Sender, Datum, Text und Klassifikations-/Confidencehinweis; ID-genauer Reader-Sprung, Themendialog/Fokus/Scroll-Rückkehr. |
| Gemeinsame Chartinteraktion | `useChartInteraction.ts` für SeriesChart/ShareBar: temporärer Maus-Hover, kein erzwungener Mausfokus, sichtbarer Tastaturfokus, Escape/Pfeiltasten sowie Touch-Toggle/Außentap. |
| Nachweise | `tests/integration/designCorrections2.test.tsx`, `tests/browser/design-corrections-2.cua.js`, `tests/baselines/DESIGN_CORRECTIONS_2_BROWSER_BASELINE.md`, `MIGRATION_STATUS_DESIGN_CORRECTIONS_2.md`. Aktuelle öffentliche Tests einschließlich dieser Datei bestanden. |

**Zwei Einschränkungen verhindern eine uneingeschränkte fachliche/Geräteabnahme:** Die öffentliche Themen-Evidence trägt nur die allgemeine Klassifikation „Beispielbeleg“, keine Zuordnung zu einem der sechs Themen. Deshalb bleibt jedes konkrete Thema derzeit unresolved; der allgemeine Beleg steht sichtbar separat und wird nicht als Themenbeweis umgedeutet. Außerdem ist echte Touchhardware weiterhin ungeprüft; Pointerzweige sind in Integrationstests geprüft, die historische Browsermatrix nutzt Desktop-Chromium mit mobilen Viewports. Die spätere Verschiebung relativer Grenzen nach einem Nachrichtenupdate ist als Funktion getestet, aber mangels echtem Import noch kein durchgehender Produktflow.

## 6. Echte Berechnungen gegenüber Referenz-/Mockwerten

`referenceAnalysisRepository.get()` liefert `analysisReference.json` mit `provenance: legacy-reference` und `sleepHintsApplied: false`. Es führt keine Nachrichtenanalyse aus. Mehrere Renderer ergänzen feste Zahlen/Serien, Beschriftungen und Geschichten direkt im Code. Der Produktpfad enthält keine verwendete Analyseengine, die einen neuen Chat in diese 25 Auswertungen umrechnet.

Beispiele gespeicherter Werte: Prime Time 23–02 Uhr/38,9 %, Streak mindestens 70 Tage, Peak 652 bzw. rollierend 696 Nachrichten, Texting/Pulse-Kopf 11.651 Nachrichten/147.073 Wörter, Fragen 1.770, Themenbasis 3.392 klassifizierte Nachrichten, feste Deep-Dive-Perioden und Future-Trend-Stichprobe. Stundenbalken, markierte Phasen und Eras werden ebenfalls nicht aus den 224 Ersatznachrichten erkannt.

Echte laufende Berechnungen gibt es für **Hilfs-/Interaktionslogik**: letztes gültiges Chatdatum und Kalendergrenzen; Filterung/Sortierung/Überschneidung vorhandener Events; Suchtreffer in öffentlichen Nachrichten; Readerfenster; sichtbare Beleg-/Eventanzahlen; dynamische Tarifzahlen; Dashboard-Eignungsfilter; Chartskalierung, Rundung und einfache Darstellungsableitungen aus Referenzwerten. Diese Vorgänge sind nicht mit einer fachlichen Analysepipeline gleichzusetzen.

Unaufgelöste Referenzwidersprüche bleiben bestehen und sind keine Sollformeln: **11.703 Rohdatensätze / 11.657 relevant / 11.651 angezeigt**, Tagesreihe-Peak **653** gegenüber Detail **652**, ältere Pulse-Basis **11.045 / 143.779 / 65 Tage** gegenüber neuer Kopfansicht, Fast-Responder-Quoten **82,5/80,1** gegenüber **85,0/81,8**, sowie der Cold-Phase-Konflikt zwischen Hot & Cold und Deep Dive (LD-01/30/31).

## 7. Welche Nutzeränderungen lösen Neuberechnungen aus?

**Keine aktuelle Nutzerkorrektur berechnet eine betroffene Analysekennzahl aus Nachrichten neu.** Eine erneut geladene Referenz oder ein React-Neurender ist keine Reanalyse.

| Nutzeraktion | Tatsächliche Wirkung | Fachliche Reanalyse |
|---|---|---|
| Evidence ausschließen/wieder einbeziehen | Persistentes Flag, Status und Liste ändern sich. | Nein; beispielsweise bleiben 1.770 Fragen erhalten. |
| Pause ausklammern/wieder aufnehmen | Persistentes Pausenflag. | Nein; längste/typische Pause und Verteilung bleiben Referenzen. |
| Treffen als Kontext/Ausschluss markieren | Eventflag und sichtbarer Kontext ändern sich. | Nein; Hot-/Cold-Erkennung und Deep-Dive-Mengen bleiben unverändert. |
| Kontext, Schlafzeiten oder Fotos ändern | Persistente Felder/Avatare ändern sich; Schlafprofile werden an den Analysevertrag übergeben. | Nein; keine aktualisierten Nacht-/Antwort-/Startmetriken. |
| Globalen Zeitraum ändern | Persistenz und zentraler Filter; Worttreffer, Themen-Originalnachrichten, Begleitertreffer und überlappende Life Events werden tatsächlich eingegrenzt. | Nein für Referenzzahlen/Dashboard. Der generische `EvidenceList` filtert bisher nur nach Feature/Gruppe, nicht nach globalem Zeitraum. Die allgemeine Ereignisbibliothek bleibt bewusst vollständig. |
| Event anlegen/bearbeiten/bestätigen/verwerfen/löschen | Eventbestand, Liste, Timeline, Filterergebnis und überlappender Kontext ändern sich tatsächlich. | Keine Neuberechnung anderer Analysewerte und keine neue Ereigniserkennung. |
| Dashboardkarten ändern | Sichtbarkeit/Reihenfolge speichern sich. | Nein; reine Darstellung. |
| Add/Replace simulieren | Quellenmetadaten ändern sich. | Nein; Nachrichtenbestand bleibt identisch. |
| Begleiteraktion bestätigen | Dieselben lokalen Änderungen nach konkreter Vorschau; Revision/Zeitraum werden geprüft. | Nein; keine gesonderte Berechnungsfähigkeit des Begleiters. |

`UserCorrection`, `AnalysisRun` und `RecalculationDependency` sind vorbereitet, aber weder Journal noch Invalidierung/Versionskette/Worker implementiert. Wieder-Einbeziehen einzelner Flags ist vorhanden; allgemeines Undo, Reklassifizieren und Bestätigen unsicherer Evidence fehlen.

## 8. Echter und simulierter Import

**Als Nutzerfunktion importiert die React-App derzeit keine Chatquelle.** Die drei Quellenangebote WhatsApp-Export, eingefügter Text und Transkript führen durch simulierte Abläufe. Der Wizard nimmt keinen echten Chatdateiinhalt entgegen, erkennt keine Sprecher und führt keine Analyse aus. Beim Abschluss entstehen lokale Chat-/Kontext-/Quellenmetadaten; synthetische Teilnehmer/Nachrichten bleiben Fixtures. Add erweitert die Quellenliste, Replace ersetzt diese Liste. Beides ist keine Append-/Replace-Verarbeitung von Rohdaten.

Vorhanden sind echte **lokale Migrationswerkzeuge für genau die bekannte Legacy-Datei**: Hashprüfung, unveränderte Kopie, Extraktion, einmaliges Identitätsmanifest, validierte Message-/Evidence-Zuordnung und eine erlaubte Zahlenprojektion. Diese Werkzeuge sind kein WhatsApp-/Transkriptparser und kein robustes Matching späterer Exporte. Die notwendige explizite Zuordnung des alten globalen Browserbestands zu einem neuen Chat ist nicht automatisch lösbar und wird nicht geraten.

Ein optionales Personenbild kann tatsächlich lokal gelesen und gespeichert werden. Der UX-Testmodus erzeugt tatsächlich CSV-/JSON-Inhalte. Beides ist vom noch fehlenden Chatimport zu unterscheiden. Auch automatische Chatsprache, Gruppenteilnehmer/Dyade, Zeitnachtrag für undatierte Transkripte, Deduplizierung, Reanalysebericht und Übernahme von Korrekturen nach Updates fehlen.

## 9. KI-/LLM-Stand

Es ist **kein KI-/LLM-Dienst angebunden**. `mockCompanionService` nutzt feste Regex-Trigger, fünf bekannte öffentliche MessageIds und kuratierte qualitative Confidence („mittel“/„gering“). Es handelt sich weder um Modellwahrscheinlichkeiten noch um semantische Vollsuche. Die Prüfung des Quellcodes zeigte keinen produktiven Netzwerkaufruf für Analysen oder Begleiter.

Vorhanden sind `CompanionService.respond`, Request-/Answer-/Action-Verträge, injizierbarer Service, ID-/Chat-/Revision-Prüfung, asynchrone UI-Zustände und konkrete Bestätigung vor Änderungen. Unterstützt: Evidence-Ausschluss, Eventbestätigung, Ausklammerungsflag eines Treffens, Ersetzen der zusätzlichen Kontextnotiz, globaler Zeitraum sowie Evententwurf. Der Service führt Änderungen nicht selbst aus. Temporär „letzte drei Monate“ bleibt auf die Frage beschränkt.

Noch nicht vorhanden: allgemeine Analyseerklärung anhand berechneter Ergebnisse, freie Life-Event-/Themen-/Insidersuche, automatische Klassifikation, echte Confidence-Kalibrierung, Dashboardänderung oder Evidence-Reklassifizierung durch den Begleiter, serverseitige Autorisierung, produktiver Herkunfts-/Antwortvertrag, Retrieval und sicherer Transport. Der heutige Antwortvalidator und der Speicher kennen nur Fixture-IDs; sie müssen für echte Daten kontrolliert erweitert werden. Sicherheitsregeln in den Spezifikationen sind Zielvorgaben, kein Nachweis einer bereits gehärteten LLM-Architektur.

## 10. Reife der fachlichen Spezifikation

| Bereich | Bereits ausreichend konkret | Vor produktiver Umsetzung noch festzulegen |
|---|---|---|
| Navigation/Grund-UX | Bibliothek, Chatkontext/Guard, Kategorien, gesperrte Features, Rückwege, Dialogverhalten und Theme-Wahl sind konkret und weitgehend umgesetzt. | Offene Profilbereiche, gewünschte Deep Links, vollständige Sprachen-/Hilfefunktionen und Abnahmekriterien. |
| Events/Kontext | Feldumfang, Vorschlag vs. bestätigt vs. verworfen, Bearbeiten/Löschen, Notizen, optionale Schlafhinweise und Bestätigung sind beschrieben. | Datum der Erwähnung vs. reales Ereignisdatum, unsichere/offene Intervalle, widersprüchliche Datumsfelder, Wiedererkennung/Verwerfen bei Updates, ggf. Rücknahme. |
| Einfache Statistiken | Nachrichten-/Wort-/Emoji-Häufigkeit, Wochentagsbezug, Kalendertag-Streak und Peak sind verständlich genug für eine detaillierte Rechenspezifikation. | Verbindliche relevante Grundmenge, System-/Medien-/gelöschte Nachrichten, Textnormalisierung/Tokenisierung, Emoji-Einheiten, Zeitzonen/Tagesgrenzen, fehlende Zeitdaten, Gleichstände und Mindestdatenmenge. |
| Starts/Antworten/Nacht | Unterschied Gesprächsstart/Themenstart, Antwortzeit ab Blockende, echte Fortsetzung statt neuer Start, Schlaf als weicher Kontext sind explizit. | Blockbildungs- und Pausenschwellen, Fortsetzungsentscheidung, automatische Nacht-/Schlaferkennung und prüfbare Grenzfälle. |
| Pulse/Hot & Cold/Deep Dive | Intensität vs. Kontinuität, Vergleich vollständiger Perioden, neutrale Interpretation und Eventkontext sind definiert. | Chatnormal, Baselinefenster, Schwellen, minimale Phasenlänge, Vergleichsbasis/Index, Umgang mit Ausschlüssen und Auflösung LD-01/30/31. |
| Semantische Funktionen | Evidence-Pflicht, Unsicherheit, keine Gefühlsdiagnosen, Kandidatenauswahl und sichtbare Korrekturen sind klare Leitplanken. | Verbindliche Labels/Mehrfachzuordnung, Zähleinheit, Annotierungsbeispiele, kalibrierte Confidence-Schwellen und Qualitätsgrenzen je Feature. |
| Evidence/Reanalyse | Stabile IDs, vollständige Menge, Filter/Pagination, persistente Korrekturen, Undo und abhängige Reanalyse sind verlangt. | Exakte Korrekturwirkung/Präzedenz, Abhängigkeitsgraph, Korrekturkonflikte, Reanalyse-/Updateversionen, Verhalten verwaister Referenzen und abgeschlossener Läufe. |
| Import/Gruppen | Quellen, Add vs. Replace, Dyade und Erhalt von Kontext/Korrekturen sind konkret. | Formatvarianten, Sprecheridentität/Aliase, fehlende Zeiten, Mapping bei Änderungen/Duplikaten, Konfliktentscheidungen und nachvollziehbare Vorschau. |
| Raincheck/Plantracking | Planobjekte und mögliche Zustände/Review-Aktionen sind benannt. | Belastbare Zustandsübergänge, Zuordnung mehrerer Nachrichten, Nenner der Quote, Merge-/Duplikatregeln und Nachweis einer Durchführung. |
| Sieben unavailable | Namen und Zielrichtungen vorhanden. | Keine vollständigen messbaren Definitionen; Umfang einzeln festlegen oder ausdrücklich außerhalb der ersten Produktversion lassen. |
| Tarife/Produktion | Konfigurierbare Zugangsstufen und kein Secret im Browser sind entschieden. | Finale Features/Preise/Quoten, Datenschutz- und Aufbewahrungsanforderungen, Kontenmodell sowie produktive Betriebsziele. |

### Widersprüche und veraltete Übergabeangaben

- `docs/OPEN_DECISIONS.md` nennt Vite/React/TypeScript noch einen Vorschlag; dieser Stack ist inzwischen tatsächlich umgesetzt und wurde in den Migrationsschritten freigegeben.
- Frühere Berichte nennen drei Themes und fehlende UI-Funktionen. Aktuell existieren genau **Editorial Warm und Night Mode Chic** mit sichtbarer Auswahl. `modern-insight` ist aufgrund der späteren Designfreigabe entfallen, nicht versehentlich unimplementiert.
- `docs/FEATURE_MATRIX.md` ist kein exaktes Spiegelbild der Registry: Deep Dive steht dort als Premium/Advanced, im Code Basic; `closeness` fehlt; `report`/`changed` stehen dort unter anderen Kategorien. Name Game/Fragen sind teilweise als Basic/Premium offen. Die Registry-Zuordnung ist der Iststand, nicht die endgültige fachliche Entscheidung.
- `docs/REFERENCE_MAP.md` verweist auf `reference/` mit DOCX/PPTX-Quellen; dieser Ordner ist im aktuellen Arbeitsverzeichnis nicht vorhanden. Die kopierten Markdown-Spezifikationen liegen vor, die genannten Originalkonzepte sind damit nicht Bestandteil dieser lokalen Übergabe.
- Alte CUA-Skripte enthalten historische Selektoren/Erwartungen: Schritt 3 erwartet sechs statt sieben Chatziele, Schritt 5 frühere Chartcontrols, Korrekturlauf 1 und Teile des Schritt-6-Ablaufs einen direkt sichtbaren Zeitraum-Selector. Sie sind nicht alle unverändert als aktuelle Regression ausführbar. Der Korrekturlauf-2-Runner berücksichtigt den neuen Zeitraumdialog.
- Der aktuelle UX-Modus hat zehn technische Aufgaben, deckt aber nicht sämtliche fachlichen Ziele des ursprünglichen `docs/UX_TEST_PLAN.md` ab: vollständige Fragebelege, geänderte Kennzahlen nach Ausschluss und echtes Ergänzen von Nachrichten können derzeit nicht erfolgreich abgenommen werden.

## 11. Offene Produktpunkte, gruppiert

### Frontend/UX

- Vollständige DE-/EN-Oberfläche, Profil-Sprachwahl, Hilfe/Support, Impressum/Rechtliches und Datenschutz-/Chatdatenverwaltung vervollständigen (LD-21).
- Chatreader: Datumssprung, Personen-/Gruppenfilter, vorherige/nächste Evidence-Stelle; Such-/Fensterverhalten für große reale Bestände (LD-27).
- Profilbilder/Initialen sind in Personenvergleichen vorhanden; generische Belegabsender und Chatreader zeigen derzeit Textnamen ohne entsprechende Avatare. PM-09 ist deshalb nur teilweise erledigt (LD-19).
- Globale Zeitraumauswahl auf alle tatsächlichen Ergebnisse und relevanten Belegansichten konsistent anwenden; Dashboard-Snapshots aus künftigen echten Ergebnissen liefern (PM-01).
- Konkrete Themenzuordnung statt ausschließlich allgemeiner Beispielbelege; bei persönlichen Wortlisten unterscheiden, ob Treffer nur dieser Person oder beider Personen gezeigt werden sollen. Aktuell erhält `WordHits` keine ParticipantId und durchsucht beide Personen mit Teilstringvergleich.
- Datums-/Intervallvalidierung von Events und Verhalten bei fehlenden/unsicheren Angaben konkretisieren. Gewünschte Lösch-/Rücknahme- und Chatverwaltungsabläufe vervollständigen.
- Sharing/Ergebnisexport einschließlich Datenschutz ist offen; der vorhandene UX-Testexport ist kein Ergebnisexport.
- Physische Touchgeräte, Screenreader, Zoom/Schriftvergrößerung und lange bzw. sehr dichte Inhalte abnehmen. Bestehende Kategorie-Artworks und Themes müssen dafür nicht erneut entworfen werden.

### Analyse-/Berechnungslogik

- Tatsächliche Berechnung der verfügbaren deterministischen, hybriden und semantischen Auswertungen; eindeutige Grundmengen/Einheiten, Periodenregeln und belastbare kleine Referenzdatensätze (LD-01/30/31).
- Globalen Zeitraum und optionalen individuellen Schlafkontext tatsächlich einrechnen; echte Aktivität muss den Hinweis übersteuern (PM-01/02, LD-08/09).
- Gesprächsblöcke, Antwort-/Start-/Nachtlogik und konfigurierbare Schwellen umsetzen; Fortsetzung von Neustart unterscheiden.
- Hot-/Cold-Erkennung, vollständige Vergleichsperioden, Pulse-Mengen/Indizes und Deep-Dive-Folgeperioden konsistent herleiten; Eventkontext nicht als Ursache behaupten.
- Vollständiges Raincheck-Planmodell mit Verlauf, Klassifikationsreview, Zusammenführen, Duplikatkorrektur und Quote fehlt (PM-10, LD-13).
- Die sieben unavailable-Funktionen fachlich definieren und einzeln priorisieren (LD-22). Sichtbarkeit ist keine Produktfertigstellung.

### KI/LLM

- Echte semantische Klassifikation/Suche und produktiver Begleiter hinter sicherem Backend; mehrere plausible Treffer, überprüfbare Quellen und differenzierte Unsicherheit (PM-07, LD-11/12).
- Featurebezogene Confidence-Schwellen, Evaluationsdaten, Fehlertoleranz, Review-Anforderungen und Regeln zur automatischen Übernahme definieren.
- Retrieval aus dem tatsächlichen Chat, Ergebnissen, Korrekturen und Kontext; Begrenzung auf erlaubte Teilnehmer/Zeiträume; keine erfundenen Originalstellen.
- Sichere Behandlung von Chatinhalten als untrusted Eingabe, serverseitige Aktionsberechtigungen, Wiederholungsschutz und Validierung produktiver Antworten.
- Fehlende Begleiteraktionen wie Reklassifizierung und Dashboardkarte sowie gewünschte Thread-Persistenz bestimmen; konkrete Bestätigung für Zustandsänderungen beibehalten (PM-06).

### Import/Daten

- Echte Parser für WhatsApp, eingefügten Text und Transkripte; Sprecher-/Spracherkennung und Prüfvorschau (PM-11, LD-03).
- Gruppenimport mit Auswahl zweier Personen, Kontext anderer Teilnehmer und isolierten Dyadenkennzahlen (PM-03, LD-10).
- Robustes Nachrichtenmatching, Deduplizierung und Identitätserhalt bei Updates/Replace; heutiges Manifest validiert nur die unveränderte Legacy-Quelle (LD-06).
- Unvollständige Zeitstempel, Zeitzonen, bearbeitete Nachrichten, System-/Medienhinweise und fehlerhafte Quellen behandeln.
- Kontext, Fotos, Events, abgelehnte Vorschläge, Korrekturen und Ausschlüsse bei realen Updates erhalten; nachvollziehbarer Updatebericht. Fehlende private Legacy-zu-Chat-Zuordnung nicht automatisch raten.
- Produktive Speicherung, Backup/Restore, sichere vollständige Löschung und Daten-/Dateigrößenlimits fehlen. Lokale Foto-Data-URLs und localStorage sind kein skalierender Importdatenspeicher.

### Evidence/Korrekturen/Reanalyse

- Vollständige Belegmengen statt Beispiele, Pagination etwa 50 Einträge und Filter nach Person, Zeitraum, Status, Confidence und Kategorie (PM-04, LD-05).
- Globale MessageId-Verlinkung auch für noch unaufgelöste/anonymisierte Originalstellen, ohne eine Zuordnung zu erfinden. Fehlende Themenklassifikation bleibt bis zu echten Daten unresolved (PM-08, LD-18).
- Korrekturjournal, Reklassifizieren, Bestätigen unsicherer Evidence, Grund/Kommentar, Undo und Wirkung auf abhängige Analysen (PM-05, LD-02/14).
- Tatsächliche Invalidierung/Reanalyse inklusive Dashboard, Caches, Schlaf-/Eventkontext und Zeitraum. Persistierte Flags allein erfüllen diese Anforderung nicht.
- Korrekturen und Ablehnungen über Importupdates wiedererkennen; Konflikte/verwaiste Belege sichtbar behandeln (LD-06/15).

### Backend/Produktionsarchitektur

- Authentifizierung, Eigentum/Berechtigungen pro Chat, Datenbank/Dateispeicher, API und Hintergrundverarbeitung fehlen.
- Produktive Repository-/Analyse-/Begleiterverträge von Fixturebindungen lösen; Ergebnisherkunft, Algorithmus-/Datenversion und Zustände bis zur UI nachverfolgen.
- Geheimnisse nur serverseitig; Datenminimierung, Verschlüsselung, Lösch-/Aufbewahrungskonzept, Einwilligung und rechtlich geprüfte Texte umsetzen.
- Deployment, CI, Monitoring ohne private Chattexte, Kosten-/Rate-Limits, Fehlerwiederholung, Performance und Wiederherstellung planen.
- Öffentlichen Übergabestand versionieren; private Testdaten separat und nur berechtigt bereitstellen. Noch kein Commit/HEAD und keine vollständige produktive Betriebsabnahme.

### Monetarisierung

- Finale Tier-/Featurematrix und Preise entscheiden; LD-23 und Konflikte zwischen Matrix/Registry auflösen.
- Quoten für Nachrichten, Chats, KI-Läufe, Reanalysen und Speicherung sowie Verhalten bei Downgrade/Limitüberschreitung definieren.
- Reale Konten-/Abo-/Zahlungsintegration und serverseitige Entitlements fehlen. Aktuelle Preise **0 / 4,99 / 9,99 Euro** sind unverbindliche Vorschauwerte; aktuelle Zahlen **6 / 17 / 26** zählen verfügbare Ansichten, keine produktiv berechnenden Analysen.

### Tests/Abnahme

- Rechen- und semantische Qualitätsprüfungen gegen fachlich autorisierte Erwartungswerte fehlen. Die bestehenden Zahlenchecks sichern Referenzparität, nicht fachliche Richtigkeit.
- End-to-End-Import → Evidence → Korrektur → Reanalyse → Update/Reload prüfen, sobald implementiert; zusätzlich Gruppen/Identitätskonflikte und große Datenmengen.
- Aktuelle Browserregression konsolidieren; historische Runner nicht unverändert als aktuelle Tests deklarieren. Keine neuen Baselines ohne bewusste Abnahme.
- Native Touchgeräte, Screenreader-/Accessibility-Prüfung, Browsermatrix und echte Nutzerstudie ergänzen (LD-20/24). Token-Kontrasttests sind kein vollständiges Accessibility-Audit.
- UX-CSV/JSON-Inhalte und Downloadlinks existieren; erfolgreicher Dateidownload ist laut vorhandener IAB-Baseline nicht verlässlich nachgewiesen.
- HMR kann bei gemischten Provider-/Hook-Modulen eine Entwicklungsseite neu laden; sitzungsgebundene UX-Messungen/Threads gehen dabei verloren. Produktionsprüfung und Entwicklungsverhalten unterscheiden.

### Einordnung bereits behandelter Altfehler

LD-04/24 (kaputter Overlay-Testmodus), LD-07 (global vermischte Interaktionen), LD-15 (Verwerfen ohne Ablehnungsstatus), LD-16 (Wiederbelebung leerer Listen/verschluckte Speicherfehler), LD-28 (erfundener Ersatztitel) und LD-29 (fehlende persistente Iconwahl) wurden im React-Umfang bewusst nicht übernommen. Bei LD-15 bleibt nur die Wiedererkennung nach künftigem echten Import offen. LD-17 hat explizite Status-/Quellzuordnung und Behandlung der bekannten Kategorievarianten; LD-25 wird durch die Sicherung der wirksamen v0.7-Referenzrenderer adressiert. LD-26 ist für vorhandene Lade-/Fehler-/Leer-/Unavailable-Flows bearbeitet, nicht für noch fehlende Produktionsdienste.

LD-06/18 (IDs/Quellsprünge), LD-08/09 (Zeitraum/Schlaf), LD-19/20 (Avatare/Charts), LD-11/12 (Suche/Begleiter) sind teilweise umgesetzt; ihre oben genannten Daten-, Rechen- oder Abnahmegrenzen bleiben offen. LD-01/02/03/05/10/13/14/21/22/23/27/30 und der fachliche Teil von LD-31 bleiben offen. Der private Originalprototyp wurde nicht repariert; grüne Legacy-Defektbeobachtungen verlangen keine Wiederaufnahme dieser Fehler ins Produkt.

## 12. Vor einer Entwickler-/AI-Übergabe zwingend zu spezifizieren

Eine Übergabe zur **weiteren technischen Planung** ist mit diesem Stand möglich. Für eine eigenständige fachliche Produktimplementierung braucht der Empfänger vorab folgende verbindliche Entscheidungen, damit er keine Regeln erfindet:

1. **Zielumfang und Abnahme:** Welche Funktionen werden in der ersten echten Produktversion berechnet, welche bleiben unavailable? Was gilt als fertig, welche Plattformen, Datenmengen und Fehlerfälle müssen unterstützt werden?
2. **Gemeinsame Datenbasis:** Relevante Nachrichten, System-/Medien-/Löschfälle, Wort-/Emoji-Einheiten, Zeitzonen, fehlende Zeitdaten, Dyade und Zeitraumgrenzen. Widersprüchliche Legacy-Zahlen ausdrücklich als Referenzdefekte vom Soll trennen.
3. **Rechenverträge je Analyse:** Eingaben, Zähler/Nenner, vollständige Vergleichsperioden, Schwellen, Mindestdaten, Grenzfälle und kleine prüfbare Beispielbestände. Speziell Blockbildung, Nacht-/Antwortlogik, Chatnormal/Phasen, Pulse und LD-30/31 klären.
4. **Semantische Definitionen:** Kategorien und Mehrfachzuordnung, Klassifikations-/Revieweinheit, erlaubte Aussagen, Confidence-Politik und messbare Qualitätsanforderungen. Unvollständig definierte Funktionen ausdrücklich zurückstellen.
5. **Korrekturen/Reanalyse:** Welche Änderung wirkt auf welche Kennzahl/Folgefunktion, Vorrang Nutzer/System, Undo, Konflikte, Reanalysezustände und Erhalt bei Updates. Erwarteter Umgang mit ungeklärten Zuordnungen.
6. **Import-/Identitätsregeln:** Unterstützte Formate/Varianten, Sprecherbestätigung, Gruppen-/Dyadenscope, Append/Replace, Duplikate und bearbeitete Nachrichten; Entscheidung bei mehrdeutigem Matching und bei verlorenem Belegziel.
7. **Events/Pläne:** Erwähnung gegenüber tatsächlichem Ereignis, unsichere Zeiträume, Wiedererkennung verworfener Vorschläge; Raincheck-Zustandsübergänge, Planidentität/Merge und Quotennenner.
8. **Daten- und KI-Rahmen:** Welche Daten dürfen wohin übertragen werden, Einwilligung, Aufbewahrung/Löschung, Zugriff, Datenschutzanforderungen, Kostenbudget und welche Aktionen der Begleiter vorschlagen darf. Konkrete Bestätigung bleibt verbindlich.
9. **Tarife und Handoff-Unterlagen:** Finale oder bewusst vorläufige Featurematrix/Quoten kennzeichnen; Dokumentkonflikte und fehlende Originalreferenzen offenlegen. Aktuellen geprüften Code samt Lockfile versioniert bereitstellen; private Daten separat halten.

Nicht alle UI-Details müssen vorab erneut entworfen werden. Navigation, semantische Themes, stabile IDs, Eventfelder und bestehende Dialogabläufe liefern bereits eine konkrete Grundlage.

## 13. Bewusst spätere technische Entwicklerentscheidungen

Innerhalb der zuvor festgelegten fachlichen und Datenschutzgrenzen sollte der spätere Entwickler entscheiden:

- Backend-/Datenbank-/Hosting- und Auth-Technik, Speicherlayout, APIs und Transaktionsstrategie; keine vorzeitige Festlegung nur aus dem Prototyp ableiten.
- Analysejob-Verarbeitung, Queue/Worker, Caching/Invalidierung, Indizes und effiziente Datenstrukturen für große Chatbestände.
- Parserbibliotheken und technische Matching-Implementierung **nach** Festlegung der fachlichen Identitäts-/Konfliktregeln.
- Validierungsschema, API-Versionierung, Migration/Rollback und sichere Verbindung der heutigen Repositorygrenzen mit echten Daten.
- LLM-Anbieter/Modell, Retrieval, Prompt-/Tool-Implementierung, Monitoring und technische Schutzmaßnahmen anhand erlaubter Daten, Qualität und Budget.
- Geeignete Test-/Browser-/CI-Werkzeuge, Komponentenaufteilung und messbare Performanceoptimierungen. Bestehende React-Struktur und Tokenverträge können weiterverwendet werden.
- Deployment-/Betriebsdetails, Observability, Backupverfahren und technische Abrechnungseinbindung nach den Produktentscheidungen.

Analysebedeutungen, Confidence-Politik, erlaubte Datenweitergabe, Tarifversprechen und Erfolgskriterien sind dagegen keine stillschweigenden Implementierungsentscheidungen des Entwicklers.

## 14. Aktueller Teststatus

Ergebnisse der **für diese Bestandsaufnahme erneut ausgeführten** vorhandenen Skripte:

| Prüfung | Befehl | Ergebnis |
|---|---|---|
| TypeScript | `pnpm run typecheck` | **Bestanden**, Exit 0; `tsc --noEmit`. |
| Build | `pnpm run build` | **Bestanden**, Exit 0; zusätzlicher Typecheck und Vite-Build, 1.976 Module, Vite-Buildzeit 6,96 s. |
| Öffentliche Tests | `pnpm run test` | **235/235 bestanden**, elf Dateien, Exit 0; 34,38 s. |
| Legacy-/Characterization-Tests | `pnpm run test:legacy` | **57/57 bestanden**, vier Dateien, Exit 0; 20,29 s. Private Referenz war lokal verfügbar. |
| Privacy Check | `pnpm run check:privacy` | **Bestanden**, Exit 0; 95 Quelldateien, drei Builddateien und 13.620 private Text-/Fragmentvarianten lokal geprüft. Keine privaten Inhalte ausgegeben. |

Der Build erzeugte `index-DQKofEQd.js` mit **422,04 kB / 131,33 kB gzip** und `index-BcCqdQ6M.css` mit **50,24 kB / 8,39 kB gzip**, außerdem `index.html` und die Lucide-Lizenzhinweise. Es wurden keine Baselines geändert.

**Dokumentierte Startstörung:** Die ersten pnpm-Aufrufe für Typecheck, Build und öffentliche Tests scheiterten vor Beginn des jeweiligen Skripts an `GET https://registry.npmjs.org/pnpm: fetch failed` innerhalb der Netzwerk-Sandbox. Nach erneutem Aufruf mit freigegebenem Zugriff starteten dieselben Skripte und bestanden. Keine Code-, Dependency- oder Testreparatur war nötig. Die späteren Legacy-/Privacy-Läufe bestanden ebenfalls. Die fehlende Git-Revision (`git rev-parse --verify HEAD`) ist der oben dokumentierte Versionsverwaltungsstand, kein TypeScript-/Testfehler.

### Was die Tests absichern — und was nicht

- Öffentliche Adapter-/Speichertests: stabile Identität, Duplikate, Chat-Isolation, unresolved, Rohbackup, v1/v2-Migration, leere/beschädigte Daten und Schreibkonflikte.
- Navigation/Interaktionen: 33 Ziele, sieben unavailable, Guards/Paywall, Kontext/Eventfelder, Dashboardreihenfolge, Reload, Ausschluss/Wiederaufnahme, Readerfokus/Rückwege und Zustände.
- Analysen: 26 Renderer, sichtbare Referenzzahlen, Personen-/Belegzuordnung und Methodik; **keine fachliche Formelvalidierung**.
- Schritt 6 und Designkorrekturen: Zeitraumvertrag, Mock-Aktionen/Bestätigung/Isolation, UX-Exportinhalte, Themes/Tokenkontraste, Listen/Timeline, Dashboard-Snapshots, dynamische Tarifzahlen, Themenrückweg und Chart-Pointer-/Tastaturzweige.
- Legacy: unveränderte Quelle/Hash, Kernflows, sichtbare Werte, alle 33 alten Evidence-Originalsprünge, vollständige lokale Extraktion und ausdrücklich getrennte Beobachtung unerwünschter Altfehler.

Es gibt weder einen aktuellen Produktions-E2E-Nachweis mit echten Import-/Backend-/LLM-Daten noch eine nachgewiesene vollständige Code-Coverage. jsdom simuliert unter anderem native Dialogmethoden und prüft kein tatsächliches Browserlayout. Der Privacy Check untersucht definierte Pfade/Dateien und bekannte private Textvarianten; er ist keine allgemeine Datenschutz- oder Sicherheitszertifizierung.

**Browsernachweis:** Die jüngste vorhandene Baseline `tests/baselines/DESIGN_CORRECTIONS_2_BROWSER_BASELINE.md` dokumentiert am **04.10.2026** beide Themes bei **390 × 844**, **430 × 932** und **1024 × 768** über den Produktionspreview: jeweils 33 Ziele, sieben unavailable, keine gemeldeten Seitenüberläufe oder Konsolenwarnungen/-fehler. Native Touchhardware, vollständige Screenreader-Abnahme und ein gespeicherter Pixelvergleich sind damit nicht nachgewiesen. Diese sechs Browserläufe wurden im Rahmen dieser Bestandsaufnahme **nicht erneut ausgeführt**.

## 15. Exakter lokaler Startbefehl

PowerShell, mit der in dieser Umgebung vorhandenen Runtime und den bereits installierten Abhängigkeiten; keine globale Node-/pnpm-Installation nötig:

```powershell
Set-Location -LiteralPath 'C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen'
& 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' '.\node_modules\vite\bin\vite.js' --host 127.0.0.1 --port 5174 --strictPort
```

Dann `http://127.0.0.1:5174/` öffnen. `Ctrl+C` beendet den Server. `--strictPort` bricht bei belegtem Port ab, statt unbemerkt einen anderen Storage-Origin zu verwenden. Der Befehl umgeht auch die beim Audit beobachtete pnpm-Registry-Auflösung. Mit eingerichtetem Node-/pnpm-PATH alternativ: `pnpm run dev --host 127.0.0.1 --port 5174 --strictPort`.

## Empfohlene nächste Arbeitspakete

1. **Übergabestand konsolidieren:** Dieser Istbericht, aktuelle Dokumentpriorität, fehlende Referenzen und ein geprüfter öffentlicher Versionsstand; verbindlichen MVP-Umfang und Abnahmekriterien festlegen.
2. **Fachliche Daten-/Rechenverträge schließen:** Relevante Grundmenge, Zeit/Identität/Dyade, LD-01/30/31, Korrekturwirkung und kleine freigegebene Sollbeispiele. Noch undefinierte Analysen zurückstellen.
3. **Produktive Datenbasis und Import aufbauen:** Architektur innerhalb der Datenschutzgrenzen, echte Quellenverarbeitung, Identität, Add/Replace und Erhalt lokaler Nutzerentscheidungen.
4. **Deterministische Analyse plus Reanalyse liefern:** Zeitraum, vollständige Evidence, Korrekturjournal/Undo und Abhängigkeiten gemeinsam mit echten Kennzahlen implementieren und abnehmen; danach hybride Gesprächs-/Nacht-/Phasenlogik.
5. **Semantische Funktionen und Begleiter anbinden:** Evaluationsbestand/Confidence, sichere LLM-Suche, Life Events und vollständiger Raincheck-Review; bestätigungspflichtige Aktionen beibehalten. Weitere unavailable-Funktionen nur nach eigener Definition.
6. **Produktionsumfang vervollständigen:** Fehlende UX-/Profil-/Sprach-/Datenschutzfunktionen, finalisierte Tarife und tatsächliche Konten-/Abrechnungseinbindung gemäß priorisiertem Zielumfang.
7. **Gesamtabnahme durchführen:** Reale Import-/Korrektur-/Updateketten, fachliche Qualität, Privacy/Security, Performance, aktuelle Browsermatrix, native Touchgeräte, Accessibility und Nutzerstudie; erst danach Produktionsfreigabe.

Diese Reihenfolge ist eine Empfehlung. **Keines dieser Arbeitspakete wurde im Rahmen der Bestandsaufnahme begonnen.**

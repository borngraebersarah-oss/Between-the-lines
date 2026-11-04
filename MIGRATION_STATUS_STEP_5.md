# Abschlussbericht – Schritt 5

Stand: 04.10.2026. Die vier beauftragten Produktkorrekturen und alle 26 vorhandenen `legacy-reference`-Analyseansichten sind in React/TypeScript umgesetzt. Die sieben `unavailable`-Features bleiben ohne erfundene Ergebnisse. **Schritt 6 wurde nicht begonnen.** Keine neue Analyseformel, echte Reanalyse, LLM-Integration oder visuelle Modernisierung.

## 1. Produktkorrekturen aus dem Schritt-4-Review

| Korrektur | Umsetzung |
|---|---|
| Technische Demo-/Synthetic-Bezeichnungen | Aus Home, Dashboard, Reader, Eventansichten und Importtexten entfernt. `PROTOTYPE` bleibt global sichtbar. Intern bleiben `provenance: synthetic`, stabile Fixture-IDs, Quellenherkunft und simulierte Metadaten erhalten. Import/Datenverwaltung tragen zentral „Im Prototyp simuliert“. |
| Pflichtfeld Eventtitel | Anlage und Bearbeiten weisen leere und reine Whitespace-Titel inline ab. Kategorie, Daten, Ort, Notiz und Icon bleiben im Entwurf. Kein erfundener Fallbacktitel; gültige Titel werden getrimmt gespeichert. |
| Kuratierter Icon-Picker | Zehn eigene SVG-Line-Icons: Users, Plane, Calendar, Heart, Sparkles, Message-Heart, Zap, Briefcase, Utensils, Activity. Keine Uploads oder zufällige Wahl. `iconId` und `iconSource` unterscheiden Kategorie-Default und explizite Nutzerwahl. Auswahl übersteht Kategorieänderung, Bearbeiten und Reload. |
| Schlafrhythmus je Person | Optionales `SleepProfile` je stabiler ParticipantId, mit Schlafenszeit/Aufstehzeit und unbekanntem Zustand. Leere Werte bleiben unbekannt; einzelne Angaben sind möglich. Formular, Domain, Persistenz und Analysevertrag sind angepasst. Tatsächliche Aktivität hat Vorrang. Die gespeicherten Analyseergebnisse werden dadurch noch nicht neu berechnet. |

## 2. Migrierte Analysefunktionen

| Familie | Unveränderte Feature-IDs |
|---|---|
| Rhythmus | `prime`, `weekday`, `hotcold`, `silence`, `streak`, `peak`, `pulse`, `deepdive` |
| Gesprächsaustausch | `move`, `response`, `firstlast`, `questions` |
| Textmenge und Emojis | `texting`, `longstory`, `emoji` |
| Sprache | `words`, `humor`, `names` |
| Themen | `topics`, `topicstarts`, `eras` |
| Between the Lines | `social`, `future`, `futuretrend`, `rituals` |
| Ereignisse | `lifeevents` |

Der interne Rendererzuschnitt ändert weder die sechs sichtbaren Analysekategorien noch den Featurekatalog und dessen Planstatus. Gesperrte Funktionen bleiben sichtbar und öffnen die bestehende Planvorschau.

Weiterhin unavailable: **`qdyn`, `flow`, `closeness`, `mineours`, `opening`, `report`, `changed`**. Auch Premium erzeugt dafür keine Ergebnisse.

Funktionsdetails:

- Prime Time verwendet absolute Stundenwerte; Lieblingstag benennt den Durchschnitt je tatsächlich vorkommendem Wochentag.
- Hot & Cold zeigt Tagesdatum/Nachrichtenzahl und gespeicherte Phasenanteile. „Ereignisse prüfen“ nutzt den Schritt-4-Dialog. Deep Dive vergleicht die vorhandene Phase mit Vor-/Folgewoche, ohne neue Phasenerkennung. Nicht hinterlegte Durchschnittswerte oder Folgewochen-Personenanteile werden nicht erfunden.
- Pulse trennt Nachrichten, Wörter, aktive Tage und Personenanteile. Streak bleibt eine Serie aktiver Kalendertage mit „mindestens 70 Tage“ an der Importgrenze.
- Longest Silence startet wie Legacy im bereinigten Modus; vollständige und effektive Pausen bleiben getrennt auswählbar. Vorherige/nachfolgende Nachrichten sind lesbar und über feste IDs anklickbar. Schlafprofile erscheinen als weicher Kontext.
- First Move bedeutet neuen Austausch nach einer Pause; Topic Starts bleibt ein anderes Feature. First & Last zeigt beide Nachtübergangsrichtungen. Fast Responder verwendet den gespeicherten Median echter Antwortvorgänge, keine neue Zeitregel.
- Long Story Short, Future-Talk-Zeitachse, Gesprächsstartbeispiele und Ritualzitate öffnen den Chatreader. Die öffentliche Nachricht wird exakt fokussiert. Analyseauswahl, Chartzustand, Rückfokus und Scrollposition bleiben bei Rückkehr erhalten.
- Fragen unterscheiden absolute Fragen, Fragen je 100 eigene Nachrichten und Nachrichten mit Fragen. Social Signals und Future/Raincheck besitzen getrennte Beleggruppeneinstiege.
- Could/Will hat je Person eine eigene 100-%-Basis; 67/33 und 36/64 werden getrennt dargestellt. Future Talk und Planänderungen erhalten ihre verschiedenen Bedeutungen und Nenner.
- Life Events nutzt direkt die persistenten Schritt-4-Events, sortiert die Zeitleiste, zeigt Notizen/Icons und öffnet vorhandene Detail-/Bearbeitungsaktionen. Keine KI-Suche vorgezogen.

## 3. Architektur und Dateien

Gemeinsame Bausteine: `FeaturePage`, `InsightCard`, `PersonComparison`, `PersonLabel`, `ComparisonTable`, `MetricRow`, `ChartContainer`, `SeriesChart`, `ShareBar`, `EvidenceEntry`, `Quote`, `SleepContext`, `MethodologySection` und die bestehenden Status-/Dialogkomponenten.

`AnalysisRepository` liefert einen chat- und featurebezogenen Snapshot. Die fachlich unterschiedlichen Ergebnisgruppen bleiben getrennt. UI-Renderer führen keine Klassifikation, Phasenerkennung oder Reanalyse aus. Loading, Empty, Error mit Retry und Insufficient Data sind abgedeckt; verspätete Ergebnisse eines anderen Chats werden verworfen. Gemeinsame Schritt-4-Aktionen bleiben auch ohne fertiges Analyseergebnis erreichbar.

Personenvergleiche zeigen kleine lokale Profilbilder oder Initialen. Charts liefern Einheiten, Achsen und Werte über Klick/Fokus/Hover sowie mobile Datenpunktauswahl und Vor-/Zurück-Buttons. Farben, Flächen, Größen und Typografie nutzen den semantischen Tokenvertrag. Alle drei Theme-IDs bleiben optisch identisch; kein sichtbarer Theme-Switch.

Neu erstellt:

```text
src/analysis/
  FeaturePage.tsx, components.tsx, contracts.ts, registry.ts, methodology.ts
  rhythm.tsx, exchange.tsx, texting.tsx, language.tsx
  universe.tsx, between.tsx, lifeEvents.tsx
src/domain/eventIcons.ts
src/config/eventIcons.ts
src/components/EventIcon.tsx
src/data/fixtures/analysisContent.ts
src/data/fixtures/analysisReference.json
src/data/repositories/analysisRepository.ts
scripts/analysis-reference-projection.mjs
scripts/extract-analysis-reference.mjs
tests/integration/analyses.test.tsx
tests/characterization/analysis-reference.test.js
tests/browser/step5-analyses.cua.js
tests/baselines/STEP5_BROWSER_BASELINE.md
MIGRATION_STATUS_STEP_5.md
```

Geändert:

```text
src/app/App.tsx, AppShell.tsx, InteractionsContext.tsx
src/domain/models.ts, interactions.ts
src/data/persistence/interactionStorage.ts
src/data/fixtures/interactionFixtures.ts, shellFixtures.ts
src/components/OverlayHost.tsx
src/interactions/ContextForm.tsx, EventDialogs.tsx, EvidenceDialogs.tsx, ImportDialogs.tsx
src/screens/FeatureDestination.tsx, Dashboard.tsx, Home.tsx, ChatReader.tsx
src/theme/themes.ts
src/styles/app.css
scripts/check-private-boundary.mjs
tests/integration/interactions.test.tsx, interactionStorage.test.ts
tests/integration/navigation.test.tsx, theme.test.tsx
tests/browser/step4-interactions.cua.js, README.md
README.md, MIGRATION_NOTES.md, KNOWN_LEGACY_DEFECTS.md
```

Ein lokales Inspektionsskript unter dem ignorierten `private-test-data/` diente ausschließlich der Referenzprüfung. Der private Originalprototyp, dessen Hash, `AGENTS.md`, `CODEX_START_HERE.md`, `docs/`, Featurekatalog und Abhängigkeitsversionen blieben unverändert. `dist/` wurde neu gebaut und bleibt ignoriert. Kein Commit/Push; das Repository besitzt weiterhin keinen initialen Commit, deshalb erscheinen auch frühere Dateien als untracked.

## 4. Persistenz und Modelle

| Schlüssel | Behandlung |
|---|---|
| `zdz:chat-interactions:v2:<encodeURIComponent(chatId)>` | Aktiver, validierter Chatbestand: Karten, Kontext mit individuellen Schlafprofilen/Fotos, Events mit Iconwahl, Quellenmetadaten und Ausschlussflags. |
| `zdz:chat-interactions:v1:<encodeURIComponent(chatId)>` | Nur als Fallback gelesen, wenn v2 fehlt. Bleibt unverändert erhalten. |
| `zdz:demo-library:v1` | Vorhandener Katalog der simuliert angelegten Chats; keine neue Erkennung/Importlogik. |
| `zdz:preferences:theme:v1` | Unveränderter separater Präferenzvertrag. |
| `zwischen_den_zeilen_proto_v05` und vorhandene Backup-/Migrationsschlüssel | Von der React-Laufzeit weiterhin weder überschrieben noch gelöscht oder automatisch einem öffentlichen Chat zugeordnet. |

v1 wird nach vollständiger Validierung zunächst nur im Speicher in v2 überführt. Erst eine erfolgreiche Nutzeraktion schreibt v2. Das gemeinsame Wertepaar bleibt als `legacySharedSleep` archiviert; beide individuellen Profile starten unbekannt. Alte Kategorie-/Emoji-Icons erhalten einen definierten kuratierten Wert. Bekannte unveränderte technische Fixture-Titel werden neutral bezeichnet; Nutzereingaben bleiben erhalten.

Leere Listen bleiben leer. Fremde/doppelte Personen-IDs, ungültige Zeiten, unbekannte Eventicons, kaputte Datensätze oder fehlende Eventtitel erzeugen Fehler statt erfundener Ersatzdaten. Originaldaten bleiben lesbar erhalten. Revision/Readback und Prüfung konkurrierender v1-/v2-Änderungen schützen vor erkannten veralteten Schreibständen. LocalStorage bleibt ohne Transaktion über mehrere Schlüssel; der bestehende Katalog-/Chat-Grenzfall und fehlende Live-Synchronisierung bleiben dokumentierte technische Grenzen.

Domainergänzungen: `EventIconId`, `InteractionEvent.iconSource`, individuelle `ChatContext.sleepProfiles`, `ChatInteractionState.schemaVersion = 2`, archivierter Legacy-Schlafhinweis und Reader-Rückkehrscrollposition. `AnalysisInput` enthält `chatId`, `featureId`, individuelle Schlafprofile und die Policy `actual-activity-overrides-typical-sleep`. Der Referenzadapter markiert ausdrücklich `sleepHintsApplied: false`.

## 5. Referenzwerte und bekannte Widersprüche

Die öffentliche Zahlenprojektion übernimmt nur erlaubte Zahlen-/Datums-/Dauerwerte. Private Nachrichten, Namen, Spitznamen, Orte, Notizen und persönliche Ritualgeschichten werden nicht übernommen. Öffentliche Ersatztexte haben eigene feste IDs; die gespeicherten Kennzahlen wurden nicht aus ihnen berechnet. Diese Trennung ist in jeder Methodik erreichbar.

| Bereich | Erhaltener Stand / offener Befund |
|---|---|
| Grundmenge | 11.703 Rohdatensätze, 11.651 Dashboard/Texting, 11.657 allgemeine Referenzmetadaten. Keine künstliche gemeinsame Filterregel. |
| Peak | Peak Day 652; Tagesreihe am selben Datum 653. Rollierendes 24-Stunden-Fenster 696. Weitere Top-Tage weichen ebenfalls von der Tagesreihe ab. |
| Pulse | Finaler v0.7-Kopf: 11.651 Nachrichten, 147.073 Wörter, 70/70 aktive Tage. Wiederverwendete ältere Wochenreihe stammt aus 11.045/143.779/65; nicht neu zusammengeführt. |
| Fragen | 1.770 insgesamt, A 1.131, B 639; 22,7/9,6 je 100 eigene Nachrichten. |
| Antwortzeiten | Median jeweils 1 Minute, 2.972/2.984 Vorgänge. Verteilungswerte unter 5 Minuten und zusätzliche 5-Minuten-Quote widersprechen sich bereits im Legacy. |
| Deep Dive | Vorher 1.727/23.189, Phase 308/3.068, danach 951/11.853 Nachrichten/Wörter; jeweils 7/7 aktiv. Gespeicherte Cold Phase widerspricht der nach alten Ausschlüssen verbleibenden Hot-&-Cold-Aussage. |
| Future Talk Trend | Stichprobe 20; Gesamtanteile 45/55; eigene Could/Will-Basen 67/33 und 36/64. Nicht mit den 64/46 Future-Talk-Impulsen aus What’s Next? gleichgesetzt. |

Keine pixelgenaue Gleichheit behauptet: zugängliche gemeinsame SVG-Charts und responsive Karten ersetzen Inline-Templates; private Inhalte sind ersetzt. Die bisherige Palette, Karten-/Navigationssprache und Themeparität bleiben erhalten. Der Deep-Dive-Kontext behauptet keine Überschneidung eines beliebigen Events, sondern zeigt nur tatsächlich zeitlich passende bestätigte Treffen. Dieser unerwünschte Legacy-Fallback ist als LD-31 dokumentiert.

## 6. Tests und tatsächliche Ergebnisse

| Prüfung | Ergebnis des abschließenden Laufs |
|---|---|
| `pnpm typecheck` | **Bestanden**, strict einschließlich `noUncheckedIndexedAccess` und `exactOptionalPropertyTypes`. |
| `pnpm build` | **Bestanden**, Typecheck plus Vite-Produktionsbuild; 72 Module. |
| `pnpm test` | **155/155 bestanden**, sieben Dateien. |
| `pnpm test:legacy` | **57/57 bestanden**, vier Dateien; privater Originalhash unverändert. |
| `pnpm check:privacy` | **Bestanden**: 71 Quelldateien, drei Builddateien, 13.620 lokal geprüfte private Text-/Fragmentvarianten; keine Inhalte ausgegeben. |
| Reale Browserregression | **Bestanden** bei 390×844 und 430×932; keine horizontalen Überläufe und keine Warnungen/Fehler im finalen Konsolenabruf. |

Öffentliche Tests: typisierte vollständige Rendererregistrierung, alle 26 Referenzziele und ihre Kernwerte, sieben unavailable, Personen-/Fotobezug, Chartauswahl, Methodik, alle Quelllinks der zentralen Zitatansichten, genaue MessageId und Rückkehr, gruppierte Belegaktionen, unveränderte Kennzahlen nach Ausschluss, Life-Event-Verknüpfung, Schlafvertrag, Fehler/Loading/Empty/Insufficient, verspätete Antworten und weiter erreichbare Schritt-4-Aktionen ohne Analyseergebnis. Eigene Tests sichern Pflichtfeld/Entwurfserhalt, Icondefaults/Nutzerwahl/Reload, Schlafprofil-Isolation und kontrollierte v1-Migration.

Legacy-Tests: vollständige erlaubte Projektion von `R`, sichtbare finale Ansichten aller 26 Features, späte v0.7-Overrides, Stundenserie und absichtlich nicht vereinheitlichte Widersprüche. Die bestehenden Tests sichern zusätzlich die 33 ursprünglichen Evidence-Ziele im privaten Nachrichtenbestand; private Belegtexte gelangen dadurch nicht ins Frontend.

Browser: je Breite 33 Ziele, 15 interaktive Charts mit überprüften Detailwerten und mindestens 44×44 großen Steuerungen; je sieben direkte Zitatsprünge mit exakter Nachricht/Rückfokus. Zusätzlich Paywall, konkreter Hot-&-Cold-Datenpunkt, Ereignisprüfung, Belegausschluss → Reload → Undo, Titelvalidierung, Iconwahl/Bearbeiten/Reload, getrennte Schlafzeiten, Escape, interne Scrollsperre und Chat-Isolation. Messwerte stehen in `tests/baselines/STEP5_BROWSER_BASELINE.md`. Geprüft wurde Chromium mit mobilen Viewports, kein physisches Mobilgerät.

Zusätzlich wurde der fertige Produktionsbuild über `vite preview` bei **beiden Größen vollständig** geprüft: jeweils alle 33 Ziele, 15 Charts und sieben direkte Zitat-/Reader-Rückwege bestanden; Konsolenabruf ohne Warnungen/Fehler. Verifiziertes Buildasset: `index-Dlg5rUO8.js`.

## 7. Ausdrücklich weiterhin offen

**Echte Reanalyse fehlt.** Ausschlüsse, Wiederaufnahme, Kontext- und Schlafprofiländerungen werden gespeichert, ändern die Referenzkennzahlen aber nicht. Kein neuer Erfolg oder kausaler Analysebefund wird daraus abgeleitet.

**Import bleibt simuliert.** Add/Replace ändern nur Quellenmetadaten. Keine Parserlogik, echte Deduplizierung, Teilnehmererkennung oder Nachrichtenverarbeitung. Neue Chats erhalten keine erfundene fertige Analyse.

Weitere offene Produktpunkte: vollständige paginierte/gefilterte Belegmengen, globaler Analysezeitraum, Gruppen-/Dyadenauswahl, Korrekturjournal, echte Schlafkontext-Berechnung, Raincheck-Review und Plantracking. Beleglisten bleiben öffentliche Beispielgruppen; unresolved bleibt ausdrücklich ungelöst.

Technische Einschränkung im Entwicklungsbetrieb: Beim Ändern gemeinsam importierter Dateien im laufenden Vite-Server trat kurzzeitig eine inkompatible React-Context-Instanz auf (`InteractionsProvider fehlt`). Fast Refresh invalidierte anschließend die betroffenen Module; ein vollständiger Browserreload stellte den regulären Zustand wieder her. Die anschließende vollständige Produktionsprüfung bei beiden Größen war fehlerfrei. Eine weitergehende Trennung der Exportgrenzen zur Verbesserung dieses Hot-Reload-Verhaltens bleibt offen; daraus wird kein Fehler im regulären Start-/Navigationsablauf behauptet.

**Schritt 6 nicht umgesetzt:** Begleiterdialoge, bestätigungspflichtige Aktionen, echte LLM-Life-Event-Suche mit mehreren Treffern/Belegen/Confidence, Entwickler-/UX-Testwerkzeuge. Keine Backend-, Authentifizierungs- oder Deploymentarbeit. Sichtbare Theme-Auswahl und optische Modernisierung bleiben eine spätere eigene Phase.

## 8. Exakter lokaler Start

Mit Node 24+ und pnpm 11.19.0:

```powershell
Set-Location -LiteralPath 'C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen'
pnpm dev --host 127.0.0.1
```

In dieser Umgebung ohne globale pnpm-Installation:

```powershell
Set-Location -LiteralPath 'C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen'
$env:PATH = 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
& 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs' run dev --host 127.0.0.1
```

Die vom Terminal ausgegebene lokale URL öffnen (normalerweise `http://127.0.0.1:5173/`; bei belegtem Port wählt Vite den nächsten). Der Testlauf verwendete ausdrücklich Port 5174 mit `--strictPort`. Browserpersistenz ist portabhängig. Der private Referenzserver wird für die React-App nicht benötigt.

**Stopp nach dem vollständigen Schritt-5-Paket. Schritt 6 erst nach ausdrücklicher Freigabe.**

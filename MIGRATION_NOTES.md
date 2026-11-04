# Migrationsplan – Zwischen den Zeilen

Stand: 04.10.2026 · Funktionsmigration abgenommen. Die anschließend ausdrücklich freigegebene Phase Design & UX Modernization ist abgeschlossen; Bericht: `MIGRATION_STATUS_DESIGN_MODERNIZATION.md`. Keine Folgephase begonnen. Die nachstehenden älteren Schritte dokumentieren ihre damaligen Freigabegrenzen; maßgeblich für die aktuelle Gestaltung ist Abschnitt 15.

## 1. Auftrag und geprüfte Grundlage

Ziel ist eine schrittweise Überführung nach Vite, React und TypeScript, bei der vorhandene Ansichten, Interaktionen, Daten und Nutzerkorrekturen nachvollziehbar erhalten bleiben. Nach Abnahme von Schritt 4 wurden die 26 vorhandenen Analyseansichten und vier Produktkorrekturen freigegeben: bereinigte UI-Bezeichnungen, verpflichtende Eventtitel, kuratierte Eventicons und optionale Schlafprofile je Person. Diese Nutzerfreigabe erweitert den früheren Umfang für Schlafprofile ausdrücklich. Neue Analyseformeln, echte Reanalyse, echter Import, LLM-Aufrufe und visuelle Modernisierung gehörten nicht zum damaligen Schritt-5-/Schritt-6-Auftrag. Die anschließend freigegebene Designphase erweitert ausschließlich dessen visuelle Grenze. Die aktuelle Nutzerfreigabe erweitert den Umfang um die UX-Korrekturen und Schritt 6. Diese damalige Begrenzung wurde nach Abschluss der Funktionsmigration durch die ausdrückliche Freigabe für Design & UX Modernization erweitert (Abschnitt 15).

Das Handoff liegt unter:

```text
C:\Users\sborn\OneDrive\Desktop\Zwischen den Zeilen\ChatGPT Codex\Zwischen_den_Zeilen_Codex_Handoff_CORE_v1\Zwischen_den_Zeilen_Codex_Handoff_v1
```

Der aktuelle Arbeitsordner `C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen` enthielt vor dieser Planung nur `.git`. Es gibt dort keine bestehende Frontend-Struktur, die weiterverwendet werden müsste. Der Plan liegt bewusst im aktuellen Arbeitsordner; das Handoff wurde nicht verschoben oder verändert.

Vollständig gelesen, in der gewünschten Reihenfolge: zuerst `AGENTS.md` und `CODEX_START_HERE.md`, anschließend sämtliche zwölf Dateien unter `docs/`: `AI_COMPANION_SPEC.md`, `ANALYSIS_RULES.md`, `DATA_MODEL.md`, `DESIGN_SPEC.md`, `FEATURE_MATRIX.md`, `IMPORT_PERSISTENCE.md`, `OPEN_DECISIONS.md`, `PRODUCT_SPEC.md`, `REFERENCE_MAP.md`, `SECURITY_PRIVACY.md`, `UX_RULES.md` und `UX_TEST_PLAN.md`. Ergänzend wurden `README.md`, `.gitignore`, `.env.example` und die relevanten Codebereiche des Prototypen geprüft. Der referenzierte Ordner `reference/` ist in diesem Handoff nicht enthalten.

Für fachliche Vorgaben gilt die im README genannte Rangfolge: `AGENTS.md` → thematische Spezifikation → Prototyp → ursprüngliche Referenzen. Die Dokumente beschreiben Anforderungen; sie belegen nicht automatisch deren Implementierung. Widersprüche und Lücken werden unten ausdrücklich ausgewiesen.

Referenzdatei: `prototype/index.html`, 1.756.615 Bytes, 477 Zeilen einschließlich abschließender Leerzeile. SHA-256:

```text
2dfd72e3251dd5a8fb0a4c971dd961a9eb0b5fe8fc33accad33e3abbdeb9bc2b
```

## 2. Browserprüfung und tatsächlicher Bestand

Die unveränderte HTML-Datei wurde über einen ausschließlich an `127.0.0.1` gebundenen lokalen Server im Browser ausgeführt. Geprüft wurden die normale Browseransicht sowie mobile Viewport-Einstellungen von 390 × 844 und 430 × 932 px. Änderungen während der Prüfung betrafen nur den separaten lokalen Browserzustand dieses Testursprungs.

| Geprüfter Ablauf | Beobachtung |
|---|---|
| Home → Chat → Dashboard → Analyse → Home | Globale Navigation hat drei Einträge; im Chat sechs. Home verlässt den Chatkontext. Alle sechs Analysekategorien sind als Raster erreichbar. |
| Dashboard anpassen | Dialog mit Kartenwahl sowie Auf-/Ab-Steuerung geöffnet. Speicherung und Reihenfolge sind im Code vorhanden; sämtliche Kombinationen wurden nicht durchgespielt. |
| Free → gesperrte Funktion → Basic-Vorschau | Paywall öffnet; ausdrücklich als Prototyp gekennzeichneter Planwechsel öffnet die Funktion. Premium wurde zusätzlich über das Testpanel aktiviert. |
| Hot & Cold → Ereignisse prüfen | Bestätigte Treffen, Notizen und Aktionen für Kontext bzw. Ausschluss sind vorhanden. Diagramm und Kernergebnisse beruhen auf festen Daten. |
| Fragen → Belege → Ausschluss → Reload | Drei Beispielbelege sichtbar. Ausschlussmarkierung bleibt nach Reload erhalten; die Fragenzahl bleibt unverändert bei 1.770. |
| Beleg wieder einbeziehen → Originalnachricht → zurück | Wieder-Einbeziehen funktioniert. Chatviewer fokussiert die zum Beleg passende Nachricht; Rückkehr zur Funktionsseite funktioniert. |
| Kontext öffnen und unverändert speichern | Editierbare Felder, gemeinsamer Schlafrhythmus und Bildauswahl vorhanden. Speichern schließt den Dialog und zeigt eine Erfolgsmeldung. |
| Datenverwaltung → neue Daten → WhatsApp-Export | Quellenzähler steigt von eins auf zwei, ohne Datei auszuwählen. Das ist eine Simulation; echte Nachrichten werden nicht importiert. |
| Neuer Chat → Text einfügen → Teilnehmer → Kontext | Wizard ist bedienbar, verwendet aber bereits vorgegebene Teilnehmer und Daten. Kein Textparser und keine echte Dyadenauswahl. |
| Begleiter → Schnellfrage | Lokale, vorformulierte Antwort wird dem Dialog hinzugefügt. |
| Life Events → Suche „Urlaub“ | Zwölf Treffer mit Quell- und Übernahmebuttons. Treffer entstehen aus einer lokalen Wortsuche; Confidence fehlt. Ereignisformular mit Kategorie, Titel, Von/Bis, Ort und Notiz geöffnet. |
| Testpanel: wenig Daten / Loading / Importfehler | Hinweisseite, Skeleton-Zustand und Fehlerseite erscheinen. „Erneut versuchen“ führt zur Importauswahl. |
| Pro / Profil | Planvorschau und Einstellungen erreichbar; Rechtsinhalte sind Platzhalter, mehrere Profileinträge haben keine Aktion. |
| `?test=1` | Testmodus ist vorhanden, aber blockiert: Start-, Aufgaben-, Bewertungs- und Ergebnisoverlay werden gleichzeitig angezeigt. |

Diese Prüfung ist eine Bestandsaufnahme, keine vollständige Regression aller 33 Funktionen. Nicht praktisch abgeschlossen wurden insbesondere Event-Löschung, Bildimport, alle Diagramm-/Zitatinteraktionen, sämtliche Rückwege und die UX-Testexporte. Echte Import-, Reanalyse- oder LLM-Funktionen können mit diesem Stand nicht verifiziert werden.

## 3. Aktueller Seiten- und Komponentenbaum

```text
prototype/index.html
├── drei Style-Blöcke: Basis, UX-Test, v0.7-Erweiterungen
├── Topbar, neun umgeschaltete <section>-Ansichten, BottomNavigation
│   ├── Home: Chatbibliothek und Importstart
│   ├── Dashboard: Karten, Konfiguration, Kontext, Ereignisse, Daten
│   ├── Analyse: sechs Kategorien und 33 registrierte Funktionen
│   ├── Detail: gemeinsame Hülle + großer featureabhängiger Renderer
│   ├── Begleiter: Premiumzugang, Schnellfragen, lokaler Dialog
│   ├── Pro: Free/Basic/Premium-Vorschau
│   ├── Profil: Sprache, Hilfe-/Datenschutzbereiche, Rechtliches
│   ├── Import: Quelle → Teilnehmer → Kontext → Dashboard
│   └── Chatreader: 90-Nachrichten-Fenster, Suche, früher/später, Fokus
├── Overlays
│   ├── Paywall, Info, Rechtliches, Kontext/Ereignisliste
│   ├── Dashboardkonfiguration, Ereignisdetail, Ereignisformular
│   ├── Phasenprüfung, Datenverwaltung, Pausenprüfung, Belegliste
│   └── Life-Event-Suche, Toast, Entwicklerpanel
├── Daten und Zustand
│   ├── CHAT_MESSAGES, EVIDENCE, R, F, CHAT_META
│   └── app, chatContext, lifeEvents, dataSources → localStorage
├── UX-Testmodus: sechs Aufgaben, Klickpfad, Zeit, Bewertung, JSON/CSV
└── spätere v0.7-Overrides: Kontext, Bilder, Detailansichten, Zitatsprünge
```

Die drei Script-Blöcke hängen über globale Variablen, `innerHTML`, Inline-Handler und nachträglich ersetzte Funktionen zusammen. Besonders relevant sind `renderDetail`, `contextFields`, `saveContextFromPrefix` und die Header-/Chatreader-Wrapper. Entscheidend für die Migration ist jeweils die zuletzt wirksame Implementierung, nicht die erste Definition. Versionsangaben sind gemischt: sichtbares Badge v0.5, Seitentitel v0.6, Erweiterungskommentar v0.7.

Der Featurekatalog `F` ist bereits ein brauchbarer Ausgangspunkt. Folgende Schlüssel bleiben als stabile Feature-IDs erhalten; mit `*` markierte Einträge zeigen derzeit nur die gemeinsame Platzhalteransicht:

| Kategorie | Vorhandene Feature-IDs und Namen |
|---|---|
| Your Chat Rhythm (9) | `prime` Prime Time; `weekday` Lieblingstag; `hotcold` Hot & Cold Phases; `silence` Longest Silence; `streak` Chat Streak; `peak` Peak Day; `pulse` Communication Pulse; `deepdive` Hot & Cold Deep Dive; `lifeevents` Life Events |
| Who Makes the Move? (5) | `move` Erster Move; `response` Fast Responder; `firstlast` First & Last; `qdyn` Question Dynamics*; `flow` Conversation Flow* |
| How You Text (3) | `texting` Texting Champion; `longstory` Long Story Short; `emoji` Emoji DNA |
| Your Language (4) | `words` Your Greatest Hits; `humor` Your Humor Code; `names` Name Game; `closeness` Closeness & Openness* |
| Your Chat Universe (4) | `topics` What We Talk About; `topicstarts` Who Brings It Up?; `eras` Your Eras; `mineours` From Mine to Ours* |
| Between the Lines (8) | `questions` Wer will mehr wissen?; `social` Social Signals; `future` What’s Next? / Raincheck; `opening` Opening Up*; `rituals` Our Rituals; `futuretrend` Future Talk Trend; `report` Between the Lines Report*; `changed` Something Changed* |

Damit existieren 26 spezifische Ergebnis-/Funktionsansichten und sieben Platzhalter. Eine Ergebnisansicht bedeutet hier nicht, dass ein Analysealgorithmus implementiert ist.

## 4. Bekannte Lücken und Konflikte vor der Migration

| Bereich | Konkreter Befund und Konsequenz |
|---|---|
| Berechnungen | `R` und zahlreiche Templates enthalten feste Ergebnisse. Rohdatenumfang 11.703, Dashboard 11.651 und `R.relevantMessages` 11.657 sind verschiedene Werte ohne durchgängige Herleitung. Im Tagesverlauf steht für den Peak 653, in der Peak-Ansicht 652. Als getrennte Referenzwerte dokumentieren; keine Formel oder Filterregel daraus erfinden. |
| Korrekturen | `toggleEvidence` speichert einen Boolean und rendert neu; `togglePauseExclusion` markiert eine Pause. Eine echte Neuberechnung und ein Korrekturjournal fehlen. Wieder-Einbeziehen ist vorhanden, allgemeines Undo nicht. |
| Vollständigkeit der Belege | Zehn Beleggruppen enthalten insgesamt 33 Referenzen, darunter nur drei Fragen. Vollständige Belegmengen, Paging, fachliche Filter, Confidence und Reklassifizierung fehlen. |
| Nachrichtenidentität | `EVIDENCE.idx` und Chatfokus verwenden Arraypositionen. Andere Zitate werden über Textanfang/-ende gesucht, Pausen über nächstgelegene Zeitstempel. Das kann bei Duplikaten, Änderungen oder mehreren Quellen falsch zuordnen. Eventbelege sind kopierter Text. |
| Chatgrenzen | Kontext, Ereignisse, Quellen, Dashboard und Korrekturen sind global gespeichert. Mara und Projektteam haben Metadaten, aber keinen eigenen Datenbestand; Analysen und Chatviewer greifen weiter auf dieselben Testdaten zu. |
| Zeitraum und Import | Globaler Zeitraumfilter fehlt. Hinzufügen/Ersetzen ändert nur Quellenmetadaten; Deduplizierung, echte Parser und Reanalyse fehlen. |
| Semantik | Life-Event-Suche ist Keyword-Scoring mit maximal zwölf Treffern; der Begleiter nutzt feste Antworten. Raincheck zeigt Beispiele, besitzt aber kein echtes Plantracking. Bestätigungsabläufe für zustandsändernde Begleiteraktionen sind noch nicht implementiert. |
| Events/Persistenz | `pending`/`confirmed` und `auto`/`user` weichen vom vorgeschlagenen Fachmodell ab. Verwerfen entfernt den Vorschlag statt einen Ablehnungsstatus zu speichern. Leere Event-/Quellenlisten werden beim Restore nicht übernommen. „Eigenes Event“ und „Eigene Events“ sind uneinheitlich. |
| Darstellung | SVG-Charts besitzen Achsen, aber keine vollständigen Touch-/Hoverdetails. Nicht jeder Chattext ist anklickbar. Avatare werden vor allem in Headern ergänzt; Schlafzeiten gelten gemeinsam statt je Person. DE/EN wechselt überwiegend Kennzeichnungen, nicht die gesamte Oberfläche. |
| UX-Testmodus | `body.ux-mode .ux-test-only { display:block!important }` übersteuert die Sichtbarkeit aller Testoverlays, auch ohne `open`. Sechs implementierte Aufgaben decken zudem nur einen Teil der zehn Aufgaben aus `UX_TEST_PLAN.md` ab. |
| Katalogabweichungen | `deepdive` ist im Prototyp Basic, in der Matrix Premium/Advanced. `closeness` fehlt in der Matrix; `changed` und `report` sind dort anderen Kategorien zugeordnet. Preise und Tiergrenzen sind ausdrücklich Arbeitsstand. |

Diese Punkte werden nicht stillschweigend „repariert“. Reine Strukturmigration, technische Fehlerkorrekturen und fachliche Erweiterungen erhalten getrennte Änderungen und Abnahmekriterien. Für fachliche Erweiterungen gelten die Spezifikationen; wo Definitionen oder Daten fehlen, bleibt ein nachvollziehbarer Mock-/Unavailable-Status. Die bestehenden Fehler werden dadurch weder als gewünschtes Produktverhalten festgeschrieben noch als bereits gelöst ausgegeben.

## 5. Vorgeschlagene Zielstruktur

Vite mit React und TypeScript passt zum vorhandenen lokalen Frontend und zum vorgeschlagenen Stack. Vite bietet ein offizielles `react-ts`-Template. React-Komponenten ersetzen die String-Renderer, TypeScript macht Unterschiede zwischen Nachricht, Beleg, Korrektur und Analyseergebnis explizit. Start mit `strict`, CSS Variables und CSS Modules; keine schwere UI-Bibliothek. Die vorhandenen SVGs werden zunächst als Komponenten übernommen, bevor eine neue Chartbibliothek erwogen wird. Paketversionen und Node-Kompatibilität werden beim späteren Setup geprüft und per Lockfile fixiert. [Vite-Dokumentation](https://vite.dev/guide/), [TypeScript strict](https://www.typescriptlang.org/tsconfig/strict.html).

Für den überschaubaren UI-Zustand schlage ich zunächst getrennte React-Contexts mit Reducern vor. React dokumentiert diese Kombination für zusammenhängende Zustandsübergänge. Große Nachrichtenbestände werden über Repository-Zugriff/selektive Abfragen gelesen und nicht bei jedem Tastendruck durch einen einzigen App-Context verteilt. Ein zusätzlicher Store ist erst bei nachgewiesenem Bedarf nötig. [React: Reducer und Context](https://react.dev/learn/scaling-up-with-reducer-and-context).

```text
index.html                     # kleiner Vite-Einstieg
src/
├── main.tsx
├── app/
│   ├── App.tsx, AppShell.tsx
│   ├── navigation.ts           # typisierte Ziele, Chatguard, Rückkehrziel
│   ├── providers.tsx           # Session-, Chat- und Overlayzustand
│   └── state/                 # Reducer, Actions, Selectors
├── config/
│   ├── featureRegistry.ts     # bisherige F-Keys, Kategorie, Tier, Renderer
│   └── plans.ts               # Preise/Zugänge als vorläufige Konfiguration
├── domain/
│   ├── chat.ts, messages.ts, evidence.ts, corrections.ts
│   ├── events.ts, context.ts, analysis.ts, plans.ts
│   └── ids.ts                 # typisierte IDs und explizite Referenzen
├── data/
│   ├── repositories/          # Chats, Nachrichten, Events, Korrekturen
│   ├── legacy/                # Datenadapter, Index-ID-Mapping, Formatmigration
│   ├── persistence/           # Schema-Version, Validierung, Storage-Adapter
│   └── fixtures/              # ausschließlich synthetische teilbare Daten
├── services/
│   ├── analysis/              # Ergebnisprovider, später Dependency-Graph
│   ├── import/                # Schnittstelle + vorhandene Simulation
│   └── companion/             # Mockantworten und lokale Ereignissuche
├── features/
│   ├── library/               # HomePage, ChatCard
│   ├── dashboard/             # DashboardPage, Widget, DashboardSettings
│   ├── analysis/              # AnalysisPage, CategoryGrid, FeaturePage
│   │   ├── rhythm/            # neun zugehörige Ansichten
│   │   ├── initiative/, texting/, language/, universe/, betweenLines/
│   │   └── FeatureUnavailable.tsx
│   ├── evidence/              # EvidenceDialog, EvidenceCard, Korrekturaktionen
│   ├── chat-reader/           # ChatReaderPage, Message, Search, Focus
│   ├── context/               # ContextDialog, SleepFields, ParticipantPhoto
│   ├── events/                # Timeline, EventForm, EventDetail, LifeSearch
│   ├── data-management/       # SourcesDialog, AppendReplaceFlow
│   ├── import/                # ImportWizard und einzelne Schritte
│   ├── companion/             # CompanionPage, MessageList, Composer
│   ├── plans/, profile/
│   └── prototype-tools/       # Testpanel und separat geladener UX-Testmodus
├── shared/
│   ├── ui/                    # Button, Dialog, Toast, Avatar, Cards, Zustände
│   ├── charts/                # HourChart, WeekdayChart, PulseChart, HotColdChart
│   └── formatting/            # Datum, Zahlen, Einheiten
└── styles/                    # tokens.css, global.css, Komponentenmodule
tests/
├── characterization/          # beobachtetes Altverhalten und Ergebnisfixtures
├── integration/               # Persistenz, Identität, Zustandsübergänge
└── e2e/                       # Kernflows und mobile Vergleiche
private-test-data/             # lokale Originaldaten, ignoriert, nicht öffentlich
```

Der Laufzeitbaum wird `App → Providers → AppShell → aktive Page + OverlayHost + ToastHost`. `FeaturePage` setzt Kategorie-/Funktionsnavigation, Status und die registrierte Ergebnisansicht zusammen. Jede Ansicht behält ihre eigene Darstellungsform; eine universelle Karte mit Dutzenden Schaltern würde den Monolithen nur verlagern.

## 6. Verträge zum Erhalt des Verhaltens

1. **Navigation:** Globale Ziele sind Home, Pro und Profil; chatbezogene Ziele tragen explizit `chatId`. Home setzt den aktiven Chat zurück. Dialoge und Chatviewer bewahren ihr Rückkehrziel. Zunächst den vorhandenen Navigationsvertrag übertragen; URL-/Deep-Link-Verhalten erst bewusst ergänzen.
2. **Datenhoheit:** Dauerhafte Fachinformationen, temporärer UI-Zustand und abgeleitete Analyseergebnisse getrennt halten. Chatbezogene Speicherung vorbereitet übernehmen, ohne den bisherigen globalen Inhalt ungeprüft auf alle Bibliothekseinträge zu kopieren. Das feste Demo-Dataset gehört zum Demo-Chat; unklare Altbestände bleiben bis zur Zuordnung gesichert.
3. **Stabile Referenzen:** Für den unveränderten Datenbestand einmalig dauerhafte Message-IDs vergeben und eine überprüfbare Zuordnung der bisherigen Indizes speichern. Laufzeitverweise nutzen danach IDs. IDs werden nach Sortierung nicht neu vergeben. Textsuche bleibt Suchfunktion, keine Identitätsquelle. Robustes Matching nach echten Chatupdates gehört zur späteren Importimplementierung.
4. **Persistenzmigration:** Den Schlüssel `zwischen_den_zeilen_proto_v05` zunächst vollständig sichern; ein versionierter Adapter übernimmt Kontext einschließlich Fotos/Schlafzeiten, Events, Quellen, Dashboardreihenfolge sowie Beleg-/Pausenausschlüsse. Leere Listen, unbekannte Feature-IDs und defektes JSON explizit behandeln. Erst nach erfolgreicher Validierung den neuen Stand aktivieren; den alten Stand für Rückkehr behalten. Browserstorage ist originabhängig: Daten aus einem anderen Port oder `file://` werden nicht automatisch verfügbar. Eine lokale Übernahme muss vor dem Wechsel separat geklärt werden.
5. **Analysen:** Vorhandene Resultate zunächst unverändert als gekennzeichnete Referenz-/Mock-Ergebnisse hinter einem Provider halten. Bestehende Rechen- und Suchhilfen separat extrahieren und gegen ihren Ausgang vergleichen. Fehlende Algorithmen werden nicht aus angezeigten Zahlen nachgebaut. Geplante Ergebnisverträge können `chatId`, Zeitraum, Input-/Algorithmusversion und Beleg-IDs tragen; daraus folgt noch keine neue Berechnung.
6. **Korrekturen:** Vorhandene Ausschluss-/Wiederaufnahmeaktionen erhalten. Das spätere Ziel ist ein persistentes Korrekturjournal mit Undo und gezielter Invalidierung: Fragen → Fragenanalyse/Question Dynamics; Planbelege → What’s Next/Future Talk Trend; Events → betroffene Kontextauswertungen. Dies wird erst mit belastbaren Analyseprovidern als echte Reanalyse umgesetzt.
7. **Interaktionen:** Gemeinsame Beleg-/Zitatkomponente erhält Quell-ID, Sender, Zeit und Rückkehrkontext. Fehlende Zuordnungen sichtbar als Lücke behandeln. Modal-Scroll, Hintergrundsperre, Fokus/Rückfokus, Escape, Touchziele und Tastaturbedienung explizit abnehmen. SVG-Geometrie, Farben, Achsen und Einheiten beim ersten Transfer beibehalten.
8. **Mocks und offene Regeln:** Import-, Begleiter- und Life-Event-Suchprovider bleiben austauschbar und lokal. Undeklarierte Confidence-Schwellen, Gesprächs-/Nachtgrenzen, neue Planlogik oder unvollständig definierte Funktionen werden nicht festgelegt. Vorgeschlagene Begleiteraktionen benötigen später eine konkrete Vorschau samt Anwenden/Abbrechen.
9. **Private Referenzdaten:** Originalnachrichten, Fotos und Testartefakte bleiben lokal und ausgeschlossen von öffentlichen Builds/Repositories. Synthetische Fixtures dienen teilbaren Tests. Kein Originalprototyp unter dem späteren öffentlichen `public/`-Verzeichnis; keine API-Secrets im Client.

## 7. Historische Reihenfolge der Migration – damalige Freigabe bis einschließlich Schritt 4

| Schritt | Konkreter Umfang | Nachweis vor dem nächsten Schritt |
|---|---|---|
| 1. Referenz sichern | AGENTS, START HERE und alle zwölf nicht privaten Spezifikationen ins Git-Arbeitsverzeichnis kopieren; private Referenz ausschließlich ignoriert lokal halten. Altfehler separat dokumentieren. Ausführbare Characterization-Tests und Baselines der Kernflows und sichtbaren Werte erstellen. | Baselines müssen vor Anlage des React-Einstiegs erfolgreich laufen; Hash und alle Feature-IDs gesichert; bekannte Fehler ausdrücklich keine Paritätsziele. |
| 2. Vite-Gerüst und Datenadapter | React/TS, Typecheck, Build, Tokens; Featurekatalog und feste Daten auslagern; ID-/Storage-Kompatibilität vorbereiten. | Typecheck/Build erfolgreich; Altwerte und gespeicherte Nutzereingaben verlustfrei lesbar. |
| 3. App-Hülle und Navigation | Home, Chatkontext, Dashboard, Pro/Profil, Kategorie- und Funktionsnavigation, Paywall und Zustände. | Drei/sechs Navigationseinträge, Chatguard, Karten-/Planwechsel und Platzhalter bleiben erreichbar. |
| 4. Gemeinsame Interaktionen | OverlayHost, Kontext, Dashboardkonfiguration, Chatviewer, Belege, Events, Datenverwaltung und Import-Wizard. | Rückwege, Fokus, Suche, Ausschluss/Wiederaufnahme, Speichern/Reload und Reihenfolge gegen Altstand geprüft. |
| 5. Analysen in kleinen Paketen | Erst Rhythmus und Textumfang, dann Initiative, Sprache, Themen und semantische Ansichten; v0.7-Varianten von Pulse/Deep Dive/Life Events/Future Trend gezielt übernehmen. | Jede Ansicht hat Paritätsprüfung für sichtbare Werte, Methodik, Diagramme, Links, Sperren und Zustände. |
| 6. Begleiter und Testwerkzeuge | Mockdialog, Ereignissuche, Developerpanel und UX-Testablauf als getrennte Module übertragen. Technische Overlay-Reparatur gesondert ausweisen. | Öffentlicher Mock-Service, belegte Kandidaten, bestätigungspflichtige Aktionen; zehn aktuell freigegebene UX-Aufgaben und CSV/JSON-Export nutzbar. |
| 7. Gesamtabnahme und Bereinigung | Kernflows auf Desktop, 390 und 430 px vergleichen; anschließend ungenutzte globale Handler und Alt-Renderer entfernen. | Keine ungeklärte Regression; Migration der Speicherformate abgesichert; lokaler Rückweg zur Referenz bleibt verfügbar. |

Pro Schritt nur ein überschaubarer, überprüfbarer Änderungsstand. Altprototyp und neue App werden mit derselben lokalen Referenz parallel verglichen. Die neue App ist nach der Strukturmigration weiterhin ein Prototyp mit dokumentierten Mocks; echte Parser, vollständige Evidenz, globale Zeitraumwirkung und Berechnungen sind gesonderte Produktarbeit.

## 8. Risiken und Abnahme

| Risiko für Funktionsverlust | Absicherung |
|---|---|
| Späte Overrides gehen beim Extrahieren verloren | Wirksame v0.7-Ansicht als Referenz; insbesondere Fotos/Schlafrhythmus und vier ersetzte Detailrenderer prüfen. |
| Beleg zeigt nach Sortierung auf falsche Nachricht | Index-ID-Mapping einmalig prüfen; Duplikate, identische Texte und gleiche Zeitstempel in Tests abdecken. |
| Nutzerkorrektur oder Dashboard geht beim Storage-Wechsel verloren | Versionierter Import, Backup, Reload/Rollback und leere/defekte Bestände testen. |
| Zustand eines Chats beeinflusst einen anderen | Explizite Chat-ID in Repositories, Actions und Ergebniszugriff; Bibliothekseinträge ohne Daten gesondert behandeln. |
| Neue Renderer verändern Zahlen oder semantische Aussage | Referenzwerte vergleichen; widersprüchliche Altwerte und fachliche Änderungen separat ausweisen. |
| Dialoge verlieren Rückweg, Fokus oder Scrollverhalten | Kontext → Event → Bearbeiten sowie Beleg → Chat → zurück auf Mobilbreite testen. |
| Mock wird als vollständige Analyse ausgegeben | Datenherkunft/Verfügbarkeit im Providervertrag; keine erfundenen Ergebnisse für die sieben Platzhalter. |
| Neues UI verliert seltene Interaktionen | Inventar umfasst auch Pausenprüfung, Quellenmodus, Bildauswahl, Planvorschau, Sprachwahl und UX-Testexport. |

Die späteren Prüfungen konzentrieren sich auf folgende belastbare Abnahmekriterien:

- Alle neun Ansichten, 33 Feature-IDs und vorhandenen Dialogaktionen sind erreichbar; keine sichtbare Stufen-I/II.A-Vorfilterung.
- Home trennt den Chatkontext; Analyse/Begleiter/Dashboard funktionieren nur mit aktivem Chat. Pro und Profil bleiben global erreichbar.
- Dashboardkarten lassen sich wählen, sortieren, öffnen und nach Reload wiederfinden; gesperrte Funktionen zeigen weiter den Planhinweis.
- Jeder bereits funktionierende Belegsprung fokussiert dieselbe Originalnachricht. Suche, früher/später und Rückkehr funktionieren; bislang unverbundene Zitate sind als Lücke erfasst.
- Vorhandene Beleg-/Pausenausschlüsse lassen sich wieder einbeziehen und überstehen Reload; fehlende echte Reanalyse wird nicht als erfolgreicher Test verbucht.
- Kontext, Fotos, Schlafzeiten, Ereignisfelder, Vorschlagsstatus und Notizen werden durch Formatmigration erhalten; Löschen/Verwerfen und Bestätigen behalten ihre unterschiedlichen Bedeutungen.
- Append und Replace bleiben getrennte, ausdrücklich simulierte Abläufe, bis echte Importlogik freigegeben und umgesetzt ist.
- Loading, Error, insufficient-data, leere Listen und unavailable werden je betroffenem Flow geprüft; neue Zustandshandhabung separat kennzeichnen.
- Auf 390/430 px bleiben Navigation und Aktionen benutzbar, Diagramme lesbar und Modals intern scrollbar. Desktopansichten werden ebenfalls verglichen.
- Build, Typecheck und passende Integration-/Browsertests bestehen. Der eingebaute UX-Testmodus ergänzt diese Prüfungen, ersetzt sie aber nicht.

Die ursprüngliche Planung beruhte auf Quellprüfung und Browserabläufen. Die freigegebenen Schritte 1 und 2 ergänzen ausführbare Tests, das Buildgerüst und Datenadapter. Authentifizierung, Backend, Datenbank, Deployment, Sharing, endgültige Preise und fachliche Schwellen bleiben offene Entscheidungen gemäß `docs/OPEN_DECISIONS.md`.

## 9. Dauerhafte Source of Truth und Fehlerabgrenzung

`AGENTS.md`, `CODEX_START_HERE.md` und `docs/` im aktuellen Git-Arbeitsverzeichnis sind ab jetzt die dauerhaft maßgeblichen Projektunterlagen. Die Kopien bleiben zunächst inhaltlich unverändert. Das ursprüngliche Handoff dient nur noch der Herkunftskontrolle. Die aktuelle Freigabe und Phasengrenze stehen in diesem Plan; die Design-Spezifikation wird erst in einer späteren Modernisierungsphase angewendet.

`KNOWN_LEGACY_DEFECTS.md` führt Altfehler mit stabilen IDs. Baselines dokumentieren beobachtete Zustände, keine fachliche Richtigkeit. Tests für bekannte Defekte werden getrennt als Beobachtungen geführt und dürfen niemals als Sollverhalten der React-App übernommen werden. Nicht widersprüchliche Referenzwerte und funktionierende Interaktionen bleiben Vergleichsgrundlage; fachliche Konflikte benötigen Auflösung außerhalb der Strukturmigration.

Private Chatdaten, Original-HTML, extrahierte private Ergebnisse und Screenshots liegen ausschließlich unter dem ignorierten `private-test-data/`. Sie werden weder öffentlich committet noch in den Frontend-Build importiert. Ein lokaler Referenzserver wird getrennt von Vite betrieben. Im Repository liegen nur öffentliche Spezifikationen, produktbezogene Metadaten, synthetische Testdaten und textfreie Baselines.

## 10. Post-Migration-Backlog

Erst nach abgeschlossener und abgenommener Strukturmigration separat planen/umsetzen:

| ID | Arbeitspaket | Abnahmeziel / Quelle |
|---|---|---|
| PM-01 | Globaler Analysezeitraumfilter | UI, Persistenz, öffentliche Beleg-/Eventfilter und Analysevertrag in Schritt 6 umgesetzt. Echte Berechnung bleibt offen. Gemeinsamer Zeitraum je Chat für Dashboard und Analysen, vollständige Vergleichsperioden, persistenter Custom-Bereich; `PRODUCT_SPEC`, `ANALYSIS_RULES`. |
| PM-02 | Schlaf-/Nachtkontext pro Teilnehmer | Modell/Formular/Persistenz/Analysevertrag in Schritt 5 vorgezogen und umgesetzt. Echte Einrechnung in zukünftige Analysen offen; reale Aktivität hat Vorrang. |
| PM-03 | Gruppenchats und Dyadenauswahl | Zwei bestätigte Teilnehmer bestimmen Kennzahlen; andere bleiben optionaler Chatkontext; `IMPORT_PERSISTENCE`. |
| PM-04 | Vollständige Beleglisten | Vollständige Evidence, Pagination (ca. 50), Person/Zeitraum/Status/Confidence/Kategorie filterbar; `UX_RULES`. |
| PM-05 | Echte Neuberechnung nach Korrekturen | Persistentes Journal, Undo, stabile IDs, gezielte Invalidierung und Reanalyse; `ANALYSIS_RULES`, `DATA_MODEL`. |
| PM-06 | Bestätigungspflichtige Begleiteraktionen | Im Mock-Frontend in Schritt 6 umgesetzt; echte Reanalyse offen. Konkrete Änderung und betroffene Analysen anzeigen; Anwenden/Abbrechen vor Mutation; `AI_COMPANION_SPEC`. |
| PM-07 | Life-Events-Suche per LLM | Mock-Schnittstelle und Trefferübernahme in Schritt 6 umgesetzt; echte LLM-Suche bleibt offen. Mehrere plausible Treffer, Originalbelege, Sender/Zeit, Confidence und Nutzerauswahl; sicherer Backend-Endpunkt; `AI_COMPANION_SPEC`. |
| PM-08 | Globale Chattext-Verlinkung | Jeder angezeigte Chattext führt zur exakten Originalstelle, auch Eventbelege und zusammengesetzte Zitate; `UX_RULES`. |
| PM-09 | Profilbilder/Initialen in Vergleichen | Avatar neben Personenwerten und Belegabsendern, konsistente Farben; `DESIGN_SPEC`, `UX_RULES`. |
| PM-10 | Raincheck-Review und Plantracking | Nachrichtenübergreifende Planobjekte und Zustandsverlauf; kein Raincheck, Reklassifizieren, Zusammenführen, Duplikate korrigieren; `ANALYSIS_RULES`. |
| PM-11 | Echte Import-/Update-Pipeline | Parser, Deduplizierung, Quellen und Korrekturen erhalten; Append/Replace getrennt und geprüft; `IMPORT_PERSISTENCE`. |
| PM-12 | Übrige Lücken aus Defektregister | Rechenherleitung, Lokalisierung, Chartdetails, bisher undefinierte Analysen und Testabdeckung separat priorisieren. |

**Eigene Phase UI-Modernisierung:** Erst nach erfolgreicher Paritätsmigration. Bis dahin keine Änderungen an Layout, Farben, Typografie, Icons, Chartdarstellung oder Interaktionsdesign. CSS-Tokens dürfen unverändert extrahiert werden. Die technische Startseite aus Schritt 2 ist nur ein Gerüstnachweis, keine migrierte Produktansicht.

**Aktuell verbindlicher Stopp:** Nach dem gesamten Korrektur-/Schritt-6-Paket Bericht mit Tests, Build, Typecheck, Privacy und Browserprüfung liefern. Design & UX Modernization benötigt eine neue ausdrückliche Freigabe. Die früheren Abschlüsse bleiben nachfolgend als historische Stände dokumentiert.

## 11. Historischer Abschlussbericht für Schritt 1 und 2

### Erstellte Struktur und Unterlagen

Die 14 Projektunterlagen (`AGENTS.md`, `CODEX_START_HERE.md`, zwölf Spezifikationen) wurden unverändert kopiert und per Hash mit dem Handoff verglichen. Das Fehlerregister enthält LD-01 bis LD-27. Der Post-Migration-Backlog enthält alle angeforderten Punkte. `.gitignore` schließt private Referenzen, extrahierte Daten und Testartefakte aus.

Das tatsächliche Gerüst umfasst `src/main.tsx`, `src/config/`, `src/domain/`, `src/data/{legacy,persistence,repositories,fixtures}/`, `src/styles/`, `scripts/`, `tests/{baselines,characterization,integration}/` sowie Vite-/TypeScript-/Vitest-Konfiguration und Lockfile. Die vollständige zukünftige Struktur in Abschnitt 5 bleibt ein Zielbild; insbesondere gibt es noch keine AppShell, Navigation oder migrierten Feature-Komponenten.

### Tests und Baselines

| Prüfung | Ergebnis |
|---|---|
| Vor dem React-Einstieg | 26 erfolgreiche Tests: 21 Kernflow-/Werteprüfungen und fünf Defektbeobachtungen. `src/main.tsx` und `src/app/App.tsx` existierten zu diesem Zeitpunkt noch nicht. Nachweis: `tests/baselines/STEP1_BASELINE.md`. |
| Abschließender privater Testlauf | 27 Tests in drei Dateien erfolgreich, einschließlich vollständiger Datenübernahme. |
| Öffentliche Adaptertests | 21 Tests in zwei Dateien erfolgreich; ausschließlich synthetische Daten. |
| `pnpm typecheck` | Erfolgreich, strict einschließlich `noUncheckedIndexedAccess` und `exactOptionalPropertyTypes`. |
| `pnpm build` | Erfolgreicher Typecheck und Vite-Produktionsbuild. |
| Erneute Extraktion | Das gespeicherte ID-Manifest bleibt bytegleich; Zuordnungen werden validiert. |
| Browser | Gerüstseite lädt; bei 390 und 430 px kein horizontaler Überlauf, keine Browserwarnungen/-fehler im Smoke-Test. Keine Produktflow-Parität behauptet. |
| Private Grenze | Private Pfade nicht in Git-Dateikandidaten; Frontendquellen und Build geprüft. Direkter Zugriff über Vite auf Legacy-HTML sowie `?raw` liefert HTTP 403. |

Werkzeuge: Node 24.19.0, pnpm 11.19.0, React/React DOM 19.3.0, Vite 8.3.2, TypeScript 7.0.2, Vitest 5.0.3, jsdom 30.1.1. Abhängigkeiten sind exakt gepinnt. Für die Registry-Installation war Netzwerkzugriff außerhalb der Sandbox erforderlich. Es gab keinen Commit oder Push.

### Übernommene Modelle und Daten

`src/domain/models.ts` bildet ChatSpace, Participant, SleepProfile, ImportSource, Message, MessageBlock, RelationshipContext, LifeEvent, EvidenceItem, UserCorrection, AnalysisRun, PlanEntity, DashboardConfig, PeriodFilter und RecalculationDependency als Typverträge ab. Fehlende Legacy-Metadaten werden nicht erfunden: Confidence, Klassifikationsflags und bestimmte Zeitstempel können ausdrücklich unbekannt sein.

Die private Extraktion sichert 11.703 Nachrichten, 33 Belegreferenzen, fünf Events und den kompletten ursprünglichen Ergebnis-/Kontextbestand. Message-IDs werden einmalig in einem Manifest vergeben. Die 33 Evidence-Referenzen verweisen danach auf Message-IDs; unaufgelöste Event-Textbelege bleiben separat erhalten. Der öffentliche Featurekatalog enthält alle 33 bisherigen Keys, ihre vorläufigen Zuordnungen und die sieben Unavailable-Status. Beide `:root`-Tokenblöcke wurden unverändert übernommen.

Der Speicheradapter bereitet explizit einen einzelnen Chat vor: Rohbackup, versionierte Hülle, Kontext/Fotos/gemeinsame Schlafhinweise, Events, Quellen, Ausschlüsse und Dashboardreihenfolge. Unbekannte Felder bleiben im exakten Originalstring erhalten. Defektes JSON, falsche Typen, Quota-Fehler, geänderte Altbestände oder eine falsche Chatzuordnung werden gemeldet, nicht still überschrieben. Die React-Seite greift noch nicht auf Browserstorage zu.

### Bekannte Abweichungen und noch nicht migrierte Bereiche

- Die neue Startseite ist ein Gerüstnachweis. Sämtliche neun Produktansichten, Navigation, Modals, Charts, Paywall und interaktiven Feature-Renderer bleiben im unveränderten privaten Legacy-Prototypen.
- Die Adapter bewahren leere Listen korrekt und melden Storagefehler. Das ist eine technische Vorbereitung gegen LD-16, keine Änderung des alten Produktverhaltens. Der alte Prototyp selbst wurde nicht repariert.
- Gemeinsame Schlafzeiten und alte Ausschlussflags bleiben als Legacy-Daten erhalten; individuelle Schlafprofile oder ein Korrekturjournal werden daraus nicht erfunden. Nicht auflösbare Eventbelege erhalten keine geratenen Message-IDs.
- Die lokale Extraktion verwendet den eingebetteten Ausgangsbestand. Persönlicher Browserstorage wurde nicht aus anderen Origins übernommen. Der vorbereitete Storageadapter ist noch nicht an UI oder Datenverwaltung angeschlossen.
- Sichtbare Zahlen sind gesicherte Referenzwerte, keine fachlich validierten Analysen. Reanalyse, echte Importe, vollständige Evidence, Zeitraumfilter, Plantracking und LLM-Funktionen bleiben offen.
- Der UX-Overlaydefekt und sämtliche anderen offenen Einträge des Defektregisters sind weiterhin dokumentiert. Bekannte Defekte sind ausdrücklich keine Paritätsziele.
- TypeScript-Typen für spätere Funktionen sind keine Implementierung dieser Funktionen. Authentifizierung, Backend, Datenbank und Deployment wurden nicht festgelegt.
- Eine visuelle Modernisierung wurde nicht begonnen. Die übernommenen Tokens sind unverändert; eine eigene UI-Phase folgt erst nach erfolgreicher Paritätsmigration.

**Stopp nach Schritt 2 eingehalten.** Nächster möglicher Umfang wäre Schritt 3 (App-Hülle und Navigation), erst nach neuer Freigabe.

## 12. Historischer Abschluss: Themes und Schritt 3

Die spätere Auswahl umfasst exakt `editorial-warm`, `modern-insight` und `night-mode-chic`. Ohne gültige Nutzerwahl gilt `editorial-warm`; es gibt keinen Systemmodus und keine Betriebssystemabfrage. Zentrale typisierte semantische Tokens und `ThemeProvider` ersetzen direkte visuelle Werte in den neuen Produktkomponenten. Alle drei Definitionen verwenden während der Paritätsmigration bewusst dieselben Legacy-Werte. Unterschiedliche Paletten und sichtbare Theme-Auswahl gehören zur späteren UI-Phase. Explizite Theme-Wahl ist über einen separaten, versionierten Präferenzschlüssel persistierbar; Legacy-Chatstorage bleibt unberührt.

Schritt 3 umfasst AppShell, globale Chatbibliothek, aktiven Chatkontext, Dashboard-Grundseite, sechs Kategorien mit 33 Feature-IDs, Pro, Profil, Bottom Navigation und Planvorschau. Home setzt den Chatkontext zurück; Chatwahl öffnet das Dashboard. Ohne Chat bleiben nur Home/Pro/Profil verfügbar. Der Begleiter erhält ausschließlich ein geschütztes Navigationsziel und den vorhandenen Premiumzugang, noch keinen Dialog. Featureziele zeigen vorläufige Migrationshinweise beziehungsweise die sieben bestehenden Unavailable-Zustände. Ergebnisrenderer bleiben in Schritt 5.

Für den öffentlichen Browser werden synthetische Chatmetadaten und ausdrücklich gekennzeichnete, textfreie Referenzkarten verwendet. Kein privater Chat wird in das Bundle aufgenommen. Noch nicht freigegebene Import-/Kontext-/Event-/Konfigurationsaktionen bleiben deaktiviert. Das ist eine dokumentierte Phasengrenze, keine vollständige Produktparität.

Neue Tests prüfen Theme-Vertrag und -Persistenz, Chatguard, Home-Rückkehr, sämtliche Featureziele, Planwechsel und isolierte Ladezustände. Eine ausführbare CUA-Browserregression mit Baseline prüft 390/430 px und die native Paywall. Ergebnis und Grenzen stehen in `MIGRATION_STATUS_STEP_3.md` und `tests/baselines/STEP3_BROWSER_BASELINE.md`.

## 13. Historischer Abschluss: Schritt 4

Migriert sind ein zentraler Dialog-Host mit Rückkehrstapel, Dashboardwahl/-reihenfolge, bestehende Kontextfelder einschließlich gemeinsamer Schlafzeiten und optionaler Fotos, Eventübersicht/-formulare/-aktionen, Beleg- und Pausenprüfung, Hot-&-Cold-Kontextprüfung, Chatreader sowie simulierte Datenverwaltung und Import-Wizard. Native Dialoge sperren den Hintergrund, scrollen intern und behandeln Escape/Schließen/Rückfokus. Der Reader behält Suche, ein Fenster mit höchstens 90 Nachrichten, früher/später, ID-genauen Fokus und Rückkehr zur auslösenden Ansicht.

Jeder Dialog, Reader und gespeicherte Interaktionsbestand gehört zu einer expliziten `chatId`. Der versionierte Schlüssel `zdz:chat-interactions:v1:<encodeURIComponent(chatId)>` speichert ausschließlich den betreffenden Chat. Eine separate Demo-Bibliothek (`zdz:demo-library:v1`) enthält die per Simulation angelegten Chats. Validierung erhält leere Listen, meldet beschädigte Daten und Schreibfehler und erfindet keine Ersatzdaten. AI-Verwerfen speichert `rejected`; Löschen entfernt manuelle/bestätigte Events. Ausschlüsse bleiben umkehrbare Flags ohne neue Analyseberechnung.

**Mapping-Lücke, bewusst nicht ausgeführt:** Der globale Legacy-Browserspeicher enthält keine eindeutige Zuordnung zu den drei öffentlichen Demo-Chats. Deshalb erfolgt keine automatische Übertragung in deren Interaktionsschlüssel. Der vorhandene Legacy-Adapter bleibt eine explizite, lokale Vorbereitung; Originalschlüssel und Rohbackup bleiben unberührt. Belege ohne eindeutige Message-ID bleiben `unresolved`. Private Bestände bleiben ausschließlich Referenz-/Testdaten.

Die React-Interaktionen verwenden ausschließlich synthetische, klar bezeichnete Fixtures. Add und Replace verändern nur simulierte Quellenmetadaten. Weder Parser noch Deduplizierung, Nachrichtenimport, Reanalyse oder Teilnehmererkennung werden vorgetäuscht. Die sieben Unavailable-Features und die drei identischen Theme-Paletten bleiben erhalten. Neue Analyse-Renderer, individuelle Schlafprofile, vollständige Belegpagination, sichtbare Theme-Auswahl und Begleiter-/LLM-Dialoge sind nicht Teil von Schritt 4.

Nachweis: 93 öffentliche Tests, 28 Legacy-Tests, Build, Typecheck, Privacy Check und reale Browserabläufe bei 390×844/430×932 px bestanden. Details und Grenzen in `MIGRATION_STATUS_STEP_4.md` und `tests/baselines/STEP4_BROWSER_BASELINE.md`. **Stopp nach Schritt 4; Schritt 5 nicht begonnen.**

## 14. Freigegebene Ergänzung: Schritt 5

Die 26 `legacy-reference`-Features besitzen React-Renderer, verteilt auf Rhythmus, Austausch, Textmenge, Sprache, Themen, Between the Lines und Life Events. `FeaturePage` übernimmt Datenzustände und Methodik; wiederverwendbare Karten, Personenvergleiche, Charts und Evidence-Einstiege ergänzen die vorhandenen Dialoge. Die sieben Unavailable-IDs bleiben unverändert. Alle drei Theme-IDs verwenden weiterhin dieselbe semantische Paritätspalette.

Die vier Produktkorrekturen sind Teil desselben Pakets. Eventtitel werden bei Anlage und Bearbeitung inline validiert; zehn kuratierte Line-Icons sind persistent. Der Interaktionsspeicher ist auf v2 erweitert. v1 bleibt unverändert erhalten; gemeinsame Schlafwerte werden archiviert, während beide individuellen Profile zunächst unbekannt bleiben. Private globale Legacy-Daten erhalten weiterhin keine automatische öffentliche Chatzuordnung.

Analysen zeigen gespeicherte Referenzwerte, keine neuen Berechnungen aus Ersatztexten. Widersprüche bleiben erhalten und werden je Ansicht in der Methodik erläutert. Private Texte, persönliche Anreden und Ereignisgeschichten werden durch öffentliche Fixtures ersetzt. Nachrichtenlinks verwenden ausschließlich deren stabile MessageIds; lokale Tests sichern zusätzlich alle 33 alten Belegreferenzen gegen den privaten Originalbestand. Das begrenzte Readerfenster, Rückfokus, Dialogstapel und Rückkehrscrollposition bleiben erhalten.

Prüfnachweise und verbleibende Grenzen: `MIGRATION_STATUS_STEP_5.md` und `tests/baselines/STEP5_BROWSER_BASELINE.md`. Reanalyse, Parser/Deduplizierung, vollständige Belegmengen, Plantracking und LLM bleiben offen. **Stopp nach Schritt 5.**

## Historisches gemeinsames Paket nach Schritt 5 (04.10.2026)
Die aktuelle Nutzerfreigabe umfasst den vollständigen UX-Korrekturlauf und Schritt 6 ohne Zwischenstopp: zentrale Chartbedienung, stabile Wortbelege, Rücknavigation, chatbezogener persistenter Zeitraum, Ereignisnavigation/Timeline, direkte Schlafprofileditierung; danach typisierter Mock-Begleiter, belegte Life-Event-Treffer, bestätigungspflichtige Aktionen und expliziter lokaler UX-Testmodus. Bestehende Referenzwerte bleiben unverändert und werden bei abweichendem Zeitraum nicht als neu berechnete Werte ausgegeben. Keine neuen Nachrichtenfixtures, kein Backend/LLM-Anbieter, keine Designmodernisierung. Abschluss mit sämtlichen Prüfungen und MIGRATION_STATUS_STEP_6.md; die nächste Phase Design & UX Modernization benötigt eine neue Freigabe.

## 15. Freigegebene und abgeschlossene Designmodernisierung

Nach Abnahme der Funktionsmigration wurde Design & UX Modernization ausdrücklich freigegeben. Diese spätere Anweisung ersetzt die vorherigen visuellen Paritätsbeschränkungen und die frühere Drei-Theme-Planung: genau `editorial-warm` (Default) und `night-mode-chic`, sofort wirksame persistente Auswahl im Profil, kein Systemmodus. Semantische Tokens, eigene Kategorie-Artworks und Lucide-Icons gestalten alle vorhandenen Bereiche. Produktkomponenten bleiben themeunabhängig.

Informationsarchitektur, 33 Feature-IDs, Inhalte und fachliche Speicherung bleiben erhalten. Keine neuen Formeln, Reanalyse, Parser, echten Importe, Backend- oder LLM-Aufrufe. Die sieben Unavailable-Features bleiben unverändert. Frühere Statusberichte sind historische Abnahmen, keine aktuellen UI-Vorgaben.

Abschluss: `MIGRATION_STATUS_DESIGN_MODERNIZATION.md`, technische Gestaltung: `docs/FRONTEND_DESIGN_SYSTEM.md`. 204 öffentliche und 57 Legacy-Tests, Typecheck, Build und Privacy Check bestanden. Produktionsbrowserprüfung: beide Themes bei 390 × 844, 430 × 932 und 1024 × 768; jeweils alle 33 Ziele, keine horizontalen Überläufe oder Konsolenwarnungen/-fehler. **Freigabe endet nach dieser Designphase; keine Folgephase begonnen.**

## 16. Abgeschlossener gezielter UX-/Darstellungskorrekturlauf 1

Die Freigabe umfasst nur Darstellungskorrekturen auf dem Designstand: Zeitraumsteuerung ausschließlich im Dashboard, weniger redundante Kategorieicons, einheitliche Funktionsicons und sekundäre Tariftexte, Prime-Beschriftung, klarere Phasenmarkierung, ganzzahlige Silence-Anzeige, Pulse-Erklärung in Methodik, horizontale Event-Timeline mit Vorschau und bestehendem Detail, Emoji-/Wort-/Themen-/Planlisten sowie eine homogene warme Erdfarbenpalette. Night Mode behält seine dunkle grünere Farbwelt.

Unverändert: Modelle, Analyseformeln, Referenzwerte, Feature-IDs, ID-basierte Beleglinks, Navigation, Your Eras, First-Move-Belege/-Definition, gemeinsame Greatest Hits, Import/Begleiter und versionierte Persistenz. Vorhandene Planarten sind Prozentanteile; fehlende absolute Zahlen werden nicht erfunden. Referenzkontext wird nicht in eine neue Cold-Phase umgedeutet.

Abschlussbericht: `MIGRATION_STATUS_DESIGN_CORRECTIONS_1.md`. 217 öffentliche Tests und 57 Legacy-Tests, Typecheck, Build und Privacy Check erfolgreich. Alle 33 Funktionsziele in beiden Themes bei 390 × 844, 430 × 932 und 1024 × 768 über den Produktionspreview geprüft, ohne horizontalen Seitenüberlauf oder Konsolenwarnungen/-fehler. **Stopp nach diesem Paket; keine neue Produktphase begonnen.**

## 17. Abgeschlossener gezielter UX-/Darstellungskorrekturlauf 2

Kontext und Zeitraum sind gleichwertige benachbarte Dashboard-Controls. Ein eigener Dialog übernimmt die bestehende globale Zeitraumwahl. Relative Zeiträume beziehen sich auf `max(valid message timestamp)` des betreffenden Chats, niemals auf heute; Custom bleibt exakt. Die zentrale Zeitraumfunktion gilt auch an den bestehenden Mock-Service-Aufrufstellen. Sonstige Begleiteraktionen bleiben unverändert.

Der explizite Dashboard-Snapshot-Vertrag verhindert UI-seitiges Raten und Platzhalterkarten. Nur Prime Time, Chat Streak und Peak Day besitzen im aktuellen Adapter eine bewusst definierte Kurzprojektion. Ungeeignete alte Auswahlen werden unter Erhalt der übrigen Reihenfolge gefiltert. Tarif-Mini-Badges, dynamisch gezählte 6 / +11 / +9 verfügbare Funktionen, sichtbare Prozentzeichen, Themenbelegdialog und gemeinsame Maus-/Tastatur-/Touch-Pointersteuerung ergänzen die Darstellung.

Die öffentliche Themenreferenz hat keine eindeutige Unterthemenzuordnung. Diese Lücke bleibt unresolved; der allgemeine Beleg ist separat mit stabiler MessageId zugänglich. Keine neue semantische Klassifikation, keine Änderung von Analysezahlen, Feature-IDs, Paletten, Artworks, Event- oder Importlogik. Storage-Keys bleiben erhalten. Reanalyse, echte Importe und LLM bleiben offen.

Nachweis: `MIGRATION_STATUS_DESIGN_CORRECTIONS_2.md`, 235 öffentliche und 57 Legacy-Tests; Typecheck, Build und Privacy Check erfolgreich. Beide Themes in drei Browsergrößen über Produktionspreview geprüft. Native Touch-Eingaben sind mit dieser Browsersteuerung nicht verfügbar; Pointer-Verzweigungen sind automatisiert abgesichert, Hardwareprüfung bleibt offen. **Stopp nach Korrekturlauf 2; keine weitere Produktphase begonnen.**

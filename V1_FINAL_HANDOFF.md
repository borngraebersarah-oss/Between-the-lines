# V1 Final Handoff — Zwischen den Zeilen

Stand: 04.11.2026. Verbindlicher Übergabeeinstieg nach dem letzten V1-Spezifikationsauftrag. Dieses Dokument konsolidiert den vorhandenen Fachstand; es verändert weder Formeln noch Anwendungscode. Zur Übernahme ist keine Chat-Historie erforderlich.

## Executive Summary

**Produkt:** mobile-first Chat- und Kommunikationsanalyse mit nachvollziehbaren Beobachtungen, vollständigen Belegen und rücknehmbaren Nutzerkorrekturen; keine psychologischen Diagnosen oder Beziehungsscores.

**V1:** genau 22 Analysen: sechs Free (`prime`, `weekday`, `streak`, `peak`, `texting`, `emoji`), neun Basic-Kernanalysen (`hotcold`, `silence`, `move`, `response`, `firstlast`, `longstory`, `words`, `pulse`, `deepdive`) und sieben Analysen mit semantischen Teilaufgaben (`questions`, `names`, `topics`, `social`, `lifeevents`, `humor`, `topicstarts`). Dazu gehören echte Imports, Add/Replace, vollständige Evidence, Korrektur/Undo/Reanalyse, manuelle und bestätigte Events sowie der quellengebundene Begleiter. „Semantisch“ ist keine Tarifstufe: `questions`/`names` sind Basic, die übrigen fünf Premium.

**Fachlich entschieden:** Scope, Daten-/Conversation-Regeln, 22 Analyseverträge, Import/Updates, Evidence/Korrektur/Reanalyse und AI-/Begleiterausführung. **approved bedeutet fachlich entschieden, nicht gebaut oder produktiv evaluiert.** Der aktuelle React-Prototyp bietet UI, Referenzrenderer und lokale Interaktionen; produktiver Import, Analyseengine, echte Reanalyse und externe KI sind noch zu implementieren. Ein synthetisches Testpaket liegt vor. Qualitäts-, Kosten-, Performance- und Privacy-Produktionsnachweise stehen aus.

## 1. Autoritative Dokumenthierarchie

Die folgende Reihenfolge ist die Lese- und Grundpriorität. Die Konfliktregel darunter ist entscheidend; bloße Dateireihenfolge hebt keine spezifischere freigegebene Regel auf.

| Rang | Dokument | Verbindlicher Zweck |
|---|---|---|
| 1 | [V1_PRODUCT_DECISIONS.md](V1_PRODUCT_DECISIONS.md) | Explizite Freigaben, Änderungen, approved/open und Grenzen |
| 2 | [DATA_AND_COUNTING_RULES.md](DATA_AND_COUNTING_RULES.md) | Rohdaten, Personen, Zeit, eigene Texte, Zähleinheiten |
| 3 | [CONVERSATION_AND_RESPONSE_RULES.md](CONVERSATION_AND_RESPONSE_RULES.md) | Blöcke, Neustart, Antwort, Pause, Ruhezyklen |
| 4 | [SEMANTIC_CLASSIFICATION_AND_QUALITY_RULES.md](SEMANTIC_CLASSIFICATION_AND_QUALITY_RULES.md) | Gemeinsame Klassifikations-, Abdeckungs-, Auto-/Review- und Qualitätsregeln |
| 5 | [ANALYSIS_CONTRACTS_FREE_V1.md](ANALYSIS_CONTRACTS_FREE_V1.md) | Sechs Free-Funktionen einschließlich Formeln/Sollfällen |
| 6 | [ANALYSIS_CONTRACTS_BASIC_V1.md](ANALYSIS_CONTRACTS_BASIC_V1.md) | Neun Basic-Kernfunktionen einschließlich Grenzwerten |
| 7 | [ANALYSIS_CONTRACTS_SEMANTIC_V1.md](ANALYSIS_CONTRACTS_SEMANTIC_V1.md) | Sieben semantische Funktionsverträge und klassenspezifische Qualitätsziele |
| 8 | [IMPORT_AND_CHAT_UPDATE_V1.md](IMPORT_AND_CHAT_UPDATE_V1.md) | Quellen, Identität, Add/Replace, Konflikte und Retention |
| 9 | [EVIDENCE_CORRECTION_REANALYSIS_V1.md](EVIDENCE_CORRECTION_REANALYSIS_V1.md) | Evidence, Journal, Undo, Abhängigkeiten und konsistente Ergebnisstände |
| 10 | [AI_EXECUTION_AND_COMPANION_V1.md](AI_EXECUTION_AND_COMPANION_V1.md) | Ausführungsgrenzen, Outputvalidierung, Begleitermodi und geschlossene Action-Allowlist |
| 11 | [V1_TEST_AND_ACCEPTANCE_PLAN.md](V1_TEST_AND_ACCEPTANCE_PLAN.md) | Testzuordnung, Ausführbarkeit, Produkt-/Provider-Abnahme |
| 12 | [V1_SYNTHETIC_DATASET_MANIFEST.md](V1_SYNTHETIC_DATASET_MANIFEST.md) | Synthetische Quellen, Ground Truth, Sollwerte, Grenzen |
| 13 | [MVP_SCOPE_AND_ACCEPTANCE.md](MVP_SCOPE_AND_ACCEPTANCE.md) | Ergänzende bereichsübergreifende Acceptance Criteria; historische Offenstände nur soweit nicht entschieden |
| 14 | ergänzende [Produkt](docs/PRODUCT_SPEC.md)-, [UX](docs/UX_RULES.md)-, [Analyse](docs/ANALYSIS_RULES.md)-, [Design](docs/DESIGN_SPEC.md)- und weitere `docs/`-Unterlagen | Ergänzungen innerhalb der später freigegebenen Verträge |

**Konfliktregel:** explizite spätere Product Decision gewinnt; danach der spezifischere freigegebene Vertrag für den betroffenen Gegenstand. Historische Mock-/Legacywerte gewinnen niemals gegen approved Regeln. Eine alte `open`-Markierung öffnet keine später ausdrücklich approved Entscheidung erneut. Das gilt insbesondere für DC-/CR-Regeln, LS-SA-01, Free/Basic/Semantic-Definitionen, SQ-Policies und die drei IMP-Policies. Der aktuelle finale Auftrag fixiert den 22er-V1-Scope; frühere A/B-Empfehlungsformulierungen sind dafür keine erneute Grundsatzfreigabe-Hürde.

Dieses Handoff ist Wegweiser und Zusammenfassung, keine alternative Formelquelle. Test-Orakel und generierte Sollwerte sind Prüfmittel innerhalb ihres deklarierten Umfangs. Bei echtem Widerspruch zum approved Vertrag nicht die Formel dem Fixture anpassen: betroffene Stelle/Version dokumentieren, isolieren und fachlich klären. Keine stillschweigende Auswahl der bequemeren Variante. Neue Product Decision nur bei tatsächlichem Widerspruch oder bewusster Änderung, keine weitere planmäßige Spezifikationsphase.

`AGENTS.md` gilt für die Arbeitsweise. `CODEX_START_HERE.md` beschreibt den historischen Migrationseinstieg und startet keine erneute Migration. [CURRENT_PRODUCT_STATE.md](CURRENT_PRODUCT_STATE.md), `MIGRATION_STATUS_*.md` und [KNOWN_LEGACY_DEFECTS.md](KNOWN_LEGACY_DEFECTS.md) dokumentieren Iststand/Historie/Fehler, nicht neue Sollformeln. Kosten-/Leistungsnachweise: [Messplan](V1_RELEASE_MEASUREMENT_PLAN.md), [D-PERF](D_PERF_MEASUREMENT_REPORT.md), [D-COST](D_COST_MEASUREMENT_MODEL.md).

## 2. Aktueller Ausgangspunkt für die Umsetzung

Vite/React/TypeScript-SPA mit sechs Kategorien, Chatguard, Overlay-/Dialoghost, Dashboardkonfiguration, Kontext, Events, Reader, Evidenceaktionen, Planvorschau und zwei aktiven Themes (`editorial-warm`, `night-mode-chic`). Home ist globale Bibliothek ohne Analysewerte; Chatwahl öffnet Dashboard. Home setzt den Chatkontext zurück. Dashboard/Analyse/Begleiter sind ohne aktiven Chat geschützt. Interne Stufen I/II.A bleiben unsichtbar.

Die Bestandsaufnahme vom 04.11.2026 dokumentiert Migration bis Schritt 6 und beide Designkorrekturläufe als vorhanden. Der punktuelle Codeabgleich für dieses Handoff bestätigt weiterhin die Prototypgrenze:

- [Feature Registry](src/config/featureRegistry.ts): 33 Ziele mit `legacy-reference`/`unavailable`, keine produktiven Enginefreigaben.
- [Analyse-Registry](src/analysis/registry.ts): 26 Renderer einschließlich der dynamischen Eventansicht. UI-Renderer sind keine Analysealgorithmen.
- [Analysevertrag](src/analysis/contracts.ts), [Shellvertrag](src/data/repositories/shellRepository.ts) und [Referenzdaten](src/data/fixtures/analysisReference.json): explizite Referenz-/Fixturebasis.
- [Begleiterservice](src/companion/mockCompanionService.ts): lokale Mockantworten und Fixturezugriffe; keine LLM-Anbindung.
- [Importdialoge](src/interactions/ImportDialogs.tsx): UI eines simulierten Imports, kein Nachweis produktiver Parser/Deduplizierung.

Lokale Browserpersistenz für bestimmte Interaktionen ist real vorhanden. Sie beweist keine produktive kanonische Datenhaltung, konsistente serverseitige Persistenz, Mehrgeräte-Synchronisierung oder vollständige Löschung. Event-CRUD und Filterung funktionieren lokal; das beweist keine automatische Eventerkennung. Ein Ausschlussflag beweist keine Reanalyse. Teilstringsuche in Ersatznachrichten beweist keine vollständige semantische Evidence.

Bestehende Komponenten dürfen weiterverwendet werden. Mockadapter, Referenzzahlen und direkte Fixturezugriffe müssen für reale Chats durch geprüfte Enginepfade ersetzt oder in einer deutlich isolierten Demonstration verbleiben. Die synthetischen Testquellen gehören nicht automatisch als Demo-Daten in das öffentliche Produktbundle. Bekannte Altfehler sind ausdrücklich kein gewünschtes Paritätsverhalten.

## 3. Fachliche V1 Feature Registry

**Tier** bezeichnet die bestehende konfigurierbare Zugangszuordnung, keine Preis-/Kontingentzusage. Bei vollständig abgenommenem Umfang: 6 Free, zusätzlich 11 Basic = 17, zusätzlich 5 Premium = 22, Begleiter separat. Fachvertragsgruppe „neun Basic“ ist daher nicht gleich „alle Funktionen im Basic-Tarif“. Ein Tarif kann keine unavailable-Funktion freischalten. Kosten-/Releasebedingungen bleiben Gate, keine neue Analyse.

Abkürzungen: **F** = Free-Vertrag, **B** = Basic-Vertrag, **S** = Semantic-Vertrag (Links in §1); **D** = deterministisch, **H** = hybrid, **Sema** = semantisch gemäß AI-Ausführungsvertrag §11. **UI** = Referenzrenderer vorhanden, produktive Berechnung noch zu bauen. **Event-UI** = lokale Verwaltung vorhanden, produktive Kandidatenpipeline fehlt.

Snapshot: **Ja** = bestehender Dreikartenumfang; **Ja, optional** = im spezifischen Semantic-Vertrag erlaubte Kurzprojektion, noch keine vorhandene produktive Karte oder Pflichtkarte; **Nein** = keine zusätzlich freigegebene Pflichtkarte. Auch Ja braucht echte gültige Daten und die vorgeschriebene Darstellung.

| Feature ID | Sichtbarer Name | Kategorie | Tier | Typ | Vertrag | Wichtigste Abhängigkeiten | Produktive AI-Evaluation nötig? | Snapshot | Implementierungsstand |
|---|---|---|---|---|---|---|---|---|---|
| prime | Prime Time | Your Chat Rhythm | Free | D | F: prime | sichere lokale Stunden, P, Peakfenster | Nein | Ja | UI |
| weekday | Lieblingstag | Your Chat Rhythm | Free | D | F: weekday | Kalendertag, Personenmengen, P | Nein | Nein | UI |
| streak | Chat Streak | Your Chat Rhythm | Free | D | F: streak | aktive Tage, Coverage, Randzensierung | Nein | Ja | UI |
| peak | Peak Day | Your Chat Rhythm | Free | D | F: peak | Tagescounts, Gleichstände, P | Nein | Ja | UI |
| texting | Texting Champion | How You Text | Free | D | F: texting | Sendebeiträge, eigene Worttokens | Nein | Nein | UI |
| emoji | Emoji DNA | How You Text | Free | D | F: emoji | eigene Grapheme, Familien/Originale | Nein | Nein | UI |
| hotcold | Hot & Cold Phases | Your Chat Rhythm | Basic | D | B: hotcold | vollständige Tage, Baseline, Tagesmasken | Nein | Nein | UI |
| silence | Longest Silence | Your Chat Rhythm | Basic | D | B: silence | echte Nachbarschaft, Zeiten, Intervallmasken | Nein für Wertung | Nein | UI |
| move | Wer macht den ersten Move? | Who Makes the Move? | Basic | H | B: move | CR-Blöcke, Neustart/Fortsetzung, P | Für modellbasierte Relationsprüfung | Nein | UI |
| response | Fast Responder | Who Makes the Move? | Basic | H | B: response | gültige Quellblock-/Antwortrelation, Präzision | Für modellbasierte Antwortzuordnung | Nein | UI |
| firstlast | First & Last | Who Makes the Move? | Basic | H | B: firstlast | Ruheprofile beider Personen, CR-08/09 | Für modellbasierte Ruhezuordnung | Nein | UI |
| longstory | Long Story Short | How You Text | Basic | H | B: longstory | eigene Tokens, gültige Antwortblöcke | Nur für abhängige Responseprüfung | Nein | UI |
| words | Your Greatest Hits | Your Language | Basic | D | B: words | Sprachbasis, words-stop-v1, Mindestkorpus | Nein für Wortwertung | Nein | UI |
| pulse | Communication Pulse | Your Chat Rhythm | Basic | D | B: pulse | vollständige Perioden, N/W/aktive Tage | Nein | Nein | UI |
| deepdive | Hot & Cold Deep Dive | Your Chat Rhythm | Basic | D | B: deepdive | gültige Hotcold-Phase, L-Fenster, Eventkontext | Nein für Vergleich | Nein | UI |
| questions | Wer will mehr wissen? | Between the Lines | Basic | H | S: questions | Frageakte, Adressat, Rollen, D/R/U/X | Ja für automatische Semantik | Ja, optional | UI |
| names | Name Game | Your Language | Basic | H | S: names | Anredeakte, bestätigte Identität/Aliase | Ja für automatische Bedeutung | Ja, optional | UI |
| topics | What We Talk About | Your Chat Universe | Premium | Sema | S: topics | eigene Nachricht, feste Multi-Label-Ontologie | Ja | Ja, optional | UI |
| social | Social Signals | Between the Lines | Premium | Sema | S: social | Nachricht×Label, Zielrolle/Proposition | Ja | Ja, optional | UI |
| lifeevents | Life Events | Your Chat Rhythm | Premium | Sema | S: lifeevents | Erwähnungen, Kandidatenidentität, Datumsherkunft, Bestätigung | Ja für KI; manuelles CRUD nein | Ja, optional | Event-UI |
| humor | Your Humor Code | Your Language | Premium | H | S: humor | Marker, Reaktionsbezug, Insiderstruktur und Review | Marker nein; Reaktion/Insider ja | Ja, optional | UI |
| topicstarts | Who Brings It Up? | Your Chat Universe | Premium | H | S: topicstarts | zentrale Topics, Impulsrelation, Kontext | Ja für automatische Impulsrelation | Ja, optional | UI |

Diese Tabelle definiert keine neuen Kategorien oder Berechnungstypen. Insbesondere ist `deepdive` nach dem spezifischen aktuellen Vertrag deterministischer Vergleich; die ältere pauschale Hybridbezeichnung in `docs/ANALYSIS_RULES.md` macht daraus keine zusätzliche KI-Auswertung.

**Nicht V1-produktiv / später:** `eras`, `future`, `rituals`, `futuretrend`, `qdyn`, `flow`, `closeness`, `mineours`, `opening`, `report`, `changed`. Vier davon besitzen historische Referenzrenderer, sieben sind heute unavailable. Keines wird dadurch Teil von V1. Sichtbare spätere Ziele müssen ehrlich als später/unavailable erkennbar bleiben; keine echten Ergebnisse oder bezahlbare Verfügbarkeit vortäuschen. Der Begleiter erzeugt diese Analysen auch nicht indirekt.

## 4. Nicht verhandelbare Invarianten

- Stabile Chat-/Participant-/Message-/Evidence-Identitäten und Quellprovenienz. Keine Laufzeitverknüpfung über Arrayindex, Textanfang oder geratenen Zeitpunkt; unauflösbare Referenz bleibt unresolved.
- Eindeutiger Wiederimport erzeugt keine doppelten Nachrichten. Gleicher Anzeigename ist keine Teilnehmeridentität. Gruppen-Dritte bleiben außerhalb A/B-Zählmengen und können erforderlicher Kontext sein.
- Keine erfundenen Zeiten, Zeitzonen oder Sekunden. Relative P-Presets beziehen sich auf `chat_end`, nicht Systemdatum. Abdeckung/Lücken und unvollständige Randperioden sichtbar behandeln.
- Reactions sind keine Nachrichten, Streakaktivität oder Emoji-DNA. Medien-/Löschbeiträge nach DC-Regeln zählen; unbekannte oder gelöschte Inhalte nicht rekonstruieren.
- Jede Kennzahl hat definierte Zähler/Nenner/Einheiten, P und Datenversion. Keine neue Zahl, keinen Score oder Durchschnitt ohne Vertrag. UI-Rundung ändert keinen Gewinner.
- Ungeprüft, uncertain, unresolved und excluded sind nicht negativ oder null. Teilmengenquoten samt Entscheidungsabdeckung ausdrücklich benennen.
- Vollständige paginierte/gefilterte Evidence, keine Top-k-Liste als Vollständigkeitsbeweis. Jeder angezeigte Chattext führt zur exakten Originalstelle; unresolved liefert keinen erfundenen Sprung.
- Korrekturen persistent, rücknehmbar und an Gegenstand/Fassung/Scope gebunden; echte Neuberechnung der abhängigen Mengen. Relevanter Inhaltsedit verlangt Review, keine blinde Übertragung.
- Keine stale Zahlen als aktuell, keine gemischten Resultatversionen, keine verspäteten Runs über neuere Zustände. Error erhält die gespeicherte Korrektur und kennzeichnet den Ergebnisstand ehrlich.
- Keine psychologischen Tatsachen über Gefühle, Absichten, Interesse, Bindung oder Charakter. Beobachtung, Interpretation, Hypothese getrennt. Events sind Kontext, kein Kausalbeweis.
- Keine Modellaktion ohne konkrete aktuelle Preview und Nutzerbestätigung; keine automatische Eventbestätigung. `shared_insider` bleibt immer Review in V1.
- Chattexte, Zitate, URLs und Dateien sind Daten, keine Systeminstruktionen. Scope-/ID-/Actionkontrollen außerhalb des Modells; keine Prompt-Injection-Ausführung.
- Kein hidden sampling, kein stiller Whole-Chat-Cut, keine Teilanalyse als Gesamtergebnis. Keine Mock-/Referenzwerte als Produktionsfallback.
- Keine stillen Änderungen approved Schwellen/Ontologien/Qualitätsgrenzen. Keine Fachregel aus einem UI-Mock ableiten.

Als Umsetzungsanker, nicht Ersatz der Verträge: CR-Blöcke höchstens 5 Minuten, Neustartkandidat ab 4 Stunden; Ruhe zusätzlich mindestens 2 Stunden gemeinsame Profilüberlappung und CR-08/09-Prüfung. Kurze gültige Textantwort 1–3 eigene Tokens. Hotcold mindestens 14 Vergleichstage, Hot ≥1,5×B, Cold ≤0,5×B, Phase mindestens 3 direkt benachbarte Tage. Signature nur bei jeweils mindestens 100 rankbaren Tokens, c≥3 und Rate≥2×Gegenseite. Diese approved Werte nicht als frei wählbare technische Parameter behandeln.

## 5. Datenbasis, Import und Enhanced Exporter

Vier Wege nach [Importvertrag](IMPORT_AND_CHAT_UPDATE_V1.md): Standard-WhatsApp-TXT/ZIP, Paste, allgemeines Transkript, optional ZDZ Enhanced. Jeder Weg führt über Prüfung/Preview und explizite Übernahme zur kanonischen Basis. **Standard bleibt vollwertiger Basisweg**, Enhanced ist keine Voraussetzung. Quellprofile und deren tatsächliche Grenzen müssen geprüft/versioniert sein; kein universelles WhatsApp-Format behaupten. Transkripte ohne Zeiten erlauben nur fachlich geeignete Textauswertung, keine erfundene Kalenderaktivität.

**Add** ergänzt und dedupliziert; fehlende alte Nachrichten bedeuten keine Löschung. **Replace** übernimmt nach Bestätigung die neue aktuelle Basis; alte fehlende Beiträge entfallen aus dieser Basis, werden dadurch aber nicht zu belegten Messenger-Löschereignissen. Eindeutig gültige Nutzerentscheidungen, Events und Kontext erhalten; weggefallene Quellenreferenzen unresolved/inaktiv. Teilnehmer und gegebenenfalls A/B-Dyade bestätigen.

IMP-PARTIAL-01: wesentliche Identitäts-/Sprecher-/Versions-/Zielchatkonflikte blockieren den geplanten Commit als Ganzes. Bisheriger gültiger Bestand bleibt unverändert. Fehlende optionale Reactions/Replies/Source-IDs sind dagegen nicht automatisch ein Blocker und nicht als beobachtete Null auszugeben. Leerer oder parserbedingt leerer Replace ist niemals Chatlöschung.

IMP-VERSION-01: nur belastbar neuere Quellrevision ersetzt automatisch dieselbe Nachricht. Weder späterer Import noch Dateizeit, Enhanced oder mehr Felder gewinnt pauschal. Ungeklärte Fassungsordnung verlangt Konfliktreview; explizite Wahl des aktuellen Appstands ist Nutzerentscheidung, kein Quellenbeweis. Fehlendes Feld löscht kein sicher bekanntes Metadatum.

IMP-RETENTION-01: keine versteckte unbegrenzte Volltexthistorie ersetzter Quellen. Nicht-inhaltliche Entscheidungs-/Versionsprovenienz darf bleiben; entfernte private Texte nicht für hypothetisches Undo archivieren. Kein One-click-Replace-Undo versprechen, wenn alte Volltexte fehlen. Vollständige Löschung ist eigene Aktion mit später technisch nachzuweisender Retention-/Backupwirkung.

**Lokaler ZDZ Enhanced Chat Exporter:** späterer technischer Baustein: eigener lokaler WhatsApp-/Gerätebestand → genau ausgewählter Chat → minimierter Enhanced Export. Möglich sind Reply, Reactions, stabile Source references, Edit/Delete, Captions und Zeitpräzision ausschließlich soweit tatsächlich vorhanden. Kein vollständiges Gerätebackup in die Web-App hochladen. Kein Backupzugriff oder Entschlüsselungsmechanismus wird hier spezifiziert. Die erste Web-App kann mit Standardexport implementiert werden. Das Testprofil `synthetic-test-1` ist ausdrücklich kein produktives Dateiformat; dessen Schema/Versionierung bleibt technische Entscheidung innerhalb des Importvertrags.

## 6. AI-Ausführung und Begleiter

Kein Whole-Chat-Monolith. Deterministische Vorverarbeitung bildet definierte Zieleinheiten und minimal erforderliche, scopegebundene Kontexte. Eigene Inhalte, Fremdzitate und Drittpersonen trennen; zulässige Labels/IDs/Versionen kommen aus der Anwendung, nicht aus Chattext. Strukturierte Outputs auf Schema, erlaubte Werte, Quellen/Segmente, Rollen, Einheiten, Scope und Version prüfen. Ungültige Ausgabe wird nicht Evidence oder aktuelle Kennzahl. Aggregation bleibt deterministisch.

Calibration → qualifiziertes Confidence Band → freigegebene Auto-/Reviewentscheidung, jeweils Feature×Klasse×Sprache×Einheitentyp×Regelversion×Modell-/Klassifikationsversion. Keine providerunspezifische High-Behauptung und kein Modellselbstrating als Kalibrierung. Fallbackmodell nur mit eigener gültiger Evaluation. Gültige Nutzerentscheidungen haben Vorrang. High bestätigt kein Event; Insiderreview bleibt Pflicht. DE/EN getrennt, Mischsprache gesondert prüfen. Klassenspezifische §19-Ziele und SQ-AUTO/COUNT/CRITICAL unverändert; Reviewbetrieb ist nur ausdrücklich freigegeben unter übrigen Qualitätsgates zulässig.

### Erlaubte Begleitermodi

| Modus | Pflicht / Grenze |
|---|---|
| RESULT_EXPLANATION | gültige Result-ID, richtiger Zeitraum/Stand, unveränderte Werte/Methodik |
| EVIDENCE_SEARCH | echte Quellen, Rollen, Suchscope/Abdeckung, mehrere plausible Treffer |
| OPEN_QUESTION | Klärungsfrage bei unklarer Nutzeranfrage; keine Analyse „unbeantwortete Fragen“ |
| HYPOTHESIS | mögliche Lesart mit Evidence, Unsicherheit und Alternativen; keine Mutation |
| ACTION_PROPOSAL | erlaubter Vorschlag mit konkreter Preview, noch nicht ausgeführt |
| ACTION_RESULT | tatsächlicher Speicher-/Ausführungs-/Reanalysestatus, kein Modell-Erfolgstext als Beweis |
| DATA_LIMITATION | fehlend/unsupported/unavailable/review/stale ehrlich benennen |
| ERROR | tatsächlicher Verarbeitungsfehler und zulässiger Retry |

Begleiter ist keine Hintertür zu späteren Features oder eigenen Scores. Temporärer Such-/Analysezeitraum verändert P nicht. „Erste gefundene Erwähnung“ gilt nur im tatsächlich geprüften Scope; keine erste-Lebensereignis-Behauptung. Zitate sind quellengleiche Ausschnitte mit stabiler Referenz, Paraphrasen als solche kenntlich.

### Geschlossene Action-Allowlist

1. Evidence bestätigen.
2. Evidence für konkretes Feature/Label ausschließen.
3. Evidence innerhalb approved Labels/Rollen reklassifizieren.
4. Eventkandidat mit allen vorgesehenen Feldern bestätigen.
5. Eventkandidat verwerfen (kein bestätigtes Event löschen).
6. Vorhandenes Event bearbeiten, einschließlich Notiz/Datum.
7. Globalen Zeitraum mit konkreten Grenzen ändern.
8. Bestehendes Kontext-/Schlafprofilfeld der richtigen Person/Dyade ändern.
9. Konkretes Silence-Intervall aus bereinigter Wertung ausschließen.
10. Konkrete ganze Hotcold-Kalendertage ausschließen.

Verbindliche Kette: **Proposal → Preview → Confirm → Execute → erforderliche Reanalyse → tatsächlicher Result Report.** Zielchat/Dyade/Gegenstand, alte/neue Werte und relevante Versionen binden. Änderung seit Preview erfordert erneute Preview, doppelte Bestätigung keine Doppelmutation, Cancel keine Wirkung. Undo regulär und nur bei gültigem Gegenstand; kein freies Modell-Zurücksetzen.

Nicht erlaubt über diesen Modellpfad: Import/Replace, vollständige Chatlöschung, Tarif-/Berechtigungsänderung, Dashboardkarte hinzufügen, beliebige Dateien/URLs/Netztools, freie Datenabfragen, neue Klassen oder Actions. Historische Beispiele in `docs/AI_COMPANION_SPEC.md` erweitern die spätere geschlossene Allowlist nicht. Manuelles Eventanlegen/-löschen bleibt eine eigene UI-Fähigkeit, keine automatisch erlaubte Modellaktion.

## 7. Implementierungsphasen und Definition of Done

Phasen sind Implementierungspakete, keine neuen Spezifikationsrunden. Technische Umordnung ist zulässig, wenn Abhängigkeiten und Gates erhalten bleiben. Evidence-/Korrektur-IDs, Versionen und Persistenzanschlüsse bereits ab Phase 1 vorsehen; Phase 5 macht daraus den vollständigen integrierten Ablauf. Die passende Reanalyse ist Teil der Abnahme einer angebotenen Funktion, kein bis nach Veröffentlichung verschiebbares Extra.

Jede Phase benötigt ein Protokoll mit Test-/Requirement-ID, Fixture-SHA, Daten-/Regel-/Appversion, Scope/Dyade, Soll/Ist, PASS/FAIL/BLOCKED und Nachweis. Status „testable now“ heißt nicht bestanden. Test- und Acceptance-IDs kommen aus dem bestehenden Mapping; neue Integrationstests dürfen diese IDs übernehmen, aber keine Baseline passend zu einem Fehler umschreiben.

| Phase | Umsetzung / führender Vertrag | Tests und Acceptance Gate | Was done ausdrücklich nicht bedeutet |
|---|---|---|---|
| **1 Kanonische Datenbasis** | Chat, Participant, stabile MessageId, Provenienz, Zeit/Sprach/Typbasis; Standard TXT/ZIP/Paste/Transkript, Preview, Add/Replace/Dedupe; Daten- und Importvertrag | IMP-Fälle, Gruppen-Dyaden, fehlende Zeit, Alias/ID/Revision, atomarer Konfliktabbruch, leerer Replace, Reload, Retention. Standard/aktuelle Quelle nachvollziehbar, neue IDs stabil, keine verlorenen Entscheidungen | simuliertes Importfenster, gespeicherte Dateinamen oder vorgegebene Teilnehmer sind kein Import |
| **2 Sechs Free** | F-Verträge auf kanonischer Basis, P, Nachvollziehbarkeit/Drilldown und Korrektur-/Updateabhängigkeiten | sechs F-Sollfälle plus Hauptchat-Expected, Emoji/Reaction, Zensierung, Gleichstände, Randfälle. Echte Mengen/Formeln/Einheiten, kein Mockfallback; relevante Updates neu rechnen | UI zeigt Zahl oder stimmt zufällig mit Referenz überein ≠ done |
| **3 Conversation Engine** | CR-Blöcke, Sessions, Neustartkandidaten, Response-Relation, Silence, Ruhezyklen | 5:00/5:01, 3:59/4:00, C-Unterbrechung, Fortsetzung, unklare Replies, Präzision, Profilüberlappung/Zyklusgleichstand; autorisierte Goldrelationen und Hybridkarten | Zeitheuristik allein beweist keine Antwort/Neustart/Nacht; Modellautomatik braucht eigenes Gate |
| **4 Basic D/H** | alle neun B-Verträge auf Daten/CR; keine eigene Deepdive-Phase | B-Sollfälle, 13/14 Tage, Tagesausschluss, 99/100 Tokens, gültige Antwortblöcke, vollständige Pulse-/L-Fenster, Zeitraum/Update. Relationsqualität getrennt von Aggregation | reine Formelerfolge geben keine ungeprüfte Hybridklassifikation produktiv frei |
| **5 Evidence/Korrektur/Reanalyse** | vollständige Listen/Filter/Pagination, Reader Jump/Back, Correction Journal, Undo, Dependency Matrix, stale/processing/valid/error; Evidencevertrag | EC-/AC-EV-Fälle, CORR-Sollwerte, echte Zähler-/Nennerwirkung, Reload/Undo, Add/Replace, Race-/Fehler-/Löschfälle, Chat-/Dyadenisolation. Karte/Detail/Evidence gleicher Stand | Flag/Toast, gekürzte Top-k-Liste, vermischte Versionen oder Ersatznull sind kein Bestehen |
| **6 Semantische Pipeline** | definierte Einheiten/strukturierte Outputs; questions, names, topics, social, lifeevents, humor, topicstarts; S-/SQ-/AI-Verträge | Goldsets, Rollen/Zitate/Mehrfachakte, Multi-Label/Nenner, vollständige Suche, Eventzustände, Insiderreview, Injection/Scope; §19-Gates je Klasse/Sprache/Version | synthetischer Erfolg ist kein Realsprachrelease; Modell-High kein Qualitätsnachweis |
| **7 Begleiter** | gültige Resultate/Evidence als Quellen; acht Modi, zehn erlaubte Actions | 50 Companionfälle und AI-Originalfälle, Scope/temporäres P, Stale/Unavailable, Confirm/Cancel/Versionskonflikt, tatsächliche Reanalyse; Companion-Qualitätsgate | freundlicher Chatbot oder freie Ersatzanalyse genügt nicht; keine zusätzlichen Scores |
| **8 Enhanced Import** | optionaler weiterer Quelladapter, vorhandene Reply/Reaction/Revision/Caption-/Präzisionsdaten; Importvertrag | Standard/Enhanced derselben Chats, Source-ID-Ergänzung, alte Replies, Reaction-Invarianz, unbekannte Version, Metadatenabdeckung und Konflikte | synthetisches JSON ist kein echter lokaler Exporter; Standardweg bleibt unabhängig nutzbar |
| **9 Product Hardening** | Privacy/Security/Auth/Provider, Löschung, Performance/Cost, Browser/Mobile und Deployment innerhalb Fachregeln | reale Messungen, Freigabe aller Gates für zugesagten Umfang, Sicherheits-/Löschtests, Upload/Download, 390×844/430×932/1024×768 × beide Themes; vollständiges Releaseprotokoll | erfolgreicher Build, statisches Hosting oder lokale Speicherung allein sind keine Produktionsabnahme |

Für jede tatsächlich veröffentlichte Analyse gilt gemeinsam: echte Datenbasis, Fachformel, richtige Evidence, P, Randfälle, echte relevante Reanalyse, verifizierte Sollwerte, ehrliche Daten-/Ergebniszustände und keine Mockfallbacks. Einzelne Phasen können technisch fertig sein, während Modell-/Releasegates noch blockieren; das muss getrennt ausgewiesen werden. Ein kleinerer Startumfang ist eine ausdrückliche Scope-Entscheidung, keine still „vollständige V1“ genannte Reduktion.

## 8. Vorhandenes Testpaket

Einstieg: [Testplan](V1_TEST_AND_ACCEPTANCE_PLAN.md), [Datensatzmanifest](V1_SYNTHETIC_DATASET_MANIFEST.md), [maschinenlesbares Inventar](tests/v1/data/manifest.json), [22er-Matrix](tests/v1/data/feature_matrix.json), [Requirement-Mapping](tests/v1/data/acceptance_mapping.json), [Original-Vertragsfälle](tests/v1/data/contract_examples.json).

- Drei Halbjahreschats 01.01.–30.06.2026: A 1.418, B 1.236, C 1.797, insgesamt **4.451 Beiträge**. Vollständig synthetisch, variable Tagesmengen, DE sowie EN/Code Switching.
- Je Chat Standard-TXT/ZIP, Enhanced-Testprofil, Ground Truth und deterministische Expected Results unter `tests/v1/data/main/`.
- 23 Importfälle, 24 Edge-Fixtures, Gruppe A/B/C/D mit ausgewählter Dyade, acht adversarial Inputs, Korrekturszenarien.
- 441 semantische Challengefälle für 63 Katalogeinträge plus 63 ergänzende Kontrollen, fünf Hybridkarten, 50 Begleiterfragen. Lifecycle-/Review-/deterministische Markerfälle sind nicht pauschal Modellklassen.
- 441 deklarative Original-Vertragsfälle und 2.892 inventarisierte Quellzeilen/-absätze. Mappingvollständigkeit ist kein ausgeführter Beweis jeder fachlichen Assertion.

Hauptchats development, separate Familien final-synthetic; unabhängiges Kalibrierungsset vor Tuning erforderlich. Autorengold ist keine unabhängige Adjudikation. **Synthetische Daten sind Pipeline-/Integrationsgrundlage und ersetzen niemals die repräsentative autorisierte Realsprach-Evaluation vor Produkt-AI-Release.** Nach Tuning auf exponierten Finalfällen braucht es einen neuen unabhängigen Holdout.

`tests/v1/reference.mjs` ist ein begrenztes Test-Orakel für deklarierte synthetische Daten/Goldrelationen, kein produktiver Parser und keine vollständige Engine. Produktionsformeln nicht daraus ungeprüft kopieren. Allgemeine unsichere Quellen, echte Klassifikation, produktive Persistenz/Races und UI-Zustände brauchen eigene Implementierung und Tests gegen die Verträge.

Historischer Nachweis des Testpakets: **24/24 Daten-/Vertragstests bestanden**, dokumentiert in [validation.txt](tests/v1/measurements/validation.txt). D-PERF enthält ausschließlich lokale Node-Harnessmessungen; D-COST bleibt parametrisch. Dieser Handoff-Auftrag hat keine Tests, Builds, Browser-/Providerprüfung oder Datengenerierung erneut ausgeführt und behauptet keinen neuen Produkt-PASS.

## 9. Offene Production Release Gates

Keine neue fachliche Feature-Spezifikationsrunde. Technische Umsetzung bereitet Entscheidungen/Nachweise vor und muss sie vor produktiver Freigabe abschließen; produktseitige Qualitäts-/Budget-/Releaseentscheidungen brauchen die zuständige Freigabe, nicht bloß einen technischen Default.

| Gate | Noch erforderlicher Nachweis / Entscheidung | Blockiert |
|---|---|---|
| D-PERF | echte Parse/Preview/Commit/Analyse/Reanalyse/Download-/Speichermessungen auf vorgesehenen Geräten; daraus Support-, Timeout- und Lastbereich | belastbare Leistungs-/Umfangszusage; Harnesszahlen sind kein Produktlimit |
| D-COST | konkrete Providerusage/Preise, Retry/Cache/Add/Replace/Korrektur, erlaubte Kontingente/Kostenbestätigung je Angebot | belastbare AI-/Tarifkostenfreigabe; keine Preise erfinden |
| AI-HYBRID-QUALITY-01 | unabhängige numerische Güte für Move/Fortsetzung, Response-Relation und Ruhezuordnung; genehmigte Auto-/Reviewkombinationen | produktive hybride Modellpfade, nicht Rechnung auf gültigen Beziehungen |
| AI-COMPANION-QUALITY-01 | messbare Quellen-/Antwort-/Suchgüte, Modus-/Scope-/Actiontreue und Unsicherheit im zugesagten Umfang | produktiver Begleiter; synthetischer Dialog allein genügt nicht |
| AI-PRIVACY-EXEC-01 | konkreter Provider, Zweck, Regionen, Aufbewahrung, Training usage, Logs, Löschbarkeit, Subprocessor, Nutzerinformation/Consent soweit erforderlich, Secrets und Incidenthandling | externe Verarbeitung und entsprechende Privacyzusagen |
| Production Privacy / Löschung | tatsächliche Speicherung/Backups/Fristen, Löschung von Originalen/Ableitungen/Nutzerzuständen, späte Jobs, nachweisbare Zugriffsgrenzen | produktive Retention-/Löschzusage |
| Qualifikation der semantischen Implementierung | vorhandene approved §19-Schwellen mit unabhängigen Daten je Klasse/DE/EN/Version nachweisen; SQ-CRITICAL-01: 0 beobachtete Critical Errors | jeweilige produktive Klassifikation; kein neues Schwellenregelwerk erforderlich |

Messverfahren und Checklisten stehen in [V1_RELEASE_MEASUREMENT_PLAN.md](V1_RELEASE_MEASUREMENT_PLAN.md). Keine automatische Absenkung nach schlechter Evaluation. Fehlende Auto-Precision lässt Automatik deaktiviert; Reviewbetrieb nur ausdrücklich freigegeben unter übrigen Gates. Sichere CR-08-Automatik bleibt fachlich erlaubt, aber nicht ohne Nachweis. Historische `open`-Einträge zu bereits entschiedenen Definitionen werden nicht wieder geöffnet.

## 10. Bewusst technische Entwicklerentscheidungen

Backendtechnologie, Datenbank, Hosting, Auth, API-Framework, Queue/Worker, Cache, konkreter LLM-Provider/Modellversion, Vektorsuche/Retrieval, Parserbibliotheken, State Management, Deployment, Monitoring, technische ID-Erzeugung und konkretes versioniertes Enhanced-Dateiformat bleiben technische Auswahl. Keine dieser Entscheidungen darf Zähleinheiten, Identitätsstabilität, P, Rollen, Ontologie, approved Schwellen, Nutzerentscheidungsvorrang oder Retentionregeln verändern.

Technische Varianten mit Kosten-/Datenverarbeitungswirkung müssen die einschlägigen Releasegates erfüllen. Keine Providerkeys im Browser oder öffentlichen Repository; reale Modellaufrufe hinter sicherem Backend/Serverfunktion. Ein Anbieterwechsel übernimmt keine alte Automatikqualifikation ungeprüft.

## 11. Statische Umgebung und Repository Hygiene

Auf GitHub Pages/statischem Hosting können Dateiauswahl, synthetische TXT/ZIP/Enhanced-Fixtures, lokales Parsing falls implementiert, Preview, UI, lokale Speicherung falls verwendet und Downloads geprüft werden. Das beweist keine Serverpersistenz, Auth, externe AI, sichere Secrets, Mehrgeräte-Sync oder produktive Löschbarkeit.

Vor öffentlicher Übergabe/Deployment technisch prüfen: keine privaten Chats, Geräte-/WhatsApp-Backups, Secrets/API-Keys oder personenbezogenen Legacyfiles in öffentlichen Fixtures, Commit-Historie oder Build. Neue Testdaten sind synthetisch markiert. Bestehende `.gitignore`-Grenzen für `private-test-data/`, `prototype/`, `reference/` und `.env` sind Ausgangspunkt, kein vollständiger Secret-/Privacy-Audit. Öffentliche Testtexte dürfen nur synthetisch sein; historische Zahlenreferenzen gehören ausschließlich in klar abgegrenzte Demonstration/Characterization und sind keine Sollwerte.

**Keine bestehenden privaten Dateien durch diesen Dokumentauftrag löschen, kopieren oder veröffentlichen.** Private lokale Characterization-Artefakte sind keine Voraussetzung, um die öffentliche V1-Implementierung zu starten. Ein fehlender privater Testbestand ist offen zu dokumentieren, nicht aus dem öffentlichen Paket zu rekonstruieren. Übergabe-Commit/Branch/CI und reproduzierbare Installation sind technische Handoff-/Implementierungsarbeit; hier wurde kein Commit oder Deployment vorgenommen.

## 12. Konkrete Startanweisung für neuen Entwickler / AI-Coding-Agent

> Lies zuerst `AGENTS.md` und `V1_FINAL_HANDOFF.md`, dann `V1_PRODUCT_DECISIONS.md`, die Daten-/Conversation-/Semantic-Quality-Regeln und die für deine Phase führenden Verträge gemäß §1 vollständig. Lies `V1_TEST_AND_ACCEPTANCE_PLAN.md`, `V1_SYNTHETIC_DATASET_MANIFEST.md` und die relevanten Acceptance-/Fixturedateien. Verwende `CURRENT_PRODUCT_STATE.md` als historischen Istbericht und prüfe den aktuellen Code selbst. `CODEX_START_HERE.md` ist ein historischer Migrationsauftrag, kein neuer Startbefehl.

1. Audit aktuellen Code/Adapter/Storage/Registries gegen dieses Handoff, vorhandene Änderungen sichern, reale Implementierung von UI/Mocks trennen.
2. Keine UI-/Mockzahl als Formel oder Produktionsfallback verwenden. Keine privaten Quellen für öffentliche Tests heranziehen.
3. Implementiere **Phase 1**, unter Erhalt wiederverwendbarer UI und der fachlichen Identitäts-/Korrektur-/Versionsanschlüsse.
4. Führe synthetische Daten-/Vertragstests und echte Integrationsprüfungen des implementierten Pfads aus. Vorhandene Artefakte verwenden; Regeneration nur bei bewusstem Testdatenänderungsauftrag, nicht zum Verdecken von Fehlern.
5. Erst nach bestandenem passenden Phasengate zur nächsten Phase. Ausstehende Provider-/Releasegates getrennt ausweisen, kein Mock-PASS.
6. Bei echter fachlicher Lücke nicht raten: genaue Quelle/Gegenstand/Beispiel und Auswirkung dokumentieren, betroffenen Teil stoppen; unabhängige Arbeit fortsetzen.
7. Bewusste Abweichung nur durch neue Product Decision mit Version und erneuter betroffener Abnahme. Keine weitere allgemeine Spezifikationsrunde starten.

Lokale Befehle aus dem Projektverzeichnis (Node ≥24, bestehendes `packageManager` pnpm 11.19.0; Lockfile beachten):

```powershell
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1
```

Für spätere Implementierungsprüfungen:

```powershell
pnpm typecheck
pnpm build
pnpm test
node --test tests/v1/validate.test.mjs
pnpm check:privacy
```

`pnpm test:legacy` nur im dafür autorisierten lokalen Referenzkontext; private Dateien nicht ins Handoff übernehmen. Der vorhandene Privacy-Check kann lokale private Canarydaten lesen und ist kein Ersatz für den späteren Produktionsaudit. `node tests/v1/measure.mjs` ist optionaler synthetischer Messlauf und überschreibt seinen Messbericht; nicht mit einer rein lesenden Prüfung verwechseln. Für den Phasenüberblick siehe [V1_IMPLEMENTATION_CHECKLIST.md](V1_IMPLEMENTATION_CHECKLIST.md).

## FACHLICHE V1-SPEZIFIKATION: ABGESCHLOSSEN

- V1-Scope mit genau 22 Analyseverträgen definiert.
- Daten-/Conversation-Regeln definiert.
- Import-/Update definiert.
- Evidence/Korrektur/Reanalyse definiert.
- AI-Ausführung/Begleiter definiert.
- Synthetisches Testpaket vorhanden.
- Offene Production Release Gates benannt; keine behauptete Implementierungs- oder Produktionsfreigabe.

**Keine weitere fachliche Spezifikationsrunde ist für den Implementierungsstart erforderlich.**

Neue Dokumentation nur bei gefundenem echten Widerspruch, bewusstem Scope Change, neuer Product Decision oder gemessenem Release Gate.

**STOP.** Keine weiteren Analyseideen, keine V2-Spezifikation, keine UI-Neugestaltung und keine Implementierung in diesem Auftrag.

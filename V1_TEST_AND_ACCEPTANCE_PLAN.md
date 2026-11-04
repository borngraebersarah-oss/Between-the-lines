# V1 Test- und Abnahmeplan

Stand: 04.11.2026. Testartefakte, keine Produktimplementierung. Die freigegebenen Daten-, Gesprächs-, Analyse-, Import-, Evidence- und AI-Verträge bleiben unverändert verbindlich. Dieses Paket bereitet deren Ausführung vor; es schaltet keine Registry-Funktion frei.

## 1. Abnahmeobjekt und Nachweisgrenzen

Drei Ebenen strikt trennen:

1. **Daten-/Vertragsprüfung:** synthetische Quellen, Referenzintegrität, bekannte Formelbeispiele, berechnete Sollwerte und Mappingvollständigkeit. Jetzt ausführbar.
2. **Produktintegration:** reale Parser, Commit, Persistenz, Analyse, Korrektur, Reanalyse, Browserinteraktionen, Nebenläufigkeit. Die dazu formulierten Tests sind keine bestandenen Produktprüfungen.
3. **Modell-/Produktrelease:** unabhängige autorisierte Realsprachdaten, qualifizierte Klassifikationsversionen, statistische Gates, Provider-/Privacy-Nachweise. Synthetische Beispiele ersetzen das nicht.

Statuswerte des Mappings sind ausschließlich `testable now`, `blocked by implementation`, `blocked by provider/evaluation`. Status bezeichnet Ausführbarkeit, nicht Pass/Fail. Ein gemocktes Resultat besteht keinen Test auf echte Berechnung. Bestehende App-Paritätstests bleiben davon getrennt.

## 2. Artefakte und Reproduktion

- [Datensatzmanifest](V1_SYNTHETIC_DATASET_MANIFEST.md), [maschinenlesbares Inventar](tests/v1/data/manifest.json).
- [22-Feature-Matrix](tests/v1/data/feature_matrix.json).
- [vollständiges Quellen-/Requirement-Mapping](tests/v1/data/acceptance_mapping.json).
- [deklarative Original-Testfälle mit Eingabe und Soll](tests/v1/data/contract_examples.json).
- [Importfälle](tests/v1/data/imports/cases.json), [Edgefälle](tests/v1/data/edges/index.json), [Korrekturfolgen](tests/v1/data/corrections/scenarios.json).
- [semantischer Klassenkatalog](tests/v1/data/gold/class_catalog.json), [Challenge-Gold](tests/v1/data/gold/class_challenges.json), [Begleiter-Gold](tests/v1/data/gold/companion.json).
- [Messplan](V1_RELEASE_MEASUREMENT_PLAN.md), [D-PERF](D_PERF_MEASUREMENT_REPORT.md), [D-COST](D_COST_MEASUREMENT_MODEL.md).

Im Projektverzeichnis:

```powershell
node tests/v1/generate.mjs
node --test tests/v1/validate.test.mjs
node tests/v1/measure.mjs
```

Optional: `node tests/v1/stress.mjs 100000`. Keine Installation oder Änderung produktiver Abhängigkeiten nötig. Neue Tests werden bewusst separat ausgeführt; die bestehende Vitest-Konfiguration und alte Baselines bleiben unverändert. Der Generator liest ausschließlich öffentliche Spezifikationen und erzeugt eigene synthetische Quellen. Keine privaten Legacydateien.

## 3. Acceptance Mapping ohne Anforderungsverlust

Import, Evidence/Korrektur/Reanalyse, gemeinsame Semantic Quality, AI Execution, alle drei Analyseverträge und MVP-Abnahme sind vollständig zeilenweise inventarisiert. Jeder nichtleere Quellabsatz trägt Quellenpfad, Zeile, Originaltext, Test-ID, Fixture, erwartetes Ergebnis und Status. Überschriften sind zusätzlich als Strukturinventar enthalten; sie sind keine zusätzlichen fachlichen Testfälle.

Alle erkannten originalen nummerierten Test-/Acceptance-Tabellenfälle sind zusätzlich als deklarative Fälle extrahiert: Originalfall-ID, genaue Szenarioeingabe und Soll bleiben erhalten. Das Mapping verweist dann auf diesen konkreten Fall. Nichttabellarische Pflichten bleiben als einzelne Assertions mit Originalwortlaut erhalten. Der ausführbare `TRACE-01` prüft Vollständigkeit und unveränderten Wortlaut, **nicht deren Umsetzung**. Die spätere Integrationssuite muss diese Assertions am echten System ausführen und Ergebnisse je ID hinterlegen; ein vollständiges Inventar ist kein Beweis vollständiger Testausführung.

Für Datentests gelten `PKG`, `DATA`, `ORACLE`, `COUNT`, `PULSE`, `REACTION`, `SOURCE`, `BOUND`, `PRIME`, `SCOPE`, `GOLD` und `TRACE` als `testable now`. Produkt-/Providerfälle bleiben blockiert. Weitere DC-/CR-Regeln werden über die unverändert referenzierten Fachverträge und deren Originalfälle geprüft; keine abweichende Testformel definiert eine neue Product Decision.

## 4. Matrix der 22 Analysen

Für **jede** nachstehende Zeile gilt die vollständige Kreuzmatrix in `feature_matrix.json`: Hauptchat A/B/C, A/B-Dyade der Gruppe, Standard/Enhanced, Gesamt/7d/30d/3m/12m/Custom, Korrektur/Undo, Add/Replace, vollständige Evidence und drei Viewports in beiden Themes. Konkrete positive Originalfälle und Grenzfälle stehen unter `positive_case`, `contract_cases`, `boundary_cases`; Rohdaten und numerische Hauptchat-Sollwerte unter `main/`.

| Feature-ID | Positiver Nachweis | Relevante Grenze / negativer Nachweis |
|---|---|---|
| prime | Stunden und stärkste bis drei zusammenhängende Stunden | Mitternacht, Nullränder, Gleichstand, Datum-only |
| weekday | alle Wochentagsmengen | fehlendes Datum, Gleichstand, P |
| streak | aktive Tage und längster Lauf | Lücke, Filterkante/„mindestens“, ein Beitrag |
| peak | konkrete Maximal-Tage | Gleichstand, Medien, P ohne Beiträge |
| texting | Nachrichten/Wörter pro Person | Medien/gelöscht/Reaction, Nullnenner |
| emoji | Grapheme, Familien und Originalvarianten | ZWJ/Flagge/Keycap/Hautfarbe, Reaction zählt nicht |
| hotcold | gemessene Baseline/Phasen | 13/14 Tage, Nulltage, Tagesausschluss trennt Lauf |
| silence | vollständige Nachbarintervalle | nur eine Nachricht, Zeit unsicher, ganze Pause ausschließen |
| move | autorenseitig gültige Neustarts | 3:59/4:00, belegte Fortsetzung, Importanfang |
| response | gültige Quellblock-/Antwortrelationen | alte Replyrelation nicht automatisch neue Antwort, Präzision |
| firstlast | deklarierte Ruhezyklen | fehlendes Profil, gleiche Kandidaten, gemeinsame Überlappung |
| longstory | eigene Tokenlängen / gültige Antwortblöcke | 3/4 Wörter, 5:00/5:01 Blockgrenze, Medien |
| words | Ranglisten und Signature-Scores | 99/100 rankbare Tokens, Stopwörter, c≥3, Quotient |
| pulse | Tag/Woche/Monat, Raten und Medianindex | Randperiode unvollständig, Basis null, zu wenige Perioden |
| deepdive | echte Hotcold-Phasen und angrenzende L-Fenster | unvollständiges Vor-/Nachfenster, Ausschluss, Recovery |
| questions | einzelne Frageakte und Klassen | mehrere Akte, Rhetorik, Dritte/Zitat/uncertain |
| names | autorisierte Anredeakte | Erwähnung statt Anrede, gleichnamige Personen |
| topics | Multi-Label-Mengen | Kurzantwort ohne sichere Relation, Quote, neue Klasse verboten |
| social | Labelunion und getrennte Klassen | Sarkasmus/uncertain, Mehrfachlabel, Nenner |
| lifeevents | belegte Erwähnungen/Kandidaten | C-Ereignis, unklarer Zeitpunkt, kein automatisches Bestätigen |
| humor | explizite Marker und Insiderkandidaten | zwei/drei Akte, beide Personen, gewöhnliche Wiederholung |
| topicstarts | belegter Impuls und Themen | C startet/A antwortet, Topicwechsel ≠ First Move |

Bei jeder Analyse zusätzlich prüfen: Empty/Loading/Error/unsupported/insufficient-data/not-applicable/unavailable/review/stale nicht verwechseln. Keine berechnete Null aus fehlenden Daten. Zeitkontext außerhalb P darf helfen, erweitert aber nicht die gezählte Grundmenge. Gleiche Werte ohne semantisch gültige Evidence bestehen keinen Test.

## 5. Import, Add, Replace und Identität

`IMP-*` beschreibt Preview und Commitausgang getrennt. Ausgangsbasis für Updates: acht Nachrichten in `imports/base.json`, stabile Teilnehmer/IDs. Identisch und umbenannt identisch bleiben acht; späterer Voll-Export/Overlap/Add neun; Replace vier; fehlend im Add acht, fehlend nach Replace sechs. Dies sind Fixture-Sollwerte, keine behaupteten aktuellen Parserergebnisse.

Reihenfolge pro Fall: isolierten Speicher anlegen → Basis importieren → Update auswählen → Preview prüfen → Cancel ohne Wirkung → erneut auswählen → bestätigen → Rohbasis/IDs/Korrekturen/Resultatversion prüfen → Reload → identisch wiederholen. Identität darf nicht aus Dateiname oder bloßem Textpräfix entstehen. Source-ID-Ergänzung verlangt vorherige Standardbasis mit eindeutiger Zuordnung. Revisionskonflikt bleibt blockierend, bis fachlich zulässig aufgelöst. Alias und gleiche Anzeigenamen vereinigen keine Personen. Kritische unaufgelöste Datensatz-/Chat-/Sprecher-/Versionskonflikte verhindern den ganzen Commit, keine heimliche Teilübernahme.

Leeres Replace löscht nichts; kaputtes ZIP Fehler; zwei Chat-TXT-Dateien erfordern Auswahl. Keine zusätzliche Nachricht pro angehängter Mediendatei. Datum-only kann Kalenderdaten tragen, keine erfundene Uhrzeit. Fehlende optional unterstützte Enhanced-Metadaten blockieren nicht pauschal den Standardweg. Nach Replace fehlen entfernte Quellen; davon abhängige Korrekturen werden unresolved/inaktiv, nicht geraten neu verknüpft. Kein Volltextarchiv für ein nicht freigegebenes Replace-Undo.

Die Gruppe enthält vier Personen, zwei gleiche Anzeigenamen, explizite Antworten an C, einen C-Topicstart, Drittpersonenereignis und Dyadenwechsel. Nur die im jeweiligen Scope zugelassenen A/B-Beiträge zählen; C/D können Kontext bleiben. Entscheidungen werden nicht auf eine neue Dyade umgedeutet.

## 6. Evidence, Korrektur und echte Reanalyse

`CORR-HC`, `CORR-SI`, `CORR-TOPIC` liefern stabile Ziele und konkrete vorher/nachher-Sollwerte. Zusätzlich sämtliche EC- und AC-EV-Originalfälle im Mapping ausführen:

1. Liste vollständig paginieren/filtern; Union aller Seiten exakt gleich gültiger Evidence-Menge, keine Duplikate/fehlenden Akte. Offene/negative/excluded/unresolved separat.
2. Label ausschließen: nur dieses Label, andere Labels und Originalbeitrag bleiben. Reklassifizierung nur approved Ontologie und Rollen.
3. Silence: ganzes Intervall ausschließen, Rohwert bleibt; kein Abziehen vermeintlicher Schlaf-/Treffenstunden. Hotcold: konkrete Kalendertage und neue Baseline/Phasen/Deepdive, keine dynamische unbestimmte Phasenmaske.
4. Immer tatsächliche Mengen, Nenner und Resultatversion vergleichen. Persistierter Flag oder Toast allein besteht **keine** Reanalyseprüfung.
5. Reload, Undo, wiederholtes Undo, absichtlich leere Listen, Textedit, verlorene Referenz, Add/Replace. Nutzerentscheidung hat bei unverändertem Gegenstand Vorrang; relevanter Edit verlangt Review.
6. valid → stale → processing → valid/error/review prüfen. Karte/Detail/Evidence benutzen denselben Stand. Korrektur bleibt bei Reanalysefehler gespeichert; alte Zahlen nicht aktuell nennen.
7. Racefälle: P zweimal wechseln, anderer Chat, Korrektur/Import im Lauf, verspätetes Resultat, Chat im Lauf löschen. Alte Runs überschreiben weder aktuellen Scope noch gelöschte Daten.
8. Beleg → exakte MessageId im Reader → Fokus → zurück zur ursprünglichen Analyse/Dialog/P/Scrollposition. Unresolved Beleg hat keinen erfundenen Sprung.

Alles Produktintegration: `blocked by implementation`. Synthetische vorher/nachher-Rechnung ist lediglich Oracle-Vorbereitung.

## 7. Semantische Goldsets und Evaluation

Hauptchats sind **development**, die getrennt formulierten Klassen-Challenges **final-synthetic**. Alle Varianten einer Label-/Äußerungsfamilie bleiben zusammen. Keine zufällige Verteilung benachbarter Nachrichten oder Übersetzungszwillinge auf Dev und Final. Kalibrierungsbestand ist reserviert und vor Threshold-Tuning unabhängig zu erstellen; Final darf nicht hierfür verwendet werden. Die Beispielsammlung ist ein einheitlich autorierter synthetischer Bestand, keine unabhängige menschliche Adjudikation.

Je Katalogklasse gibt es positive, negative, uncertain, third-party, quote, mixed-language und boundary Slices sowie ergänzende Kontrollen im selben final-synthetic-Split. `expected.classification` bezieht sich auf die konkrete Klasse/Einheit; fehlende Eignung ist **nicht** automatisch negativ. Nutzerzustände von Events und deterministische Lachmarker sind keine probabilistischen Modellklassen. Deren richtige Behandlung gehört zum Pipeline-/Integritätstest, nicht zu einer erfundenen Modell-Precision. Bei Boundary liegt die Zielnachricht in P, benötigter Kontext davor; bei Insidern erfüllen außerhalb liegende Nutzungsakte ausdrücklich nicht die Mindestmenge in P. EN-Fragen/Beispiele sind eigens formuliert, nicht bloß eine übersetzte Kopie eines Hauptchats.

Vor Nutzung als statistischer Release-Goldstandard: fachliche Doppelannotation mit Konfliktentscheidung, vollständige Quellen-Sichtung für Recall, pro Klasse/Sprache/Einheitentyp geeignete Nenner, gesonderte autorisierte repräsentative Realsprachdaten und vorab fixierte Stichproben-/Unsicherheitsplanung. Keine Freigabe aus der künstlichen Häufigkeitsverteilung dieses Pakets. Exponiertes Finalset nach Modell-/Promptoptimierung ersetzen.

Unverändert gelten alle sieben klassenspezifischen §19-Grenzen in `ANALYSIS_CONTRACTS_SEMANTIC_V1.md`: P/R/Auto-P anhand der geforderten unteren einseitigen 95-%-Grenzen, F1 mit Unsicherheit, falsche automatische Negative mit oberer Grenze höchstens 1 %, getrennte DE-/EN-Auswertung und Mischsprach-Slices. Keine neue gemeinsame Prozentzahl ersetzt die unterschiedlichen Klassenwerte. Im Mapping sind die Originaltabellen wörtlich enthalten.

SQ-AUTO-01: nur explizit qualifizierte Feature×Klasse×Sprache×Einheitentyp×Regelversion×Modellversion automatisch. Medium Review, Low nicht automatisch. Hohe Confidence bestätigt weder Event noch Begleiteraktion. Insider bleiben reviewpflichtig. SQ-COUNT-01: positive/negative/Review/unresolved/excluded und Entscheidungsabdeckung getrennt. SQ-CRITICAL-01: **0 beobachtete Critical Errors** im vorab festgelegten unabhängigen finalen Satz und Integritätstests; keine Zusage einer universellen Nullfehlerrate.

## 8. AI-HYBRID-QUALITY-01 — Evaluationskarten

| Karte | Einheit / Fixture | Soll und Messung | Kritische Gegenfälle |
|---|---|---|---|
| HYB restart/continuation | Konversationskandidat, `hybrid_cards.json`, move_359/400 | ≥4h erzeugt Kandidat, explizite Fortsetzung nach 24h bleibt Fortsetzung; P/R/F1, Auto-P, falsche Auto-Negative je Klasse | Neuer Move aus bloßer Zeit, C-Unterbrechung ignoriert, Importanfang als Neustart |
| HYB response | Quellblock → erste gültige Antwort, Hauptchat-Gold + Blockgrenzen | richtige Quell-/Zielrelation, erste Antwort, keine doppelte Quellblockwertung; Relation-P/R/F1 und exakte bedingte Dauer | falsche Quelle, Self-Reply, geratenes OK, fehlende Präzision als 0 Sekunden |
| HYB rest | 23:00→07:00 plus beiderseitiges Profil, fehlendes Profil als Gegenfall | Dauer/Überlappung/Zyklus nach CR-08, Relation-P/R/F1, gültige automatische Zuordnung und Abstention | Nacht aus Uhrzeit allein, falsche Person, doppelte Zyklen, unklarer Gleichstand |

Je Karte nach Sprache/Kontext/Einheit und Version auswerten; technisch korrekte Dauer getrennt von gültiger semantischer Relation. Numerische Mindestgüte für diese drei Aufgaben bleibt vor produktiver Freigabe anhand unabhängiger Evaluation zu entscheiden, nicht aus synthetischem Erfolg abzuleiten. Zunächst ausdrücklich freigegebener Reviewbetrieb möglich, wenn alle übrigen Gates erfüllt sind. CR-08-Automatik bleibt fachlich möglich, verlangt aber den Nachweis.

## 9. Begleiter und Actions

50 Fälle `COMP-001`–`COMP-050`, je 25 in zwei isolierten Chats. Jeder enthält Frage, erwarteten Antwortmodus, zulässige Quelle/Scope, Aktion oder keine, Vorbedingungen und verbotene Aussagen. `temporary_scope` ist nur Anfrageumfang, keine persistente P-Änderung. Vorschlag/Cancel/Confirm sind getrennte konfigurierte Zustände; ein Wort im Chattext ist nie eine Nutzerbestätigung.

Action-Fälle enthalten konkrete `action_target`-Referenzen auf Event/Kandidat/Label/Pause/Tag/Profil und synthetische Versionsvorbedingungen. Die Integrationsfixture richtet den angegebenen Kandidaten-/Bestätigt-/Previewzustand ein; erlaubte Chatquellen sind kein pauschales Schreibrecht. Preview enthält konkretes Ziel und Delta, Kosten-/Umfangswirkung soweit relevant, aktuellen Scope und Version. Confirm nur unveränderte gültige Preview; Cancel, veraltete Preview oder fremder Chat ändern nichts. Ausführung und Reanalyse erst danach, Ergebnisbericht aus tatsächlichem neuen Zustand.

Metriken und Nenner stehen im Messplan. Keine erfundenen Zitate, Fremdchat-Lesezugriffe, psychologischen Tatsachen, Ersatzanalysen für unavailable Features oder stale Zahlen als aktuelle. First-found benennt geprüften Suchscope und mehrere mögliche Treffer statt unbelegtem absoluten „erstmals“. Hypothesen bleiben getrennt von Beobachtung. Die acht Angriffsquellen sind inert: kein Toolaufruf, kein fremder Zugriff, keine Zustandsänderung, HTML als Text.

## 10. Upload-/Download-Browserflows

Für alle Fälle isolierten Speicher, registrierte synthetische Quelle, aktuelle Version und Fehlerkonsole protokollieren. Produkt-Ende-zu-Ende derzeit `blocked by implementation`; keine Browserprüfung des Mock-Wizards als echter Importnachweis ausgeben.

| ID | Aktion | Erwartung |
|---|---|---|
| WEB-01 | A Standard-TXT auswählen | Profil/Quelle/Teilnehmer/Zeitraum/Vorschau korrekt, kein Commit vor Confirm |
| WEB-02 | A ZIP auswählen; dann two_chats.zip | gleiche Chatbasis; bei mehreren TXT konkrete Auswahl, kein Merge |
| WEB-03 | A Enhanced auswählen | Fähigkeiten/Metadaten sichtbar, stabile Referenzen; unbekannte Version blockiert |
| WEB-04 | Standardtext einfügen | gleicher unterstützter Quellumfang, keine heimliche Zeit-/Sprecherinferenz |
| WEB-05 | Preview und Conflict Review | reale Zähler/Differenzen/Blocker, unveränderter alter Chat |
| WEB-06 | Cancel und Escape | keine Übernahme, Fokus zurück, keine Reste eines Folgeimports |
| WEB-07 | gültige Preview bestätigen | genau ein atomarer Commit, Resultate stale/neu gemäß Vertrag |
| WEB-08 | Add | fehlende alte Beiträge bleiben, eindeutige Duplikate nicht erneut zählen |
| WEB-09 | Replace | bestätigte neue Basis, entfernte Referenzen unresolved; keine leere Löschung |
| WEB-10 | invalid file / corrupt ZIP | ehrlicher Fehler, kein Teilcommit und keine erfundenen Teilnehmer |
| WEB-11 | Quelle oberhalb später beschlossenen Limits | begründeter Limitstatus, Cancel/Recovery; BLOCKED bis D-PERF-Entscheidung |
| WEB-12 | Importbericht herunterladen | tatsächliche Import-ID, Zähler, Warnungen, Scope; keine fremden/private Logtexte |
| WEB-13 | Enhanced-/Testexport herunterladen | nur falls offiziell vorgesehen: deklarierte Version, erlaubter Inhalt, Wiederimportprüfung; sonst unavailable |
| WEB-14 | Reload nach Import | dieselbe bestätigte Basis/IDs/Persistenz, kein erneuter Append |
| WEB-15 | Reload nach Korrektur | Nutzerentscheidung, echter neuer Wert und Evidence konsistent; Undo wirksam |

Statische Umgebung/GitHub Pages kann Dateiauswahl, implementiertes lokales Parsing, Preview, lokale Speicherung und Downloads mit synthetischen Daten prüfen. Das beweist **keine** Serverpersistenz, Accounts, externe KI, sichere Secrets, Mehrgeräte-Sync oder produktive Löschbarkeit. Download vollständig öffnen/inhaltsprüfen, nicht nur Klick zählen. Fehler/Abbruch und wiederholter Download gehören dazu.

## 11. Mobile-/Theme-Matrix

Vollständiges Kreuzprodukt **390×844, 430×932, 1024×768 × editorial-warm, night-mode-chic** (die zwei aktuell angebotenen Themes). Je Kombination Importpreview, Konfliktreview, Evidence-Pagination, Reader Jump/Back, Korrektur, Undo, Eventpreview, Companion-Actionpreview, Charts und lange Listen prüfen.

Kein horizontaler Verlust von Bestätigen/Abbrechen oder Quellenlink; lange Inhalte intern scrollbar, Hintergrundscroll gesperrt, Escape/Schließen und Rückfokus sinnvoll. Fokusreihenfolge/Tastatur, sichtbare Einheiten/Achsen, Initialen bei Personen, Textlesbarkeit, Loading/Error und leere Listen prüfen. Reader fokussiert exakte ID und kehrt zum ursprünglichen Zustand zurück. Keine neue UI-Modernisierung in diesem Auftrag. Matrix ist geplant, **nicht als ausgeführte Browserabnahme markiert**.

## 12. Freigabeprotokoll

Je Test: Test-ID, Fixture-SHA, App-/Schema-/Regel-/Modellversion, Scope/P/Dyade, Plattform/Theme, Vorbedingungen, Beobachtung, Soll, Pass/Fail/Blocked, Nachweisdatei, Fehlerklasse, Reviewer. Fehlgeschlagene Produktprüfungen nicht durch Änderung der Baseline „grün“ machen. Fehlende fachliche Freigabe verhindert produktive Nutzung; technische Umsetzung bleibt Aufgabe des Handoffs.

## Tatsächlich ausgeführte Prüfungen dieses Auftrags

Am 04.11.2026: **24/24 neue Daten-/Vertragstests bestanden**, 0 fehlgeschlagen, 0 übersprungen. [Laufprotokoll](tests/v1/measurements/validation.txt). Lokaler Performance-Harness ausgeführt; Rohsamples in [latest.json](tests/v1/measurements/latest.json), Grenzen und Werte in D-PERF. Alle 184 vor Auftrag erfassten vorhandenen Projektdateien per SHA256 unverändert bestätigt. Neu hinzugefügt wurden ausschließlich die fünf Hauptdokumente und Dateien unter `tests/v1/`.

Produkt-Build/Typecheck, bestehende öffentliche/Legacytests, produktiver Privacy Check, reale Browserflows und Modell-Evaluation wurden in diesem Testartefakt-Auftrag nicht neu ausgeführt. Insbesondere wurden für keine Prüfung private Legacy-Chats verwendet. Daraus folgt keine neue Produktfreigabe; die geplanten Browser-/Integrations-/Providerfälle bleiben wie angegeben blockiert.

## Abschlusssummary

- **Jetzt ausführbar:** Generator, SHA-/ID-/Scopeprüfungen, TXT-/ZIP-Payloadvergleich, numerische Test-Orakel, Grenzfälle, Reaction-Invarianz, Mapping- und Goldset-Strukturprüfungen. Ergebnis: separate Node-Suite, keine Produktabnahme.
- **Nach Implementation:** alle echten Import-/Add-/Replace-/Dedupe-, Persistenz-, Evidence-/Reanalyse-, Action- und Browserfälle; Status `blocked by implementation`.
- **Echte AI-/Provider-Evaluation:** Klassen-/Sprach-/Relationsgüte, kalibrierte Automatik, Begleiterqualität; Status `blocked by provider/evaluation`.
- **Production-/Privacy-Gates:** Providerzweck, Regionen/Aufbewahrung/Training/Logging/Löschung, Consent/Information, Secrets, Incidenthandling sowie belastbarer D-PERF-Supportbereich und D-COST-Kontingente. Checkliste im Messplan, keine erfundenen Verträge oder Zahlen.

**Nach diesem Testpaket folgt nur noch das finale Handoff-Paket.** Keine neue fachliche Spezifikationsrunde und keine Umsetzung durch diesen Auftrag.

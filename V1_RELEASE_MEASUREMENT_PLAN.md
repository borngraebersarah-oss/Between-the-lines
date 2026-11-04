# V1 Release-Messplan

Stand 04.11.2026. Verbindliche Gate-IDs aus AI-/Semantic-Verträgen; dieses Dokument organisiert Nachweise und erteilt keine Produktfreigabe.

## Messlauf und Versionen

Vorab fixieren: geprüfter Umfang/Sprachen/Klassen/Quellprofile, Daten-/Goldset-SHA, App/Schema/Regel/Modell/Klassifikationsversion, Prompt-/Retrievalversion, Hardware/OS/Browser/Theme, Cachezustand, P/Dyade, Stichproben- und statistisches Verfahren. Ergebnisse nach Sprache/Klasse/Einheitentyp stratifizieren; keine Gesamtzahl kompensiert ein scheiterndes Teilgate. Finalset nicht zum Entwickeln oder Kalibrieren verwenden. Rohdaten minimieren; Nachweisprotokolle enthalten IDs/Metriken, keine echten privaten Chattexte.

## D-PERF

| Profil | Generierbare Größe | Zweck |
|---|---:|---|
| Small | 250 | interaktive Basislatenz |
| Medium | 4.000 | mehrere tausend Beiträge |
| Large | 20.000 | Skalierung und Speicher |
| Stress | frei, z.B. 100.000 | kontrollierte Laststeigerung/Abbruch |

Keine dieser Zahlen ist Produktlimit oder zugesagter Supportbereich. Stressgenerator hat lediglich eine lokale Schutzgrenze gegen versehentliche riesige Artefakte. Die drei Gold-Langchats sind zusätzlich realistischere Text-/Relationsprofile. Performancequellen sind bewusst repetitive Lastdaten, keine semantischen Goldsets.

Messpunkte des späteren echten Systems:

| Messung | Start → Ende | Zu protokollieren |
|---|---|---|
| Parse/Preview | akzeptierter Upload → vollständig sichtbare Preview | Quellprofil, Bytes, Parsefehler, Hauptthreadblockade, Peak-Speicher |
| Commit | bestätigte gültige Preview → atomar persistierte Basis | Add/Replace/identisch, Transaktion, Rollback, Reloadkonsistenz |
| deterministische Analyse | versionierte Basis → konsistente Resultate | Featurezeiten, P, Abhängigkeiten, warmer/kalter Lauf |
| Einheitenerstellung | Basis → vollständige geeignete/offene Einheiten | Counts, Kontextumfang, Chunkgrenzen, ausgelassene Einheiten=offen |
| KI | Requeststart → validierter Output | Anfragen, Input/Output, Retry, Cache, Invalid-Output, Timeout |
| Reanalyse | persistierte Korrektur → gültiger neuer konsistenter Stand | Dirty-Set, Wiederverwendung, Error, verlorene/überholte Runs |
| Speicher | kompletter Flow | Rohquelle, abgeleitete Daten, Peak/RSS/Heap und Speicher nach GC soweit möglich |
| Download | Auslösen → vollständig erzeugte lesbare Datei | Bytes, Inhalt, Schema, Browserreaktion, Abbruch |

Je Profil cold/warm, initial/Add/Replace/Korrektur/P-Wechsel, Fehler/Retry/Abbruch messen. 390×844, 430×932, 1024×768 in beiden aktuellen Themes; repräsentative schwache Hardware zusätzlich zu Entwicklungsrechner. Für spätere Tail-Latenzen angemessen viele unabhängige Wiederholungen vorab festlegen, Rohsamples und Streuung berichten. Kein p95 aus fünf lokalen Samples als SLO ausgeben.

Der beiliegende Node-Harness misst nur JSON.parse, Testreferenzrechnung, einfache Einheitenaufzählung und Serialisierung. [D-PERF-Bericht](D_PERF_MEASUREMENT_REPORT.md) trennt diese Zahlen von BLOCKED-Produktpfaden. Entscheidung am Release-Gate: Produktverantwortliche beschließen Support-/Timeout-/Speicherbereich anhand vollständiger echter Messungen. Technischer Entwickler wählt Profiling/Worker/Backendverfahren innerhalb der bestehenden Fachregeln.

## D-COST

Siehe [parametrisches Modell](D_COST_MEASUREMENT_MODEL.md). Je Job tatsächliche Providerabrechnungseinheit, gemessene Inputs/Outputs und Wiederverwendung erfassen. Aus Chatzeichen oder Autorengold-Einheiten keine Modelltoken oder Kosten behaupten. Erst Anbieter-/Betriebsdaten erlauben Beträge und Kontingente. Entscheidungen umfassen Kostenobergrenze, erneute Bestätigung kostenwirksamer Erweiterung und sichtbare Teilabdeckung; keine heimliche Stichprobe als Gesamtauswertung.

## Semantic Quality

Primäre Werte pro Klasse/DE/EN/Mischslice: TP/FP/FN, Precision TP/(TP+FP), Recall TP/(TP+FN), F1, Auto-P innerhalb tatsächlich automatisch übernommener Entscheidungen, falsche automatische Negative, Abdeckung, Reviewrate, ungelöste Quellen. Bei Nenner null `not-applicable`, nicht 100 %. Unit-/Segment-/Relationserkennung ist Teil des End-to-End-Recall; perfekte Klassifikation nur gefundener Kandidaten genügt nicht.

Alle klassenspezifischen §19-Ziele des Semantic-Vertrags übernehmen. Geforderte untere einseitige 95-%-Grenzen für P/R/Auto-P, obere Grenze für falsche Auto-Negative (höchstens 1 %), F1 samt Unsicherheit. Stichprobenplanung berücksichtigt Abhängigkeit von Nachrichten desselben Chats; unabhängige Chats/Äußerungsfamilien statt scheinbar tausender unabhängiger Templatekopien. Vollständige autorisierte Realsprach-Annotation, Doppelbewertung/Adjudikation und dokumentierte Ausschlüsse erforderlich. Synthetisches Finalset prüft Pipeline, nicht Realweltgüte.

SQ-COUNT-01 separat prüfen: bei 2 positiv, 6 negativ, 2 offen genau 25 % der entschiedenen Fälle und 80 % Entscheidungsabdeckung; keine unmarkierte 20-%-Gesamtchatquote. SQ-AUTO-01 nur evaluierte Kombinationen; Nutzerentscheidung vorrangig. Nicht qualifizierte Klasse bleibt gesperrt oder benötigt ausdrücklich freigegebenen Reviewbetrieb unter übrigen Gates. Kein pauschaler Review-Fallback.

## AI-HYBRID-QUALITY-01

Karten und Quellen im Testplan/`gold/hybrid_cards.json`: Neustart/Fortsetzung, Response-Relation, Ruhezuordnung. Für jede Aufgabe P/R/F1, Relation-/Rollenexaktheit, Auto-P, falsche Auto-Negative und Abstention mit Unsicherheit messen. Dauer-/Blockformel getrennt von semantischer Richtigkeit der Relation prüfen. Fehlendes Profil/unklare Zeit/fehlender Kontext darf keine sichere Nacht oder Antwort erzeugen.

Numerische Hybridgrenzen sind noch ein messungsbasiertes Release-Gate. Keine Schwellen aus dem kleinen synthetischen Satz ableiten. Freigegebener Reviewbetrieb nur bei Erfüllung übriger Gates; CR-08 sichere Automatik fachlich möglich, aber ohne unabhängigen Nachweis nicht freigeben.

## AI-COMPANION-QUALITY-01

Jede Antwort in atomare prüfbare Behauptungen und jede Aktion in Preview/Bestätigung/Mutation zerlegen. Mindestens folgende Metriken samt Zähler, Nenner und Unsicherheit:

| Metrik | Operationalisierung |
|---|---|
| factual/source correctness | korrekt belegte atomare Aussagen / alle überprüfbaren Aussagen; Zahlenversion und tatsächliche Quelle prüfen |
| evidence correctness | gültige exakt passende erlaubte Quellenlinks / ausgegebene Quellenlinks |
| search precision | relevante gefundene Einheiten / ausgegebene Treffer, Duplikate gesondert |
| search recall | gefundene relevante Einheiten / vollständig goldgeprüfte relevante Einheiten im zugesagten Scope |
| mode correctness | richtiger Modus / Fälle mit adjudiziertem Sollmodus |
| scope compliance | Antworten/Aktionen ohne fremden Chat, Dyade, P oder unzulässige Datenversion / alle Fälle |
| action preview correctness | vollständig korrektes Ziel/Delta/Scope/Version / erforderliche Previews |
| action execution correctness | genau bestätigte zulässige Mutation und Folgewirkung / ausgeführte oder verweigerte Actionfälle |
| hallucinated quote rate | nicht quellengleiche behauptete Zitate / alle behaupteten Zitate; erfundene IDs separat kritisch |
| unavailable-feature compliance | ehrlich begrenzte Antworten ohne Ersatzanalyse / unavailable-Anfragen |
| user correction preservation | erhaltene gültige Nutzerentscheidungen / geprüfte relevante Entscheidungen nach Aktionen/Updates |

Recall bei nicht vollständig goldgeprüftem Scope nicht behaupten. First-found braucht earliest im geprüften Bestand, keine absolute Lebenswahrheit. Hypothesen und Unknown nicht durch erfundene Beobachtungen auffüllen. Unterbedingungen für Confirm/Cancel/Stale/Fehler kontrollieren. Die 50 synthetischen Fragen sind Vorabtest, nicht ausreichend dimensionierte finale Evaluation.

SQ-CRITICAL-01: **0 beobachtete Critical Errors** im vorher fixierten finalen unabhängigen Satz und Integritätstests; jeder Fund blockiert betroffenen Umfang bis Ursachenklärung, Korrektur und unabhängiger Wiederprüfung. Nichtkritische numerische Companion-Grenzen vor produktivem Release entscheiden; nicht nach Testergebnis zurechtschneiden. Möglich ist ein kleiner ausdrücklich freigegebener Funktionsumfang, kein stilles Ersatzangebot.

## AI-PRIVACY-EXEC-01 — vor Produktionsrelease auszufüllen

| Pflichtpunkt | Erforderlicher konkreter Nachweis | Jetzt |
|---|---|---|
| Provider | benannte juristische/technische Dienstleister, Unterauftragnehmer | BLOCKED/TBD |
| Verarbeitungszweck | benötigte Felder je Aufgabe, keine pauschale Vollchatübermittlung | BLOCKED/TBD |
| Regionen | tatsächliche Verarbeitung/Speicherung/Transfers | BLOCKED/TBD |
| Aufbewahrung | Inhalte, Metadaten, Backups, Fristen | BLOCKED/TBD |
| Training usage | vertraglicher/technischer Ausschluss oder erlaubter klarer Umfang | BLOCKED/TBD |
| Logging | minimierte Logs, Zugriffe, keine normalen Volltextlogs | BLOCKED/TBD |
| Löschbarkeit | Primärdaten, Ableitungen, Provider, Backups; spätere Jobs erzeugen nichts neu | BLOCKED/TBD |
| Subprocessor | konkrete Liste und Änderungsverfahren | BLOCKED/TBD |
| Nutzerinformation | verständliche Zwecke/Umfang/Empfänger/Grenzen | BLOCKED/TBD |
| Opt-in/Consent | rechtlich/produktseitig erforderlicher Ablauf und Nachweis | BLOCKED/TBD |
| Scope-Minimierung | serverseitige Chat-/Dyaden-/P-Autorisierung, minimale Kontexte | BLOCKED/TBD |
| Secrets | ausschließlich sichere Serverumgebung, Rotation, kein Browserbundle | BLOCKED/TBD |
| Incident handling | Verantwortliche, Erkennung, Sperren/Löschung, Meldungen | BLOCKED/TBD |

Das ist ein **production architecture/privacy gate**, kein erfundener Providervertrag und keine neue fachliche Spezifikationsrunde. Fachliche Freigaben ersetzen nicht rechtliche/technische Betriebsnachweise.

## Releaseentscheidung / Handoff

Gateprotokoll muss Pass/Fail/Blocked je freigegebenem Umfang, Version, Sprache und Quellprofil enthalten. Bekannte Limitationen und Aussagegrenzen sind Teil der Entscheidung. Produktverantwortliche geben Qualitätsgrenzen/Support/Kostenumfang frei; der spätere technische Entwickler entscheidet Werkzeuge, Providerintegration, sichere Architektur und Messverfahren innerhalb dieser Grenzen. Alle noch offenen Nachweise gehen in das finale Handoff-Paket.

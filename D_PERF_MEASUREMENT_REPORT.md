# D-PERF — tatsächlich gemessener Stand

Gemessen: 2026-11-04T19:53:07.781Z. Ausschließlich lokaler synthetischer Node-Testpfad. **Keine Produktperformance-Abnahme.**

Umgebung: v24.22.1, win32/x64, Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz, 12 logische CPUs. Kein Mobilbrowser, kein produktiver Parser/Backend, keine KI.

Je Operation ein Warmup und fünf Läufe; Millisekunden. Kein belastbarer p95 aus fünf Samples. Reihenfolge Small → Medium → Large; gemeinsamer Prozess, GC unkontrolliert. Rohsamples und Speicher-Snapshots: [latest.json](tests/v1/measurements/latest.json). Reproduktion: `node tests/v1/measure.mjs`.

| Profil | Nachrichten | JSON Bytes | JSON Parse Median | Referenzrechnung Median [Min–Max] | Testeinheiten aufzählen Median | Ergebnis serialisieren Median |
|---|---:|---:|---:|---:|---:|---:|
| small | 250 | 71284 | 0.29 | 8.34 [7.32–9.90] | 0.06 | 0.12 |
| medium | 4000 | 1146035 | 5.47 | 135.83 [130.39–147.90] | 0.46 | 1.58 |
| large | 20000 | 5758036 | 22.79 | 620.65 [596.84–649.68] | 1.55 | 9.37 |

JSON.parse ist kein WhatsApp-Parse/Preview. Einheitenaufzählung ist keine semantische Segmentierung. Serialisierung ist kein Browserdownload. Die Referenzrechnung verarbeitet deklarierte Testdaten und autorisierte synthetische Goldrelationen, keine echte Modellklassifikation.

| Hauptchat | Nachrichten | Referenzrechnung Median ms | Autoreneinheiten |
|---|---:|---:|---:|
| synthetic_a | 1418 | 78.23 | 8736 |
| synthetic_b | 1236 | 58.48 | 7501 |
| synthetic_c | 1797 | 95.28 | 11166 |

## Nicht gemessen

Produktiver Parse/Preview, atomarer Commit/Rollback, produktive Analyse, echte semantische Einheitenerstellung, Modellrequests/Tokenkosten, inkrementelle Reanalyse, Browserdownload, Mobilgeräte-Spitzenverbrauch und Mehrgerätebetrieb: **BLOCKED**. Stressquelle ist generierbar, aber nicht als Leistungsnachweis ausgeführt. Speicherwerte sind Prozesszustände, keine Peak- oder belastbare Retained-Heap-Messung.

## D-PERF-Entscheidung

Kein V1-Supportlimit aus diesen Zahlen ableiten. Empfehlung: mit Small/Medium/Large auf den drei Abnahme-Viewports und repräsentativer schwacher Hardware beginnen, danach Stress schrittweise steigern. Erst reale vollständige Import-/Analyse-/Korrekturpfade inklusive Fehlerabbruch messen; Produktverantwortliche beschließen Supportbereich, Timeout-/Speicherbudgets und Abbruchverhalten anhand dieser Messungen. Das bleibt ein Release-Gate im finalen Handoff, keine neue fachliche Phase.

# Analyseverträge Basic V1

Stand: 04.11.2026. Neun fachliche Verträge; keine Implementierung und keine Test-/Baselineänderung.

Grundlagen: `V1_PRODUCT_DECISIONS.md`, `DATA_AND_COUNTING_RULES.md`, `CONVERSATION_AND_RESPONSE_RULES.md`, `MVP_SCOPE_AND_ACCEPTANCE.md`, `ANALYSIS_CONTRACTS_FREE_V1.md` sowie Produkt-, Analyse- und UX-Spezifikationen. Die approved DC-/CR-/Free-Regeln bleiben verbindlich. Widersprüchliche Legacy-Zahlen sind keine Sollwerte.

**Freigabestand 04.11.2026:** Alle neun Verträge sind mit BASIC-V1 ausdrücklich `approved`, einschließlich B-TREND-01, LS-SA-01, B-WORDS-01 und B-DEEP-01. B-WORDS-01 wurde ergänzt: Signature setzt mindestens100 rankbare Tokens **bei jeder Person** im gewählten Zeitraum voraus. Kleinere Korpora erlauben persönliche Toplisten, aber keine Signature-Labels. Die folgenden Sollfälle berücksichtigen diese Ergänzung. Schwellen sind versionierte V1-Produktkonventionen und dürfen nicht still bei der Implementierung geändert werden. Qualitätsnachweise bleiben erforderlich; keine Codefreigabe.

## Gemeinsame Begriffe, Zustände und Abnahme

- `R`: aktuelle kanonische relevante Nachrichten der bestätigten Dyade gemäß Datenvertrag; einzelne menschliche Beiträge einschließlich geeigneter Medien-/Löschplatzhalter, ohne System/Reactions/Dritte. Originale und Originalvarianten unverändert. `W`: eigene Worttoken-Vorkommen, Stopwords in Gesamtwortmengen enthalten, fremde Zitate/Forwards nicht eigene Sprache.
- `P`: globaler Zeitraum je Chat. Gesamt/7/30 Tage/3/12 Monate/Custom nach freigegebenem Free-Vertrag. Relative Grenzen aus chat_end; eigene Featurefilter verändern P nicht still. Add/Replace kann relative P verschieben.
- Tagesanalysen brauchen eindeutiges Datum; Gesprächsintervalle hinreichend genaue, vergleichbare Quellenzeit. Kein Browser-/UTC-Ersatz. Datum-only ist keine Mitternacht. Reale Dauer und Kalendertag bleiben verschieden.
- Vollständige Tage/Perioden: nachgewiesene Abdeckung wie im Free-Vertrag. Bekannte Lücken, nur teilweise erfasste Randtage und nicht eindeutig lokalisierbare Beiträge sind keine sicheren Nulltage. Zeitlich unzuordenbare Beiträge sind in Gesamt-Textanalysen zulässig; in Zeitreihen werden fehlende Mengen/Präzision genannt.
- `available`: gültiger beobachteter Wert mit n/Abdeckung. `insufficient-data`: notwendige Menge, Zeit oder Zuordnung fehlt. `not-applicable`: gültiger leerer Nenner bzw. nicht definierbare Kennzahl. `unsupported`: erforderlicher Quell-/Sprachfall nicht unterstützt. `error`: Verarbeitungsausfall. Entwicklungsstatus/Plan-Sperre ist kein Datenmangel; 0 ersetzt keinen Fehler.
- Quantitative Mitgliedschaftslisten und vollständige klassifizierte Belege werden unterschieden. Jede sichtbare Nachricht führt per MessageId zum Original; Block-/Intervallbelege nennen alle verwendeten IDs und Rückkehrziel. Listen sind vollständig paginiert, nach Person/P/Status und bei KI Confidence filterbar. Unresolved bleibt unresolved.
- Alle Ergebnisse tragen Chat, Daten-/Importversion, Dyade, P samt aufgelösten Grenzen, Eingabemengen, Regel-/Klassifikationsversion, Kontext-/Korrekturstand und Aktualität. Kein Mischen alter und neuer Basis.
- Median: sortierte ungerundete Werte; bei geradem n Mittel der beiden mittleren. Stückzahlen ganzzahlig; Prozent maximal eine sinnvolle Nachkommastelle; Rangfolge vor Rundung. Keine zufälligen Gewinner, Nenner0 niemals0 %. Kleine n erlauben Beobachtungswerte, keine allgemeine Charakter-/Stabilitätsbehauptung.
- Korrekturen bleiben reversibel, chat-/dyadenbezogen persistent und journalisiert. Unveränderter Wiederimport erhält Entscheidungen, relevante Inhaltsänderung macht sie prüfpflichtig. Stale-Werte kennzeichnen, Fehler nicht mit Referenzwerten kaschieren. Zustandsändernde Begleiteraktionen brauchen Preview/Bestätigung.

**Reanalysekonvention für alle Tabellen:** P, Add, Replace, Dyaden-/Sprecherkorrektur, Nachrichtentyp, Zeitkorrektur, Inhalt/Bearbeitung, Löschstatus und Identitäts-/Deduplizierungskorrektur werden jeweils auf Mitgliedschaft und Abhängigkeiten geprüft. Eine Inhaltsbearbeitung ohne Mengenänderung kann einen unveränderten Zahlenwert ergeben; Original-/Datenstand trotzdem aktualisieren. Profilbilder oder Anzeigenamen erzeugen keine neue fachliche Menge.

**Dashboard:** In diesem Paket keine zusätzliche Karte als Pflicht. Die freigegebenen Free-Snapshots bleiben der bestehende Umfang; Basic-Detailansichten müssen nicht zu künstlichen Einzelzahlen verdichtet werden.

**Synthetische Beispiele:** Alle nicht anders bezeichneten Zeiten sind eindeutig, Personen bestätigt, Quellbereiche vollständig und Klassifikationen dort, wo benötigt, ausdrücklich als gültig vorausgesetzt. Das sind fachlich freigegebene Sollfälle, keine bereits ausgeführten Anwendungstests. Die spätere Umsetzung muss zusätzlich Isolation, Reload/Undo, vollständige Originalsprünge und alle Zustände prüfen.

# hotcold — Hot & Cold Phases

## 1. Nutzerfrage

Welche zusammenhängenden Abschnitte haben relativ zum beobachteten Chatnormal auffällig viele oder wenige Nachrichten? Intensität wird gemessen, nicht Interesse, Bindung oder Stimmung.

## 2. Eingabemenge

Datierte R in P, beide Personen gemeinsam, lokale Kalendertage. Wort-/Sprachsemantik nicht nötig. Vollständig abgedeckte Tage einschließlich tatsächlicher Nulltage bilden die Vergleichsmenge. Rand-/Lückentage bleiben beobachtbar, aber nicht Baseline- oder sichere Klassifikationsbasis. Bestätigte Events sind zusätzlicher Kontext, kein Nachrichtenersatz.

## 3. Zähler und Nenner

Pro Tag d: N(d), N_A(d), N_B(d). Aktivitätsindikator I(d)=1 bei N(d)>0, sonst0. **Freigegebene Regel B-TREND-01:** Chatnormal B=Summe N(d)/Zahl gültiger Vergleichstage D, inklusive inaktiver vollständiger Tage. Tagesintensität q(d)=N(d)/B, nur B>0. Phase: N_phase=Summe ihrer Tagescounts; Tage=L; aktive Tage=Summe I; Mittel N_phase/L; A-Anteil=N_A_phase/N_phase, B analog. Bei Phase mit N=0 keine Personenprozente.

## 4. Berechnung / Klassifikation

Freigegebene Regel B-TREND-01 als vollständig reproduzierbarer Erstvertrag:

1. Tageswerte aus R bilden. Explizit für Hot-&-Cold ausgenommene Kalendertage aus **bereinigter** Vergleichsmenge entfernen; Rohreihe erhalten.
2. Mindestens14 gültige Tage in P für die Baseline verlangen. Begründung: zwei Wochenlängen als erster Schutz gegen eine reine Einzelwochenaufnahme; kein statistischer Signifikanznachweis. Die Zahl ist eine freigegebene V1-Produktkonvention.
3. B als arithmetischen Tagesdurchschnitt dieser Menge bestimmen. B=0: keine positive Normalbasis, kein Hot/Cold-Verhältnis; rohe Nullreihe zeigen.
4. Hot bei q≥1,5; Cold bei q≤0,5; sonst Normal. Bei B>0 sind Klassen disjunkt. Schwellen dienen transparentem relativem Mengenvergleich, nicht einem Signifikanztest. Große Ausschläge beeinflussen B; diese bewusste Empfindlichkeit wird in der Methodik genannt.
5. Maximal direkt benachbarte Kalendertage gleicher Klasse zusammenfassen. Phase erst ab3 Tagen. Kein Überbrücken eines Normal-, ausgeschlossenen, unvollständigen oder fehlenden Tages, auch nicht nach Entfernen solcher Tage aus der Liste.
6. Randphase mit mindestens3 beobachteten gültigen Tagen zeigen, aber „mindestens L Tage / Rand offen“, wenn außerhalb weitere gleiche Tage möglich sind. Kürzerer Randlauf bleibt Kandidat, keine fertige Phase.
7. Alle Phasen mit Grenzen, Basis B, Counts und Quellenstand ausgeben. Keine separate Personenerkennung anderer Phasen. Keine semantische Klassifikation zur Erkennung erforderlich.

Baseline ist innerhalb P stabil für den jeweiligen Lauf und wird nicht nach Entfernen erkannter Hot-/Cold-Phasen iterativ „bereinigt“. Sonst entstünde eine nicht definierte Zirkularität.

## 5. Zeitraumverhalten

Alle Presets/Custom ändern P und damit Baseline/Phasen. 7 Tage liefern unter dem14-Tage-Vorschlag Rohwerte, aber insufficient-data für Phasenerkennung; nicht still auf außerhalb P liegende Vergleichsdaten ausweichen. Vollständige Tage vor/nach Filterkante nur Kontext. Verschiebung relativer P nach Add kann Grenzen/IDs ändern; alte Detailreferenz wird dann veraltet, nicht willkürlich auf eine andere Phase umgehängt.

## 6. Person A / B

Erkennung gemeinsam. Pro Phase N_A+N_B=N, positive Personenanteile100 %. Aktive Tage A/B separat möglich, nicht addierbar wegen gemeinsamer Tage. Eine Cold Phase kann an allen ihren Tagen aktiv sein.

## 7. Gleichstände

Alle erkannten Phasen zugänglich, keine Einzelgewinnerpflicht. Optionales Ranking nach mittlerem q; gleiche Werte gleichrangig, Chronologie nur Listenordnung. Nicht kürzere Phase wegen größerer Gesamtsumme still als „heißer“ bewerten.

## 8. Mindestdaten / Zustände

Available für Phasenmodell bei D≥14 und B>0, auch wenn Ergebnis0 Phasen. Unter14 vollständigen Tagen insufficient-data. B=0: Verhältnis/Phasenklassifikation not-applicable, Rohcounts0 gültig. Nicht interpretierbare Kalenderquelle unsupported, Verarbeitungsfehler error. Wort-/Sprachmangel blockiert rohe Nachrichtenphasen nicht.

## 9. Datenabdeckung

Keine Datumszuordnung → nicht Tagesbasis. Uhrzeit nicht nötig. Lücken/Teilrandtage unterbrechen Läufe und fehlen in B; ihre Counts bleiben klar als partiell sichtbar. Nicht lokalisierbare fehlende Nachrichten beschränken jede Vollständigkeitsbehauptung, auch wenn ein Tagesdiagramm möglich ist.

## 10. Evidence

Alle verwendeten Baseline-Tage mit Counts/Abdeckung und alle Phasentage/Originalnachrichten zugänglich. Ausgeschlossene Tage sichtbar. Eventüberlappung nur mit bestätigtem Event, genauer Zeit-/Datumszuordnung und Originalbelegen, soweit vorhanden. Keine künstliche semantische Phase-Evidence nötig.

## 11. Nutzerkorrekturen

Explizite Auswahl eines Zeitraums zur Ausklammerung aus digitalem Aktivitätsvergleich. Empfehlung: betroffene lokale Kalendertage in Preview nennen und als ganze Tage aus B und Klassifikation entfernen; keine anteilige Minutenkürzung. Nutzer bestätigt Tagumfang, Kontext-Event allein verändert nichts. Undo stellt Tagesmenge wieder her. Silence-Ausschluss und semantische Belegausschlüsse werden nicht übernommen.

## 12. Reanalyse

Zeitraum/Bestands-/Sprecher-/Typ-/Zeit-/Identitätsänderung und Hot-&-Cold-Tagausschluss invalidieren B und alle Phasen, damit auch `deepdive`. Reine Textbearbeitung ohne Mengenänderung nicht Phasenwerte, aber Quellenstand. Eventtitel/-notiz nur Kontext; Eventzuordnung/Datum aktualisiert Overlap. Streak/Free-Rohcounts und Pulse erhalten keinen automatischen Tagausschluss.

## 13. Dashboard Snapshot

Kein neuer Pflichtsnapshot. „Hot“ ohne Zeitspanne, Basis und Abdeckung wäre leicht irreführend; vollständige Phasenansicht bleibt maßgeblich.

## 14. Darstellung

Nachrichten/Tag als Rohverlauf, Hot/Cold/Normal/unklare Tage unterscheidbar. Tooltip/Tap Datum, N, A/B, B, q, Status/Originale. Kein gefühlscodierter Score. Events sind Kontextmarkierungen; Tagesmasken sichtbar. q optional als Faktor mit sinnvoller Präzision, keine unbenannte Indexkurve.

## 15. Methodiktext

„Wir vergleichen vollständige Tage mit eurem durchschnittlichen Nachrichtenumfang im gewählten Zeitraum. Mindestens drei aufeinanderfolgende Tage mit mindestens dem1,5-Fachen beziehungsweise höchstens der Hälfte bilden eine Phase. Bekannte Datenlücken und ausdrücklich ausgenommene Tage werden nicht als Stille gewertet. Ereignisse können zeitlich passen, beweisen aber keine Ursache.“ Entspricht der Freigabe B-TREND-01.

## 16. Synthetische Soll-Testfälle

| Fall | Eingabe | Exakte Erwartung unter B-TREND-01 |
|---|---|---|
| HC-N Normal | 14 vollständige Tage: [10,10,10,10,20,20,20,10,10,10,10,0,0,0] | Summe 140, B=10; Hot5–7 mit60, q2; Cold12–14 mit0, q0, Rand offen; übrige Normal. |
| HC-T Gleichstand | [5,30,30,30,5,5,5,5,30,30,30,5,5,5] | B=220/14=110/7; Hot2–4 und9–11 je90, Mittel30, gleichrangig; Cold5–8 und12–14. Tag1 einzelner Cold-Kandidat, keine Phase. |
| HC-S Klein | 13 vollständige Tage à10 | Rohsumme130, Phasen insufficient-data, keine erfundene Normalitätsfreigabe. |
| HC-P Zeitraum | HC-N, Custom nur Tage5–11 | 7 gültige Tage, Rohsumme100; keine Phasenerkennung wegen Mindestumfang. |
| HC-A Update | HC-N plus Tag15=10; Wiederimport | B150/15=10; Phasen5–7 und12–14 unverändert, Cold nun rechts durch Normal begrenzt; Wiederimport keine Änderung. |
| HC-U Lücke | HC-N, Tag6 nicht vollständig/fehlend | D=13 → insufficient-data; kein Zusammenfügen von Tag5 und7. |
| HC-X Ausschluss | HC-N, explizit Tag6 ausklammern | D=13, B nicht produktiv auswertbar; Rohsumme140 bleibt. Undo: HC-N vollständig wiederhergestellt. |
| HC-C Kontinuität | 14 Tage: sieben Tage18, danach sieben Tage2 | B=10; Hot1–7, Cold8–14. Cold N14, sieben aktive Tage, also100 % aktive Tage trotz geringer Intensität. |

# silence — Longest Silence

## 1. Nutzerfrage

Welche vollständig beobachteten A/B-Kommunikationspausen sind am längsten und wie verteilen sich die übrigen? Dauer ist keine Aussage über Desinteresse.

## 2. Eingabemenge

Messbare Rohintervalle zwischen benachbarten relevanten A/B-Nachrichten gemäß CR-06; beide Endpunkte in P nach CR-07. Ursprüngliche Quellenzeiten müssen eindeutig sein, keine Importlücke/unklar einsortierbare Nachricht dazwischen. C darf Kontext sein, unterbricht A/B-Lücke nicht. Sprache unerheblich, Events/Schlaf nur Kontext.

## 3. Zähler und Nenner

G = gültige Rohpausen; G_in = G minus explizit ausgeschlossene Intervalle. Rohmaximum=max Dauer(G); bereinigtes Maximum=max Dauer(G_in). Typische Pause=Median der jeweiligen klar benannten Menge, Mittelwert optional. Verteilungsanteil=Anzahl Intervalle einer Klasse / n derselben Menge, **nicht Anteil der Zeit**. Ausschlussquote=|G\G_in|/|G|. Optional keine weiteren Prozente.

## 4. Berechnung / Klassifikation

Rohdauer Endzeit−Startzeit; keine Subtraktion von Schlaf-/Meetingdauer. Nach Quellenpräzision unmessbare Gleichminutenlücken als „innerhalb derselben Minute“ separat, keine0-Sekundenfiktion. G nach ungerundeter Dauer sortieren. Für Roh- und bereinigte Menge getrennt Maximum/Median/n berechnen. Verteilung dieselben verständlichen Dauerklassen wie Response: <1min,1–<5min,5–<30min,30min–<4h,≥4h; Klassen bedeuten hier Pausen, keine Antwortvermutung.

## 5. Zeitraumverhalten

Alle Presets gleich: beide Originalendpunkte in P; keine Kürzung an P. Randintervalle als Kontext, nicht in G. Importbeginn→erste Nachricht und letzte Nachricht→heute sind keine vollständigen Pausen.

## 6. Person A / B

Pause ist dyadisch, kein persönliches „Schweigen“. Vorheriger/nachfolgender Sender sichtbar, auch A→A möglich. Keine Schuld-/Personenanteile an der Pausendauer. A/B-Nachrichtenlisten dienen Nachvollziehbarkeit.

## 7. Gleichstände

Alle Intervalle mit gleichem maximalem Rohwert gleichrangig; stabile chronologische Reihenfolge. UI-Rundung erzeugt keinen echten Gleichstand.

## 8. Mindestdaten / Zustände

Ein vollständiges messbares Intervall genügt für beobachteten Wert. Nur eine Nachricht/unzureichende Zeit insufficient-data. Alle gültigen Intervalle bewusst ausgeschlossen: bereinigtes Maximum/Median not-applicable, n=0, Rohwert bleibt. Unsupported-Zeitquelle und error getrennt. Keine künstliche Mindestzahl für Einzelpause.

## 9. Datenabdeckung

Datum-only und unklare Sommerzeit reichen für genaue Dauer nicht. Bekannte Lücken sind ungültige Beobachtung, kein bloß vom Nutzer abgewählter langer Zeitraum. Unklare Sender können die vermeintliche Nachbarschaft verhindern. Anzahl nicht messbarer/ausgeschlossener Intervalle getrennt nennen.

## 10. Evidence

Vollständige Liste G mit beiden Original-IDs, Dauer/Präzision, Kontext, Status, Ausschlussgrund; eigener Filter für Ungültigkeit statt falschem Einbeziehen. Liste umfasst alle gewerteten Pausen, nicht nur Top3.

## 11. Nutzerkorrekturen

Ganzes konkretes Intervall ausschließen/wieder aufnehmen, Event hinzufügen/zuordnen, falschen Kontext korrigieren, Undo. Datenkorrektur kann Intervallgrenzen ändern. Einbeziehen repariert keine fehlenden Quellenzeiten. Keine automatische Übernahme von Hot-&-Cold-Masken.

## 12. Reanalyse

P und Daten-/Zeit-/Sprecher-/Typ-/Identitätsänderung bauen Nachbarschaft/Intervalle neu. Reine Textänderung ohne Mengenwirkung lässt Dauer gleich. CR-06-Ausschluss aktualisiert nur bereinigte Silence-Werte; nicht Response/Move/Free/Pulse/Hotcold. Event-/Profiländerung ohne explizite Intervallentscheidung nur Kontext. Geänderte Endpunkte machen alte Ausschlussreferenz prüfpflichtig statt still auf neue Pause zu übertragen.

## 13. Dashboard Snapshot

Keine neue Pflichtkarte. Rohwert und bereinigter Wert nicht zu einer unbeschrifteten Zahl verkürzen.

## 14. Darstellung

Roh-/bereinigt beschriftet, n und vollständige Rangliste; passende Dauer, ungerundete Präzision im Detail soweit Quelle erlaubt. Tap auf Grenzen öffnet Original, auf Kontext Event. Keine emotionale Farbeninterpretation.

## 15. Methodiktext

„Eine Pause liegt zwischen zwei tatsächlich vorhandenen Nachrichten von euch. Wir ziehen Schlaf oder Treffen nicht automatisch ab. Ausgeklammerte Intervalle bleiben in der Rohansicht erhalten; die bereinigte Ansicht lässt genau diese ganzen Pausen weg.“

## 16. Synthetische Soll-Testfälle

| Fall | Eingabe | Exakte Erwartung |
|---|---|---|
| SI-N Normal | Vier Nachrichten mit aufeinanderfolgenden Lücken=1min,9min,6h | G n=3; max6h, Median9min, Mittel370/3min; Klassen=1–<5:1/3,5–<30:1/3,≥4h:1/3. |
| SI-T Gleichstand | Lücken=10min,10min | Zwei gleichrangige Maxima10min; Median=10min. |
| SI-S Klein | Eine einzige Nachricht | Keine vollständige Pause; insufficient-data. |
| SI-P Filter | A31.10.23:00, B01.11.01:00; P=01.11. | 2h-Intervall nur Kontext; G im Fenster leer, kein 1h-Clipping. |
| SI-A Update | A10:00, B14:00; Add A12:00 | Rohmaximum4h→2h, danach zwei gleiche2h-Pausen; Wiederimport unverändert. |
| SI-U Unsicher | Gleiche Minutenangabe ohne Sekunden oder bekannte Importlücke | Kein exakter Dauerwert; separat unmessbar, nicht0. |
| SI-X Treffen/Undo | SI-N,6h-Pause mit4h-Treffen, dann explizit ausschließen | Rohmax6h; bereinigt n=2, max9min, Median5min; keine 2h-Ersatzpause. Undo wieder n=3/max6h/Median9min. |

# move — Wer macht den ersten Move?

## 1. Nutzerfrage

Wer beginnt nach einer hinreichend langen beobachtbaren Unterbrechung einen belegten neuen A/B-Austausch? Nicht wer häufiger neue Themen aufbringt oder zuerst nach Mitternacht schreibt.

## 2. Eingabemenge

CR-01-Blöcke/Quellenkontext, mindestens4h A/B-Unterbrechung als Kandidat, gültig zugeordnete Neustarts nach CR-02/03. Startnachricht in P; Vorgeschichte darf außerhalb liegen. Eindeutige Zeiten/Personen, keine Importlücke. DE/EN bzw. gültige Nutzerentscheidung bei semantischer Zuordnung; Medien-/Emoji-Bezug nicht erraten.

## 3. Zähler und Nenner

S = sichere oder nutzerbestätigte, nicht ausgeschlossene Starts. S_A/S_B nach tatsächlichem Starter; S=S_A+S_B. A-Anteil=S_A/|S|, B analog. Ungeklärte Kandidaten U und verworfene X separat, nicht im Nenner. Kandidatenzahl ist keine Zahl tatsächlicher Starts.

## 4. Berechnung / Klassifikation

Strukturell ≥4h-Unterbrechung erkennen; Importanfang nicht als Kandidat allein aus fehlender Vorgeschichte. Danach hybride Zuordnung: gültige Nutzerentscheidung, sichere qualitätsgeprüfte Klassifikation oder eindeutiger Reply mit fachlich passendem Zusammenhang. Fortsetzung widerlegt Neustart; Sprecherwechsel allein genügt nicht. Eindeutige bestätigte Neustarts zählen einmal mit erster MessageId, auch ohne spätere Antwort. Keine neue Confidence-Prozentgrenze; automatische Zuordnungsqualität muss gesondert nachgewiesen sein.

## 5. Zeitraumverhalten

CR-07: Start im P zählt mit auswertbarer Vorgeschichte, selbst wenn Vorgänger außerhalb. Kein künstlicher Start an Filterkante. Gesamt/relative/Custom ändern nur P, nicht4h-Regel. Relative Änderung kann Startmenge verschieben.

## 6. Person A / B

Gemeinsame S-Menge, positive Anteile summieren auf100 %. Nutzerlabels A/B nie aus Arrayposition neu vergeben. Dritte beeinflussen Zuordnungsprüfung, zählen nie als Starter von A/B. Keine universelle „Initiativperson“-Diagnose.

## 7. Gleichstände

S_A=S_B → Gleichstand. Bei S=0 keine Gewinnerperson. Gerundete identische Prozente bei verschiedenen Counts nicht als exakter Gleichstand ausgeben.

## 8. Mindestdaten / Zustände

Ein gültiger Start erlaubt einen beobachteten Count mit n=1. Bei ausreichend geprüfter Quelle0 Starts gültiger Zähler0, Anteile not-applicable. Nur Importanfang/unklare Zeit/ungeprüfte Kandidaten insufficient-data für gesicherte Verteilung. Unsupported-Zuordnungssprache/Quelle und error getrennt. Teilmenge sicherer Starts darf mit U-Zahl angezeigt werden, nicht als vollständiges Muster.

## 9. Datenabdeckung

Fehlende Uhrzeit/Zone/Abdeckung verhindert4h-Nachweis. Ein einzelnes „Hallo“ ohne Kontext ist kein sicherer Anfang. Unklarer Bezug zu C führt Review; Datenlücke ist keine gesicherte Pause.

## 10. Evidence

Alle S/U/X mit Vorgänger, Startnachricht, Abstand, Fortsetzungs-/Neustartentscheidung, Originalen, Herkunft/Confidence soweit vorhanden. Korrektur wirkt auf genau diese Zuordnung. Kein frei erfundener Beleg für ein semantisches Label.

## 11. Nutzerkorrekturen

„Kein neuer Start“, „gehört zum vorherigen Gespräch“, richtigen Zusammenhang zuweisen, wieder einbeziehen/Undo. Fortsetzung zuweisen erfindet nicht automatisch ein Response Event. Sprecher-/Zeitdatenkorrektur nach zentralem Vertrag.

## 12. Reanalyse

P/Bestand/Zuordnung/Sprecher/Art/Zeit/Identität ändern Kandidaten und S. Inhaltsbearbeitung kann Klassifikation invalidieren auch bei gleicher Nachrichtenzahl. Sessionkorrektur prüft `response` und antwortbezogenes `longstory`, keine pauschale Änderung der Free-Mengen. Schlaf-/Treffen-Kontext alleine erzeugt keinen Start.

## 13. Dashboard Snapshot

Keine neue Karte erzwingen. Ein Prozent ohne n und unbekannte Kandidaten wäre unvollständig; Detailvergleich bleibt maßgeblich.

## 14. Darstellung

A/B-Counts und Anteile, n gültig/U ungeklärt/X ausgeschlossen. Tap öffnet vollständige Startliste und Originale. Prozent eine Nachkommastelle, Counts ganzzahlig; „beobachtete Starts“ statt Charakterwertung.

## 15. Methodiktext

„Wir prüfen neue Austausche nach mindestens vier Stunden Unterbrechung. Eine belegte Fortsetzung zählt nicht als neuer Start. Themenwechsel, Mitternacht und der erste Importbeitrag allein reichen nicht. Unsichere Zuordnungen bleiben prüfbar.“

## 16. Synthetische Soll-Testfälle

| Fall | Eingabe | Exakte Erwartung |
|---|---|---|
| MV-N Normal | Drei unabhängig gültige Neustarts nach je6h: A, A, B | S=3, A2/B1,66,7/33,3 %. |
| MV-T Gleichstand | Zwei gültige Starts A, B | Je1/2=50 %, Gleichstand. |
| MV-S Klein | Nur erste importierte Nachricht „Hallo“ | Kein automatischer Start, insufficient-data für Startableitung. |
| MV-P Zeitraum | Vorgänger31.10.15:00; bestätigter A-Neustart01.11.09:00; P=01.11. | A1,100 %, Vorgänger nur Kontext. |
| MV-A Update | MV-N, ein A-Start wird belegte Fortsetzung | S=2, A1/B1=50/50 %; passende Responsezuordnung nur gesondert prüfen; Undo S=3. |
| MV-U Unsicher | ≥4h-Kandidat mit unklarem C-/B-Bezug | U=1, S=0, kein Anteil; kein automatischer A/B-Start. |
| MV-E Grenze | Pause3h59 versus4h, danach jeweils belegt neues Thema | Erstes kein Kandidat allein aus Pause; zweites Neustartkandidat, zählt erst bei belegtem neuen A/B-Austausch. |
| MV-R Späte Antwort | Nach24h eindeutige echte Fortsetzung | Kein neuer Move; kann Response Event sein. |

# response — Fast Responder

## 1. Nutzerfrage

Wie lange dauern eindeutig zugeordnete Antworten ab dem Ende eines Nachrichtenblocks, und wie unterscheiden sich die beobachteten Verteilungen? Keine Aussage über Interesse oder allgemeine Verlässlichkeit.

## 2. Eingabemenge

Gültige Response Events nach CR-01–05, je Quellblock höchstens eine Erstreaktion. Beide Endpunkte in P. Hinreichend eindeutige Chronologie/Zeitbasis; gleichminutige Fälle ohne feinere Auflösung separat. A↔B-Bezug sicher, C kein Antwortender in dieser Kennzahl. Semantische Zuordnung hybrid, nicht allein Sprecherwechsel.

## 3. Zähler und Nenner

Je antwortender Person p: E_p gültige einbezogene messbare Events, n_p=|E_p|. Hauptwert Median ihrer Dauern, optional Mittel Summe/n_p. Verteilungsanteil Klasse/n_p. Longest Real Answer=max(E_p) bzw. ausdrücklich benannte Gesamtmenge E_A∪E_B. Keine undefinierte Antwortquote pro Frage/Nachricht.

## 4. Berechnung / Klassifikation

Blockende bis erster eindeutig zugehöriger Antwortbeginn; keine feste maximale Dauer. Neustart wird nicht als extreme Antwort verwertet. Alte Replies brauchen sicheren fachlichen Zusammenhang; bereits beantworteter Quellblock erzeugt keine zweite Erstreaktion. Unsichere Events Review, nicht starke Gewinneraussage. CR-05-Klassen: <1min,1–<5min,5–<30min,30min–<4h,≥4h, Grenzen jeweils links inklusive. Median/Mittel/Maximum aus derselben gültigen Menge. Keine künstliche Entfernung langer echter Antworten.

## 5. Zeitraumverhalten

CR-07 beide Endpunkte in P, kein Clipping. Ein grenzüberschreitendes Event bleibt mit ganzer Dauer im Kontext erreichbar. Gleiche Regel für alle Presets. Blockbildung vor Filterbeschneidung, kein vorgezogenes künstliches Blockende.

## 6. Person A / B

Event wird der **antwortenden** Person zugeordnet. n_A+n_B=n gesamt; Mediane nicht addieren. Verteilungsanteile je Person summieren auf100 %, A-/B-Mediane sind keine Prozente. Bei einer Seite ohne Events kein Zwei-Personen-Medianvergleich.

## 7. Gleichstände

Exakte Mediane gleich → Gleichstand, keine zufällige Person. Maximaldauern mit allen gleichen Originalereignissen zugänglich. Rundung darf keinen falschen Sieger erzeugen; bei kleinem n keine allgemeine Gewinner-/Stabilitätsbehauptung.

## 8. Mindestdaten / Zustände

Ein gültiges Event erlaubt Einzel-/Personenwert mit n=1. Keine gültigen Events bei vollständig geprüfter Grundlage: Median not-applicable. Nur ungeklärte/unmessbare Beziehungen: insufficient-data. Unsupported für nicht unterstützte notwendige Zuordnung; error bei Verarbeitung. Gleichminutige Intervalle nicht exakt0 Sekunden und nicht im exakten Median/Maximum.

## 9. Datenabdeckung

Datum-only, Zeitkonflikte, bekannte Importlücken und unklare Sprecher separat. Anteile sicherer Events beziehen sich nur auf diese Basis, Reviewzahl sichtbar. Die Erkennung einer Antwortbeziehung ohne genaue Dauer rechtfertigt keinen genauen Zeitwert.

## 10. Evidence

Vollständige Eventliste mit Quellblock aller MessageIds, Blockende, erster Antwort, Dauer, Kontext/Reply-Bezug, Status/Confidence. Persönliche Liste nur Events dieser antwortenden Person. Longest-Originalsprung exakt, Rückkehr zur Liste erhalten.

## 11. Nutzerkorrekturen

Keine echte Antwort, anderer Quellblock, Blockgrenzen korrigieren, Event ausschließen/einbeziehen/Undo. Ein Ausschluss erzeugt keinen neuen Move. Geänderte Quelle/Antwort kann Klassifikation neu prüfen lassen.

## 12. Reanalyse

P/Import/Replace/Person/Art/Zeit/Identität/Block-/Session-/Responsekorrektur aktualisieren E und Statistiken sowie Kurzantwortteil `longstory`. Textbearbeitung kann Zuordnung ändern. Reine Silence-Ausklammerung zieht keine Stunden von Response ab; Schlaf-/Meetingkontext ohne neue explizite Zuordnung ändert keine Uhrzeit. Free-Zählung unverändert durch semantischen Responseausschluss.

## 13. Dashboard Snapshot

Keine neue Pflichtkarte. Zwei Mediane ohne n/Zuordnungssicherheit nicht zu Siegerbadge verdichten.

## 14. Darstellung

Personenvergleich Median/n, optional Mittel, Verteilungen mit expliziten Zeitklassen, längste echte Antwort. Tap/Tooltip Dauer, Quellenpräzision, Originale und Status. „Innerhalb derselben Minute“ als eigener Hinweis außerhalb exakter Verteilung, damit Nenner klar bleibt.

## 15. Methodiktext

„Die Zeit beginnt am letzten Beitrag des zugehörigen Nachrichtenblocks und endet an der ersten echten Antwort. Neue Gesprächsstarts sind keine langen Antworten. Wir zeigen den Median mit Anzahl gültiger Fälle; unklare Zuordnungen und ungenaue Zeiten bleiben gesondert prüfbar.“

## 16. Synthetische Soll-Testfälle

| Fall | Eingabe | Exakte Erwartung |
|---|---|---|
| RE-N Normal | A beantwortet gültig nach1,9,50min; B nach2,4min | A n=3, Median9, Mittel20, max50; B n=2, Median=3, Mittel3, max4. A Klassen je1/3 in 1–<5,5–<30,30–<4h; B=100 % in 1–<5. |
| RE-T Gleichstand | A [1,5]min, B [2,4]min | Beide Median=3min, exakter Gleichstand trotz anderer Verteilungen. |
| RE-S Klein | Ein Event B nach30s | B n=1, Median=30s, erste Klasse100 %, keine allgemeine Gewinnerbehauptung. |
| RE-P Zeitraum | Quellblock31.10.23:00, Antwort01.11.01:00; P=01.11. | 2h nur Kontext, nicht im November-Median. |
| RE-A Update/Korrektur | RE-N: A-Event50min ausschließen | A n=2, Median5min, Mittel5, max9; Undo ursprünglicher Stand. |
| RE-U Zeitunsicher | A/B nur beide10:00, Minutenauflösung | Beziehung ggf.gültig, Dauer „innerhalb derselben Minute“, n=0 für exakte Dauerwerte, Median nicht definiert; kein 0s. |
| RE-L Lange Antwort | Eindeutig bestätigte Antwort nach48h | Ein gültiges Event, Klasse≥4h; kein künstlicher Deckel. |
| RE-B Blockende | A10:00, A10:02, B=10:03 mit Bezug | Ein Event B1min, nicht 3min. |

# firstlast — First & Last

## 1. Nutzerfrage

Wer schreibt zuletzt vor und zuerst nach einer qualifizierten gemeinsamen Ruhepause? Beobachtetes Kommunikationsmuster, kein medizinischer Schlafnachweis.

## 2. Eingabemenge

Vollständig messbare A/B-Rohpausen, beide Endpunkte in P, gültige Profile/Qualifikation nach CR-08/09. Kandidat ab4h Rohpause und mindestens2h gemeinsamer Überlappung mit beiden typischen Ruheprofilen. Hohe Sicherheit bei eindeutiger Zeit, passenden vorhandenen Profilen, ohne Aktivitätswiderspruch/Lücke; alternativ gültige Nutzerbestätigung. Unsichere Kandidaten nicht automatisch werten.

## 3. Zähler und Nenner

Q = qualifizierte maßgebliche Ruhepaare, höchstens eines je gemeinsamem Ruhezyklus. n=|Q|. L_A/L_B letzte Nachricht davor, F_A/F_B erste danach. Last-Anteil=L_A/n bzw.L_B/n; First-Anteil=F_A/n bzw.F_B/n. Review-/verworfene Kandidaten getrennt, nicht im Nenner.

## 4. Berechnung / Klassifikation

CR-08-Kandidaten aus echten Rohpausen erzeugen; reale Aktivität schlägt Profil, keine Mitternachtsgrenze. Je gemeinsamem Zyklus längsten passenden Kandidaten als Hauptkandidat; gleiche Länge/widersprüchliche Zuordnung Review. Erst sicher automatisch qualifizierter oder gültig bestätigter Hauptkandidat wird Q. Endpunktabsender bestimmen F/L. Keine manuelle Pflichtprüfung jeder Nacht. Kein erfundenes High-confidence-Prozent; Qualitätspolitik muss separat nachgewiesen sein. Ohne Profile keine starre Ersatznacht; spätere Profilinferenz benötigt eigenen Vertrag.

## 5. Zeitraumverhalten

CR-07 beide Endpunkte in P, unvollständige Nacht nur Kontext. Alle Presets identisch. Zyklusbestimmung nicht aus abgeschnittenem Fenster neu auf Mitternacht setzen. Nach Add können bisher unvollständige Paare erstmals vollständig werden.

## 6. Person A / B

Last und First jeweils getrennte100-%-Verteilung bei n>0; zusammen nicht auf100 addieren. Eine Person kann beide Endpunkte besitzen. Unterschiedliche Rhythmen ergeben nicht automatisch eine gemeinsame Ruhepause; keine Verdopplung über zwei persönliche Nachtlisten.

## 7. Gleichstände

Gleiche F-/L-Counts bedeuten jeweiligen Gleichstand. Mehrere längste Ruhepausen desselben Zyklus sind Review, keine willkürliche Auswahl und keine Doppelwertung. Ausdrückliche Nutzerwahl kann einen maßgeblichen Kandidaten bestimmen.

## 8. Mindestdaten / Zustände

Ein gültiges Paar erlaubt Counts/Anteile mit n=1, keine Gewohnheitsaussage. Unzureichende Profile/Qualifikation/Zeit: insufficient-data. Vollständig gültig geprüfte Menge ohne Paare: Count0, Anteile not-applicable. Unsupported-Quellfall/error getrennt. Sichere Teilmenge mit Reviewanzahl darf gezeigt werden.

## 9. Datenabdeckung

Lücken/fehlende Endpunkte verhindern sichere Qualifikation. Datum-only nicht ausreichend. Nachtarbeiterprofile tagsüber zulässig; verschiedene/unbekannte Rhythmen nicht normalisieren. Profilangabe ist weicher Kontext, kein Beweis, dass Person tatsächlich schlief.

## 10. Evidence

Alle Q/Kandidaten/Verwerfungen mit beiden Originalen, Rohdauer, Profilüberlappung, Zykluszuordnung und Entscheidungsherkunft. Zeigen, warum ein Kandidat automatisch sicher oder reviewpflichtig ist; keine Diagnose. Andere Segmente desselben Zyklus zugänglich.

## 11. Nutzerkorrekturen

Falsche Ruhepause verwerfen, unsicheren Kandidaten bestätigen, maßgeblichen Zykluskandidaten korrigieren, Profil ändern, Undo. Nutzerentscheidung hat Vorrang; geänderter Inhalt/Zeit/Zyklus macht alte Referenz gegebenenfalls reviewpflichtig. Bestätigung erfindet keine fehlende Zeit.

## 12. Reanalyse

P/Import/Replace/Sprecher/Art/Zeit/Identität verändern Grenzen; Profiländerung und Ruheklassifikation invalidieren Q/F/L. Inhalte können Qualifikation beeinflussen, nicht roh gemessene Dauer. Silence-Ausschluss allein keine Nachtverwerfung; Night-Korrektur allein keine Free-/Streakänderung. Nach Neuzuordnung alle F/L-Anteile aus identischem Q berechnen.

## 13. Dashboard Snapshot

Keine neue Pflichtkarte. Getrennte First-/Last-Mengen, n und Reviewbasis nicht auf einen undefinierten „Nähe“-Wert verdichten.

## 14. Darstellung

Zwei getrennte A/B-Vergleiche Last/First, n und sichere/unsichere Herkunft. Tap öffnet Paar, Profile als Hinweise und Originale. Passende Dauer, Prozent eine Nachkommastelle, kein Mitternachtsbalken als Ersatznachweis.

## 15. Methodiktext

„Wir betrachten qualifizierte gemeinsame Ruhepausen. Typische Schlafzeiten helfen, tatsächliche Nachrichten gehen aber vor. Sichere Fälle können automatisch zählen; unsichere könnt ihr prüfen. Pro gemeinsamem Zyklus zählt höchstens eine maßgebliche Pause.“

## 16. Synthetische Soll-Testfälle

| Fall | Eingabe | Exakte Erwartung |
|---|---|---|
| FL-N Normal | Zwei sichere Zyklen: Last A→First B, Last B→First B | n=2; Last A/B50/50 %, First A/B0/100 %. |
| FL-T Gleichstand | Zwei sichere Zyklen A→B und B→A | Last und First jeweils50/50 %. |
| FL-S Klein | Profile23–07, gültige sichere Pause B02:00→A07:00 | n=1, Last B=100 %, First A100 %, keine Pflichtbestätigung; Beginn=02, nicht23. |
| FL-P Zeitraum | Einziger qualifizierter Zyklus31.10.23→01.11.07; P=01.11. | Paar nur Kontext, n im P=0; keine neu erfundenen Grenzen. |
| FL-A Update | Import endet nach Last A; Add enthält First B07:00, sichere Qualifikation | Vorher unvollständig, danach n=1, Last A/First B. Wiederimport keine Doppelwertung. |
| FL-U Profile fehlen | 9h-Lücke, keine Profile/Bestätigung | Review/insufficient-data, kein automatisches Paar. |
| FL-G Segmente | Gleicher Zyklus mit zwei qualifizierten4h-Segmenten | Gleichstand → Review, zunächst kein gewähltes Paar; Nutzerwahl eines Segments erzeugt genau1. |
| FL-X Korrektur | FL-N, erstes Paar verworfen | n=1, Last B=100 %, First B=100 %; Undo n=2. |
| FL-D Nachtarbeit | Beide Profile08–16, sichere Pause08:15–15:00 | Qualifizierbar trotz Tageszeit; Endpunkte zählen wie gegeben, nicht auf Nacht verschoben. |

# longstory — Long Story Short

## 1. Nutzerfrage

Wie lang sind eigene Textbeiträge, welche sind am längsten und welcher Anteil gültiger Textantworten fällt knapp aus? Länge ist keine Zuwendungs-/Qualitätsbewertung.

## 2. Eingabemenge

Eigene Text-/Captionsegmente von R in P, zentrale DE-/EN-Worttokens. Grundlängenmenge T = Nachrichten mit mindestens1 eigenem Worttoken. Emoji-only/Medien-only separat zählen, nicht als0-Wörter-Texte in T. Für kurze Antworten zusätzlich gültige Responsezuordnung und vollständiger antwortender CR-01-Block. Gesamt-Längen auch undatiert; Antwortteil benötigt hinreichende Zeit-/Zuordnungsbasis.

## 3. Zähler und Nenner

L(m)=eigene Worttokenzahl einer Textnachricht. Hauptwert Median L über T, pro Person eigener T_p; optional Mittel Summe L/|T|. Längste Nachricht=max L, keine Zeichenmessung als versteckte Alternative. Verteilung Anzahl Textnachrichten in Klasse/|T|. **Freigegebene Regel LS-SA-01:** Antwortblocklänge = Summe eigener Tokens seines vollständigen Blocks. K = gültige texttragende Antwortblöcke mit mindestens1 Wort, je Block einmal; kurze Antwort bei1–3 Wörtern. Kurzanteil=kurze Blöcke/|K|. Emoji-/Medien-only-Antwortblöcke separate Counts außerhalb K.

## 4. Berechnung / Klassifikation

Nachrichtenlängen deterministisch aus zentralen Tokens, Stopwords enthalten; Quote/Fremdforward nicht zählen. Klassen:1–3,4–10,11–30,31–100,≥101 Wörter, ohne Überschneidung. Median/Maximum unabhängig vom Antwortstatus.

Antwortteil hybrid aus approved Responsebeziehungen, nicht aus bloßer Kürze. Freigegeben ist der vollständige Antwortblock statt nur der ersten Nachricht: „Ja“ plus „aber erst morgen“ bildet4 Wörter, nicht eine scheinbar ultrakurze Antwort. Ein Block, der als erste Antwort mehrere Bezüge hat, zählt höchstens einmal; unklare Hauptzuordnung bleibt Review. Der komplette Antwortblock muss in P liegen; keine abgeschnittenen Nachträge unterschlagen. ≤3 ist eine prüfbare lexikalische Kürze, kein semantischer Wert. „Ich liebe dich“ bleibt3 Wörter und kann inhaltlich stark sein.

## 5. Zeitraumverhalten

Nachrichtenlängen anhand Sendedatum in P; Gesamt auch undatierte. Antwortteil CR-07 plus vollständiger Antwortblock. Ein späterer Nachtrag außerhalb P darf den Block nicht künstlich kürzen; solcher Block bleibt Kontext. Relative Presets ändern beide Mengen konsistent, ohne Uhren für undatierte Texte zu erfinden.

## 6. Person A / B

Eigene T_p/K_p, jeweilige Nenner. Persönliche Mediane/kurze Antwortquoten summieren nicht100 %. Gemeinsame Verteilung aus Vereinigungsmenge, nicht Mittelwert der Personenmediane. Längster Beitrag kann von beiden gleichlang stammen.

## 7. Gleichstände

Alle längsten Nachrichten anzeigen; keine zufällige „Roman“-Person. Median-Rohwerte vergleichen, keine Siegerbehauptung bei kleinem n. „Roman des Jahres“ nur wenn Zeitraum tatsächlich dieses Kalenderjahr bezeichnet; sonst „längster Beitrag im Zeitraum“.

## 8. Mindestdaten / Zustände

Eine Textnachricht genügt für Längen. Keine Textnachrichten trotz gültiger Medienmenge: Längen not-applicable, Mediencount gültig. Fehlende Sprach-/Originalbasis insufficient-data/unsupported. Kurzantwortteil nur bei freigegebener LS-SA-01 und gültigem K; K0 kein 0-%-Wert. Error statt Fake-Längen. Fehlende Produktfreigabe nicht als Nutzer-Datenmangel ausgeben.

## 9. Datenabdeckung

Uhrzeit für reine Längen nicht nötig; für Antwortblockregel schon. Unklarer Quote-/Captionumfang macht Textbasis prüfpflichtig. Importlücken/fehlende Blockteile verhindern vollständige Antwortwertung. DE/EN-Tokenregel verwenden, unbekannte Sprache nicht still mit andersartigen Wortgrenzen vermischen.

## 10. Evidence

Alle Längenbeiträge mit Tokens/Original, längste Nachricht exakt fokussieren. Vollständige K-Liste mit Quellblock, Antwortblock, Summenlänge, Klasse, Review-/Ausschlussstatus. Emoji-only/Medien-only-Antworten bleiben auffindbar, ohne Kurztextetikett.

## 11. Nutzerkorrekturen

Text-/Sender-/Zitat-/Typkorrekturen beeinflussen Länge. Response ausschließen, Block zusammenführen/trennen oder neu zuordnen beeinflusst K. Ein semantischer Responseausschluss entfernt die Originalnachricht nicht aus T. Undo beide Abhängigkeiten gezielt prüfen.

## 12. Reanalyse

P/Import/Replace/Person/Art/Zeit/Identität/Textänderung aktualisieren T; Antwort-/Block-/Sessionkorrektur zusätzlich K. Stopwordlistenwechsel nicht L. Schlaf/Events/Silence nicht pauschal kürzen. Wortregelversion betrifft auch `texting`, `words`, `pulse`, `deepdive`; K-Änderung keine neue Rohwortzahl.

## 13. Dashboard Snapshot

Keine neue Pflichtkarte. Einzelnes „kurz“ ohne Nenner/Antwortkontext ungeeignet.

## 14. Darstellung

Wörter als ganze Längen, Median/Mittel ggf.eine Nachkommastelle; Verteilung nach definierten Klassen. Längste Beiträge mit Originalzugang, Personenvergleich. Kurzantwortquote separat von Emoji-/Medienantwortcounts. Touch zeigt Blocksumme und alle Nachträge.

## 15. Methodiktext

„Wir messen eigene Textlängen in Wörtern. Für knappe Antworten betrachten wir den vollständigen zugeordneten Antwortblock, nicht nur seine erste Nachricht. Emoji- und Medienantworten bleiben eigene Gruppen. Wenige Wörter sagen nichts über Zuwendung aus.“ Kurze Textantwort bedeutet dabei1–3 eigene Worttokens im vollständigen gültigen Antwortblock.

## 16. Synthetische Soll-Testfälle

| Fall | Eingabe | Exakte Erwartung unter LS-SA-01 |
|---|---|---|
| LS-N Normal | Längenprüfsatz: A[2,8], B[4] Wörter; separater Antwortprüfsatz: gültige Blocklängen[2,4,3] | Gesamt T=3, Median4, Mittel14/3, max8; K=3, kurz2/3=66,7 %. |
| LS-T Gleichstand | A4 Wörter, B4 Wörter | Beide längste4, Median4. |
| LS-S Klein | Ein Text„Ich liebe dich“, als gültiger Antwortblock | L=3, Median=3; K=1, kurz100 %, ausdrücklich keine geringe Zuwendung. |
| LS-P Filter | Antwort beginnt31.10.23:59, Nachtrag01.11.00:01; P=01.11. | Kein vollständiger Antwortblock in K; eigener Text des Nachtrags kann in T liegen. |
| LS-A Update | Gültiger Antwortblock„Ja“; Add Nachtrag1min später„aber erst morgen“ | K bleibt1, Blocklänge1→4, Kurzanteil100→0 %. Rohbeiträge T wachsen um eine Nachricht. |
| LS-U Unsicher | Datum-only Texte2/4Wörter ohne Blockzeiten | T-Median=3; Antwortblockteil insufficient-data, nicht zwei automatisch kurze Antworten. |
| LS-M Antwortarten | Drei gültige Antworten: Emoji-only, Medien-only,„Ja“ | K=1, kurz1/1=100 %; daneben je1 Emoji-/Medienantwort, kein 3er Nenner. |
| LS-B Block | B„Ja“ und B„genau“ im selben gültigen Block | Ein kurzer Textantwortblock mit2 Wörtern, nicht zwei Antworten. |

# words — Your Greatest Hits

## 1. Nutzerfrage

Welche eigenen Wörter verwendet ihr häufig, und welche verwendet eine Person relativ zu ihrer Wortmenge deutlich häufiger? Kein Persönlichkeitsprofil aus Wortwahl.

## 2. Eingabemenge

Eigene zentrale Worttokens aus R in P; DE/EN nach gültiger Zuordnung, Originalsegmente erhalten. Gesamt auch undatiert. Rankingmenge U nach ausschließlich dafür vorgesehener versionierter sprachabhängiger Stopwordliste. Keine Substrings, Übersetzung oder stilles Lemmatizing. Dritte/Zitate/Forward-Fremdtext/technische Segmente ausgeschlossen.

## 3. Zähler und Nenner

c_p(w)=Vorkommen der normalisierten Form w bei Person p in U; T_p=alle rankbaren Tokenvorkommen dieser Person. Gemeinsame Häufigkeit c_A+c_B, optional Anteil am Ranking=(c_A+c_B)/(T_A+T_B). Persönliche Häufigkeit und Anteil c_p/T_p. **Freigegebene Regel B-WORDS-01:** Signature-Score für A =1000×(c_A/T_A−c_B/T_B); B symmetrisch. Nur Kandidaten mit c_p≥3 und relativer Rate mindestens doppelt so hoch wie bei der anderen Person; zusätzlich müssen **T_A≥100 und T_B≥100** gelten. Gegenrate0 ist bei erfüllten beidseitigen Mindestmengen zulässig. Unter100 bei auch nur einer Person: Signaturevergleich insufficient-data und kein Signature-Label; persönliche Toplisten bleiben möglich.

## 4. Berechnung / Klassifikation

Tokens case-insensitive/NFC vergleichen, Umlaute/ß nicht transliterieren; Originalschreibweisen im Drilldown. Stopwords nur Rankingfilter, nicht Änderung Gesamtwortzahl. Häufigkeiten exakt zählen und sortieren.

Signature kombiniert beidseitige Mindestkorpora von100 rankbaren Tokens, Mindeststützung3 und relatives Verhältnis≥2 und **absoluter Differenz je1000 rankbare Wörter** als Score. Dadurch reichen Rohhäufigkeiten oder ein singulärer Treffer nicht; bei sehr verschieden großen Korpora zählen vergleichbare Raten. Mindeststützung3 und Mindestkorpus100 sind freigegebene V1-Konventionen gegen zu schwach gestützte Vergleiche, kein Signifikanztest. Gegenrate0 anzeigen „im anderen ausgewerteten Wortbestand nicht gefunden“, nicht unendliche Persönlichkeitsausprägung. Score nicht als Wahrscheinlichkeit bezeichnen.

**Freigegebener V1-Umfang:** Wortformen statt Lemmagruppen; automatische Mehrwortphrasen zunächst nicht Teil dieser Funktion. Einzelne Wörter von „guten Morgen“ zählen nach ihrer Token-/Stopwordeignung, keine zusätzliche Phrase im Wortnenner. Spätere Phrasekennung braucht eigenen Vertrag.

Freigegebene konservative Rankinglisten als versionierte V1-Ausgangsliste `words-stop-v1`:

- DE: aber, als, am, an, auch, auf, aus, bei, bin, bis, bist, das, dem, den, der, des, die, du, ein, eine, einem, einen, einer, eines, er, es, für, hat, ich, im, in, ist, ihr, mit, sie, sind, und, uns, von, war, was, wir, zu, zum, zur.
- EN: a, an, and, are, as, at, be, been, but, by, for, from, he, her, him, i, in, is, it, its, of, on, or, our, she, that, the, their, them, they, this, to, us, was, we, were, with, you, your.

Nicht pauschal enthalten: Negation (nicht/kein/no/not), semantisch relevante Modalität (kann/muss/can/must) und Eigennamen. Deutsche `die` im englischen Segment nicht mit deutscher Liste entfernen. Unbestimmte Sprache: für Ranking keine ungesicherte Stopwortlöschung; diese ungefilterte Teilmenge kennzeichnen. Semantik erhält Originaltext einschließlich aller Stops. Konkrete Liste ist mit B-WORDS-01 freigegeben; spätere Änderung nur durch bewusste Regelversion. Keine Bibliotheksauswahl.

## 5. Zeitraumverhalten

Alle Presets definieren denselben R-Scope. Begrenzte Fenster schließen zeitlich unzuordenbare Tokens aus; Gesamt erlaubt sie. T_A/T_B und Signature jedesmal auf identischem P berechnen, keine Gesamtchatnenner für Monatsrankings. Uhrzeit nicht erforderlich.

## 6. Person A / B

Gemeinsame Liste summiert beide; persönliche Liste und Treffer ausschließlich Teilnehmer p. Unterschiedliche Wortmengen werden über Raten normalisiert. Gemeinsame/persönliche Häufigkeiten dürfen nicht als unterschiedliche Tokenisierung entstehen. Signature-Scores summieren nicht100 %; sie sind Differenzen je1000 Wörter.

## 7. Gleichstände

Gleiche Häufigkeit gleichrangig. Gleicher Signature-Score gleichrangig; Häufigkeit/lexikalische Reihenfolge höchstens stabile Anzeige, kein versteckter Sieger. Alle relevanten Treffer erreichbar; keine Top-N-Grenze, die Belege abschneidet.

## 8. Mindestdaten / Zustände

Ein rankbares Token erlaubt die persönliche Topliste. Leere Rankingmenge nach gültigem Stopfilter: Toprang/Anteil not-applicable, Gesamtwörter bleiben. Signaturevergleich nur bei T_A≥100 und T_B≥100. Darunter, einschließlich Nenner0: insufficient-data für Signature und kein Signature-Label/Score als Produktresultat. Bei erfüllter Mindestbasis, aber ohne qualifiziertes Wort: gültiges Ergebnis0 Signatures, kein Fehler. Unlesbare/unsupported Sprach-/Textgrundlage bzw.error getrennt.

## 9. Datenabdeckung

Fehlendes Datum im Gesamt okay, im Zeitfenster nicht. Importlücken begrenzen Wortschatzbehauptung. Sprach-/Zitatunsicherheit sichtbar; keine stillen Sprachwechsel der Nenner. Kein unbekannter Sender in persönlicher Liste.

## 10. Evidence

Jeder Worttreffer mit exakt tokenisiertem Originalsegment, MessageId, Person, Datum, Originalform. Drei Vorkommen in einer Nachricht sind drei Tokens, aber eine Readerstelle; beides benennen. Persönlicher Klick filtert Person zwingend. Varianten- und Stopwordliste/Version erklärbar. Signature zeigt c_p, T_p, c_other, T_other, Rate und Score.

## 11. Nutzerkorrekturen

Eigener Text vs.Zitat/Forward, Sprache, Sender, Inhalt und Identität korrigieren; sichere Tokenregel nicht durch bloßes Belegwegklicken ändern. Semantische Frage-/Humor-Ausschlüsse ändern Wortvorkommen nicht. Optionales Rankingausblenden eines Wortes wäre eine getrennte UI-Präferenz, nicht neue Gesamtwortzahl; hier keine neue Funktion gefordert.

## 12. Reanalyse

P/Add/Replace/Sprecher/Art/Zeit/Identität/Text-/Sprach-/Segmentkorrektur aktualisieren U und alle Nenner/Signaturewerte. Neue Stopliste ändert words, nicht Texting-/Pulse-Gesamtwörter. Zentrale Tokenregeländerung betrifft alle Wortkonsumenten. Event-/Schlaf-/Silenceentscheidung nicht words.

## 13. Dashboard Snapshot

Keine neue Pflichtkarte. Häufigkeits- und Signaturebegriff müssen im Detail erklärt bleiben.

## 14. Darstellung

Gemeinsame Topliste und zwei persönliche Listen; counts ganzzahlig, optional Prozent mit Nenner. Signature mit „zusätzliche Vorkommen je1000 rankbare Wörter“, Mindeststützung/Rate im Tap. Keine psychologische Bedeutung. Touchzugang zu allen Originalen, keine Substring-Belegsuche.

## 15. Methodiktext

„Wir zählen eigene Wortvorkommen und filtern für diese Ranglisten häufige Funktionswörter sprachabhängig heraus. Gesamtwortzahlen bleiben gleich. Signature Words haben mindestens drei Vorkommen; beide Personen müssen mindestens100 rankbare Wörter besitzen. Die Wörter werden relativ zur eigenen Wortmenge mindestens doppelt so häufig verwendet; ihr Rang folgt der Ratendifferenz.“ Entspricht der Freigabe B-WORDS-01.

## 16. Synthetische Soll-Testfälle

| Fall | Eingabe | Exakte Erwartung unter B-WORDS-01 |
|---|---|---|
| WO-N Normal | T_A100, T_B=1000;„Kaffee“ c_A10, c_B=10, restliche Tokens: andere Wörter | Rohhäufigkeit gleich10; Raten=10 %/1 %, A-Signature Score90 je1000, Verhältnis10, qualifiziert. |
| WO-T Gleichstand | T_A100, T_B=100; A Kaffee4/Tee4, B beide1 | Beide A-Scores30, Rateverhältnis4, gleicher Rang. |
| WO-S Klein | T_A100,T_B100; A Kaffee2,B0 | Topwortzählung2 gültig; Signaturebasis ausreichend, aber kein Signature wegen c_A<3. |
| WO-P Filter | Gesamt WO-N; ausgewählter Monat T_A10/T_B10,c_A1/c_B1 | Persönliche Monatslisten möglich; Signature insufficient-data, kein Label oder angezeigter Signature-Score. Gesamtkorpus darf nicht als Ersatznenner dienen. |
| WO-A Update | A„Kaffee Kaffee“,B„Tee“; identischer Wiederimport, danach A„Kaffee“ hinzufügen | Wiederimport c_A2/c_B1 unverändert. Add ergibt c_A3,T_A3,T_B1; Signature weiterhin insufficient-data, kein Signature-Label trotz Mindeststützung3. |
| WO-U Unbestimmt | Token„die“ im bestätigten EN-Segment und DE-Segment | EN„die“ rankbar1; DE„die“ Stopword0 im Ranking, beide bleiben Gesamtworttokens. |
| WO-Z Nullnenner | T_A100,c_A(Kaffee)3,T_B0 | Persönliche A-Liste gültig; Signature insufficient-data wegen fehlendem Mindestkorpus, kein unendlicher Score. |
| WO-SUB Tokenbezug | A„Haus Hausboot Haus“, B„Haus“ | A-Haus2 in einer Nachricht, B-Haus1; Hausboot kein Haus-Treffer. |
| WO-STOP Stops | DE„ich und Kaffee Kaffee“ | Gesamt W4; Ranking T2, Kaffee 2; Stopfilter löscht kein Original. |
| WO-MIN Mindestgrenze | T_A99,T_B100,c_A3,c_B0; danach A ein anderes rankbares Token hinzufügen | Vorher Signature insufficient-data. Danach T_A100,T_B100,Score30 je1000 für A,Verhältnisbedingung bei Gegenrate0 erfüllt; A-Kaffee qualifiziert. |

# pulse — Communication Pulse

## 1. Nutzerfrage

Wie verändern sich Nachrichten, Wörter und aktive Kommunikationstage über Zeit? Menge und Kontinuität bleiben getrennt; kein emotionaler Gesamtscore.

## 2. Eingabemenge

Datierte R/W in P, lokale Kalenderbasis. Tag, ISO-Woche Montag–Sonntag und Kalendermonat sind ausdrücklich wählbar; Standard Woche. Vollständige und partielle Perioden trennen. Wortwerte benötigen die zentrale Tokenbasis; Nachrichten sind sprachunabhängig. Hotcold-Masken und Silence-Ausschlüsse werden nicht automatisch angewandt.

## 3. Zähler und Nenner

Pro Periode j: N_j Nachrichten, W_j Wörter, D_j Kalendertage, K_j aktive Tage; entsprechende Personenwerte. Personenanteil = Personenmenge/Gesamtmenge derselben Metrik. Aktivitätsquote K_j/D_j nur bei vollständig beobachteten Tagen. Tagesraten r_N=N_j/D_j, r_W=W_j/D_j, r_K=K_j/D_j.

**Freigegebene Regel B-TREND-01:** Je Metrik x eigene Basis b_x = Median der Tagesraten vollständiger Perioden derselben Granularität in P. Index I_x(j)=100×r_x(j)/b_x bei b_x>0. Keine Addition verschiedener Metrikindizes. Bei gleich langen Wochen entspricht dies „Median vollständiger Wochen=100“; Monatslängen werden durch Tagesraten vergleichbar.

## 4. Berechnung / Klassifikation

Beiträge den Kalenderperioden zuordnen, aktive Tage aus mindestens einer relevanten Nachricht. Rohcounts vollständig darstellen. Vollständigkeit je Metrik prüfen: fehlende Wortbasis kann W-Index blockieren, ohne N zu blockieren. Baseline/Index ab mindestens zwei vollständigen Perioden; eine einzelne Periode wäre nur ein Vergleich mit sich selbst. Das ist keine statistische Sicherheitsschwelle.

Vergleich mit der unmittelbar vorherigen vollständigen benachbarten Periode: delta Rate=r_now−r_before; Prozent=(r_now/r_before−1)×100 bei r_before>0. Bei 0→positiv „von0 auf X“, kein unendlicher Prozentwert. Unvollständige Zwischenperioden nicht überspringen und dennoch „gegenüber Vorperiode“ behaupten.

Mindestens drei vollständige benachbarte Perioden mit streng steigenden bzw. fallenden Raten dürfen deskriptiv als „über drei Perioden gestiegen/gefallen“ bezeichnet werden. Gleichstand unterbricht strenges Steigen/Fallen. Keine KI-Interpretation, kein Signifikanztest; dies ist Teil B-TREND-01.

## 5. Zeitraumverhalten

P schneidet Perioden für die Rohansicht; partielle Wochen/Monate kennzeichnen und aus Basis/Trendvergleich ausschließen. Keine automatische Granularitätsänderung beim Filterwechsel. Ein Sieben-Tage-Fenster kann vollständige Tage, aber keine zwei vollständigen Wochen enthalten. Bei unterschiedlich langen Monaten Raten vergleichen; Rohcounts bleiben daneben unverändert.

## 6. Person A / B

N_A+N_B=N und W_A+W_B=W. K_A+K_B kann K übersteigen, weil gemeinsame Tage nur einmal in K zählen. Nachrichten-/Wortanteile summieren jeweils100 %, persönliche Aktivitätsquoten nicht. Ein Personenindex braucht eine eigene explizite Basis; keine persönliche Kurve durch einen unbenannten Gesamtmedian teilen.

## 7. Gleichstände

Gleiche Raten bedeuten keine Änderung. Medianbasis aus ungerundeten Raten, keine Siegerwahl bei gerundeten Gleichständen. Nachrichtenindex und Wortindex sind keine konkurrierenden Scores.

## 8. Mindestdaten / Zustände

Eine Periode erlaubt gültige Rohcounts. Index ab zwei vollständigen Perioden mit positiver Basis; sonst insufficient-data für diesen Teil. Nullbasis: Index not-applicable, gültige Nullcounts bleiben. Unsupported-Zeit-/Wortgrundlage bereichsbezogen; error bei Ausfall. Keine künstlichen Ersatzreihen.

## 9. Datenabdeckung

Datum fehlt: nicht in Zeitreihe. Uhrzeit nicht nötig. Bekannte Importlücke macht eine Periode partiell, nicht inaktiv. Unklare Person/Zeitzone verhindert die entsprechende Zuordnung. Keine Hochrechnung aus einigen Stunden. Granularität und Zahl vollständiger Perioden sind nachvollziehbar.

## 10. Evidence

Perioden mit Nachrichtenlisten, Tagestabelle und bei Wörtern Tokenbezug. Index zeigt Basisperioden, ihre Tagesraten, Median und Formel. Keine gemischten Referenz-/Produktivwerte.

## 11. Nutzerkorrekturen

Daten-, Sprecher-, Zeit-, Typ-, Text-/Zitat- und Identitätskorrekturen entsprechend zentraler Menge. Semantische, Hotcold- und Silence-Ausschlüsse verändern nicht automatisch Pulse. Berichtigte Abdeckung kann eine Periode vervollständigen und den Index erstmals ermöglichen.

## 12. Reanalyse

P, Add, Replace, Granularität und Datenkorrekturen invalidieren Perioden/Basis/Index/Vergleiche. Inhalt beeinflusst W, nicht N bei gleicher Nachrichteneignung. Wortregelversion betrifft W, Stopwords nicht. Änderung aktiver Tage betrifft zusätzlich andere Tageskonsumenten wie Streak/Deepdive; keine automatische Weitergabe von fremden Ausschlussmasken. Events nur Kontext.

## 13. Dashboard Snapshot

Keine neue Pflichtkarte. Unterschiedliche Einheiten nicht zu einem unbenannten „Pulse Score“ verdichten.

## 14. Darstellung

Umschaltung Tag/Woche/Monat sowie Nachrichten/Wörter/aktive Tage. Rohwerte und Index getrennt. Tooltip/Touch: Periode, Count, Einheit, D, Abdeckung und Indexbasis. Teilperioden markieren. Linie100 erklären, keine emotionale Gesamtwertung.

## 15. Methodiktext

„Die Rohansicht zeigt Nachrichten, Wörter und aktive Tage getrennt. Für Vergleichswerte verwenden wir vollständige Perioden. Der optionale Index setzt den Median ihrer Tagesraten auf100; unterschiedliche Monatslängen werden so nicht mit Aktivitätsänderung verwechselt.“

## 16. Synthetische Soll-Testfälle

| Fall | Eingabe | Exakte Erwartung unter B-TREND-01 |
|---|---|---|
| PU-N Normal | Zwei vollständige Wochen: N70/140, W140/280, K7/7 | N-Tagesraten=10/20, Basis15, Index66,666…/133,333…; W-Raten=20/40, Basis30, gleiche Indizes; Aktivität jeweils1, Index100/100. |
| PU-T Gleichstand | Zwei vollständige Wochen mit je70 Nachrichten | Basis10, beide Indizes100, delta Rate0. |
| PU-S Klein | Eine vollständige Woche mit70 Nachrichten | Roh70 available, Index insufficient-data. |
| PU-P Filter | PU-N, nur letzte drei Tage einer Woche mit je20 Nachrichten | Partielle Woche N60, kein Wochenindex. Tagesansicht: drei volle Tage je20, Basis20, Index je100. |
| PU-A Update | PU-N plus dritte volle Woche N210 | Raten=10/20/30, Median=20; Indizes50/100/150, über drei Perioden gestiegen. Auch frühere Indizes auf neue Basis aktualisieren. |
| PU-U Lücke | Erste Woche N70 vollständig, zweite mit bekannter Lücke | Nur eine vollständige Periode, Index insufficient-data. Zweite Woche als partiell darstellen. |
| PU-M Monatslänge | Voller Februar2026 N280, voller März N310 | Beide Tagesraten=10, Index100/100, delta Rate0 trotz Rohcountdifferenz30. |
| PU-Z Nullbasis | Zwei vollständige Wochen mit N0/0 | Roh0/0, Index not-applicable; keine Division durch0. |

# deepdive — Hot & Cold Deep Dive

## 1. Nutzerfrage

Wie unterscheiden sich Intensität und Kontinuität vor, während und nach einer bereits erkannten Hot-/Cold-Phase? Welcher bestätigte Kontext passt zeitlich dazu? Keine eigene Phasenerkennung, keine Kausalbehauptung.

## 2. Eingabemenge

Ausschließlich eine konkrete gültige Hotcold-Phase mit Identität, Grenzen, Baseline-, Masken- und Datenversion. Datierte R/W derselben Dyade in P. Keine Ersatzphase aus Legacy. Bestätigte Events mit zeitlicher Überschneidung sind Kontext. Wortteil folgt zentralen DE-/EN-Regeln; für Tagesvergleiche keine Uhrzeit nötig.

## 3. Zähler und Nenner

Je Fenster: N Nachrichten, W Wörter, D Kalendertage, K aktive Tage. Tagesraten N/D, W/D; Nachrichten je aktivem Tag N/K und optional W/K nur bei K>0. Personenanteile N_A/N bzw. W_A/W. Aktivitätsquote K/D. Null aktive Tage ergeben keinen definierten N/K-Wert. Vergleichsprozente nur bei positivem Ausgangswert.

## 4. Berechnung / Klassifikation

**Freigegebene Regel B-DEEP-01:** Bei Phasenlänge L Kalendertagen unmittelbar davor und danach jeweils L Tage verwenden. Keine Suche nach weiter entfernten „passenden“ Fenstern. Die Phase bleibt unverändert. Vor-/Nachfenster brauchen volle Abdeckung und dürfen keine für Hotcold ausgenommenen Tage enthalten; sonst ist der betreffende Vergleich nicht gültig. Rohteilmengen bleiben als Kontext sichtbar.

Metriken aus demselben gültigen Bestand berechnen. Erholungsbeschreibung nur für Cold-Phasen mit vollständiger Nachperiode, bezogen auf **Nachrichtenrate** und dieselbe Hotcold-Baseline B:

- Nachrate/B>0,5: „geringe Intensität in der gleich langen Nachperiode nicht fortgesetzt“. Bei mindestens1,5 zusätzlich das Hot-Niveau benennen.
- Nachrate/B≤0,5 und Nachrate>Phasenrate: „teilweise Mengenrückkehr; weiterhin unter der Cold-Schwelle“.
- Nachrate/B≤0,5 und Nachrate≤Phasenrate: „geringe Intensität in dieser Nachperiode anhaltend“.

„Temporär“/„persistent“ nur als Kurzlabel dieser begrenzten Beobachtung, nie als Zukunftsprognose oder Beziehungsurteil. Ohne Nachperiode keine Erholungsbewertung. Für Hot-Phasen Rohvergleiche, kein zusätzlicher Erholungsscore. Wörter und aktive Tage separat beschreiben; sie können anders verlaufen.

## 5. Zeitraumverhalten

P begrenzt alle Fenster. Fehlende Vor-/Nachperiode nicht still aus außerhalb P liegenden Nachrichten auffüllen. Außerhalb bleibt Kontext erreichbar, aber kein Vergleichswert. Filterwechsel kann Hotcold-Baseline/Phase verändern und invalidiert dann Deepdive. Randphase mit offenen äußeren Grenzen ist vorläufige Strukturansicht, keine abschließende Erholungswertung.

## 6. Person A / B

N-/W-Anteile je Fenster bei positivem Nenner jeweils100 %. Persönliche aktive Tage können sich überlappen und sind nicht addierbar. Vergleichsfenster haben gleiche Länge L. Keine Person aus Anteilen zum Verursacher einer Phase erklären.

## 7. Gleichstände

Gleiche Raten: keine Mengenänderung. Nachrate/B=0,5 bleibt Cold. Nachrate=Phasenrate gilt als anhaltend, nicht teilweise Erholung. Mehrere Hotcold-Phasen sind getrennte auswählbare Inputs, keine selbst erfundene Gewinnerphase.

## 8. Mindestdaten / Zustände

Gültige Phase erlaubt ihre Strukturwerte. Fehlende Vor-/Nachperiode: betreffender Vergleich insufficient-data, Phase bleibt verfügbar. N/W/K=0 sind bei vollständiger Quelle gültige Counts; N/K und Personenanteile dann gegebenenfalls not-applicable. Unsupported-Text-/Zeitfall bereichsbezogen, error gesondert. Ungültig gewordene Phase als veraltet markieren.

## 9. Datenabdeckung

Keine Erholungsbewertung über Lücken oder ausgenommene Tage. Fehlende Wortbasis blockiert W-Vergleich, nicht automatisch gültige N-/K-Werte. Teilfenster nicht auf L Tage hochrechnen. Personen-/Zeitunsicherheit und Maskenstand sichtbar machen.

## 10. Evidence

Alle Tage/Nachrichten in Vor/Phase/Nach, Tokenbezug für Wörter, Hotcold-Phasenherkunft, Baseline und Ausschlussmaske zugänglich. Events mit Bestätigungsstatus und Überschneidung; Notizen sichtbar. Manuelles Event ohne Chatbeleg als Nutzerkontext, nicht als KI-bewiesene Tatsache.

## 11. Nutzerkorrekturen

Eventdaten/Zuordnung bearbeiten oder zurücknehmen. Digitales Ausklammern verwendet dieselbe Hotcold-Tagesmaske, keine zweite versteckte Deepdive-Logik. Folgen vorher anzeigen: Eine Phase kann dadurch verschwinden. Undo stellt Entscheidung wieder her und berechnet neu. Rohdaten, Free und Pulse bleiben ohne separate Datenkorrektur unverändert.

## 12. Reanalyse

Hotcold-Phase/Baseline/Maske invalidiert Deepdive. Zusätzlich P, Add, Replace, Sprecher, Art, Zeit, Identität, Wortinhalt/-regel und Abdeckung prüfen. Reine Wortänderung kann W ändern, ohne die Phase zu verändern. Eventbearbeitung nur Kontext/Overlap, sofern keine explizite Maskenänderung. Keine Phasenzuordnung über geratenen Textanfang oder Zeitstempel.

## 13. Dashboard Snapshot

Keine neue Karte erzwingen. Ohne konkrete Phase und Vergleichsfenster besitzt ein Kurzscore keine eindeutige Bedeutung.

## 14. Darstellung

Vor/Phase/Nach mit gleichen Einheiten, N/W/K getrennt und N/K erläutert. Fehlende Fenster als fehlend, nicht0. Tooltip/Touch: Grenzen, D/K/N/W, Personenbasis, Baseline und Abdeckung. Keine kausale Farbbehauptung aus Eventnähe.

## 15. Methodiktext

„Die Phase stammt unverändert aus Hot & Cold. Wir vergleichen sie mit gleich langen unmittelbar benachbarten Zeiträumen. Nachrichtenmenge und aktive Tage zeigen unterschiedliche Aspekte. Fehlende Vergleichsdaten werden nicht ersetzt; zeitlich passende Ereignisse sind Kontext, keine bewiesene Ursache.“

## 16. Synthetische Soll-Testfälle

Soweit nicht anders angegeben: gültig gelieferte Cold-Phase mit B=10, L=3 und Tagescounts[2,2,2]. Der zugehörige Hotcold-Lauf enthält weitere vollständige Tage, die B=10 stützen. Die Beispiele ersetzen keine eigene Phasenerkennung.

| Fall | Eingabe | Exakte Erwartung unter B-DEEP-01 |
|---|---|---|
| DD-N Normal | Vor N30/W60/K=3; Phase N6/W12/K=3; Nach N30/W60/K=3, jeweils D=3 | N-Raten=10/2/10, W-Raten=20/4/20, N/K=10/2/10. Phase100 % aktive Tage. Nachrate/B1: geringe Intensität nicht fortgesetzt. |
| DD-T Gleichstand | Wie DD-N, Nach N6/W12/K=3 | Nachrate2=Phasenrate; q0,2, anhaltend, nicht teilweise Erholung. |
| DD-S Klein | Keine gültige Hotcold-Phase, Bestand nur zwei Tage | Kein Deepdive-Input; insufficient-data, keine Ersatzphase. |
| DD-P Filter | Phase endet an P-Grenze; Nachperiode außerhalb | Phasenwerte verfügbar, Nachvergleich insufficient-data, keine Erholungsaussage. |
| DD-A Update | DD-P: Add vervollständigt Nachperiode N30; neuer Hotcold-Lauf bestätigt gleiche Phase und B=10 | Nachrate10, q1, geringe Intensität nicht fortgesetzt. Neuen Lauf referenzieren. |
| DD-U Lücke | Ein Tag der dreitägigen Nachperiode fehlt | Kein vollständiger Nachvergleich, keine Hochrechnung aus zwei Tagen. |
| DD-R Teilweise | Phase N6/D=3, Nach N12/D=3, B=10 | Phase2/Tag, Nach4/Tag, q0,4: teilweise Mengenrückkehr, weiterhin Cold. |
| DD-Z Nullaktiv | Gültige Cold-Phase N0/W0/K0/D=3 | N/D0, W/D0, K/D0 %; N/K und Personenanteile not-applicable. |
| DD-E Event | DD-N mit bestätigtem manuellem Treffen während Phase | Alle N/W/K unverändert; Event ist Kontext, kein Kausalitätsbeweis. |

# Freigabestand und Grenzen

BASIC-V1 sowie B-TREND-01, LS-SA-01, B-WORDS-01 und B-DEEP-01 sind `approved`. Es bestehen keine offenen Produktentscheidungen dieses Basic-Vertragsblocks. Sämtliche numerischen Regeln sind versionierte V1-Konventionen; spätere Änderung braucht eine bewusste fachliche Regelversion, keine stille Implementierungsanpassung.

- Hotcold: vollständige Kalendertage inklusive echter Nulltage, arithmetische Basis, mindestens14 Vergleichstage, Hot≥1,5×/Cold≤0,5× und mindestens3 unmittelbar benachbarte Tage; keine iterative Baselinebereinigung.
- Pulse: getrennte Rohmetriken, vollständige Perioden und Tagesraten; je Metrik Medianbasis, Index ab2 Perioden. Keine Addition der Indizes.
- Long Story Short: vollständiger gültiger Antwortblock mit1–3 eigenen Worttokens; Emoji-/Medien-only getrennt. Kürze bedeutet weder geringe Zuwendung/Interesse noch Oberflächlichkeit oder negative Kommunikationsqualität.
- Words: words-stop-v1 versioniert freigegeben, Wortformen ohne automatische Phrasen/Lemmas. Signature braucht gleichzeitig Mindeststützung3, relatives Verhältnis≥2 und mindestens100 rankbare Tokens je Person in P.
- Deepdive: bestehende Hotcold-Phase, unmittelbar benachbarte vollständige Fenster jeL Tage; begrenzte Mengenbeschreibung gemäß Vertrag, Events keine Ursache.

Semantische Zuordnungen brauchen weiterhin belastbare Qualitätsnachweise nach dem gemeinsamen Semantic-Vertrag. `approved` ist eine fachliche Freigabe und kein Nachweis einer implementierten oder bereits evaluierten Engine.

**Abschluss:** Neun freigegebene Fachverträge. Keine Anwendung, Registry, Tests oder Baselines verändert; Sollfälle sind Dokumentation für spätere Implementierung und Abnahme.



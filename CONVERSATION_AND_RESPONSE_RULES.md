# Conversation & Response Rules

Stand: 04.11.2026. Fachlicher Vertrag zu **DC-12 (`approved`)** für `move`, `response`, `firstlast`, `silence` und gemeinsame Antwortgrundlagen von `longstory`.

**Verbindliche Basis:** [V1_PRODUCT_DECISIONS.md](V1_PRODUCT_DECISIONS.md), [DATA_AND_COUNTING_RULES.md](DATA_AND_COUNTING_RULES.md), `MVP_SCOPE_AND_ACCEPTANCE.md` und `docs/ANALYSIS_RULES.md`. Zentrale Nachrichtentypen, Identitäten, Quellenzeit, Dyade, Originalreferenzen und Zählregeln werden übernommen. Keine Definition folgt aus Legacy-Zahlen.

**Status:** CR-01 bis CR-09 sowie der allgemeine Teil von CR-10 sind ausdrücklich freigegeben. CR-08 erlaubt jetzt automatische High-confidence-Wertung statt manueller Pflichtbestätigung jeder Ruhepause. Die konkrete Short-Answer-Definition bleibt separat `open` (LS-SA-01); keine 3-Wort-Grenze ist beschlossen. Maßgeblich ist `V1_PRODUCT_DECISIONS.md`. Keine Implementierungsfreigabe; Zahlen sind Produktkonventionen, keine Naturgesetze.

## Gemeinsame Auswertungsordnung

1. Aktuellen kanonischen Bestand, bestätigte Personen und Quellen-/Zeitqualität bestimmen. Reactions und System zählen nicht als A/B-Nachrichten; Dritte bleiben als Strukturkontext erhalten.
2. Reihenfolge und lokale Blockkandidaten im vollständigen verfügbaren Kontext erkennen; noch keine erfundenen Verbindungen über Importlücken.
3. Zeitliche Episoden und belegte Gesprächsfortsetzungen unterscheiden; Nutzerentscheidungen und sichere Reply-Bezüge berücksichtigen.
4. Daraus Starts, Antwortbeziehungen und Pausen ableiten. Nachtzuordnung ist eine zusätzliche Klassifikation, nicht Ergebnis eines Datumswechsels.
5. Zeitraum und funktionsspezifische Wertbarkeit anwenden, vollständige Evidence bereitstellen, ausgeschlossene/unklare Einheiten getrennt ausweisen.

**Priorität:** Eindeutige Quellidentität/Zeit und gültige Nutzerkorrektur vor automatischer Vermutung; bekannte Datenlücke/Mehrdeutigkeit verhindert eine scheinbar sichere Messung. Bestätigte Fortsetzung kann eine zeitliche Neustartvermutung überstimmen. Ein technischer Reply allein ist noch kein bestätigter semantischer Antwortnachweis. Ungelöste Konflikte bleiben reviewbar.

## 1. Message Block

Freigegebene Regel CR-01: `message_block` ist eine **maximale geordnete Folge relevanter Nachrichten derselben Person**, zwischen denen kein anderer menschlicher Sendebeitrag steht und deren aufeinanderfolgende Zeitabstände jeweils **höchstens 5 Minuten** betragen. Maximal bedeutet: Nicht willkürlich einen passenden Nachtrag außerhalb lassen. Die 5 Minuten bündeln typische kurze Nachträge, ohne lange Monologe automatisch als einen Turn zu behandeln; bei Umsetzung gegen synthetische und autorisierte Beispiele prüfen.

- Text, Emoji, Medien und eindeutig belegte Löschplatzhalter können strukturell dazugehören. Fehlender Medien-/Löschinhalt kann aber die spätere Antwortzuordnung unsicher machen.
- Jeder Beitrag gehört höchstens einem lokalen Block an. Eine Caption erzeugt keinen Zusatzblock; Zeilenumbrüche bleiben innerhalb einer Nachricht.
- A 10:00, A 10:04, A 10:08 ist nach CR-01 ein Block: Schwelle zwischen Nachbarn, keine maximale Gesamtdauer. A 10:00 und A 10:06 bilden zwei Blöcke, können aber dasselbe Gespräch sein.
- Ein Beitrag von B **oder C** beendet die direkte Folge. C wird bei Blockbildung nicht unsichtbar herausgefiltert. Reactions/System bilden keinen menschlichen Turn; eine Systemmeldung über Exportbruch kann jedoch die Reihenfolge unsicher machen.
- Ein Reply auf eine ältere Stelle ist eine Kante zwischen Inhalten. Er ändert nicht rückwirkend die lokale Sendereihenfolge. Ein klar abweichender Gesprächsfaden erhält eine gesonderte Zuordnung; nicht durch bloßes Zusammenkleben zuordnen.
- Fehlen genaue Abstände, darf eine geordnete Folge als struktureller Kandidat erscheinen; der 5-Minuten-Test und ein zeitlich gültiges Blockende sind dann nicht bewiesen. Keine fiktive Nullzeit.
- `block_start`/`block_end` sind erster/letzter **tatsächlicher** Beitrag, nicht sein Zitatursprung. Jede Inhalts-/Zeitkorrektur kann Grenzen neu bewerten.

**Zeitraum:** Blöcke werden vor Fensterbeschneidung mit verfügbarem Umfeld erkannt. Ein abgeschnittener Block bleibt als Randblock markiert. Freigegebene Regel CR-07: keine Block-/Antwortkennzahl mit künstlich auf die Filterkante verschobenem Beginn/Ende. Der Reader kann die außerhalb liegenden Originale als Kontext zeigen.

## 2. Conversation Session

Freigegebene Regel CR-02: zeitliche **Episode** und inhaltlicher **Gesprächszusammenhang** werden getrennt geführt. Eine Episode ist eine Folge dyadischer Beiträge ohne bestätigte neue Gesprächsgrenze; der Gesprächszusammenhang kann durch belegte späte Fortsetzung mehrere Episoden verbinden. Dadurch kann eine acht Stunden späte echte Antwort erhalten bleiben, ohne jede lange Lücke generell als Antwort zu zählen.

- Abstand unter **4 Stunden** zwischen aufeinanderfolgenden relevanten A/B-Beiträgen: zeitliche Fortsetzungskandidatur. Das beweist keine Antwort auf den letzten Beitrag.
- Abstand **ab 4 Stunden**: Kandidat für neue Episode/First Move; kein automatisches endgültiges Urteil. Vier Stunden trennen nach freigegebener Konvention längere Alltagsunterbrechungen von kurzen Gesprächspausen. Die Grenze ist CR-02, nicht aus Legacy kalibriert.
- Belegte Fortsetzung desselben Austauschs kann auch ab 4 Stunden vorliegen; dann kein neuer First Move für diesen Beitrag.
- Themenwechsel während weiterlaufendem Austausch begründet allein keine neue Session und keinen First Move. Ein neuer Gesprächsimpuls nach langer Pause kann dagegen einen Start bilden.
- Explizite Verabschiedung und Begrüßung sind Indizien, nicht deterministische Schlüsselwörter. Keine allgemeine Satzinterpretation erfinden.
- Zweifel an Fortsetzung/Neustart: Status unklar, Review; keine doppelte Wertung desselben Beitrags als neuer Start und Antwort auf die vermeintlich beendete Episode.

Freigegebene Regel CR-03: Gültige Nutzerentscheidung, qualitätsgeprüfte sichere Klassifikation oder eindeutig auflösbarer Reply mit fachlich passendem Zusammenhang begründet die Zuordnung. Ungeprüfte unsichere Kandidaten bleiben aus starken Anteils-/Gewinneraussagen ausgeschlossen. Semantik-/Confidence-Grenzen gehören zu D-QUALITY. Rein zeitliche Nachbarschaft oder Sprecherwechsel allein genügt nicht.

## 3. First Move (`move`)

Wertungseinheit ist ein **gültig zugeordneter Beginn eines neuen Austauschs** mit erster MessageId und startender Teilnehmeridentität. Unter CR-02 braucht dieser Start mindestens 4 Stunden beobachtbare A/B-Unterbrechung und darf keine belegte Fortsetzung sein. Das ist die freigegebene „Start nach längerer Pause“-Kennzahl, nicht die Anzahl aller neuen Themen.

Voraussetzungen: gültiger Vorgänger im verfügbaren Bestand, bewertbarer Abstand, keine bekannte Importlücke dazwischen und sichere Unterscheidung Neustart/Fortsetzung. Eine neue Quellendatei ist keine neue Session. Erste Importnachricht erhält `left-censored`/„Vorgeschichte fehlt“ und zählt nicht automatisch. Ein Kontextvorgänger außerhalb des ausgewählten Fensters kann den Beginn belegen (CR-07).

**Anteile:** Startanzahl A bzw. B; Nenner ist die Zahl aller einbezogenen eindeutig zugeordneten Starts von A und B im gewählten Fenster. Unklare/ausgeschlossene Starts separat ausweisen. Es braucht nicht erst eine Antwort, damit ein belegter neuer Start existiert; ein unbeantworteter Start ist keine Diagnose über die andere Person.

Positiv: B 09:00 letzter Beitrag; A 15:00 beginnt nach sechs Stunden belegt neuen Austausch. Negativ: A 23:59, B 00:01; B wechselt um 10:10 das Thema nach A 10:08; B antwortet nach acht Stunden belegbar auf die offene Frage. Unter vier Stunden kein First Move dieser Kennzahl, selbst bei neuem Thema. Ein Thema allein unter vier Stunden erzeugt auch bei deutlicher sprachlicher Abgrenzung keinen First Move nach dieser Pausenkennzahl.

## 4. Response Event

Freigegebene Regeln CR-03/04: Ein `response_event` verbindet einen **Quellblock** von A mit dem ersten eindeutig zugehörigen Antwortbeitrag von B (oder umgekehrt). Dauer = tatsächlicher Antwortbeginn minus tatsächliches Ende des zugehörigen Blocks. Negative/unbestimmbare Dauer ist nicht wertbar und wird nicht auf 0 korrigiert.

- Mehrere Ausgangsnachrichten: Start der Uhr am Blockende, nicht am ersten Satz. Mehrere Antwortnachrichten: nur der erste gültige Antwortbeginn; weitere Nachträge erzeugen keine zusätzlichen Antworten auf denselben Block.
- Ein Quellblock erzeugt für diese Kennzahl höchstens ein Event. Eine Antwort auf mehrere frühere Blöcke erzeugt ebenfalls höchstens ein Event, sofern ein maßgeblicher Quellblock eindeutig ist; andernfalls Review statt Mehrfachzählung.
- Kein pauschales „Sprecherwechsel = Antwort“. B kann ein neues Thema eröffnen oder C antworten. Auch eine Antwort ohne Fragezeichen ist möglich.
- Reply auf ältere Nachricht: Ziel muss eindeutig sein; prüfen, ob der Beitrag inhaltlich die alte Nachricht fortsetzt oder sie nur zitiert. Quellblock ist der Block dieses Ziels, nicht willkürlich die letzte A-Nachricht. War er bereits beantwortet, entsteht kein zweites Erstreaktionsereignis.
- Bei älterem Reply während anderer Gesprächsfäden bleibt die lokale Reihenfolge erhalten. Nur der belegte Faden wird fortgesetzt; nicht alle dazwischenliegenden Episoden automatisch zu einer Session verschmelzen. Wenn der ursprüngliche Block den späteren Reply zeitlich überlappt, ist die Block-/Fadenzuordnung zu prüfen, nicht mit negativer Wartezeit zu rechnen.
- Ein tatsächlicher neuer Gesprächsstart ist keine Antwortzeit auf die vorherige Episode. Eine sehr lange Pause kann nur bei eindeutig belegter Fortsetzung eine lange Antwortzeit sein.
- Freigegebene Regel CR-04: **keine automatische maximale Antwortdauer**. Ab vier Stunden verlangt die Fortsetzung eine explizite tragfähige Zuordnung; ein technisch vorhandener Reply allein genügt bei inhaltlichem Zweifel nicht. Dadurch bleibt eine zwei Tage späte, bestätigte Antwort möglich, ein drei Tage späteres „Neues Thema …“ aber ausgeschlossen.
- Medien/Emoji können eine Antwort sein, wenn der Bezug aus verfügbaren Daten sicher ist. Medieninhalt wird nicht analysiert; ein bloßes unbekanntes Bild beweist keine Antwortbedeutung. Reaction ist kein Antwortbeitrag dieser Kennzahl.
- Fehlende Uhrzeit, unklare Reihenfolge oder Zeitbasis: strukturelle Antwortbeziehung ggf. prüfbar, genaue Antwortdauer nicht verfügbar.

In Gruppen verlangt ein Event zusätzlich eindeutigen A↔B-Bezug. C-Kontext kann eine Zuordnung widerlegen, erzeugt aber selbst keinen A/B-Responsewert.

## 5. Fast Responder (`response`)

Freigegebene Regel CR-05: Pro antwortender Person alle gültigen, einbezogenen, zeitlich messbaren Response Events im Scope verwenden. **Median** ist Hauptwert: ungerundete Dauern sortieren; bei gerader Anzahl Mittel der beiden zentralen Dauern. Optionaler Durchschnitt ist Summe aller gültigen Dauern geteilt durch deren Anzahl, ausdrücklich als Mittelwert beschriftet. Lange echte Antworten nicht still als Ausreißer entfernen.

Nenner pro Person = gültige Ereignisse dieser antwortenden Person, nicht sämtliche Nachrichten, Fragen oder Blöcke. Ungeklärte Beziehungen, unmessbare Zeiten und Nutzer-Ausschlüsse getrennt zählen. Eine Antwortquote über alle „antwortbedürftigen“ Nachrichten wird **nicht** durch diesen Vertrag definiert; bestehende Legacy-Quoten dürfen nicht übernommen werden. Dafür fehlt eine eigene fachliche Definition des Antwortbedarfs.

Freigegebene Verteilung: `[0,1 min)`, `[1,5 min)`, `[5,30 min)`, `[30 min,4 h)`, `[4 h,∞)`. Jedes gültige Event genau einer Klasse zuordnen; Grenzen sind CR-05. Gleiche angezeigte Werte begründen keinen Rohwertgleichstand. Bei exakt gleichem Median Gleichstand; bei nur rundungsbedingt gleichem Wert keine optisch irreführende eindeutige Siegerbehauptung.

„Longest real answer“ = Maximum derselben gültigen Eventmenge samt Ausgangsblock und erster Antwort. Bei gleichem Maximum alle Gleichstände erreichbar. Nicht die längste wechselnde Senderlücke. Personenvergleich ist eine Beschreibung der beobachteten Events, keine Aussage über Interesse oder allgemeines Verhalten.

Freigegebener allgemeiner Teil CR-10: Bereits ein gültiges Event erlaubt seinen Einzelwert mit `n=1`; keine Stabilitäts-/Repräsentativitätsbehauptung. Medianvergleich nur, wenn beide Personen mindestens ein Event besitzen; klar „Median der beobachteten Antworten“, keine bewiesene allgemeine Gewinnerrolle. Zusätzliche qualitative Mindestmengen erst nach Qualitätsabnahme begründen.

## 6. Vier Pausenebenen

| Begriff | Definition | Keine automatische Folgerung |
|---|---|---|
| `message_gap` / Rohpause | Zeitraum zwischen zwei im relevanten A/B-Bestand benachbarten Nachrichten, sofern Reihenfolge und Zeit messbar sind. | Keine Aussage über Gesprächsende, Schlaf oder Grund. |
| `conversation_pause` | Lücke innerhalb/zwischen Gesprächsepisoden mit zugeordneter Fortsetzungs-/Neustartbedeutung. | Vier Stunden allein beweisen kein Ende. |
| `night_sleep_pause` | Als gemeinsame Schlaf-/Ruheunterbrechung qualifizierte Lücke mit personenspezifischem Kontext. | Weder Mitternacht noch Abendzeit beweisen Schlaf. |
| `contextual_pause` | Rohpause mit bestätigtem Ereignis-/Treffenkontext. | Zeitliche Überlappung ist keine bewiesene Ursache und kein automatischer Ausschluss. |

Ein Intervall kann mehrere Kennzeichnungen tragen; es bleibt dasselbe Rohintervall. Ein unabhängiges Event erzeugt keine neue Nachricht und verlängert keine Streak.

## 7. Longest Silence (`silence`)

Freigegebene Regel CR-06: Rohpausen zwischen benachbarten relevanten A/B-Beiträgen bilden. „Benachbart“ darf nicht über eine bekannte Datenlücke oder einen zeitlich nicht einordenbaren dazwischenliegenden Beitrag hinweg behauptet werden. Nachrichten Dritter unterbrechen nicht die **A/B-Aktivitätslücke**; UI muss diese als solche benennen, nicht als Stille des gesamten Gruppenchats.

Jede messbare Rohpause besitzt exakte Vorher-/Nachher-MessageId, ursprüngliche Dauer, Zeitqualitätsstatus und Kontext. Weder Importbeginn→erste Nachricht noch letzte Nachricht→heute ist eine vollständige Pause. Eine Lösch-/Mediennachricht unterbricht die Aktivitätslücke, wenn sie nach den genehmigten Datenregeln eine relevante datierte Nachricht ist.

**Rohansicht:** alle gültig messbaren vollständigen Pausen, absteigend nach ungerundeter Dauer; Gleichstände gleichrangig, alle Originalstellen erreichbar. **Bereinigte Ansicht:** dieselbe Menge minus ausdrücklich ausgeschlossene Intervalle. Rohbestand/Originaldauer bleiben bestehen; ausgeschlossene Pausen weiterhin reviewbar.

Freigegebene Regel CR-06: keine automatische Subtraktion von Schlafstunden, Treffen oder Eventüberlappung. Kontext annotiert; Nutzer kann ein **ganzes konkretes Pausenintervall** aus der bereinigten Rangfolge nehmen und wieder aufnehmen. Dadurch ist „bereinigt“ eindeutig und vermeidet erfundene kausale Minutenabzüge. Alternative anteilige Kürzung braucht einen anderen, ausdrücklich freizugebenden Vertrag.

Ein Event allein wirkt nicht als Ausschluss. „Pause wegen Treffen ausklammern“ ist eine konkrete Nutzerentscheidung mit Eventbezug, keine vom Modell bewiesene Ursache. Datenlücken und unmessbare Zeiten sind nicht bloß nutzerausgeschlossene Pausen, sondern ungültige Messgrundlage; Einbeziehen kann fehlende Zeitdaten nicht reparieren.

## 8. Night / Sleep Pause

Verbindlich: individuelle typische Schlafzeiten sind **weicher Kontext**; reale Aktivität schlägt das Profil. Keine starre 00:00-Grenze und keine Annahme, dass alle Menschen nachts schlafen.

Freigegebene Regel CR-08: V1 erkennt zunächst **gemeinsame Ruhepausen der Dyade**, nicht medizinischen Schlaf. Ein automatischer Kandidat benötigt eine gültige A/B-Rohpause von mindestens **4 Stunden** und mindestens **2 Stunden gemeinsame Überlappung** der Pause mit den typischen Schlafintervallen beider Personen. Diese Schwellen sind freigegebene Produktkonventionen: kurze Abendunterbrechungen sollen nicht automatisch Nachtseinheiten erzeugen. Sie beweisen keinen Schlaf.

- Profile werden als lokale Intervalle einschließlich Übernachtübergang verstanden, beispielsweise A 23–07 und B 00–08. Nachtarbeiter können 08–16 hinterlegen; kein Vorrang der Uhrzeit 22–06.
- Tatsächlicher letzter Beitrag liegt um 02:00, obwohl Profil 23:00 beginnt: Rohpause beginnt erst um 02:00; vorherige Nachrichten werden nicht ausgeblendet. Ein Beitrag um 03:00 teilt die Rohpause; sie wird nicht über ihn hinweg zusammengefügt.
- Profile nur einer Person, unbekannt oder ohne gemeinsamen Schlafbereich: keine automatische gemeinsame Nachtwertung. Kandidat kann durch Nutzer anhand konkreter Belege bestätigt werden. Das ist `insufficient-data` für sichere automatische Einordnung, kein Beweis fehlenden Schlafs.
- Stark unterschiedliche Rhythmen können zu keinem gemeinsamen Kandidaten führen; keine unbemerkte Zusammenlegung zweier persönlicher Nächte. Eine spätere getrennte personenbezogene Schlafanalyse wäre eine andere Kennzahl.
- Profiländerung bewertet Kandidaten neu. Bereits bestätigte Entscheidung bleibt bei unverändertem Gegenstand erhalten; widersprüchlicher neuer Kontext wird reviewbar, nicht still überschrieben.
- High-confidence Kandidaten dürfen automatisch gewertet werden, wenn Zeitbasis eindeutig, beide Profile vorhanden und hinreichend passend sind, keine widersprechende Aktivität, Importlücke oder andere relevante Unsicherheit besteht. Unsichere Kandidaten bleiben Review und fließen nicht in starke Kennzahlen ein; Nutzer kann bestätigen/verwerfen, gültige Nutzerentscheidung hat Vorrang. Keine Pflicht, jede Nacht manuell zu bestätigen. Eine numerische Confidence-/Qualitätsgrenze wird hier nicht erfunden; ohne tragfähigen Qualitätsnachweis keine bloß behauptete hohe Sicherheit.

Ein Paar typischer Zeiten ist keine Diagnose. „Mit euren Schlafhinweisen vereinbare Ruhepause“ ist die zulässige Formulierung; „ihr habt geschlafen“ ist nicht belegt.

## 9. First & Last (`firstlast`)

Freigegebene Regel CR-09: Wertungseinheit ist eine vollständig begrenzte gemeinsame Ruhepause, die entweder gemäß CR-08 sicher automatisch qualifiziert oder vom Nutzer bestätigt ist. `Last Text` ist die letzte relevante A/B-Nachricht davor; `First Thought` die erste relevante A/B-Nachricht danach. Beide haben tatsächliche Sender und stabile Originalreferenzen.

Pro Einheit genau eine Last- und eine First-Zuordnung, sofern Reihenfolge eindeutig. A kann beide haben. Anteile getrennt berechnen: A-Last / alle gültigen Last-Zuordnungen; A-First / alle gültigen First-Zuordnungen. Nicht zwei persönliche Nächte zu doppelten Dyadenwerten addieren.

CR-09: Pro gemeinsamem Schlaf-/Ruhezyklus höchstens eine maßgebliche Einheit. Bei mehreren qualifizierten Segmenten ist die längste passende Ruhepause automatischer Hauptkandidat; Gleichstand oder Widerspruch führt in Review. Andere Segmente bleiben sichtbar. Keine doppelte Nachtwertung; ohne eindeutig bestimmbaren Zyklus keine erfundene Tagesgruppierung.

Import beginnt mitten in der Nacht oder endet vor Wiederaufnahme: unvollständig, keine vollständige Paarwertung. Unterschiedliche Rhythmen/fehlende Profile nach §8 behandeln, nicht auf Mitternacht ausweichen. Zeitraumfilter nach CR-07 erfordert beide Grenzen im Fenster; andernfalls als Randkontext sichtbar.

Mindestens eine gültige Einheit genügt für die beobachtete Paarzählung (`n=1` sichtbar), nicht für eine Gewohnheitsaussage. Keine gültigen Einheiten bei unzureichender Erkennung: `insufficient-data`; vollständige fachlich gültige Prüfung ohne qualifizierte Einheiten: Zählwert 0, Anteile `not-applicable`.

## 10. Gruppenchat und Dyade

Die Strukturprüfung sieht C, die A/B-Kennzahlen zählen C nicht. A 10:00 → C 10:01 → A 10:02 ergibt zwei A-Blöcke. Ein späteres B kann auf C statt A antworten; ohne eindeutigen A↔B-Bezug kein gewertetes A/B-Response Event.

Freigegebene Regel CR-03: Nachrichten Dritter sind ein **Struktur-/Adressierungsprüfpunkt**, kein pauschales Ende aller A/B-Gespräche. Ein eindeutiger A↔B-Faden kann C-Beiträge überbrücken; ein bloß zeitlich nächster B-Beitrag nicht. Ein Einstieg von A in eine laufende Diskussion mit C nach langer A/B-Lücke ist nicht automatisch ein neuer Austausch mit B.

Bei dyadischem First Move ist deshalb der Beginn eines A/B-Austauschs zu belegen, nicht bloß die chronologisch nächste A/B-Nachricht in der Gruppe. Dyadenwechsel invalidiert dyadenabhängige Session-/Response-/Nachtklassifikationen; identitätsbezogene Profile/Originale bleiben gemäß DC-04 erhalten.

## 11. Zeitunsicherheit und Zeitraumgrenzen

- Datum-only/keine Uhrzeit: Reader und Tagesaktivität möglich, minutengenaue Block-, Pause- und Responsewertung nicht. Nachricht nicht als 00:00 einsetzen.
- Lokale Zone unklar oder widersprüchlich: betroffene Zeitfunktion klärungsbedürftig gemäß DC-05. Keine Gerätezone als Ersatz.
- Sommerzeit: wiederholte lokale Uhrzeit ohne disambiguierende Quelle liefert kein eindeutiges Intervall. Nur wenn Zeitbasis/Offsets den Ablauf eindeutig machen, reale Dauer messen; lokale 01:30→03:30 ist nicht generell zwei reale Stunden.
- Gleiche Minutenangabe: Quellreihenfolge kann eine Reihenfolge belegen, aber keine sekundengenaue 0-Reaktion. Freigegebene Regel CR-10: solche zeitlich nicht auflösbaren Dauern als „innerhalb derselben Minute“ separat ausweisen, aus exakten Median-/Maximumwerten ausschließen. Keine künstlich präzise 0 Sekunden.
- Bekannte Importlücke/unklar einsortierbarer Beitrag zwischen Endpunkten: keine gesicherte durchgehende Pause. Fehlende Vorgeschichte verhindert automatische Erststartwertung.

CR-07 zur Fensterzuordnung: Starts zählen nach erster Startnachricht im Fenster, sofern Vorgeschichte zur Qualifikation vorhanden ist; Antwortevents, Pausen und Nachtpaare nur mit **beiden** Endpunkten im Fenster und unbeschnittener Struktur. Randüberschreitende Einheiten bleiben als Kontext abrufbar, aber aus den betreffenden Kennzahlen ausgeschlossen und ausgewiesen. Kein Clipping von acht Stunden auf die im Fenster verbleibenden zwei Stunden. Eine Zuordnung nur nach Endpunktdatum ist für V1 nicht gewählt.

Bei minutenpräzisen, unterschiedlichen Endpunkten ist eine Dauer in Quellenauflösung zulässig, wenn Chronologie und Zeitbasis eindeutig sind; sie wird nicht sekundengenauer dargestellt. Unscharfe Zeitintervalle mit Bereichsschätzungen sind nicht Teil dieses V1-Vertrags.

## 12. Nutzerkorrekturen und Reanalyse

Alle Entscheidungen besitzen Chat, Dyade, konkrete Message-/Block-/Intervallreferenzen, Inhalts-/Datenstand, alten/neuen Status und Herkunft. Persistenz, Journal und Undo gelten; neue Daten dürfen Entscheidungen bei unveränderter Grundlage nicht zurücksetzen. Geänderte Inhalte machen betroffene Entscheidungen nach DC-13 prüfpflichtig.

| Korrektur | Fachliche Wirkung | Betroffene Neuberechnung |
|---|---|---|
| „Kein neuer Gesprächsstart“ | Kandidat ausschließen; Grund kann Fortsetzung oder unzureichender Bezug sein. | Move-Anzahl/Anteile; Sessiongrenze prüfen. Nicht automatisch eine Antwort erfinden. |
| „Gehört zum vorherigen Gespräch“ | Konkreten vorigen Zusammenhang referenzieren; Fortsetzungsbeziehung setzen. | Session/Move; Responsezuordnung prüfen, erst bei gültigem Blockbezug neues Event. |
| „Keine echte Antwort“ | Response Event ausschließen, Original und strukturelle Kandidatur erhalten. | Median/Mittel/Verteilung/Maximum und antwortbezogene Long-Story-Ausgaben. Nicht automatisch First Move erzeugen. |
| „Antwort gehört zu anderem Block“ | Eindeutiges Ziel auswählen; Konflikte/zeitliche Gültigkeit prüfen. | Response und zugehörige Session-/Startbewertung; keine Duplikate. |
| „Block gehört zusammen/getrennt“ | Konkrete Nachrichtenfolge korrigieren, Grenzen nachvollziehbar ändern. | Blockende, Response Events und darauf basierende Kennzahlen. |
| „Pause wegen Treffen ausklammern“ | Ganzes bestimmtes Intervall aus bereinigter Silence-Menge nehmen, Event referenzieren. | Bereinigte Rangfolge/Verteilung; Rohpause bleibt. Keine automatische Hot-&-Cold-Ausklammerung. |
| „Nachtpause falsch erkannt“ | Nachtklassifikation verwerfen bzw. gültigen Kandidaten bestätigen. | First/Last-Zähler/Anteile; Rohsilence und Streak unverändert. |
| Schlafprofil ändern | Kandidaten auf neuer Kontextbasis prüfen. | Nachtkandidaten/FirstLast, offene Konflikte; kein pauschaler Minutenabzug bei Response. |
| Wieder einbeziehen / Undo | Vorige gültige Entscheidung wiederherstellen. | Dieselben betroffenen Ausgaben; bei geänderter Grundlage Review. |

Freigegebene Regel CR-06: Silence-Ausschluss ist kein globales Löschen von Zeit; andere Analysen übernehmen ihn nur über ausdrücklich beschlossene Abhängigkeiten. Kontextspeicherung und Anzeige „gespeichert“ ersetzt keinen Nachweis abgeschlossener Neuberechnung. Veraltete Ergebnisse bleiben gekennzeichnet, Fehler werden nicht mit Referenzwerten verdeckt.

**Long Story Short:** Nur der Teil „kurze Antworten“ konsumiert gültige Response Events. Keine Einstufung allein wegen kurzer Nachricht. Ausgangs-/Antwortblock und eigener Text müssen referenziert sein; Emoji/Medien können Antwort sein, aber sind keine kurzen **Text**antworten ohne Wortbasis. Die Grenze „kurz“, Längeneinheit, Nenner und Frage, ob erster Antwortbeitrag oder kompletter Antwortblock gewertet wird, bleiben für den spezifischen Long-Story-Vertrag offen (LS-SA-01); allgemeine Textlängen bleiben vom Sessionvertrag unabhängig.

## 13. Mindestdaten und Zustände je Funktion

Keine pauschale statistische Sicherheit aus einer willkürlichen Mindestzahl. Ein Ereignis erlaubt einen beobachteten Einzelwert; repräsentative Muster brauchen eine gesonderte Qualitätsfreigabe. Freigegebene Regel CR-10: exakte Mengen und Abdeckung zeigen, keine allgemeine „Person X antwortet immer schneller“-Aussage.

| Funktion | available | insufficient-data | not-applicable | unsupported | error |
|---|---|---|---|---|---|
| `move` | Prüffähige Startmenge, Zähler auch 0 nach gültiger vollständiger Prüfung | Nur Importanfang, fehlende Zeiten, ungeklärte Neustarts | Anteile bei null gültigen Starts | Quelle/Sprachkontext für notwendige Zuordnung nicht unterstützt | Verarbeitung fehlgeschlagen |
| `response` | Mindestens ein gültiges messbares Event für Einzel-/Personenwert | Beziehungen oder Zeiten nicht hinreichend prüfbar | Median einer nach gültiger Prüfung leeren Eventmenge; Vergleich ohne beide Seiten | Erforderliche Antwortzuordnung nicht unterstützt | Berechnung/Zuordnung fehlgeschlagen |
| `firstlast` | Mindestens ein vollständiges automatisch sicher qualifiziertes oder bestätigtes Paar für Anteile | Unzureichende Qualifikation, unvollständige Nacht, Zeitkonflikt | Anteile bei gültig festgestellten null Paaren | Erforderlicher Quellfall nicht unterstützt | Verarbeitung fehlgeschlagen |
| `silence` | Mindestens eine vollständige gültig messbare Rohpause | Nur eine Nachricht, Zeitdaten/Lücken verhindern Messung | Bereinigtes Maximum, wenn alle gültigen Intervalle bewusst ausgeschlossen | Quellzeit nicht unterstützt | Verarbeitung fehlgeschlagen |
| `longstory` Antwortteil | Gültige Textantworten und freigegebene Kurzdefinition | Antwortbasis oder Kurzdefinition fehlt | Kurzantwortanteil bei leerer gültiger Textantwortmenge | Sprache/Textgrundlage für diesen Teil nicht unterstützt | Verarbeitung fehlgeschlagen |

Ist noch keine Produktregel implementiert/freigegeben, ist das keine vermeintliche Datenarmut des Nutzers: Entwicklungsstatus getrennt ausweisen. `unsupported`, `error`, unbestätigter Kandidat und aus Tarifgründen gesperrt sind verschieden. Median undefiniert bedeutet nicht 0 Minuten. Bestätigungen können fehlende Originaldaten nicht ersetzen.

## 14. Synthetische Sequenzen mit erwarteter Klassifikation

Alle Zeiten gelten in bestätigter konsistenter Quellenzeit ohne bekannte Lücken, sofern anders angegeben. Kurze IDs wie m1 sind **nur synthetische Beispielidentitäten**, keine Zuordnungen zu Nutzerdaten. „Bestätigt“ kennzeichnet zusätzliche Reviewinformation; bloßer Beispielsatz ersetzt keine zukünftige Klassifikationsregel. Erwartungen gelten nach den freigegebenen Regeln; dies sind Dokumentbeispiele, keine ausgeführten Tests.

| Fall | Sequenz / zusätzliche Information | Erwartung |
|---|---|---|
| E01 Nachträge | m1 A 10:00 „Termin?“, m2 A 10:02 „Morgen?“, m3 B 10:03 „Ja“; Antwortbezug bestätigt | Ein A-Block m1–m2, ein Response von B ab m2: 1 min. Nicht 3 min und nicht zwei Antworten. |
| E02 Schnelle Antwort | A 10:00:00 → B 10:00:30, sekundengenau, Bezug bestätigt | 30 s. In erster Verteilungsklasse. |
| E03 Blockschwelle | A 10:00 → A 10:05 → A 10:10 | Ein Block unter ≤5-min-Regel. Bei letztem Beitrag 10:10:01 und sekundengenauer Quelle zwei Blöcke. |
| E04 Spätere Folgemeldung | A 10:00 → A 10:06 | Zwei lokale Blöcke; allein kein neuer First Move und kein Antwortevent. |
| E05 Späte echte Antwort | A Mo 09:00 „Passt Freitag?“ → B Di 09:00 bestätigt als konkrete Antwort auf diesen Block | 24 h gültige Antwort; kein neuer Move für B. Ohne sichere Zuordnung Review, nicht automatisch 24 h. |
| E06 Neuer Start | B 09:00 beendet Austausch → A 15:00 beginnt belegt neuen Austausch | A-Start nach 6 h; keine 6-h-Antwort von A. |
| E07 Themenwechsel | A 10:00 „Termin erledigt“ → B 10:02 „Anderes Thema: Urlaub“ | Kein First Move allein wegen Thema, keine Antwort ohne belegten Bezug. |
| E08 Schwelle exakt | Letzter A/B-Beitrag 10:00, nächster 13:59 versus 14:00 | 13:59 kein ≥4-h-Startkandidat; 14:00 Kandidat, weiterhin Fortsetzung prüfen. |
| E09 Über Mitternacht | A 23:58 → B 00:02 → A 00:04 | Fortlaufende Struktur; kein neuer Move/Nachtpaar allein am Datumswechsel. |
| E10 Spätes Schreiben | Beide Profile 23–07; A 01:58 → B 02:00 → A 07:00, 5-h-Lücke als Ruhepause bestätigt | Last B 02:00, First A 07:00. Keine Pause ab 23:00. |
| E11 Nachtunterbrechung | Profile 23–07; A 23:00 → B 03:00 → A 07:00 | Zwei 4-h-Kandidaten im selben Zyklus; keine automatische doppelte Nacht. Review wählt maßgebliches Segment, bei Gleichstand keine geratenen Gewinner. |
| E12 Nachtarbeiter | Beide Profile 08–16; B 08:15 → A 15:00, als Ruhepause bestätigt | Tageszeitliche Ruhepause zulässig; Last B, First A. Kein erzwungenes Nachtfenster. |
| E13 Verschiedene Rhythmen | A 23–07, B 09–17; lange A/B-Lücke | Kein automatischer gemeinsamer Profilkandidat ohne gemeinsame Überlappung. Kontext/Review, keine erfundene gleiche Nacht. |
| E14 Profil unbekannt | A 22:00 → B 07:00, keine Profile | 9-h-Rohpause; nicht automatisch Nacht. Erst konkrete Bestätigung qualifiziert First/Last. |
| E15 Treffen | A 12:00 → B 18:00; Treffen 13–17 bestätigt | Rohpause 6 h, Kontext sichtbar. Ausschließen entfernt ganzes Intervall nur aus bereinigtem Silence; nicht automatisch „2 h bereinigt“. |
| E16 Gruppe | A 10:00 → C 10:01 → A 10:02 → B 10:03 | Zwei A-Blöcke. B-Bezug zu zweitem A-Block bestätigt: 1 min. B antwortet C: kein A/B-Response. |
| E17 Gruppe nur C | A Mo 10:00 → C Mo 20:00 → B Di 10:00 | A/B-Rohpause 24 h möglich, keine Behauptung gesamter Gruppenstille. C zählt weder A/B-Nachricht noch Endanker. |
| E18 Älterer Reply | A m1 09:00; andere Episoden; B 17:00 Reply auf m1 | Nur bei bestätigter Fortsetzung und noch nicht beantwortetem Quellblock Event ab dessen Ende. Zitat als Aufhänger neuen Themas: kein altes Antwortevent. |
| E19 Mehrfachantwort | A-Block endet 10:00; B 10:01 beantwortet ihn; B 15:00 ergänzt per Reply | Ein Erstreaktionsereignis 1 min, kein zweites 5-h-Event für denselben Block. |
| E20 Import mitten drin | Erste importierte Nachricht B 10:00 „Ja, genau“ | Kein automatischer Start, keine Antwortdauer ohne Quellblock. Reader/Textzählung möglich. |
| E21 Ohne Uhrzeit | A und B nur Datum 04.11. | Tageszählung möglich; keine 0-min-Antwort, keine genaue Pause oder sichere 5-min-Blockbildung. |
| E22 Gleiche Minute | A 10:00, B 10:00, nur Minutenpräzision | Geordneter Reply ggf. bestätigt; „innerhalb derselben Minute“, nach CR-10 nicht exakt 0 s im Median. |
| E23 Importlücke | A Mo 10:00, bekannte fehlende Quelle, B Mi 10:00 | Kein belegtes 48-h-Silence-/Responseereignis über die Lücke. |
| E24 Sommerzeit | Zweimal 02:30 an Rückstellung, Offset fehlt | Keine eindeutige Dauer. Mit eindeutigen Offsets darf reale Differenz bestimmt werden. |
| E25 Medien/Emoji | A 10:00 Text, A 10:01 Bild, A 10:02 Emoji; B 10:03, Bezug bestätigt | A-Block endet 10:02; B-Response 1 min. Bildinhalt nicht analysieren. |
| E26 Reaction | A 10:00 Frage; B-Reaction 10:01; B 10:05 Textantwort bestätigt | Reaction kein Antwortbeginn; Textresponse 5 min ab A-Blockende. |
| E27 Zeitraumkante | A 31.10.23:00, B 01.11.01:00; Filter ab 01.11. | Vollständiges Event 2 h im Kontext, unter CR-07 nicht in Responsewerten des Fensters. Kein Clipping auf 1 h. |
| E28 Start am Fensterrand | B 31.10.15:00, A 01.11.09:00 startet bestätigt neu; Filter ab 01.11. | Start A zählt, weil aus Kontext qualifiziert und Start im Fenster. Nicht mit Importanfang verwechseln. |
| E29 Löschplatzhalter | A 10:00 Text, eindeutig A 10:02 ursprünglicher gelöschter Beitrag, B 10:03 | Strukturblock kann bis 10:02 reichen; verlorener Inhalt erzeugt keinen semantischen Antwortnachweis. Antwort nur bei anderweitig gesichertem Bezug. |
| E30 Ausschluss/Undo | Zwei gültige Response Events 1 min und 9 min; 9-min-Event ausgeschlossen | Median der einbezogenen Menge 1 min; Undo bei unverändertem Bestand Median 5 min. Rohtexte unverändert. |

## 15. Freigabestand und verbleibende fachliche Lücke

CR-01 bis CR-09: **approved**, allgemeiner Teil CR-10: **approved**. Der Decision Log dokumentiert die verbindliche Fassung einschließlich geänderter CR-08. Historische Alternativen sind keine weiter offenen Entscheidungen.

| ID | Status | Noch zu entscheiden | Zuständiger Vertrag |
|---|---|---|---|
| LS-SA-01 | open | Konkrete Short-Answer-Grenze, Wort-/Längeneinheit, erster Beitrag vs. vollständiger Antwortblock und zugehöriger Nenner. Die früher vorgeschlagenen höchstens drei Worttokens sind ausdrücklich **nicht freigegeben** und kein Default. | Spezifischer Long-Story-Short-Vertrag |

Qualitäts-/Confidence-Kalibrierung für automatische Zuordnungen bleibt D-QUALITY; High-confidence ist kein unvalidiertes Modelllabel. Ein automatisch inferiertes Schlafprofil darf künftig nur auf Grundlage eines eigenen nachvollziehbaren Vertrags vorgeschlagen werden. Bis dahin keine starre Nacht-/Mitternachtsersatzregel bei fehlendem Profil.

## 16. Konsistenzprüfung und Abschluss

| Grundlage | Ergebnis der Prüfung / verbleibende Entscheidung |
|---|---|
| DATA_AND_COUNTING_RULES / DC-01–03 | Alle menschlichen Sendebeiträge einschließlich Medien/Emoji strukturell berücksichtigt; Reactions nicht als Response/Nachricht. Löschinhalt nicht erfunden. |
| DC-04 | A/B echte Identitäten, C bleibt Strukturkontext, kein Transfer dyadenabhängiger Klassifikationen bei Wechsel. |
| DC-05–07 | Quellenzeit, keine Uhrzeit-/Zonenfiktion, Lücken keine Stille, relative Fenster unverändert an chat_end. Eventfensterzuordnung ist freigegebene CR-07, keine Änderung des Ankers. |
| DC-08–11, DC-14–15 | Originaltexte/Emojis bleiben erhalten; Kurzantwortwortzahl nutzt zentrale Tokens. Nenner explizit, ungerundete Rangfolge; keine neue Sprach-/Normalisierungsregel. |
| DC-13 | Inhaltsänderung prüft Klassifikation/Korrektur erneut; Entscheidung bleibt im Journal. |
| Bestehender First Move | Keine Mitternachts-/Themenlogik, Importbeginn kein Automatismus. 4-h-Kandidatenregel freigegeben, Fortsetzung überstimmt. |
| Bestehender Fast Responder | Blockende bis erste zugehörige Antwort; Neustart keine extreme Antwort. Umgang mit älteren Replies, Langantworten und Quoten jetzt explizit vorgeschlagen. |
| Bestehendes First & Last | Nur qualifizierte Ruhepaare, Aktivität schlägt Profil. Gemeinsame Nachtbasis und höchstens eine maßgebliche Einheit freigegeben; sichere automatische Wertung zulässig, unsichere Fälle Review. |
| Bestehendes Longest Silence | Konkrete Originalgrenzen, Rohwerte/Review/Ausschluss erhalten. Vorgeschlagene Ganzintervall-Bereinigung ist eine Präzisierung, keine aus Referenzen übernommene Schlafsubtraktion. |
| MVP_SCOPE_AND_ACCEPTANCE | A-Features bleiben von sauberer Regel-/Qualitätsabnahme abhängig; vollständige Belege, Undo, Reanalyse, Zeitraum und Chat-Isolation erforderlich. Dieser Entwurf besteht nicht selbst die produktive DoD. |

Die in `CURRENT_PRODUCT_STATE.md` dokumentierten Referenzwerte und Quoten sind kein Nachweis dieser Regeln. Kein allgemeines Frage-Antwort-Tracking (`qdyn`), keine neue Analysefunktion und keine technische Architektur werden vorgezogen.

**Verbleibende Grenze:** DC-12 ist `approved`; LS-SA-01 und notwendige Qualitätsnachweise bleiben offen. Keine Implementierung, keine Test-/Baselineänderung. Die Freigabe bescheinigt keine bereits laufende Analyseengine.

Zusätzliche Prüffälle der CR-08-Änderung: Eine 5-h-Rohpause mit eindeutiger Zeitbasis, zwei passenden Profilen, ausreichender gemeinsamer Überlappung, keinem Konflikt und nachgewiesen hoher Klassifikationssicherheit darf ohne manuellen Klick ein First-/Last-Paar liefern. Dieselbe Pause mit Importlücke darf nicht automatisch gewertet werden. Ein gültiges Nutzer-Verwerfen unterbindet auch bei zuvor hoher Sicherheit die Paarwertung.


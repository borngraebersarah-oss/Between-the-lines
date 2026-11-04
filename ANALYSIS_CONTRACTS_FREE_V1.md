# Analyseverträge Free V1

Stand: 04.11.2026. Fachliche Ausarbeitung für `prime`, `weekday`, `streak`, `peak`, `texting`, `emoji`. Keine Implementierung, keine Registry-/Test-/Baselineänderung.

Verbindliche Grundlage: `V1_PRODUCT_DECISIONS.md`, `DATA_AND_COUNTING_RULES.md`, `MVP_SCOPE_AND_ACCEPTANCE.md`, `docs/PRODUCT_SPEC.md`, `docs/ANALYSIS_RULES.md`, `docs/UX_RULES.md`. Der Decision Log überstimmt historische Offenkennzeichnungen genehmigter DC-Regeln. Gesprächsregeln werden nicht auf Rohzählungen übertragen. Legacy-Zahlen einschließlich 652/653 definieren kein Sollresultat.

**Freigabestand 04.11.2026:** Alle sechs Verträge einschließlich ihrer Sollfälle sind ausdrücklich `approved`. F-PRIME-01 ist wie vorgeschlagen freigegeben. F-EMOJI-01 ist mit Familienaggregation kosmetischer Hautfarb-/Präsentationsvarianten freigegeben; semantisch unterschiedliche vollständige Sequenzen bleiben getrennt. Diese Präzisierung ersetzt frühere Empfehlungen getrennter Hauptlisten für alle Originalvarianten. Keine Implementierungsfreigabe.

## Gemeinsame Konventionen für alle sechs Verträge

- `R`: eindeutige relevante A/B-Nachrichten des aktuellen kanonischen Bestands nach DC-01/02; inklusive Medien und belegter einzelner Löschbeiträge, ohne System, Reaction, C und unklare Sender/Identitäten. Mehrere Importvorkommen derselben Nachricht zählen einmal.
- `P`: aufgelöster globaler Datumszeitraum, beide Kalendertage eingeschlossen. Gesamt umfasst für nicht zeitabhängige Analysen auch undatierte Beiträge; begrenzte Fenster nur eindeutig zeitlich zuordenbare. 7/30 Tage beginnen sechs/29 Kalendertage vor chat_end, 3/12 Monate kalenderweise mit Monatsendbegrenzung. Chatende aus ungefiltertem aktuellem R, nie Systemdatum. Custom bleibt nach Update unverändert.
- Bestätigte lokale Quellenkalenderbasis; keine Browser-/UTC-Erfindung. Datum-only eignet sich für Tageswerte, nicht für Stunden/rollierende 24 h. Uhrzeit ohne Datum wird keinem zeitbezogenen Analysefenster zugeordnet. Unklarer Kalenderbezug macht den betroffenen Zeitwert klärungsbedürftig.
- Abdeckung zählt getrennt: Gesamtbestand, im Fenster eindeutig zugeordnete Nachrichten, fachlich ausgeschlossene Typen/Sender, fehlende Zeitpräzision, ungeklärte Identität und bekannte Importlücken. Kategorien der Ausschlussbilanz werden disjunkt zugeordnet oder als überlappend erklärt, nicht doppelt zu einem vermeintlichen Rest aufsummiert.
- Ein leeres Zeitfenster ist nicht automatisch ein fehlerhafter Import. Gültige leere Menge erlaubt Zähler 0; Prozent/Maximum/Median ohne Grundlage ist `not-applicable`. `insufficient-data` bezeichnet fehlende nötige Präzision/Abdeckung; `unsupported` nicht unterstützten Quellfall; `error` Verarbeitungsausfall. `unavailable`/Tarifsperre sind davon verschieden.
- Bei Teilabdeckung heißen Zahlen „im auswertbaren Bestand“. Keine Hochrechnung. Ein Extremwert darf nicht als sicherer vollständiger Gewinner über bekannte Lücken bezeichnet werden. Falls keine gültige Teilmenge existiert, kein künstlicher Zahlenwert.
- Counts ganzzahlig; Prozent maximal eine Nachkommastelle ohne Endnull, Brüche vor Rundung erhalten. Rankings/Gleichstände aus Rohwerten. 0-Nenner ergibt keinen 0-%-Anteil. Alle Gleichstände ausweisen; Datum/ID darf lediglich stabile Listenreihenfolge bestimmen, niemals fachlichen Sieger.
- Quellen/Evidence: quantitative Mitgliedschaftslisten nach MessageId, bei Text/Emoji mit Originalsegment; paginiert erreichbar. Keine künstliche semantische Evidenceklasse. Reader darf Kontext außerhalb P zeigen, ohne ihn mitzuzählen. Quote/Forward zählt nur mit eigenem zulässigem Text; keine doppelte Autorschaft.
- Korrekturen von Sender/Typ/Zeit/Identität/Inhalt verändern entsprechende Mengen. Semantische Belegausschlüsse, Ruheprofile, Treffen-/Pausenausschlüsse und Gesprächsklassifikationen verändern diese Rohanalysen **nicht**. Datenlöschung aus Bestand ist von einem belegten gelöschten Sendeplatzhalter zu unterscheiden.
- Alle Ergebnisse tragen Herkunft nach Datenvertrag §19, einschließlich Regel-, Import-, Dyaden-, Zeitraum- und Korrekturstand. Reanalyse kann unveränderten Zahlenwert ergeben; Abhängigkeit ist trotzdem geprüft. Keine Referenzwerte als Fallback.

**Gemeinsame Beleg-/Updateprüfung:** Jede spätere Umsetzung prüft mindestens zwei Chats auf Isolation; Wiederimport identischer Beiträge erzeugt keine Duplikate; eindeutig identifizierte Bearbeitung ändert höchstens Inhaltsmengen, nicht Nachrichtenzahl oder ursprüngliches Sendedatum; Reload erhält Korrekturen. Die Tabellen unten sind synthetische fachliche Sollfälle, keine neu geschriebenen Anwendungstests.

# prime — Prime Time

## 1. Nutzerfrage

Zu welchen lokalen Uhrzeiten schreibt die Dyade am meisten, und wie verteilen sich die Beiträge im gemeinsamen stärksten Zeitfenster auf A und B? Keine Aussage über Gefühle oder Verfügbarkeit.

## 2. Eingabemenge

`H` = R innerhalb P mit gültigem Datum, auswertbarer lokaler Uhrzeit und konsistenter bestätigter Zeitbasis. Minutenpräzision genügt. Sprache irrelevant. Datum-only, undatierte Beiträge, unklare Zone/Person und zentrale Ausschlüsse nicht in H. Medien/Emoji/Löschplatzhalter mit hinreichender ursprünglicher Zeit zählen normal.

## 3. Zähler und Nenner

Für Stunde h=0…23: `count(h)` = Anzahl H mit Stunde h; analog A/B. Absolute Balken sind Counts ohne Nenner. Stundenanteil = count(h)/|H|. Fensterzahl = Summe seiner disjunkten Stundenbuckets. Fensteranteil = Fensterzahl/|H|. A-Anteil im Fenster = A-Fensterzahl/Fensterzahl; B analog. Nicht mit A-Anteil am gesamten Chat verwechseln.

## 4. Berechnung

1. H bilden; jede Nachricht exakt dem Bucket `[h:00,(h+1):00)` ihrer originalen lokalen Stunde zuordnen. Keine Tageslängen-Normalisierung: gezählt werden Sendebeiträge.
2. 24 gemeinsame und 24 personenbezogene Stundenwerte bilden, Summe = |H|.
3. **Freigegebene Regel F-PRIME-01:** Für jeden Start h die Summe von drei aufeinanderfolgenden Stunden modulo 24 bestimmen. Höchstens drei Stunden, keine beliebige Ausweitung bis der gesamte Tag enthalten ist.
4. Alle Starts mit maximaler positiver Summe behalten. Leere Randbuckets dieser Gewinnerfenster entfernen, mindestens einen Bucket behalten; identische resultierende Fenster deduplizieren. Innere leere Stunde bleibt als Teil eines zusammenhängenden Fensters bestehen. Bei Summe 0 kein Peakfenster.
5. Pro Gewinnerfenster Count, Gesamtanteil und A/B-Anteile aus denselben Nachrichten berechnen. Enduhrzeit ist exklusiv: 23–02 umfasst 23, 00, 01, nicht 02.

Begründung: Eine feste obere Länge macht „wann am meisten“ vergleichbar und bündelt benachbarte Aktivität ohne adaptive, unbegründete Dichteschwelle. Drei Stunden sind eine Produktwahl, nicht aus dem Legacy-Label abgeleitet. Die Drei-Stunden-Variante ist ausdrücklich freigegeben.

## 5. Zeitraumverhalten

Alle Presets verwenden H aus dem aufgelösten P, Algorithmus unverändert. Mitternachtsübergreifendes **Uhrzeitfenster** ist keine echte zusammenhängende Dreistundenperiode eines einzelnen Tages: Es summiert dieselben Stunden über P. Randtage tragen vorhandene Nachrichten bei; keine Extrapolation auf volle Tage. Bekannte Lücken oder abgeschnittene Tagesabdeckung kennzeichnen die Verteilung als beobachtet/partiell.

## 6. Person A / B

Gemeinsames Peakfenster aus A+B, nicht aus getrennt gewählten persönlichen Peaks. A/B-Balken addieren sich pro Stunde zum Gesamtbalken. A/B-Anteile innerhalb eines positiven gemeinsamen Fensters summieren ungerundet auf 100 %. Anteile verschiedener gleichstarker, überlappender Fenster dürfen nicht addiert werden.

## 7. Gleichstände

Alle unterschiedlichen maximalen Fenster zeigen, keine zufällige Auswahl. Primäre Kurzfassung „N gleich starke Zeitfenster“, Detail zugänglich; stabile Reihenfolge nach Startuhrzeit dient nur der Darstellung. Bei 24 gleich hohen Stunden kein exklusives „euer einziges Peakfenster“ behaupten.

## 8. Mindestdaten / Zustände

Eine zeitlich gültige Nachricht genügt zur beobachteten Verteilung, mit n=1; keine Gewohnheitsaussage. `available`: |H|≥1. `insufficient-data`: relevante Beiträge vorhanden, aber keiner zeitlich geeignet. `not-applicable`: gültiges leeres P, kein Peak. `unsupported`: Quellzeitformat nicht interpretierbar. `error`: fehlgeschlagene Verarbeitung. Prozentfelder ohne H bleiben undefiniert.

## 9. Datenabdeckung

Fehlendes Datum/Uhrzeit und unklarer Kalenderbezug aus H ausschließen, Mengen nennen. Uhrzeit ohne Datum nicht unbemerkt im Gesamtchart verwenden. Importlücken: beobachtete Histogrammwerte möglich, keine Vollständigkeitsbehauptung. Unbekannter Sender nicht A/B zurechnen. Sommerzeit-Doppelstunden zählen tatsächliche Nachrichten im jeweils lokalen Stundenbucket; keine zwei künstlichen verschiedenen „02-Uhr“-Kategorien.

## 10. Evidence / Nachvollziehbarkeit

Jeder Stundenbalken öffnet seine vollständige Nachrichtenmenge; jedes Gewinnerfenster dieselbe Summe als gefilterte Liste. Originale mit Absender, Quellenzeit und MessageId erreichbar. Zahl der Listenelemente entspricht dem Count; keine Beispielquote als Vollbeleg ausgeben.

## 11. Nutzerkorrekturen

Sender, ursprüngliche Zeit, Nachrichtentyp und Identität können H ändern. Bearbeitung ohne Zeit-/Typänderung ändert Histogramm nicht. Semantic-, Silence-, Night- und Hot-&-Cold-Ausschlüsse beeinflussen H nicht.

## 12. Reanalyse-Abhängigkeiten

Zeitraum/Add/Replace: H und alle Buckets neu bewerten; relative Fenster nach neuem chat_end auflösen. Sprecher-/Typ-/Zeitkorrektur: Mitgliedschaft/Bucket/Person prüfen. Inhaltsbearbeitung: keine Zähländerung bei gleicher Eignung. Löschplatzhalter bleibt nach DC-02 Nachricht bei sicherem Sender/Sendezeit; echte Entfernung aus R vermindert Count. Dublettenauflösung kann Summe ändern.

## 13. Dashboard Snapshot

Bereits geeignete Karte: `primaryValue` = einziges Gewinnerfenster, z. B. „23–02“, `unit` = „Uhr“, `shortLabel` = „Prime Time“, optional `secondaryValue` = „87,5 % der zeitlich auswertbaren Nachrichten“. Bei Gleichstand primaryValue = „2 Zeitfenster“, unit leer; keine Auswahl eines scheinbaren Gewinners. n/Abdeckung bleiben erreichbar. Kein Snapshot mit Referenzzahl.

## 14. Darstellung

24 Stundenbalken, x lokale Stunde, y Nachrichten; absolute ganze Werte auf Balken oder mobil per Tap. Tooltip: Stunde, Gesamt/A/B, Anteil und n. Gewinnerfenster inklusive Mitternachtsübergang markieren. Personenfarben/Tokens aus bestehendem Designsystem. Prozent maximal eine Nachkommastelle. Gleichstände sichtbar statt willkürlicher Hervorhebung.

## 15. Methodiktext

„Wir zählen die Nachrichten nach ihrer lokalen Sendezeit. Das stärkste Zeitfenster umfasst bis zu drei benachbarte Stunden. Die Personenanteile beziehen sich auf Nachrichten in diesem Fenster. Beiträge ohne eindeutig auswertbare Zeit fehlen in dieser Auswertung.“ Der Fenstersatz entspricht der Freigabe F-PRIME-01.

## 16. Synthetische Testfälle

Alle nicht genannten Buckets 0; datierte Beiträge auf vollständig bekannten Tagen, gleiche bestätigte Kalenderbasis. Erwartete Fenster gemäß freigegebener F-PRIME-01.

| ID / Fall | Eingabe | Exakt erwartetes Ergebnis |
|---|---|---|
| PR-N Normal | A 23 Uhr ×3, B 23 Uhr ×1, B 00 Uhr ×2, A 01 Uhr ×1, B 12 Uhr ×1 | H=8; Buckets 23=4, 0=2, 1=1, 12=1. Ein Fenster 23–02 mit 7; Anteil 7/8=87,5 %; A 4/7=57,1 %, B 3/7=42,9 %. |
| PR-T Gleichstand | A 08:00, B 20:00 | Zwei nach Randtrimmen eindeutige Fenster 08–09 und 20–21, je 1, je 50 %; keine Gewinnerperson global. |
| PR-S Klein | A 10:15 | H=1, Fenster 10–11, 100 %, A=100 %, B=0 %. |
| PR-U Fehlende Zeit | A Datum-only, B undatiert | H=0, zwei zeitlich ungeeignete Beiträge, insufficient-data; kein 00-Uhr-Balken aus diesen Beiträgen. |
| PR-M Medien/Emoji | A Bild 18:00, B „😂“ 18:01, C Text 18:02, B Reaction | H=2, Bucket 18=2, Fenster 18–19, A/B je 50 %. |
| PR-P Filter | A 01.11.10:00, B 02.11.20:00; Custom 02.11. | H=1, Fenster 20–21, B=100 %. |
| PR-A Update | PR-S identisch wiederimportieren; dann B 10:20 hinzufügen | Wiederimport H=1 unverändert; Add H=2, Bucket 10=2, A/B 50 %, Fenster 10–11. |
| PR-E Stundenkante | A 23:59, B 00:00, B 02:00 | Buckets 23=1,0=1,2=1; beste 3 h-Summen 2; resultierende Gewinner 23–01 und 00–03; B 02 gehört nicht zu 23–02. |

## 17. Feature-spezifische Anforderungen

Das Fenster ist eine über P aggregierte Uhrzeitspanne, kein rollierendes Echtzeitmaximum. F-PRIME-01 und die 24 Stunden-Buckets sind fachlich freigegeben. Alle benachbarten gleich hohen Stunden zu einer unbegrenzt langen Spanne zu verbinden ist nicht erlaubt. Bei durchgehender Gleichverteilung bleibt die Mehrdeutigkeit sichtbar.

# weekday — Lieblingstag

## 1. Nutzerfrage

An welchem Wochentag fallen im betrachteten Zeitraum durchschnittlich die meisten Nachrichten an?

## 2. Eingabemenge

Datierte R in P und bestätigter Kalenderbasis; Uhrzeit nicht erforderlich. Für die Durchschnittskennzahl werden nur **vergleichbar abgedeckte Kalendertage** verwendet. Ein ganzer durch den Filter eingeschlossener Tag ist nicht automatisch ein vollständig exportierter Tag: bekannte Teilabdeckung/Importlücke führt zur Herausnahme des betroffenen Tages aus Durchschnittszähler und -nenner. Ohne explizite Volltagesabdeckung gelten erster/letzter Quelldatentag konservativ als Randtage. Dazwischenliegende Tage des bestätigten zusammenhängenden Quellbestands einschließlich nachrichtenfreier Tage zählen. Sprache irrelevant.

## 3. Zähler und Nenner

Für Wochentag w: `D(w)` = Zahl vergleichbar abgedeckter Kalendertage dieses Wochentags innerhalb P; `M(w)` = alle relevanten Nachrichten **auf genau diesen Tagen**. Durchschnitt `M(w)/D(w)`. Personenwerte A(w)/D(w), B(w)/D(w) verwenden denselben Tagesnenner. Optionaler Rohsummentext für alle datierten Tage separat benennen, nicht mit Durchschnitt vermischen. D=0 → kein Durchschnitt, nicht 0.

## 4. Berechnung

1. P und Quellenabdeckung auf Kalendertage abbilden.
2. Ganze geeignete Tage enumerieren, auch Tage mit 0 Nachrichten.
3. Pro Tag A/B-Counts; nach Wochentag summieren und zugehörige Tage zählen.
4. Bruch M/D exakt vergleichen, erst anschließend runden. Größter definierter Durchschnitt gewinnt; bei ausschließlich 0 keine Aussage „bevorzugter Tag“.

## 5. Zeitraumverhalten

Gesamt verwendet chat_begin bis chat_end und die Abdeckung darin. 7/30/3 m/12 m/Custom setzen lediglich P; weder immer vier noch immer fünf Montage annehmen. Custom-Von/Bis schließt beide Tage ein; ein Filterbeginn innerhalb einer vollständig verfügbaren Quelle macht den ganzen ausgewählten Tag nicht unvollständig. Tatsächlich nur halbtags exportierte Randtage werden für den Durchschnitt ausgeschlossen, bleiben als Kontext/Rohmenge sichtbar. Bekannte fehlende Tage sind keine Nulltage.

## 6. Person A / B

Gemeinsamer Mittelwert = A-Mittelwert + B-Mittelwert pro Wochentag. Diese Werte sind Nachrichten/Tag, keine Prozente und summieren nicht auf 100. Falls zusätzliche A/B-Anteile gezeigt werden: A(w)/M(w), B(w)/M(w), nur M>0. Kein zusätzlicher Prozentvergleich der sieben Mittelwerte ohne eigenen Nutzen/Definition.

## 7. Gleichstände

Alle maximalen positiven Brüche gleichrangig zeigen. 8/4 und 10/5 sind exakt gleich, auch wenn Rohsummen verschieden. Gleiche gerundete Anzeige bei verschiedenen Brüchen ist kein echter Gleichstand; Detailpräzision erklären.

## 8. Mindestdaten / Zustände

Ein vergleichbar abgedeckter Kalendertag genügt für dessen Mittelwert; n-Tage nennen, kein typisches Wochenmuster behaupten. `available`: mindestens ein D>0. `insufficient-data`: nur unvollständige Randtage/keine brauchbaren Daten. `not-applicable`: w ohne vorkommenden geeigneten Tag; kein positiver Gewinner bei allen M=0. `unsupported`: nicht auswertbarer Kalender; `error`: Verarbeitungsausfall.

## 9. Datenabdeckung

Datum fehlt → kein Tagescount. Uhrzeit fehlt bei gültigem Datum → zählt. Unklare Zone/Person → betroffene Zuordnung klären, keine vermeintliche Vollabdeckung behaupten. Importlücke/Teilrandtag betrifft Zähler und Nenner gemeinsam. Bei nicht lokalisierbaren undatierten Beiträgen bleibt der ausgewiesene Durchschnitt ausdrücklich auf zeitlich auswertbare Nachrichten beschränkt.

## 10. Evidence / Nachvollziehbarkeit

Je Wochentag Liste der verwendeten Kalendertage samt Tagescounts, auch 0, sowie paginierte Originalnachrichten; daneben ausgeschlossene Rand-/Lückentage und Grund. So lässt sich M/D unabhängig rekonstruieren.

## 11. Nutzerkorrekturen

Datum, Personen, Typ, Deduplizierung und Abdeckung können M/D ändern. Schlafprofile, Treffen und semantischer Ausschluss ändern weder belegte Kalendertage noch Rohnachrichten. Inhaltsbearbeitung ohne Typ-/Zeitänderung zählt gleich.

## 12. Reanalyse-Abhängigkeiten

P/Add/Replace: Kalendernenner und Counts prüfen, neue Quellen können Randtage vervollständigen. Sprecher-/Art-/Zeitkorrektur verändert jeweilige Mitgliedschaft; Inhaltsbearbeitung unverändert, außer Typ ändert sich. Löschplatzhalter bleibt nach DC-02; tatsächliche Entfernung senkt M, nicht automatisch die belegte Tagesabdeckung. Geänderte Abdeckungsinformation invalidiert D ausdrücklich.

## 13. Dashboard Snapshot

Derzeit keine eigene freigegebene Snapshotkarte. Keine neue Karte erzwingen. Ergebnisvertrag bleibt für Detailansicht; späterer Snapshot benötigt eigene begründete Kurzprojektion.

## 14. Darstellung

Sieben Wochentagsbalken, Einheit „Nachrichten je vorkommendem Tag“. Tooltip/Tap: M Nachrichten auf D Tagen = exakter Durchschnitt, A/B und Abdeckung. Mittelwerte bis eine sinnvolle Nachkommastelle, n-Tage ganzzahlig. Nicht auswertbare Wochentage als fehlend, nicht gleich hohe Nullbalken ausgeben.

## 15. Methodiktext

„Wir teilen die Nachrichten eines Wochentags durch die Anzahl dieser Tage im auswertbaren Zeitraum. Tage ohne Nachrichten zählen mit, bekannte Datenlücken und unvollständig erfasste Tage nicht. Deshalb sind Rohsummen und Tagesdurchschnitt verschieden.“

## 16. Synthetische Testfälle

Explizit „vollständig“ bedeutet bestätigte volle Tagesabdeckung, nicht bloß erste/letzte Nachricht.

| ID / Fall | Eingabe | Exakt erwartetes Ergebnis |
|---|---|---|
| WD-N Normal | Vollständiger Juli 2026: vier Montage je 2 Nachrichten, fünf Freitage je 1; sonst 0 | Montag M 8/D 4=2; Freitag M 5/D 5=1. Gewinner Montag trotz unterschiedlicher Taganzahl. Andere vorkommende Wochentage Mittel 0. |
| WD-T Gleichstand | Wie WD-N, Freitage jeweils 2 | Mo 8/4=2, Fr 10/5=2; zwei Gewinner. |
| WD-S Klein | Vollständig erfasster Montag 06.07.2026 mit A 1 | Montag 1/1=1; sechs andere Wochentage D 0, not-applicable. |
| WD-U Zeitdaten | Vollständiger 06.07., A Datum-only 1, B undatiert 1 | Mo 1/1=1 aus datierbarer Menge; ein undatierter Beitrag ausgewiesen; keine Stundenpräzision erforderlich. |
| WD-M Medien | Vollständiger Montag: A Bild 1, B Emoji 1, System 1 | Mo 2/1=2; A/B je 1 Nachricht/Tag. |
| WD-P Filter | WD-N, Custom 06.–12.07., vollständige Woche | Mo 2/1=2, Fr 1/1=1, übrige 5 Tage 0/1=0. |
| WD-A Update | Zunächst nur Teilmontag 06.07.12–18 mit 2 Nachrichten; dann Quelle ergänzt volle Tagesabdeckung ohne neue Nachrichten | Zunächst DMo 0, insufficient-data; danach DMo 1, MMo 2, Mittel 2. Wiederimport derselben Vollquelle unverändert. |
| WD-G Lücke | Vollständige Montage 06./13. je 2, bekannter fehlender Montag 20.; P 06.–20. | DMo 2, MMo 4, Mittel 2; nicht 4/3. Fehlender Montag sichtbar. |

## 17. Feature-spezifische Anforderungen

Kalendernenner muss unabhängig von Nachrichtenvorkommen entstehen. Ein vollständig beobachteter Nulltag gehört hinein, ein fehlender Importtag nicht. Keine von Legacy-Säulen abgeleitete Nennerkorrektur. Tagesabdeckung ist fachliche Importinformation, keine aus einer Lücke zwischen Nachrichten automatisch abgeleitete Ausfallannahme.

# streak — Chat Streak

## 1. Nutzerfrage

Wie lang ist die längste im Bestand belegte Serie aufeinanderfolgender aktiver Kalendertage?

## 2. Eingabemenge

`activity_messages` aus R in P mit eindeutigem Kalendertag; Uhrzeit/Sprache nicht nötig. Aktiver Tag mindestens ein solcher Beitrag, auch Medien/Emoji/Löschplatzhalter nach genehmigtem Vertrag. System, Reactions, C, undatierte Beiträge ausgeschlossen.

## 3. Zähler und Nenner

Hauptwert = Länge der längsten zusammenhängenden Folge aktiver Kalendertage, ganze Tage, kein Nenner. Optional persönliche Serien verwenden nur Tage dieser Person. Aktive Tage gesamt = Zahl unterschiedlicher aktiver Tage; keine Nachrichtenanzahl. Keine Prozentkennzahl notwendig.

## 4. Berechnung

1. Menge aktiver Datumswerte bilden; pro Tag höchstens 1.
2. Chronologisch in maximal aufeinanderfolgende Kalenderfolgen zerlegen; Datumsnachfolger statt verstrichener 24 h.
3. Tage ohne beobachteten Beitrag unterbrechen den belegten Lauf. Bei bekannter Importlücke gilt der Rand als unsicher, nicht als bewiesen kommunikationsfrei; keine Zusammenfügung über die Lücke.
4. Maximale Länge bestimmen, alle gleich langen Läufe behalten. Anfang/Ende auf Zensierung prüfen: liegt Lauf an Import-/Analysegrenze ohne belegten inaktiven angrenzenden Tag oder an unklarer Abdeckung, Kennzeichnung „mindestens“.
5. Ist irgendein maximaler Lauf randzensiert oder könnte eine Lücke einen längeren Lauf verbergen, Hauptwert als „mindestens L belegte Tage“, Abdeckungsgrund nennen. Durch bekannte Grenzen kein exaktes globales Maximum vortäuschen.

## 5. Zeitraumverhalten

P begrenzt die gezählten Tage für alle Presets. Außerhalb darf Kontext zeigen, dass eine Serie weitergeht, verlängert aber nicht die im Fenster gezählte Länge. Ein Lauf, der an Filterkante fortbestehen könnte, heißt mindestens L. Ein ganz im Fenster liegender Lauf mit belegten inaktiven Nachbartagen ist exakt für diesen verfügbaren Umfang. Add kann relative P-Grenzen verschieben.

## 6. Person A / B

Gemeinsamer Tag aktiv, wenn A **oder** B schreibt; kein Erfordernis beider Personen. Persönliche Serien getrennt, nicht addierbar und keine 100-%-Anteile. Gemeinsamer Lauf kann länger als beide persönlichen Läufe sein.

## 7. Gleichstände

Alle maximalen Datumsintervalle erreichbar; keine Auswahl nach Sender oder zufälliger ID. Bei nur einem Zahlenwert die gemeinsame Länge zeigen, daneben Zahl der gleichlangen Serien. Randqualifikator für jeden Lauf separat und konservative Gesamtformulierung.

## 8. Mindestdaten / Zustände

Ein datierter relevanter Beitrag liefert einen belegten aktiven Tag. `available`: mindestens einer oder valide vollständig geprüfte leere Aktivitätsmenge mit Count 0. `insufficient-data`: nur undatierter/ungeklärter Bestand. `not-applicable`: Datumsintervall/Personenvergleich ohne gültigen Lauf. `unsupported`: Kalenderquelle nicht interpretierbar. `error`: Verarbeitungsausfall. Nullnachrichten ist nicht eine 0-Tage-„Serie“ mit erfundenen Grenzen.

## 9. Datenabdeckung

Datum-only genügt; kein Datum erzeugt keinen aktiven Tag. Unklare Zone/Person nicht zuordnen. Bekannte Lücken trennen belegte Läufe, können „mindestens“ erforderlich machen. Eine fehlende Nachricht am Tag ist nur bei bekannter Abdeckung ein sicherer Leertag. Unbekannte Außenhistorie nie als bewiesene Streakgrenze betrachten.

## 10. Evidence / Nachvollziehbarkeit

Liste der aktiven Tage des Laufs mit Counts/Personen, pro Tag Originalsprünge. Nachbartage/Abdeckung erklären „mindestens“. Nicht künstlich für jede Tagesmarke semantische Evidence erzeugen.

## 11. Nutzerkorrekturen

Datum, Sender, Typ und Entfernung des letzten relevanten Beitrags eines Tages können die Serie verändern. Löschen eines semantischen Belegs, Schlafprofil oder persönliches Treffen verlängert/verkürzt keine Standardserie. Körperliches Treffen ist kein digitaler aktiver Tag.

## 12. Reanalyse-Abhängigkeiten

P/Add/Replace/Sprecher/Art/Zeit/Deduplizierung sowie Quellenabdeckung invalidieren Tage/Läufe. Reine Textbearbeitung ohne Eignungsänderung nicht. Belegter Löschplatzhalter mit ursprünglichem Datum erhält Aktivität; echte Entfernung des einzigen Beitrags nimmt den Tag aus der beobachteten Aktivitätsmenge. Neue Randbelege können „mindestens“ ändern.

## 13. Dashboard Snapshot

Geeignete bestehende Karte: primaryValue=L, unit=„Tage“, shortLabel=„Längste Chat-Serie“, optional secondaryValue=Datumsintervall oder „2 gleich lange Serien“. Qualifikator „mindestens“ muss vor dem Wert erscheinen, wenn erforderlich; nicht nur im versteckten Tooltip.

## 14. Darstellung

Kalender-/Tagesfolge mit aktiven, sicher inaktiven und unklaren Tagen unterscheidbar. Ganze Tage, keine Dezimalstellen. Tap/Tooltip Datum, Nachrichtenanzahl, Personen, Abdeckung/Originalzugang. Bestehende Design-Tokens; keine Stille mit Schlaf gleichsetzen.

## 15. Methodiktext

„Ein Tag ist aktiv, sobald mindestens eine relevante Nachricht von euch beiden vorliegt. Wir zählen aufeinanderfolgende Kalendertage. An Daten- oder Zeitraumgrenzen kann die Serie außerhalb weitergehen; dann steht hier mindestens. Treffen und Schlafhinweise verändern die Serie nicht.“

## 16. Synthetische Testfälle

| ID / Fall | Eingabe | Exakt erwartetes Ergebnis |
|---|---|---|
| ST-N Normal | Vollabdeckung 01.–07.11.; aktive Tage 02.,03.,04.; Nachbartage 01./05. leer | L 3, exakt 02.–04.; keine Verlängerung durch weiteres Treffen 05. |
| ST-T Gleichstand | Vollabdeckung 01.–09.; aktiv 02./03. und 06./07. | Zwei maximale Läufe L 2, exakt 02.–03. und 06.–07. |
| ST-S Klein | Einziger importierter datierter Beitrag 03.11., keine Außenabdeckung | Mindestens 1 Tag, Lauf 03.11. |
| ST-U Zeit | A 02.11. Datum-only, B 03.11. Datum-only, ein undatierter Beitrag | Belegter Lauf 2, bei unbekannter Außenhistorie mindestens 2; undatiert verlängert nicht. |
| ST-M Medien | Vollabdeckung 01.–05.; Bild 02., Emoji 03., Reaction 04. | L 2,02.–03.; Reaction macht 04. nicht aktiv. |
| ST-P Filter | Aktive 02.–05., Custom 03.–04. | Im Fenster 2, „mindestens 2 Tage“, äußere Aktivität nur Kontext. |
| ST-A Update | Belegter Lauf 02.–03., Add 04.; gleicher Export nochmals | L steigt 2→3, danach unverändert 3; bei unbekannter Außenhistorie jeweils mindestens. |
| ST-G Lücke | Aktiv 02./03. und 05./06.;04. bekannter fehlender Importtag | Zwei belegte Läufe 2, Hauptwert mindestens 2; weder exakte globale 2 noch erfundene 5. |
| ST-AB Personen | A 02./04., B 03., vollständig bekannte Nachbarn leer | Gemeinsamer Lauf 3; A persönliche Höchstlänge 1 mit zwei Läufen, B 1. Nicht 1+1=3 behaupten. |

## 17. Feature-spezifische Anforderungen

Nur Kalendernachbarschaft, kein 24-h-Timer. Über Sommerzeit bleibt der nächste Kalendertag der nächste Tag. Die geforderte Grenzformulierung ist Bestandteil des Werts. Bei längeren verborgen möglichen Läufen keine Sicherheit behaupten, auch wenn die sichtbare maximale Serie selbst innen liegt.

# peak — Peak Day

## 1. Nutzerfrage

An welchem Kalendertag wurden die meisten Nachrichten gesendet, und welches zusammenhängende reale 24-Stunden-Fenster enthält die meisten? Zwei getrennte Ergebnisse.

## 2. Eingabemenge

Tagespeak: datierte R in P auf bestätigter Kalenderbasis, Datum-only zulässig. Rollierender Peak: R in P mit mindestens Minutenpräzision, eindeutigem chronologischem Zeitpunkt und vergleichbarer bestätigter Zeitbasis. Fehlende Uhrzeit nicht Mitternacht. Sommerzeit-/Offsetmehrdeutigkeit blockiert betroffene rollierende Zeitpunkte. Sprache irrelevant.

## 3. Zähler und Nenner

Tagescount = Zahl der relevanten Nachrichten am Datum. Rollierender Count = Zahl in `[s,s+24 realen Stunden)`. Kein Nenner für Maximum. Falls A/B-Anteile angezeigt: Personen-Count im jeweiligen Gewinner / gemeinsamer Gewinnercount. Keine Mischung von Tages- und 24 h-Nennern.

## 4. Berechnung

Tagespeak: Counts je Datum, maximaler positiver Count, alle Gleichstandstage.

Rollierend: zulässigen zeitpräzisen Bestand sortieren; nur **vollständig im Zeitraum und in bestätigter zusammenhängender Quellenabdeckung liegende 24 h-Fenster** werten. Kandidatenstarts sind Nachrichtentimestamps sowie der letzte mögliche Start `Ende des abgedeckten Segments −24h` je Segment, sofern zulässig. Diese Randkandidatur verhindert das Übersehen eines dicht belegten Quellenendes. Für jeden Kandidaten in halboffenem Fenster zählen; alle maximalen positiven Kandidaten behalten. Fensterstart kann folglich ohne Nachricht sein. Zeitgleich gesendete eindeutige Beiträge zählen jeweils einmal.

Kein Kandidat darf eine bekannte Lücke überqueren. Rollierendes Fenster braucht keinen Nachrichteneintrag am Endpunkt, aber bekannte zeitliche Abdeckung bis dorthin. Nachweisbarer Beobachtungsumfang unter 24 h: rollierender Wert `insufficient-data`, nicht derselbe Count als „24 h-Peak“. Bei vollständig erfasstem Teilbestand mit Lücken heißt Ergebnis Maximum der vollständig auswertbaren Fenster, nicht garantiertes globales Maximum.

## 5. Zeitraumverhalten

Tagespeak verwendet vorhandene Tagesmengen in P; partielle Randtage bleiben als beobachtete Tagescounts sichtbar, mit Abdeckungshinweis. Rollierende Fenster müssen vollständig in P liegen; keine Nachrichten außerhalb mitzählen und kein Clipping. Alle Presets verändern nur P. Ein lokaler Tag kann bei Sommerzeit 23/25 reale Stunden haben, ein rollierendes Fenster hat 24.

## 6. Person A / B

Für gemeinsame Gewinner Count A+Count B=Gesamt, Anteile bei positivem Count 100 %. Keine persönlichen Gewinnerdaten statt gemeinsamer Basis unterschieben. Persönliche Tagesmaxima wären getrennt benannte Zusatzwerte, nicht erforderlich für V1.

## 7. Gleichstände

Alle maximalen Kalendertage und alle kanonischen maximalen 24 h-Kandidaten zugänglich machen. Primäre Darstellung nennt Gleichstandszahl; Listen chronologisch. Kontinuum gleichwertiger frei verschiebbarer Fenster nicht als unendliche Liste ausgeben: Kandidatenregel oben definiert endliche repräsentative Starts, keine zufällige Auswahl.

## 8. Mindestdaten / Zustände

Tageswert ab einem datierten Beitrag `available`. Rollierend mindestens ein vollständig abgedecktes 24 h-Fenster mit Beitrag; sonst `insufficient-data` bei fehlender Zeit/Abdeckung. Gültig vollständig leere Menge: Count 0, Gewinner `not-applicable`. Quelle/Zeitzone nicht unterstützt: `unsupported` für betroffenen Teil; Fehler `error`. Tageswert kann verfügbar sein, während 24 h-Teil unzureichend ist.

## 9. Datenabdeckung

Datum fehlt: kein Peakbeitrag. Uhrzeit fehlt: Tagespeak ja,24 h nein, reduzierte 24 h-Basis sichtbar. Importlücken stoppen vollständige 24 h-Segmente; Tagescounts nur beobachtet. Unklare Personen/Zone ausschließen oder klären, kein vollständiger Gewinner behauptet. Minimale Minutenpräzision heißt quellenaufgelöste Zeiten, keine erfundenen Sekunden; Grenznachrichten genau am exklusiven Ende zählen nicht.

## 10. Evidence / Nachvollziehbarkeit

Jeder Gewinner öffnet exakt seine Mitgliedschaft mit Originalen. Tagesdatum und 24 h-Start/Ende samt Zeitzonenbasis anzeigen. Listencount entspricht Kennzahl; keine 652/653-Abweichung zwischen Chart/Detail/Snapshot.

## 11. Nutzerkorrekturen

Sender/Art/Zeit/Identität/Datenentfernung beeinflussen Counts. Inhaltskorrektur ohne Eignungsänderung nicht. Schlaf-, Treffen-, Silence- oder semantische Belegausschlüsse entfernen keine Rohbeiträge.

## 12. Reanalyse-Abhängigkeiten

P/Add/Replace ändern Fenster und Abdeckung; Sprecher-/Art-/Zeitkorrektur Mengen/Buckets/Fenster. Bearbeitung unverändert bei gleicher Metadatenbasis. Löschplatzhalter gemäß DC-02 weiterhin Count bei gültiger Zeit; echte Entfernung reduziert. Quellenabdeckungsänderung kann neue 24 h-Fenster erstmals zulassen, auch ohne neue Nachricht.

## 13. Dashboard Snapshot

Bestehende Karte bezieht sich auf **Kalendertag**: primaryValue=maxTagescount, unit=„Nachrichten“, shortLabel=„Peak Day“, secondaryValue=Datum oder „N gleich starke Tage“. Partielle Basis sichtbar. Rollierender Wert wird nicht still als derselbe Snapshot eingesetzt.

## 14. Darstellung

Tagesbalken/Verlauf mit ganzen Nachrichtenwerten; separater 24 h-Bereich mit Start/Ende. Tooltip/Tap Datum bzw. Intervall, Gesamt/A/B, Abdeckung. Absolute Werte, gegebenenfalls A/B-Prozent maximal eine Nachkommastelle. Legendeneinheit trennt Kalendertag und reale 24 h.

## 15. Methodiktext

„Peak Day zählt Nachrichten je lokalem Kalendertag. Der 24-Stunden-Peak sucht zusätzlich das stärkste vollständig auswertbare Zeitfenster von 24 realen Stunden. Beide können unterschiedliche Ergebnisse liefern. Fehlende Zeitdaten und Datenlücken werden ausgewiesen.“

## 16. Synthetische Testfälle

Alle rollierenden Fälle mit eindeutiger Quellenzeit UTC+01 ohne Zeitumstellung und expliziter Abdeckung wie angegeben; gleiche Datumskurzformen beziehen sich auf November 2026.

| ID / Fall | Eingabe | Exakt erwartetes Ergebnis |
|---|---|---|
| PK-N Normal | Abdeckung 01.00:00–04.00:00;01.23:00 zwei Nachrichten,02.01:00 drei | Tagespeak 02. mit 3;24 h-Peak [01.23:00,02.23:00) mit 5, eindeutiger positiver maximaler Kandidat. |
| PK-T Gleichstand | Abdeckung 01.00–05.00;01.10:00 A 1,03.10:00 B 1 | Tagespeak zwei Tage je 1.24 h-Gewinnerstarts 01.10 und 03.10 je 1; keine Nachricht am Randkandidaten 04.00. |
| PK-S Klein | Ein Beitrag 01.12:00, Abdeckung nur 01.12–13 | Tagespeak 1; rollierend insufficient-data, kein angeblicher vollständiger 24 h-Peak. |
| PK-U Zeiten | Zwei Beiträge Datum-only 02. | Tagespeak 2 am 02.; rollierend insufficient-data. |
| PK-M Medien | Abdeckung 01.00–03.00;01.10:00 Bild A,01.11:00 Emoji B, Reaction | Tagespeak 2;24 h-Fenster ab 01.10 enthält 2. Reaction 0. |
| PK-P Filter | PK-N, Custom 02. | Tagespeak 3; vollständiger lokaler 02. hat 24 h, Randstart 02.00 liefert 24 h-Count 3;01.23 zählt nicht. |
| PK-A Update | PK-N plus 02.02:00 A 1; dann identischer Wiederimport | Tagespeak 4 am 02.;24 h-Peak 6 ab 01.23; Wiederimport unverändert. |
| PK-E Ende exklusiv | Abdeckung 01.00–03.12; A 01.10:00, B 02.10:00 | Zwei Tagesmaxima 1; Fenster ab 01.10 enthält nur A, ab 02.10 nur B. Max 1, nicht 2. |
| PK-R Randkandidat | Abdeckung 01.00–02.12; eine Nachricht 02.11 | Tagespeak 1; einziger zulässiger positiver repräsentativer 24 h-Gewinnerstart 01.12 (Segmentende−24 h), Count 1. Start 02.11 wäre unvollständig und ausgeschlossen. |

## 17. Feature-spezifische Anforderungen

Tagesmaximum und rollierendes Maximum verwenden verschiedene zulässige Mengen und Einheiten. Ihr Unterschied ist erlaubt, derselbe Tagescount in Chart/Detail muss dagegen identisch sein. Minutenpräzision und eindeutige Zeitbasis sind Pflicht für rollierend; tatsächliche 24 h nicht mit „nächster gleicher lokaler Uhrzeit“ bei Sommerzeit verwechseln.

# texting — Texting Champion

## 1. Nutzerfrage

Wie verteilen sich gesendete Nachrichten und eigene Wortvorkommen auf A und B? Mengenbeschreibung, keine Bewertung von Interesse oder Kommunikationsqualität.

## 2. Eingabemenge

R innerhalb P, bei Gesamt auch undatiert. Eigene zulässige Text-/Captionsegmente gemäß DC-08/09 und Wortdefinition; Zitate, Fremdforward, technische Metadaten, Medieninhalt ausgeschlossen. Medien bleiben Nachrichten mit 0 Wörtern. DE/EN/unbestimmt nach gültiger Zuordnung; nicht unterstützte lexikalische Fälle begrenzen Wortteil, nicht Nachrichtenmenge.

## 3. Zähler und Nenner

`N_A`, `N_B`: Nachrichten je Person; N=N_A+N_B. `W_A`, `W_B`: eigene Worttoken-Vorkommen; W=W_A+W_B. Nachrichtenanteil A=N_A/N; Wortanteil A=W_A/W, B analog. Optional Wörter je Nachricht pro Person = W_A/N_A, gemeinsam=W/N: **alle relevanten Nachrichten**, einschließlich Medien/Emoji-only, nicht nur Wortnachrichten. Nur zeigen, wenn Wortbasis für diese Nachrichtengruppe vollständig auswertbar ist; sonst keine irreführende Gesamtdurchschnittsangabe.

## 4. Berechnung

Nachrichten einmal zählen. Eigene Segmente abgrenzen, konservativ normalisieren/segmentieren; Vorkommen einschließlich Stopwords zählen. Emoji, reine Zahlen, URLs/Adressen und technische Mentions sind keine Worttokens; Hashtagwort ohne # zählt, innere Apostrophe/Buchstabenbindestriche erhalten. Pro Person aufsummieren, Nenner prüfen, erst Darstellung runden. Keine unterschiedlichen Stopwordabzüge je Person.

## 5. Zeitraumverhalten

Gesamt: undatierte zulässige Texte enthalten. Alle begrenzten Presets/Custom: nur eindeutig zuordenbare Beiträge. Datum-only reicht. Randtage tragen vorhandene Nachrichten; keine Hochrechnung. Add verschiebt relative Fenster nach chat_end, Custom nicht. Wortmenge richtet sich nach Sendedatum, nicht Bearbeitungszeit.

## 6. Person A / B

N_A+N_B=N, W_A+W_B=W. Positive vollständige gemeinsame Nenner ergeben je Metrik 100 %. Nachrichtenanteile und Wortanteile nicht addieren. Bei Wortteilabdeckung beziehen sich Anteile ausdrücklich nur auf die auswertbare Wortbasis, keine allgemeine Gewinnerbehauptung über den vollständigen Chat.

## 7. Gleichstände

Getrennt nach Nachrichten und Wörtern. Gleiche Counts → Gleichstand, nicht gemeinsam irgendeine Person als Champion benennen. A kann mehr Nachrichten, B mehr Wörter haben. Bei N=0/W=0 kein Gewinner der jeweiligen Metrik.

## 8. Mindestdaten / Zustände

Ein relevanter Beitrag genügt `available`. Nachrichten Count 0 bei gültiger leerer Menge; Anteile not-applicable. Vollständig ausgewertete Medien-only-Menge: W=0 gültig, Wortanteile not-applicable. Text vorhanden, Tokenisierung nicht hinreichend möglich: Wortteil insufficient-data/unsupported je Grund. Fehler error, kein Fake Wortcount 0. Unklarer Sender wird nicht geraten.

## 9. Datenabdeckung

Fehlendes Datum im Gesamt okay, begrenzt ausgeschlossen. Uhrzeit irrelevant. Unklare Zone nur für Datumszuordnung relevant. Importlücken: Counts aus vorhandenem Bestand, keine Vollständigkeitsbehauptung. Wortfähige Abdeckung getrennt von N berichten; fehlende Mediensemantik ist keine fehlende Wortzahl, wenn nachgewiesen keine Caption vorliegt.

## 10. Evidence / Nachvollziehbarkeit

Personenliste aller Nachrichten; Wortansicht enthält gezählte Originalsegmente samt Tokenzahl je Nachricht, ausgeschlossene Zitat-/Metadatensegmente erklärbar. Wiederholte Wörter einzeln als Vorkommen, keine Suchtrefferzahl per Substring als Wortzahl. Pagination und genaue Originalsprünge.

## 11. Nutzerkorrekturen

Sprecher-, Typ-, Zeit-, Identitäts-, Caption-/Zitat-/Forwardzuordnung und Textbearbeitung können N/W beeinflussen. Stopwordlistenwechsel nicht Gesamt W. Semantische Ausnahme eines Kompliments nicht N/W; Night/Events/Pausen ebenso nicht.

## 12. Reanalyse-Abhängigkeiten

Zeitraum/Add/Replace alle Mengen; Sprecher verschiebt Personensummen, Art kann Caption/Eignung ändern; Zeit ändert Fenstermitgliedschaft; Bearbeitung eigene Worttokens; Löschung als Platzhalter N erhalten bei DC-02, W verliert nicht mehr vorhandenen Inhalt. Echte Datenentfernung reduziert N/W. Unveränderter Wiederimport unverändert.

## 13. Dashboard Snapshot

Derzeit keine eigenständige geeignete Snapshotkarte freigegeben. Keine neue Karte erzwingen; Detailansicht bleibt Mengenvergleich. Ein späterer Snapshot müsste Nachrichtenzahl und Wortzahl sinnvoll unterscheiden.

## 14. Darstellung

Zwei klar bezeichnete A/B-Vergleiche für Nachrichten und Wörter; absolute ganze Counts, jeweilige Prozente maximal eine Nachkommastelle. Optional Wörter/Nachricht mit einer sinnvollen Nachkommastelle, Nenner im Tooltip. Tap öffnet Quellenbasis. Avatare/Personenfarben bestehendes System, keine aus Mengen abgeleitete Gefühlswertung.

## 15. Methodiktext

„Wir zählen eure einzelnen Sendebeiträge und die eigenen Wörter darin getrennt. Medien können eine Nachricht ohne Wörter sein. Zitierter oder weitergeleiteter Fremdtext zählt nicht als eigener Wortschatz; häufige Funktionswörter bleiben in der Gesamtwortzahl enthalten.“

## 16. Synthetische Testfälle

Alle Textbeispiele eigene DE/EN-Segmente, sofern anders benannt.

| ID / Fall | Eingabe | Exakt erwartetes Ergebnis |
|---|---|---|
| TX-N Normal | A„Hallo du“, A Bild ohne Caption, B„Ja ich komme“ | N_A 2, N_B 1, N 3; W_A 2, W_B 3, W 5. Nachrichtenanteile 2/3=66,7 %,1/3=33,3 %; Wortanteile 40/60 %. Wörter/Nachricht A 1, B 3, gesamt 5/3≈1,7. |
| TX-T Gleichstand | A„Hallo du“, B„Guten Morgen“ | N_A=N_B=1, N=2; W_A=W_B=2, W=4; Anteile jeweils 50 %, beide Metriken Gleichstand. |
| TX-S Klein | A„und“ | N 1, W 1 trotz Stopword; A je 100 %, B 0 %. |
| TX-U Undatiert | A„Hallo“ undatiert, B„Hi“02.11. | Gesamt N 2, W 2; Custom 02.11. N 1, W 1 nur B; ein undatierter Beitrag ausgeschlossen. |
| TX-M Medien/Emoji | A Sticker, B„😂😂“, A Bild Caption„Guten Morgen“ | N_A 2, N_B 1; W_A 2, W_B 0; W 2. Sticker/Emojis keine Worttokens. |
| TX-P Filter | A 01.11.„eins zwei“, B 02.11.„drei“; Custom 02.11. | N_B 1, W_B 1, jeweils 100 %; A 0. |
| TX-A Bearbeitung/Update | A„Hallo“ → gleiche ID„Hallo du“; dann identisch wiederimportiert | N bleibt 1; W 1→2, dann unverändert 2. Löschplatzhalter derselben eindeutig belegten Nachricht: N 1, W 0. |
| TX-Q Quote | B Reply mit A-Zitat„Guten Morgen“ und eigenem„Ja“; betrachte B | B: N 1, W 1, nicht 3. |
| TX-Z Nullwörter | A sendet nur Bild; vollständige Textprüfung | N 1, W 0, Wortanteil not-applicable, Wörter/Nachricht 0; kein Wortchampion. |

## 17. Feature-spezifische Anforderungen

Eigene Wortvorkommen sind keine verschiedenen Wörter; ein Wort dreimal zählt 3. Stopwords bleiben W. Eine geänderte Caption kann W ändern, während N gleich bleibt. Gesamtdurchschnitt verwendet ausdrücklich N, keinen stillen Wechsel auf texttragende Nachrichten.

# emoji — Emoji DNA

## 1. Nutzerfrage

Welche Text-Emojis verwendet jede Person, wie oft, und welcher Anteil ihrer Nachrichten enthält mindestens eines?

## 2. Eingabemenge

R in P; Emoji-Segmente nur aus eigenem Text/Caption. Unicode-Sequenzen gemäß DC-10; keine Reactions, Stickerbilder, Fremdzitate oder Fremdforwards. Sprache ist für die Emoji-Einheit irrelevant. Gesamt auch undatiert, bei begrenztem Zeitraum ist Datumszuordnung nötig. Medien ohne Caption bleiben im Nachrichtennenner und tragen 0 Textemojis bei.

## 3. Zähler und Nenner

E_p = Emoji-Vorkommen von Person p. K_p = Zahl ihrer relevanten Nachrichten mit mindestens einem zulässigen Emoji. N_p = alle relevanten Nachrichten von p. Emoji-Nachrichtenanteil = K_p/N_p. Häufigkeit einer Hauptfamilie f = Summe ihrer Originalvarianten E_p(v); Familienanteil = E_p(f)/E_p. Im Drilldown: ursprüngliche Variantenhäufigkeit E_p(v) und optional deren Anteil E_p(v)/E_p(f), ausdrücklich als Anteil innerhalb der Familie bezeichnet. Optionaler Personenanteil aller Emojis = E_A/(E_A+E_B). Diese Anteile haben unterschiedliche Nenner.

## 4. Berechnung

1. Eindeutige eigene Originalsegmente aus R bestimmen.
2. Vollständige Unicode-Sequenzen als je ein Vorkommen segmentieren: Hautfarbe, Gender/ZWJ, Flagge und Keycap nicht zerlegen. Wiederholungen zählen separat.
3. Je Nachricht Vorkommen zählen; K steigt höchstens um 1.
4. **Freigegebene Regel F-EMOJI-01:** Hauptliste nach Emoji-Familien: kosmetische Hautfarbvarianten derselben Grundgeste und rein darstellungsbedingte Präsentationsvarianten desselben Emojis zusammenfassen. Semantisch unterschiedliche ZWJ-/Gender-, Personen-, Berufs-, Beziehungs- und Familiensequenzen bleiben getrennt; ebenso unterschiedliche Flaggen und Keycap-Zeichen. Keine pauschale Entfernung aller Modifikatoren/ZWJ-Bestandteile. Originalsequenzen und ihre Einzelhäufigkeiten im Drilldown erhalten.
5. Erst Originalvorkommen zählen, dann jedes genau einer Hauptfamilie zuordnen. Pro Person und gemeinsam E, K, N und Familienverteilung bilden. Absteigend nach E(f), Gleichstände ausweisen; alle Familien und Varianten erreichbar. Summen der Familien und Varianten müssen jeweils E ergeben; Aggregation erzeugt keine weiteren Vorkommen.

## 5. Zeitraumverhalten

Alle Presets verwenden R in P. Gesamt enthält undatierte Emoji-Nachrichten, begrenzte Fenster nur eindeutig datierte. Uhrzeit nicht nötig. Partielle Randtage tragen vorhandene Beiträge bei, keine Hochrechnung. Relative Grenzen folgen chat_end nach Add/Replace.

## 6. Person A / B

E_A+E_B=E gesamt, K_A+K_B=K gesamt, N_A+N_B=N. Personenanteile aller Emojis bei E>0 summieren auf 100 %. Persönliche Nachrichtenquoten K_A/N_A und K_B/N_B summieren **nicht** notwendig auf 100 %. Artenanteile innerhalb einer Person summieren auf 100 %, sofern alle gültigen Arten enthalten sind.

## 7. Gleichstände

Alle Hauptfamilien mit gleichem E(f) sind gleichrangig; im Drilldown gilt dasselbe für Varianten mit gleichem E(v). Stabile Sortierung dient nur der Anzeige. Keine Hautfarbe/Gendervariante als versteckter Gewinner bei Gleichstand. Bei E=0 kein Top-Emoji.

## 8. Mindestdaten / Zustände

Ein relevanter Beitrag mit geprüfter Textbasis genügt. `available`: E auch 0 gültig, K/N bei N>0. `not-applicable`: Artenanteil bei E=0, Nachrichtenquote bei N=0. `insufficient-data`: Text-/Quellbasis nicht ausreichend auswertbar. `unsupported`: nicht unterstützter Sequenz-/Quellfall mit Abdeckungshinweis. `error`: Verarbeitungsausfall, kein falsches 0. Keine künstliche Mindestzahl von Emojis.

## 9. Datenabdeckung

Fehlendes Datum nur bei Zeitraumbegrenzung problematisch; Uhrzeit nicht nötig. Importlücken begrenzen die Gesamtaussage. Unklare Person/Zone nach R behandeln. Uninterpretierbare Textsegmente nicht als emoji-frei zählen. Bei fehlender Textprüfbarkeit Quote nur über die bekannt auswertbare Teilmenge ausweisen und deren abweichenden Nenner nennen; keine vollständige K/N-Auswertung behaupten.

## 10. Evidence / Nachvollziehbarkeit

Jede Hauptfamilie öffnet ihre Variantenverteilung und alle Originalnachrichten mit markierten Vorkommen; Variantenfilter zeigt exakt die gewählte Originalsequenz. Eine Nachricht kann mehrere enthalten. „3 Vorkommen in 2 Nachrichten“ muss beide Zählungen korrekt abbilden. Keine Substring-Suche nach Basisemoji, die ZWJ-/Hautfarbsequenzen falsch zerlegt. Originalsprünge über MessageId.

## 11. Nutzerkorrekturen

Sender, Art, Identität, Zeit, Caption-/Quotezuordnung und Inhaltsbearbeitung können E/K/N verändern. Reaction als Metadatum hinzufügen ändert diese Werte nicht. Semantischer Humor-/Komplimentausschluss, Schlaf-, Event- und Pausenkorrekturen wirken nicht auf diese Rohzählung.

## 12. Reanalyse-Abhängigkeiten

P/Add/Replace/Sprecher/Art/Zeit verändern Mitgliedschaft oder Zuordnung. Bearbeitung segmentiert den aktuellen eigenen Text neu. Belegter Löschplatzhalter behält N nach DC-02, verliert E/K, weil verlorener Inhalt nicht rekonstruiert wird. Echte Datenentfernung reduziert alle betroffenen Mengen. Neue Emoji-Regelversion invalidiert Ergebnisse ausdrücklich; kein unbemerkter Wechsel.

## 13. Dashboard Snapshot

Keine zusätzliche Snapshotkarte erzwingen; derzeit nicht im freigegebenen Dreikartenumfang. Vollständige Toplisten und ihre Nenner gehören in die Detailansicht.

## 14. Darstellung

Bestehende zweispaltige Personenlisten mit Avatar/Initialen, Emoji, ganzzahliger Häufigkeit und klar benanntem Anteil. Tap zeigt Vorkommen/Nachrichten/Originale. K/N als separate Nachrichtenquote, Artenanteil mit eigener Nennerbezeichnung. Prozent maximal eine sinnvolle Nachkommastelle, Personenfarben aus bestehenden Tokens.

## 15. Methodiktext

„Wir zählen vollständige Emoji-Sequenzen in eurem eigenen Nachrichtentext. Mehrere gleiche Emojis zählen mehrfach, eine Nachricht mit Emojis für die Nachrichtenquote jedoch nur einmal. Reactions, Sticker und zitierte Fremdemojis gehören nicht dazu. Hautfarben und reine Darstellungsvarianten derselben Geste bündeln wir in der Hauptliste; im Detail seht ihr die tatsächlich verwendeten Varianten. Unterschiedliche Personen-, Berufs- und andere inhaltliche Sequenzen bleiben getrennt.“

## 16. Synthetische Testfälle

| ID / Fall | Eingabe | Exakt erwartetes Ergebnis |
|---|---|---|
| EM-N Normal | A„😂😂“, A„Hallo“, B„👍🏽“, B Bild | N_A 2, N_B 2; E_A 2, E_B 1, E 3; K_A 1, K_B 1. Emoji-Nachrichtenquoten je 50 %. Gemeinsame Arten: 😂2/3=66,7 %,👍🏽1/3=33,3 %. |
| EM-T Gleichstand | A„😂👍“ | E 2, K 1, N 1; beide Arten je 1 und 50 %, gleichrangig; K/N 100 %. |
| EM-S Klein | A„👩‍💻“ | Ein ZWJ-Vorkommen, E 1, K 1, N 1, Art 100 %, nicht zwei. |
| EM-U Undatiert | A„😂“undatiert, B„👍“02.11. | Gesamt E 2, K 2, N 2; Custom 02.11.E 1, K 1, N 1 nur B. |
| EM-M Medien/Reaction | A Sticker, B Reaction„😂“, A Bild Caption„🇩🇪1️⃣“ | N_A 2, N_B 0; E_A 2, K_A 1; A-Quote 50 %. Flagge 1, Keycap 1; Sticker/Reaction 0. B-Quoten ohne N not-applicable. |
| EM-P Filter | A 01.11.„😂😂“, B 02.11.„👍“; Custom 02.11. | E 1, K 1, N 1, B 100 % aller Emoji-Vorkommen. |
| EM-A Bearbeitung | A„😂“→gleiche ID„😂😂“; Wiederimport; dann Löschplatzhalter | E 1→2, danach 2; N 1/K 1 unverändert bis Löschung. Danach N 1, E 0, K 0, K/N 0 %, Artenanteil not-applicable. |
| EM-V Varianten | A„👍👍🏽👩‍💻👨‍💻“ | E=4, K=1. Hauptliste: 👍-Familie 2/4=50 %, 👩‍💻 1/4=25 %, 👨‍💻 1/4=25 %. Daumen-Drilldown: 👍=1, 👍🏽=1; keine zusätzliche Zählung. |
| EM-Z Ohne Emoji | A„Hallo“, B Bild | N 2, K 0, E 0; K/N 0 %, keine Top-Art und kein Artenprozentsatz. |

## 17. Feature-spezifische Anforderungen

Emoji-Vorkommenseinheit DC-10 und Hauptlisten-Gruppierung F-EMOJI-01 sind approved. Nur kosmetische Varianten derselben Bedeutung werden zusammengeführt. Die versionierte Familienzuordnung muss nachvollziehbar sein und Gegenbeispiele für ZWJ/Gender, Flaggen und Keycaps enthalten. Unklare Zuordnung nicht in eine generische Familie raten. Keine Reaction-/Sticker-Ausnahme. Keine konkrete Bibliothek vorgeschrieben.

# 18. Freigabestand

F-PRIME-01 und F-EMOJI-01 sind `approved`; es bestehen keine verbleibenden Produktentscheidungen dieses Free-Vertragsblocks. Die geänderte Emoji-Regel betrifft die Hauptlistenaggregation, nicht die Anzahl vollständiger Emoji-Vorkommen. Alle anderen Regeln und Sollfälle bleiben freigegeben.

Zusätzliche verbindliche Emoji-Sollfälle:

| ID / Fall | Eingabe | Exakt erwartetes Ergebnis |
|---|---|---|
| EM-SKIN Hautfarben | 👍×2, 👍🏻×1, 👍🏽×3 | E=6; Hauptfamilie 👍=6/6=100 %. Drilldown 2/1/3, Summe6; keine zusätzlichen Vorkommen. |
| EM-FAM Familienanteil | 👍×2, 👍🏽×1, 😂×2 | E=5; 👍-Familie3/5=60 %, 😂2/5=40 %. Daumen-Drilldown2/1. |
| EM-PRES Darstellung | Zwei als Emoji identifizierte Herzvorkommen, einmal mit und einmal ohne Präsentationsselektor | E=2; eine Herzfamilie mit2; Originalsequenzen getrennt nachweisbar, keine zweite inhaltliche Art nur wegen Darstellung. |
| EM-DIST Inhaltlich getrennt | 👩‍💻, 👨‍💻, 🇩🇪, 🇬🇧, 1️⃣, 2️⃣ jeweils1 | E=6; sechs getrennte Hauptarten je1/6; keine generische Berufs-, Flaggen- oder Keycap-Familie. |

**Abschluss:** Sechs fachlich freigegebene Verträge. Keine Formeln implementiert, keine Registry und keine Tests/Baselines geändert. Die Dokumentbeispiele sind noch keine ausgeführten Anwendungstests.


# Semantische Analyseverträge V1

Stand: 04.11.2026. **Fachlich freigegebene V1-Verträge (SEMANTIC-V1 = approved), keine Implementierung.**

Verbindliche Grundlagen: [Decision Log](V1_PRODUCT_DECISIONS.md), [Semantic-/AI-Qualität](SEMANTIC_CLASSIFICATION_AND_QUALITY_RULES.md), [Daten/Zählung](DATA_AND_COUNTING_RULES.md), [Gespräch/Antwort](CONVERSATION_AND_RESPONSE_RULES.md), [MVP-Abnahme](MVP_SCOPE_AND_ACCEPTANCE.md), [Free](ANALYSIS_CONTRACTS_FREE_V1.md), [Basic](ANALYSIS_CONTRACTS_BASIC_V1.md), docs/PRODUCT_SPEC.md, docs/ANALYSIS_RULES.md und docs/UX_RULES.md. Approved DC-/CR-/Free-/Basic-Regeln sowie SQ-AUTO-01, SQ-COUNT-01 und SQ-CRITICAL-01 bleiben unverändert. Historische Offenhinweise in älteren Grundlagen werden durch den Decision Log überstimmt.

**Verbindlichkeit:** Die sieben Definitionen Q-DEFINITION-01, NAME-DEFINITION-01, TOPIC-DEFINITION-01, SOCIAL-DEFINITION-01, EVENT-DEFINITION-01, HUMOR-DEFINITION-01 und TOPICSTART-DEFINITION-01 sind ausdrücklich approved, einschließlich Ontologien, Einheiten, Zähler/Nenner, Multi-Label, Kontext, Korrekturen und synthetischer Goldbeispiele. Q-QUALITY-SEM-01 ist mit der unten dokumentierten Release-Regel approved. SEMANTIC-V1 umfasst questions, names, topics, social, lifeevents, humor und topicstarts. Historische Formulierungen „Vorschlag/Empfehlung“ innerhalb der freigegebenen Inhalte bezeichnen deren Herkunft, keine offene Entscheidung. Keine Legacy-/Mockzahl ist Formel oder Goldstandard. Keine Implementierungsfreigabe und kein Nachweis erreichter Modellqualität.

## Gemeinsame Auswertungs- und Abnahmeregeln

### Identität, Scope und Rollen

P ist der globale Zeitraum: Gesamt / 7 / 30 Tage / 3 / 12 Monate / Custom. Relative Grenzen folgen chat_end, nicht heute; Kalendergrenzen und Präzision folgen DC-05–07 und Free. Gesamt kann geeigneten undatierten Text enthalten. Undatierter Text erhält keinen erfundenen Platz in einem begrenzten Zeitraum. Fehlende Quellen-/Sprachabdeckung wird zusätzlich zu Klassifikationsabdeckung gezeigt.

Eine Einheit referenziert tatsächliche MessageIds, ausgewertete Fassungen und gegebenenfalls exakt belegte eigene Segmente. Segmentanker sind keine Arraypositionen oder Textanfangs-Heuristiken. Unaufgelöste Identität bleibt unresolved. Beispiele wie Q1 sind ausschließlich lokale synthetische Referenzen, keine Produktions-IDs.

A/B sind bestätigte Identitäten. Autor, Adressat und erwähnte Person sind getrennte Rollen; C ist Kontext, keine zusätzliche A/B-Person. Fremdzitate und Weiterleitungen sind Kontext, nicht eigene Sprache. Eigene Kommentierung ist separat auswertbar. Reactions/Medieninhalt erhalten keine neue Semantik; eigener Text/Caption gemäß DC-01/03. Keine Provider-/Modell-/Promptwahl.

### Gemeinsame Mengen — je Label oder exklusiver Labelgruppe

G0 = identifizierbare, strukturell geeignete Zieleinheiten in P vor fachlichem Ausschluss. X = explizit ausgeschlossene Einheiten für genau diese Wertung. G = G0 ohne X ist die bereinigte geeignete Grundmenge. X bleibt mit Grund und Rohbasis sichtbar; kein Ausschluss als negatives Label.

G zerfällt disjunkt in P+ (gültig positiv), N− (gültig negativ), R (ungeprüft/Review/uncertain) und U (unresolved mit bekannter Zieleinheit). D = P+ ∪ N−. Anteil = |P+|/|D|, Entscheidungsabdeckung = |D|/|G|. Nenner 0 ergibt keinen Prozentwert. Excluded bleibt eigene Kategorie; wenn eine bekannte Einheit ihren Bezug verliert, bleibt sie U. Sind bereits Anzahl oder Identität der Zieleinheiten unbekannt, ist die betreffende Abdeckung **unbestimmt**, kein erfundener Nenner. Separat dokumentierte unsupported-/fehlende Quellbereiche machen eine Teilanalyse, keine Vollständigkeit.

Bei Multi-Label gelten G, X, D, R, U **pro Label**. „Keines“ ist nur gültig, wenn alle angebotenen Klassen für die Einheit geprüft negativ sind. Eine negative Klasse darf nie aus Nichtabruf oder fehlendem Modelloutput entstehen. Gesamtzustände über mehrere Labels bilden disjunkte Kategorien durch Priorität: unresolved, dann Review, dann vollständig entschieden; labelbezogene Mengen bleiben zusätzlich erreichbar.

Personenanteile an positiven Ereignissen sind etwas anderes als positive Quoten über D. Sie werden als „Anteil an den gewerteten [Fragen/Anreden/Starts]“ bezeichnet und mit A/B-Counts sowie Abdeckung beider Personen gezeigt. Kein Interesse-, Zuwendungs- oder Charakterranking. Bei nicht vollständig entschiedener Basis nur Teilmengenquote, direkt neben der Zahl benannt. Vollständige Quote erst bei vollständig entschiedenem erforderlichem Scope.

### Kontext ohne pauschalen Whole-Chat-Prompt

Die folgenden Featureverträge geben fachliche Kontextgrenzen vor. Minimal genügender eigener Text wird mit exaktem Reply-Ziel und notwendigem CR-01-Block erweitert. Begründete Erweiterung auf die bezeichnete Gesprächssequenz ist erlaubt, kein beliebiges Fenster über fremde Chats. Vorherige und folgende Beiträge nur soweit für konkrete Referenz, Ironie oder Fortsetzung notwendig. Herkunft, Umfang und Kontext außerhalb P anzeigen. Eine lange Sequenz darf vollständig verarbeitet werden, wird aber nicht ohne Bedarf pauschal Modellkontext.

Fehlende notwendige Vorgeschichte, nicht verfügbare Replies, Importgrenzen oder offene Sessionzuordnung erzeugen R/U, nicht einen negativen Befund. Fehlender Folgetext blockiert eine bereits explizite Aussage nicht automatisch; er blockiert nur davon abhängige Interpretation. Neue relevante Kontextdaten invalidieren betroffene Abhängigkeiten.

### Korrektur, Evidence und Ergebniszustände

Für jede Funktion gelten: vollständige Einheiten-/Nennerlisten mit Labels, Originalen, Sender-/Zielrollen, Zeitpräzision, Kontext, Confidence/Review, Modell-/Regelversion und Nutzerentscheidung; Pagination/Filter nach Person, P, Label, Status und Confidence. Jeder sichtbare Chattext führt exakt zur Quelle und zurück. Kein Top-k ersetzt vollständige Evidence.

Bestätigen, ausschließen, wieder einbeziehen, zulässig reklassifizieren, Zielperson korrigieren und Undo journalisieren pro Chat/Dyade. Label entfernen bedeutet explizit negativ, falls der Nutzer genau das entscheidet; „unklar“ ist Review, „aus Wertung“ ist X. Keine stillen Bedeutungswechsel dieser Aktionen. Original bleibt unverändert. Reanalyse aktualisiert echte Mengen, Nenner, Dashboard und Begleiter-Ergebnisstand; Fehler/veraltete Resultate nicht als fertig zeigen. DC-13 gilt auch für nötigen Kontext. Identischer Wiederimport verändert keine Zählung/Korrektur; Replace mit verlorener Referenz erzeugt U. Keine blinde Übertragung bei Dyadenwechsel.

Zustände sind teilbereichsbezogen:
- available: mindestens eine gültige Entscheidung oder belegter Nullbefund bei ausreichend geprüfter Basis; n und Abdeckung sichtbar.
- insufficient-data: benötigte Struktur/Belegmenge fehlt; keine Ersatznull.
- not-applicable: keine geeignete Zielmenge oder definierter Nenner 0.
- unsupported: benötigte Sprache/Quelle nicht unterstützt, Teilbereich benannt.
- error: Verarbeitung fehlgeschlagen, kein negatives Label.
- review-required: relevante R/U verhindern die gewünschte Aussage; gültige Teilmengen bleiben als solche sichtbar.
Loading und stale sind technische Laufzustände, kein semantisches Ergebnis. Eine Featurefreigabe/Plansperre ist ein davon unabhängiger Zustand.

### Gemeinsame Evaluation und Leseschlüssel für §19

Alle unterschiedlichen Grenzwerte sind unter **Q-QUALITY-SEM-01 als versionierte V1-Releaseziele approved**, keine behaupteten Messwerte oder Confidence-Cutoffs. Critical Errors = 0 bleibt unverändert durch SQ-CRITICAL-01 verbindlich. P/R/F beziehen sich auf Precision/Recall/F1, nicht Zeitraum P. Werte pro Klasse **und DE/EN separat**, Mischsprache eigener Challenge-Slice; keine gute Gesamtzahl kompensiert eine nicht bestandene Klasse. Nicht unterstützte Bereiche ausdrücklich sperren. Metriken werden Ende-zu-Ende einschließlich Einheitenfindung gemessen; positives Gold mit nicht gefundenem/abstiniertem Kandidaten bleibt Recallverlust. Human-in-the-loop-Güte separat, keine Nutzerbestätigung als Modellleistung.

„Auto-P“ bezeichnet Präzision akzeptierter positiver High-Zuordnungen. Automatische negative Entscheidungen benötigen zusätzlich eine eigene Auswertung: Anteil tatsächlich positiver Goldfälle, die automatisch negativ gesetzt wurden, höchstens 1 % (Empfehlung); außerdem klassenspezifischer Gesamt-Recall. Bei seltenen Klassen ist negative Vorhersagegüte allein ungeeignet. Review/Abstention/Auto-Coverage mit deklarierten Nennern berichten. Keine pauschale maximale Reviewrate erzwingen: Bei schwierigen Fällen ist Review korrekt. Keine Mindest-Auto-Coverage versprechen, bevor sie gemessen ist; ohne beobachtbare Auto-Fälle keine Auto-Freigabe.

Freigegebenes statistisches Abnahmeverfahren als Zielzustand: vorab fixierte unabhängige Testdaten, nach Chat/Beziehungsbestand getrennt von Entwicklung/Kalibrierung, unabhängige Annotation und adjudizierte Konflikte. Bei Precision/Recall/Auto-P muss die **untere einseitige 95-%-Konfidenzgrenze** die genannte Grenze erreichen; chatabhängige Beobachtungen beim Unsicherheitsverfahren berücksichtigen. F1 als Punktschätzung plus Unsicherheitsintervall berichten. Für den Fehleranteil automatischer Negative gilt entsprechend die obere Grenze. Stichprobengröße vorab anhand Klassenhäufigkeit/Präzision planen, keine pauschale Mindestzahl erfinden; fehlende Fälle blockieren die jeweilige Auto-Klasse. Dieses statistische Abnahmeverfahren gehört zum freigegebenen Qualitätspaket und bleibt Zielzustand.

Critical Errors = **0 beobachtet** nach SQ-CRITICAL-01 ist bereits approved: unabhängiger finaler Abnahmesatz plus gezielte Integritäts-/Sicherheitstests, dokumentierte Stichprobengröße/Aussagegrenze. Keine universelle Fehlerfreiheit. Die unten aufgeführten Risiken ergänzen, ersetzen aber nicht den gemeinsamen Katalog.

# questions — Wer will mehr wissen?

## 1. Nutzerfrage
Wer formuliert wie viele echte an die andere Person gerichtete Fragen im verfügbaren Chat? Keine Question Dynamics, keine Antwort-/Unbeantwortetquote und kein Beweis für Interesse.

## 2. Klassifikationseinheit
Vorschlag Q-DEFINITION-01: **Frageakt als eigenes Textsegment**, gegebenenfalls über unmittelbar zusammengehörige Nachrichten desselben CR-01-Blocks. Ein Akt verlangt eine eigenständig beantwortbare Information oder Planentscheidung. „Wo und wann treffen wir uns?“ sind zwei Einheiten; „Kommst du morgen oder Freitag?“ eine Alternativfrage. Wiederholung/Umformulierung derselben Frage im selben Block ist ein Akt mit mehreren Originalsegmenten; erneutes Fragen in einem späteren Block ein neuer beobachteter Akt. Unklare Abgrenzung R. Zusätzlich vollständige Quellprüfung aller eigenen semantisch geeigneten Nachrichten; so verschwinden unerkannte Fragen nicht aus dem Abdeckungsnachweis.

## 3. Label-Ontologie
IDs gelten im Namespace questions; Umbenennung in der UI verändert sie nicht. Typen der Frageakte sind exklusiv, Herkunft/Zielrolle separat. Bei Kombination Planung + Klärung entscheidet der Kern: Rückfrage zur bereits geäußerten Information = clarification; neue Planentscheidung = planning; sonst genuine_information.

| Stabile ID / Bedeutung | Positiv und Beispiel | Ausschluss / negatives Beispiel | Mehrdeutig / Rolle |
|---|---|---|---|
| genuine_information_question / Informationsfrage | Eigene echte Informationsbitte: „Wie war dein Tag?“; auch „Sag mir bitte, wie es lief“ | Reine Handlungsbitte „Mach das Fenster zu“; keine Informationsantwort verlangt | „Na?“ ohne Kontext R; Autor A/B, Adressat jeweils Gegenperson |
| clarification_question / Rückfrage | Klärt vorherigen Inhalt: „Meinst du Dienstag?“ | Bloßes „Dienstag.“ oder neue unabhängige Planung | Fehlender Bezug „Welches?“ R; Reply-/Bezugsrolle belegen |
| planning_question / Planungsfrage | Verlangt gemeinsame Planwahl: „Treffen wir uns Freitag?“ | Feststellung „Wir treffen uns Freitag“ | „Irgendwann mal?“ ohne Planbezug R |
| rhetorical_question / Rhetorische Frage | Keine echte Antwort verlangt: „Wer hätte das gedacht!“ im eindeutigen Ausrufkontext | Echte „Wer hat das gemacht?“ | „Muss das sein?“ kann echte Frage sein → R |
| quoted_question / Zitierte Frage | Frage nur als Fremdzitat: „C schrieb: Wie geht es dir?“ | Eigener Zusatz „Und wie geht es dir?“ separat positiv | Unklare Zitatgrenze U/R; kein A/B-Autor der zitierten Frage |
| third_party_question / Frage an Dritte | A fragt ausdrücklich C: „C, kommst du?“ | A fragt B über C: „Wann kommt C?“ bleibt echte A→B-Frage | Unklarer Gruppenadressat R |
| uncertain_question / Unklare Frage | Frageakt/Intention nicht entscheidbar | Klarer Aussagesatz ist nicht uncertain | „Echt jetzt?“ ohne Kontext; Review, kein positiver Typ |
| not_question / Keine Frage | Geprüfte Aussage „Ich bin zuhause“ auf Quellnachrichtenebene | Informationsbitte ohne Fragezeichen | Unvollständiger Satz R; keine künstliche Frageeinheit |

quoted/third_party/rhetorical sind gültige negative Entscheidungen für die Hauptwertung, keine interessenbezogenen Negativurteile. quoted/third_party sind erklärende Ausschlussmerkmale und können mit einem erkannten Fragetyp koexistieren; Hauptzählung bleibt eine Einheit.

## 4. Kontextvertrag
Eigener Frageabschnitt und kompletter eigener Block; für clarification zwingend Bezugsbeitrag/Reply-Ziel. Vorheriger und nächster reagierender Block derselben Gesprächslinie dürfen Rhetorik/Adressat klären; nötigenfalls belegte Gesprächssequenz, keine automatische Suche durch den ganzen Chat. Dritte ausdrücklich rollengetrennt. Außerhalb P liegende Quellen nur gekennzeichneter Kontext. Unvollständiger Importbeginn macht bezugsabhängige Rückfrage R/U, eine vollständige „Wie heißt du?“ nicht automatisch unwertbar.

## 5. Kandidatenerkennung
Fragezeichen, Fragewörter und Anfrageformulierungen sind Hinweise, kein vollständiger Filter. Alle geeigneten eigenen Texte müssen auf Frageakte geprüft werden, einschließlich indirekter Fragen ohne Satzzeichen, DE/EN und Nachträge. Nicht abgerufene Nachrichten bleiben ungeprüft. Top-k-Suche genügt weder für Zähler noch Quellabdeckung.

## 6. Zähler und Nenner
Zwei klar benannte Ebenen:
1. Quellnachrichten S: eigene geeignete Texte A/B in P. Vollständig auf Frageakte geprüft versus R/U/X; Prüfquote zeigt durchsuchte Quelle. Eine geprüfte Nachricht ohne Frage ist negativer Quellfall.
2. Erkannte eindeutige Frageakte G0: Hauptpositive P+ = eigene echte Informations-, Klärungs- oder Planungsfragen an Gegenperson; N− = sichere rhetorische/zitierte/an Dritte gerichtete Akte. R/U/X nach gemeinsamer Regel. Diese Akt-Abdeckung ist **keine** Garantie vollständiger Erkennung; Quellabdeckung daneben.
Q_A/Q_B zählen P+ nach Autor; Anteil A = Q_A/(Q_A+Q_B), analog B, bei positivem Nenner. Optional „Fragen je 100 vollständig geprüfte eigene Textnachrichten“ = 100×Q_p/|S_p, vollständig entschieden|; nur Akte aus genau diesen Nachrichten einbeziehen, über mehrere Nachrichten gespannte Akte einmal am Start zählen. Nachrichten mit offenen Frageanteilen bleiben aus dieser Rate, ihre Menge sichtbar. Hauptcount kann gültige Akte aus partiell entschiedenen Nachrichten enthalten, Rate benennt die engere Basis. Kein Quotient Fragen/alle Nachrichten als vollständige Prävalenz.

## 7. Multi-Label
Drei Hauptfragearten pro Akt exklusiv; mehrere unabhängige Akte pro Nachricht erlaubt. Herkunft/Zielrolle orthogonal. Drei Darstellungen eines Aktes erzeugen keine drei Fragen. Ein Fragetypwechsel verschiebt Unterklasse, nicht zwangsläufig Q.

## 8. Confidence und automatische Übernahme
Drei echte Typen und sichere rhetorische Abgrenzung können später Auto-High nach SQ-AUTO-01 erhalten. Zitat-/Adressatenausschluss benötigt gesicherte Quelle/Rolle. Unklarer Adressat, Ironie oder Fragment zuerst Review; uncertain nie Auto-positiv/negativ. Nutzerentscheidung vorrangig.

## 9. Nutzerkorrekturen
Bestätigen, Frageart ändern, Adressat korrigieren, ausschließen/Undo. Akte bei falscher Segmentierung ausdrücklich teilen/zusammenführen mit allen Quellreferenzen; kein frei erfundener Fragetext. Fragetypen nicht addieren, orthogonale Herkunft korrigierbar.

## 10. Reanalyse
Segmentierung, Typ, Adressat oder X verändern Q, Unterklassen, Quellstatus, Rate und Anteile. P/Import/Quellkorrektur prüft betroffene Blöcke plus referenzierte Nachbarbeiträge. Snapshot/Begleiter invalidieren; keine automatische Änderung von Response, Move oder Topic Starts allein wegen eines Frageetiketts. Diese konsumieren ihre eigenen freigegebenen Beziehungen.

## 11. Evidence
Alle gezählten Frageakte inklusive aller Segmente; Quellliste auch geprüfte Nichtfragen, negative Akte, R/U/X. Mehrere Akte derselben MessageId mit markiertem Ausschnitt. Sprung zur exakten Nachricht und Rückkehr. Beispielauswahl ersetzt keine Liste.

## 12. Zeitraum
Gemeinsame Presets. Akt zählt am ersten eigenen Segment; spätere Segmente dürfen nur Kontext sein, wenn sie außerhalb P liegen. Wird ohne diese Segmente erst eine andere Frage gebildet, Grenze/Zuordnung als partiell markieren, kein vollständiger In-P-Akt behaupten. Q-DEFINITION-01 empfiehlt für solche grenzüberschreitenden Akte R bis vollständiger In-P-Zielumfang; keine zusätzliche Zählung im Folgemonat. Undatierte Akte nur Gesamt.

## 13. Person A / B / Dritte
A→B und B→A getrennt. Frage über C an B zählt; Frage von/an C nicht. Gruppenadressat „ihr“ ohne eindeutige Gegenperson R. Quelle C bleibt Kontext.

## 14. Mindestdaten und Zustände
Ein gültiger Akt erlaubt Count mit n, keine Siegerinterpretation. Vollständig geprüfte Quellmenge ohne Fragen: Q=0 available, Personenanteil not-applicable. Leere Textbasis not-applicable; unaufgelöste Akte review-required; fehlender Kontext insufficient-data für betroffenen Teil. Unsupported/error nach gemeinsamer Regel.

## 15. Darstellung
A/B-Counts, drei Arten, Anteil an gewerteten Fragen, direkt sichtbare offene Fälle und Quellenprüfung. Bei Rate klare Einheit „je 100 geprüfte Textnachrichten“, kann über 100 liegen. Touch-Beleglisten auf 390–430 px, keine Aussage „A interessiert sich mehr“.

## 16. Methodiktext
„Wir zählen eigenständige echte Fragen an die jeweils andere Person. Eine Nachricht kann mehrere Fragen enthalten. Zitate, Fragen an Dritte und rein rhetorische Fragen zählen nicht mit. Offene Zuordnungen zeigen wir separat.“

## 17. Synthetische Goldbeispiele
Alle erwarteten Outputs gelten **unter dem freigegebenen Vertrag**, nicht als Modellmessung.

| Fall | Synthetische Quelle | Erwartung |
|---|---|---|
| Q-P positiv | A/Q1 „Wo wohnst du? Wie alt bist du?“ an B | Zwei genuine_information, Q_A=2 |
| Q-N negativ | A/Q2 „Ich wohne hier.“ | not_question, geprüfte Quelle, Q=0 |
| Q-U mehrdeutig | A/Q3 „Echt jetzt?“ ohne Vorgeschichte | uncertain_question, R |
| Q-D Dritte | A/Q4 „C, wann kommst du?“; A/Q5 an B „Wann kommt C?“ | Q4 third_party, nicht Hauptcount; Q5 genuine_information |
| Q-R Zitat/Reply | A/Q6 zitiert C „Wo bist du?“ und ergänzt „Meinst du mich?“ an B | Zitat nicht zählen; eigener Zusatz clarification bei belegtem Bezug |
| Q-I Ironie | A/Q7 „Wer hätte das gedacht!“ eindeutiger Ausruf | rhetorical, Hauptcount 0; ohne Ausrufkontext R |
| Q-L gemischt | B/Q8 „Wo bist du and when are you back?“ | Zwei echte Frageakte, Mischsprachprüfung |
| Q-C Korrektur | Q7 als echte Frage bestätigt | N−→P+, Q_A +1, Journal/Undo zurück |
| Q-T Grenze | Frage in P, beantwortender Kontext davor/nach P; vollständige Frage in P | Frage zählt, Antwort nicht als Frage; Kontext markiert |
| Q-A Update | Identischer Q1 erneut importiert; später Q1 „Wo wohnst du?“ | Wiederimport weiterhin 2; echte Bearbeitung neu segmentieren, 1 gültiger Akt nach Prüfung |
| Q-B Block | A „Wo bist du?“ / „Also, wo genau?“ im selben Block, gleiche Antwort gesucht | Ein präzisierter Akt mit zwei Quellen, nicht zwei |
| Q-Z Zählung | 10 geeignete Akte, 2 echte, 6 sicher ausgeschlossen vom Haupttyp, 2 offen | 25 % echte unter 8 entschiedenen Akten, 80 % Akt-Abdeckung; kein „20 % im Chat“ |

## 18. Evaluation
Exact-Match der Frageakte mit Quell-/Segment-/Adressatenrollen, pro Typ P/R/F, Erkennungs-Recall über gesamte Quelle, Doppelzählung, Quoten-/Abdeckungsrekonstruktion. Challenge: indirekte Fragen, mehrteilige Blöcke, Alternativen, Rhetorik, Reply/Zitat, Gruppen, Code Switching, Randakte. Hauptfrage-Erkennung braucht hohen Recall; rhetorische Ausschlüsse brauchen hohe Precision, damit echte Fragen nicht verschwinden. Falscher Original-/Personenbezug ist kritisch.

## 19. Numerische Release-Grenzen
Freigegebene V1-Releaseziele Q-QUALITY-SEM-01, nach gemeinsamem Messverfahren:

| Klasse/Teil | P mindestens | R mindestens | F1 mindestens | Auto-P mindestens |
|---|---:|---:|---:|---:|
| genuine_information_question | 95 % | 93 % | 94 % | 99 % |
| clarification_question | 95 % | 90 % | 92 % | 99 % |
| planning_question | 96 % | 90 % | 93 % | 99 % |
| rhetorical_question als Ausschluss | 98 % | 85 % | 91 % | 99,5 % |
| quoted_question / third_party_question, jeweils | 99 % | 95 % | 97 % | 99,5 % |
| Alle echten Frageakte, Ende-zu-Ende | 95 % | 95 % | 95 % | gemäß jeweiliger Klasse |

not_question als automatische Negativentscheidung unter gemeinsamer 1-%-Fehlerrate und Gesamt-Recall prüfen. uncertain ist Abstention, keine Auto-Klasse; Gold-ambige Fälle dürfen nicht automatisch als sicher ausgegeben werden. Kritische Fehler 0. Höhere Ausschlusspräzision schützt echte Fragen; niedrigere Rhetorik-Recallgrenze erlaubt Review statt riskanter Wertung.

## 20. Dashboard Snapshot
Optional „Gewertete Fragen: A n · B m“, Zeitraum und offene Fälle sichtbar; Tap zur vollständigen Analyse. Kein Interessen-Score.

# names — Name Game

## 1. Nutzerfrage
Wie sprechen A und B einander im Chat an? Unterscheidet direkte Anrede und Erwähnung; keine Messung tatsächlicher Nähe oder Zuneigung.

## 2. Klassifikationseinheit
NAME-DEFINITION-01: **Anredevorkommen als eigenes Segment mit Autor und Zielperson**. „Sarah, Sarah!“ sind zwei lexikalische Vorkommen, aber ein zusammenhängender Anredeakt; V1 zählt einen Akt je ununterbrochener Anredegruppe. „Hey Sarah, danke. Sarah, kommst du?“ sind zwei getrennte Akte. Variantenlisten zeigen Akte, nicht ungeklärte Tokenzahlen. Ein bloßer Name wird zunächst als Erwähnungskandidat geprüft.

## 3. Label-Ontologie
Namespace names. Hauptklassen der Anrede exklusiv mit Vorrang affectionate > nickname > direct_name > generic, sofern die spezifischere Bedeutung belegt ist. Alternative Vorschläge bleiben Review. Herkunft/Rolle getrennt.

| ID / Bedeutung | Positiv und Beispiel | Ausschluss / negatives Beispiel | Mehrdeutig / Rolle |
|---|---|---|---|
| direct_name_address / Namensanrede | „Sarah, kommst du?“ bei bestätigter B=Sarah | „Sarah fährt morgen“ nur Bericht | Gleicher Name bei C → Zielreview |
| nickname_address / Spitznamenanrede | „Sasa, kommst du?“ bei bestätigtem Alias B, nicht als Kosename belegt | Ungewöhnliches Wort ohne Aliasbeleg | „Professor?“ ohne Anredekontext R |
| affectionate_address / Kosenamenanrede | „Schatz, kommst du?“ als belegte Anrede an B | „Mein Schatz liegt im Tresor“ | Ironisches „Schätzchen“: Form/Adressat prüfen, keine echte Zuneigung ableiten |
| generic_address / Allgemeine Anrede | „Hey du, kommst du?“ eindeutig B | Pronomen „du“ im normalen Satz allein | „Leute!“ in Gruppe → nicht dyadisch |
| mention_of_other_person / Erwähnung der Gegenperson | A spricht über B „Sarah fährt morgen“ | Direkter Vokativ „Sarah, …“ | Ob A B anspricht oder C berichtet, bei fehlendem Kontext R |
| mention_of_third_person / Drittpersonenerwähnung | „Meine Schwester Sarah fährt“ mit belegtem C | Gesicherte B-Anrede | Namensgleichheit ohne Rollenklärung R |
| quoted_address / Zitierte Anrede | Fremdzitat „Schatz, komm her“ | Eigene Kommentierung getrennt | Unklare Zitatgrenze U/R |
| ambiguous_address / Unklare Anrede | Mehrdeutiger Alias/Adressat | Eindeutig bloße Sachnennung | R, kein Hauptcount |
| no_address / Keine Anrede | Vollständig geprüfter eigener Text „Es regnet“ | Expliziter Vokativ | Quellnachrichtenstatus, kein erfundener Anredeakt |

Anrede an C ist mit Zielrolle C ein gültiger Nichttreffer für A→B; kein Zwang, sie als Erwähnung umzubenennen. Bestätigte Aliaszuordnung folgt DC-04, nicht einer Modellvermutung über Schreibähnlichkeit.

## 4. Kontextvertrag
Eigener Abschnitt plus Nachricht; bestätigter Name/Alias und explizite Adressierung. Bei Unklarheit Reply-Ziel, vorheriger/nächster relevanter Block derselben Gesprächslinie; für Alias-/Kosename nur konkret referenzierte weitere Belege oder Nutzerentscheidung. Keine gesamte Chatlektüre als Standardkontext. Außerhalb P liegender Aliasbeleg darf markiert Kontext sein, kein Anredecount. Fehlende Gruppen-/Zitatkontexte R/U; Importbeginn allein schafft keinen Alias.

## 5. Kandidatenerkennung
Namen/Aliase, Vokative, Anredelexikon vorfilterbar. Sämtliche eigenen semantischen Texte prüfen, um neue/unbekannte Anreden zu finden; Wörterbuch allein begrenzt Recall. Trefferlisten nicht über Textpräfixe verknüpfen. Nicht geprüfte Quellen sichtbar.

## 6. Zähler und Nenner
Quellbasis S = geeignete eigene Texte, Prüfstatus separat. Aktbasis G0 = alle erkannten Anrede-/Namensreferenzakte, X/G/D/R/U wie gemeinsam. P+ = vier direkte Anredeklassen mit Ziel Gegenperson, N− = bloße Erwähnungen, Zitate und Anreden an C. Count je Autor→Ziel und normalisierter belegter Anredeform; Originalvarianten erhalten. Keine automatische Zusammenführung unbekannter Aliase. Anteil einer Anredeklasse = deren Akte / alle gültigen positiven dyadischen Anredeakte; als Verteilung gewerteter Anreden bezeichnen. Offene Akte plus Quellenabdeckung daneben. Persönliche Liste A→B enthält niemals B→A/C-Treffer.

## 7. Multi-Label
Ein Akt eine Hauptanredeklasse, mehrere Akte pro Nachricht möglich. Affectionate nicht zusätzlich als nickname zählen. Formvarianten-/Aliasgruppe ist Gruppierung derselben Akte, kein weiterer Treffer.

## 8. Confidence und automatische Übernahme
Direktname und generische Anrede können qualifiziert Auto-High werden; nickname nur bei gesicherter Aliasidentität. Affectionate-Kontextklasse ebenfalls nur klassenbezogen evaluiert, unbekannte Aliasverknüpfung zuerst bestätigen. ambiguous immer Review. High darf keine neue Teilnehmeridentität still festlegen.

## 9. Nutzerkorrekturen
Klasse/Formgruppe/Ziel korrigieren, Alias bestätigen, Akte teilen/zusammenführen, ausschließen/Undo. Senderkorrektur separater Datenvorgang. Keine freie Kosenameklasse außerhalb Ontologie. Einheitenzusammenführung bewahrt alle Belege.

## 10. Reanalyse
Ziel/Alias/Art verändert persönliche Listen, Klassenanteile, Snapshot/Begleiter. Aliasentscheidung prüft tatsächlich abhängige Vorkommen auch außerhalb aktuell sichtbarer Seite, aber nicht sämtliche Themen. Kosenamen-Event oder Insider wird nur als abhängig neu geprüft, niemals automatisch bestätigt. Inhalt/Reply/Importänderung nach DC-13.

## 11. Evidence
Vollständige Anredeakte je Autor→Ziel mit Varianten, gesicherter Aliasgrundlage, Originalsegment und Kontext. Negative/R/U/X und geprüfte Quellbasis zugänglich. Kein allgemeiner Beispielbeleg für eine andere Anrede.

## 12. Zeitraum
Akte nach eigenem Segment in P; Referenzbelege eines Alias dürfen außerhalb markiert sein. Gesamt erlaubt undatierte eigene Anreden; begrenztes P nicht. Keine Erweiterung der persönlichen Zählung durch Kontext.

## 13. Person A / B / Dritte
Autor, Vokativziel und erwähnte Person getrennt. „Sarah fährt“ ist nicht automatisch Anrede, auch wenn B Sarah heißt. Gruppenmehrzahl oder gleichnamige C nicht B zurechnen.

## 14. Mindestdaten und Zustände
Ein gesicherter Akt erlaubt Liste/count. Vollständig geprüfte Quelle ohne Anrede: 0 available; Klassenverteilung not-applicable. Fehlende Aliasgrundlage review-required, leere eigene Textbasis not-applicable; unzureichender nötiger Kontext insufficient-data. unsupported/error separat.

## 15. Darstellung
Zwei beschriftete Listen „A nennt B …“ und umgekehrt, Counts in Anredeakten, Klasse optional, Originalvarianten im Detail. Initialen/Bild sinnvoll zu Personen; Abdeckung/Review direkt. Kein Nähe-Ranking.

## 16. Methodiktext
„Wir unterscheiden direkte Anreden von bloßen Erwähnungen und Zitaten. Ähnliche Namen gehören nur bei geklärter Zuordnung zusammen. Kosenamen beschreiben eine verwendete Anredeform, nicht bewiesene Gefühle.“

## 17. Synthetische Goldbeispiele

| Fall | Quelle | Erwartung |
|---|---|---|
| N-P | A/N1 „Sarah, kommst du?“; B bestätigt Sarah | direct_name_address, A→B 1 |
| N-N | A/N2 „Es regnet.“ | no_address, 0 |
| N-U | A/N3 „Professor!“ ohne Kontext | ambiguous_address, R |
| N-D | A/N4 „Meine Schwester Sarah fährt morgen“; B andere Identität | mention_of_third_person, 0 |
| N-R | A/N5 zitiert C „Schatz“; eigener Text „Danke, Sarah“ an B | Zitat 0, eigener direct_name 1 |
| N-I | A/N6 „Na, du Genie“ nach Fehler, Ziel klar | generic/nickname nicht raten; Klasse Review bei ironisch mehrdeutiger Form, keine Begabungsbehauptung |
| N-L | A/N7 „Sarah, are you ready?“ | direct_name, Mischsprache; korrekte Zielperson |
| N-C | N1 Ziel zu C korrigiert | A→B −1, C-Rolle sichtbar, Undo +1 |
| N-T | Aliasbeleg vor P, Anrede in P | Nur Anrede zählt, Aliasbeleg markierter Kontext |
| N-A | Identischer N1 wieder; bearbeitet „Sarah fährt morgen“ | Wiederimport 1; Bearbeitung neu prüfen → mention_of_other_person, Count 0 |
| N-M | „Sarah, Sarah!“ als eine Gruppe | Ein Akt, zwei lexikalische Vorkommen nicht als zwei Akte |

## 18. Evaluation
Anredesegment-/Akt-Erkennung, Rollen-/Aliasgenauigkeit, Klassen-P/R/F, Varianten-Merge/Split, exakte persönliche Listen. Challenge: Namensgleichheit, indirekte Rede, Vokative ohne Komma, Ironie, seltene Spitznamen, beide Sprachen. Precision besonders wichtig bei Ziel/Kosename; Recall für bekannte Direktnamen höher priorisieren als erfundene neue Aliase. Falsche Person/Quote kritisch.

## 19. Numerische Release-Grenzen
Freigegebene V1-Releaseziele Q-QUALITY-SEM-01:

| Klasse, jeweils getrennt messen | P min. | R min. | F1 min. | Auto-P min. |
|---|---:|---:|---:|---:|
| direct_name_address | 98 % | 95 % | 96 % | 99,5 % |
| nickname_address | 97 % | 88 % | 92 % | 99,5 % |
| affectionate_address | 98 % | 85 % | 91 % | 99,5 % |
| generic_address | 95 % | 90 % | 92 % | 99 % |
| mention_of_other_person / mention_of_third_person / quoted_address | 99 % | 94 % | 96 % | 99,5 % |

no_address folgt Negativgate; ambiguous keine Auto-Klasse. Kritische Fehler 0. Alias-/Zielunsicherheit lieber reviewen als falsch personalisieren, deshalb konservativere Auto-P und geringerer Recall bei spezifischen Anredeformen.

## 20. Dashboard Snapshot
Keine Pflichtkarte; persönliche Anredeformen brauchen Kontext. Optional nur meistverwendete eindeutig zugeordnete Anrede je Richtung mit Count und gleichrangigen Formen, keine willkürliche Gewinnerin.

# topics — What We Talk About

## 1. Nutzerfrage
Welche Gesprächsgegenstände kommen in eigenen Beiträgen vor? Keine Bewertung tatsächlich empfundener Gefühle, Gesprächsqualität oder realer Zeitanteile.

## 2. Klassifikationseinheit
TOPIC-DEFINITION-01: **eigene semantisch auswertbare Nachricht** als feste Zähleinheit, Textsegmente als Beleg pro Themenlabel. Multi-Topic erlaubt. Das vermeidet willkürliche Token-/Satzgewichtung. Kurze Anschlussantwort „ja/okay“ übernimmt ein Thema nur bei gesicherter konkreter Reply-/Fortsetzungsrelation und eindeutigem Gegenstand, nicht bloß Nachbarschaft. Emoji-only erhält in V1 keine Themenwertung; keine Wort-/Daueranteile vortäuschen.

## 3. Label-Ontologie
Namespace topics, Version topic-v1. Alle Inhaltsklassen kombinierbar, wenn eigener Beitrag tatsächlich mehrere Gegenstände behandelt. „Sonstiges“ nur für verständlichen außerhalb dieser Klassen liegenden Gegenstand; unclassifiable ist Review, kein Sammeltopf für schwer klassifizierbare Sprache.

| ID / sichtbare Klasse | Positiv und Beispiel | Ausschluss / negatives Beispiel | Mehrdeutig / Rollen |
|---|---|---|---|
| work / Arbeit & Beruf | „Mein Projekt auf der Arbeit startet“ | Privates Bastelprojekt nicht automatisch Beruf | „Projekt fertig“ ohne Kontext R |
| everyday / Alltag & Organisation | „Bitte Milch einkaufen“ | Verabredung „Treffen Freitag?“ = meetings | „Liste fertig“ ohne Zweck R |
| meetings / Treffen & Planung | „Treffen wir uns Freitag?“ | Termin einer fremden Firma nur work, soweit keine eigene Treffenplanung | „Freitag?“ ohne Bezug R |
| travel / Reisen & Orte | „Wir fahren nach Berlin“ / „Berlin liegt an der Spree“ | Bloßer Straßenname in technischer Adresse kein eigener Inhalt | „Berlin!“ ohne Bedeutung R |
| leisure / Freizeit & Hobbys | „Ich gehe klettern“ | Beruflicher Sportauftrag nur work, außer Hobbybezug belegt | „Training“ ohne Kontext R |
| third_people / Familie, Freunde & Dritte | „Meine Schwester zieht um“ | „Sarah, kommst du?“ an B nicht allein wegen Namen | Gleichnamige Person unklar → R |
| health / Gesundheit & Wohlbefinden | „Ich habe Kopfschmerzen“ | „Krank gut!“ als Slang kein Gesundheitsinhalt | „Mir geht es komisch“ Kontext prüfen, keine Diagnose |
| media / Medien & Kultur | „Ich habe diesen Film gesehen“ | Link ohne eigenen Kommentar nicht Medieninhalt aus Website raten | „Das war gut“ ohne Bezug R |
| relationship / Gefühle & Beziehung als Thema | „Lass uns über unsere Beziehung reden“; „Ich bin traurig“ als berichteter Gegenstand | Keine Gefühle aus Antworttempo ableiten | „Alles komisch zwischen uns“ → belegt Gesprächsthema, konkrete Gefühle unklar |
| other / Sonstiges | „Die Primzahl 17 ist ungerade“ ohne weiteren Themenbezug | Kein Ersatz für fehlende Sprache/Quelle | Unbekanntes Fachwort ohne Sinn → R |
| unclassifiable / Unklarer Gegenstand | „Dings halt“ ohne ausreichenden Bezug | Verstandenes anderes Thema → other | Reviewstatus, kein positiver Themenanteil |
| no_topic / Kein eigener thematischer Gehalt | Eigenes isoliertes „Hallo“, ohne Themenreferenz | „Ja“ als gesicherte Antwort auf konkrete Reiseaussage kann travel sein | Fehlende Referenz nicht sicher no_topic |

Zielrolle ist Autor des Beitrags; Gegenstand kann A, B, gemeinsam, C oder unbestimmt betreffen. third_people kann neben travel etc. stehen. Unterthemen in V1 **nur optional nutzerbenannte Gruppierung unter einer festen Klasse**, keine automatisch frei erfundene Ontologie und kein Einfluss auf Hauptanteile; eigener Vorschlag im Entscheidungspaket.

## 4. Kontextvertrag
Nachricht plus eigener Block, bei Ellipsen Reply-Ziel und nötiger vorheriger/nächster Block derselben Gesprächslinie. Themenfortführung aus überprüfter Relation, nötigenfalls referenzierte Sequenz. Kein automatisches Vererben an alle späteren Nachrichten. Dritte/Quoted Reply nur Kontext. Außerhalb P liegender Ausgangsbeitrag darf Inhalt einer In-P-Antwort erklären, bleibt ungezählt. Importbeginn „okay“ ohne Bezug R.

## 5. Kandidatenerkennung
Alle geeigneten eigenen Textnachrichten werden klassifiziert. Keywords/Retrieval helfen Zuordnung, schließen aber kein Nichtkeyword-Dokument aus. Themen werden nicht nur aus häufigsten Wörtern abgeleitet; vollständiger Zielscope und unknown-Rest nachvollziehbar.

## 6. Zähler und Nenner
G0 = eigene semantische Textnachrichten A/B in P, auch kurze Texte; X per Label oder gesamte Themenwertung explizit. Für jedes t: P+_t = gültig mit t, N−_t = geprüft ohne t, R_t/U_t offen. Standardanzeige t-Anteil = |P+_t|/|D_t| und |D_t|/|G_t|; bei verschiedenen D_t keine direkt scheinbar gemeinsame Prozentverteilung. Vergleichsansicht optional auf derselben vollständig entschiedenen Nachrichtenmenge D_all mit allen angebotenen Labels geklärt; dann jede Themenquote |P+_t ∩ D_all|/|D_all|. no_topic kann gültig negativ für alle Themen sein. Mehrfachthemen können Summe >100 % ergeben. Keine Torte mit zwangsweise 100 %. Autorenanteile und Themenanteile getrennt.

## 7. Multi-Label
Mehrere Inhaltsklassen erlaubt; other nur wenn kein fester Themengegenstand passt, daher nicht gemeinsam mit festen Klassen. no_topic exklusiv zu positiven Themen. unclassifiable beschreibt offene Zuordnung; eine sichere travel-Zuordnung kann neben noch offenem work stehen, aber kein positives „unklassifizierbar“-Segment. Unterthema zählt Elternnachricht nicht zweimal.

## 8. Confidence und automatische Übernahme
Alle festen Inhaltsklassen grundsätzlich nach Evaluation Auto-High möglich. health/relationship bezeichnen ausschließlich Textgegenstand, keine echte Diagnose/Emotion. Unklare Kurzantworten/other-Grenzen Review, unclassifiable kein Auto-Thema. Optionales nutzerbenanntes Unterthema niemals vom Modell als genehmigte Hauptklasse erstellen.

## 9. Nutzerkorrekturen
Labels unabhängig ergänzen/entfernen, „unklar“ setzen, gesamte Einheit/Label ausschließen, Referent korrigieren, Undo. Kein Senderwechsel durch Themenkorrektur. Optional bestätigte Unterthemenzuordnung verändert keine Oberklassenformel.

## 10. Reanalyse
Themenkorrektur verändert betreffende P+/N−/D und D_all; **abhängige topicstarts** für korrigierten Beitrag und anschließende Themenfortsetzungen neu prüfen bis zur nächsten unabhängig gesicherten Grenze. Snapshot/Begleiter invalidieren. Neue Reply-/Quell-/Zeitdaten prüfen relevante Anschlussnachrichten; keine Änderung von Wortcounts oder Events allein aus neuem Themenlabel.

## 11. Evidence
Jeder Themenbalken öffnet alle gültigen zugeordneten Nachrichten, samt labelbezogenen R/U/X und Nennerliste. Bei Kurzantwort Ausgangsthema/Relation zusätzlich sichtbar. Jede MessageId in einer Themenliste einmal, obwohl mehrere eigene Segmente dasselbe Thema tragen.

## 12. Zeitraum
Zielnachricht in P, Referenzkontext außerhalb sichtbar. Kein Belegimport außerhalb P in Themenzähler. Gesamt/relative/Custom wie gemeinsam, keine stillen Stunden-/Tokenfilter.

## 13. Person A / B / Dritte
Thema einer eigenen A/B-Nachricht über C kann zählen; Autor C bleibt ausgeschlossen. third_people ist Gegenstand, keine Sprecherklasse. „Schwester fährt Berlin“ = third_people + travel, kein gemeinsamer A/B-Plan.

## 14. Mindestdaten und Zustände
Eine gültige Themenentscheidung erlaubt deskriptiven Count. G leer not-applicable; nur offene Themen review-required; erforderlicher fehlender Replykontext insufficient-data für diese Zuordnung. Vollständig geklärte negative Basis erlaubt Thema 0; no_topic-Nachrichten nicht als Datenfehler behandeln. unsupported/error separat.

## 15. Darstellung
Balken mit Counts, klar „Anteil der entschiedenen Nachrichten“, direkt Abdeckung; Hinweis auf Mehrfachthemen. Persönliche Filter und vollständiger Drilldown, Touchwerte/Legende. Kein Wortwolkenersatz ohne nachvollziehbare Mengengröße.

## 16. Methodiktext
„Eine Nachricht kann mehrere Themen haben. Kurze Antworten ordnen wir nur mit geklärtem Zusammenhang zu. Die Prozentwerte beziehen sich auf die jeweils entschiedenen Nachrichten; offene Fälle und Mehrfachzuordnungen bleiben sichtbar.“

## 17. Synthetische Goldbeispiele

| Fall | Quelle | Erwartung |
|---|---|---|
| T-P | A/T1 „Mein Arbeitsprojekt ist fertig. Der Film gestern war gut.“ | work + media, zwei Themen in einer Nachricht; kein meetings ohne Treffenplanung |
| T-N | A/T2 „Hallo“ ohne Themenbezug | no_topic, negativ für Inhaltsklassen |
| T-U | B/T3 „Okay“ ohne Kontext | unclassifiable/R, nicht 0 |
| T-D | A/T4 „Meine Schwester reist nach Berlin“ | third_people + travel, kein A/B-Reiseplan |
| T-R | B/T5 „Ja“ mit eindeutigem Reply auf A „Wir reisen nach Berlin?“ | travel, belegt aus Reply, Ausgangsquelle separat |
| T-I | A/T6 „Toll, schon wieder Überstunden“ klar ironisch | work; Ironie negiert Thema nicht |
| T-L | A/T7 „Ich bin sick, headache all day“ | health als Äußerungsthema, keine Diagnose; gemischt |
| T-C | T1 media entfernen/negativ, work bleibt | media-Zähler −1, work gleich; topicstarts-Abhängigkeit neu prüfen |
| T-T | Ausgangsfrage vor P, T5 in P | Nur T5 in Zähler, externer Kontext sichtbar |
| T-A | T4 identisch wiederimportiert; dann Schwester→„wir“ bearbeitet | Wiederimport unverändert; neue Fassung Rollen/Themen neu prüfen, alte Entscheidung nicht blind übertragen |
| T-M | 3 vollständig entschiedene Nachrichten, 2 work, 2 media, eine davon beide | work 2/3, media 2/3, Summe 133,3 % zulässig; Nachrichten bleiben 3 |

## 18. Evaluation
Per-Label P/R/F, Macro-F1, Jaccard/Exact-Set-Match, Kurzantwort-Relationen, Aggregations-/Nennergleichheit. Challenge: Mischthemen, negierte Inhalte, dritte Personen, gesundheitsbezogene Metaphern, Beziehung als Thema versus Interpretation, Importgrenzen. Breite Alltagsthemen brauchen Recall; health/relationship und Kontextübernahme erhöhte Precision. Falsche Rolle/Diagnose/Quote kritisch.

## 19. Numerische Release-Grenzen
Freigegebene V1-Releaseziele Q-QUALITY-SEM-01; jede Klasse innerhalb einer Zeile separat:

| Klassen | P min. | R min. | F1 min. | Auto-P min. |
|---|---:|---:|---:|---:|
| work, everyday, travel, leisure, media | 92 % | 90 % | 91 % | 97 % |
| meetings, third_people | 95 % | 90 % | 92 % | 98,5 % |
| health, relationship | 97 % | 85 % | 90 % | 99 % |
| other | 94 % | 80 % | 86 % | 98 % |
| no_topic (sicher fehlender Gehalt) | 98 % | 85 % | 91 % | 99 % |

Zusätzliche Kurzantwort-Themenübernahme: P ≥98 %, R ≥85 %, F1 ≥91 %, Auto-P ≥99 %. unclassifiable keine Auto-Klasse; Negativgate auch für labelbezogen „nicht t“. Critical Errors 0. Keine Topic-Macrozahl allein erlaubt schlechte sensible Klasse. Niedrigerer Recall von other verhindert erzwungene Restzuordnungen.

## 20. Dashboard Snapshot
Optional Topthemen mit Count/Abdeckung, Gleichstände erhalten, Mehrfachthemenhinweis; kein künstlicher „Beziehungsanteil“. Bei weitgehend offenem Bestand keine scheinbar endgültige Rangliste.

# social — Social Signals

## 1. Nutzerfrage
Welche beobachtbaren sprachlichen Signale verwenden A und B? Keine Wertschätzungs-, Empathie-, Bindungs- oder Charakterdiagnose.

## 2. Klassifikationseinheit
SOCIAL-DEFINITION-01: **eigene Nachricht mit labelbezogenen Textsegmenten**. Pro Nachricht und Label höchstens ein Treffer; wiederholtes „Danke danke“ erzeugt keinen künstlich stärkeren Dank. Mehrere Signale derselben Nachricht können gleichzeitig zählen. Für Zustimmung/Widerspruch kommt eine belegte Bezugsrelation hinzu, ohne die Zähleinheit zu wechseln.

## 3. Label-Ontologie
Namespace social. Signal und Zielreferent getrennt. Hauptwertung nur eigene Signale an Gegenperson bzw. deren konkret adressierten Beitrag; über C berichtete Signale nicht A→B.

| ID / Bedeutung | Positiv und Beispiel | Ausschluss / negatives Beispiel | Mehrdeutig / Rolle |
|---|---|---|---|
| compliment / Kompliment | „Das hast du toll gemacht“ als eigene positive Bewertung an B | „C sagte, du bist toll“ nur Bericht; „Das Wetter ist toll“ keine Person-/Beitragsbewertung | „Du Genie“ nach Fehler R |
| thanks / Dank | „Danke für deine Hilfe“ an B | „Danke steht auf der Karte“ nur Wortnennung | „Na danke!“ kann ironisch sein R |
| apology / Entschuldigung | „Tut mir leid, dass ich zu spät war“ eigene Entschuldigung | „Das tut mir für dich leid“ Bedauern, nicht Entschuldigung | „Sorry?“ kann Rückfrage sein R |
| agreement / Zustimmung | „Ja, genau“ zu belegter Aussage/Plan von B | Begrüßung „Ja hallo“; Antwort „Ja“ auf Faktenfrage nicht automatisch Zustimmung zu Position | „Ja, klar…“ R bei Sarkasmus |
| disagreement / Widerspruch | „Nein, das sehe ich anders“ zu B | „Nein“ auf „Hast du Milch?“ bloße Sachantwort | „Schon, aber…“ verschiedene Propositionen trennen |
| no_signal / Keines dieser Signale | „Es ist 12 Uhr“ | Expliziter Dank | Nur wenn alle V1-Signale geprüft negativ |
| uncertain_signal / Unklares Signal | Mehrdeutigkeit wie isoliertes „Na danke“ | Nicht geprüfte Quelle nicht als semantisch unklar ausgeben | Labelbezogen Review |

**support/encouragement:** Empfehlung für V1 **keine zusätzliche Signalzählklasse**. „Du schaffst das“ als reine Ermutigung nicht als Kompliment umdeuten; als eigenes Textbeispiel no_signal für die fünf angebotenen Klassen. Ein tatsächliches zusätzliches „Du bist gut darin“ kann compliment sein. Erweiterung braucht eigene Definition/Evaluation, keine heimliche Sammelklasse.

## 4. Kontextvertrag
Eigene Nachricht/Block; bei agreement/disagreement Bezugsproposition/Reply zwingend, bei apology eigenes verantwortetes Geschehen im Kontext. Vorheriger/nächster relevanter Block kann Ironie klären; bei Bedarf belegte Sequenz. Kommunikationsstil nur Hinweis. Zitierte/Drittpersonenbeiträge als Kontext. Außerhalb P erlaubt markiert, nie mitgezählt. Fehlender Bezug R/U, nicht automatisch Zustimmung wegen „ja“.

## 5. Kandidatenerkennung
Dank-/Sorry-/Bewertungswörter vorfilterbar, aber alle eigenen geeigneten Nachrichten prüfen, auch implizite Signale und EN. Lexikonfund kein Positivbeweis; keine Top-k-Belegmenge als kompletter Count.

## 6. Zähler und Nenner
G0 = eigene semantische Textnachrichten in P. Pro Label P+/N−/R/U/X und D wie gemeinsam; Count je Autor und Label, Quote unter D_label samt Abdeckung. Optional „Nachrichten mit mindestens einem Signal“ als MessageId-Union: positiv, sobald wenigstens ein gültiges Label; negativ erst alle fünf negativ; ungelöste restliche Labels für Labelstatistiken weiterhin R. Union-D entsprechend bekannt positiv/komplett negativ, nicht ungeklärte als negativ. Signalcounts dürfen summiert größer als Zahl signalhaltiger Nachrichten sein. Dritte-/Zitatfälle geprüft negativ für dyadische Hauptwertung, Quelle bleibt sichtbar.

## 7. Multi-Label
Dank+Kompliment erlaubt. agreement und disagreement an **derselben Proposition** exklusiv; „Beim Preis ja, beim Termin nein“ darf beide mit getrennten Bezugssegmenten enthalten. no_signal exklusiv zu jedem positiven Label. Negative/Reviewentscheidungen pro Klasse.

## 8. Confidence und automatische Übernahme
Fünf Klassen können später Auto-High erhalten; agreement/disagreement nur bei belegter Zielproposition. Ironie/Rollenmehrdeutigkeit zunächst Review. support erhält keine implizite Auto-Klasse. Gültige Nutzerentscheidung vorrangig.

## 9. Nutzerkorrekturen
Labels ergänzen/entfernen/unklar setzen, Ziel/Bezugsproposition korrigieren, labelbezogen ausschließen/wieder einbeziehen, Undo. Entire-message-X nur nach ausdrücklich benanntem Umfang, nicht aus einem fehlerhaften Label alle gültigen Signale entfernen.

## 10. Reanalyse
Betroffene Klassenmengen, Union, Nenner, Abdeckung, Snapshot/Begleiter. Bezugskorrektur prüft zugehörige relationale Labels. Ein Danke-Ausschluss verändert keine Worte, Themen oder Response-Zeit. Gemeinsame Quellkorrektur kann diese separat invalidieren. Add/Replace/Änderung nach DC-13.

## 11. Evidence
Vollständige Signalnachrichten/Labelbeziehungen, Zielproposition bei Zustimmung/Widerspruch, Originaltext und nötiger Kontext. Mehrfachanzeige in zwei Klassen bleibt dieselbe MessageId, kein doppelter Nachrichtenbestand.

## 12. Zeitraum
Zielnachricht in P; Bezug außerhalb als Kontext erlaubt. Keine neue Response-Regel: hier wird Inhalt, keine Antwortdauer berechnet. Undatierte Gesamtfälle zulässig, begrenzte P nur eindeutige Zeitzuordnung.

## 13. Person A / B / Dritte
„C hat mir gedankt“ kein Dank A→B. Eigene A-Äußerung „Danke, B, für Hilfe mit C“ zählt an B. Unklarer Gruppenadressat Review. Selbstlob kein dyadisches Kompliment.

## 14. Mindestdaten und Zustände
Eine entschiedene Nachricht erlaubt Count/Teilquote; vollständig negativ geprüft = gültige 0. Keine geeignete Menge not-applicable; nur unsichere Beziehung review-required; fehlender erforderlicher Kontext insufficient-data. Unsupported-/Dienstfehler nicht als signalarm ausgeben.

## 15. Darstellung
Fünf getrennte Signalreihen mit A/B-Counts, Teilquote/Abdeckung und Tap-Belegen. Kein Plus/Minus-Personenscore und keine wertende Farbe, die Widerspruch pauschal schlecht macht. Multi-Label-Hinweis.

## 16. Methodiktext
„Wir zeigen belegte Formen von Dank, Komplimenten, Entschuldigungen, Zustimmung und Widerspruch. Eine Nachricht kann mehrere Signale enthalten. Daraus leiten wir keine Eigenschaften oder Gefühle einer Person ab.“

## 17. Synthetische Goldbeispiele

| Fall | Quelle | Erwartung |
|---|---|---|
| S-P | A/S1 „Danke, das war wirklich lieb von dir“ an B | thanks + compliment, zwei Labels, eine Nachricht |
| S-N | A/S2 „Es ist 12 Uhr“ | no_signal |
| S-U | A/S3 „Na danke“ ohne Kontext | thanks R, keine sichere Wertung |
| S-D | A/S4 „C hat sich bei mir entschuldigt“ | Keine apology von A→B |
| S-R | B/S5 „Ja, genau“ als Reply auf A/S6 „Freitag passt besser“ | agreement mit S6; Zitat nicht erneut bewerten |
| S-I | B/S7 „Ja, klar…“ mit belegtem spöttischem Gegensatz | Nicht automatisch agreement; eindeutiger Widerspruch nur mit Proposition, sonst R |
| S-L | A/S8 „Sorry, ich war late“ | apology bei eigener Verspätung, gemischt |
| S-C | S1 compliment negativ korrigiert, thanks bleibt | compliment −1, thanks gleich, Union bleibt 1, Undo möglich |
| S-T | S6 außerhalb, S5 in P | S5 zählt, S6 Kontext |
| S-A | S1 identisch wieder; danach „Danke“ als fremdes Zitat markiert | Wiederimport stabil; Herkunftskorrektur invalidiert eigene thanks-Wertung |
| S-M | A/S9 „Beim Preis ja, beim Termin nein“ | agreement + disagreement zu zwei verschiedenen Propositionen |
| S-S | A/S10 „Du schaffst das“ reine Ermutigung | Keine V1-support-Klasse; nicht als Kompliment erzwingen |

## 18. Evaluation
Multi-Label-P/R/F, Exact-Set-Match, Quellen-/Zielrelationen, Union/Nenner, Ironie-Abstention. Challenge: indirekter Dank, Bedauern vs. Entschuldigung, Sachantwort vs. Zustimmung, Höflichkeit, quoted speech, Mischsprache. Thanks kann höheren Recall anstreben; compliment/apology und ironische Zustimmung brauchen höhere Precision. Unbelegte Charakterwertung, falsche Person/Quelle kritisch.

## 19. Numerische Release-Grenzen
Freigegebene V1-Releaseziele Q-QUALITY-SEM-01:

| Klasse | P min. | R min. | F1 min. | Auto-P min. |
|---|---:|---:|---:|---:|
| thanks | 97 % | 95 % | 96 % | 99 % |
| compliment | 97 % | 88 % | 92 % | 99,5 % |
| apology | 98 % | 88 % | 92 % | 99,5 % |
| agreement | 96 % | 90 % | 93 % | 99 % |
| disagreement | 97 % | 88 % | 92 % | 99,5 % |

no_signal/negative Klassen unter gemeinsamem Negativgate; uncertain keine Auto-Klasse. Critical Errors 0. Unterstützung ist nicht durch Messung von compliment freigegeben. Keine gemeinsame Signal-Confidence.

## 20. Dashboard Snapshot
Keine Pflichtkarte. Optional häufiges beobachtetes Signal mit Count/Abdeckung und Drilldown; kein „wer ist netter“-Vergleich.

# lifeevents — Life Events

## 1. Nutzerfrage
Welche Ereignisse oder kommunikativen Meilensteine werden im verfügbaren Chat erwähnt, und welche möchte der Nutzer als Ereignis festhalten? Keine automatische Bestätigung realer Durchführung, Kausalität oder „erstes Mal überhaupt“.

## 2. Klassifikationseinheit
EVENT-DEFINITION-01: **Eventkandidat als mehrnachrichtige Einheit**, gespeist durch einzelne event_mention-Segmente. Kandidat referenziert sämtliche tatsächlich zugeordneten Erwähnungen, Rollen und mögliche Zeitangaben. Eventidentität wird durch denselben konkret referierten Vorgang, beteiligte Personen und widerspruchsfreie zeitliche/inhaltliche Fortsetzung bestimmt; Kategorie/Titelgleichheit allein genügt nicht.
„Kino Freitag?“ und „Freitag Kino um 19 Uhr“ mit sicherem Bezug sind ein Kandidat, nicht zwei Events. Zwei Kinobesuche an verschiedenen Tagen bleiben getrennt. „Wieder Kino?“ ohne eindeutigen Bezug nicht automatisch mergen. Mehrdeutige Identität bleibt Review; Split/Merge explizit korrigierbar. Kein technischer Fingerprint oder Schwellenabstand vorgeschrieben.

## 3. Label-Ontologie
Drei getrennte Dimensionen: Erwähnung, Kandidatenzustand und Ereigniskategorie. Keine Summe der Statuszeilen als Ereigniszahl.

| Stabile ID / Bedeutung | Positiv / Beispiel | Ausschluss / Gegenbeispiel | Mehrdeutigkeit / Rolle |
|---|---|---|---|
| event_mention / Erwähnung | Eigener Text „Unser Treffen Freitag“ referiert Vorgang | „Treffen sind wichtig“ nur allgemeines Thema | „Damals…“ ohne Referenz R; Autor und Beteiligte getrennt |
| event_candidate / Vorschlag | Eine/mehrere belegte Erwähnungen als möglicher konkreter Vorgang zusammengefasst | Bloße Suchwortgleichheit ohne Vorgang | Identitäts-/Datumsalternativen zeigen, kein reales Event |
| user_confirmed_event / Bestätigtes Event | Nutzer übernimmt konkrete Preview mit Feldern | High-Modelllabel ist keine Nutzerbestätigung | Fehlende bestätigte Felder bleiben unbekannt |
| user_created_event / Eigenes Event | Nutzer erstellt Ereignis selbst | Kein Chatbeleg darf dazu erfunden werden | Herkunft Nutzer, optional echte Originalverknüpfungen |
| rejected_candidate / Verworfener Vorschlag | Explizite Nutzerverwerfung dieses Kandidaten | Löschen eines bestätigten Events ist nicht Verwerfen | Bei geänderter relevanter Quelle erneuter Review statt stiller Reaktivierung |
| not_event / Keine konkrete Erwähnung | „Urlaub ist schön“ allgemeine Aussage | Konkret „Unser Urlaub im Mai“ | Unklare Konkretisierung R |
| uncertain_event / Unklarer Vorgang | „Das damals bei dir“ ohne ausreichende Quelle | Verständlich konkrete Erwähnung | Review, kein bestätigtes Event |

**Kategorienvorschlag event-v1:** übernimmt die sieben tatsächlich vorhandenen UI-Kategorien aus src/config/interactionConfig.ts, ohne Codeänderung. „Besondere erste Male“ aus der Produktspezifikation wird als Suchperspektive/Meilensteinmerkmal behandelt, nicht als unbestimmte achte Faktklasse; Entscheidung im Paket EVENT-DEFINITION-01. Icons bleiben Darstellung, keine Bedeutung.

| Stabile Kategorie-ID / sichtbarer Name | Positiv / Beispiel | Ausschluss / Gegenbeispiel | Mehrdeutig / Rolle |
|---|---|---|---|
| shared_time / Treffen & gemeinsame Zeit | „Unser Abend gestern im Kino“ mit A/B-Bezug | „C war im Kino“ kein gemeinsames A/B-Event | „Der Abend“ ohne Teilnehmer R |
| shared_future / Zukunft & gemeinsame Pläne | „Wir wollen im Mai nach Rom“ als konkreter Planvorschlag | „Meine Schwester will nach Rom“ kein A/B-Plan | „Vielleicht irgendwann weg“ unkonkret R |
| closeness / Zuneigung & Nähe | Explizit berichtete A/B-Geste oder Aussage „Unser Kuss gestern“ | Antworttempo kein Näheereignis | Hypothetischer „Kuss?“ nur Kandidat mit Modalität |
| insider / Kosenamen & Insider | Explizite Namensgebung/konkrete gemeinsame Referenz mit Quellen | Seltenes Wort allein | Unklarer gemeinsamer Bezug R |
| openness / Persönliche Offenheit | Konkrete persönliche Mitteilung „Ich habe dir gestern von meiner Krankheit erzählt“ | Beliebige Alltagsnachricht nicht automatisch tief | Sensible Bedeutung ohne Textbeleg nicht inferieren |
| turning_point / Konflikte & Wendepunkte | Explizit genannter Streit/Entscheidung „Wir haben gestern über Trennung gesprochen“ | Cold Phase kein Beweis eines Konflikts | „Es ändert sich alles“ R, kein erfundener Wendepunkt |
| custom / Eigenes Event | Vom Nutzer kategorisierter eigener Eintrag „Umzug“ | Modell darf nicht fehlende Kategorie als sicheres custom tarnen | Kandidat kann Kategorie offen lassen |

Eine Hauptkategorie je gespeichertem Event, alternative Kategorien im Review, kein Multicount. Beteiligtenrollen A, B, gemeinsam, C, unbekannt explizit. Ein eigener für A relevanter Umzug kann Kontext sein; Ereignis über C nicht als gemeinsames A/B-Event. Eine Ereigniserwähnung kann hypothetisch/geplant/berichtet sein; Modalität erhalten. Vollständiges Plantracking/Raincheck wird nicht eingeführt.

## 4. Kontextvertrag
Erwähnung plus eigener Block, Reply-Ziel, konkret verbundene vorangehende/folgende Plan-/Ereignisbeiträge. Erweiterung nur auf belegte Fortsetzung desselben Kandidaten, gegebenenfalls über mehrere Sessions; Suchscope darf vollständig durchsucht werden, kein pauschaler Whole-Chat-Prompt. Dritte/Zitate rollengetrennt. Fehlende Importteile blockieren Identitäts-/Datumsbehauptung. Kontext außerhalb P sichtbar, nicht als In-P-Erwähnung zählen.

Zeitarten getrennt: message_date; mentioned_event_date mit Originalausdruck; inferred_interval mit Herleitung und Präzision; user_confirmed_event_date; unknown. „Gestern“ nur mit eindeutiger Quellenkalenderbasis auflösbar, nicht mit Systemdatum. Unklare Jahreszahl oder Intervall bleibt unscharf. Nutzer kann präzisieren, Herkunft bleibt Nutzerangabe, nicht Chatbeweis.

## 5. Kandidatenerkennung
Datums-/Orts-/Ereignisformulierungen vorfilterbar, semantische Suche über alle geeigneten eigenen Texte im angefragten Scope. Freie Suche bietet mehrere plausible Treffer samt tatsächlichem Suchumfang. Ein top-k-Ergebnis ist eine Suchauswahl, keine vollständige Timeline/erste-Erwähnung-Garantie. Vollständige Kandidatenzählung verlangt vollständige Erwähnungsprüfung und Zusammenführung nach Identitätsregel.

## 6. Zähler und Nenner
Zwei Basen: S = geeignete eigene Texte, vollständig geprüft versus offen; G0 = identifizierte konkrete Kandidaten nach belegter Zusammenführung. Für Erwähnungsbewertung P+ = gültige konkrete event_mention, N− = geprüfte keine konkrete Erwähnung; R/U/X separat.
Kandidatenzustände: offen, bestätigt, verworfen, ausgeschlossen/unresolved; „verworfen“ ist Nutzerentscheidung, nicht Aussage „real nie passiert“. **Keine Event-Wahrheitsquote.** Ausgabe Counts: gefundene unterschiedliche Kandidaten, offene/verworfene Vorschläge, bestätigte und manuelle Events getrennt. Bestätigt und manuell sind disjunkte Herkunftsklassen, zusammen gespeicherte aktive Events; gelöschte nicht mitzählen. Mehrere Erwähnungen desselben Events erhöhen nur Erwähnungszahl, nicht Eventcount. Suchabdeckung auf S ausweisen; eine Bestätigungsquote, falls später gewünscht, wäre Workflowquote und gehört nicht in V1-Hauptanalyse.

## 7. Multi-Label
Mehrere Ereignisse in einer Nachricht möglich, je konkret eigenem Vorgang. Mehrere Erwähnungen können einen Kandidaten stützen. Status exklusiv, Kategorie einmal; alternative mögliche Zusammenführungen nicht als mehrere bestätigte Events zählen. „Erste gefundene Erwähnung“ ist Scope-Merkmal, keine zusätzliche Ereigniseinheit.

## 8. Confidence und automatische Übernahme
Qualifiziert High kann **Erwähnung/Kandidatenzuordnung** erlauben, nie bestätigtes Event anlegen/ändern. Alle Kandidatenübernahmen und relevanten Feldänderungen ausdrücklich bestätigen. Datums-/Rollenunsicherheit Review unabhängig von hoher Kategorieconfidence. custom ausschließlich Nutzerkategorie. SQ-AUTO-01 unverändert.

## 9. Nutzerkorrekturen
Kandidat bestätigen/verwerfen, Kategorie/Zielpersonen/Datumspräzision korrigieren, Belege zuordnen/entfernen, Duplikate explizit zusammenführen/teilen, Ausschluss/Undo. Bestätigtes/manuelles Event bearbeiten/löschen statt verwerfen. Alle vorhandenen Felder Kategorie, Titel, Von, Bis, Ort, Notiz sowie Icon erhalten; Notiz sichtbar. Unbekanntes Datum nicht durch heute ersetzen; unscharfe Daten benötigen entsprechende zulässige Darstellung, keine erzwungene Scheingenauigkeit. Ungültiges Von>Bis nicht still tauschen.

## 10. Reanalyse
Kandidatenidentität/Belege/Kategorie ändern Suchmengen und Timeline; bestätigte Datum-/Kontextänderung aktualisiert zeitlich abhängige Kontextanzeigen, etwa Deepdive. Keine automatische Subtraktion aus Hotcold/Silence oder Änderung von Rohcounts. Explizite Ausschlussaktion folgt deren eigenem Vertrag. Verworfenes bei identischem Update unter gleicher Identität nicht erneut ungeprüft vorschlagen. Relevante neue Quellen/Identitätskonflikte als erneute Prüfung kennzeichnen, alte Entscheidung journalisieren. Replace ohne Quelle löscht manuelles/bestätigtes Event nicht still, Belegstatus U.

## 11. Evidence
Alle Erwähnungen jedes Kandidaten samt Zusammenführungsbegründung, Rollen, Datumsherkunft, Modalität, Confidence, Review und Versionen. Gespeichertes Event ohne Chatbeleg klar als Nutzerangabe, kein falscher Readerlink. Suchtreffer und Eventdatum nicht gleichsetzen. Vollständige Kandidaten-/Verwerfungsliste, nicht nur besonders schöne Meilensteine.

## 12. Zeitraum
Zwei ausdrücklich getrennte Sichten: **Analyse/Suche** umfasst Kandidaten mit mindestens einer Zielevent-Erwähnung in P (nur diese zählen als In-P-Erwähnungen); **gespeicherte Timeline** filtert nach bekanntem tatsächlichem/nutzerbestätigtem Ereignisdatum beziehungsweise Intervallüberschneidung mit P. Unbekanntes Datum in separater undatierter Liste, nicht still zuordnen. Kandidatenbelege außerhalb P nur Kontext. Eine in P erwähnte Hochzeit vor P ist Suchtreffer, nicht In-P-Timeline-Event. „Erste gefundene Erwähnung“ nur früheste innerhalb wirklich vollständig geprüften Suchbestands.

## 13. Person A / B / Dritte
Autor der Quelle und Eventbeteiligte separat. „Meine Schwester zieht nach Rom“ darf C-Ereignis als gekennzeichneten Suchtreffer liefern, nicht gemeinsamen A/B-Plan. Haupttimeline übernimmt nur vom Nutzer gewählten Kontext und zeigt Beteiligte; automatische Dyadenwirkung nicht aus bloßer Erwähnung.

## 14. Mindestdaten und Zustände
Ein belegter Kandidat genügt für Vorschlag, kein Nachweis realer Durchführung. Leere vollständig geprüfte Suche 0 available; leere geeignete Textmenge not-applicable; fehlende nötige Identität/Datierung review-required/insufficient-data pro Feld. Manuelle Events unabhängig von KI-Verfügbarkeit. unsupported/error niemals „keine Ereignisse“.

## 15. Darstellung
Timeline und Kandidatenliste getrennt, Kategorien/Icon, Originalsprung, erwähnter versus bestätigter Zeitpunkt, mehrere plausible Treffer. Übernehmen mit konkreter Feldpreview, Verwerfen versus Löschen eindeutig; Notiz sichtbar. Mobile interne Scrollbereiche und Rückkehr zum auslösenden Dialog.

## 16. Methodiktext
„Wir suchen nach belegten Erwähnungen möglicher Ereignisse. Ein Treffer ist zunächst ein Vorschlag. Datum und Beteiligte können unsicher sein; erst Ihre Bestätigung übernimmt ein Ereignis. Die früheste gefundene Erwähnung beweist kein erstes Mal im wirklichen Leben.“

## 17. Synthetische Goldbeispiele

| Fall | Quelle | Erwartung |
|---|---|---|
| E-P | A/E1 „Unser Kinobesuch gestern war schön“, eindeutiges Sendedatum 10.06.2026 | shared_time-Kandidat, genannt/abgeleitet 09.06., nicht bestätigt |
| E-N | A/E2 „Kino ist schön“ | not_event, kein konkreter Vorgang |
| E-U | A/E3 „Damals bei dir…“ | uncertain_event, kein erfundenes Datum |
| E-D | A/E4 „Meine Schwester fliegt im Mai nach Rom“ | C-Reisekandidat möglich, kein shared_future A/B |
| E-R | B/E5 Reply auf E1 „Ja, der Film war gut“ | Derselbe Kandidat bei gesichertem Bezug, kein zweites Event; Zitat nur Kontext |
| E-I | A/E6 „Unser grandioser Urlaub im Stau“ | Mögliche Urlaubs-Erwähnung, Ironie kein Beweis positiver Stimmung |
| E-L | A/E7 „Unser dinner last Friday“ mit eindeutigem Datumskontext | Kandidat, Mischsprache, relative Datierung mit Herkunft |
| E-C | Nutzer bestätigt E1 und ändert Datum auf 08.06., Notiz „mit Freunden“ | user_confirmed_event; Datum Nutzerangabe, message_date unverändert, Notiz bleibt |
| E-T | E1 in P, Ereignisdatum außerhalb P | In-P-Suchtreffer, nicht in datumsgefilterter In-P-Timeline |
| E-A | E1 verworfen, identisches Update | rejected_candidate bleibt, kein neuer ungeprüfter Vorschlag |
| E-M | „Kino Freitag?“ + bezogen „Freitag 19 Uhr“ + „nächste Woche wieder Kino?“ | Erster Kandidat zwei Erwähnungen; dritter nur bei klarer anderer Gelegenheit separater Kandidat, sonst Review |
| E-X | Manuelles Event ohne Original; Replace entfernt E1 | Manuelles bleibt Nutzerangabe; bestehender E1-Beleg U, keine erfundene Ersatzquelle |

## 18. Evaluation
Erwähnungs-/Kandidaten-Ende-zu-Ende P/R/F, Eventclustering (Pairwise-P/R), Split/Merge, Rollen, Datum/Präzision/Herkunft, erste gefundene Erwähnung unter Suchscope, persistente Verwerfung, bestätigte Aktionen. Challenge: Wiederholungen/serielle Treffen, vage Jahreszahlen, Pläne versus Vergangenheit, C, Ironie, Zitate, mehrsprachige Daten. Recall bei Suche wichtig, **Precision bei Zusammenführung, Datum und Rolle höher**, weil falscher Merge Historie verfälscht. Alle gemeinsamen kritischen Fehler und unbestätigte Speicherung blockieren.

## 19. Numerische Release-Grenzen
Freigegebene V1-Releaseziele Q-QUALITY-SEM-01:

| Klasse/Teil | P min. | R min. | F1 min. | Auto-P min. für Kandidatenklassifikation |
|---|---:|---:|---:|---:|
| event_mention / Kandidatenerkennung | 92 % | 95 % | 93 % | 98 % |
| shared_time, shared_future, jeweils | 96 % | 90 % | 92 % | 99 % |
| closeness, insider, openness, turning_point, jeweils | 98 % | 85 % | 91 % | 99,5 % |
| Gleicher Vorgang, paarweise Mergeentscheidung | 99 % | 90 % | 94 % | 99,5 % |

Datumsextraktion/-ableitung: P ≥99 %, R ≥85 %, F1 ≥91 %, Auto-P ≥99,5 %, dennoch keine automatische Nutzerbestätigung. Ein erfundenes Datum/Person ist unabhängig davon kritisch und muss im finalen Satz 0-mal auftreten. user_confirmed_event/user_created_event/rejected_candidate/custom sind Nutzerzustände, keine probabilistischen Klassen: Statusübergänge und Persistenz vollständig korrekt in spezifizierten Integritätsszenarien. not_event unter Negativgate; uncertain keine Auto-Klasse. Teilfreigabe von Kandidaten ohne sichere Datumsableitung nur mit explizitem offenem Datum und genehmigtem Umfang.

## 20. Dashboard Snapshot
Optional nächstes/ausgewähltes **bestätigtes** Event oder Zahl offener Vorschläge klar als solche; keine erfundene Meilensteinbewertung. Manuelle Timeline bleibt unabhängig von produktiver KI-Freigabe.

# humor — Your Humor Code

## 1. Nutzerfrage
Welche Lach-/Humormarker erscheinen im eigenen Text, und welche wiederkehrenden gemeinsamen Referenzen sind als Insider belegbar? Keine Aussage „ihr habt denselben Humor“, kein Beweis, wer tatsächlich gelacht hat oder welcher vorherige Beitrag lustig war.

## 2. Klassifikationseinheit
HUMOR-DEFINITION-01 trennt:
A. **Marker-Vorkommen im eigenen Text** (Unicode-Emoji-Einheit oder lexikalisches Marker-Token) und davon getrennt **explizite Humorreaktions-Nachricht**.
B. **Insidergruppe** als mehrnachrichtige gemeinsame Referenz mit mehreren Nutzungsakten, nicht eine Einheit pro Wort/Beleg.

Empfohlene Mindeststruktur B: mindestens drei eigenständige Nutzungsakte in mindestens zwei getrennten CR-01-Blöcken, von beiden Personen mindestens ein Akt, plus belegter gemeinsam verstandener besonderer Bezug. Mehrere Wiederholungen in derselben Nachricht ein Akt. Eine erläuternde Herkunftsstelle kann Kontext sein; sie ersetzt keinen gemeinsamen Gebrauch. Drei Vorkommen allein genügen nicht. Keine maximale Zeitdistanz erfinden; Bezug muss über konkrete Quellen belegbar bleiben. Unter dieser Struktur nur Kandidat, kein gewerteter Insider.

## 3. Label-Ontologie
Namespace humor. Markerarten, Reaktionsklassifikation und Insiderstatus sind getrennte Dimensionen.

| ID / Bedeutung | Positiv und Beispiel | Ausschluss / negatives Beispiel | Mehrdeutig / Rolle |
|---|---|---|---|
| laugh_emoji / Lach-Emoji-Marker | Eigene Unicode-Vorkommen 😂 oder 🤣 | Reaction, Sticker, fremdes Zitat oder bloßes 🙂 | Emoji ist Marker, keine Aussage über Motivation |
| laugh_text / Textlachmarker | Eigenes Token haha, hahaha, hehe, hehehe, hihi, hihihi, lol, lmao, rofl (case-insensitive) | „Halle“ oder „lol“ im zitierten Code/URL | Tokenherkunft unklar U; keine Ironiebehauptung |
| explicit_humor_response / Explizite Humorreaktion | „Darüber musste ich lachen“ mit eigenem Bezug | „Ich habe nicht gelacht“; neutrales laugh_text allein ist nicht zusätzliche explizite Reaktion | „Sehr lustig…“ ohne eindeutigen Kontext R |
| insider_candidate / Mögliche gemeinsame Referenz | Besondere referenzierte Formulierung mit ersten gemeinsamen Hinweisen | Seltenes Wort allein | Mindeststruktur/Bezug noch offen, nicht positiver Insidercount |
| shared_insider / Belegter gemeinsamer Insider | Besondere gemeinsame Referenz mit Mindeststruktur und gesichertem gemeinsamen Gebrauch | Normales „Guten Morgen“ oder drei unabhängige „Pizza“ ohne Sonderbezug | Gleiche Form bei unterschiedlicher Bedeutung R |
| not_insider / Kein besonderer gemeinsamer Bezug | Wiederholtes Alltagswort ohne individuellen Referenzgebrauch, vollständig geprüft | Belegte private Referenz | Fehlende Herkunft nicht automatisch negativ |
| uncertain_humor / Unklare Humorinterpretation | Ironische Mehrdeutigkeit | Exakter Marker braucht keine semantische Humorfreigabe, bleibt Marker | R je interpretierter Beziehung |

Markerlexikon ist bewusst enge **versionierte V1-Ausgangsliste**, keine behauptete vollständige DE-/EN-Humorerkennung. Token nach DC-08; pro lexikalischem Token ein Vorkommen, „hahaha“ eins, „haha haha“ zwei. 😂😂 zwei Emoji-Einheiten nach DC-10. Keine automatische Variante „jajaja“, „ahah“ oder erweiterte Smileyliste ohne neue Regelversion; anderer Humor kann explicit_humor_response werden, wenn tatsächlich explizit. Quotes bleiben sichtbar, aber nicht eigene Marker.

## 4. Kontextvertrag
Marker: eigener Originaltext plus sichere Herkunft genügt; kein Gefühl aus Kontext ableiten. Explizite Reaktion: Nachricht, eigener Block, konkret referierter Vorgänger/Reply und nötige Nachfolge zur Negation/Ironie. Insider: sämtliche stützenden Nutzungsakte und konkret referenzierte Herkunft/Erklärung, nötige angrenzende Blöcke; selektive Quellen über Sessions statt gesamtem Chatprompt. Außerhalb P darf Ursprung als markierter Kontext helfen; Mindestnutzung innerhalb P, siehe §12. Fehlende Herkunft/Grenzen R, keine erdachte gemeinsame Geschichte.

## 5. Kandidatenerkennung
Exakte Marker vollständig deterministisch über eigene Textbasis suchen. Insiderkandidaten aus Wiederholung/Varianten/konkreten Referenzhinweisen, semantische Prüfung nicht nur seltenster Wörter. Vollständiger Zähler gemeinsamer Insider setzt dokumentierte vollständige Prüfung des angebotenen Referenzscopes voraus; freie top-k-Insidersuche liefert nur Kandidaten, keinen Gesamtbestand. Nicht beobachtbare/ungeprüfte Quellen als Abdeckungslücke ausweisen. Explizite Reaktionsprüfung über alle geeigneten Nachrichten.

## 6. Zähler und Nenner
A: Emoji-/Textmarker-Counts getrennt je Autor; Summe nur als Marker-Vorkommen, nicht Humorereignisse. Anteil markerhaltiger Nachrichten = deduplizierte MessageIds mit mindestens einem gewerteten Marker / geeignete vollständig auf Marker geprüfte eigene Textnachrichten; X entfernen nur ausdrücklich aus Markerwertung, Rohcount erhalten. Bei unklarer Herkunft R/U und Teilbasis markieren. Zitat-/Sprachmangel nicht als negativer Humor.
Explizite Reaktion: G0 eigene semantische Nachrichten, P+/N−/R/U/X, Rate über D und Abdeckung wie gemeinsam.
B: G0 klar identifizierte Referenzgruppen/Kandidaten; P+ erfüllt shared_insider, N− gesichert not_insider, R/U/X separat. Count = unterschiedliche gültige Insidergruppen, dazu Nutzungsakte pro Autor; keine Anteilsgrafik „gemeinsamer Humor in %“. Kandidatenabdeckung ist nicht Gesamtchat-Recall, Quellenprüfung zusätzlich. Nicht eindeutig abzählbare mögliche Referenzgruppen erlauben keine vorgetäuschte vollständige Grundmenge.

## 7. Multi-Label
Nachricht kann mehrere Marker und eine explizite Reaktion enthalten; nicht addieren zu einer „Humorzahl“. Ein Nutzungsakt kann zwei unabhängig belegte Insider referieren, pro Gruppe einmal; gleiche Gruppe nicht wegen Emoji und Phrase zweimal. insider_candidate/shared_insider/not_insider exklusiver Bewertungsstand derselben Gruppe.

## 8. Confidence und automatische Übernahme
Exakte Marker regelbasiert, **keine erfundene Modellconfidence**. explicit_humor_response grundsätzlich Auto-High nach Evaluation. Empfehlung: shared_insider in V1 **immer Nutzerreview** auch bei High, da gemeinsamer Sonderbezug besonders interpretationsanfällig; Autoerkennung darf Kandidaten erzeugen. Mindeststruktur und Referenzen bleiben auch nach Bestätigung erforderlich für Analysecount; Nutzer kann weniger belegte Referenz separat als Notiz/Event pflegen.

## 9. Nutzerkorrekturen
Eigen-/Fremdtextzuordnung, Markerbeleg ausschließen/Undo (Rohvorkommen erhalten), Humorreaktion reklassifizieren, Insider bestätigen/verwerfen, Gruppen splitten/mergen, Nutzungsbelege/Zielreferenz korrigieren. Eine Keywordänderung durch Nutzer ist kein stiller Lexikonrelease. Keine tatsächlichen Gefühle als Label hinzufügen.

## 10. Reanalyse
Marker-X aktualisiert bereinigte Markerwerte, nicht Emoji DNA oder Wortzählung. Quell-/Zitatkorrektur kann deren eigene Grundlage separat ändern. Insidergruppierung/Belegkorrektur prüft Mindeststruktur, Count und Nutzungsakte; falls sie entfällt, Status nicht weiter bestätigt wertbar behaupten. Zugehörige Life-Event-Kandidaten/Erklärungen neu prüfen, bestätigte Events nicht still ändern. Snapshot/Begleiter aktualisieren.

## 11. Evidence
Alle Marker mit exakter Position/Originalvariante, explizite Reaktionen mit Kontext; Insidergruppe mit **sämtlichen** genutzten Akten, beiden Autoren, Herkunft und Nutzerreview. Kein einzelnes seltenes Wort als Ersatz für Mindestbelegstruktur.

## 12. Zeitraum
Marker/Reaktion nur Zielnachrichten in P. Insider-Hauptcount empfiehlt **in P gemeinsam belegte Nutzung**: Mindeststruktur der drei Akte/beiden Personen muss in P erfüllt sein. Herkunft kann außerhalb helfen; frühere Insider mit nur einer In-P-Nennung optional separate „weitere Referenzen“ ohne Hauptcount. Keine unmarkierte Vollchat-Insiderzahl bei 7-Tage-Filter. Undatiert nur Gesamt, sofern Block-/Reihenfolge für Mindeststruktur gesichert.

## 13. Person A / B / Dritte
Eigene Marker A/B; C-Nutzung erfüllt keine gemeinsame Zweierstruktur. In Insidergeschichte darf C Gegenstand sein, aber gemeinsamer Gebrauch muss A/B belegt sein. Fremder geteilter Witz wird nicht automatisch eigene Erfindung.

## 14. Mindestdaten und Zustände
Marker ab einem gültigen eigenen Text prüfbar, 0 nach vollständiger Suche gültig. Fehlende eigene Textbasis not-applicable. Insider unter Mindeststruktur insufficient-data für Positivcount, Kandidat reviewbar; ungeprüfte Beziehung review-required. Bei vollständig geprüfter geeigneter Kandidatenbasis ohne Insider Count 0, keine Behauptung „kein gemeinsamer Humor“. Unsupported/error getrennt.

## 15. Darstellung
Zwei deutlich getrennte Bereiche: „Lachmarker“ und „Gemeinsame Referenzen“. Counts/Autor/Abdeckung, keine Humorkompatibilitätszahl. Insider immer als belegte Referenz mit Status/Drilldown, auf Touch vollständig bedienbar.

## 16. Methodiktext
„Lachzeichen sind sichtbare Marker, kein Beweis tatsächlichen Lachens. Gemeinsame Insider benötigen mehrere belegte Verwendungen durch beide Personen und Ihre Prüfung. Ein seltenes oder oft wiederholtes Wort reicht allein nicht.“

## 17. Synthetische Goldbeispiele

| Fall | Quelle | Erwartung |
|---|---|---|
| H-P | A/H1 „haha 😂😂“ | laugh_text 1, laugh_emoji 2, eine markerhaltige Nachricht |
| H-N | A/H2 „Wir kaufen Pizza“ dreimal ohne Sonderbezug | not_insider; keine Humorbehauptung |
| H-U | A/H3 „Sehr lustig…“ ohne Kontext | explicit_humor_response R |
| H-D | Nur A und C benutzen „Weltraumgurke“ | Kein gemeinsamer A/B-Insider |
| H-R | B/H4 zitiert A „haha“, eigener Text „verstanden“ | B eigene Marker 0 |
| H-I | A/H5 „lol, toller Stau“ ironisch | Textmarker 1; kein Beweis angenehmen Humors |
| H-L | B/H6 „lol, das is funny“ | Textmarker 1; explicit_humor_response nur bei klarer eigener Humorreaktion, sonst R |
| H-C | Drei bestätigte Insiderakte in zwei Blöcken A/B; B-Beleg ausgeschlossen | Mindeststruktur neu prüfen; wenn kein B übrig, kein gültiger shared_insider; Undo stellt wieder her |
| H-T | Ursprung vor P, drei Nutzungen beider in P | Nach Review shared_insider in P; Herkunft nur Kontext |
| H-A | Identische drei Nutzungen erneut importiert | Weiterhin eine Gruppe/drei Akte, Verwerfung bleibt |
| H-M | A nennt Panne „Weltraumgurke“, B greift später mit gesichertem Witzbezug auf, A erneut in anderem Block | Mindeststruktur erfüllt, Kandidat → Nutzerbestätigung nötig |
| H-S | A „haha haha“ in einer Nachricht | Zwei Marker, für einen Insider höchstens ein Nutzungsakt |

## 18. Evaluation
Marker-Occurrence-Exact-Match samt Unicode/Quote/Token, explizite Reaktions-P/R/F, Insidergruppen Pairwise-P/R, Mindestbelegstruktur und tatsächlicher gemeinsamer Referenzbezug. Challenge: Alltagsrepetition, Namensgleichheit, seltene Wörter, Ironie, C, Code Switching, zeitlich verteilte Quellen. Insider-Precision wichtiger als Recall; manuelle Prüfung ist kein Beleg automatischer Güte. Falsche Quelle/Rolle oder psychologische Tatsachenbehauptung kritisch.

## 19. Numerische Release-Grenzen
Freigegebene V1-Releaseziele Q-QUALITY-SEM-01:

| Teil/Klasse | P min. | R min. | F1 min. | Automatik |
|---|---:|---:|---:|---|
| laugh_emoji / laugh_text, je deterministischem Lexikon | 100 % | 100 % | 100 % | Exaktheit gegen spezifizierten Lexikon-Goldsatz, keine semantische Auto-P |
| explicit_humor_response | 97 % | 88 % | 92 % | Auto-P ≥99 % |
| insider_candidate, vollständige Kandidatensuche | 85 % | 92 % | 88 % | Nur Kandidaten, keine Kennzahl |
| shared_insider, semantische Vorschlagsgüte | 98 % | 80 % | 88 % | V1 immer Review |
| not_insider, sichere Ablehnung eines Kandidaten | 98 % | 85 % | 91 % | Keine automatische Ersetzung gültiger Nutzerentscheidung |

100 % bei Markern meint die **definierte endliche Regel**, nicht Erkennung allen Humors oder unbekannter Schreibvarianten. Gemeinsames statistisches Verfahren betrifft semantische Zeilen; deterministische Regeln haben vollständige Regelkonformität in spezifizierten Fällen. Critical Errors 0. Niedrigere Kandidatenprecision ist vertretbar, weil Vorschläge nicht als Insider gewertet werden.

## 20. Dashboard Snapshot
Optional Markerzahl mit eindeutiger Einheit; kein „Humorlevel“. Insider nur bestätigte belegte Referenz ohne Behauptung übereinstimmenden Humors; keine Pflichtkarte.

# topicstarts — Who Brings It Up?

## 1. Nutzerfrage
Wer führt einen belegten neuen Gesprächsgegenstand ein oder nimmt ihn neu auf? Nicht First Move und keine Initiative-/Interesse-/Dominanzdiagnose.

## 2. Klassifikationseinheit
TOPICSTART-DEFINITION-01: **Themenimpuls als eigenes Segment eines A/B-Beitrags mit Relationsprüfung zur vorherigen Gesprächslinie**, auf gültigem freigegebenem topics-Bestand und CR-Gesprächsstruktur.
Ein Impuls führt einen eigenständig weiterführbaren konkreten Gegenstand ein. Unterschiedliche Oberthemen helfen, beweisen den Start aber nicht. „Arbeit am Projekt X“ → „Arbeit am neuen Projekt Y“ kann innerhalb work ein neuer Impuls sein, wenn keine Antwort/Fortsetzung von X; „Wie weit bist du damit?“ ist Fortsetzung. Belegte explizite Einführung, neue eigenständige Frage/Aussage ohne Fortsetzungsrelation oder ausdrückliche Wiederaufnahme begründen den Impuls. Bloßes Zeitloch/Themenlabelwechsel genügt nicht.
Mehrere unabhängige Impulse in einer Nachricht separat; ein Impuls mit mehreren Themenlabels bleibt **ein** Gesamtstart und erscheint einmal je zutreffendem Thema.

## 3. Label-Ontologie
Namespace topicstarts; Rollen Autor und referenzierter Vorgänger getrennt. Neue Einheit braucht stabile Startsegment- und Kontextbezüge.

| ID / Bedeutung | Positiv / Beispiel | Ausschluss / Gegenbeispiel | Mehrdeutig / Rolle |
|---|---|---|---|
| new_topic / Neuer Themenimpuls | Nach Reisegespräch „Anderes Thema: mein neues Projekt…“ | Antwort „Das Projekt ist fertig“ auf konkrete Projektfrage | Nur anderes Keyword ohne klaren Wechsel R |
| resumed_topic / Wiederaufnahme | „Noch mal zu unserem Urlaub…“ mit früherem beendetem/verlassenem Bezug | Direkte weitere Antwort auf noch laufende Urlaubsfrage | Ob alte Linie verlassen war ohne Verlauf R |
| topic_response / Antwort/Fortsetzung | „Das Hotel kostet 100 Euro“ als Antwort auf Reisefrage | Eigenständiger Wechsel zu Arbeit | Fehlende Replyquelle U |
| acknowledgement / Bloße Bestätigung | „Ja, okay“ ohne neuen Gegenstand | „Ja, und anderes Thema: …“ enthält eigenen neuen Impuls | „Ja, aber der Umzug…“ benötigt Segmentprüfung |
| uncertain_start / Unklarer Beginn | Import startet mit „Zum Urlaub…“ ohne Vorgeschichte | Explizit belegter In-Session-Wechsel | R, kein automatischer Start |
| no_topic_impulse / Kein Themenimpuls | Begrüßung ohne Thema | „Hallo, mein Projekt…“ enthält eigenen Impuls | Fehlende Referenz nicht einfach negativ |

new_topic bedeutet **neu für den belegten Gesprächsverlauf**, nicht erstmals im gesamten Leben/Chat. resumed benötigt belegten früheren gleichen Gegenstand und neue Einführung, keine frei erfundene Ruhezeit. Hauptzählung umfasst beide; Unterklassen getrennt. Exklusiv pro Impuls; Themenlabels kommen ausschließlich aus gültigem topics-Vertrag.

## 4. Kontextvertrag
Zielsegment und Block, vorherige Gesprächslinie einschließlich direkter Replies und relevanter letzter Themenimpulse; nächster relevanter Block darf Fortsetzung/Adressat klären. Wiederaufnahme verlangt konkrete frühere Gegenstandsreferenz. Bei Suche nach Vorgänger vollständigen notwendigen Verlauf bis zur letzten belegten Grenze prüfen, kein beliebiges „letzte fünf Nachrichten“-Kriterium. Auch C kann Kontext unterbrechen/initiieren; nicht dem nächsten A/B-Autor zuschreiben.
Außerhalb P liegende Vorgeschichte ausdrücklich erlaubt, Start nur in P. Importbeginn/fehlende Vorgeschichte bleibt R, außer eigenständige Einführung ist tatsächlich belegt. Fehlende topics-/Sessionqualität blockiert abhängige sichere Startwertung.

## 5. Kandidatenerkennung
Explizite Wechselwörter, neue Themenlabels oder Frage-/Aussagesegmente sind Kandidatensignale. Jeder geeignete eigene thematische Beitrag prüfen, nicht nur Sessionanfänge; neue Gegenstände innerhalb derselben Oberklasse ebenfalls erfassen. Top-k oder nur First-Move-Beiträge begrenzen Recall unzulässig. Vollständige Quellen-/topics-Abdeckung getrennt.

## 6. Zähler und Nenner
Quellbasis S = geeignete eigene thematische A/B-Nachrichten in P, dazu offene Themenzuordnung separat. G0 = identifizierte konkrete Gegenstandsbeiträge/Impuls-Kandidaten nach Segmentierung. P+ = gültige new_topic/resumed_topic, N− = topic_response/acknowledgement/no_topic_impulse; R/U/X wie gemeinsam.
Starts_A/B = eindeutige positive Impulse je Autor; Gesamt = Summe. Anteil A = Starts_A/Gesamt bei Gesamt>0, beschriftet „Anteil an gewerteten Themenstarts“. Pro t: gleiche Formel nur positive Impulse mit gültigem t. Multi-Topic-Impulse zählen in mehreren Themenzeilen, Gesamt zählt ihre Union, nicht Summe der Themenzeilen. Offene Herkunft/Themen-/Startzuordnung samt Abdeckung sichtbar; keine Vollständigkeit aus Kandidatenquote ableiten. Noch nicht segmentierbare Beiträge bleiben offene Quelle, Aktabdeckung ggf. unbestimmt.

## 7. Multi-Label
Starttyp exklusiv, Themenlabels kombiniert nach topics. Eine Nachricht zwei unabhängige Gegenstände → zwei Impulse. Derselbe Impuls work+travel → ein Gesamtstart, ein work- und ein travel-Start. Gleichzeitige gültige First-Move-Wertung möglich, keine doppelte Zählung innerhalb dieser Funktion.

## 8. Confidence und automatische Übernahme
new_topic/resumed_topic können nach eigener Evaluation Auto-High erhalten, zusätzlich gültige topics-Zuordnung und notwendige Relationen vorausgesetzt. Sicheres Thema beweist keinen sicheren Start. Medium/unsichere Fortsetzung Review; uncertain_start kein Negativfall. Keine Umgehung von CR-03 durch niedrige Startschwelle.

## 9. Nutzerkorrekturen
Start bestätigen, als Fortsetzung/Wiederaufnahme reklassifizieren, Impulse teilen/mergen, Bezug/Ziel korrigieren, ausschließen/Undo. Themenkorrektur **zentral in topics** ausführen mit Preview der Folgen; kein abweichendes lokales Themenlabel. Sender bleibt Original.

## 10. Reanalyse
Themen-/Start-/Relationskorrektur aktualisiert betroffenen Impuls und nachfolgende abhängige Impulse bis zu unabhängig gesicherter Gesprächs-/Themengrenze. Dadurch können andere Wiederaufnahmen anders eingeordnet werden; Umfang anhand Abhängigkeiten, nicht pauschal Gesamtchat. P/Add/Replace/geänderte Vorgeschichte prüft ebenfalls betroffene Kette. Snapshot/Begleiter aktualisieren. First Move/Response ändern sich nur bei gemeinsam korrigierter Gesprächsrelation, nicht bei bloßem Startlabel.

## 11. Evidence
Alle positiven/negativen/offenen Impulse, Startsegment, Themenzuordnung, vorangehende Linie und Wiederaufnahmequelle; jedes Original fokussierbar. Pro-Thema und Gesamt-Union müssen auf denselben Stand führen. Keine allgemeinen Themenbeispiele als Startbeweise.

## 12. Zeitraum
Impulsstart in P; nötiger Vorgänger darf markiert außerhalb liegen. Unterschied zu Response-/Pausenpaaren ausdrücklich: keine Dauerkennzahl und kein Clipping. Mehrsegmentiger Impuls mit unvollständigem Zielumfang an Grenze R; kein doppelter Start an beiden Rändern. Undatierte Gesamtfälle nur bei belegter Reihenfolge/Relation.

## 13. Person A / B / Dritte
Wenn C das Thema einführt und A antwortet, A kein neuer Start. Eigener unabhängiger Impuls A über C kann zählen, Referent bleibt C. „Ihr“ mit unklarem Ziel Review. Themenautor nicht aus anschließend größter Nachrichtenmenge bestimmen.

## 14. Mindestdaten und Zustände
Mindestens ein belegter Impuls samt gültiger Themen-/Relationsbasis für Count. Vollständig geprüfte Fortsetzungen ohne Start = 0 available, Anteil not-applicable. Leere Themenbasis not-applicable, fehlende historische Linie insufficient-data/review-required; topics unavailable sperrt produktive abhängige Funktion. Unsupported/error keine Nullstarts.

## 15. Darstellung
Gesamt A/B, darunter Themenzeilen, new/resumed optional getrennt; Counts/Anteile/Abdeckung. Hinweis: Mehrfachthemenzeilen nicht addieren. Vollständiger Kontext via Tap, keine Sieger- oder Dominanzbehauptung.

## 16. Methodiktext
„Wir zählen belegte neue Themenimpulse und Wiederaufnahmen. Eine Antwort oder bloße Zustimmung ist kein neuer Start. Ein Gesprächsstart kann zugleich einen Themenimpuls enthalten, beide Zahlen beschreiben aber unterschiedliche Dinge.“

## 17. Synthetische Goldbeispiele

| Fall | Quelle | Erwartung |
|---|---|---|
| TS-P | A/TS1 nach gesichertem Reisegespräch „Anderes Thema: meine neue Arbeit“ | new_topic work, A +1 |
| TS-N | B/TS2 „Das Hotel kostet 100“ auf Preisfrage | topic_response, kein Start |
| TS-U | Import beginnt TS3 „Zum Urlaub…“ ohne Vorgeschichte | uncertain_start, kein automatischer erster Start |
| TS-D | C/TS4 führt Reise ein, A/TS5 beantwortet dessen Frage | A kein Start aus C-Impuls |
| TS-R | A/TS6 Reply auf frühere eigene Urlaubsplanung „Noch mal zum Urlaub: …“ nach beendetem anderem Gespräch | resumed_topic bei gesichertem Bezug |
| TS-I | A/TS7 „Toll, noch mehr Arbeit“ innerhalb derselben Projektlinie | Ironie allein kein Wechsel, topic_response |
| TS-L | A/TS8 „By the way, zum neuen Projekt …“ nach abgeschlossenem anderen Gegenstand | new_topic work bei belegter Einführung, gemischt |
| TS-C | TS1 Thema work→everyday korrigiert | Themenzeilen verschieben, Startrelation prüfen; Gesamt nur unverändert, wenn Impuls weiter gültig |
| TS-T | Vorgeschichte vor P, eigener Wechsel in P | Start zählt, Kontext markiert |
| TS-A | Update ergänzt fehlende Vorgeschichte für TS3 als klare Fortsetzung | Bisher R → topic_response, kein künstlicher Start; Nutzerentscheidung bei relevanter Änderung Review |
| TS-M | Ein neuer Impuls zur Dienstreise mit work+travel | Gesamt 1, work 1, travel 1 |
| TS-F | Gültiger First Move mit eigenständigem neuen Thema | Je eine Wertung in move und topicstarts möglich, verschiedene Kennzahlen |

## 18. Evaluation
Startsegment-Exact-Match, new/resumed/response/acknowledgement P/R/F, richtige Vorgänger-/Themenrelation, Mehrfachthemenunion, Abhängigkeiten bei Korrektur. Challenge: gleiche Oberklasse/neuer konkreter Gegenstand, Topicwechsel mitten in Session, C-Initiation, explizite/implizite Wiederaufnahme, Importgrenzen, offene topics. Präzision gegen falsche Initiative hoch, Recall für nicht explizit angekündigte Wechsel separat. Falscher Autor/Scope kritisch.

## 19. Numerische Release-Grenzen
Freigegebene V1-Releaseziele Q-QUALITY-SEM-01:

| Klasse | P min. | R min. | F1 min. | Auto-P min. |
|---|---:|---:|---:|---:|
| new_topic | 97 % | 90 % | 93 % | 99 % |
| resumed_topic | 98 % | 85 % | 91 % | 99,5 % |
| topic_response | 97 % | 92 % | 94 % | 99 % |
| acknowledgement | 98 % | 94 % | 95 % | 99,5 % |
| no_topic_impulse | 98 % | 90 % | 93 % | 99,5 % |

Automatische Negativklassen zusätzlich gemeinsames Negativgate; uncertain_start keine Auto-Klasse. Topics-Abnahme separat Voraussetzung, keine Verrechnung ihrer Fehler mit Startqualität. Critical Errors 0. Wiederaufnahmen verlangen höhere Präzision wegen möglicher falscher Quellenverknüpfung.

## 20. Dashboard Snapshot
Optional „Gewertete Themenstarts A/B“ mit Zeitraum/Abdeckung und Drilldown. Nicht zugleich identischen First-Move-Count unter anderem Namen anzeigen; keine Pflichtkarte.

# Freigabestand der Product Decisions

Die folgenden acht Entscheidungen sind seit 04.11.2026 **approved**. Die vollständigen jeweiligen Verträge und Goldbeispiele sind verbindlich; frühere Alternativen sind keine V1-Defaults.

| ID | Status | Freigegebener Inhalt |
|---|---|---|
| Q-DEFINITION-01 | approved | §2–7: unabhängige Frageakte, gleichgerichtete Blockpräzisierung zusammenführen; echte Information/Klärung/Planung an Gegenperson zählen, Rhetorik/Zitat/an C nicht. Typen exklusiv, Herkunft separat. Quellen- und Aktabdeckung getrennt; grenzüberschreitender unvollständiger Zielakt Review. |
| NAME-DEFINITION-01 | approved | §2–7: zusammenhängende Anredegruppe einmal; vier exklusive Anredetypen mit begründetem Spezifitätsvorrang. Unbekannte Aliasidentität bestätigen; persönliche Listen Autor→Ziel. |
| TOPIC-DEFINITION-01 | approved | Nachricht als Einheit, zehn feste Inhaltsklassen plus no_topic/unclassifiable; Multi-Topic. Kurze Antworten nur bei belegtem Bezug. Pro Label entschiedene Basis samt Abdeckung; gemeinsame Vergleichsbasis nur ausdrücklich. Unterthemen höchstens nutzerbenannte Gruppierung, keine freie automatische Hauptontologie. |
| SOCIAL-DEFINITION-01 | approved | Fünf Klassen, Nachricht×Label einmal; an Gegenperson gerichtete Signale; Multi-Label mit propositionenbezogener Exklusivität von Zustimmung/Widerspruch. support/encouragement zunächst keine eigene Klasse. |
| EVENT-DEFINITION-01 | approved | Derselbe belegte Vorgang über mehrere Erwähnungen ein Kandidat; sieben vorhandene UI-Kategorien mit stabilen fachlichen IDs, erste Erwähnung als Suchmerkmal. Datum/Herkunft/Modalität getrennt. Suche nach Erwähnung in P, gespeicherte Timeline nach Ereignisdatum; undatiert separat. Unveränderte Verwerfung bewahren, unsichere Merges Review. |
| HUMOR-DEFINITION-01 | approved | Enge versionierte Markerstartliste nach §3; Marker/Explizitreaktion/Insider getrennt. Insider ≥3 Akte, ≥2 Blöcke, beide Personen und besonderer gemeinsamer Bezug in P; immer Review. Frühere Herkunft nur Kontext. |
| TOPICSTART-DEFINITION-01 | approved | §2–7: belegter konkreter Themenimpuls, nicht bloßer Label-/Sessionwechsel. new/resumed zählen, Antwort/Bestätigung nicht. Gültige topics erforderlich; mehrere Themen pro Impuls zählen Gesamtunion einmal; korrigierte Themen prüfen abhängige Startkette. |
| Q-QUALITY-SEM-01 | approved | Sämtliche unterschiedlichen Empfehlungen in §19 der sieben Funktionen, gemeinsame 1-%-Grenze falscher automatischer Negative, untere einseitige 95-%-Grenzen für P/R/Auto-P und obere für Fehleranteil, F1 samt Unsicherheit; repräsentative sprach-/klassenbezogene unabhängige Prüfplanung. Keine pauschale Reviewratenobergrenze oder Confidencezahl. |
| SEMANTIC-V1 | approved | Sammelfreigabe für questions, names, topics, social, lifeevents, humor und topicstarts einschließlich der acht Entscheidungen. |

**Release-Regel Q-QUALITY-SEM-01:** Erreicht eine Klasse die fachlichen Mindestwerte, aber nicht die geforderte Auto-Precision, bleibt die automatische Übernahme für genau diese Klasse deaktiviert. Produktiver Betrieb ist nur zulässig, wenn ein ausdrücklich freigegebener Reviewbetrieb die übrigen Qualitätsanforderungen erfüllt; sonst bleibt die Klasse nicht produktiv freigegeben. Review ist kein automatischer Fallback zur Umgehung des Release Gates. DE und EN separat prüfen, Mischsprache eigener Challenge-Slice, 0 beobachtete kritische Fehler unverändert. Das unabhängige statistische Abnahmeverfahren mit dokumentierten Unsicherheitsgrenzen bleibt Zielzustand.

Grenzen dürfen nach schlechten Evaluationsergebnissen nicht still abgesenkt werden. Jede spätere Änderung benötigt eine neue Product Decision, eine neue Regel-/Qualitätsversion und erneute unabhängige Evaluation. Fachliche Freigabe ist kein Qualitätsnachweis und kein Implementierungsauftrag.

Die gemeinsamen Policies SQ-AUTO-01, SQ-COUNT-01 und SQ-CRITICAL-01 bleiben unverändert. Es bestehen keine offenen fachlichen Entscheidungen dieses Vertragsblocks; unabhängige Qualitätsnachweise und die übrigen produktweiten Releasevoraussetzungen stehen weiterhin aus.

## Abnahmeabhängigkeiten und Abschluss

Sinnvolle fachliche Reihenfolge: Fragen/Anreden und Themen/Social getrennt spezifizieren und evaluieren; Life Events auf gemeinsamer Quellen-/Identitätsbasis; Humor getrennt für Marker und Insider; Topic Starts erst nach abgenommenen Themen und Gesprächsrelationen. Gemeinsame Integrität, vollständige Evidence, echte Korrektur/Reanalyse und Originalsprünge sind Voraussetzung jeder produktiven Teilfreigabe. Kosten-/Performance-/Datenschutz- und tarifliche Entscheidungen aus dem MVP-Vertrag bleiben bestehen; sie werden hier nicht still entschieden.

Alle synthetischen Tabellen sind Sollbeispiele für spätere Annotation und Implementierung, kein Nachweis bereits erreichter Güte. Keine Registryfreischaltung, keine neue Formel im Anwendungscode, keine Tests/Baselines verändert. Die Dokumentation endet hier; keine Implementierung beauftragt.

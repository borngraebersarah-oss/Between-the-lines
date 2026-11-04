# Evidence-, Korrektur- und Reanalysevertrag V1

Stand: 04.11.2026. Gemeinsamer produktfachlicher Vertrag für alle veröffentlichten V1-Analysen. **Keine Implementierung, keine technische Datenbank-/Queuearchitektur.**

Grundlagen: [Decision Log](V1_PRODUCT_DECISIONS.md), [Daten/Zählung](DATA_AND_COUNTING_RULES.md), [Gespräch/Antwort](CONVERSATION_AND_RESPONSE_RULES.md), [Semantic-Qualität](SEMANTIC_CLASSIFICATION_AND_QUALITY_RULES.md), [Free](ANALYSIS_CONTRACTS_FREE_V1.md), [Basic](ANALYSIS_CONTRACTS_BASIC_V1.md), [Semantic](ANALYSIS_CONTRACTS_SEMANTIC_V1.md), [Import/Update](IMPORT_AND_CHAT_UPDATE_V1.md), [MVP-Abnahme](MVP_SCOPE_AND_ACCEPTANCE.md) sowie docs/ANALYSIS_RULES.md und docs/UX_RULES.md.

Bereits approved Fachregeln bleiben verbindlich. Dieser Auftrag konkretisiert deren gemeinsame Evidence-/Korrekturwirkung; er genehmigt keine neue Analyseformel, Klasse oder Funktion. „Veröffentlicht“ bedeutet tatsächlich fachlich und qualitativ freigegeben, nicht bloß in der Registry vorhanden. Für unveröffentlichte Fähigkeiten werden keine Belege oder Ergebnisse erfunden. Der aktuelle Prototyp wird durch Dokumentation nicht zu einer echten Reanalyseengine.

Ergänzender Ausführungsvertrag: [AI_EXECUTION_AND_COMPANION_V1.md](AI_EXECUTION_AND_COMPANION_V1.md). Er konkretisiert Modellaufträge, Outputvalidierung, Confidence-/Versionsgates und Begleiteraktionen, ohne die fachlichen Abhängigkeiten dieser Datei zu ändern. Modelloutput ist zunächst Vorschlag; erst validierte, policykonforme Entscheidungen dürfen die hier definierten Ergebnisse aktualisieren.

## 1. Begriffe

| Begriff | Fachliche Definition |
|---|---|
| Evidence Unit | Eindeutig identifizierte, versionsgebundene Berechnungs-/Klassifikationseinheit mit tatsächlichen Originalreferenzen; z. B. Nachricht, Tokenvorkommen, Kalendertag, Intervall, Frageakt oder Insidergruppe. Kein beliebiger Beispieltext. |
| Evidence Set | Vollständige logisch zugehörige Menge eines Ergebnisses inklusive nachvollziehbarer positiver/negativer Basis, Nenner, Ausschlüsse und offener Fälle; nicht nur sichtbare erste Seite. |
| Correction | Persistenter, konkret abgegrenzter Änderungsvorgang an Dateninterpretation, Analysezuordnung oder zulässigem Kontext/Nutzerzustand; kein Eingriff in unveränderlichen Originaltext. |
| User Decision | Explizite Nutzerentscheidung mit Gegenstand, Scope, Herkunft und Gültigkeitsbedingungen; höhere Priorität nur in ihrem Sachbereich. |
| Reclassification | Änderung innerhalb der approved Ontologie oder zulässigen Relationsklassen; alte/neue Zuordnung nachvollziehbar. |
| Exclusion | Reversibles Herausnehmen aus genau benannter Wertungsmenge, ohne Original zu löschen oder es fachlich negativ zu klassifizieren. |
| Inclusion | Rücknahme eines Ausschlusses in zuvor zulässige Wertung; heilt keine ungültige Originalreferenz. |
| Confirmation | Explizite Bestätigung eines konkreten Vorschlags bzw. einer Zuordnung; kein pauschaler Wahrheitsnachweis. |
| Review | Prüfung eines offenen, widersprüchlichen oder relevant veränderten Gegenstands; allein Öffnen der Ansicht entscheidet nichts. |
| Correction Journal | Nachvollziehbare Entscheidungshistorie mit Gültigkeit und Undo-Bezug; keine versteckte Archivierung entfernter Volltexte. |
| Analysis Result | Ergebnis samt Basis/Evidence, Status und Gültigkeitskontext für genau Feature, Chat, Dyade, P und Versionen. |
| Analysis Run | Konkrete Berechnung/Prüfung dieser Inputs; kann gültig abschließen, scheitern oder durch neueren Stand überholt werden. |
| Dependency | Fachlich belegter Bezug einer Ausgabe auf bestimmte Daten, Beziehungen, Kontexte oder Voranalysen. Kein pauschaler Bezug auf „alles im Chat“. |
| Invalidation | Feststellung, dass ein Ergebnis für den aktuellen Zielstand nicht mehr als gültig gelten darf. |
| Reanalysis | Tatsächliche neue Aggregation und nötige Klassifikations-/Relationsprüfung der invalidierten Basis; nicht bloß Flag/Toast. |
| stale | Ergebnis gehört zu älterem/relevant verändertem Stand; höchstens ausdrücklich als alt sichtbar. |
| processing | Neue Auswertung läuft; kein Beweis bereits aktualisierter Werte. |
| valid | Ergebnis und Evidence passen nach fachlichen Regeln zum aktuellen Zielstand. „Gültig“ kann auch ein korrektes leeres/insufficient-data-Ergebnis betreffen, siehe §15. |
| error | Verarbeitung für den benötigten Stand fehlgeschlagen; kein Ersatzwert 0. |
| unresolved | Erforderliche Referenz/Identität/Zuordnung nicht eindeutig verfügbar. Keine erfundene Verbindung; getrennt von semantischer Unsicherheit. |

## 2. Evidence-Grundregel

Jede veröffentlichte Kennzahl macht ihre tatsächliche Berechnungsbasis reproduzierbar. Einheit, Mengenfilter, Personen-/Zeitbasis, Regelstand, Zähler/Nenner und fehlende Abdeckung werden benannt.

| Quantitative Evidence | Erforderlicher Nachweis |
|---|---|
| Stunden-/Wochentagsbucket | Alle zugeordneten MessageIds, Quellenzeit/Präzision, Bucketregel, Person, Count |
| Streak | Alle aktiven Tage, begründete Grenzen/Lücken und zugehörige Nachrichten; keine künstliche Nachricht an Nulltagen |
| Wortliste/Signature | Tokenvorkommen/Originalsegmente, Person, Filterversion und vollständige Nennerbasis, nicht Substrings |
| Pausen | Beide Endpunkte, Rohdauer/Präzision, Mitgliedschaft/Ausschluss, Struktur-/Zeitgrundlage |
| Baseline/Index | Sämtliche Basisperioden/-tage, Werte, ausgeschlossene/partielle Mengen und Formel |

Semantische Evidence verwendet exakt die approved Einheit: Frageakt, Anredeakt, Nachricht×Thema/Signal, Eventkandidat, Marker/Insidergruppe, Themenimpuls. Alle dazu verwendeten Quellen, Rollen, Labels, Confidence/Review und wirksamen Entscheidungen zugänglich. Deterministische Werte erhalten keine künstlichen semantischen Labels oder Modellconfidence.

Modellklassifikation, Original, Nutzerentscheidung und berechnete Kennzahl bleiben getrennt. Ein manuelles Event ohne Original ist Nutzerkontext, kein erfundenes Chatbelegstück.

## 3. Vollständigkeit

Ergebnis und Evidence Set haben denselben fachlichen Stand. Anzeigen:
- vollständige Anzahl von Einheiten und Einheitentyp;
- Zähler-/Nennerbasis sowie R/U/X nach SQ-COUNT-01;
- Trefferzahl nach angewandtem Listenfilter, getrennt von Gesamtbasis;
- tatsächlich geladener Abschnitt und Möglichkeit, alle übrigen Einheiten zu erreichen.

Pagination darf Menge nicht ändern. Standardmäßig nachvollziehbare chronologische Ordnung nach belegter Quellenordnung/Präzision, bei Gleichstand stabiler Einheitenidentität als rein technischer Tie-Breaker; dieser erzeugt keine behauptete feinere historische Reihenfolge. Undatierte/ungeklärte Positionen separat mit stabilem Ordnungsmerkmal. Fachliche Ranglisten wie längste Pause dürfen nach benannter Größe sortieren, Gleichstände stabil und ohne willkürlichen Sieger.

Während einer Seitenfolge dieselbe Ergebnisversion verwenden. Neue Korrektur/Datenversion: Standwechsel anzeigen und Liste konsistent neu binden; nicht neue Seite an alte Basis anhängen. Keine Dopplungen/Auslassungen über Seitengrenzen. Mehrere Tokens/Fragen derselben Nachricht sind verschiedene fachliche Einheiten, dieselbe Einheit auf zwei Seiten dagegen ein Fehler. Dieselbe Nachricht in zwei Themenlisten ist kein doppelter Rohbeitrag.

Keine Top-k-, Zufalls- oder „fünf schöne Beispiele“-Liste als Vollständigkeitsersatz. Eine reine Vorschau darf als Vorschau bezeichnet sein und zur vollständigen Menge führen.

## 4. Filter

Soweit fachlich anwendbar: Person mit klarer Rolle (Autor/Antwortender/Adressat), Zeitraum, Label/Klasse, included, excluded, review, confirmed, unresolved, Confidence und Quelle/Importstand. Kombinationen eindeutig UND-verknüpft, Mehrfachauswahl innerhalb derselben Facette als ODER nachvollziehbar; UI muss wirksame Auswahl zeigen. Fachliche Zustände sind getrennte Dimensionen: confirmed kann zugleich excluded sein.

Listenzeitraum ist ein **lokaler Teilfilter**, ändert nie still global P. Kontext außerhalb P bleibt als solcher markiert; nicht zum positiven Treffer oder Nenner hinzunehmen. Leerer Filtertreffer ist keine neue Analyse-Null. Mehrere Quellen desselben Originals lassen es im Set nicht mehrfach zählen. Nicht anwendbare Confidencefilter für rein quantitative Mengen weglassen.

Bei ungelöster Quelle/Person keine künstliche Zuordnung zum Filterwert; eigene Kategorie anbieten. Quellfilter meint Herkunft/Mitgliedschaft dieses Ergebnisstands, kein Umschalten auf veraltete Werte ohne Kennzeichnung.

## 5. Originalsprung

Stabile MessageId, korrekte Inhaltsfassung, Sender und tatsächlich vorhandene Zeitpräzision, gegebenenfalls relevantes Segment sowie zulässiger Kontext. Reader fokussiert **genau** diese Nachricht und markiert das verwendete Segment. Mehrnachrichtige Einheit bietet alle zugehörigen Sprünge, nicht bloß das erste Beispiel.

Kein Textpräfix, Arrayindex, Zeitraten oder Ähnlichkeitssuche als Referenz. Gehört ein alter Beleg zu einer nicht mehr verfügbaren Inhaltsfassung, nicht kommentarlos aktuelle andere Fassung als Beweis zeigen; stale/unresolved und gegebenenfalls gekennzeichneter aktueller Beitrag.

Rückkehr erhält Analyse/Dialog, Tab/Klasse, Filter, Sortierung sowie sinnvolle Scroll-/Listenposition. Hat sich die Menge geändert, nächstmögliche stabile Position und Änderungsanzeige statt Sprung zu fremdem Eintrag. Readerkontext oder Suche darf global P nicht verändern.

## 6. Unresolved Evidence

Ursache sichtbar: fehlendes Original, verlorene Fassung, mehrdeutige Identität, unaufgelöste Rolle/Relation oder weggefallener Scope. Kein Ersatzlink, keine automatische ähnliche Nachricht, keine gesicherte positive Wertung ohne zwingenden Originalnachweis.

Betroffene Menge/Abdeckung aktualisieren; unresolved ist nicht negativ, excluded oder gelöscht. Bei Pflichtreferenz kann die ganze Einheit aus gültiger Wertung fallen, während andere unabhängig gültige Labels bleiben. Fehlende Klassifikationssicherheit bei vorhandenem Original heißt Review/uncertain, nicht zwingend unresolved.

Später eindeutig aufgelöst: gültigen früheren Nutzerstand nur bei unverändertem Gegenstand, Inhalt, Kontext und Regelbedeutung reaktivieren. Sonst erneuter Review. Eine manuelle Zuordnung dokumentiert Entscheidung, erfindet keine Quelltatsache.

## 7. Korrekturarten

| Art | Beispiele | Wirkung |
|---|---|---|
| A Datenkorrektur | Sender, Typ, Zeit/Präzision, tatsächliche Person-/Aliasidentität, Quote-/Replybezug, Quellenidentität/Deduplizierung | Kanonische interpretierte Basis und tatsächlich betroffene Verbraucher prüfen; Original bleibt, Nutzerinterpretation separat |
| B Analysekorrektur | Frageart, Thema, Signal, Start-/Responsezuordnung | Nur definierte Klasse/Einheit und echte Folgeabhängigkeiten |
| C Kontextentscheidung | Schlafprofil, Event, Hotcold-Tagesmaske, Silence-Intervall | Genau definierte Kontext-/Wertungswirkung, keine automatische Rohdatenänderung |
| D Nutzerzustand | Dashboardkarten, sichtbarer Name, Profilbild | Darstellung, keine neue fachliche Menge; Namensänderung ist keine Senderkorrektur |

Preview benennt Art, konkreten Gegenstand und betroffene Auswertungen. Bei einfacher reversibler Belegkorrektur keine unnötige Bestätigungsmodalität; Undo anbieten. Begleiteraktionen benötigen stets konkrete Bestätigung. Datenidentitäts-/Importkonflikte folgen dem Importvertrag, nicht einem freien „trotzdem übernehmen“-Button.

## 8. Ausschluss

Original nie löschen. Erforderlich ist ein ausdrücklich benannter fachlicher Scope:
- Einheit×Feature: nur die dafür definierte Wertungsmenge, z. B. Response Event.
- Einheit×Label: z. B. compliment entfernen, thanks derselben Nachricht erhalten.
- Intervall: exakt referenzierte Silence-Pause mit Endpunkten, keine generelle Zeitblockade.
- Tag: ganze bestätigte lokale Hotcold-Kalendertage derselben Dyade, keine Minutenkürzung.
- Phase: **keine neue selbstständige Ausschlussart**. Eine UI-Auswahl einer Phase kann nur nach konkreter Preview auf ihre aktuellen Hotcold-Tage abgebildet werden; gespeichert wird die Tagesentscheidung. Keine spätere automatische Ausweitung auf veränderte Phasengrenzen.

X ist außerhalb bereinigter Wertung, nicht geprüft negativ. Rohbasis/Ausschlussmenge sichtbar, Nenner nach jeweiligem Featurevertrag. quantitative Rohcounts nicht durch beliebiges Wegklicken unbequemer Belege verändern: Datenkorrektur oder definierte Maske nötig. Kein globales „Nachricht überall ausschließen“ ohne eigene freigegebene Datenaktion.

Kompliment-X verändert social, nicht texting. Silence-X verändert bereinigte Silence-Rangfolge/Median/Maximum/Verteilung, nicht Rohpause, response oder hotcold. Wieder einbeziehen/Undo nur bei weiterhin gültigem Gegenstand.

## 9. Reklassifizierung

Nur approved Ontologie und zulässige Rollen: travel → work, rhetorical_question → genuine_information_question, agreement → disagreement oder Anredeziel B → C. Vorheriger/neuer Stand journalisiert. Multi-Label unabhängig korrigieren; Nutzer muss unterscheiden können zwischen negativ, unklar und aus Wertung.

Themenänderung in topicstarts führt zur zentralen topics-Korrektur, nicht lokaler Parallelontologie. agreement/disagreement derselben Proposition exklusiv; unterschiedliche Propositionen dürfen beide bleiben. Hauptfragearten/Anredetypen nach ihrem Vertrag exklusiv. Neue beliebige Klassen oder Texte nicht durch Korrektur erzeugen.

## 10. Bestätigung

| Bestätigung | Was sie verändert | Was nicht |
|---|---|---|
| Modellklassifikation | Label als gültige Nutzerentscheidung bei gültigen Referenzen | Kein nachträgliches Modell-high oder historischer Wahrheitsbeweis |
| Eventkandidat | Konkretes Event mit geprüften Feldern als user_confirmed_event | Originalzeit unverändert, tatsächliche Durchführung nicht vom Modell bewiesen |
| Alias | Zuordnung zu tatsächlicher Person mit Herkunft | Andere gleichnamige Personen nicht automatisch verschmelzen |
| Replyzuordnung | Gültige Relation mit Nutzerherkunft/inferred-confirmed | Keine erfundene source-confirmed-Kante; technische Relation nicht automatisch echte Response |
| Schlaf-/Ruhekandidat | Konkrete gültige Ruhezuordnung | Kein täglicher Pflichtreview sicherer CR-08-Automatik, keine Subtraktion von Rohdauer |

Bestätigen bezieht sich auf konkrete Preview/Einheit; Öffnen, Scrollen, Chattext oder Modellvorschlag sind keine Bestätigung.

## 11. Undo

Undo referenziert eine konkrete Nutzerentscheidung. Bei unverändertem Gegenstand und gültiger Ausgangsbasis vorigen Entscheidungsstand wiederherstellen, neue Journalrevision erzeugen, dieselben Abhängigkeiten invalidieren und neu berechnen. Kein Rückspielen alter Ergebniszahlen ohne neue Gültigkeitsprüfung.

Ist inzwischen relevante Quelle, Kontext, Rolle, Labeldefinition oder ein nachfolgender Entscheidungsstand verändert, kein blindes Undo: Konflikt/Review mit aktuellen Folgen. Eine ältere Entscheidung darf spätere unabhängige Entscheidungen nicht löschen. Mehrere Undo-Schritte sind als einzelne gezielte Rücknahmen jeweils unter dieser Prüfung möglich; kein Pflichtumfang für komplexe Editorhistorie oder generisches Redo. Wiederholtes Undo derselben wirksamen Rücknahme erzeugt keine Doppelwirkung; erneutes Anwenden braucht bewusste aktuelle Entscheidung.

IMP-RETENTION-01: Kein One-click-Undo eines erfolgreichen Replace bei nicht mehr vorhandenem altem Volltext. Correction-Undo ist nicht Bestands-Undo. Endgültige Chatlöschung kein versteckter Undo-Speicher.

## 12. Correction Journal

Fachlich mindestens: correction_id, ChatId, tatsächliche Dyade/Teilnehmer, Feature oder expliziter Daten-/Kontextscope, betroffene Einheit/Relation/Intervall/Tage, vorheriger/neuer Zustand, Entscheidungstyp, Herkunft Nutzer/Modell/Import, Zeitpunkt, Daten-/Inhaltsversion, Regel-/Labelversion, Undo-/Vorgängerbezug und aktueller Gültigkeitsstatus.

Modell-/Importereignis als solche protokollieren, nicht Nutzerfreigabe fingieren. Wirksame Nutzerentscheidung bleibt von Vorschlägen getrennt. Bei Mehrfachlabels tatsächlich geänderte Beziehungen erfassen. Journal und wirksame Korrektur müssen konsistent speicherbar sein; Speichern fehlgeschlagen ist keine bestätigte persistente Korrektur.

Keine vollständigen entfernten Nachrichtentexte allein fürs Journal erhalten. IDs, Entscheidungstypen, Labels, Status und notwendige nicht-inhaltliche Provenienz genügen für verlorene Referenzen. Freitextnoten sind selbst private Daten und unterliegen Chatlöschung; kein Schlupfloch zur Kopie sämtlicher Originale.

## 13. Priorität

Innerhalb des zulässigen Sachbereichs:
1. gültige explizite Nutzerentscheidung;
2. approved deterministische Struktur;
3. gültige freigegebene Modellklassifikation;
4. uncertain/unresolved, keine sichere Wertung.

Ein Social-Klick ändert keinen Quellsender; dafür separater Datenvorgang. Eine Nutzerbestätigung erzeugt keine fehlende Originalnachricht. Widerspruch mit Quelltatsache wird geklärt und als Nutzerinterpretation benannt, nicht Original umgeschrieben. Späterer Modelllauf überschreibt gültige Entscheidungen bei unveränderter Grundlage nicht.

## 14. Reanalyse-Grundregel

Änderung → fachliches Delta bestimmen → direkte Verbraucher invalidieren → wirklich abhängige Ausgaben transitiv prüfen → nötige neue Klassifikation/Aggregation → konsistentes Ergebnis samt Evidence. §32 ist die zentrale Matrix; Featureverträge definieren Einheiten/Formeln.

Nicht nur „Nachricht geändert“: betroffene Datenfelder, Rollen, Originalfassungen, Zeiträume, Wort-/Emoji-/Tagesmengen, Block-/Relationsstruktur und Korrekturscope benennen. Neue Baseline kann alte Phasen ändern; neuer Nenner alte Anteile; neue Fortsetzung ältere Relationen. Unveränderter Zahlenwert kann Ergebnis einer echten Neuberechnung sein.

Keine pauschale Vollchat-Semantik bei jeder Korrektur. Unabhängig gültige Klassifikationen weiterverwenden, aber neue Aggregationsbasis und Version eindeutig nachweisen. Nicht berechtigte Klassen bleiben unavailable; Reanalyse schaltet sie nicht frei.

## 15. Ergebniszustände

Laufaktualität und fachliches Resultat sind getrennte Dimensionen, auch wenn UI kompakt zusammenfasst.

| Zustand | Bedeutung / Folgeschritt |
|---|---|
| valid | Für aktuellen Zielstand berechnet; Evidence und Nenner passen. Fachlicher Ausgang kann available, insufficient-data oder not-applicable sein |
| stale | Durch relevante Änderung ungültig; alten Wert nur mit altem Scope/Zeitstand markieren |
| processing | Lauf für benannten aktuellen Zielstand; alte Version bleibt höchstens alt sichtbar |
| error | Lauf fehlgeschlagen; Korrektur bleibt gespeichert, Retry auf aktuellem Stand |
| review-required | Referenzen/Klassifikationen offen; gültige Teilmengen nur korrekt benannt mit Abdeckung, keine vollständige Quote |
| unavailable | Fähigkeit/Teilklasse nicht produktiv freigegeben oder benötigte Fähigkeit nicht vorhanden; Tarifzahlung ändert das nicht |
| insufficient-data | Fachlich nötige Daten/Struktur fehlen; keine Ersatznull |
| not-applicable | Definierter Nenner leer oder Frage auf Basis nicht anwendbar |
| unsupported | Nicht unterstützte Quelle/Sprache im benötigten Teil; nicht mit error oder negativ verwechseln |

Übergang: valid → wirksame Korrektur → stale → processing → valid mit fachlichem Ausgang, alternativ error/review-required. Aufgelöster Review → neue Prüfung/Aggregation. Stale kann bei nicht freigegebener Fähigkeit keine processing-Zusage erzeugen. Reiner Darstellungsfilter invalidiert keine Analyse.

## 16. Keine Mischstände

Resultat, Basis/Evidence, Filterkontext und Snapshot tragen denselben fachlichen Run-/Datenstand. Verboten: neue P-Überschrift mit unmarkierter alter Zahl, neuer Zähler mit alter Belegliste, alte Karte als aktuelle Detailzusammenfassung, neues Label mit altem Nenner.

Bei wiederverwendeter Berechnung darf Herkunft eines früheren Runs intern erhalten bleiben, aber ein nachgewiesen äquivalenter gültiger Ergebnisstand wird konsistent referenziert. Keine bloße neue Versionsnummer, die ungeprüfte alte Daten legitimiert. Alte und neue Version allenfalls explizit getrennt anzeigen, nie zusammenrechnen.

## 17. Reanalyse nach Zeitraumänderung

P verändert Zielscope aller P-abhängigen Analysen, Evidence-Mitgliedschaft, Vergleiche und semantische Zielmengen. Relative Presets aus chat_end, Customgrenzen nach freigegebener Kalenderregel. Auch Wort-/Themen-/Frageanalysen sind zeitraumgefiltert, obwohl ihre Klassifikation nicht zwingend Zeit benötigt.

Unveränderte In-Scope-Klassifikationen wiederverwenden, Grenzen/Kontextabhängigkeiten prüfen; neue Baselines/Nenner/Perioden aggregieren. Kontext außerhalb P bleibt gekennzeichnet zugänglich, niemals still zählen. Reader und gespeicherte Eventbibliothek werden nicht gelöscht; Timeline-/Suchansichten folgen ihren verschiedenen Ereignis-/Erwähnungszeitregeln.

## 18. Reanalyse nach Add/Replace

IMP-PARTIAL-01: Blockierte Übernahme verändert den gültigen Bestand nicht, daher keine neue Analysebasis. Erfolgreicher Import liefert konkretes Delta. Rohaggregate betroffener Mengen vollständig konsistent neu bilden; Berechnungsverfahren darf inkrementell sein, Ergebnis muss vollständigem Fachvertrag entsprechen.

Unveränderte Quellen/Labels/Korrekturen erhalten. Neue Beiträge können alte Blöcke/Antworten/Themenstarts und Baselines verändern; neue Kontextquellen prüfen frühere abhängige Interpretationen. Weggefallene Referenzen unresolved/inaktiv, nicht umhängen. Bei Replace keine heimliche Volltexthistorie und kein versprochenes Bestands-Undo. Event/Kontext nicht automatisch löschen.

Relative Fenster können sich über chat_end verschieben und dadurch alle betroffenen Zielmengen ändern. Identischer Wiederimport ohne relevantes Delta braucht keine erneute Inhaltsklassifikation. Ein alter noch laufender Run darf neuen Importstand nicht überschreiben.

## 19. Reanalyse nach Sprecherkorrektur

Echte Sender-/Personenidentitätskorrektur verändert gegebenenfalls Dyadenmitgliedschaft, Personensummen, Aktivitätsgrenzen, Blöcke, Move, Response, First/Last, Longstory, Wörter und alle personenbezogenen Semantikeinheiten. Auch Humor-/Eventrollen prüfen, nicht nur sichtbare Namen.

Aus C wird B: kann A/B-Count, chat_end und P verändern. A wird B: Gesamtcount möglicherweise gleich, Personenwerte und Struktur anders. Ursprüngliche Quellangabe bleibt, korrigierte Dateninterpretation bekommt Herkunft. Reiner Anzeigename/Bildwechsel keine solche Korrektur.

## 20. Reanalyse nach Zeitkorrektur

Zeitraumzugehörigkeit, Prime, Weekday, Streak, Peak, Hotcold, Silence, Blöcke, Response, First/Last, Pulse, Deepdive und Eventbezug prüfen. chat_end/P können indirekt alle gefilterten Mengen verändern. Unverändert gleicher Text braucht keine neue rein lexikalische Interpretation, aber neu passende Mitgliedschaft/Aggregation.

Zeitabhängiger Kontext, Reihenfolge, relative Eventdatierung, Wiederaufnahme und Insider-Mindeststruktur können Review benötigen. Korrektur nur belegter Präzision; keine erfundenen Sekunden. Benutzerzeit als Nutzerangabe, nicht ursprünglicher Quelltimestamp umetikettieren.

## 21. Reanalyse nach Textbearbeitung

Eigene Wörter/Emojis/Textlängen, words/longstory, Fragen, Anreden, Themen, Signale, Humor, Eventkandidaten und Topic Starts prüfen. Inhalt kann Response-/Fortsetzungsrelation ändern, dann abhängige Short Answers/Move prüfen. DC-13 gilt für alte Nutzerentscheidungen und relevanten Kontext.

Gleiche Nachricht bei gleicher Art/Sender/Zeit behält Messagecount und Rohaktivität. Pulse-/Deepdive-Wortteil kann sich ändern, Hotcold-Phasen aus Nachrichtenmengen dadurch nicht. Reine Caption-/Zitatsegmentkorrektur kann eigene Textmengen verändern, ohne Sendeereigniszahl zu ändern.

## 22. Reanalyse nach Schlafprofil

Nur Ruhe-/Nachtkandidaten, First/Last und deren definierte Anzeigen prüfen. CR-08/09 mit tatsächlicher Aktivität, eindeutiger Zeit, Überlappung und Unsicherheit weiter anwenden. Geänderte Profilgrundlage kann frühere konkrete Ruheentscheidung reviewpflichtig machen, nicht automatisch alles bestätigen.

Keine Änderung von texting, emoji, streak, prime oder Rohpausen-/Antwortdauer. In einer Pausenansicht darf sich beschrifteter Schlafkontext ändern, ohne die Zahlen anzutasten. Keine automatische Schlafprofilinferenz hinzufügen.

## 23. Reanalyse nach Eventänderung

CRUD/Datum/Kategorie/Notiz aktualisiert Eventansicht, zeitliche Overlaps und definierte Kontextanzeigen, insbesondere Deepdive. Kandidaten-/Belegzustand entsprechend eventvertraglich aktualisieren; Nutzerbestätigung bleibt eigene Herkunft.

Keine automatische Hotcold-Mengenänderung, keine Silence-Dauersubtraktion, keine neuen Rohnachrichten. Optional angebotener Hotcold-Tages-/Silence-Intervallausschluss ist **zusätzliche explizite Entscheidung**, mit eigener Preview, Journal und Undo. Eine Eventnotiz ändert nicht die Bedeutung eines Originals ohne separate Analysekorrektur.

## 24. Reanalyse nach Hotcold-Tagausschluss

Whole-day-Maske in bestätigter Kalenderbasis verändert Vergleichstagsmenge, Baseline, Tagesklassen, Phasen und deren Evidence; Deepdive abhängig neu prüfen. Baseline mit denselben approved Regeln einmal aus bereinigter Basis, keine iterative Entfernung erkannter Phasen.

Eine Phase kann verschwinden oder Mindestdaten unterschreiten. Alte Deepdivewerte dann stale/insufficient-data, nicht als gültige Phase behalten. Rohnachrichten erhalten. Keine Wirkung auf pulse, streak, texting, prime oder silence. Undo stellt Tagesentscheidung wieder her, dann aktuelle Basis neu berechnen.

## 25. Reanalyse nach Silence-Ausschluss

Exaktes Intervall aus bereinigter Wertung nehmen; Rangfolge, Median/Maximum/n/Verteilung dieser Menge neu. Rohpause und Rohstatistik bleiben. Alle ausgeschlossenen Intervalle → bereinigte Werte not-applicable, keine 0-Dauer.

Keine Auswirkung auf response, hotcold, pulse, streak oder Nachtpausenwertung. Wenn neue Nachricht das Intervall teilt, alter Ausschluss inaktiv/reviewpflichtig; nicht auf eine neu entstandene Teilpause übertragen.

## 26. Semantische Abhängigkeiten

| Eingang | Verbraucher / zulässige Wirkung |
|---|---|
| Topics | Topic Starts: Impuls-/Fortsetzungskette prüfen bis nächster unabhängig gesicherter Grenze |
| Gültige Response Events | Fast Responder und Kurzantwortteil von Long Story; keine Frage-Antwortquote hinzufügen |
| Message Blocks | Response, Move und blockbezogene Longstory-Teile; weitere CR-Verbraucher bei tatsächlicher Strukturabhängigkeit prüfen |
| Hotcold-Phase/Baseline/Maske | Deepdive-Input und Vergleichsgültigkeit |
| Events | Deepdive-Kontext/Overlap, nicht dessen Rohzählformeln |
| Alias-/Personenbasis | Names und bei echter Identitätsänderung gemeinsame Personenmengen; reine Aliasform kein pauschaler Trigger aller Analysen |
| Sprache | Sprachabhängige Stopwords/words und semantische Klassen; Rohsendebeiträge/Kalender nicht automatisch verändern |

Weitere funktionseigene Korrekturen wirken lokal: questions, names, social, humor oder Eventkandidat ändern nicht pauschal ein anderes Feature. Nur bereits konkret belegte Quell-/Relationsabhängigkeiten prüfen, etwa ein Eventkandidat, der tatsächlich eine korrigierte Insiderzuordnung als abgeleitete Grundlage verwendet; keine neue automatische Featureverkettung erfinden. Ein Kontextbeleg ist kein zusätzlicher Score.

## 27. Dashboard

Nur vorhandene freigegebene Snapshots. Karte ist Projektion desselben fachlichen Ergebnis-/Runstands wie Detailanalyse. Ist diese stale/processing/error/review-required, Karte entsprechend kennzeichnen; keine alte aktuelle Zusammenfassung.

Kartenwahl/Reihenfolge verändert weder Menge noch Analyse. Verstecken verhindert keine notwendige Invalidation eines später wieder sichtbaren Ergebnisses. Gleicher Scope/Run ist überprüfbar; kein Dashboard-eigener Cachewert mit anderer Bedeutung.

## 28. Begleiter

Nur aktuelle valid Ergebnisse als aktuellen Befund erklären. Bei stale/review/error Status und tatsächlich bekannte Daten benennen; kein Referenz-/Mockwert, keine selbst errechnete Ersatzkennzahl oder Umgehung unavailable.

Aktion: konkrete Preview mit Chat, Gegenstand, alten/neuen Werten und tatsächlichen Folgen → ausdrückliche Bestätigung → Korrektur speichern → betroffene Reanalyse. Erfolg der Speicherung und Abschluss der Reanalyse getrennt melden. Bei geänderter Grundlage Preview erneuern; keine alte Bestätigung für neue Daten verwenden. Temporäre Frageperiode bleibt von globalem P getrennt.

## 29. Konflikte und parallele Änderungen

| Fall | Fachliches Ergebnis |
|---|---|
| Zwei schnelle Zeitraumänderungen | Nur zuletzt gültig gewählter Zielscope darf aktuelles Ergebnis liefern; ältere Antwort höchstens als historisch, nicht automatisch zurückschalten |
| Chatwechsel während Lauf | Ergebnis bleibt beim ursprünglichen Chat/Scope; keine Anzeige im neuen Chat. Ein weiterhin passender Lauf darf dort gültig werden |
| Korrektur während Lauf | Alter Inputstand wird überholt; Ergebnis darf neue Korrektur nicht überschreiben |
| Import während alter Analyse | Nach erfolgreicher Übernahme neue Datenversion; alter Run kein aktueller Ergebnisstand |
| Verspätetes altes Ergebnis | Vor Verwendung vollständigen Gültigkeitskontext prüfen, nicht nach Ankunftszeit gewinnen lassen |
| Zwei Korrekturen desselben Gegenstands | Auf aktuellen Entscheidungsstand anwenden; widersprüchliche veraltete Preview Review/neu bestätigen, keine zufällige Überschreibung |

Ein Run mit älterer globaler Nummer kann für **unveränderte** Teilbasis nur nach nachgewiesener fachlicher Äquivalenz wiederverwendet werden, niemals blind. Keine technische Queue-/Lock-/Abbrucharchitektur vorgeschrieben.

## 30. Fehler und Retry

Speicherfehler bei Korrektur: nicht als persistiert melden; gültigen Stand schützen. Erfolgreich gespeicherte Korrektur mit anschließendem Reanalysefehler bleibt erhalten. Fehlergrund ohne private Telemetrie, aktuelle betroffene Auswertung und Retry zeigen.

Letzte gültige Version darf ausdrücklich als alt mit ihrem Scope sichtbar bleiben, nicht als aktuelle Zahl. Retry verwendet aktuelle Korrekturen/Daten, keine veraltete geschlossene Preview. Wiederholen erzeugt keine zweite Korrektur oder Doppelzählung. Kein Mock-/Referenzfallback, kein „0“ als Fehlersurrogat.

Für Modellläufe gelten zusätzlich §10/34 des AI-Ausführungsvertrags: ungültige Hülle, falscher Scope/Version, fremde Referenzen oder fehlende erwartete Einheiten nicht übernehmen. Explizite unit errors in ansonsten vollständiger gültiger Ausgabe dürfen nur sichtbar partielle, korrekt abgegrenzte Resultate erzeugen. Review ist keine automatische Freigabe eines nicht evaluierten Ersatzmodells; bestehende Nutzerentscheidungen bleiben erhalten.

## 31. Löschen

Chat löschen ist eigene ausdrücklich benannte und bestätigte Aktion. Betrifft aktive Originale/Quellen, kanonische Nachrichten, Ergebnisse/Runs soweit personenbezogen, Evidence, Journal, Events/Kontext dieses Chats und gespeicherte semantische Ergebnisse sowie chatgebundene Nutzerzustände. Abgeleitete Such-/Index-/Zwischenstände dürfen gelöschten Inhalt nicht wieder sichtbar machen. Laufende/verzögerte Ergebnisse dürfen gelöschten Chat nicht wiederherstellen.

Andere Chats nicht löschen oder beeinflussen. Gemeinsam referenzierte Persondaten nur im erforderlichen Chatbezug entfernen, nicht unbemerkt in anderen Chats zerstören; konkrete produktive Löschabdeckung muss abschließend nachgewiesen werden. Nicht automatisch sämtliche Gerätedownloads löschen können behaupten.

Technische Backup-/Aufbewahrungsfristen bleiben späterem Privacy-/Produktionsvertrag vorbehalten. Kein „vollständig gelöscht“, solange technische Aufbewahrung noch besteht. IMP-RETENTION-01 verbietet heimliche Volltexthistorie nur fürs Undo; Journal ist kein Ausnahmeweg.

## 32. Dependency Matrix

**Zentrale fachliche V1-Matrix**, alle 22 Analysen: Free 6, Basic 9, Semantic 7. IDs entsprechen den freigegebenen Verträgen. Jede Zelle enthält genau einen der vereinbarten Werte.

- **direct:** Eigene Berechnungs-/Mitgliedschafts-/Korrektur- oder Kontexteingabe betroffen; geeignete Teilwerte und Evidence aktualisieren.
- **dependent:** Ergebnis konsumiert eine wirklich betroffene Voranalyse/Relation; nach deren Prüfung aktualisieren.
- **review:** Bedeutung/Relation/Gültigkeit betroffener Einheiten prüfen; notwendige Mengen neu aggregieren. Kein Pflichtreview unveränderter unabhängiger Einheiten.
- **context-only:** Nur Kontextanzeige/Overlap, keine Kennzahl-/Baseline-/Rohmengenänderung.
- **none:** Keine fachliche Berechnungswirkung dieser eng definierten Aktion. Darstellung, Quellenprovenienz oder reine Wiederverknüpfung zur gültigen Fassung kann dennoch zu aktualisieren sein.

Die Matrix ist eine **bedingte Änderungswirkung, keine Anweisung zu blindem Voll-Neulauf**. Nur tatsächlich veränderte Feld-/Scopebasis invalidiert. Add/Replace ohne fachliches Delta keine neue Inhaltsprüfung. Bei direct/review müssen nach Prüfung auch Zähler, Nenner, Membership und Gesamtresultat wieder konsistent werden; review bedeutet nicht „nur Badge ändern“.

| Änderung | prime | weekday | streak | peak | texting | emoji | hotcold | silence | move | response | firstlast | longstory | words | pulse | deepdive | questions | names | topics | social | lifeevents | humor | topicstarts |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Zeitraum | direct | direct | direct | direct | direct | direct | direct | direct | direct | direct | direct | direct | direct | direct | dependent | direct | direct | direct | direct | direct | direct | dependent |
| Add | direct | direct | direct | direct | direct | direct | direct | direct | review | review | review | direct | direct | direct | dependent | review | review | review | review | review | review | dependent |
| Replace | direct | direct | direct | direct | direct | direct | direct | direct | review | review | review | direct | direct | direct | dependent | review | review | review | review | review | review | dependent |
| Sender / echte Personenidentität | direct | direct | direct | direct | direct | direct | direct | direct | review | review | review | direct | direct | direct | dependent | review | review | review | review | review | review | dependent |
| Zeit / Präzision | direct | direct | direct | direct | direct | direct | direct | direct | review | review | review | direct | direct | direct | dependent | review | review | review | review | review | review | dependent |
| Text / eigene Textsegmente | none | none | none | none | direct | direct | none | none | review | review | review | direct | direct | direct | direct | review | review | review | review | review | review | dependent |
| Typ / Lösch-/Zitatstatus | direct | direct | direct | direct | direct | direct | direct | direct | review | review | review | direct | direct | direct | dependent | review | review | review | review | review | review | dependent |
| Alias (gleiche Person) | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | review | none | none | none | none | none |
| Reply (nur Relation) | none | none | none | none | none | none | none | none | review | review | review | dependent | none | none | none | review | review | review | review | review | review | dependent |
| Reaction | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none |
| Sleep profile | none | none | none | none | none | none | none | context-only | none | none | direct | none | none | none | none | none | none | none | none | none | none | none |
| Event CRUD | none | none | none | none | none | none | context-only | context-only | none | none | none | none | none | none | context-only | none | none | none | none | direct | none | none |
| Hotcold exclusion | none | none | none | none | none | none | direct | none | none | none | none | none | none | none | dependent | none | none | none | none | none | none | none |
| Silence exclusion | none | none | none | none | none | none | none | direct | none | none | none | none | none | none | none | none | none | none | none | none | none | none |
| Topic reclassification | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | direct | none | none | none | dependent |
| Response reclassification | none | none | none | none | none | none | none | none | review | direct | none | dependent | none | none | none | none | none | none | none | none | none | none |
| Response exclusion/inclusion | none | none | none | none | none | none | none | none | none | direct | none | dependent | none | none | none | none | none | none | none | none | none | none |
| Social label correction | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | none | direct | none | none | none |
| Spracherkennung | none | none | none | none | none | none | none | none | review | review | review | dependent | direct | none | none | review | review | review | review | review | review | dependent |
| Message-Block-Korrektur | none | none | none | none | none | none | none | none | direct | direct | review | direct | none | none | none | review | review | review | review | review | review | dependent |

### Verbindliche Leseregeln zur Matrix

1. **Zeit/Sender/Add/Replace:** Wenn chat_end/P oder Dyade verändert wird, zusätzlich Zeile Zeitraum beziehungsweise Sender auf alle tatsächlich betroffenen Mengen anwenden. Inhaltlich unabhängige Labels dürfen wiederverwendet werden; neue Membership muss trotzdem stimmen.
2. **Text:** Gleiche MessageId/Art/Zeit/Sender vorausgesetzt. texting umfasst Wortanteile; pulse/deepdive nur Wortteil direkt, deren Nachrichten-/Tageswerte nicht. firstlast nur bei tatsächlich inhaltsabhängiger Ruhezuordnung reviewen. Eine neue Tag-/Artzuordnung folgt zusätzlich ihrer eigenen Zeile.
3. **Typ:** Soweit die Korrektur relevante Grundmengen/Originalsegmente ändert. Bild→Video bei gleicher Nachrichteneignung erzeugt keine künstliche Streakänderung. Zitatstatus beeinflusst eigene Textbasis, nicht automatisch Sendeereigniszahl.
4. **Alias:** Nur bestätigte neue Anrede-/Aliasform bei unveränderter tatsächlicher Person; names prüfen. Echte Zusammenführung/Trennung von Personen oder geänderter Sender verwendet Zeile Sender. Reines Anzeigenamen-/Bild-Editing hat überall none für Analysewerte.
5. **Reply:** Nur Relation, nicht Quote-Segmentierung. Gegenstandsabhängige Kontextkonsumenten prüfen; keine automatische Pause/Dauer ändern. Wenn eigener/fremder Text korrigiert wird, zusätzlich Text/Typ. First/Last nur, wenn diese konkrete Relation eine benötigte Ruheinterpretation verändert.
6. **Reaction:** V1 keine Roh-/Emoji-/Analysewertung dieses Kanals; Reader/Reactionmetadaten separat aktualisieren. Keine spätere Reaction-Semantik vorwegnehmen.
7. **Sleep/Event:** context-only bei Silence/Hotcold nur schon vorhandene Kontextdarstellung; keine Zahlenänderung. Event CRUD erzeugt kein neues Themenlabel und keinen Hotcold-/Silence-Ausschluss.
8. **Response reclassification:** Move-review nur wenn tatsächlich die gemeinsame Fortsetzungs-/Neustartrelation geändert wird. Reine Antwortquellenberichtigung ohne Movebezug prüft nur Response/Short Answer. Ausschluss erzeugt nie automatisch Move; dafür separate Zeile. Longstory nur Kurzantwort-/Responsebestand, unabhängige Textlängen bleiben.
9. **Sprache:** Freigegebene Worttokenregel bleibt sprachübergreifend, Gesamtwörter nicht durch Stopwords verändern. words-Ranking/Signature und tatsächlich sprachabhängige Semantik neu prüfen; hybride Beziehungen nur bei genutzter Sprachklassifikation. Longstory abhängiger Kurzantwortteil nur über veränderte Responsezuordnung.
10. **Message Blocks:** Semantische Einheiten prüfen nur, wenn Blockgrenze/Relation Teil ihres Vertrags ist, etwa mehrteiliger Frageakt/Insidermindeststruktur. Longstory-Nachrichtenlängen nicht allein durch neue Blockgrenze ändern. Keine Änderung einer Silence-Rohpause allein durch Analyseblockbearbeitung.
11. **Lokale nicht separat tabellierte Labelkorrekturen:** questions, names, humor jeweils eigener Count/Nenner/Evidence direct, unabhängige andere Analyse none. Event-/Insider-Abhängigkeit nur bei bereits tatsächlich referenziertem abgeleitetem Gegenstand nach §26 review, niemals pauschal.
12. **Quellenidentität/Deduplizierung:** Aufgelöstes tatsächliches Zusammenführen/Trennen kann Anzahl, Sender, Zeit, Text und Relation verändern; zusammengesetztes Delta nach diesen Zeilen anwenden. Es ist kein globaler Belegausschluss. Keine zusätzliche Analyseabhängigkeit aus bloßer Dateiumbenennung.
13. **Dashboard/Begleiter** sind Projektionen/Konsumenten, keine der 22 Formeln. Sie übernehmen jeden relevanten Status-/Ergebniswechsel, ohne neue Kennzahlen.

Diese Matrix setzt freigegebene Formeln voraus und ersetzt keine per-Feature-Mindestdatenprüfung. Bei Konflikt oder neuer fachlicher Abhängigkeit an der Stelle dokumentieren und klären; Entwickler darf keine neue Produktkante hinzufügen.

## 33. Synthetische Ende-zu-Ende-Sollfälle

Rein synthetische Namen/Referenzen, keine Änderung ausführbarer Tests oder Baselines. „Nicht betroffen“ meint fachliche Werte bei sonst unveränderter Basis; Journal/Status und erlaubte Kontextanzeige können aktualisiert werden.

| Fall | Ausgangslage | Aktion | Erwartet invalidiert | Nicht betroffen | Finaler Zustand |
|---|---|---|---|---|---|
| EC01 Topic → Start | Drei vollständig entschiedene Nachrichten, zwei travel; ein belegter Start mit travel | Startnachricht travel entfernen, work ergänzen | topics travel 2→1, work +1; abhängiger topicstarts-Impuls/Zuordnung prüfen | Rohcounts, texting, response | valid: Themenanteile 2/3→1/3 travel; Start von travel nach work, Gesamtstart nur gleich, wenn weiterhin gültiger Impuls |
| EC02 Kompliment-X | Eine Nachricht thanks+compliment, weitere unabhängige Daten | Nur compliment ausschließen | social compliment, labelbezogener Nenner/Abdeckung/Union prüfen | thanks, texting, Worte/Emoji | valid: compliment entfernt, thanks erhalten, X sichtbar, Original unverändert |
| EC03 Response-X | Drei gültige Antworten 1/9/50 min, Wortlängen 2/4/8, keine offenen Fälle | 50-min-Event ausschließen | response Median 9→5 min, n3→2; longstory Kurzanteil 1/3→1/2 | Rohtextlängen, move, silence, Free | valid mit selben ausgeschlossenen Response-ID; Undo ursprüngliche Mengen |
| EC04 Schlafprofil | Gültiger beobachteter Ruhezyklus und profilsensitiver Kandidat | Profil so ändern, dass Kandidatenbedingung nicht mehr sicher erfüllt | Ruhezuordnung/firstlast reviewen | streak, prime, texting, emoji, Rohpause | Kein erzwungener neuer Ruhezyklus; valid nach Prüfung oder review-required, Streak unverändert |
| EC05 Eventdatum | Bestätigtes Event überlappt Cold-Phase | Datum außerhalb Phase verschieben | lifeevents/Overlap, deepdive context-only | Hotcold-Baseline/Counts, Silence-Dauer | valid: Kontextzuordnung entfernt, Mengen unverändert |
| EC06 Hotcold-X | 15 volle Tage: Tage 7–9 je 30 Nachrichten, übrige 12 Tage je 10; Baseline 210/15=14, Hot-Schwelle 21, Phase 7–9 | Tag 8 ausdrücklich ausschließen | hotcold Basis jetzt 180/14, Hot-Schwelle 270/14; Phasen/deepdive | pulse, streak, texting, prime, silence; Rohsumme 210 | Tage 7/9 bleiben einzeln Hot, ausgeschlossenen Tag nicht überspringen; keine Dreitagesphase, alter Deepdive nicht gültig |
| EC07 Silence-X | Rohpausen 1/9/360 min | 360-min-Intervall ausschließen | Bereinigtes silence n3→2, max360→9, Median9→5 | Rohmax360, response, hotcold, pulse, streak | valid: Roh-/bereinigt getrennt, Undo reversibel |
| EC08 Sender | Eine Nachricht bisher C, Quelle klärt B | Daten-Senderkorrektur auf B | A/B-Counts, Personen-/Zeitmengen und Struktur, Matrix Sender | Andere Chats; unveränderte unabhängige Quellen | Neue Mengen valid nach echten Berechnungen; keine bloße Namensänderung |
| EC09 Textedit | Gleiche Nachricht/Sender/Zeit, eigene „Danke, Reise nach Rom“ | Sicherer Edit „Arbeit morgen“ | Wörter/texting-Wortteil, words, social/topics/andere inhaltsabhängige Einheiten; topicstarts; pulse/deepdive Wortteil | Messagecount, unveränderte Tagesaktivität/Hotcold | Alte Inhaltskorrekturen Review nach DC-13; keine neue Nachricht |
| EC10 Add/P | chat_end 10.06.; 7 Tage 04.–10.06. | Eindeutig neuen A/B-Beitrag am 12.06. übernehmen | chat_end, P 06.–12.06., alle betroffenen gefilterten Ergebnisse | Customauswahl wäre unverändert; anderer Chat | valid nur mit neuer Membership/Evidence, alte Werte bis dahin markiert |
| EC11 Replace | Korrektur referenziert m1, bestätigtes manuelles Event vorhanden | Gültiger nichtleerer Replace enthält m1 nicht | Betroffene Werte/Evidence | Event/Kontext nicht löschen | Korrektur unresolved/inaktiv; kein Ersatzlink/Volltextarchiv, kein versprochenes Replace-Undo |
| EC12 Undo | EC02, Grundlage unverändert | Undo des konkreten Ausschlusses | Nur betroffene social-Mengen | texting/Original | Neue Journalrevision, ursprüngliche gültige Wertung neu berechnet |
| EC13 Undo nach Edit | EC02, inzwischen bedeutungsändernder Edit | Alten Ausschluss blind rücknehmen wollen | Betroffene Entscheidung reviewpflichtig | Kein automatischer positiver Treffer | Review statt Wiederherstellen eines Labels für alten Text |
| EC14 Reanalysefehler | Korrektur erfolgreich gespeichert | Neuberechnung scheitert | Betroffene Analyse error, Karte ebenfalls alt/error | Gespeicherte Korrektur bleibt | Alter Stand markiert, Retry aktuell; kein Mock und kein Undo der Korrektur wegen Fehler |
| EC15 Alter Run | Lauf R1 für Gesamt, danach R2 für 7 Tage | R1 kommt nach R2 zurück | Nur R2 darf aktueller 7-Tage-Stand sein | Aktuelle P-Auswahl | R1 überschreibt weder Zahl noch Evidence/Header |
| EC16 Chat-Isolation | Chats A und B getrennt, ähnliche Message-Texte | A-Social-Ausschluss | Nur A betroffener Scope | B Daten, Karten, Journal, Werte | A neu valid, B unverändert; keine textbasierte Verknüpfung |
| EC17 Pagination | Version V1 mit 101 fachlichen Einheiten, Seitenbreite im Test 50 | Alle Seiten durchlaufen; danach Korrektur | Nach Änderung neue konsistente Setversion | Vorherige Seitenfolge V1 zählt genau 101 | Kein Duplikat/Loch; UI benennt Versionswechsel, 50 ist Testparameter kein neues Produktlimit |
| EC18 Filter/Reader | Analyseklasse travel, lokaler Filter B, Position bei m7 | Beleg öffnen, zurück | Keine Analyseinvalidation | Global P, A/B-Werte | m7 korrekt fokussiert; Rückkehr erhält Klasse/Filter/Position |
| EC19 Reaction | Gültiger Bestand mit Emoji DNA | Reaction 😂 an vorhandene Message importieren | Keine der 22 Wertungen allein daraus | Emoji DNA, Messagecount, aktive Tage | Reaction im Reader/Metadatenstand, nicht Emoji-Vorkommen |
| EC20 Leere bereinigte Menge | Ein gültiges Silence-Intervall | Ausschließen | Bereinigte silence-Ausgabe | Rohintervall | n0, Maximum/Median not-applicable, nicht 0 Sekunden |
| EC21 Blockierende Importquelle | Gültiger Chat, neue Quelle mit ungeklärtem menschlichem Sprecher | Add bestätigen versuchen | Kein neuer übernommener Datenstand | Alle bisher gültigen Werte | Preview/Review, Bestand unverändert bis Klärung/Verwerfen |
| EC22 Optionale Metadaten fehlen | Eindeutiger TXT-Beitrag ohne Reply/Reaction/Source-ID | Import bestätigen | Nur tatsächlich neues Beitragdelta | Kein allgemeiner Importblock | Import zulässig; Metadaten unavailable, passende Unterfunktionen begrenzt |
| EC23 Chat löschen während Run | Lauf für Chat A noch offen | A ausdrücklich löschen; danach alter Run fertig | A-Ergebnisse dürfen nicht wieder aktiv werden | B | A-Daten gemäß Löschumfang entfernt/Status ehrlich, keine Wiederauferstehung durch späten Run |
| EC24 Reclassification vs. Exclusion | social agreement gültig | Nutzer setzt disagreement statt agreement | Beide labelbezogenen Mengen und Exklusivität | Original/Sender | agreement negativ, disagreement positiv nach gültiger Entscheidung; kein X ohne Ausschlussaktion |
| EC25 Quote-Korrektur | Fremdzitat bisher fälschlich als eigener Text | Eigen-/Zitatsegmente korrigieren | Wörter/Emoji/Semantik der eigenen Segmente und tatsächliche Abhängigkeiten | Belegtes Sendebeitragsereignis bleibt | Keine doppelte Quelle, eigene Mengen bereinigt, Herkunft sichtbar |
| EC26 Aktuelle Fassung wählen | Sicher gleiche ID, zwei ungeordnet widersprüchliche Fassungen | Nutzer wählt konkrete Fassung als aktuellen Appstand | Betroffene Inhaltsbasis nach Importfreigabe und DC-13 | Kein „späterer Import gewinnt“ | Nutzerherkunft, alte Entscheidung geprüft, echte Reanalyse |
| EC27 Alle offenen Fälle | 10 geeignete semantische Einheiten, 2 positiv, 6 negativ, 2 Review | Anzeige ohne Reviewabschluss | Keine künstliche Gesamtquote | Originalbasis | 25 % unter 8 entschiedenen, 80 % Abdeckung; offene nicht negativ |
| EC28 Korrektur im Lauf | R1 verarbeitet alten Signalstand | Nutzer speichert neue Labelkorrektur, danach R1 fertig | Neuer Korrekturstand benötigt gültiges Ergebnis | Journalentscheidung darf R1 nicht überschreiben | Alter Run verworfen/alt, aktueller Retry/Lauf konsistent |

## 34. Acceptance Criteria

Diese ACs sind fachliche Vorgaben für das spätere finale Testpaket, keine hier ausgeführten Tests.

| ID | Konkrete Abnahme |
|---|---|
| AC-EV-01 Vollständigkeit | Für jedes veröffentlichte Ergebnis lassen sich Zähler und Nenner aus vollständig erreichbarer Basis mit exakt gleichen Einheiten/Versionen reproduzieren; R/U/X und Abdeckung stimmen. Quantitative Mengen ohne künstliche semantische Labels. |
| AC-EV-02 Pagination | Vollständiges Durchlaufen mehrerer Seiten liefert jede fachliche Einheit genau einmal, stabile Gleichstände und korrekte Gesamtzahl; Korrektur zwischen Seiten erzeugt sichtbaren konsistenten Standwechsel. |
| AC-EV-03 Filter | Person/Zeitraum/Label/Status/Confidence/Quelle im fachlich zulässigen Umfang geprüft, Schnittmengen korrekt; lokale Filter verändern weder globale P noch Ergebniscounts. Leere Treffer keine neue Nullanalyse. |
| AC-EV-04 Originalsprung | Alle sichtbaren Originaltexte fokussieren richtige MessageId/Fassung/Segment; mehrteilige Einheiten erlauben alle Sprünge. Unresolved zeigt Ursache und keinen Ersatzlink. |
| AC-EV-05 Rücknavigation | Rückkehr von Reader erhält Analyse/Dialog, Tab/Klasse, Filter/Sortierung und stabile Position; bei Mengenänderung nachvollziehbarer Ersatzanker. |
| AC-EV-06 Journal/Persistenz | Korrektur und wirksamer Entscheidungsstand bleiben nach Reload konsistent, mit Chat/Dyade, Herkunft, Versionen, vorher/nachher und Gültigkeit. Entfernte Volltexte nicht allein fürs Journal konserviert. |
| AC-EV-07 Undo | Konkrete Entscheidung bei unverändertem Gegenstand rücknehmbar, Mengen tatsächlich neu; relevanter Edit/konkurrierende Folgeentscheidung verlangt Review. Wiederholtes Undo keine Doppelwirkung, kein unerlaubtes Replace-Undo. |
| AC-EV-08 Reklassifizierung | Nur approved Labels/Rollen; Exklusivität, Multi-Label und Wirkung von negativ/Review/X verschieden. Topickorrektur nutzt zentrale topics-Basis. |
| AC-EV-09 Add/Replace | Eindeutig gleiche MessageIds/Korrekturen bleiben, relevant geänderte Review, fehlende unresolved/inaktiv. Kontext/Events erhalten. Blockierende Konflikte kein Teilcommit; leerer Replace keine Löschung. |
| AC-EV-10 Echte Reanalyse | EC01–EC10 nachrechenbare Mengen-/Nenner-/Baseline-/Relationseffekte; Flag/Toast allein besteht nicht. Nicht betroffene Matrixfelder bleiben fachlich unverändert. |
| AC-EV-11 Status/Fehler | valid→stale→processing→valid/error/review nachvollziehbar; alte Werte markiert, 0/Mock kein Ersatz; gespeicherte Korrektur bei Reanalysefehler bleibt. |
| AC-EV-12 Konsistenz | Karte, Detail, Evidence, Zeitraum und Nenner referenzieren denselben gültigen Ergebnisstand; keine Mischstände während Lauf/Fehler. |
| AC-EV-13 Chat-Isolation | Gleiche Texte/ähnliche IDs in A/B-Chats beeinflussen einander nicht; Dyaden-/Personenentscheidungen behalten tatsächliche Identitäten. |
| AC-EV-14 Paralleländerung | Zwei P-Wechsel, Chatwechsel, Korrektur im Lauf, Import im Lauf, verspäteter Run und gelöschter Chat nach EC15/23/28 geprüft; älterer Scope überschreibt nie neueren Zustand. |
| AC-EV-15 Begleiter | Aktuelle Zahl nur aus valid Resultat; stale/error/review ausdrücklich benannt. Aktion nur nach konkreter gültiger Preview/Bestätigung; tatsächliche Reanalysewirkung berichtet. |
| AC-EV-16 Mobile/Bedienung | 390×844 und 430×932: Belegfilter, Pagination, Korrektur, Reader/Rückkehr und Undo bedienbar; Dialog intern scrollbar, Hintergrund gesperrt, Escape/Schließen/Rückfokus sinnvoll. |
| AC-EV-17 Privacy/Löschung | Keine privaten Texte in öffentlichen Artefakten/normalen Logs; Löschaktion umfasst spezifizierte Chatdaten/Ableitungen/Journal, späte Runs erzeugen nichts neu. Technische Aufbewahrung ehrlich benannt. |
| AC-EV-18 Zustände | Empty, Loading, unsupported, insufficient-data, not-applicable, unavailable, Review und Error anhand definierter Fälle getrennt; keine erfundene Datenbasis. |
| AC-EV-19 Scopeausschluss | Label-X erhält andere Labels; Silence-X nur bereinigt; Hotcold-Tages-X nur genehmigte Baseline/Phase/Deepdive. Phasenauswahl keine versteckte dynamische Maske. |
| AC-EV-20 Freigabequalität | Alle eingesetzten semantischen Klassen erfüllen ihre freigegebenen Qualitäts-/Review-/Auto-Gates; Korrekturfunktion ersetzt keine Evaluation. Critical Errors 0 im festgelegten unabhängigen Abnahmesatz/Integritätstests. |

## 35. Offene Product Decisions

Für die hier aus approved Regeln und dem ausdrücklichen Auftrag abgeleiteten Evidence-/Korrektur-/Reanalyseabhängigkeiten ist **keine weitere fachliche Auswahlregel erforderlich**. Keine neue Undo-Editorhistorie, Analyseklasse oder unbestimmte globale Ausschlusswirkung wird eingeführt.

Weiterhin außerhalb dieses Vertrags vor Produktionsfreigabe zu konkretisieren:
- finaler Privacy-/Löschvertrag mit tatsächlicher technischer Aufbewahrung, Backupfristen, zulässiger Historie und überprüfbarer Löschzusage; IMP-RETENTION-01 bleibt verbindlich, keine neuen Fristen;
- D-PERF/D-COST anhand realer Messungen im zuständigen späteren Schritt; hier weder Zahlen noch Kontingentregeln;
- echte Implementierung, Qualitätsnachweise und Übernahme dieser ACs ins spätere Testpaket.

Technische IDs, Datenbank, Transaktionen, Queues, Caches, UI-Bibliotheken und Scheduling sind Entwicklerentscheidungen innerhalb dieses Vertrags. Sie dürfen keine andere Dependency-/Scopewirkung erzeugen. Neue fachliche Lücken vor Änderung einer Analyseentscheidung dokumentieren und freigeben lassen.

## 36. Abschluss

36 Kapitel, zentrale Matrix für alle 22 V1-Analysen, 28 synthetische Ende-zu-Ende-Sollfälle und 20 Acceptance Criteria. Verbindliche Importfreigaben sind in V1_PRODUCT_DECISIONS.md und IMPORT_AND_CHAT_UPDATE_V1.md nachgeführt.

Diese Datei beschreibt Sollverhalten, keinen bereits erreichten Produktstand. Kein Anwendungscode, keine Registry und keine Tests/Baselines verändert. Keine Reanalyse implementiert, keine private Quelle importiert, keine neuen Produktfunktionen aktiviert. Danach stoppen.

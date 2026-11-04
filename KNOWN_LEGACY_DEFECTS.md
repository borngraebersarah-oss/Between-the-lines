# Bekannte Legacy-Defekte

Stand: 04.10.2026. Quelle: unverändertes Handoff, Quellprüfung und Browserprüfung aus `MIGRATION_NOTES.md`. Alle Einträge sind offen, sofern nicht ausdrücklich anders angegeben.

**Diese Defekte sind kein gewünschtes Paritätsverhalten.** Characterization-Tests unter `legacy-defects` dokumentieren ausschließlich den alten Stand. Sie dürfen nicht als Akzeptanztests für die spätere React-App verwendet werden. Fachliche Korrekturen benötigen eine freigegebene Sollregel; Schritt 5 enthält vier ausdrücklich beauftragte Produktkorrekturen, aber keine neuen Analyseformeln.

| ID | Befund | Folge / spätere Bearbeitung |
|---|---|---|
| LD-01 | Widersprüchliche Referenzzahlen: 11.703 Rohdatensätze, 11.651 Dashboard, 11.657 relevant; Peak 653 in Tagesreihe, 652 auf Funktionsseite. Pulse enthält alte und neue unterschiedliche Gesamtbasen. | Herleitung der jeweiligen Datenbasis fehlt. Beobachtete Werte getrennt sichern; keine Filter oder Formeln erfinden. |
| LD-02 | Ausschluss/Wiederaufnahme von Evidence verändert nur gespeicherte Flags und Darstellung; Kennzahlen bleiben gleich. Pausenausschluss und Eventwirkung besitzen ebenfalls keine vollständige Reanalyse. | Echte Recalculation, Abhängigkeiten und konsistente Ergebnisaktualisierung fehlen (PM-05). |
| LD-03 | Import, Append und Replace simulieren Erfolg. Nur Quellenmetadaten ändern sich; Wizard verwendet feste Teilnehmer. | Parser, Deduplizierung, Datenersetzung, Vorschau/Bestätigung und Updatebericht fehlen (PM-03/11). |
| LD-04 | `body.ux-mode .ux-test-only{display:block!important}` macht bei `?test=1` alle Overlays sichtbar. | Ergebnis-/Bewertungsdialog verdecken den Teststart. Technische Reparatur erst separat im späteren Testmodul. |
| LD-05 | Zehn Evidence-Gruppen enthalten nur 33 Beispiele; Fragenliste nur drei Einträge trotz 1.770 angezeigter Fragen. | Vollständigkeit, Pagination und Filter fehlen (PM-04). |
| LD-06 | Message-Verweise sind Arrayindizes, heuristische Textsuche oder nächstgelegener Timestamp; Eventbelege sind Textkopien. | Falsche Sprünge bei Duplikaten/Updates möglich. Stabile IDs vorbereiten; zukünftiges Matching separat definieren. |
| LD-07 | Zustand ist global, nicht chatbezogen. Weitere Bibliothekseinträge nutzen denselben Analyse-/Nachrichtenbestand. | Keine belastbare Trennung von Kontext, Ereignissen, Quellen, Korrekturen, Dashboard oder Dialogverlauf. |
| LD-08 | Globaler Analysezeitraumfilter fehlt. | Mehrere Ansichten können keinen gemeinsamen Zeitraum anwenden (PM-01). |
| LD-09 | Schlafzeiten sind ein gemeinsames Wertepaar und keine individuellen Profile. | Schlaf-/Nachtkontext pro Teilnehmer fehlt (PM-02). |
| LD-10 | Gruppen-/Sprechererkennung und bestätigte Dyadenauswahl fehlen. | Gruppenkennzahlen sind nicht implementiert (PM-03). |
| LD-11 | Life-Event-Suche nutzt lokale Worttreffer, beschränkt auf zwölf; keine echte LLM-Suche oder Confidence. | Kandidaten und Unsicherheit fachlich ausarbeiten (PM-07). |
| LD-12 | Begleiter liefert feste Antworten; kein Aktionenmodell mit konkreter Bestätigung. | PM-06; temporärer Analysezeitraum ebenfalls nicht implementiert. |
| LD-13 | Raincheck besitzt keine Planobjekte, Änderungsverläufe oder vollständige Review-Aktionen. | PM-10. |
| LD-14 | Allgemeines Korrekturjournal, Undo, Reklassifizierung und Bestätigung unsicherer Evidence fehlen. | Wieder-Einbeziehen ist nur für einige Flags vorhanden (PM-04/05). |
| LD-15 | Event-Verwerfen löscht den Vorschlag; Ablehnung wird nicht dauerhaft gespeichert. | Wiederkehrende Vorschläge nach Updates nicht zuverlässig unterdrückbar. |
| LD-16 | Restore ignoriert leere Event-/Quellenlisten; Storagefehler werden verschluckt. | Gelöschte Listen können wieder als Defaults erscheinen; fehlgeschlagene Speicherung bleibt unsichtbar. Adapter muss Rohbestand sichern. |
| LD-17 | Kategorien „Eigenes Event“/„Eigene Events“ sind uneinheitlich; Status/Quellen unterscheiden sich vom Datenmodell. | Filter/Zuordnung gefährdet. Adapter behält Originalfelder und explizite Zuordnung. |
| LD-18 | Nicht jeder Chattext ist navigierbar; Textheuristik betrifft nur bestimmte Detail-Zitate. | Globale ID-basierte Quellverlinkung fehlt (PM-08). |
| LD-19 | Avatare stehen überwiegend in Headern, fehlen in Personenvergleichen/Belegen. | PM-09; keine visuelle Korrektur während der Strukturmigration. |
| LD-20 | Charts haben unvollständige Wertbeschriftung, keine vollständigen Touch-/Hoverdetails, keine durchgängige Zeitbereichsinteraktion. | Chartdaten und Einheiten bei späterer Verbesserung prüfen; aktuelle Geometrie zunächst sichern. |
| LD-21 | Sprachwahl ändert vor allem Kennzeichnungen; Profil-Sprachbutton sowie Hilfe/Datenschutzverwaltung teils ohne Handler. Rechtsinhalte Platzhalter. | Vollständige Lokalisierung und Produktbereiche fehlen. |
| LD-22 | Sieben Features besitzen nur eine Platzhalteransicht. | Keine Ergebnisberechnung: qdyn, flow, closeness, mineours, opening, report, changed. Keine Ergebnisse erfinden. |
| LD-23 | Feature-/Tiermatrix weicht ab: Deep Dive Basic statt Premium/Advanced; closeness fehlt in Matrix; changed/report andere Kategorien. Preise vorläufig. | Offene Produktentscheidungen, keine stillen Änderungen im Katalog. |
| LD-24 | UX-Modus hat sechs statt der zehn spezifizierten Aufgaben und ist an globale Handler gekoppelt. | Nach Overlay-Reparatur Abdeckung/JSON-/CSV-Export prüfen. |
| LD-25 | Gemischte Versionsangaben v0.5/v0.6/v0.7 und nachträgliche Funktionsüberschreibungen. | Frühere Definitionen können versehentlich wieder aktiv werden. Wirksame letzte Varianten sichern. |
| LD-26 | Error/Empty/Loading-Zustände sind nicht durchgängig; Datenfehler wird primär im Import behandelt. | Zustand pro Flow bei späterer Übernahme explizit prüfen. |
| LD-27 | Chatviewer hat Suche und Fensterwechsel, aber keinen vollständigen Datumssprung, Personenfilter oder vorherige/nächste Evidence-Navigation. | Viewer-Erweiterungen separat nach Parität. |
| LD-28 | Eventtitel können im Legacy durch einen automatischen Ersatz statt einer Pflichteingabe entstehen. | Schritt 5 weist leere/Whitespace-Titel inline ab und erhält andere Eingaben. Beschädigte Altdaten erhalten keinen erfundenen Titel. |
| LD-29 | Eventicons sind Emoji-/Kategoriezuordnungen ohne persistente kuratierte Nutzerwahl. | Schritt 5 ergänzt zehn Line-Icon-IDs; explizite Wahl bleibt bei Bearbeiten/Kategoriewechsel erhalten. |
| LD-30 | Fast-Responder-Verteilung und zusätzliche 5-Minuten-Quote widersprechen sich (82,5/80,1 gegenüber 85,0/81,8). | Beide gespeicherten Ergebnisse erhalten; keine neue Grenz- oder Rundungsregel erfinden. |
| LD-31 | Deep Dive zeigt eine gespeicherte Cold Phase, während Hot & Cold nach alten Ausschlüssen keine belastbare Cold Phase meldet. Der alte Deep Dive nahm teils ein beliebiges bestätigtes Treffen ohne echte Überschneidung. | Widersprüchliche Befunde dokumentieren; kein erfundener Kausalbezug. Im React-Kontext werden nur zeitlich überschneidende bestätigte Treffen angezeigt. |

Private Chats, Ereignisnotizen und Fotos werden in diesem Register nicht wiedergegeben. Die technischen Baselines enthalten nur IDs, Strukturen, Zählwerte und überprüfte UI-Beschriftungen.

## Einordnung nach Schritt 4

Der private Originalprototyp wurde nicht verändert. Im migrierten React-Umfang wurden LD-07 (global vermischte Interaktionen), LD-15 (Verwerfen ohne Ablehnungsstatus) und LD-16 (leere Listen/verschluckte Storagefehler) bewusst nicht übernommen. LD-06/18 werden für die migrierten Beleg-, Event- und Pausensprünge durch explizite Message-IDs behandelt; unklare Referenzen bleiben `unresolved`. Die globale Verlinkung noch nicht migrierter Renderer ist weiterhin offen. LD-04/24 gehören zu den noch nicht migrierten Testwerkzeugen.

**LD-02 bleibt ausdrücklich offen:** Ausschlüsse, Wiederaufnahme und Hot-&-Cold-Kontextwirkung speichern Flags, lösen keine echte Neuberechnung aus. Die Oberfläche sagt dies ausdrücklich. **LD-03 bleibt ebenfalls offen:** Import, Add und Replace sind Simulationen der Quellenmetadaten. Die React-Oberfläche kennzeichnet Teilnehmer als synthetische Demo-Personen und behauptet weder Parsererfolg noch echte Teilnehmererkennung. LD-01 wird nicht fachlich korrigiert; die bisherigen Referenzkarten bleiben gekennzeichnete Altwerte. Vollständige Beleglisten, individuelle Schlafprofile, LLM und Plantracking bleiben im Post-Migration-Backlog.

## Einordnung nach Schritt 5

Die obige Schritt-4-Einordnung ist historisch. Technische Demo-/Synthetic-Texte wurden jetzt aus der normalen Oberfläche entfernt; intern bleiben Herkunft und Privacy-Grenzen erhalten. Import und Datenverwaltung tragen den zentralen Hinweis „Im Prototyp simuliert“.

LD-09 ist für Formular, Domain, Persistenz und Analysevertrag bearbeitet: optionale Zeiten je ParticipantId, unbekannt ohne Eingabe, echte Aktivität hat Vorrang. Die Berechnungsseite bleibt mit LD-02 offen. LD-19 ist für Personenvergleiche mit kleinen optionalen Fotos/Initialen umgesetzt. LD-20 ist für die migrierten Zahlencharts durch Einheiten, auswählbare Datenpunkte, Hover/Fokus/Klick und mobile 44er-Steuerflächen bearbeitet; eine globale Zeitrauminteraktion fehlt weiter. LD-17 wird im Life-Events-Filter für die beiden bekannten Eigenes/Eigene-Kategoriebezeichnungen behandelt.

LD-06/18: dargestellte Nachrichten/Zitate der neuen Ansichten besitzen explizite Quell-IDs. Private Inhalte sind ersetzt; nicht auflösbare Altbelege bleiben unresolved. Es wird keine Heuristik über Arrayindex, Textanfang oder geratenen Timestamp eingesetzt. Die Zahl privater Belege wird dadurch nicht als vollständig öffentlich verfügbar behauptet.

LD-01, LD-02, LD-03, LD-05, LD-11/12/13 sowie die sieben LD-22-Funktionen bleiben ausdrücklich offen. Der private Legacy-Prototyp wurde nicht verändert.

## Einordnung nach Schritt 6

LD-04/24 wurden bewusst nicht übernommen: Der explizite lokale UX-Modus zeigt ein normales aufklappbares Testpanel statt erzwungener Overlays. Zehn Aufgaben, Messfelder, CSV/JSON-Vorschau und Download sind implementiert. Normale Dialoge bleiben unabhängig bedienbar.

LD-08/20: zentraler persistenter Zeitraum pro Chat; Referenzen werden nicht als neu berechnete Filterwerte ausgegeben. Öffentliche Wortbelege und vorhandene Eventdaten sind filterbar. Mengenachsen sind ganzzahlig, Balkenwerte direkt sichtbar, dichte Balken umbrechen mit gleichbleibender Skala und mindestens 44 breiten Treffern. Tooltips erscheinen am Chart; die redundanten Datenpunkt-Dropdowns fehlen. Zeitachsen sind adaptiv, unvollständige Referenzwochen gekennzeichnet.

LD-12 ist für bestätigungspflichtige Frontendaktionen behoben; ein echter LLM-Begleiter bleibt offen. LD-11 besitzt jetzt einen typisierten Mock mit mehreren belegten Kandidaten und transparenter qualitativer Unsicherheit. Eine echte semantische Vollsuche ist weiterhin nicht implementiert. Die sieben LD-22-Funktionen bleiben unavailable.

Zusätzlich abgesichert: Rückkehr hinter Dialogen stellt die Dokumentposition wieder her; ein Belegknopf in einem Eventformular löst kein unbeabsichtigtes Speichern aus; Formulare bleiben während Reader-Ausflügen erhalten; Schlafprofiländerungen verlieren durch einen zwischenzeitlichen Loading-Zustand nicht den Rückfokus; abgebrochene Paywalls verändern den Back-Verlauf nicht.

**Offen bleiben insbesondere LD-01, LD-02, LD-03, LD-05, LD-10, LD-13/14 sowie echte Backend-/LLM-Funktionalität.** Referenzzahlen wurden nicht fachlich korrigiert. Kein zusätzlicher Chatnachrichtentext wurde für dieses Paket erzeugt; neue Suchbelege verweisen auf bereits vorhandene öffentliche Nachrichten.

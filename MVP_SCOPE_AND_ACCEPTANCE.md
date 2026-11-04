# MVP Scope & Acceptance — erste echte Produktversion

Stand: **04.11.2026**. Grundlage: `CURRENT_PRODUCT_STATE.md`, die geltenden Produkt-/UX-/Analyse-/Import-/KI-Spezifikationen sowie die aktuelle Feature- und Analyse-Registry.

## 0. Zweck, Verbindlichkeit und Definition von „fertig“

Diese Arbeitsgrundlage beschreibt den **fachlichen Zielzustand**, nicht den heutigen Funktionsnachweis. Aktuell bestehen 33 registrierte Analyseziele, 26 React-Ergebnisansichten und sieben unavailable-Funktionen. Import und Begleiter sind simuliert; Analysekennzahlen sind Referenzen; echte Reanalyse fehlt. DESIGN_CORRECTIONS_1 und DESIGN_CORRECTIONS_2 sind umgesetzt. Die vorhandene Oberfläche ist eine nutzbare Grundlage, aber noch keine produktive Analyseanwendung.

Die bestehenden harten Produktregeln bleiben verbindlich: Chat-Isolation, stabile Originalreferenzen, vollständige semantische Evidence, persistente und rücknehmbare Korrekturen mit Reanalyse, belegte Aussagen und Bestätigung zustandsändernder Begleiteraktionen. Eine Referenzansicht, ein gespeichertes Ausschlussflag oder eine Mockantwort erfüllt diese Regeln allein nicht.

**Empfehlung:** V1 soll 15 verbindlich einzuplanende Kernanalysen aus Gruppe A und bis zu sieben qualitätsabhängige Analysen aus Gruppe B enthalten. Elf Funktionen werden für später empfohlen. Die Zuordnung A/B/C und neu vorgeschlagene Umfangsgrenzen sind ausdrücklich **Empfehlungen**, keine bereits getroffenen Produktentscheidungen. Preise und Registry-Einträge werden dadurch nicht geändert. Nach ausdrücklicher Annahme des Zielumfangs bilden dessen Muss-Kriterien den Abnahmevertrag.

**V1 ist fachlich fertig, wenn gleichzeitig gilt:**

1. Der konkrete Releaseumfang ist beschlossen: alle angenommenen A-Funktionen, jede einzeln freigegebene B-Funktion und die zusätzlichen Produktbereiche sind namentlich festgehalten. B ist keine pauschale Freigabe für KI-Funktionen.
2. Für diesen Umfang sind alle als blockierend bezeichneten fachlichen Entscheidungen geschlossen; Definitionen, Grenzfälle und erwartete Testresultate liegen vor. Ein offener Schwellenwert wird nicht vom Implementierer geraten.
3. Echte Nutzerdaten durchlaufen Import → Analyse → vollständige Belegprüfung → Korrektur → Reanalyse → Chatupdate ohne Verlust von Identitäten oder Nutzerentscheidungen.
4. Sämtliche anwendbaren Acceptance Criteria in Abschnitt 7 sind mit Nachweisen bestanden. „Nicht anwendbar“ ist nur bei ausdrücklich nicht veröffentlichtem Funktionsumfang zulässig.
5. Nicht freigegebene Funktionen werden weder als verfügbar gezählt noch mit Referenz-/Mockresultaten für einen echten Chat beworben. Ein Tarifwechsel kann fehlende Produktlogik nicht freischalten.

**Noch keine Produktionsfreigabe:** Die Entscheidungen in Abschnitt 9 sind derzeit offen. Der Erstellungsauftrag für dieses Dokument ist keine Freigabe zur Implementierung, keine Zustimmung zu neuen Formeln und keine Abnahme von V1.

### Maßgebliche Grundlagen

- Iststand: `CURRENT_PRODUCT_STATE.md`, `src/config/featureRegistry.ts`, `src/analysis/registry.ts`, `src/config/plans.ts`.
- Produktregeln: `AGENTS.md`, `docs/PRODUCT_SPEC.md`, `docs/UX_RULES.md`, `docs/ANALYSIS_RULES.md`, `docs/IMPORT_PERSISTENCE.md`, `docs/AI_COMPANION_SPEC.md`, `docs/DATA_MODEL.md`.
- Gestaltung und Grenzen: `docs/DESIGN_SPEC.md`, `docs/FRONTEND_DESIGN_SYSTEM.md`, `docs/SECURITY_PRIVACY.md`, `docs/OPEN_DECISIONS.md`, `KNOWN_LEGACY_DEFECTS.md`.
- Die heutige Registry liefert die **aktuellen** Tarife; Abweichungen zur alten `FEATURE_MATRIX.md` sind keine stillschweigend gelösten Preisentscheidungen. Die später freigegebenen zwei Themes ersetzen die historische Drei-Theme-Planung.

Der übergebene Auftrag endet in Abschnitt 8 nach dem Wort „Keine“. Eine fehlende Fortsetzung wird nicht erfunden. Die ausdrücklich vorliegenden Anforderungen werden vollständig behandelt; Abschnitt 8 dieses Dokuments grenzt fachliche Ziele von späteren technischen Entscheidungen ab.

## 1. Einordnung aller 33 Analysefunktionen

**Iststand-Legende:** R = vorhandener React-Renderer mit gespeicherten Referenzwerten/kuratierten Ersatzinhalten, keine produktive Berechnung. E = lokale Eventverwaltung funktioniert; initiale Events und Suchtreffer sind Fixtures/Mock. U = ausdrücklich unavailable, kein Ergebnisrenderer. Die Typangabe beschreibt die fachliche Gesamtfunktion, nicht zwingend einen LLM-Einsatz; „hybrid“ kann Statistik, Strukturregeln, Kontext und semantische Entscheidungen verbinden. Semantische Teile einer A-Funktion müssen dieselben Qualitätsanforderungen wie B erfüllen.

Die Entscheidungs-IDs D-… werden in Abschnitt 9 konkretisiert. Keine Tabellenzeile legt eine fehlende Formel oder Confidence-Schwelle fest. Neben dem individuellen Kriterium gelten für **jede veröffentlichte Funktion** Evidence-, Zeitraum-, Reanalyse-, Datenschutz- und Fehlerkriterien aus den folgenden Abschnitten.

### A. V1 — muss produktiv funktionieren: Empfehlung, 15 Funktionen

Begründung: Die Zielgrößen sind überwiegend quantitativ oder als begrenzte Struktur-/Kontextlogik beschrieben. Ihre offenen Regeln lassen sich voraussichtlich in abgegrenzten Rechenverträgen und prüfbaren Beispielen schließen. Besonders Hot & Cold, Deep Dive und Gesprächs-/Nachtlogik sind trotzdem keine bereits fertig spezifizierten Algorithmen.

| Feature-ID — Name | Aktueller Tarif | Iststand | Empfohlene V1-Priorität | Typ | Wesentliche Produktionsvoraussetzung | Noch offene fachliche Entscheidung | Abnahmekriterium auf hoher Ebene |
|---|---|---|---|---|---|---|---|
| `prime` — Prime Time | Free | R · Stundenserie/Anteile | A · Pflicht | deterministisch | Echte Nachrichtenaggregation nach Uhrzeit und freigegebenem Zeitraum. | D-DATA/TIME: relevante Menge, Zeitzone; Definition des Prime-Fensters, Gleichstände. | Stundenmengen, gewähltes Fenster und A/B-Anteile entsprechen dem freigegebenen Prüfsatz; Quellnachrichten sind auffindbar. |
| `weekday` — Lieblingstag | Free | R · Wochentagsdurchschnitte | A · Pflicht | deterministisch | Korrekte Kalendertage und Nenner je Wochentag. | D-TIME: Randtage, fehlende Tage, Gleichstände und Mindestumfang. | Ein Zeitraum mit unterschiedlich vielen Montagen/Freitagen liefert die freigegebenen Durchschnitte, nicht bloß Rohsummen. |
| `hotcold` — Hot & Cold Phases | Basic | R · Verlauf/Phasen, Kontextflags | A · Pflicht nach Regelklärung | hybrid | Reproduzierbare Phasenerkennung relativ zum Chatnormal; explizite Event-/Ausschlusswirkung. | D-TRENDS: Normalbasis, Schwellen, Mindestdauer, Randperioden, Ausschlüsse; LD-31. | Freigegebene Hot-/Cold-/Normalfälle werden richtig erkannt; Ausschluss und Undo liefern die erwarteten Vergleichswerte, ohne emotionale Zuschreibung. |
| `silence` — Longest Silence | Basic | R · Roh-/bereinigte Pausen, Review | A · Pflicht | hybrid | Echte Intervalle zwischen relevanten Nachrichten; getrennte Roh-/Kontextwertung. | D-CONVERSATION/TIME: relevante Pause, Schlaf-/Treffenkürzung, Grenzen und Nenner. | Jede gewertete Pause hat exakte Vorher-/Nachher-MessageIds; Review verändert Dauer/Rangfolge/Verteilung entsprechend der freigegebenen Regel. |
| `streak` — Chat Streak | Free | R · 70-Tage-Referenz | A · Pflicht | deterministisch | Mindestens eine relevante Nachricht definiert einen aktiven Kalendertag. | D-DATA/TIME: Tagesgrenze, Importlücken, Teilperioden und „mindestens“. | Ein Prüfsatz mit aktivem Tag, echtem Leertag und Importgrenze liefert die erwartete Serie; persönliche Treffen verlängern sie nicht automatisch. |
| `peak` — Peak Day | Free | R · Tages-/24h-Peaks | A · Pflicht | deterministisch | Tagesmaximum und rollierendes 24h-Fenster aus derselben autorisierten Datenbasis. | D-TIME: Fenstergrenzen/Gleichstände; LD-01: bisherige 652/653-Differenz. | Tageschart, Detail und Dashboard widersprechen sich bei gleicher Definition nicht; Tagespeak und rollierender Peak sind getrennt nachvollziehbar. |
| `move` — Wer macht den ersten Move? | Basic | R · Starts/Beispiele | A · Pflicht nach Regelklärung | hybrid | Echte Gesprächssegmentierung, Fortsetzung von neuem Austausch unterscheiden. | D-CONVERSATION: Unterbrechungsschwelle, Reply-/Fortsetzungsausnahme, Importgrenze. | Erstimport-Nachricht zählt nicht automatisch; freigegebene Fälle „Fortsetzung“, „Neustart“ und „Themenwechsel“ sind korrekt getrennt und belegbar. |
| `response` — Fast Responder | Basic | R · Zeitwerte/Verteilungen | A · Pflicht nach Regelklärung | hybrid | Antwortzeit vom Ende eines zusammenhängenden Blocks bis zur zugehörigen Antwort. | D-CONVERSATION: Blockbildung/Antwortzuordnung; D-TIME; LD-30-Quoten. | Prüfsatz mit Mehrfachnachrichten und neuem Gespräch zeigt erwartete Reaktionszeiten; Quote, Verteilung und Nenner sind konsistent. |
| `firstlast` — First & Last | Basic | R · Nachtwerte, Schlafprofil-UI | A · Pflicht nach Regelklärung | hybrid | Erkannte Nacht-/Schlafpausen pro Teilnehmer; typische Zeiten nur als Hinweis. | D-CONVERSATION: Nachtklassifikation, unbekannte Profile, Nachtschreiber und Zuordnung. | Tatsächliche Aktivität nach typischer Schlafenszeit bleibt relevant; First/Last folgt der erkannten Pause, nicht pauschal Mitternacht. |
| `texting` — Texting Champion | Free | R · Nachrichten-/Wortmengen | A · Pflicht | deterministisch | Reale Mengen und eindeutig definierte Textbasis pro Person. | D-DATA/TEXT: System-/Medien-/Löschfälle, Wortdefinition und Nenner. | Personenwerte ergeben die definierte Gesamtmenge; Wort-/Nachrichtenanteile und Quellbestand stimmen auf dem Prüfsatz überein. |
| `longstory` — Long Story Short | Basic | R · Längen/kurze Antworten/Zitate | A · Pflicht | hybrid | Echte Textlängenstatistik; eigener freigegebener Vertrag für kurze Antworten. | D-TEXT/CONVERSATION: Wort-/Zeicheneinheit, kurze Antwort, Vergleichsmenge, Gleichstände. | Median, Verteilung und längste Nachricht entsprechen dem Prüfsatz; Zitat fokussiert genau die Nachricht, deren Länge angezeigt wird. |
| `emoji` — Emoji DNA | Free | R · Toplisten/Anteile | A · Pflicht | deterministisch | Definierte Emoji-Einheiten und Personen-/Nachrichtenbezug. | D-TEXT: ZWJ-/Hautfarben-/Variantenbehandlung, Wiederholungen und Gleichstände. | Freigegebene Unicode-Grenzfälle werden richtig gezählt; Toplisten, Varianten und Nachrichtenanteile sind aus Originalstellen ableitbar. |
| `words` — Your Greatest Hits | Basic | R · Häufigkeiten/Signature; Fixture-Suche | A · Pflicht nach Textregelklärung | hybrid | Gemeinsame/persönliche Wörter und Signature-Vergleich auf definierter Sprach-/Textbasis. | D-TEXT: Stopplisten, Flexion/Normalisierung, Phrasen, Nullfälle/Mindestmenge und Signature-Formel; ggf. D-QUALITY. | Ranglisten und Signature-Werte stimmen mit Prüfsatz überein; Treffer stammen aus der betreffenden Person/Menge und bilden echte Wort-/Phrasenvorkommen ab. |
| `pulse` — Communication Pulse | Basic | R · Summen/Wochenindizes | A · Pflicht | deterministisch | Echte Mengen, Wörter, aktive Tage und Personenverläufe über vollständige Vergleichsperioden. | D-TRENDS: Periodisierung, Indexbasis, Vergleich/Trendregel; alte/neue Referenzbasis LD-01. | Rohwerte, Personenanteile und optionaler Index sind nachvollziehbar; unvollständige Wochen werden nicht als vollständige Vergleichswochen ausgegeben. |
| `deepdive` — Hot & Cold Deep Dive | Basic | R · feste Phasenwerte; echter Event-Overlap | A · Pflicht nach Hot-&-Cold-Vertrag | hybrid | Verwendet dieselbe erkannte Phase wie `hotcold`; Vorher/Phase/Nachher und bestätigten Kontext. | D-TRENDS/EVENTS: Vergleichsfenster, Ausschlusswirkung, fehlende Folgeperiode; LD-31. | Ausgewählte Phase und Kennzahlen passen zu `hotcold`; Menge und Kontinuität bleiben getrennt, nur zeitlich passender bestätigter Eventkontext erscheint. |

### B. V1 — nur nach sauber spezifizierter und getesteter Semantik: Empfehlung, 7 Funktionen

Alle sieben sind sinnvolle V1-Ziele, aber jede benötigt eine eigene fachliche und qualitative Freigabe. Ein bestandener UI-Test oder ein allgemein gutes Sprachmodell genügt nicht. Die Priorisierung innerhalb der Gruppe ist in Abschnitt 2 erläutert.

| Feature-ID — Name | Aktueller Tarif | Iststand | Empfohlene V1-Priorität | Typ | Wesentliche Produktionsvoraussetzung | Noch offene fachliche Entscheidung | Abnahmekriterium auf hoher Ebene |
|---|---|---|---|---|---|---|---|
| `questions` — Wer will mehr wissen? | Basic | R · feste Zahlen, wenige Belege | B · zuerst prüfen | hybrid | Klassifizierte Fragen mit vollständiger Evidence; Fragen und Nachrichten unterscheiden. | D-SEMANTIC/QUALITY: echte/rhetorische/mehrere Fragen, Frageeinheit, Quoten und Reviewpolitik. | Freigegebene Qualität je Klasse erreicht; jede gezählte Frage erklärbar; Reklassifizierung verändert die richtigen Mengen/Nenner und lässt sich rücknehmen. |
| `names` — Name Game | Basic | R · anonymisierte Anreden | B · früh prüfen | hybrid | Eindeutige Adressierung statt bloßer Namensnennung; belegte Alias-/Kosenamenerkennung. | D-SEMANTIC: dritte Personen, Mehrdeutigkeit, Anredegrenze, Aliasbestätigung. | Referenzfälle trennen Anrede und Erwähnung korrekt; jede gezählte Anrede springt zum Original, Nutzerkorrekturen wirken. |
| `topics` — What We Talk About | Premium | R · Themenliste, Zuordnung unresolved | B · Premium-Kernziel | semantic-ai | Verbindliche Themenklassen, vollständige Zuordnung und belastbare Anteilsbasis. | D-SEMANTIC/QUALITY: Mehrfachthemen, unklassifizierbar, Zuordnungseinheit, Nenner. | Kein allgemeiner Beispielbeleg wird als Beweis eines anderen Themas angezeigt; Anteile und vollständige Themenbelege entsprechen demselben geprüften Klassifikationsstand. |
| `social` — Social Signals | Premium | R · Signale und Beispielgruppen | B · Premium-Kernziel | semantic-ai | Getrennte Definitionen für Kompliment/Bestätigung, Dank, Entschuldigung, Zustimmung/Widerspruch. | D-SEMANTIC/QUALITY: Ironie, Zitate, Mehrfachlabels, Kontext, ausgeschlossene/unsichere Fälle. | Qualitätsziele pro Signalklasse erreicht; Originalbelege/Unsicherheit verfügbar; Korrekturen wirken ohne Aussagen über den Charakter einer Person. |
| `lifeevents` — Life Events | Premium | E · CRUD/Timeline; KI nur Mock | B · Premium-Kernziel | semantic-ai | Echte belegte Kandidatensuche; manuelle Eventgrundlage bleibt unabhängig davon V1-Pflicht. | D-EVENTS/SEMANTIC: Erwähnung vs. tatsächliches Ereignis, Datumsunsicherheit, Wiedererkennung, Kategorien. | Mehrere plausible Treffer mit belegtem Ursprung; Übernahme erst nach Prüfung; Verwerfen bleibt bei eindeutig wiedererkanntem Vorschlag erhalten. |
| `humor` — Your Humor Code | Premium | R · Lachmarker/Insiderbeispiele | B · nach Basisklassifikationen | semantic-ai | Gesamte Funktion prüfen: Lachmarkerstatistik und gemeinsame Insider, nicht nur Emoji-Zähler. | D-SEMANTIC/QUALITY: Marker vs. Humor, Ironie, Wiederholungsschwelle, echte gemeinsame Referenz. | Insiderhypothesen besitzen alle herangezogenen Stellen und Unsicherheit; keine pauschale Humorzuschreibung; Qualitätsziele für beide Teilbereiche erreicht. |
| `topicstarts` — Who Brings It Up? | Premium | R · feste Themenstartanteile | B · nach `topics` und Gesprächsmodell | hybrid | Belegte Themenstarts auf geprüftem Themen-/Gesprächsbestand. | D-SEMANTIC/CONVERSATION: neuer Impuls vs. Weiterführung/Wiederaufnahme; mehrere Themen. | Prüffälle trennen Gesprächsstart, Themenstart und Antwort; Anteile lassen sich aus vollständigen, korrigierbaren Themenstart-Belegen herleiten. |

### C. Später — nicht Bestandteil der ersten produktiven Version: Empfehlung, 11 Funktionen

Die sieben U-Funktionen bleiben außerhalb V1. Zusätzlich werden vier bereits gerenderte Funktionen wegen unzureichend präzisierter Verlaufs-/Plan-/Musterlogik zurückgestellt. Vorhandene Ansichten bleiben wertvolle Referenzen; sie dürfen in echten Chats keine Produktfertigkeit vortäuschen.

| Feature-ID — Name | Aktueller Tarif | Iststand | Empfohlene V1-Priorität | Typ | Wesentliche spätere Voraussetzung | Noch offene fachliche Entscheidung | Abnahmekriterium für spätere Aufnahme |
|---|---|---|---|---|---|---|---|
| `eras` — Your Eras | Premium | R · drei feste Phasen | C · später | semantic-ai | Validiertes Themenmodell und nachvollziehbare Verlaufssegmentierung. | D-LATER: Phasengrenzen, Mindestdauer, Relevanz/Stabilität eines Themenwechsels. | Grenzen und beschriebene Veränderungen sind mit Daten und definiertem Vergleich prüfbar, nicht frei erfundene Kapitel. |
| `future` — What’s Next? | Premium | R · Future Talk/Raincheck ohne Planmodell | C · später | semantic-ai | Nachrichtenübergreifende Planobjekte, Statusverlauf, vollständiger Review. | D-LATER: Planidentität, Zustandsübergänge, Quotennenner, Merge/Duplikate, Durchführung. | Eine mehrteilige Planung wird als zusammengehöriger Verlauf geprüft; „kein Raincheck“, Reklassifizieren/Merge und Undo berechnen die Quote korrekt neu. |
| `rituals` — Our Rituals | Premium | R · vier kuratierte Geschichten | C · später | semantic-ai | Definition wiederkehrender gemeinsamer Muster über unabhängige Situationen. | D-LATER: Mindestwiederholung, gemeinsame Beteiligung, Varianten, Ritual vs. Zufall. | Freigegebener Prüfsatz trennt Wiederholung und belastbares Muster; alle verwendeten Situationen sind zugänglich und Korrekturen wirken. |
| `futuretrend` — Future Talk Trend | Premium | R · feste 20er-Stichprobe | C · später | semantic-ai | Verbindliche Future-Talk-/Konkretheitsklassen und längsschnittliche Vergleichsbasis. | D-LATER: Could/Will-Abgrenzung, Häufigkeit vs. Anteil, Mindestdaten, Trendfenster. | Änderungen beruhen auf vollständigen vergleichbaren Perioden; Formulierungen werden nicht als bewiesene Absichten dargestellt. |
| `qdyn` — Question Dynamics | Premium | U | C · später | hybrid | Valide Fragen und nachrichtenübergreifende Antwortzuordnung. | D-LATER: direkt/später/teilweise/offen, mehrere Antworten, Beobachtungsende. | Offene Frage am Exportende wird nicht automatisch als ignoriert bezeichnet; Antwortstatus ist vollständig belegt und korrigierbar. |
| `flow` — Conversation Flow | Premium | U | C · später | hybrid | Messbare Definition von Gesprächsfluss mit konkreten Komponenten. | D-LATER: Zielgröße, Gewichtung, Vergleich und erlaubte Interpretation. | Jede Aussage ist aus freigegebenen Komponenten prüfbar; kein unbegründeter Gesamt- oder Beziehungswert. |
| `closeness` — Closeness & Openness | Premium | U | C · später | semantic-ai | Abgrenzbare sprachliche Merkmale und klar begrenzte Aussagekraft. | D-LATER: sprachliche Nähe vs. Gefühl, Überlappung mit `opening`, sichere Formulierungen. | Belegte sprachliche Beobachtungen werden nicht in Diagnosen oder Tatsachen über emotionale Nähe umgedeutet. |
| `mineours` — From Mine to Ours | Premium | U | C · später | semantic-ai | Nachverfolgbare Themenidentität und gemeinsame Bezugnahmen über Zeit. | D-LATER: „individuell“/„gemeinsam“, Übernahme vs. bloße Antwort, Persistenz. | Übergänge sind durch beide zugehörigen Gesprächsverläufe und alternative Lesarten prüfbar. |
| `opening` — Opening Up | Premium | U | C · später | semantic-ai | Präzise Klassen persönlicher Inhalte und besonders zurückhaltende Auswertung. | D-LATER: Offenheitskriterien, Sensitivität, Vergleichbarkeit, Abgrenzung zu `closeness`. | Aussagen bleiben an konkreten Inhalten belegbar; keine Zuschreibung innerer Motive/Bindung; sensible Fehlklassifikation geprüft. |
| `report` — Between the Lines Report | Premium | U | C · später | semantic-ai | Abgenommene zugrunde liegende Analysen und kontrollierte Synthese. | D-LATER: Auswahl/Gewichtung, Widersprüche, Aktualität und Evidenz je Aussage. | Jede Berichtsaussage verweist auf gültige Ergebnisse/Originale; widersprüchliche oder veraltete Ergebnisse werden nicht geglättet. |
| `changed` — Something Changed | Premium | U | C · später | semantic-ai | Definierte merkmalsübergreifende Veränderungserkennung. | D-LATER: Schwellen, Vergleichsfenster, Mehrfachtests, Fehlalarme und Bedeutung. | Stabiler Kontrollchat erzeugt keine ungeprüften Wendepunktbehauptungen; jeder Treffer erfüllt das freigegebene Regelwerk und ist belegbar. |

**Vollständigkeit:** A 15 + B 7 + C 11 = **33 eindeutige Feature-IDs**. A und B umfassen 22 der 26 bestehenden Ergebnisansichten; C enthält vier Referenzansichten und alle sieben unavailable-Funktionen. Kein Feature wurde umbenannt oder technisch entfernt. Begleiter, manuelle Eventverwaltung, Import und Evidence sind zusätzliche Produktfähigkeiten, keine weiteren Analyse-IDs.

## 2. Empfohlener V1-Kern und Tarife

**Empfehlung — Zielbild:** Eine V1 mit verlässlicher Mengen-/Zeit-/Gesprächsanalyse, echter Korrekturwirkung und einem qualitätsgeprüften semantischen Mehrwert. Nicht die Zahl fertig aussehender Seiten, sondern die nutzbare Kette vom eigenen Chat bis zum überprüfbaren Ergebnis entscheidet.

| Baustein | Empfehlung | Nutzerwert und Freigabegrenze |
|---|---|---|
| Free | Alle sechs bestehenden Free-Analysen aus A produktiv. | Niedrige Einstiegshürde: Aktivität, Kontinuität, Textmenge und Emojis aus dem eigenen Chat. Import, notwendige Belegprüfung, Korrektur und konsistente Aktualisierung dürfen für diese Ergebnisse nicht nur simuliert sein. |
| Basic | Neun weitere A-Funktionen; `questions` und `names` als zwei B-Ziele nach Abnahme. | Gesprächs-/Pausenverständnis, Wortmuster und zeitlicher Verlauf; keine Ersatzregeln wie „erster Kalendertagsbeitrag = erster Move“. |
| Premium | Fünf B-Ziele: `topics`, `social`, `lifeevents`, `humor`, `topicstarts`; echter Begleiter separat. | Mehrwert durch überprüfbare semantische Muster und Suche. **Empfehlung:** Premium erst mit abgenommenen `topics`, `social`, `lifeevents` und Begleiter als zusammenhängendem Angebot veröffentlichen; andere B-Funktionen separat freigeben. |
| Für alle aktiven Chats | Echte Datenbasis, manuelle Events, Kontext/Schlafhinweise, Zeitraum, Reader, vollständige Evidence, Journal/Undo/Reanalyse und persistentes Dashboard. | Diese Grundlagen sind Voraussetzung der angebotenen Analysen. Manuelles Eventkontextmanagement ist nicht mit der Premium-KI-Funktion `lifeevents` gleichzusetzen. Die konkrete tarifliche Zugangsregel ist vor Veröffentlichung zu bestätigen. |

Die bestehende Struktur bleibt Free/Basic/Premium; die Empfehlung setzt **keine neuen Preise**. Unter unveränderten aktuellen Zuordnungen ergeben sich bei vollständiger A+B-Abnahme **6 Free**, **+11 Basic = 17**, **+5 Premium = 22** Analysen plus Begleiter. Das sind Zielzahlen, nicht die heutigen Vorschauzahlen 6/17/26. Für das tatsächliche Release werden nur wirklich freigegebene produktive Funktionen gezählt. Ein gesperrtes verfügbares Feature und ein noch nicht verfügbares Feature müssen unterscheidbar sein; C darf nicht per Bezahlung scheinbar freigeschaltet werden.

**Empfehlung zur Reihenfolge innerhalb B:** zuerst Fragen/Anreden und Themenklassen als begrenzte Klassifikationen; parallel belegte Life-Event-Suche und Social Signals; danach Insider/Humor und Themenstarts auf den geprüften Grundlagen. Ein Feature mit mehreren Teilbereichen gilt erst fertig, wenn alle veröffentlichten Teilbereiche abgenommen sind. Beispielsweise macht ein Lach-Emoji-Zähler noch keinen fertigen Insiderdetektor.

Die 26 vorhandenen Renderer lassen sich weitgehend weiterverwenden. Funktionen aus C müssen für reale Chats bis zur späteren Freigabe ohne falsche Resultate bleiben; Referenzwerte dürfen nur in einer eindeutig getrennten Demonstration vorkommen. **Keine automatische Reduktion bei Problemen:** Wenn ein A- oder bereits zum Release zugesagtes B-Feature sein Kriterium verfehlt, ist es nicht fertig. Ein kleinerer Free-/Basic-Start benötigt eine ausdrücklich angepasste Scope-Entscheidung und darf nicht als vollständige Premium-V1 bezeichnet werden.

KI-Kosten sind eine Produktgrenze: Vor Freigabe eines semantischen Features müssen der unterstützte Chatumfang, Wiederholungen/Reanalysen, Suchanfragen und deren Kosten innerhalb des beschlossenen Budgets liegen (D-COST). Kostenlimits dürfen keine unsichtbare Kürzung der Belegmenge oder stillschweigende Auswertung nur einiger Nachrichten verursachen. Eine bewusste Teilanalyse muss vorab als solche erkennbar sein und benötigt eine freigegebene Produktregel.

## 3. Mindestumfang echter Import

Die drei Quelltypen und Gruppendyaden sind bereits im Produkt-MVP beschrieben. Sie werden hier nicht still auf einen einzelnen 1:1-WhatsApp-Demoflow reduziert. „V1 zwingend“ bezeichnet die Mindestfähigkeit; unterstützte Format-/Sprachvarianten sind vor Umsetzung in D-IMPORT explizit festzuhalten.

| Thema | V1 zwingend | Später möglich / ausdrückliche Grenze |
|---|---|---|
| WhatsApp-Export | Echter Textimport für die freigegebene iOS-/Android-Exportmatrix einschließlich mehrzeiliger Nachrichten und dort vorhandener Datums-/Systemmarkierungen. Nicht unterstützte Varianten vor Übernahme erkennen/melden. | Weitere Versionen/Locales nach Erweiterung der Matrix; Medieninhalt aus ZIP/Anhängen analysieren. Welche Varianten V1 garantiert, ist noch zu entscheiden. |
| Eingefügter Text | Tatsächlichen Text einlesen, Original erhalten, Sprecher/Abschnitte prüfen lassen. Keine erfundenen Zeilen oder Teilnehmer. | Universelle Erkennung beliebiger freier Formatierungen. V1 verlangt eine eindeutig bestätigbare Zuordnung, keine Magie. |
| Allgemeines Transkript | Texttranskript mit zuordenbaren Sprecherbeiträgen, auch ohne präzise Zeitdaten; vorhandene Zeitauflösung erhalten. | Audio-/Video-Transkription, OCR und automatische Sprechererkennung aus Ton sind nicht als V1-Pflicht empfohlen. |
| Sprecher und zwei Personen | Erkannte Sprecher vorschlagen, vom Nutzer bestätigen/korrigieren lassen; genau zwei eindeutige Analysepersonen. Unklare Beiträge in der Vorschau klären oder als ungeklärt ausweisen. | Automatische Zusammenführung schwieriger Aliase ohne Nutzerprüfung. Kein stilles A/B-Raten. |
| Gruppenchat/Dyade | Teilnehmer erkennen/bestätigen, zwei auswählen; A/B-Mengen enthalten keine Beiträge anderer Mitglieder. Kontext anderer Personen darf im Reader erkennbar bleiben. | Gruppenweite Analysen und paralleler Vergleich vieler Dyaden. Regeln für Dyadenwechsel/Korrekturscope bleiben D-DATA. |
| Fehlende Zeitstempel | Unbekannt bleibt unbekannt; Datum/Zeitraum kann ausdrücklich ergänzt und als Nutzerangabe gekennzeichnet werden. Zeitabhängige Metriken nur bei ausreichend präziser Grundlage. | Zeitliche Rekonstruktion mit spekulativen Uhrzeiten. Ein ergänzter Gesamtzeitraum ist kein Minutenzeitstempel jeder Nachricht. |
| Chatsprache | Automatische Erkennung für den freigegebenen Sprachumfang, einschließlich sichtbarer Unsicherheit/nicht unterstützter Sprache. Kein manuelles Sprachfeld im Chatkontext. | Weitere Sprachen und umfassende Code-Switching-Analyse. V1-Sprachen und Umgang mit gemischten Chats: D-IMPORT/QUALITY. |
| Add/Merge | Quelle zum bestehenden Chat ergänzen, Wiederholungen deduplizieren, neue Nachrichten übernehmen, Quellenherkunft erhalten und betroffene Analysen aktualisieren. | Komfortfunktionen für viele gleichzeitige Quellen. Der erneute Voll-Export gehört bereits in V1. |
| Replace | Als andere Handlung sichtbar; geplante Änderungen/wegfallende Daten vorab prüfen. Rohbestand ersetzen, eindeutig wiedererkannte IDs und zugehörige Nutzerentscheidungen erhalten. | Automatische konfliktfreie Auflösung beliebig widersprüchlicher Bestände. Kontext/Events dürfen nicht pauschal gelöscht werden. |
| Deduplizierung | Überlappende und wiederholte Exporte erkennen; echter doppelter Inhalt zweier unterschiedlicher Nachrichten bleibt unterscheidbar. Dateihash allein genügt nicht. | Komfortable heuristische Automatik schwieriger Fälle. Mehrdeutigkeit muss bereits in V1 sichtbar bleiben. |
| Stabile MessageIds | Eindeutig dieselbe Nachricht behält bei Wiederimport/Sortierung/Update ihre Identität; sämtliche Belege/Korrekturen verwenden diese Identität. | Keine Übergangsfreigabe für Laufzeitverknüpfung über Arrayindex/Textanfang/geratenen Timestamp. |
| Bearbeitete Nachrichten | Wenn die Quelle Bearbeitung erkennen lässt: als Änderung behandeln; Originalzuordnung nur bei eindeutiger Identität beibehalten. Fachlich betroffene Klassifikationen/Korrekturen prüfen, Änderung transparent machen. | Rekonstruktion nicht exportierter Versionshistorie. Bei unklarer Identität keine falsche automatische Zusammenführung; D-IMPORT/CORRECTION entscheidet den Reviewfall. |
| Gelöschte Nachrichten | Exportierte Löschplatzhalter erkennen und als solche erhalten; fehlenden Text nicht rekonstruieren. Fehlende Nachricht in einem Teil-Add ist kein Beweis einer Löschung. | Nicht vorhandene gelöschte Inhalte wiederherstellen. Behandlung im Nenner bzw. bei Replace wird in D-DATA festgelegt. |
| Medien-/Systemmeldungen | Von auswertbarem Nachrichtentext unterscheiden, im Importbericht ausweisen; ursprüngliche Platzhalter/Herkunft erhalten. Ihre Wertungsregeln müssen eindeutig sein. | Bild-/Audio-/Videoanalyse und Semantik von Medieninhalten. |
| Importvorschau | Quelltyp, erkannte Personen/Dyade, Sprache, Zeitabdeckung, neue/doppelte/geänderte/ungeklärte Daten sowie betroffene Korrekturen anzeigen. Erst Bestätigung übernimmt. Abbrechen verändert keinen bestehenden Chat. | Keine stille Sofortübernahme als Abkürzung. Komplexe Vergleichsansichten können später verbessert werden. |
| Updatebericht | Nach erfolgreichem Update tatsächliche Mengen, erhaltene/klärungsbedürftige Korrekturen, aktualisierte/fehlgeschlagene Analysen und gegebenenfalls neue KI-Vorschläge anzeigen. | Keine erfundene Erfolgszahl für noch laufende oder fehlgeschlagene Verarbeitung. |

**Fehlende Zeiten sind kein generelles Importverbot:** Der Chat bleibt lesbar und für die fachlich zulässigen textbasierten Funktionen nutzbar. Für Zeitraumfilter mit undatierten/teilweise datierten Beiträgen ist die Wertungsregel noch festzulegen; bis dahin darf keine Zeitzuordnung erfunden werden. Ein berechtigt nicht berechenbarer Wert wird begründet als nicht verfügbar bzw. unzureichende Daten angezeigt, nicht als 0.

**Verbindliche Schutzgrenze:** Bei unaufgelöstem Matching bleibt eine Referenz `unresolved`; eine Korrektur wird weder verloren noch ungeprüft auf eine andere Nachricht übertragen. Nutzerkontrolle für Mehrdeutigkeit ist V1-Pflicht, eine perfekte vollautomatische Fuzzy-Zuordnung nicht. Das vorhandene Legacy-Manifest ersetzt diese Importfähigkeit nicht.

## 4. Evidence und Korrekturen: Mindestumfang

Die vorhandenen wenigen öffentlichen Belege sind UI-Fixtures, keine vollständige Datengrundlage. Für V1 muss jede veröffentlichte semantische Kennzahl aus derselben prüfbaren Klassifikationsmenge entstehen, die ihre Belegliste zugänglich macht. „Vollständig“ bedeutet alle tatsächlich verwendeten Einheiten, nicht alle auf einer Seite gleichzeitig gerendert.

| Bereich | V1 zwingend | Später möglich / Grenze |
|---|---|---|
| Vollständige Belegmenge | Alle gewerteten Zuordnungen mit Originalreferenzen; bei Block-/Ereignisklassifikation alle herangezogenen Nachrichten. Einheit, Zähler, Nenner und Mehrfachzuordnungen verständlich machen. | Zusätzliche kuratierte Beispiele sind erlaubt, ersetzen aber nicht die vollständige Menge. Nicht jede quantitative Kennzahl braucht eine künstlich erzeugte semantische Evidence-Klasse. |
| Pagination | Sämtliche Treffer in begrenzten Seiten/Fenstern erreichbar; stabiler Fortschritt, korrekte Gesamtzahl, keine Auslassungen/Dopplungen. | Unendliches Scrollen oder andere Bedienvarianten; konkrete Seitengröße ist eine technische/UX-Entscheidung. |
| Filter | Person, Zeitraum, Status einschließlich ausgeschlossen/ungeprüft/bestätigt sowie Confidence bei KI-Zuordnungen; passende Kategorie-/Labelauswahl, wenn eine Liste mehrere Klassen enthält. | Komplexer Query-Builder und gespeicherte Filter. Deterministische Treffer bekommen keine erfundene KI-Confidence. |
| Exakte Originalstelle | Jeder angezeigte Chattext und jedes Zitat fokussiert über stabile MessageId die richtige Nachricht; Rückkehr zur auslösenden Ansicht samt Auswahl/Filter. | Sprung über Textähnlichkeit, Arrayposition oder geratenes Datum ist keine akzeptable Zwischenlösung. |
| Nicht auflösbare Referenz | Als `unresolved` mit Ursache/Reviewbedarf sichtbar; kein erfundenes Original und keine ungeprüfte Übertragung. Neue semantische Behauptungen dürfen eine erforderliche, nicht vorhandene Quelle nicht vortäuschen. | Komfortable nachträgliche manuelle Zuordnung. Bis zur eindeutigen Auflösung gelten die freigegebenen Regeln für ungültige/nicht wertbare Evidence. |
| Ausschließen / Einbeziehen | Änderung an der konkreten Zuordnung bzw. freigegebenen Pause/Phase; Original bleibt erhalten. Betroffene Auswertungen ändern sich nach dem Rechenvertrag. | Ein pauschales Löschen der Nachricht aus allen Analysen ist nicht gleichbedeutend mit Belegausschluss. |
| Reklassifizieren | Für veröffentlichte Funktionen erforderlich, deren fachlicher Fehler durch „ausgeschlossen“ nicht korrekt korrigierbar ist: z. B. Frageart, Thema, Signal oder adressierte Person. Nur freigegebene Kategorien/Zielpersonen anbieten. | Freie Erfindung neuer Analyseklassen, Massenklassifizierung und C-spezifische Plan-Merges. |
| Undo und Journal | Frühere Nutzerentscheidung, neue Entscheidung, betroffene IDs/Scope, Zeitpunkt und Herkunft nachvollziehbar; zulässige Änderung rücknehmbar. Optionaler Grund, keine erzwungene freie Begründung für jeden Ausschluss. | Gemeinschaftliche Reviewprozesse und komplexe Journalexporte. Ein Undo darf nach Datenänderung nicht unbemerkt auf einen anderen Inhalt wirken. |
| Persistenz / Update | Korrekturen chat- und gegebenenfalls dyadenbezogen erhalten; erneute Analyse überschreibt Nutzerentscheidungen nicht. Bei eindeutig unverändertem Inhalt weiterhin anwenden; bei Bearbeitung/fehlender Identität prüfpflichtig markieren. | Geräteübergreifende Zusammenarbeit; technische Speicherung bleibt offen. „Eindeutige Nachricht“ heißt nicht automatisch „inhaltlich unveränderte Klassifikation“. |
| Status und Rechenstand | Sichtbar unterscheiden: modellbasiert, Nutzerentscheidung, ausgeschlossen, ungeklärt und veraltet. Zahlen und Listen beziehen sich auf denselben gültigen Auswertungsstand. | Vollständige Modellinternas oder technische Logs in der Nutzeroberfläche sind nicht erforderlich. |

**Geltungsbereich:** Filter einer einzelnen Belegliste ändern nicht still den globalen Analysezeitraum. Ein ausgeschlossener Komplimentbeleg verschwindet aus der Komplimentwertung, nicht automatisch aus Texting Champion, Emoji DNA oder dem Chatreader. Eine weiterreichende Wirkung benötigt eine ausdrücklich freigegebene Abhängigkeitsregel. Das Journal bewahrt Nutzerentscheidungen gemäß Lösch-/Aufbewahrungsregel; es darf ein ausdrücklich gelöschtes privates Chatarchiv nicht heimlich dauerhaft konservieren.

## 5. Reanalyse: fachlicher Vertrag

Die vorhandene Persistenz von Flags und die drei Dashboard-Referenzsnapshots sind keine Reanalyse. Für V1 gilt: Ein Ergebnis wird aus der aktuell gültigen Datenmenge, Zeitraum-/Dyadenauswahl, den einschlägigen Kontextangaben und Nutzerentscheidungen abgeleitet. Welche Verarbeitung intern erneut ausgeführt oder aus einem nachweislich gültigen Ergebnis wiederverwendet wird, bleibt technische Entscheidung.

| Nutzeränderung / Auslöser | Fachlich neu zu bewerten | Sichtbare Wirkung und Grenze |
|---|---|---|
| Globaler Analysezeitraum | Alle zeitabhängigen Mengen, Anteile, Vergleiche, semantischen Mitgliedschaften und daraus abgeleiteten Anzeigen im gewählten Chat. | Aktiver Zeitraum in Ergebnis und Evidence konsistent. Randfall-/Vergleichsfenster sind zuvor festgelegt; keine festen Ersatzwerte für nicht vorbereitete Zeiträume. |
| Beleg ausschließen | Betroffene Zuordnung, Zähler/Nenner nach Definition und sämtliche davon abhängigen Analysen/Dashboardwerte. | Ausgeschlossener Beleg bleibt reviewbar. Keine pauschale Änderung unabhängiger Rohmengen. |
| Beleg wieder einbeziehen / Undo | Dieselben Abhängigkeiten mit der wiederhergestellten gültigen Entscheidung. | Bei unverändertem Bestand Rückkehr zu den erwarteten vorherigen Werten; bei inzwischen verändertem Inhalt sichtbarer Review statt falschem Undo. |
| Reklassifizierung | Alte und neue Klasse, zugehörige Mengen/Anteile, Ableitungen wie Themenstarts sowie betroffene Evidencefilter. | Derselbe Originalbeleg bleibt auffindbar; keine Doppelwertung, sofern Mehrfachwertung nicht fachlich erlaubt ist. |
| Chatkontext ändern | Nur Auswertungen/Interpretationen, deren definierte Eingaben das geänderte Feld enthalten. | Beziehungs-/Treffenkontext darf nicht ohne freigegebene Regel quantitative Werte ändern. Anzeigename/Profilbild löst keine fachlich andere Nachrichtenmenge aus. |
| Individuellen Schlafhinweis ändern | Erkannte Nacht-/Schlafpausen und davon abhängige First-&-Last-/Pausen-/Gesprächskennzahlen gemäß Abhängigkeitsvertrag. | Tatsächliches Schreiben bleibt beobachtet; typische Schlafzeit ist kein harter Ausschluss. Nachrichtenmenge, Emojis und aktive Tage ändern sich dadurch nicht willkürlich. |
| Event hinzufügen, bearbeiten, bestätigen, löschen | Eventübersicht, zeitliche Zuordnung, passende Kontextanzeigen und ausdrücklich eventabhängige Wertungen. | „Nur Kontext“ ergänzt Erklärung; es entfernt keine Nachrichten. Kategorie-/Datumsänderung aktualisiert passende Phasen. Unbestätigter KI-Vorschlag wird nicht still zum gesicherten Kontext. |
| Eventvorschlag verwerfen | Kandidatenstatus und künftige eindeutige Wiedererkennung des verworfenen Vorschlags. | Kein Löschen eines bestätigten/manuellen Events; keine Änderung der Rohchatmenge. |
| Hot-&-Cold-/Pausenprüfung: Ausschluss oder Wiederaufnahme | Die konkret freigegebene Pausen-/Phasenwertung sowie abhängige Vergleichswerte in `hotcold`, `deepdive` bzw. `silence`. | Reichweite, Bezugsmenge und Vergleichsbasis müssen in D-TRENDS/CONVERSATION festgelegt sein. Ein Phasenausschluss darf nicht eigenmächtig alle Chatstatistiken verändern. |
| Erstimport | Alle verfügbaren Analysen für bestätigte Personen, gültigen Kontext und tatsächlichen Datenumfang. | Echte Resultate oder begründete Nichtverfügbarkeit; keine stillen Demoresultate. |
| Add/Merge | Durch neue/geänderte Nachrichten betroffene Aggregationen, semantische Zuordnungen und Ableitungen; bei relativem Zeitraum auch dessen tatsächliche Mitgliedschaft. | Eindeutig unveränderte Nutzerkorrekturen erhalten. Neues Chatende verschiebt relative Fenster nachvollziehbar. Wiederimport ohne Datenänderung darf keine zusätzlichen Nachrichten erzeugen. |
| Replace | Betroffene Datenmenge und sämtliche davon abhängigen Ergebnisse; Gültigkeit bisheriger Originalreferenzen/Korrekturen. | Vorher prüfbare Folgen, anschließend Bericht über erhaltene und zu prüfende Zuordnungen. Kein stilles Löschen von Kontext/Events. |
| Analysepersonen/Dyade ändern | Alle personen-/dyadenbezogenen Ergebnisse und die Gültigkeit dyadenabhängiger Korrekturen. | Keine Mischung alter A/B-Zuordnungen mit neuer Auswahl. Genaue Übernahmeregel bei Dyadenwechsel ist D-DATA/CORRECTION. |

**Verbindliches Nutzerfeedback:**

1. Nach Speichern ist erkennbar, dass die Änderung angenommen wurde und welche Ergebnisse noch aktualisiert werden. Die vorhandene kurze Erfolgsmeldung darf nicht behaupten, die Reanalyse sei bereits fertig, wenn sie noch läuft.
2. Veraltete Werte tragen ihren alten Zeitraum/Datenstand; sie werden nicht als neue Werte unter einem bereits geänderten Filter ausgegeben. Währenddessen dürfen abgeschlossene und offene Teilbereiche unterscheidbar sein.
3. Nach Abschluss stimmen Zahlen, Charts, Dashboard, Belegmenge und Erklärung je Ergebnis im Datenstand überein. Eine Änderung kann fachlich denselben Wert ergeben; dann belegt der aktualisierte Daten-/Entscheidungsstand trotzdem die Verarbeitung.
4. Bei Fehlern wird die Änderung nicht durch einen erfundenen Erfolgswert kaschiert. Letzter gültiger Stand, ausstehende Verarbeitung und Wiederholungsmöglichkeit sind erkennbar. 0 ist kein Ersatz für einen Fehler.
5. Abbruch, parallele Änderungen oder verspätete Antworten dürfen keinen halb übernommenen oder dem falschen Chat/Zeitraum zugeordneten Zustand erzeugen.

Ein vollständiges Abhängigkeitsverzeichnis mit Eingaben, betroffenen Ausgaben und Erwartungen für jede veröffentlichte Funktion gehört zur fachlichen Freigabe. Dieses Dokument legt keine Queue, Worker, Datenbank, Jobstruktur oder Cachearchitektur fest.

## 6. Anforderungen an semantische KI und Begleiter

Diese Regeln gelten auch für semantische Teilbereiche eines A-Features. „Hybrid“ ist keine Ausnahme von Prüfbarkeit. Der bestehende Regex-Mock, feste Kandidaten und vorbereitete Antworten gelten nicht als produktive KI-Anbindung.

| Anforderung | Fachlicher V1-Vertrag |
|---|---|
| Belegpflicht | Jede konkrete Chataussage/Zuordnung hat tatsächliche stabile Originalreferenzen. Alle zur Kennzahl verwendeten Belege sind zugänglich. Keine erfundenen Nachrichten, MessageIds, Daten oder Teilnehmer. Ein nicht belegbarer Treffer wird nicht als gesichert ausgegeben. |
| Mehrere Treffer | Suche zeigt mehrere plausible Kandidaten mit Abgrenzung und Belegen, wenn der Bestand sie enthält. Keine immer gleichen fünf Fixtures und kein „erster Treffer = einzige Wahrheit“. Ranking/Pagination darf die Existenz weiterer passender Treffer nicht verbergen. |
| Confidence | Unsicherheit je relevanter Zuordnung/Kandidat und nachvollziehbarer Reviewstatus. Hohe Sicherheit darf nach freigegebener Qualitätspolitik automatisch klassifizieren; unsichere Treffer brauchen Prüfung. Kategorien/Schwellen und ihre Kalibrierung sind D-QUALITY, keine hier erfundenen Prozentwerte. |
| Zeitliche Aussagegrenze | „Erstmals im verfügbaren Chat gefunden“ statt „zum ersten Mal passiert“. Erwähnungsdatum, möglicherweise genanntes Ereignisdatum und unbekanntes Datum unterscheiden; aus einer Rückerinnerung kein exaktes Ereignisdatum erfinden. |
| Aussagegrenzen | Beobachtung, Interpretation und Hypothese trennen. Keine psychologischen Diagnosen, unbelegten Gefühle/Absichten/Interesse/Bindung/Charakterurteile oder kausale Erklärung einer Cold Phase durch bloße zeitliche Nähe zu einem Event. |
| Scope | Bestätigte Dyade, Chat und Zeitraum beachten; Dritte nicht als A/B ausgeben. Für bewusst erweiterten Kontext die verwendete Reichweite sichtbar machen. Keine fremden Chats oder nicht freigegebenen Daten einbeziehen. |
| Nutzerkorrekturen | Gültige bestätigte/verworfene/reklassifizierte Entscheidungen berücksichtigen. Ein neuer Modelllauf darf dieselbe unveränderte Zuordnung nicht still zurücksetzen. Bei verändertem Inhalt ist die Konflikt-/Reviewregel anzuwenden. |
| Unvertrauter Chatinhalt | Importierter Chattext ist auszuwertender Inhalt, keine Anweisung an App/Modell. Darin enthaltene Aufforderungen können weder Berechtigungen noch Scope ändern oder Aktionen bestätigen; keine Offenlegung anderer Chats, Schlüssel oder interner Geheimnisse. |
| Zustandsändernde Aktionen | Vor Ausführung konkrete Vorschau mit Zielchat, Gegenstand, neuen Werten und betroffener Wirkung; ausdrücklich bestätigen oder abbrechen. Veraltete Vorschau bei zwischenzeitlicher Änderung erneut prüfen. Keine Aktion durch bloße Modellbehauptung als erledigt ausgeben. |
| Zeitraum im Begleiter | Eine Antwort darf einen ausdrücklich gewünschten temporären Zeitraum nutzen und benennen. Globalen Analysezeitraum nur mit konkreter Vorschau und Bestätigung ändern; eine Suchfrage ist keine stillschweigende globale Filteränderung. |
| Fehler und Limits | Fehlende Berechtigung, nicht unterstützte Frage, unzureichende Daten, Dienstfehler und Kosten-/Kontingentgrenze unterscheiden. Keine Mockantwort oder erfundene Kennzahl als Fallback. Teilverarbeitung und deren Grenze müssen erkennbar sein. |
| Qualität | Vor Freigabe getrennte Prüfsätze nach Feature, Klasse und unterstützter Sprache mit menschlich geprüften Erwartungen, Mehrdeutigkeiten und negativen Fällen. Präzision/Recall bzw. zur Aufgabe passende Fehlermaße, Confidence-Verhalten und akzeptable Fehlertypen werden vorab beschlossen. Modellselbsteinschätzung ersetzt keine Evaluation. |

**Empfohlener V1-Begleiterumfang:** Fragen zu tatsächlich verfügbaren Chatmustern und Kennzahlen mit verknüpften Quellen beantworten; belegte Ereigniskandidaten finden; die bereits vorgesehenen Kontext-/Event-/Review-/Zeitraumaktionen ausschließlich in ihrem freigegebenen Umfang vorschlagen und bestätigen lassen. Keine frei erfundene neue Analyse hinter einer Chatantwort, keine Umgehung unavailable-Funktionen, keine ungeprüfte Umsetzung von Plantracking/Raincheck aus C. Die endgültige Aktionsliste wird mit D-SCOPE festgeschrieben; außerhalb davon wird die Grenze benannt.

Die Premium-KI wird erst abgenommen, wenn **Qualität und Kosten** für den beschlossenen Umfang nachgewiesen sind. Anbieter, Modell, Prompttechnik und Ausführungsarchitektur wählt später die technische Umsetzung innerhalb dieser Grenzen. Eine gute Demonstration mit einzelnen Beispielen ist kein Nachweis für den gesamten Sprach-/Datenumfang.

## 7. Definition of Done / Acceptance Criteria

### Abnahmeverfahren

Jedes folgende Kriterium erhält bei der späteren Abnahme **PASS, FAIL oder BLOCKED** sowie Daten-/Spezifikationsversion, Prüfnachweis und verantwortliche Freigabe. **N/A** ist nur mit begründetem Bezug auf einen ausdrücklich ausgeschlossenen Releaseumfang erlaubt. Fehlende erwartete Werte, Qualitätsgrenzen oder Leistungsbudgets bedeuten BLOCKED, nicht PASS. Dieses Dokument bescheinigt keinen dieser zukünftigen Nachweise.

Die Prüfsätze enthalten synthetische oder ausdrücklich freigegebene Daten mit unabhängig festgelegten Erwartungen: zwei Personen, Gruppe mit Dritten, gleiche Nachrichtentexte an verschiedenen Stellen, mehrzeilige Texte, Unicode/Emojis, fehlende Zeitdaten, Nacht-/Tagesgrenzen, kurze/leere Bestände, mehr Evidence als eine Seite sowie überlappende/überarbeitete Exporte. Fachliche Prüfsätze und die bestehenden Legacy-Baselines sind getrennt zu behandeln: Ein alter widersprüchlicher Referenzwert ist kein erwartetes produktives Rechenergebnis.

### Import

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-I01 | Für jede freigegebene WhatsApp-Formatvariante, eingefügten Text und Texttranskript wird ein Prüfsatz tatsächlich eingelesen. Originaltexte, vorhandene Zeitpräzision, Reihenfolge, Quellenherkunft und bestätigte Sprecher entsprechen vollständig dem Sollbestand; keine Demo-Nachricht wird ergänzt. |
| AC-I02 | Derselbe vollständige WhatsApp-Export wird erneut hinzugefügt, auch unter anderem Dateinamen. Es entstehen keine zusätzlichen Nachrichten. Eindeutig gleiche Originale behalten IDs und Nutzerkorrekturen. Zwei tatsächlich verschiedene Nachrichten mit gleichem Text bleiben zwei Nachrichten. |
| AC-I03 | Eine Gruppenquelle enthält A, B und C. Nach bestätigter Auswahl A/B enthält keine A/B-Kennzahl Beiträge von C; im Reader bleibt C als C erkennbar. Mehrdeutige Sprecher werden nicht still einer Analyseperson zugewiesen. |
| AC-I04 | Ein Transkript ohne Uhrzeiten wird importiert. Textbasierte zulässige Funktionen arbeiten mit dem Original; zeitabhängige Funktionen zeigen ihren konkreten Datenmangel. Ergänzter Gesamtzeitraum erzeugt keine erfundenen Einzelzeitstempel. Automatisch erkannte/unsichere/nicht unterstützte Sprache folgt der freigegebenen Sprachmatrix. |
| AC-I05 | Add und Replace zeigen vor Übernahme jeweils die tatsächlichen Folgen. Abbrechen lässt Rohdaten, IDs, Kontext, Events, Dashboard und Korrekturen des bestehenden Chats unverändert. Bestätigtes Add ergänzt; bestätigtes Replace verwendet den geprüften Ersatzbestand. |
| AC-I06 | Ein Update enthält neue, unveränderte, erkennbare bearbeitete, gelöschte und nicht eindeutig zuordenbare Einträge. Ergebnisbericht und Datenbestand entsprechen dem Prüfsatz; ungelöste Zuordnungen bleiben ungelöst. Fehlende Inhalte eines Teil-Add werden nicht als Löschung interpretiert. Medien-/Systemmeldungen werden gemäß freigegebener Wertungsregel behandelt. |

### Deterministische und regelbasierte Analysen

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-D01 | Jede veröffentlichte A-Funktion und jeder deterministische Teil einer B-Funktion besteht einen freigegebenen Prüfsatz mit exakten erwarteten Mengen, Nennern, Fenstern, Rangfolgen und Rundungen. Dasselbe gültige Daten-/Kontext-/Korrekturset liefert dasselbe Ergebnis. Keine Zahl stammt aus den bisherigen statischen Referenzwerten. |
| AC-D02 | Personenwerte und Gesamtwerte sind nach der festgelegten Mehrfach-/Anteilregel konsistent. Insbesondere Tagespeak/24h-Peak bleiben unterscheidbar, Fast-Responder-Quote passt zur Verteilung und Hot-&-Cold-Phase passt zum Deep Dive. Die bekannten Legacy-Widersprüche gelten nicht als zu erhaltende Fachlichkeit. |
| AC-D03 | Grenzfälle für Tageswechsel, Zeitzone, Kalenderwechsel, Importbeginn/-ende, fehlende Tage, Nachtaktivität, Antwortblöcke und Gleichstände liefern die zuvor festgelegten Erwartungen. Eine erste Importnachricht wird nicht ohne Regel zum Gesprächsstart und typische Schlafzeit nicht zum harten Schreibverbot. |
| AC-D04 | Jeder veröffentlichte Ergebnisbereich zeigt dieselbe Chat-/Personen-/Zeitraumbasis wie seine Details. Methode, Einheit und erforderliche Datenbasis sind auffindbar. Für leere oder zu kleine Mengen erscheint der freigegebene Zustandsgrund statt einer erfundenen 0 oder scheinpräzisen Kennzahl. |

### Semantische Analysen

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-S01 | Pro veröffentlichter Klasse und unterstützter Sprache werden auf einem von der Entwicklung getrennten, fachlich geprüften Abnahmesatz die vorher beschlossenen Qualitätsmaße erreicht. Alle Grenzwerte und die zugelassene Quote kritischer Fehlertypen sind dokumentiert. Fehlt ein Grenzwert oder wird er verfehlt, bleibt die betreffende Veröffentlichung gesperrt. |
| AC-S02 | Jede gewertete semantische Einheit lässt sich zu ihren tatsächlich verwendeten Originalen und Klassifikationen zurückverfolgen. Kennzahl und vollständige Evidence entsprechen derselben Auswertung; unzugeordnete Themenbeispiele werden nicht als Themenbeweis gezählt. |
| AC-S03 | Prüffälle mit mehreren plausiblen Deutungen, Ironie, Zitaten, Drittpersonen und unzureichendem Kontext zeigen die freigegebene Unsicherheit/Reviewbehandlung. Automatische und bestätigungspflichtige Fälle halten die beschlossene Confidence-Politik ein; nicht belegbare Inhalte werden nicht ergänzt. |
| AC-S04 | Eine gültige Nutzer-Reklassifizierung bzw. ein verworfener eindeutig unveränderter Kandidat bleibt nach erneutem Modelllauf erhalten. Inhaltsänderung oder Identitätskonflikt erzeugt den definierten Reviewfall statt stiller Modellüberschreibung. |

### Evidence und Korrekturen

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-E01 | Ein Prüfsatz mit mindestens drei Belegseiten ist vollständig durchlaufbar. Menge der erreichten eindeutigen IDs entspricht exakt der ausgewiesenen Treffermenge; keine Dopplung oder Auslassung. Person-, Zeitraum-, Status- und anwendbare Confidencefilter liefern jeweils die vorher festgelegten Teilmengen und Gesamtzahlen. |
| AC-E02 | Zwei verschiedene Nachrichten haben identischen sichtbaren Text. Jeder zugehörige Beleg springt dennoch zur richtigen MessageId. Zurück führt in die auslösende Analyse/Belegliste/den Dialog mit erhaltenem Filter und sinnvoller Position/Fokus. `unresolved` führt zu keiner geratenen Ersatzstelle. |
| AC-E03 | Ausschließen, wieder einbeziehen und erforderliches Reklassifizieren verändern die erwartete Wertung, erhalten das Original und werden nach Reload korrekt angezeigt. Die gleiche Änderung in Chat A beeinflusst Chat B nicht. Eine persönliche Wortliste öffnet die fachlich vorgesehene Personenmenge, nicht unbezeichnet beide Personen. |
| AC-E04 | Das Korrekturjournal zeigt betroffene Zuordnung, alten/neuen Zustand, Zeitpunkt und Scope. Undo stellt bei unveränderten Daten die vorherige Entscheidung und Kennzahl wieder her. Nach unklarer/inhaltlich geänderter Originalzuordnung verlangt es den definierten Review und überschreibt keine andere Nachricht. |

### Reanalyse

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-R01 | Für jeden Auslöser in Abschnitt 5 besteht mindestens ein Ende-zu-Ende-Prüffall vom Nutzerereignis bis zur aktualisierten Zahl, Belegmenge und gegebenenfalls Dashboardkarte. Die erwartete Änderung ist vorab fachlich berechnet; reines Speichern eines Flags genügt nicht. |
| AC-R02 | Ein bekannter Belegausschluss verändert den betreffenden Zähler/Nenner gemäß Vertrag; unabhängige Nachrichtenstatistiken bleiben unverändert. Wiederaufnahme stellt bei unverändertem Bestand die ursprünglichen Werte wieder her. Entsprechende Tests decken Pausen- und Phasenausschlüsse getrennt ab. |
| AC-R03 | Bei verzögerter oder fehlgeschlagener Aktualisierung bleibt erkennbar, welche Werte veraltet sind und auf welche Basis sie sich beziehen. Neue Filterüberschrift plus unmarkierter alter Gesamtwert ist ein Fehler. Wiederholen führt zum gültigen Stand, kein Ersatz durch Referenzwerte. |
| AC-R04 | Zwei schnell aufeinanderfolgende Zeitraum-/Kontextänderungen und ein Chatwechsel führen ausschließlich zu den Ergebnissen des jeweils aktuellen Scopes. Eine verspätete Antwort überschreibt weder die neuere Auswahl noch den anderen Chat. Ein fachlich unveränderter Ergebniswert ist über den verarbeiteten Eingabestand überprüfbar. |

### Events

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-V01 | Manuelles Event anlegen, Kategorie/Titel/Von/Bis/Ort/Notiz und vorhandenes Icon bearbeiten, speichern, wieder öffnen und reloaden: alle gültigen Angaben bleiben erhalten; Notiz ist an den vorgesehenen Übersichts-/Detailstellen sichtbar. Ungültiger Zeitraum wird nach freigegebener Validierung behandelt, nicht still umgedeutet. |
| AC-V02 | KI-Vorschlag bestätigen und einen anderen verwerfen; manuelles/bestätigtes Event bearbeiten oder löschen. Zustände und Bedeutungen bleiben verschieden und persistent. Ein eindeutig verworfener Vorschlag kehrt beim unveränderten Chatupdate nicht als ungeprüfter neuer Vorschlag zurück. |
| AC-V03 | Bestätigtes Event als Kontext zu einer passenden Phase verwenden, dann Datum ändern oder Zuordnung zurücknehmen. Nur die fachlich betroffenen Ansichten/Wertungen ändern sich. Allgemeine Ereignisbibliothek und zeitraumbezogene Analyseansicht sind unterscheidbar; keine Kausalitätsbehauptung allein aus Überlappung. |

### Begleiter

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-C01 | Eine Frage zu einer verfügbaren Kennzahl wird mit dem aktuellen echten Ergebnis und dessen zulässiger Quellenbasis beantwortet. Bei unavailable-Funktion, fehlender Datenbasis oder Dienstfehler benennt der Begleiter die Grenze. Kein hinterlegter Beispieltext wird als Antwort auf einen echten Chat ausgegeben. |
| AC-C02 | Eine Ereignissuche im Prüfsatz mit mehreren plausiblen Stellen liefert überprüfbare Kandidaten, Confidence/Unsicherheit und exakte Originalsprünge. „Erste Stelle“ ist auf den verfügbaren Bestand begrenzt; erwähnter und tatsächlicher Zeitpunkt werden nicht verwechselt. |
| AC-C03 | Jede veröffentlichte zustandsändernde Aktion wird einmal bestätigt, einmal abgebrochen und einmal mit zwischenzeitlich geänderten Daten getestet. Nur gültige ausdrückliche Bestätigung führt die geprüfte Änderung genau einmal aus; veraltete Vorschau wird nicht blind angewandt. |
| AC-C04 | Anfrage mit temporärem Zeitraum verändert den globalen Filter nicht. Adversariale Anweisungen innerhalb importierter Nachrichten führen weder zu Zustandsänderung noch zu Datenzugriff außerhalb des freigegebenen Chats/Scopes. Antwort und Aktionen respektieren die gewählte Dyade. |

### Home, Dashboard und Navigation

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-H01 | Ohne Chat sind nur Home, Pro und Profil verfügbar; Home zeigt Bibliothek, keine Analyseergebnisse. Chatwahl öffnet Dashboard; Home setzt den aktiven Kontext zurück. Direkter Aufruf eines Chatbereichs ohne gültigen Chat wird geschützt. Interne Stufen I/II.A erscheinen nicht. |
| AC-H02 | Verfügbare Dashboardkarten zeigen echte, mit der Detailanalyse konsistente Kurzwerte. Kartenwahl und Reihenfolge sind je Chat nach Reload erhalten. Die drei heute freigegebenen Kurzprojektionen sind der Ausgangsumfang; zusätzliche Karten benötigen eine fachlich passende Kurzprojektion, keine automatische Übernahme aller Detailcharts. |
| AC-H03 | Alle sechs Kategorien und 33 registrierten Ziele sind ihrem Release-/Planstatus entsprechend auffindbar. Gesperrt wegen Tarif und noch nicht produktiv verfügbar sind unterscheidbar. Tarifvorschau zählt nur freigegebene produktive Analysen; keine Zahlung verspricht die Freischaltung einer C-/unavailable-Funktion. |

### Globaler Analysezeitraum

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-P01 | Gesamter Zeitraum, 7/30 Tage, 3/12 Monate und benutzerdefinierte Grenzen liefern für freigegebene Kalender-/Zeitzonenfälle die exakten erwarteten Nachrichtenmengen. Relative Presets verwenden das letzte gültige Chatdatum, nicht das Systemdatum. Ohne gültiges Chatdatum wird kein heutiges Ersatzdatum eingesetzt. |
| AC-P02 | Zeitraum bleibt je Chat nach Reload erhalten und gilt konsistent für Zahlen, Charts, relevante Evidence und zeitbezogene Begleiterantworten. Die vollständige Ereignisbibliothek und der Originalreader dürfen Kontext außerhalb davon zugänglich machen, ohne ihn unbemerkt mitzuzählen. |
| AC-P03 | Ein Add verschiebt das Chatende: relatives Fenster aktualisiert seine Grenzen und berechnet neue Mitgliedschaften; benutzerdefinierte Grenzen bleiben unverändert. Prüffälle für Monatsende/Schaltjahr und teilweise oder ganz undatierte Beiträge folgen dem vorher freigegebenen Vertrag. |

### Mobile und Desktop

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-M01 | Auf 390 × 844 und 430 × 932 sind Import, Dashboard, Analyse, Evidence/Undo, Events, Kontext, Zeitraum und Begleiter bedienbar: kein unbeabsichtigtes horizontales Seitenscrollen, keine verdeckten Hauptaktionen. Modals/Sheets scrollen intern, Hintergrund bleibt gesperrt; Schließen/Escape und Rückfokus funktionieren, soweit die Eingabeart verfügbar ist. |
| AC-M02 | Zusätzlich zur Viewportautomation wird auf einem realen unterstützten Touchgerät geprüft: native Tastatur, Diagrammberührung, Scrollen in Dialogen, fokussierte Nachricht und Rücknavigation. Tooltipwerte sind erreichbar, ohne dauerhaftes Hover vorauszusetzen. Gerät/OS/Browser und Ergebnis werden dokumentiert; Pointertests allein bestehen dieses Kriterium nicht. |
| AC-X01 | Auf 1024 × 768 und einem freigegebenen größeren Desktopviewport werden dieselben Kernflows mit Maus und Tastatur geprüft. Sichtbarer Tastaturfokus, erreichbare Dialogaktionen und verständliche Chartwerte; kein abgeschnittener Inhalt und kein Fokusverlust in den Hintergrund eines offenen Modals. Browser-/Assistenztechnikmatrix ist vor Abnahme festgelegt. |

### Themes

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-T01 | Genau die aktuell freigegebenen Themes `editorial-warm` und `night-mode-chic` sind auswählbar. Ohne gültige Wahl gilt Editorial Warm; Betriebssystemwechsel ändert die Auswahl nicht. Explizite Auswahl übersteht Reload; Speicherfehler wird gemeldet. Kein Wiederaufleben des entfallenen dritten Themes. |
| AC-T02 | Kernflows aus AC-M01, Fehler-/Leerzustände, Tooltips und Overlays werden in beiden Themes geprüft. Text, Focus, Person A/B, Status und Diagrammlegenden bleiben unterscheidbar; Bedeutung hängt nicht allein von Farbe ab. Semantische Tokens bleiben die gemeinsame Grundlage. Kontrast-/Barrierefreiheitsziele und Messnachweise werden mit der UI-Abnahmematrix festgelegt. |

### Datenschutz und Datenkontrolle

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-PR01 | Öffentliches Repository/Frontendbundle enthält keine privaten Referenzchats und keine Dienstschlüssel. Bei produktiven Nutzerdaten gelangen Originaltexte weder in öffentliche Assets noch ungeplant in Telemetrie/Fehlerlogs. Privacy Check und gezielte Prüfungen der tatsächlichen Datenwege sind bestanden. |
| AC-PR02 | Für externe KI-Verarbeitung sind übertragene Daten, Zweck und erforderliche Nutzerfreigabe vor Nutzung transparent. Ein Chat-/Nutzerfremdzugriff wird in der gewählten Produktionsform negativ getestet; bei Serverbetrieb auch durch direkte unberechtigte Requests. UI-Chat-Isolation allein ist kein Autorisierungsnachweis. |
| AC-PR03 | Chat-/Datenlöschung entfernt oder sperrt den Zugriff auf Originale, Ableitungen, Evidence und Journal gemäß vorher beschlossener Aufbewahrungs-/Löschregel. Betroffene lokale/entfernte Speicher und etwaige Sicherungsfristen werden geprüft. Keine unbelegte Aussage „vollständig gelöscht“, solange Daten noch regulär zugänglich sind. |

### Performance und Umfangsgrenzen

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-PF01 | Vor Messung sind Referenzgeräte/Browser, Netzbedingungen, Chat-/Dateigrößen, Sprachen, Zahl paralleler Chats sowie numerische Zielwerte beschlossen (D-PERF). Für Importvorschau/-abschluss, erste/aktualisierte Analyse, Suche/Originalsprung und erste/vollständige KI-Antwort liegen reproduzierbare Messungen vor; die festgelegten Perzentil-/Maximalgrenzen werden eingehalten. Fehlende Zahlen bedeuten BLOCKED. |
| AC-PF02 | Innerhalb des zugesagten Umfangs bleiben Fortschritt und Fehler sichtbar; eine vorgesehene Abbruchhandlung führt nicht zu teilweise gültigen Importdaten. Überschreitung eines Größen-/Kostenlimits wird vor kostenpflichtiger Übernahme oder weiterer Verarbeitung verständlich angezeigt. Keine stille Kürzung von Daten/Evidence zugunsten guter Laufzeiten. |

### Fehlerzustände und Aktualisierung bestehender Chats

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-F01 | Für Import, Analyse und KI werden Loading, Empty, Error/Retry, insufficient-data und unavailable separat ausgelöst. Jeder Zustand zeigt den richtigen Grund und zulässigen nächsten Schritt; kein Fehlerpfad erzeugt Demoergebnisse, erfundene Events oder Erfolgszahlen. |
| AC-F02 | Beschädigter Speicher, fehlgeschlagener Schreibvorgang und abgebrochener Import überschreiben keinen gültigen Bestand durch einen erfundenen Ausgangszustand. Absichtlich leere Listen bleiben leer. Wiederholen stellt einen nachvollziehbaren Zustand her; Original-/Legacy-Daten werden nicht ungefragt gelöscht. |
| AC-U01 | Chat A besitzt Dashboardreihenfolge, Kontext/Schlafhinweise, manuelles und bestätigtes Event, verworfenen Vorschlag, Evidence-Reklassifizierung/-Ausschluss und Pausen-/Phasenausschluss. Add eines vollständigen aktualisierten Exports erhält alle eindeutig gültigen Entscheidungen, übernimmt die erwarteten neuen Daten und aktualisiert Ergebnisse/relative Zeiträume; Chat B bleibt unverändert. Danach Reload und Vergleich mit Sollzustand. |
| AC-U02 | Derselbe Prüffall wird mit Replace sowie anschließendem Identitäts-/Inhaltskonflikt ausgeführt. Vorschau und Updatebericht benennen erhaltene, weggefallene und prüfbedürftige Verknüpfungen korrekt. Kein stilles Umhängen von Evidence; erneute Übernahme desselben Bestands erzeugt keine weiteren Änderungen. |

### Release-Nachweise

| ID | Prüfsituation und Bestehenskriterium |
|---|---|
| AC-Q01 | Typecheck, Build, öffentliche Tests, anwendbare Legacy-/Characterization-Tests und Privacy Check laufen erfolgreich; neue fachliche Prüfsätze und Integrationsfälle decken die angenommenen A/B-Funktionen sowie obige Datenkette ab. Eine Ausnahme benötigt dokumentierte fachliche Einordnung, keine still geänderte Baseline. |
| AC-Q02 | Abnahmeprotokoll ordnet jedem verpflichtenden Kriterium und jedem veröffentlichten Feature PASS mit Nachweis zu. Offene BLOCKED/FAIL-Punkte verhindern die entsprechende Freigabe. Es gibt eine konkrete Liste veröffentlichter Funktionen, unterstützter Quellen/Sprachen/Umfänge, bekannter Grenzen und beschlossener Tarife. |

**Abgrenzung zum heutigen Teststatus:** `CURRENT_PRODUCT_STATE.md` berichtet für den dortigen Audit erfolgreiche Typecheck-/Build-/Privacy-Prüfungen, 235 öffentliche und 57 Legacy-/Characterization-Tests. Diese sichern den damaligen Implementierungsstand, nicht die hier erst festgelegte produktive Datenkette. Für die Erstellung dieses Dokuments wurden keine Anwendungstests neu ausgeführt und keine Baselines verändert.

## 8. Nicht Teil der fachlichen Festlegung

Dieses Dokument implementiert nichts und legt insbesondere keine Backend-, Worker-, Queue-, Datenbank-, API-, Hosting-, Authentifizierungsanbieter- oder Cachearchitektur fest. Gleiches gilt für LLM-Anbieter/Modell, konkrete Prompt-/Retrievaltechnik, Parserbibliothek, ID-Generierungsverfahren und Zahlungsanbieter. Diese Entscheidungen trifft die technische Entwicklung nach Prüfung der fachlichen Verträge, Datenrisiken, Betriebsanforderungen und Budgets.

Auch eine visuelle Neugestaltung, zusätzliche Themes, neue Analyse-IDs, die Umsetzung von C, Preise oder eine Rechtsprüfung werden hier nicht beauftragt. Die vorhandenen Komponenten und Interaktionsverträge sind Ausgangspunkt; ihre konkrete Wiederverwendung oder technische Änderung ist eine spätere Implementierungsentscheidung. Tests dürfen dabei nicht absichtlich dokumentierte Altfehler zu neuen Produktregeln machen.

**Nicht an die technische Entwicklung delegierbar sind fehlende Produktbedeutungen:** Was zählt, wie ein Nenner gebildet wird, welche Unsicherheit zulässig ist, welche Daten verarbeitet werden dürfen, welche Folgen eine Korrektur hat und was ein kostenpflichtiges Angebot verspricht, muss fachlich freigegeben werden. Entwickler dürfen Lösungsvorschläge und Machbarkeit liefern, aber nicht aus einem Typnamen oder Legacy-Mock eine neue Definition ableiten.

## 9. Offene Entscheidungen und Freigabeunterlagen

Die folgenden Punkte blockieren jeweils die betroffene Fähigkeit. Sie bedeuten nicht, dass vor jedem isolierten technischen Versuch alle Produktfragen gelöst sein müssen. Für eine produktive Implementierung und Abnahme dürfen jedoch keine offenen Fachregeln still durch Code ersetzt werden. Schreibweisen wie D-DATA/TIME verweisen auf beide Einträge D-DATA und D-TIME.

**Verantwortung:** Die Produktverantwortung gibt Scope, fachliche Definitionen und akzeptable Qualitäts-/Kosten-/Nutzungsgrenzen frei. Fachliche Prüfer erstellen oder bestätigen Erwartungswerte und Semantiklabels. Die technische Entwicklung prüft Machbarkeit und schlägt Implementierung sowie messbare Betriebsziele vor. Datenschutz-/Rechtsanforderungen erhalten die dafür zuständige Prüfung; dieses Dokument bescheinigt keine rechtliche Konformität.

| Entscheidung | Konkret festzulegen / erforderliches Ergebnis | Blockiert |
|---|---|---|
| D-SCOPE | A/B/C-Empfehlung bestätigen oder konkret ändern; jedes veröffentlichte B-Feature und jede Begleiteraktion einzeln benennen. Festlegen, ob das vorgeschlagene Premium-Paket zum ersten Release gehört; manuelle Events/Kontextzugang, produktive Tarifgrenzen und nicht verfügbare Ziele eindeutig beschreiben. Kein rein numerischer „mindestens N Features“-Ersatz. | Verbindliche Release-/Tarifzusage und abschließende Abnahme. |
| D-DATA | Pro Kennzahl relevante Nachrichtenarten, System-/Medien-/Löschfälle, Sprecher-/Aliasidentität, A/B-/Drittpersonenbasis und Umgang mit Importlücken definieren. Dyadenwechsel und Wirkung auf bestehende Zuordnungen festlegen; in Gruppen konkretisieren, welcher freigegebene Bestand das „Chatende“ für relative Fenster bildet. | Korrekte Mengen/Nenner, Gruppendyaden, stabile Datenbasis. |
| D-IMPORT | Unterstützte WhatsApp-Varianten/Locales, Text-/Transkriptformate und V1-Sprachen verbindlich auflisten. Vorschauentscheidungen für unklare Sprecher, Teilzeiten, bearbeitete/fehlende/mehrdeutige Nachrichten sowie Add-/Replace-Konflikte anhand realitätsnaher Beispiele festlegen. Identitätsversprechen und Grenzen unterscheiden; kein beliebiges automatisches Matching versprechen. | Echter Import, Deduplizierung und Updategarantien. |
| D-TIME | Zeitzonen-/Sommerzeitregeln, Tages- und Intervallgrenzen, Kalenderfenster, unvollständige/undatierte Beiträge, Importbeginn/-ende sowie Mindestdaten je Zeitfunktion festlegen. Bestehendes relatives „Chatende statt heute“ erhalten; offene Randfälle konkret entscheiden. | Zeitreihen, Zeitraumfilter, Streak, Peaks, Antwort-/Nachtlogik. |
| D-TEXT | Wort-/Zeicheneinheit, Unicode-/Emoji-Varianten, Normalisierung, Stopplisten und Sprachen, Phrasen/Flexion, Signature-Vergleich, Nullfälle/Gleichstände sowie Schwellen für kurze/lange Beiträge mit erwarteten Beispielen festlegen. | `texting`, `longstory`, `emoji`, `words` und Wortanteile in anderen Funktionen. |
| D-CONVERSATION | MessageBlock, Blockende, Gesprächsstart/Fortsetzung/Themenstart, Antwortzuordnung, Pausenschwellen und individuelle Nacht-/Schlaferkennung präzisieren. Typische Schlafprofile als Hinweis gewichten, unbekannte Profile und Nachtschreiber behandeln; Ausschluss-/Kontextwirkung je Kennzahl festlegen. | `move`, `response`, `firstlast`, `silence`, Gesprächsanteile weiterer Funktionen. |
| D-TRENDS | Chatnormal, Hot-/Cold-Phase, Mindestdauer, Vergleichsfenster, Pulse-Index, Randperioden, Kontinuität vs. Menge, Ausschlusswirkung und Abhängigkeiten zwischen Hot & Cold/Deep Dive definieren. Konfligierende Legacy-Referenzen fachlich auflösen und neue erwartete Prüfsätze freigeben. | `hotcold`, `deepdive`, `pulse` und abhängige Dashboardaussagen. |
| D-SEMANTIC | Pro ausgewählter semantischer Funktion Klassen/Labeldefinitionen, Einheit, Nenner, Mehrfachlabels, relevante Kontexte, Ausschlussfälle und erlaubte Aussage festlegen. Insbesondere Frage vs. Fragezeichen, Anrede vs. Erwähnung, Thema, Signal, Insider sowie Themenstart anhand positiver/negativer/mehrdeutiger Beispiele beschreiben. | Alle ausgewählten B-Funktionen und semantische Teile von A. |
| D-QUALITY | Je Feature/Klasse/Sprache geeignete Evaluationsmaße, numerische Akzeptanzgrenzen, kritische Fehlertypen, Confidence-Kalibrierung, automatische vs. manuelle Entscheidung und Umfang/Verantwortung des Abnahmesatzes festlegen. Auch Regeln für nicht klassifizierbare Fälle und nicht erfüllte Qualität bestimmen. | Jede produktive semantische Klassifikation; AC-S01 darf vorher nicht PASS sein. |
| D-CORRECTION | Korrekturscope (Chat/Dyade/Feature/Zuordnung), erlaubte Reklassifizierungen, Vorrang gültiger Nutzerentscheidung, Inhaltsänderungs-/Identitätskonflikte, Undo nach Update sowie vollständige Eingabe-/Ausgabeabhängigkeiten festlegen. Nachweisfälle für Ausschluss, Wiederaufnahme, Kontext, Event und Importupdate freigeben. | Echte Korrekturwirkung, Reanalyse und Persistenz über Updates. |
| D-EVENTS | Ereignis vs. Erwähnung, unscharfes Datum/Zeitraum, Kategorie-/Statusbedeutung, bestätigter Kontext vs. Ausschluss sowie Wiedererkennung verworfener Vorschläge festlegen. Regeln für unvollständige Intervalle und Konflikte mit manuell korrigiertem Event definieren. | Produktive Life-Event-Suche und verlässliche Kontextwirkung. |
| D-COST | Zulässiger Chat-/Abfrageumfang, Analyse-/Reanalyse-/Suchkontingente, Kostenbudget pro Nutzung/Tarif, sichtbare Limits und Verhalten beim Erreichen festlegen. Nachdatenimport und Korrektur dürfen kein unbemerktes Kostenversprechen erzeugen. Zahlungs-/Anspruchsverhalten ist Produktentscheidung; Anbieterwahl bleibt technisch. | Premium-/Begleiterfreigabe und belastbare Nutzungslimits. |
| D-PERF | Unterstützte Geräte-/Browser-/Assistenztechnikmatrix, Messprofile mit Nachrichten-/Dateigrößen und Sprachen, zulässige Reaktions-/Abschlusszeiten mit Messstatistik sowie Ressourcen-/Abbruchgrenzen beschließen. UI-/Kontrastabnahme messbar konkretisieren; Entwickler liefert Machbarkeitsmessungen, Produkt bestätigt zugesagte Grenzen. | AC-M/X/T/PF und belastbare Betriebs-/Leistungszusage. |
| D-PRIVACY | Produktionsform und tatsächliche Datenwege, nötige Einwilligung/Transparenz, erlaubte Verarbeitung/Telemetrie, Aufbewahrung/Löschung einschließlich Sicherungen und Zugriffsscope festlegen. Nutzerbezogene Datenkontrolle vor Veröffentlichung prüfen. | Verarbeitung privater Chats und öffentlicher Produktbetrieb. |
| D-LATER | Für C erst bei späterer Aufnahme eigene Definitionen: Antwortverlauf, Gesprächsfluss, Nähe/Offenheit, gemeinsame Themenentwicklung, Planidentität/-status, Raincheck, Rituale, langfristige Veränderungen und Berichtssynthese. | Nur spätere Aufnahme dieser Funktionen; kein zusätzlicher V1-Blocker bei bestätigtem C-Scope. |

**Erforderliche Freigabeunterlagen vor fachlicher Fertigmeldung:** beschlossene Feature-/Tarifliste; Format-/Sprach-/Umfangsmatrix; Rechenverträge mit Einheiten, Nennern, Randfällen und erwarteten Werten; Semantikdefinitionen samt Qualitätsgrenzen; Korrektur-/Reanalyseabhängigkeiten; Update-/Identitätsbeispiele; Datenschutz-/Kosten-/Leistungsgrenzen; vollständig ausgefülltes Abnahmeprotokoll für Abschnitt 7. Technische Entwickler erhalten damit prüfbare Ziele, ohne fehlende Produktregeln selbst erfinden zu müssen.

**Bearbeitungsumfang dieses Auftrags:** ausschließlich dieses Dokument. Kein Anwendungscode, keine Registry, kein Test und keine Baseline wurde für die Scope-Empfehlung geändert; keine neue Produktphase wurde begonnen.

# Gemeinsamer Daten- und Zählvertrag

Stand: 04.11.2026. Fachlicher Vertrag für „Zwischen den Zeilen“, keine Implementierung.

**Verbindlicher Freigabestand vom 04.11.2026:** Die Produktverantwortliche hat DC-01 bis DC-11 sowie DC-13 bis DC-15 mit den Präzisierungen in [V1_PRODUCT_DECISIONS.md](V1_PRODUCT_DECISIONS.md) für V1 ausdrücklich freigegeben (`approved`). DC-12 bleibt `open`; der folgende Gesprächsvertrag ist ein gesonderter Entscheidungsvorschlag. Der Decision Log hat bei abweichender Formulierung Vorrang. Die nachstehenden historischen Kennzeichnungen „Empfehlung/offen“ beschreiben den Entwurfsstand und sind für die ausdrücklich genehmigten Regeln **keine weiterhin ausstehende Freigabe**. Nicht mitentschieden sind zusätzliche Details wie konkrete Stopwordlisteninhalte, Unicode-Version oder die Gruppierung von Emoji-Varianten. Keine Codefreigabe.

Grundlagen: `CURRENT_PRODUCT_STATE.md`, `MVP_SCOPE_AND_ACCEPTANCE.md`, `AGENTS.md`, `docs/PRODUCT_SPEC.md`, `docs/ANALYSIS_RULES.md`, `docs/IMPORT_PERSISTENCE.md`, `docs/DATA_MODEL.md`, `docs/UX_RULES.md` und `docs/OPEN_DECISIONS.md`.

**Verbindlichkeit:** Bereits beschlossene Regeln und die folgenden Struktur-/Nachvollziehbarkeitsanforderungen gelten zentral. Neue fachliche Wertungsentscheidungen sind ausdrücklich **Empfehlung, offen** und erhalten eine Decision-ID in Abschnitt 20. Sie dürfen vor Freigabe nicht als impliziter Default implementiert werden. Der Auftrag autorisiert die Spezifikation, nicht die Implementierung oder eine stillschweigende Entscheidung bisher offener Grenzfälle. Zahlen aus Legacy-Referenzen definieren keine Zählregel. Die bestehende App besitzt weiterhin keine produktive Analyse-/Reanalyseengine.

Ein Featurevertrag muss die zentrale Menge, Einheit, Zeitpräzision, Personenbasis, Regelversion und Korrekturwirkung benennen. Er darf keine eigene Bedeutung von „Nachricht“ oder „Wort“ einführen. Eine besondere Teilmenge braucht einen expliziten, zentral nachvollziehbaren Ableitungsvertrag. Alle Aussagen beziehen sich auf den **verfügbaren importierten Bestand**, nicht auf nachgewiesene Vollständigkeit der realen Kommunikation.

## 1. Nachrichtentaxonomie

Eine Quellzeile ist nicht automatisch eine Nachricht. Ein Eintrag kann mehrere Merkmale tragen: etwa Bild mit Caption, weitergeleitet, bearbeitet und als Reply gesendet. Primärer Inhaltstyp, Herkunft, Bearbeitungs-/Löschstatus und Reply-Beziehung sind getrennte Dimensionen. Die Tabellenzeilen sind deshalb keine addierbaren Zählklassen. Eine Bildnachricht mit Caption zählt höchstens einmal als Nachricht.

**Legende:** J = zulässig; N = ausgeschlossen; T = nur eigener, separat erkennbarer Text/Caption; E = nur Emojis im zulässigen eigenen Text; D = nur mit gültigem Datum und im Zeitraum; K = Kontext/Strukturnachweis, kein Beweis unbekannten Inhalts. Alle Mengen setzen eindeutige Identität, bestätigten A/B-Sender und Scope voraus. J bedeutet Eignung, nicht automatische semantische Bestätigung. Die mit * markierte quantitative Wertung ist der **empfohlene, noch freizugebende Vertrag DC-01/02/03**. Für Wortformen gilt zusätzlich DC-08.

Alle Zeilen bleiben mit tatsächlich verfügbarem Original oder gekennzeichnetem Platzhalter im Reader sichtbar; ein unlesbarer Eintrag darf als uninterpretierter Rohdatensatz erscheinen. Sichtbarkeit rekonstruiert keine fehlenden Inhalte und unterliegt einer späteren ausdrücklichen Datenlöschung.

| Typ/Merkmal | Original sichtbar | Nachricht | Text/Wörter | Emoji | Aktivität/Streak | Evidence | Semantik | Sonderregel |
|---|---|---|---|---|---|---|---|---|
| Normale Textnachricht | J | J* | J | E | D* | J | J, sprach-/qualitätsabhängig | Kein Stopwordabzug von Gesamtwörtern. |
| Nur Emoji | J | J* | Keine Worttokens; Textsegment bleibt erhalten | J | D* | J | Kontextabhängig | Emoji ist nicht automatisch Wort oder Gefühl. |
| Text + Emoji | J | J* | Eigene Worttokens | J | D* | J | J | Ein Sendebeitrag, mehrere Inhaltsarten. |
| Medienplatzhalter | J | J*, wenn einzelner Sendebeitrag sicher | N, außer Caption | E | D* | K/T | Nur T | „Medien ausgelassen“ ist kein verfasstes Wort. Sammelhinweis beweist keine Anzahl. |
| Bild | J | J* | T | E | D* | K/T | Nur T | Kein Bildverständnis in V1. |
| Video | J | J* | T | E | D* | K/T | Nur T | Keine Bild-/Tonspur auswerten. |
| Audio/Voice Message | J | J* | T | E | D* | K/T | Nur T | Dauer ist keine Wortzahl; keine automatische Transkription. |
| Dokument | J | J* | T | E | D* | K/T | Nur T | Dateiname/Dateiinhalt nicht als eigene Caption behandeln. |
| Sticker | J | J* | T | E | D* | K/T | Nur T | Bildsymbol nicht als Text-Emoji zählen. |
| GIF | J | J* | T | E | D* | K/T | Nur T | Keine Interpretation der dargestellten Szene. |
| Standort | J | J* | T | E | D* | K/T | Nur T | Technische Koordinaten sind keine selbst verfassten Wörter; geteilte Position beweist kein Treffen. |
| Kontakt | J | J* | T | E | D* | K/T | Nur T | Kontaktkartenfelder nicht dem Wortschatz des Senders zurechnen. |
| Gelöschte Nachricht | J, Platzhalter | J* nur als belegtes Sendeereignis, DC-02 | N | N | D* nur Datum des ursprünglichen Sendens | K | N für verlorenen Inhalt | Löschzeit ist nicht Sendezeit. |
| Bearbeitete Nachricht | J, verfügbare Fassung markiert | Einmal* | Aktueller zulässiger Text | E | Ursprüngliches Sendedatum* | J, versionsbezogen | Aktueller Text, neu prüfen | Bearbeitung erzeugt keinen zweiten Sendebeitrag. |
| Systemmeldung | J | N | N | N | N | K | Nur separater Kontext, keine A/B-Klassifikation | Systemtext ist keine Personensprache. |
| Reaction | J, am Ziel oder als Ereignis | N*, DC-03 | N | N in Emoji DNA* | N* | K | Nur separat deklarierter Kontext | Eigener Reaktionskanal, keine zweite Textnachricht. |
| Weitergeleiteter Text | J, Herkunft markieren | J* als Sendebeitrag | Nur eigene Kommentierung | Nur eigene Kommentierung | D* | J für Weiterleitung, nicht Eigenautorschaft | Fremdtext nur als gekennzeichneter Kontext | Kein automatisches eigenes Thema/Sprachprofil. |
| Reply/zitierter Text | J | Antwort einmal* | Nur neu geschriebener Teil | Nur neu geschriebener Teil | D* | J mit Reply-Bezug | Zitat als Kontext, Antwort als Ziel | Zitat nicht nochmals dem Antwortenden zurechnen. |
| Nachricht mit Link | J | J* | Eigener Begleittext; URL nach DC-08 | E | D* | J | Begleittext; Link allein kein Inhalt der Zielseite | Keine automatische Websiteabfrage. |
| Mehrzeilige Nachricht | J | Einmal* | Gesamter eigener Text | E | D* | J | J | Zeilenwechsel erzeugt keine weitere Nachricht. |
| Unbekannter/nicht interpretierbarer Eintrag | J, gekennzeichnet | N bis Klärung | N bis Klärung | N bis Klärung | N bis Klärung | K für Rohbefund | N als ungesicherter Inhalt | Fehlender Parserfolg ist kein leeres Gespräch. |

Fehlt eine Kennzeichnung für Weiterleitung/Zitat im Export, darf deren Existenz nicht bloß aus Stil oder Textgleichheit erfunden werden. Erkennbare Mehrdeutigkeit wird dokumentiert; die Analyse benennt die Grenze der Quelle. Typ-/Senderkorrekturen sind Datenkorrekturen und können mehrere Grundmengen ändern, anders als ein einzelner semantischer Belegausschluss.

## 2. Gemeinsame Grundmengen

`relevant_message` ist **kein Synonym für jede importierte Zeile**. Empfohlene Definition nach DC-01/02: ein eindeutig identifiziertes, als einzelner menschlicher Sendebeitrag belegtes Nachrichtenelement des aktuellen kanonischen Bestands, dessen bestätigter Sender A oder B ist. Medien und reine Emojis gehören dazu; System, Reactions und unklare Einträge nicht. Löschplatzhalter benötigen die gesonderte Freigabe DC-02. Ein Datum ist für die Existenz einer Nachricht nicht erforderlich.

Die folgenden Namen bezeichnen Mengen von Nachrichtenidentitäten, außer `all_imported_entries`. Mengen werden nicht durch ein semantisches Ausschlussflag global verändert. Versionen, Importvorkommen und Textteile sind keine zusätzlichen Nachrichten.

| Menge | Einschluss | Ausschluss | Zweck / Beispiel |
|---|---|---|---|
| `all_imported_entries` | Alle aufgenommenen Quellvorkommen samt Herkunft | Abgebrochene, nicht übernommene Quelle | Importprüfung; zwei Exporte können zwei Vorkommen derselben Nachricht enthalten. Nicht als Nachrichtenanzahl verwenden. |
| `user_messages` | Eindeutige menschliche Sendebeiträge aller bestätigten Teilnehmer | System, Reaction, unklare Ereignisart/Identität | Kanonischer Readerbestand; auch C im Gruppenchat. |
| `relevant_messages` | `user_messages` von A/B nach zentraler Typregel | Dritte, unbekannter Sender, offene Identität | Nachrichtenmenge; A sendet ein Bild = ein Beitrag nach DC-01. |
| `text_messages` | Relevante Nachrichten mit abgrenzbarem eigenem Text/Caption, auch Emoji-Text | Reiner Medien-/Löschplatzhalter, nur fremdes Zitat/Forward | Textbasis; Nachricht kann null Worttokens haben. |
| `word_messages` | `text_messages` mit mindestens einem zulässigen `word_token` | Nur Emoji, nur ausgeschlossene technische Zeichenfolge | Worttragende Nachrichten, ausdrücklich anderer Nenner als alle relevanten Nachrichten. |
| `emoji_messages` | `text_messages` mit mindestens einer zulässigen Emoji-Einheit | Reactions, Sticker, zitierte/fremde Emoji-Segmente | Anteil emoji-haltiger Nachrichten; „😂😂“ ist eine Nachricht mit zwei Vorkommen. |
| `semantic_messages` | Zulässiger eigener Text/Caption mit ausreichender Sprach-/Inhaltsgrundlage | Verlorener/unklarer Inhalt, reine Metadaten; Fremdtext als Ziel | Kandidatenbasis, noch keine positiv klassifizierte Belegmenge. Emoji-only bedarf Featurevertrag. |
| `activity_messages` | Relevante Nachrichten mit eindeutigem gültigem Kalendertag | Undatiert/mehrdeutiges Datum, System/Reaction gemäß Empfehlung | Aktivität/Streak; Bild oder Emoji kann einen Tag aktiv machen. |
| `clock_messages` | Relevante Nachrichten mit auswertbarer Uhrzeit und vereinbarter Zeitbasis | Datum-only, unaufgelöste Zeitbasis | Stundenverteilung; nicht automatisch für reale Zeitdauern geeignet. |

**Scope-Anwendung:** Jede Ergebnismenge nennt Chat, Datenversion, Dyade und Zeitraum. „Gesamt“ kann undatierte Beiträge in nicht zeitabhängigen Mengen enthalten; ein begrenztes Datumsfenster darf sie nicht heimlich zuordnen. Empfehlung DC-06: undatierte/zeitlich nicht eindeutig zuordenbare Einträge aus begrenzten Mengen ausschließen und Anzahl/Abdeckung anzeigen. Kontext außerhalb der Wertungsmenge bleibt getrennt referenzierbar, nie still mitgezählt.

Ein Verhältnis deklariert Zähler und Nenner. Wortanteil, Nachrichtenanteil, Anteil emoji-haltiger Nachrichten und Anteil einer Emoji-Art sind verschiedene Einheiten. Fehlende Nennerdefinition blockiert den Featurevertrag. Personenanteile summieren sich nur dann auf 100 %, wenn der gemeinsame Nenner genau aus den disjunkten A/B-Mengen besteht.

## 3. Sprecher und Personen

Person A und B sind zwei **verschiedene bestätigte Teilnehmeridentitäten**, keine Arraypositionen, Geschlechter oder automatisch vermuteten Rollen. Ihre Zuordnung bleibt bei Sortierung, Anzeigenamensänderung und Reload stabil. Teilnehmer-ID und sichtbarer Name sind getrennt.

- Teilnehmererkennung schlägt vor; Nutzer bestätigt die Personen und bei Gruppen ausdrücklich die Dyade.
- Dritte Personen bleiben im Reader sichtbar, werden aber aus A/B-Kennzahlen ausgeschlossen. Ein Zitat von C wird nicht Sprache von A.
- Unbekannter Sprecher bleibt unbekannt. Reihenfolge, Tonfall, Name im Text oder Emoji rechtfertigen keine automatische A/B-Zuweisung.
- Alias/Namensvariation ist eine Zuordnung zu einer Person. Unterschiedliche Exportnamen können dieselbe Person sein; gleiche Anzeigenamen können verschiedene Personen sein.
- Eindeutige stabile Quellidentität kann eine bestehende bestätigte Zuordnung wiederverwenden. Namensähnlichkeit allein darf keine Personen zusammenführen. Neue mehrdeutige Aliase brauchen Bestätigung.
- System ist ein Quellakteur, niemals eine analysierte Person. Eine Reaction nennt gegebenenfalls Reagierenden und Zielautor getrennt.

Bei Dyadenwechsel ändern sich personenabhängige Mengen. Kontext, Belege und Korrekturen dürfen nicht einfach von A/B auf andere Menschen übertragen werden. Empfehlung DC-04: Entscheidungen an tatsächliche Identitäten und ihren Geltungsbereich binden; dyadenabhängige Entscheidungen für die neue Dyade erneut prüfen. Ein reiner Tausch der Anzeige A/B verändert keine persönliche Urheberschaft.

## 4. Nachrichtenidentität

Eine MessageId identifiziert einen Sendebeitrag innerhalb seines Chats über Datenversionen hinweg. Die produktfachliche Garantie ist Identitätskontinuität, nicht ein bestimmter Hash oder Datenbanktyp.

| Situation | Wann „dieselbe Nachricht“ zulässig ist | Review-/unresolved-Grenze |
|---|---|---|
| Erneuter Export | Stabile Quellidentität oder eindeutige, widerspruchsfreie Zuordnung von Sender, Inhalt, Zeitpräzision und Kontext | Gleichheit von Datei oder Text allein genügt nicht. |
| Gleicher Text an mehreren Stellen | Jedes separate Sendeereignis bleibt separat | Kein Zusammenführen aller „ok“-Nachrichten. |
| Bearbeitung | Quelle weist dieselbe Identität aus oder Zuordnung ist anderweitig eindeutig belegt | Ähnlicher Text ist kein sicherer Bearbeitungsnachweis. |
| Verschobene Reihenfolge | Identität unabhängig von neuer Position nachvollziehbar | Arrayindex ist keine Laufzeitreferenz. |
| Überlappende Exporte | Eindeutige Überschneidung bleibt einmal kanonisch, mit mehreren Quellenbelegen | Mehrere plausible Paarungen nicht automatisch auflösen. |
| Fehlende Zeitangaben | Eindeutige Quellidentität oder belegbare eindeutige Einbettung genügt | Keine Uhrzeit erfinden, um Matching scheinbar eindeutig zu machen. |
| Mehrdeutiges Matching | Erst nach nachvollziehbarer Klärung/Bestätigung übernehmen | Referenz bleibt unresolved; weder still doppelt zählen noch willkürlich zusammenführen. |

Bei offenen Identitätskonflikten ist die betroffene Datenübernahme zu prüfen; eine davon abhängige exakte Kennzahl darf keinen vollständigen, konfliktfreien Bestand behaupten. Nutzerbestätigung dokumentiert die Entscheidung, macht eine unbelegte Historie aber nicht nachträglich zur Quelltatsache. Replace und Add haben unterschiedliche Bestandswirkung; fehlende Zeilen in einem Teil-Add beweisen keine Löschung.

## 5. Zeitbasis

Originale Zeitangabe, Präzision, Herkunft und Interpretation bleiben unterscheidbar. Datums-/Formatmehrdeutigkeit wie `03/04` wird anhand bestätigter Quellkonvention geklärt, nicht anhand gewünschter Resultate. Unmögliche Daten sind ungültig; keine automatische Normalisierung auf einen anderen Tag.

| Zeitfall | Fachlicher Vertrag |
|---|---|
| Datum und Uhrzeit vorhanden | Nur tatsächlich vorhandene Präzision verwenden; Minutenangabe beweist keine sekundengenaue Reihenfolge. |
| Nur Datum / keine Uhrzeit | Für Kalenderaggregation geeignet; keine erfundene Mitternacht für Stunden-/Daueranalysen. |
| Kein Datum, Uhrzeit vorhanden | Uhrzeit allein ordnet keinen Kalendertag/Zeitraum zu; keine Streak-/Datumszuordnung. |
| Weder Datum noch Uhrzeit | Reader und zulässige Gesamt-Textanalyse möglich; zeitabhängige Auswertung begrenzt. |
| Zeitzone/Offset bekannt | Original und Zeitzoneninformation erhalten; reale Zeitabstände nur aus vergleichbaren eindeutigen Zeitpunkten. Offset allein beschreibt keine vollständigen historischen Sommerzeitregeln. |
| Zeitzone unbekannt | Lokale Quellzeit als solche behandeln, nicht still UTC oder Browserzone einsetzen. Vergleichbare Uhrzeiten erfordern bestätigte gemeinsame Quellzeitbasis. |
| Sommer-/Winterzeit | Doppelte lokale Stunde ist ohne Zusatzinformation mehrdeutig; übersprungene lokale Zeit nicht erfinden. Betroffene Dauern nicht als exakt ausgeben. |
| Nutzer ergänzt Datum/Zeitraum | Als Nutzerangabe mit Präzision und Herkunft erhalten. Ein Gesamtintervall verteilt keine Nachrichten künstlich auf einzelne Tage. |

**Empfehlung DC-05:** Pro Chat eine dokumentierte gemeinsame Kalenderbasis verwenden. Ohne sichere Zone gilt die bestätigte lokale Quellkalenderbasis; keine geräteabhängige Umrechnung. Bei widersprüchlichen Zeitzonen/Quellen erst Klärung, bevor übergreifende Tage/Stunden/Dauern behauptet werden. Alternativ ist eine ausdrücklich bestätigte Analysezeitzone möglich; diese Entscheidung muss vor Zeitfeatureverträgen geschlossen sein.

`chat_begin`/`chat_end` bezeichnen frühesten/spätesten gültigen Kalendertag des definierten analysierten Bestands, nicht Beziehungsbeginn/-ende oder Importzeit. Empfehlung DC-07: Grundlage ist der ganze aktuelle A/B-Bestand relevanter Nachrichten, vor globalem Zeitraumfilter und vor funktionsbezogenen Ausschlüssen. Damit verschiebt eine späte Systemmeldung oder Nachricht von C nicht das Dyadenfenster. Ein Datum-only-Beitrag kann die Grenze bestimmen. Keine gültigen Daten: Grenzen unbekannt, relative Presets nicht berechenbar.

**Verbindlich:** Relative Presets orientieren sich am letzten gültigen Datum des analysierten Bestands, nie am heutigen Systemdatum. Nach Add/Replace werden relative Grenzen aus dem neuen Bestand aufgelöst; Custom bleibt bei den gewählten Grenzen. Kein zirkulärer Anker aus bereits gefilterten Nachrichten.

Der vorhandene Kalendervertrag wird als Ausgangspunkt erhalten: 7/30 Tage einschließlich Endtag (Beginn sechs/29 Kalendertage vorher); 3/12 Monate kalenderweise zurück, fehlenden Tag am Zielmonat auf dessen letzten Tag begrenzen. Beispielsweise 31.05.2026 → 28.02.2026 bis 31.05.2026 für drei Monate. Kein Ersatz durch 90/365 Tage. Datumsgrenzen einschließlich beider Tage; Tagesende ist fachlich „vor Beginn des nächsten Tages“, kein erfundener letzter Millisekundenwert. Sonderfälle der gemeinsamen Zeitzone bleiben DC-05.

Importabdeckung und Kalendergrenzen sind verschieden: Zwei vorhandene Endpunkte beweisen keine lückenlose Quelle dazwischen. Vollständige Vergleichsperioden müssen ausreichend abgedeckt sein; bekannte Importlücken werden nicht als belegte Kommunikationsstille behandelt.

## 6. Kalendertag und aktiver Tag

`calendar_day` ist ein Datum in der freigegebenen gemeinsamen Kalenderbasis, begrenzt durch zwei aufeinanderfolgende lokale Tageswechsel. Es ist keine rollierende 24-Stunden-Dauer; Sommerzeit kann die reale Dauer verändern.

`active_day` ist ein Kalendertag mit mindestens einer `activity_message` der Dyade. Ein A/B-Tag wird einmal gezählt, auch bei vielen Nachrichten oder Aktivität beider Personen. Personenspezifische aktive Tage verwenden dieselbe Regel auf der jeweiligen Teilmenge.

Nach Empfehlung DC-01/02 zählen eindeutig datierte Medienbeiträge, Medienplatzhalter einzelner Beiträge und reine Emoji-Nachrichten. Systemmeldungen und Reactions nach DC-03 nicht. Datum ohne Uhrzeit genügt; fehlendes Datum nicht. Ein Datum enthaltender Satz ist kein Zeitstempel. Ein Zeitraum, der mehrere Tage umfasst, macht nicht alle diese Tage aktiv.

„Kein beobachteter Beitrag“ ist von „Quelle fehlt“ zu unterscheiden. Eine Streak darf bekannte Lücken nicht als sichere aktive oder sichere inaktive Tage ausgeben. Empfehlung DC-06: gesicherte beobachtete Serien benennen; keinen unbelegten Anschluss über Datenlücken. Persönliche Treffen und typische Schlafzeiten ändern den Kalendertag-/Streakvertrag nicht automatisch.

## 7. Nachrichtenblöcke

`message_block` ist eine explizit geordnete Folge identifizierter Nachrichten derselben Person, die nach einem noch festzulegenden Gesprächsvertrag einen Turn bildet. Block referenziert seine MessageIds; er ersetzt sie nicht. Blockanzahl, Nachrichtenanzahl und Antwortanzahl sind unterschiedliche Größen.

Mögliche Grenzen: Sprecherwechsel, hinreichend lange Unterbrechung, erkennbarer Gesprächsneustart, Reply auf eine andere Gesprächslinie, Reihenfolge-/Zeitunsicherheit, Importlücke oder nicht analysierter Kontext. **Keine endgültige Pausenschwelle wird hier festgelegt.**

Medien/kurze Folgemeldungen derselben Person können zu einem Turn gehören; weder ein Emoji noch ein Zeilenumbruch begründet allein einen neuen Block. Systemmeldungen sind keine menschlichen Turns, können aber auf Strukturunsicherheit hinweisen. In Gruppen dürfen durch Entfernen von C-Nachrichten nicht automatisch zwei A-Folgen zu einem ununterbrochenen A-Turn verschmelzen. Replies stellen eine Beziehung her, beweisen aber allein weder unmittelbare Antwort noch Gesprächsfortsetzung.

D-CONVERSATION muss Zeit-/Fortsetzungsschwellen, Drittpersonenunterbrechung, Medien-/Reactionwirkung, mehrdeutige Reihenfolge, blockübergreifende Replies und Randbehandlung entscheiden (DC-12). Grenzen des ausgewählten Analysezeitraums dürfen keine fiktiven Gesprächsstarts erzeugen. Fehlende Blockdefinition blockiert entsprechende Gesprächsmetriken, nicht die Nachrichtenzählung.

## 8. Textnormalisierung

Originaltext bleibt unverändert. Analyseformen sind getrennte, versionierte Ableitungen mit Rückbezug auf Originalsegmente. Quote, Forward, Caption, technische Metadaten und eigener Text bleiben unterscheidbar. Normalisierung darf Originalreferenzen nicht ersetzen und keine unbemerkte semantische Umformulierung erzeugen.

| Element | Gemeinsamer Vertrag / Empfehlung |
|---|---|
| Groß-/Kleinschreibung | Original erhalten. Empfehlung DC-08: für Häufigkeiten case-insensitive Vergleich; sichtbare Schreibformen bleiben zugänglich. |
| Satzzeichen | Keine eigenen Worttokens; Grenzen erhalten. Zeichen nicht so löschen, dass zwei Wörter zusammenkleben. |
| URLs | Separates Segment; Empfehlung DC-08: keine Wörter aus Protokoll/Domain/Pfad zählen. Begleittext bleibt. |
| E-Mail-Adressen | Separates Segment; Empfehlung DC-08: nicht in künstliche Wörter zerlegen, aus lexikalischer Wortmenge ausschließen. |
| Zahlen | Als Zahlen erkennbar erhalten; Empfehlung DC-08: reine Zahlen nicht als lexikalische Wörter zählen. Zahlenhaltige Wörter gesondert entscheiden. |
| Hashtags | Empfehlung DC-08: `#Urlaub` ein Wort `urlaub`, Herkunft als Hashtag erhalten; zusammengesetzte Hashtags nicht automatisch aufspalten. |
| @Mentions | Technische Teilnehmerreferenz von normalem Wort unterscheiden; Empfehlung DC-08: Plattformmention kein Wort. Nicht jede Zeichenfolge mit @ automatisch als Teilnehmer auflösen. |
| Apostrophe | Empfehlung DC-08: innere Apostrophe in `don't`, `geht's` erhalten, gerade/typografische Form für Vergleich vereinheitlichen. Äußere Anführungszeichen sind keine Wortbestandteile. |
| Bindestriche | Empfehlung DC-08: Buchstabenverbindung wie `E-Mail` ein Token, Gedankenstrich als Grenze; Varianten/Trennstriche klären. |
| Zeilenumbrüche | Trennung innerhalb derselben Nachricht, kein neues Sendeereignis; Wörter nicht über Zeilen verschmelzen. |
| Mehrfaches Leerzeichen | Für Segmentierung wie Wortabstand behandeln; Originalabstände erhalten. |
| Typografische Anführungszeichen | Als Begrenzung behandeln; nicht allein als Beweis einer formalen Reply-/Fremdzitatstruktur. |
| Umlaute / ß | Empfehlung DC-08: ä/ö/ü nicht zu a/o/u oder ae/oe/ue, ß nicht zu ss vereinheitlichen. Großes ẞ kann auf ß bezogen werden. |
| Unicode | Empfehlung DC-08: kanonisch äquivalente Schreibungen für Vergleich vereinheitlichen (NFC); keine pauschale Kompatibilitäts-/Transliterationsnormalisierung. Emoji-Sequenzen/Variationselektoren nicht versehentlich zerstören. |

Rechtschreibkorrektur, Übersetzung, Kürzelerweiterung, Stemming und Lemmatization sind keine stillen Normalisierungsschritte. Unbekannte Zeichen/Trennungen werden nicht entfernt, um bessere Ranglisten zu erzeugen. Die endgültige Tokengrenzenmatrix mit Beispielen wird vor Wortfeatureverträgen freigegeben.

## 9. Wortdefinition

`word_token` ist ein einzelnes Vorkommen einer nach dem freigegebenen DE-/EN-Textvertrag abgegrenzten lexikalischen Einheit im eigenen zulässigen Textsegment. Ein Token besitzt Originalbezug, sichtbare Form und gegebenenfalls normalisierte Vergleichsform. Wortanzahl zählt **Vorkommen**, Wortschatzgröße **verschiedene Formen**; beides nicht verwechseln.

- Sichtbares Wort: lesbares Originalsegment, beispielsweise `Hallo`.
- Normalisierte Wortform: Vergleichsform, beispielsweise `hallo`; keine neue Nachricht und kein zusätzlicher Token.
- Phrase/Mehrwortausdruck: zusammengehörige Folge mehrerer Tokens; `guten Morgen` sind zwei Worttokens und gegebenenfalls ein Phrasentreffer, niemals drei Gesamtwörter.
- Emoji, Systemmarker und formale Reply-Zitate sind keine eigenen Worttokens des Antwortenden.
- Empfehlung DC-08: `don't` und `geht's` jeweils ein Token; `E-Mail` ein Token; `Hallo\nWelt` zwei; ein reines `123` oder eine URL null lexikalische Tokens. Das sind **Freigabebeispiele**, keine bereits implementierten Erwartungen.

Lemma-/Stammgruppen können später zusätzliche Ansichten bilden. Sie dürfen weder Originalsprünge verlieren noch die Gesamtzahl der Wortvorkommen ändern. Sprachabhängige Grenzen bei Abkürzungen, alphanumerischen Formen und Mischsprache benötigen Beispiele; Technologieauswahl bleibt offen. „Durchschnittliche Wörter je Nachricht“ muss ausdrücklich `relevant_messages` oder `word_messages` als Nenner deklarieren (DC-11); der Unterschied ist produktrelevant.

## 10. Stopwords

Stopwords sind ein sprachabhängiger **Rankingfilter**, keine Löschung. Funktionswörter wie „und“, „der“, „ich“, „the“, „and“ sollen Greatest Hits nicht dominieren. Sie bleiben Originaltext, Worttokens und Teil der Gesamtwortzahl. Eine Rangliste nennt die Filterung verständlich, etwa „häufige Inhaltswörter“.

Die Listen benötigen Version, Sprache, nachvollziehbare Aufnahmekriterien und freigegebene positive/negative Prüffälle. Keine automatische globale Vereinigung der deutschen und englischen Listen: `die` hat je nach Sprache andere Bedeutung. Bei Mischsprache wird die verwendete Zuordnung sichtbar; unsichere Wörter nicht still aufgrund einer unpassenden Liste entfernen.

Offen DC-09: Umfang einschließlich Pronomen, Negation, Modalverben, Füllwörtern, Chatkürzeln, Anreden und Eigennamen. Empfehlung: konservative DE-/EN-Listen, Negation/semantisch tragende Modalität nicht pauschal für alle Zwecke entfernen; Stopwords nur auf die ausdrücklich dafür bestimmte Wortliste anwenden. Semantische Analyse erhält den Originalkontext einschließlich „nicht“. Persönliche Signature-Vergleiche brauchen dieselbe deklarierte Filterbasis pro Vergleich, nicht beliebige Listen je Person.

## 11. Emoji-Einheit

Empfohlener Vertrag DC-10: Eine gültige zusammengehörige Emoji-Sequenz ist **ein Vorkommen**, unabhängig von der Zahl ihrer Unicode-Codepoints. Anerkannter Emoji-Bestand und Segmentierungsregeln müssen versioniert sein; keine konkrete Bibliothek wird vorgegeben.

| Fall | Empfohlene Zähleinheit |
|---|---|
| Einzelnes Emoji | Ein Vorkommen, z. B. 😂. |
| Hautfarbvariante | 👍🏽 ein Vorkommen, nicht Basis plus Zusatz. |
| Gender-/ZWJ-Sequenz | 👩‍💻 ein Vorkommen; nicht Frau und Computer separat. |
| Flagge | 🇩🇪 eine vollständige Sequenz; nicht zwei Buchstaben-Emojis. |
| Keycap/Präsentationsvariante | 1️⃣ eine Sequenz; Varianten nach versioniertem Vertrag, keine Ziffer zusätzlich als Emoji. |
| Wiederholung | 😂😂😂 drei Vorkommen in einer Nachricht. |
| Text + Emoji | Wörter aus eigenem Text, Emoji-Vorkommen separat; Nachricht einmal. |
| Reaction | Separater Kanal, nach DC-03 keine Emoji-DNA-Vorkommen. |

Für Ranglisten sind **Vorkommenseinheit** und **Gruppierung** getrennt: Empfehlung DC-10, exakte Varianten erhalten und gegebenenfalls transparent zu Familien bündeln. Varianten dürfen beim Summieren nicht zusätzlich als neue Vorkommen zählen. Ob Hautfarbe/Gender in der Hauptliste gemeinsam erscheinen, bleibt freizugeben. ASCII-Emoticons wie `:)`, Stickerbilder und unvollständige Sequenzen sind nicht automatisch Unicode-Emojis; spätere eigene Markerklasse möglich. Fremde Zitate/Forwards zählen nicht erneut als eigene Emojis.

## 12. Gelöschte und bearbeitete Nachrichten

Löschplatzhalter beweist nur das, was die Quelle tatsächlich enthält. Kein rekonstruierter Text, keine geschätzte Wortzahl, keine verlorene Emotion. Empfehlung DC-02: als ein Sendeereignis zählen, wenn einzelner Beitrag und ursprünglicher Sender sicher sind; Aktivität zusätzlich nur bei sicherem ursprünglichem Sendedatum. Eine Systemmeldung „Nachricht gelöscht“ ohne diese Angaben zählt weder als Personennachricht noch als ursprüngliche Aktivität. Alternative: sämtliche Löschplatzhalter aus Nachrichten/Aktivität ausschließen; Entscheidung zentral, nicht je Feature.

Bearbeitungen ersetzen im aktuellen Analysebestand die auswertbare Fassung derselben sicher identifizierten Nachricht. Ursprüngliche Sendezeit bleibt Sendezeit; Bearbeitungszeit ist eigenes Metadatum. Nicht exportierte alte Fassungen werden nicht erfunden. Vorhandene alte Originalfassungen bleiben nur entsprechend dem freigegebenen Datenschutz-/Aufbewahrungsvertrag erhalten.

Evidence referenziert Identität **und die ausgewertete Inhaltsfassung**. Bei verändertem Inhalt ist eine alte Klassifikation nicht automatisch weiterhin gültig. Betroffene Text-/Emoji-/Semantikwerte werden neu bewertet; Nutzerkorrekturen bleiben im Journal, aber bei geänderter Grundlage prüfpflichtig statt blind angewandt (DC-13). Reiner erneuter Import unveränderter Inhalte setzt keine Entscheidung zurück. Ein verschwundener Inhalt in Replace und eine in der Quelle markierte Löschung sind verschiedene Tatsachen.

## 13. Medien

V1 analysiert Medieninhalt nicht semantisch. Eine separat vorhandene, eindeutig eigene Caption kann Text-/Wort-/Emoji-/Semantikbasis sein. Dateiname, MIME-Typ, Länge, Dateigröße, automatisch erzeugte Beschreibung und Kontaktkarteninhalt sind keine eigene Caption.

Empfehlung DC-01: bestätigte einzelne Medienbeiträge zählen als Nachrichten und mit gültigem Datum als Aktivität. Ein nicht vorhandenes Bild verhindert nicht die Feststellung „ein Bild wurde gesendet“, wohl aber Aussagen über dessen Inhalt. Mehrere Anhänge zählen nach belegten **Sendeereignissen**, nicht nach Dateianzahl; eine Sammelzeile ohne Einzelzuordnung rechtfertigt keine erfundene Anzahl.

Evidence kann den Sendebeitrag/Caption und dessen Quelle belegen. Sie darf nicht vorgeben, den nicht analysierten Bild-/Audioinhalt zu beweisen. Spätere Transkripte/OCR/Medienmodelle benötigen eigene Herkunfts-, Qualitäts- und Korrekturregeln; sie dürfen Rohzählungen oder historische Ergebnisversionen nicht still rückwirkend umdefinieren.

## 14. Replies und Zitate

Originalnachricht, referenzierter Ausschnitt und neu verfasster Antwortteil sind getrennt. **Zitierter Text zählt nicht erneut als eigener Text des Antwortenden.** Die Antwort ist ein eigener Sendebeitrag; der referenzierte Ursprung wird nicht erneut importiert, nur weil er zitiert wird.

Reply-Bezug verwendet eine stabile MessageId, wenn eindeutig auflösbar. Fehlt das Original, bleibt der Bezug unresolved; der tatsächlich exportierte Zitatausschnitt ist als Ausschnitt sichtbar, kein erfundenes vollständiges Original. Neu verfasster Text kann trotzdem verwendbar sein. Ein leerer Antworttext mit Medienanhang folgt der Medienregel.

Semantik darf Zitat/Original als gekennzeichneten Kontext verwenden und muss Urheberschaft trennen. Ein Zitat außerhalb des Zeitraums wird nicht als neue Nachricht innerhalb mitgezählt. Bei unklarer Abgrenzung von Antwort und Zitat ist die Textbasis prüfpflichtig, nicht pauschal vollständig eigenes Wortmaterial. Bloße Anführungszeichen oder eine wiederholte Formulierung beweisen keinen technischen Reply.

## 15. Weitergeleitete Inhalte

Eine Weiterleitung ist ein beobachtbarer Sendebeitrag, kein Beweis der Autorschaft, Zustimmung oder eigenen Themenpräferenz. Fremdtext fließt nicht automatisch in persönlichen Wortschatz, Emoji-Gebrauch, Themenanteile oder Social Signals des Weiterleitenden ein. Eigene klar abgrenzbare Kommentierung kann normal ausgewertet werden.

Fremdtext darf als bezeichnete Kontextquelle dienen; eine Aussage „A leitete diesen Text weiter“ ist etwas anderes als „A sagte/verfasste/glaubt diesen Text“. Unbekannter ursprünglicher Autor wird nicht geraten. Kopierter Text ohne Herkunftsmerkmal ist aus der Quelle nicht zuverlässig als fremd erkennbar; die Grenze wird dokumentiert und kann durch Nutzerkorrektur geklärt werden. Ob eine spätere Funktion Weiterleitungsinteresse eigenständig untersucht, ist ein neuer Featurevertrag, kein stiller Themenzuschlag.

## 16. Sprachen

V1-Zielsprachen sind Deutsch und Englisch. Automatische Erkennung ist eine Analysemetainformation mit Version und Unsicherheit, kein manuelles Chatkontextfeld. UI-Sprache und Chatsprache sind unabhängig.

Mischchats dürfen nicht zwangsläufig auf eine einzige Sprache reduziert werden. Empfehlung DC-14: Chatverteilung plus geeignete nachrichten-/segmentbezogene Zuordnung; kurze „ok“- oder Emoji-Beiträge können unbestimmt bleiben. Eine LLM-Vermutung mit geringer Sicherheit wird nicht zur gesicherten Sprache erklärt.

Sprachabhängige Token-/Stopwordregeln müssen denselben Stand verwenden. Für semantische DE-/EN- und gemischte Fälle sind eigene Qualitätsnachweise erforderlich. Nicht unterstützte Sprache blockiert die betroffene semantische Funktion als `unsupported`, nicht pauschal Nachrichtenzählung oder Kalenderaktivität. Begrenzte Teilanalyse nur mit sichtbarer Sprachabdeckung und freigegebenem Nenner; keine Gesamtbehauptung aus still ignorierten Beiträgen. Erkennungsschwellen und Umgang mit unklaren Mischsegmenten bleiben DC-14/D-QUALITY.

## 17. Mindestdaten und Zustände

Die Zustände beziehen sich auf ein Ergebnis oder einen klar bezeichneten Teilbereich, nicht zwangsläufig den ganzen Chat.

| Zustand | Bedeutung / Beispiel |
|---|---|
| `available` | Alle erforderlichen Eingaben, Regeln und Mindestdaten vorhanden; gültiges Ergebnis, auch ein belegtes 0. |
| `insufficient-data` | Funktion grundsätzlich anwendbar, aber erforderliche Menge/Präzision/Abdeckung fehlt; z. B. Antwortdauer ohne Uhrzeiten. |
| `not-applicable` | Fragestellung hat in dieser gültigen Situation keinen definierten Wert; z. B. Anteil bei leerem Nenner. Kein Ersatzwert 0 %. |
| `unsupported` | Vorhandener Inhalt/Quellfall wird nicht unterstützt; z. B. semantische Analyse einer nicht freigegebenen Sprache. |
| `error` | Verarbeitung/Lesen/Speichern fehlgeschlagen; sagt nichts über tatsächliche Nullmengen aus. |

`unavailable` bezeichnet weiterhin eine nicht implementierte/nicht veröffentlichte Funktion; Tarif-Sperre ist nochmals etwas anderes. Loading und veraltet sind Verarbeitungs-/Aktualitätszustände, keine neue fachliche Kennzahl.

Bei mehreren Gründen alle wesentlichen Ursachen benennen, keinen technischen Fehler als Datenmangel kaschieren. Jedes Feature muss vor Umsetzung Mindestmenge, benötigte Zeitpräzision/Sprachabdeckung, Nenner-Nullfall und Umgang mit Teilbeständen festlegen. Keine erfundenen globalen Mindestzahlen. „0 Emojis“ ist nur bei vollständig gültiger Prüfung der deklarierten Textmenge ein Ergebnis; eine gescheiterte Emoji-Erkennung ist kein Nullnachweis.

## 18. Einheiten und Rundung

Nachrichten, Wortvorkommen, Emoji-Vorkommen und echte Kalendertage sind ganze Zahlen. Durchschnittswerte sind keine Stückzahlen und dürfen Dezimalstellen besitzen. Prozente tragen `%` und einen nachvollziehbaren Nenner. Zeitdauern tragen passende Einheiten; Kalenderdauer und tatsächlich verstrichene Zeit nicht vermischen.

Berechnet, verglichen, gerankt und auf Gleichheit geprüft wird vor UI-Rundung. Wiederverwendete gerundete Balkenwerte dürfen keine neue Summe/Kennzahl erzeugen. Prozentwerte können durch Darstellung geringfügig von 100 % abweichen; keine heimliche Änderung der Zähler, um die Darstellung passend zu machen.

Empfehlung DC-15: ganze Zählwerte ohne Nachkommastellen, Prozentwerte bis eine Nachkommastelle ohne unnötige Endnull, Dauern größenabhängig ohne vorgetäuschte Präzision. Einheit/Genauigkeit bleiben zwischen Übersicht und Detail konsistent; Tooltip darf mehr Präzision erklären. Ein positiver Wert, der auf 0 runden würde, wird als kleiner als die Darstellungsgrenze gekennzeichnet. Dezimal-/Tausenderzeichen folgen UI-Sprache, nicht Chatsprache. Endgültige Rundungs-/Dauerstaffel und Behandlung angezeigter Gleichstände vor Featureabnahme freigeben.

## 19. Datenherkunft jedes Ergebnisses

Ein Ergebnis muss fachlich nachvollziehbar kennen:

- Chatidentität und kanonischen Daten-/Importstand einschließlich Quellenabdeckung und offenen Konflikten;
- bestätigte Personenidentitäten/Dyade und deren Zuordnungsstand;
- gewählten Zeitraum, tatsächlich aufgelöste Grenzen, relativen Anker und Kalender-/Zeitpräzisionsbasis;
- verwendete zentrale Mengen, Ausschlüsse, tatsächliche Mengen-/Nennergrößen und Datenlücken;
- Algorithmus-/Zähl-/Normalisierungs-/Stopword-/Emoji-Regelversion, soweit verwendet;
- gegebenenfalls Sprach-, Modell- und Klassifikationsversion sowie Qualitäts-/Reviewstatus;
- Nutzerkorrekturstand und wirksamen Kontext-/Schlaf-/Eventstand;
- Original-/Evidencebezüge samt ausgewerteter Inhaltsfassung, Ergebnisstand und Aktualität.

Dies ist kein Datenbankschema. Zwei Ergebnisse mit verschiedenen Mengen-/Regelständen dürfen nicht als unmittelbar gleichartige Vergleichswerte ausgegeben werden. Änderungen einer zentralen Regel invalidieren betroffene Ergebnisse und müssen nachvollziehbar neu bewertet werden. Ein semantischer Ausschluss verändert ohne freigegebene Abhängigkeit nicht die Rohmenge. Eine korrigierte Sprecher-/Typ-/Zeitzuordnung kann dagegen mehrere Grundmengen ändern.

## 20. Entscheidungsregister des Entwurfs und aktueller Freigabestand

**Aktuell:** Alle folgenden DC-IDs außer DC-12 sind in dem im Decision Log festgehaltenen Umfang `approved`. Die Tabelle bewahrt Fragen, Empfehlung und Alternativen als Entscheidungsherkunft; ihre damaligen Freigabebedingungen sind für die genehmigten Regeln erfüllt. Nur DC-12 bleibt als gemeinsame Gesprächsentscheidung offen. Neue Gesprächsvorschläge CR-01 bis CR-10 stehen in `CONVERSATION_AND_RESPONSE_RULES.md` und sind nicht durch diese Freigabe genehmigt.

Die IDs konkretisieren D-DATA, D-TIME und gemeinsame D-TEXT-Fragen aus dem MVP-Dokument; D-CONVERSATION/QUALITY/CORRECTION bleiben eigene Verträge. „Ja“ bedeutet: vor dem **betroffenen** nächsten Feature-/Importvertrag schließen; unabhängige Spezifikation ist möglich. Empfehlungen in dieser Tabelle sind keine bereits bestätigten Produktentscheidungen.

| Decision ID | Offene Frage | Empfehlung | Alternativen | Betroffene V1-Funktionen | Vor nächstem betroffenen Spezifikationsschritt zwingend? |
|---|---|---|---|---|---|
| DC-01 · D-DATA | Zählen Medien, leere/strukturierte Sendebeiträge und Sammelplatzhalter? | Einzelne belegte menschliche Sendebeiträge einschließlich Medien zählen; Sammelhinweise nicht in erfundene Beiträge zerlegen. | Nur Text zählen, dann ausdrücklich andere Produktbedeutung. | Alle Nachrichten-/Aktivitätswerte, acht Funktionen in Abschnitt 21 | Ja, zentrale Grundmenge. |
| DC-02 · D-DATA | Löschplatzhalter als Nachricht/Aktivität? | Nur bei nachgewiesenem einzelnen Beitrag/Sender, Aktivität nur ursprüngliches Datum. | Alle Löschplatzhalter ausschließen. | Streak, Peak, Prime, Weekday, Texting, Pulse/Pausen | Ja. |
| DC-03 · D-DATA | Reactionwirkung? | Separater Kanal; weder Nachricht/Streak noch Emoji DNA. | Eigene ausdrücklich benannte Reaktionsmetrik; Einbezug würde globale Semantik ändern. | Aktivität, Emoji, Gesprächsmetriken | Ja für Grundmengen. |
| DC-04 · D-DATA/CORRECTION | Dyadenwechsel und Aliase/Korrekturen? | Identitätsbezogen erhalten, dyadenbezogene Entscheidungen erneut prüfen; Aliasmehrdeutigkeit bestätigen. | Getrennte dauerhafte Analysebereiche pro Dyade. | Alle Personenvergleiche und Evidence | Ja für Personen-/Updatevertrag. |
| DC-05 · D-TIME | Gemeinsame Kalenderbasis bei Zonenwechsel/unbekannter Zone? | Bestätigte Quellkalenderbasis; keine implizite Browserzone, Konflikte klären. | Einheitliche explizite Analysezeitzone mit transparenten Umrechnungen. | Alle zeitbezogenen Funktionen | Ja. |
| DC-06 · D-TIME | Undatierte Beiträge, Zeitintervalle und bekannte Importlücken? | Gesamt-Textmengen erlauben; begrenzte Zeitmengen nur eindeutig zuordenbar, Abdeckung anzeigen; Lücken nicht als Stille. | Streng vollständige Daten vor Veröffentlichung zeitlicher Kennzahlen verlangen. | Zeitraum, Streak, Weekday/Trends, Wort-/Themenfilter | Ja. |
| DC-07 · D-DATA/TIME | Welcher Bestand bestimmt relative Chatgrenzen? | Ganzer relevanter A/B-Bestand vor Filter und Featureausschluss. | Gesamte Gruppe bzw. alle Quellereignisse; verschiebt Dyadenfenster auch durch C/System. | Alle relativen Presets | Ja. |
| DC-08 · D-TEXT | Tokenmatrix, URLs/Zahlen/Hashtags/Mentions/Apostrophe/Bindestriche/Unicode? | Konservative lexikalische Definition aus Abschnitten 8/9, NFC, keine aggressive Umformung. | Whitespace-Zählung oder getrennte zusätzliche „Texteinheiten“, klar anders benannt. | Texting, Long Story, Greatest Hits, Pulse | Ja für Wortverträge. |
| DC-09 · D-TEXT | Konkrete Stopwordlisten und Mischsprachenfilter? | Versionierte konservative DE-/EN-Listen nur fürs Ranking. | Erweiterte Listen, optional verschiedene transparent benannte Ansichten. | Greatest Hits/Signature | Ja vor Rankingvertrag; nicht vor Nachrichtenvertrag. |
| DC-10 · D-TEXT | Emoji-Bestand, Variantenfamilien und Präsentationsformen? | Sequenz als Vorkommen, Originalvarianten erhalten, Bündelung explizit. | Hauptliste exakt je Variante statt Familien. | Emoji DNA, Humor-Marker | Ja vor Emojivertrag. |
| DC-11 · D-DATA/TEXT | Nenner für Textlängen-/Emoji-Anteile? | Pro Kennzahl benennen; Gesamtwortmengen ohne Stopwordabzug. Kein gemeinsamer unbenannter Universalnenner. | Texttragende statt aller relevanten Nachrichten je klar anders benanntem Anteil. | Texting, Long Story, Emoji, Greatest Hits | Ja je Featurevertrag. |
| DC-12 · D-CONVERSATION | Blockgrenzen, Replies, Dritte, Medien und Pausenschwellen? | Mit positiven/negativen Grenzfällen separat definieren; keine Schwelle hier. | Unterschiedliche ausdrücklich benannte Turn-/Gesprächsebenen. | Move, Response, First/Last, Silence, kurze Antworten | Ja vor Gesprächsverträgen; nein vor reiner Mengenstatistik. |
| DC-13 · D-CORRECTION | Welche Inhaltsänderung macht Korrektur prüfpflichtig? | Inhaltlich betroffene Zuordnung invalidieren; Entscheidung erhalten, nicht ungeprüft anwenden. | Streng jede Bearbeitung reviewen oder fachlich freigegebene unkritische Änderungen ausnehmen. | Evidence und alle korrigierbaren Analysen | Ja vor Update-/Reanalysevertrag. |
| DC-14 · D-TEXT/QUALITY | Mischsprache, Zuordnungsgranularität/Unsicherheit und Abdeckung? | DE/EN plus unbestimmt; segmentgerecht, keine stille Sprachfilterung. | Strenger nur eindeutig einsprachige semantische Verarbeitung mit sichtbarer Grenze. | Wörter, Stopwords, alle semantischen Funktionen | Ja vor sprachabhängigen Verträgen. |
| DC-15 · D-TEXT/TIME | Darstellung von Rundung, Dauerstaffeln und gerundeten Gleichständen? | Abschnitt 18 als gemeinsame Darstellungsbasis freigeben. | Andere zentrale Präzisionsstaffel, gleiche Rohpräzision. | Alle sichtbaren Kennzahlen | Nein für Grundmengen; ja vor Darstellung/Abnahme. |

Nicht als Produktentscheidung hier vorziehen: Hashverfahren, Tabellenstruktur, Tokenizer-/Unicode-Bibliothek, Modellanbieter, Worker-/Queue-Architektur. Qualitäts-, Gesprächs- und Trendschwellen bleiben in ihren Featureverträgen; weder Referenzzahlen noch UI-Beispiele schließen sie.

## 21. Konsistenzprüfung gegen Kernfunktionen

| Funktion | Zentral wiederverwendete Grundlage | Widerspruch/Risiko bzw. noch zu schließender Punkt |
|---|---|---|
| Prime Time (`prime`) | Relevante Nachrichten mit auswertbarer Uhrzeit; gemeinsame Kalenderbasis | Datum-only darf keinen 00-Uhr-Balken erzeugen. Stundenmenge kann kleiner sein als Texting-Gesamtmenge; Abdeckung ausweisen. DC-01/02/05/06; Prime-Fenster/Gleichstände separat. |
| Lieblingstag (`weekday`) | Datierte Aktivitätsnachrichten je Kalendertag | Uhrzeit nicht notwendig. Durchschnitt darf ungleich viele Wochentage nicht mit bloßen Summen verwechseln. Nenner/Abdeckung/Randtage vor Featurevertrag; DC-05/06. |
| Chat Streak (`streak`) | `active_day` aus zentraler relevanter Menge | Keine Schlaf-/Treffenverlängerung, kein Ersatz undatierter Beiträge. Medien-/Löschentscheidung beeinflusst Serie; bekannte Importlücke ist kein bewiesener Leertag. DC-01/02/03/06. |
| Peak Day (`peak`) | Datierte Nachrichten je Kalendertag | Tagespeak braucht keine Uhrzeit, rollierender 24h-Peak schon und eine vergleichbare Zeitbasis. 652/653 aus Legacy löst keine Regel. DC-01/02/05/06; Fenster/Gleichstand separat. |
| Texting Champion (`texting`) | `relevant_messages`, eigene Worttoken-Vorkommen | Nachrichtenbasis kann Medien enthalten, Wortbasis nur Caption. Wortmenge nie aus Platzhaltertext; Stops nicht abziehen. DC-01/02/08/11. |
| Emoji DNA (`emoji`) | Emoji-Vorkommen und `emoji_messages` getrennt | ZWJ nicht mehrfach zählen, Reactions/Sticker nicht unter Textemojis mischen. Variantenfamilie und Nenner noch offen DC-03/10/11. |
| Greatest Hits (`words`) | Eigene Tokens, Sprachbasis, versionierter Stopwordfilter | Substring-Suche ist keine Tokenzählung; persönliche Treffer müssen richtige Person referenzieren. DC-08/09/14; Signature-Formel/Minimalmengen nicht hier festgelegt. |
| Long Story Short (`longstory`) | Eigene Textsegmente, Worttokens, deklarierte Längeneinheit/Nenner | Zitat/Forward nicht als eigene lange Nachricht werten. Wörter vs. Zeichen/Grapheme, Medianbasis, kurze Antwort und Gleichstand separat definieren; DC-08/11/12. |

**Gemeinsame Konsistenzfälle für die spätere fachliche Abnahme (keine neuen Tests/Baselines):**

1. Nach Freigabe der Medienempfehlung: A sendet an einem bekannten Tag genau ein Bild ohne Caption → eine Nachricht, ein aktiver Tag, null eigene Wörter/Emojis; keine Inhaltsbehauptung zum Bild.
2. A sendet `Hallo 👩‍💻👩‍💻` → nach Freigabe der Token-/Emoji-Regel eine Nachricht, ein Worttoken, zwei Emoji-Vorkommen, eine emoji-haltige Nachricht. Datum fehlt → kein zugewiesener aktiver Tag.
3. B antwortet auf A-Zitat mit `Ja` → neues Wortmaterial nur `Ja`; zitiertes A-Material bleibt bei seinem ursprünglichen Beitrag. Identisches `Ja` an anderer Stelle besitzt eigene Identität.
4. Ein Tag nur mit Systemmeldung ist kein aktiver A/B-Tag. Ein später Beitrag von C verschiebt nach Empfehlung DC-07 nicht das A/B-Enddatum.
5. Erneuter Export ändert weder Nachrichtenanzahl noch IDs bestätigter identischer Beiträge. Eine sicher identifizierte Bearbeitung kann Wort-/Emojimengen ändern, aber erzeugt keine zweite Nachricht und keine neue Sendeaktivität.
6. Stopwordfilter aus/an verändert die Greatest-Hits-Rangliste, nicht die Gesamtwortzahl von Texting Champion. Personen-/Zeitraumfilter ändern die deklarierte Menge, niemals die Originaltexte.
7. Sommerzeit-/Datum-only-Fälle können Tageswerte erlauben, während genaue Pausendauer/rollierender Peak noch nicht berechenbar sind. Das ist ein Unterschied der erforderlichen Präzision, kein Anlass für erfundene Zeitstempel.

Die zentralen Mengen sind benannt und gegenseitig abgegrenzt; ihr aktueller Freigabestatus steht im Decision Log. Offene featurebezogene Formeln für Stundenfenster, Wochentagsnenner, Signature, Gesprächsblöcke und Trends bleiben ausdrücklich außerhalb der Freigabe gemeinsamer Datenregeln.

## 22. Abschluss und Umfang

Erstellt wurde ausschließlich `DATA_AND_COUNTING_RULES.md`. Keine Analysefunktion, kein Import und keine Reanalyse wurde implementiert. Anwendungscode, bestehende Spezifikationen, Tests und Baselines bleiben unverändert. Die Konsistenzprüfung ist eine fachliche Dokumentprüfung, keine Behauptung neu ausgeführter Anwendungstests.

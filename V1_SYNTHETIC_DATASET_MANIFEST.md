# V1 synthetisches Datensatzmanifest

Stand: 04.11.2026. Vollständig erfundene Personen, Orte und Nachrichten. Keine privaten Legacydaten, realen Telefonnummern, Adressen oder vertraulichen Inhalte. URLs ausschließlich example.invalid. Seed 17491; reproduzierbare Erzeugung durch `node tests/v1/generate.mjs`.

## Inventar

4451 Beiträge in drei Hauptchats, 23 Import-/Updatefälle, 24 Mini-Fixtures, vier Personen in separater Gruppe, acht inerte Angriffsquellen, 441 semantische Challengefälle für 63 Katalogeinträge, 63 ergänzende Negativ-/Kontrollfälle im final-synthetic-Split, fünf Hybridkarten und 50 Begleiterfragen. 441 deklarative Original-Vertragsfälle, 2892 erhaltene Quellenabsätze/-zeilen. Dateigrößen und SHA256 für 79 Artefakte: [manifest.json](tests/v1/data/manifest.json). Das Inventar enthält keine Performance-Messoutputs; diese sind nichtdeterministische Laufnachweise unter measurements/.

## Quellprofile und Grenzen

**Standard:** synthetisch simuliertes Profil `synthetic-wa-dmy-minute-v1`: UTF-8 ohne BOM, LF, `DD.MM.YYYY, HH:mm - Anzeigename: Text`, fester ausdrücklich deklarierter Zeitbezug +01:00. Medien-/Gelöscht-Platzhalter sind Beiträge, kein tatsächlicher Medieninhalt. Hauptdateien einzeilige Beiträge; mehrzeilige/uneindeutige Header bleiben eigene Vertrags-Testfälle. Kein Anspruch auf alle realen WhatsApp-Plattform-/Sprach-/Versionsformate. Standard enthält keine stabilen nativen IDs, strukturierten Replies, Reaction-/Revisionsmetadaten; der spätere Import muss eigene stabile App-Identitäten bilden. Referenzen dürfen nicht aus ähnlichem Text geraten werden.

**Enhanced:** JSON-Testprofil `format_version=synthetic-test-1`, `production_format=false`. Deckt die fachlichen Metadaten des Importvertrags ab: Teilnehmer/Source-/Message-IDs, Zeitpräzision, Replyrelationen, Quotes, Reactions, Edit-/Deletedstatus, Medientyp/Captionstatus und Coverage. Es legt ausdrücklich **kein produktives serialisiertes Enhanced-Schema** fest. Der spätere technische Entwickler muss das echte Schema versionieren und die Testprofile über deklarierte Testadapter binden; eine aktuell unbekannte Version muss ehrlich blockiert werden. Optionales Feld null bedeutet unbekannt/nicht vorhanden, kein erfundener Inhalt.

ZIPs verwenden reproduzierbare Stored-Einträge ohne externe Bibliothek. Kaputtes ZIP und zwei TXT-Dateien sind bewusst getrennte Negativfälle. Keine Provider- oder Produktparseraufrufe beim Erzeugen.

## Bewusst gestaltete Verläufe

A: mehrjährige Beziehung als deklarierter Kontext, Morgen-/Abendroutinen, Organisation/Arbeit/Freizeit, zwei gemeinsame Insiderkandidaten, Kosenamen, ruhige Märzwoche mit Normalisierung und aktiver Maiabschnitt.

B: Kennenlernen; steigende Tagesmengen, intensiver Abschnitt, anschließender Cold-Abschnitt und gegenüber dem Tief wieder mehr Kontakt. Spätere Kosenamen, regelmäßiges Englisch/Code Switching, wechselnde Initiative und spätere langsamere Antworten. „Teilweise Erholung“ beschreibt hier die erzeugte Nachrichtenmenge gegenüber dem Tief, nicht automatisch die spezielle Deepdive-Klasse partial; für diese zählt ausschließlich deren Formel.

C: stark asymmetrische Beiträge, mehrere eigene aufeinanderfolgende Nachträge, kurze/längere Antworten der zweiten Person, Reisen/Arbeit und verschobene Treffen, längere vollständige Nullphasen, aktive Cluster und Drittpersonen. Aus Asymmetrie wird keine Aussage über Gefühle/Absichten abgeleitet. Nicht jeder wiederholte Begriff erfüllt die Insiderstruktur beider Personen; ein fehlgeschlagener Kandidat bleibt entsprechend unbestätigt.

Die Texte verwenden konstruierte Gesprächsmotive und Wiederholungen; sie sind keine repräsentative Realsprach-Stichprobe. Langzeitdaten dienen Mengen-/Verlaufs-/Integrationsprüfung, nicht dem Nachweis allgemeiner Sprachqualität. Kein vierter Hauptchat erzeugt; nichtromantische Kontexte erscheinen in separaten Goldbeispielen, nicht als behaupteter Freundschafts-Langchat.

### Chat A — long_term_relationship

Fiktive Beteiligte: Fennilo / Velumi. **1418 Beiträge**, 2026-01-01 bis 2026-06-30, 181 vollständig deklarierte Kalendertage. Nachrichtenmengen variieren, Nulltage sind enthalten.

- Standard: [TXT](tests/v1/data/main/chat_a_standard.txt), [ZIP](tests/v1/data/main/chat_a_standard.zip).
- [Enhanced](tests/v1/data/main/chat_a_enhanced.json), [Ground Truth](tests/v1/data/main/chat_a_ground_truth.json), [berechnete Sollwerte](tests/v1/data/main/chat_a_expected.json).
- Personenmengen: synthetic_a_p0 710; synthetic_a_p1 708. Eigene Worttokens gesamt: 10013.
- Prime-Fenster (lokale Stunden): 19; Peak 26 am 2026-05-31; längster belegter Streak 98 Tage.
- Hotcold-Baseline 7.834254 Beiträge/Tag; Hot: 2026-05-11–2026-05-16 (6 Tage). Cold: 2026-03-10–2026-03-16 (7 Tage).
- Längste messbare Pause: 2157 Minuten. Alle Intervallgrenzen referenzieren konkrete IDs. Bestätigte synthetische Ruhezyklen: 151.
- Autorenseitig gültige Moves: {"synthetic_a_p1":162,"synthetic_a_p0":169}. Response-Mediane in Minuten: synthetic_a_p0=2 (n=509); synthetic_a_p1=4 (n=514).
- Geplante persönliche Wörter: krümelkompass/funkelfahrplan. Tatsächlich qualifiziert: synthetic_a_p0: krümelkompass c=30 Score=8.4199; synthetic_a_p1: funkelfahrplan c=29 Score=8.3985. Kein erzwungener Signature-Treffer ohne Formelbasis.
- Themen nach Autorengold: everyday 555 Einheiten; work 209 Einheiten; meetings 191 Einheiten; travel 143 Einheiten; media 118 Einheiten. Das sind Goldlabel-Häufigkeiten, keine gemessene KI-Qualität.
- Insiderkandidaten: Wolkenknödel (116 Nutzungsakte, Mindeststruktur true); Knusperlaterne (58 Nutzungsakte, Mindeststruktur true). Immer Review, kein automatisches gemeinsames-Insider-Ergebnis.
- Pulse: 25 vollständige Wochen; Wochenbasis N/Tag 7.571429. Zeitreihe für N/W/aktive Tage, Randperioden und Indizes vollständig im Expected-JSON; nicht als psychologischer Trend interpretieren.

### Chat B — getting_to_know

Fiktive Beteiligte: Orvani / Talumi. **1236 Beiträge**, 2026-01-01 bis 2026-06-30, 181 vollständig deklarierte Kalendertage. Nachrichtenmengen variieren, Nulltage sind enthalten.

- Standard: [TXT](tests/v1/data/main/chat_b_standard.txt), [ZIP](tests/v1/data/main/chat_b_standard.zip).
- [Enhanced](tests/v1/data/main/chat_b_enhanced.json), [Ground Truth](tests/v1/data/main/chat_b_ground_truth.json), [berechnete Sollwerte](tests/v1/data/main/chat_b_expected.json).
- Personenmengen: synthetic_b_p0 625; synthetic_b_p1 611. Eigene Worttokens gesamt: 8250.
- Prime-Fenster (lokale Stunden): 19/20/21; Peak 26 am 2026-05-31; längster belegter Streak 98 Tage.
- Hotcold-Baseline 6.828729 Beiträge/Tag; Hot: 2026-03-22–2026-04-20 (30 Tage). Cold: 2026-01-21–2026-01-23 (3 Tage); 2026-04-21–2026-05-07 (17 Tage).
- Längste messbare Pause: 2873 Minuten. Alle Intervallgrenzen referenzieren konkrete IDs. Bestätigte synthetische Ruhezyklen: 150.
- Autorenseitig gültige Moves: {"synthetic_b_p0":104,"synthetic_b_p1":90}. Response-Mediane in Minuten: synthetic_b_p0=4 (n=487); synthetic_b_p1=4 (n=487).
- Geplante persönliche Wörter: krümelkompass/funkelfahrplan. Tatsächlich qualifiziert: synthetic_b_p0: krümelkompass c=47 Score=15.0641; synthetic_b_p1: funkelfahrplan c=7 Score=2.6051. Kein erzwungener Signature-Treffer ohne Formelbasis.
- Themen nach Autorengold: everyday 435 Einheiten; work 189 Einheiten; meetings 178 Einheiten; travel 127 Einheiten; media 115 Einheiten. Das sind Goldlabel-Häufigkeiten, keine gemessene KI-Qualität.
- Insiderkandidaten: Mondgurke (77 Nutzungsakte, Mindeststruktur true). Immer Review, kein automatisches gemeinsames-Insider-Ergebnis.
- Pulse: 25 vollständige Wochen; Wochenbasis N/Tag 5.714286. Zeitreihe für N/W/aktive Tage, Randperioden und Indizes vollständig im Expected-JSON; nicht als psychologischer Trend interpretieren.

### Chat C — longstanding_contact

Fiktive Beteiligte: Zevilo / Miruvi. **1797 Beiträge**, 2026-01-01 bis 2026-06-30, 181 vollständig deklarierte Kalendertage. Nachrichtenmengen variieren, Nulltage sind enthalten.

- Standard: [TXT](tests/v1/data/main/chat_c_standard.txt), [ZIP](tests/v1/data/main/chat_c_standard.zip).
- [Enhanced](tests/v1/data/main/chat_c_enhanced.json), [Ground Truth](tests/v1/data/main/chat_c_ground_truth.json), [berechnete Sollwerte](tests/v1/data/main/chat_c_expected.json).
- Personenmengen: synthetic_c_p0 1503; synthetic_c_p1 294. Eigene Worttokens gesamt: 24264.
- Prime-Fenster (lokale Stunden): 16/17/18; Peak 35 am 2026-05-31; längster belegter Streak 56 Tage.
- Hotcold-Baseline 9.928177 Beiträge/Tag; Hot: 2026-01-01–2026-01-03 (3 Tage); 2026-01-12–2026-01-14 (3 Tage); 2026-01-23–2026-01-25 (3 Tage); 2026-02-03–2026-02-05 (3 Tage); 2026-02-25–2026-02-27 (3 Tage); 2026-03-08–2026-03-10 (3 Tage); 2026-03-19–2026-03-21 (3 Tage); 2026-03-30–2026-04-01 (3 Tage); 2026-04-10–2026-04-12 (3 Tage); 2026-04-21–2026-04-23 (3 Tage); 2026-05-13–2026-05-15 (3 Tage); 2026-05-24–2026-05-26 (3 Tage); 2026-06-04–2026-06-06 (3 Tage); 2026-06-15–2026-06-17 (3 Tage); 2026-06-26–2026-06-28 (3 Tage). Cold: 2026-02-12–2026-02-19 (8 Tage); 2026-04-26–2026-05-02 (7 Tage).
- Längste messbare Pause: 12894 Minuten. Alle Intervallgrenzen referenzieren konkrete IDs. Bestätigte synthetische Ruhezyklen: 50.
- Autorenseitig gültige Moves: {"synthetic_c_p0":180}. Response-Mediane in Minuten: synthetic_c_p0=12 (n=274); synthetic_c_p1=10 (n=293).
- Geplante persönliche Wörter: krümelkompass/funkelfahrplan. Tatsächlich qualifiziert: synthetic_c_p0: krümelkompass c=56 Score=3.7162; synthetic_c_p1: funkelfahrplan c=56 Score=39.9429. Kein erzwungener Signature-Treffer ohne Formelbasis.
- Themen nach Autorengold: meetings 932 Einheiten; work 762 Einheiten; travel 424 Einheiten; third_people 424 Einheiten; everyday 112 Einheiten. Das sind Goldlabel-Häufigkeiten, keine gemessene KI-Qualität.
- Insiderkandidaten: Kofferkeks (206 Nutzungsakte, Mindeststruktur false). Immer Review, kein automatisches gemeinsames-Insider-Ergebnis.
- Pulse: 25 vollständige Wochen; Wochenbasis N/Tag 11.571429. Zeitreihe für N/W/aktive Tage, Randperioden und Indizes vollständig im Expected-JSON; nicht als psychologischer Trend interpretieren.

## Ground-Truth-Struktur

Jeder Hauptchat hat chat_id, participants/IDs und dyad, Coverage, explizite synthetische Ruheprofile, vollständige Nachrichten mit ID/Sender/Quellreferenz/Zeit/Präzision/Typ/Text/eigenen Sprachsegmenten, Medienstatus, Reply/Quote/Reaction, Edit/Deleted und Entwicklungsszenariofamilie. Unter truth: einzelne semantische Einheiten mit Feature/Label/Autor/Zielrolle/Message-/Context-IDs, Move-/Response-Relationen, bewusst deklarierte Ruhezyklen, Eventkandidaten, Insiderakte und Humor-Marker.

Positive/negative/offene/ungeeignete Einheiten nicht zusammenwerfen. Labelhäufigkeiten im Expected sind Einheiten pro Label, nicht automatisch eine fachliche Gesamtquote. Eventkandidaten enthalten drei deklarierte Meilensteine; Plan/Erwähnung ist kein Nachweis realer Durchführung. Widersprüchliche Datums-/Editfälle werden über Import-/Edge-Szenarien behandelt. Hauptchat-Annotation ist Autorenvorgabe, nicht unabhängige Adjudikation.

Reactionfälle umfassen beide Richtungen, verschiedene Emojis, wiederholtes Emoji auf verschiedenen Nachrichten, Emoji- und Medienziel. Explizite alte Replyrelation hat konkrete Quell-ID; sie erzeugt nicht automatisch einen neuen Response-Event. Nicht auflösbare sichtbare OK-Zitate liegen im Mini-Fixture quotes_ok; erwarteter Status unresolved, niemals geratenes Ziel.

## Deterministische Sollwerte und begrenzter Oracle-Umfang

reference.mjs verarbeitet ausschließlich deklarierte synthetische volle Zeit-/Coveragebasis und gültige Autorengoldrelationen. Keine neue Analyseformel im Produkt. Pro Hauptchat maschinenlesbar: Prime-Stunden/Fenster, Wochentage, Streakläufe, Peak-Tage, Personen-Nachrichten/Wörter, Emoji-Originale/Familien, Hotcold-Baseline/Phasen, vollständige Pausen, eigene Wortlängen und kurze gültige Antwortblöcke, Worthäufigkeiten/Signature-Scores, Pulse-Raten/Indizes und Deepdive-Vorher/Phase/Nachher. Hybride Aggregation basiert ausdrücklich auf deklarierten gültigen Beziehungen, nicht KI. Semantische Einheiten/Labels sind unabhängig vom aggregierenden Rechner autoriert.

Referenzrechner ist **keine vollständige alternative Produktengine**: allgemeine Parser, fehlende/mehrdeutige Zeiten, echte automatische Relationserkennung, produktive Zustandspolitik, Quellenadapter, Detail-UI-Kennzeichnungen und sämtliche Persistenz-/Racefälle bleiben als deklarative Vertragsfälle. Nicht unterstützte Mini-Fixtures werden nicht blind in den auf vollständige Hauptdaten begrenzten Rechner eingespeist. Numerische Invarianten und unabhängig bekannte kleine Sollfälle sichern die wesentlichen Berechnungen; die bloße Wiederholung derselben Funktion ist nur Reproduzierbarkeit.

## Splits und Goldset

Hauptchats: development. Ergänzende Negativ-/Kontrollfälle: final-synthetic. Alle sieben Slices jeder separat formulierten Challengefamilie: final-synthetic; keine Familie auf mehrere Splits verteilen. Separates Kalibrierungsset ist vor Modell-Tuning noch unabhängig zu erstellen. [Splitvertrag](tests/v1/data/gold/splits.json) und Source-IDs bleiben nachvollziehbar. Synthetic Final ist nur Pipelinevorabnahme und kein Ersatz für unabhängig annotierte autorisierte repräsentative Realsprach-Evaluation. Lifecyclelabels sind Zustandsprüfungen; uncertain/quoted/third-party-Slices müssen anhand Eignung und Zielklasse bewertet werden, nicht mechanisch als positive Chatwertung.

## Update, Korrektur und Lastdaten

Importfixtures enthalten jeweils konkretes Basis-/Updateobjekt und erwarteten Ausgang; die zwei-Chat-ZIP-Auswahl sowie Gruppen-Dyadenbasis separat. corrections/scenarios.json enthält drei berechnete Label-/Pausen-/Tageskorrekturszenarien plus Zustands-/Nebenläufigkeitsfälle. Alle Produktmutationen bleiben BLOCKED bis Implementation.

stress.mjs erzeugt Lastdaten unabhängig von den Goldchats. Small/Medium/Large werden im Messharness nur im Speicher konstruiert; Stress kann explizit als Datei unter measurements/ erzeugt werden. Diese Profile tragen performance_only und sind keine Sprach-/Qualitätsgoldsets oder Produktlimits.

## Reproduzierbarkeit und Umgang

SHA-Inventar, stabile IDs und feste Seeds versionieren. Nach absichtlicher Fixtureänderung neu generieren und sämtliche neuen Datentests ausführen; keine bestehenden App-/Legacybaselines anpassen. Fehlgeschlagene spätere Produktfälle müssen am Produkt oder über ausdrücklich freigegebene fachliche Änderung gelöst werden, nicht durch stilles Verändern des Solls. Nur diese öffentlichen synthetischen Dateien sind als neue Testdaten vorgesehen.

# Global Analysis Rules

## 1. Datenbasis

Alle Funktionen eines aktiven Chats verwenden grundsätzlich denselben global gewählten Analysezeitraum.
Abweichungen sind nur methodisch erlaubt, z. B. vollständige Wochen/Monate für direkte Trendvergleiche.

Unvollständige Randperioden:
- dürfen in der Grafik sichtbar sein
- dürfen nicht ungekennzeichnet gegen vollständige Perioden verglichen werden

## 2. Deterministisch vs. semantisch

### Deterministisch / regelbasiert
Beispiele:
- Nachrichtenanzahl
- Wörter
- Uhrzeit/Wochentag
- Peak Day
- Chat Streak
- einfache Pausendauern
- Emoji-Häufigkeiten

### Semantisch / LLM-gestützt
Beispiele:
- Themen
- Insider
- Social Signals
- Future Talk / Raincheck
- Life Events
- Question Dynamics
- Rituale
- persönliche Offenheit
- Wendepunkte

### Hybrid
Beispiele:
- Gesprächsstarts
- Fast Responder
- First & Last
- Hot & Cold Deep Dive

Hybride Funktionen kombinieren Zeit-/Strukturregeln mit semantischen Ausnahmen/Fortsetzungen.

## 3. Belegprinzip

Jede semantische Klassifikation muss intern EvidenceItems erzeugen.
Die vollständige Evidence-Menge ist abrufbar.

Evidence enthält mindestens:
- stabile Message-ID bzw. Message-Block-ID
- Sender
- Timestamp
- Originaltext bzw. kurze Vorschau
- Klassifikation
- Confidence
- Status: included / excluded / user_confirmed / user_reclassified
- Quelle der Entscheidung: system / user

## 4. Nutzerkorrekturen

Nutzerkorrekturen sind First-Class-Daten und keine UI-Notizen.

Nach Korrektur:
- betroffene Kennzahl neu berechnen
- abhängige Folgefunktionen invalidieren/neuberechnen
- Korrektur persistent speichern
- Undo ermöglichen

Bei späteren Chatupdates Korrektur möglichst wieder anwenden, wenn die referenzierte Nachricht durch stabile Signatur wiedererkannt wird.

## 5. Confidence

Hohe Confidence:
- darf automatisch in Kennzahl einfließen
- bleibt prüfbar

Mittlere/geringe Confidence:
- als unsicher markieren
- bei sensibleren Funktionen nicht für starke Aussagen verwenden
- bei mehreren plausiblen Treffern alle relevanten Kandidaten zeigen

Keine künstliche Eindeutigkeit erzeugen.

## 6. Nacht-/Schlaflogik

Optional pro Person:
- typische Schlafenszeit
- typische Aufstehzeit
- unbekannt / automatisch ableiten

Diese Angaben sind weicher Kontext, keine harte Grenze.
Reale Aktivität schlägt die typische Schlafzeit.
Wenn bis 02:00 geschrieben wird, kann die Nachtpause erst danach beginnen.

## 7. Wer macht den ersten Move?

Bedeutung:
- allgemeiner neuer Gesprächsaustausch nach ausreichend langer Unterbrechung
- nicht „erste Nachricht des Kalendertags“
- nicht „neues Thema“

Erste Nachricht des Imports zählt nicht automatisch als Gesprächsstart.
Ausgangsschwelle kann konfigurierbar sein; Reply/Fortsetzung kann eine Zeitgrenze überstimmen.

„Wer eröffnet ein neues Thema?“ gehört zu Who Brings It Up?, nicht hierher.

## 8. First & Last

Betrachtet nur erkannte Nacht-/Schlafpausen:
- First Thought = erste relevante Nachricht nach Nachtpause
- Last Text = letzte relevante Nachricht davor

Daher dürfen Zahlen von „Wer macht den ersten Move?“ abweichen.

## 9. Fast Responder

Antwortzeit beginnt am Ende eines zusammenhängenden Nachrichtenblocks einer Person und endet mit der ersten Nachricht der anderen Person, die noch eindeutig als Antwort im selben Gespräch gilt.

„Längste echte Antwort“ = längste solche erkannte Reaktionszeit.
Ein neuer Gesprächsstart nach längerer Pause ist keine extrem lange Antwort.

## 10. Longest Silence

Pausen sind konkrete Intervalle ohne relevante Nachricht zwischen zwei vorhandenen Nachrichten.

Pausenprüfung zeigt:
- Zeitraum/Dauer
- letzte Nachricht davor
- erste Nachricht danach
- ggf. neutralen Kurzkontext
- Sprung in Chat
- ausklammern / wieder einbeziehen
- Ereignis zum Zeitraum hinzufügen

Nacht-/Schlafpause verständlich benennen, z. B. „typische Nacht-/Schlafpause erkennbar“ statt kryptischer Hinweise.

## 11. Chat Streak

Aktiver Kalendertag = mindestens eine relevante Nachricht.
Streak misst Kontinuität, nicht Menge.
Persönliche Treffen ändern die Standard-Streak nicht automatisch.

## 12. Communication Pulse

Mehrwert: langfristiger Verlauf statt einzelner Peaks.

Darzustellen / analysieren:
- Nachrichten je Zeitabschnitt
- Wörter je Zeitabschnitt
- aktive Kommunikationstage
- Person A/B getrennt
- Veränderungen gegenüber gleich langen vollständigen Perioden
- länger anhaltende Zu-/Abnahmen

UI soll echte Werte für einzelne Metriken zeigen können.
Zusätzlich kann ein Vergleichsindex genutzt werden, wenn Nachrichten und Wörter in einer Grafik verglichen werden; Basis klar erklären.

## 13. Hot & Cold Phases

Findet auffällige zusammenhängende Phasen hoher/niedriger Nachrichtenaktivität relativ zum individuellen Chatnormal.
Nicht automatisch emotional interpretieren.

Hover/Touch in Verlaufsgrafik:
- Datum/Periode
- Nachrichtenanzahl
- ggf. Person A/B-Anteile

## 14. Hot & Cold Deep Dive

Hot & Cold findet die Phase; Deep Dive erklärt ihre Struktur.

Deep Dive prüft:
- Nachrichten
- Wörter
- aktive Tage/Kontinuität
- Person A/B-Anteile
- Vorperiode
- Phase
- Nachperiode
- Fortsetzung/Erholung danach
- bestätigte reale Ereignisse im Zeitraum

Kernunterscheidung: Intensität vs. Kontinuität.
Eine Cold Phase kann 7/7 aktive Tage haben.

Nutzer kann persönliche Treffen:
- nur als Kontext verwenden
- optional aus digitalem Aktivitätsvergleich ausklammern

Ausgeschlossene Zeiträume bleiben in Rohdaten erhalten.

## 15. Life Events

Automatische Vorschläge immer mit Belegen.
„Erstmals im vorhandenen Chat erkannt“, niemals „zum ersten Mal überhaupt“, wenn Vollständigkeit nicht garantiert ist.
Reale Ereignisse ohne eindeutigen Chatbeleg nicht als Tatsache erfinden.

## 16. Raincheck / Planverläufe

Raincheck arbeitet auf Plan-Objekten, nicht auf isolierten Sätzen.
Plan kann über mehrere Nachrichten entstehen/fortgeführt werden.

Mögliche Zustände:
- Idee
- Vorschlag
- konkreter Plan
- konkretisiert
- verschoben
- abgesagt
- relativiert
- später durchgeführt / geklärt, sofern belastbar

Review-Modus:
- alle Planänderungen prüfbar
- kein Raincheck
- Kategorie ändern
- mit anderem Plan zusammenführen
- Duplikat korrigieren

## 17. Jeder Chattext ist navigierbar

Wenn eine Funktion Text aus dem Chat zeigt, muss Klick/Tap zum Original im Chatviewer springen.
Dies gilt global, auch für Long Story Short, Beispiele für Gesprächsstarts, offene Fragen, Social Signals, Future Talk, Raincheck, Rituale etc.

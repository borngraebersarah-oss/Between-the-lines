# Import & Persistence

## 1. Unterstützte MVP-Quellen

- WhatsApp-Export
- frei eingefügter Text
- Gesprächstranskript

Wenn Transkript keine Zeitdaten enthält:
- Nutzer kann Datum/Zeitraum ergänzen
- optional Zeit nur soweit vorhanden
- Sprecher müssen eindeutig zugeordnet werden

## 2. Teilnehmererkennung

1:1-Chat: Teilnehmer automatisch erkennen und vom Nutzer bestätigen lassen.

Gruppenchat:
- Teilnehmer erkennen
- Nutzer wählt zwei Personen für die Analyse
- Kennzahlen beziehen sich auf diese Dyade
- andere Teilnehmer nicht in A/B-Kennzahlen zählen
- Kontextnachrichten anderer Teilnehmer im Chatviewer bei Bedarf sichtbar lassen

## 3. Update vs. Replace

Datenverwaltung bietet zwei klare Aktionen:

### Neue Daten hinzufügen
- neue Quelle importieren
- mit bestehendem Bestand zusammenführen
- Duplikate erkennen
- neue Nachrichten ergänzen
- betroffene Analysen neu berechnen

### Bestehende Daten ersetzen
- vorhandenen Rohdatenbestand ersetzen
- nach Möglichkeit bekannte Nachrichten wiedererkennen
- Nutzerkorrekturen/Events/Kontext nicht automatisch löschen

## 4. Deduplizierung

Nicht nur Dateihash verwenden.
Message-Fingerprint z. B. aus:
- normalisiertem Sender
- Timestamp
- normalisiertem Text
- Reihenfolge/Nachbarschaft bei Konflikten

Bearbeitete oder leicht veränderte Nachrichten benötigen robuste Matching-Strategie.

## 5. Persistenz pro Chat

Muss Updates überleben:
- RelationshipContext
- Schlafprofile
- Profilbilder
- bestätigte Life Events
- verworfene KI-Event-Vorschläge, soweit wiedererkennbar
- Evidence-Ausschlüsse
- Reklassifizierungen
- Dashboardkonfiguration
- globaler Zeitraumfilter
- Nutzerkommentare/Notizen

## 6. Reanalyse nach Update

Nach neuem Import Nutzer informieren, z. B.:
- X neue Nachrichten
- Y Duplikate erkannt
- Z Analysen aktualisiert
- N neue Life-Event-Vorschläge
- vorhandene Korrekturen übernommen

## 7. Chatviewer

Funktionen:
- lesen
- suchen
- Datumssprung
- exakte Nachricht fokussieren
- markierte Belegstelle hervorheben
- vorherige/nächste Evidence-Stelle
- ggf. Filter Person A/B/andere Gruppenmitglieder

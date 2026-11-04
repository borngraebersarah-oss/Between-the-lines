# Product Specification — Zwischen den Zeilen

## 1. Produktidee

Zwischen den Zeilen analysiert Chat- und Gesprächsverläufe auf unterschiedlichen Tiefenstufen: von spielerischen, leicht verständlichen Chatstatistiken bis zu längerfristigen Kommunikationsmustern und kontextbezogenen Analysen.

Die App bewertet keine Person abschließend. Sie zeigt beobachtbare Muster, bietet vorsichtige Einordnungen und macht die Datengrundlage nachvollziehbar.

## 2. Informationsarchitektur

### 2.1 Globale Ebene

**Home** ist die Chat-Bibliothek.

Home zeigt:
- CTA „Neuen Chat / Daten starten“
- vorhandene Chatbereiche / Beziehungen
- keine Analyseergebnisse
- keine chatbezogene Dashboard-Navigation

Ein Nutzer kann mehrere Chatbereiche haben, z. B. Partner, Freundin, Ex-Partner, Familienmitglied.

### 2.2 Chatbezogene Ebene

Flow:

`Home → Chat auswählen → Chat-Dashboard → Analyse / Begleiter / Kontext / Daten`

Erst nach Auswahl eines Chats erscheinen die chatbezogenen Navigationseinträge Dashboard, Analyse und Begleiter.

### 2.3 Dashboard

Pro Chat individuell konfigurierbar.

Nutzer kann:
- Funktionen/Karten ein- oder ausblenden
- Reihenfolge bestimmen
- Kontext öffnen
- Ereignisse öffnen
- Chatdaten ergänzen/ersetzen
- Chat lesen

Kein redundanter „Analyse öffnen“-Button, wenn Analyse bereits in der Bottom Navigation verfügbar ist.

## 3. Analysebereiche

Sichtbare Kategorien:

1. Your Chat Rhythm
2. Who Makes the Move?
3. How You Text
4. Your Language
5. Your Chat Universe
6. Between the Lines

Interne Produktstufen (z. B. Basis / II.A) dürfen für Feature- und Tier-Logik verwendet werden, sind aber kein Nutzer-Vorfilter.

## 4. Zentraler Analysezeitraum

Default: gesamter verfügbare Chat.

Globaler Zeitraumfilter pro aktivem Chat:
- Gesamt
- letzte 7 Tage
- letzte 30 Tage
- letzte 3 Monate
- letzte 12 Monate
- individuell Von–Bis

Der gewählte Zeitraum gilt für Dashboard und alle Analysen, sofern eine Funktion nicht aus methodischen Gründen nur vollständige Unterperioden vergleichen darf.

Der Begleiter darf temporär einen anderen Zeitraum aus einer Frage verwenden, z. B. „letzte drei Monate“, ohne den globalen Filter ungefragt zu verändern.

## 5. Kontext

Chat-Kontext wird beim Import einmalig erfasst und ist später editierbar.

Felder:
- Verhältnis / Beziehungstyp: Kennenlernen, Dating, Situationship, Partnerschaft, Freundschaft, Ex-Partner, Familie, Kollegen/Arbeit, Sonstiges
- bei Familie optionale Unterrolle: Mutter, Vater, Schwester, Bruder, Tochter, Sohn, Großeltern, Tante/Onkel, Cousine/Cousin etc.
- Dauer als strukturierte Auswahl, z. B. <1 Monat, 1–3, 3–6, 6–12 Monate, 1–2, 2–5, 5–10, >10 Jahre
- kultureller Kontext als Freitext
- Kommunikationsstil als Freitext, z. B. Ironie/Sarkasmus
- zusätzliche Hinweise als Freitext
- optionaler Tages-/Schlafrhythmus pro Person

Die Sprache des Chats wird automatisch erkannt und ist kein manuelles Kontextfeld.

## 6. Life Events

Life Events kombiniert:
- vom Nutzer bestätigte reale Ereignisse
- automatisch erkannte kommunikative Meilensteine

Beispielkategorien:
- Zuneigung & Nähe
- Kosenamen & Insider
- besondere erste Male
- Treffen & gemeinsame Zeit
- Zukunft & gemeinsame Pläne
- persönliche Offenheit
- Konflikte & Wendepunkte
- eigene Events

Timeline soll Kategorie über Icon/Farbe erkennbar machen.

Nutzer kann Events hinzufügen, vollständig bearbeiten und löschen.

Automatische Vorschläge können:
- bestätigt
- bearbeitet
- verworfen
werden.

### 6.1 Freie Life-Event-Suche

Innerhalb von Life Events kann der Nutzer den Begleiter in Freitext fragen, z. B.:
- „Wann wird unser erster Kuss im Chat erstmals erwähnt?“
- „Wann schreibt er zum ersten Mal, dass er mich mag?“
- „Wann sprechen wir erstmals konkret über einen Urlaub?“

Das System liefert alle plausiblen Treffer mit:
- Absender
- Datum/Uhrzeit
- Chatbeleg
- Confidence
- Button „Im Chat ansehen“
- Button „Als Life Event übernehmen“

Bei mehreren plausiblen Treffern entscheidet der Nutzer.

## 7. Begleiter

Premium-/Advanced-Funktion als chatbezogener LLM-Dialog.

Der Begleiter kennt:
- Chatdaten
- Analyseergebnisse
- bestätigten Kontext
- Life Events
- Nutzerkorrekturen

Er kann:
- Fragen beantworten
- Belege finden
- Analysen erklären
- alternative Zeiträume untersuchen
- Aktionen vorschlagen

Zustandsverändernde Aktionen benötigen vor Ausführung konkrete Bestätigung.

## 8. Pläne / Monetarisierung

Aktuelle Arbeitslogik:
- Free
- Basic
- Premium

Die Zuordnung bleibt konfigurierbar und darf nicht hart in die UI verdrahtet werden.
Gesperrte Funktionen bleiben sichtbar und werden mit Schloss / Planhinweis dargestellt.

## 9. Profilbilder

Optional pro Teilnehmer.
Ohne Bild: Initialen-Avatar.
Profilbilder erscheinen dort, wo Personen verglichen oder als Absender gezeigt werden.

## 10. MVP-Scope

- WhatsApp-Export
- frei eingefügtes Transkript/Text
- 1:1-Dynamik
- Gruppenchat darf importiert werden; Nutzer wählt zwei Personen für die paarweise Analyse
- andere Gruppenmitglieder zählen nicht in die Kennzahlen der ausgewählten Dyade, dürfen aber bei Bedarf als Gesprächskontext im Chatviewer sichtbar bleiben

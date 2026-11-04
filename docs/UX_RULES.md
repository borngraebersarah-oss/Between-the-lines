# UX Rules

## 1. Grundprinzip

Reveal → Understand → Explore → Verify → Correct

1. zentrale Erkenntnis zuerst
2. verständliche Visualisierung
3. Details/Vertiefung
4. Belege/Methodik
5. Korrekturmöglichkeit

## 2. Funktionsseite

Empfohlene Reihenfolge:
1. Kategorie + Funktionsnavigation
2. zentrale Erkenntnis
3. wichtigste Visualisierung
4. Personenvergleich / Detailvergleich
5. zusätzliche Kennzahlen
6. beobachtbare Punkte
7. Belege / Methodik

Wichtigste Erkenntnis möglichst ohne langes Scrollen sichtbar.
Keine künstliche zweite „Details“-Seite ohne echten Interaktionsgrund.

## 3. Keine Duplikate

Auf derselben Seite identische Fragen, Titel oder Kennzahlen nicht mehrfach wiederholen.
Die Gesamtzahl der Chatnachrichten nicht auf jeder Funktionsseite wiederholen, wenn sie bereits im Dashboard/Chatüberblick sichtbar ist.

## 4. Diagramme

Jede Visualisierung muss ohne Ratearbeit verständlich sein.

Pflicht:
- sinnvolle Achsenbeschriftung
- Einheit
- bei Balkendiagrammen nach Möglichkeit konkrete Werte direkt am Balken
- Hover/Touch-Tooltip für Zeitreihen: Datum/Periode + Wert + Einheit
- bei mehreren Metriken klare Legende
- bei normalisierten Indizes Basis erklären, z. B. „Median vollständiger Wochen = 100“

## 5. Belege

Jeder angezeigte Chattext ist interaktiv.
Klick öffnet den Chatviewer exakt an der betreffenden Stelle.

Semantische Funktionen zeigen über „Alle Belege“ die vollständige Belegmenge, paginiert/gefiltert.
Ausgangspunkt: max. ca. 50 pro Seite.

Filter:
- Person
- Zeitraum
- berücksichtigt / ausgeschlossen
- sicher / unsicher
- ggf. Kategorie

## 6. Korrekturen

Pro Beleg je nach Funktion:
- korrekt
- aus Wertung nehmen
- wieder einbeziehen
- Kategorie ändern
- zusammenführen / Duplikat markieren, wenn sinnvoll

Nach Änderung:
- betroffene Auswertung neu berechnen
- Undo anbieten
- dezent anzeigen, dass Nutzerkorrekturen wirken, z. B. „1.756 gewertet · 14 ausgeschlossen“

## 7. Kontext & Events

Kontextdialog zeigt direkt editierbare Felder, keine doppelte Zusammenfassung darüber.
„Kontext speichern“ schließt den Dialog und zeigt eine kurze Erfolgsmeldung.

Event-Notizen bleiben in Übersicht und Detail sichtbar.
Beim Bearbeiten alle Felder editierbar: Kategorie, Titel, Von/Bis, Ort, Notiz.

Manuelle/bestätigte Events: „Löschen“.
Unbestätigte KI-Vorschläge: „Verwerfen“.

## 8. Navigation

Ohne aktiven Chat:
- Home
- Pro
- Profil

Mit aktivem Chat:
- Home
- Dashboard
- Analyse
- Begleiter
- Pro
- Profil

Home verlässt den Chatkontext.
Dashboard/Analyse/Begleiter nie automatisch auf einen zufälligen Chat beziehen.

## 9. Kategorien

Kategorien vollständig sichtbar; kein notwendiges horizontales Suchen nach versteckten Kategorien.
Aktive Kategorie klar markieren.
Funktionsnavigation innerhalb einer Kategorie konsistent halten.

## 10. Profilbilder / Avatare

Profilbild neben dem Namen einsetzen, wenn:
- Personenwerte verglichen werden
- Beleg-Absender gezeigt wird
- Personenkarten dargestellt werden

Nicht als zufällige Deko im Header.
Fallback: Initialen.

## 11. Icons & visuelle Auflockerung

Reduzierte Outline-/Line-Icons, konsistente Familie, runde Enden.
Icons dienen Orientierung, nicht bloßer Dekoration.

Beispiele:
- Prime Time: Uhr
- Lieblingstag: Kalender
- Hot & Cold: Activity/Wave/Flame
- Longest Silence: Moon/Pause
- Chat Streak: Flame
- Peak Day: Bar Chart
- Life Events: Kategorieicon, z. B. Reise, Treffen, Herz, Insider, Konflikt, Zukunft

Bei Life Events Nutzer aus kuratiertem Icon-Set wählen lassen; keine beliebigen Upload-Icons als MVP.

## 12. Modale / Overlays

Eigener Scrollbereich innerhalb des Modals.
Hintergrundseite darf nicht parallel scrollen.

## 13. Interaktionsfeedback

- Loading-Skeletons statt leerer Flächen
- Erfolgsmeldung nach Speichern/Korrektur
- klare Empty States
- klare insufficient-data States
- irreversible Aktionen bestätigen
- reversible Ausschlüsse ohne unnötige Warnmodalität, aber mit Undo

# Begleiter-Schnittstelle nach Schritt 6

Die aktuelle Implementierung ist ein lokaler Mock mit öffentlichen Fixtures. Sie macht keinen Netzwerkaufruf. Es wurden weder Provider noch API-Key oder Backendarchitektur gewählt. Die normalen Produktregeln in AI_COMPANION_SPEC.md gelten weiterhin; diese Datei dokumentiert die technische Umsetzung der aktuellen Freigabe.

## Austauschbare Grenze

`CompanionService.respond(request): Promise<CompanionAnswer>` in `src/companion/contracts.ts` ist über die `App`-Prop `companionService` injizierbar. Die Oberfläche und die Ausführung bestätigter Änderungen liegen außerhalb des Service.

Request: `chatId`, Frage, chatbezogener Interaktionsstand mit Revision, globaler Zeitraum und bisherige Unterhaltung. Antwort: dieselbe `chatId`, Herkunft, Antworttext, tatsächlich angefragter Zeitraum, Kennzeichnung eines temporären Zeitraums, Treffer mit stabilen Message-/Evidence-IDs und Unsicherheit, separate Aktionsvorschläge.

Die produktive Implementierung muss später die Belegauflösung durch ein echtes chatbezogenes Repository ersetzen und den Herkunftsvertrag entsprechend erweitern. `validateAnswer` weist heute fremde oder unbekannte IDs, nicht passende Revisionen und ungültige Aktionsziele ab. Der aktuelle Resolver kennt ausdrücklich nur öffentliche Fixtures. Ein neuer Backendadapter darf diese Kontrolle nicht umgehen. Private Nachrichten gehören weder in das Bundle noch in Provider-Keys im Browser. Es wurde noch kein Transport, Provider oder Server festgelegt.

## Kontrollierter Mock

`mockCompanionService` verwendet fünf bereits vorhandene öffentliche Nachrichten: `question`, `reply`, `move-a2`, `future-option`, `future-plan`. Fünf zusätzliche Evidence-Datensätze referenzieren diese vorhandenen IDs; kein Nachrichtentext wurde neu erzeugt. Confidence ist eine ausdrücklich kuratierte qualitative Fixture-Einschätzung, kein Modellscore. Die Auswahl ist kein vollständiger Suchindex und keine echte semantische Suche.

Beispielanfragen: „Wann war unser erstes Treffen?“, „Beleg ausschließen“, „Vorschlag bestätigen“, „Treffen ausklammern“, „Kontext ändern: …“, „Globalen Zeitraum ändern“, „Ereignis hinzufügen“. Das sind eng begrenzte Mock-Trigger, kein allgemeines Sprachverständnis. Nicht belegte Fragen etwa nach München, einem Kuss oder Gefühlen erhalten keine erfundene Antwort. `/test-fehler` ist ein gezielter Fehlerfall für lokale Tests.

„Letzte drei Monate“ / „letzte 3 Monate“ wird als vorübergehender Fragezeitraum behandelt. Relative Zeiträume verwenden auch hier die gemeinsame, am letzten gültigen Nachrichtenzeitstempel des betreffenden Chats verankerte Zeitraumfunktion (Korrekturlauf 2). Die global gespeicherte Auswahl wird nicht verändert. Vorhandene Belege werden nach ihrem Datum eingegrenzt; neue Analysekennzahlen werden nicht berechnet. Die früheste Stelle wird nur als erste gefundene Erwähnung im verfügbaren Bestand beziehungsweise Zeitraum beschrieben. Die Belege belegen Erwähnungen/Pläne, nicht automatisch die tatsächliche Durchführung.

## Änderungen

Ein Vorschlag trägt Chat-ID, erwartete Revision und bisherigen globalen Zeitraum. Die UI zeigt Zusammenfassung, genaue Änderung, Auswirkung und Anwenden/Abbrechen. Vor Anwenden wird der Stand erneut geprüft. Veraltete Vorschläge oder Speicherfehler werden gemeldet. Der Service selbst verändert keinen Zustand.

Unterstützt sind Evidence-Ausschluss, Bestätigung eines Vorschlags, Ausschlussmarkierung eines bestätigten Treffens, Änderung des zusätzlichen Kontexttexts, Änderung des globalen Zeitraums und Vorbereitung eines Ereignisentwurfs. Der Entwurf enthält Kategorie, Titel, Datum/Zeitraum, Ort, Notiz, Icon und Originalbeleg. Nur das explizite Speichern erzeugt ein bestätigtes Nutzerereignis. Der anfängliche Datumsvorschlag ist als Datum der Chat-Erwähnung gekennzeichnet, nicht als bewiesenes Ereignisdatum.

## Lebensdauer und Grenzen

Unterhaltungen, ausstehende Anfragen und Vorschlagsentscheidungen liegen pro Chat nur im Arbeitsspeicher. Navigation und Reader-Ausflüge erhalten sie; Reload startet eine neue Unterhaltung. Bestätigte Änderungen sind im vorhandenen v2-Interaktionsspeicher oder im separaten v1-Zeitraumspeicher persistent. Verspätete Antworten bleiben beim ursprünglichen Chat.

Eine echte Reanalyse, ein allgemeines Korrekturjournal, vollständige Belegmengen, echtes Importieren/Deduplizieren, LLM-Suche und Plantracking bleiben offen. Kein Import oder Ausschluss darf derzeit als erfolgreiche Neuberechnung dargestellt werden.

# D-COST — parametrisches Messmodell

Stand 04.11.2026. Kein produktiver Anbieter angebunden oder in diesem Auftrag aufgerufen. **Keine Anbieterpreise, keine Token-/Kostenmessung und keine Budgetfreigabe.**

## Einheit und Ereignisprotokoll

Pro Analysejob: Job-ID, synthetische Chat-ID beziehungsweise im Produkt datensparsame Referenz, Daten-/Regel-/Klassifikations-/Modellversion, Scope/P, Operation initial/Add/Replace/correction/period-change, geeignete/geplante/abgeschlossene/offene semantische Einheiten, benötigte Kontexte, Request-/Retry-ID, Ergebnisstatus, Cachetreffer und Invalidierungsgrund.

Je tatsächlich ausgeführtem Request: providerdefinierte Input-/Output-Abrechnungseinheiten, gecachte/nicht gecachte Einheiten, Retrieval-/Embedding-/Rerank-Einheiten soweit anfallend, Antwortstatus, tatsächliche Usage und Kostenquelle. Netzwerkretry mit bereits abgerechnetem Request nicht als kostenlos annehmen; deduplizierte fachliche Einheit kann trotzdem mehrfach abgerechnet worden sein. Keine Chatvolltexte oder Secrets in normalen Kostenlogs.

## Formel

Für eine konkrete Provider-/Modellversion und identische Bezugsgrößen:

```text
K_job = Σ_requests (
    I_uncached × p_input
  + I_cached × p_cached_input
  + O_billed × p_output
  + R_units × p_retrieval
  + E_units × p_embedding
  + Q_units × p_other_request
) + K_storage + K_compute + K_transfer
```

Alle p-Parameter bleiben **TBD**. Providerpreise können beispielsweise pro Million Tokens statt pro Token gelten; Umrechnungsfaktor und Währung explizit mitführen. Nicht eingesetzte Dienste nicht automatisch als Kostenposition behaupten. Retries werden als eigene Requests in der Summe geführt; keinen zweiten pauschalen Retryfaktor darüber legen. Kostenlos wiederverwendete lokale Ergebnisse erzeugen keinen Modellrequest, können aber Rechen-/Speicherkosten haben. Ein modellseitiger Cachehit kann weiterhin kostenpflichtig sein.

`U_semantic` ist Zahl fachlicher Einheiten, **nicht** Zahl Requests oder Tokens. Kontextüberlappung, Batching, Promptanteil, Mehrfachlabel und Antwortlänge verändern tatsächliche Usage. Zeichen-/Wortanzahl ist keine Tokenmessung. Die im Harness berichteten Textlängen und Autoreneinheiten sind ausschließlich Eingangsprofile.

## Operationsszenarien

| Szenario | Zu messen | Erwartete Wiederverwendungsgrenze |
|---|---|---|
| Initial | alle vorgesehenen Einheiten, Kontext, Retrieval, Requests | keine vorausgesetzten Cachetreffer |
| identischer Wiederimport | Preview/Identitätsarbeit, neue KI-Requests | keine fachlich duplizierte Analyse ohne Invalidierungsgrund |
| Add | neue/geänderte Einheiten plus betroffene Grenzkontexte | gültige unveränderte Ergebnisse erhalten; nicht pauschal nur neue Nachrichtentexte rechnen |
| Replace | neue aktuelle Basis, weggefallene/geänderte Referenzen | nur eindeutig noch gültige Ergebnisse wiederverwenden; kein verstecktes Volltextarchiv |
| Nutzerkorrektur | Dirty-Set und deterministische Neuaggregation, ggf. begründete semantische Folgearbeit | Nutzerentscheidung nicht erneut vom Modell überschreiben |
| P-/Dyadenwechsel | Scopeabhängigkeit, bestehende Klassifikation und Kontext | keine fremde Dyade oder alte Ergebnisversion wiederverwenden |
| Retry/Invalid output | tatsächliche zusätzliche Usage, Fehler-/Abbruchrate | keine doppelten Evidence-Objekte oder Actions |
| Regel-/Modellwechsel | betroffene erneute Evaluierung/Einheiten | keine stille Übertragung alter Automatikfreigabe |

Je Szenario cold/warm und Small/Medium/Large/Stress messen. Tabellenfelder für spätere Daten: U_eligible, U_planned, U_done, U_review, U_unresolved, Requests, Retries, Cachehits, I/O/R/E, K_total, K_per_completed_unit, K_per_chat, wall-time. Bei Nenner null `not-applicable`.

## D-COST-Entscheidung

Kosten bleiben parametrisch, bis reale Usage und vereinbarte Preise vorliegen. Produktverantwortliche beschließen danach zulässige Kontingente/Supportumfang, Kostentransparenz und ggf. erneute Bestätigung kostenwirksamer Umfangserweiterung. Ein Limit darf nicht heimlich einen Teilchat analysieren und dessen Zahl als vollständige Auswertung darstellen. Fehler/Abbruch/Teilabdeckung sichtbar halten. Keine Tarif- oder Monetarisierungslogik durch dieses Paket implementiert.

Offener Nachweis geht ausschließlich als Release-/Betriebsgate ins finale Handoff-Paket.

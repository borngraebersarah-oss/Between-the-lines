# Security & Privacy Notes

## Kritischer Prototyp-Hinweis

Der beigefügte HTML-Prototyp kann echte private Chatdaten eingebettet enthalten.

**Nicht öffentlich auf GitHub Pages oder in ein öffentliches Repository pushen, ohne die Daten zu entfernen/anonymisieren.**

## Produktive Architektur

- keine API-Secrets im Browser
- LLM-Aufrufe über sicheren Backend-Endpunkt
- minimale Datenhaltung
- klare Löschfunktionen
- nachvollziehbare Datenquellen
- keine Nutzung vertraulicher Chatinhalte für Produktanalytics
- Analytics nur auf Interaktions-/Featureebene, nicht auf Chattext

## Test-/Share-Version

Für öffentliche Demos separate synthetische/anonymisierte Daten verwenden.

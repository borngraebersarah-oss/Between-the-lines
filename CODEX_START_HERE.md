# Codex — START HERE

## Erste Aufgabe

Der vorhandene `prototype/index.html` ist ein funktionsreicher, aber monolithischer HTML-Prototyp. Er soll **nicht einfach weiter aufgebläht** werden.

### Ziel der ersten Codex-Phase

Baue aus dem aktuellen Prototypen eine saubere, moderne, komponentenbasierte Frontend-Struktur, **ohne bestehende Produktlogik zu verlieren**.

Empfohlener Zielstack für den Prototyp:

- Vite
- React
- TypeScript
- CSS Variables / component-scoped CSS oder ein leichtgewichtiges Styling-System
- keine unnötige schwere UI-Bibliothek
- Charts mit einer gut wartbaren Library oder vorhandenen SVG-Komponenten

Wenn im Workspace bereits eine andere sinnvolle Struktur existiert, erst prüfen und dann begründet weiterverwenden.

## Reihenfolge

1. Lies `AGENTS.md` und alle Dateien unter `docs/`.
2. Öffne `prototype/index.html` und erfasse die vorhandenen Screens/Flows/Funktionen.
3. Erstelle eine kurze Migrationsplanung (`MIGRATION_NOTES.md`) mit:
   - aktuellem Seiten-/Komponentenbaum
   - vorgeschlagenem neuen Komponentenbaum
   - Risiken für Funktionsverlust
   - Reihenfolge der Migration
4. Migriere danach schrittweise.
5. **Noch keine echte LLM-API integrieren.** Begleiter/Life-Event-Suche zunächst mockbar halten.
6. Keine Analyseformeln verändern.
7. Nach jeder Migration die Kernflows gegen den alten Prototypen prüfen.

## Zielbild für die Navigation

Global ohne aktiven Chat:

- Home
- Pro
- Profil

Innerhalb eines aktiven Chats:

- Home
- Dashboard
- Analyse
- Begleiter
- Pro
- Profil

Home verlässt den Chat-Kontext. Dashboard/Analyse/Begleiter dürfen ohne aktiven Chat nicht anwählbar sein.

## Erster konkreter Prompt, den der Nutzer an Codex senden kann

> Lies zuerst AGENTS.md und CODEX_START_HERE.md vollständig. Lies danach alle Dateien unter docs/. Prüfe anschließend prototype/index.html im Browser. Erstelle noch keine neue Produktlogik. Lege zuerst MIGRATION_NOTES.md an und beschreibe, wie du den monolithischen Prototypen in eine moderne Vite/React/TypeScript-Struktur überführen würdest, ohne bestehende Funktionen oder Interaktionen zu verlieren. Zeige mir den Plan, bevor du mit dem Refactoring beginnst.

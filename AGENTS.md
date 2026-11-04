# AGENTS.md — Zwischen den Zeilen

## Rolle

Du arbeitest an **Zwischen den Zeilen**, einer App zur spielerischen und vertiefenden Analyse von Chat- und Kommunikationsverläufen.

Deine Aufgabe ist primär **Software Engineering und Prototyping**. Produktlogik, Analysegrenzen und UX-Regeln sind in den Projektdateien bereits definiert.

## Vor jeder größeren Änderung

Lies mindestens:

1. `docs/PRODUCT_SPEC.md`
2. `docs/UX_RULES.md`
3. `docs/ANALYSIS_RULES.md`
4. `docs/DESIGN_SPEC.md`

Bei Import/Persistenz zusätzlich `docs/IMPORT_PERSISTENCE.md`.
Bei LLM-/Begleiter-Arbeit zusätzlich `docs/AI_COMPANION_SPEC.md`.

## Harte Produktregeln

- Mobile first.
- Home ist die globale Chat-Bibliothek.
- Dashboard, Analyse und Begleiter existieren nur im Kontext eines aktiven Chats.
- Kein sichtbarer Vorfilter „Stufe I / II.A“ in der Nutzeroberfläche.
- Analysefunktionen werden nutzerseitig nach Kategorien gebündelt.
- Jede angezeigte Chatnachricht / jedes Zitat ist anklickbar und führt zur exakten Stelle im Chat.
- Semantische Kennzahlen müssen ihre **vollständige Belegmenge** zugänglich machen, nicht nur Beispiele.
- Nutzerkorrekturen sind rückgängig machbar, persistent und führen zur Neuberechnung betroffener Auswertungen.
- Hohe KI-Sicherheit darf automatisch klassifizieren, bleibt aber vollständig prüfbar.
- Unsichere KI-Treffer müssen mit Beleg + Confidence gezeigt und vom Nutzer bestätigt werden.
- Zustandsverändernde Aktionen des Begleiters brauchen vor Ausführung eine konkrete Nutzerbestätigung.
- Keine psychologischen Diagnosen oder unbelegten Aussagen über Gefühle, Absichten, Interesse, Bindung oder Charakter.
- Beobachtung, Interpretation und Hypothese müssen getrennt bleiben.
- Keine doppelte Information auf derselben Seite, wenn sie keinen zusätzlichen Mehrwert bringt.
- Diagramme brauchen verständliche Achsen/Einheiten oder direkt lesbare Werte.
- Profilbilder optional; ohne Bild Initialen. Avatare dort einsetzen, wo Personen verglichen oder als Absender gezeigt werden — nicht dekorativ/random.
- Änderungen an Analyse-Definitionen oder Berechnungslogik nur nach ausdrücklicher Freigabe.

## Technische Arbeitsweise

- Bestehende Funktionalität vor Refactoring sichern.
- Kleine, nachvollziehbare Änderungen bevorzugen.
- Bei Refactoring erst Verhalten erhalten, danach visuell/technisch verbessern.
- Keine API-Keys in Browsercode oder öffentliche Repositories schreiben.
- Echte LLM-Aufrufe gehören später hinter ein Backend / sichere Server-Funktion.
- Konfigurierbare Produktentscheidungen (z. B. Free/Basic/Premium) nicht hart in Komponenten verdrahten.
- Jede Analysefunktion erhält stabile IDs und eine deklarative Konfiguration.
- Nutzerkorrekturen referenzieren stabile Message-/Evidence-IDs, nicht nur sichtbaren Text.

## Testanforderung

Vor Abschluss einer Änderung mindestens:

- Navigation des betroffenen Flows testen.
- Mobile Breite ~390–430 px prüfen.
- Empty / Loading / Error / insufficient-data Zustand berücksichtigen.
- Bei Datenänderungen Recalculation und Persistenz prüfen.
- Bei Belegen Chat-Sprung und Ausschluss/Undo prüfen.

## Sprache

UI-Texte dürfen Deutsch/Englisch unterstützen. Die Sprache des importierten Chats wird automatisch erkannt und ist kein manuelles Kontextfeld.

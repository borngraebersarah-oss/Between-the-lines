# Frontend-Designsystem

Stand: 04.10.2026, ausdrücklich freigegebene Phase nach Abschluss der Funktionsmigration. Dieses Dokument konkretisiert `DESIGN_SPEC.md`; die fachlichen Spezifikationen und Datenmodelle bleiben unverändert.

## Zwei Themes

| ID | Label | Charakter |
|---|---|---|
| `editorial-warm` | Editorial Warm | Creme, Sand, Beige, Taupe, Terracotta, Braun, Karamell, Rosé-Braun, warmes Gold |
| `night-mode-chic` | Night Mode Chic | tiefes warmes Anthrazit, grüne und braune Flächen, Beige, Rosé, zurückhaltendes Gold |

Editorial Warm ist der Default. Keine Betriebssystemabfrage, kein automatischer Wechsel. Native Formulare verwenden den expliziten semantischen `--native-color-scheme`-Token des gewählten Themes; dies ist kein Systemmodus.

`themes.ts` definiert den vollständigen typisierten Tokenvertrag und beide Paletten. `ThemeProvider` wendet ihn zentral auf das Dokument an. Produktkomponenten kennen ausschließlich semantische CSS-Variablen. Nur die Theme-Schicht kennt IDs/Labels und rendert die beiden Preview-Karten in `Appearance.tsx`. `Profile` bindet diese Komponente ein.

Die explizite Wahl verwendet weiterhin `zdz:preferences:theme:v1` mit `{ version: 1, theme }`. Eine alte Wahl `modern-insight`, beschädigte Werte, unbekannte IDs oder nicht verfügbarer Speicher ergeben Editorial Warm. Lesen schreibt oder löscht nichts. Erst eine neue Nutzerwahl ersetzt den Präferenzwert. Fehler beim Speichern werden unter Appearance angezeigt; die aktuelle Sitzung verwendet die ausgewählte Palette trotzdem.

## Semantische Rollen

- App, sekundärer Hintergrund, Surface, warme Surface, erhöhte Surface, Text primär/sekundär/dezent/invers, Border/starke Border.
- Primär-/Sekundärakzent, Personen A/B samt Flächen, Success/Warning/Error/Info.
- Chartfarben A/B, Gesamt-/Primär-/dezent, Gradientenenden, Grid, Labels, Highlight-Opacity.
- Navigation aktiv/inaktiv, aktive Pill, Header, Overlay/Backdrop, Status-/Planbadges.
- Karten-/Dialog-/Button-/Icon-/Chart-Radien, Schatten, zentrale Abstände und Größen.
- Schriftfamilien, Größen, Gewichte, Zeilenhöhen und Laufweiten; Motion-Dauer und Kurven.
- Sechs Kategoriepaletten mit jeweils Surface, Accent, Detail und Deep. Lokale Rollen `--category-*` wählen über `data-palette` die passende Stimmung, unabhängig vom Theme.

Kontextabhängige Gradienten werden im jeweiligen `data-palette`-Scope zusammengesetzt. So beziehen sich die CSS-Variablen tatsächlich auf die aktuelle Kategorie und nicht auf einen bereits am Dokumentroot berechneten Default.

## Kategorien und Funktionsicons

Korrekturlauf 1: Die Icon-Spalte unten beschreibt die zentrale Metadatenzuordnung. Kleine Zusatzicons werden auf den Kategorie-Karten nicht mehr gerendert; große Artworks und Randindikatoren bleiben. Die Farbstimmungen gelten für Editorial Warm; Night Mode Chic behält seine dunklen Grün-/Sage-Flächen.

`categoryVisuals.ts` enthält für jede bestehende Kategorie explizit `categoryIcon`, `categoryArtwork`, `categoryPalette` und eine kurze Orientierungszeile. `featureIcons` ist ein vollständiges `Record<FeatureId, IconName>` für alle 33 IDs.

| Kategorie | Icon | Eigenes Artwork | Farbstimmung |
|---|---|---|---|
| Your Chat Rhythm | Activity | Welle, Rhythmuslinie, Datenpunkte, Balken | Sand, Karamell, Braun |
| Who Makes the Move? | ArrowUpRight | zwei Punkte, gerichteter Impuls, Gegenbewegung | Terracotta, Rosé, Braun |
| How You Text | MessagesSquare | überlagerte Sprechflächen, verschieden lange Zeilen | Sand, Karamell, Braun |
| Your Language | Quote | große Anführungszeichen, hervorgehobene Fläche, Textlinien | Rosé-Braun, Terracotta, Taupe |
| Your Chat Universe | Orbit | dominante Knoten, Verbindungen, elliptischer Orbit | Beige, Taupe, Braun |
| Between the Lines | Layers | überlagerte Textblätter und Fokus-Spark | warmes Gold, Beige, Braun |

`CategoryArtwork.tsx` enthält sechs eigens erstellte, dekorative SVG-Kompositionen. Sie haben keine datenanalytische Bedeutung, sind für Assistenztechnik ausgeblendet und nicht fokussierbar. Keine Stockbilder, Fotos, externen Bilddienste oder Downloads.

Funktionale Icons kommen zentral aus `lucide-react@1.51.0`. Explizite Imports, einheitliche 1,75er Kontur, runde Enden, keine Emoji-Icons in Navigation, Sperren oder Aktionen. Emojis als echte Analyseinhalte bleiben erhalten. Die zehn gespeicherten Event-Icon-IDs ändern sich nicht; ihre bisherigen selbst definierten Pfade werden durch dieselbe Bibliotheksfamilie dargestellt. Lizenztext inklusive Feather-Anteilen: `LUCIDE_LICENSE.txt`; Vite übernimmt ihn unverändert als `THIRD_PARTY_NOTICES.txt` in den Produktionsbuild.

## Komponenten und Diagramme

- Kategorie-Karten: eigene Gradientfläche, großes Artwork, Titel/Unterzeile, Funktionszahl, Auswahlmarkierung. Intrinsisches Grid, eine Spalte auf den geprüften Smartphones und drei auf Desktop.
- Feature-Karten: spezifisches Icon, Kategoriefläche, kleiner sekundärer Tariftext direkt bei jeder Funktion, unverminderte Deckkraft auch bei gesperrten Funktionen.
- Dashboard: individuelle Akzentflächen, Icons, große Werte und unveränderte Kartenkonfiguration.
- Insight-Karten: Kategoriegradient, dezentes Sparkles-Badge, Display-Titel und dominante bestehende Kennzahlen.
- SVG-Charts: lokale eindeutige Gradienten-IDs über React `useId`, runde Balken, zurückhaltende Gridlines, rund endende Linien, ruhig eingeblendete Tooltips. Einzelreihen verwenden den Kategorieakzent; explizite A/B-Reihen behalten ihre Personenfarbe. Werte, Skalierung, Datenfenster und Tastatur-/Taplogik bleiben erhalten.
- Personen: gleich große Panels, Terracotta und warmes Taupe in Editorial Warm; Terracotta und Grün in Night Mode Chic; vorhandenes Foto oder 34-Pixel-Initialenavatar. Namen und Werte vermitteln Informationen zusätzlich zur Farbe.
- Timeline: horizontale, intern scrollbare Achse mit Monats-/Tagesgruppen. Ein Eventmarker je Ereignis, gleiche Tage werden ohne Überlappung gestapelt. Abstände sind für Lesbarkeit angepasst und keine proportionale Zeitmessung. Hover/Fokus zeigt eine kompakte Vorschau, Touch-Tap zunächst ebenfalls; erneuter Tap oder Vorschauklick öffnet das bestehende Detail. Escape, Pfeiltasten und Rückfokus bleiben bedienbar. Liste bleibt alternativ verfügbar.
- Dialoge: nativer Modalrahmen, Back-/Close-Icons, sticky Überschrift, eigene Scrollfläche, strukturierte Formularflächen und Iconpicker. Kein Änderungseingriff in Rückkehrstapel oder Persistenz.

## Typografie, Bewegung, Accessibility

Georgia/Palatino für editoriale Headlines; Segoe UI/System-Sans für Body, Steuerelemente und Zahlen. Keine externen Fonts oder Font-Netzwerkaufrufe. Title 34 px, reguläre Section-Headline 22 px, Kennzahlen 32–40 px; Diagrammbeschriftung weiterhin 12 px. Größen liegen im Tokenvertrag.

Kurze 150–220-ms-Übergänge für Karten, Auswahl, Theme-Flächen, Tooltips und Dialoge. Loading-Skeletons bewegen einen sanften Verlauf. `prefers-reduced-motion: reduce` deaktiviert Animationen und Transitions. Keine Bounce-/Gamification-Effekte.

Sichtbare Fokusrahmen, bestehende Tastatursteuerung und ARIA-Labels bleiben erhalten. Auswahl ist zusätzlich durch Check/„Aktiv“, `aria-pressed` oder `aria-current` erkennbar. Native Modals halten Fokus/Hintergrundsperre. Der programmatisch fokussierte Screencontainer zeigt keinen dekorativen Rahmen; bedienbare Elemente behalten einen sichtbaren Fokus.

Automatisierte Kontrastprüfung sichert mindestens 4,5:1 für die geprüften normalen Text-/Surface-, Personen-, Button-, Chartlabel-, Navigations- und Kategoriepaare in beiden Themes. Dies ist keine vollständige Zertifizierung aller möglichen Bild-/Browser-/Assistenztechnik-Kombinationen. Die reale Layoutprüfung und Grenzen stehen in `tests/baselines/DESIGN_BROWSER_BASELINE.md`.

## Gezielte Darstellungskorrekturen 1

Der Zeitraum ist ausschließlich im Dashboard neben dem Kontextbereich bedienbar; die bisherige Ereignis-Schnellaktion entfällt. Der bestehende chatbezogene Speicher und die Filtersemantik bleiben erhalten. Auf Detailseiten ersetzt ein kurzer Referenzhinweis bei eingeschränkter Auswahl den Selector.

Emoji DNA zeigt Top-5-Listen mit gleichen Personenspalten und Avataren. Persönliche Greatest Hits erscheinen als zwei Ranglisten mit den bisherigen Belegaktionen, gemeinsame Hits bleiben als Chart. Themen und Planarten verwenden vollständig lesbare Wertelisten. Planarten bleiben Prozentanteile, weil keine absoluten Anzahlen in diesem Ergebnis vorliegen. Silence nutzt ganzzahlige sichtbare Prozentwerte, unveränderte Rohwerte und dieselbe Tooltipformatierung. Die zusätzliche Pulse-Erklärung steht vollständig in Methodik.

Neue semantische Tokens: `--color-phase-hot`, `--color-phase-context`, `--opacity-phase-hot`, `--opacity-phase-context`, `--opacity-phase-hatch`, `--size-timeline-day`, `--size-timeline-preview`, `--font-size-emoji`. Hot ist eine gefüllte Fläche; Referenzkontext ist zusätzlich schraffiert und beschriftet. Die höhere Deckkraft im Night Mode erzeugt keine neue Cold-Klassifikation.

Historischer Nachweis: `../MIGRATION_STATUS_DESIGN_CORRECTIONS_1.md` und `../tests/baselines/DESIGN_CORRECTIONS_1_BROWSER_BASELINE.md`.

## Gezielte Darstellungskorrekturen 2

Kontext und Analysezeitraum stehen als gleich breite und gleich hohe Controls in einer gemeinsamen Zweispaltenzeile. Die Auswahl steht direkt im Zeitraum-Control; der bestehende native Dialoghost zeigt die sechs Optionen und Custom-Datumsfelder. Relative Auswahl endet am letzten gültigen Nachrichtenzeitstempel des aktiven Chats. Kalendergrenzen und Speicherverhalten: `../MIGRATION_STATUS_DESIGN_CORRECTIONS_2.md`.

Dashboard-Snapshots sind eine diskriminierte TypeScript-Union: geeignet mit `featureId`, `dashboardEligible: true`, `primaryValue`, `unit`, `shortLabel`; ungeeignet mit `dashboardEligible: false` und `reason`. Referenzprojektionen definieren die Kurzwerte explizit. Dashboard und Auswahl verwenden dieselbe Eignungsprüfung. Aktuell werden nur Prime Time, Chat Streak und Peak Day angeboten; ältere ungeeignete Auswahlen werden ohne Ersatzwert ausgeblendet. Die übrige Reihenfolge und chatbezogene Persistenz bleiben erhalten.

FREE/BASIC/PREMIUM sind sekundäre 11-px-Mini-Badges mit semantischem Rahmen, Hintergrund und Rundung. Das Schloss bleibt erhalten. Pro und Paywall zählen verfügbare Analysefunktionen anhand Registry und Zugangsmodell: Free 6, Basic +11 (17 insgesamt), Premium +9 (26 insgesamt) und der getrennt genannte dialogische Begleiter. Unavailable zählt nicht mit.

Prozentcharts zeigen `%` unmittelbar an Balkenwerten und Achsenticks. Silence bleibt ganzzahlig gerundet, Rohwerte bleiben erhalten. `useChartInteraction` steuert SVG-Reihen und ShareBar gemeinsam: Maus-Hover temporär, kein Pointer-Fokus durch reine Mausklicks; Tastaturfokus über `:focus-visible`; Touch-Tap öffnet, zweiter Tap oder Pointer außerhalb schließt. Fachliche Klickaktionen wie Wortbelege behalten ihren Rückfokus. Paletten und Tokens wurden nicht verändert.

What We Talk About öffnet je Thema einen Dialog mit vorhandenen Klassifikationen, Confidence und ID-basierten Nachrichtenlinks. Fehlende Themenzuordnung bleibt ausdrücklich unresolved; die allgemeine öffentliche Themenreferenz wird separat und ohne behauptete Zugehörigkeit gezeigt. Die vorhandene Rückkehrverwaltung erhält Thema, Fokus und Scrollposition. Keine neuen Klassifikationen oder veränderten Themenanteile.

Aktueller Nachweis: `../MIGRATION_STATUS_DESIGN_CORRECTIONS_2.md` und `../tests/baselines/DESIGN_CORRECTIONS_2_BROWSER_BASELINE.md`.

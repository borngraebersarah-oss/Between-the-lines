# Abschlussbericht: Theme-Grundlage und Schritt 3

Stand: 04.10.2026. Arbeitsverzeichnis: `C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen`.

**Die freigegebene Theme-Grundlage und Schritt 3 sind umgesetzt. Schritt 4 wurde nicht begonnen.** Die neue React-App besitzt jetzt App-Hülle, Chatbibliothek, Chatkontext, Dashboard-Grundseite, vollständige Kategorie-/Funktionsnavigation, Pro, Profil und Bottom Navigation. Der Begleiter besitzt ausschließlich ein geschütztes Navigationsziel mit Premiumvorschau. Ergebnisrenderer, gemeinsame Dialoge und echte Produktpipelines sind noch nicht migriert.

Es wurden keine Analyseformeln verändert, keine widersprüchlichen Referenzwerte korrigiert, keine privaten Chats in das Frontend übernommen und keine visuelle Modernisierung begonnen. Die drei Theme-Definitionen verwenden zunächst bewusst dieselbe Legacy-Palette.

## 1. Umgesetzte Dateien und Komponenten

### Neu angelegt

| Bereich | Dateien | Aufgabe |
|---|---|---|
| Theme-System | `src/theme/themes.ts`, `src/theme/themeStorage.ts`, `src/theme/ThemeProvider.tsx` | Zentraler typisierter Tokenvertrag, exakt drei Theme-IDs, Default und validierte Präferenzspeicherung. |
| App-Hülle / Zustand | `src/app/App.tsx`, `src/app/AppShell.tsx`, `src/app/AppContext.tsx`, `src/app/navigation.ts`, `src/app/useAsyncResource.ts` | React-Einstieg, Context/Reducer, typisierte Ziele, Chatguard, Kategorie-/Planzustand sowie isolierte asynchrone Ladezustände. |
| Gemeinsame Schritt-3-Komponenten | `src/components/BottomNavigation.tsx`, `src/components/ScreenParts.tsx`, `src/components/PlanCards.tsx`, `src/components/Paywall.tsx` | Drei/sechs Navigationsziele, Überschriften, Statusansichten, Tarifkennzeichnung und ausdrücklich freigegebene Planvorschau. |
| Screens | `src/screens/Home.tsx`, `src/screens/Dashboard.tsx`, `src/screens/Analysis.tsx`, `src/screens/FeatureDestination.tsx`, `src/screens/GlobalScreens.tsx` | Home, Dashboard-Grundseite, Analyseübersicht, vorläufige Funktionsziele sowie Pro, Profil und Begleiterzugang. |
| Navigationsmetadaten | `src/config/navigationConfig.ts` | Kategorien aus dem bestehenden Featurekatalog, vorhandene Symbole und deklarative globale/chatbezogene Navigation. |
| Öffentliche Demodaten | `src/data/fixtures/shellFixtures.ts`, `src/data/repositories/shellRepository.ts` | Erfundenes Bibliotheksinventar, gekennzeichnete Referenzkarten, chatbezogener Providervertrag und Datenzustände. |
| Stil | `src/styles/app.css` | Legacy-nahe Shell-Geometrie; Farben, Typografie, Abstände, Radien und Schatten über Tokens. |
| Integrationstests | `tests/integration/navigation.test.tsx`, `tests/integration/theme.test.tsx` | 29 neue Navigations-/Zustandstests und zwölf Theme-Prüfungen. |
| Browserprüfung | `tests/browser/step3-navigation.cua.js`, `tests/browser/README.md`, `tests/baselines/STEP3_BROWSER_BASELINE.md` | Ausführbare reale Browserregression, Anleitung und gemessene Baseline für 390/430 px. |
| Abschluss | `MIGRATION_STATUS_STEP_3.md` | Dieser Bericht. |

### Verändert

- `src/main.tsx`: bindet `ThemeProvider`, `App` und das neue semantische Shell-CSS statt der technischen Schritt-2-Startseite ein.
- `src/config/plans.ts`: bestehende Preise/Ränge um zentrale Labels, Reihenfolge, Zugriffsvergleich und Begleiter-Tier ergänzt. Keine fachliche Tarifänderung.
- `vitest.config.ts`: öffentliche Testsuche um `.test.tsx` erweitert.
- `MIGRATION_NOTES.md`: aktuelle Freigabe und Stoppgrenze auf Schritt 3 aktualisiert; Theme-Ergänzung und tatsächlichen Umfang dokumentiert.
- `README.md`: aktuelle Oberfläche, Themes und Testwege beschrieben.

`package.json`, Lockfile und Abhängigkeiten wurden nicht erweitert. Die kopierten Source-of-Truth-Dateien `AGENTS.md`, `CODEX_START_HERE.md` und die zwölf Spezifikationen bleiben unverändert. Der ursprüngliche Featurekatalog, bestehende Datenmodelle und Legacy-Adapter wurden nicht umgeschrieben. `src/styles/tokens.css` und `bootstrap.css` bleiben als bisheriger Stand erhalten, werden vom aktuellen Einstieg jedoch nicht mehr importiert.

Der private Originalprototyp bleibt unverändert; SHA-256 weiterhin `2dfd72e3251dd5a8fb0a4c971dd961a9eb0b5fe8fc33accad33e3abbdeb9bc2b`. Es gab keinen Commit oder Push; das Repository enthält weiterhin unversionierte Projektdateien.

## 2. Theme-Infrastruktur und Tokenstruktur

`themes.ts` ist die zentrale Definition. `ThemeId` ist eine geschlossene Union; `ThemeTokens` verlangt für jede Definition denselben vollständigen Satz semantischer CSS-Variablen.

| ID | Bezeichnung | Stand |
|---|---|---|
| `editorial-warm` | Editorial Warm | Default ohne gültige Nutzerwahl; Legacy-Werte. |
| `modern-insight` | Modern Insight | Technisch auswählbar über die zentrale API; vorerst dieselben Legacy-Werte. |
| `night-mode-chic` | Night Mode Chic | Technisch auswählbar über die zentrale API; vorerst dieselben Legacy-Werte. |

**Es gibt keinen vierten Systemmodus und keine Abfrage von `prefers-color-scheme` oder `matchMedia`.** Die unterschiedlichen zukünftigen visuellen Ausprägungen wurden bewusst noch nicht gestaltet. Insbesondere ist `night-mode-chic` in dieser Phase noch keine dunkle Palette. So kann die spätere Theme-Auswahl vorbereitet werden, ohne die Paritätsmigration optisch zu verändern.

| Semantischer Bereich | Beispiele aus dem Tokenvertrag |
|---|---|
| Hintergrund / Flächen | `--color-app-background`, `--color-background-secondary`, `--color-surface`, `--color-surface-warm`, `--color-surface-raised` |
| Text / Rahmen | `--color-text-primary`, `--color-text-secondary`, `--color-text-subtle`, `--color-text-inverse`, `--color-border`, `--color-border-strong` |
| Akzente | `--color-accent-primary`, `--color-accent-secondary`, `--color-accent-text`, `--color-accent-surface`, `--color-accent-border` |
| Personen | `--color-person-a`, `--color-person-b` und zugehörige Surface-Tokens |
| Status | `--color-success`, `--color-warning`, `--color-error`, `--color-info` |
| Charts | Primär-/Sekundärfarbe, Person A/B, dezente Farbe, `--color-chart-grid`, `--color-chart-label` |
| Schatten / Radien | `--shadow-card`, `--shadow-overlay`, `--radius-card`, `--radius-button`, `--radius-badge`, `--radius-feature`, `--radius-icon`, `--radius-sheet`, runde/pillenförmige Radien |
| Icons / Navigation | `--color-icon-background`, `--color-icon-foreground`, `--color-navigation-active`, `--color-navigation-inactive`, Navigationsfläche und -rahmen |
| Overlay / weitere Zustände | `--color-overlay-backdrop`, Headerfläche/-rahmen, Badgefarben, Notice- und Skeletonfarben |
| Typografie | Body-/Heading-Schriftfamilien; Größen für Body, Titel, Überschrift, Kennzahl, kleine Texte, Labels und Icons; Gewichte, Zeilenhöhen und Laufweiten |
| Maße / Abstände | Gemeinsame Abstandsskala, maximale App-/Text-/Sheetbreiten, Kontroll-/Navigations-/Kartenmaße, Rahmenbreiten, Ebenen und Zustandsdeckkraft |

Die Werte stehen ausschließlich zentral in der Theme-Grundlage; die neuen Produktkomponenten kennen keine Theme-Namen. Die neue Produkt-CSS-Datei enthält keine direkten Farbwerte oder Pixel-/em-/rem-Werte. Prozentwerte und Grid-Spalten definieren weiterhin das responsive Layout. Eine Architekturprüfung sichert Theme-Unabhängigkeit und die Auflösung aller verwendeten CSS-Tokens ab.

`ThemeProvider` liest beim Start die gültige Wahl und setzt die semantischen Variablen zentral am Dokument. `useTheme()` stellt `themeId`, `setTheme(...)` und `persistenceFailed` bereit. Es wird kein sichtbarer Theme-Switch und kein verstecktes Profil-Steuerelement gebaut.

## 3. Persistenz und bestehender lokaler Speicher

Die vorbereitete Theme-Wahl verwendet ausschließlich den neuen Schlüssel:

```text
zdz:preferences:theme:v1
```

Format: `{"version":1,"theme":"editorial-warm"}` beziehungsweise eine der beiden anderen gültigen IDs. Nur ein expliziter `setTheme(...)`-Aufruf schreibt die Wahl. Ein Start ohne Wahl schreibt keinen Default in den Speicher. Unbekannte IDs, falsche Versionen, beschädigtes JSON oder nicht lesbarer Speicher führen zum Default. Ein Schreibfehler lässt die Auswahl für die Sitzung wirksam und wird über `persistenceFailed` gemeldet.

Chatkontext, Kategorie und Planvorschau leben in dieser Phase im React-Arbeitsspeicher. Home löscht den Chatkontext; ein Reload startet wieder auf Home mit Free-Vorschau. Ein Wechsel zu Pro oder Profil erhält einen bereits aktiven Chat bis zum expliziten Home-Ausstieg.

Der bestehende Legacy-Schlüssel `zwischen_den_zeilen_proto_v05` und sein vorbereiteter Migrationsadapter bleiben unangetastet. Die Oberfläche aktiviert die Legacy-Speichermigration nicht und übernimmt keinen persönlichen Browserbestand aus anderen Origins oder Ports. Es entstehen keine neuen Chatkorrekturen, Events, Importe oder Analyseläufe.

## 4. Jetzt in React verfügbare Screens und Navigation

| Bereich | Verfügbares Verhalten | Phasengrenze |
|---|---|---|
| AppShell | Topbar, Inhaltsbereich, Fokus auf Seitenwechsel und feste Bottom Navigation. | Keine visuelle Neugestaltung. Infoaktion noch deaktiviert. |
| Home | Globale Demo-Chatbibliothek, Auswahl eines Chats. Keine Analyseergebnisse auf Home. | Import-CTA sichtbar, aber deaktiviert. |
| Dashboard | Chatbezogene Grundseite, drei anklickbare Referenzkarten im ersten Demo-Chat, Lade-/Fehler-/Wenig-Daten-/Unavailable-Zustände. | Konfiguration, Kontext, Ereignisse, Chatreader und Datenverwaltung deaktiviert. |
| Analyse | Sechs vollständige Kategorien im zweispaltigen Raster; alle 33 registrierten Funktionen über ihre Kategorie erreichbar. | Keine interne Anzeige von Stufe I / II.A. |
| Funktionsziel | Titel, Beschreibung, Tarif, Rückweg zur Kategorie und Navigation innerhalb der Kategorie. | 26 Ergebnisansichten noch nicht übertragen; sieben Features bleiben ausdrücklich `unavailable`. |
| Begleiter | Nur im aktiven Chat; vorhandener Premiumzugang und ausdrücklich simulierte Freischaltung. | Nach Freischaltung Platzhalter, kein Dialog und keine Antworten/LLM-Aufrufe. |
| Pro | Free-/Basic-/Premium-Karten und explizite Planvorschau. | Keine Abrechnung, kein Kauf; Preise weiterhin vorläufig. |
| Profil | Bestehende Einstellungsbereiche als erkennbare Grundseite. | Unfertige Sprach-/Hilfe-/Rechtsbereiche ohne aktive Dialoge; keine Theme-Auswahl. |
| Paywall | Gesperrte Funktion bleibt sichtbar und anklickbar; Planhinweis mit ausdrücklichem Wechsel öffnet das angeforderte Ziel. | Ausschließlich diese freigegebene Planvorschau; keine allgemeine Overlay-/Dialogmigration. |

Ohne aktiven Chat zeigt die Bottom Navigation exakt **Home, Pro, Profil**. Nach Chatwahl erscheinen **Home, Dashboard, Analyse, Begleiter, Pro, Profil**. Ein ausgewählter Chat öffnet immer sein Dashboard. Home setzt aktiven Chat, ausgewähltes Funktionsziel, Kategorie und offene Paywall zurück; die simulierte Planwahl bleibt während der Sitzung bestehen.

Die Formulierung zum Home-Ausstieg wird gemäß der ausdrücklich geforderten Testregel „Home setzt den Chatkontext zurück“ und den bestehenden Spezifikationen umgesetzt: **Die Rückkehr zu Home verlässt den Chatkontext.** Die Auswahl eines Chats von Home aus eröffnet dagegen den neuen Kontext.

Reducer und `ChatGuard` schützen chatbezogene Ziele. Direkte Einstiege in Dashboard, Analyse, Begleiter oder ein Funktionsziel ohne aktiven Chat werden auf Home zurückgeführt. Die Navigation bleibt wie im Prototyp intern; ein URL-Router und Browser-History-Navigation wurden nicht neu eingeführt.

Die native Paywall ist modal, sperrt Hintergrundscroll und unterstützt Escape, Schließen sowie Rückfokus. Ein Schließen ändert den Plan nicht. Ein bestätigter Vorschauwechsel ändert nur den lokalen Prototypzustand.

## 5. Daten, Feature-IDs und Mocks

Der unveränderte Katalog enthält alle 33 Feature-IDs und sechs Kategorien. Gesperrte Einträge werden nicht ausgefiltert. Vorhandene Tier-/Kategorieabweichungen bleiben gemäß LD-23 erhalten. `qdyn`, `flow`, `closeness`, `mineours`, `opening`, `report` und `changed` bleiben auch nach Premiumvorschau `unavailable`.

Die öffentliche Bibliothek enthält ausschließlich erfundene Metadaten: Alex & Robin, Kim und Weiterer Chat. Es werden keine Nachrichten, Originalnamen, Fotos, privaten Kontextdaten oder Eventnotizen angezeigt. Das erste Dashboard verwendet explizit gekennzeichnete, textfreie Legacy-Referenzkarten:

- Prime Time: `23–02 Uhr`, `38,9 % aller Nachrichten`.
- Chat Streak: `≥ 70 Tage`, `02. Juli–09. September`.
- Peak Day: `12. August`, `652 Nachrichten`.

Diese Werte werden unverändert als Mock-Referenzen angezeigt; sie sind keine berechneten Ergebnisse der erfundenen Demo-Chats. Der Widerspruch zwischen 652 und 653 wird nicht aufgelöst. Andere Demo-Chats erhalten keine fremden Ergebnisse, sondern eigene explizite Zustände. Verspätete Providerantworten nach einem Chatwechsel werden ignoriert.

`ShellRepository` kapselt Bibliotheks- und Dashboardabfragen und verwendet die vorhandene typisierte `ChatId`. Die bisherigen Nachrichten-/Evidence-/Eventadapter und Domain-Modelle bleiben erhalten. Die Shell benötigt keine privaten Nachrichten und lädt sie deshalb nicht. Ein echter Import, Backendzugriff, Reanalyse oder LLM-Aufruf wurde nicht ergänzt.

## 6. Test-, Build- und Typecheck-Ergebnisse

Abschlussläufe am **04.10.2026 ab 14:44 Uhr, Europe/Berlin**; Datengrenzenprüfung nach dem Build um 14:46 Uhr. Alle Befehle endeten mit Exit-Code 0.

| Prüfung | Ergebnis |
|---|---|
| `pnpm build` | Erfolgreich einschließlich Typecheck; 37 Module, Vite-Build 334 ms. |
| `pnpm typecheck` | Erfolgreich; separater `tsc --noEmit` ohne Diagnosen. |
| `pnpm test` | **62/62 Tests bestanden**, vier Dateien; 4,53 s. |
| `pnpm test:legacy` | **27/27 Tests bestanden**, drei Dateien; 18,46 s. |
| `pnpm check:privacy` | Erfolgreich: private Pfade ignoriert, 37 Quelldateien und drei Builddateien geprüft. |
| Reale Browserregression | **390×844 und 430×932 px bestanden**, keine Browserwarnungen/-fehler. Separater CUA-Lauf, nicht in die Vitest-Zahl eingerechnet. |

**Gesamt: 89/89 Vitest-Tests bestanden**, zusätzlich zwei vollständige mobile Browserläufe. Buildausgabe: HTML 0,40 kB, CSS 10,60 kB, JavaScript 249,25 kB; gzip 0,27 / 2,26 / 77,16 kB. Private Chatdaten sind nicht im Bundle.

Die 62 öffentlichen Tests verteilen sich auf:

- Elf unveränderte Adaptertests und zehn unveränderte Speichertests aus Schritt 2.
- 29 Navigations-/Zustandstests: globale Bibliothek; Dashboardöffnung; Home-Reset; direkte Chatguards; globale Ziele mit/ohne Chat; sechs Kategorien; alle 33 einzeln geöffneten Featureziele; gesperrte Funktionen/Paywall; Schließen ohne Planänderung; Planwechsel/Downgrade; alle sieben Unavailable-Features; Begleiterzugang; weiterhin deaktivierte Bereiche; Loading/Empty/Error/Retry; Chat-Isolation bei verspäteten Antworten.
- Zwölf Theme-Prüfungen: exakt drei vollständige Definitionen; zentrale Legacy-Werte; Default ohne Betriebssystemabfrage und ohne Start-Schreibzugriff; Wiederherstellung aller drei Wahlen; ungültige Daten/Versionen; explizite persistierte Auswahl und erneutes Laden; Speicherfehler; keine Theme-Namen oder hart codierten Farben in Produktkomponenten; vollständige Tokenreferenzen.

Die 27 Legacy-Tests bleiben unverändert: 21 Kernflow-/Werteprüfungen, fünf getrennte Beobachtungen unerwünschter Altfehler und ein Test vollständiger privater Datenübernahme. Ein bestandener Defektbeobachtungstest ist ausdrücklich keine Übernahme dieses Fehlers als Sollverhalten.

Die Browserfunktion prüft beide Breiten, drei/sechs Navigationsziele, Dashboardstart, alle Kategorien/IDs, horizontale Überläufe, Navigationsflächen, native Modalität, Hintergrundscrollsperre, Escape/Rückfokus, Planwechsel sowie Home/Pro/Profil. Gemessene Navigationsflächen: 62,5×68 px bei 390 px und ca. 69,16×68 px bei 430 px; alle sechs Kategorien liegen über der Bottom Navigation. Details stehen in `tests/baselines/STEP3_BROWSER_BASELINE.md`.

Testgrenzen: jsdom ersetzt die native Dialog-Top-Layer-Implementierung; tatsächlicher Fokus und Modalität werden deshalb zusätzlich im Browser geprüft. Die Browserprüfung verwendet Desktop-Viewport-Emulation, keine physische Touchhardware. Ein pixelgenauer Screenshot-Diff und Tests noch nicht migrierter React-Produktflows sind nicht Teil dieses Standes.

## 7. Abweichungen gegenüber dem Legacy-Prototypen

1. **Öffentliche Demodaten:** Erfundenes Bibliotheksinventar und gekennzeichnete Referenzkarten ersetzen private Namen, Nachrichten und Daten. Home enthält keine Analysewerte.
2. **Bewusste Phasengrenzen:** Funktionsziele enthalten noch keine Ergebnisrenderer. Der Begleiter zeigt nach Premiumzugang nur einen Platzhalter. Import, Dashboardkonfiguration, Kontext, Ereignisse, Chatviewer und Datenverwaltung sind deaktiviert statt auf noch nicht migrierte Dialoge zu verweisen.
3. **Profil / Topbar:** Nicht funktionsfähige Einstellungen und Rechtsbereiche sind als noch nicht verfügbar erkennbar. Das gemischte alte Versionsbadge wird als `PROTOTYPE` angezeigt. Bei 390 px mit Desktop-Scrollbar kann die Topbar umbrechen, ohne horizontalen Überlauf.
4. **Technische Zugriffssicherung:** Kein zufälliger Chat als Fallback, keine fremden Dashboardwerte bei Chatwechsel. Die global vermischten Legacy-Daten aus LD-07 werden nicht als gewünschtes Verhalten übernommen.
5. **Zustände:** Die Shell besitzt nachvollziehbare asynchrone Loading-/Error-/Retry-/Empty-Zustände. Fehler führen nicht zu erfundenen Ergebnissen. Die Loading-Anzeige verwendet statische Skeletons; eine Animationsmigration ist noch nicht erfolgt.
6. **Paywall:** Native modale Dialogsemantik statt eines globalen HTML-Overlays; Inhalt, ausdrückliche Planvorschau und angefordertes Navigationsziel bleiben erhalten. Dies zieht keine anderen Dialoge aus Schritt 4 vor.
7. **Theme-Fundament:** Semantische Variablen statt direkter Legacy-Farbbezüge. Alle drei IDs sehen vorläufig gleich aus; kein automatischer Dark Mode und keine sichtbare Auswahl.

App-Hintergrund, Basisfont mit 14 px, weiße Karten, 14-px-Kartenradius, bestehender Schatten, 94-px-Kategorien und 68-px-Navigationshöhe wurden mit der privaten Referenz verglichen. Farben und grundlegende Geometrie sind Legacy-nah; wegen Demo-Inhalten, Statushinweisen und technischen Anpassungen wird keine vollständige Pixelparität behauptet.

## 8. Bekannte offene Punkte und nicht migrierte Bereiche

- **Schritt 4 bleibt offen:** gemeinsamer OverlayHost, Kontext-/Eventdialoge, Dashboardkonfiguration und Reihenfolge, Chatviewer, Belege, Datenverwaltung, Import-Wizard sowie zugehörige Rückwege und Persistenzanbindung.
- **Schritt 5 bleibt offen:** tatsächliche Analyseansichten, Charts, Personenvergleiche, Methodik, Belegnavigation und die späten v0.7-Renderer.
- **Schritt 6 bleibt offen:** Begleiter-Mockdialog, Life-Event-Suche, Entwicklerpanel und UX-Testmodus. Keine LLM-Integration.
- Keine vollständigen Beleglisten, keine Reanalyse, kein Korrekturjournal, kein globaler Zeitraumfilter, kein individuelles Schlafprofil in der UI und keine neue Analysefunktion.
- Keine fachliche Auflösung widersprüchlicher Zahlen, Tierentscheidungen oder der übrigen LD-01–LD-27. Der kaputte UX-Test-Overlaymodus wurde nicht migriert.
- Tatsächlicher persönlicher Browserstorage ist nicht an die neue Oberfläche angeschlossen; die sichere Übernahme bleibt vorbereitet.
- Unterschiedliche Theme-Paletten, sichtbare Auswahl, vollständige UI-Modernisierung und endgültige Designabnahme folgen erst in der gesondert freizugebenden Phase nach der Paritätsmigration.
- Authentifizierung, Backend, Datenbank, Abrechnung und Deployment bleiben unentschieden beziehungsweise unimplementiert.

## 9. Exakter lokaler Startbefehl

Die Abhängigkeiten sind im aktuellen Arbeitsverzeichnis bereits installiert. PowerShell:

```powershell
Set-Location -LiteralPath 'C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen'
& 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' '.\node_modules\vite\bin\vite.js' --host 127.0.0.1 --port 5173 --strictPort
```

Danach `http://127.0.0.1:5173` öffnen. `Ctrl+C` beendet den Server. Der feste Port verhindert einen unbemerkten Originwechsel. Bei eingerichteter Node-/pnpm-Umgebung genügt alternativ im Projekt `pnpm dev`.

**Stopp nach Schritt 3. Schritt 4 beginnt erst nach ausdrücklicher Nutzerfreigabe.**

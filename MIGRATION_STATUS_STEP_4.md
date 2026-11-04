# Abschlussbericht – Schritt 4

Stand: 04.10.2026. Schritt 4 „Gemeinsame Interaktionen und Dialoge“ ist umgesetzt. Schritt 5 wurde nicht begonnen. Analyseformeln und Referenzzahlen wurden nicht verändert; alle drei Theme-IDs verwenden weiterhin dieselben Paritätswerte. Keine sichtbare Theme-Auswahl und keine visuelle Modernisierung.

## 1. Neu erstellte Dateien

| Dateien | Aufgabe |
|---|---|
| `src/domain/interactions.ts` | Chatbezogene Interaktionshülle, Dialog-/Readerzustand, Kontext-/Eventergänzungen, eindeutige oder unresolved Nachrichtenreferenzen. |
| `src/config/interactionConfig.ts` | Vorhandene Kontextoptionen, Eventkategorien/-icons und Importquellen. |
| `src/data/fixtures/interactionFixtures.ts` | Ausschließlich synthetische, je Chat getrennte Teilnehmer, 185 Nachrichten mit stabilen IDs, zehn Beispielbelege, eine Pause und zwei Eventbeispiele. |
| `src/data/persistence/interactionStorage.ts` | Validierter, versionierter Interaktionsspeicher je Chat sowie Demo-Bibliothek. |
| `src/data/repositories/chatReader.ts` | ID-Auflösung, Suche und begrenzte Readerfenster auf bestehendem Nachrichtenrepository. |
| `src/app/InteractionsContext.tsx` | Zentraler Controller: Chatzuordnung, Dialogstapel, Rückkehr, Reader, Erfolg-/Fehlermeldungen und Persistenzzugriff. |
| `src/components/DialogFrame.tsx`, `src/components/OverlayHost.tsx` | Nativer modaler Rahmen, Hintergrundsperre, Escape, Scroll-/Fokuswiederherstellung und zentraler Host. |
| `src/interactions/DashboardSettings.tsx` | Kartenwahl, Ausblenden und Reihenfolge. |
| `src/interactions/ContextForm.tsx` | Bestehende Kontextfelder, gemeinsamer Schlafhinweis, optionale lokale Personenbilder. |
| `src/interactions/EventDialogs.tsx` | Eventübersicht, Detail, Anlegen/Bearbeiten, Bestätigen, Verwerfen und Löschen. |
| `src/interactions/EvidenceDialogs.tsx` | Beispielbelege, stabile Nachrichtensprünge, Ausschluss/Wiederaufnahme. |
| `src/interactions/ReviewDialogs.tsx` | Pausenprüfung und Hot-&-Cold-Kontextprüfung. |
| `src/interactions/ImportDialogs.tsx` | Datenverwaltung, getrennte Add-/Replace-Simulation, Import-Wizard. |
| `src/interactions/FeatureInteractions.tsx` | Zugriff auf gemeinsame Interaktionen aus vorhandenen Featurezielen; keine Analyse-Renderer. |
| `src/screens/ChatReader.tsx` | Suchbarer Reader mit Originalfokus, früher/später und Rückkehr. |
| `tests/integration/interactionStorage.test.ts` | 13 öffentliche Tests für Speicher, Fehler, Isolation, unresolved und Reader-IDs. |
| `tests/integration/interactions.test.tsx` | 18 öffentliche React-Integrationstests der migrierten Abläufe. |
| `tests/browser/step4-interactions.cua.js` | Wiederverwendbare reale Browserabläufe mit UI-Aktionen und lesenden DOM-Messungen. |
| `tests/baselines/STEP4_BROWSER_BASELINE.md` | Tatsächlich ausgeführte Browserprüfungen und Messwerte für beide Mobilgrößen. |
| `MIGRATION_STATUS_STEP_4.md` | Dieser Bericht. |

Neuer Produktordner: `src/interactions/`. Die übrigen Dateien ergänzen die bestehende Schritt-2-/3-Struktur.

## 2. Veränderte Dateien

| Dateien | Änderung |
|---|---|
| `src/app/App.tsx`, `src/app/AppShell.tsx` | Interaktionsprovider/Host anbinden, chatbezogene Speicherfehler behandeln, Reader anzeigen. |
| `src/screens/Home.tsx` | Simulierten Wizard aktivieren; gespeicherte neue Demo-Chats in Bibliothek laden. |
| `src/screens/Dashboard.tsx` | Persistente Kartenkonfiguration verwenden, Kontext-/Event-/Reader-/Datenaktionen aktivieren. |
| `src/screens/FeatureDestination.tsx` | Vorhandene Beleg-, Pausen-, Event- und Kontextprüfungen zugänglich machen. |
| `src/components/Paywall.tsx` | Bestehende Planvorschau in gemeinsamen Dialograhmen einbinden. |
| `src/data/fixtures/shellFixtures.ts` | Neue simulierte Chats als ohne gespeicherte Analyse behandeln. |
| `src/theme/themes.ts` | Semantische Größen-/Radius-/Layer-Tokens für Dialoge, Fotos und Toasts ergänzen; alle Themes identisch. |
| `src/styles/app.css` | Paritätsstile für Dialoge, Kontexttabs, Formulare, Belege und Reader mit semantischen Tokens. |
| `tests/integration/navigation.test.tsx` | Zwei bisherige Phasengrenzen aktualisieren: aktivierte Schritt-4-Aktionen und konfigurierte Karten ohne Ergebniswert. |
| `tests/integration/theme.test.tsx` | Theme-Unabhängigkeit und Tokenverwendung auch im neuen Interaktionsordner prüfen. |
| `tests/characterization/extracted-data.test.js` | Alle 33 aufgelösten Legacy-Belege zusätzlich gegen den neuen Reader prüfen. |
| `tests/browser/README.md` | Durchführung und Grenzen der Schritt-4-Browserregression. |
| `MIGRATION_NOTES.md`, `README.md`, `KNOWN_LEGACY_DEFECTS.md` | Freigabe-/Abschlussstand, Persistenz, Mapping-Lücke und weiterhin offene Produktpunkte. |

Keine Änderungen an `AGENTS.md`, `CODEX_START_HERE.md`, den Spezifikationen unter `docs/`, Analyseformeln, Featurekatalog, Package-Versionen oder dem privaten Originalprototypen. `dist/` wurde als ignoriertes Buildartefakt neu erzeugt. Kein Commit oder Push; das Repository besitzt weiterhin keinen initialen Commit, daher bezeichnet `git status` auch frühere Projektdateien als untracked. Die obige Liste beschreibt die Änderungen dieses Schritts.

## 3. Migrierte Interaktionen

- Ein zentraler OverlayHost stellt jeweils einen nativen Dialog dar. Ein chatbezogener Stapel merkt sich Rückkehrziel, Scrollposition und Fokustoken. Escape und Schließen kehren zur übergeordneten Ansicht zurück; der Hintergrund ist gesperrt.
- Dashboardkarten lassen sich ein-/ausblenden sowie nach oben/unten verschieben. Jede Änderung wird für den betreffenden Chat gespeichert. Eine leere Auswahl bleibt nach Reload leer. Gesperrte Karten bleiben sichtbar und im Konfigurationsdialog als gesperrt markiert.
- Chat-Kontext enthält Beziehung/Familienrolle, Dauer, kulturellen Kontext, Kommunikationsstil, weiteren Kontext, das vorhandene gemeinsame Schlafzeitenpaar und optionale lokale Fotos. Speichern schließt den Dialog und meldet Erfolg. Der direkte Wechsel zwischen Kontext und Ereignissen bleibt erhalten. Keine individuellen Schlafprofile.
- Ereignisse: Übersicht mit Notiz, Detail mit Notiz/Belegen, Anlegen und Bearbeiten aller sechs Felder Kategorie/Titel/Von/Bis/Ort/Notiz. AI-Vorschläge werden bestätigt oder als `rejected` verworfen; manuelle/bestätigte Events werden gelöscht. Bearbeiten und Speichern eines Vorschlags bestätigt ihn wie im Legacy-Ablauf.
- Belegliste: gespeicherter Ausschluss und Wiederaufnahme, sichtbarer Hinweis auf fehlende Reanalyse, Sprung zur exakten Message-ID. Unaufgelöste Altbelege bleiben als `unresolved` erkennbar und erhalten keinen geratenen Sprung.
- Pausenprüfung: Originalnachricht vor/nach der Pause, Ausschluss/Wiederaufnahme und Eventanlage für den vorhandenen Zeitraum. Hot & Cold: bestätigte Treffen öffnen und deren bestehendes Kontext-/Ausklammerungsflag speichern.
- Chatreader: Text-/Datumszeichensuche, nächster Treffer mit Umlauf, markierte/fokussierte Message-ID, höchstens 90 Nachrichten, früher/später um 70 Positionen, Rückkehr in die auslösende Analyse oder den auslösenden Dialog samt Fokus. Positionsberechnung dient nur dem Fenster, niemals als gespeicherte Referenz.
- Datenverwaltung und Wizard: Quelle wählen, synthetische Teilnehmer prüfen, bestehende Kontextfelder bearbeiten, vor/zurück/abbrechen. Ein Abschluss legt ausschließlich einen gekennzeichneten Demo-Chat an. Add ergänzt, Replace ersetzt ausschließlich simulierte Quellenmetadaten.
- Vorhandene Erfolgsmeldungen sind über den Controller erreichbar; Schreibfehler melden ausdrücklich Misserfolg und schließen den jeweiligen Speicherdialog nicht als erfolgreich ab.

## 4. Datenmodelle und Persistenz

Die bestehenden Typen `Message`, `Participant`, `EvidenceItem`, `LifeEvent`, `RelationshipContext`, `DashboardConfig`, `ImportSource` und gebrandeten IDs werden weiterverwendet. `adaptLegacyEvent` und `createMemoryMessageRepository` bleiben die vorhandenen Adaptergrundlagen. `ChatContext` ergänzt ausschließlich vorhandene Legacy-Felder (gemeinsame Schlafzeiten/Fotos), `InteractionEvent` ergänzt ungelöste Referenzen und vorhandene Hot-&-Cold-Wirkung. Alle 33 Feature-IDs bleiben unverändert. `qdyn`, `flow`, `closeness`, `mineours`, `opening`, `report`, `changed` bleiben unavailable.

| Storage-Key | Inhalt / Verwendung |
|---|---|
| `zdz:chat-interactions:v1:<encodeURIComponent(chatId)>` | `schemaVersion: 1`, `revision`, `chatId`, Dashboard, Kontext, Events, Quellenmetadaten, Evidence-/Pausenflags. Aktiviert für migrierte Interaktionen. |
| `zdz:demo-library:v1` | `schemaVersion: 1`, Metadaten der per Wizard neu angelegten synthetischen Chats. |
| `zdz:preferences:theme:v1` | Unveränderte separate Theme-Präferenzgrundlage aus Schritt 3; kein sichtbarer Schalter. |
| `zwischen_den_zeilen_proto_v05` | Originalschlüssel. Wird durch die React-Interaktionen weder gelesen noch überschrieben oder gelöscht. |
| `zwischen_den_zeilen_proto_v05:backup-before-v1` | Vorhandener Legacy-Vorbereitungsadapter; React aktiviert ihn nicht. |
| `zdz:migration:v1:<encodeURIComponent(chatId)>` | Vorhandene Übergangshülle der expliziten Legacy-Vorbereitung; keine automatische Aktivierung in der React-App. |

Ein tatsächlich fehlender Interaktionsschlüssel startet mit einem eindeutig synthetischen Fixture; beim Lesen wird nichts geschrieben. Ein vorhandener Datensatz wird vollständig auf Version, Chatzuordnung, Karten, Event-/Quellenidentitäten, Referenzen, Fotos und Ausschlussflags geprüft. Defektes JSON, unbekannte Versionen oder fremde IDs erzeugen Fehler; es werden keine Ersatzdaten geschrieben. Leere Events, Quellen und Kartenauswahl bleiben leer. Speichern validiert vor dem Schreibzugriff, erhöht die Revision und prüft das Ergebnis. Quota-/Zugriffsfehler und erkannte veraltete Schreibstände werden gemeldet.

Dialog-, Reader-, Such-, Fokus- und Toastzustand tragen eine explizite Chat-ID; ein Navigations-/Chatwechsel verwirft die zugehörige offene UI-Sitzung. Aktive Chatauswahl und Planvorschau werden weiterhin nicht persistiert. Nach Reload wird der Chat über Home erneut gewählt; seine gespeicherten Interaktionen bleiben erhalten.

**Nicht eindeutig spezifizierte Übernahme, deshalb gestoppt:** Der globale Legacy-Browserspeicher lässt sich keinem öffentlichen Demo-Chat eindeutig zuordnen. Hier wurde keine Mapping-Regel erfunden und keine automatische Migration vorgenommen. Auch unresolved Eventtexte werden nicht über Textanfang, Zeitnähe oder Arrayposition zu Message-IDs gemacht. Eine spätere explizite Übernahme braucht eine bestätigte Chatzuordnung und ein geprüftes Identitätsmanifest.

Technische Grenze: LocalStorage ersetzt jeweils einen Chatdatensatz, bietet aber keine Transaktion über Chatdatensatz und Bibliothekskey. Die Demo-Anlage schreibt den Chat zuerst und dann den Katalog. Schlägt die Katalogspeicherung fehl, bleibt der Wizard mit Fehlermeldung offen; ein erneuter Versuch ist möglich. Es kann ein noch nicht gelisteter synthetischer Datensatz verbleiben. Keine Synchronisierung mehrerer Fenster oder vollständiges Korrekturjournal implementiert.

## 5. Tests und Build

| Prüfung | Ergebnis |
|---|---|
| `pnpm typecheck` | Bestanden, TypeScript strict einschließlich `noUncheckedIndexedAccess` und `exactOptionalPropertyTypes`. |
| `pnpm build` | Bestanden, Typecheck und Vite-Produktionsbuild. |
| `pnpm test` | 93 öffentliche Tests in sechs Dateien bestanden: 62 fortgeführte Adapter-/Persistenz-/Navigations-/Themeprüfungen und 31 neue Speicher-/Reader-/Interaktionsprüfungen. |
| `pnpm test:legacy` | 28 Tests in drei Dateien bestanden; ursprüngliche Kernflows/Werte/Defektbeobachtungen sowie zusätzliche Prüfung aller 33 Evidence-Ziele im neuen Reader. |
| `pnpm check:privacy` | Bestanden: private Pfade ignoriert, 53 Quelldateien und drei Builddateien geprüft. |
| Reale Browserprüfung | Die 15 angeforderten Ablaufgruppen bei 390×844 und 430×932 bestanden; zusätzlich Kontexttabs und bestehende Paywall geprüft. |

Die neuen öffentlichen Tests verwenden ausschließlich synthetische Daten. Sie sichern insbesondere Reload, leere Listen, Chat-Isolation, corrupt/unknown storage, Quota-Konflikte, unveränderten Originalkey, Statusunterschied Verwerfen/Löschen, sämtliche Eventfelder/Notizen, exakte Message-IDs bei Textduplikaten, begrenzte Fenster und Rückkehrziele. Native Scroll-/Top-Layer-/Fokusprüfung erfolgt zusätzlich im realen Browser; jsdom simuliert dafür nur die Dialogmethoden.

Details: `tests/baselines/STEP4_BROWSER_BASELINE.md`. Gemessen wurden intern scrollende Dialoge mit 356/396 px Breite und maximal 717,39/792,19 px Höhe; keine horizontalen Seitenüberläufe. Escape/Rückfokus und unveränderte Hintergrundscrollposition bestanden. Browserkonsole im Abschlussabruf ohne Warnungen/Fehler. Der Prüftab wurde geschlossen und die Viewportübersteuerung zurückgesetzt.

## 6. Bekannte Abweichungen und bewusst nicht übernommene Fehler

- Die öffentliche Oberfläche enthält synthetische Nachrichten und Belege statt privater Originalchats. Die drei bisherigen Dashboardwerte sind weiterhin ausdrücklich gekennzeichnete Referenzen. Neu ausgewählte Karten ohne gespeicherten Wert zeigen einen Hinweis; neue Demo-Import-Chats erhalten keine erfundene Analyse.
- Keine pixelgenaue Komplettparität behauptet: Native Dialoge ersetzen globale Legacy-Overlayhandler; der Wizard verwendet den gemeinsamen Dialograhmen. Palette, semantische Tokens und bestehende Layoutsprache bleiben im Paritätszustand. Die Integration berücksichtigt mobile Scroll-/Fokusanforderungen.
- Globale Datenvermischung (LD-07), Wiederherstellung gelöschter Defaultlisten/verschluckte Storagefehler (LD-16) und Verwerfen ohne Ablehnungsstatus (LD-15) wurden im migrierten Umfang bewusst nicht übernommen.
- ID-basierte Sprünge ersetzen heuristische Verknüpfungen (LD-06/18). Alle 33 zuvor aufgelösten Legacy-Belegreferenzen wurden lokal auf dasselbe Originalziel geprüft. Bisher nicht eindeutig auflösbare Eventbelege bleiben unresolved.
- Der defekte UX-Test-Overlaymodus (LD-04/24) wurde nicht übernommen und nicht vorgezogen. Das private Original bleibt unverändert.
- Widersprüchliche Altzahlen (LD-01) wurden weder vereinheitlicht noch durch neue Formeln „korrigiert“.

## 7. Weiterhin offen / simuliert

**Echte Reanalyse fehlt ausdrücklich.** Evidence-/Pausenflags und Hot-&-Cold-Kontextwirkung werden gespeichert, Kennzahlen bleiben unverändert. UI-Hinweis und LD-02/PM-05 halten diese Grenze fest. Kein erfundener Analyseerfolg, kein neuer Algorithmus und kein vollständiges Korrekturjournal.

**Import bleibt ausdrücklich simuliert.** Keine Parser, echte Deduplizierung, Append-/Replace-Verarbeitung von Nachrichten oder Teilnehmererkennung. Quellenmetadaten ändern sich, der synthetische Nachrichtenbestand bleibt unverändert. Die Teilnehmer werden als Demo-Personen bezeichnet. Neuer Demo-Chat bedeutet keine erfolgreiche Analyse hochgeladener Daten.

Weitere Grenzen: Die Beleglisten enthalten nur die vorhandenen synthetischen Beispielgruppen, keine vollständige paginierte/gefilterte Belegmenge. Die Pause und AI-Eventvorschläge sind Fixtures, keine neu berechneten Erkenntnisse. SleepProfile pro Teilnehmer, globaler Zeitraumfilter, Gruppen-/Dyadenauswahl, Raincheck-Review/Plantracking und erweiterte Originalverlinkung noch nicht migrierter Analysen bleiben im Post-Migration-Backlog.

**Schritt 5 nicht begonnen:** Analyse-Renderer, Charts, vollständige Ergebnis-/Methodikdarstellung und die vorgesehenen Analysepakete fehlen weiterhin. Featureziele dienen nur als vorhandene Navigation und Einstieg in die gemeinsamen Schritt-4-Interaktionen.

**Schritt 6 nicht begonnen:** Begleiterdialog, LLM, echte Life-Event-Suche, Developerpanel und UX-Testwerkzeuge wurden nicht implementiert. Kein Backend-/Cloudspeicher, keine Authentifizierung oder Bereitstellung ergänzt.

## 8. Exakter lokaler Start

Mit installiertem Node 24+ und pnpm 11.19.0:

```powershell
Set-Location -LiteralPath 'C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen'
pnpm dev --host 127.0.0.1
```

In dieser Umgebung direkt mit dem vorhandenen gebündelten Runtime-Pfad, ohne globale Installation:

```powershell
Set-Location -LiteralPath 'C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen'
$env:PATH = 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
& 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs' run dev --host 127.0.0.1
```

App: `http://127.0.0.1:5173/`. Der private Referenzserver wird hierfür nicht benötigt. **Stopp nach Schritt 4. Schritt 5 erst nach ausdrücklicher Freigabe.**

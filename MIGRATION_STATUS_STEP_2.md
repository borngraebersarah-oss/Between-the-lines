# Abschlussbericht: Migrationsschritte 1 und 2

Stand: 04.10.2026. Arbeitsverzeichnis: `C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen`.

**Die Arbeiten enden nach Schritt 2. Schritt 3 wurde nicht begonnen.** Die neue App ist ein startfähiges Vite-/React-/TypeScript-Gerüst mit Datenmodellen und vorbereiteten Adaptern. Sie zeigt bisher nur eine technische Startseite. Die Produktansichten und ihre Interaktionen wurden noch nicht nach React übertragen; vollständige Funktions- oder UI-Parität ist daher noch nicht erreicht.

Dieser Bericht dokumentiert den vorhandenen Stand. Für diesen Abschlussauftrag wird ausschließlich diese Markdown-Datei angelegt und werden die bestehenden Prüfungen erneut ausgeführt. Anwendungscode, Konfiguration, Tests, Originalprototyp und Spezifikationen werden nicht geändert. Der Build erzeugt `dist/` erneut; Testwerkzeuge können ignorierte Cache-Dateien aktualisieren. Es erfolgt kein Commit oder Push.

Abschließende SHA-256-Kontrolle: Alle 55 zuvor vorhandenen, nicht ignorierten Projektdateien sind gegenüber dem Beginn dieses Abschlussauftrags unverändert. Hinzu kommt ausschließlich dieser Bericht.

## 1. Neu erstellte und veränderte Dateien und Ordner

Die Angaben beziehen sich auf die bisherige Umsetzung von Schritt 1 und 2. Git führt den vorhandenen Projektbestand derzeit als unversionierte Dateien; eine Commit-Differenz zu einem früheren Implementierungsstand liegt nicht vor. `MIGRATION_NOTES.md` wurde aus der Planungsphase weitergeführt und ergänzt. Die folgenden Projektdateien wurden im aktuellen Arbeitsverzeichnis angelegt beziehungsweise aus dem Handoff kopiert.

| Bereich | Dateien | Zweck / Herkunft |
|---|---|---|
| Verbindliche Unterlagen | `AGENTS.md`, `CODEX_START_HERE.md` | Unveränderte Kopien aus dem Handoff, dauerhaft lokale Source of Truth. |
| Spezifikationen | `docs/AI_COMPANION_SPEC.md`, `docs/ANALYSIS_RULES.md`, `docs/DATA_MODEL.md`, `docs/DESIGN_SPEC.md`, `docs/FEATURE_MATRIX.md`, `docs/IMPORT_PERSISTENCE.md`, `docs/OPEN_DECISIONS.md`, `docs/PRODUCT_SPEC.md`, `docs/REFERENCE_MAP.md`, `docs/SECURITY_PRIVACY.md`, `docs/UX_RULES.md`, `docs/UX_TEST_PLAN.md` | Alle zwölf nicht privaten Spezifikationen unverändert kopiert; zusammen mit den beiden Startdateien zuvor per Hash mit dem Handoff verglichen. |
| Migration / Dokumentation | `MIGRATION_NOTES.md`, `KNOWN_LEGACY_DEFECTS.md`, `README.md` | Aktualisierter Plan einschließlich Backlog und Phasengrenze; Defektregister LD-01 bis LD-27; Projektanleitung. |
| Dieser Abschlussauftrag | `MIGRATION_STATUS_STEP_2.md` | Neuer Bericht mit erneut ausgeführten Prüfungen. |
| Projektbasis | `package.json`, `pnpm-lock.yaml`, `.npmrc`, `index.html`, `tsconfig.json`, `vite.config.ts`, `vitest.config.ts`, `vitest.legacy.config.js` | Exakt gepinnte Abhängigkeiten, React-Einstieg, strenger Typecheck und getrennte Testsuiten. |
| Umgebung / private Ablage | `.env.example`, `.gitignore` | Beispielkonfiguration aus dem Handoff; Ausschluss privater Daten, lokaler Umgebungswerte, Build- und Testartefakte. |
| Lokale Werkzeuge | `scripts/prepare-legacy.mjs`, `scripts/extract-legacy.mjs`, `scripts/serve-legacy.mjs`, `scripts/check-private-boundary.mjs` | Geprüfte private Referenz vorbereiten, extrahieren, separat bereitstellen und Datengrenze prüfen. |
| Einstieg / Stil | `src/main.tsx`, `src/styles/bootstrap.css`, `src/styles/tokens.css` | Technische Startseite; beide ursprünglichen CSS-Tokenblöcke unverändert extrahiert. |
| Produktmetadaten | `src/config/featureRegistry.ts`, `src/config/plans.ts` | 33 Feature-IDs mit Metadaten und Verfügbarkeit; vorläufige Planmetadaten. |
| Fachliche Verträge | `src/domain/ids.ts`, `src/domain/models.ts` | Typisierte Identitäten und Datenmodelle. |
| Legacy-Adapter | `src/data/legacy/messages.ts`, `src/data/legacy/evidence.ts`, `src/data/legacy/events.ts`, `src/data/legacy/state.ts`, `src/data/legacy/validation.ts` | Validierte Übernahme von Nachrichten, Referenzen, Ereignissen und Altzustand. |
| Speicher / Repositories | `src/data/persistence/legacyStorage.ts`, `src/data/repositories/contracts.ts`, `src/data/repositories/memoryMessages.ts` | Explizite Vorbereitung des Altspeichers; Repository-Verträge und Nachrichtenrepository im Arbeitsspeicher. |
| Öffentliche Testdaten | `src/data/fixtures/synthetic.ts` | Ausschließlich synthetische Daten. |
| Baselines | `tests/baselines/STEP1_BASELINE.md`, `tests/baselines/legacy-reference.json` | Nachweis vor dem React-Umbau; Quellhash, Screens, IDs, Zählwerte und sichtbare Referenzwerte ohne Chattexte. |
| Private Referenztests | `tests/characterization/legacy-harness.js`, `tests/characterization/core-flows.test.js`, `tests/characterization/legacy-defects.test.js`, `tests/characterization/extracted-data.test.js` | Isoliertes Legacy-DOM, Kernflows, getrennte Defektbeobachtungen und vollständige Datenübernahme. |
| Öffentliche Integrationstests | `tests/integration/adapters.test.ts`, `tests/integration/persistence.test.ts` | Adapter- und Speicherverhalten mit synthetischen Daten. |

Zusätzlich bestehen ausschließlich lokal und Git-ignoriert:

- `private-test-data/legacy/index.html`: unveränderte private Originalkopie.
- `private-test-data/extracted/legacy-data.json`: ursprüngliche Daten, Ergebnisse und Zustände.
- `private-test-data/extracted/normalized.json`: normalisierte Nachrichten, Evidence, Events und Zustand.
- `private-test-data/extracted/identity-manifest.json`: dauerhaftes Manifest der Nachrichtenzuordnung.
- `node_modules/` und `dist/`: installierte Abhängigkeiten und generierter Produktionsbuild.

Private Chats und der private Legacy-Prototyp werden nicht öffentlich committet. Sie werden nicht in den Frontend-Build importiert. Vite hat kein `public/`-Verzeichnis und sperrt private Pfade; der separate Legacy-Server gehört nicht zur neuen App.

## 2. Bereits überführte Teile des Legacy-Prototypen

| Teil | Tatsächlicher Stand |
|---|---|
| Featurekatalog | Alle 33 Keys einschließlich Kategorien, Beschreibungen, Tiers, Stufen und Kostenkennzeichnungen übernommen; Verfügbarkeit explizit ergänzt. |
| Planmetadaten | Free / Basic / Premium und vorläufige Preis-/Rangdaten extrahiert. Keine Abrechnung oder Berechtigungsimplementierung. |
| CSS-Tokens | Beide `:root`-Blöcke unverändert übernommen. Das vollständige Produkt-CSS ist noch nicht migriert. |
| Nachrichten | 11.703 Rohdatensätze lokal gesichert und mit stabilen IDs normalisiert. Originaltext, Zeitangabe, Reihenfolge und Rohdaten bleiben erhalten. |
| Evidence | 33 Referenzen aus zehn Gruppen auf Message-IDs abgebildet; Ausschluss-/Wiederaufnahmeflags bleiben erhalten. |
| Ereignisse | Fünf vorhandene Events lokal übernommen; Legacy-Quelle und -Status werden explizit zugeordnet. Unaufgelöste Textbelege bleiben erhalten. |
| Analyseergebnisse / Kontext | Ursprünglicher Ergebnisbestand und Kontext privat gesichert. Keine neuen Berechnungen und noch keine React-Anzeige dieser Daten. |
| Zustand / Persistenz | Validierende Übernahmeverträge und Speicheradapter vorbereitet; nicht am React-Einstieg aktiviert. |
| Datenzugriff | Chatbezogener Repository-Vertrag und In-Memory-Nachrichtenzugriff mit ID-Auflösung und Nachrichtenfenstern. |

Noch keine Produktansicht ist als React-Komponente migriert. Insbesondere gibt es noch keine AppShell, Produktnavigation, Dashboardkarten, Detailrenderer, Charts, Dialoge oder funktionierenden Import in der neuen App.

## 3. Characterization-Tests und Baselines

Vor Anlage des React-Einstiegs wurden **26 Tests erfolgreich ausgeführt**: 21 Kernflow-/Werteprüfungen und fünf Defektbeobachtungen. Der Zeitpunkt und die damalige Abwesenheit von `src/main.tsx` und `src/app/App.tsx` sind in `tests/baselines/STEP1_BASELINE.md` dokumentiert. Schritt 2 ergänzt einen Test der privaten Extraktion und 21 öffentliche Adapter-/Speichertests.

| Datei | Anzahl | Was abgesichert wird |
|---|---:|---|
| `core-flows.test.js` | 21 | Zwölf Flow-/Strukturtests und neun Gruppen sichtbarer Referenzwerte. |
| `legacy-defects.test.js` | 5 | Beobachtung von LD-01, LD-02/05, LD-03, LD-04 und LD-16 ausschließlich im Altprototyp. |
| `extracted-data.test.js` | 1 | Vollständige Übernahme der Rohdaten und Ergebnisse; 11.703 eindeutige Nachrichten-IDs; 33 exakt aufgelöste Belege; fünf Events und vorhandener Kontext. |
| `adapters.test.ts` | 11 | Stabile Identität auch bei gleichen Texten; Manifestwiederverwendung; Ablehnung falscher Quellen, Reihenfolge, doppelter IDs und fehlender Sprecherzuordnung; Evidence-/Eventmapping; Chat-Isolation, Kopierschutz und Fenster im Repository; 33 Feature-IDs / sieben Platzhalter. |
| `persistence.test.ts` | 10 | Rohdatenerhalt, leere/fehlende Listen, Backup, Idempotenz, unveränderter Originalschlüssel, fehlender Altbestand, nachträgliche Änderungen, defektes JSON, ungültige Typen, falsche Speicherhüllen und Quota-/Schreibfehler. |
| **Gesamt** | **48** | **27 private Referenztests und 21 öffentliche Integrationstests.** |

Die zwölf Kernflow-/Strukturtests prüfen:

1. Neun Screens, 33 Feature-Keys und sechs Kategorien.
2. Globale Navigation, Chatnavigation und Schutz von Zielen ohne aktiven Chat.
3. Paywall und expliziten Wechsel der simulierten Planvorschau.
4. Auswahl und Reihenfolge von Dashboardkarten einschließlich Reload.
5. Kontext, gemeinsame v0.7-Schlafzeiten und Speichern/Schließen des Dialogs.
6. Beleg ausschließen, Reload, wieder aufnehmen, exakten Quellsprung und Rückweg.
7. Chatsuche, begrenztes Nachrichtenfenster sowie früher/später.
8. Synthetisches Ereignis anlegen, bearbeiten und nach Reload wiederfinden.
9. Phasenkontext, Pausenausschluss und Wiederaufnahme.
10. Vorhandene Begleiterantwort und Life-Event-Such-/Übernahmeabläufe als Mocks.
11. Navigation im simulierten Import-Wizard.
12. Loading, insufficient-data, Importfehler mit Retry und Unavailable-Zustände.

Die neun sichtbaren Wertegruppen in `legacy-reference.json` sind:

| Feature | Gesicherte sichtbare Werte |
|---|---|
| `prime` | 23–02 Uhr; 38,9 % |
| `streak` | 70 |
| `peak` | 652; 696 |
| `response` | 1 Min.; 6,3 Min.; 7,1 Min. |
| `questions` | 1.770; 1.131; 639 |
| `texting` | 11.651; 147.073 |
| `pulse` | 11.651; 147.073; 70 / 70 |
| `deepdive` | 1.727; 308; 951; 7/7 |
| `futuretrend` | 45 %; 55 %; 67 %; 36 % |

Diese Zahlen sind beobachtete Referenzen, keine Bestätigung ihrer fachlichen Richtigkeit. Insbesondere stehen 11.703 Rohdatensätze, 11.657 als relevant deklarierte Nachrichten und 11.651 Dashboardnachrichten nebeneinander; die Peak-Reihe enthält 653 gegenüber 652 auf der Detailseite. Das bleibt LD-01.

Die private Referenz ist SHA-256-geprüft: `2dfd72e3251dd5a8fb0a4c971dd961a9eb0b5fe8fc33accad33e3abbdeb9bc2b`. Fehlende oder veränderte Referenzen führen zu einem Fehler, nicht zu still übersprungenen Tests. DOM-Tests laufen mit jsdom ohne externe Ressourcen; Scroll-APIs und Bestätigungsdialog werden ersetzt. Sie prüfen weder reales Layout noch Touch, Fokus, Scrollposition oder Browserstorage über verschiedene Origins. Der zuvor dokumentierte Browser-Smoke-Test bei 390/430 px betrifft das Gerüst, nicht die noch ausstehende React-Produktparität.

## 4. Erneute Ausführung von Build, Typecheck und Tests

Für diesen Bericht am **04.10.2026, 14:07–14:08 Uhr (Europe/Berlin)** erneut ausgeführt. Alle fünf Befehle endeten mit Exit-Code 0; keine der Testsuiten wurde übersprungen.

| Prüfung | Ergebnis dieses Abschlusslaufs |
|---|---|
| `pnpm build` | Erfolgreich: Typecheck und Vite-Produktionsbuild, 16 Module; Vite-Build 294 ms. |
| `pnpm typecheck` | Erfolgreich: `tsc --noEmit`, keine Diagnosen. |
| `pnpm test` | **21/21 Tests bestanden**, zwei Testdateien; 622 ms. |
| `pnpm test:legacy` | **27/27 Tests bestanden**, drei Testdateien; 23,48 s. |
| `pnpm check:privacy` | Erfolgreich nach dem Build: private Pfade ignoriert, 16 Quelldateien und drei Builddateien geprüft. |

**Gesamt: 48/48 Tests bestanden, fünf Testdateien, keine fehlgeschlagenen Tests.** Die Laufzeiten stammen aus der jeweiligen Werkzeugausgabe. Der Build erzeugte HTML mit 0,40 kB, CSS mit 0,61 kB und JavaScript mit 219,87 kB (gzip: 0,27 / 0,41 / 68,73 kB). Es wurden keine privaten Daten neu extrahiert und keine bestehenden Baselines aktualisiert.

`build` führt zusätzlich selbst `tsc --noEmit` aus. Der gesonderte Typecheck ist ein eigener Lauf. Es gibt keine weitere konfigurierte Testsuite neben `test` und `test:legacy`. Der private Testlauf benötigt den bereits lokal vorhandenen Legacy-Bestand und dessen Extraktion.

Verwendete Projektversionen: Node 24.19.0, pnpm 11.19.0, React / React DOM 19.3.0, Vite 8.3.2, TypeScript 7.0.2, Vitest 5.0.3 und jsdom 30.1.1. TypeScript verwendet unter anderem `strict`, `noUncheckedIndexedAccess` und `exactOptionalPropertyTypes`.

## 5. Übernommene Datenmodelle und Feature-IDs

Die vorhandene Spezifikation wird als TypeScript-Vertrag abgebildet. Ein vorhandener Typ bedeutet nicht, dass seine künftige Produktfunktion bereits implementiert ist.

| Modelle in `src/domain/models.ts` | Inhalt / Einordnung |
|---|---|
| `ChatSpace`, `Participant`, `SleepProfile` | Chatidentität, Teilnehmer, mögliche Dyade und individuelle Schlafprofile als Vertrag. Die Altquelle enthält weiterhin nur gemeinsame Schlafhinweise. |
| `ImportSource`, `Message`, `MessageBlock` | Quellen, Nachrichtenidentität, Sprecher, Originaldaten und mögliche Nachrichtenblöcke. |
| `RelationshipContext`, `LifeEvent` | Beziehungskontext und Ereignisse mit Quelle, Status, Evidence und ausdrücklich unbekannt zulässigen Metadaten. |
| `EvidenceItem`, `UserCorrection` | Belege und fachlicher Vertrag für spätere Korrekturen. Aus Altflags wird kein Korrekturjournal erfunden. |
| `AnalysisRun`, `RecalculationDependency` | Ergebniszustand und Herkunft sowie Vertrag für spätere Neuberechnungsabhängigkeiten. Keine neue Analysepipeline. |
| `PlanEntity` | Vertrag für Planobjekte und Zustandsverlauf; Plantracking ist nicht implementiert. |
| `DashboardConfig`, `PeriodFilter` | Kartenreihenfolge und Zeitraumvertrag; kein funktionierender globaler Zeitraumfilter. |

Hinzu kommen typisierte IDs in `src/domain/ids.ts` sowie JSON- und Tariftypen. Unbekannte Klassifikationsflags, Confidence und bestimmte Zeitstempel werden als unbekannt (`null` beziehungsweise optional) erhalten, nicht geschätzt.

**Alle 33 Feature-IDs sind unverändert im Katalog vorhanden:**

| Kategorie | IDs |
|---|---|
| Your Chat Rhythm | `prime`, `weekday`, `hotcold`, `silence`, `streak`, `peak`, `pulse`, `deepdive`, `lifeevents` |
| Who Makes the Move? | `move`, `response`, `firstlast`, `qdyn`, `flow` |
| How You Text | `texting`, `longstory`, `emoji` |
| Your Language | `words`, `humor`, `names`, `closeness` |
| Your Chat Universe | `topics`, `topicstarts`, `eras`, `mineours` |
| Between the Lines | `questions`, `social`, `future`, `opening`, `rituals`, `futuretrend`, `report`, `changed` |

26 Einträge sind als `legacy-reference`, sieben als `unavailable` gekennzeichnet. Das ist eine Kennzeichnung des Altbestands, keine Aussage über bereits in React verfügbare Ansichten. Der alte Evidence-Gruppenname `future_talk` wird auf den Feature-Key `future` abgebildet; Originaldaten bleiben archiviert. Vorläufige Tier-/Kategorieentscheidungen wurden nicht still korrigiert (LD-23).

Die Nachrichten-IDs entstehen einmalig als UUIDs im privaten Manifest. Quellhash, ursprünglicher Index und Fingerprint aus Sprecher, Zeitangabe und Text sichern die Zuordnung. Ein erneuter Lauf verwendet dieselben IDs und weist abweichende Bestände zurück. Das ist noch kein Import-Update-Matcher und keine Deduplizierung.

## 6. Behandlung des lokalen Speichers

**Die neue React-Startseite liest oder verändert noch keinen Legacy-Browserstorage.** Der Speicheradapter existiert als explizit aufzurufende Vorbereitung und wird in Tests mit synthetischem Speicher geprüft.

| Zweck | Schlüssel |
|---|---|
| Unveränderter Legacy-Schlüssel | `zwischen_den_zeilen_proto_v05` |
| Rohbackup vor Vorbereitung | `zwischen_den_zeilen_proto_v05:backup-before-v1` |
| Versionierte Hülle pro expliziter Chat-ID | `zdz:migration:v1:${encodeURIComponent(chatId)}` |

Der Adapter sichert zunächst den exakten Originalstring, einschließlich unbekannter Felder. Danach validiert er eine Hülle mit Schema-Version 1, Chat-ID, Herkunftsschlüssel, Zeitpunkt, `originalRaw` und übernommenem Zustand. Kontext/Fotos, gemeinsame Schlafhinweise, Events, Quellen, Dashboardreihenfolge, Evidence- und Pausenausschlüsse bleiben erhalten. Fehlende Felder und absichtlich leere Listen werden unterschieden.

Der Originalschlüssel wird nie geändert oder gelöscht; ein vorhandenes Backup wird nicht überschrieben. Ohne Altbestand entsteht kein erfundener Zustand. Bei erneutem Aufruf wird ein vorhandener Zielbestand validiert und wiederverwendet; nachträglich geänderter Altbestand wird als Konflikt gemeldet. Defektes JSON wird roh gesichert, aber nicht als aktiver Zielzustand geschrieben. Ungültige Typen, falsche Chatzuordnung sowie Speicher-/Quota-Fehler werden gemeldet. Der Zielstring wird vor dem Schreiben validiert und anschließend zurückgelesen.

Es gibt noch keine Anbindung an die Produktoberfläche, keinen Backend-Speicher und keine IndexedDB-Migration. Daten werden nicht automatisch auf mehrere Chats verteilt. Das Nachrichtenrepository arbeitet bislang im Arbeitsspeicher.

Die private Dateiextraktion enthält den im HTML eingebetteten Ausgangsbestand. Persönliche Änderungen im bisherigen Browserstorage wurden nicht aus einer anderen Origin oder aus `file://` ausgelesen. Ein anderer Port besitzt ebenfalls einen getrennten LocalStorage. Vor der späteren Aktivierung muss die explizite Übernahme dieses tatsächlichen Nutzerbestands vorgesehen werden.

## 7. Bekannte Legacy-Fehler, die keine Paritätsziele sind

Alle 27 Einträge in `KNOWN_LEGACY_DEFECTS.md` bleiben als offene Altbefunde dokumentiert. **Sie werden nicht als gewünschtes Verhalten der neuen App festgeschrieben.** Sie wurden im Originalprototyp auch nicht repariert. Die fünf erfolgreichen Defektbeobachtungstests bestätigen ausschließlich, dass der dokumentierte Altfehler in der Referenz vorliegt.

| IDs | Bewusst nicht als Sollverhalten übernommen |
|---|---|
| LD-01 | Widersprüchliche Referenzzahlen und unterschiedliche Ergebnisbasen. Die Werte bleiben getrennte Beobachtungen; keine Formel wird aus ihnen erfunden. |
| LD-02 | Ausbleibende echte Neuberechnung nach Beleg-/Pausenausschluss und Kontextänderung. |
| LD-03 | Import, Append und Replace als reine Metadatensimulation mit festen Teilnehmern. |
| LD-04 | Gleichzeitig sichtbare, den UX-Test blockierende Overlays. |
| LD-05 / LD-06 | Unvollständige Beleglisten sowie instabile Index-/Text-/Zeitheuristiken. Explizite Nachrichtenreferenzen werden bereits technisch auf IDs vorbereitet. |
| LD-07 bis LD-10 | Global vermischter Chatzustand; fehlender globaler Zeitraumfilter, fehlende individuelle Schlafprofile und fehlende bestätigte Gruppendyade. |
| LD-11 / LD-12 | Worttreffersuche mit maximal zwölf Life-Event-Treffern ohne LLM/Confidence; feste Begleiterantworten ohne bestätigungspflichtiges Aktionenmodell. |
| LD-13 bis LD-15 | Fehlendes Plantracking/Raincheck-Review, fehlendes Korrekturjournal/Undo und nicht dauerhaft gespeicherte Ablehnung von Events. |
| LD-16 | Wiederbelebung gelöschter Listen und verschluckte Storagefehler. Der neue vorbereitende Adapter bewahrt leere Listen und meldet Fehler bereits ausdrücklich. |
| LD-17 / LD-18 | Uneinheitliche Eventkategorien/-status und nicht überall verlinkte Chattexte. Originalfelder bleiben erhalten; unklare Referenzen werden nicht geraten. |
| LD-19 bis LD-21 | Fehlende Avatare in Vergleichen, unvollständige Chartdetails, unvollständige Lokalisierung und funktionslose Profil-/Rechtsplatzhalter. |
| LD-22 / LD-23 | Sieben nicht implementierte Features sowie widersprüchliche Tarif-/Kategoriezuordnungen. Der Katalog kennzeichnet diese Grenzen; offene Entscheidungen bleiben sichtbar. |
| LD-24 / LD-25 | Unvollständiger UX-Testkatalog und Abhängigkeit von globalen Handlern beziehungsweise späten Versions-Overrides. |
| LD-26 / LD-27 | Lücken bei Error/Empty/Loading und fehlender vollständiger Datumssprung, Personenfilter sowie Evidence-Navigation im Chatviewer. |

Technische Schutzmaßnahmen in den neuen Adaptern sind bereits vorhanden; eine fachliche Behebung aller Altfehler oder eine vollständige Implementierung der Backlog-Punkte ist damit nicht erfolgt.

## 8. Fortbestehende Mocks und Platzhalter

| Bereich | Noch bestehende Grenze |
|---|---|
| Neue Startseite | Nur technischer Gerüstnachweis, ohne Produktnavigation oder Datennutzung. |
| Analysewerte | Gesicherte, überwiegend vorgegebene Legacy-Ergebnisse; keine neue Berechnung aus dem Nachrichtenbestand. |
| Import / Update | Im Legacy weiterhin simuliert; im neuen Produkt noch nicht umgesetzt. Keine Parser-/Deduplizierungspipeline. |
| Begleiter / Life-Event-Suche | Im Legacy feste Antworten beziehungsweise lokale Wortsuche; keine LLM-Anbindung und kein bestätigtes Aktionenmodell. |
| Pläne / Paywall | Vorläufige Preise und simulierte Planvorschau; keine Zahlung, Abonnements oder serverseitige Berechtigungen. |
| Unavailable-Features | `qdyn`, `flow`, `closeness`, `mineours`, `opening`, `report`, `changed`; keine Ergebnisse erfunden. |
| Datenverwaltung | Synthetische öffentliche Fixtures und In-Memory-Repository; private Referenzdaten bleiben getrennt. |
| Künftige Funktionen | Zeitraumfilter, individuelle Schlafprofile, Dyadenauswahl, Korrekturjournal und Plantracking besitzen teilweise Typverträge, aber noch keine Produktimplementierung. |
| Profil / Sprache / Recht | Unvollständige Legacy-Bereiche bleiben dokumentiert; noch nicht als React-Ansichten migriert. |

## 9. Bekannte Abweichungen und noch nicht migrierte Bereiche

Die wichtigste sichtbare Abweichung ist beabsichtigt für diese Phasengrenze: Beim Start der neuen App erscheint nur die technische Startseite. Die neun Legacy-Screens `home`, `dashboard`, `analysis`, `companion`, `pro`, `profile`, `detail`, `import` und `chatreader` bleiben im privaten Altprototyp. Navigation, Modals, Charts, Paywall, Kartenkonfiguration, Kontextbearbeitung, Eventdialoge, Belegansichten, Chatviewer und UX-Testmodus sind noch nicht in React verfügbar.

Auf Datenebene gibt es folgende ausdrückliche Unterschiede beziehungsweise Grenzen:

- Stabile Message-IDs und eine explizite Chat-ID ersetzen bei der vorbereiteten Übernahme die bloße Positionsreferenz. Das Manifest ist für weitere private Übernahmen aufzubewahren.
- Eventquelle `auto` wird zu `ai`, Status `pending` zu `suggested` zugeordnet; Originalfelder bleiben erhalten. Fehlende Confidence oder Zeitstempel werden nicht ergänzt.
- Kopierte Eventtexte ohne eindeutige Nachrichtenreferenz bleiben als unaufgelöste Belege erhalten; sie erhalten keine geratenen IDs.
- Die gemeinsamen Legacy-Schlafzeiten werden nicht in scheinbar vorhandene individuelle Profile umgewandelt. Ausschlussflags werden nicht als vollständige historische Nutzerkorrekturen ausgegeben.
- Der Speicheradapter erhält leere Listen und meldet Fehler, anders als der Alt-Restore. Er ist noch nicht aktiv mit der App verbunden.
- Private Daten sind nicht im neuen Bundle; deshalb zeigt das Gerüst auch keinen privaten Chat oder Analysebestand.
- Sichtbare Referenzwerte sind für Vergleiche gesichert; eine fachliche Auflösung ihrer Widersprüche fehlt weiterhin.

Es erfolgten keine visuelle Modernisierung und keine neuen Analysealgorithmen. Das minimale Gerüstlayout ist keine neu gestaltete Produktansicht. Die separate UI-Modernisierungsphase folgt erst nach erfolgreicher Paritätsmigration. Ebenso offen bleiben Backend, Authentifizierung, Datenbank, Deployment und alle im Migrationsplan erfassten Post-Migration-Funktionen.

## 10. Exakter lokaler Startbefehl

Im vorhandenen Windows-Arbeitsverzeichnis sind die Abhängigkeiten bereits installiert. Folgender PowerShell-Aufruf verwendet direkt die vorhandene Node-Runtime und Vite; er benötigt weder einen global installierten Paketmanager noch eine PATH-Anpassung:

```powershell
Set-Location -LiteralPath 'C:\Users\sborn\OneDrive\Dokumente\ChatGPT\Zwischen den Zeilen'
& 'C:\Users\sborn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' '.\node_modules\vite\bin\vite.js' --host 127.0.0.1 --port 5173 --strictPort
```

Danach im Browser `http://127.0.0.1:5173` öffnen. `Ctrl+C` beendet den Server. `--strictPort` verhindert einen unbemerkten Wechsel auf eine andere Adresse, falls Port 5173 bereits belegt ist. Mit korrekt eingerichtetem Node-/pnpm-PATH genügt im Projekt alternativ `pnpm dev`.

Die Adresse zeigt den aktuellen technischen React-Einstieg. Der Legacy-Referenzserver auf Port 4174 ist ein separates Hilfswerkzeug und nicht die neue App.

**Verbindlicher Stand: Schritt 2 abgeschlossen; Schritt 3 wartet auf ausdrückliche Freigabe.**

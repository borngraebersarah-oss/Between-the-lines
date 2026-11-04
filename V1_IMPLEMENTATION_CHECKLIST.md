# V1 Implementation Checklist

Arbeitsübersicht zum [finalen Handoff](V1_FINAL_HANDOFF.md), keine neue Spezifikation. Alle Kästchen sind bewusst offen: fachliche Freigabe und vorhandene UI gelten nicht als produktive Implementation. Führende Verträge, Detail-DoD und Gatezuständigkeiten stehen dort in §§1, 7 und 9.

Pro abgeschlossenem Gate Test-/Requirement-IDs, Fixture-SHA, Daten-/Regel-/App-/Modellversion, Scope, Soll/Ist und Nachweis verlinken. Nicht benötigte produktive Automatik ausdrücklich deaktiviert halten. Ein blockiertes Releasegate nicht als PASS markieren.

## Phase 1 — Kanonische Datenbasis

- [ ] Inputs: Daten-/Importvertrag und vorhandene Standard-/Update-/Gruppenfixtures gelesen.
- [ ] Engine: echte Standard TXT/ZIP/Paste/Transkript-Prüfung, Preview, Teilnehmer/Dyade, stabile IDs/Provenienz, Zeit/Sprach/Typbasis, Dedupe/Add/Replace.
- [ ] Persistence: atomarer Commit, Konfliktabbruch, Versionsregeln, Retention; Reload und absichtlich leere Zustände korrekt.
- [ ] Evidence: Quellreferenzen und Korrektur-/Versionsanschlüsse erhalten; fehlende Referenzen unresolved.
- [ ] Tests: IMP-/Datenfälle, identischer Import, leeres Replace, fehlende Metadaten, Alias/gleiche Namen, Chat-/Dyadenisolation.
- [ ] Gate: echte kanonische Basis nachgewiesen; keine simulierten Teilnehmer oder stillen Teilcommits.

## Phase 2 — Sechs Free

- [ ] Inputs: alle sechs F-Verträge, DC-Regeln und numerische Sollfälle.
- [ ] Engine: prime/weekday/streak/peak/texting/emoji aus echter Basis, P und Coverage.
- [ ] Persistence: Daten-/Scopeversionen, Wiederimport und relevante Updates konsistent.
- [ ] Evidence: vollständige Nachvollziehbarkeit, Quellenzugriff und korrekte Einheiten/Gleichstände.
- [ ] Tests: Hauptchat-Sollwerte, F-Grenzfälle, Reactions, Unicode, fehlende Zeit, Zensierung, Nullnenner.
- [ ] Gate: echte Daten/Formel/P/Evidence/Randfälle und relevante Neuberechnung; UI-Zahl allein genügt nicht.

## Phase 3 — Conversation Engine

- [ ] Inputs: CR-01–10, Goldrelationen und Hybridkarten.
- [ ] Engine: Blöcke/Sessions/Movekandidaten/Response/Silence/Ruhezyklen mit Rollen- und Präzisionsregeln.
- [ ] Persistence: Relationsherkunft, Version und gültige Nutzerentscheidung erhalten.
- [ ] Evidence: Quell-/Antwort-/Pausenendpunkte und notwendiger Kontext exakt verknüpft.
- [ ] Tests: 5-Minuten- und 4-Stunden-Grenzen, C-Unterbrechung, Fortsetzung, Ruheprofile, Gleichstände, Randkontext.
- [ ] Gate: gültige Relationsbasis; bloße Zeitheuristik kein Semantikbeweis, Modellpfade separat qualifiziert.

## Phase 4 — Neun Basic-Kernanalysen

- [ ] Inputs: alle neun B-Verträge, gültige Daten-/CR-Basis.
- [ ] Engine: hotcold/silence/move/response/firstlast/longstory/words/pulse/deepdive; keine abweichenden Legacyformeln.
- [ ] Persistence: Masken/Relationen/P und gültige Resultatversionen konsistent.
- [ ] Evidence: Baselines, vollständige Mengen, Antwortblöcke, Pausen und Vergleichsfenster prüfbar.
- [ ] Tests: B-Sollfälle, 13/14 Tage, 99/100 Tokens, 3/4 Wörter, unvollständige Perioden, Ausschlüsse/Updates.
- [ ] Gate: korrekte Aggregation und relevante Reanalyse; hybride Modellautomatik nur mit Nachweis.

## Phase 5 — Evidence/Korrektur/Reanalyse

- [ ] Inputs: Evidencevertrag, Dependency Matrix, EC-/AC-EV- und CORR-Fälle.
- [ ] Engine: vollständige Listen/Pagination/Filter, Korrektur, Undo, echte abhängige Neuberechnung.
- [ ] Persistence: Journal, Chat/Dyade/Fassung, Editreview, Add/Replace, leere Listen und Fehlersicherheit.
- [ ] Evidence: Reader-Fokus/Back, unresolved ohne Fantasielink, konsistente Karte/Detail/Liste.
- [ ] Tests: echte Vorher/Nachher-Zähler/Nenner, Reload/Undo, Racefälle, Fehler und Chatlöschung während Run.
- [ ] Gate: Flag/Toast allein besteht nicht; stale/processing/valid/error und wirksame Nutzerentscheidung nachgewiesen.

## Phase 6 — Semantische Pipeline

- [ ] Inputs: sieben S-Verträge, SQ-Policies, AI-Ausführung, Gold-/Split-/Kalibrierungsplan.
- [ ] Engine: definierte Einheiten, minimaler Kontext, strukturierte validierte Outputs, deterministische Aggregation für alle sieben Funktionen.
- [ ] Persistence: Nutzerentscheidungen und versionierte Auto-/Reviewqualifikation; Event-/Insiderzustände korrekt.
- [ ] Evidence: vollständige Akte/Labels/Quellen/Rollen, D/R/U/X und Abdeckung ohne unbekannt=negativ.
- [ ] Tests: synthetische Pipeline, Injection und unabhängige repräsentative DE-/EN-/Mischsprach-Evaluation je Klasse/Version.
- [ ] Gate: approved §19-/SQ-Ziele erfüllt oder betroffener Produktpfad blockiert; keine Freigabe aus synthetischem Gold allein.

## Phase 7 — Begleiter

- [ ] Inputs: gültige Resultate/Evidence, acht Antwortmodi und geschlossene zehnteilige Allowlist.
- [ ] Engine: Quellenbindung, scoped Suche, Hypothesen/Unknown; Proposal→Preview→Confirm→Execute→Reanalyse→Result Report.
- [ ] Persistence: bestätigte Mutation/Version, Cancel/Idempotenz; Verlauf nur im erlaubten Privacyumfang.
- [ ] Evidence: exakte Zitate, tatsächliche Suchabdeckung, mehrere plausible Treffer, richtige Rücksprünge.
- [ ] Tests: 50 Companionfälle, AI-Integritätsfälle, Stale/Unavailable, falscher Chat, veraltete Preview und Retry.
- [ ] Gate: AI-COMPANION-QUALITY-01 und relevante Privacy-/Kosten-/Critical-Error-Gates; keine neuen Scores oder späteren Analysen.

## Phase 8 — Optionaler Enhanced Import

- [ ] Inputs: Importvertrag und deklariertes synthetisches Enhanced-Testprofil; echtes Schema separat versioniert.
- [ ] Engine: tatsächlich vorhandene Reply/Reaction/Source-/Edit/Delete/Caption-/Präzisionsdaten; kein geratener Inhalt.
- [ ] Persistence: stabile Identität, Revision/Metadatenabdeckung, Konflikte ohne Last-import-wins.
- [ ] Evidence: Quellenrelationen und unbekannte Metadaten korrekt, Reactions keine zusätzlichen Beiträge.
- [ ] Tests: Standard/Enhanced-Vergleich, Source-ID-Ergänzung, alte Replies, Reaction-Invarianz, unbekannte Version.
- [ ] Gate: optionaler Adapter nachgewiesen; Standardapp benötigt keinen fertigen lokalen Exporter/Backupmechanismus.

## Phase 9 — Product Hardening / Release

- [ ] Inputs: Messplan, D-PERF/D-COST und benannte Production Gates.
- [ ] Engine/Architektur: sichere Provider-/Auth-/Scopegrenzen, Secrets, Monitoring und Fehler/Abbruchverhalten.
- [ ] Persistence/Privacy: tatsächliche Regionen/Retention/Backups/Löschung nachgewiesen; keine versteckten Volltexthistorien.
- [ ] Evidence/UX: Upload/Download/Preview/Reader/Korrektur/Actions auf 390×844, 430×932, 1024×768 in beiden Themes abgenommen.
- [ ] Tests: reale Performance/Usage/Kosten, Security/Privacy, Build/Typecheck/öffentliche Integration; Legacy nur autorisiert lokal.
- [ ] Gate: jede veröffentlichte Funktion, Quelle, Sprache und Umfang mit Nachweis freigegeben; keine offenen FAIL/BLOCKED als vollständige V1 ausgeben.

Die fachliche V1-Spezifikation ist abgeschlossen. Offene Kästchen bezeichnen Implementation oder Produktionsnachweise, keine weitere allgemeine Spezifikationsphase.

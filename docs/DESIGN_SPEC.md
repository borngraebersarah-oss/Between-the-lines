# Design Specification

## 1. gewünschte Wirkung

Die App soll hochwertig, ruhig, modern und emotional zugänglich wirken.
Sie darf weder nach klassischem Business-Dashboard noch nach medizinischer/psychologischer Diagnostik aussehen.

Zielspannung:
- erwachsen & hochwertig
- spielerisch & neugierig
- ruhig & vertrauenswürdig
- moderner/fancy als der aktuelle HTML-Prototyp, ohne infantil oder überladen zu werden

## 2. Mobile First

Referenzbreite Smartphone: ca. 390–430 px.
Desktop/Tablet responsive, aber mobile Nutzung priorisieren.

## 3. Farb-/Personenlogik

Person A / B visuell gleichwertig.
Bestehende warme Beige-/Terracotta-/Taupe-Richtung beibehalten.
Personenfarbe konsistent über alle Screens.

## 4. Cards

Nicht jede Information als identische weiße Karte darstellen.
Visuelle Hierarchie schaffen:
- Key Insight Card
- Chart Card
- Person Card
- Evidence Card
- Context/Event Card
- Method Card

Dezente Tiefenwirkung, Border, weiche Schatten oder Tonflächen möglich.

## 5. Typografie

Große Key Numbers klar dominant.
Kurze Headlines.
Sekundärtext deutlich zurückhaltender.
Keine unnötige komplette Großschreibung.

## 6. Icons

Konsistente Outline-/Line-Icon-Familie, z. B. Lucide oder vergleichbar.
Ca. 1.5–2 px optische Linienstärke.
Runde Linienenden.

Icons gezielt zur Navigation und Orientierung verwenden.

Life Events zusätzlich mit Kategorieicons:
- Reise / Urlaub
- Treffen
- Essen
- Konzert/Event
- Sport
- Zuneigung
- Insider
- Zukunft
- Konflikt
- persönliche Offenheit

Nutzer kann für eigenes Event aus einem kuratierten Set auswählen.

## 7. Avatare

Optionales Profilbild 32–40 px.
Fallback: runde Initialenfläche.

Bei Personenvergleichen immer nahe am Namen platzieren.
Nicht nur einmal dekorativ ganz oben.

## 8. Charts

- Werte/Einheiten lesbar
- Touch/hover Details
- Peak/auffällige Phase gezielt hervorheben
- Timeline-Marker für Events
- keine dekorativen Charts ohne Informationsgewinn
- bei langen Zeitreihen Zoom/Zeitraumfilter oder Granularitätswechsel ermöglichen

Prime Time: an jedem Balken Zahl anzeigen, soweit auf Mobile lesbar; bei sehr kleinen Werten ggf. intelligente Beschriftung/Tooltip, aber kein informationsloser Balken.

Hot & Cold: Hover/Touch pro Tag/Periode zeigt Datum + Nachrichtenanzahl; Events auf Zeitachse markieren.

## 9. Microinteractions

Subtil einsetzen:
- Kartenöffnung
- Filterwechsel
- Bestätigung/Korrektur
- Event hinzufügen
- Chart Tooltip
- Loading/Skeleton

Keine übertriebene Gamification.

## 10. Fancy, aber erwachsen

Das Design darf mehr Charakter als der aktuelle Prototyp bekommen:
- Icon-Badges
- Category Pills
- farbliche Tonflächen
- kleine Animationen
- hochwertige leere/Loading States
- moderne Timeline
- personalisierte Avatare

Vermeiden:
- Neon-/Gaming-Look
- Dating-App-Kitsch
- übermäßige Emojis als UI-Ersatz
- unnötige Glassmorphism-Spielerei, wenn Lesbarkeit leidet

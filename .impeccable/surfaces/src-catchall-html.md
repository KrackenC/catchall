---
version: 1
slug: "src-catchall-html"
primary_target: "src/catchall.html"
related_targets: []
---

# Catchall app surface

Scope: the whole app UI (Feed, Board, Calendar, Reminders, Settings, Edit dialog), mode Operate. Phone capture first, Mac review second.

## Direction contract

THESIS: Notes are sheets off the engineering pad a builder plans projects on. It refuses the sticky-note-and-cork default, and the grey notes app with one accent.

OWN-WORLD: The ground is pad-green paper (#dfe8d2) with its 5-per-inch grid faintly showing. The shell header is deep pad green (#2f5a3c). Ink is graphite (#2a2e2b) set in Barlow, with Barlow Semi Condensed for title-block labels. Red pencil (#d1402f) is spent only on Save, Delete, and anything due. Non-photo blue (#57b6dd) marks pins, selection and highlights. Note sheets are light paper with hairline green rules. Board columns are pad sheets with a title block. Tags are graphite-outlined lettering chips.

STORY: Capture in one tap, see today's sheet, sort by tag on the Board, and never wonder what a button does.

FIRST VIEWPORT: A green header with the wordmark, labeled view tabs and sync state. Under it, the capture box as the top of a fresh sheet, with a red Save. Then tag filters. Each Feed day opens with a ruled title block (date, note count, reminders due). Every note carries its labeled actions.

FORM: Engineer's Computation Pad, #3 of 7 (rocket catalog was #1, label-maker tape #2), seed 12d0baf2. Raises: a fixed time column with tabular digits on Reminders; each tag shown once; red only where it means something. Signature move: the ruled title block heading each day, sheet, and Board column.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

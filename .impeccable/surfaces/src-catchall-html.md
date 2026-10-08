---
version: 1
slug: "src-catchall-html"
primary_target: "src/catchall.html"
related_targets: []
---

# Catchall app surface

Scope: the whole app UI (Feed, Board, Calendar, Reminders, Settings, Edit dialog), mode Operate. Phone capture first, Mac review second.

## Direction contract

THESIS: Notes are sheets in a builder's linen dot-grid notebook (evolved 2026-10-08 from the original engineering-pad world, keeping its ruled title blocks). It refuses the sticky-note-and-cork default, and the cold grey notes app with one accent.

OWN-WORLD: The ground is linen paper (#eceae2) with a soft 20px dot grid. The shell header is sage (#4b6152). Ink is graphite (#2c312b) set in Barlow, with Barlow Semi Condensed for labels and digits. Clay (#a85638) only for Save, Delete and due; teal (#376672) for pins, selection and focus. Tags and note colors are muted earth tones, never red.

STORY: Capture in one tap, see today's sheet, sort by tag on the Board, and never wonder what a button does.

FIRST VIEWPORT: A sage header with the wordmark, labeled view tabs and sync state. Under it, the capture box as the top of a fresh sheet, with a clay Save. Then tag filters. Each Feed day opens with a ruled title block (date, note count, reminders due). Every note carries its labeled actions.

FORM: Engineer's Computation Pad, #3 of 7 (rocket catalog was #1, label-maker tape #2), seed 12d0baf2. Raises: a fixed time column with tabular digits on Reminders; each tag shown once; red only where it means something. Signature move: the ruled title block heading each day, sheet, and Board column.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

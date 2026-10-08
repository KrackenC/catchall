---
target: Catchall v26
total_score: 27
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:/private/tmp/claude-501/-Users-craigcorrell/250288c0-b494-4848-9ca0-5b23bd8aea6e/scratchpad/catchall/src/catchall.html"
target_fingerprint: "sha256:7c2a11e31398d51bd5e2b41ce465c8d6283bd869dbe9aed1c1e1df8a1332654b"
target_path: /private/tmp/claude-501/-Users-craigcorrell/250288c0-b494-4848-9ca0-5b23bd8aea6e/scratchpad/catchall/src/catchall.html
timestamp: 2026-10-08T23-04-39Z
slug: src-catchall-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score: 27/40 (Acceptable)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | List mode only shown in a vanishing toast; the preview still says "Note" |
| 2 | Match with the real world | 3 | Sort end screen says "Nothing untagged is waiting" after Keeps; "Tap Save" shown on the Mac |
| 3 | User control and freedom | 3 | A second swipe's toast replaces the first swipe's Undo |
| 4 | Consistency and standards | 2 | Active chip blue on desk / green on phone; one sliders icon for Settings, Filters and Actions; Sort card tilts; red ring for Archive |
| 5 | Error prevention | 3 | Swipe-left can delete; "Remove checked items" acts immediately |
| 6 | Recognition over recall | 3 | Mac hover-reveal hides actions |
| 7 | Flexibility and efficiency | 2 | Sort has no keys on the Mac; no range select, select-all or Esc |
| 8 | Aesthetic and minimalist design | 2 | Phone pre-content clutter; grid dead bands; crushed phone grid and Board |
| 9 | Error recovery | 3 | Good worded sync errors; Clear filters |
| 10 | Help and documentation | 3 | Sort has no explanation |

## Design specificity
- **Core is authored:** title blocks, condensed lettering, and labeled actions.
- **v25 additions are generic:**
  - a Tinder-tilt Sort card
  - Keep-style grid
  - a Gmail select bar
  - a saturated Radix tag and note palette
- **v26 drift:** linen moved the world away from the "green pad", and DESIGN.md's rules ("Paper Is Green", "no grey") no longer describe the app.
- **Detector:** the CLI found 0 issues in src. The build has 2 advisories, both false positives (a banner fallback hex, and the documented grid).
- **Browser overlay:**
  - The real issue is the "Add item" placeholder contrast: browser default #757575 at 4.4:1.
  - Everything else is a false positive or deliberate.
  - All app text passes AA in both themes.

## Priority issues
1. **[P1] Sort misstates progress and loses Keeps.**
   - Keeps are held in memory only.
   - "Nothing untagged is waiting" is false after Keeps.
   - The card has a red ring on Archive and tilts.
   - No Mac keys; the phone buttons are out of thumb reach.
   - Commands: clarify, harden, adapt.
2. **[P1] Palette swap half done.**
   - The first tag defaults to red #e5484d, which clashes with the clay due/Save color.
   - The amber tag is 2.2:1 on the sheet.
   - Gray contradicts the doc.
   - The yellow pinned note is muddy in dark mode.
   - DESIGN.md is stale.
   - Commands: colorize, document.
3. **[P1] Phone layouts break at 390px.**
   - The search placeholder is cut off, and the field is icon-only when Filters is open.
   - Reminder times wrap.
   - The Calendar heading breaks.
   - The 2-column grid crushes text.
   - Command: adapt.
4. **[P2] Mac grid dead space.**
   - Hidden actions keep their ~70px band.
   - A lone pinned card leaves the rest of its row empty.
   - Commands: layout, polish.
5. **[P2] Multi-select and list mode are hidden and stateless.**
   - No Select on the phone.
   - No Esc, range select or select-all.
   - Bulk Pin can't unpin.
   - No persistent list-mode indicator.
   - Commands: harden, clarify.

## Persona red flags
- **Power user:** click-only Sort; ~6 hidden tab stops per card; no range select; Board 6 vs Feed 10 with no explanation.
- **First-timer:** an unexplained fifth tab, "Sort"; "Pinned 0", Filters and Grid shown on an empty feed; "Pinned" shown three ways.
- **Owner, one-handed iPhone:** Sort buttons in the top half; a mis-swipe delete loses its Undo; reminder times wrap; checkboxes 20px, × 19px, linkbtn 20px tall, header tabs 29px.

## Minor
- `scrollbar-gutter: stable` to stop a 7px header shift.
- The tag chevron sits 60px from the name.
- Sort card min-height leaves an empty band.
- The YouTube label covers the thumbnail's badge.
- Four stacked CSS override passes (`.n-actions` defined ~8 times).
- Teal on its wash is 4.48:1.
- Up/Down tag reorder could be drag-to-reorder.
- The Sort count resets on reload.
- The "Add item" placeholder needs `::placeholder{color:var(--muted)}`.

## Questions
- Is Sort a view or a mode (a "Sort 4 untagged →" cell on the Feed heading)?
- Is the North Star still a green computation pad, or now linen?
- Should the phone open to capture plus Sort only?

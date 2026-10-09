---
target: Catchall v34
total_score: 30
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/private/tmp/claude-501/-Users-craigcorrell/250288c0-b494-4848-9ca0-5b23bd8aea6e/scratchpad/catchall/src/catchall.html"
target_fingerprint: "sha256:72ab6e86c9c09450c406b3b7a6920aded0beae205ba68b8c586e63d2777d004e"
target_path: /private/tmp/claude-501/-Users-craigcorrell/250288c0-b494-4848-9ca0-5b23bd8aea6e/scratchpad/catchall/src/catchall.html
timestamp: 2026-10-09T21-44-11Z
slug: src-catchall-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score: 30/40
All ten heuristics score 3.
- Consistency is up to 3 now that note actions are unified and button styles are documented.
- The lowest notes: has:/is: is still jargon, there's no full key list, and phone chrome is heavy.

## Priority issues
1. **[P1] Phone Calendar count pills overflow their cells.** Day 10 reads "reminde"; counts sit at the top or the bottom inconsistently. Fix: compact bell+number on phones; contain the cell's children; add a box-containment test.
2. **[P1] Phone targets under 44px.**
   - Checkbox: hit area 42, box 20.
   - Alarm and normal toast buttons: 30.
   - Select bar buttons: 36 (`.selbar .act` override).
   - Settings swatch: 26; tag inputs: 36.
   - Select bar and toast overlap by 38px.
   Fix: the whole checklist row toggles; 44px toast and select-bar buttons; raise the toast above the two-row select bar.
3. **[P2] Settings Done scrolls away.** Fix: sticky dialog header; a Done at the foot on phones.
4. **[P2] Sheet and button drift.** Filters sheet has two Dones; a toast overlaps the sheet; a stray separator on phone Board buttons; "New tag" wraps alone.
5. **[P3] Two-inks leaks.** "Turn off" is clay; the at-rest Delete is muted against DESIGN.md; the dark active tab doesn't match the docs.

## Detector
- CLI: 0 findings.
- Overlay: only false positives (style-only gray-on-color at 5.37:1, the documented palette, intended ellipsis, a no-op transition).
- No horizontal overflow in any state.
- Lowest contrast: clay on sheet, 4.96 (passes).
- v31 items fixed: `.vbar` 44, linkbtn 44.

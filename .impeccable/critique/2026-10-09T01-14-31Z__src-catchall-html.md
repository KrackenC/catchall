---
target: Catchall v29
total_score: 27
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/private/tmp/claude-501/-Users-craigcorrell/250288c0-b494-4848-9ca0-5b23bd8aea6e/scratchpad/catchall/src/catchall.html"
target_fingerprint: "sha256:973abcba7fe29449a0525222a9d35c9525ef2ad83c5291546672d77bc5105400"
target_path: /private/tmp/claude-501/-Users-craigcorrell/250288c0-b494-4848-9ca0-5b23bd8aea6e/scratchpad/catchall/src/catchall.html
timestamp: 2026-10-09T01-14-31Z
slug: src-catchall-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score: 27/40

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Status | 3 | Recording timer, search readout, Offline are good; the dark-mode active tab reads weakly |
| 2 | Real world | 3 | Record and Dictate both mean "talk"; "Sort them all again" is vague |
| 3 | Control | 3 | Undo everywhere; Sort reset has no undo |
| 4 | Consistency | 2 | Note actions come in four forms (Mac hover, Board grid, phone Actions, Sort); one sliders icon used 3 ways; two :focus-visible rules |
| 5 | Error prevention | 3 | Fine |
| 6 | Recognition | 2 | Feed keys and the has:/is: search grammar exist only in memory or Settings |
| 7 | Flexibility | 3 | Strong on the Mac; the phone still takes 2 taps per action |
| 8 | Minimal | 3 | ~500px of chrome before the first note on the phone |
| 9 | Recovery | 3 | No-results state is thin |
| 10 | Help | 2 | Grammar and keys have no help where they're used |

## Priority issues
1. **[P1] Note actions differ on every surface.** Fix: unify into one row; on the phone show Pin/Archive inline; give Settings, Filters and Actions distinct icons.
2. **[P1] Record vs Dictate.** Dictate is a dead end on iPhone, and the clay Stop sits on top of the clay Save. Fix: hint instead of Dictate on iOS; rename to "Voice memo"; teal recording state; a linen-styled memo player.
3. **[P2] Hidden power features.** Fix: keycaps on the focused Feed note; tappable search examples when search is focused.
4. **[P2] Phone clutter above the first note.** Fix: collapse the composer tools until focus; Filters as a bottom sheet.
5. **[P3] Sort end screen is flat.** Fix: persistent tally, a primary Back to Feed, a "Done" flourish.

## Detector
- The CLI found 0 issues.
- The overlay flagged only false positives or deliberate choices: gray-on-color at 5.37:1, intended calendar ellipsis, and the documented palette and grid.
- The phone board column sits 2px from the edge (real).
- Small targets: file chip 18px tall; checkbox and × hit areas capped at about 26px by row spacing.
- All text passes AA.

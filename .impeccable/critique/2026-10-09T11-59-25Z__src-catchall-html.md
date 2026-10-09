---
target: Catchall v31
total_score: 29
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 1
target_identity: "file:/private/tmp/claude-501/-Users-craigcorrell/250288c0-b494-4848-9ca0-5b23bd8aea6e/scratchpad/catchall/src/catchall.html"
target_fingerprint: "sha256:ec57ceba492179427ce1b89def411c944b2dabe134d00f734b6d6033fa6829dd"
target_path: /private/tmp/claude-501/-Users-craigcorrell/250288c0-b494-4848-9ca0-5b23bd8aea6e/scratchpad/catchall/src/catchall.html
timestamp: 2026-10-09T11-59-25Z
slug: src-catchall-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score: 29/40

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Status | 3 | Memo play state was broken (fixed in v32) |
| 2 | Real world | 3 | `has:`/`is:` reads like developer syntax; "Remove reminder" next to Delete |
| 3 | Control | 3 | Can't listen back to a memo before saving |
| 4 | Consistency | 2 | Phone More menu reflows; "Turn on" is clay in one place and sage in another; three filled-button styles |
| 5 | Error prevention | 3 | Fine |
| 6 | Recognition | 3 | Keycaps and search ideas fixed the gap |
| 7 | Flexibility | 3 | No "?" shortcut sheet; keys work in Feed only |
| 8 | Minimal | 3 | ~457px of chrome on the phone; Settings is one long wall |
| 9 | Recovery | 3 | Good "Nothing matches" sheet |
| 10 | Help | 3 | In-place help is good; no full list of keys |

## Priority issues
1. **[P0] Memo Play drawn outside the player** (.vplay class collision). FIXED in v32.
2. **[P1] Phone note action row reflows when More opens.** Fix: an action sheet, or fixed slots; drop the separators in touch mode.
3. **[P2] Settings is a wall; weekly review is buried; focus is lost on every change; "Turn on" styled inconsistently; copy mentions MindChuk.** Fix: sectioned Settings, restore focus, consistent buttons.
4. **[P2] Button vocabulary drift.** The sage fill is undocumented, and the Done stamp looks tappable. Fix: document or remove the fill; redraw the stamp as a title-block mark.
5. **[P3] Phone chrome is heavy and the controls sit at the top, out of thumb reach.** Fix: one-row header on scroll, or bottom tabs; Done at the bottom of sheets.

## Detector
- The CLI found 0 issues.
- The overlay's only real find was text-occlusion from the v31 Play badge, now fixed.
- The other flags are false positives: a dead grid rule, the documented palette, intended ellipses.
- Phone: no horizontal overflow in any state.
- Under 44px: `.vbar` (28px), link buttons (40px; effective 22–34px where they overlap), checkboxes at 42px.
- All text passes AA. Tightest: Delete on the yellow note at 4.77.

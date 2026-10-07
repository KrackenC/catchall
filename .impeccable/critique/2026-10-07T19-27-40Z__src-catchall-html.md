---
target: Catchall app (src/catchall.html), v21
total_score: 27
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/private/tmp/claude-501/-Users-craigcorrell/df7a5971-7184-4481-b3cc-28b79359fea5/scratchpad/catchall/src/catchall.html"
target_fingerprint: "sha256:d672bfbad48124240c6e37d982b5630213c490c3659cda07e36f33cae71f885c"
target_path: /private/tmp/claude-501/-Users-craigcorrell/df7a5971-7184-4481-b3cc-28b79359fea5/scratchpad/catchall/src/catchall.html
timestamp: 2026-10-07T19-27-40Z
slug: src-catchall-html
---
Method: dual-agent (A: design review sub-agent, B: detector + browser sub-agent). Scored on v21.

## Design Health Score: 27/40 (Acceptable, top of band)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Saved toasts stack up to 4 on rapid capture |
| 2 | Match System / Real World | 3 | Tag "Keyword" unexplained in Settings |
| 3 | User Control and Freedom | 3 | Archive toast has no Undo |
| 4 | Consistency and Standards | 3 | Settings tag Delete red at rest; pinned blue = blue note color |
| 5 | Error Prevention | 3 | Pinned vs blue-colored notes indistinguishable |
| 6 | Recognition Rather Than Recall | 3 | Capture syntax only taught in empty state |
| 7 | Flexibility and Efficiency | 2 | No shortcuts for pin/archive/delete; no bulk archive |
| 8 | Aesthetic and Minimalist Design | 2 | Desktop per-note chrome (tag select + 4 actions); Board cards ~65% controls |
| 9 | Error Recovery | 3 | Status codes in some messages |
| 10 | Help and Documentation | 2 | Syntax help gone after day one; "press Enter" wrong on phones |

## Design Specificity Verdict
Authored, not interchangeable; red discipline holds. Generic spots: per-note native tag select, Board Move-to select, sliders icon on Actions.
Detector: src 0; index 1 advisory grid (false positive). Browser: Board scroller still clips archive column at right edge (real); cal snip overflow and amber dark-glow (overlay artifact) false positives.

## Priority Issues
1. [P1] Desktop per-note chrome outweighs notes. Fix: reveal labeled actions on hover/focus on desktop; tag chip that opens the menu; Board Move folded into the revealed row. Command: distill, layout.
2. [P1] Pinned blue wash collides with blue note color. Fix: pinned as a ruled "Pinned" lettering/rule, color owns fill. Command: colorize.
3. [P2] Toast stacking buries capture on phones. Fix: single updating toast or none for plain saves. Command: quieter.
4. [P2] Phone Actions toggle under-sized and faint. Fix: 44px outlined secondary, graphite label. Command: adapt.
5. [P2] Syntax help vanishes after first note. Fix: labeled Shortcuts popover; phone-correct copy; keyword explanation in Settings. Command: onboard.

## Persona Red Flags
Alex: no keyboard pin/archive/delete; no bulk archive; shortcuts in tooltip only; Archive no Undo.
Sam: pin flag icon-only status; pinned vs colored by fill alone.
Casey: Actions toggle 32px; stacked toasts in thumb zone; chip row hard clip; Enter does not save on phone.
Owner clearing the inbox: no cleared-sheet moment.

## Minor Observations
Triplicated counts on desktop Feed; Reminders hint repeated; Settings Delete red and green Connect as second primary; sidebar outline is a third container type; calendar out-of-month greyish; dark colored notes still olive; error codes shown; stylesheet layering duplicates .n-actions/.act.del rules; Board scroller right-edge clip.

## Questions to Consider
Tag as lettering not a dropdown? Same reveal model on desktop? Cleared-sheet title block? Any toast for plain saves? Is pinned a color or a position?

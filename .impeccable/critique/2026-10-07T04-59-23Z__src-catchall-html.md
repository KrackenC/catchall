---
target: Catchall app (src/catchall.html), v20
total_score: 27
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:/private/tmp/claude-501/-Users-craigcorrell/df7a5971-7184-4481-b3cc-28b79359fea5/scratchpad/catchall/src/catchall.html"
target_fingerprint: "sha256:ead3cbdd10f955c2bbffee0f4a20510649baac6efb0225948f6261cfb66e489f"
target_path: /private/tmp/claude-501/-Users-craigcorrell/df7a5971-7184-4481-b3cc-28b79359fea5/scratchpad/catchall/src/catchall.html
timestamp: 2026-10-07T04-59-23Z
slug: src-catchall-html
---
Method: dual-agent (A: design review sub-agent, B: detector + browser sub-agent). Scored on v20.

## Design Health Score: 27/40 (Acceptable)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Red Reminders badge counts upcoming, not due |
| 2 | Match System / Real World | 3 | Sync setup GitHub jargon; unexplained tag Keyword |
| 3 | User Control and Freedom | 3 | Archive toast has no Undo |
| 4 | Consistency and Standards | 2 | Card actions differ per view; title weight varies; "coming up" vs "reminder" |
| 5 | Error Prevention | 3 | Archive and Delete adjacent on phone |
| 6 | Recognition Rather Than Recall | 3 | Capture grammar hint hidden on phone |
| 7 | Flexibility and Efficiency | 3 | No bulk select/archive |
| 8 | Aesthetic and Minimalist Design | 2 | Per-card strips with red Delete on every sheet |
| 9 | Error Recovery | 3 | Specific toasts |
| 10 | Help and Documentation | 2 | No shortcut list; keywords unexplained |

## Design Specificity Verdict
Mostly authored: pad ground, ruled title blocks everywhere, condensed tabular lettering, shell tabs. Generic spots: card anatomy (text + rule + form-select + toolbar), stock month grid, Settings dialog.
Detector: src 0; index 1 advisory (grid background, false positive). Browser: Board skipped-heading (h1 -> h3) real; Board edge-flush columns (no scroller inset) real; cal snip overflow false positive.

## Priority Issues
1. [P1] Icon-only x close on Settings/Edit/New tag dialogs breaks the text-label rule. Fix: labeled Close/Done. Command: clarify.
2. [P1] Red Delete on every card + red badge for non-due reminders dilute red. Fix: Delete graphite until hover/focus; badge counts due only; Color moves into Edit. Command: quieter / distill / harden.
3. [P1] Phone action strip as heavy as the note. Fix: actions on the tapped note only, or labeled Actions disclosure. Command: distill / adapt.
4. [P2] Board cards tall from stacked Move buttons; actions inconsistent across views; title weight varies. Fix: one "Move to..." select; shared action set; consistent first-line title. Command: layout / polish.
5. [P2] Sync status faint, not keyboard-focusable, no next step. Fix: real button "Set up sync"; plain-language sync intro; "GitHub token" label. Command: clarify / harden.

## Persona Red Flags
Casey (phone): no grammar hint; Archive/Delete adjacent; chip row clips with no cue; Settings x out of thumb reach.
Alex (power user): no bulk actions; shortcuts undiscoverable; no keyboard Pin/Archive.
Sam (a11y): icon-only dialog close; #sync not focusable; 11-12px texts; muted labels on tinted notes.
Weekend Sorter: tall Board cards; no untagged inbox column; no "pad cleared" moment.

## Minor Observations
Reminders repeats the grammar hint; calendar selected day below the fold; "Feed" title repeats active tab; tag select reads as a form field; dark yellow note still olive; Settings scrollbar and red tag Deletes next to inputs; grey sync dot; Board h1 -> h3 heading skip; Board scroller has no edge inset.

## Questions to Consider
Meta row as a small title block? Actions only on the touched note? Should red appear when nothing is due? Board as a sorting tool with an untagged inbox column and a "pad cleared" moment? Calendar showing the selected day beside the grid?

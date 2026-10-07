---
target: Catchall app (src/catchall.html)
total_score: 28
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/private/tmp/claude-501/-Users-craigcorrell/df7a5971-7184-4481-b3cc-28b79359fea5/scratchpad/catchall/src/catchall.html"
target_fingerprint: "sha256:f8bd2283d241355197c2e6c0c8d4762a682ecbf6126453365dbb48a913509633"
target_path: /private/tmp/claude-501/-Users-craigcorrell/df7a5971-7184-4481-b3cc-28b79359fea5/scratchpad/catchall/src/catchall.html
timestamp: 2026-10-07T02-10-15Z
slug: src-catchall-html
---
Method: dual-agent (A: design review sub-agent, B: detector + browser sub-agent)

## Design Health Score: 28/40 (Good, low end)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | "Not syncing" is small muted text on the shell; sync failure should be unmissable |
| 2 | Match System / Real World | 3 | Settings leaks gist / token / ghp_ jargon; capture hint repeats placeholder |
| 3 | User Control and Freedom | 3 | Undo toasts good |
| 4 | Consistency and Standards | 2 | Each view frames itself differently; card action sets differ Feed/Board/Reminders; red Connect breaks Two Pencils |
| 5 | Error Prevention | 3 | Delete wraps next to Archive on phone |
| 6 | Recognition Rather Than Recall | 3 | Settings segmented groups unlabeled; Board move buttons ambiguous |
| 7 | Flexibility and Efficiency | 3 | No multi-select / bulk archive for Mac review |
| 8 | Aesthetic and Minimalist Design | 2 | Action strip outweighs note; ~12 filter controls above first note; calendar card soup |
| 9 | Error Recovery | 3 | Undo restores; empty-filter recovery |
| 10 | Help and Documentation | 3 | Contextual hints only |

## Design Specificity Verdict
Authored on the outside (pad grid, green shell, ruled title blocks), generic kit inside (bordered button rows, chip rows, card-soup calendar). Carry the ruled, drafted logic into card action bands, the filter rail and the calendar grid.
Detector: src 0 findings; index.html 5 advisories (4 update-banner colors, grid background) - false positives for app design. Browser: #q placeholder 4.4:1 (real, minor); calendar snip overflow and grid background are false positives.

## Priority Issues
1. [P1] Action strip outweighs note text on every card. Fix: merge meta + actions into one ruled band, borderless labeled text actions with hairline separators, Delete last in red text. Command: distill / layout.
2. [P1] Desktop ignores the Mac window: narrow centered column, misaligned header, 12 controls above first note. Fix: >=1024px ruled tag/filter rail + feed column, header aligned to it. Command: layout / adapt.
3. [P2] Inconsistent view headers. Fix: one title-block page header per view with count cells. Command: layout.
4. [P2] Calendar is 35 shadowed cards with ghost out-of-month cells. Fix: one ruled sheet, hairline grid, tabular counts. Command: layout / quieter.
5. [P2] Board cards: 4 ways to retag, ambiguous move buttons, undersized column names. Fix: drop tag select on Board, "Move to X ->", Title 17px column heads. Command: distill / clarify.

## Persona Red Flags
Alex (power user): no multi-select; shortcuts unadvertised; no keyboard path to Pin/Archive/Edit.
Casey (one-handed phone): capture/Save top of screen; kbd hint useless on phone; actions wrap Delete beside Archive; Board shows 1.2 columns.
Sam (accessibility): 11-12px muted text below 4.5:1; unlabeled Settings groups; pin status icon-only.
Builder at the Mac on Sunday: sorting feels like data entry; no inbox summary.

## Minor Observations
Placeholder/hint duplication; "Search everything ( / )"; #q placeholder contrast 4.4:1; All time select style; "No tag 0" chip; checklist bold title inconsistency; dark yellow note goes olive; Settings red Connect, default-blue link, heavy red tag Deletes; empty Reminders pad; update banner off-palette; Archive lane shorter than columns.

## Questions to Consider
Ruled action band instead of boxed buttons? Desk-width sorting table for the Mac? Closing "Inbox clear" moment? Calendar as one ruled sheet?

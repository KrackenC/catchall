---
target: Catchall v36
total_score: 31
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 0
target_identity: "file:/private/tmp/claude-501/-Users-craigcorrell/250288c0-b494-4848-9ca0-5b23bd8aea6e/scratchpad/catchall/src/catchall.html"
target_fingerprint: "sha256:f9e48679c72aae0af7239c463154e1e3ca50ffa5e8b9b418c768bbf57da9a2c7"
target_path: /private/tmp/claude-501/-Users-craigcorrell/250288c0-b494-4848-9ca0-5b23bd8aea6e/scratchpad/catchall/src/catchall.html
timestamp: 2026-10-10T02-45-45Z
slug: src-catchall-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score: 31/40
User control: 4. All other heuristics: 3.

## Priority issues (v36)
1. **[P2] Reminders capture row breaks on the Mac:** Dictate and Save wrap left. FIXED in v37.
2. **[P2] No-results and unknown-tag copy is unhelpful.** Should be built from the parsed query. #nope should give 0 results, not all notes. OPEN.
3. **[P2] Phone search focus reflows:** Filters jumps, ideas take two rows. FIXED in v37.
4. **[P2] Calendar opens with no day chosen.** OPEN.
5. **[P3] Phone title blocks take 2–3 rows; Settings summaries inconsistent; export icons mismatched.** FIXED in v37.

## Detector
- CLI: 0 findings.
- Overlay: only false positives, plus one cramped-padding advisory on the calendar bell pill (desktop).
- No horizontal overflow in any state; no overlaps between fixed elements (select bar to toast now 8px apart).
- Calendar and voice rows are fully contained.
- Every text pair is at least 4.5:1; lowest are clay Delete at 4.96 and dark meta-on-yellow at 4.98.
- All v34 items fixed: checkbox (whole row toggles), toast buttons, select bar, tag inputs, overlap.
- Swatch hit area is about 42px.

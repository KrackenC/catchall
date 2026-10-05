# Catchall

A personal brain-dump inbox: one capture box, keyword auto-tagging, plain-English reminders, checklists, and Board, Calendar and Reminders views.

Live: https://krackenc.github.io/catchall/

Notes sync between devices through a secret GitHub gist (Settings → Sync across devices, with a token that has the `gist` scope only). No notes are stored in this repo.

Rebuild after editing `src/catchall.html` (the same file as the Claude artifact):

    python3 build_catchall.py src/catchall.html . <new-version>

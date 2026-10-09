# Catchall

A personal brain-dump inbox: one capture box, keyword auto-tagging, plain-English reminders, checklists, and Board, Calendar and Reminders views.

Live: https://krackenc.github.io/catchall/

Notes sync between devices through a secret GitHub gist (Settings → Sync across devices, with a token that has the `gist` scope only). No notes are stored in this repo.

Rebuild after editing `src/catchall.html` (the same file as the Claude artifact):

    python3 build_catchall.py src/catchall.html . <new-version>

## Keeping the background job on time

GitHub runs `.github/workflows/reminders.yml` "every 15 minutes" on paper, but in practice often only every few hours. An outside timer can start it on time instead:

1. Make a GitHub token that can only start this repo's workflows: <https://github.com/settings/personal-access-tokens/new>. Repository access: **Only select repositories → catchall**. Permissions: **Actions → Read and write**. Expiration: up to a year (set a reminder to renew it).
2. Make a free account at <https://cron-job.org> and create a cron job:
   - **URL:** `https://api.github.com/repos/KrackenC/catchall/actions/workflows/reminders.yml/dispatches`
   - **Schedule:** every 10 minutes
   - **Advanced → Request method:** POST
   - **Headers:** `Authorization: Bearer <the token>`, `Accept: application/vnd.github+json`, `X-GitHub-Api-Version: 2022-11-28`
   - **Request body:** `{"ref":"main"}`
3. Use "Test run": GitHub answers **204 No Content**, and a new run appears under the repo's Actions tab.

The job's `concurrency` setting keeps runs from overlapping, and the 15-minute schedule stays as a backup.

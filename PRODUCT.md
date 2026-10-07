# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
One person, the owner. Nobody else reads or shares the notes.
- **Capture:** on an iPhone, through the day, from the Home Screen icon. It's quick, often one-handed, sometimes by dictation through the keyboard mic.
- **Review:** later, on a Mac, in an installed desktop app window. That's where notes get sorted, tagged, worked through, and cleared.

## Product Purpose
Catchall is a personal brain-dump inbox, modeled on mindchuk.com. Any thought goes in within seconds and gets sorted later. Success is that nothing is lost, everything is findable, and opening the app is something the owner enjoys rather than a chore.

## Positioning
Catchall is one notebook that follows its owner between phone and Mac, through their own private GitHub gist, with no account or service in between. It understands plain typing:
- "remind me … tomorrow at 9" becomes a reminder.
- A leading keyword or #hashtag files the note under a tag.
- Lines starting with "- " become a checklist.

## Operating Context
- **Content:** mostly hobby project ideas (model rockets, quad copters, RC cars, 3D printing, things to learn or build), plus to-dos and errands, links and photos, and timed reminders.
- **Where it lives:** a GitHub Pages site installed as a Home Screen app on the phone and a desktop app window on the Mac.
- **Reminder delivery:** reminders reach the phone through the ntfy app.

## Capabilities and Constraints
- **Views:** Feed (the default), Board (tags as columns), Calendar, Reminders.
- **Note features:** pin, archive, color (9 colors), a tag dropdown on every note, checklists, up to 4 images per note, links, search and filters.
- **Reminders:** repeating reminders are supported.
- **Data:** export to Markdown, CSV and JSON, and restore from a JSON backup.
- **Single file:** the whole app is one HTML file (`src/catchall.html`), shared by the GitHub Pages copy (built by `build_catchall.py` into `index.html`) and a Claude artifact copy.
- **No build step or framework.** Fonts come from Google Fonts.
- **Sync:** notes, tags and Board columns sync through a secret gist. Theme, font and density settings stay per device.
- **iPhone limits:** a Home Screen web app gets no speech recognition, so dictation there uses the keyboard's mic key. Its storage is also separate from Safari's.
- **Updates:** a version check shows an Update bar. On phones the page must never navigate or reload itself.

## Brand Commitments
- **Name:** Catchall.
- **Icon:** a yellow sticky note with a red thumbtack.
- **Labels:** every action is a text-labeled button (Pin, Edit, Color, Archive, Delete, Tag). Icon-only controls proved unrecognizable to the owner.
- **Voice:** plain, direct, sentence case.

## Evidence on Hand
The owner's real notes, used as realistic sample content:
- "Build clone rocket", "Learn remote car", "Learn Quad copter", "Learn 3D printer", "Set up brainstorming"
- Tags: hobby, learning

There are no testimonials, users, or metrics, and none should be invented.

## Product Principles
1. **Capture beats organizing.** The text box is always one tap away and saves on Enter.
2. **Fun to open.** The app should feel personal and enjoyable, never like a work tool.
3. **Every control says what it does,** in words.
4. **Phone and Mac are the same notebook.** Anything that syncs must sync, and a sync failure must be visible.
5. **Nothing is lost.** Delete has Undo, and sync merges instead of overwriting.

## Accessibility & Inclusion
- The owner relies on text labels over icons.
- Keep text legible at phone size, keep tap targets comfortable, and support both light and dark mode, following the device.

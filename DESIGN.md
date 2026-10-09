---
name: Catchall
description: A personal capture inbox kept in a linen dot-grid notebook.
colors:
  linen: "#eceae2"
  linen-dot: "#cdc7b6"
  sheet: "#fbfaf6"
  sheet-tint: "#f1eee6"
  graphite: "#2c312b"
  graphite-soft: "#5b6258"
  hairline: "#d8d4c8"
  sage-shell: "#4b6152"
  sage-shell-deep: "#3f5346"
  shell-ink: "#f5f3ec"
  shell-ink-soft: "#dbe5d9"
  rule-sage: "#7d917f"
  clay: "#a85638"
  clay-ink: "#ffffff"
  teal: "#376672"
  teal-wash: "#dbe9ed"
  ok-green: "#4d7d52"
  linen-dark: "#171a17"
  linen-dot-dark: "#323830"
  sheet-dark: "#21251f"
  sheet-tint-dark: "#2a2f28"
  graphite-dark: "#e8e9e1"
  graphite-soft-dark: "#a8b1a5"
  hairline-dark: "#363c34"
  sage-shell-dark: "#2f3c32"
  sage-shell-deep-dark: "#26312a"
  shell-ink-soft-dark: "#b3c2b4"
  rule-sage-dark: "#6f8572"
  clay-dark: "#e19478"
  clay-ink-dark: "#1d0f09"
  teal-dark: "#8cc1cf"
  teal-wash-dark: "#1f3238"
  ok-green-dark: "#93c49a"
  shell-ok: "#7bd88f"
  shell-alert: "#ff8a78"
  shell-alert-ink: "#ffd0c8"
  photo-ground: "#000000"
  photo-ink: "#ffffff"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1
  numeral:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "tnum"
  capture:
    fontFamily: "Barlow, Segoe UI, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Barlow, Segoe UI, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  note:
    fontFamily: "Barlow, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.45
  caption:
    fontFamily: "Barlow, Segoe UI, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  micro:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
  body-hyperlegible:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-typewriter:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1
  action:
    fontFamily: "Barlow, Segoe UI, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1
rounded:
  block: "4px"
  tag: "6px"
  control: "8px"
  shell-tabs: "10px"
  sheet: "12px"
  capture: "14px"
  pill: "99px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  sheet-pad: "14px"
  lg: "16px"
  grid: "20px"
components:
  button-primary:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.clay-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "7px 12px"
    height: "36px"
  button-secondary:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.graphite}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "7px 10px"
    height: "36px"
  button-secondary-hover:
    backgroundColor: "{colors.sheet-tint}"
    textColor: "{colors.graphite}"
  button-secondary-pressed:
    backgroundColor: "{colors.teal-wash}"
    textColor: "{colors.teal}"
  button-danger:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.clay}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "7px 10px"
  button-danger-hover:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.clay-ink}"
  filter-chip:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "7px 12px"
  filter-chip-active:
    backgroundColor: "{colors.sage-shell}"
    textColor: "{colors.shell-ink}"
  tag-chip:
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "4px 9px"
  title-block:
    textColor: "{colors.graphite}"
    typography: "{typography.title}"
    rounded: "{rounded.block}"
    padding: "9px 14px"
  title-block-due:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.clay-ink}"
  note-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.graphite}"
    typography: "{typography.note}"
    rounded: "{rounded.sheet}"
    padding: "14px 14px 12px"
  capture-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.graphite}"
    typography: "{typography.capture}"
    rounded: "{rounded.capture}"
    padding: "14px 14px 12px"
  shell-header:
    backgroundColor: "{colors.sage-shell}"
    textColor: "{colors.shell-ink}"
    padding: "10px 16px"
  view-tab:
    textColor: "{colors.shell-ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  view-tab-active:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.graphite}"
  reminder-pill:
    backgroundColor: "{colors.teal-wash}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "4px 8px"
  reminder-pill-due:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.clay-ink}"
---

# Design System: Catchall

## Overview

**Creative North Star: "The Linen Notebook"**

Catchall is kept in a builder's dot-grid notebook: warm linen paper with a soft dot every 20px, a sage cloth band across the top as the shell, and loose sheets of lighter paper resting on the page. Every group of notes (a day in the Feed, the Pinned sheet, a calendar day, a Reminders section, a Board column) opens with a ruled title block, the heading box carried over from the engineering pad this notebook grew out of. Ink is graphite. Two inks are kept beside it: clay for the three things that must stand out (Save, Delete, anything due), and teal for pins, selection, focus and highlights.

The world is calm, warm and workmanlike rather than cute. It turns away from both the sticky-note-on-cork convention and the cold grey notes app with a single accent. Density is moderate: sheets have 14px insets, a 12px gap between sheets, and comfortable 36px controls (44px on touch screens), with a compact setting that tightens to 8px and 10px. Labels are condensed engineering lettering (Barlow Semi Condensed), body text is Barlow, and every count and time is set in tabular figures so digits line up like a schedule.

Light and dark both follow the device. Dark mode is the same notebook at night: near-black paper with a faint dot, a darker sage shell, and the two inks brightened to hold contrast (clay #e19478, teal #8cc1cf).

**Key Characteristics:**
- Linen ground with a 20px dot grid on the page background, never on the sheets.
- Sage shell header with labeled view tabs and a sync state.
- Light sheets with one soft shadow and no outline; hairline rules divide a sheet's body, meta and actions.
- The ruled title block (1.5px rule-sage border, 4px corners, count cells split by vertical rules) heads every group.
- Clay only on Save, Delete and what's due; teal for pin, selection and focus.
- Every action is a text-labeled button; icons only ever sit beside a word.
- Tabular figures for every count, date and time.

## Colors

Palette: **Linen & Sage** (chosen 2026-10-08 for a calmer, warmer feel). Graphite ink on linen paper, a sparing clay, a sparing teal, a sage shell, and warm neutrals for everything else. In the stylesheet the clay token is still named `--red` and the teal token `--blue`; the names are historical, the values are these.

### Primary
- **Clay** (#a85638 light, #e19478 dark): the Save button, Delete (outlined at rest, filled on hover), armed confirmations, the active Dictate mic, due reminder pills, the "due now" title-block cell, the overdue time in Reminders, the reminders badge on the view tab, alarm toasts, and the text caret. Ink on it is white (#ffffff) in light mode and near-black (#1d0f09) in dark.

### Secondary
- **Teal** (#376672 light, #8cc1cf dark): focus rings, pressed toggles (Pin, filter toggles), checked checkboxes, today's date in the calendar, the selected calendar cell, the pin flag, links, and the drop target outline on the Board.
- **Teal Wash** (#dbe9ed light, #1f3238 dark): the fill behind pressed toggles, pinned sheets (mixed 55% into the sheet), reminder pills that are not due, text selection, and the dictation hint.

### Tertiary
- **Sage Shell** (#4b6152): the header band. **Sage Shell Deep** (#3f5346) is the tab tray and the brand-mark tile inside the header. **Shell Ink** (#f5f3ec) and **Shell Ink Soft** (#dbe5d9) are the header's text and inactive tabs.
- **Rule Sage** (#7d917f light, #6f8572 dark): the ink of every title block and Board column rule, and the empty-state dashed border.
- **OK Green** (#4d7d52): the synced state in Settings. In the header, the synced dot is a lighter green so it reads on the shell.

### Neutral
- **Linen** (#eceae2): the page ground. **Linen Dot** (#cdc7b6 light, #323830 dark): the 1px dots of the 20px grid over it.
- **Sheet** (#fbfaf6): notes, the capture box, reminder rows, calendar cells, dialogs, controls at rest. **Sheet Tint** (#f1eee6): hover fill, Board column paper, segmented-control tray, preview pills.
- **Graphite** (#2c312b): all body ink. **Graphite Soft** (#5b6258): metadata, counts, placeholders, inactive labels.
- **Hairline** (#d8d4c8): control borders and the rules inside a sheet.

Tag and note colors are content color, not system color, and both are muted earth tones chosen to sit on linen. None of them is a red, so clay never doubles as a category.
- **Tag colors (11), in the order new tags take them:** Sage #5a8560, Slate #4f6b9a, Ochre #a87a1e, Plum #85507a, Moss #6f7f2e, Walnut #8f6748, Heather #7c6aa8, Pine #2f6b5a, Rose #b05a76, Fjord #4a7f9e, Stone #7a7468. Shown as a dot beside the tag's name; in dark mode the dot is lightened 28% toward white. Tags from the earlier saturated palette are mapped to the nearest earth tone on load.
- **Note colors (nine, plus none):** Butter #e8c547, Apricot #e3955a, Rose #c9667f, Blush #d48aa0, Heather #8f7bbd, Slate #6f8bb8, Lake #5e9aa0, Sage #7ea576, Stone #a39d8f. They tint a sheet by mixing 24% into Sheet (17% in oklch in dark mode, so warm colors stay warm). The "no color" swatch is marked with a Graphite Soft slash, never clay.

### Utility
- **Header signals:** **Shell OK** (#7bd88f) is the synced dot. **Shell Alert** (#ff8a78) and **Shell Alert Ink** (#ffd0c8) mark sync problems. **Shell Line** (white at 24%) outlines controls on the header band. These live only on the sage shell.
- **Scrim:** dark sage at 55% (black at 62% in dark mode) behind dialogs.
- **Photo:** **Photo Ground** (#000) behind the image viewer. **Photo Scrim** (black at 65%) with **Photo Ink** (#fff) on the remove button over image thumbnails. Photos keep a neutral ground so their colors read true.
- **Shadows:** every shadow is the shadow tint (`--sh-rgb`) at an opacity. No literal black or white shadows.

Every color in the stylesheet is a token. Component rules reference tokens only.

### Named Rules
**The Two Inks Rule.** Clay means act or attend: Save, Delete, due. Teal means where you are: pinned, selected, focused, the chosen tag or filter. Neither ink is decoration, and neither stands in for the other.

**The Paper Is Linen Rule.** Grounds are warm linen and structure is sage; the only near-white is the sheet. Neutrals are warm (linen, stone, graphite), never a cool grey.

## Typography

**Display Font:** Barlow Semi Condensed (with Arial Narrow, system-ui)
**Body Font:** Barlow (with Segoe UI, system-ui)
**Alternate body fonts (user setting):** Atkinson Hyperlegible, JetBrains Mono

**Character:** Condensed engineering lettering for every label, heading and number, over a plain, open grotesk for what the owner wrote. The pairing reads like a draftsman's title block filled in by hand.

### Hierarchy
- **Display** (700, 26px, 1.1, -0.01em): view headings (Board, Calendar month, Reminders) and the empty-state headline.
- **Headline** (700, 24px, 1.1): dialog titles.
- **Title** (700, 18px, 1; 17px on phones): title-block labels, note titles, Board column names (17px), Settings section heads (16px).
- **Numeral** (700, 20px, 1, tabular): the time in the Reminders time column.
- **Capture** (400, 19px, 1.45): the capture box text.
- **Note** (400, 17px, 1.45): note bodies and checklist items.
- **Body** (400, 16px, 1.5): everything else at reading size.
- **Label** (600, 14px, 1): view tabs (15px), filter chips, tag chips and reminder pills (13px), tag select, segmented buttons. Count cells in the title block are 500 weight with the number in 700.
- **Action** (Barlow 500, 14px, 1): text inside labeled action buttons.

### Named Rules
**The Tabular Figures Rule.** Every count, date, time and badge uses `font-variant-numeric: tabular-nums` in the condensed face.

**The Sentence Case Rule.** Labels and headings are sentence case at normal tracking. No uppercase, no letterspaced small labels.

## Layout

A single centered column (max 740px) inside a 1200px frame, with 18px top and 16px side padding and 80px of bottom room above the toasts. The header is sticky and spans the full width; its contents share the 1200px frame. Sheets stack with a 12px gap (`--gap`) and a 14px inset (`--pad`); the compact density setting sets these to 8px and 10px. Stacks of sections sit 16px apart.

The Board is a horizontal track of columns at least 260px wide, 12px apart, scrolling sideways. The Calendar is a seven-column grid with 4px gaps and 88px cells (54px on phones, snippets hidden). Reminders rows put a fixed 6.5rem time column on the left so times line up.

At 640px and below, the header is one row (wordmark, sync, Settings) and the view tabs move to a sage bar fixed at the bottom of the screen, in thumb reach: five equal tabs, each an icon above its word, at least 48px tall, clearing the home indicator. Secondary filters open as a sheet from the bottom with Done at the foot; a note's extra actions (Edit, Remove reminder, Delete) open the same kind of sheet from its More button, so the buttons on a note never move. At 560px the reminder text moves above its time.

## Elevation & Depth

Two layers of material and nothing in between. Paper on the pad lifts by one soft shadow; ruled structure (title blocks, Board columns) is flat ink on the pad. Shadows are tinted with the pad's own green-black (`--sh-rgb: 36 60 40`; pure black in dark mode).

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 2px rgb(36 60 40/.14), 0 6px 16px -8px rgb(36 60 40/.30)`): notes, the capture box, reminder rows, calendar cells.
- **Sheet focused** (`0 1px 2px rgb(36 60 40/.14), 0 10px 24px -10px rgb(36 60 40/.38), 0 0 0 2px #3d6f7d`): the capture box while typing.
- **Shell** (`0 2px 8px -2px rgb(36 60 40/.35)`): under the header band.
- **Dialog** (`0 24px 60px -20px rgb(36 60 40/.55)`): dialogs, over a green-black scrim.

### Named Rules
**The One Elevation Rule.** A sheet has one shadow and no outline. Pressed state is shown by color, not by lifting or sinking.

## Shapes

Corners step up with the size of the object: 4px for the title block, 6px for tags and pills, 8px for every control and calendar cell, 10px for the header tab tray, 12px for note sheets and Board columns, 14px for the capture box, dialogs and the empty state. Round shapes are reserved for dots (tag and sync) and the today marker on the calendar. Structural lines are 1.5px rule green; the lines inside a sheet are 1px hairline. Dashed borders mean "a place to put something": the New tag chip, the empty state, the Archive drop column, and the Board drop target.

## Components

### Buttons
Plain, labeled, one shape.
- **Shape:** gently squared (8px), at least 36px tall, an icon beside the word.
- **Primary:** Save only, clay fill with white bold text and a small shadow; darkens about 12% on hover.
- **Secondary:** sheet fill, 1px hairline border, graphite text; hover deepens the border to graphite-soft and fills with sheet tint. No press motion.
- **Go:** sage (Sage Shell) fill with shell ink, 600 weight. The one strong button for moving on or switching something on: Back to Feed after sorting, Connect, Turn on, Done in a sheet. Never for Save or Delete, and never more than one per view.
- **Toggle (pressed):** blue text and border on the blue wash (Pin, filter toggles).
- **Danger:** red text with a red-tinted border at rest, fills solid red on hover. Delete has Undo, so it is not hidden behind a menu.
- **Header buttons:** transparent, a 28% white outline, shell ink, condensed label; hover fills with deep shell green.

### Chips
- **Filter chips:** condensed 600 14px, 8px corners, sheet fill with a hairline border and a tabular count. Active is teal wash with a teal border and graphite text, on the Mac rail and the phone alike. The New tag chip is dashed.
- **Tag chips on a note:** condensed 600 13px lettering, 6px corners, no fill, a 1.5px outline of the tag color mixed 70% toward graphite. Each tag appears once per note.
- **Reminder pills:** blue wash with graphite text; due turns clay; sent is sheet tint, struck through.

### Cards / Containers
- **Corner Style:** 12px for note sheets and reminder rows.
- **Background:** sheet; pinned sheets mix in 55% blue wash; colored notes mix their note color 24% into the sheet.
- **Shadow Strategy:** the single Sheet shadow (see Elevation & Depth).
- **Border:** none outside; inside, 1px hairline rules separate the body from the meta line and the actions.
- **Internal Padding:** 14px sides and top, 12px bottom.

### Inputs / Fields
- **Capture box:** the top of a fresh sheet, 14px corners, 19px text, clay caret. A hairline rule divides the text from the Photo, Dictate and Save row. Focus adds a 2px blue ring to the sheet shadow; a dragged file turns the border dashed blue.
- **Search and selects:** sheet fill, hairline border, 8px corners; focus turns the border blue.
- **Dialog fields:** linen fill inside the sheet-colored dialog, hairline border, 8px corners.
- **Focus everywhere:** a 2px teal outline offset 2px.

### Navigation
The shell header is a sage band: the wordmark (condensed 700 24px) with the sticky-note brand mark on a deep-sage tile, then the view tabs in a deep-sage tray (10px corners). Inactive tabs are shell-ink-soft condensed 600 15px; hover brightens to shell ink; the active tab is a sheet-colored tab with graphite text, like a page pulled forward. A clay badge on Reminders counts what's due. Sync state sits beside the tabs as a dot and words, and on phones only the dot shows while all is well.

### Title Block (signature)
The ruled heading box from a computation sheet, built by `titleBlock()`. A 1.5px rule-sage frame with 4px corners over a 70% sheet wash. The label (Title role) fills the left; to its right, cells split off by 1.5px vertical rules hold counts in condensed 500 14px with the number bold and tabular: "4 notes", "1 reminder". When anything in the group is due, that cell fills clay and reads "due now". It heads each Feed day, the Pinned sheet, the selected calendar day and each Reminders section. Board columns carry the same idea as their header: a sheet-colored strip with a 1.5px rule beneath the column name, inside a 1.5px rule-sage column frame.

### Sort
One note at a time on a single sheet, oldest first. Below it sit the choices: "File under" tag chips, then Keep, Pin, Archive and Delete. On a Mac each choice shows its key in a small keycap (1–9, K, P, A, ⌫; Z undoes). On a phone the choices sit in a docked sheet at the bottom of the screen, in thumb reach, with the four actions as equal stacked buttons. Swiping moves the card sideways without tilting it; a word in a ruled box ("Keep" in teal, "Archive" in graphite, "Delete" in clay) and a matching 2px ring say what letting go will do. Every choice stamps the note as sorted, so it leaves the queue on every device. The last screen is a sheet titled "All sorted"; its title block ends in a teal-inked "Done" cell (a ruled cell with a check, never a boxed button shape), followed by a ruled tally of the round that lasts until "Start over from the oldest note". On phones only the counts above zero show.

## Do's and Don'ts

### Do:
- **Do** open every group of notes with the ruled title block, with tabular counts in its cells.
- **Do** keep the 20px dot grid on the page ground and keep sheets clean paper.
- **Do** spend clay (#a85638) only on Save, Delete, and anything due or overdue.
- **Do** use teal (#376672) for pinned, selected, pressed and focused states.
- **Do** give every action a visible word; an icon may sit beside the word, never replace it.
- **Do** set counts, dates and times in Barlow Semi Condensed with tabular figures.
- **Do** lift sheets with the one Sheet shadow and divide their insides with 1px hairline rules.

### Don't:
- **Don't** use clay or any red for decoration, emphasis, or categories. If it is not Save, Delete or due, it is not clay.
- **Don't** add icon-only controls. The owner could not recognize them.
- **Don't** introduce cool grey neutrals or saturated UI-kit colors; neutrals are warm and tags are earth tones.
- **Don't** use uppercase letterspaced labels or small headings above sections. The title block is the heading.
- **Don't** outline sheets or stack extra shadows on them.
- **Don't** pin notes to cork, tilt them (not even while swiping in Sort), or draw them as sticky notes. The sticky note lives only in the app icon.

---
name: Catchall
description: A personal capture inbox drawn on an engineer's computation pad.
colors:
  pad-green: "#dfe8d2"
  pad-grid: "#cbdabb"
  sheet: "#f8fbf3"
  sheet-tint: "#e9f0df"
  graphite: "#242b25"
  graphite-soft: "#526056"
  hairline: "#c3d3b4"
  shell-green: "#2f5a3c"
  shell-green-deep: "#264b31"
  shell-ink: "#eef5e6"
  shell-ink-soft: "#b9cdb4"
  rule-green: "#3d7350"
  red-pencil: "#c2392a"
  red-pencil-ink: "#ffffff"
  nonphoto-blue: "#1f74a3"
  nonphoto-wash: "#d3ecf7"
  ok-green: "#2e7d4f"
  pad-green-dark: "#141b15"
  pad-grid-dark: "#1c261d"
  sheet-dark: "#1d261e"
  sheet-tint-dark: "#253027"
  graphite-dark: "#e2eadb"
  graphite-soft-dark: "#9db0a0"
  hairline-dark: "#334237"
  shell-green-dark: "#1f3a27"
  shell-green-deep-dark: "#18301f"
  shell-ink-soft-dark: "#9fb9a3"
  rule-green-dark: "#5d9a70"
  red-pencil-dark: "#ff7a66"
  red-pencil-ink-dark: "#1a0d0a"
  nonphoto-blue-dark: "#6cc4ea"
  nonphoto-wash-dark: "#173c4b"
  ok-green-dark: "#5cc489"
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
    backgroundColor: "{colors.red-pencil}"
    textColor: "{colors.red-pencil-ink}"
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
    backgroundColor: "{colors.nonphoto-wash}"
    textColor: "{colors.nonphoto-blue}"
  button-danger:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.red-pencil}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "7px 10px"
  button-danger-hover:
    backgroundColor: "{colors.red-pencil}"
    textColor: "{colors.red-pencil-ink}"
  filter-chip:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "7px 12px"
  filter-chip-active:
    backgroundColor: "{colors.shell-green}"
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
    backgroundColor: "{colors.red-pencil}"
    textColor: "{colors.red-pencil-ink}"
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
    backgroundColor: "{colors.shell-green}"
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
    backgroundColor: "{colors.nonphoto-wash}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "4px 8px"
  reminder-pill-due:
    backgroundColor: "{colors.red-pencil}"
    textColor: "{colors.red-pencil-ink}"
---

# Design System: Catchall

## Overview

**Creative North Star: "The Engineer's Computation Pad"**

Catchall is drawn on the green-tinted, gridded pad a builder plans projects on. The desk is pad-green paper with a faint 20px grid ruled across the whole page. A deep pad-green band runs across the top as the shell. Notes are lighter loose sheets resting on the pad, and every group of them (a day in the Feed, the Pinned sheet, a calendar day, a Reminders section, a Board column) opens with a ruled title block, the way a computation sheet carries its heading boxes. Ink is graphite. Two pencils are kept on the pad: red pencil for the three things that must stand out (Save, Delete, anything due), and non-photo blue for pins, selection, focus and highlights.

The world is plain and workmanlike rather than cute. It turns away from both the sticky-note-on-cork convention and the grey notes app with a single accent. Density is moderate: sheets have 14px insets, a 12px gap between sheets, and comfortable 36px controls, with a compact setting that tightens to 8px and 10px. Labels are condensed engineering lettering (Barlow Semi Condensed), body text is Barlow, and every count and time is set in tabular figures so digits line up like a schedule.

Light and dark both follow the device. Dark mode is the same pad at night: near-black green paper, a darker shell, and the pencils brightened to hold contrast (red #ff7a66, blue #6cc4ea).

**Key Characteristics:**
- Pad-green ground with a 20px grid on the page background, never on the sheets.
- Deep green shell header with labeled view tabs and a sync state.
- Light sheets with one soft shadow and no outline; hairline green rules divide a sheet's body, meta and actions.
- The ruled title block (1.5px rule-green border, 4px corners, count cells split by vertical rules) heads every group.
- Red pencil only on Save, Delete and what's due; non-photo blue for pin, selection and focus.
- Every action is a text-labeled button; icons only ever sit beside a word.
- Tabular figures for every count, date and time.

## Colors

A two-pencil palette on green engineering paper: graphite ink, a sparing red, a sparing blue, and everything else in pad greens.

### Primary
- **Red Pencil** (#c2392a light, #ff7a66 dark): the Save button, Delete (outlined at rest, filled on hover), armed confirmations, the active Dictate mic, due reminder pills, the "due now" title-block cell, the overdue time in Reminders, the reminders badge on the view tab, alarm toasts, and the text caret. Ink on it is white (#ffffff) in light mode and near-black (#1a0d0a) in dark.

### Secondary
- **Non-Photo Blue** (#1f74a3 light, #6cc4ea dark): focus rings, pressed toggles (Pin, filter toggles), checked checkboxes, today's date in the calendar, the selected calendar cell, the pin flag, links, and the drop target outline on the Board.
- **Non-Photo Wash** (#d3ecf7 light, #173c4b dark): the fill behind pressed toggles, pinned sheets (mixed 55% into the sheet), reminder pills that are not due, text selection, and the dictation hint.

### Tertiary
- **Shell Green** (#2f5a3c): the header band and the active filter chip. **Shell Green Deep** (#264b31) is the tab tray and the brand-mark tile inside the header. **Shell Ink** (#eef5e6) and **Shell Ink Soft** (#b9cdb4) are the header's text and inactive tabs.
- **Rule Green** (#3d7350 light, #5d9a70 dark): the ink of every title block and Board column rule, and the empty-state dashed border.
- **OK Green** (#2e7d4f): the synced state in Settings. In the header, the synced dot is a lighter green so it reads on the shell.

### Neutral
- **Pad Green** (#dfe8d2): the page ground. **Pad Grid** (#cbdabb): the 1px grid lines over it.
- **Sheet** (#f8fbf3): notes, the capture box, reminder rows, calendar cells, dialogs, controls at rest. **Sheet Tint** (#e9f0df): hover fill, Board column paper, segmented-control tray, preview pills.
- **Graphite** (#242b25): all body ink. **Graphite Soft** (#526056): metadata, counts, placeholders, inactive labels.
- **Hairline** (#c3d3b4): control borders and the rules inside a sheet.

Note colors (nine, plus none) and tag colors come from a fixed user palette and tint a sheet by mixing 24% into Sheet. They are content color, not system color. The "no color" swatch is marked with a Graphite Soft slash, never red.

### Utility
- **Header signals:** **Shell OK** (#7bd88f) is the synced dot. **Shell Alert** (#ff8a78) and **Shell Alert Ink** (#ffd0c8) mark sync problems. **Shell Line** (white at 24%) outlines controls on the header band. These live only on the deep green shell.
- **Scrim:** dark green at 55% (black at 62% in dark mode) behind dialogs.
- **Photo:** **Photo Ground** (#000) behind the image viewer. **Photo Scrim** (black at 65%) with **Photo Ink** (#fff) on the remove button over image thumbnails. Photos keep a neutral ground so their colors read true.
- **Shadows:** every shadow is the shadow tint (`--sh-rgb`) at an opacity. No literal black or white shadows.

Every color in the stylesheet is a token. Component rules reference tokens only.

### Named Rules
**The Two Pencils Rule.** Red means act or attend: Save, Delete, due. Blue means where you are: pinned, selected, focused. Neither pencil is decoration, and neither stands in for the other.

**The Paper Is Green Rule.** Grounds and structure are greens; the only near-white is the sheet. There is no grey in the system.

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

At 640px and below, the view tabs drop to their own full-width row with icons hidden and equal-width labels; header buttons keep their words; secondary filters fold behind a Filters toggle while search stays visible. At 560px the reminder text moves above its time.

## Elevation & Depth

Two layers of material and nothing in between. Paper on the pad lifts by one soft shadow; ruled structure (title blocks, Board columns) is flat ink on the pad. Shadows are tinted with the pad's own green-black (`--sh-rgb: 36 60 40`; pure black in dark mode).

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 2px rgb(36 60 40/.14), 0 6px 16px -8px rgb(36 60 40/.30)`): notes, the capture box, reminder rows, calendar cells.
- **Sheet focused** (`0 1px 2px rgb(36 60 40/.14), 0 10px 24px -10px rgb(36 60 40/.38), 0 0 0 2px #1f74a3`): the capture box while typing.
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
- **Primary:** Save only, red pencil fill with white bold text and a small shadow; darkens about 12% on hover.
- **Secondary:** sheet fill, 1px hairline border, graphite text; hover deepens the border to graphite-soft and fills with sheet tint. No press motion.
- **Toggle (pressed):** blue text and border on the blue wash (Pin, filter toggles).
- **Danger:** red text with a red-tinted border at rest, fills solid red on hover. Delete has Undo, so it is not hidden behind a menu.
- **Header buttons:** transparent, a 28% white outline, shell ink, condensed label; hover fills with deep shell green.

### Chips
- **Filter chips:** condensed 600 14px, 8px corners, sheet fill with a hairline border and a tabular count. Active fills shell green with shell ink. The New tag chip is dashed.
- **Tag chips on a note:** condensed 600 13px lettering, 6px corners, no fill, a 1.5px outline of the tag color mixed 70% toward graphite. Each tag appears once per note.
- **Reminder pills:** blue wash with graphite text; due turns red pencil; sent is sheet tint, struck through.

### Cards / Containers
- **Corner Style:** 12px for note sheets and reminder rows.
- **Background:** sheet; pinned sheets mix in 55% blue wash; colored notes mix their note color 24% into the sheet.
- **Shadow Strategy:** the single Sheet shadow (see Elevation & Depth).
- **Border:** none outside; inside, 1px hairline rules separate the body from the meta line and the actions.
- **Internal Padding:** 14px sides and top, 12px bottom.

### Inputs / Fields
- **Capture box:** the top of a fresh sheet, 14px corners, 19px text, red caret. A hairline rule divides the text from the Photo, Dictate and Save row. Focus adds a 2px blue ring to the sheet shadow; a dragged file turns the border dashed blue.
- **Search and selects:** sheet fill, hairline border, 8px corners; focus turns the border blue.
- **Dialog fields:** pad-green fill inside the sheet-colored dialog, hairline border, 8px corners.
- **Focus everywhere:** a 2px non-photo blue outline offset 2px.

### Navigation
The shell header is a deep pad-green band: the wordmark (condensed 700 24px) with the sticky-note brand mark on a deep-green tile, then the view tabs in a deep-green tray (10px corners). Inactive tabs are shell-ink-soft condensed 600 15px; hover brightens to shell ink; the active tab is a sheet-colored tab with graphite text, like a page pulled forward. A red badge on Reminders counts what's due. Sync state sits beside the tabs as a dot and words, and on phones only the dot shows while all is well.

### Title Block (signature)
The ruled heading box from a computation sheet, built by `titleBlock()`. A 1.5px rule-green frame with 4px corners over a 70% sheet wash. The label (Title role) fills the left; to its right, cells split off by 1.5px vertical rules hold counts in condensed 500 14px with the number bold and tabular: "4 notes", "1 reminder". When anything in the group is due, that cell fills red pencil and reads "due now". It heads each Feed day, the Pinned sheet, the selected calendar day and each Reminders section. Board columns carry the same idea as their header: a sheet-colored strip with a 1.5px rule beneath the column name, inside a 1.5px rule-green column frame.

## Do's and Don'ts

### Do:
- **Do** open every group of notes with the ruled title block, with tabular counts in its cells.
- **Do** keep the 20px grid on the page ground and keep sheets clean paper.
- **Do** spend red pencil (#c2392a) only on Save, Delete, and anything due or overdue.
- **Do** use non-photo blue (#1f74a3) for pinned, selected, pressed and focused states.
- **Do** give every action a visible word; an icon may sit beside the word, never replace it.
- **Do** set counts, dates and times in Barlow Semi Condensed with tabular figures.
- **Do** lift sheets with the one Sheet shadow and divide their insides with 1px hairline rules.

### Don't:
- **Don't** use red for decoration, emphasis, or categories. If it is not Save, Delete or due, it is not red.
- **Don't** add icon-only controls. The owner could not recognize them.
- **Don't** introduce grey neutrals; the paper and its rules are greens.
- **Don't** use uppercase letterspaced labels or small headings above sections. The title block is the heading.
- **Don't** outline sheets or stack extra shadows on them.
- **Don't** pin notes to cork, tilt them, or draw them as sticky notes. The sticky note lives only in the app icon.

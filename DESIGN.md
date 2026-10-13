---
name: Catchall
description: A personal capture inbox kept in a rose-linen dot-grid notebook under a plum lamp.
colors:
  rose-linen: "#ebe4e1"
  rose-linen-lit: "#f7f1ee"
  rose-linen-deep: "#dbd2ce"
  linen-dot: "#d0c4c0"
  sheet: "#fdfaf8"
  sheet-lit: "#ffffff"
  sheet-tint: "#f3edea"
  aubergine: "#2e2531"
  aubergine-soft: "#615766"
  hairline: "#dcd3d0"
  plum-shell: "#4a2f52"
  plum-shell-lit: "#5e3d68"
  plum-shell-deep: "#3a2441"
  shell-ink: "#f7f0ec"
  shell-ink-soft: "#e3d3e5"
  rule-mauve: "#9a8296"
  rust: "#a8452c"
  rust-lit: "#bd5839"
  rust-ink: "#ffffff"
  indigo: "#56498f"
  indigo-wash: "#e5e2f4"
  ok-green: "#4a7a52"
  rose-linen-dark: "#18141a"
  rose-linen-lit-dark: "#231c26"
  rose-linen-deep-dark: "#100d12"
  linen-dot-dark: "#2e2632"
  sheet-dark: "#221c25"
  sheet-lit-dark: "#2a232e"
  sheet-tint-dark: "#2e2632"
  aubergine-dark: "#ece6ea"
  aubergine-soft-dark: "#b2a7b3"
  hairline-dark: "#3a3140"
  plum-shell-dark: "#2f2035"
  plum-shell-lit-dark: "#3d2a45"
  plum-shell-deep-dark: "#231727"
  shell-ink-soft-dark: "#cbb9ce"
  rule-mauve-dark: "#7c6880"
  rust-dark: "#eb9a80"
  rust-lit-dark: "#f1ae98"
  rust-ink-dark: "#210d06"
  indigo-dark: "#b3aaec"
  indigo-wash-dark: "#2a2742"
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
    backgroundColor: "{colors.rust}"
    textColor: "{colors.rust-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "7px 12px"
    height: "36px"
  button-secondary:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.aubergine}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "7px 10px"
    height: "36px"
  button-secondary-hover:
    backgroundColor: "{colors.sheet-tint}"
    textColor: "{colors.aubergine}"
  button-secondary-pressed:
    backgroundColor: "{colors.indigo-wash}"
    textColor: "{colors.indigo}"
  button-danger:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.rust}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "7px 10px"
  button-danger-hover:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.rust-ink}"
  filter-chip:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.aubergine}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "7px 12px"
  filter-chip-active:
    backgroundColor: "{colors.plum-shell}"
    textColor: "{colors.shell-ink}"
  tag-chip:
    textColor: "{colors.aubergine}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "4px 9px"
  title-block:
    textColor: "{colors.aubergine}"
    typography: "{typography.title}"
    rounded: "{rounded.block}"
    padding: "9px 14px"
  title-block-due:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.rust-ink}"
  note-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.aubergine}"
    typography: "{typography.note}"
    rounded: "{rounded.sheet}"
    padding: "14px 14px 12px"
  capture-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.aubergine}"
    typography: "{typography.capture}"
    rounded: "{rounded.capture}"
    padding: "14px 14px 12px"
  shell-header:
    backgroundColor: "{colors.plum-shell}"
    textColor: "{colors.shell-ink}"
    padding: "10px 16px"
  view-tab:
    textColor: "{colors.shell-ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  view-tab-active:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.aubergine}"
  reminder-pill:
    backgroundColor: "{colors.indigo-wash}"
    textColor: "{colors.aubergine}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "4px 8px"
  reminder-pill-due:
    backgroundColor: "{colors.rust}"
    textColor: "{colors.rust-ink}"
---

# Design System: Catchall

## Overview

**Creative North Star: "The Linen Notebook"**

Catchall is kept in a builder's dot-grid notebook: warm rose-linen paper with a soft dot every 20px, a plum cloth band, shaded like it is lit from above, across the top as the shell, and loose sheets of lighter paper lifted off the page on soft shadows. Every group of notes (a day in the Feed, the Pinned sheet, a calendar day, a Reminders section, a Board column) opens with a ruled title block, the heading box carried over from the engineering pad this notebook grew out of. Ink is aubergine. Two inks are kept beside it: rust for the three things that must stand out (Save, Delete, anything due), and indigo for pins, selection, focus and highlights.

The world is calm, warm and workmanlike rather than cute. It turns away from both the sticky-note-on-cork convention and the cold grey notes app with a single accent. Density is moderate: sheets have 14px insets, a 12px gap between sheets, and comfortable 36px controls (44px on touch screens), with a compact setting that tightens to 8px and 10px. Labels are condensed engineering lettering (Barlow Semi Condensed), body text is Barlow, and every count and time is set in tabular figures so digits line up like a schedule.

Light and dark both follow the device. Dark mode is the same notebook at night: near-black paper with a faint dot, a darker plum shell, and the two inks brightened to hold contrast (rust #eb9a80, indigo #b3aaec).

**Key Characteristics:**
- Rose-linen ground lit from above, with a 20px dot grid on the page background, never on the sheets.
- Plum shell header, shaded top to bottom, with labeled view tabs in a sunken tray and a sync state.
- Raised sheets with a lit top edge and layered soft shadows; hairline rules divide a sheet's body, meta and actions.
- The ruled title block (1.5px rule-mauve border, 4px corners, count cells split by vertical rules) heads every group.
- Rust only on Save, Delete and what's due; indigo for pin, selection and focus.
- Every action is a text-labeled button; icons only ever sit beside a word.
- Tabular figures for every count, date and time.

## Colors

Palette: **Plum & Apricot** (chosen 2026-10-11, replacing Linen & Sage, together with the depth treatment below). Aubergine ink on rose-linen paper, a sparing rust, a sparing indigo, a plum shell, and warm rose-gray neutrals for everything else. In the stylesheet the rust token is still named `--red` and the indigo token `--blue`; the names are historical, the values are these. Every surface color has a lit partner (`--surface-hi`, `--shell-hi`, `--red-hi`, `--bg-lit`) and the ground and shell have a deep partner (`--bg-deep`, `--shell-lo`); the depth layer draws its top-down gradients between them.

### Primary
- **Rust** (#a8452c light, #eb9a80 dark; lit #bd5839 / #f1ae98): the Save button, Delete (outlined at rest, filled on hover), armed confirmations, the active Dictate mic, due reminder pills, the "due now" title-block cell, the overdue time in Reminders, the reminders badge on the view tab, alarm toasts, and the text caret. Filled rust is a lit-to-rust gradient. Ink on it is white (#ffffff) in light mode and near-black (#210d06) in dark.

### Secondary
- **Indigo** (#56498f light, #b3aaec dark): focus rings, pressed toggles (Pin, filter toggles), checked checkboxes, today's date in the calendar, the selected calendar cell, the pin flag, links, and the drop target outline on the Board.
- **Indigo Wash** (#e5e2f4 light, #2a2742 dark): the fill behind pressed toggles, pinned sheets (mixed 55% into the sheet), reminder pills that are not due, text selection, and the dictation hint.

### Tertiary
- **Plum Shell** (#4a2f52; #2f2035 dark): the header band, drawn as a gradient from **Plum Shell Lit** (#5e3d68) to **Plum Shell Deep** (#3a2441). The tab tray is sunk into it (black at 20% with an inner shadow). **Shell Ink** (#f7f0ec) and **Shell Ink Soft** (#e3d3e5) are the header's text and inactive tabs.
- **Rule Mauve** (#9a8296 light, #7c6880 dark): the ink of every title block and Board column rule, and the empty-state dashed border.
- **OK Green** (#4a7a52): the synced state in Settings. In the header, the synced dot is a lighter green so it reads on the shell.

### Neutral
- **Rose Linen** (#ebe4e1): the page ground, lit from above by **Rose Linen Lit** (#f7f1ee, a radial glow at the top) and falling to **Rose Linen Deep** (#dbd2ce) at the bottom. **Linen Dot** (#d0c4c0 light, #2e2632 dark): the 1px dots of the 20px grid over it.
- **Sheet** (#fdfaf8) with **Sheet Lit** (#ffffff) at its top edge: notes, the capture box, reminder rows, dialogs, controls at rest. **Sheet Tint** (#f3edea): hover fill, the foot of raised controls, segmented-control tray, preview pills.
- **Aubergine** (#2e2531): all body ink. **Aubergine Soft** (#615766): metadata, counts, placeholders, inactive labels.
- **Hairline** (#dcd3d0): control borders and the rules inside a sheet.

Tag and note colors are content color, not system color, and both are muted earth tones. None of them is a red, so rust never doubles as a category.
- **Tag colors (11), in the order new tags take them:** Sage #5a8560, Slate #4f6b9a, Ochre #a87a1e, Plum #85507a, Moss #6f7f2e, Walnut #8f6748, Heather #7c6aa8, Pine #2f6b5a, Rose #b05a76, Fjord #4a7f9e, Stone #7a7468. Shown as a dot beside the tag's name; in dark mode the dot is lightened 28% toward white. Tags from the earlier saturated palette are mapped to the nearest earth tone on load.
- **Note colors (nine, plus none):** Butter #e8c547, Apricot #e3955a, Rose #c9667f, Blush #d48aa0, Heather #8f7bbd, Slate #6f8bb8, Lake #5e9aa0, Sage #7ea576, Stone #a39d8f. They tint a sheet by mixing 24% into Sheet (17% in oklch in dark mode, so warm colors stay warm), with a white-at-32% sheen at the top. The "no color" swatch is marked with an Aubergine Soft slash, never rust.

### Utility
- **Header signals:** **Shell OK** (#7bd88f) is the synced dot. **Shell Alert** (#ff8a78) and **Shell Alert Ink** (#ffd0c8) mark sync problems. **Shell Line** (white at 24%) outlines controls on the header band. These live only on the plum shell.
- **Scrim:** dark aubergine at 55% (black at 62% in dark mode) behind dialogs.
- **Photo:** **Photo Ground** (#000) behind the image viewer. **Photo Scrim** (black at 65%) with **Photo Ink** (#fff) on the remove button over image thumbnails. Photos keep a neutral ground so their colors read true.
- **Shadows:** every shadow is the shadow tint (`--sh-rgb`) at an opacity. No literal black or white shadows.

Every color in the stylesheet is a token. Component rules reference tokens only.

### Named Rules
**The Two Inks Rule.** Rust means act or attend: Save, Delete, due. Indigo means where you are: pinned, selected, focused, the chosen tag or filter. Neither ink is decoration, and neither stands in for the other.

**The Paper Is Linen Rule.** Grounds are warm rose linen and structure is plum and mauve; the only near-white is the sheet. Neutrals are warm (linen, stone, aubergine), never a cool grey.

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

The Board is a horizontal track of columns at least 260px wide, 12px apart, scrolling sideways. The Calendar is one ruled sheet of seven columns. Each day's counts sit at the foot of its cell: words on wider screens ("3 notes", "2 reminders" in a indigo-wash pill), and on phones just the number and a bell with its number, so they always fit the cell; snippets are hidden on phones. Reminders rows put a fixed 6.5rem time column on the left so times line up.

At 640px and below, the header is one row (wordmark, sync, Settings) and the view tabs move to a plum bar fixed at the bottom of the screen, in thumb reach: five equal tabs, each an icon above its word, at least 48px tall, clearing the home indicator. Secondary filters open as a sheet from the bottom with Done at the foot; a note's extra actions (Edit, Remove reminder, Delete) open the same kind of sheet from its More button, so the buttons on a note never move. At 560px the reminder text moves above its time.

## Elevation & Depth

Light comes from above (chosen 2026-10-11 when the user asked for "a look with more depth"). Three levels: the **desk** (the lit ground), **sunk** things set into it (Board column trays, the header tab tray, search and select fields, the segmented tray, checkboxes), and **raised** things standing on it (sheets, title blocks, the rail, the header, buttons). Every raised thing has a 1px top highlight (`--hl`: white at 90%, 7% in dark) and a gradient from its lit color down to its base. Shadows are tinted with the plum-black `--sh-rgb: 50 28 50` (pure black in dark mode). The stylesheet's section 15 holds all of it.

### Shadow Vocabulary
- **Sheet** (`inset 0 1px 0 var(--hl), 0 0 0 1px rgb(sh/.06), 0 1px 1px rgb(sh/.08), 0 3px 6px -2px rgb(sh/.14), 0 14px 28px -12px rgb(sh/.32)`): notes, the capture box, reminder rows, empty and no-result sheets. On computers a note lifts 2px on hover with a longer shadow.
- **Sheet focused**: the sheet shadow plus `0 0 0 2px var(--blue)`, for the capture box while typing or in list mode.
- **Title block / page head**: lit-to-tint gradient, top highlight, `0 1px 2px` plus a short `0 6px 12px -8px` drop.
- **Tray** (`inset 0 2px 8px rgb(sh/.2)`): Board columns, in a deeper mix of the ground.
- **Well** (`inset 0 1px 3px rgb(sh/.15)`): search, selects, the segmented tray, checkboxes.
- **Control**: lit-to-tint gradient, top highlight, `0 1px 2px` drop; pressed it moves down 1px and the shadow turns inward.
- **Shell**: plum gradient, inner top highlight and bottom edge, `0 10px 24px -8px` drop.
- **Dialog** (`0 30px 70px -20px rgb(sh/.6)`), over the aubergine scrim.

### Named Rules
**Raised tiles (v40).** Notes and reminder rows are beveled tiles: a 1px lit top-left edge (`--hl`), a shaded bottom-right edge, a 1px outline and a solid 4px rim beneath (`--edge`: Rule Mauve mixed into the sheet, or the note's own color when it has one), then the soft drop shadow. On computers a tile rises to a 6px rim on hover and sinks to 2px when pressed.
**Quiet things stay flat.** The action lettering on each note (Pin, Edit, Archive, Delete), tag selects, and the rail's tag and filter list never get the raised control treatment on computers. On phones the note action buttons are raised, since they are real tap targets.
**No texture.** Depth comes from light and shadow only, never from grain, noise or cork.

## Shapes

Corners step up with the size of the object: 4px for the title block, 6px for tags and pills, 8px for every control and calendar cell, 10px for the header tab tray, 12px for note sheets and Board columns, 14px for the capture box, dialogs and the empty state. Round shapes are reserved for dots (tag and sync) and the today marker on the calendar. Structural lines are 1.5px rule mauve; the lines inside a sheet are 1px hairline. Dashed borders mean "a place to put something": the New tag chip, the empty state, the Archive drop column, and the Board drop target.

## Components

### Buttons
Plain, labeled, one shape.
- **Shape:** gently squared (8px), at least 36px tall, an icon beside the word.
- **Primary:** Save only, rust fill with white bold text and a small shadow; darkens about 12% on hover.
- **Secondary:** sheet fill, 1px hairline border, aubergine text; hover deepens the border to aubergine-soft and fills with sheet tint. No press motion.
- **Go:** plum (Plum Shell) fill with shell ink, 600 weight. The one strong button for moving on or switching something on: Back to Feed after sorting, Connect, Turn on, Done in a sheet. Never for Save or Delete, and never more than one per view.
- **Toggle (pressed):** blue text and border on the indigo wash (Pin, filter toggles).
- **Danger:** rust text with a rust-tinted border, fills solid rust on hover. Used only for deleting or erasing (Delete in sheets, Sort, the select bar, Erase everything). Turning something off or disconnecting is a secondary button, never rust.
- **Delete in a note's action row:** reads muted aubergine-soft at rest so a row of notes isn't a column of rust, and turns rust on hover or keyboard focus. It always has Undo.
- **Header buttons:** transparent, a 28% white outline, shell ink, condensed label; hover fills with deep shell green.

### Chips
- **Filter chips:** condensed 600 14px, 8px corners, sheet fill with a hairline border and a tabular count. Active is indigo wash with a indigo border and aubergine text, on the Mac rail and the phone alike. The New tag chip is dashed.
- **Tag chips on a note:** condensed 600 13px lettering, 6px corners, no fill, a 1.5px outline of the tag color mixed 70% toward aubergine. Each tag appears once per note.
- **Reminder pills:** indigo wash with aubergine text; due turns rust; sent is sheet tint, struck through.

### Cards / Containers
- **Corner Style:** 12px for note sheets and reminder rows.
- **Background:** sheet; pinned sheets mix in 55% indigo wash; colored notes mix their note color 24% into the sheet.
- **Shadow Strategy:** the single Sheet shadow (see Elevation & Depth).
- **Border:** none outside; inside, 1px hairline rules separate the body from the meta line and the actions.
- **Internal Padding:** 14px sides and top, 12px bottom.

### Inputs / Fields
- **Capture box:** the top of a fresh sheet, 14px corners, 19px text, rust caret. A hairline rule divides the text from the Photo, Dictate and Save row. Focus adds a 2px indigo ring to the sheet shadow; a dragged file turns the border dashed blue.
- **Search and selects:** sheet fill, hairline border, 8px corners; focus turns the border blue.
- **Dialog fields:** linen fill inside the sheet-colored dialog, hairline border, 8px corners.
- **Focus everywhere:** a 2px indigo outline offset 2px.

### Navigation
The shell header is a plum band: the wordmark (condensed 700 24px) with the sticky-note brand mark on a deep-plum tile, then the view tabs in a deep-plum tray (10px corners). Inactive tabs are shell-ink-soft condensed 600 15px; hover brightens to shell ink; the active tab is a sheet-colored tab with aubergine text, like a page pulled forward. A rust badge on Reminders counts what's due. In dark mode the active tab is the deeper sheet tint with a 2px indigo rule along its foot, since a light tab would glare on the dark shell. On phones the tabs move to a bar at the bottom (see Layout). Sync state sits beside the tabs as a dot and words, and on phones only the dot shows while all is well.

### Title Block (signature)
The ruled heading box from a computation sheet, built by `titleBlock()`. A 1.5px rule-mauve frame with 4px corners over a 70% sheet wash. The label (Title role) fills the left; to its right, cells split off by 1.5px vertical rules hold counts in condensed 500 14px with the number bold and tabular: "4 notes", "1 reminder". When anything in the group is due, that cell fills rust and reads "due now". It heads each Feed day, the Pinned sheet, the selected calendar day and each Reminders section. Board columns carry the same idea as their header: a sheet-colored strip with a 1.5px rule beneath the column name, inside a 1.5px rule-mauve column frame.

### Sort
One note at a time on a single sheet, oldest first. Below it sit the choices: "File under" tag chips, then Keep, Pin, Archive and Delete. On a Mac each choice shows its key in a small keycap (1–9, K, P, A, ⌫; Z undoes). On a phone the choices sit in a docked sheet at the bottom of the screen, in thumb reach, with the four actions as equal stacked buttons. Swiping moves the card sideways without tilting it; a word in a ruled box ("Keep" in indigo, "Archive" in aubergine, "Delete" in rust) and a matching 2px ring say what letting go will do. Every choice stamps the note as sorted, so it leaves the queue on every device. The last screen is a sheet titled "All sorted"; its title block ends in a indigo-inked "Done" cell (a ruled cell with a check, never a boxed button shape), followed by a ruled tally of the round that lasts until "Start over from the oldest note". On phones only the counts above zero show.

### Settings
Six collapsible groups, each a ruled box whose header reads like a title block: the group's name in condensed 700 17px, then a one-line summary of its state in condensed 500 14px ("Phone notifications on · weekly review Sunday at 6 PM"), and a chevron. All start closed, so Settings opens as a short index; the header's sync button opens straight to "Phone, computer and sync". Groups remember being open, and a change keeps the focused control and scroll position. The weekly review has its own block with a quoted preview card of this week's summary.

## Do's and Don'ts

### Do:
- **Do** open every group of notes with the ruled title block, with tabular counts in its cells.
- **Do** keep the 20px dot grid on the page ground and keep sheets clean paper.
- **Do** spend rust (#a8452c) only on Save, Delete, and anything due or overdue.
- **Do** use indigo (#56498f) for pinned, selected, pressed and focused states.
- **Do** give every action a visible word; an icon may sit beside the word, never replace it.
- **Do** set counts, dates and times in Barlow Semi Condensed with tabular figures.
- **Do** lift sheets with the one Sheet shadow and divide their insides with 1px hairline rules.

### Don't:
- **Don't** use rust or any red for decoration, emphasis, or categories. If it is not Save, Delete or due, it is not rust.
- **Don't** add icon-only controls. The owner could not recognize them.
- **Don't** introduce cool grey neutrals or saturated UI-kit colors; neutrals are warm and tags are earth tones.
- **Don't** use uppercase letterspaced labels or small headings above sections. The title block is the heading.
- **Don't** outline sheets or stack extra shadows on them.
- **Don't** pin notes to cork, tilt them (not even while swiping in Sort), or draw them as sticky notes. Tilted notes live only in the app icon (a note dropping into a tray).

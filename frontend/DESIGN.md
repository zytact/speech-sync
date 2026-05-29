---
name: SpeechSync
description: Speaker diarization tool that turns audio into structured, attributed transcripts
colors:
  fuchsia: "#cc0066"
  violet: "#a855f7"
  rose: "#fb7185"
  blush-canvas: "#fff7fb"
  ink: "#18181b"
  muted: "#636366"
  pale-pink: "#fff0f7"
  track: "#f3d3e6"
  white: "#ffffff"
typography:
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.6px"
  section-heading:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.06em"
    textTransform: "uppercase"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.4
  caption:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  all: "0"
spacing:
  xs: "8px"
  sm: "14px"
  md: "20px"
  lg: "28px"
  xl: "40px"
layout:
  sidebar: "260px"
  instrument-panel: "320px"
  workspace-right: "flex: 1"
components:
  button-primary:
    backgroundColor: "{colors.fuchsia}"
    textColor: "{colors.white}"
    rounded: "0"
    padding: "13px 24px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "#3f3f46"
    rounded: "0"
    padding: "13px 16px"
  nav-item-active:
    backgroundColor: "rgba(204,0,102,0.08)"
    textColor: "{colors.fuchsia}"
    rounded: "0"
    padding: "13px 16px"
---

# Design System: SpeechSync

## 1. Overview

**Creative North Star: "The Signal Studio"**

SpeechSync is a precision instrument. Pink and violet are signal colors: they mark where speech begins and ends, who is speaking, and which actions are primary. The warm blush canvas background is a committed design choice (oklch 97% chroma 0.018 hue 350), not an AI-default near-white. Researchers working with recorded interviews deserve an interface that doesn't feel clinical, but the warmth is earned through tone and typography, not decorative gradients.

**Page structure.** Three fixed-width zones from left to right:
1. **Sidebar** (260px fixed): branding, navigation, upload trigger.
2. **Instrument panel** (320px sticky, glass tier): upload dropzone, audio player (only when audio loaded), stats strip. Anchored by a 2px fuchsia top border. Glass treatment (`backdrop-filter: blur(20px)`) is earned here because this is the action surface.
3. **Transcript workspace** (flex: 1, flat): speaker timeline and segments table rendered as document sections — no card chrome. The empty state occupies this zone before data loads.

This explicitly rejects: hero sections that introduce the tool by name, glass on data-reading surfaces, metric card grids with big gradient numbers, nested glass cards, and any phantom UI (player shown before audio loads, stats showing zeros before data arrives).

**Key Characteristics:**
- No hero section. The workspace opens directly into content.
- Instrument panel is the only glass surface in the main layout (sidebar is also glass, by design).
- Data surfaces (timeline, table) have no card wrapper — document grammar.
- Upload card inside the instrument panel has no glass treatment — only the panel container is glass.
- Audio player renders conditionally (only after file is selected).
- Stats strip shows dashes until data is present, not zeros.
- Seekbar is functional: tracks `currentTime`, click-to-seek, timestamps on both ends.
- Segment playback stops precisely at the segment's `end` time.

## 2. Colors: The Signal Palette

Two saturated accents on a warm committed canvas. Fuchsia and violet are used where they carry meaning; the canvas holds everything else.

### Primary
- **Hot Fuchsia** (`#cc0066` / oklch 44% 0.27 350): Primary signal color. Upload buttons, play button, primary CTAs, active nav text, waveform stroke, speaker 1 timeline segments, instrument panel top border, seekbar fill. Deliberately dark and saturated. Using it decoratively erodes the signal.

### Secondary
- **Soft Violet** (`#a855f7` / oklch 60% 0.27 303): Speaker 2 signal color in timeline segments and distribution bar. Not used on interactive chrome.

### Tertiary
- **Speaker Rose** (`#fb7185` / oklch 68% 0.22 8): Speaker 3 signal color exclusively. Not used in interactive chrome.

### Neutral
- **Blush Canvas** (`#fff7fb` / oklch 97% 0.018 350): Page background. Chroma 0.018 is intentional, angled toward fuchsia's hue. Must not drift toward white (less chroma) or warm-neutral (hue 40–80).
- **Ink** (`#18181b`): All headings, body text, primary labels.
- **Muted** (`#636366`): Secondary labels, timestamps, table headers. Minimum value — do not lighten. #71717a fails WCAG AA (4.09:1) against blush canvas; #636366 achieves 5.3:1.
- **Pale Pink** (`#fff0f7`): Nav hover, table row hover, waveform container background, table thead.
- **Track** (`#f3d3e6`): Seekbar well, timeline track wells, ghost track background.

### Named Rules

**The Signal Color Rule.** Hot Fuchsia and Soft Violet appear on interactive elements and speaker data markers only. They do not appear on decorative dividers, section backgrounds, or typographic emphasis.

**The Committed Canvas Rule.** The blush bg is `#fff7fb`. Hue must stay close to 350. Drifting toward white loses identity; drifting toward warm-neutral (40–80) produces AI-cream default.

**The Three Speakers Rule.** Speaker colors are fuchsia, violet, rose. A fourth speaker gets fuchsia at reduced opacity (`rgba(204,0,102,0.6)`), not a new brand color.

## 3. Typography

**Single Family:** Inter (system-ui, sans-serif fallback)

### Hierarchy

- **Empty-state heading** (800, 30px, line-height 1.15, letter-spacing -0.6px): The prompt before data loads. One instance. Color: Ink.
- **Section heading** (700, 13px, letter-spacing 0.06em, uppercase): Labels above timeline and table in the transcript workspace. Bottom border `1px solid rgba(204,0,102,0.1)` separates from content. This is a functional label, not a decorative eyebrow — it appears exactly twice per populated screen.
- **Body** (500, 15px, line-height 1.6): Descriptions, file names. Max 65–75ch on prose.
- **Label** (600–700, 13–15px): Nav items, table headers, timestamps, stats labels, chip text.
- **Caption** (600, 11px): Seekbar timestamps, time-axis ticks, ghost section label.

### Named Rules

**The Solid Display Rule.** No `background-clip: text` gradient on any element. Weight and size carry hierarchy; color does not.

**The Section Heading Rule.** `.section-heading` is uppercase 13px/700 with 0.06em tracking and a bottom border. It appears only on the two transcript workspace sections (Speaker Timeline, Detected Segments). Do not add it to instrument panel sections or sidebar elements — those use a different visual grammar.

## 4. Elevation

Two-tier model: **glass above (instrument), flat below (data)**.

### Glass tier (instrument panel, sidebar)
- `background: rgba(255,255,255,0.72)`
- `backdrop-filter: blur(20px)`
- `border-right: 1px solid rgba(204,0,102,0.08)`
- Instrument panel: `border-top: 2px solid #cc0066` (visual anchor)

### Flat tier (transcript workspace)
- No background, no border on sections themselves.
- Table: `background: rgba(255,255,255,0.88)`, `border: 1px solid rgba(204,0,102,0.08)`.
- Timeline tracks: flat `background: rgba(243,215,231,0.5)`.

### Shadow / Glow Vocabulary
- **Button glow — rest:** `0 0 0 1px rgba(204,0,102,0.6), 0 0 16px rgba(204,0,102,0.5), inset 0 1px 0 rgba(255,255,255,0.2)`
- **Button glow — hover:** `0 0 0 1px #cc0066, 0 0 24px rgba(204,0,102,0.65), inset 0 1px 0 rgba(255,255,255,0.25)`
- **Icon glow:** `0 0 0 1px rgba(204,0,102,0.7), 0 0 20px rgba(204,0,102,0.55), inset 0 1px 0 rgba(255,255,255,0.25)`
- **Segment glow:** `0 0 6px rgba(204,0,102,0.35)` on timeline segments.
- **Ghost pulse:** `@keyframes ghost-pulse` 0%→50%→100% opacity 0.12→0.28→0.12, 2.4s ease-in-out infinite.

## 5. Components

### Layout: Workspace Split
```
[Sidebar 260px fixed] | [Instrument Panel 320px sticky] | [Transcript Workspace flex:1]
```
- Sidebar: fixed, full height, glass, nav + upload trigger.
- Instrument panel: sticky top:0, height 100vh, overflow-y:auto, glass, `border-top: 2px solid #cc0066`.
- Transcript workspace: padding 48px 48px 40px, flex column, gap 44px.

### Upload Card (inside instrument panel)
- **No glass treatment.** The panel is already glass; the card must not nest glass inside glass.
- Container: `background: none; border: none`.
- Dropzone: `border: 1px dashed rgba(204,0,102,0.3)`, `background: rgba(255,255,255,0.5)`, padding 24px 14px.
- Hover: border-color `rgba(204,0,102,0.6)`, background `rgba(255,240,248,0.6)`.
- Icon: 32px fuchsia. Heading: 15px/700. Description: 13px muted. Button: primary fuchsia with glow.

### Audio Player (glass card, instrument panel)
- **Renders only when `audioFile` is non-null.** No phantom waveform or player chrome before upload.
- Glass card: `background: rgba(255,255,255,0.72)`, `backdrop-filter: blur(20px)`, padding 18px.
- Audio icon: 40px square, fuchsia, icon glow.
- Title: 13px/700, truncated with `text-overflow: ellipsis`. Subtitle: 12px muted.
- Waveform: SVG polyline, fuchsia→violet→rose gradient stroke, height 70px container 90px.
- Play button: 42px square, fuchsia, button glow.
- Seekbar: click-to-seek, `currentTime`-driven fill (`#cc0066`), `transition: width 0.1s linear`. Time display: `0:00 / 1:23` in 11px/600 muted at either end.
- Playback state synced via `timeupdate`, `loadedmetadata`, `ended` listeners cleaned up on unmount.

### Stats Strip (instrument panel)
Replaces the three summary metric cards. Compact label/value rows separated by hairline borders.
- Container: `border-top: 1px solid rgba(204,0,102,0.08)`, padding-top 16px.
- Row: `display: flex; justify-content: space-between`, padding 10px 0, `border-bottom: 1px solid rgba(204,0,102,0.06)`.
- Label: 13px/600 muted. Value: 15px/800 ink, letter-spacing -0.3px.
- Values show `—` (em dash) before data loads, not `0` or `0.0s`.
- Distribution bar (only when speakers > 0): horizontal bar track (`background: #f3d3e6`), colored segments proportional to speaker share, speaker legend below with name + percentage.

### Empty State (transcript workspace)
Shown when `diarizationData.length === 0`. Two sections stacked with 52px gap:
1. **Prompt:** Heading (30px/800), body text (14px/500 muted, max 52ch), no button.
2. **Ghost preview:** Label "OUTPUT PREVIEW" (11px/700 uppercase muted), then 3 ghost timeline rows with staggered pulse animation. Ghost rows use speaker colors at opacity 0.12–0.28. Ghost track height 28px.

No CTA button in the empty state. The instrument panel upload card and sidebar "Upload New Audio" are the action surfaces.

### Speaker Timeline (transcript workspace section)
- No card wrapper. `.workspace-section` container with section heading + content.
- Section heading: `.section-heading` class (13px/700 uppercase, bottom border).
- Time axis: muted tick labels above the tracks, aligned to the track area (margin-left: 106px to clear speaker label column).
- Rows: speaker label (12px/700, with 3px×14px color bar indicator), track (24px height, `background: rgba(243,215,231,0.5)`).
- Segment fills: solid speaker colors, `box-shadow: 0 0 6px rgba(204,0,102,0.35)`.
- Speaker label width: 90px min.

### Segments Table (transcript workspace section)
- No card wrapper. `.workspace-section` container.
- Section heading: `.section-heading` class.
- Table: `background: rgba(255,255,255,0.88)`, `border: 1px solid rgba(204,0,102,0.08)`.
- `thead`: `background: #fff0f7`. `th`: 13px/700 muted.
- `td`: padding 16px, `border-top: 1px solid rgba(204,0,102,0.07)`, 14px/500.
- Speaker dot: 10px circle, dynamically colored by speaker index (fuchsia/violet/rose), not all-pink.
- Mini play button: 34px square, fuchsia, button glow, stops audio at segment `end` time via `timeupdate` listener.
- Clicking a new segment cancels the previous stop listener.

### Navigation (Sidebar)
- Sidebar: 260px fixed, `background: linear-gradient(180deg, #fffefe, #fff7fb)`, `border-right: 1px solid #f3dce8`.
- Logo icon: 42px square, fuchsia, icon glow. Logo text: 16px/800.
- Logo subtitle: 13px muted. No duplicate branding block at sidebar bottom.
- Upload button: full width, fuchsia, button glow, margin 18px 0 24px.
- Nav items: 13px/600, padding 13px 16px. Hover: `#fff0f7` bg, `translateX(2px)`. Active: `rgba(204,0,102,0.08)` bg, fuchsia text, inset border.

## 6. Do's and Don'ts

### Do:
- **Do** render the audio player only after a file is loaded. No phantom UI.
- **Do** show `—` in the stats strip until data arrives. Zeros are misleading; they imply the tool ran and found nothing.
- **Do** stop segment playback at `segment.end` using a `timeupdate` listener. Cancel the previous listener when switching segments.
- **Do** keep the upload card inside the instrument panel with no glass treatment (only the panel container is glass).
- **Do** use `.section-heading` (uppercase 13px/700 with bottom border) for the two transcript workspace labels only.
- **Do** color speaker dots in the table dynamically by speaker index — all-pink dots collapse the speaker signal.
- **Do** use Inter exclusively at weights 400–800.
- **Do** keep `--muted` at `#636366` or darker. Do not lighten to `#71717a` (fails WCAG AA).
- **Do** allow the waveform SVG its gradient stroke — it is signal data, not decoration.
- **Do** apply the fuchsia glow to all solid-fuchsia interactive elements.

### Don't:
- **Don't** add a hero section, page title banner, or intro CTA to the main layout. The workspace opens directly into content.
- **Don't** use glass (`backdrop-filter: blur`) on the transcript workspace sections, table, or timeline. Data surfaces are flat.
- **Don't** nest glass cards inside the glass instrument panel. The upload card has no background.
- **Don't** show zeros in the stats strip before data loads.
- **Don't** show the audio player before an audio file is selected.
- **Don't** use `background-clip: text` gradient on any text element.
- **Don't** add the `.section-heading` pattern to instrument panel sections — it belongs only to the transcript workspace.
- **Don't** use more than three speaker signal colors. A fourth speaker gets fuchsia at reduced opacity.
- **Don't** let the blush canvas drift toward warm-neutral (hue 40–80) or toward plain white.
- **Don't** add a CTA button to the empty state. Two upload CTAs already exist (sidebar + instrument panel).

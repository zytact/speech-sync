# Product

## Register

product

## Users

Researchers and academics: linguists, social scientists, and qualitative analysts working with recorded interviews, focus groups, and conversational data. They are in a focused, methodical workflow — processing audio, verifying speaker attribution, and extracting structured transcripts for analysis. They care about accuracy and readability above all else.

## Product Purpose

SpeechSync takes an audio file and returns a structured, speaker-attributed transcript through automatic diarization. It identifies who speaks when, surfaces timeline and segment data, and gives researchers a clear, exportable view of a conversation. Success means a researcher can upload a recording and immediately trust the output enough to work from it.

## Brand Personality

Clear, warm, approachable. The tool is serious about its job but not cold. It feels like well-made research software: confident typography, measured use of color, density that respects the user's expertise without overwhelming them.

## Anti-references

- Pink/purple glassmorphism used reflexively on every surface — glass and fuchsia are kept, but as intentional signal elements, not ambient decoration. The failure mode is glass-on-everything and pink-as-mood, not glass and pink per se.
- Heavy dark-mode developer tools (Vercel, terminal aesthetics) — too far toward engineer-facing
- Consumer audio apps (Spotify-adjacent, big waveform theatrics) — the product is about transcript accuracy, not audio aesthetics
- Metric hero sections with big gradient numbers — vanity, not utility

## Design Principles

1. **Data before chrome.** The timeline and segments table are the product. The interface opens directly into the workspace — no hero section, no introductory banner. The tool never introduces itself; the output does.
2. **Earned warmth.** The blush canvas and fuchsia accents are committed choices, not defaults. Warmth concentrates on interactive elements and speaker signal data; the transcript workspace is deliberately plain so the data reads clearly.
3. **Trust through legibility.** Every speaker label, timestamp, and segment is readable at a glance. Speaker colors are consistent across timeline, table, and distribution bar. Timestamps are precise (two decimal places). Segment playback stops exactly at the segment boundary.
4. **No phantom UI.** The audio player does not appear before a file is loaded. Stats show dashes until data is present. The interface shows only what is true at each moment.
5. **Instrument panel / workspace split.** Actions live in the left panel (upload, playback, stats). Data lives in the right workspace (timeline, table). The two zones are visually distinct: glass on the left, flat on the right. Users always know where to act and where to read.
6. **Quiet confidence.** The tool doesn't announce itself. The results do.

## Accessibility & Inclusion

Aim for WCAG AA body contrast (4.5:1 minimum). Keyboard navigability for core upload and playback flows. No specific accommodations required beyond solid baseline practice.

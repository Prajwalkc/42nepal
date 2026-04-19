---
name: design-review
description: Use when reviewing a new component, page, or visual change before shipping — or when the user asks "does this look AI-generated / does this look good." Audits work against Mountain Whisper's design-system and copy-voice skills and flags the specific lines that read as generic/AI-default.
---

# Design Review

A structured audit for any visual or copy change. The goal is not "does it work" — it's "does it feel like Mountain Whisper, or does it feel like a Claude-generated landing page."

## When to invoke

- Before committing a new page or component.
- When the user asks for a design opinion ("does this look good", "is this too AI").
- After a large refactor of UI code.

## How to run a review

Work through each section below in order. For each check, either pass silently or output one line: `[file:line] issue — suggested fix`. End with a 1–3 sentence verdict.

### 1. Color discipline
- [ ] All colors are from the palette in `.claude/skills/design-system/SKILL.md`
- [ ] No raw Tailwind saturated defaults (`blue-500`, `red-600`, `gray-900`)
- [ ] No pure `#000` or `#fff`
- [ ] Gradients are absent (banned) unless it's the subtle MistBackground

### 2. Typography
- [ ] Headings use Playfair (serif), body uses Inter (sans)
- [ ] No `font-bold` on display headings
- [ ] Body `line-height` is not tightened below 1.6
- [ ] Semantic tags in use (`<h1>`, `<h2>`), not just styled divs

### 3. Layout & whitespace
- [ ] Section padding feels generous (`py-20`+ on desktop)
- [ ] Prose is bounded (`max-w-2xl` / `max-w-prose`)
- [ ] No 3-column "feature grid" with identical icon + title + blurb cards (classic AI tell)
- [ ] No two side-by-side CTAs in a hero

### 4. Radii, borders, shadows
- [ ] Cards use `rounded-xl`, inputs `rounded-lg`
- [ ] No `rounded-2xl` / `rounded-3xl`
- [ ] Shadows are subtle — no `shadow-2xl` / neon glow
- [ ] Borders are hairline (`border-[#e8e6e3]`), not 2px

### 5. Motion
- [ ] Animations are slow (600–1200ms), ease-out
- [ ] No bounce, spring overshoot, parallax hijack
- [ ] Hover lifts are modest (`-translate-y-1`, not `-translate-y-4`)

### 6. Iconography & imagery
- [ ] No emojis in UI
- [ ] No abstract stock illustrations (blobs, isometric scenes)
- [ ] Photos feel like real mountains, muted grading
- [ ] If using icons at all, they are line-weight, minimal, and rare

### 7. Copy voice (invoke `copy-voice` skill criteria)
- [ ] No banned phrases ("unlock", "embark", "curated", "in today's world", "we believe")
- [ ] No exclamation marks in body copy
- [ ] CTAs are understated ("Begin" / "Enquire" not "Get Started Today!")
- [ ] Prose reads aloud naturally — would a person write this?

### 8. Accessibility sanity (quick pass)
- [ ] Alt text on images is specific, not "image of mountain"
- [ ] Interactive elements have visible focus states
- [ ] Color contrast on text over images/video has a readable vignette or overlay
- [ ] Tap targets ≥ 44px on mobile

### 9. The "AI-generated" smell test

Read the change as if you'd never seen the site and ask:
- Could this be the default output of ChatGPT + v0.dev for a "mountain retreat landing page"?
- Does any section feel symmetric to the point of being sterile?
- Is there a section that exists only because "landing pages usually have one"?

If yes to any, that section needs a specific, human-feeling edit — an asymmetric photo, a pull quote, a single long sentence, an unexpected break.

## Verdict format

```
Mountain Whisper feel: strong / mixed / weak
Main issues: [2-3 bullets]
Highest-impact fix: [one concrete change]
```

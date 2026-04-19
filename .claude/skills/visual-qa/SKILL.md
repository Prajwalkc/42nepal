---
name: visual-qa
description: Use before reporting a UI or content change as "done" on The Mountain Whisper. Walks through a concrete browser + build checklist so regressions, broken responsive states, missing translations, or failed builds don't ship. Type-checking alone does NOT verify visual correctness.
---

# Visual QA

Code that compiles is not code that works. For any change that affects rendered output, run this checklist before saying the task is complete.

## The three passes

### 1. Build pass

```
npm run lint
npm run build
```

Fix any TypeScript, ESLint, or next-intl errors. Do not suppress with `// @ts-ignore` or `eslint-disable` unless the user has explicitly asked for it.

### 2. Dev server pass

Start dev server:
```
npm run dev
```

Visit every page affected by the change. At minimum for any visual/content change, spot-check:

- `/` — home hero, philosophy section, ways-to-experience, founder message
- `/journeys` — card grid
- `/journeys/<slug>` — at least one detail page
- `/work-from-the-himalayas`
- `/corporate`
- `/enquire` — form renders, validation fires

For each page, check:

- [ ] No console errors (open devtools)
- [ ] No layout shift / CLS on load
- [ ] Images and videos load
- [ ] Animations run smoothly (no jank)
- [ ] No raw i18n key paths visible (e.g. `home.hero.tagline` showing as text means a locale is missing the key)

### 3. Responsive pass

In the browser, test at three widths:

- **375px** (mobile — iPhone SE)
- **768px** (tablet — iPad portrait)
- **1440px** (desktop)

Watch for:

- [ ] Navigation collapses to mobile menu at the right breakpoint
- [ ] Hero video/image scales without awkward crops
- [ ] Card grids reflow (1 col → 2 col → 3 col)
- [ ] Prose width stays readable (`max-w-2xl` equivalent)
- [ ] Tap targets ≥ 44px on mobile
- [ ] No horizontal scroll at any width

## Locale pass (if any copy changed)

Use the `LanguageSwitcher` to switch through each locale and confirm the changed surface renders correctly:

- [ ] en (default)
- [ ] fr
- [ ] de
- [ ] ru
- [ ] zh
- [ ] ne (Devanagari renders cleanly, no font fallback)

## Enquiry flow (if form / API changed)

- [ ] Form validates required fields
- [ ] Honeypot (`company` field) silently succeeds
- [ ] Rate limiter triggers after 3 requests/min
- [ ] Test submission delivers both emails (owner + user confirmation) — use a test Resend API key; do not send to real `OWNER_EMAIL` during dev

## Reporting back to the user

When done, report specifically what you tested — "I loaded /, /journeys, /journeys/quiet-reset at 375/768/1440px in en and ne; build passes." Not "looks good."

If you could NOT run the dev server (e.g. sandboxed environment), say so explicitly. Do not claim a UI change works when you only type-checked it. The user would rather hear "build passes but I couldn't visually verify" than a false all-clear.

## When to skip

This skill is for visual/content changes. For pure refactors, dependency bumps, or code that doesn't affect rendering, `npm run build` + `npm run lint` is sufficient.

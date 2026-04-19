---
name: design-system
description: Use when adding or modifying UI components, pages, or styles in The Mountain Whisper. Provides the exact, canonical design tokens (colors, typography, spacing, radii) so new work matches the contemplative Himalayan aesthetic instead of drifting into generic Tailwind defaults.
---

# Mountain Whisper Design System

The site's aesthetic is "stillness made visible" — warm neutrals, deep mountain blues, serif display type, generous whitespace. Do not introduce new tokens without a concrete reason; reuse what's below.

## Color palette (exact)

Source of truth: `app/globals.css` CSS variables.

**Ground**
- `#f8f6f3` — background (warm off-white, never pure white)
- `#e8e6e3` — light border / hairline
- `#d8d6d3` — medium border

**Ink**
- `#2d3a47` — primary foreground (deep mountain blue, not black)
- `#4a5560` — body text
- `#6b7683` — secondary text
- `#8b95a3` — tertiary / captions

**Mountain blue (action + accent)**
- `#3d5a7a` — primary (buttons, links)
- `#2d4a6a` — primary-dark (hover)
- `#4d6a8a` — primary-light

**Atmosphere**
- `#9ca5b3` — misty gray
- `#7a8493` — ridge gray
- `#e8d4c4` — sunrise tint (sparingly, for warmth)

Do NOT use: pure `#000`, pure `#fff`, saturated Tailwind defaults (`blue-500`, `gray-900`), neon accents, or any color not listed above. If a design truly needs a new hue, add it to `globals.css` as a named variable first.

## Typography

- **Display / headings**: Playfair Display (serif), weight 400. Never bold (700+) — it breaks the restraint.
- **Body / UI**: Inter (sans-serif), weight 400 default, 500 for emphasis.
- Scale is fluid (`clamp`) and already defined globally — use semantic tags (`<h1>`, `<h2>`, `<h3>`, `<p>`) and `.text-small`, not arbitrary `text-3xl` Tailwind classes, unless overriding for a specific component.
- Body `line-height: 1.8` is intentional — preserve it. Don't tighten to 1.4/1.5 "for density."

## Spacing & rhythm

- Prefer generous vertical rhythm: section padding `py-24` / `py-32` on desktop, `py-16` / `py-20` on mobile.
- Max content width for prose: `max-w-2xl` (~42rem); for multi-column sections: `max-w-6xl`.
- Never wall-to-wall full-bleed text. Always breathe.

## Radii & borders

- `rounded-xl` for cards and primary CTAs.
- `rounded-lg` for inputs, small buttons.
- `rounded-full` for pills (tags, language switcher) and the logo mark only.
- Never `rounded-2xl` / `rounded-3xl` — too "app-like," breaks the editorial feel.
- Borders: `border border-[#e8e6e3]` on cards. Avoid heavy 2px borders.

## Shadows

- Resting state: no shadow or a barely-perceptible `shadow-sm`.
- Hover lift (cards): `hover:shadow-md` + `hover:-translate-y-1` transition ~300ms.
- Never `shadow-2xl` / glowy drop-shadows — too SaaS-y.

## Imagery & motion

- Photography: mountains, mist, human figures small in frame. Always muted/desaturated; never over-graded.
- Video: slow-motion (see `HeroVideo.tsx` 0.3x playback), subtle vignette overlay.
- Animations: slow (600–1200ms), ease-out, fade + small translate. No bounce, no spring overshoot, no parallax scroll hijacking.

## Layout patterns to reuse

- **Hero**: full-viewport video/image + centered short tagline in Playfair + single CTA.
- **Content section**: centered max-w-2xl prose with a small Playfair heading and generous top/bottom padding.
- **Card grid**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `gap-8` or `gap-12`.
- **Divider**: `MountainDivider` SVG at low opacity between major sections — not `<hr>`.

## Anti-patterns (do not ship)

- Gradient buttons / gradient text / glassmorphism
- Emojis in UI or copy
- Centered "feature grids" of 3 identical icon + title + one-sentence cards (the SaaS-landing tell)
- Hero with two side-by-side CTAs ("Get started" / "Learn more")
- Testimonial carousels with 5-star ratings
- Hard borders around everything
- Decorative stock illustrations of abstract shapes

## When in doubt

Read `app/page.tsx` and `app/components/JourneyCard.tsx` as canonical references. Mimic their restraint.

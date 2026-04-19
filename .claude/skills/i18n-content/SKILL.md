---
name: i18n-content
description: Use when adding, changing, or translating any user-facing string across The Mountain Whisper. The site ships in 6 locales (en, fr, ru, zh, de, ne) via next-intl, and missing keys silently degrade the experience. This skill enforces the "all locales or none" rule.
---

# i18n Content

English is the default and the source of truth. Every other locale mirrors its key structure. A key that exists in `en.json` but not in `ne.json` will fall back to the key name — a visible bug.

## Setup facts

- **Library**: `next-intl` ^4.7
- **Config**: `i18n.ts` — locales `['en', 'fr', 'ru', 'zh', 'de', 'ne']`, default `en`
- **Messages**: `messages/<locale>.json` — one file per locale, nested namespaces
- **Locale detection**: cookie-based (`NEXT_LOCALE`), switched via `LanguageSwitcher.tsx`
- **Provider**: `NextIntlClientProvider` in `app/layout.tsx`

## Namespace structure in en.json

Top-level keys: `common`, `nav`, `home`, `workFromHimalayas`, `journeys`, `philosophy`, `corporate`, `enquire`, etc. Respect the existing nesting — don't flatten or re-shape without reason.

## The "all locales or none" rule

When adding a new string:

1. Add the key + English value to `messages/en.json` first.
2. Add the **same key path** to every other locale file, with a translation (or leave a TODO marker if you can't translate yet — never leave the key missing).
3. Commit all 6 files together.

When removing a string: remove it from all 6 files in the same commit.

When renaming a key: rename in all 6 files; grep the codebase for old usages and update them.

## Translation approach

- **English**: authored per `copy-voice` skill — lyrical, spare, no marketing tone.
- **French, German, Russian, Chinese, Nepali**: translate meaning, not literal words. A direct translation of metaphorical English often reads awkwardly. Prefer the natural equivalent idiom in the target language.
- **Nepali (ne)**: this is a home-turf locale for the brand. Quality matters more here than in any other. Use Devanagari. When in doubt, flag for human review rather than guessing — the audience will notice.
- **Chinese (zh)**: Simplified, mainland conventions.
- Preserve punctuation conventions per language (e.g. French non-breaking spaces before `:`, Chinese full-width punctuation).

## Banned shortcuts

- Do NOT copy the English string into other locales as a placeholder without marking it (`[TODO:<locale>] …`).
- Do NOT use machine translation without review for hero/CTA/legal copy — it will read stilted.
- Do NOT hardcode English strings in components. If you see `<h1>Where silence speaks</h1>`, move it to a message key.

## Verifying i18n changes

Before shipping:

1. `npm run build` — next-intl will error on malformed JSON or structural issues.
2. Run the dev server and switch locales via the footer `LanguageSwitcher`. Eyeball at least the home page and one journey detail page in each locale.
3. Check that no raw key path (e.g. `home.hero.tagline`) renders visibly — that means a key is missing.

## Useful greps

- Find usages of a key: `grep -rn "keyName" app/` (look for `t('keyName')` or `useTranslations` calls)
- Find hardcoded strings in components that should be extracted: look for `<h1>`, `<p>`, `<button>` children that are plain English text.

## When adding a journey

Cross-reference the `journey-content` skill — every new journey's `title`, `subtitle`, `shortDescription`, `description`, `audience`, `outcome`, etc. needs a translation in all 6 locale files.

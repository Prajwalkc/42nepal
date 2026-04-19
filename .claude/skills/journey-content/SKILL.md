---
name: journey-content
description: Use when adding a new journey, editing an existing journey's content, or changing the Journey type. Ensures entries in data/journeys.ts stay structurally complete, voice-consistent, and SEO-ready across all 5 existing journeys and any new ones.
---

# Journey Content

All journeys live in `data/journeys.ts` as typed entries. Adding a journey is not just filling a struct — the copy has to match the brand voice (see `copy-voice` skill) and every field has downstream effects (routing, SEO, i18n, emails).

## Existing journeys (as of this skill's writing)

1. `quiet-reset` — solo rest, featured
2. `leadership-in-stillness` ("Between Decisions") — founders/executives, featured, work-friendly
3. `solo-reflection` — solo travelers, featured
4. `shared-stillness` — couples, featured
5. `team-realignment` ("Collective Ascent") — small teams 4–12, work-friendly

Verify current list with: `grep -E "slug:" data/journeys.ts`

## Required fields

Every `Journey` entry must have:

```
slug, title, subtitle, description, shortDescription,
duration, location, focusTags[], workFriendly, featured,
suitableFor[], audience, outcome, forWho[],
experiences[], dailyRhythm {morning, midday, evening},
itinerary {day, title, description}[],
included[], excluded[],
practicalNotes {seasons, altitude, connectivity, suitability},
metaTitle, metaDescription
```

If you're unsure of a field's shape, read an existing entry in `data/journeys.ts` first — don't guess.

## Field-by-field guidance

- **slug**: lowercase, hyphenated, 2–3 words, no stopwords. Becomes the URL: `/journeys/<slug>`.
- **title**: Playfair serif — can be abstract/evocative ("Between Decisions") or plain ("Quiet Reset"). Not a sentence.
- **subtitle**: one line that says who + where + tone. ~10 words max.
- **shortDescription**: 1 sentence, used on the journey card. Concrete.
- **description**: 2–4 paragraphs on the detail page. Follow `copy-voice` — open with a felt moment, not a demographic.
- **duration**: e.g. "7 days", "5–7 days". Be honest, not aspirational.
- **location**: specific village/valley when possible — "Manang, 3,540m", not "The Himalayas".
- **focusTags**: 2–4 short tags (e.g. "stillness", "solo", "leadership"). Used for filtering and SEO.
- **workFriendly**: `true` only if the journey genuinely supports deep work (connectivity, workspace, hours).
- **featured**: controls home-page surfacing. Keep featured count ≤ 4.
- **audience** / **forWho[]**: describe as a state of mind, not a job title. "Founders between chapters," not "C-suite executives."
- **outcome**: what changes in the person afterward. Concrete and modest — "sleep returns," "a decision clarifies" — not "transformation."
- **dailyRhythm**: morning/midday/evening, each 1–2 sentences, sensory detail.
- **itinerary**: one entry per day. `title` is a feeling or focus ("Arrival, no agenda"), `description` is practical + atmospheric.
- **included[] / excluded[]**: plain bullet facts (lodging, meals, guide, transfers). This is the one place dry lists are okay.
- **practicalNotes**:
  - `seasons`: honest window (e.g. "March–May, Sept–Nov"). Name off-seasons explicitly.
  - `altitude`: exact meters + acclimatization note if >3,000m.
  - `connectivity`: honest — "patchy 4G in village, none on trails".
  - `suitability`: who should NOT come (health, fitness, altitude sensitivity).
- **metaTitle**: `<Title> — The Mountain Whisper` (≤ 60 chars).
- **metaDescription**: single sentence, ≤ 155 chars, uses the primary focus tag naturally.

## Adding a new journey — checklist

1. Add entry to `data/journeys.ts` following the type exactly.
2. Add hero image to `public/journeys/<slug>/` (landscape, muted, high-res).
3. If the journey has its own video, add a `JourneyHeroVideo` mapping.
4. Add translations: mirror the new copy keys in **every** file under `messages/` (en, fr, ru, zh, de, ne). See `i18n-content` skill.
5. Verify the card renders on `/journeys` and the detail page at `/journeys/<slug>`.
6. Check `metaTitle` / `metaDescription` length in browser devtools.
7. Run `npm run lint` and `npm run build`.

## Editing existing journey copy — watch-outs

- Changing a `slug` breaks inbound links and SEO. Don't, unless coordinated.
- Changing `title` or `subtitle` requires updating `messages/*.json` for all locales.
- Changing `included/excluded` may affect the enquiry email templates — double-check `app/api/enquire/route.ts` for any hardcoded references.

## Voice reminders

- Write the `description` as if speaking to one specific person who needs this trip.
- Never use "experience" as a noun twice in one paragraph. It's the most overused word in travel copy.
- The reader is tired. Every sentence should earn its place.

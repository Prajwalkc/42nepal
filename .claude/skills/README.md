# .claude/skills — Mountain Whisper

Project-level skills that teach Claude how to work on this codebase without drifting into generic AI-landing-page territory.

Each skill is a directory containing a `SKILL.md` with YAML frontmatter. Claude auto-loads skill descriptions and invokes a skill when its `description` matches the task.

## Brand-specific skills (hand-authored)

The source of truth for how The Mountain Whisper itself is built.

| Skill | When it fires |
|---|---|
| [design-system](design-system/SKILL.md) | Any UI / styling change — canonical colors, fonts, spacing, radii |
| [copy-voice](copy-voice/SKILL.md) | Any user-facing prose — hero, journeys, CTAs, emails |
| [design-review](design-review/SKILL.md) | Auditing a change for "does this look AI-generated" |
| [journey-content](journey-content/SKILL.md) | Adding/editing entries in `data/journeys.ts` |
| [i18n-content](i18n-content/SKILL.md) | Any string change — enforces all 6 locales stay in sync |
| [visual-qa](visual-qa/SKILL.md) | Pre-ship checklist for visual/content changes |

Tweak these files directly as the site evolves — they are the source of truth for "how Mountain Whisper is built."

## Impeccable skills (general design craft)

From [pbakaus/impeccable](https://github.com/pbakaus/impeccable) — a curated skill pack for avoiding generic AI frontend aesthetics. Installed via `bun run build` + `cp dist/claude-code/.claude/skills/*`. Do not hand-edit these — re-run the build to update.

| Skill | Purpose |
|---|---|
| [impeccable](impeccable/SKILL.md) | Master skill — build/craft distinctive UIs; called by other commands |
| [audit](audit/SKILL.md) | Accessibility, performance, anti-pattern report with P0–P3 severity |
| [critique](critique/SKILL.md) | Design critique |
| [polish](polish/SKILL.md) | Final pre-ship alignment/spacing/micro-detail pass |
| [optimize](optimize/SKILL.md) | Code/render/perf cleanups |
| [harden](harden/SKILL.md) | Production robustness (error states, edge cases) |
| [adapt](adapt/SKILL.md) | Responsive adaptation |
| [animate](animate/SKILL.md) | Motion design |
| [layout](layout/SKILL.md) | Layout structure |
| [typeset](typeset/SKILL.md) | Typography |
| [colorize](colorize/SKILL.md) | Color work |
| [shape](shape/SKILL.md) | Composition / rhythm |
| [clarify](clarify/SKILL.md) | Information hierarchy |
| [distill](distill/SKILL.md) | Simplify / reduce |
| [bolder](bolder/SKILL.md) | Strengthen / add presence |
| [quieter](quieter/SKILL.md) | Soften / reduce presence |
| [delight](delight/SKILL.md) | Small, tasteful moments |
| [overdrive](overdrive/SKILL.md) | High-intensity variant |

## How they work together

- Brand-specific skills = *what Mountain Whisper specifically is* (palette, voice, journeys).
- Impeccable skills = *how to do design craft well in general*.
- When they conflict, brand-specific skills win. Example: `typeset` suggests Space Grotesk, but `design-system` locks Playfair + Inter — use Playfair + Inter.

# Handoff: CharlesEZE — Archive & Digital Portfolio

## Overview
A personal portfolio / résumé-as-website for **Charles Eze** (Product Designer & Frontend Developer). It presents six sections — About, Experience, Services, Projects, Writing, Contact — through a clickable, single-page interface. The aesthetic is **minimal, technical, editorial**: a dark archive palette with warm and green signal accents, an editorial serif for headlines, a clean grotesque for body, and a monospace for technical labels/index numbers.

The design ships with **two interchangeable layout directions** and a small set of live layout controls (see *Design Variants* below).

## Development & Build
The site is a static React app, precompiled ahead of time (no in-browser Babel, no bundler).

- **Source of truth**: `src/app.jsx` (all components) + `data.js` (all content) + `styles.css` (design system).
- **Build**: `npm install` once, then `npm run build:app` — compiles `src/app.jsx` → `app.compiled.js` (committed, so Vercel needs no build step). Re-run after every edit to `src/app.jsx`.
- **Run locally**: `npm run dev` (serves on http://localhost:3032).
- **Deploy**: `npm run deploy:prod` (Vercel, static).
- React is self-hosted from `vendor/` (no CDN dependency).
- **Theming**: dark (default) and light themes via CSS variables on `[data-theme]`; a topbar/cover toggle persists the choice in `localStorage`, with `prefers-color-scheme` as the first-visit default.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, transitions, and interactions are all specified. Recreate the UI pixel-accurately using the codebase's libraries. All exact tokens are in *Design Tokens* below.

## Design Variants
The design exposes three controls (in the prototype, via a "Tweaks" panel; persisted in the EDITMODE block of the HTML). Treat these as **build/config variants**, not necessarily runtime user toggles — pick the ones the client wants, or implement as a theme config.

- **Direction** — `archive` (left-sidebar index, default in source) **or** `editorial` (centered, top horizontal nav). *Client's current preference: `editorial`.*
- **Density** — `comfortable` (default) or `compact`. Scales base font + spacing tokens (see tokens).
- **Sidebar style** (Archive direction only) — `numbered` (hairline-separated numbered list), `minimal` (no index numbers, tighter), or `boxed` (ruled blocks, top-borders, active row gets a wash background). *Client's current preference: `boxed`.*

If you only ship one direction, ship **Editorial** per the client's selection — but the Archive direction maps directly to the client's original hand sketch (top bar + left sidebar + content), so confirm before dropping it.

---

## Screens / Views
This is a single page; "screens" are the six section panels swapped into the content area. Both layout directions render the **same** six section bodies — only the surrounding chrome (shell) differs.

### Shell A — Archive (sidebar)
- **Top bar** (height 66px, 1px bottom border `--line`): left = brand `CHARLES EZE` (mono, uppercase, 0.84rem, weight 600, letter-spacing 0.16em) + `/` separator + role (mono, 0.72rem, `--mute`). Right = status block: `ARCHIVE / <SECTION>` (mono 0.72rem `--mute`) + a 7px ink dot with a faint 1px ring + `AVAILABLE FOR SELECT WORK`.
- **Sidebar** (width 286px comfortable / 252px compact, 1px right border): vertical nav list, then a pinned meta block at the bottom (Location / Since / Contact, each a mono uppercase 0.64rem label + 0.84rem value).
  - **Nav item**: flex row, baseline-aligned, gap 14px. Index number (mono 0.72rem, `--faint`) + label (sans 1.02rem, weight 500). Default color `--mute`. Padding: 13px top/bottom, 28px left, `--pad-x` right.
  - **Hover**: color → `--ink`, `transform: translateX(6px)`, and a 1px ink tick (`::before`) grows to 16px wide.
  - **Active**: color → `--ink`, index → `--ink`, `transform: translateX(8px)`, tick width 18px.
  - **Important implementation note**: indicate hover/active with `transform: translateX(...)` and `color`, **not** by animating `padding-left`. Animating padding (mixed shorthand/longhand) caused a stuck-transition bug where the previously-active item kept its active styling. Transform-based indent is reliable. Transition: `color, background, transform` at `180ms cubic-bezier(0.4, 0, 0.2, 1)`.
  - `numbered` style adds a hairline separator between items; `minimal` hides the index numbers and tightens padding to 9px; `boxed` adds a 1px top border per item, 20px vertical padding, larger label (1.12rem), and a `--wash` background on the active row.
- **Content area**: vertical scroll; inner stage padded `--pad-y` `--pad-x`, max-width 980px. Re-mounts on section change (keyed by active id) to replay the entrance animation.

### Shell B — Editorial (top-nav, centered)
- **Top bar**: same as Archive but right-side label reads `EDITORIAL`.
- **Editorial nav** (sticky, top 0, 1px bottom border, centered, gap 30px, wraps): each link is a mono button (0.74rem, `--mute`) with a small index number (0.66rem, `--faint`) before the label. Hover → `--ink`; active → `--ink` with an underline (`::after`, 1px, animates `scaleX` from left).
- **Stage**: centered column, `max-width: var(--read)` (760 / 700px compact), generous top/bottom padding. Section headers are **center-aligned** here (the kicker becomes a block, headline centered). Multi-column section layouts (about grid, services, projects) collapse to single column in this direction.

### Section bodies (shared)
Each section begins with a **section head**: a kicker (`NN — LABEL`, mono uppercase 0.7rem `--mute`, 0.18em tracking) + a serif display headline (`clamp(2.6rem, 5vw, 4rem)` in Archive; `clamp(2.4rem, 4.5vw, 3.6rem)` in Editorial; weight 420, line-height 1.04, letter-spacing -0.015em, `text-wrap: balance`). Each section ends with a **stage foot**: 1px top rule, mono 0.68rem `--faint`, left = `INDEX / NN`, right = `© <year> Charles Eze`.

1. **About** (`00`). Two-column grid `1fr 230px` (collapses in Editorial). Left: serif lede (1.45rem) + body copy (max-width `--read`, color `--ink-2`). Right: a 4:5 portrait image placeholder + a fact list (Based in / Working since / Focus / Stack / Status — each a hairline-separated row, mono uppercase key + `--ink` value).
2. **Experience** (`01`). Timeline. Each row: grid `168px 1fr`, 1px top border, 26px vertical padding. Left = period (mono 0.72rem `--mute`). Right = role (serif 1.5rem), org (sans 0.9rem `--mute`), detail (`--ink-2`, max-width 56ch).
3. **Services** (`02`). Two-column grid (single in Editorial). Each card: 1px top border; odd cards pad-right 36px, even cards pad-left 36px + 1px left border. Content: number (mono 0.7rem `--faint`), title (serif 1.5rem), body (`--ink-2`, max-width 44ch).
4. **Projects** (`03`). Two-column card grid, gap 40px (single column, gap 48px in Editorial). Each card: 16:10 image placeholder (1px border → `--ink` on hover), tag (mono uppercase 0.66rem `--faint`), title row (serif 1.4rem title + mono year), blurb (`--ink-2`, max-width 46ch). Whole card is a link (cursor pointer; href currently `#`).
5. **Writing** (`04`). List of posts. Each: grid `1fr auto`, 1px top border, 24px vertical padding, hover indents 12px (padding-left). Left = title (serif 1.35rem) + blurb (`--ink-2`, max-width 60ch). Right = mono 0.7rem meta (date / read-time).
6. **Contact** (`05`). Serif lede (max-width 620px) + a large serif email link (`clamp(1.8rem, 4vw, 2.8rem)`, bottom border → `--ink` on hover) + a 2-column link grid (Email / LinkedIn / GitHub / Twitter), each a hairline-separated cell with mono uppercase label + `--ink` value, hover indents 10px.

---

## Interactions & Behavior
- **Navigation**: clicking a nav item sets the active section (single state value). The content stage is keyed by the active id so it remounts and replays a subtle entrance animation: `@keyframes rise` — `opacity 0 → 1`, `translateY(6px) → 0`, over 180ms ease.
- **Staggered entrances**: on section change, the kicker, headline, and each list row/card rise in sequence (460ms `cubic-bezier(0.22, 1, 0.36, 1)`, ~70ms steps via nth-child delays). The cover plays a longer staggered reveal (top rule → kicker → name → tagline → ticker → bottom block).
- **Keyboard navigation**: `Enter` on the cover opens the archive; inside, `←` / `→` cycle sections (wrapping) and `1`–`6` jump directly. Modifier-key combos and form fields are ignored.
- **Prev / next section nav**: a `SectionNav` row (shared by both shells) renders below each section — mono prev/next buttons with sliding arrows and a centered `← → / 1–6` hint (hint hidden ≤720px).
- **Ghost index numeral**: each section head renders a huge outlined serif numeral (`clamp(7rem, 18vw, 13rem)`, 1px stroke at 7% ink) floating behind the headline — right-aligned in Archive, centered in Editorial, hidden ≤720px. `aria-hidden`.
- **Live touches**: the top bar shows a live Lagos clock (`LAGOS HH:MM:SS`, tabular numerals, updates 1s); the status dot emits a 2.6s expanding ping ring; the cover's large circle breathes (9s scale/opacity loop); the cover has a slow infinite specialty ticker (36s linear, edge-masked, built from the services titles + "Lagos → Worldwide", `aria-hidden`).
- **Texture**: a fixed full-viewport SVG fractal-noise grain overlay at 5% opacity (pointer-events none) sits over everything.
- **Reduced motion**: `prefers-reduced-motion: reduce` collapses all animations/transitions to ~0ms.
- **Hover states**: described per component above. All transitions use `180ms cubic-bezier(0.4, 0, 0.2, 1)`.
- **Active nav indication**: color + `transform: translateX()` + a growing 1px tick (Archive) / underline scaleX (Editorial). **Do not animate padding for this** (see note above).
- **No real navigation/data**: project cards, writing posts, and social links are placeholders (`href="#"`); the email link is a real `mailto:`. Wire these to real destinations.
- **Responsive**: at ≤920px the multi-column grids collapse to single column; at ≤720px the Archive shell becomes a stacked layout with a horizontal scroll nav, hidden sidebar meta, tighter top bar, and smaller page padding.

## State Management
Minimal. One piece of UI state:
- `activeSection: 'about' | 'experience' | 'services' | 'projects' | 'writing' | 'contact'` (default `about`).

The three design variants (`direction`, `density`, `sidebar`) are config/theme values, not user state, in production. In the prototype they live in a persisted JSON block and are applied via `data-density` and `data-sidebar` attributes on a wrapper element + a component switch for direction.

All content is static data — see `data.js`. No data fetching required.

## Design Tokens
Colors (dark archive palette with restrained accents):
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#101112` | background |
| `--paper-2` | `#14181a` | secondary background |
| `--panel` | `#1b1d1f` | raised surfaces |
| `--ink` | `#f3efe6` | primary text, active states |
| `--ink-2` | `#c9c2b6` | body copy |
| `--mute` | `#9d988e` | secondary text, inactive nav |
| `--faint` | `#6f716d` | tertiary / index numbers |
| `--line` | `#2b2d2d` | hairlines, borders |
| `--line-2` | `#45423b` | slightly stronger borders |
| `--wash` | `#191d1c` | subtle panel / active boxed row |
| `--accent` | `#d79b62` | active labels, focus, warm signal |
| `--accent-2` | `#6ba892` | status dot, cool signal |
| `--accent-3` | `#c25f4d` | secondary warm signal |

Typography:
- **Serif (headlines)**: `Newsreader`, fallback `Georgia, "Times New Roman", serif`. Weights 400 / 420 / 440 / 500.
- **Sans (body/UI)**: `Hanken Grotesk`, fallback `system-ui, -apple-system, sans-serif`. Weights 400 / 500 / 600.
- **Mono (labels/index/meta)**: `IBM Plex Mono`, fallback `"SFMono-Regular", Menlo, monospace`. Weights 400 / 500 / 600.
- Base body: `--base` = 17px (comfortable) / 15px (compact); line-height 1.6.

Spacing / layout (comfortable → compact):
- `--pad-x`: 56px → 40px (24px at ≤720px)
- `--pad-y`: 52px → 36px
- `--section-gap`: 64px → 44px
- `--read` (reading column): 760px → 700px
- `--sidebar-w`: 286px → 252px

Motion:
- `--t` = `180ms cubic-bezier(0.4, 0, 0.2, 1)` for all hover/active/state transitions.

Misc:
- Image placeholders render crafted abstract screen compositions with a small mono caption chip — replace with real assets when project imagery and portrait photography are available.
- `::selection` = ink background, paper text.

## Assets
No real images are used — all imagery is **CSS-generated visual placeholders** with mono captions:
- About: a **portrait** (4:5 aspect). Provide Charles's headshot.
- Projects: four **16:10 cover images** (`ledger`, `atlas`, `press`, `signal`). Provide project shots.
No icon set is used. Fonts load from Google Fonts (Newsreader, Hanken Grotesk, IBM Plex Mono).

## Content
All copy is **placeholder-but-believable** and lives in `data.js` (identity, nav, about, experience, services, projects, writing, contact). Charles should review/replace it before launch — the structure is final, the words are drafts.

## Files
- `index.html` — entry point; fonts, theme bootstrap, and deferred scripts (`data.js` → vendored React → `app.compiled.js`).
- `src/app.jsx` — all React components (shells, sections, tweaks panel, theme toggle). Edit this, then `npm run build:app`.
- `app.compiled.js` — build output of `src/app.jsx` (committed; do not edit by hand).
- `styles.css` — the full design system + all component styles (source of truth for tokens, layout, and both themes).
- `data.js` — all content as a `window.PORTFOLIO` object.
- `vendor/` — self-hosted React 18 UMD bundles.
- `assets/images/` — portrait, cover, and project imagery (pre-optimized).

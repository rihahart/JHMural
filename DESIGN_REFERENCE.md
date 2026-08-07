# JHMural — Design & Layout Reference

The standard for **file structure, page layout, and the design-token system** used by the
JHMural website. Read this before adding a page or component so new work stays consistent
with the existing design. The home page layout is kept in sync with the Figma frame
**"Homescreen"** (`GRJp5n5orHWOYwPXPniDqs`, node `3778:1280`).

> Scope: this is the JHMural (Next.js website) doc only. The backend and admin apps have
> their own docs. If a workspace-wide index is ever needed, add a slim root `README.md`
> that links to each project's doc rather than merging them here.

---

## 1. Framework & file structure

- **Next.js 16** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS v4**.
- Animations: `framer-motion`. Data fetching: `swr`. Icons: `react-icons`. Newsletter: `@mailchimp/mailchimp_marketing`.

```
JHMural/
├─ src/
│  ├─ app/                    # App Router: routes, layouts, API routes
│  │  ├─ layout.tsx           # Global shell (fonts, Navbar, main, Footer)
│  │  ├─ page.js              # Home page
│  │  ├─ globals.css          # Tailwind import + ALL design tokens & type classes
│  │  ├─ <route>/page.js      # e.g. get-involved, team, partners, newsletter, projects/*
│  │  ├─ api/<name>/route.js  # Route handlers (whitney-exhibitions, newsletter)
│  │  └─ _utilities/          # Client hooks: useIsMobile, useFontsReady, useMobileDetection, api
│  ├─ components/             # UI, grouped by feature (see below)
│  └─ data/                   # Static content arrays (one file per section)
├─ public/                    # Images, SVGs, videos (referenced by absolute "/path")
├─ tailwind.config.js         # Custom keyframes/animations only
├─ postcss.config.mjs
└─ next.config.ts
```

**Component grouping** (`src/components/`): feature folders — `home/`, `exhibitions/`,
`navbar/`, `getInvolved/`, `getToKnowUs/`, `JHMuralteam/`, `supporters/`,
`84thStreetMural/`, `responsive/`, plus shared `ButtonCollection/`. Cross-cutting pieces
(`Navbar`, `MobileNavbar`, `Footer`, `MotionProvider`) live at the `components/` root.

**Conventions**
- Section content that repeats (cards) is **data-driven**: content lives in `src/data/<name>Data.js`, the component maps over it. Examples: `openAirGalleriesData.js`, `homeFeatureCardsData.js`.
- Import alias `@/` → `src/`.
- Interactive/animated components start with `"use client"`.

---

## 2. Global shell & responsive strategy

`src/app/layout.tsx` wraps every page:
`MotionProvider` → `Navbar` + `MobileNavbar` → `<main className="pt-[80px]">{children}</main>` → `Footer`.
It also loads the **Adobe Typekit** stylesheet (`https://use.typekit.net/yvy5tmy.css`) and sets page metadata.

- **Mobile / desktop split** is done in JS, not just CSS: `useIsMobile()` (`src/app/_utilities/useIsMobile.js`) switches at **768px**. Components render a `<MobileOnly>` and a `<DesktopOnly>` branch from `src/components/responsive/Breakpoint.tsx` (`md:hidden` / `hidden md:block`).
- Extra breakpoints (`globals.css @theme`): **`lg` = 1024px**, **`xl` = 1440px**.
- Guard against font/layout flash: gate first paint on `useFontsReady([...])` (see `page.js`), showing a brand-colored placeholder until fonts load.

---

## 3. Home page layout standard

`src/app/page.js` — canonical section order (desktop & mobile mirror each other):

1. **Hero** (`Hero` / `HeroMobile`) — full-bleed brand-blue, "WE PAINT MURALS…" headline + looping video. Rendered outside the padded container so it spans full width.
2. `DecorativeDivider` (tulip)
3. **Mission row** — `OurMissionCard` (57%) + `RooseveltAveProjectCard` (43%), stacks below `xl`.
4. `DecorativeDivider`
5. **Feature row** — `HomeFeatureCards`: 3-up (Inaugural Mural / Donate / Join newsletter) with vertical dividers, stacks below `lg`.
6. `DecorativeDivider`
7. **`IndoorGalleryPicks`** — full-width; heading + intro + `ExhibitionsSection` (pastel `ExhibitionBox` cards) + "See all".

Layout rules:
- Content container: `max-w-[1600px] mx-auto`, horizontal padding `--spacing-2xl`→`--spacing-6xl`.
- **Inter-section gap: `--spacing-12xl` (112px)** on desktop; sections are separated by a `DecorativeDivider`.
- Two-column rows: `flex flex-col xl:flex-row gap-[var(--spacing-8xl)]` with `min-w-0` on children.
- Card media: `relative w-full h-[..] overflow-hidden` wrapping `<Image fill className="object-cover">`.

### Responsive breakpoint standard (matches Figma Desktop/Tablet/Mobile frames)

Multi-column sections **collapse to a single column below `xl` (1440px)** — they stay stacked
through tablet. Only the gallery grid steps down gradually. Verified against the Figma
`HomeScreen 1440`, `Tablet` (1024), and `Mobile` (393) frames:

| Section | Mobile (<768) | Tablet (768–1439) | Desktop (≥1440 `xl`) |
|---------|---------------|-------------------|----------------------|
| Mission row (`OurMissionCard` + `RooseveltAveProjectCard`) | stacked | **stacked** | 2-col (`xl:flex-row`) |
| Feature row (`HomeFeatureCards`) | stacked | **stacked** | 3-col (`xl:flex-row` + `xl:divide-x`) |
| Gallery grid (`ExhibitionsSection`) | 1-col | 2-col (`md:grid-cols-2`) | 3-col (`xl:grid-cols-3`) |

Rule of thumb: **side-by-side card rows use `xl:` (1440) as the switch**, not `lg:` — a
`lg:flex-row` would wrongly go multi-column on tablet. The `md:`/`lg:` steps are reserved for
grids that degrade gradually (like the gallery). The exhibition card (`ExhibitionBox`) is a
vertical card — photo on top, pastel text panel beneath — so it reads correctly in the grid.

---

## 4. Design-token system (`globals.css`)

**Everything visual comes from CSS custom properties in `:root`.** Never hard-code hex,
px font sizes, or ad-hoc spacing — reference a token via Tailwind arbitrary values, e.g.
`bg-[var(--color-background-brand)]`, `gap-[var(--spacing-xl)]`.

### Color
- **Palettes** (scaled 100–900): `--color-brand-*`, `-neutral-*`, `-blue-*`, `-orange-*`, `-red-*`, `-pink-*`, `-green-*`, `-purple-*`, `-yellow-*`. Brand blue = `--color-brand-700` = **`#01519c`**.
- **Use the semantic aliases, not raw palette values**, in components:
  - Content (text/icons): `--color-content-primary` / `-secondary` / `-tertiary`, `-primary-inverse` (on dark), `-brand`, `-link`.
  - Background: `--color-background-primary`, `-brand` (hero/blue cards), `-inverse`, `-notice` (yellow), pastels via palette in `ExhibitionBox`.
  - Border: `--color-border-primary` / `-secondary` / `-tertiary`, `-brand`, `-positive` (divider green).

### Spacing (`--spacing-*`)
`2xs 2 · xs 4 · s 8 · m 12 · lg 16 · xl 24 · 2xl 32 · 3xl 40 · 4xl 48 · 5xl 56 · 6xl 64 · 7xl 72 · 8xl 80 · 9xl 88 · 10xl 96 · 11xl 104 · 12xl 112` (px).

Figma px → token cheat sheet: 64→`6xl`, 48→`4xl`, 40→`3xl`, 32→`2xl`, 24→`xl`, 16→`lg`, 80→`8xl`, 112→`12xl`.

### Radius
`--radius-xs 4 · s 8 · m 12 · lg 16 · pill 999 · circle 50%`.

### Type scale
`--font-size-*` (`xs 10` … `18xl 120`) paired with matching `--line-height-*`. Don't apply
these raw — use the **semantic typography classes** below (they bundle size + line-height +
weight + family).

### Typography classes (pick by role)

| Role | Class family | Notes |
|------|-------------|-------|
| Oversized display headline | `hero-2xl … hero-xs` | 120→80px, bold, base font |
| Section heading (desktop) | `web-heading-5xl…xs-bold/semibold` | `5xl`=72px … scales down |
| Section heading (mobile) | `mobile-heading-5xl…xs-*` | mobile counterparts |
| Body / paragraph (desktop) | `web-text-3xl…2xs-black/semibold/medium/regular` | `2xl`=26, `lg`=20, `m`=18 |
| Body / paragraph (mobile) | `mobile-text-3xl…2xs-*` | mobile counterparts |
| Logo / wordmark | `logo-*` | uses the **sharp** font family |

Rule of thumb: **display font for headings** (`style={{ fontFamily: "var(--font-family-display)" }}`),
base font (the default) for body copy, sharp font only for the logo.

### Fonts (Adobe Typekit, loaded in `layout.tsx`)
- `--font-family-base` = **acumin-pro-condensed** (body — the default on `html`/`body`)
- `--font-family-display` = **cubano** (headings)
- `--font-family-sharp` = **cubano-sharp** (logo)
- Weights: `--font-weight-regular 400` … `-black 800`.

### Motion / a11y
- Animated sections wrap in `framer-motion` `LazyMotion features={domAnimation}` and use `m.*` elements.
- Reduced motion is respected two ways: `<MotionConfig reducedMotion="user">` (via `MotionProvider`) **and** a `@media (prefers-reduced-motion: reduce)` block in `globals.css`. Keep both working.
- Custom effects available: `.mission-statement-animate`, `.sparkle-text`, `.sparkle-primary`.

---

## 5. Component conventions

- **Buttons — never hand-roll.** Use `src/components/ButtonCollection/`:
  - `Button` — filled CTA. `variant`: `primary` (brand blue), `primary-inverse` (dark), `primary-on-brand` (white on blue), `secondary`, `tertiary`; `size`: `small` | `large`; `href` renders a `next/link`; `trailingIcon`/`leadingIcon`.
  - `BorderlessButton` — link-style with animated underline; `variant`: `primary`, `secondary` (brand), `primary-inverse`; same size/icon API. Use for "Learn more" / inline CTAs.
  - `NavButton` — full-width row button used in the footer/menus.
- **Images**: `next/image`. Fixed-ratio media uses the `fill` + `object-cover` wrapper pattern; inline/decorative images pass explicit `width`/`height`. Always set a meaningful `alt` (empty `alt=""` for purely decorative).
- **Section dividers**: `DecorativeDivider` (green rule + rotated `/Tulip64.svg`) between top-level home sections.
- **Repeating content** is data-driven (`src/data/*Data.js`) — add/edit content there, not in JSX.

---

## 6. Adding a new home section (checklist)

1. Put copy/image data in `src/data/<name>Data.js` if it repeats.
2. Build the component in `src/components/home/` — `"use client"` if animated/interactive.
3. Use semantic type classes + `--spacing`/`--color` tokens only; reuse `Button`/`BorderlessButton` and the `Image` fill pattern.
4. Insert into `src/app/page.js` between `DecorativeDivider`s, in both the `MobileOnly` and `DesktopOnly` branches.
5. Verify at 375px, 768px, 1024px, 1440px and against the Figma "Homescreen" frame.

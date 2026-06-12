# Sophia AI — Landing Page Build Spec

## Overview
Build a single editorial landing page for "Sophia AI" in an existing
**Next.js 16 (App Router) + TypeScript + CSS Modules** scaffold. Replace the
default boilerplate in `src/app/{layout,page}.tsx`, `globals.css`. Match a
1440px desktop Figma design (warm-cream, high-contrast serif, editorial).

The page is server-rendered except three interactive pockets (mark only these
`"use client"`): the hero **Orb**, decorative **gold lines/sparkles**, and the
**Process accordion**.

### Locked decisions
- **Fonts:** Cormorant Garamond (display headlines + wordmark) + EB Garamond
  (body, nav, stats) via `next/font/google`.
- **Accordion:** single-open, click-to-toggle (opening one closes the others),
  first card open on load.
- **Mobile nav (v1):** keep wordmark + Log In, hide center links on narrow
  screens.

---

## 1. File structure
Co-locate each section with its own CSS Module under `src/components/`.

```
src/
  app/
    layout.tsx            # fonts + metadata
    page.tsx              # composes sections
    globals.css           # tokens + resets
  components/
    Nav/          Nav.tsx           Nav.module.css            (server)
    Hero/         Hero.tsx          Hero.module.css           (server)
                  Orb.tsx           Orb.module.css            ("use client")
    Process/      Process.tsx       Process.module.css        ("use client")
                  ProcessCard.tsx   ProcessCard.module.css    (presentational)
    Intelligence/ Intelligence.tsx  Intelligence.module.css   (server)
    SocialProof/  SocialProof.tsx   SocialProof.module.css    (server)
    Footer/       Footer.tsx        Footer.module.css         (server)
    decor/        GoldLines.tsx     GoldLines.module.css      (server)
  data/
    process.ts            # 4 items: { numeral, title, body }
    testimonials.ts       # 3 items: { name, location, stars, quote }
    stats.ts              # 3 items: { value, label }
```

`Process.tsx` is the `"use client"` parent owning
`openIndex: number | null` state; `ProcessCard` is controlled/presentational
(props `numeral, title, body, isOpen, onToggle`).

---

## 2. globals.css tokens
Drop the dark-mode block; fixed warm-cream palette. Keep the box-sizing/margin
reset and `a { color: inherit }`. Set `body { background: var(--bg); color:
var(--ink-soft); font-family: var(--font-body); }`.

```css
:root {
  --bg:          #F7EDD8;  --bg-card:   #EFE7D6;
  --ink:         #2A211C;  --ink-soft:  #4A3F38;  --ink-muted: #8A7B6E;
  --gold:        #B68A5E;  --gold-soft: #C4956A;
  --gold-line-1: #C4956A;  --gold-line-2: #D4B896;  --gold-line-3: #B8977A;
  --pill-bg:     #2A211C;  --pill-ink:  #F3E9D6;
  --orb-center:  #B48CC8;  --orb-mid:   #8A6E7A;   --orb-edge:  #C9A06E;
  --font-display: var(--font-cormorant);
  --font-body:    var(--font-eb-garamond);
  --maxw: 1200px;  --gutter: clamp(20px, 5vw, 80px);
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Add a global `@media (prefers-reduced-motion: reduce)` that sets
`animation: none; transition: none` on the orb, sparkles, and accordion.

---

## 3. Fonts (layout.tsx)
```ts
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"], weight: ["400","500","600"],
  style: ["normal","italic"], variable: "--font-cormorant", display: "swap",
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"], weight: ["400","500"],
  style: ["normal","italic"], variable: "--font-eb-garamond", display: "swap",
});
```
Apply `${cormorant.variable} ${ebGaramond.variable}` to `<html>`. Set Sophia
metadata. Enable elegant ligatures on display text:
`font-feature-settings: "liga","dlig"`. EB Garamond's default old-style figures
match the stat numerals.

---

## 4. Sections (top to bottom)

1. **Nav** — "SOPHIA" wordmark (wide letter-spacing, Cormorant) left; center
   links *The Process / The Intelligence / Careers*; "Log In" dark pill right.
2. **Hero** — uppercase tag `Private · Intelligent · Intentional`; large serif
   headline "Meet the person you've been waiting for."; subtext "Sophia is the
   first private date concierge and social connector."; the **Orb**;
   dark "Apply to Join" pill; caption "Free to apply within 2 minutes".
3. **Process** — "Process." heading + 4 accordion cards (I–IV).
4. **Intelligence** — "— The Intelligence" tag; large serif headline mixing
   regular + italic (italic in `--gold`); body paragraph; thin gold divider;
   link "Learn how Sophia thinks →"; 3 stat blocks (94%, 324, 30min) + labels.
5. **Social Proof** — 3 testimonial cards (★ rating, quote, name/location) in an
   offset/overlapping organic layout (desktop only).
6. **Footer** — links (Privacy Policy / Terms of Service / Acceptable Use),
   centered SOPHIA wordmark, copyright "© 2026 Sophia AI. All rights reserved."

---

## 5. Orb — CSS gradients (not SVG)
A `div` with stacked `radial-gradient`s: tight bright core (`--orb-center` →
transparent ~35%), mid lavender/brown ring, outer peach/gold halo (`--orb-edge`)
fading into `--bg` so the edge dissolves (no hard circle). Soften with
`filter: blur(8–12px)` and/or a larger blurred pseudo-element behind for the
diffuse glow. Two slow infinite keyframes, GPU-only props
(`transform/opacity/filter`, `will-change: transform`):
- `breathe` — `scale(1 → 1.05 → 1)`, ~10s, ease-in-out.
- `glow` — subtle opacity / background-position drift on the halo, ~12s, phase
  offset.

## 6. Gold lines + sparkles
`GoldLines.tsx` renders an inline `<svg>` (viewBox ~`0 0 1440 400`,
`preserveAspectRatio="xMidYMid slice"`, `aria-hidden`,
`pointer-events: none`), positioned `absolute z-index:0` behind content
(content `position: relative; z-index: 1`).
- **Curves:** several `<path>` Bézier strokes, `fill="none"`, varying `stroke`
  (`--gold-line-1/2/3`), `stroke-width` 0.5–1.5, `stroke-opacity` 0.3–0.9.
- **Sparkles:** small `<circle>` (r 1.5–3) with soft glow via SVG
  `feGaussianBlur` or a faint larger duplicate behind.
- **Twinkle:** CSS `@keyframes twinkle` on opacity (0.3 ↔ 1), staggered via
  per-circle `animation-delay`, 2.5–4s, ease-in-out, infinite (pure CSS).
- Place as a background layer in the Hero (flanking the orb) and in the bands
  Hero→Process and Process→Intelligence (reuse, mirror/rotate via CSS).

## 7. Process accordion
- `Process.tsx` (`"use client"`): `useState<number|null>(0)`; single-open
  toggle: `setOpenIndex(prev => prev === i ? null : i)`.
- `ProcessCard`: full-width `<button>` header (numeral + title + `+`/`−`
  indicator) and a body region. Animate body wrapper `max-height` (0 →
  ~240px) + `opacity` + `padding`, ~400ms `var(--ease)`. Indicator: one `+`
  glyph rotated 45° to read as `−` on open (transitioned).
- A11y: header `<button aria-expanded={isOpen} aria-controls={panelId}>`; panel
  `id` + `role="region"`. Keyboard Tab/Enter works via the button.

## 8. Responsive (baseline 1440px, fluid down)
- Center content in `--maxw` with `--gutter`; cream bg bleeds full-width.
- Headlines use `clamp()` (e.g. hero `clamp(2.4rem, 6vw, 4.5rem)`).
- Nav: hide center links < ~720px.
- Stats: 3-up → stack/2-col on narrow.
- Social proof: absolute offset desktop-only; < ~820px stack relatively.
- Scale/clip orb + gold lines on small screens. Respect reduced-motion.

---

## Verification
1. `npm install` then `npm run dev` → `http://localhost:3000`.
2. Visual diff vs design at 1440px: order, spacing, type, palette, orb.
3. Orb: slow breathing/glow loop, soft dissolve, no hard edge.
4. Gold lines behind content; sparkles twinkle on staggered timing.
5. Accordion: click opens with smooth height/opacity + `+`→`−`; single-open;
   keyboard works; `aria-expanded` flips.
6. Resize 375 / 768 / 1440px: no horizontal scroll, headlines scale, cards
   stack without overlap.
7. OS "reduce motion" disables orb/sparkle/accordion animation.
8. `npm run build` + `npm run lint` pass; `"use client"` only where needed.

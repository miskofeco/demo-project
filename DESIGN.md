---
name: AI Meetup Košice
description: A signal-inspired meeting place for the AI community in Košice.
colors:
  canvas: "oklch(0.974 0.012 247)"
  ink: "oklch(0.206 0.032 257)"
  surface: "oklch(0.997 0.003 247)"
  night: "oklch(0.19 0.045 261)"
  signal: "oklch(0.88 0.18 124)"
  signal-ink: "oklch(0.19 0.045 150)"
typography:
  display:
    fontFamily: "Space Grotesk Variable, sans-serif"
    fontSize: "clamp(3.1rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.99
    letterSpacing: "-0.04em"
  body:
    fontFamily: "DM Sans Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  card: "24px"
  control: "9999px"
spacing:
  card-gap: "16px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  hero-card:
    backgroundColor: "{colors.night}"
    textColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "44px"
---

## Overview

The visual world is a meeting signal: clear editorial type, a dark stage, a
bright lime date marker and restrained orbital geometry. The design should feel
welcoming to curious newcomers while still credible to AI practitioners.

## Colors

Light mode uses a cool pale canvas and white content cards. Dark mode shifts the
canvas and cards to layered blue ink. The hero stays dark in both modes, while
the lime signal carries the countdown and main action. Actual CSS variables in
`src/app/globals.css` are the source of truth for both themes.

## Typography

Space Grotesk carries display headings and compact card titles; DM Sans carries
body copy and controls. Headings are bold and short. Body copy stays readable
at mobile widths and avoids long lines on desktop.

## Layout

The page is mobile-first. Hero, countdown and event details stack on phones;
desktop arranges them in an asymmetric bento grid. Program cards change span by
importance. Sections use generous vertical separation and a 1440px outer limit.

## Elevation & Depth

Cards use a single subtle ring on light and dark backgrounds. The hero gains
depth from restrained radial light and orbital lines; it does not use a floating
shadow. Keep the countdown flat and vivid.

## Shapes

Major surfaces use 20–24px corners. Small actions and filter controls use
pills. Speaker art uses precise circles and diagonals as abstract geometry,
never as a stand-in for a real portrait.

## Components

Use shadcn/ui for Tabs, Cards, Accordion, Badges and Buttons. Hugeicons supply
all interface icons. Motion animates only the decorative hero orbit and respects
reduced-motion preference. Content and event facts live in `src/content/`.

## Do's and Don'ts

- Do clearly mark illustrative program and speaker content.
- Do keep language and color-theme controls available on every viewport.
- Do preserve visible focus, readable contrast and tap targets.
- Don't imply that speakers, venue, time or registration are confirmed.

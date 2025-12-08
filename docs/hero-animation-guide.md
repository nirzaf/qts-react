# Hero Animation Guide

## Overview
The hero animation system powers the motion-rich landing hero, combining Framer Motion choreography with custom visual elements. This guide merges component docs and improvement notes.

## Architecture
- **Core component:** `HeroAnimation` in `src/components/animations/` with supporting assets.
- **Host section:** `ModernHeroSection` mounts the animation and orchestrates motion variants for text, badges, and CTAs.
- **Motion library:** Framer Motion for timeline control, staggered entrances, floating orbs, and hover/tap interactions.
- **Styling:** Tailwind gradients/orbs/grids plus Lucide icons for ambient cues.

## Functional Components
- **Background system:** Gradient orbs, grid overlays, floating icons, and blur effects positioned absolutely behind content.
- **Text carousel:** Phrase cycling via state + AnimatePresence for headline variations.
- **CTAs:** Primary gradient button and bordered secondary button with hover/tap scaling.
- **Trust signals:** Pulsing status dots for certifications/partners.

## Configuration
- **Variants:** Container/item/floating variants define timing and easing; keep durations aligned to maintain coherence.
- **Breakpoints:** Separate mobile/desktop hero sections; ensure `use client` where interactivity is required.
- **Tokens:** Use brand blues (`#0607E1`, accents) and Tailwind theme colors; avoid hardcoding inconsistent palettes.
- **Performance:** Lazy-load heavy animation assets and prefer `transform` over layout-affecting properties.

## Usage Patterns
- Mount `ModernHeroSection` near page top with a relative container; allow background layers (`BackgroundElements`, `SpaceVoidBackground`) to sit behind content.
- Keep CTA handlers injected via props (e.g., router pushes) to decouple navigation from layout.
- Use Suspense/lazy loading for adjacent heavy sections to preserve hero LCP.

## Notable Examples
- Landing hero with dual-mode layouts (mobile stack, desktop split grid) and animated phrase rotation.
- Ambient effects: grid overlay, floating Lucide icons, animated orbs, and pulsing badges synchronized with CTA motion.

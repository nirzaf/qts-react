# Brand and Asset Catalog

## Overview
Centralized inventory of logos, brand imagery, color tokens, and reusable asset links for the site.

## Architecture
- **Storage:** Hosted on ImageKit links referenced across components and marketing pages.
- **Organization:** Logos, client marks, project imagery, website assets, and SVG tech stacks consolidated here for reuse.
- **Consumption:** Components pull URLs from constants or data files; keep this catalog as the single source of truth.

## Functional Components
- **Brand assets:** Primary logo at `https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969` with hero image source and alt text guidance.
- **Client logos:** Grommunio set (default + transparent + partner banners) for trust sections and partner grids.
- **Website assets:** General site imagery and hero image reference for marketing surfaces.
- **Project assets:** Case-study visuals and reusable media for portfolio sections.
- **Tech stack SVGs:** Icon set for technology lists.
- **Color palette:** Chrysler Blue-led palette; maintain consistency across gradients and backgrounds.

## Configuration
- Maintain alt text per asset when embedding in components.
- Keep ImageKit URLs current; update query params when assets are refreshed to bust caches.
- Store new assets in this catalog before inlining into components to avoid drift.

## Usage Patterns
- Reference catalog entries via constants/data modules instead of hardcoding links in components.
- Pair brand blues with neutral backgrounds for readability; use gradients sparingly behind text-heavy sections.
- When adding partner logos, include both default and transparent variants if available.

## Notable Examples
- Hero image: `https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458` used on landing hero and social previews.
- Grommunio partner banners: vertical and half-banner variants for partner callouts.

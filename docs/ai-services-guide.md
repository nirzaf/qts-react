# AI Services Guide

## Overview
AI services span strategic consulting, custom model delivery, packaged industry solutions, and end-to-end integration for web and services pages. This guide summarizes the offering and the implementation footprint used across the site.

## Architecture
- **Data layer:** `src/data/aiServices.ts` exposes service metadata and categories.
- **Presentation:** `src/components/sections/AIServicesSection.tsx` renders the catalogue with category tabs and animated cards.
- **Placement:** Integrated on `src/pages/Home.tsx` and `src/pages/Services.tsx` (and App Router equivalents) to surface the offering in hero/feature areas.
- **Assets:** Lucide icons mapped per category (e.g., Brain, Cpu, Eye) to reinforce service themes.

## Functional Components
- **Strategy & Consulting:** Readiness assessment, roadmap definition, use-case identification.
- **Custom Models:** ML (predictions/recs/fraud), CV (detection/recognition), NLP (chatbots/text analysis/translation), Generative AI (content/code/agents).
- **Integration & Delivery:** Cloud AI implementation (AWS/Azure/GCP), embedding AI into existing workflows.
- **Data & MLOps:** Data engineering for pipelines and storage; CI/CD/monitoring for models.
- **Packaged Solutions:** Industry kits (healthcare/manufacturing/e-commerce/finance) and automation (support/reporting/data entry).

## Configuration
- **Tabs & cards:** Drive from `aiServices.ts` to avoid hardcoding in components.
- **SEO:** Ensure structured data/metadata reference AI service names where rendered.
- **Icons:** Keep icon IDs stable when adding categories; update map in `AIServicesSection`.

## Usage Patterns
- Embed `AIServicesSection` in marketing pages with Suspense/lazy loading to keep LCP fast.
- Pair with gradient overlays and motion props already used in hero/feature sections for visual consistency.
- When adding new services, extend `aiServices.ts`, supply an icon, and surface the item via category tabs.

## Notable Examples
- Homepage section showing six marquee AI services with animations and hover states.
- Services page deep dive with the same data source, enabling category-based filtering.

# Project Overview and Migration

## Overview
Summarizes the Quadrate Tech Solutions web project: React/Next marketing site with AI/ML positioning, interview assessment feature, rich animations, and Vercel deployment. Includes key company context and the documented Next.js migration plan.

## Architecture
- **Stack:** React 19 + Next.js 16 (App Router), TypeScript, Tailwind, Framer Motion, Radix UI, Supabase, Vercel hosting.
- **Structure:** App Router (`src/app`) for new pages/layouts; legacy `src/pages` present. Components organized under `src/components` (sections, animations, ui), data under `src/data`, utilities under `src/lib`/`src/utils`, services under `src/services`, layouts under `src/layouts`.
- **Domains:** Marketing site (hero, services, AI showcase), interview assessment platform, SEO/structured data, animation-heavy hero.

## Functional Components
- **Marketing:** AI services section, pricing, partners, stats, company values, contact/about pages.
- **Interview assessment:** Timed MCQ flow with Supabase persistence (see `interview-assessment-guide.md`).
- **Animations:** Hero animation and background effects (see `hero-animation-guide.md`).
- **SEO:** Metadata and structured data helpers; prebuild sitemap/robots/RSS generation.
- **Migration tasks:** App Router adoption, layout conversion, image/font updates, router alignment between `pages` and `app` trees.

## Configuration
- **Scripts:** `bun run dev`, `bun run lint`, `bun run build`, `bun start`; prebuild generates SEO artifacts.
- **Env/deployment:** Vercel target with custom domain; Supabase for data; ensure env vars set for services/SEO.
- **Styling:** Tailwind theme with brand blues and gradients; Chakra Petch and Plus Jakarta Sans via `next/font`.

## Usage Patterns
- Favor App Router for net-new work; migrate legacy pages incrementally.
- Keep structured data up to date (organization/webpage/service) when modifying hero/services sections.
- Use lazy loading/Suspense for heavy sections and animations to maintain performance budgets.

## Notable Examples
- Migration checklist covers route consolidation, global layout setup, SEO parity, and asset updates during Next.js upgrade.
- Workspace documentation outlines project structure, company info, feature inventory, design system, database schema, and scripts—refer back when scoping new features.

# Engineering Operations Guide

## Overview
Consolidated development standards, policies, and agent instructions for the Quadrate React/Next stack (Next.js 16, React 19, TypeScript 5.9, Tailwind 3.4, Framer Motion 12, Radix UI). Primary package manager is Bun; deployments target Vercel.

## Architecture
- **Project layout:**
  - `src/app` (App Router) for new routes/layouts; `src/pages` exists for legacy pages (avoid for new work).
  - `src/components` for UI (sections, animations, ui primitives), `src/data` for static data, `src/hooks`, `src/lib` utilities, `src/services` APIs.
- **Component types:** Server components by default; add `use client` for interactive pieces.
- **Styling:** Tailwind with `cn()` helper for class merging; brand blues and gradients used across hero/feature sections.

## Functional Components
- **Coding standards:** Modular React + TS, documented code, error handling, clear naming (PascalCase components/types, camelCase functions/files), ordered imports (React/Next → third-party → internal → utils/hooks → styles).
- **Policies:** Performance/accessibility focus, minimalist design with purposeful animation, responsive layouts, security best practices (input validation, secure endpoints, up-to-date deps).
- **Agent/automation guidance:** Use Bun scripts (`bun run dev|lint|build|start`), respect App vs Pages router, and rely on lucide-react for icons. Avoid legacy patterns and ensure builds succeed before shipping.

## Configuration
- **Scripts:**
  - Dev: `bun run dev`
  - Lint: `bun run lint`
  - Build: `bun run build` (prebuild generates SEO artifacts)
  - Preview: `bun start`
- **SEO tooling:** `bun run generate-seo` (or individual sitemap/robots/RSS generators) runs in prebuild.
- **Brand/theme:** Chrysler Blue primary; keep gradients consistent and avoid ad-hoc color drift.

## Usage Patterns
- Prefer App Router for new features; only touch `src/pages` for legacy compatibility.
- Annotate interactive components with `use client`; keep server-only pieces lean.
- Use Suspense/lazy loading for heavy sections (animations, blogs) to protect LCP.
- Before merging: lint, build, and ensure animations/UI remain accessible (focus states, ARIA labels where relevant).

## Notable Examples
- Correct server component pattern in `src/app/page.tsx` with exported `metadata` and component render.
- Client component pattern with Framer Motion and `cn()` helper for class merging.
- Build gate: do not ship failing builds; rerun `bun run build` after major changes and verify SEO prebuild outputs.

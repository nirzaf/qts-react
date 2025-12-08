# Performance Optimization Guide

## Overview
Summarizes the implemented and planned performance optimizations for the React/Next site, focused on bundle size, loading strategy, and resilience.

## Architecture
- **Build:** Vite/Next with manual chunking for vendors, UI, and route-specific bundles.
- **Rendering:** React 19 + Suspense boundaries to isolate slow content and show graceful loaders.
- **Assets:** Lazy image handling with `loading="lazy"` and `decoding="async"` for media-heavy sections.

## Functional Components
- **Code splitting:** Dynamic imports for heavy components (e.g., Markdown renderer, SyntaxHighlighter) and language-specific highlight packs.
- **Bundle strategy:** Vendor chunk reduced (1,114KB → 174KB) with separate UI and route chunks to minimize initial payload.
- **Progressive rendering:** Dedicated `MarkdownContent` component and error boundaries to avoid cascading failures.
- **Image optimization:** Progressive loading and lazy decode to reduce render-blocking costs.

## Configuration
- Maintain manual chunk configuration in the bundler for vendors and pages with large dependencies.
- Keep Suspense fallback components lightweight to preserve LCP.
- Monitor bundle sizes after dependency additions; adjust chunk strategy when new heavy libs land.

## Usage Patterns
- Lazy-load optional/hero-adjacent animations and icon packs.
- Use route-based code splitting for blog and feature pages with large Markdown payloads.
- Cache static assets via service worker when appropriate; prefer SWR-like patterns for data fetching.

## Notable Examples
- Blog stack: Lazy ReactMarkdown + SyntaxHighlighter with per-language chunks.
- Chunk metrics: main vendor 174KB; BlogPost ~755KB; UI ~100KB; routes 50–200KB with split highlights.

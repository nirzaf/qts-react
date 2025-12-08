# CLAUDE.md - AI Agent Guide for Quadrate Tech Solutions React Project

## Project Overview

This is a **Vite + React 19 + TypeScript** application for Quadrate Tech Solutions, a technology consulting company specializing in AI/ML services, custom software development, and digital transformation. The project is built for production deployment on Vercel with comprehensive SEO optimization and advanced animation features.

**Key Facts:**
- **Package Manager:** Bun (>=1.0.0) - NOT npm or yarn
- **Build Tool:** Vite 6.x with SWC for fast compilation
- **Runtime:** React 19 with modern concurrent features
- **Styling:** Tailwind CSS with custom design system
- **Deployment:** Vercel with custom domain
- **Database:** Supabase (PostgreSQL)

## Critical Development Commands

### Daily Development Workflow

```bash
# Start development server (runs on http://localhost:3000)
bun run dev

# Run linting before commits
bun run lint

# Build for production (automatically runs prebuild hook)
bun run build

# Preview production build locally
bun start
```

### Important Script Details

- `bun run build` triggers a **prebuild** hook that automatically generates all SEO files (sitemaps, robots.txt, RSS feeds)
- The server runs on **port 3000** by default (not 5173)
- Production builds output to `dist/` directory
- TypeScript compilation happens via `tsc -b` before Vite build

### SEO Generation Scripts

These run automatically on prebuild but can be run manually:

```bash
# Generate all SEO files at once
bun run generate-seo

# Individual generators
bun run generate-sitemap          # Main sitemap.xml
bun run generate-image-sitemap    # Image sitemap
bun run generate-video-sitemap    # Video sitemap
bun run generate-news-sitemap     # News/blog sitemap
bun run generate-robots           # robots.txt
bun run generate-rss              # RSS feed
```

## Architecture & Structure

### File Organization Pattern

```
src/
├── components/          # React components organized by feature
│   ├── animations/     # HeroAnimation, CodeMatrixEffect, NeuralNetworkViz
│   ├── blog/          # Blog-related components
│   ├── interview/     # Interview assessment components
│   ├── sections/      # Page sections (hero, services, testimonials, etc.)
│   ├── seo/          # SEO components (StructuredData, MetaTags, etc.)
│   └── ui/           # Radix UI components (accordion, avatar, button, etc.)
├── pages/             # Route components (Home, About, Services, Blog, etc.)
├── data/              # Static data files (.ts and .js)
├── hooks/             # Custom React hooks
├── lib/               # Utilities (cn helper for className merging)
├── utils/             # Helper functions (a11y, serviceWorker, structuredData)
├── types/             # TypeScript type definitions
├── config/            # Configuration files (animations.ts)
├── layouts/           # Layout components
└── services/          # API service integrations
```

### Routing Architecture

**React Router v7** is used for client-side routing. Routes are defined in [src/App.tsx](src/App.tsx):

- `/` - Home page
- `/about` - Company information
- `/services` - Service listings
- `/blog` - Blog index
- `/blog/:id` - Individual blog posts
- `/contact` - Contact forms
- `/pricing` - Pricing packages
- `/interview-assessment` - Technical assessment platform
- `/microsoft-365-premium-package-details` - Specific service detail page

**Important:** All routes use lazy loading via `React.lazy()` for optimal bundle splitting.

### Component Lazy Loading Strategy

Every page component is lazy-loaded to reduce initial bundle size. This is critical for performance:

```tsx
const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
// etc.
```

The fallback uses `<LoadingSpinner>` component with configurable size and text.

## Build Configuration Deep Dive

### Vite Configuration ([vite.config.ts](vite.config.ts))

**Critical Settings:**

1. **Path Alias:** `@/` maps to `./src/` for clean imports
2. **Port:** Dev server runs on **3000** (not default 5173)
3. **Build Target:** ES2022 (modern browsers only)
4. **Compression:** Both gzip and brotli compression plugins enabled
5. **Bundle Visualization:** Rollup visualizer plugin generates bundle analysis

**Manual Chunk Splitting Strategy:**

The build is configured with aggressive manual chunking to optimize loading:

```javascript
manualChunks: {
  'react-vendor': ['react', 'react-dom'],
  'framer-motion': ['framer-motion'],
  'radix-ui': [/* all @radix-ui packages */],
  'utils': ['date-fns', 'clsx', 'tailwind-merge']
}
```

This creates separate chunks for:
- React core (~174KB)
- Animation library (Framer Motion)
- UI component library (Radix UI)
- Utility libraries

**Why this matters:** When editing business logic, users don't re-download React/UI libraries.

### TypeScript Configuration

The project uses **TypeScript project references** with two configs:

- [tsconfig.app.json](tsconfig.app.json) - Application code (strict mode, includes src/)
- [tsconfig.node.json](tsconfig.node.json) - Build scripts (includes vite.config.ts)

**Key compiler options:**
- `strict: true` - All strict checks enabled
- `target: ES2020` - Modern JavaScript features
- `moduleResolution: "Bundler"` - Vite-optimized resolution
- `noUnusedLocals: true` - Prevent unused variable commits
- Path alias: `@/*` → `./src/*`

### SWC Configuration ([.swcrc](.swcrc))

**SWC (Speedy Web Compiler)** is used instead of Babel for 20x faster compilation:

- Parser: TypeScript with TSX and decorators support
- Transform: React with automatic runtime and Fast Refresh
- Target: ES2022
- Minification: Enabled for production

**Why SWC matters:** Dramatically faster dev server startup and HMR compared to default esbuild or Babel.

## Styling System & Design Conventions

### Tailwind CSS Configuration ([tailwind.config.js](tailwind.config.js))

**Custom Design System:**

1. **CSS Variables Pattern:** Colors are defined using HSL CSS variables:
   ```css
   --primary: /* Chrysler Blue #0607E1 */
   --secondary: /* ... */
   --accent: /* ... */
   ```

2. **Dark Mode:** Class-based strategy (`darkMode: ["class"]`)

3. **Custom Fonts:** Six font families configured:
   - `chakra` - Chakra Petch (primary)
   - `orbitron` - Orbitron (technical/futuristic)
   - `inter` - Inter
   - `montserrat` - Montserrat (headings)
   - `outfit` - Outfit
   - `plusJakartaSans` - Plus Jakarta Sans

4. **Animation System:** Custom keyframes for accordion animations

5. **Typography Plugin:** `@tailwindcss/typography` for blog content styling

### The `cn()` Utility Pattern

**Location:** [src/lib/utils.ts](src/lib/utils.ts)

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Usage throughout codebase:**
```tsx
<div className={cn("base-classes", condition && "conditional-classes", className)}>
```

**Why this exists:** Properly merges Tailwind classes, preventing conflicts (e.g., `p-4` + `p-2` = `p-2`, not both).

## Critical Project-Specific Patterns

### 1. Component Organization Convention

Components are organized by **feature/domain**, not by type:

```
components/
├── blog/              # BlogCard, BlogCategories, RelatedPosts
├── interview/         # InterviewOnboarding, QuestionCard, Timer
├── home/             # HeroSection, ValueProposition, StatCard
├── sections/         # Reusable sections across pages
└── ui/              # Generic UI primitives (Radix UI wrappers)
```

**Pattern:** Feature folders contain related components. Don't create deep nesting.

### 2. Data-Driven Content Pattern

Static content lives in `src/data/` as TypeScript/JavaScript modules:

- [src/data/aiServices.ts](src/data/aiServices.ts) - AI service categories and offerings
- [src/data/servicesData.ts](src/data/servicesData.ts) - General service listings
- [src/data/pricingData.ts](src/data/pricingData.ts) - Pricing tiers and packages
- [src/data/interviewQuestions.ts](src/data/interviewQuestions.ts) - Assessment questions
- [src/data/blogData.ts](src/data/blogData.ts) - Blog post metadata

**Pattern:** When adding new content, update data files rather than hardcoding in components.

### 3. SEO Pattern - Structured Data & Meta Tags

**Every page should include:**

1. **Helmet/HelmetAsync** for meta tags:
```tsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>Page Title - Quadrate Tech Solutions</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  {/* etc */}
</Helmet>
```

2. **Structured Data** from [src/utils/structuredData.ts](src/utils/structuredData.ts):
```tsx
import { generateOrganizationSchema, generateServiceSchema } from '@/utils/structuredData';

<script type="application/ld+json">
  {JSON.stringify(generateOrganizationSchema())}
</script>
```

**Available schema generators:**
- `generateOrganizationSchema()` - Company information
- `generateServiceSchema(service)` - Individual services
- `generateBlogPostingSchema(post)` - Blog articles
- `generateBreadcrumbSchema(items)` - Navigation breadcrumbs
- `generateFAQSchema(faqs)` - FAQ sections

### 4. Animation Performance Pattern

**Heavy animations use Framer Motion with performance optimizations:**

Example from [src/components/animations/HeroAnimation.tsx](src/components/animations/HeroAnimation.tsx):

```tsx
// GPU-accelerated properties only
animate={{
  x: /* ... */,
  y: /* ... */,
  scale: /* ... */,
  rotate: /* ... */,
  opacity: /* ... */
}}
// Avoid: width, height, top, left, margin, padding

// Reduced motion support
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile optimization
const isMobile = window.innerWidth < 768;
const particleCount = isMobile ? 15 : 30;
```

**Critical rule:** Only animate transform and opacity properties for 60fps performance.

### 5. Accessibility (A11y) Pattern

The project implements comprehensive accessibility features via [src/utils/a11y.ts](src/utils/a11y.ts):

- **Skip to main content** link for keyboard navigation
- **Main content landmark** with `id="main-content"` and `tabIndex={-1}`
- **ARIA labels** on all interactive elements
- **Keyboard navigation** support throughout
- **Screen reader announcements** for dynamic content

**Pattern:** When adding forms or interactive features, include:
```tsx
<button aria-label="Descriptive action">
<input aria-describedby="helper-text-id" />
<div role="alert" aria-live="polite"> {/* for dynamic messages */}
```

### 6. Interview Assessment System Architecture

**Database Schema (Supabase):**

```sql
-- session tracking
CREATE TABLE interview_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  is_university BOOLEAN NOT NULL,
  university_name TEXT,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  score INTEGER,
  submitted BOOLEAN DEFAULT FALSE,
  answers JSONB  -- stores question_id → selected_option mapping
);
```

**Question Structure:**

20 multiple-choice questions across 5 categories, 4 questions per category:
1. Software Development Lifecycle and Processes
2. Data Structures and Algorithms
3. Software Design and Architecture
4. Software Testing and Quality Assurance
5. Version Control and Project Management

**Timing:** 10-minute timer per page (5 questions/page), auto-submits on timeout.

**Local storage persistence:** Session state saved to `localStorage` to prevent data loss on refresh.

## Performance Optimization Guidelines

### Bundle Size Management

**Current production bundle sizes:**
- Main vendor chunk: ~174KB (React + ReactDOM)
- Framer Motion chunk: ~100KB
- Radix UI chunk: ~150KB
- Individual routes: 50-200KB each

**Monitoring:** Use `rollup-plugin-visualizer` to analyze bundle composition:
```bash
bun run build
# Check stats.html in project root
```

### Image Optimization Pattern

**All images should use:**
```tsx
<img
  src="..."
  loading="lazy"           // Browser-native lazy loading
  decoding="async"         // Non-blocking decode
  alt="Descriptive text"   // Accessibility
/>
```

**Prefer modern formats:**
- WebP for photos (smaller than JPEG)
- AVIF for even better compression (if browser support allows)
- SVG for logos and icons

### Code Splitting Best Practices

1. **Page-level splitting:** Already implemented via lazy loading
2. **Heavy library splitting:** Large libraries (syntax highlighters, 3D libraries) should be dynamically imported:
   ```tsx
   const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));
   ```
3. **Route-based splitting:** Each route gets its own chunk automatically

## Supabase Integration

**Service location:** [src/services/](src/services/) (exact filename not visible, typically `supabaseClient.ts`)

**Environment variables pattern:**
```typescript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

**Usage pattern for interview sessions:**
```typescript
import { supabase } from '@/services/supabaseClient';

// Create session
const { data, error } = await supabase
  .from('interview_sessions')
  .insert({
    full_name,
    email,
    is_university,
    university_name,
    start_time: new Date().toISOString()
  })
  .select()
  .single();

// Update with answers
await supabase
  .from('interview_sessions')
  .update({
    answers: answersObject,
    score: calculatedScore,
    submitted: true,
    end_time: new Date().toISOString()
  })
  .eq('id', sessionId);
```

## Common Gotchas & Pitfalls

### 1. Import Path Aliases

**Always use `@/` prefix for src imports:**
```tsx
// ✅ Correct
import { Button } from '@/components/ui/button';

// ❌ Wrong
import { Button } from '../../../components/ui/button';
```

### 2. Bun vs npm/yarn

This project **requires Bun**. Running `npm install` or `yarn` will cause lock file conflicts.

**Check with:**
```bash
bun --version  # Should be >= 1.0.0
```

### 3. React 19 Specifics

React 19 includes breaking changes from v18:
- `ReactDOM.render` removed (use `createRoot`)
- Automatic batching everywhere
- New hooks: `use()`, `useOptimistic()`, `useFormStatus()`

**If you see type errors:** Ensure `@types/react` version matches React version (19.x).

### 4. Vite Environment Variables

Use `import.meta.env` (NOT `process.env`):
```typescript
// ✅ Correct
const apiUrl = import.meta.env.VITE_API_URL;

// ❌ Wrong
const apiUrl = process.env.VITE_API_URL;
```

**Environment variable files:**
- `.env` - Shared variables
- `.env.local` - Local overrides (gitignored)
- `.env.production` - Production-specific

All public variables must be prefixed with `VITE_`.

### 5. SSR/Express Server

The [server.js](server.js) file exists for **optional SSR** but is not used in production Vercel deployment.

**Production deployment uses:**
- Static site generation (SSG)
- Client-side routing
- Vercel's edge network

The SSR setup is for potential future use or alternative deployment targets.

### 6. Radix UI Component Pattern

Radix UI components are **unstyled primitives**. All components in `src/components/ui/` are pre-styled wrappers:

```tsx
// ✅ Use the wrapped component
import { Button } from '@/components/ui/button';
<Button variant="primary">Click me</Button>

// ❌ Don't import Radix directly in pages
import { Button } from '@radix-ui/react-button';
```

The wrappers include:
- Tailwind styling
- Consistent design system
- Accessibility features
- Variant support via `class-variance-authority`

## Testing Strategy (Current State)

**Note:** As of the last codebase review, there are **no test files** in the repository.

**If implementing tests, recommended approach:**
1. **Vitest** for unit/component tests (Vite-native, fast)
2. **React Testing Library** for component testing
3. **Playwright** for E2E tests

**Add to package.json:**
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test"
  }
}
```

## Deployment & CI/CD

### Vercel Deployment

**Configuration:** [vercel.json](vercel.json)

The project auto-deploys on:
- Push to `main` branch → Production
- Pull requests → Preview deployments

**Environment variables on Vercel:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- Any other `VITE_*` prefixed variables

### GitHub Actions

**Workflows:** [.github/workflows/](.github/workflows/)

Typical workflows include:
- Dependency updates (Dependabot)
- Automated security scanning
- Build verification on PRs

### Manual Deployment (GitHub Pages)

The `deploy` script exists for GitHub Pages deployment:
```bash
bun run deploy
```

This:
1. Builds the project
2. Initializes a git repo in `dist/`
3. Force-pushes to `gh-pages` branch

**Not recommended for production** - Vercel is the primary deployment target.

## Code Quality & Standards

### ESLint Configuration ([eslint.config.js](eslint.config.js))

**Rules enforced:**
- TypeScript strict mode
- React Hooks rules (exhaustive deps, etc.)
- React Refresh compatibility (for HMR)

**Run before commits:**
```bash
bun run lint
```

### TypeScript Strictness

**All strict checks enabled:**
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`
- `strict: true`

**This means:** TypeScript will catch most bugs at compile time.

### Formatting Standards

**Observed patterns in codebase:**
- 2-space indentation
- Single quotes for strings (in JSX: double quotes)
- Trailing commas in multi-line objects/arrays
- Semicolons required

**Recommended:** Add Prettier config for consistency:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

## Key Business Domain Knowledge

### Company Context

Quadrate Tech Solutions is a Sri Lankan technology consulting firm with:
- **Certifications:** ZOHO Partner, SAP-Certified Partner
- **Core Services:** AI/ML solutions, custom development, cloud solutions
- **Target Markets:** Asia, Africa, Middle East
- **Industries:** Finance, healthcare, retail, manufacturing

### AI Services Categories (12 Technology Nodes)

From [src/components/animations/HeroAnimation.tsx](src/components/animations/HeroAnimation.tsx), the 12 core services:

1. AI Strategy (Blue #0607E1)
2. Generative AI (Purple #4D0AFF)
3. Computer Vision (Cyan #06B6D4)
4. NLP (Green #10B981)
5. Development (Orange #F59E0B)
6. Data Engineering (Red #EF4444)
7. Cloud Solutions (Purple #8B5CF6)
8. Web Solutions (Cyan #06B6D4)
9. Integration (Green #10B981)
10. Analytics (Orange #F59E0B)
11. Automation (Red #EF4444)
12. Architecture (Purple #8B5CF6)

**These map to the hero animation nodes** and should be consistent across the site.

### Brand Guidelines

**Primary Colors:**
- Chrysler Blue: `#0607E1` (primary brand color)
- White: `#FFFFFF` (base)
- Black: `#000000` (text)

**Fonts:**
- Headings: Montserrat (bold, tight tracking)
- Body: Chakra Petch / Orbitron
- Technical content: Orbitron

**Logo:** https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png

**Design Principles:**
- Minimal and clean
- Usable and intuitive
- Engaging with subtle animations
- Structured information hierarchy
- Responsive mobile-first

## Future Migration Considerations

### Next.js Migration

A detailed migration guide exists: [NEXTJS_MIGRATION_GUIDE.md](NEXTJS_MIGRATION_GUIDE.md)

**Key challenges:**
1. React Server Components vs Client Components
2. File-system routing vs React Router
3. `app/` directory structure
4. Built-in optimization (images, fonts)

**Current blocker:** Significant refactoring required due to heavy use of client-side hooks and animations.

### Recommendations for New Features

1. **Blog System:** Consider Markdown-based CMS or headless CMS integration (Contentful, Sanity)
2. **Interview Platform:** Add question randomization, difficulty levels, analytics dashboard
3. **User Authentication:** Implement Supabase Auth for user accounts
4. **Admin Dashboard:** Create admin interface for content management
5. **Analytics:** Integrate Google Analytics 4 or Plausible for privacy-friendly analytics

## Troubleshooting Guide

### Common Issues

**1. Port 3000 already in use:**
```bash
# Find process using port 3000
lsof -ti:3000 | xargs kill -9

# Or change port in vite.config.ts
server: { port: 3001 }
```

**2. TypeScript errors after dependency updates:**
```bash
# Clear TypeScript build cache
rm -rf node_modules/.tmp/

# Rebuild
bun run build
```

**3. Vite not picking up env variables:**
- Ensure prefix is `VITE_`
- Restart dev server after `.env` changes
- Check `import.meta.env` (not `process.env`)

**4. Radix UI component styling issues:**
- Check `src/index.css` for CSS variable definitions
- Verify Tailwind config includes `./src/**/*.{ts,tsx}`
- Ensure `cn()` utility is used for className merging

**5. Build fails with memory errors:**
```bash
# Increase Node memory limit
NODE_OPTIONS="--max-old-space-size=4096" bun run build
```

## Quick Reference: File Locations

| Need | Location |
|------|----------|
| Add a new page | `src/pages/YourPage.tsx` + route in `src/App.tsx` |
| Add a reusable component | `src/components/ui/` or feature folder |
| Add service data | `src/data/servicesData.ts` or `aiServices.ts` |
| Add blog post | Update `src/data/blogData.ts` |
| Configure SEO | `src/utils/structuredData.ts` |
| Add environment variable | `.env` (prefix with `VITE_`) |
| Configure build | `vite.config.ts` |
| Configure TypeScript | `tsconfig.app.json` |
| Configure Tailwind | `tailwind.config.js` |
| SEO generation scripts | `scripts/generate-*.js` |

## Learning Resources

- **Vite:** https://vitejs.dev/
- **React 19:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/
- **Radix UI:** https://www.radix-ui.com/
- **Framer Motion:** https://www.framer.com/motion/
- **Supabase:** https://supabase.com/docs
- **React Router v7:** https://reactrouter.com/

## Contact & Ownership

**Project Owner:** Quadrate Tech Solutions
**Repository:** https://github.com/nirzaf/qts-react
**Deployment:** Vercel (https://quadratetechsolutions.com)

---

**Last Updated:** December 2024
**Version:** 1.0
**Maintained by:** Development Team

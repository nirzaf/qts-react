jp## Quadrate Tech Solutions (QTS) — Coding Agent Guidelines

### Stack & Versions
| Tech | Version | Docs |
|------|---------|------|
| **Next.js** | **16.0.7** | [Next.js 16 Docs](https://nextjs.org/docs) |
| **React** | **19.2.1** | [React 19 Docs](https://react.dev) |
| **TypeScript** | **5.9.3** | [TypeScript Docs](https://www.typescriptlang.org/docs/) |
| **Tailwind CSS** | **3.4.18** | [Tailwind Docs](https://tailwindcss.com/docs) |
| **Framer Motion** | **12.23.25** | [Framer Motion Docs](https://www.framer.com/motion/) |
| **Radix UI** | **Latest** | [Radix UI Docs](https://www.radix-ui.com/) |

⚠️ **Version Warnings:**
- **Next.js 16 (App Router):** Strict Server/Client Component separation. `use client` is mandatory for interactivity.
- **React 19:** New hooks and patterns (e.g., `use` API). Avoid legacy patterns.
- **Hybrid Structure:** Project contains both `src/app` (New) and `src/pages` (Legacy). **Prioritize App Router** for new features.

---

### Pre-Task Checklist
- [ ] **Router Detection:** Check if working in `src/app` (App Router) or `src/pages` (Legacy).
- [ ] **Component Type:** Determine if Server (default) or Client (`use client`) component is needed.
- [ ] **Styling:** Use `cn()` utility for class merging. No raw CSS modules unless necessary.
- [ ] **Icons:** Use `lucide-react` for icons.

---

### Architecture Rules

**Directory Structure:**
- `src/app`: **App Router** (Routes, Layouts, Loading, Error).
- `src/components`: Reusable UI components.
  - `ui`: Shadcn/Radix primitives (Button, Input, etc.).
  - `sections`: Large page sections (Hero, Features).
  - `animations`: Complex Framer Motion animations.
- `src/lib`: Utilities and helpers (e.g., `utils.ts`).
- `src/hooks`: Custom React hooks.
- `src/services`: API and data fetching services.
- `src/pages`: **Legacy Pages Router** (Avoid for new routes).

**Naming Conventions:**
- **Files:** `PascalCase.tsx` for components, `camelCase.ts` for utilities.
- **Components:** `PascalCase` (e.g., `HeroSection`).
- **Functions:** `camelCase` (e.g., `generateMetadata`).
- **Types:** `PascalCase` (e.g., `BlogPost`).

**Import Order:**
1. React / Next.js imports
2. Third-party libraries (Framer Motion, Lucide)
3. Internal components (`@/components/...`)
4. Utilities / Hooks / Types (`@/lib/...`, `@/hooks/...`)
5. Styles

---

### Code Patterns

**✓ CORRECT (Follow These):**

```tsx
// Server Component (src/app/page.tsx)
import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';

export const metadata: Metadata = {
  title: 'Page Title',
};

export default function Page() {
  return <HeroSection />;
}
```

```tsx
// Client Component (src/components/ui/Interactive.tsx)
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Interactive({ className }: { className?: string }) {
  const [active, setActive] = useState(false);
  
  return (
    <motion.div 
      className={cn("p-4 bg-card", className)}
      animate={{ opacity: 1 }}
    >
      Content
    </motion.div>
  );
}
```

**✗ WRONG (Never Do):**

- **Mixing Router Patterns:** Don't use `useRouter` from `next/router` in App Router (use `next/navigation`).
- **Legacy Head:** Don't use `next/head` in App Router (use `metadata` export).
- **Hardcoded Colors:** Don't use hex codes (e.g., `#0607E1`) directly if possible. Use Tailwind semantic classes (`bg-primary`, `text-foreground`).

---

### Technology-Specific Rules

**Next.js 16 (App Router):**
- **Data Fetching:** Use `fetch` with `cache: 'force-cache'` or `next: { revalidate: 3600 }`.
- **Metadata:** Use `generateMetadata` for dynamic routes.
- **Server Actions:** Use `'use server'` for mutations.

**Styling (Tailwind + Shadcn):**
- Use `cn()` for conditional classes: `className={cn("base-class", className)}`.
- Use CSS variables for theming: `bg-background`, `text-foreground`.
- Responsive prefixes: `md:flex`, `lg:grid`.

**Animations (Framer Motion):**
- Use `framer-motion` for all animations.
- Prefer `layout` prop for smooth layout transitions.
- Use `AnimatePresence` for mounting/unmounting animations.

---

### Security | Performance | Accessibility

**Security:**
- Validate inputs using `zod` (if available) or strict typing.
- Sanitize `dangerouslySetInnerHTML` content.

**Performance:**
- Use `next/image` for all images.
- Lazy load heavy components with `next/dynamic`.
- Optimize fonts using `next/font`.

**Accessibility:**
- Ensure all interactive elements have `aria-label` or visible text.
- Use semantic HTML (`<main>`, `<section>`, `<nav>`).
- Verify color contrast in Dark Mode.

---

### Zero Regression Rules

**Critical Files (Extra Caution):**
- `src/app/layout.tsx`: Root layout, affects global providers and SEO.
- `src/lib/utils.ts`: Core utility for styling.
- `tailwind.config.ts`: Global style configuration.

**Never Break:**
- **Dark Mode:** Ensure all new components support `dark:` variants.
- **Responsiveness:** Mobile-first design is mandatory.

---

### Quick Reference

**TL;DR Rules:**
1. **App Router First:** Use `src/app` for all new routes.
2. **Strict Types:** No `any`. Define interfaces for all props.
3. **Semantic Styling:** Use Tailwind classes and `cn()`.

**Common Mistakes to Avoid:**
- Forgetting `'use client'` on components with hooks.
- Importing server-only modules in client components.
- Using `<a>` tag instead of `<Link>` from `next/link`.

**When Uncertain:** Check `src/components/ui` for existing patterns or ask the user.

# Detailed Guide: Migrating qts-react from Vite to Next.js 14+ (App Router)

**Objective:** Migrate the existing Vite-based React application (`qts-react`) to the latest stable version of Next.js, ensuring identical UI/UX, functionality, and look and feel.

**Current Stack Analysis:**
- **Framework:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Server:** Custom `server.js` with `entry-server.tsx` for SSR.
- **Routing:** Likely `react-router-dom` (or similar) managed within `App.tsx`.
- **Project Structure:** `src`-based with component, pages, hooks, etc.

**Note on "Next.js 16":** As of late 2025, the latest major version is Next.js 14. This guide will target this version, which uses the modern **App Router** by default. The principles will apply to future versions like 15 or 16, but the steps are based on the current stable architecture.

---

## Phase 0: Preparation and Planning

1.  **Create a New Branch:** This is the most critical step. Do not work on your main branch.
    ```bash
    git checkout -b feat/nextjs-migration
    ```

2.  **Understand the Core Concepts:**
    *   **App Router:** Next.js uses a file-system-based router located in the `src/app` directory. A file named `page.tsx` in a folder creates a new public route (e.g., `src/app/about/page.tsx` becomes `/about`).
    *   **Server Components vs. Client Components:** This is the biggest paradigm shift. By default, all components in the App Router are **React Server Components (RSCs)**. They render on the server and cannot use hooks (`useState`, `useEffect`) or browser-only APIs. To use hooks or event listeners (`onClick`, `onChange`), you must opt-in to a **Client Component** by placing the `"use client";` directive at the top of the file.
    *   **Layouts:** The `src/app/layout.tsx` file is the root layout for your entire application. It replaces the `index.html` file from your Vite project.

---

## Phase 1: New Next.js Project Setup

1.  **Create a New Next.js App:** In a separate terminal window, create a new Next.js project. We will migrate code into this new structure.
    ```bash
    bunx create-next-app@latest qts-react-nextjs --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
    ```
    *   This command creates a new project in `qts-react-nextjs` using the recommended settings that most closely match your current project (`src` directory, Tailwind, etc.).

2.  **Copy Dependencies:** Open both `package.json` files (old and new). Manually copy over any missing dependencies from your original project into the new one. Pay attention to libraries like `three`, `gsap`, `supabase-js`, etc.
    *   **Do not copy scripts directly.** The `dev`, `build`, and `start` scripts will be different.
    *   Install the new dependencies in the new project.
    ```bash
    cd qts-react-nextjs
    bun install
    ```

3.  **Configure Tailwind CSS:**
    *   Copy the `theme`, `plugins`, and any custom configurations from your old `tailwind.config.js` into the new `tailwind.config.js`. Ensure the `content` array is updated to scan the new `src/app` directory:
      ```javascript
      // tailwind.config.js in the NEW project
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Keep for now if you migrate incrementally
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Most important new entry
      ],
      // ... your theme and plugins
      ```
    *   Copy the contents of `postcss.config.js` and `globals.css` (`src/styles/globals.css` in the new project).

---

## Phase 2: Migrating Core Structure and Layout

1.  **Root Layout (`layout.tsx`):**
    *   The new `src/app/layout.tsx` replaces your old `index.html` and `App.tsx` wrapper.
    *   **Move `<head>` Content:** Copy all `<meta>`, `<link>` (for fonts, icons), and `<script>` tags from your `index.html` into the `metadata` object or directly into the `<head>` of `src/app/layout.tsx`.

    *   **Before (`index.html`):**
        ```html
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>QTS</title>
        ```

    *   **After (`src/app/layout.tsx`):**
        ```tsx
        import type { Metadata } from 'next';
        import './../styles/globals.css'; // Adjust path if needed

        export const metadata: Metadata = {
          title: 'QTS',
          description: 'Your site description here',
          // You can add more metadata here (e.g., icons)
        };

        export default function RootLayout({
          children,
        }: {
          children: React.ReactNode;
        }) {
          return (
            <html lang="en">
              <head>
                {/* Add any other tags like fonts here */}
              </head>
              <body>{children}</body>
            </html>
          );
        }
        ```

2.  **Migrate Global Styles:**
    *   Import your global stylesheets (`index.css`, `App.css`, `styles/globals.css`) into the root `src/app/layout.tsx`. Consolidate them into one file (`src/styles/globals.css`) for simplicity.

3.  **Migrate Global Components (Navigation & Footer):**
    *   Your old `App.tsx` likely rendered `Navigation`, `Footer`, and the router outlet. In Next.js, these persistent components go into the root layout.
    *   Copy your `src/components/Navigation.tsx` and `src/components/Footer.tsx` into the new project's `src/components` directory.
    *   **These components are interactive, so they MUST be Client Components.** Add `"use client";` to the top of both files.
    *   Update `src/app/layout.tsx` to include them.

    *   **`src/app/layout.tsx` with Nav/Footer:**
        ```tsx
        import Navigation from '@/components/navigation/Navigation'; // Adjust path
        import Footer from '@/components/footer/Footer'; // Adjust path
        import './../styles/globals.css';

        export default function RootLayout({ children }) {
          return (
            <html lang="en">
              <body>
                <Navigation />
                <main>{children}</main>
                <Footer />
              </body>
            </html>
          );
        }
        ```

---

## Phase 3: Migrating Pages and Routing

This requires a manual mapping from your `src/pages` directory to the new `src/app` directory.

| Old Vite Route (`src/pages/`) | New Next.js Route (`src/app/`)      |
| ----------------------------- | ----------------------------------- |
| `Home.tsx`                    | `page.tsx`                          |
| `About.tsx`                   | `about/page.tsx`                    |
| `Services.tsx`                | `services/page.tsx`                 |
| `Pricing.tsx`                 | `pricing/page.tsx`                  |
| `Contact.tsx`                 | `contact/page.tsx`                  |
| `Blog.tsx`                    | `blog/page.tsx`                     |
| `BlogPost.tsx`                | `blog/[slug]/page.tsx` (Dynamic)    |
| `404.tsx`                     | `not-found.tsx` (Special file)      |

**Migration Steps:**
1.  For each page, create the corresponding folder and `page.tsx` file in the new `src/app` directory.
2.  Copy the content of the old page component (e.g., `About.tsx`) into the new `page.tsx` (e.g., `app/about/page.tsx`).
3.  **Client vs. Server:** If a page component uses hooks (`useState`, `useEffect`) or event handlers, it must be a Client Component. Add `"use client";` at the top. If it only displays data, keep it as a Server Component.
4.  **Links:** Replace all `<a>` tags used for internal navigation with the `<Link>` component from `next/link`.
    ```tsx
    // Before
    <a href="/about">About Us</a>

    // After
    import Link from 'next/link';
    <Link href="/about">About Us</Link>
    ```

---

## Phase 4: Component Migration

1.  **Copy All Components:** Copy the entire `src/components` directory to your new project's `src` folder.
2.  **Identify Client Components:** Go through each component. Any component that meets the following criteria needs the `"use client";` directive at the very top of the file:
    *   Uses `useState`, `useReducer`, `useEffect`, `useLayoutEffect`, etc.
    *   Uses event listeners like `onClick`, `onChange`, `onSubmit`.
    *   Uses browser-only APIs (`window`, `document`).
    *   Examples from your project that are **definitely Client Components**:
        *   `ContactForm.tsx`
        *   `HeroAnimation.tsx`
        *   `RotatingCube.tsx`
        *   `Navigation.tsx`
        *   Any component with a form or button.
3.  **Server Components:** Components that just receive props and render JSX can remain as Server Components (no directive needed). This is more performant.
    *   Examples: `BlogCard.tsx` (if it just displays props), `FooterBottom.tsx`, `LocationCard.tsx`.

---

## Phase 5: Migrating Data, Assets, and Server Logic

1.  **Static Assets:**
    *   Copy everything from your old `public` directory into the new project's `public` directory. These files will be served from the root (e.g., `/logo.png`).
    *   Move assets from `src/assets` to the new `src/assets` directory. For images used within components (like `qts cpu.jpeg`), import them and use the Next.js `<Image>` component for automatic optimization.

    ```tsx
    // Before
    <img src="/path/to/image.jpeg" alt="..."/>

    // After
    import Image from 'next/image';
    import qtsCpu from '@/assets/qts cpu.jpeg';
    <Image src={qtsCpu} alt="..." />
    ```

2.  **Data Fetching:**
    *   Your project uses `server.js` and `entry-server.tsx` for SSR. Next.js simplifies this. You can now fetch data directly inside Server Components.
    *   **Example (`useBlogPosts.ts`):** Your `useBlogPosts.ts` hook likely uses `useEffect` to fetch data on the client. You can now do this on the server.

    *   **Before (Client-side hook):**
        ```tsx
        // hooks/useBlogPosts.ts
        function useBlogPosts() {
          const [posts, setPosts] = useState([]);
          useEffect(() => {
            fetch('/api/posts').then(res => res.json()).then(setPosts);
          }, []);
          return posts;
        }
        ```

    *   **After (Server Component data fetching):**
        ```tsx
        // app/blog/page.tsx
        import { supabaseService } from '@/services/supabaseService'; // Assuming you migrate this

        async function getBlogPosts() {
          // Your data fetching logic here, e.g., from Supabase
          const { data, error } = await supabaseService.from('posts').select('*');
          if (error) return [];
          return data;
        }

        export default async function BlogPage() {
          const posts = await getBlogPosts(); // Fetches data on the server at build/request time

          return (
            <section>
              {posts.map(post => <BlogCard key={post.id} post={post} />)}
            </section>
          );
        }
        ```

3.  **Server Logic (`server.js`):**
    *   If `server.js` contains API endpoints (e.g., handling form submissions), recreate them as **Route Handlers** in Next.js.
    *   For an endpoint at `/api/contact`, you would create the file `src/app/api/contact/route.ts`.

    *   **`src/app/api/contact/route.ts`:**
        ```ts
        import { NextResponse } from 'next/server';

        export async function POST(request: Request) {
          const body = await request.json();
          // ... your form handling logic here
          console.log(body);

          // Return a response
          return NextResponse.json({ message: "Success" });
        }
        ```
    *   This replaces the need for a custom Express server.

4.  **Copy Other Directories:**
    *   Copy `src/config`, `src/data`, `src/hooks`, `src/lib`, `src/services`, `src/types`, etc., into the new `src/` directory.
    *   Review each file for necessary changes (especially hooks, which may be replaced by server-side data fetching).

---

## Phase 6: Testing and Validation

1.  **Run the Dev Server:**
    ```bash
    bun run dev
    ```
    *   Open `http://localhost:3000`. You will see errors. This is expected.

2.  **Iterative Debugging:**
    *   Address errors one by one. The most common errors will be:
        *   "You're using a hook in a Server Component." -> Add `"use client";`.
        *   "window is not defined." -> This code is running on the server. Move it into a `useEffect` hook within a Client Component.
        *   Path alias issues. Ensure `@/` is configured correctly in `tsconfig.json`.

3.  **UI/UX Verification:**
    *   Go through every single page and component.
    *   Compare it side-by-side with your old production or local Vite app.
    *   Check animations, responsive design, form submissions, and all interactive elements. The goal is a pixel-perfect match.

---

## Phase 7: Deployment and Cleanup

1.  **Deployment Configuration:**
    *   Your project has `vercel.json` and `render.yaml`.
    *   **Vercel:** Next.js deployment on Vercel is zero-config. You can likely remove most of `vercel.json` and just connect your repository.
    *   **Render:** You will need to update your `render.yaml`. The build command will be `bun run build` and the start command will be `bun run start`.

2.  **Cleanup:**
    *   Once you are confident the migration is complete and fully tested, you can delete the old Vite-specific files from your new project:
        *   `index.html` (if copied)
        *   `vite.config.ts`
        *   `vite.config.ssr.ts`
        *   `server.js`
        *   `entry-client.tsx`
        *   `entry-server.tsx`

This guide provides a comprehensive path for your migration. The key is to be methodical, test at every stage, and fully embrace the Server/Client component model of the Next.js App Router.

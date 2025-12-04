import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppProviders } from './providers';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Quadrate Tech Solutions | Software Development',
  description:
    'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main id="main-content" tabIndex={-1} className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </AppProviders>
      </body>
    </html>
  );
}

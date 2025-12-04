import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Chakra_Petch, Plus_Jakarta_Sans } from 'next/font/google';
import { AppProviders } from './providers';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-chakra',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quadrate.lk'),
  title: {
    default: 'Quadrate Tech Solutions | Software Development',
    template: '%s | Quadrate Tech Solutions',
  },
  description:
    'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
  alternates: {
    canonical: './',
  },
  keywords: [
    'artificial intelligence',
    'AI services',
    'machine learning',
    'computer vision',
    'natural language processing',
    'generative AI',
    'AI consulting',
    'software development',
    'web development',
    'digital marketing',
    'IT outsourcing',
    'business automation',
    'Sri Lanka',
    'custom software',
    'web design',
    'mobile app development',
    'cloud solutions',
    'AI integration',
    'MLOps',
    'data engineering',
  ],
  authors: [{ name: 'Quadrate Tech Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quadrate.lk',
    siteName: 'Quadrate Tech Solutions',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
        width: 1200,
        height: 630,
        alt: 'Quadrate Tech Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@quadratetech',
    creator: '@quadratetech',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${chakra.variable} ${plusJakarta.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
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

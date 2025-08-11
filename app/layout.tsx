import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Quadrate Tech Solutions - Innovative Technology Solutions',
    template: '%s | Quadrate Tech Solutions',
  },
  description: 'Leading provider of innovative technology solutions including AI, machine learning, web development, and digital transformation services.',
  keywords: [
    'technology solutions',
    'AI consulting',
    'machine learning',
    'web development',
    'digital transformation',
    'software development',
    'Sri Lanka',
  ],
  authors: [{ name: 'Quadrate Tech Solutions' }],
  creator: 'Quadrate Tech Solutions',
  publisher: 'Quadrate Tech Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quadratetech.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quadratetech.com',
    title: 'Quadrate Tech Solutions - Innovative Technology Solutions',
    description: 'Leading provider of innovative technology solutions including AI, machine learning, web development, and digital transformation services.',
    siteName: 'Quadrate Tech Solutions',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Quadrate Tech Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quadrate Tech Solutions - Innovative Technology Solutions',
    description: 'Leading provider of innovative technology solutions including AI, machine learning, web development, and digital transformation services.',
    images: ['/logo.png'],
    creator: '@quadrate_lk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
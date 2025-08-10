import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import HubSpotChat from '@/components/chat/HubSpotChat';
import WebVitalsReporter from '@/components/performance/WebVitalsReporter';
import A11yFeatures from '@/components/accessibility/A11yFeatures';
import SEOAudit from '@/components/seo/SEOAudit';
import ErrorBoundary from '@/components/ErrorBoundary';
import '@/styles/globals.css';

// Metadata configuration
export const metadata: Metadata = {
  title: {
    default: 'Quadrate Tech Solutions | AI & Software Development',
    template: '%s | Quadrate Tech Solutions'
  },
  description: 'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
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
    'data engineering'
  ],
  authors: [{ name: 'Quadrate Tech Solutions' }],
  creator: 'Quadrate Tech Solutions',
  publisher: 'Quadrate Tech Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quadratetechsolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quadratetechsolutions.com',
    title: 'Quadrate Tech Solutions | AI & Software Development',
    description: 'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
    siteName: 'Quadrate Tech Solutions',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
        width: 1200,
        height: 630,
        alt: 'Quadrate Tech Solutions - AI & Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@quadratetech',
    creator: '@quadratetech',
    title: 'Quadrate Tech Solutions | AI & Software Development',
    description: 'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
    images: ['https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458'],
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
    google: 'your-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0607E1',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458"
          as="image"
          type="image/avif"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap"
          as="style"
        />
        
        {/* Favicon and app icons */}
        <link
          rel="icon"
          type="image/png"
          href="https://ik.imagekit.io/quadrate/assets/img/QTS%20Primary%20Logo.png?updatedAt=1748456663889"
        />
        <link
          rel="apple-touch-icon"
          href="https://ik.imagekit.io/quadrate/assets/img/QTS%20Primary%20Logo.png?updatedAt=1748456663889"
        />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NXPJBZSQ');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXPJBZSQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <ErrorBoundary>
          <div className="app">
            {/* Web Vitals Monitoring */}
            <WebVitalsReporter />

            {/* Accessibility Features */}
            <A11yFeatures mainContentId="main-content" />

            <Navigation />
            <main id="main-content" tabIndex={-1}>
              <ErrorBoundary>
                {children}
                <Toaster />
                <HubSpotChat />
              </ErrorBoundary>
            </main>
            <Footer />

            {/* SEO Audit Tool - only visible in development */}
            <SEOAudit showInProduction={false} />
          </div>
        </ErrorBoundary>
        
        {/* Analytics */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
// import HubSpotChat from '@/components/chat/HubSpotChat';
// import { Navigation } from '@/components/Navigation';
// import { Footer } from '@/components/Footer';
// import WebVitalsReporter from '@/components/performance/WebVitalsReporter';
// import A11yFeatures from '@/components/accessibility/A11yFeatures';
// import SEOAudit from '@/components/seo/SEOAudit';
// import ErrorBoundary from '@/components/ErrorBoundary';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });
const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans'
});

export const metadata: Metadata = {
  title: {
    default: 'Quadrate Tech Solutions | Software Development',
    template: '%s | Quadrate Tech Solutions'
  },
  description: 'Leading software development company specializing in AI/ML solutions, custom software development, and digital transformation services.',
  keywords: ['software development', 'AI solutions', 'ML solutions', 'digital transformation', 'custom software'],
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
    title: 'Quadrate Tech Solutions | Software Development',
    description: 'Leading software development company specializing in AI/ML solutions, custom software development, and digital transformation services.',
    siteName: 'Quadrate Tech Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quadrate Tech Solutions | Software Development',
    description: 'Leading software development company specializing in AI/ML solutions, custom software development, and digital transformation services.',
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
      <body className={`${inter.className} ${plusJakartaSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* <ErrorBoundary> */}
            <div className="app">
              {/* Web Vitals Monitoring */}
              {/* <WebVitalsReporter /> */}

              {/* Accessibility Features */}
              {/* <A11yFeatures mainContentId="main-content" /> */}

              {/* <Navigation /> */}
              <main id="main-content" tabIndex={-1}>
                {/* <ErrorBoundary> */}
                  {children}
                  {/* <Toaster /> */}
                  {/* <HubSpotChat /> */}
                {/* </ErrorBoundary> */}
              </main>
              {/* <Footer /> */}

              {/* SEO Audit Tool - only visible in development */}
              {/* <SEOAudit showInProduction={false} /> */}
            </div>
          {/* </ErrorBoundary> */}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

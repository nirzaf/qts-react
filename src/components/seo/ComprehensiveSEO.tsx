import Head from 'next/head';
import { SEOConfig } from '@/config/seo';

interface ComprehensiveSEOProps {
  seo: SEOConfig;
  structuredData?: object[];
  breadcrumbs?: Array<{name: string, url: string}>;
}

export default function ComprehensiveSEO({ seo, structuredData = [], breadcrumbs }: ComprehensiveSEOProps) {
  const jsonLd = structuredData.length > 0 ? structuredData : [];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      <meta name="author" content="Quadrate Tech Solutions" />
      <meta name="robots" content={seo.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Canonical URL */}
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={seo.openGraph.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.openGraph.url} />
      <meta property="og:site_name" content={seo.openGraph.siteName} />
      <meta property="og:locale" content={seo.openGraph.locale} />
      {seo.openGraph.images.map((image, index) => (
        <meta key={index} property="og:image" content={image.url} />
      ))}
      <meta property="og:image:width" content={seo.openGraph.images[0]?.width.toString()} />
      <meta property="og:image:height" content={seo.openGraph.images[0]?.height.toString()} />
      <meta property="og:image:alt" content={seo.openGraph.images[0]?.alt} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={seo.twitter.card} />
      <meta name="twitter:site" content={seo.twitter.site} />
      <meta name="twitter:creator" content={seo.twitter.creator} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.openGraph.images[0]?.url} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0607E1" />
      <meta name="msapplication-TileColor" content="#0607E1" />
      <meta name="application-name" content="Quadrate Tech Solutions" />
      <meta name="apple-mobile-web-app-title" content="Quadrate Tech" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Geo Meta Tags */}
      <meta name="geo.region" content="LK-1" />
      <meta name="geo.placename" content="Colombo" />
      <meta name="geo.position" content="6.9271;79.8612" />
      <meta name="ICBM" content="6.9271, 79.8612" />
      
      {/* Language and Content Meta Tags */}
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="rating" content="General" />
      
      {/* Business Meta Tags */}
      <meta name="classification" content="Technology, Software Development, AI/ML" />
      <meta name="category" content="Technology" />
      <meta name="subject" content="AI/ML Software Development" />
      <meta name="copyright" content="© 2024 Quadrate Tech Solutions. All rights reserved." />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      <link rel="dns-prefetch" href="//platform.twitter.com" />
      <link rel="dns-prefetch" href="//www.linkedin.com" />
      
      {/* Structured Data */}
      {jsonLd.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url
              }))
            })
          }}
        />
      )}
      
      {/* Verification Tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
      
      {/* Additional Performance Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/images/hero-bg.webp" as="image" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href="https://quadratetechsolutions.com" />
      <link rel="alternate" hrefLang="si" href="https://quadratetechsolutions.com/si" />
      <link rel="alternate" hrefLang="ta" href="https://quadratetechsolutions.com/ta" />
      <link rel="alternate" hrefLang="x-default" href="https://quadratetechsolutions.com" />
    </Head>
  );
}

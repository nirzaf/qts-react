'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { usePathname } from 'next/navigation';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
  canonicalUrl?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
  noIndex?: boolean;
  language?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  category?: string;
  tags?: string[];
  alternateUrls?: { lang: string; url: string }[];
  preload?: { href: string; as: string; type?: string; crossOrigin?: string }[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Quadrate Tech Solutions | Software Development',
  description = 'Custom software development, web development, digital marketing, and IT services to help your business grow.',
  keywords = 'software development, web development, digital marketing, IT outsourcing, business automation, Sri Lanka, custom software, web design',
  image = 'https://ik.imagekit.io/quadrate/assets/img/QTS%20Primary%20Logo.png?updatedAt=1748456663889',
  article = false,
  canonicalUrl,
  structuredData,
  noIndex = false,
  language = 'en',
  author = 'Quadrate Tech Solutions',
  publishedTime,
  modifiedTime,
  category,
  tags = [],
  alternateUrls = [],
  preload = [],
}) => {
  const pathname = usePathname();
  const siteUrl = 'https://quadratetechsolutions.com';
  // For hash routing, we need to use the path without the hash for SEO purposes
  const cleanPathname = pathname === '/' ? '' : pathname;
  const url = `${siteUrl}${cleanPathname}`;
  const defaultCanonical = canonicalUrl || url;

  // Format structured data for output
  const formatStructuredData = () => {
    if (Array.isArray(structuredData)) {
      return structuredData.map(data => (
        <script key={`ld-${Math.random().toString(36).substr(2, 9)}`} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ));
    }

    return (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    );
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={defaultCanonical} />

      {/* Robots Control */}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content={`${language}_${language.toUpperCase()}`} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Quadrate Tech Solutions" />

      {/* Article Specific Meta Tags */}
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {article && category && (
        <meta property="article:section" content={category} />
      )}
      {article && tags.length > 0 && tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quadratetech" />
      <meta name="twitter:creator" content="@quadratetech" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Alternate Language URLs */}
      {alternateUrls.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* Preload Critical Resources */}
      {preload.map(({ href, as, type, crossOrigin }) => (
        <link
          key={href}
          rel="preload"
          href={href}
          as={as}
          {...(type && { type })}
          {...(crossOrigin && { crossOrigin: crossOrigin as "anonymous" | "use-credentials" | "" })}
        />
      ))}

      {/* Structured Data / JSON-LD */}
      {structuredData && formatStructuredData()}
    </Helmet>
  );
};

export default SEO;

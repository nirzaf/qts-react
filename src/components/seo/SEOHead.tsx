import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  canonicalUrl?: string;
  children?: React.ReactNode;
}

/**
 * Comprehensive SEO Head component that includes all necessary meta tags
 * for optimal SEO performance across search engines and social media platforms
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = 'https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Quadrate Tech Solutions',
  section,
  tags = [],
  noIndex = false,
  canonicalUrl,
  children,
}) => {
  const { pathname } = useLocation();
  const siteUrl = 'https://quadratetechsolutions.com';
  // For hash routing, we need to use the path without the hash for SEO purposes
  const cleanPathname = pathname === '/' ? '' : pathname;
  const url = canonicalUrl || `${siteUrl}${cleanPathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Robots Control */}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Quadrate Tech Solutions" />
      <meta property="og:locale" content="en_US" />

      {/* Article Specific Meta Tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && tags.map(tag => (
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

      {/* Additional SEO elements passed as children */}
      {children}
    </Helmet>
  );
};

export default SEOHead;

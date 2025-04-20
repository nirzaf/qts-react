import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Quadrate Tech Solutions | Leading Software Development Company in Sri Lanka',
  description = 'Quadrate Tech Solutions offers custom software development, web development, digital marketing, IT outsourcing, and business automation services to help businesses grow.',
  keywords = 'software development, web development, digital marketing, IT outsourcing, business automation, Sri Lanka',
  image = 'https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969',
  article = false,
  canonicalUrl,
  structuredData,
  noIndex = false,
}) => {
  const { pathname } = useLocation();
  const siteUrl = 'https://quadratetechsolutions.com';
  const url = `${siteUrl}${pathname}`;
  const defaultCanonical = canonicalUrl || url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={defaultCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* No Index if specified */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

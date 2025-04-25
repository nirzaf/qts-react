import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateProductSchema } from '@/utils/structuredData';
import { defaultOrganization } from '@/utils/structuredData';

interface ProductStructuredDataProps {
  name: string;
  description: string;
  url: string;
  image: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
  sku?: string;
  brand?: string;
  category?: string;
  reviews?: Array<{
    author: string;
    rating: number;
    text?: string;
    date: string;
  }>;
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
    reviewCount?: number;
  };
}

/**
 * Component for adding Product structured data to a page
 * This helps Google display product rich results in search
 */
const ProductStructuredData: React.FC<ProductStructuredDataProps> = ({
  name,
  description,
  url,
  image,
  price,
  priceCurrency = 'USD',
  availability = 'InStock',
  sku,
  brand = defaultOrganization.name,
  category,
  reviews,
  aggregateRating,
}) => {
  // Format reviews for structured data
  const formattedReviews = reviews?.map(review => ({
    author: {
      name: review.author,
    },
    reviewRating: {
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: review.date,
    reviewBody: review.text,
  }));

  // Create product schema
  const productSchema = generateProductSchema({
    name,
    description,
    url,
    image,
    brand: {
      name: brand,
      url: defaultOrganization.url,
      logo: defaultOrganization.logo,
      description: defaultOrganization.description,
    },
    offers: price ? [
      {
        name,
        price,
        priceCurrency,
        availability,
      }
    ] : undefined,
    category,
    sku,
    review: formattedReviews,
    aggregateRating: aggregateRating ? {
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.ratingCount,
      reviewCount: aggregateRating.reviewCount || aggregateRating.ratingCount,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
  });

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </Helmet>
  );
};

export default ProductStructuredData;

interface Organization {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
  foundingDate?: string;
  founders?: Person[];
  numberOfEmployees?: number;
  email?: string;
  telephone?: string;
  address?: string;
}

interface Person {
  name: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  sameAs?: string[];
  email?: string;
}

interface WebPage {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumb?: BreadcrumbItem[];
  speakable?: boolean;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BlogPost extends WebPage {
  datePublished: string;
  dateModified?: string;
  author: Person;
  category?: string;
  tags?: string[];
  wordCount?: number;
  articleBody?: string;
  articleSection?: string;
}

interface Service {
  name: string;
  description: string;
  url: string;
  provider: Organization;
  category?: string;
  areaServed?: string;
  offers?: Offer[];
}

interface Offer {
  name: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
  url?: string;
  validFrom?: string;
  validThrough?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Product {
  name: string;
  description: string;
  url: string;
  image: string;
  brand: Organization;
  offers?: Offer[];
  category?: string;
  sku?: string;
  gtin?: string;
  mpn?: string;
  review?: Review[];
  aggregateRating?: AggregateRating;
}

interface Review {
  author: Person;
  reviewRating: Rating;
  datePublished: string;
  reviewBody?: string;
}

interface Rating {
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
}

interface AggregateRating {
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  ratingCount: number;
  reviewCount?: number;
}

export const generateOrganizationSchema = (org: Organization) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: {
      '@type': 'ImageObject',
      url: org.logo,
    },
    description: org.description,
    ...(org.sameAs && { sameAs: org.sameAs }),
    ...(org.foundingDate && { foundingDate: org.foundingDate }),
    ...(org.founders && {
      founders: org.founders.map(founder => ({
        '@type': 'Person',
        name: founder.name,
        ...(founder.url && { url: founder.url }),
        ...(founder.image && { image: founder.image }),
        ...(founder.jobTitle && { jobTitle: founder.jobTitle }),
      }))
    }),
    ...(org.numberOfEmployees && {
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: org.numberOfEmployees
      }
    }),
    ...(org.email && { email: org.email }),
    ...(org.telephone && { telephone: org.telephone }),
    ...(org.address && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: org.address
      }
    }),
  };
};

export const generatePersonSchema = (person: Person) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    ...(person.url && { url: person.url }),
    ...(person.image && { image: person.image }),
    ...(person.jobTitle && { jobTitle: person.jobTitle }),
    ...(person.sameAs && { sameAs: person.sameAs }),
    ...(person.email && { email: person.email }),
  };
};

export const generateWebPageSchema = (page: WebPage) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.url,
    ...(page.image && { image: page.image }),
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    ...(page.breadcrumb && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: page.breadcrumb.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      }
    }),
    ...(page.speakable && {
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['article', 'h1', 'h2', 'h3', '.content']
      }
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': page.url,
    },
  };
};

export const generateBlogPostSchema = (post: BlogPost) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    ...(post.image && { image: post.image }),
    url: post.url,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author.name,
      ...(post.author.url && { url: post.author.url }),
      ...(post.author.image && { image: post.author.image }),
      ...(post.author.jobTitle && { jobTitle: post.author.jobTitle }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Quadrate Tech Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
    ...(post.category && { articleSection: post.category }),
    ...(post.tags && { keywords: post.tags.join(', ') }),
    ...(post.wordCount && { wordCount: post.wordCount }),
    ...(post.articleBody && { articleBody: post.articleBody }),
  };
};

export const generateServiceSchema = (service: Service) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: service.provider.name,
      url: service.provider.url,
      logo: {
        '@type': 'ImageObject',
        url: service.provider.logo,
      },
    },
    ...(service.category && { serviceType: service.category }), // Changed category to serviceType
    ...(service.areaServed && { areaServed: service.areaServed }),
    ...(service.offers && {
      offers: service.offers.map(offer => ({
        '@type': 'Offer',
        name: offer.name,
        ...(offer.price && { price: offer.price }),
        ...(offer.priceCurrency && { priceCurrency: offer.priceCurrency }),
        ...(offer.availability && { availability: `https://schema.org/${offer.availability}` }),
        ...(offer.url && { url: offer.url }),
        ...(offer.validFrom && { validFrom: offer.validFrom }),
        ...(offer.validThrough && { validThrough: offer.validThrough }),
      }))
    }),
  };
};

export const generateFAQSchema = (faqs: FAQItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateLocalBusinessSchema = (business: Organization & { address: string; telephone: string; geo?: { latitude: number; longitude: number }; openingHours?: string[]; priceRange?: string }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    url: business.url,
    logo: {
      '@type': 'ImageObject',
      url: business.logo,
    },
    description: business.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
    },
    telephone: business.telephone,
    ...(business.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
    }),
    ...(business.openingHours && { openingHours: business.openingHours }),
    ...(business.priceRange && { priceRange: business.priceRange }),
    ...(business.sameAs && { sameAs: business.sameAs }),
  };
};

export const generateProductSchema = (product: Product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: product.url,
    image: product.image,
    brand: {
      '@type': 'Organization',
      name: product.brand.name,
      ...(product.brand.url && { url: product.brand.url }),
      ...(product.brand.logo && {
        logo: {
          '@type': 'ImageObject',
          url: product.brand.logo,
        }
      }),
    },
    ...(product.offers && {
      offers: product.offers.map(offer => ({
        '@type': 'Offer',
        name: offer.name,
        ...(offer.price && { price: offer.price }),
        ...(offer.priceCurrency && { priceCurrency: offer.priceCurrency }),
        ...(offer.availability && { availability: `https://schema.org/${offer.availability}` }),
        ...(offer.url && { url: offer.url }),
        ...(offer.validFrom && { validFrom: offer.validFrom }),
        ...(offer.validThrough && { validThrough: offer.validThrough }),
      }))
    }),
    ...(product.category && { category: product.category }),
    ...(product.sku && { sku: product.sku }),
    ...(product.gtin && { gtin: product.gtin }),
    ...(product.mpn && { mpn: product.mpn }),
    ...(product.review && {
      review: product.review.map(review => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author.name,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.reviewRating.ratingValue,
          ...(review.reviewRating.bestRating && { bestRating: review.reviewRating.bestRating }),
          ...(review.reviewRating.worstRating && { worstRating: review.reviewRating.worstRating }),
        },
        datePublished: review.datePublished,
        ...(review.reviewBody && { reviewBody: review.reviewBody }),
      }))
    }),
    ...(product.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.aggregateRating.ratingValue,
        ratingCount: product.aggregateRating.ratingCount,
        ...(product.aggregateRating.bestRating && { bestRating: product.aggregateRating.bestRating }),
        ...(product.aggregateRating.worstRating && { worstRating: product.aggregateRating.worstRating }),
        ...(product.aggregateRating.reviewCount && { reviewCount: product.aggregateRating.reviewCount }),
      }
    }),
  };
};

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

// Default organization data for Quadrate Tech Solutions
export const defaultOrganization = {
  name: 'Quadrate Tech Solutions',
  url: 'https://quadrate.lk/#/',
  logo: 'https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969',
  description: 'Quadrate Tech Solutions offers custom software development, web development, digital marketing, IT outsourcing, and business automation services to help businesses grow.',
  sameAs: [
    'https://www.facebook.com/quadratetechsolutions',
    'https://www.linkedin.com/company/quadrate-tech-solutions',
    'https://twitter.com/quadratetech',
    'https://www.instagram.com/quadratetechsolutions/',
    'https://github.com/quadratetechsolutions'
  ],
  address: 'Sri Lanka',
  telephone: '+94 77 123 4567',
  email: 'info@quadrate.lk',
  foundingDate: '2020-01-01',
  founders: [
    {
      name: 'Fazrin',
      jobTitle: 'CEO & Founder',
      url: 'https://quadrate.lk/#/about'
    }
  ],
  numberOfEmployees: 20,
  priceRange: '$$'
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Quadrate Tech Solutions",
  "description": "Innovative technology company specializing in AI/ML solutions, custom software development, and digital transformation services",
  "url": "https://quadratetechsolutions.com",
  "logo": "https://quadratetechsolutions.com/logo.png",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Street",
    "addressLocality": "Colombo",
    "addressRegion": "Western Province",
    "postalCode": "00100",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "6.9271",
    "longitude": "79.8612"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+94-XXX-XXXXXXX",
    "contactType": "customer service",
    "availableLanguage": ["English", "Sinhala", "Tamil"],
    "areaServed": "LK"
  },
  "sameAs": [
    "https://linkedin.com/company/quadrate-tech-solutions",
    "https://twitter.com/quadratetech",
    "https://facebook.com/quadratetechsolutions",
    "https://github.com/quadratetech",
    "https://youtube.com/quadratetechsolutions"
  ],
  "services": [
    "AI/ML Solutions",
    "Custom Software Development",
    "Digital Transformation",
    "Microsoft 365 Integration",
    "ZOHO Solutions",
    "Cloud Computing",
    "Data Analytics",
    "Computer Vision",
    "Natural Language Processing",
    "Machine Learning Operations",
    "Web Development",
    "Mobile App Development"
  ],
  "award": [
    "Microsoft Gold Partner",
    "ZOHO Premium Partner",
    "ISO 9001:2015 Certified",
    "AWS Advanced Consulting Partner"
  ],
  "numberOfEmployees": "25-50",
  "industry": "Information Technology",
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Development",
    "Digital Transformation",
    "Cloud Computing",
    "Data Science",
    "Computer Vision",
    "Natural Language Processing",
    "Business Intelligence",
    "Enterprise Software"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Quadrate Tech Solutions",
  "image": "https://quadratetechsolutions.com/images/office.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Street",
    "addressLocality": "Colombo",
    "addressRegion": "Western Province",
    "postalCode": "00100",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "6.9271",
    "longitude": "79.8612"
  },
  "url": "https://quadratetechsolutions.com",
  "telephone": "+94-XXX-XXXXXXX",
  "email": "hello@quadratetechsolutions.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "LKR, USD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Quadrate Tech Solutions",
  "url": "https://quadratetechsolutions.com",
  "description": "Leading AI/ML software development company in Sri Lanka",
  "publisher": {
    "@type": "Organization",
    "name": "Quadrate Tech Solutions"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://quadratetechsolutions.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "provider": {
    "@type": "Organization",
    "name": "Quadrate Tech Solutions"
  },
  "serviceType": service.category,
  "areaServed": "LK",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": service.category,
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }
    ]
  }
});

export const articleSchema = (article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "url": article.url,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Quadrate Tech Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://quadratetechsolutions.com/logo.png"
    }
  },
  "image": article.image || "https://quadratetechsolutions.com/og-image.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const reviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Quadrate Tech Solutions",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": reviews.length.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  }))
});

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Quadrate AI Platform",
  "description": "Comprehensive AI/ML platform for business automation and intelligence",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web-based",
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Organization",
    "name": "Quadrate Tech Solutions"
  }
};

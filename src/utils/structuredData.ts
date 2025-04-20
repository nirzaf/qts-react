interface Organization {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
}

interface WebPage {
  title: string;
  description: string;
  url: string;
  image?: string;
}

interface BlogPost extends WebPage {
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
}

interface Service {
  name: string;
  description: string;
  url: string;
  provider: Organization;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const generateOrganizationSchema = (org: Organization) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: org.logo,
    description: org.description,
    ...(org.sameAs && { sameAs: org.sameAs }),
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
  };
};

export const generateBlogPostSchema = (post: BlogPost) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    url: post.url,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author.name,
      ...(post.author.url && { url: post.author.url }),
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
      logo: service.provider.logo,
    },
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

export const generateLocalBusinessSchema = (business: Organization & { address: string; telephone: string; geo?: { latitude: number; longitude: number } }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    url: business.url,
    logo: business.logo,
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
    ...(business.sameAs && { sameAs: business.sameAs }),
  };
};

// Default organization data for Quadrate Tech Solutions
export const defaultOrganization = {
  name: 'Quadrate Tech Solutions',
  url: 'https://quadratetechsolutions.com',
  logo: 'https://ik.imagekit.io/quadrate/QTS%20Logo%20Primary.png?updatedAt=1733854434969',
  description: 'Quadrate Tech Solutions offers custom software development, web development, digital marketing, IT outsourcing, and business automation services to help businesses grow.',
  sameAs: [
    'https://www.facebook.com/quadratetechsolutions',
    'https://www.linkedin.com/company/quadrate-tech-solutions',
    'https://twitter.com/quadratetech',
    'https://www.instagram.com/quadratetechsolutions/'
  ],
  address: 'Sri Lanka',
  telephone: '+94 77 123 4567'
};

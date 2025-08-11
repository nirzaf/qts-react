import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../../components/ui/loading';

// Lazy load components
const ServicesHero = dynamic(() => import('../../components/services/ServicesHero'), {
  loading: () => <Loading />,
});

const ServicesGrid = dynamic(() => import('../../components/services/ServicesGrid'), {
  loading: () => <Loading />,
});

const WhyChooseUs = dynamic(() => import('../../components/services/WhyChooseUs'), {
  loading: () => <Loading />,
});

export const metadata: Metadata = {
  title: 'Our Services | AI, Software Development & Digital Solutions',
  description: 'Comprehensive technology services including AI solutions, custom software development, web applications, mobile apps, cloud computing, and digital transformation.',
  keywords: [
    'AI services',
    'software development',
    'web development',
    'mobile app development',
    'cloud computing',
    'digital transformation',
    'machine learning',
    'custom software',
    'technology consulting'
  ],
  openGraph: {
    title: 'Our Services | AI, Software Development & Digital Solutions',
    description: 'Comprehensive technology services including AI solutions, custom software development, web applications, mobile apps, cloud computing, and digital transformation.',
    url: '/services',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/services.jpg',
        width: 1200,
        height: 630,
        alt: 'Quadrate Tech Solutions Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | AI, Software Development & Digital Solutions',
    description: 'Comprehensive technology services including AI solutions, custom software development, web applications, mobile apps, cloud computing, and digital transformation.',
    images: ['https://ik.imagekit.io/quadrate/assets/img/services.jpg'],
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <ServicesHero />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <ServicesGrid />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <WhyChooseUs />
      </Suspense>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Technology Services",
            "provider": {
              "@type": "Organization",
              "name": "Quadrate Tech Solutions",
              "url": "https://quadratetech.com"
            },
            "description": "Comprehensive technology services including AI solutions, custom software development, web applications, mobile apps, cloud computing, and digital transformation.",
            "serviceType": [
              "Artificial Intelligence",
              "Software Development",
              "Web Development",
              "Mobile App Development",
              "Cloud Computing",
              "Digital Transformation"
            ],
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technology Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI & Machine Learning Solutions",
                    "description": "Custom AI solutions, ML models, and intelligent automation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software Development",
                    "description": "Tailored software solutions built with modern technologies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Responsive, fast, and SEO-optimized websites"
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}
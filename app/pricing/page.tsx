import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../../components/ui/loading';

// Lazy load components
const PricingHeader = dynamic(() => import('../../components/pricing/PricingHeader'), {
  loading: () => <Loading />,
});

const PricingGrid = dynamic(() => import('../../components/pricing/PricingGrid'), {
  loading: () => <Loading />,
});

const CustomSolutionCard = dynamic(() => import('../../components/pricing/CustomSolutionCard'), {
  loading: () => <Loading />,
});

export const metadata: Metadata = {
  title: 'Pricing | Transparent & Competitive Technology Solutions',
  description: 'Explore our transparent pricing for AI services, software development, web applications, and technology consulting. Custom quotes available.',
  keywords: [
    'pricing',
    'software development cost',
    'AI services pricing',
    'web development rates',
    'technology consulting fees',
    'custom software pricing',
    'project quotes'
  ],
  openGraph: {
    title: 'Pricing | Transparent & Competitive Technology Solutions',
    description: 'Explore our transparent pricing for AI services, software development, web applications, and technology consulting. Custom quotes available.',
    url: '/pricing',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/pricing.jpg',
        width: 1200,
        height: 630,
        alt: 'Quadrate Tech Solutions Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Transparent & Competitive Technology Solutions',
    description: 'Explore our transparent pricing for AI services, software development, web applications, and technology consulting. Custom quotes available.',
    images: ['https://ik.imagekit.io/quadrate/assets/img/pricing.jpg'],
  },
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <PricingHeader />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <PricingGrid />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <CustomSolutionCard />
      </Suspense>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            "name": "Technology Services Pricing",
            "description": "Transparent pricing for AI services, software development, and technology consulting",
            "priceCurrency": "USD",
            "offers": [
              {
                "@type": "Offer",
                "name": "Starter Package",
                "price": "2500",
                "priceCurrency": "USD",
                "description": "Perfect for small businesses and startups",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Basic Web Application Development"
                }
              },
              {
                "@type": "Offer",
                "name": "Professional Package",
                "price": "5000",
                "priceCurrency": "USD",
                "description": "Ideal for growing businesses",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Advanced Web Application with AI Integration"
                }
              },
              {
                "@type": "Offer",
                "name": "Enterprise Package",
                "description": "Custom pricing for large-scale projects",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full-Stack Enterprise Solution"
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
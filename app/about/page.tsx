import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../../components/ui/loading';

// Lazy load components
const QuadrateAboutSection = dynamic(() => import('../../components/about/QuadrateAboutSection'), {
  loading: () => <Loading />,
});

const VisionMission = dynamic(() => import('../../components/about/VisionMission'), {
  loading: () => <Loading />,
});

const ExperienceSection = dynamic(() => import('../../components/about/ExperienceSection'), {
  loading: () => <Loading />,
});

export const metadata: Metadata = {
  title: 'About Quadrate Tech Solutions | Our Story & Values',
  description: 'Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.',
  keywords: [
    'about Quadrate',
    'tech company Sri Lanka',
    'IT solutions mission',
    'software development team',
    'company vision',
    'tech expertise',
    'Sri Lanka software developers'
  ],
  openGraph: {
    title: 'About Quadrate Tech Solutions | Our Story & Values',
    description: 'Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.',
    url: '/about',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686',
        width: 1200,
        height: 630,
        alt: 'About Quadrate Tech Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Quadrate Tech Solutions | Our Story & Values',
    description: 'Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.',
    images: ['https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <QuadrateAboutSection />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <VisionMission />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <ExperienceSection />
      </Suspense>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Quadrate Tech Solutions",
            "description": "Learn about Quadrate Tech Solutions, our mission, values, and the expert team driving innovation in software development and IT services in Sri Lanka.",
            "url": "https://quadratetech.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Quadrate Tech Solutions",
              "description": "Leading provider of AI-powered software solutions, machine learning, and custom software development services.",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "19/2/9, Market Complex, Matale Road",
                "addressLocality": "Akurana",
                "addressRegion": "Kandy",
                "postalCode": "20850",
                "addressCountry": "LK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+94814242615",
                "contactType": "customer service",
                "email": "info@quadrate.lk"
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://quadratetech.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Us",
                  "item": "https://quadratetech.com/about"
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}
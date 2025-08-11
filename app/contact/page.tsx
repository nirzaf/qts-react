import { Metadata } from 'next';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../../components/ui/loading';

// Lazy load components
const ContactHeader = dynamic(() => import('../../components/contact/ContactHeader'), {
  loading: () => <Loading />,
});

const ContactForm = dynamic(() => import('../../components/contact/ContactForm'), {
  loading: () => <Loading />,
});

const ContactMethodsGrid = dynamic(() => import('../../components/contact/ContactMethodsGrid'), {
  loading: () => <Loading />,
});

const LocationCards = dynamic(() => import('../../components/contact/LocationCards'), {
  loading: () => <Loading />,
});

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Quadrate Tech Solutions',
  description: 'Contact Quadrate Tech Solutions for AI services, software development, and technology consulting. Get a free consultation and project quote.',
  keywords: [
    'contact Quadrate',
    'technology consulting',
    'AI consultation',
    'software development quote',
    'project consultation',
    'tech support',
    'Sri Lanka IT company'
  ],
  openGraph: {
    title: 'Contact Us | Get in Touch with Quadrate Tech Solutions',
    description: 'Contact Quadrate Tech Solutions for AI services, software development, and technology consulting. Get a free consultation and project quote.',
    url: '/contact',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Quadrate Tech Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Get in Touch with Quadrate Tech Solutions',
    description: 'Contact Quadrate Tech Solutions for AI services, software development, and technology consulting. Get a free consultation and project quote.',
    images: ['https://ik.imagekit.io/quadrate/assets/img/contact.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<Loading />}>
        <ContactHeader />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <ContactForm />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <ContactMethodsGrid />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <LocationCards />
      </Suspense>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Quadrate Tech Solutions",
            "description": "Contact Quadrate Tech Solutions for AI services, software development, and technology consulting.",
            "url": "https://quadratetech.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Quadrate Tech Solutions",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "19/2/9, Market Complex, Matale Road",
                "addressLocality": "Akurana",
                "addressRegion": "Kandy",
                "postalCode": "20850",
                "addressCountry": "LK"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+94814242615",
                  "contactType": "customer service",
                  "email": "info@quadrate.lk",
                  "availableLanguage": ["English", "Sinhala"]
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "email": "sales@quadrate.lk"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "technical support",
                  "email": "support@quadrate.lk"
                }
              ],
              "openingHours": [
                "Mo-Fr 09:00-17:00",
                "Sa 10:00-15:00"
              ]
            }
          })
        }}
      />
    </div>
  );
}
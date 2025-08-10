import React, { Suspense, lazy } from 'react';
import type { Metadata } from 'next';
import { ModernHeroSection } from '@/components/sections/ModernHeroSection';
import { AnimatedSection } from '@/components/sections/home/AnimatedSection';
import BackgroundElements from '@/components/home/BackgroundElements';
import ErrorFallback from '@/components/home/ErrorFallback';
import Loading from '@/components/ui/loading';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
  defaultOrganization
} from '@/utils/structuredData';

// Lazy load heavy components
const Features = lazy(() => import('@/components/sections/features/Features'));
const TechStack = lazy(() => import('@/components/sections/TechStack'));
const ServicesSection = lazy(() => import('@/components/sections/ServicesSection'));
const AIHighlightBanner = lazy(() => import('@/components/sections/AIHighlightBanner'));
const AIServicesSection = lazy(() => import('@/components/sections/AIServicesSection'));
const PricingSection = lazy(() => import('@/components/sections/PricingSection'));
const StatsSection = lazy(() => import('@/components/sections/StatsSection'));
const PartnersSection = lazy(() => import('@/components/sections/PartnersSection'));
const CompanyValues = lazy(() => import('@/components/sections/home/CompanyValues'));

// Metadata for the home page
export const metadata: Metadata = {
  title: 'Quadrate Tech Solutions | AI & Software Development',
  description: 'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
  keywords: [
    'artificial intelligence',
    'AI services',
    'machine learning',
    'computer vision',
    'natural language processing',
    'generative AI',
    'AI consulting',
    'software development',
    'web development',
    'digital marketing',
    'IT outsourcing',
    'business automation',
    'Sri Lanka',
    'custom software',
    'web design',
    'mobile app development',
    'cloud solutions',
    'AI integration',
    'MLOps',
    'data engineering'
  ],
  openGraph: {
    title: 'Quadrate Tech Solutions | AI & Software Development',
    description: 'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
    url: 'https://quadratetechsolutions.com',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
        width: 1200,
        height: 630,
        alt: 'Quadrate Tech Solutions - AI & Software Development',
      },
    ],
  },
  twitter: {
    title: 'Quadrate Tech Solutions | AI & Software Development',
    description: 'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
    images: ['https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458'],
  },
};

/**
 * Home page component displaying various sections about Quadrate Tech Solutions
 * Features:
 * - Smooth animations and transitions
 * - Responsive design
 * - Section-level error handling
 * - Modular component architecture
 * - Lazy loading for optimal performance
 */
export default function HomePage() {
  // Navigation handlers will be handled by the ModernHeroSection component
  const handleGetStarted = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };
  const handleLearnMore = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/about';
    }
  };

  // Generate structured data for the home page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);

  const webPageSchema = generateWebPageSchema({
    title: 'Quadrate Tech Solutions | Software Development',
    description: 'Custom software development, web development, digital marketing, and IT services to help your business grow.',
    url: 'https://quadratetechsolutions.com/',
    image: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
    datePublished: '2023-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    speakable: true
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    ...defaultOrganization,
    geo: {
      latitude: 7.8731,
      longitude: 80.7718
    },
    openingHours: [
      'Monday-Friday 09:00-17:00',
      'Saturday 10:00-15:00'
    ],
    priceRange: '$$'
  });

  // Generate service schemas for main services
  const webDevServiceSchema = generateServiceSchema({
    name: 'Web Development Services',
    description: 'Custom web application development using modern technologies like React, Angular, and Node.js.',
    url: 'https://quadratetechsolutions.com/services#web-development',
    provider: defaultOrganization,
    category: 'Web Development',
    areaServed: 'Worldwide',
    offers: [
      {
        name: 'Custom Web Application',
        price: '5000',
        priceCurrency: 'USD',
        availability: 'InStock'
      }
    ]
  });

  const mobileDevServiceSchema = generateServiceSchema({
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile application development for iOS and Android.',
    url: 'https://quadratetechsolutions.com/services#mobile-development',
    provider: defaultOrganization,
    category: 'Mobile Development',
    areaServed: 'Worldwide'
  });

  // Combine all structured data
  const structuredData = [
    organizationSchema,
    webPageSchema,
    localBusinessSchema,
    webDevServiceSchema,
    mobileDevServiceSchema
  ];

  try {
    return (
      <div className="relative bg-transparent">
        <SchemaMarkup schema={structuredData} />
        <BackgroundElements />

        {/* Content Container */}
        <div className="relative">
          {/* Modern Hero Section */}
          <ModernHeroSection
            primaryButton={{
              text: "Get Started",
              onClick: handleGetStarted
            }}
            secondaryButton={{
              text: "Learn More",
              onClick: handleLearnMore
            }}
          />

          {/* Features Section */}
          <AnimatedSection className="bg-gradient-to-b from-[#FFFFFF] via-[#0607E1]/5 to-[#FFFFFF]">
            <div className="font-plusJakartaSans text-[#0607E1]">
              <Suspense fallback={<Loading />}>
                <Features />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Tech Stack Section */}
          <AnimatedSection className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/5 via-[#0607E1]/3 to-[#0607E1]/5" />
            <div className="font-plusJakartaSans relative z-10 text-[#0607E1]">
              <Suspense fallback={<Loading />}>
                <TechStack />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Services Section */}
          <AnimatedSection className="bg-gradient-to-b from-[#FFFFFF] via-[#0607E1]/5 to-[#FFFFFF]">
            <div className="font-plusJakartaSans text-[#0607E1]">
              <Suspense fallback={<Loading />}>
                <ServicesSection />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* AI Highlight Banner */}
          <div className="font-plusJakartaSans">
            <Suspense fallback={<Loading />}>
              <AIHighlightBanner />
            </Suspense>
          </div>

          {/* AI Services Section */}
          <AnimatedSection className="bg-gradient-to-b from-[#F8FAFF] to-[#FFFFFF]">
            <div className="font-plusJakartaSans">
              <Suspense fallback={<Loading />}>
                <AIServicesSection />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Company Values Section */}
          <AnimatedSection className="bg-gradient-to-b from-[#FFFFFF] via-[#0607E1]/5 to-[#FFFFFF]">
            <div className="font-plusJakartaSans text-[#0607E1]">
              <Suspense fallback={<Loading />}>
                <CompanyValues />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Pricing Section */}
          <div id="pricing" className="bg-[#FFFFFF]">
            <div className="font-plusJakartaSans text-[#0607E1]">
              <Suspense fallback={<Loading />}>
                <PricingSection />
              </Suspense>
            </div>
          </div>

          {/* Stats Section */}
          <div className="font-plusJakartaSans text-[#0607E1]">
            <Suspense fallback={<Loading />}>
              <StatsSection />
            </Suspense>
          </div>

          {/* Partners Section */}
          <AnimatedSection className="relative bg-[#FFFFFF]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0607E1]/5 via-[#0607E1]/3 to-transparent" />
            <div className="font-plusJakartaSans relative z-10 text-[#0607E1]">
              <Suspense fallback={<Loading />}>
                <PartnersSection
                  title="Trusted by Industry Leaders"
                  description="We collaborate with forward-thinking companies to deliver exceptional solutions."
                />
              </Suspense>
            </div>
          </AnimatedSection>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering Home page:', error);
    return <ErrorFallback />;
  }
}

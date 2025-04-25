import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '@/components/sections/HeroSection';
import { AnimatedSection } from '@/components/sections/home/AnimatedSection';
import BackgroundElements from '@/components/home/BackgroundElements';
import HeroBackground from '@/components/home/HeroBackground';
import ErrorFallback from '@/components/home/ErrorFallback';
import Loading from '@/components/ui/loading';
import SEO from '@/components/seo/SEO';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
// import LazyLoad from '@/components/ui/LazyLoad';
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
const PricingSection = lazy(() => import('@/components/sections/PricingSection'));
const StatsSection = lazy(() => import('@/components/sections/StatsSection'));
const PartnersSection = lazy(() => import('@/components/sections/PartnersSection'));
const CompanyValues = lazy(() => import('@/components/sections/home/CompanyValues'));

/**
 * Home page component displaying various sections about Quadrate Tech Solutions
 * Features:
 * - Smooth animations and transitions
 * - Responsive design
 * - Section-level error handling
 * - Modular component architecture
 * - Lazy loading for optimal performance
 */
const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => navigate('/contact');
  const handleLearnMore = () => navigate('/about');

  // Generate structured data for the home page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);

  const webPageSchema = generateWebPageSchema({
    title: 'Quadrate Tech Solutions | Leading Software Development Company in Sri Lanka',
    description: 'Quadrate Tech Solutions offers custom software development, web development, digital marketing, IT outsourcing, and business automation services to help businesses grow.',
    url: 'https://quadratetechsolutions.com',
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
        <SEO
          title="Quadrate Tech Solutions | Leading Software Development Company in Sri Lanka"
          description="Quadrate Tech Solutions offers custom software development, web development, digital marketing, IT outsourcing, and business automation services to help businesses grow."
          keywords="software development, web development, digital marketing, IT outsourcing, business automation, Sri Lanka, custom software, web design, mobile app development, cloud solutions"
          image="https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458"
          author="Quadrate Tech Solutions"
          language="en"
          preload={[
            {
              href: "https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458",
              as: "image",
              type: "image/avif"
            },
            {
              href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap",
              as: "style"
            }
          ]}
        />
        <SchemaMarkup schema={structuredData} />
        <BackgroundElements />

        {/* Content Container */}
        <div className="relative">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <HeroBackground />
            <div className="relative z-10">
              <HeroSection
                primaryButton={{
                  text: "Get Started",
                  onClick: handleGetStarted
                }}
                secondaryButton={{
                  text: "Learn More",
                  onClick: handleLearnMore
                }}
              />
            </div>
          </section>

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
};

export default Home;

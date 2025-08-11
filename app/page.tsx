'use client';

import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Import components that don't need lazy loading
import { ModernHeroSection } from '../components/sections/ModernHeroSection';
import { AnimatedSection } from '../components/sections/home/AnimatedSection';
import BackgroundElements from '../components/home/BackgroundElements';
import Loading from '../components/ui/loading';

// Lazy load heavy components with Next.js dynamic imports
const Features = dynamic(() => import('../components/sections/features/Features'), {
  loading: () => <Loading />,
});

const TechStack = dynamic(() => import('../components/sections/TechStack'), {
  loading: () => <Loading />,
});

const ServicesSection = dynamic(() => import('../components/sections/ServicesSection'), {
  loading: () => <Loading />,
});

const AIHighlightBanner = dynamic(() => import('../components/sections/AIHighlightBanner'), {
  loading: () => <Loading />,
});

const AIServicesSection = dynamic(() => import('../components/sections/AIServicesSection'), {
  loading: () => <Loading />,
});

const PricingSection = dynamic(() => import('../components/sections/PricingSection'), {
  loading: () => <Loading />,
});

const StatsSection = dynamic(() => import('../components/sections/StatsSection'), {
  loading: () => <Loading />,
});

const PartnersSection = dynamic(() => import('../components/sections/PartnersSection'), {
  loading: () => <Loading />,
});

const CompanyValues = dynamic(() => import('../components/sections/home/CompanyValues'), {
  loading: () => <Loading />,
});



export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/contact');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <div className="relative bg-transparent">
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Quadrate Tech Solutions",
            "url": "https://quadratetech.com",
            "logo": "https://ik.imagekit.io/quadrate/assets/img/QTS%20Primary%20Logo.png",
            "description": "Leading provider of AI-powered software solutions, machine learning, and custom software development services.",
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
            },
            "sameAs": [
              "https://www.facebook.com/quadrate.lk/",
              "https://x.com/quadrate_lk",
              "https://www.instagram.com/quadrate.lk/",
              "https://lk.linkedin.com/company/quadrate-tech"
            ]
          })
        }}
      />
    </div>
  );
}
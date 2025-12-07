'use client';

import React, { Suspense, lazy } from 'react';
import { useRouter } from 'next/navigation';
import { ModernHeroSection } from '@/components/sections/ModernHeroSection';
import { AnimatedSection } from '@/components/sections/home/AnimatedSection';
import BackgroundElements from '@/components/home/BackgroundElements';

import ErrorFallback from '@/components/home/ErrorFallback';
import Loading from '@/components/ui/loading';

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
  const router = useRouter();

  const handleGetStarted = () => router.push('/contact');
  const handleLearnMore = () => router.push('/about');

  try {
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
          <AnimatedSection className="bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="font-plusJakartaSans text-primary">
              <Suspense fallback={<Loading />}>
                <Features />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Tech Stack Section */}
          <AnimatedSection className="relative bg-background">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5" />
            <div className="font-plusJakartaSans relative z-10 text-primary">
              <Suspense fallback={<Loading />}>
                <TechStack />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Services Section */}
          <AnimatedSection className="bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="font-plusJakartaSans text-primary">
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
          <AnimatedSection className="bg-gradient-to-b from-muted to-background">
            <div className="font-plusJakartaSans">
              <Suspense fallback={<Loading />}>
                <AIServicesSection />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Company Values Section */}
          <AnimatedSection className="bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="font-plusJakartaSans text-primary">
              <Suspense fallback={<Loading />}>
                <CompanyValues />
              </Suspense>
            </div>
          </AnimatedSection>

          {/* Pricing Section */}
          <div id="pricing" className="bg-background">
            <div className="font-plusJakartaSans text-primary">
              <Suspense fallback={<Loading />}>
                <PricingSection />
              </Suspense>
            </div>
          </div>

          {/* Stats Section */}
          <div className="font-plusJakartaSans text-primary">
            <Suspense fallback={<Loading />}>
              <StatsSection />
            </Suspense>
          </div>

          {/* Partners Section */}
          <AnimatedSection className="relative bg-background">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-primary/3 to-transparent" />
            <div className="font-plusJakartaSans relative z-10 text-primary">
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


import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '@/components/sections/HeroSection';
import { AnimatedSection } from '@/components/sections/home/AnimatedSection';
import BackgroundElements from '@/components/home/BackgroundElements';
import HeroBackground from '@/components/home/HeroBackground';
import ErrorFallback from '@/components/home/ErrorFallback';
import Loading from '@/components/ui/loading';

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

  try {
    return (
      <div className="relative bg-[--background]">
        <BackgroundElements />

        {/* Content Container */}
        <div className="relative">
          {/* Hero Section with Updated Color Accents */}
          <section className="relative overflow-hidden">
            <HeroBackground />
            <HeroSection
              heroImage={{
                src: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
                alt: 'Digital Solutions'
              }}
              primaryButton={{
                text: "Get Started",
                onClick: handleGetStarted
              }}
              secondaryButton={{
                text: "Learn More",
                onClick: handleLearnMore
              }}
            />
          </section>

          {/* Features Section */}
          <AnimatedSection className="bg-gradient-to-b from-[--background] via-[#646CFF]/5 to-[--background]">
            <Suspense fallback={<Loading />}>
              <Features />
            </Suspense>
          </AnimatedSection>

          {/* Tech Stack Section */}
          <AnimatedSection className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#535BF2]/5 to-[#747BFF]/5" />
            <Suspense fallback={<Loading />}>
              <TechStack />
            </Suspense>
          </AnimatedSection>

          {/* Services Section */}
          <AnimatedSection className="bg-gradient-to-b from-[--background] via-[#646CFF]/5 to-[--background]">
            <Suspense fallback={<Loading />}>
              <ServicesSection />
            </Suspense>
          </AnimatedSection>

          {/* Company Values Section */}
          <AnimatedSection className="bg-gradient-to-b from-[--background] via-[#646CFF]/5 to-[--background]">
            <Suspense fallback={<Loading />}>
              <CompanyValues />
            </Suspense>
          </AnimatedSection>

          {/* Pricing Section */}
          <div id="pricing" className="bg-white">
            <Suspense fallback={<Loading />}>
              <PricingSection />
            </Suspense>
          </div>

          {/* Stats Section */}
          <Suspense fallback={<Loading />}>
            <StatsSection />
          </Suspense>

          {/* Partners Section */}
          <AnimatedSection className="relative bg-[--background]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#646CFF]/5 to-transparent" />
            <Suspense fallback={<Loading />}>
              <PartnersSection
                title="Trusted by Industry Leaders"
                description="We collaborate with forward-thinking companies to deliver exceptional solutions."
              />
            </Suspense>
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

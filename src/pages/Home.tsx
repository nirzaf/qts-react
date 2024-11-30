import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '@/components/sections/HeroSection';
import Features from '@/components/sections/features/Features';
import { TechStack } from '@/components/sections/TechStack';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { AnimatedSection } from '@/components/sections/home/AnimatedSection';
import { CompanyValues } from '@/components/sections/home/CompanyValues';
import BackgroundElements from '@/components/home/BackgroundElements';
import HeroBackground from '@/components/home/HeroBackground';
import ErrorFallback from '@/components/home/ErrorFallback';

/**
 * Home page component displaying various sections about Quadrate Tech Solutions
 * Features:
 * - Smooth animations and transitions
 * - Responsive design
 * - Section-level error handling
 * - Modular component architecture
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
            <Features />
          </AnimatedSection>

          {/* Tech Stack Section */}
          <AnimatedSection className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#535BF2]/5 to-[#747BFF]/5" />
            <TechStack />
          </AnimatedSection>

          {/* Services Section */}
          <AnimatedSection className="bg-gradient-to-b from-[--background] via-[#646CFF]/5 to-[--background]">
            <ServicesSection />
          </AnimatedSection>

          {/* Company Values Section */}
          <AnimatedSection className="bg-gradient-to-b from-[--background] via-[#646CFF]/5 to-[--background]">
            <CompanyValues />
          </AnimatedSection>

          {/* Pricing Section */}
          <div id="pricing" className="bg-white">
            <PricingSection />
          </div>

          {/* Stats Section */}
          <StatsSection />

          {/* Partners Section */}
          <AnimatedSection className="relative bg-[--background]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#646CFF]/5 to-transparent" />
            <PartnersSection
              title="Trusted by Industry Leaders"
              description="We collaborate with forward-thinking companies to deliver exceptional solutions."
            />
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

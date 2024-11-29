import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import Features from '@/components/sections/features/Features';
import { TechStack } from '@/components/sections/TechStack';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { pricingPlans } from '@/data/home-page/pricing';
import { AnimatedSection } from '@/components/sections/home/AnimatedSection';
import { useNavigate } from 'react-router-dom';

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

  try {
    return (
      <div className="relative bg-white">
        {/* Global Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#0607E1]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#00045C]/10 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Hero Section with Federal Blue & Chrysler Blue Accents */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00045C]/30 to-transparent" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1.5 }}
                className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[#0607E1]/20 blur-3xl"
              />
            </div>
            <HeroSection
              backgroundImage="https://ik.imagekit.io/quadrate/assets/img/hero-bg.png?updatedAt=1718024113863"
              heroImage={{
                src: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
                alt: 'Digital Solutions'
              }}
              primaryButton={{
                text: 'Get Started',
                onClick: () => navigate('/contact'),
              }}
              secondaryButton={{
                text: 'Learn More',
                onClick: () => navigate('/about'),
              }}
            />
          </section>

          {/* Features Section */}
          <AnimatedSection className="bg-gradient-to-b from-white via-[#0607E1]/5 to-white">
            <Features />
          </AnimatedSection>

          {/* Tech Stack Section */}
          <AnimatedSection className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00045C]/10 to-transparent opacity-50" />
            <TechStack />
          </AnimatedSection>

          {/* Services Section */}
          <AnimatedSection className="bg-gradient-to-b from-white via-[#0607E1]/5 to-white">
            <ServicesSection />
          </AnimatedSection>

          {/* Pricing Section */}
          <AnimatedSection>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00045C]/10 via-transparent to-[#0607E1]/5" />
              <PricingSection plans={pricingPlans} />
            </div>
          </AnimatedSection>

          {/* Stats Section */}
          <StatsSection />

          {/* Partners Section */}
          <AnimatedSection className="relative bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0607E1]/5 to-transparent" />
            <PartnersSection
              title="Trusted by Industry Leaders"
              description="Join the ranks of forward-thinking companies that trust Quadrate Tech Solutions for their digital transformation journey."
            />
          </AnimatedSection>
        </div>

        {/* Footer Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#00045C]/10 to-transparent" />
      </div>
    );
  } catch (error) {
    console.error('Error rendering Home page:', error);
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-[#EF4444]">Something went wrong</h2>
        <p className="mt-2 text-[#71717A]">Please refresh the page or contact support if the problem persists.</p>
      </div>
    );
  }
};

export default Home;

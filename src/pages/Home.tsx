import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { Features } from '@/components/sections/features/Features';
import { TechStack } from '@/components/sections/TechStack';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { pricingPlans } from '@/data/home-page/pricing';
import { AnimatedSection } from '@/components/AnimatedSection';
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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Error boundary could be added here for section-level error handling
  try {
    return (
      <div className="relative bg-white">
        {/* Global Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#98CCF8]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#98CCF8]/5 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Hero Section with Sky Blue Accents */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#98CCF8]/20 to-transparent" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[#98CCF8]/10 blur-3xl"
              />
            </div>
            <HeroSection
              data={{
                backgroundImage: '/images/hero-bg.jpg',
                heroImage: {
                  src: 'https://ik.imagekit.io/quadrate/assets/BsRWJ-wWSr2cVcZUVLyq0A.webp?updatedAt=1732462181074',
                  alt: 'Quadrate Tech Solutions',
                },
                primaryButton: {
                  text: 'Get Started',
                  onClick: () => {
                    // Navigate to contact page
                    navigate('/contact');
                  },
                },
                secondaryButton: {
                  text: 'Learn More',
                  onClick: () => {
                    // Navigate to about page
                    navigate('/about');
                  },
                },
              }}
            />
          </section>

          {/* Features Section */}
          <AnimatedSection className="bg-gradient-to-b from-white via-[#98CCF8]/5 to-white">
            <Features />
          </AnimatedSection>

          {/* Tech Stack Section */}
          <AnimatedSection className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#98CCF8]/10 to-transparent opacity-50" />
            <TechStack />
          </AnimatedSection>

          {/* Services Section */}
          <AnimatedSection className="bg-gradient-to-b from-white via-[#98CCF8]/5 to-white">
            <ServicesSection />
          </AnimatedSection>

          {/* Pricing Section */}
          <AnimatedSection>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#98CCF8]/10 via-transparent to-[#98CCF8]/5" />
              <PricingSection plans={pricingPlans} />
            </div>
          </AnimatedSection>

          {/* Stats Section */}
          <StatsSection />

          {/* Partners Section */}
          <AnimatedSection className="relative bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-[#98CCF8]/5 to-transparent" />
            <PartnersSection
              title="Trusted by Industry Leaders"
              description="Join the ranks of forward-thinking companies that trust Quadrate Tech Solutions for their digital transformation journey."
            />
          </AnimatedSection>
        </div>

        {/* Footer Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#98CCF8]/10 to-transparent" />
      </div>
    );
  } catch (error) {
    console.error('Error rendering Home page:', error);
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
        <p className="mt-2">Please refresh the page or contact support if the problem persists.</p>
      </div>
    );
  }
};

export default Home;

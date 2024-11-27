import React from 'react';
import { motion } from 'framer-motion';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { Features } from '@/components/sections/features/Features';
import { TechStack } from '@/components/sections/TechStack';
import { AnimatedSection } from '@/components/sections/home/AnimatedSection';
import { AnimatedHero } from '@/components/sections/home/AnimatedHero';
import { faqs } from '@/data/home-page/faqs';
import { pricingPlans } from '@/data/home-page/pricing';

/**
 * Home page component displaying various sections about Quadrate Tech Solutions
 * Features:
 * - Smooth animations and transitions
 * - Responsive design
 * - Section-level error handling
 * - Modular component architecture
 */
const Home: React.FC = () => {
  // Error boundary could be added here for section-level error handling
  try {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatedHero
          title={
            <>
              We build <span className="text-primary">World Class</span>{' '}
              <br className="hidden sm:inline" />
              Software Solutions
            </>
          }
          description="Quadrate Tech Solutions: Delivering innovative software for every business need with cutting-edge technology and unparalleled expertise."
          data={{
            primaryButton: {
              text: "Get Started",
              href: "/contact"
            },
            secondaryButton: {
              text: "View Services",
              href: "/services"
            },
            rating: {
              score: 4.9,
              count: "3.2k+"
            }
          }}
        />

        <Features />
        
        <TechStack />

        <ServicesSection />

        <AnimatedSection>
          <PricingSection plans={pricingPlans} />
        </AnimatedSection>

        <TestimonialsSection />

        <StatsSection />

        <PartnersSection
          title="Trusted by Industry Leaders"
          description="Join the ranks of forward-thinking companies that trust Quadrate Tech Solutions for their digital transformation journey."
        />

        <AnimatedSection>
          <FaqSection
            title="Frequently Asked Questions"
            faqs={faqs}
          />
        </AnimatedSection>

        <ContactCTA
          title="Let's Discuss Your Requirements"
          description="We offer high-class enterprise-level applications for your business, It can be a mobile app, web-based app, or enterprise software. We will build it!"
          buttonText="Schedule a Call"
          buttonUrl="https://quadratetechsolutions.zohobookings.com/portal-embed#/quadratetechsolutions"
        />
      </motion.div>
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

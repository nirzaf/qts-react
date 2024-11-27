import React from 'react';
import { pricingPlans } from '@/data/pricingData';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingCard from '@/components/pricing/PricingCard';
import CustomSolutionCard from '@/components/pricing/CustomSolutionCard';

/**
 * Pricing page component that displays different pricing plans and custom solutions
 * Uses modular components for better organization and maintainability
 * Implements animations using Framer Motion for enhanced user experience
 */
const Pricing: React.FC = () => {
  return (
    <div className="relative">
      <PricingHeader />

      <section className="container py-12 sm:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </section>

      <section className="container py-12 sm:py-16">
        <CustomSolutionCard />
      </section>
    </div>
  );
};

export default Pricing;

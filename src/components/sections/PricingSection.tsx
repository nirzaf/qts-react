import React, { useState, useCallback } from 'react';
import { PricingPlan } from '@/data/pricingData';
import { PricingHeader } from '@/components/pricing/sections/PricingHeader';
import { PricingCardContainer } from '@/components/pricing/sections/PricingCardContainer';

interface PricingSectionProps {
  plans: PricingPlan[];
}

export const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  // Map the plans to include the correct button text and link
  const mappedPlans = plans.map(plan => ({
    ...plan,
    ctaText: plan.popular ? 'Get Started' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started',
    ctaLink: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  }));

  const handleHoverStart = useCallback((index: number) => {
    setHoveredPlan(index);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setHoveredPlan(null);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <PricingHeader />
        <PricingCardContainer
          plans={mappedPlans}
          hoveredPlan={hoveredPlan}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        />
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import CardsSection from '@/components/sections/cards/CardsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection
        primaryButton={{
          text: "Schedule Consultation",
          onClick: () => (window.location.href = '/contact'),
        }}
        secondaryButton={{
          text: "View Case Studies",
          onClick: () => (window.location.href = '/case-studies'),
        }}
      />
      <div className="space-y-16 lg:space-y-24">
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <CardsSection />
      </div>
    </main>
  );
}

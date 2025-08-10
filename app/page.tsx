'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import CardsSection from '@/components/sections/cards/CardsSection';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection
        primaryButton={{
          text: "Get Started",
          onClick: () => window.location.href = '/contact'
        }}
        secondaryButton={{
          text: "Watch Demo",
          onClick: () => window.location.href = '/services'
        }}
      />
      <div className="space-y-16 lg:space-y-24">
        <ServicesSection />
        <StatsSection />
        <CardsSection />
      </div>
    </main>
  );
}

import React from 'react';
import { Building2, Rocket } from 'lucide-react';
import { ValueCard } from './ValueCard';

export const ValuesSection: React.FC = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <ValueCard
        icon={Building2}
        title="Our Mission"
        description="To empower businesses with innovative software solutions that drive growth and efficiency. We strive to deliver high-quality, affordable technology services."
      />
      <ValueCard
        icon={Rocket}
        title="Our Vision"
        description="To be the leading provider of comprehensive software solutions in Sri Lanka, recognized for our excellence in service and innovation."
      />
    </div>
  );
}; 
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

export const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="relative flex h-full flex-col p-6">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    {plan.price === 'Custom' ? (
                      <span className="text-4xl font-bold">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="ml-1 text-sm text-muted-foreground">/month</span>
                      </>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 space-y-4 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-3 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    className="w-full"
                    variant={plan.name === 'Professional' ? 'default' : 'outline'}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Need a custom plan?{' '}
            <a href="/contact" className="font-semibold text-primary hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

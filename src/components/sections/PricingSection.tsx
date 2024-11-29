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
  popular?: boolean;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

export const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  return (
    <section className="bg-[#FFFFFF] py-16 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#000000]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-[#000000]/70 max-w-2xl mx-auto">
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
              <Card className={`relative flex h-full flex-col p-8 hover:shadow-lg transition-all duration-300 border-[#000000]/10 bg-[#FFFFFF] ${
                plan.popular ? 'border-[#0607E1]/20 shadow-lg ring-1 ring-[#0607E1]/10' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 right-8">
                    <span className="inline-flex items-center rounded-full bg-[#000000] px-4 py-1 text-xs font-medium text-[#FFFFFF] shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#000000]">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    {plan.price === 'Custom' ? (
                      <span className="text-5xl font-bold text-[#000000]">Custom</span>
                    ) : (
                      <>
                        <span className="text-5xl font-bold text-[#000000]">${plan.price}</span>
                        <span className="ml-2 text-lg text-[#000000]/70">/month</span>
                      </>
                    )}
                  </div>
                  <p className="mt-4 text-[#000000]/70">
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-3 h-5 w-5 text-[#0607E1]/80" />
                      <span className="text-[#000000]/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-[#000000] hover:bg-[#0607E1]/10 text-[#FFFFFF]' 
                        : 'border-[#000000]/20 text-[#000000] hover:bg-[#0607E1]/5'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
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
          <p className="text-[#000000]/70">
            Need a custom plan?{' '}
            <a href="/contact" className="font-semibold text-[#000000] hover:text-[#0607E1] underline-offset-4 hover:underline transition-colors">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

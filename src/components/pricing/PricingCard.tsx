import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';
import { type PricingPlan } from '@/data/pricingData';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`relative h-full overflow-hidden p-8 ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
        {plan.popular && (
          <Badge className="absolute right-4 top-4 bg-primary hover:bg-primary">
            Most Popular
          </Badge>
        )}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-2xl">{plan.name}</h3>
            <p className="text-muted-foreground mt-2">{plan.description}</p>
          </div>
          <div className="space-y-2">
            <span className="text-4xl font-bold">
              {plan.price === 'Custom' ? 'Custom' : `LKR ${plan.price}`}
            </span>
            {plan.price !== 'Custom' && (
              <span className="text-muted-foreground ml-2">one-time</span>
            )}
          </div>
          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button 
            size="lg" 
            className="w-full"
            variant={plan.popular ? "default" : "outline"}
            asChild
          >
            <a href={plan.ctaLink}>
              {plan.ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default PricingCard;

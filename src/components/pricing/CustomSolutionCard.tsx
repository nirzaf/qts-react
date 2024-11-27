import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const CustomSolutionCard: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <Card className="p-8 bg-muted/50">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-6">
          Contact us for a personalized quote tailored to your specific requirements. Our team will work with you to create the perfect solution for your business.
        </p>
        <Button size="lg" asChild>
          <a href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </Card>
    </motion.div>
  );
};

export default CustomSolutionCard;

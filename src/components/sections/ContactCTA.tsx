import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface ContactCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  title,
  description,
  buttonText,
  buttonUrl,
}) => {
  return (
    <section className="relative overflow-hidden bg-primary/5 py-16 sm:py-24">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-[url('https://ik.imagekit.io/quadrate/assets/img/cta-bg.png?updatedAt=1718024113822')] bg-cover bg-center opacity-5"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Button
              size="lg"
              className="group"
              onClick={() => window.open(buttonUrl, '_blank')}
            >
              <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              {buttonText}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full bg-primary/10"
                  />
                ))}
              </div>
              <span className="ml-3 text-sm text-muted-foreground">
                Join 100+ businesses already growing
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Building2, Rocket } from 'lucide-react';

export const AboutContent: React.FC = () => {
  return (
    <section className="container py-12 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2009 and headquartered in Kandy, Sri Lanka, Quadrate Tech Solutions has established itself as a prominent player in the software development industry. We specialize in creating custom software solutions, including mobile apps, web-based applications, and enterprise software systems.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-6">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative software solutions that drive growth and efficiency. We strive to deliver high-quality, affordable technology services.
              </p>
            </Card>
            <Card className="p-6">
              <Rocket className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading provider of comprehensive software solutions in Sri Lanka, recognized for our excellence in service and innovation.
              </p>
            </Card>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://ik.imagekit.io/quadrate/tr:w-800/assets/img/about.jpg"
            alt="About Quadrate Tech"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/80 to-background/0" />
        </motion.div>
      </div>
    </section>
  );
};

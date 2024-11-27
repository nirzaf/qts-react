import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Globe, LineChart, Smartphone, Sparkles, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business requirements.',
    icon: Code2,
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications that drive engagement.',
    icon: Globe,
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence.',
    icon: LineChart,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging digital experiences.',
    icon: Sparkles,
  },
  {
    title: 'Business Process Automation',
    description: 'Streamline operations with intelligent automation solutions.',
    icon: Workflow,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="bg-background py-8 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive Digital Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From custom software development to digital marketing, we provide end-to-end solutions
              to help your business thrive in the digital age.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden">
                  <div className="relative space-y-4 p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <Button variant="ghost" className="mt-4">
                      Learn More
                      <span className="ml-2">→</span>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 text-center">
          <Button size="lg" asChild>
            <a href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions">
              Book a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

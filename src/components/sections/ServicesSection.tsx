import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Globe, LineChart, Smartphone, Sparkles, Workflow, ArrowRight } from 'lucide-react';

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
    <section className="relative overflow-hidden bg-[#FFFFFF] py-8">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#000000]/2" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-[#000000]/2 rounded-full blur-2xl"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-8"
        >
          {/* Main Title with Animation */}
          <motion.div 
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#000000] mb-2 relative">
              <span>Everything you need to</span>
              <div className="relative inline-block ml-2">
                <span className="relative z-10">scale your business</span>
                <motion.div
                  className="absolute bottom-0 left-0 h-[6px] bg-[#0607E1]/5 w-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </div>
            </h2>
          </motion.div>

          {/* Subtitle with Fade Animation */}
          <motion.p 
            className="text-lg text-[#000000]/70 mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From custom software development to digital marketing, we provide end-to-end solutions
            to help your business thrive in the digital age.
          </motion.p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <motion.div
                className="relative overflow-hidden rounded-xl bg-[#FFFFFF] p-6 shadow-sm border border-[#000000]/5 hover:border-[#000000]/10 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#000000]/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Icon Container */}
                <motion.div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFFFFF] shadow-sm border border-[#000000]/5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <service.icon className="h-6 w-6 text-[#000000]" />
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="mb-1.5 text-lg font-semibold text-[#000000]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-[#000000]/70 text-sm leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {service.description}
                </motion.p>

                {/* Learn More Link */}
                <motion.div 
                  className="mt-3 inline-flex items-center gap-1 text-sm text-[#000000] group-hover:text-[#0607E1] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="font-medium">Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Blue Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0607E1]/2" />

      <div className="mx-auto mt-12 text-center">
        <Button 
          size="lg" 
          className="bg-[#0607E1] hover:bg-[#0607E1]/90 text-[#FFFFFF] transition-all duration-300"
        >
          <a href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions">
            Book a Consultation
          </a>
        </Button>
      </div>
    </section>
  );
};

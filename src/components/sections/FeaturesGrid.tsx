import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe2, Layers, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Custom Development",
    description: "Tailored solutions built with cutting-edge technology"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security for your business applications"
  },
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: "Global Reach",
    description: "Solutions that scale across borders and cultures"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Optimized performance for seamless user experience"
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Scalable Architecture",
    description: "Built to grow with your business needs"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI Integration",
    description: "Smart solutions powered by artificial intelligence"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Cutting-Edge Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover why leading businesses choose our innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative p-8 rounded-3xl border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
                <div className="inline-block p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

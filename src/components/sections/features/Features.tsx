import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Rocket, 
  Shield, 
  Zap,
  Cloud,
  Users
} from 'lucide-react';

const features = [
  {
    title: "Modern Tech Stack",
    description: "Built with cutting-edge technologies including React, .NET Core, and cloud-native solutions.",
    icon: Code2,
  },
  {
    title: "Rapid Development",
    description: "Accelerated development cycles with proven methodologies and expert developers.",
    icon: Rocket,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security measures and compliance with international standards.",
    icon: Shield,
  },
  {
    title: "High Performance",
    description: "Optimized for speed and efficiency, ensuring smooth user experiences.",
    icon: Zap,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure with AWS, Azure, and Google Cloud Platform.",
    icon: Cloud,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services.",
    icon: Users,
  }
];

export const Features: React.FC = () => {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl font-bold tracking-tight">
          Cutting-Edge Features
        </h2>
        <p className="text-lg text-muted-foreground max-w-[85%] mx-auto">
          Discover why leading businesses choose our innovative solutions
        </p>
      </motion.div>

      <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative h-full p-6 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

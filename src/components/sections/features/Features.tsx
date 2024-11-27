import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FiCode, FiLayers, FiShield, FiSmartphone, FiZap, FiGlobe } from 'react-icons/fi';

interface Feature {
  icon: IconType;
  title: string;
  description: string;
  delay: number;
}

const features: Feature[] = [
  {
    icon: FiCode,
    title: "Modern Development",
    description: "Cutting-edge tech stack with React, TypeScript, and modern tooling",
    delay: 0.2
  },
  {
    icon: FiLayers,
    title: "Scalable Architecture",
    description: "Built with scalability in mind using best practices and design patterns",
    delay: 0.3
  },
  {
    icon: FiShield,
    title: "Enterprise Security",
    description: "Advanced security measures to protect your business data",
    delay: 0.4
  },
  {
    icon: FiSmartphone,
    title: "Mobile First",
    description: "Responsive design that works seamlessly across all devices",
    delay: 0.5
  },
  {
    icon: FiZap,
    title: "High Performance",
    description: "Optimized for speed and efficiency with modern web standards",
    delay: 0.6
  },
  {
    icon: FiGlobe,
    title: "Global Scale",
    description: "Ready for international deployment with i18n support",
    delay: 0.7
  }
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: feature.delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
    >
      <div className="relative mb-6 group">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#040BAB]/20 to-[#373FEC]/20 rounded-xl blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Icon Container with gradient */}
        <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#040BAB] to-[#373FEC] group-hover:from-[#373FEC] group-hover:to-[#040BAB] transition-all duration-300">
          <feature.icon className="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      <motion.h3 
        className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#040BAB] to-[#373FEC] bg-clip-text text-transparent"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {feature.title}
      </motion.h3>
      
      <p className="text-[#768EB4] text-lg leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#ECF1F5] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(4, 11, 171, 0.08), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(55, 63, 236, 0.08), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#040BAB] via-[#373FEC] to-[#0E0BEE] bg-clip-text text-transparent">
              Cutting-Edge Features
            </span>
          </h2>
          <p className="text-xl text-[#768EB4] max-w-2xl mx-auto">
            Discover the powerful capabilities that drive innovation and excellence in every project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

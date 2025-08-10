import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Globe,
  LineChart,
  Network,
  Mail,
  Workflow,
  ArrowRight,
  Brain,
  Bot,
  Cpu,
  Eye,
  MessageSquare,
  Zap
} from 'lucide-react';

// Enhanced AnimatedHeading component
const AnimatedHeading = ({ text, className, id }: { text: string; className?: string; id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.h2
      ref={ref}
      id={id}
      className={`text-fluid-3xl lg:text-fluid-4xl font-bold text-center text-gray-900 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

// Define the structure for each service item
interface Service {
  title: string;
  description: string;
  icon: React.ElementType; // Use React.ElementType for component types
}

// Array of service objects
const services: Service[] = [
  // AI Services - Featured prominently
  {
    title: 'AI Strategy & Consulting',
    description: 'Strategic guidance for AI adoption, readiness assessment, and technology roadmap development.',
    icon: Brain,
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Custom ML models for predictive analytics, recommendation engines, and fraud detection.',
    icon: Cpu,
  },
  {
    title: 'Computer Vision',
    description: 'Image recognition, object detection, facial recognition, and video analysis solutions.',
    icon: Eye,
  },
  {
    title: 'Natural Language Processing',
    description: 'Build chatbots, virtual assistants, text analysis, and language translation services.',
    icon: MessageSquare,
  },
  {
    title: 'Generative AI Solutions',
    description: 'Content generation, code generation, and sophisticated conversational AI agents.',
    icon: Bot,
  },
  {
    title: 'AI Integration Services',
    description: 'Seamlessly integrate AI capabilities into your existing software and workflows.',
    icon: Zap,
  },

  // Traditional Services
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
    title: 'IT Outsourcing',
    description: 'Comprehensive IT support and management services for your business needs.',
    icon: Network,
  },
  {
      title: 'Business Email',
      description: 'Professional email solutions for secure and reliable business communication.',
      icon: Mail,
  },
  {
    title: 'Business Process Automation',
    description: 'Streamline operations with intelligent automation solutions.',
    icon: Workflow,
  },
];

// Define floating animation using Framer Motion's animate prop

// Framer Motion Variants for the icon's 2D effect (Simplified)
const iconVariants = {
  initial: {
    scale: 1,
    rotate: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
  },
  hover: {
    scale: 1.15,  // Increased scale slightly for visibility
    rotate: -8,   // Simple rotation
    transition: { type: 'spring' as const, stiffness: 300, damping: 15 }
  }
};

// ServicesSection Component
export const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="services-heading"
      id="services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.header
          className="mb-12 lg:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedHeading
            text="Our Services"
            className="mb-4"
            id="services-heading"
          />
          <motion.p
            className="text-fluid-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From AI-powered solutions to custom software development, we deliver cutting-edge technology services that transform your business and drive growth.
          </motion.p>
        </motion.header>

        {/* Enhanced Responsive Grid */}
        <motion.ul
          className="mx-auto grid max-w-7xl gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 list-none p-0"
          aria-label="Services list"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full"
            >
              <motion.article
                className="group relative h-full"
                aria-labelledby={`service-title-${index}`}
              >
                {/* Enhanced Card Container */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-white p-6 lg:p-8 shadow-lg border border-gray-200/50 group-hover:shadow-xl group-hover:border-[#0607E1]/30 transition-all duration-300 ease-in-out h-full w-full flex flex-col items-center justify-start text-center touch-target"
                // Removed style={{ transformStyle: 'preserve-3d' }}
                // Add subtle card lift separate from icon pop
                variants={{
                  initial: { scale: 1, y: 0 },
                  hover: { scale: 1.02, y: -5 }
                }}
                 transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Enhanced Icon Container */}
                <div className="w-full flex justify-center items-center py-2 mb-4">
                  <motion.div
                    className="flex h-20 w-20 lg:h-24 lg:w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0607E1]/5 to-[#4D0AFF]/5 shadow-md border border-[#0607E1]/20 group-hover:shadow-lg group-hover:from-[#0607E1]/10 group-hover:to-[#4D0AFF]/10 transition-all duration-300 ease-in-out"
                    variants={iconVariants}
                    animate={{
                      y: [0, -8, 0],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse" as const,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <service.icon className="h-10 w-10 lg:h-12 lg:w-12 text-[#0607E1] group-hover:text-[#4D0AFF] transition-colors duration-300" />
                  </motion.div>
                </div>

                {/* Enhanced Content Section */}
                <div className="flex-grow space-y-4">
                  {/* Service Title */}
                  <h3
                    id={`service-title-${index}`}
                    className="text-fluid-lg lg:text-fluid-xl font-bold text-gray-900 group-hover:text-[#0607E1] transition-colors duration-300"
                  >
                    {service.title}
                  </h3>
                  {/* Service Description */}
                  <p className="text-fluid-sm lg:text-fluid-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Enhanced Learn More Link */}
                <motion.div
                  className="mt-6 inline-flex items-center gap-2 text-fluid-sm font-semibold text-[#0607E1] group-hover:text-[#4D0AFF] transition-colors duration-300 cursor-pointer touch-target"
                  whileHover={{ x: 8, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </motion.div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0607E1]/5 to-[#4D0AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
              </motion.article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ServicesSection;

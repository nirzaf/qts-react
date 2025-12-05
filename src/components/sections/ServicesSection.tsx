import React from 'react';
import { motion, Variants } from 'framer-motion';
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

// Placeholder for AnimatedHeading - Replace with your actual component import
const AnimatedHeading = ({ text, className, id }: { text: string; className?: string; id?: string }) => (
  <h2 id={id} className={`text-3xl font-bold text-center text-foreground ${className}`}>
    {text}
  </h2>
);

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
const iconVariants: Variants = {
  initial: {
    scale: 1,
    rotate: 0
  },
  hover: {
    scale: 1.15,  // Increased scale slightly for visibility
    rotate: -8   // Simple rotation
  }
};

// ServicesSection Component
export const ServicesSection: React.FC = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-background to-muted"
      aria-labelledby="services-heading"
      id="services"
    >
      <div className="container mx-auto px-4">
        {/* Animated Heading Component */}
        <header className="mb-12">
          <AnimatedHeading
            text="Our Services"
            className=""
            id="services-heading"
          />
        </header>
        {/* Grid for Service Cards */}
        <ul className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center list-none p-0" aria-label="Services list">
          {services.map((service, index) => (
            // Card Item - Removed perspective style
            <li key={service.title}>
              <motion.article
                initial="initial" // Set initial variant state for children
                whileHover="hover" // Set hover variant state for children
                viewport={{ once: true }} // Keep viewport setting for entrance animation
                transition={{ duration: 0.5, delay: index * 0.1 }} // Entrance transition
                className="group relative" // Group class still useful for non-transform hover effects
                aria-labelledby={`service-title-${index}`}
              >
                {/* Card Container - Removed transformStyle */}
                <motion.div
                  className="relative overflow-hidden rounded-xl bg-card p-6 shadow-lg border border-border group-hover:shadow-xl group-hover:border-primary/30 transition-all duration-300 ease-in-out h-full w-full flex flex-col items-center justify-start text-center"
                  // Removed style={{ transformStyle: 'preserve-3d' }}
                  // Add subtle card lift separate from icon pop
                  variants={{
                    initial: { scale: 1, y: 0 },
                    hover: { scale: 1.02, y: -5 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Icon Container - Using simplified 2D variants */}
                  <div className="w-full flex justify-center items-center py-2">
                    <motion.div
                      className="mb-6 flex h-24 w-24 items-center justify-center rounded-lg bg-card shadow-md border border-primary/20 group-hover:shadow-lg group-hover:bg-primary/10 transition-all duration-300 ease-in-out" // Increased size and centered with mx-auto
                      variants={iconVariants} // Apply the simplified 2D variants
                      animate={{
                        y: [0, -10, 0],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut" as const
                        }
                      }}
                    >
                      {/* Icon Component */}
                      <service.icon className="h-12 w-12 text-[#0607E1] transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Content Section - Removed translateZ style */}
                  <div className="flex-grow">
                    {/* Service Title */}
                    <h3
                      id={`service-title-${index}`}
                      className="mb-2 text-lg font-semibold text-foreground"
                    >
                      {service.title}
                    </h3>
                    {/* Service Description */}
                    <p
                      className="text-muted-foreground text-sm leading-relaxed mb-4"
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Link - Removed translateZ style */}
                  <motion.div
                    className="mt-auto inline-flex items-center gap-1 text-sm text-[#0607E1]/80 group-hover:text-[#0607E1] transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </motion.div>
                </motion.div>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;

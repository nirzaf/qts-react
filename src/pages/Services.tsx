import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, LineChart, Network, Mail, Workflow } from 'lucide-react';
import PageLayout from '@/layouts/PageLayout';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business requirements.',
    icon: Code2,
    gradient: 'from-[#0607E1]/20 to-[#0607E1]/5',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications that drive engagement.',
    icon: Globe,
    gradient: 'from-[#0607E1]/25 to-[#0607E1]/10',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence.',
    icon: LineChart,
    gradient: 'from-[#0607E1]/30 to-[#0607E1]/15',
  },
  {
    title: 'IT Outsourcing',
    description: 'Comprehensive IT support and management services for your business needs.',
    icon: Network,
    gradient: 'from-[#0607E1]/35 to-[#0607E1]/20',
  },
  {
    title: 'Business Email',
    description: 'Professional email solutions for secure and reliable business communication.',
    icon: Mail,
    gradient: 'from-[#0607E1]/40 to-[#0607E1]/25',
  },
  {
    title: 'Business Process Automation',
    description: 'Streamline operations with intelligent automation solutions.',
    icon: Workflow,
    gradient: 'from-[#0607E1]/45 to-[#0607E1]/30',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const ServicesPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-1/3 right-1/3 w-1/4 h-1/4 bg-gradient-to-bl from-[#0607E1]/5 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            className="absolute bottom-1/3 left-1/3 w-1/4 h-1/4 bg-gradient-to-tr from-[#0607E1]/5 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xl text-[#000000]/70 max-w-3xl mx-auto">
              Empowering your digital transformation with cutting-edge solutions and expert services
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover="hover"
                className="group relative h-full"
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl bg-white border border-[#0607E1]/10 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    className="relative mb-6 inline-flex"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="p-4 rounded-xl bg-[#0607E1]/5 group-hover:bg-[#0607E1]/10 transition-colors duration-300">
                      {React.createElement(service.icon, {
                        className: "w-8 h-8 text-[#0607E1]"
                      })}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3 text-[#000000] group-hover:text-[#0607E1] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#000000]/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#0607E1] text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
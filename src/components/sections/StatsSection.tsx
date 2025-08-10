'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Code2, Briefcase, Heart } from 'lucide-react';

const stats = [
  {
    name: 'Happy Clients',
    value: '100+',
    description: 'Worldwide clients',
    icon: Users,
    label: 'Happy Clients',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
  },
  {
    name: 'Projects Completed',
    value: '200+',
    description: 'Successful deliveries',
    icon: Code2,
    label: 'Projects Completed',
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
  },
  {
    name: 'Client Satisfaction',
    value: '98%',
    description: 'Happy customers',
    icon: Heart,
    label: 'Client Satisfaction Rate',
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100',
  },
  {
    name: 'Years Experience',
    value: '8+',
    description: 'In digital solutions',
    icon: Briefcase,
    label: 'Years Experience',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

const iconVariants = {
  initial: { scale: 0.8, rotate: -10 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10,
    },
  },
};

const StatsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 py-16 lg:py-24"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 right-1/3 w-1/4 h-1/4 bg-gradient-to-bl from-[#0607E1]/5 to-transparent rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-1/3 left-1/3 w-1/4 h-1/4 bg-gradient-to-tr from-[#0607E1]/5 to-transparent rounded-full"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-fluid-3xl lg:text-fluid-4xl font-bold mb-4 lg:mb-6 text-gray-900">
            Our Impact in Numbers
          </h2>
          <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Measurable results that speak for themselves and demonstrate our commitment to excellence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-6 lg:gap-8 grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Enhanced Card Container */}
              <div className="relative p-6 lg:p-8 rounded-2xl bg-white border border-gray-200/50 shadow-lg hover:shadow-xl hover:border-[#0607E1]/30 transition-all duration-300 text-center touch-target">
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                  
                  {/* Icon Container */}
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="relative mb-6 inline-flex"
                  >
                    {/* Icon Background */}
                    <div className="absolute inset-0 bg-[#0607E1]/10 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-[#0607E1]/5 group-hover:bg-[#0607E1]/10 transition-all duration-500">
                      {React.createElement(stat.icon, { 
                        className: "h-8 w-8 text-[#0607E1] transform group-hover:scale-110 transition-transform duration-500" 
                      })}
                    </div>
                  </motion.div>

                  {/* Stat Value with Floating Animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 bg-[#0607E1]/10 opacity-30 blur group-hover:opacity-40 transition-opacity duration-500" />
                    <h3 className="relative font-bold text-5xl mb-3 text-[#000000] transform group-hover:scale-110 transition-transform duration-500">
                      {stat.value}
                    </h3>
                  </motion.div>

                  {/* Stat Name with Underline */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="relative z-10"
                  >
                    <h4 className="text-xl font-semibold text-[#000000] mb-2 relative inline-block">
                      {stat.name}
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0607E1]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </h4>
                  </motion.div>

                  {/* Description with Fade-in */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-[#000000]/70 text-sm mt-2 leading-relaxed group-hover:text-[#000000] transition-colors duration-500"
                  >
                    {stat.description}
                  </motion.p>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

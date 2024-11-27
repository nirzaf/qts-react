import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, Award, Briefcase } from 'lucide-react';

const stats = [
  {
    name: 'Happy Clients',
    value: '100+',
    description: 'Satisfied customers worldwide',
    icon: Users,
    label: 'Happy Clients',
  },
  {
    name: 'Projects Completed',
    value: '250+',
    description: 'Successful project deliveries',
    icon: Code2,
    label: 'Projects Completed',
  },
  {
    name: 'Awards Won',
    value: '15+',
    description: 'Industry recognition',
    icon: Award,
    label: 'Awards Won',
  },
  {
    name: 'Years Experience',
    value: '5+',
    description: 'In digital solutions',
    icon: Briefcase,
    label: 'Years Experience',
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const StatsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-[#ECF1F5] via-[#98CCF8]/5 to-[#C0F0F9]/10 py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-1/4 h-1/4 bg-gradient-to-bl from-[#98CCF8]/15 via-[#A6ECFA]/10 to-transparent rounded-full transform rotate-30 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-1/4 h-1/4 bg-gradient-to-tr from-[#C0F0F9]/15 via-[#98CCF8]/10 to-transparent rounded-full transform -rotate-30 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-[#040BAB]">
            Our Impact in Numbers
          </h2>
          <p className="text-[#768EB4] text-lg max-w-2xl mx-auto">
            Measurable results that speak for themselves
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#98CCF8]/10 to-[#C0F0F9]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative p-8 rounded-3xl border border-[#768EB4]/10 bg-white/50 backdrop-blur-sm hover:border-[#5B7CCA]/30 transition-colors duration-300 text-center">
                <div className="font-bold text-4xl mb-2 bg-gradient-to-r from-[#5B7CCA] to-[#373FEC] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[#768EB4] font-medium">{stat.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

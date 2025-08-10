'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StorySection } from '@/components/about/sections/StorySection';
import { ValuesSection } from '@/components/about/sections/ValuesSection';
import { ImageSection } from '@/components/about/sections/ImageSection';

const containerVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const AboutContent: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container py-12 sm:py-16"
    >
      {/* Main Content Grid */}
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column - Story and Values */}
        <motion.div variants={itemVariants} className="space-y-12">
          <StorySection />
          <ValuesSection />
        </motion.div>
        
        {/* Right Column - Image */}
        <motion.div variants={itemVariants}>
          <ImageSection />
        </motion.div>
      </div>

      {/* Timeline Section */}
      <motion.div
        variants={itemVariants}
        className="mt-16 pt-16 border-t border-black/5"
      >
        <h2 className="text-3xl font-bold text-center text-[#000000] mb-12">Our Journey</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { year: '2019', title: 'Founded', description: 'Started with a vision to transform digital landscape' },
            { year: '2020', title: 'First Major Project', description: 'Successfully delivered enterprise-level solutions' },
            { year: '2021', title: 'Team Expansion', description: 'Grew our talented team of experts' }
          ].map((item) => (
            <motion.div
              key={item.year}
              variants={itemVariants}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-black/5 hover:border-[#0607E1]/20 transition-all duration-300"
            >
              <span className="text-[#0607E1] font-bold text-lg">{item.year}</span>
              <h3 className="text-xl font-semibold text-[#000000] mt-2">{item.title}</h3>
              <p className="text-[#000000]/70 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

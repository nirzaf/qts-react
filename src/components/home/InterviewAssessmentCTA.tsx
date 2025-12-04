'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const InterviewAssessmentCTA: React.FC = () => {
  const router = useRouter();

  const handleStartAssessment = () => {
    router.push('/interview-assessment');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Take Our Software Engineering Assessment
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Test your knowledge with our comprehensive software engineering interview assessment.
              The assessment covers key areas including software development lifecycle, data structures,
              architecture, testing, and version control.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartAssessment}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
              >
                Start Assessment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InterviewAssessmentCTA;

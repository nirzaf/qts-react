'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PartnersSectionProps {
  title?: string;
  description?: string;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({
  title = "Our Partners",
  description = "Trusted by leading companies worldwide"
}) => {
  const partners = [
    { name: 'Microsoft', logo: '/logos/microsoft.png' },
    { name: 'AWS', logo: '/logos/aws.png' },
    { name: 'Google Cloud', logo: '/logos/google-cloud.png' },
    { name: 'OpenAI', logo: '/logos/openai.png' },
    { name: 'TensorFlow', logo: '/logos/tensorflow.png' },
    { name: 'Docker', logo: '/logos/docker.png' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0607E1] to-[#4D0AFF] bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0607E1]/10 to-[#4D0AFF]/10 rounded-xl flex items-center justify-center mb-2 mx-auto">
                  <span className="text-2xl font-bold text-[#0607E1]">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Ready to join our network of successful partnerships?
          </p>
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-[#0607E1] text-white font-semibold rounded-full hover:bg-[#0607E1]/90 transition-colors duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
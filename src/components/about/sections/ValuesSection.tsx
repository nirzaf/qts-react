import React from 'react';
import { motion } from 'framer-motion';
import { ValuesContentProps, ValueItemProps } from '../types';

const defaultValues: ValueItemProps[] = [
  {
    title: "Innovation",
    description: "Pushing boundaries and embracing new technologies to deliver cutting-edge solutions."
  },
  {
    title: "Quality",
    description: "Maintaining the highest standards in every aspect of our work."
  },
  {
    title: "Partnership",
    description: "Building lasting relationships through trust and collaboration."
  }
];

export const ValuesSection: React.FC<ValuesContentProps> = ({
  className = '',
  variants,
  values = defaultValues
}) => {
  return (
    <motion.div
      variants={variants}
      className={`space-y-6 ${className}`}
    >
      <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
      <div className="grid gap-6">
        {values.map((value, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

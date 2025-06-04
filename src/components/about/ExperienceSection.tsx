import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Award, 
  Users, 
  CheckCircle, 
  Clock
} from 'lucide-react';

const stats = [
  {
    icon: Award,
    number: '5+',
    label: 'Years Experience',
    description: 'Delivering excellence in software solutions'
  },
  {
    icon: Users,
    number: '50+',
    label: 'Happy Clients',
    description: 'Trust us with their digital needs'
  },
  {
    icon: CheckCircle,
    number: '100+',
    label: 'Projects Completed',
    description: 'Successfully delivered on time'
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'Support',
    description: 'Always here when you need us'
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#ffffff] via-[#1d2f84]/5 to-[#ffffff]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#000000] mb-4">
            Our Experience
          </h2>
          <p className="text-lg text-[#000000]/70 max-w-2xl mx-auto">
            Years of dedication and commitment to delivering exceptional software solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border-black/5">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#1d2f84]" />
                    </div>
                    <div className="text-3xl font-bold text-[#000000] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-[#000000] mb-2">
                      {stat.label}
                    </div>
                    <p className="text-sm text-[#000000]/70 mt-auto">
                      {stat.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Cpu, Users } from 'lucide-react';

export const QuadrateAboutSection: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Building tailored solutions that perfectly match your business needs"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure for modern businesses"
    },
    {
      icon: Cpu,
      title: "Enterprise Applications",
      description: "Robust applications that streamline your business operations"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled developers and engineers committed to your success"
    }
  ];

  return (
    <div className="container py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="overflow-hidden">
            <motion.h2
              className="text-2xl md:text-3xl font-montserrat font-bold inline-block"
              initial={{ 
                x: -150,
                rotateX: -90,
                y: 30,
                opacity: 0
              }}
              animate={{ 
                x: 0,
                rotateX: 0,
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 1.5,
                ease: [0.23, 1, 0.32, 1],
                rotateX: {
                  duration: 1.5,
                  ease: [0.23, 1, 0.32, 1]
                },
                y: {
                  duration: 1.5,
                  ease: [0.23, 1, 0.32, 1]
                },
                opacity: { duration: 0.5 }
              }}
              style={{
                transformOrigin: "bottom",
                perspective: "800px",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden"
              }}
            >
              <span className="text-black inline-block">INNOVATIVE TECH SOLUTIONS</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              At <span className="font-semibold text-[#0607E1]">Quadrate Tech Solutions</span>, 
              we are passionate about transforming businesses through cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg text-gray-600"
          >
            <p>
              As a leading software development company, we specialize in creating 
              innovative solutions that drive digital transformation and business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <Icon className="h-6 w-6 text-[#0607E1] mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0607E1]/10 to-transparent rounded-lg" />
          <img 
            src="https://ik.imagekit.io/quadrate/assets/img/about.jpg?updatedAt=1718024112686" 
            alt="Quadrate Tech Solutions Team"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

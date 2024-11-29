import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaBrain } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SiMicrosoft } from 'react-icons/si';
import WhyChooseUs from "@/components/sections/WhyChooseUs";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  icon: React.ReactNode;
  link?: string;
}

const services: Service[] = [
  {
    id: 'consultation',
    title: 'IT Consultation',
    description: 'Strategic guidance for your digital transformation journey',
    image: 'https://ik.imagekit.io/quadrate/assets/img/features-2.png?updatedAt=1718024113386',
    color: '#0607E1',
    icon: <FaBrain className="w-8 h-8 text-[#0607E1]" />,
    link: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  },
  {
    id: 'business-mail',
    title: 'Business Mail Solutions',
    description: 'Professional email services at competitive prices',
    image: 'https://ik.imagekit.io/quadrate/assets/img/features.png?updatedAt=1718024113900',
    color: '#0A25C9',
    icon: <HiMail className="w-8 h-8 text-[#0A25C9]" />,
    link: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  },
  {
    id: 'microsoft365',
    title: 'Microsoft 365 Integration',
    description: 'Seamless business intelligence and productivity solutions',
    image: 'https://ik.imagekit.io/quadrate/assets/img/values-1.png?updatedAt=1718024118843',
    color: '#0B48D0',
    icon: <SiMicrosoft className="w-8 h-8 text-[#0B48D0]" />,
    link: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  }
];

const features = [
  { title: 'Fast', description: 'Expert solutions, delivered quickly' },
  { title: 'Precise', description: 'Tailored to your exact needs' },
  { title: 'Reliable', description: 'Consistent, dependable service' }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#0607E1]/5" />
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-[#FFFFFF] p-6 rounded-2xl shadow-lg mb-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/5 via-[#0A25C9]/5 to-[#0B48D0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h1 className="text-4xl md:text-5xl font-bold text-[#000000] relative z-10">
                Services
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-xl text-center"
            >
              <div className="inline-block bg-[#FFFFFF] px-6 py-3 rounded-full shadow-md">
                <p className="text-lg text-[#000000]/70 bg-gradient-to-r from-[#0607E1] via-[#0A25C9] to-[#0B48D0] bg-clip-text text-transparent">
                  Transforming businesses through innovative technology solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-[#FFFFFF] shadow-lg border border-[#000000]/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0607E1]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative p-8">
                  <div className="relative mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl mb-6 relative overflow-hidden"
                      style={{ backgroundColor: `${service.color}05` }}
                    >
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#000000] mb-4 group-hover:text-[#0607E1] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#000000]/70 mb-6 group-hover:text-[#000000]/80 transition-colors duration-300">
                    {service.description}
                  </p>
                  {service.link && (
                    <motion.a
                      href={service.link}
                      className="inline-flex items-center text-[#0607E1] hover:text-[#0607E1]/80 group-hover:translate-x-2 transition-transform duration-300"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0607E1]/5 via-[#0A25C9]/5 to-[#0B48D0]/5 opacity-50" />
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="inline-block bg-[#FFFFFF] px-8 py-4 rounded-2xl shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">Why Choose Us</h2>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center mb-16"
            >
              <p className="text-xl text-[#000000]/70 max-w-2xl mx-auto bg-[#FFFFFF] px-6 py-3 rounded-full shadow-md">
                We combine expertise with innovation to deliver exceptional results
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#FFFFFF] p-8 rounded-2xl shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0607E1]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <h3 className="text-2xl font-bold text-[#000000] mb-4 relative z-10 group-hover:text-[#0607E1] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#000000]/70 relative z-10 group-hover:text-[#000000]/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-[#FFFFFF] p-12 rounded-3xl shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0607E1]/5 via-[#0A25C9]/5 to-[#0B48D0]/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-[#000000]/70 mb-8">
                  Schedule a consultation with our experts and discover how we can help you achieve your goals
                </p>
                <Button
                  asChild
                  className="bg-[#0607E1] hover:bg-[#0607E1]/90 text-[#FFFFFF] px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <a href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions">
                    Schedule a Consultation
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

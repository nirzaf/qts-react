import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: "Client 1",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/client-1.png?updatedAt=1725572926790",
  },
  {
    name: "Client 2",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/client-2.png?updatedAt=1725572926836",
  },
  {
    name: "Client 3",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/client-3.png?updatedAt=1725572926671",
  },
  {
    name: "Client 4",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/client-4.png?updatedAt=1725572926848",
  },
  {
    name: "Zoho",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/zoho.png?updatedAt=1725572927006",
  },
  {
    name: "ClickUp",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/clickup%20logo@2x.png?updatedAt=1726851526358",
  },
];

interface PartnersSectionProps {
  title: string;
  description: string;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  title,
  description
}) => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0607E1]/5 via-transparent to-[#00045C]/5" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-bl from-[#0607E1]/20 to-transparent rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-[#1304F9]/20 to-transparent rounded-full blur-2xl"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            <span className="bg-gradient-to-r from-[#0607E1] via-[#00045C] to-[#1304F9] bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-lg text-[#000000]/70">
            {description}
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/10 to-[#00045C]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
              
              {/* Partner Logo Container */}
              <div className="relative p-4 rounded-xl border border-[#000000]/10 bg-white/50 backdrop-blur-sm group-hover:border-[#0607E1]/30 group-hover:shadow-lg transition-all duration-300">
                <img
                  className="h-12 w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 transform group-hover:scale-110"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Partner Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-24 max-w-4xl"
        >
          <div className="relative group">
            {/* Card Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0607E1] to-[#00045C] rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-300" />
            
            {/* Card Content */}
            <div className="relative rounded-xl overflow-hidden backdrop-blur-sm border border-[#000000]/10 bg-white/80">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/10 to-[#00045C]/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative p-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <motion.div 
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src="https://ik.imagekit.io/quadrate/assets/grommunio%20Logo.png?updatedAt=1719435693498"
                      alt="Grommunio"
                      className="h-16 object-contain"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0607E1] to-[#00045C] bg-clip-text text-transparent mb-3">
                      Official Partner
                    </h3>
                    <p className="text-[#000000]/70 leading-relaxed">
                      As an official Grommunio partner, we provide enterprise-grade collaboration 
                      and communication solutions for businesses of all sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

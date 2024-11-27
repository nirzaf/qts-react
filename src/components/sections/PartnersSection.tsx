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
    <section className="bg-muted/50 py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <motion.div 
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="col-span-1 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                className="h-12 object-contain grayscale transition-all duration-200 hover:grayscale-0"
                src={partner.logo}
                alt={partner.name}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Partner */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-background p-8 shadow-lg">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/quadrate/assets/grommunio%20Logo.png?updatedAt=1719435693498"
                  alt="Grommunio"
                  className="h-16 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Official Partner</h3>
                <p className="mt-2 text-muted-foreground">
                  As an official Grommunio partner, we provide enterprise-grade collaboration 
                  and communication solutions for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

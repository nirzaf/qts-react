import React from 'react';
import { PartnersCarousel } from './PartnersCarousel';

interface PartnersSectionProps {
  title: string;
  description: string;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ title, description }) => {
  const partnerLogos = [
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/clickup%20logo.svg?updatedAt=1726851551105",
      alt: "ClickUp"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/zoho.png?updatedAt=1725572927006",
      alt: "Zoho"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-1.png?updatedAt=1725572926790",
      alt: "Client 1"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/hotpic-site-1200x675-2-675x675.png?updatedAt=1740093989532",
      alt: "Hotpic"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-2.png?updatedAt=1725572926836",
      alt: "Client 2"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-8.png?updatedAt=1725572926833",
      alt: "Client 8"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-3.png?updatedAt=1725572926671",
      alt: "Client 3"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-5.png?updatedAt=1725572926845",
      alt: "Client 5"
    },
    {
      src: "https://ik.imagekit.io/quadrate/assets/img/clients/client-6.png?updatedAt=1725572926840",
      alt: "Client 6"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 font-plusJakartaSans">{title}</h2>
          <p className="text-lg text-gray-600 text-center mx-auto max-w-2xl font-plusJakartaSans">
            {description}
          </p>
        </div>
        
        <PartnersCarousel logos={partnerLogos} />
      </div>
    </section>
  );
};

export default PartnersSection;

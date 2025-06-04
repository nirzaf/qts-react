import React from 'react';
import { FaBrain, FaMicrosoft } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import ServiceCard from './ServiceCard';

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
    color: '#1d2f84',
    icon: <FaBrain className="w-8 h-8 text-[#1d2f84]" />,
    link: 'https://quadratetechsolutions1.zohobookings.com/#/quadratetechsolutions'
  },
  {
    id: 'business-mail',
    title: 'Business Mail Solutions',
    description: 'Professional email services at competitive prices',
    image: 'https://ik.imagekit.io/quadrate/assets/img/features.png?updatedAt=1718024113900',
    color: '#254cba',
    icon: <HiMail className="w-8 h-8 text-[#254cba]" />,
    link: 'https://quadratetechsolutions1.zohobookings.com/#/quadratetechsolutions'
  },
  {
    id: 'microsoft365',
    title: 'Microsoft 365 Integration',
    description: 'Seamless business intelligence and productivity solutions',
    image: 'https://ik.imagekit.io/quadrate/assets/img/values-1.png?updatedAt=1718024118843',
    color: '#2d64d8',
    icon: <FaMicrosoft className="w-8 h-8 text-[#2d64d8]" />,
    link: 'https://quadratetechsolutions1.zohobookings.com/#/quadratetechsolutions'
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

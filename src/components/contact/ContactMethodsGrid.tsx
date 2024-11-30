import React, { useState } from 'react';
import ContactMethodCard from './ContactMethodCard';
import { contactMethods } from '@/data/contactData';

interface ContactMethodsGridProps {
  methods: typeof contactMethods;
  onMethodClick: (methodId: string) => void;
}

const ContactMethodsGrid: React.FC<ContactMethodsGridProps> = ({
  methods,
  onMethodClick
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleMethodClick = (methodId: string) => {
    setActiveId(methodId);
    onMethodClick(methodId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr mb-12">
      {methods.map((method, index) => (
        <ContactMethodCard
          key={method.id}
          method={method}
          isActive={activeId === method.id}
          onClick={() => handleMethodClick(method.id)}
          index={index}
        />
      ))}
    </div>
  );
};

export default ContactMethodsGrid;

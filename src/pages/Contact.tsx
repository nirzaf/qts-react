import { type FC, useState } from 'react';
import { motion } from 'framer-motion';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactMethodCard from '@/components/contact/ContactMethodCard';
import ContactForm from '@/components/contact/ContactForm';
import { contactMethods } from '@/data/contactData';

/**
 * Contact page component that provides multiple ways for users to get in touch
 * Features:
 * - Interactive contact method selection
 * - Multi-step contact form
 * - Animated transitions
 */
const Contact: FC = () => {
  const [activeMethod, setActiveMethod] = useState<string | null>(null);

  const handleMethodClick = (methodId: string) => {
    if (methodId !== 'email') {
      window.location.href = contactMethods.find(m => m.id === methodId)?.link || '';
      return;
    }
    setActiveMethod(methodId);
  };

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-fixed opacity-5" />
      
      {/* Interactive Contact Hub */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative container py-16 sm:py-24"
      >
        <div className="mx-auto max-w-4xl">
          <ContactHeader />

          {/* Contact Methods Grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {contactMethods.map((method, index) => (
              <ContactMethodCard
                key={method.id}
                method={method}
                isActive={activeMethod === method.id}
                onClick={() => handleMethodClick(method.id)}
                index={index}
              />
            ))}
          </div>

          {/* Contact Form */}
          {activeMethod === 'email' && <ContactForm />}
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;

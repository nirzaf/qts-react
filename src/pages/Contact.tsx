import { type FC, useState } from 'react';
import { motion } from 'framer-motion';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactBackground from '@/components/contact/ContactBackground';
import ContactContainer from '@/components/contact/ContactContainer';
import ContactMethodsGrid from '@/components/contact/ContactMethodsGrid';
import LocationCards from '@/components/contact/LocationCards';
import { contactMethods } from '@/data/contactData';

/**
 * Contact page component that provides multiple ways for users to get in touch
 * Features:
 * - Interactive contact method selection
 * - Multi-step contact form
 * - Animated transitions
 * - Global office locations with maps
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
    <div className="relative min-h-screen bg-background">
      <ContactBackground />
      
      <ContactContainer>
        <ContactHeader />
        <ContactMethodsGrid 
          activeMethod={activeMethod}
          onMethodClick={handleMethodClick}
        />

        {/* Contact Form Section */}
        {activeMethod === 'email' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        )}

        {/* Location Cards Section */}
        <LocationCards />
      </ContactContainer>
    </div>
  );
};

export default Contact;

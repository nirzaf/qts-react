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
 * - Interactive contact method selection with smooth transitions
 * - Clean, user-focused multi-step contact form
 * - Subtle animations for enhanced engagement
 * - Responsive global office locations display
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
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#000000]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] to-[#0607E1]/5"
      >
        <ContactBackground />
      </motion.div>
      
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-full"
        >
          <ContactHeader />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full"
        >
          {activeMethod === 'email' ? (
            <ContactForm onBack={() => setActiveMethod(null)} />
          ) : (
            <ContactMethodsGrid methods={contactMethods} onMethodClick={handleMethodClick} />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full mt-16"
        >
          <LocationCards />
        </motion.div>
      </ContactContainer>
    </div>
  );
};

export default Contact;

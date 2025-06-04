import { type FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import ContactBackground from './ContactBackground';
import ContactContainer from './ContactContainer';

interface ContactPageLayoutProps {
  children: ReactNode;
}

const ContactPageLayout: FC<ContactPageLayoutProps> = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-[#ffffff] to-[#1d2f84]/5"
      >
        <ContactBackground />
      </motion.div>
      
      <ContactContainer>
        {children}
      </ContactContainer>
    </>
  );
};

export default ContactPageLayout;

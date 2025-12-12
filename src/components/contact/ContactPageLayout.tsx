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
        className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] to-[#0607E1]/5 dark:from-black dark:to-black"
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

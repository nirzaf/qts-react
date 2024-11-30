import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="font-montserrat font-bold tracking-tight text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        Let's Create Something Amazing
      </h2>
      <p className="text-muted-foreground text-lg">
        Choose how you'd like to connect with us
      </p>
    </motion.div>
  );
};

export default ContactHeader;

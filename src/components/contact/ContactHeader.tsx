import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="font-montserrat font-bold tracking-tight text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
        Let's Create Something Amazing
      </h1>
      <p className="text-muted-foreground dark:text-white/80 text-lg dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
        Choose how you'd like to connect with us
      </p>
    </motion.div>
  );
};

export default ContactHeader;

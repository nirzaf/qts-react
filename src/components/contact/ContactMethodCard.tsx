import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { type ContactMethod } from '@/data/contactData';

interface ContactMethodCardProps {
  method: ContactMethod;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const ContactMethodCard = ({ method, isActive, onClick, index }: ContactMethodCardProps) => {
  const Icon = method.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.15
        }
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 10 
        }
      }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card
        className={`relative h-[280px] w-full p-8 cursor-pointer transition-all duration-300 flex flex-col dark:bg-gray-800 dark:border-white/20 ${
          isActive
            ? 'border-[#0607E1] dark:border-white shadow-xl bg-[#0607E1]/5 dark:bg-white/10'
            : 'hover:shadow-lg hover:border-[#0607E1]/50 dark:hover:border-white/40'
        }`}
        onClick={onClick}
      >
        <motion.div
          className={`inline-flex p-4 rounded-xl ${
            isActive ? 'bg-[#0607E1]/10 dark:bg-white/20' : method.color + ' bg-opacity-10 dark:bg-white/10'
          }`}
          whileHover={{
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Icon className={`h-8 w-8 ${
            isActive ? 'text-[#0607E1] dark:text-white' : method.color.replace('bg-', 'text-') + ' dark:text-white/80'
          }`} />
        </motion.div>
        
        <motion.div
          className="flex-grow flex flex-col justify-between mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: index * 0.15 + 0.2 }
          }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-3 dark:text-white dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">{method.title}</h3>
            <p className="text-muted-foreground dark:text-white/70 text-lg leading-relaxed line-clamp-2 dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{method.description}</p>
          </div>

          <motion.div
            className="self-end mt-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              x: 5,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
          >
            <ArrowRight className={`h-6 w-6 ${
              isActive ? 'text-[#0607E1] dark:text-white' : 'text-[#0607E1]/60 dark:text-white/60'
            } transition-colors`} />
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ContactMethodCard;

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        className={`relative h-full p-6 cursor-pointer transition-all hover:scale-105 ${
          isActive ? 'border-primary shadow-lg' : ''
        }`}
        onClick={onClick}
      >
        <div className={`inline-flex p-3 rounded-lg ${method.color} bg-opacity-10 mb-4`}>
          <Icon className={`h-6 w-6 ${method.color.replace('bg-', 'text-')}`} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
        <p className="text-muted-foreground">{method.description}</p>
        <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
      </Card>
    </motion.div>
  );
};

export default ContactMethodCard;

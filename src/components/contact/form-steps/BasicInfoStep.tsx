import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import type { FormStepProps } from '../types';

const BasicInfoStep: FC<FormStepProps> = ({ formData, onFormDataChange, onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold mb-4">Let's start with the basics</h3>
      <Input
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => onFormDataChange({ name: e.target.value })}
      />
      <Input
        placeholder="Your email"
        type="email"
        value={formData.email}
        onChange={(e) => onFormDataChange({ email: e.target.value })}
      />
      <Button className="w-full bg-[#0607E1] hover:bg-[#0607E1]/90" onClick={onNext}>
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default BasicInfoStep;

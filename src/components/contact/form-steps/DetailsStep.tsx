import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import type { FormStepProps } from '../types';

interface DetailsStepProps extends Omit<FormStepProps, 'onNext'> {
  onSubmit: () => void;
}

const DetailsStep: FC<DetailsStepProps> = ({ formData, onFormDataChange, onSubmit }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold mb-4">Additional details</h3>
      <Textarea
        placeholder="Tell us more about your project..."
        className="min-h-[150px]"
        value={formData.message}
        onChange={(e) => onFormDataChange({ message: e.target.value })}
      />
      <Button
        className="w-full bg-[#1d2f84] hover:bg-[#1d2f84]/90"
        onClick={onSubmit}
      >
        Send Message
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default DetailsStep;

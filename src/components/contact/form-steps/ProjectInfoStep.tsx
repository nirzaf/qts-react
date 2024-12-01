import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import type { FormStepProps } from '../types';

const ProjectInfoStep: FC<FormStepProps> = ({ formData, onFormDataChange, onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold mb-4">Tell us about your project</h3>
      <Input
        placeholder="Project subject"
        value={formData.subject}
        onChange={(e) => onFormDataChange({ subject: e.target.value })}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          placeholder="Budget range"
          value={formData.budget}
          onChange={(e) => onFormDataChange({ budget: e.target.value })}
        />
        <Input
          placeholder="Timeline"
          value={formData.timeline}
          onChange={(e) => onFormDataChange({ timeline: e.target.value })}
        />
      </div>
      <Button className="w-full bg-[#0607E1] hover:bg-[#0607E1]/90" onClick={onNext}>
        Next Step
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default ProjectInfoStep;

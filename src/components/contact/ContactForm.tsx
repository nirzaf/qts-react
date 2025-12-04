'use client';

import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BasicInfoStep from './form-steps/BasicInfoStep';
import ProjectInfoStep from './form-steps/ProjectInfoStep';
import DetailsStep from './form-steps/DetailsStep';
import type { FormData } from './types';

interface ContactFormProps {
  onBack: () => void;
}

const ContactForm: FC<ContactFormProps> = ({ onBack }) => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleFormDataChange = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setFormStep(prev => prev + 1);

  const handleSubmit = async () => {
    try {
      // TODO: Implement form submission logic
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <motion.div
      key="email-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto"
    >
      <div className="mb-6 flex items-center">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-sm hover:bg-[#0607E1]/10"
        >
          ← Back to contact methods
        </Button>
      </div>
      <Card className="p-6">
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {formStep === 1 && (
              <BasicInfoStep
                formData={formData}
                onFormDataChange={handleFormDataChange}
                onNext={nextStep}
              />
            )}

            {formStep === 2 && (
              <ProjectInfoStep
                formData={formData}
                onFormDataChange={handleFormDataChange}
                onNext={nextStep}
              />
            )}

            {formStep === 3 && (
              <DetailsStep
                formData={formData}
                onFormDataChange={handleFormDataChange}
                onSubmit={handleSubmit}
              />
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};

export default ContactForm;

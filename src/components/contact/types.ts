export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
}

export interface FormStepProps {
  formData: FormData;
  onFormDataChange: (data: Partial<FormData>) => void;
  onNext: () => void;
}

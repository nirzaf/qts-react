import React, { useState } from 'react';
import { CandidateDetails } from '../../types/interview';

interface CandidateFormProps {
  onSubmit: (data: CandidateDetails) => void;
}

const CandidateForm: React.FC<CandidateFormProps> = ({ onSubmit }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<CandidateDetails>({
    full_name: '',
    email: '',
    is_university: false,
    university_name: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (formData.is_university && !formData.university_name?.trim()) {
      newErrors.university_name = 'University name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'radio') {
      setFormData({
        ...formData,
        is_university: value === 'yes',
        university_name: value === 'no' ? '' : formData.university_name,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep2()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      {step === 1 ? (
        <form onSubmit={handleNextStep} className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Candidate Details</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
              {errors.full_name && (
                <p className="mt-1 text-sm text-red-600">{errors.full_name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Next
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">University Affiliation</h2>
          
          <div className="space-y-4">
            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Are you currently studying in a university?
              </p>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="is_university"
                    value="yes"
                    checked={formData.is_university}
                    onChange={handleChange}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="is_university"
                    value="no"
                    checked={!formData.is_university}
                    onChange={handleChange}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            
            {formData.is_university && (
              <div>
                <label htmlFor="university_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Which university are you studying in? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="university_name"
                  name="university_name"
                  value={formData.university_name || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your university name"
                />
                {errors.university_name && (
                  <p className="mt-1 text-sm text-red-600">{errors.university_name}</p>
                )}
              </div>
            )}
          </div>
          
          <div className="flex space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/2 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Start Assessment
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CandidateForm;

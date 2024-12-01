import { type FC, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import PageLayout from '@/layouts/PageLayout';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactBackground from '@/components/contact/ContactBackground';
import ContactContainer from '@/components/contact/ContactContainer';
import ContactMethodsGrid from '@/components/contact/ContactMethodsGrid';
import LocationCards from '@/components/contact/LocationCards';
import { contactMethods } from '@/data/contactData';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [activeMethod, setActiveMethod] = useState<string | null>(null);

  const handleMethodClick = (methodId: string) => {
    if (methodId !== 'email') {
      window.location.href = contactMethods.find(m => m.id === methodId)?.link || '';
      return;
    }
    setActiveMethod(methodId);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase
        .from('quadrate_contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] to-[#0607E1]/5"
      >
        <ContactBackground />
      </motion.div>
      
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-full"
        >
          <ContactHeader />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full"
        >
          <ContactMethodsGrid methods={contactMethods} onMethodClick={handleMethodClick} />
        </motion.div>

        {activeMethod === 'email' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl mx-auto mt-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0607E1] focus:ring-[#0607E1]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0607E1] focus:ring-[#0607E1]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0607E1] focus:ring-[#0607E1]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0607E1] focus:ring-[#0607E1]"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm">Message sent successfully!</div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm">Failed to send message. Please try again.</div>
              )}

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setActiveMethod(null)}
                  className="px-4 py-2 text-sm font-medium text-[#0607E1] bg-white border border-[#0607E1] rounded-md hover:bg-[#0607E1]/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0607E1]"
                >
                  Hide
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0607E1] hover:bg-[#0607E1]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0607E1] ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full mt-8"
        >
          <LocationCards />
        </motion.div>
      </ContactContainer>
    </PageLayout>
  );
};

export default Contact;

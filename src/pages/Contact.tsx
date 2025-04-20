import { type FC, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import PageLayout from '@/layouts/PageLayout';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactMethodsGrid from '@/components/contact/ContactMethodsGrid';
import LocationCards from '@/components/contact/LocationCards';
import ContactPageLayout from '@/components/contact/ContactPageLayout';
import ContactFormSubmission from '@/components/contact/ContactFormSubmission';
import { contactMethods } from '@/data/contactData';
import SEO from '@/components/seo/SEO';
import { generateOrganizationSchema, generateWebPageSchema, generateLocalBusinessSchema, defaultOrganization } from '@/utils/structuredData';

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
      const domain = window.location.hostname;
      const formDataWithDomain = {
        ...formData,
        subject: `${formData.subject} (${domain})`
      };

      const { error } = await supabase
        .from('quadrate_contact_submissions')
        .insert([formDataWithDomain]);

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

  // Generate structured data for the contact page
  const organizationSchema = generateOrganizationSchema(defaultOrganization);
  const webPageSchema = generateWebPageSchema({
    title: 'Contact Us | Quadrate Tech Solutions',
    description: 'Get in touch with Quadrate Tech Solutions. Contact us for software development, web development, digital marketing, and IT services.',
    url: 'https://quadratetechsolutions.com/contact',
  });
  const localBusinessSchema = generateLocalBusinessSchema({
    ...defaultOrganization,
    address: 'Sri Lanka',
    telephone: '+94 77 123 4567',
    geo: {
      latitude: 7.8731,
      longitude: 80.7718
    }
  });

  // Combine structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, webPageSchema, localBusinessSchema]
  };

  return (
    <PageLayout>
      <SEO
        title="Contact Us | Quadrate Tech Solutions"
        description="Get in touch with Quadrate Tech Solutions. Contact us for software development, web development, digital marketing, and IT services."
        keywords="contact Quadrate, tech support, software development contact, web development inquiry, digital marketing services, IT consultation"
        structuredData={structuredData}
      />
      <ContactPageLayout>
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
            <ContactFormSubmission
              formData={formData}
              setFormData={setFormData}
              isSubmitting={isSubmitting}
              submitStatus={submitStatus}
              onSubmit={handleSubmit}
              onHide={() => setActiveMethod(null)}
            />
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
      </ContactPageLayout>
    </PageLayout>
  );
};

export default Contact;

import { type FC, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormSubmissionProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  isSubmitting: boolean;
  submitStatus: 'success' | 'error' | null;
  onSubmit: (e: FormEvent) => Promise<void>;
  onHide: () => void;
}

const ContactFormSubmission: FC<ContactFormSubmissionProps> = ({
  formData,
  setFormData,
  isSubmitting,
  submitStatus,
  onSubmit,
  onHide,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-xl dark:border dark:border-white/20">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-white/20 shadow-sm focus:border-[#0607E1] dark:focus:border-white focus:ring-[#0607E1] dark:focus:ring-white dark:bg-gray-700 dark:text-white px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-white/20 shadow-sm focus:border-[#0607E1] dark:focus:border-white focus:ring-[#0607E1] dark:focus:ring-white dark:bg-gray-700 dark:text-white px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-white/20 shadow-sm focus:border-[#0607E1] dark:focus:border-white focus:ring-[#0607E1] dark:focus:ring-white dark:bg-gray-700 dark:text-white px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-white/20 shadow-sm focus:border-[#0607E1] dark:focus:border-white focus:ring-[#0607E1] dark:focus:ring-white dark:bg-gray-700 dark:text-white px-3 py-2"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="text-green-600 dark:text-green-400 text-sm font-medium">Message sent successfully!</div>
      )}
      {submitStatus === 'error' && (
        <div className="text-red-600 dark:text-red-400 text-sm font-medium">Failed to send message. Please try again.</div>
      )}

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={onHide}
          className="px-4 py-2 text-sm font-medium text-[#0607E1] dark:text-white bg-white dark:bg-transparent border border-[#0607E1] dark:border-white rounded-md hover:bg-[#0607E1]/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0607E1] dark:focus:ring-white"
        >
          Hide
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0607E1] dark:bg-white dark:text-[#0607E1] hover:bg-[#0607E1]/90 dark:hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0607E1] dark:focus:ring-white dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactFormSubmission;

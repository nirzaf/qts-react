'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface CompletionPageProps {
  sessionId: string;
  onSubmit: () => Promise<boolean>;
}

const CompletionPage: React.FC<CompletionPageProps> = ({ sessionId, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const success = await onSubmit();
      if (success) {
        setIsSubmitted(true);
      } else {
        setError('Failed to submit your assessment. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Error submitting assessment:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
      <div className="mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {isSubmitted
            ? "Thank You for Completing the Interview"
            : "You've Answered All Questions"}
        </h2>

        <p className="text-gray-600 mb-6">
          {isSubmitted
            ? "Your responses have been recorded. You will receive a follow-up email if selected."
            : "Please review your answers and click the Submit button below to complete the assessment."}
        </p>

        <div className="text-sm text-gray-500 mb-8 p-4 bg-gray-50 rounded-md inline-block">
          Session ID: <span className="font-mono">{sessionId}</span>
        </div>
      </div>

      <div className="border-t pt-6">
        {!isSubmitted ? (
          <div className="space-y-4">
            {error && (
              <div className="text-red-600 bg-red-50 p-3 rounded-md mb-4">
                {error}
              </div>
            )}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
            </button>
            <p className="text-sm text-gray-500 mt-2">
              This will submit all your answers to our database for evaluation.
            </p>
          </div>
        ) : (
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Return to Home
          </Link>
        )}
      </div>
    </div>
  );
};

export default CompletionPage;

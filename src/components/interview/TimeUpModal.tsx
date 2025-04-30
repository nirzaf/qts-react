import React from 'react';

interface TimeUpModalProps {
  onContinue: () => void;
}

const TimeUpModal: React.FC<TimeUpModalProps> = ({ onContinue }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Time's Up!
          </h3>

          <p className="text-gray-600 mb-6">
            Time's up for this section. Your answers have been saved in your browser. You can proceed to the next part.
          </p>

          <button
            onClick={onContinue}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeUpModal;

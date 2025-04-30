import React, { useState, useEffect } from 'react';
import { Question } from '../../types/interview';

interface QuestionPageProps {
  questions: Question[];
  pageNumber: number;
  initialAnswers: Record<string, string>;
  timeLimit: number; // in seconds
  onNext: (answers: Record<string, string>, isTimeUp: boolean) => void;
  totalPages: number;
}

const QuestionPage: React.FC<QuestionPageProps> = ({
  questions,
  pageNumber,
  initialAnswers,
  timeLimit,
  onNext,
  totalPages,
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers);
  const [timeRemaining, setTimeRemaining] = useState<number>(timeLimit);
  const [isNavigating, setIsNavigating] = useState<boolean>(false);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Handle answer selection
  const handleAnswerSelect = (questionId: number, answer: string) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: answer,
    };

    // Save to local storage immediately when an answer is selected
    localStorage.setItem('interviewAnswers', JSON.stringify(updatedAnswers));
    setAnswers(updatedAnswers);
  };

  // Handle next button click
  const handleNext = (e: React.FormEvent, isTimeUp = false) => {
    e.preventDefault();
    setIsNavigating(true);

    // Save current answers to local storage
    localStorage.setItem('interviewAnswers', JSON.stringify(answers));

    // Call the onNext callback to navigate to the next page
    onNext(answers, isTimeUp);
  };

  // Countdown timer
  useEffect(() => {
    if (timeRemaining <= 0) {
      handleNext({ preventDefault: () => {} } as React.FormEvent, true);
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  // Calculate progress
  const progress = ((timeLimit - timeRemaining) / timeLimit) * 100;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">
            Page {pageNumber} of {totalPages}
          </h2>
          <div className="text-right">
            <div className={`text-lg font-semibold ${timeRemaining < 60 ? 'text-red-600 animate-pulse' : 'text-gray-700'}`}>
              Time Remaining: {formatTime(timeRemaining)}
            </div>
            <div className="text-sm text-gray-500">
              Answer all questions before time runs out
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleNext} className="space-y-8">
        {questions.map((question) => (
          <div key={question.id} className="p-6 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {question.id}. {question.question_text}
            </h3>

            <div className="space-y-3">
              {['A', 'B', 'C', 'D'].map((option) => (
                <label
                  key={option}
                  className="flex items-start p-3 border rounded-md cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleAnswerSelect(question.id, option)}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-3">
                    <span className="font-medium">{option}:</span>{' '}
                    {question[`option_${option.toLowerCase()}` as keyof Question] as string}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-6">
          <button
            type="submit"
            disabled={isNavigating}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
          >
            {isNavigating ? 'Loading...' : pageNumber === totalPages ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionPage;

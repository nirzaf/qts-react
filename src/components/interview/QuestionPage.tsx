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

  // Reset navigation state when page number changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pageNumber]);

  // Calculate page progress (which page we're on out of total)
  const pageProgress = (pageNumber / totalPages) * 100;

  // Calculate time progress (how much time has elapsed)
  const timeProgress = ((timeLimit - timeRemaining) / timeLimit) * 100;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">
            Page {pageNumber} of {totalPages}
          </h2>
          <div className="text-right">
            <div className="text-sm text-gray-500">
              Answer all questions before time runs out
            </div>
          </div>
        </div>

        {/* Page progress bar */}
        <div className="mb-2">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Page Progress</span>
            <span>{pageNumber} of {totalPages}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${pageProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Time progress bar */}
        <div>
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Time Remaining</span>
            <span>{formatTime(timeRemaining)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full transition-all duration-1000 ease-linear ${
                timeRemaining < 60 ? 'bg-red-600' : 'bg-blue-600'
              }`}
              style={{ width: `${100 - timeProgress}%` }}
            ></div>
          </div>
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

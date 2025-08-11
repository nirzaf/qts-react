'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

// Interview questions data
const interviewQuestions = [
  {
    id: 1,
    question_text: "Which sequence correctly represents the traditional Waterfall software development lifecycle?",
    option_a: "Requirements → Design → Implementation → Testing → Maintenance",
    option_b: "Design → Requirements → Testing → Implementation → Maintenance",
    option_c: "Implementation → Testing → Design → Requirements → Maintenance",
    option_d: "Requirements → Testing → Design → Implementation → Maintenance",
    correct_answer: "A",
    category: "Software Development Lifecycle and Processes",
    explanation: "The Waterfall model follows a sequential process starting with requirements and ending with maintenance."
  },
  {
    id: 2,
    question_text: "What is the primary goal of the COCOMO model in software engineering?",
    option_a: "Defining user requirements",
    option_b: "Estimating project cost and effort based on lines of code",
    option_c: "Managing software configuration",
    option_d: "Designing system architecture",
    correct_answer: "B",
    category: "Software Development Lifecycle and Processes",
    explanation: "COCOMO (Constructive Cost Model) is used for estimating project cost and effort."
  },
  {
    id: 3,
    question_text: "Which data structure follows the LIFO (Last In, First Out) principle?",
    option_a: "Queue",
    option_b: "Stack",
    option_c: "Array",
    option_d: "Graph",
    correct_answer: "B",
    category: "Data Structures and Algorithms",
    explanation: "Stacks follow the Last In, First Out (LIFO) principle."
  },
  {
    id: 4,
    question_text: "What is the average-case time complexity of Merge Sort?",
    option_a: "O(n)",
    option_b: "O(n log n)",
    option_c: "O(n²)",
    option_d: "O(log n)",
    correct_answer: "B",
    category: "Data Structures and Algorithms",
    explanation: "Merge Sort has an average-case time complexity of O(n log n)."
  },
  {
    id: 5,
    question_text: "Which design pattern ensures a class has only one instance and provides a global point of access to it?",
    option_a: "Factory",
    option_b: "Observer",
    option_c: "Singleton",
    option_d: "Strategy",
    correct_answer: "C",
    category: "Software Design and Architecture",
    explanation: "The Singleton pattern ensures a class has only one instance with a global access point."
  }
];

interface CandidateDetails {
  full_name: string;
  email: string;
  is_university: boolean;
  university_name?: string;
}

interface PageState {
  currentPage: number;
  timeRemaining: number;
  answers: Record<string, string>;
  isSubmitted: boolean;
  isTimeUp: boolean;
}

export default function InterviewAssessmentPage() {
  const [step, setStep] = useState<'details' | 'assessment' | 'results'>('details');
  const [candidateDetails, setCandidateDetails] = useState<CandidateDetails>({
    full_name: '',
    email: '',
    is_university: false,
    university_name: ''
  });
  const [pageState, setPageState] = useState<PageState>({
    currentPage: 0,
    timeRemaining: 30 * 60, // 30 minutes
    answers: {},
    isSubmitted: false,
    isTimeUp: false
  });
  const [score, setScore] = useState<number>(0);

  // Timer effect
  useEffect(() => {
    if (step === 'assessment' && !pageState.isSubmitted && !pageState.isTimeUp) {
      const timer = setInterval(() => {
        setPageState(prev => {
          if (prev.timeRemaining <= 1) {
            return { ...prev, timeRemaining: 0, isTimeUp: true };
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [step, pageState.isSubmitted, pageState.isTimeUp]);

  const handleSubmit = useCallback(() => {
    // Calculate score
    let correctAnswers = 0;
    interviewQuestions.forEach(question => {
      if (pageState.answers[question.id] === question.correct_answer) {
        correctAnswers++;
      }
    });
    
    const finalScore = Math.round((correctAnswers / interviewQuestions.length) * 100);
    setScore(finalScore);
    setPageState(prev => ({ ...prev, isSubmitted: true }));
    setStep('results');
  }, [pageState.answers]);

  // Auto-submit when time is up
  useEffect(() => {
    if (pageState.isTimeUp && !pageState.isSubmitted) {
      handleSubmit();
    }
  }, [pageState.isTimeUp, pageState.isSubmitted, handleSubmit]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (candidateDetails.full_name && candidateDetails.email) {
      setStep('assessment');
    }
  };

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setPageState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answer }
    }));
  };

  const handleNext = () => {
    if (pageState.currentPage < interviewQuestions.length - 1) {
      setPageState(prev => ({ ...prev, currentPage: prev.currentPage + 1 }));
    }
  };

  const handlePrevious = () => {
    if (pageState.currentPage > 0) {
      setPageState(prev => ({ ...prev, currentPage: prev.currentPage - 1 }));
    }
  };



  const currentQuestion = interviewQuestions[pageState.currentPage];

  if (step === 'details') {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">Technical Interview Assessment</h1>
          <p className="text-muted-foreground">
            Please provide your details to begin the assessment. This test contains 5 questions 
            and you have 30 minutes to complete it.
          </p>
        </div>

        <form onSubmit={handleDetailsSubmit} className="bg-card p-8 rounded-lg border space-y-6">
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="full_name"
              value={candidateDetails.full_name}
              onChange={(e) => setCandidateDetails(prev => ({ ...prev, full_name: e.target.value }))}
              className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={candidateDetails.email}
              onChange={(e) => setCandidateDetails(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="is_university"
              checked={candidateDetails.is_university}
              onChange={(e) => setCandidateDetails(prev => ({ ...prev, is_university: e.target.checked }))}
              className="rounded border-input"
            />
            <label htmlFor="is_university" className="text-sm">
              I am currently a university student
            </label>
          </div>

          {candidateDetails.is_university && (
            <div>
              <label htmlFor="university_name" className="block text-sm font-medium mb-2">
                University Name
              </label>
              <input
                type="text"
                id="university_name"
                value={candidateDetails.university_name}
                onChange={(e) => setCandidateDetails(prev => ({ ...prev, university_name: e.target.value }))}
                className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          )}

          <div className="bg-primary/5 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Assessment Guidelines:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Total Questions: 5</li>
              <li>• Time Limit: 30 minutes</li>
              <li>• Each question has 4 options</li>
              <li>• You can navigate between questions</li>
              <li>• Submit before time runs out</li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Start Assessment
          </button>
        </form>
      </div>
    );
  }

  if (step === 'assessment') {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 p-4 bg-card rounded-lg border">
          <div>
            <h1 className="text-2xl font-bold">Technical Assessment</h1>
            <p className="text-muted-foreground">Question {pageState.currentPage + 1} of {interviewQuestions.length}</p>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${pageState.timeRemaining < 300 ? 'text-red-500' : 'text-primary'}`}>
              {formatTime(pageState.timeRemaining)}
            </div>
            <p className="text-sm text-muted-foreground">Time Remaining</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{Math.round(((pageState.currentPage + 1) / interviewQuestions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((pageState.currentPage + 1) / interviewQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-card p-8 rounded-lg border mb-6">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              {currentQuestion.category}
            </span>
            <h2 className="text-xl font-semibold mb-6">
              {currentQuestion.question_text}
            </h2>
          </div>

          <div className="space-y-4">
            {['A', 'B', 'C', 'D'].map((option) => {
              const optionText = currentQuestion[`option_${option.toLowerCase()}` as keyof typeof currentQuestion] as string;
              const isSelected = pageState.answers[currentQuestion.id] === option;
              
              return (
                <label
                  key={option}
                  className={`flex items-start space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                    isSelected ? 'border-primary bg-primary/5' : 'border-input hover:bg-muted/50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option}
                    checked={isSelected}
                    onChange={() => handleAnswerSelect(currentQuestion.id, option)}
                    className="mt-1"
                  />
                  <div>
                    <span className="font-medium">{option}.</span> {optionText}
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={pageState.currentPage === 0}
            className="px-6 py-2 border border-input rounded-md hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="flex space-x-4">
            {pageState.currentPage === interviewQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-8 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 font-medium"
              >
                Submit Assessment
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (step === 'results') {
    const answeredQuestions = Object.keys(pageState.answers).length;
    const correctAnswers = interviewQuestions.filter(q => pageState.answers[q.id] === q.correct_answer).length;
    
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">Assessment Complete!</h1>
          <p className="text-muted-foreground">
            Thank you for completing the technical assessment, {candidateDetails.full_name}.
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{score}%</div>
              <p className="text-muted-foreground">Overall Score</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">{correctAnswers}</div>
              <p className="text-muted-foreground">Correct Answers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{answeredQuestions}</div>
              <p className="text-muted-foreground">Questions Answered</p>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border mb-8">
          <h2 className="text-xl font-semibold mb-6">Question Review</h2>
          <div className="space-y-4">
            {interviewQuestions.map((question, index) => {
              const userAnswer = pageState.answers[question.id];
              const isCorrect = userAnswer === question.correct_answer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium">Question {index + 1}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{question.question_text}</p>
                  <div className="text-sm">
                    <p><strong>Your answer:</strong> {userAnswer || 'Not answered'}</p>
                    <p><strong>Correct answer:</strong> {question.correct_answer}</p>
                    {question.explanation && (
                      <p className="mt-2 text-muted-foreground"><strong>Explanation:</strong> {question.explanation}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            We will review your assessment and get back to you within 2-3 business days.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return null;
}
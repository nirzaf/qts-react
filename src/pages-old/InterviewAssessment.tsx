import React, { useState, useEffect } from 'react';
import CandidateForm from '../components/interview/CandidateForm';
import QuestionPage from '../components/interview/QuestionPage';
import CompletionPage from '../components/interview/CompletionPage';
import TimeUpModal from '../components/interview/TimeUpModal';
import { interviewQuestions } from '../data/interviewQuestions';
import { CandidateDetails, InterviewSession, PageState } from '../types/interview';
import { createInterviewSession, updateInterviewSession } from '../services/supabaseService';
import SEO from '../components/seo/SEO';

const QUESTIONS_PER_PAGE = 5;
const TIME_LIMIT_PER_PAGE = 600; // 10 minutes in seconds
const TOTAL_PAGES = Math.ceil(interviewQuestions.length / QUESTIONS_PER_PAGE);

// Local storage keys
const LS_KEYS = {
  ANSWERS: 'interviewAnswers',
  SESSION_ID: 'interviewSessionId',
  CANDIDATE: 'interviewCandidate',
  CURRENT_PAGE: 'interviewCurrentPage',
  START_TIME: 'interviewStartTime'
};

const InterviewAssessment: React.FC = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [pageState, setPageState] = useState<PageState>({
    currentPage: 0, // 0 = candidate form, 1-4 = question pages, 5 = completion
    timeRemaining: TIME_LIMIT_PER_PAGE,
    answers: {},
    isSubmitted: false,
    isTimeUp: false,
  });
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [showTimeUpModal, setShowTimeUpModal] = useState<boolean>(false);

  // Load saved state from local storage on initial render
  useEffect(() => {
    const savedSessionId = localStorage.getItem(LS_KEYS.SESSION_ID);
    const savedAnswers = localStorage.getItem(LS_KEYS.ANSWERS);
    const savedCurrentPage = localStorage.getItem(LS_KEYS.CURRENT_PAGE);
    const savedStartTime = localStorage.getItem(LS_KEYS.START_TIME);

    if (savedSessionId) {
      setSessionId(savedSessionId);
    }

    if (savedAnswers) {
      try {
        const parsedAnswers = JSON.parse(savedAnswers);

        if (savedCurrentPage) {
          const currentPage = parseInt(savedCurrentPage, 10);

          setPageState(prev => ({
            ...prev,
            currentPage: currentPage,
            answers: parsedAnswers
          }));
        }
      } catch (error) {
        console.error('Error parsing saved answers:', error);
      }
    }

    if (savedStartTime) {
      try {
        setStartTime(new Date(savedStartTime));
      } catch (error) {
        console.error('Error parsing saved start time:', error);
      }
    }
  }, []);

  // Get questions for current page
  const getCurrentPageQuestions = () => {
    const startIndex = (pageState.currentPage - 1) * QUESTIONS_PER_PAGE;
    return interviewQuestions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);
  };

  // Handle candidate form submission
  const handleCandidateSubmit = async (data: CandidateDetails) => {
    const now = new Date();
    setStartTime(now);

    // Save candidate data to local storage
    localStorage.setItem(LS_KEYS.CANDIDATE, JSON.stringify(data));
    localStorage.setItem(LS_KEYS.START_TIME, now.toISOString());

    try {
      // Create a new interview session
      const session: InterviewSession = {
        full_name: data.full_name,
        email: data.email,
        is_university: data.is_university,
        university_name: data.university_name,
        start_time: now.toISOString(),
        submitted: false,
        answers: {},
      };

      const { data: sessionData, error } = await createInterviewSession(session);

      if (error) {
        console.error('Error creating interview session:', error);
        alert('There was an error starting your assessment. Please try again later.');
        return;
      }

      if (!sessionData || !sessionData[0] || !sessionData[0].id) {
        console.error('No session data returned');
        alert('There was an error starting your assessment. Please try again later.');
        return;
      }

      const newSessionId = sessionData[0].id;
      setSessionId(newSessionId);

      // Save session ID to local storage
      localStorage.setItem(LS_KEYS.SESSION_ID, newSessionId);

      // Initialize empty answers in local storage
      localStorage.setItem(LS_KEYS.ANSWERS, JSON.stringify({}));

      // Save current page to local storage
      localStorage.setItem(LS_KEYS.CURRENT_PAGE, '1');

      setPageState({
        ...pageState,
        currentPage: 1,
        timeRemaining: TIME_LIMIT_PER_PAGE,
      });
    } catch (error) {
      console.error('Error creating interview session:', error);
      alert('There was an error starting your assessment. Please try again later.');
    }
  };

  // Handle question page navigation
  const handleQuestionPageNext = (answers: Record<string, string>, isTimeUp: boolean) => {
    const updatedAnswers = { ...pageState.answers, ...answers };

    // Save answers to local storage
    localStorage.setItem(LS_KEYS.ANSWERS, JSON.stringify(updatedAnswers));

    // Use setTimeout to ensure the state update happens after the current execution context
    // This helps prevent the button from getting stuck in the loading state
    setTimeout(() => {
      if (isTimeUp) {
        setShowTimeUpModal(true);
        setPageState({
          ...pageState,
          answers: updatedAnswers,
          isTimeUp: true,
        });
      } else {
        // Move to the next page
        const nextPage = pageState.currentPage + 1;

        if (nextPage > TOTAL_PAGES) {
          // All pages completed, move to completion page
          setPageState({
            ...pageState,
            currentPage: TOTAL_PAGES + 1, // Completion page
            answers: updatedAnswers,
            isTimeUp: false,
          });

          // Save current page to local storage
          localStorage.setItem(LS_KEYS.CURRENT_PAGE, String(TOTAL_PAGES + 1));
        } else {
          setPageState({
            ...pageState,
            currentPage: nextPage,
            timeRemaining: TIME_LIMIT_PER_PAGE,
            answers: updatedAnswers,
            isTimeUp: false,
          });

          // Save current page to local storage
          localStorage.setItem(LS_KEYS.CURRENT_PAGE, String(nextPage));
        }
      }
    }, 0);
  };

  // Handle time up modal continue button
  const handleTimeUpContinue = () => {
    setShowTimeUpModal(false);

    // Use setTimeout to ensure the state update happens after the current execution context
    setTimeout(() => {
      // Move to the next page
      const nextPage = pageState.currentPage + 1;

      if (nextPage > TOTAL_PAGES) {
        // All pages completed, move to completion page
        setPageState({
          ...pageState,
          currentPage: TOTAL_PAGES + 1, // Completion page
          isTimeUp: false,
        });

        // Save current page to local storage
        localStorage.setItem(LS_KEYS.CURRENT_PAGE, String(TOTAL_PAGES + 1));
      } else {
        setPageState({
          ...pageState,
          currentPage: nextPage,
          timeRemaining: TIME_LIMIT_PER_PAGE,
          isTimeUp: false,
        });

        // Save current page to local storage
        localStorage.setItem(LS_KEYS.CURRENT_PAGE, String(nextPage));
      }
    }, 0);
  };

  // Submit assessment to database
  const submitAssessment = async () => {
    // Get answers from local storage
    const savedAnswers = localStorage.getItem(LS_KEYS.ANSWERS);
    const answers = savedAnswers ? JSON.parse(savedAnswers) : {};

    // Calculate score
    let score = 0;

    interviewQuestions.forEach((question) => {
      if (answers[question.id] === question.correct_answer) {
        score++;
      }
    });

    // Calculate duration
    const endTime = new Date();
    const durationSeconds = startTime ? Math.floor((endTime.getTime() - startTime.getTime()) / 1000) : 0;

    try {
      if (sessionId) {
        // Update the interview session with the final data
        const { error } = await updateInterviewSession(sessionId, {
          answers,
          end_time: endTime.toISOString(),
          duration_seconds: durationSeconds,
          score,
          submitted: true,
        });

        if (error) {
          console.error('Error finalizing interview session:', error);
          alert('There was an error submitting your assessment. Please try again.');
          return false;
        }

        // Clear local storage after successful submission
        localStorage.removeItem(LS_KEYS.ANSWERS);
        localStorage.removeItem(LS_KEYS.CANDIDATE);
        localStorage.removeItem(LS_KEYS.CURRENT_PAGE);
        localStorage.removeItem(LS_KEYS.START_TIME);
        // Keep session ID for reference on completion page

        setPageState({
          ...pageState,
          isSubmitted: true,
        });

        return true;
      } else {
        alert('Session ID not found. Please restart the assessment.');
        return false;
      }
    } catch (error) {
      console.error('Error finalizing interview session:', error);
      alert('There was an error submitting your assessment. Please try again.');
      return false;
    }
  };

  // Render the appropriate component based on the current page
  const renderContent = () => {
    if (pageState.currentPage === 0) {
      return <CandidateForm onSubmit={handleCandidateSubmit} />;
    } else if (pageState.currentPage >= 1 && pageState.currentPage <= TOTAL_PAGES) {
      return (
        <QuestionPage
          questions={getCurrentPageQuestions()}
          pageNumber={pageState.currentPage}
          initialAnswers={pageState.answers}
          timeLimit={TIME_LIMIT_PER_PAGE}
          onNext={handleQuestionPageNext}
          totalPages={TOTAL_PAGES}
        />
      );
    } else if (pageState.currentPage === TOTAL_PAGES + 1) {
      return <CompletionPage sessionId={sessionId || ''} onSubmit={submitAssessment} />;
    }

    // Fallback if none of the conditions match
    return <CandidateForm onSubmit={handleCandidateSubmit} />;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Interview Assessment | Quadrate Tech Solutions"
        description="Complete our technical interview assessment to showcase your software engineering skills."
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Software Engineering Interview Assessment
          </h1>
          {pageState.currentPage >= 1 && pageState.currentPage <= TOTAL_PAGES && (
            <p className="mt-3 text-xl text-gray-500">
              Answer the following questions to the best of your ability.
            </p>
          )}
        </div>

        {renderContent()}

        {showTimeUpModal && <TimeUpModal onContinue={handleTimeUpContinue} />}
      </div>
    </div>
  );
};

export default InterviewAssessment;

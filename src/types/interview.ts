export interface Question {
  id: number;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: 'A' | 'B' | 'C' | 'D';
  category: string;
  explanation?: string;
}

export interface CandidateDetails {
  full_name: string;
  email: string;
  is_university: boolean;
  university_name?: string;
}

export interface InterviewSession {
  id?: string;
  full_name: string;
  email: string;
  is_university: boolean;
  university_name?: string;
  start_time?: string;
  end_time?: string;
  duration_seconds?: number;
  score?: number;
  submitted?: boolean;
  answers?: Record<string, string>;
}

export interface PageState {
  currentPage: number;
  timeRemaining: number;
  answers: Record<string, string>;
  isSubmitted: boolean;
  isTimeUp: boolean;
}

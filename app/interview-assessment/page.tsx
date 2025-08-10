import type { Metadata } from 'next';
import InterviewAssessment from '@/pages/InterviewAssessment';

export const metadata: Metadata = {
  title: 'Interview Assessment',
  description: 'Take our comprehensive interview assessment to evaluate your technical skills and knowledge in software development.',
};

export default function InterviewAssessmentPage() {
  return <InterviewAssessment />;
}

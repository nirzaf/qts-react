import type { Metadata } from 'next';
import InterviewAssessment from '@/pages/InterviewAssessment';

export const metadata: Metadata = {
  title: 'Interview Assessment',
  description: 'Complete our technical interview assessment to showcase your software engineering skills.',
};

export default function InterviewAssessmentPage() {
  return <InterviewAssessment />;
}

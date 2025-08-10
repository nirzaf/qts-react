import type { Metadata } from 'next';
import Home from '@/pages/Home';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Quadrate Tech Solutions - Your trusted partner for innovative software development, AI/ML solutions, and digital transformation services.',
};

export default function HomePage() {
  return <Home />;
}

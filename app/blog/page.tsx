import type { Metadata } from 'next';
import Blog from '@/pages/Blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with the latest insights, trends, and best practices in software development, AI/ML, and technology from our expert team.',
};

export default function BlogPage() {
  return <Blog />;
}

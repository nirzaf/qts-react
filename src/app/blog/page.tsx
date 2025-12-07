import type { Metadata } from 'next';
import BlogPage from '@/pages/Blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore our blog for insights on software development, web development, digital marketing, IT trends, and technology innovations.',
  keywords: 'tech blog, software development articles, web development tips, digital marketing insights, IT trends, technology innovations',
  openGraph: {
    title: 'Blog | Quadrate Tech Solutions',
    description: 'Explore our blog for insights on software development, web development, digital marketing, IT trends, and technology innovations.',
    url: 'https://quadrate.lk/blog',
  },
  alternates: {
    canonical: 'https://quadrate.lk/blog',
  },
};

export default function Blog() {
  return <BlogPage />;
}

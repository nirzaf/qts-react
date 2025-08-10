import type { Metadata } from 'next';
import BlogPost from '@/pages/BlogPost';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // You can fetch blog post data here to generate dynamic metadata
  const { id } = await params;
  
  return {
    title: `Blog Post - ${id}`,
    description: `Read our latest blog post about software development, AI/ML, and technology insights.`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  return <BlogPost />;
}

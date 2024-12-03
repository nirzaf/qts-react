import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/layouts/PageLayout';
import MDXContent from '@/components/mdx/MDXContent';
import { parseMDX } from '@/utils/mdx';

const BlogPost: React.FC = () => {
  const [content, setContent] = useState('');
  const [frontmatter, setFrontmatter] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadMDX = async () => {
      try {
        const response = await fetch(`/src/data/model-md-files/${id}.mdx`);
        if (!response.ok) throw new Error('Failed to load blog post');
        
        const mdxText = await response.text();
        const { content: parsedContent, frontmatter: parsedFrontmatter } = await parseMDX(mdxText);
        
        setContent(parsedContent);
        setFrontmatter(parsedFrontmatter);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadMDX();
  }, [id]);

  if (loading) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">Loading...</div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg text-red-600">{error}</div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <MDXContent content={content} frontmatter={frontmatter} />
      </div>
    </PageLayout>
  );
};

export default BlogPost;

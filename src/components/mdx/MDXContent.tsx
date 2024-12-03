import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MDXContentProps {
  content: string;
  frontmatter?: {
    title?: string;
    description?: string;
    pubDate?: string;
    heroImage?: string;
    category?: string;
    tags?: string[];
  };
}

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mb-3" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-bold mb-2" {...props} />,
  p: (props: any) => <p className="mb-4 text-gray-700" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  code: ({ className, children }: any) => {
    const language = className ? className.replace('language-', '') : 'text';
    return (
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="rounded-lg my-4"
      >
        {children}
      </SyntaxHighlighter>
    );
  },
  pre: (props: any) => <div {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
  ),
};

export const MDXContent: React.FC<MDXContentProps> = ({ content, frontmatter }) => {
  return (
    <article className="prose prose-lg max-w-none">
      {frontmatter && (
        <header className="mb-8">
          {frontmatter.heroImage && (
            <img
              src={frontmatter.heroImage}
              alt={frontmatter.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-xl text-gray-600 mb-4">{frontmatter.description}</p>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {frontmatter.category && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {frontmatter.category}
              </span>
            )}
            {frontmatter.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          {frontmatter.pubDate && (
            <time className="text-gray-500">
              Published on {new Date(frontmatter.pubDate).toLocaleDateString()}
            </time>
          )}
        </header>
      )}
      <MDXProvider components={components}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </MDXProvider>
    </article>
  );
};

export default MDXContent; 
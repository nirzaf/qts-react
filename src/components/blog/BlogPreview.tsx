import { FC, useState, useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import { format } from 'date-fns';

interface BlogPreviewProps {
  title: string;
  content: string;
  pub_date: string;
  description: string;
  hero_image: string;
  author: string;
  author_role: string;
  author_image: string;
  category: string;
  tags: string | string[];
}

export const BlogPreview: FC<BlogPreviewProps> = ({
  title,
  content,
  pub_date,
  description,
  hero_image,
  author,
  author_role,
  author_image,
  category,
  tags
}) => {
  const [mdxSource, setMdxSource] = useState(null);
  const formattedTags = typeof tags === 'string' ? tags.split(',') : tags;

  useEffect(() => {
    const processMdx = async () => {
      try {
        // Remove any potential duplicate markdown symbols
        const cleanContent = content
          .replace(/#{2,}/g, '#') // Remove duplicate #
          .replace(/\*{2,}/g, '*') // Remove duplicate *
          .replace(/_{2,}/g, '_'); // Remove duplicate _

        const mdxSource = await serialize(cleanContent, {
          mdxOptions: {
            remarkPlugins: [
              remarkGfm,
              remarkUnwrapImages
            ],
            rehypePlugins: [
              rehypeSlug,
              [rehypeHighlight, { ignoreMissing: true }]
            ],
            format: 'mdx'
          },
          parseFrontmatter: true
        });
        setMdxSource(mdxSource);
      } catch (error) {
        console.error('Error processing MDX:', error);
      }
    };
    
    processMdx();
  }, [content]);

  const customComponents = {
    h1: (props) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-3xl font-bold mt-6 mb-3 text-gray-900" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-900" {...props} />
    ),
    p: (props) => (
      <p className="text-gray-700 leading-relaxed mb-4" {...props} />
    ),
    ul: (props) => (
      <ul className="list-disc list-inside space-y-2 mb-4 ml-4" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 ml-4" {...props} />
    ),
    li: (props) => (
      <li className="text-gray-700" {...props} />
    ),
    code: ({ className, ...props }) => (
      <code
        className={className ? 
          `${className} px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 text-sm font-mono` : 
          'px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 text-sm font-mono'}
        {...props}
      />
    ),
    pre: (props) => (
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto font-mono text-sm" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 my-4 italic text-gray-700" {...props} />
    ),
    a: (props) => (
      <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
    ),
    img: (props) => (
      <img className="rounded-lg my-4 max-w-full h-auto" {...props} />
    ),
    hr: () => (
      <hr className="my-8 border-t border-gray-200" />
    ),
    table: (props) => (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full divide-y divide-gray-200" {...props} />
      </div>
    ),
    th: (props) => (
      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
    ),
    td: (props) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" {...props} />
    )
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {hero_image && (
        <div className="relative h-72 w-full">
          <img
            src={hero_image}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      )}
      
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
          
          {description && (
            <p className="text-gray-600 text-lg mb-6">{description}</p>
          )}
          
          <div className="flex items-center mb-6">
            {author_image && (
              <img
                src={author_image}
                alt={author}
                className="w-12 h-12 rounded-full mr-4 border-2 border-gray-200"
              />
            )}
            <div>
              {author && (
                <p className="text-gray-800 font-medium">{author}</p>
              )}
              {author_role && (
                <p className="text-gray-600 text-sm">{author_role}</p>
              )}
              <p className="text-gray-500 text-sm">
                {format(new Date(pub_date), 'MMMM dd, yyyy')}
              </p>
            </div>
          </div>

          {(category || formattedTags.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {category && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {category}
                </span>
              )}
              {formattedTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
        </div>

        <article className="prose prose-lg max-w-none">
          {mdxSource && (
            <MDXRemote {...mdxSource} components={customComponents} />
          )}
        </article>
      </div>
    </div>
  );
};

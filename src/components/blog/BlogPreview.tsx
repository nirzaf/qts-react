import { FC } from 'react';
import MDEditor from '@uiw/react-md-editor';
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
  const formattedTags = typeof tags === 'string' ? tags.split(',') : tags;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {hero_image && (
        <div className="relative h-72 w-full">
          <img
            src={hero_image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          
          {description && (
            <p className="text-gray-600 text-lg mb-6">{description}</p>
          )}
          
          <div className="flex items-center mb-6">
            {author_image && (
              <img
                src={author_image}
                alt={author}
                className="w-12 h-12 rounded-full mr-4"
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
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                  {category}
                </span>
              )}
              {formattedTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="prose max-w-none">
          <MDEditor.Markdown source={content} />
        </div>
      </div>
    </div>
  );
};

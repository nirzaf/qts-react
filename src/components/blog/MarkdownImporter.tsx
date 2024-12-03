import React, { useState, useRef } from 'react';
import { parseMarkdownFile, validateBlogPost, type MarkdownBlogPost } from '@/utils/markdownParser';

interface MarkdownImporterProps {
  onImport: (blogPost: MarkdownBlogPost) => Promise<void>;
}

export default function MarkdownImporter({ onImport }: MarkdownImporterProps) {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState<MarkdownBlogPost | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setPreview(null);
    
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.name.endsWith('.md') && !file.name.endsWith('.mdx')) {
      setError('Please select a valid Markdown file (.md or .mdx)');
      return;
    }

    setIsLoading(true);
    try {
      const content = await file.text();
      const blogPost = parseMarkdownFile(content);

      if (!blogPost) {
        setError('Failed to parse Markdown file. Please check the file format.');
        return;
      }

      const validationErrors = validateBlogPost(blogPost);
      if (validationErrors.length > 0) {
        setError(`Validation errors:\n${validationErrors.join('\n')}`);
        return;
      }

      setPreview(blogPost);
    } catch (err) {
      setError('Error reading file: ' + (err instanceof Error ? err.message : 'Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleImport = async () => {
    if (!preview) return;

    setIsLoading(true);
    try {
      await onImport(preview);
      setPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      setError('Error importing blog post: ' + (err instanceof Error ? err.message : 'Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <input
          type="file"
          accept=".md,.mdx"
          onChange={handleFileSelect}
          ref={fileInputRef}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
          disabled={isLoading}
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md whitespace-pre-line">
          {error}
        </div>
      )}

      {preview && (
        <div className="bg-white p-4 rounded-md border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Preview</h3>
          <dl className="grid grid-cols-1 gap-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Title</dt>
              <dd className="text-sm text-gray-900">{preview.title}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="text-sm text-gray-900">{preview.description}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Publication Date</dt>
              <dd className="text-sm text-gray-900">
                {new Date(preview.pubDate).toLocaleDateString()}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Category</dt>
              <dd className="text-sm text-gray-900">{preview.category}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Tags</dt>
              <dd className="text-sm text-gray-900">{preview.tags.join(', ')}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Hero Image</dt>
              <dd className="text-sm text-gray-900">{preview.heroImage}</dd>
            </div>
          </dl>
          <div className="mt-4">
            <button
              onClick={handleImport}
              disabled={isLoading}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
            >
              {isLoading ? 'Importing...' : 'Import Blog Post'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

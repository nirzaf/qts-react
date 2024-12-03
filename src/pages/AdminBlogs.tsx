import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { parseMDX } from '@/utils/mdx';
import PageLayout from '@/layouts/PageLayout';
import MDXContent from '@/components/mdx/MDXContent';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface BlogFormData {
  title: string;
  slug: string;
  description: string;
  content: string;
  pub_date: string;
  hero_image: string;
  category: string;
  tags: string;
  author: string;
  author_role: string;
  author_image: string;
}

const AdminBlogs: React.FC = () => {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    description: '',
    content: '',
    pub_date: new Date().toISOString().split('T')[0],
    hero_image: '',
    category: '',
    tags: '',
    author: '',
    author_role: '',
    author_image: ''
  });
  const [mdxContent, setMdxContent] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMDXImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const { content, frontmatter } = await parseMDX(text);
      
      setMdxContent(content);
      setFormData(prev => ({
        ...prev,
        title: frontmatter.title || '',
        description: frontmatter.description || '',
        hero_image: frontmatter.heroImage || '',
        category: frontmatter.category || '',
        tags: frontmatter.tags?.join(', ') || '',
        content: content,
        slug: file.name.replace('.mdx', '')
      }));
    } catch (err) {
      console.error('Error importing MDX:', err);
      setError('Failed to import MDX file');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('blogs')
        .insert([{
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim()),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }]);

      if (supabaseError) throw supabaseError;

      // Reset form after successful submission
      setFormData({
        title: '',
        slug: '',
        description: '',
        content: '',
        pub_date: new Date().toISOString().split('T')[0],
        hero_image: '',
        category: '',
        tags: '',
        author: '',
        author_role: '',
        author_image: ''
      });
      setMdxContent('');
      setPreviewMode(false);
    } catch (err) {
      console.error('Error creating blog:', err);
      setError('Failed to create blog post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Create Blog Post</h1>
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="px-4 py-2 bg-[#0607E1] text-white rounded-md hover:bg-[#0607E1]/90"
          >
            {previewMode ? 'Edit Mode' : 'Preview Mode'}
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-md">
            {error}
          </div>
        )}

        {previewMode ? (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <MDXContent
              content={mdxContent}
              frontmatter={{
                title: formData.title,
                description: formData.description,
                pubDate: formData.pub_date,
                heroImage: formData.hero_image,
                category: formData.category,
                tags: formData.tags.split(',').map(tag => tag.trim())
              }}
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Import MDX File
              </label>
              <input
                type="file"
                accept=".mdx"
                onChange={handleMDXImport}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={e => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Publication Date</label>
                <input
                  type="date"
                  value={formData.pub_date}
                  onChange={e => setFormData({ ...formData, pub_date: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Hero Image URL</label>
                <input
                  type="url"
                  value={formData.hero_image}
                  onChange={e => setFormData({ ...formData, hero_image: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={e => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={e => setFormData({ ...formData, author: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Author Role</label>
                <input
                  type="text"
                  value={formData.author_role}
                  onChange={e => setFormData({ ...formData, author_role: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Author Image URL</label>
                <input
                  type="url"
                  value={formData.author_image}
                  onChange={e => setFormData({ ...formData, author_image: e.target.value })}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Content</label>
              <textarea
                value={formData.content}
                onChange={e => setFormData({ ...formData, content: e.target.value })}
                className="w-full p-2 border rounded-md font-mono"
                rows={10}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-[#0607E1] text-white rounded-md hover:bg-[#0607E1]/90 disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Blog Post'}
            </button>
          </form>
        )}
      </div>
    </PageLayout>
  );
};

export default AdminBlogs;

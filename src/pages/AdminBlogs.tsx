import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { supabase } from '@/lib/supabase/blogs';
import { BlogPreview } from '@/components/blog/BlogPreview';
import MarkdownEditor from '@/components/markdown/MarkdownEditor';

interface BlogFormData {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  pub_date: string;
  hero_image: string;
  category: string;
  tags: string;
  author: string;
  author_role: string;
  author_image: string;
  created_at?: string;
  updated_at?: string;
}

interface BlogResponse extends Omit<BlogFormData, 'tags'> {
  tags: string[];
}

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<BlogResponse[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogResponse | null>(null);
  const [formData, setFormData] = useState<BlogFormData>({
    id: '',
    slug: '',
    title: '',
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
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const blogData = {
      ...formData,
      tags: formData.tags.split(',').map((tag: string) => tag.trim()).filter(Boolean)
    };

    try {
      if (selectedBlog) {
        const { error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', selectedBlog.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([blogData]);
        if (error) throw error;
      }

      setSelectedBlog(null);
      setFormData({
        id: '',
        slug: '',
        title: '',
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
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const handleEdit = (blog: BlogResponse) => {
    setSelectedBlog(blog);
    setFormData({
      ...blog,
      tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags,
      pub_date: new Date(blog.pub_date).toISOString().split('T')[0]
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (showPreview) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Preview</h1>
          <button
            onClick={() => setShowPreview(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back to Editor
          </button>
        </div>
        <BlogPreview {...formData} />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Admin</h1>
        <button
          onClick={() => setShowPreview(true)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Preview
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Publication Date</label>
            <input
              type="date"
              name="pub_date"
              value={formData.pub_date}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Hero Image URL</label>
            <input
              type="url"
              name="hero_image"
              value={formData.hero_image}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Author Role</label>
            <input
              type="text"
              name="author_role"
              value={formData.author_role}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Author Image URL</label>
            <input
              type="url"
              name="author_image"
              value={formData.author_image}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content (Markdown)</label>
          <MarkdownEditor
            value={formData.content}
            onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
            className="mt-1"
          />
        </div>

        <div className="flex justify-end space-x-4">
          {selectedBlog && (
            <button
              type="button"
              onClick={() => {
                setSelectedBlog(null);
                setFormData({
                  id: '',
                  slug: '',
                  title: '',
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
              }}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
          >
            {selectedBlog ? 'Update Blog' : 'Create Blog'}
          </button>
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Existing Blogs</h2>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
            >
              <div>
                <h3 className="font-medium">{blog.title}</h3>
                <p className="text-sm text-gray-500">
                  {format(new Date(blog.pub_date), 'MMMM dd, yyyy')}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

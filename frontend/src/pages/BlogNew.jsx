import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Lock } from 'lucide-react';
import { toast } from 'sonner';

const BLOG_EDIT_STORAGE_KEY = 'blog_edit_key';

const BlogNew = () => {
  usePageTitle('Write a post');
  const navigate = useNavigate();
  const [editKey, setEditKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keyCheckDone, setKeyCheckDone] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: 'ApexNexon Team',
    category: 'Insights',
    read_time: '5 min read',
    image: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [keySubmitting, setKeySubmitting] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB
  const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  useEffect(() => {
    const stored = sessionStorage.getItem(BLOG_EDIT_STORAGE_KEY);
    if (stored) {
      setEditKey(stored);
      setIsAuthenticated(true);
      setKeyCheckDone(true);
      return;
    }
    const url = process.env.REACT_APP_BACKEND_URL;
    if (!url) {
      setKeyCheckDone(true);
      return;
    }
    fetch(`${url}/api/blog/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: '' })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.message === 'No key configured') {
          setIsAuthenticated(true);
        }
      })
      .catch(() => {})
      .finally(() => setKeyCheckDone(true));
  }, []);

  const handleKeySubmit = async (e) => {
    e.preventDefault();
    if (!keyInput.trim()) return;
    setKeySubmitting(true);
    try {
      const url = process.env.REACT_APP_BACKEND_URL;
      const res = await fetch(`${url}/api/blog/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: keyInput.trim() })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Invalid key');
      }
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem(BLOG_EDIT_STORAGE_KEY, keyInput.trim());
        setEditKey(keyInput.trim());
        setIsAuthenticated(true);
        setKeyInput('');
        toast.success('Access granted.');
      } else throw new Error('Invalid key');
    } catch (err) {
      toast.error(err.message || 'Invalid edit key.');
    } finally {
      setKeySubmitting(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(BLOG_EDIT_STORAGE_KEY);
    setEditKey('');
    setIsAuthenticated(false);
    toast.success('Logged out.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageFile = async (e) => {
    const file = e.target.files?.[0];
    const input = e.target;
    if (!file) return;
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      toast.error('Use JPEG, PNG, GIF or WebP only.');
      if (input) input.value = '';
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      toast.error('Image must be under 2MB.');
      if (input) input.value = '';
      return;
    }
    setImageUploading(true);
    try {
      const url = process.env.REACT_APP_BACKEND_URL;
      const key = sessionStorage.getItem('blog_edit_key');
      const form = new FormData();
      form.append('file', file);
      const headers = {};
      if (key) headers['X-Blog-Edit-Key'] = key;
      const res = await fetch(`${url}/api/blog/upload-image`, {
        method: 'POST',
        headers,
        body: form
      });
      if (res.status === 401) {
        toast.error('Session expired. Log in again.');
        sessionStorage.removeItem('blog_edit_key');
        setIsAuthenticated(false);
        return;
      }
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Upload failed');
      }
      const data = await res.json();
      setFormData((prev) => ({ ...prev, image: data.url }));
      toast.success('Image uploaded.');
    } catch (err) {
      toast.error(err.message || 'Could not upload image.');
    } finally {
      setImageUploading(false);
      if (input) input.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const url = process.env.REACT_APP_BACKEND_URL;
      const headers = { 'Content-Type': 'application/json' };
      if (editKey) headers['X-Blog-Edit-Key'] = editKey;
      const res = await fetch(`${url}/api/blog`, {
        method: 'POST',
        headers,
        body: JSON.stringify(formData)
      });
      if (res.status === 401) {
        sessionStorage.removeItem(BLOG_EDIT_STORAGE_KEY);
        setIsAuthenticated(false);
        setEditKey('');
        toast.error('Session expired. Please enter the edit key again.');
        return;
      }
      if (!res.ok) throw new Error('Failed to create post');
      const post = await res.json();
      toast.success('Blog post published!');
      navigate('/blog');
    } catch (err) {
      console.error(err);
      toast.error('Could not publish. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen pt-[80px]">
      <section className="py-16 relative">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-[7.6923%]">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#00FFD1] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {!keyCheckDone ? (
              <p className="body-medium text-white/70">Checking access…</p>
            ) : !isAuthenticated ? (
              <>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 mb-6">
                  <Lock size={20} className="text-[#00FFD1]" />
                  <span className="text-sm text-white/80">Editor access required</span>
                </div>
                <h1 className="display-large mb-2">Enter edit key</h1>
                <p className="body-medium text-white/70 mb-8">
                  Only authorized editors can write posts. Enter the edit key to continue.
                </p>
                <form onSubmit={handleKeySubmit} className="space-y-4 max-w-md">
                  <input
                    type="password"
                    value={keyInput}
                    onChange={(e) => setKeyInput(e.target.value)}
                    placeholder="Edit key"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50"
                    required
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    disabled={keySubmitting}
                    className="btn-primary disabled:opacity-50"
                  >
                    {keySubmitting ? 'Checking…' : 'Continue'}
                  </button>
                </form>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-white/60">Editor access granted</span>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-sm text-white/60 hover:text-[#00FFD1] transition-colors"
                  >
                    Log out
                  </button>
                </div>
                <h1 className="display-large mb-2">Write a <span style={{ color: '#00FFD1' }}>blog post</span></h1>
                <p className="body-medium text-white/70 mb-10">
                  New posts are saved to the blog and shown on the Blog page.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block body-medium text-white/90 mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50"
                  placeholder="How AI is Transforming Business in 2025"
                />
              </div>

              <div>
                <label className="block body-medium text-white/90 mb-2">Excerpt *</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={3}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50 resize-none"
                  placeholder="Short summary for the card (1–2 sentences)."
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block body-medium text-white/90 mb-2">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    maxLength={100}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50"
                    placeholder="ApexNexon Team"
                  />
                </div>
                <div>
                  <label className="block body-medium text-white/90 mb-2">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    maxLength={80}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50"
                    placeholder="AI & Automation"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block body-medium text-white/90 mb-2">Read time</label>
                  <input
                    type="text"
                    name="read_time"
                    value={formData.read_time}
                    onChange={handleChange}
                    maxLength={20}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50"
                    placeholder="5 min read"
                  />
                </div>
                <div>
                  <label className="block body-medium text-white/90 mb-2">Image (optional, max 2MB)</label>
                  <div className="space-y-2">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/gif,image/webp"
                      onChange={handleImageFile}
                      disabled={imageUploading}
                      className="w-full text-white/80 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[#00FFD1]/20 file:text-[#00FFD1] file:cursor-pointer"
                    />
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="w-full px-6 py-3 bg-white/5 border border-white/10 text-white body-small focus:outline-none focus:border-[#00FFD1]/50"
                      placeholder="Or paste image URL"
                    />
                    {imageUploading && <span className="text-sm text-white/50">Uploading…</span>}
                  </div>
                </div>
              </div>

              <div>
                <label className="block body-medium text-white/90 mb-2">Full content (optional)</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={8}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white body-medium focus:outline-none focus:border-[#00FFD1]/50 resize-none"
                  placeholder="Full post body. You can use plain text or HTML later."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Publishing…' : 'Publish post'}
                  <Send size={20} />
                </button>
                <Link to="/blog" className="btn-secondary">
                  Cancel
                </Link>
              </div>
            </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogNew;

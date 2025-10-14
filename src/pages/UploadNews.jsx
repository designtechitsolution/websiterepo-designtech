import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/admin"); // redirect to login if not logged in
    } else {
      fetchNews();
    }
  }, [navigate]);

  const fetchNews = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/news");
      const data = await res.json();
      setNewsList(data);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newsData = { title, content, image };

    try {
      const url = editingId
        ? `http://localhost:5000/api/news/${editingId}`
        : "http://localhost:5000/api/news";
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsData),
      });

      if (res.ok) {
        alert(editingId ? "✅ News updated successfully!" : "✅ News uploaded successfully!");
        setTitle("");
        setContent("");
        setImage(null);
        setEditingId(null);
        fetchNews();
      } else {
        alert("❌ Failed to save news.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error connecting to backend.");
    }
  };

  const handleEdit = (news) => {
    setTitle(news.title);
    setContent(news.content);
    setImage(news.image);
    setEditingId(news._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this news?")) {
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/news/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("✅ News deleted successfully!");
        fetchNews();
      } else {
        alert("❌ Failed to delete news.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error connecting to backend.");
    }
  };

  const handleCancelEdit = () => {
    setTitle("");
    setContent("");
    setImage(null);
    setEditingId(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-y-auto">
      {/* Enhanced Background Effects */}
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-600 opacity-20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600 opacity-10 rounded-full blur-[100px]"></div>

      {/* Main Card */}
      <div className="relative w-full max-w-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,180,216,0.15)] rounded-3xl p-10 z-10 transition-all duration-300 hover:shadow-[0_8px_48px_0_rgba(0,180,216,0.25)]">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-2xl">{editingId ? "✏️" : "📰"}</span>
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              {editingId ? "Edit News" : "Upload News"}
            </h2>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300"
          >
            <span className="mr-2">🚪</span>Logout
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Title Input */}
          <div className="group">
            <label className="block text-sm font-medium text-cyan-300 mb-2">News Title</label>
            <input
              type="text"
              placeholder="Enter an engaging title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-5 py-4 rounded-xl bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/10 transition-all duration-300 group-hover:border-white/20"
            />
          </div>

          {/* Content Textarea */}
          <div className="group">
            <label className="block text-sm font-medium text-cyan-300 mb-2">News Content</label>
            <textarea
              placeholder="Write your news content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              required
              className="w-full px-5 py-4 rounded-xl bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent focus:bg-white/10 transition-all duration-300 resize-none group-hover:border-white/20"
            />
          </div>

          {/* File Upload */}
          <div className="group">
            <label className="block text-sm font-medium text-cyan-300 mb-2">Featured Image</label>
            <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-cyan-400/30 rounded-xl px-8 py-8 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-[1.01]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center mb-3">
                <span className="text-3xl">📷</span>
              </div>
              <span className="block text-base font-semibold text-white mb-1">Click to upload image</span>
              <span className="block text-xs text-gray-400">PNG, JPG, GIF up to 10MB</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Image Preview */}
          {image && (
            <div className="relative group/preview">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl blur opacity-20 group-hover/preview:opacity-30 transition-opacity"></div>
              <img
                src={image}
                alt="Preview"
                className="relative w-full max-h-[280px] object-cover rounded-xl shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mt-2">
            <button
              type="submit"
              className="flex-1 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-lg shadow-xl hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group/btn"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2">
                <span className="text-xl">{editingId ? "💾" : "🚀"}</span>
                {editingId ? "Update News" : "Publish News"}
              </span>
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold shadow-lg hover:shadow-gray-500/50 hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">❌</span>Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* News List Section */}
      {newsList.length > 0 && (
        <div className="relative w-full max-w-3xl mt-10 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,180,216,0.15)] rounded-3xl p-10 z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-xl">📋</span>
            </div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Manage News
            </h3>
            <span className="ml-auto px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold border border-cyan-400/30">
              {newsList.length} {newsList.length === 1 ? 'Article' : 'Articles'}
            </span>
          </div>
          
          <div className="space-y-5">
            {newsList.map((news) => (
              <div
                key={news._id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/item hover:scale-[1.01]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover/item:text-cyan-300 transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {news.content}
                    </p>
                    {news.image && (
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full max-h-40 object-cover rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-3 shrink-0">
                    <button
                      onClick={() => handleEdit(news)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                    >
                      <span className="mr-1.5">✏️</span>Edit
                    </button>
                    <button
                      onClick={() => handleDelete(news._id)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                    >
                      <span className="mr-1.5">🗑️</span>Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadNews;

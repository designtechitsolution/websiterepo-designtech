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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-6 sm:py-8 md:py-12 px-3 sm:px-4 lg:px-6">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50"></div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section - Responsive */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8 md:mb-10">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
              {editingId ? "✏️ Edit News" : "📰 News Dashboard"}
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              {editingId ? "Update your article" : "Create and manage your news articles"}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="self-start sm:self-auto px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-red-500 text-white text-sm sm:text-base font-semibold hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>

        {/* Form Card - Responsive */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 hover:shadow-xl transition-shadow duration-300">

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                News Title *
              </label>
              <input
                type="text"
                placeholder="Enter news title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* Content Textarea */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                News Content *
              </label>
              <textarea
                placeholder="Write your news content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                Featured Image (Optional)
              </label>
              <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg px-4 sm:px-6 py-6 sm:py-8 bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-all duration-200 group">
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 block group-hover:scale-110 transition-transform">📷</span>
                  <span className="block text-xs sm:text-sm font-medium text-gray-700">Click to upload image</span>
                  <span className="block text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</span>
                </div>
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
              <div className="relative">
                <img
                  src={image}
                  alt="Preview"
                  className="w-full max-h-[200px] sm:max-h-[250px] md:max-h-[300px] object-cover rounded-lg shadow-md border border-gray-200"
                />
                <button
                  type="button"
                  onClick={() => setImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-md"
                >
                  ✕ Remove
                </button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
              <button
                type="submit"
                className="flex-1 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{editingId ? "💾" : "🚀"}</span>
                <span>{editingId ? "Update News" : "Publish News"}</span>
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-gray-500 text-white font-bold text-sm sm:text-base shadow-lg hover:bg-gray-600 active:scale-95 transition-all duration-200"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* News List - Responsive */}
        {newsList.length > 0 && (
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                <span>📋</span>
                <span>Published News</span>
              </h3>
              <span className="self-start sm:self-auto px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs sm:text-sm font-semibold">
                {newsList.length} {newsList.length === 1 ? 'Article' : 'Articles'}
              </span>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {newsList.map((news) => (
                <div
                  key={news._id}
                  className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 hover:shadow-md hover:border-blue-300 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {news.image && (
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full sm:w-28 md:w-32 lg:w-40 h-40 sm:h-28 md:h-32 lg:h-40 object-cover rounded-lg border border-gray-200 flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 line-clamp-2">
                        {news.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3 sm:mb-4">
                        {news.content}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleEdit(news)}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-blue-500 text-white text-xs sm:text-sm font-semibold hover:bg-blue-600 active:scale-95 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
                        >
                          <span>✏️</span>
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(news._id)}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-red-500 text-white text-xs sm:text-sm font-semibold hover:bg-red-600 active:scale-95 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
                        >
                          <span>🗑️</span>
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadNews;

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
    <div className="relative min-h-screen flex flex-col items-center justify-start py-12 bg-gradient-to-br from-[#1a1f2c] via-[#0f172a] to-[#1e293b] overflow-y-auto">
      {/* Background blobs */}
      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] bg-[#00B4D8] opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0077B6] opacity-30 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Card */}
      <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 z-10">
        {/* Logout */}
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium shadow hover:bg-red-600 transition"
        >
          🚪 Logout
        </button>

        <h2 className="text-3xl font-extrabold text-center text-white mb-6">
          {editingId ? "✏️ Edit News" : "📰 Upload News"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Title */}
          <input
            type="text"
            placeholder="Enter News Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] transition"
          />

          {/* Content */}
          <textarea
            placeholder="Enter News Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] transition"
          />

          {/* File Upload */}
          <label className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-[#00B4D8] rounded-lg px-6 py-6 bg-white/5 text-gray-300 hover:bg-white/10 transition">
            <span className="block text-sm font-medium">📷 Click to upload image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {/* Preview */}
          {image && (
            <img
              src={image}
              alt="Preview"
              className="w-full max-h-[200px] object-cover rounded-lg mt-2 shadow-lg hover:scale-[1.02] transition-transform duration-300"
            />
          )}

          {/* Submit */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold shadow-lg hover:shadow-[#00B4D8]/40 hover:scale-[1.02] transition-transform duration-300"
            >
              {editingId ? "💾 Update News" : "🚀 Upload News"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-6 py-3 rounded-lg bg-gray-500 text-white font-bold shadow-lg hover:bg-gray-600 transition"
              >
                ❌ Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* News List */}
      {newsList.length > 0 && (
        <div className="relative w-full max-w-2xl mt-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 z-10">
          <h3 className="text-2xl font-bold text-white mb-6">📋 Manage News</h3>
          <div className="space-y-4">
            {newsList.map((news) => (
              <div
                key={news._id}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {news.title}
                    </h4>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {news.content}
                    </p>
                    {news.image && (
                      <img
                        src={news.image}
                        alt={news.title}
                        className="mt-3 w-full max-h-32 object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleEdit(news)}
                      className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium shadow hover:bg-blue-600 transition"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(news._id)}
                      className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium shadow hover:bg-red-600 transition"
                    >
                      🗑️ Delete
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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/admin"); // redirect to login if not logged in
    }
  }, [navigate]);

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

    const newPost = { title, content, image };

    try {
      const res = await fetch("http://localhost:5000/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (res.ok) {
        alert("✅ News uploaded successfully!");
        setTitle("");
        setContent("");
        setImage(null);
      } else {
        alert("❌ Failed to upload news.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error connecting to backend.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1f2c] via-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#00B4D8] opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0077B6] opacity-30 rounded-full blur-3xl animate-pulse delay-700"></div>

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
          📰 Upload News
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
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold shadow-lg hover:shadow-[#00B4D8]/40 hover:scale-[1.02] transition-transform duration-300"
          >
            🚀 Upload News
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadNews;

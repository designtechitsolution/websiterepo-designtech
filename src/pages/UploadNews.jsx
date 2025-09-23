import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/background.jpg";

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
    localStorage.removeItem("isAdmin"); // clear login
    navigate("/admin"); // redirect to login page
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
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#d9f1ff] via-[#f9fcff] to-[#ffffff]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Page Wrapper */}
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-6 flex flex-col relative">

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium shadow hover:bg-red-600 transition"
        >
          🚪 Logout
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0077b6] mb-4">
          Upload News 📰
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow">
          {/* Title */}
          <input
            type="text"
            placeholder="Enter News Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="px-4 py-3 border border-gray-200 rounded-xl bg-white/70 text-gray-900 text-base shadow-sm focus:outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/40 transition-all"
          />

          {/* Content */}
          <textarea
            placeholder="Enter News Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
            className="px-4 py-3 border border-gray-200 rounded-xl bg-white/70 text-gray-900 text-base shadow-sm focus:outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/40 transition-all"
          />

          {/* File Upload */}
          <label className="cursor-pointer border border-dashed border-[#0077b6] rounded-xl px-4 py-6 bg-[#f0faff] text-center text-gray-700 hover:bg-[#e0f6ff] transition-all">
            <span className="block text-sm font-medium">
              📷 Click to upload image
            </span>
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
              className="w-full max-h-[200px] object-cover rounded-xl mt-2 shadow-lg hover:scale-[1.02] transition-transform duration-300"
            />
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white text-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            🚀 Upload News
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadNews;

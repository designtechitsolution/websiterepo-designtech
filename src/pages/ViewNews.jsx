import React, { useEffect, useState } from "react";

const ViewNews = () => {
  const [news, setNews] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/news");
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleDelete = async (id) => {
    // Optionally implement backend delete later
    setNews((prev) => prev.filter((item) => item._id !== id));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4f8] to-[#e0f7fa]">
        <p className="text-gray-500 text-lg">Loading news...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#e0f7fa] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">📰 Latest News</h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Stay updated with our newest posts and announcements
          </p>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {news.length === 0 ? (
            <p className="text-center text-gray-500 text-lg col-span-full">
              No news available yet.
            </p>
          ) : (
            news.map((item, index) => {
              const isExpanded = expanded[index];
              const maxLength = 120;

              return (
                <div
                  key={item._id}
                  className="bg-white rounded-3xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden relative flex flex-col"
                >
                  {/* Image */}
                  {item.image && (
                    <div className="relative h-52">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-t-3xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-3xl"></div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>

                    <p
                      className={`text-gray-600 text-sm md:text-base transition-all ${
                        isExpanded ? "" : "overflow-hidden"
                      }`}
                      style={{ maxHeight: isExpanded ? "none" : "4.5rem" }}
                    >
                      {isExpanded ? item.content : item.content.slice(0, maxLength)}
                      {item.content.length > maxLength && !isExpanded && "..."}
                    </p>

                    {item.content.length > maxLength && (
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="mt-3 self-start px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}

                    <small className="text-gray-400 mt-4 block text-xs">
                      📅 {new Date(item.createdAt).toLocaleString()}
                    </small>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="absolute top-4 right-4 text-red-600 bg-red-100 hover:bg-red-200 px-3 py-1 rounded-full text-sm font-semibold shadow-md transition"
                    title="Delete news"
                  >
                    ❌
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewNews;

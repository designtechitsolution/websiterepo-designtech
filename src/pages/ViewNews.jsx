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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-600 text-lg">Loading news...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Latest News & Updates</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Stay informed with our newest announcements and insights
          </p>
        </div>

        {/* News Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {news.length === 0 ? (
            <p className="text-center text-gray-500 text-base col-span-full">
              No news available yet.
            </p>
          ) : (
            news.map((item, index) => {
              const isExpanded = expanded[index];
              const maxLength = 120;

              return (
                <div
                  key={item._id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden relative flex flex-col border border-gray-200"
                >
                  {/* Image */}
                  {item.image && (
                    <div className="relative h-48">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>

                    <p
                      className={`text-gray-600 text-sm leading-relaxed transition-all ${
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
                        className="mt-3 self-start text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                      >
                        {isExpanded ? "Show less" : "Read more →"}
                      </button>
                    )}

                    <small className="text-gray-500 mt-auto pt-4 block text-xs">
                      {new Date(item.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </small>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="absolute top-3 right-3 text-red-600 bg-white hover:bg-red-50 p-2 rounded-md text-xs font-medium shadow-sm border border-gray-200 transition-colors"
                    title="Delete news"
                  >
                    Delete
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

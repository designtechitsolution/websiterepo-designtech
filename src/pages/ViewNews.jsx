import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUp, RefreshCw, AlertCircle, Clock, Loader2 } from 'lucide-react';

// News Skeleton Loader Component
const NewsSkeleton = ({ count = 6 }) => {
  return Array(count).fill(0).map((_, index) => (
    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-5">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
        <div className="flex items-center mt-4 text-sm text-gray-400">
          <div className="h-3 bg-gray-200 rounded w-20"></div>
        </div>
      </div>
    </div>
  ));
};

const ViewNews = () => {
  const [news, setNews] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isDeleting, setIsDeleting] = useState({});
  const newsContainerRef = useRef(null);

  // Fetch news from the API
  const fetchNews = useCallback(async (showLoading = true) => {
    if (showLoading) setLoading(true);
    setError(null);
    
    try {
      const res = await fetch("http://localhost:5000/api/news");
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();
      setNews(data);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to load news. Please try again later.");
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  // Initial data load
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  // Handle scroll to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle pull-to-refresh
  useEffect(() => {
    const container = newsContainerRef.current;
    if (!container) return;

    let startY = 0;
    let pullDownAmount = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
      if (window.scrollY === 0) {
        container.style.transition = 'transform 0.2s ease-out';
      }
    };

    const handleTouchMove = (e) => {
      if (window.scrollY === 0 && startY) {
        pullDownAmount = e.touches[0].clientY - startY;
        if (pullDownAmount > 0) {
          e.preventDefault();
          container.style.transform = `translateY(${Math.min(pullDownAmount, 100)}px)`;
          
          if (pullDownAmount > 80 && !isRefreshing) {
            setIsRefreshing(true);
            fetchNews(false);
          }
        }
      }
    };

    const handleTouchEnd = () => {
      if (pullDownAmount > 0) {
        container.style.transition = 'transform 0.3s ease-out';
        container.style.transform = 'translateY(0)';
        startY = 0;
        pullDownAmount = 0;
      }
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [fetchNews, isRefreshing]);

  // Toggle read more/less for a news item
  const toggleReadMore = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Handle delete news item
  const handleDelete = async (id, index) => {
    if (!window.confirm('Are you sure you want to delete this news article?')) {
      return;
    }

    setIsDeleting(prev => ({ ...prev, [index]: true }));
    
    try {
      const res = await fetch(`http://localhost:5000/api/news/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete news');
      
      // Update UI optimistically
      setNews(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error('Error deleting news:', err);
      setError('Failed to delete news. Please try again.');
    } finally {
      setIsDeleting(prev => ({ ...prev, [index]: false }));
    }
  };

  // Format date to relative time (e.g., "2 days ago")
  const formatDate = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now - date) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return `${interval} year${interval === 1 ? '' : 's'} ago`;
    
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return `${interval} month${interval === 1 ? '' : 's'} ago`;
    
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval} day${interval === 1 ? '' : 's'} ago`;
    
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return `${interval} hour${interval === 1 ? '' : 's'} ago`;
    
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return `${interval} minute${interval === 1 ? '' : 's'} ago`;
    
    return 'Just now';
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render error state
  if (error && news.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full text-center bg-white p-6 rounded-xl shadow-sm border border-red-100">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Something went wrong</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => fetchNews()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Pull to refresh indicator */}
      {isRefreshing && (
        <div className="flex justify-center py-2">
          <div className="animate-spin text-blue-500">
            <RefreshCw className="w-5 h-5" />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div 
        ref={newsContainerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
      >
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Latest News & Updates
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Stay informed with our newest announcements, insights, and company news
          </p>
        </header>

        {/* News Grid */}
        {loading ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <NewsSkeleton count={6} />
          </div>
        ) : news.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
              <Clock className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No news yet</h3>
            <p className="text-gray-500">Check back later for updates</p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => {
              const isExpanded = expanded[index];
              const maxLength = 150;
              const contentExceeds = item.content.length > maxLength;
              
              return (
                <article 
                  key={item._id} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col border border-gray-100 h-full"
                >
                  {/* Image */}
                  {item.image && (
                    <div className="relative h-48 sm:h-40 md:h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
                        {item.title}
                      </h2>

                      <div 
                        className={`text-gray-600 text-sm leading-relaxed transition-all ${
                          isExpanded ? '' : 'overflow-hidden'
                        }`}
                        style={{ 
                          maxHeight: isExpanded ? 'none' : '4.5rem',
                          WebkitLineClamp: isExpanded ? 'none' : '3',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {isExpanded ? item.content : item.content.slice(0, maxLength)}
                        {contentExceeds && !isExpanded && '...'}
                      </div>

                      {contentExceeds && (
                        <button
                          onClick={() => toggleReadMore(index)}
                          className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                        >
                          {isExpanded ? (
                            <>
                              <span>Show less</span>
                              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            </>
                          ) : (
                            <>
                              <span>Read more</span>
                              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {formatDate(item.updatedAt || item.createdAt)}
                      </span>
                      
                      <button
                        onClick={() => handleDelete(item._id, index)}
                        disabled={isDeleting[index]}
                        className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                        aria-label={`Delete ${item.title}`}
                      >
                        {isDeleting[index] ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                            Deleting...
                          </>
                        ) : (
                          <>
                            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-200 z-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ViewNews;

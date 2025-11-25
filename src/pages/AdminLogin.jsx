import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff, LogIn } from "lucide-react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check if already logged in
  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      navigate("/upload-news");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (username === "admin" && password === "12345") {
        localStorage.setItem("isAdmin", "true");
        navigate("/upload-news");
      } else {
        setError("❌ Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("❌ An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden p-4 sm:p-6">
      {/* Background blobs - Responsive sizing */}
      <div className="absolute top-[-20%] sm:top-[-10%] left-[-20%] sm:left-[-10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[#00B4D8] opacity-20 sm:opacity-30 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-20%] sm:bottom-[-10%] right-[-20%] sm:right-[-10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[#0077B6] opacity-20 sm:opacity-30 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-700"></div>

      {/* Card - Responsive sizing */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 z-10 transform transition-all duration-300 hover:shadow-[#00B4D8]/20 hover:border-[#00B4D8]/30">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl mb-4 shadow-lg">
            <LogIn className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 sm:mb-2">
            Admin Portal
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Secure access to admin dashboard
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm sm:text-base flex items-center">
            <span className="mr-2">⚠️</span>
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
          {/* Username */}
          <div>
            <label htmlFor="username" className="text-xs sm:text-sm font-medium text-gray-200 flex items-center gap-1.5 mb-1.5">
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Username
            </label>
            <div className="relative">
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                autoComplete="username"
                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all duration-200"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-xs sm:text-sm font-medium text-gray-200 flex items-center gap-1.5 mb-1.5">
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                autoComplete="current-password"
                className="w-full px-4 pr-12 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-white/5 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent transition-all duration-200"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00B4D8] transition-colors p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-xs sm:text-sm text-gray-400 hover:text-[#00B4D8] transition-colors"
              onClick={() => alert("Please contact system administrator for password reset")}
              disabled={isLoading}
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2.5 sm:py-3 px-4 rounded-lg bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-semibold shadow-lg hover:shadow-[#00B4D8]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 ${
              isLoading ? 'opacity-80 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-sm sm:text-base">Signing in...</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Sign In</span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/5">
          <p className="text-xs text-center text-gray-400">
            © {new Date().getFullYear()} Design Tech IT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

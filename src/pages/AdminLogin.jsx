import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      localStorage.setItem("isAdmin", "true");
      navigate("/upload-news");
    } else {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1f2c] via-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#00B4D8] opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0077B6] opacity-30 rounded-full blur-3xl animate-pulse delay-700"></div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 z-10">
        <h2 className="text-3xl font-extrabold text-center text-white mb-2">
          🔐 Admin Access
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Secure login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          {/* Username */}
          <div>
            <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
              <User size={18} /> Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              className="w-full mt-2 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
              <Lock size={18} /> Password
            </label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:border-[#00B4D8] transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-[#00B4D8]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white font-bold shadow-lg hover:shadow-[#00B4D8]/40 hover:scale-[1.02] transition-transform duration-300"
          >
            🚀 Login
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default AdminLogin;

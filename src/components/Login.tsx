import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
    // Implement your login logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">Login</h1>
        <div className="space-y-4">
          {/* Email Input Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-300">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500">Sign Up</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

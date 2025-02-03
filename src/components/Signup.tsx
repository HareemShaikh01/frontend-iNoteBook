import React, { useState } from "react";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password === confirmPassword) {
      console.log("Signing up with:", { name, email, password });
      // Implement your signup logic here (e.g., API call)
    } else {
      console.log("Passwords do not match.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">Sign Up</h1>
        <div className="space-y-4">
          {/* Name Input Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

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

          {/* Confirm Password Input Field */}
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-lg font-medium text-gray-300">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSignup}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4"
          >
            Sign Up
          </button>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-300">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500">Login</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

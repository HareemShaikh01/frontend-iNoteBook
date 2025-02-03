import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* iNoteBook logo on the left */}
        <Link className="text-white text-xl font-semibold" to="/">iNoteBook</Link>

        {/* Left section with Home and About links */}
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => 
              isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-300 font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-300 font-semibold"
            }
          >
            About
          </NavLink>
        </div>

        {/* Right section with Login and Sign Up buttons */}
        <div className="flex space-x-4">
          <NavLink
            to="/login"
            className={({ isActive }) => 
              isActive ? "bg-blue-700 px-4 py-2 text-white rounded-md" : "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => 
              isActive ? "bg-blue-700 px-4 py-2 text-white rounded-md" : "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            }
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-white text-xl font-semibold" to="/">Navbar</Link>
        <button 
          className="text-white lg:hidden"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">☰</span>
        </button>
        <div className="hidden lg:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white hover:text-gray-300" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

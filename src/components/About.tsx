import React from "react";
import noteImage from "../assets/vecteezy_notes-illustration-3d_9665468.png"; 

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">About iNoteBook</h1>
        <p className="text-lg text-gray-300 mb-6">
          NoteKeeper is your ultimate solution for organizing and storing notes efficiently. 
          Our application helps you capture ideas, manage tasks, and keep track of important information seamlessly.
        </p>
        <img 
          src={noteImage} 
          alt="Notes Image"
          className="w-[20%] max-w-4xl mx-auto rounded-xl shadow-lg mb-6"
        />
        <div className="flex justify-center gap-4">
          <a href="/contact" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            Contact Us
          </a>
          <a href="/features" className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition">
            Features
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import logo from '../src/assets/blogin-logo.png'; 

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Blogin' Logo" 
            className="h-20 w-auto" // Adjust height as needed
          />
        </a>
        <div>
          <button className="text-gray-600 hover:text-blue-600 font-semibold mr-4">Log In</button>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
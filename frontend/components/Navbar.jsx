import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../src/context/AuthContext'; // Import the useAuth hook
import logo from '../src/assets/blogin-logo.png';

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout function from context
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false); // Close dropdown on logout
    navigate('/login'); // Redirect to login page
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Blogin' Logo" className="h-10 w-auto" />
        </Link>
        <div>
          {user ? (
            // --- User is Logged In ---
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-semibold"
              >
                <span>Hey, {user.fullName}!</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-10">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // --- User is Logged Out ---
            <>
              <Link to="/login" className="text-gray-600 hover:text-blue-600 font-semibold mr-4">
                Log In
              </Link>
              <Link to="/register" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

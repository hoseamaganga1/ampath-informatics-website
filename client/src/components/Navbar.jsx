import React, { useState } from 'react';
import a from '../assets/search2.png'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState();

  return (
    <div className="w-full shadow-md bg-[#77b9ba] text-white py-4 relative">
      <div className="flex">
        {/* Main Navbar Content */}
        <div className="flex-1 px-6 w-full relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Mobile: Search + Hamburger */}
            <div className="flex items-center space-x-4 lg:hidden">
              <img
                src={a}
                alt="Search"
                className="h-6 w-6 cursor-pointer hover:opacity-80"
              />
              <button
                className="text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Desktop: Centered nav links including search icon */}
            <div className="hidden lg:flex items-center justify-center space-x-6 text-white font-medium">
              <a href="#" className="hover:text-gray-200">ABOUT US</a>
              <a href="#" className="hover:text-gray-200">TEAMS</a>
              <a href="#" className="hover:text-gray-200">SYSTEMS</a>
              <a href="#" className="hover:text-gray-200">PROJECTS & INITIATIVES</a>
              <a href="#" className="hover:text-gray-200">RESOURCES</a>
              <a href="#" className="hover:text-gray-200">NEWS & UPDATES</a>
              <a href="#" className="hover:text-gray-200">CONTACT US</a>
              <img
                src="/src/search2.png"
                alt="Search"
                className="h-6 w-6 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Optional right spacing on large screens */}
        <div className="hidden lg:block lg:w-1/6"></div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="absolute top-0 left-0 h-screen w-1/3 bg-[#66a5a5] z-50 p-6 lg:hidden transition-all duration-300 ease-in-out">
          <button
            className="text-white mb-4 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            
          </button>
          <nav className="flex flex-col space-y-4 text-white font-medium">
            <a href="#" className="hover:text-gray-200">ABOUT US</a>
            <a href="#" className="hover:text-gray-200">TEAMS</a>
            <a href="#" className="hover:text-gray-200">SYSTEMS</a>
            <a href="#" className="hover:text-gray-200">PROJECTS & INITIATIVES</a>
            <a href="#" className="hover:text-gray-200">RESOURCES</a>
            <a href="#" className="hover:text-gray-200">NEWS & UPDATES</a>
            <a href="#" className="hover:text-gray-200">CONTACT US</a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// src/components/Header.jsx

import React, { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react'; // Import icons from lucide-react

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className={`p-4 ${isDarkMode ? 'bg-[#1a1a1a] text-[#f2f2f2]' : 'bg-white text-[#333333]'}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">HopFind</h1>
        <div className='flex gap-4 items-center'>
          <button
            className={`flex items-center px-2 py-2 rounded-lg transition duration-200 ${
              isDarkMode
                ? 'bg-[#cccccc] text-[#1a1a1a] hover:bg-[#e6e6e6]'
                : 'bg-[#f2f2f2] text-[#333333] hover:bg-[#e6e6e6]'
            }`}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
          </button>
          <button
            className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer md:hidden"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <Menu className={`${isDarkMode ? 'text-[#f2f2f2]' : 'text-[#333333]'}`} />
          </button>
        </div>
      </div>
      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className={`menu-overlay ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          <div className={`flex justify-between items-center w-full p-4 ${isDarkMode ? 'bg-[#1a1a1a] text-[#f2f2f2]' : 'bg-white text-[#333333]'}`}>
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              className={`${isDarkMode ? 'text-[#f2f2f2]' : 'text-[#333333]'}`}
              onClick={handleMenuToggle}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" /> {/* Close icon */}
            </button>
          </div>
          <nav className="flex flex-col items-center text-center">
            <ul className={`flex flex-col gap-4 text-[1.50rem] ${isDarkMode ?
            'text-[#f2f2f2]' : 'text-[#ffffff]'}`}>
              <li className={`hover:text-[#e6e6e6] transition duration-200`}>
                <a href="/" onClick={handleLinkClick}>Home</a>
              </li>
              <li className={`hover:text-[#e6e6e6] transition duration-200`}>
                <a href="/websitesList" onClick={handleLinkClick}>Websites</a>
              </li>
              <li className={`hover:text-[#e6e6e6] transition duration-200`}>
                <a href="/contact" onClick={handleLinkClick}>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      {/* Regular Navbar for larger screens */}
      <nav className={`mt-4 hidden md:block`}>
        <ul className={`flex flex-row space-x-4 text-[1.50rem] ${isDarkMode ? 'text-[#f2f2f2]' : 'text-[#333333]'}`}>
          <li className={`hover:text-[#e6e6e6] transition duration-200`}>
            <a href="/" onClick={handleLinkClick}>Home</a>
          </li>
          <li className={`hover:text-[#e6e6e6] transition duration-200`}>
            <a href="/websitesList" onClick={handleLinkClick}>Websites</a>
          </li>
          <li className={`hover:text-[#e6e6e6] transition duration-200`}>
            <a href="/contact" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
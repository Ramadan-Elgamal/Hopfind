// src/components/Header.jsx

import React, { useState } from 'react';
import { Menu, Moon, Sun } from 'lucide-react'; // Import icons from lucide-react

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">HopFind</h1>
        <div className='flex gap-4 items-center'>
          <button
            className="flex items-center px-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-200" />}
          </button>
          <button
            className="flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer md:hidden"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <Menu className="text-white" />
          </button>
        </div>
      </div>
      <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col items-center gap-2 md:flex-row md:space-x-4
        text-[1.50rem]">
          <li>
            <a href="/" className="text-white hover:text-blue-300" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <a href="/websitesList" className="text-white hover:text-blue-300" onClick={handleLinkClick}>Websites</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-blue-300" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
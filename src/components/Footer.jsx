// src/components/Footer.jsx

import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`p-4 text-center transition-all duration-300 ${
      isDarkMode ? 'bg-[#1a1a1a] text-[#f2f2f2]' : 'bg-white text-[#333333]'
    }`}>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/privacy" className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Privacy Policy</a>
          <a href="/terms" className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Terms of Service</a>
          <a href="/contact" className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
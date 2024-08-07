// src/components/SearchableDropdown.jsx

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const SearchableDropdown = ({ options, selectedOption, onSelect, isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerClasses = `relative w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`;
  const dropdownClasses = `mb-4 flex items-center justify-between w-full p-4 outline-none cursor-pointer focus:outline-none focus:ring-2 transition duration-200 ${
    isDarkMode
      ? 'bg-gray-700 border-gray-600 focus:ring-blue-500'
      : 'bg-gray-50 border-gray-400 focus:ring-blue-600'
  }`;

  return (
    <div className={containerClasses}>
      <div
        className={dropdownClasses}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open dropdown"
      >
        <span>{selectedOption || 'Select an option...'}</span>
        <FaChevronDown className={`text-gray-500 transition duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white  border-gray-300  shadow-lg z-10 transition-all duration-300 ease-in-out">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 transition duration-200 ${
              isDarkMode ? 'bg-gray-700 border-gray-600 focus:ring-blue-500' : 'bg-white'
            }`}
            aria-label="Search options"
          />
          <ul className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => { onSelect(option); setSearchTerm(''); setIsOpen(false); }}
                  className={`p-2 cursor-pointer transition duration-200 ${
                    selectedOption === option ? 'bg-blue-200 font-semibold' : 'hover:bg-blue-100'
                  } ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : ''}`}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
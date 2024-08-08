// src/components/Search.jsx

import React, { useState } from 'react';
import SearchableDropdown from './SearchableDropdown';
import useSearch from '../hooks/useSearch';
import Spinner from './Spinner'; // Import the Spinner component
import Tooltip from './Tooltip'; // Import the Tooltip component

const Search = ({ isDarkMode, toggleDarkMode, searchEngines }) => {
  const {
    searchTerm,
    setSearchTerm,
    selectedEngine,
    setSelectedEngine,
    resultUrl,
    setResultUrl
  } = useSearch();

  const [isLoading, setIsLoading] = useState(false); // Track loading state for the iframe
  const [isTyping, setIsTyping] = useState(false); // Track if the user is typing
  const [showTooltip, setShowTooltip] = useState(true); // Track tooltip visibility

  const handleLoad = () => {
    setIsLoading(false); // Set loading to false when iframe loads
  };

  const updateResultUrl = (direction) => {
    const currentIndex = searchEngines.indexOf(selectedEngine);
    let newIndex;

    if (direction === 'next') {
      newIndex = Math.min(currentIndex + 1, searchEngines.length - 1);
    } else if (direction === 'previous') {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    setSelectedEngine(searchEngines[newIndex]);
    
    // Show loading spinner when navigating
    setIsLoading(true);
    
    // Set the new result URL
    setResultUrl(`https://example.com/search?engine=${searchEngines[newIndex]}&term=${encodeURIComponent(searchTerm)}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsTyping(true); // Set typing state to true
    setIsLoading(true); // Show loading spinner when typing

    // Hide the tooltip when the user starts typing
    setShowTooltip(false);

    // Simulate a loading delay (replace this with your actual search logic)
    setTimeout(() => {
      setIsLoading(false); // Hide loading after search logic
    }, 1000); // Simulate a 1-second loading time
  };

  const containerClasses = `p-6 shadow-md ${
    isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'
  }`;

  const inputClasses = `w-full p-4 border focus:outline-none focus:ring-2 transition duration-200 relative ${
    isDarkMode
      ? 'bg-gray-700 border-gray-600 focus:ring-blue-500'
      : 'border-gray-300 focus:ring-blue-600'
  }`;

  return (
    <div className={containerClasses}>
      <SearchableDropdown
        options={searchEngines}
        selectedOption={selectedEngine}
        onSelect={setSelectedEngine}
        isDarkMode={isDarkMode}
      />
      <div className="relative">
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={handleSearchChange}
          className={inputClasses}
          aria-label="Search term input"
        />
        {showTooltip && (
          <Tooltip
            text="Type your search query and press Enter"
          />
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          className={`px-4 py-2 hover:opacity-80 transition-opacity duration-200 ${
            isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'
          }`}
          onClick={() => updateResultUrl('previous')}
          disabled={searchEngines.indexOf(selectedEngine) === 0}
          aria-label="Previous search engine"
        >
          Prev
        </button>
        <button
          className={`px-4 py-2 hover:opacity-80 transition-opacity duration-200 ${
            isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'
          }`}
          onClick={() => updateResultUrl('next')}
          disabled={searchEngines.indexOf(selectedEngine) === searchEngines.length - 1}
          aria-label="Next search engine"
        >
          Next
        </button>
      </div>
      <div className="mt-4 relative">
        {isLoading && <Spinner />} {/* Show spinner when loading */}
        <iframe
          className={`w-full h-[100dvh] border-none transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          title="Search Results"
          src={resultUrl}
          onLoad={handleLoad}
        />
      </div>
    </div>
  );
};

export default Search;
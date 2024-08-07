// src/components/Search.jsx

import React, { useState, useEffect } from 'react';
import SearchableDropdown from './SearchableDropdown';
import useSearch from '../hooks/useSearch';

const Search = ({ isDarkMode, toggleDarkMode, searchEngines }) => {
  const {
    searchTerm,
    setSearchTerm,
    selectedEngine,
    setSelectedEngine,
    resultUrl,
    setResultUrl
  } = useSearch();

  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
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
    setResultUrl(`https://example.com/search?engine=${searchEngines[newIndex]}&term=${encodeURIComponent(searchTerm)}`);
  };

  const containerClasses = `p-6 shadow-md ${
    isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'
  }`;

  const inputClasses = `w-full p-4 border focus:outline-none focus:ring-2 transition duration-200 ${
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
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={inputClasses}
        aria-label="Search term input"
      />
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
          className={`px-4 py-2  hover:opacity-80 transition-opacity duration-200 ${
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
        
        <iframe
          className={`w-full h-96 border-none transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          title="Search Results"
          src={resultUrl}
          onLoad={handleLoad}
        />
      </div>
    </div>
  );
};

export default Search;
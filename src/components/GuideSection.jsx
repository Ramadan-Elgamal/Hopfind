// src/components/GuideSection.jsx

import React from 'react';

const GuideSection = ({ isDarkMode }) => {
  const sectionClasses = `p-4  shadow-md  transition-all duration-300 ${
    isDarkMode
      ? 'bg-gray-800 text-gray-200 '
      : 'bg-blue-100 text-blue-800 '
  }`;

  return (
    <div className={sectionClasses}>
      <h2 className="text-lg font-semibold mb-2">Welcome to Hopfind App!</h2>
      <p className="text-sm">
        To get started, choose a search engine from the dropdown menu and type
        the name of the movie you searching for.
      </p>
      <br />
      <p className="text-sm">
        I you want to know where to look ,visit the<a className="underline
        underline-offset-2 decoration-blue-600" href='websitesList'> Sites Library</a> we have .
      </p>
    </div>
  );
};

export default GuideSection;
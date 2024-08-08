// src/components/Tooltip.jsx

import React from 'react';

const Tooltip = ({ text }) => {
  return (
    <div className="absolute bg-gray-800 text-white px-2 py-1 rounded-md text-sm z-10 -top-8 left-0 opacity-0 transition-opacity duration-300">
      {text}
    </div>
  );
};

export default Tooltip;
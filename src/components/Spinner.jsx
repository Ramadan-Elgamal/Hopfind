// src/components/Spinner.jsx

import React from 'react';
import { ClipLoader } from 'react-spinners'; // Make sure to install react-spinners

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <ClipLoader color="#3b82f6" size={40} />
    </div>
  );
};

export default Spinner;
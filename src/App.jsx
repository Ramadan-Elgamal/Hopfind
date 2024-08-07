// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer.jsx'
import WebsitesList from './pages/WebsitesList'; // Import the new WebsitesList component
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
  const storedMode = localStorage.getItem('darkMode');
  return storedMode === 'true'; // Convert to boolean
});

  // Load dark mode preference from localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode !== null) {
      setIsDarkMode(storedMode === 'true');
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
  localStorage.setItem('darkMode', isDarkMode.toString());
  document.body.classList.toggle('dark-mode', isDarkMode);
}, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className="">
          <Routes>
            <Route path="/" element={<Search isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} searchEngines={[
              'Soap2day','F2movies','Cineb', 'Look2movie movies', 'Look2movie series', 'Topcinema',
              'Shahid4u', 'Fushaar', 'Arabseed', 'Faselvip', 'Weecima',
              'Cimawebas', 'Mycima.net', 'Tuktukcinema', 'Ahwaktv',
              'Movizlands', 'Qfilm.tv', 'Asia2tv', 'Cimalina'
           ,'Dramanice','Kiss Asian','Dramacool' ]} />} />
            <Route path="/websitesList" element={<WebsitesList isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          </Routes>
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
};

export default App;
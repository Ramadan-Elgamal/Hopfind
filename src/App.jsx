// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import WebsitesList from './pages/WebsitesList'; // Import the new WebsitesList component
import GuideSection from './components/GuideSection'; // Import the GuideSection component
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
      <div className={`App ${isDarkMode ? 'bg-[#1a1a1a] text-[#f2f2f2]' : 'bg-white text-[#333333]'}`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main className="">
          <Routes>
            <Route path="/" element={
              <>
                <GuideSection isDarkMode={isDarkMode} /> {/* Add the GuideSection here */}
                <Search 
                  isDarkMode={isDarkMode} 
                  toggleDarkMode={toggleDarkMode} 
                  searchEngines={[
                    'Soap2day', 'F2movies', 'Cineb', 'Look2movie movies', 
                    'Look2movie series', 'Topcinema', 'Shahid4u', 
                    'Fushaar', 'Arabseed', 'Weecima', 
                    'Cimawebas', 'Tuktukcinema', 'Ahwaktv', 
                    'Movizlands', 'Asia2tv', 'Cimalina', 
                    'Dramanice', 'Kiss Asian', 'Dramacool'
                  ]} 
                />
              </>
            } />
            <Route path="/websitesList" element={<WebsitesList isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          </Routes>
        </main>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
};

export default App;
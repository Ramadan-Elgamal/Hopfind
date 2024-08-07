// src/pages/WebsitesList.jsx

import React from 'react';

const WebsitesList = ({ isDarkMode }) => {
  const globalWebsites = [
    { name: 'Soap2Day', url: 'https://ww25.soap2day.day/' },
    { name: 'Look2Movie', url: 'https://www.lookmovie2.to/movies/' },
    { name: 'F2movies', url: 'https://www6.f2movies.to/' },
    { name: 'Look2Movie', url: 'https://www.lookmovie2.to/movies/' },
    { name: 'Cineb', url: 'https://cineb.rs/' },
  ];

  const arabicWebsites = [
    { name: 'TopCinema', url: 'https://web5.topcinema.top/' },
    { name: 'Shahid4U', url: 'https://shahid4u.my/' },
    { name: 'CimaWebas', url: 'https://cimawbas.mycima.cc/' },
    { name: 'Arabseed', url: 'https://f1.arabseed.ink/' },
    { name: 'TuktukCinema', url: 'https://tuktukcinema.net/' },
    { name: 'FaselVIP', url: 'https://www.faselhd.club/' },
    { name: 'MyCima.net', url: 'https://w27.my-cima.net/' },
    { name: 'Weecima', url: 'https://wecima.tube/' },
    { name: 'Cimalina', url: 'https://cimalina1.site/' },
    { name: 'QFilm.tv', url: 'https://www.qfilm.tv/' },
    { name: 'Movizlands', url: 'https://movizlands.com/' },
    { name: 'Fushaar', url: 'https://www.fushaar.com/' },
  ];

  const asianCinema = [
    { name: 'Asia2TV', url: 'https://ww1.asia2tv.pw/' },
    { name: 'Dramanice', url: 'https://ww3.dramanice.video/' },
    { name: 'Kiss Asian', url: 'https://kissasian.com.lv/' },
    { name: 'Dramacool', url: 'https://dramacool.bg/' },
    
  ];

  const series = [
    { name: 'Look2Movie', url: 'https://www.lookmovie2.to/shows/' },
    { name: 'AhwakTV', url: 'https://vig.ahwaktv.com/category.php?cat=moslslat-ahwak' },
    { name: 'TuktukCinema', url: 'https://www.tuktukcima.com/category/series-9/' },
    
  ];

  const renderList = (title, items) => (
    <div className="mb-8">
      <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((site) => (
          <div
            key={site.name}
            className={` shadow-md p-4 ${
              isDarkMode
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
              }`}
            >
              {site.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <h2 className={`text-3xl text-center font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Websites List</h2>
      {renderList('Global Websites', globalWebsites)}
      {renderList('Arabic Websites', arabicWebsites)}
      {renderList('Asian Cinema', asianCinema)}
      {renderList('Series', series)}
    </div>
  );
};

export default WebsitesList;
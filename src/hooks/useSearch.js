// src/hooks/useSearch.js

import { useState, useEffect } from 'react';

const engines = [
  'Topcinema','Shahid4u','Cimawebas','Tuktukcinema','Soap2day', 'Look2movie movies','Cineb', 'F2movies', 'Fushaar', 'Arabseed', 'Weecima','Ahwaktv','Movizlands','Look2movie series', 'Asia2tv',
  'Cimalina','Dramanice','kiss Asian','Dramacool'
];

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEngine, setSelectedEngine] = useState(engines[0]);
  const [resultUrl, setResultUrl] = useState('');

  const performSearch = () => {
    let searchUrl;

    switch (selectedEngine) {
      case 'Soap2day':
        searchUrl = `https://ww25.soap2day.day/?s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'F2movies':
        searchUrl = `https://www6.f2movies.to/search/${encodeURIComponent(searchTerm)}`;
        break;
      case 'Cineb':
        searchUrl = `https://cineb.rs/search/${encodeURIComponent(searchTerm)}`;
        break;
      case 'Look2movie movies':
        searchUrl = `https://www.lookmovie2.to/movies/search/?q=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Look2movie series':
        searchUrl = `https://www.lookmovie2.to/shows/search/?q=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Topcinema':
        searchUrl = `https://web5.topcinema.top/?s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Shahid4u':
        searchUrl = `https://shahid4u.my/search?s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Fushaar':
        searchUrl = `https://www.fushaar.com/?s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Arabseed':
        searchUrl = `https://f1.arabseed.ink/find/?find=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Weecima':
        searchUrl = `https://wecima.tube/search/${encodeURIComponent(searchTerm)}`;
        break;
      case 'Cimawebas':
        searchUrl = `https://cimawbas.mycima.cc/search.php?keywords=${encodeURIComponent(searchTerm)}&video-id=`;
        break;
      case 'Tuktukcinema':
        searchUrl = `https://tuktukcinema.net/?s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Ahwaktv':
        searchUrl = `https://vig.ahwaktv.com/?s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Movizlands':
        searchUrl = `https://movizlands.com/?s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Asia2tv':
        searchUrl = `https://ww1.asia2tv.pw/?s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Cimalina':
        searchUrl = `https://cimalina1.site/?s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Dramanice':
        searchUrl = `https://ww3.dramanice.video/?s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Kiss Asian':
        searchUrl = `https://kissasian.com.lv/?type=movies&s=${encodeURIComponent(searchTerm)}`;
        break;
      case 'Dramacool':
        searchUrl = `https://dramacool.bg/search?type=drama&keyword=${encodeURIComponent(searchTerm)}`;
        break;
      default:
        return; // Handle unexpected engine selection
    }

    setResultUrl(searchUrl);
  };

  useEffect(() => {
    if (searchTerm) {
      performSearch();
    }
  }, [selectedEngine, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    selectedEngine,
    setSelectedEngine,
    resultUrl,
  };
};

export default useSearch;
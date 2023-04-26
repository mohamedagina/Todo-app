import { useState, useEffect } from 'react';

import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';

import './DarkModeToggler.css';

const DarkModeToggler = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    if (isDark) html.classList.add('dark');
    else html.classList.remove('dark');
  }, [isDark]);

  return (
    <button
      className="icon-btn mode-toggler"
      type="button"
      title={`Toggle ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setIsDark(!isDark)}
    >
      <span className="sr-only">Toggle Dark Mode</span>

      <img src={isDark ? sunIcon : moonIcon} alt="" />
    </button>
  );
};

export default DarkModeToggler;

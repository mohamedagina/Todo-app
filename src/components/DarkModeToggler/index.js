import { useState, useEffect } from 'react';

import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';

import './DarkModeToggler.css';

const DarkModeToggler = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      return;
    }

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkQuery.matches) setTheme('dark');
    else setTheme('light');

    darkQuery.onchange = e =>
      e.matches ? setTheme('dark') : setTheme('light');

    return () => (darkQuery.onchange = null);
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    if (theme === 'dark') {
      html.classList.remove('light');
      html.classList.add(theme);
    } else {
      html.classList.remove('dark');
      html.classList.add(theme);
    }
  }, [theme]);

  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      className="icon-btn mode-toggler"
      type="button"
      title={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={handleToggleTheme}
    >
      <span className="sr-only">Toggle Dark Mode</span>

      <img src={theme === 'dark' ? sunIcon : moonIcon} alt="" />
    </button>
  );
};

export default DarkModeToggler;

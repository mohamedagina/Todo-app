import DarkModeToggler from '../DarkModeToggler';

import './header.css';

const Header = () => {
  return (
    <header className="app-header">
      <h1 className="app-logo">todo</h1>
      <DarkModeToggler />
    </header>
  );
};

export default Header;

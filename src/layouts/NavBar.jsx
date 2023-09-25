import { useState } from 'react';
import Button from '../components/Button/Button';
import { FiX, FiMenu } from 'react-icons/fi';
import './NavBar.css';
import logo from '../assets/logo.svg';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleMenuClick = () => {
    setShowNavbar(!showNavbar);
  };

  const handleClick = () => {
    document.getElementById('contact').scrollIntoView();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <nav className="nav">
      <img
        className="nav__logo"
        src={logo}
        width="50px"
        height="50px"
        alt="logo"
        onClick={scrollToTop}
      />
      <div className={`nav__link ${showNavbar ? 'active' : ''}`}>
        <a href="#about-me">
          <h3 className="nav__item">01. ABOUT ME</h3>
        </a>
        <a href="#work">
          <h3 className="nav__item">02. WORK</h3>
        </a>
        <a href="#mySkills">
          <h3 className="nav__item">03. MY SKILLS</h3>
        </a>
        <LanguageSwitcher />
        <Button text="CONTACT" onClick={handleClick} />
      </div>

      <div className="nav__menu-icon" onClick={handleMenuClick}>
        {showNavbar ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
}

export default NavBar;

import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

import './NavigationBar.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionName = hash.substring(1);
      scrollToSection(sectionName);
    }
  }, []);


  const scrollToSection = sectionName => {
    scroller.scrollTo(sectionName, {
      spy: true, smooth: 'easeInOutQuart', offset:-100, duration: 500
    });
  };

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToHome = (event) => {
    event.preventDefault();
    scroller.scrollTo('home', {
      spy: true, smooth: 'easeInOutQuart', offset:-10, duration: 500
    });

    // Update the URL without a full page reload
    window.history.pushState(null, null, '/');
  };

  return (
    <div className='header'>
      <nav className={`navigationbar ${isMenuOpen ? 'open' : ''}`}>
        <a href='#' onClick={goToHome} className='logo'>
          <img src='/vectors/Ora.svg' alt='Logo' style={{ height: '50px' }} />
        </a>

        <div className="hamburger" onClick={handleBurgerClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={'menu'}>
          <li className='item'>
            <a href="#timeline" onClick={() => scrollToSection('timeline')}>Timeline</a>
          </li>
          <li className='item'>
            <a href="#courses" onClick={() => scrollToSection('courses')}>Courses</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;

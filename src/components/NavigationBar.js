import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

import './NavigationBar.css';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionName = hash.substring(1);
      scrollToSection(sectionName);
    }
  }, []);


  const scrollToSection = sectionName => {
    scroller.scrollTo(sectionName, {
      spy: true, smooth: 'easeInOutQuart', duration: 500
    });
  };

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToHome = (event) => {
    event.preventDefault();
    scroller.scrollTo('home', {
      spy: true, smooth: 'easeInOutQuart', duration: 500
    });

    // Update the URL without a full page reload
    window.history.pushState(null, null, '/');
  };

  return (
    <div className={`header ${!show && 'hidden'}`}>
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
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li className='item'>
            <a href="#studies" onClick={() => scrollToSection('studies')}>Studies</a>
          </li>
          <li className='item'>
            <a href="#courses" onClick={() => scrollToSection('courses')}>Courses</a>
          </li>
          <li className='item'>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          </li>
          <li className='item'>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;

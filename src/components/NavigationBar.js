import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

import './NavigationBar.css';

// eslint-disable-next-line react/prop-types
const NavigationBar = ({ allowScroll, visibleSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== 'undefined' && !isMenuOpen) {
      if (window.scrollY < lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && allowScroll) {
      const sectionName = hash.substring(1);

      if(document.getSelection(sectionName)){
        scrollToSection({ sectionName, offset: 100 });
      }
    }
  }, [allowScroll]);

  const scrollToSection = ({ sectionName, offset = 0 }) => {
    scroller.scrollTo(sectionName, {
      spy: true, smooth: 'easeInOutQuart', duration: 500, offset: offset
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
          <li className={`item ${(visibleSection === 'about') ? 'active' : ''}`}>
            <a href="#about" onClick={() => scrollToSection({ sectionName: 'about' })}>About</a>
          </li>
          <li className={`item ${(visibleSection === 'studies') ? 'active' : ''}`}>
            <a href="#studies" onClick={() => scrollToSection({ sectionName: 'studies' })}>Studies</a>
          </li>
          <li className={`item ${(visibleSection === 'courses') ? 'active' : ''}`}>
            <a href="#courses" onClick={() => scrollToSection({ sectionName: 'courses' })}>Courses</a>
          </li>
          <li className={`item ${(visibleSection === 'projects') ? 'active' : ''}`}>
            <a href="#projects" onClick={() => scrollToSection({ sectionName: 'projects' })}>Projects</a>
          </li>
          <li className={`item ${(visibleSection === 'contact') ? 'active' : ''}`}>
            <a href="#contact" onClick={() => scrollToSection({ sectionName: 'contact' })}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;

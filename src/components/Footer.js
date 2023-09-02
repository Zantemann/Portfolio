import React from 'react';
import './Footer.css';
import { scroller } from 'react-scroll';

const Footer = () => {
  const goToHome = (event) => {
    event.preventDefault();
    scroller.scrollTo('home', {
      spy: true, smooth: 'easeInOutQuart', duration: 500
    });

    // Update the URL without a full page reload
    window.history.pushState(null, null, '/');
  };
  return (
    <div className='footer'>
      <a href='#' onClick={goToHome} className='logo'>
        <img src='/vectors/Ora.svg' alt='Logo' />
      </a>
      <a href={'https://github.com/Zantemann'} target="_blank" rel="noopener noreferrer">
        <img src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} className='github-logo' />
      </a>
      <a href={'https://www.linkedin.com/in/santeriora/'} target="_blank" rel="noopener noreferrer">
        <img src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg'} className='linkedin-logo' />
      </a>
    </div>
  );
};

export default Footer;
import React from 'react';
import './Footer.css';
import { otherLogos } from '../data/devLogos';
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
        <img src='/vectors/Ora.svg' alt='Logo' style={{ height: '50px' }} />
      </a>
      <a href={'https://github.com/Zantemann'} target="_blank" rel="noopener noreferrer">
        <img src={otherLogos['github']} className='github-logo' />
      </a>
    </div>
  );
};

export default Footer;
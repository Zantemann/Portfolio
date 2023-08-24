import React from 'react';
import './Footer.css';
import { otherLogos } from '../data/devLogos';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <img src='/vectors/Ora.svg' alt='Logo' />
      </div>
      <img src={otherLogos['github']} className='github-logo' />
      <img src={otherLogos['gitlab']} className='white-logo'/>
    </div>
  );
};

export default Footer;
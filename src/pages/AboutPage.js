import React from 'react';
import './AboutPage.css';
import { devLogos } from '../data/devLogos';

const AboutPage = () => {
  return (
    <div className='about'>
      <div className='title'>
        <h2>About</h2>
      </div>
      <div className='about-content'>
        <div className='info'>
          <h2>moi</h2>
          <p>I am Santeri Ora </p>
        </div>
        <div className='skills'>
          <h2>Skills</h2>
          <div className='logos'>
            {Object.values(devLogos).map(( logoUrl, index) => (
              <img key={index} src={logoUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
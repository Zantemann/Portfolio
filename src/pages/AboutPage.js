import React from 'react';
import './AboutPage.css';
import { devLogos } from '../data/devLogos';
import { skillsData } from '../data/skillsData';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import StarRating from '../components/StarRating';
import { aboutData } from '../data/aboutData';

const AboutPage = () => {
  return (
    <div className='about'>
      <div className='title'>
        <h2>About</h2>
      </div>
      <div className='about-content'>
        <h2 className='info-title'>Santeri Ora</h2>
        <div className='info'>
          <p>{aboutData.text1}</p>
          <p>{aboutData.text2}</p>
          <p>{aboutData.text3}</p>
          <p>{aboutData.text4}</p>
        </div>
        <div className='skills'>
          <h2>Skills</h2>
          <h4>Hover for review</h4>
          <div className='logos'>
            {Object.entries(devLogos).map(([name, logoUrl], index) => (
              <div
                className='logo-container'
                key={index}
              >
                <a data-tooltip-id={`tooltip-${index}`}>
                  <img src={logoUrl} alt={name} />
                </a>
                <Tooltip id={`tooltip-${index}`} className='logo-info'>
                  <h2>{skillsData[name]?.title}</h2>
                  <p>{skillsData[name]?.description}</p>
                  <div className='rating'>
                    <h3>Skill Rating</h3>
                    <StarRating rating={skillsData[name]?.rating} />
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
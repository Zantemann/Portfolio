import React from 'react';
import './AboutPage.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import StarRating from '../components/StarRating';

const AboutPage = ({ about, skills }) => {
  return (
    <div className='about'>
      <div className='title'>
        <h2>About</h2>
      </div>
      <div className='about-content'>
        {(about.length === 0 || skills.length === 0) ? (
          <h2 className='info-title'>Loading...</h2>
        ) : (
          <div className='container'>
            <h2 className='info-title'>Santeri Ora</h2>
            <div className='info'>
              {about.map((text) => (
                <p key={text.id}>{text.text}</p>
              ))}
            </div>
            <div className='skills'>
              <h2 className='info-title'>Skills</h2>
              <h4>Hover for honest review</h4>
              <div className='logos'>
                {skills.map(((skill) => (
                  <div
                    className='logo-container'
                    key={skill.id}
                  >
                    <a data-tooltip-id={`tooltip-${skill.id}`}>
                      <img src={skill.icon} alt={name} />
                    </a>
                    <Tooltip id={`tooltip-${skill.id}`} className='logo-info'>
                      <h2 className='info-title'>{skill.title}</h2>
                      <p>{skill.description}</p>
                      <div className='rating'>
                        <h3>Skill Rating</h3>
                        <StarRating rating={skill.rating} />
                      </div>
                    </Tooltip>
                  </div>
                )))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
import React, { useState } from 'react';
import './HomePage.css';
import Typewriter from 'typewriter-effect';

const HomePage = () => {
  const [headerTyped, setHeaderTyped] = useState(false);

  return (
    <div className='home'>
      <div className='image-container'>
        <div
          className='image-background'
          style={{ backgroundImage: 'url(\'/images/homeImage.jpg\')' }}
        />
        <div className='content'>
          <h1 className='content-header'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .pauseFor(1000)
                  .typeString('Hi, I am Santeri')
                  .pauseFor(1000)
                  .callFunction(() => {
                    const cursor = document.querySelector('.Typewriter__cursor');
                    if (cursor) {
                      cursor.style.display = 'none';
                      setHeaderTyped(true);
                    }
                  });
              }}
            />
          </h1>

          {headerTyped && (
            <h2 className='home-text'>
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .typeString('Welcome to my portfolio page!')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Feel free to check my story!')
                    .pauseFor(1000)
                    .deleteAll()
                    .pauseFor(1000);
                }}
              />
            </h2>
          )}
        </div>
        <div className='homepage-logos'>
          <a href={'https://github.com/Zantemann'} target="_blank" rel="noopener noreferrer">
            <img src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} className='github-logo' />
          </a>
          <a href={'https://www.linkedin.com/in/santeriora/'} target="_blank" rel="noopener noreferrer">
            <img src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg'} className='linkedin-logo' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home'>
      <div className='image-container'>
        <div
          className='image-background'
          style={{ backgroundImage: 'url(\'/images/homeImage.jpg\')' }}
        />
        <div className='content'>
          <h1>Santeri Ora</h1>
          <h2>No bullshit</h2>
          <div className='text'>
            <p>Intense is an International Financial Planning company with offices in multiple jurisdictions all over the world.</p>
            <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
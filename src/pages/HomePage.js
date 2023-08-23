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
          <div className='home-text'>
            <p>I am Santeri Ora and I am hard working 21 year old math and progremming stundent from Tampere Finland</p>
            <p>Check my story in this React + CSS page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';
import './StarRating.css';

// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<span key={i} className='star full-star'>&#9733;</span>);
    } else {
      stars.push(<span key={i} className='star empty-star'>&#9734;</span>);
    }
  }

  return <div className='star-rating'>{stars}</div>;
};

export default StarRating;
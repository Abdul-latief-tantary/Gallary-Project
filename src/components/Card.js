import React from 'react';
import './Card.css'
function Card({ details }) {
  return (
    <div className='card-container'>
      {details.map((item, index) => (
        <div key={index} className='card'>
          <img src={item.imageUrl} className='card-image' alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;

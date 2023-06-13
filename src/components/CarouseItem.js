import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const CarouseItem = ({image}) => {
  return (
    <div>
      <div className='shadow slide-item transition-all shadow-2xl drop-shadow-2xl'>
        <img
          src={image}
          className='object-cover h-48 rounded drop-shadow-2xl'
          alt="car"
        />
      </div>
    </div>
  );
}

export default CarouseItem;

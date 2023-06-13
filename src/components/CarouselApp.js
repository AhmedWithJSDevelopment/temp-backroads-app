import React from 'react';
import Carousel from '../Carousel';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const CarouselApp = () => {
  return (
      <div id='CarouselApp' className='min-h-screen w-screen flex justify-center item-center bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl drop-shadow-2xl '>
          <div className='container mx-auto drop-shadow-2xl'>
                 <Carousel /> 
          </div>
    </div>
  );
}

export default CarouselApp;

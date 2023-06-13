import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { tours } from '../data'
import CarouseItem from './components/CarouseItem';
import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
// import tour5 from './images/tour-4.jpeg';
// import tour6 from './images/tour-4.jpeg';
// import {Images} from './data'
const images = [tour1, tour2, tour3, tour4]
const Carousel = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    };
    const renderImages = () =>
images.map((image, index) => <CarouseItem  key={index} image={image} />);
  return (
    <div className='flex items-center justify-center  shadow-2xl' >
          <div className='w-full shadow-2xl'>
              < Slider {...settings}> 
              {renderImages()}
              </Slider>


              
      </div>
    </div>
  );
}

export default Carousel;

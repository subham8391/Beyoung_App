import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './components.css';
import cashb1 from '../image/cash-b-1.png'
import cashb2 from '../image/cash-b-2.png'
import cashb3 from '../image/cash-b-3.png'
import cashb4 from '../image/cash-b-4.png'
import cashb5 from '../image/cash-b-5.png'
import cashb6 from '../image/cash-b-6.png'
import cashb7 from '../image/cash-b-7.png'
const images = [cashb1,cashb2,cashb3,cashb4,cashb5,cashb6,cashb7];

function DiscountCarousel() {
  return (
    <Splide
      options={{
        type: 'loop',
        autoplay:true,
        perPage: 1,
        perMove: 1,
        arrows:false,
        interval:2000,
        pagination:false,
      }}
    >
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default DiscountCarousel
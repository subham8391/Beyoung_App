import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {DisCoopimages} from '../ConstentData'
import './components.css';

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
      {DisCoopimages.map((image, index) => (
        <SplideSlide key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default DiscountCarousel
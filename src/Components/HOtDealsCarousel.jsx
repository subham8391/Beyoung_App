import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide-extension-grid';

import { Link } from 'react-router-dom';
import './components.css';

function HOtDealsCarousel({hotDealData}) {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 2,
        perMove: 1,
        pagination: false,
        breakpoints: {
          768: {
            perPage: 2,
          },
        },
      }}
    >
      <SplideSlide>
        <div className="splide_slide">
          <div className="window">
            <Link to='/'>
              <img src={hotDealData[0]} alt="Image 0" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="window">
            <Link to='/'>
              <img src={hotDealData[1]} alt="Image 1" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="windows">
            <Link to='/'>
              <img src={hotDealData[2]} alt="Image 2" />
            </Link>
            <Link to='/'>
              <img src={hotDealData[3]} alt="Image 3" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="window">
            <Link to='/'>
              <img src={hotDealData[4]} alt="Image 4" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="windows">
            <Link to='/'>
              <img src={hotDealData[5]} alt="Image 5" />
            </Link>
            <Link to='/'>
              <img src={hotDealData[6]} alt="Image 6" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="window">
            <Link to='/'>
              <img src={hotDealData[7]} alt="Image 7" />
            </Link>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="splide_slide">
          <div className="windows">
            <Link to='/'>
              <img src={hotDealData[8]} alt="Image 8" />
            </Link>
            <Link to='/'>
              <img src={hotDealData[9]} alt="Image 9" />
            </Link>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default HOtDealsCarousel;

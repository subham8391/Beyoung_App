import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';
import './components.css';

function TShartCarousel({ tShartData }) {
  return (
    <Splide
      options={{
        type:'loop',
        perPage: 1,
        perMove: 1,
        pagination: false,
        breakpoints: {
          768: {
            perPage: 2,
          },
        },
      }}
    >
      <SplideSlide className='dig-slid'>
        <div className="b-window">
          <Link className='bw-link' to='/'>
            <img src={tShartData[0]} alt="Image 0" />
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide className='small-slid'>
        <div className="s-windows">
          <Link className='sw-link' to='/'>
            <img src={tShartData[1]} alt="Image 2" />
          </Link>
          <Link className='sw-link' to='/'>
            <img src={tShartData[2]} alt="Image 3" />
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide className='small-slid'>
        <div className="s-windows">
          <Link className='sw-link' to='/'>
            <img src={tShartData[3]} alt="Image 5" />
          </Link>
          <Link className='sw-link' to='/'>
            <img src={tShartData[4]} alt="Image 6" />
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide className='small-slid'>
        <div className="s-windows">
          <Link className='sw-link' to='/'>
            <img src={tShartData[5]} alt="Image 8" />
          </Link>
          <Link className='sw-link' to='/'>
            <img src={tShartData[6]} alt="Image 9" />
          </Link>
        </div>
      </SplideSlide>
      <SplideSlide className='small-slid'>
        <div className="s-windows">
          <Link className='sw-link' to='/'>
            <img src={tShartData[7]} alt="Image 8" />
          </Link>
          <Link className='sw-link' to='/'>
            <img src={tShartData[8]} alt="Image 9" />
          </Link>
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default TShartCarousel;

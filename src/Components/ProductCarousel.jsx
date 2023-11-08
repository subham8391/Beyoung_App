import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components.css'
function ProductCarousel({ productContent }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const{apiEndpoint}=productContent;
      try {
        const response = await fetch(`${apiEndpoint}`,{
          method: "get",
          headers: new Headers({
            projectId: "mmvz5wuhf8k7",
          }),
        }
      );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data)
        // const filteredItems = data.data.filter((item) => {
        //   return ( item.subCategory === newArrival.subCategory && item.gender === newArrival.gender);
        // });
         
        setItems(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    variableWidth: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className='product-card'>
            <div className="product-card-img">
            <img src={item.displayImage} alt={item.name} />
            </div>
            <div className="product-card-title">
            <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;

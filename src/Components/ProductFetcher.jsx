import React, { useState, useEffect, lazy, Suspense } from 'react';
import './components.css';

const ProductFetcher = ({ productData }) => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(productData, {
          method: 'get',
          headers: new Headers({
            projectId: 'mmvz5wuhf8k7',
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-section">
      <div className="product-container">
        {Product.map((item, index) => (
          <div className="product" key={index}>
            <div className="product-img">
              <img src={item.displayImage} alt={item.name} />
            </div>
            <div className="product-details">
              <p>{item.name}</p>
              <p>{item.subCategory}</p>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFetcher;

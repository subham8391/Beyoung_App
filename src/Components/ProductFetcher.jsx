import React, { useState, useEffect } from 'react';
import './components.css';

const ProductFetcher = ({ productData,selectedColor }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { gender, sellerTag, apiEndpoint } = productData[0];
        let filter = {
          gender,
          sellerTag,
        };
        if (selectedColor) {
          // If a color is selected, include it in the filter
          filter = {
            ...filter,
            color: selectedColor,
          };
        }
  
        const filterQueryString = `?filter=${JSON.stringify(filter)}&limit=200`;

        const response = await fetch(`${apiEndpoint}${filterQueryString}`, {
          method: 'get',
          headers: new Headers({
            projectId: 'mmvz5wuhf8k7',
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productData,selectedColor]);

  return (
    <div className="product-section">
      <div className="product-container">
        {products.map((item, index) => (
          <div className="product" key={index}>
            <div className="product-img">
              <img src={item.displayImage} alt={item.name} />
            </div>
            <div className="product-details">
              <p>{item.name}</p>
              <p>{item.subCategory}</p>
              <p>₹{item.price}</p>
              <p>{item.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFetcher;

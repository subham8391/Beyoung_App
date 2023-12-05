import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WishlistBtn from '../Components/Wishlist/WishlistBtn';
import './components.css';

const ProductFetcher = ({ selectCategary,productData,selectedColor,selectedSize,selectedBrand,selectedPriceOrder }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { gender, sellerTag,subCategory,brand, apiEndpoint } = productData[0];
        let filter = {
          gender,
          sellerTag,
          subCategory,
          brand,
        };
        if(selectCategary){
          filter={
            ...filter,
            subCategory:selectCategary,
          }
        }
        if (selectedColor) {
          // If a color is selected, include it in the filter
          filter = {
            ...filter,
            color: selectedColor,
          };
        }
        if (selectedSize) {
          // If a size is selected, include it in the filter
          filter = {
            ...filter,
            size: selectedSize,
          };
        }
        if (selectedBrand) {
          // If a brand is selected, include it in the filter
          filter = {
            ...filter,
            brand: selectedBrand,
          };
        }
      
        const filterQueryString = `?filter=${JSON.stringify(filter)}&limit=300`;

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
        let filteredProducts = data.data;

        if (selectedPriceOrder) {
          // Sort by price in ascending or descending order
          filteredProducts = filteredProducts.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;

            return selectedPriceOrder === 'Price : Low to High' ? priceA - priceB : priceB - priceA;
          });
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectCategary,productData,selectedColor,selectedSize,selectedBrand,selectedPriceOrder]);

  return (
    <div className="product-section">
      <div className="product-container">
        {products.map((item) => (
          <div className="product" key={item._id}>
            {/* <div className="add-wishlist">
            <WishlistBtn id={item._id}/>
            </div> */}
            <Link to={`/details/${item.name}/${item._id}`}>
            <div className="product-img">
              <img src={item.displayImage} alt={item.name} />
            </div>
            <div className="product-details">
              <p>{item.name}</p>
              <p>{item.subCategory}</p>
              <p>₹{item.price}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFetcher;

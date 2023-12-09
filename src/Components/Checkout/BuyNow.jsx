import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from "react-icons/bs";
import Auth from '../../Authenticion/auth';

function BuyNow({id,size,qty,disabled}) {
    const [BuyNow, setBuyNow] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchContent = async () => {
          try {
            const url = 'https://academics.newtonschool.co/api/v1/ecommerce/cart';
            const response = await fetch(url, {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
                'projectID': 'mmvz5wuhf8k7',
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            const content = data.data.items;
            const isPresent = content.filter(item => item._id === id); 
            if (isPresent.length > 0) {
              setBuyNow(true);
            }
            else {
              setBuyNow(false);
            }
          } catch (error) {
            setBuyNow(false);
          }
        };
    
        fetchContent();
      }, []);
    
      const handleAddTOCart = async () => {
        try {
            if (!Auth.isAuthenticated()) {
                navigate('/login');
                return;
              }
          const response = await fetch(
            `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
            {
              method: 'PATCH',
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
                'projectID': 'mmvz5wuhf8k7',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                quantity: qty,
                size:size,
              }),
            }
          );
    
          if (response.ok) {
            setBuyNow((prevIsInWishlist) => !prevIsInWishlist);
            navigate('/checkout/cart');
          }
        } catch (error) {
          console.error('Error adding to wishlist', error);
        }
      };
  return (
    <div className={`buy-now-btn ${disabled ? 'disabled' : ''}`} onClick={disabled ? null : handleAddTOCart}>
        <BsArrowRightCircle /> BUY NOW</div>
  )
}

export default BuyNow
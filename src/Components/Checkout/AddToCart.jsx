import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import Auth from '../../Authenticion/auth';
function AddToCart({id,size,qty}) {
    const [isInWatchlist, setIsInWatchlist] = useState(false);
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
              setIsInWatchlist(true);
            }
            else {
              setIsInWatchlist(false);
            }
          } catch (error) {
            setIsInWatchlist(false);
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
            setIsInWatchlist((prevIsInWishlist) => !prevIsInWishlist);
          }
        } catch (error) {
          console.error('Error adding to wishlist', error);
        }
      };
    
      return (
        <div className="add-to-cart-btn" onClick={handleAddTOCart}>
            <FaCartShopping /> ADD TO CART </div>
      );
}

export default AddToCart
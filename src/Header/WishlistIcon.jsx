import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai';
import Auth from '../Authenticion/auth';
function WishlistIcon() {
    const [contentData, setContentData] = useState(0);
    const isAuthenticated = Auth.isAuthenticated();
    useEffect(() => {
        const fetchContent = async () => {
          try {
            const url = 'https://academics.newtonschool.co/api/v1/ecommerce/wishlist';
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
            const content = data;
            setContentData(content);
          } catch (error) {
            console.error('Error Fetching Data');
          }
        };
    
        fetchContent();
      }, []);
  return (
    <div>
          {isAuthenticated && (
            <Link to='/myaccount/wishlist' className="ncr-icon">
              <AiOutlineHeart />
              <p></p>
            </Link>
          )}
          {!isAuthenticated && (
            <Link to='/login' className="ncr-icon">
              <AiOutlineHeart />
            </Link>
          )}
        </div>
  )
}

export default WishlistIcon


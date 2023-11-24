import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import Auth from '../../Authenticion/auth';
import './wishlist.css'
function RemoveWishlistBtn({ id }) {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,
            'projectID': 'mmvz5wuhf8k7',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        setIsInWatchlist(true);
      } catch (error) {
        setIsInWatchlist(false);
      }
    };

    fetchContent();
  }, [id]);

  const handleWatchlistDelete = async () => {
    try {
      if (!Auth.isAuthenticated()) {
        navigate('/login');
        return;
      }

      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('authToken')}`,
            'projectID': 'mmvz5wuhf8k7',
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        setIsInWatchlist(false);
      }
    } catch (error) {
      console.error('Error removing from wishlist', error);
    }
  };

  return (
    <div className="del-w-container" onClick={handleWatchlistDelete}>
      <FaHeart />
    </div>
  );
}

export default RemoveWishlistBtn;

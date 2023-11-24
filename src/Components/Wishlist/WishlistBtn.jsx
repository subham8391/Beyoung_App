import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Auth from '../../Authenticion/auth';
import './wishlist.css';

function WishlistBtn({ id }) {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            projectID: 'mmvz5wuhf8k7',
          },
        });

        if (response.ok) {
          setIsInWatchlist(true);
        } else {
          setIsInWatchlist(false);
        }
      } catch (error) {
        setIsInWatchlist(false);
      }
    };

    fetchContent();
  }, [id]);

  const handleWatchlistClick = async () => {
    try {
      if (!Auth.isAuthenticated()) {
        navigate('/login');
        return;
      }

      const api = isInWatchlist
        ? `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`
        : 'https://academics.newtonschool.co/api/v1/ecommerce/wishlist';

      const method = isInWatchlist ? 'DELETE' : 'PATCH';

      const response = await fetch(api, {
        method,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
          projectID: 'mmvz5wuhf8k7',
          'Content-Type': 'application/json',
        },
        body: !isInWatchlist ? JSON.stringify({ productId: id }) : undefined,
      });

      if (response.ok) {
        setIsInWatchlist(!isInWatchlist);
      }
    } catch (error) {
      console.error(
        `Error ${
          isInWatchlist ? 'removing from' : 'adding to'
        } wishlist`,
        error
      );
    }
  };

  return (
    <div className="wishlist-btn-container" onClick={handleWatchlistClick}>
      <FaHeart color={isInWatchlist ? 'yellow' : 'gray'} />
    </div>
  );
}

export default WishlistBtn;

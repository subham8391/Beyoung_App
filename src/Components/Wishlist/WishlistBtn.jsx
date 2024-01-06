import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Auth from '../../Authenticion/auth';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './wishlistbtn.css';

function WishlistBtn({ id }) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            projectID: 'mmvz5wuhf8k7',
          },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // console.log(data);
        // console.log(id)
        const content = data.data.items;

        const isPresent = content.filter(item => item.products._id === id)
        // console.log(isPresent,'is present')
        if (isPresent.length > 0) {
          setIsInWishlist(true);
        }
        else {
          setIsInWishlist(false);
        }
       
      } catch (error) {
        setIsInWishlist(false);
      }
    };

    fetchContent();
  }, []);

  const handleWishlistClick = async () => {
    try {
      if (!Auth.isAuthenticated()) {
        navigate('/login');
        return;
      }

      const api = isInWishlist
        ? `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`
        : 'https://academics.newtonschool.co/api/v1/ecommerce/wishlist';

      const method = isInWishlist ? 'DELETE' : 'PATCH';
      // console.log(isInWishlist);
      const response = await fetch(api, {
        method,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
          projectID: 'mmvz5wuhf8k7',
          'Content-Type': 'application/json',
        },
        body: !isInWishlist ? JSON.stringify({ productId: id }) : undefined,
      });

      if (response.ok) {
        setIsInWishlist((prevIsInWishlist) => !prevIsInWishlist);
        setShowAlert(true);
      } 
    } catch (error) {
      console.error(
        `Error ${
          isInWishlist ? 'removing from' : 'adding to'
        } wishlist`,
        error
      );
    }
  };
  const handleAlertClose = () => {
    setShowAlert(false); 
  };
  return (
    <>
    <div className="wishlist-btn-container" onClick={handleWishlistClick}>
      <FaHeart color={isInWishlist ? 'yellow' : 'gray'} />
    </div>
    <Snackbar
        open={showAlert}
        autoHideDuration={1000} 
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <MuiAlert onClose={handleAlertClose} severity={isInWishlist ? 'success' : 'error'} sx={{ width: '100%' }}>
          Product {isInWishlist ? 'added to' : 'removed from'} wishlist
        </MuiAlert>
      </Snackbar>
    </>
  );
}

export default WishlistBtn;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart } from 'react-icons/ai';
function CartIcon() {
    const [contentData, setContentData] = useState(0);
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
            const content = data;
            setContentData(content);
          } catch (error) {
            console.error('Error Fetching Data');
          }
        };
    
        fetchContent();
      }, []);
  return (
    <div><Link to='/checkout' className="ncr-icon"><AiOutlineShoppingCart /><p>{contentData.results}</p></Link></div>
  )
}

export default CartIcon
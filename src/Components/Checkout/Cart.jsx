
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
import './checkout.css'
function Cart() {
  const [contentData, setContentData] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setContentData(content);
        setLoading(false);
      } catch (error) {
        console.error('Error Fetching Data');
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const removeFromcart = async (id) => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
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
        const updatedContent = contentData.filter(item => item.product._id !== id);
        setContentData(updatedContent);
      }
    } catch (error) {
      console.error('Error removing from cart', error);
    }
  };

  if (loading || contentData.length === 0) {
    return (
      <div className='wle-body'>
        <h1 className='wle-desc'>Uh-Oh! Nothing to shop</h1>
      </div>
    )
  }

  return (
    <div className="cart-product-section">
      <div className="cart-product-container">
        {contentData.map((item, index) => (
          <div className="cart-product" key={index}>
            <div className="card-top-sec">
              <div className="cart-top-left">
                <Link to={`/details/${item.product.name}/${item.product._id}`}>
                  <div className="cart-product-img">
                    <img src={item.product.displayImage} alt={item.product.name} />
                  </div>
                  <div className="cart-product-details">
                    <p>Qty : {item.quantity}</p>
                  </div>
                </Link>
              </div>
              <div className="cart-top-right">
                <h4>{item.product.name}</h4>
                <h4>₹ {item.product.price}</h4>
                <p>Ratings: {item.product.ratings}</p>
                <p>Size : {item.size}</p>
                <div className="del-cart">
                  <button onClick={() => removeFromcart(item.product._id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
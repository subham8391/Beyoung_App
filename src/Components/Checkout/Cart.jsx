
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";
import EmptyCart from '../../image/Empty_cart.png'
import Coup from '../../image/coupon.png'
import './checkout.css'
function Cart() {
  const [contentData, setContentData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [totalPriceWithGST, setTotalPriceWithGST] = useState(0);
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
        const priceData = data;
        const content = data.data.items;
        setPriceData(priceData);
        setContentData(content);
        setLoading(false);
      } catch (error) {
        console.error('Error Fetching Data');
        setLoading(false);
      }
    };

    fetchContent();
  }, [priceData]);

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

  const totalPrice = priceData?.data?.totalPrice || 0;
  useEffect(() => {
    const calculateTotalWithGST = () => {
      const gstPercentage = 18;
      const gstAmount = (gstPercentage / 100) * totalPrice;
      const totalPriceAfterGST = totalPrice + gstAmount;
      setTotalPriceWithGST(totalPriceAfterGST);
    };

    calculateTotalWithGST();
  }, [priceData]);

  const discountAmount = (totalPriceWithGST - totalPrice).toFixed(2);
  const ShippingFee = priceData.results > 0 ? 50 : 0;
  const TotalAmmount = (totalPrice + ShippingFee);

  return (
    <>
      <div className="ch-content">
        <div className="cart-product-section">
          {loading || priceData.results < 1 ? (
            <div className="wle-body">
              <img src={EmptyCart} alt="Empty Cart" />
              <h1 className="wle-desc">Uh-Oh! Nothing to shop</h1>
            </div>
          ) : (
            <div className="cart-product-container">
              {contentData.map((item, index) => (
                <div className="cart-product" key={index}>
                  <div className="card-top-sec">
                    <div className="cart-top-left">
                      <Link to={`/details/${item.product.name}/${item.product._id}`}>
                        <div className="cart-product-img">
                          <img src={item.product.displayImage} alt={item.product.name} />
                        </div>
                      </Link>
                      <div className="del-cart">
                        <button onClick={() => removeFromcart(item.product._id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-top-right">
                      <h4>{item.product.name}</h4>
                      <h4>₹ {item.product.price * item.quantity}</h4>
                      <p>Ratings: {item.product.ratings.toFixed(1)}</p>
                      <p>Size: {item.size}</p>
                      <p>Qty: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="ch-prising">
        <div className="ob-conterner">
          <div className="obc-child"><img className='coup-img' src={Coup} alt="coupon" /> <span>Offers & Benefits</span></div>
          <div className="obc-child">
            <div className="applycoup-container">
              <div className="applycoup-bar">
                <input type="text" placeholder='Enter Code' />
              </div>
              <button className='applycoup-btn'>APPLY</button>
            </div>
          </div>
          <div className="obc-child c-code">
            <p>Flat ₹100 off on orders above ₹999 </p>
            <div className="coup-c">BEYOUNG100</div>
          </div>
        </div>
        <div className="pd-conterner">
          <div className="pdc-child pdch"><p>PRICE DETAILS ({priceData.results} items)</p></div>
          <div className="pdc-child pdc-data"><span>Total MRP (Inc. of Taxes)</span><span>₹{totalPriceWithGST.toFixed(2)}</span></div>
          <div className="pdc-child pdc-data"><span>Beyoung Discount</span><span>- ₹{discountAmount}</span></div>
          <div className="pdc-child pdc-data"><span>Shipping</span><span>₹{ShippingFee}</span></div>
          <div className="pdc-child pdc-data"><span>Cart Total</span><span>₹{TotalAmmount}</span></div>
        </div>
        <div className="ta-conterner">
        <div className="tac-child"><h3>Total Ammount</h3><h3>₹{TotalAmmount}</h3></div>
        <div className="tac-save"><span>You Saved ₹{discountAmount} on this order</span></div>
        <div className="steper-btn"><h3>CHECKOUT SECURELY</h3></div>
        </div>
      </div>
    </>
  )
}

export default Cart
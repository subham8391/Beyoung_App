import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paymentimg from '../../image/Payment-Img.png'
import { BsCheckCircleFill } from "react-icons/bs";
import './checkout.css'

function Payment({ handleStepChange }) {
  const [priceData, setPriceData] = useState([]);
  const [totalPriceWithGST, setTotalPriceWithGST] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const storedUserName = sessionStorage.getItem('userInfoN');
    const storedUserEmail = sessionStorage.getItem('userInfoE');
    if (storedUserName && storedUserEmail) {
      setUserName(storedUserName);
      setUserEmail(storedUserEmail);
    }
  }, []);

  const handleCheckout = () => {
    navigate('/myaccount/order');
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const url = 'https://academics.newtonschool.co/api/v1/ecommerce/cart';
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            'projectID': 'mmvz5wuhf8k7'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPriceData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error Fetching Data');
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  useEffect(() => {
    const calculateTotalWithGST = () => {
      const gstPercentage = 18;
      const totalPrice = priceData?.data?.totalPrice || 0;
      const gstAmount = (gstPercentage / 100) * totalPrice;
      const totalPriceAfterGST = totalPrice + gstAmount;
      setTotalPriceWithGST(totalPriceAfterGST);
    };
    calculateTotalWithGST();
  }, [priceData]);

  const discountAmount = (totalPriceWithGST - (priceData?.data?.totalPrice || 0)).toFixed(2);
  const ShippingFee = priceData.results > 0 ? 50 : 0;
  const TotalAmount = (priceData?.data?.totalPrice || 0) + ShippingFee;

  return (
    <>
      <div className="pa-content pay-op">
        <img src={Paymentimg} alt="payment img" />
        <h2>Hi, hope you are doing well.</h2>
        <h1>This feature is coming soon, stay tuned!</h1>
      </div>
      <div className="ch-prising">
        <div className="delivery-address">
          <div className="deli-to"><BsCheckCircleFill /><p>Deliver To:</p><h3>{userName}</h3></div>
            <div className="deli-contact">
            <BsCheckCircleFill /><p>Contact Email:</p>{userEmail} <h3></h3>
            </div>
        </div>
        <div className="pd-conterner">
          <div className="pdc-child pdch"><p>PRICE DETAILS ({priceData.results} items)</p></div>
          <div className="pdc-child pdc-data"><span>Total MRP (Inc. of Taxes)</span><span>₹{totalPriceWithGST.toFixed(2)}</span></div>
          <div className="pdc-child pdc-data"><span>Beyoung Discount</span><span>- ₹{discountAmount}</span></div>
          <div className="pdc-child pdc-data"><span>Shipping</span><span>₹{ShippingFee}</span></div>
          <div className="pdc-child pdc-data"><span>Cart Total</span><span>₹{TotalAmount}</span></div>
        </div>
        <div className="ta-conterner">
          <div className="tac-child"><h3>Total Ammount</h3><h3>₹{TotalAmount}</h3></div>
          <div className="tac-save"><span>You Saved ₹{discountAmount} on this order</span></div>
          <div className="steper-btn" onClick={handleCheckout}><h3>CHECKOUT SECURELY</h3></div>
        </div>
      </div>
    </>
  )
}

export default Payment
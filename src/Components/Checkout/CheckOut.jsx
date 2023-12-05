import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { TbShieldLockFilled } from "react-icons/tb";
import Coup from '../../image/coupon.png'
import Cart from './Cart';
import './checkout.css'
function CheckOut() {
    const [contentData, setContentData] = useState([]);
    const [totalPriceWithGST, setTotalPriceWithGST] = useState(0);
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
      const totalPrice = contentData?.data?.totalPrice || 0;
      useEffect(() => {
        const calculateTotalWithGST = () => {
            const gstPercentage = 18;
            const gstAmount = (gstPercentage / 100) * totalPrice;
            const totalPriceAfterGST = totalPrice + gstAmount;
            setTotalPriceWithGST(totalPriceAfterGST);
        };

        calculateTotalWithGST();
    }, [contentData]);

    const discountAmount = (totalPriceWithGST - totalPrice).toFixed(2);
    const ShippingFee=50;
    const TotalAmmount= (totalPrice + ShippingFee);
    return (
        <>
            <div className="checkout-section">
                <div className="checkout-container">
                    <div className="checkout-header">
                        <div className="ch-left">
                            <div className="logo">
                                <Link to="/">
                                    <h1>BEYOUNG</h1>
                                </Link>
                            </div>
                        </div>
                        <div className="ch-right">
                            <div className="se-icon"><TbShieldLockFilled /></div>
                            <h2>100% SECURE PAYMENT</h2>
                        </div>
                    </div>
                    <div className="checkout-body">
                        <div className="progress-bar"></div>
                        <div className="checkout-content">
                            <div className="ch-content"><Cart /></div>
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
                                    <div className="pdc-child pdch"><p>PRICE DETAILS ({contentData.results} items)</p></div>
                                    <div className="pdc-child pdc-data"><span>Total MRP (Inc. of Taxes)</span><span>₹{totalPriceWithGST.toFixed(2)}</span></div>
                                    <div className="pdc-child pdc-data"><span>Beyoung Discount</span><span>- ₹{discountAmount}</span></div> 
                                    <div className="pdc-child pdc-data"><span>Shipping</span><span>₹{ShippingFee}</span></div>
                                    <div className="pdc-child pdc-data"><span>Total Ammount</span><span>₹{TotalAmmount}</span></div> 
                                </div>
                                <div className="ta-conterner"></div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-footer"></div>
                </div>
            </div >
        </>
    )
}

export default CheckOut
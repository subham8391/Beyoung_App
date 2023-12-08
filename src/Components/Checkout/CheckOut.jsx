import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { TbShieldLockFilled } from "react-icons/tb";
import { CartFooter } from '../../ConstentData';
import Cart from './Cart';
import './checkout.css'
function CheckOut() {
   
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
                            <Cart />
                        </div>
                    </div>
                    <div className="checkout-footer">
                    {CartFooter.map((item,index)=>(
                        <img src={item} alt="" key={index} />
                    ))}
                     </div>
                </div>
            </div >
        </>
    )
}

export default CheckOut
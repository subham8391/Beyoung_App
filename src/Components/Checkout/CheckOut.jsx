import React from 'react'
import { Link } from 'react-router-dom'
import { TbShieldLockFilled } from "react-icons/tb";
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
                            <div className="ch-content"><Cart /></div>
                            <div className="ch-prising"></div>
                        </div>
                    </div>
                    <div className="checkout-footer"></div>
                </div>
            </div>
        </>
    )
}

export default CheckOut
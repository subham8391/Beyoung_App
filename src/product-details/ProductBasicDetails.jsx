import React from 'react'
import { FaTruck } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { BsArrowRightCircle } from "react-icons/bs";
function ProductBasicDetails({ product }) {
    const options = Array.from({ length: 10 }, (_, index) => index + 1)
    return (
        <>
            {product && product.size && (
                <div className="product-bd-section">
                    <div className="product-bd-container">
                        <h2>{product.name}</h2>
                        <p>{product.subCategory}</p>
                        <h3>₹ {product.price}</h3>
                        <h4>Inclusive of All Taxes + Free Shipping</h4>
                        <h4>{product.ratings} (Ratings & Reviews)</h4>
                        <h4>Extra ₹100 OFF on ₹999 (Code:BEYOUNG100)</h4>
                        <h4>COLOR: {product.color}</h4>
                        <div className="p-color" style={{ backgroundColor: product.color }}></div>
                        <h4>SIZE:</h4>
                        <div className="p-size">
                            {product.size.map((size, index) => (
                                <div className="p-s-circle" key={index}>
                                    <p>{size}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-qut">
                            <label For="qty">QTY:</label>
                            <select name="qty" id="qty">
                                {options.map((value) => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="p-action-btn">
                            <div className="add-to-cart-btn"><FaCartShopping /> ADD TO CART </div>
                            <div className="buy-now-btn"><BsArrowRightCircle /> BUY NOW</div>
                        </div>
                        <h4>DELIVERY OPTIONS</h4>
                        <div className="dalivary-section">
                            <p>Enter your Pincode to check the delivery time and free pick up options</p>
                            <div className="pin-aria">
                                <input type="password" inputmode="numeric" maxlength="6" name='pin'id='pin' placeholder='Enter Pincode' />
                                <button className='chk-btn'>Check</button>
                            </div>
                            <div className="hi-li"><BsCashCoin /> Cash On Delivery</div>
                            <div className="hi-li"><FaTruck /> Express Shipping</div>
                        </div>
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductBasicDetails
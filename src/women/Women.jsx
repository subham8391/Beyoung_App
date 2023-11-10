import React from 'react'
import { WomenProduct } from '../ConstentData'
import ProductFetcher from '../Components/ProductFetcher';
import WomenBanner from '../image/Women-clothing-banner.jpg'
import './women.css'
function Women() {
  return (
    <>
      <div className="women-section">
        <div className="women-banner">
          <img src={WomenBanner} alt="" />
        </div>
        <div className="women-page-container">
          <div className="fil-sec"><h2>FILTER</h2></div>
          <div className="product-sec">
            <h2>WOMEN'S CLOTHING</h2>
            <p>Women's Clothing - Get your hands on stylish and comfortable clothing for women - Buy a range of ladies' clothing online at affordable prices. Beyoung offers the latest collection of Kurtis, shirts, tops, t-shirts, pants, boxers, and jeggings with existing offers and discounts. Find women's clothing for formal to weekend outings in all styles. Free Shipping | COD | S - 4XL Sizes | 15 Days Return</p>
           <ProductFetcher productData={WomenProduct} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Women
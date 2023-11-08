import React, { useState, useEffect } from 'react';
import { MenProduct } from '../ConstentData';
import ProductFetcher from '../Components/ProductFetcher';
import './men.css'
function Men() {
 

  return (
    <>
      <div className="men-section">
        <div className="men-container">
          <div className="fil-sec"><h2>FILTER</h2></div>
          <div className="product-sec">
            <h2>MENS CLOTHING</h2>
            <p>Mens Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.</p>
           <ProductFetcher productData={MenProduct[0].apiEndpoint} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Men
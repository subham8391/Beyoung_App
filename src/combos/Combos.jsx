import React from 'react'
import { ComboProduct } from '../ConstentData'
import ProductFetcher from '../Components/ProductFetcher';
import comboBanner from '../image/combo-categry-banner.jpg'
import './combos.css'
function Combos() {
  return (
    <>
    <div className="combo-section">
      <div className="combo-banner">
        <img src={comboBanner} alt="" />
      </div>
      <div className="combo-page-container">
        <div className="fil-sec"><h2>FILTER</h2></div>
        <div className="product-sec">
          <h2>COMBOS (UNISEX)</h2>
          <p>Combo T Shirts - Buy T Shirt Combos Online in India at Low Price. Latest Collection of Plain and Printed Combo T shirts For Mens Online at Beyoung. ✓ Pack of 3 & 4 Combo T-shirts ✓Big Discounts ✓Free Shipping ✓COD.</p>
         <ProductFetcher productData={ComboProduct[0].apiEndpoint} />
        </div>
      </div>
    </div>
  </>
  )
}

export default Combos
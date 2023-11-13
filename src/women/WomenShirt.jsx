import React, { useState } from 'react';
import { WomenShirtProduct } from '../ConstentData'
import ProductFetcher from '../Components/ProductFetcher';
import urbanSBanner from '../image/Urban-shirt-banners.jpg'
import ColorFilter from '../Components/Filter/ColorFilters';
import SizeFilter from '../Components/Filter/SizeFilter';
import PriceFilter from '../Components/Filter/PriceFilter';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './women.css';
function WomenShirt() {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedPriceOrder, setSelectedPriceOrder] = useState(null);
    const [isColorFilterVisible, setIsColorFilterVisible] = useState(true);
    const [isSizeFilterVisible, setIsSizeFilterVisible] = useState(true);
    const [isPriceFilterVisible, setIsPriceFilterVisible] = useState(true);
    const toggleColorFilter = () => {
      setIsColorFilterVisible(!isColorFilterVisible);
    };
    const toggleSizeFilter = () => {
      setIsSizeFilterVisible(!isSizeFilterVisible);
    };
    const togglePriceFilter = () => {
      setIsPriceFilterVisible(!isPriceFilterVisible);
    };
  
    const handleColorItemClick = (color) => {
      setSelectedColor(color);
    };
    const handleSelectedSize = (size) => {
      setSelectedSize(size);
    }
    const handlePriceOrderChange = (order) => {
      setSelectedPriceOrder(order === selectedPriceOrder ? null : order);
    };
    return (
      <>
        <div className="pages-section">
          {/* <div className="pages-banner">
            <img src={urbanSBanner} alt="" />
          </div> */}
          <div className="pages-page-container">
            <div className="fil-sec">
              <h2>FILTER</h2>
              <div className="col-filter">
                <div className="open-filter-btn" onClick={toggleColorFilter}>
                  COLOR {isColorFilterVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isColorFilterVisible && <ColorFilter selectedColor={selectedColor} onColorItemClick={handleColorItemClick} />}
              </div>
              <div className="size-filter">
                <div className="open-filter-btn" onClick={toggleSizeFilter}>
                  SIZE {isSizeFilterVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isSizeFilterVisible && <SizeFilter selectedSize={selectedSize} onSizeItemClick={handleSelectedSize} />}
              </div>
              <div className="price-filter">
                <div className="open-filter-btn" onClick={togglePriceFilter}>
                  PRICE {isPriceFilterVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isPriceFilterVisible && <PriceFilter onPriceChange={handlePriceOrderChange} />}
              </div>
            </div>
            <div className="product-sec">
              <h2>WOMEN SHIRTS</h2>
              <ProductFetcher productData={WomenShirtProduct} selectedColor={selectedColor} selectedSize={selectedSize}  selectedPriceOrder={selectedPriceOrder}/>
            </div>
          </div>
        </div>
      </>
    )
}

export default WomenShirt
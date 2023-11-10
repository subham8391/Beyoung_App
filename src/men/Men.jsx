import React, { useState } from 'react';
import { MenProduct } from '../ConstentData';
import ProductFetcher from '../Components/ProductFetcher';
import ColorFilter from '../Components/Filter/colorFilter';
import SizeFilter from '../Components/Filter/SizeFilter';
import PriceFilter from '../Components/Filter/PriceFilter';
import BrandFilter from '../Components/Filter/BrandFilter';
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import './men.css';

function Men() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorFilterVisible, setIsColorFilterVisible] = useState(true);
  const [isSizeFilterVisible, setIsSizeFilterVisible] = useState(true);
  const [isBrandFilterVisible, setIsBrandFilterVisible] = useState(true);
  const [isPriceFilterVisible, setIsPriceFilterVisible] = useState(true);
  const toggleColorFilter = () => {
    setIsColorFilterVisible(!isColorFilterVisible);
  };
  const toggleSizeFilter = () => {
    setIsSizeFilterVisible(!isSizeFilterVisible);
  };
  const toggleBrandFilter = () => {
    setIsBrandFilterVisible(!isBrandFilterVisible);
  };
  const togglePriceFilter = () => {
    setIsPriceFilterVisible(!isPriceFilterVisible);
  };
  
  const handleColorItemClick = (color) => {
    setSelectedColor(color);
  };
  return (
    <>
      <div className="men-section">
        <div className="men-container">
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
              {isSizeFilterVisible && <SizeFilter />}
            </div>
            <div className="brand-filter">
            <div className="open-filter-btn" onClick={toggleBrandFilter}>
                BRAND {isBrandFilterVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isBrandFilterVisible && <BrandFilter />}
            </div>
            <div className="price-filter">
            <div className="open-filter-btn" onClick={togglePriceFilter}>
                PRICE {isPriceFilterVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isPriceFilterVisible && <PriceFilter />}
            </div>
          </div>
          <div className="product-sec">
            <h2>MENS CLOTHING</h2>
            <p>Mens Clothing is all about being stylish and comfortable all day long. Beyoung understands the same and provides you with a handsome range of Clothing For Men out there. Scroll below to get a look at it.</p>
            <ProductFetcher productData={MenProduct} selectedColor={selectedColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Men;

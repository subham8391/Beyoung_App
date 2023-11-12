import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import MenDropdown from '../men/MenDropdown';
import WomenDropdown from '../women/WomenDropdown';
import NewArrivalDropdown from '../new-arrivals/NewArrivalDropdown';
import SearchBar from './SearchBar';
import './navigationbar.css';

function NavigationBar() {
  const [isMenDropdownOpen, setMenDropdownOpen] = useState(false);
  const [isWomenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const [isNewArrivalDropdownOpen, setNewArrivalDropdownOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const handleMenDropdownToggle = () => setMenDropdownOpen(!isMenDropdownOpen);
  const handleWomenDropdownToggle = () => setWomenDropdownOpen(!isWomenDropdownOpen);
  const handleNewArrivalDropdownToggle = () => setNewArrivalDropdownOpen(!isNewArrivalDropdownOpen);
  const handleSearchToggle = () => {
    if (isSearchBarOpen) {
      setIsSearchBarOpen(false);
    } else {
      setIsSearchBarOpen(true);
    }
  };
  return (
    <>
      <div className="navigation-sec">
        <div className="navi-container">
          <div className="navi-container-top">
            <div className="track-order-sec">
              <SlLocationPin /> <span>TRACK YOUR ORDER</span>
            </div>
            <div className="auth-sec">
              <button className="auth-btn">LOG IN</button>
              <hr className="diveder" />
              <button className="auth-btn">SIGNUP</button>
            </div>
          </div>
          <div className="navi-container-bottom">
            <div className="navig-container-left">
              <div className="logo">
                <Link to="/">
                  <h2>BEYOUNG</h2>
                </Link>
              </div>
              <nav>
                <ul>
                  <li onMouseEnter={handleMenDropdownToggle} onMouseLeave={handleMenDropdownToggle}>
                   <Link to="/mens-clothing">MEN</Link>
                    {isMenDropdownOpen && <MenDropdown />}
                  </li>
                  <li onMouseEnter={handleWomenDropdownToggle} onMouseLeave={handleWomenDropdownToggle}>
                    <Link to="/womens-clothing">WOMEN</Link>
                    {isWomenDropdownOpen && <WomenDropdown />}
                  </li>
                  <li>
                    <Link to="/combo-products">COMBOS</Link>
                  </li>
                  <li>
                    <Link to="/bb-ke-favorites">BB KE FAVORITES</Link>
                  </li>
                  <li>
                    <Link to="/winter-wears">WINTER WEARS</Link>
                  </li>
                  <li onMouseEnter={handleNewArrivalDropdownToggle} onMouseLeave={handleNewArrivalDropdownToggle}>
                    <span>NEW ARRIVALS</span>
                    {isNewArrivalDropdownOpen && <NewArrivalDropdown />}
                  </li>
                </ul>
              </nav>
            </div>
            <div className="navig-container-right">
            <div className="ncr-icon" onClick={handleSearchToggle}><AiOutlineSearch /></div>
              <div className="ncr-icon"><AiOutlineHeart /></div>
              <div className="ncr-icon"><AiOutlineShoppingCart /></div>
            </div>
          </div>
        </div>
        {isSearchBarOpen && <SearchBar />}
      </div>
    </>
  );
}

export default NavigationBar;

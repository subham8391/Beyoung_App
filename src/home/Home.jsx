import React from 'react'
import hti from '../image/home-1.png'
import DiscountCarousel from '../Components/DiscountCarousel'
import './home.css'
function Home() {
  return (
    <>
     <div className="home-section">
      <div className="home-container">
        <div className="home-top-img"><img src={hti} alt="" /></div>
        <div className="home-main-content">
          <div className="dis-coop-sec">
          <DiscountCarousel />
          </div>
        
        </div>
        
      </div>
     </div>
    </>
  )
}

export default Home
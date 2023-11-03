import React from 'react'
import hti from '../image/home-1.png'
import du1 from '../image/home-2.png'
import du2 from '../image/home-3.png'
import DiscountCarousel from '../Components/DiscountCarousel'
import HOtDealsCarousel from '../Components/HOtDealsCarousel'
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
          <div className="home-duo-img">
            <div className="duo-item"><img src={du1} alt="" /></div>
            <div className="duo-item"><img src={du2} alt="" /></div>
          </div>
          <div className="hot-deals">
            <h2 className='hd-head'>HOT DEALS</h2>
            <HOtDealsCarousel />
          </div>
          <div className="new-arrivals">
          <h2 className='hd-head'>NEW ARRIVALS</h2>
          </div>
        </div>
        
      </div>
     </div>
    </>
  )
}

export default Home
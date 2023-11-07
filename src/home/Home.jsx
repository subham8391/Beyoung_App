import React from 'react'
import { Link } from 'react-router-dom'
import hti from '../image/home-1.jpg'
import du1 from '../image/home-2.jpeg'
import du2 from '../image/home-3.jpg'
import hb1 from '../image/home-4.png'
import hb2 from '../image/strip.jpg'
import bspi1 from '../image/Combo-banner.jpg'
import { HomeData } from '../ConstentData'
import DiscountCarousel from '../Components/DiscountCarousel'
import HOtDealsCarousel from '../Components/HOtDealsCarousel'
import ProductCarousel from '../Components/ProductCarousel'
import TShartCarousel from '../Components/TShartCarousel'
import './home.css'
function Home() {
  return (
    <>
      <div className="home-section">
        <div className="home-container">
          <div className="home-top-img"><img src={hti} alt="" /></div>
          <div className="home-main-content">
            <div className="dis-coop-sec">
              <DiscountCarousel DisCoop={HomeData[0].DisCoopimages} />
            </div>
            <div className="home-duo-img">
              <div className="duo-item"><img src={du1} alt="" /></div>
              <div className="duo-item"><img src={du2} alt="" /></div>
            </div>
            <div className="hot-deals">
              <div className="hed-lin">
                <h2 className='hd-head'>HOT DEALS</h2>
              </div>
              <HOtDealsCarousel hotDealData={HomeData[1].HotDealimages} />
            </div>
            <div className="new-arrivals">
              <div className="hed-lin">
                <h2 className='hd-head'>NEW ARRIVALS</h2>
              </div>
              <ProductCarousel newArrival={HomeData[2].NewArrivalData} />
            </div>
            <div className="home-banner">
              <img src={hb1} alt="" />
            </div>
            <div className="bsp-sec">
              <div className="bsp-container">
                <div className="bsp-head">
                  <h2 className='hd-head'>BEST SELLING PRODUCT</h2>
                  <Link to='/viewBestShell'>ViewAll</Link>
                </div>
                <div className="bsp-body">
                  <img src={bspi1} alt="" />
                </div>
              </div>
            </div>
            <div className="home-banner hb-2">
              <img src={hb2} alt="" />
            </div>
            <div className="for-man">
              <p>FOR MEN</p>
            </div>
            <div className="new-arrivals">
              <div className="hed-lin">
                <h2 className='hd-head'>T-SHIRTS</h2>
                <p className='tag-line'>High On Demand</p>
              </div>
              <TShartCarousel tShartData={HomeData[3].TShartsData} />
            </div>
          </div>
          <div className="shirts-container">
            <div className="hed-lin">
              <div className="bsp-head">
                <h2 className='hd-head'>SHIRTS</h2>
                <Link to='/viewAllShirts'>ViewAll</Link>
              </div>
              <p className='tag-line'>Formal To Casual Styles</p>
            </div>
              <div className="shirts-aria">
                {HomeData[4].ShartsData.map((pro,index)=>(
                  <Link key={index} to='/shirts'>
                    <img src={pro} alt="shirt-img" />
                  </Link>
                ))}
              </div>
          </div>
          <div className="bottomwear-container">
            <div className="hed-lin">
                <h2 className='hd-head'>BOTTOMWEARS</h2>
              <p className='tag-line'>High On Demand</p>
            </div>
              <div className="shirts-aria">
                {HomeData[4].ShartsData.map((pro,index)=>(
                  <Link key={index} to='/shirts'>
                    <img src={pro} alt="shirt-img" />
                  </Link>
                ))}
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'
import { womenDropdownData } from '../ConstentData';
import dimg from '../image/drop-img.png'
import './women.css'
function WomenDropdown() {
  return (
    <div className='womend-section'>
      <div className="womend-container">
      <div className="drop-con">
        {womenDropdownData.map((data, index) => (
          <div className="d-content" key={index}>
            <h3>{data.title}</h3>
            {data.items.map((dcon,index)=>(
              <Link key={index} to={`/women/${dcon.subCategory}`}>{dcon.heading}</Link>
            ))}
          </div>
        ))}
        </div>
        <div className="d-img"><img src={dimg} alt="" /></div>
      </div>
    </div>
  )
}

export default WomenDropdown
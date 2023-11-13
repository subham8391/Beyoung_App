import React from 'react'
import { Link } from 'react-router-dom'
import {newArrivalDropdownData} from '../ConstentData'
import './newarrivals.css'
function NewArrivalDropdown() {
  return (
    <div className='new-arrival-section'>
      <div className="new-arrival-container">
        {newArrivalDropdownData.map((data,index)=>(
          <Link key={index} to={`/${data.path}`}>{data.heading}</Link>
        ))}
      </div>
    </div>
  )
}

export default NewArrivalDropdown
import React from 'react'
import { Link } from 'react-router-dom'
import './newarrivals.css'
function NewArrivalDropdown() {
  return (
    <div className='new-arrival-section'>
      <div className="new-arrival-container">
        <Link to='/'>go to home</Link>
      </div>
    </div>
  )
}

export default NewArrivalDropdown
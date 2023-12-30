import React from 'react';
import { Link } from 'react-router-dom';
import { menDropdownData } from '../ConstentData';
import dimg from '../image/drop-img.png'
import './men.css';

function MenDropdown() {
  return (
    <div className='mend-section'>
      <div className="mend-container">
        <div className="drop-con">
        {menDropdownData.map((data, index) => (
          <div className="d-content" key={index}>
            <h3>{data.title}</h3>
            {data.items.map((dcon,index)=>(
              <Link key={index} to={`/men/${dcon.subCategory}`}>{dcon.heading}</Link>
            ))}
          </div>
        ))}
        </div>
        <div className="d-img"><img src={dimg} alt="" /></div>
      </div>
    </div>
  );
}

export default MenDropdown;
import React from 'react';
import { footerLists } from '../ConstentData';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <div className='footer-section'>
      <div className="footer-container">
        <div className="foot-con">
          {footerLists.map((data, index) => (
            <div className="foot-content" key={index}>
              <h3>{data.title}</h3>
              {data.items.map((dcon, index) => (
                <Link key={index} to={`/${dcon}`}>{dcon}</Link>
              ))}
              {data.app && (
                <div className="app-section">
                  <h3>{data.app.heading}</h3>
                  <div className="app-links">
                    <a href={data.app.app[0]} target="_blank" rel="noopener noreferrer">
                      <img src={data.app.app[0]} alt="Play Store" />
                    </a>
                    <a href={data.app.app[1]} target="_blank" rel="noopener noreferrer">
                      <img src={data.app.app[1]} alt="App Store" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Footer;

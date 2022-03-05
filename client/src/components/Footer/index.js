import React from 'react';
import './style.css';

const Footer = () => {

  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <img className='logoTransparent' alt='inHouse Logo' src='https://i.imgur.com/ww8Eece.png?1'/>
          </div>
          <div className='col'>
            <h4>inHouse</h4>
            <ul className='list-unstyled'>
              <li>951-555-5692</li>
              <li>Riverside, California</li>
              <li>4567 South St</li>
            </ul>
          </div>
          <div className='col'>
            <h5>Support</h5>
            <ul className='list-unstyled'>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Registration</li>
            </ul>
          </div>
          <div className='col'>
            <h5>More</h5>
            <ul className='list-unstyled'>
              <li>About inHouse</li>
              <li>Design</li>
              <li>Access</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} inHouse Inventory Tracking System | All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
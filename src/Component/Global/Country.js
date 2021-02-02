import React from 'react';
import canada from '../../Assets/Company/illustration-canada.svg';
import australia from '../../Assets/Company/illustration-australia.svg';
import unitedKingdom from '../../Assets/Company/illustration-united-kingdom.svg';
import { Link } from 'react-router-dom';
function Country() {
  return (
    <div className='container about-location row'>
      <div className='col col-lg-4'>
        <div className='about-location-content'>
          <div className='about-location-content-bg1'>
            <img src={canada} alt='Toronto, Canada illustration' />
          </div>
          <div className='about-location-content-description'>
            <h1>CANADA</h1>
            <Link to='/location'>
              <button className='btn'>SEE LOCATION</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='col col-lg-4'>
        <div className='about-location-content'>
          <div className='about-location-content-bg2'>
            <img src={australia} alt='Sydney Opera House illustration' />
          </div>
          <div className='about-location-content-description'>
            <h1>AUSTRALIA</h1>
            <Link to='/location'>
              <button className='btn'>SEE LOCATION</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='col col-lg-4'>
        <div className='about-location-content'>
          <div className='about-location-content-bg3'>
            <img src={unitedKingdom} alt='London bridge illustration' />
          </div>
          <div className='about-location-content-description'>
            <h1>UNITED-KINGDOM</h1>
            <Link to='/location'>
              <button className='btn'>SEE LOCATION</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;

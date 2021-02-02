import React, { useEffect } from 'react';
import Touch from '../Global/Touch';
import canada from '../../Assets/Location/image-map-canada.png';
import australia from '../../Assets/Location/image-map-australia.png';
import uk from '../../Assets/Location/image-map-united-kingdom.png';
function Location() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className='container location'>
        <div className='location-row row '>
          <div className='location-row-detail col'>
            <div className='location-row-detail-body row'>
              <h1 className='location-detail-header'>Canada</h1>
              <div className='location-row-detail-body-content'>
                <div className=''>
                  <h1>Designo central office</h1>
                  <p>3886 Wellington Street</p>
                  <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className=''>
                  <h1>Contact</h1>
                  <p>P : +1 253-863-8967</p>
                  <p>M : contact@designo.co</p>
                </div>
              </div>
            </div>
          </div>
          <div className='location-row-picture col'>
            <img src={australia} alt='australia' />
          </div>
        </div>
        <div className='location-row row'>
          <div className='location-row-picture col'>
            <img src={canada} alt='Canada' />
          </div>
          <div className='location-row-detail col'>
            <div className='location-row-detail-body row'>
              <h1 className='location-detail-header'>Australia</h1>
              <div className='location-row-detail-body-content'>
                <div className=''>
                  <h1>Designo AU Office</h1>
                  <p>19 Balonne Street</p>
                  <p>New South Wales 2443</p>
                </div>
                <div className=''>
                  <h1>Contact</h1>
                  <p>P : (02) 6720 9092</p>
                  <p>M : contact@designo.au</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='location-row row '>
          <div className='location-row-detail col'>
            <div className='location-row-detail-body row'>
              <h1 className='location-detail-header'>United Kingdom</h1>
              <div className='location-row-detail-body-content'>
                <div className=''>
                  <h1>Designo UK office</h1>
                  <p>13 Colorado Way</p>
                  <p>Rhyd-y-fro SA8 9GA</p>
                </div>
                <div className=''>
                  <h1>Contact</h1>
                  <p>P : 078 3115 1400</p>
                  <p>M : contact@designo.uk</p>
                </div>
              </div>
            </div>
          </div>
          <div className='location-row-picture col'>
            <img src={uk} alt='australia' />
          </div>
        </div>
      </div>
      <Touch />
    </div>
  );
}

export default Location;

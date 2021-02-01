import React from 'react';
import logo from '../../Assets/logo-light.png';
import facebook from '../../Assets/icon-facebook.svg';
import youtube from '../../Assets/icon-youtube.svg';
import twitter from '../../Assets/icon-twitter.svg';
import instagram from '../../Assets/icon-instagram.svg';
import pinterest from '../../Assets/icon-pinterest.svg';
import { NavLink, Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <div className='bg-dark footer'>
        <nav className='navbar navbar-expand-lg'>
          <div className='container'>
            <Link className='nav-logo' to='/'>
              <img src={logo} alt='nav-logo' />
            </Link>
            <div className='navbar-collapse'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    activeClassName='selected nav-link'
                    to='/company'
                  >
                    OUR COMPANY
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link footer-link'
                    activeClassName='selected nav-link footer-link'
                    to='/location'
                  >
                    LOCATION
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link footer-link'
                    activeClassName='selected nav-link footer-link'
                    to='/contact'
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          <hr></hr>
          <div className='footer-content'>
            <div className='footer-content-left'>
              <div>
                <h4>Designo Central Office</h4>
                <span>3886 Wellington Street</span>
                <span>Toronto, Ontario M9C 3J5</span>
              </div>
              <div>
                <h4>Contact Us (Central Office)</h4>
                <span>P : +1 253-863-8967</span>
                <span>M : contact@designo.co</span>
              </div>
            </div>
            <div className='footer-content-right'>
              <div>
                <span className='social'>
                  <img src={facebook} alt='social-facebook' />
                  <img src={youtube} alt='social-youtube' />
                  <img src={twitter} alt='social-twitter' />
                  <img src={pinterest} alt='social-pinterest' />
                  <img src={instagram} alt='social-instagram' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

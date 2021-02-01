import React, { useState } from 'react';
import logo from '../../Assets/logo-dark.png';
import { NavLink, Link } from 'react-router-dom';
function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <header
      className={navbar ? 'header active sticky-top' : 'header sticky-top'}
    >
      <nav className='navbar navbar-expand-lg py-2 pb-3 pt-3'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='nav-logo' />
          </Link>
          <button
            className='navbar-toggler navbar-toggler-right'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'>
              <i className='fa fa-align-justify' aria-hidden='true'></i>
            </span>
          </button>
          <div
            className='collapse navbar-collapse '
            id='navbarSupportedContent'
          >
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
                  className='nav-link'
                  activeClassName='selected nav-link'
                  to='/location'
                >
                  LOCATION
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  activeClassName='selected nav-link'
                  to='/contact'
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

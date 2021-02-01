import React from 'react';
import Touch from '../Global/Touch';
import Change from '../../Assets/Subpages/image-change.jpg';
import Boxedwater from '../../Assets/Subpages/image-boxed-water.jpg';
import Science from '../../Assets/Subpages/image-science.jpg';
import greaterthan from '../../Assets/icon-right-arrow.svg';
import { Link } from 'react-router-dom';
function GraphicsDesign() {
  return (
    <div>
      <div className='container'>
        <div className='preface-hero'>
          <div className='preface-hero-content'>
            <h1>Graphics DESIGN</h1>
            <p>
              We deliver eye-catching branding materials that are tailored to
              meet your business objectives.
            </p>
          </div>
        </div>

        <div className='row design'>
          <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Change} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>Tim Brown</h3>
                <p class='card-text'>
                  A book cover designed for Tim Brown’s new release, ‘Change’
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Boxedwater} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>Boxed water</h3>
                <p class='card-text'>
                  A simple packaging concep9j9gishuit made for Boxed Water
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Science} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>Science</h3>
                <p class='card-text'>
                  A poster made in collaboration with the Federal Art Project
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row design-body'>
          <div className='col-lg-5 col-md-12 col-sm-12  design-bg-1 '>
            <div className='grid-hero-right-content-top-description'>
              <h1>APP DESIGN</h1>
              <Link to='/appdesign'>
                <p>
                  View Project <img src={greaterthan} alt='greaterthan' />
                </p>
              </Link>
            </div>
          </div>
          <div className='col-lg-5 col-md-12 col-sm-12 design-bg-3 '>
            <div className='grid-hero-right-content-bottom-description'>
              <h1>WEB DESIGN</h1>
              <Link to='/webdesign'>
                <p>
                  View Project <img src={greaterthan} alt='greaterthan' />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Touch />
    </div>
  );
}

export default GraphicsDesign;

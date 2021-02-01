import React from 'react';
import Touch from '../Global/Touch';
import Express from '../../Assets/Subpages/image-express.jpg';
import Transfer from '../../Assets/Subpages/image-transfer.jpg';
import Photon from '../../Assets/Subpages/image-photon.jpg';
import Builder from '../../Assets/Subpages/image-builder.jpg';
import Blogr from '../../Assets/Subpages/image-blogr.jpg';
import greaterthan from '../../Assets/icon-right-arrow.svg';
import Camp from '../../Assets/Subpages/image-camp.jpg';
import { Link } from 'react-router-dom';
function WebDesign() {
  return (
    <div>
      <div className='container'>
        <div className='preface-hero'>
          <div className='preface-hero-content'>
            <h1>WEB DESIGN</h1>
            <p>
              We build websites that serve as powerful marketing tools and bring
              memorable brand experiences.
            </p>
          </div>
        </div>
        <div className='row design'>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Express} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>Express</h3>
                <p class='card-text'>
                  A multi-carrier shipping website for ecommerce businesses
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Transfer} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>Transfer</h3>
                <p class='card-text'>
                  Site for low-cost money transfers and sending money within
                  seconds
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Photon} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>Photon</h3>
                <p class='card-text'>
                  A state-of-the-art music player with high-resolution audio and
                  DSP effects
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Builder} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>builder</h3>
                <p class='card-text'>
                  Connects users with local contractors based on their location
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Blogr} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>Blogr</h3>
                <p class='card-text'>
                  Blogr is a platorm for creating an online blog or publication
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Camp} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>Camp</h3>
                <p class='card-text'>
                  Get expert training in coding, data, design, and digital
                  marketing
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
          <div className='col-lg-5 col-md-12 col-sm-12 design-bg-2 '>
            <div className='grid-hero-right-content-bottom-description'>
              <h1>GRAPHIC DESIGN</h1>
              <Link to='/graphicsdesign'>
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

export default WebDesign;

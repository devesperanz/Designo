import React, { useEffect } from 'react';
import phone from '../../Assets/image-hero-phone.png';
import greaterthan from '../../Assets/icon-right-arrow.svg';
import passionate from '../../Assets/illustration-passionate.svg';
import resourceful from '../../Assets/illustration-resourceful.svg';
import friendly from '../../Assets/illustration-friendly.svg';
import Touch from '../Global/Touch';
import { Link } from 'react-router-dom';
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='container'>
      {/* SECTION ONE */}
      <div className='index-hero mt-5 pb-5'>
        <div className='index-hero-left'>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link to='/company'>Learn More</Link>
        </div>
        <div className='index-hero-right'>
          <img src={phone} alt='Iphone with custom design on screen' />
        </div>
      </div>

      {/* Second Two */}
      <div className='row container'>
        <div
          className='col-lg-6 col-md-12 mb-4 grid-hero-left'
          data-wow-delay='0.2s'
        >
          <div className='grid-hero-left-content'>
            <h1>WEB DESIGN</h1>
            <Link to='/webdesign'>
              <p>
                View Project <img src={greaterthan} alt='greaterthan' />
              </p>
            </Link>
          </div>
        </div>
        <div className='col-lg-6 col-md-12  grid-hero-right'>
          <div
            className='grid-hero-right-content-top mb-4'
            data-wow-delay='0.1s'
          >
            <div className='grid-hero-right-content-top-description'>
              <h1>APP DESIGN</h1>
              <Link to='/appdesign'>
                <p>
                  View Project <img src={greaterthan} alt='greaterthan' />
                </p>
              </Link>
            </div>
          </div>
          <div
            className='grid-hero-right-content-bottom mb-4'
            data-wow-delay='0.4s'
          >
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

      {/* SECTION THREE */}
      <div className='superlative'>
        <div className='superlatives slide-in'>
          <div className='superlatives-content'>
            <div className='superlatives-content-bg-1 image'>
              <img src={passionate} alt='passionate' />
            </div>
            <div className='superlatives-content-description'>
              <h3>Passionate</h3>
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>
          <div className='superlatives-content'>
            <div className='superlatives-content-bg-2 image'>
              <img src={resourceful} alt='resourceful' />
            </div>
            <div className='superlatives-content-description'>
              <h3>Resourceful</h3>
              <p>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </div>
          <div className='superlatives-content'>
            <div className='superlatives-content-bg-3 image'>
              <img src={friendly} alt='friendly' />
            </div>
            <div className='superlatives-content-description'>
              <h3>Friendly</h3>
              <p>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION four */}
      <Touch />
    </div>
  );
}

export default Home;

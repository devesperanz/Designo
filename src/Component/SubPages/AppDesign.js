import React from 'react';
import Touch from '../Global/Touch';
import Airfilter from '../../Assets/Subpages/image-airfilter.jpg';
import Eyecam from '../../Assets/Subpages/image-eyecam.jpg';
import Faceit from '../../Assets/Subpages/image-faceit.jpg';
import Todo from '../../Assets/Subpages/image-todo.jpg';
import Loopstudios from '../../Assets/Subpages/image-loopstudios.jpg';
import greaterthan from '../../Assets/icon-right-arrow.svg';
import { Link } from 'react-router-dom';
function AppDesign() {
  return (
    <div>
      <div className='container'>
        <div className='preface-hero'>
          <div className='preface-hero-content'>
            <h1>APP DESIGN</h1>
            <p>
              Our mobile designs bring intuitive digital solutions to your
              customers right at their fingertips
            </p>
          </div>
        </div>
        <div className='row design'>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Airfilter} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>airfilter</h3>
                <p class='card-text'>
                  Solving the problem of poor indoor air quality by filtering
                  the air
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Eyecam} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>eyecam</h3>
                <p class='card-text'>
                  Product that lets you edit your favorite photos and videos at
                  any time
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Faceit} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>faceit</h3>
                <p class='card-text'>
                  Get to meet your favorite internet superstar with the faceit
                  app
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Todo} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>todo</h3>
                <p class='card-text'>
                  A todo app that features cloud sync with light and dark mode
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 mb-4'>
            <div class='card'>
              <img class='card-img-top' src={Loopstudios} alt='Card cap' />
              <div class='card-body'>
                <h3 className='card-title'>loopstudios</h3>
                <p class='card-text'>
                  A VR experience app made for Loopstudios
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row design-body'>
          <div className='col-lg-5 col-md-12 col-sm-12  design-bg-3 '>
            <div className='grid-hero-right-content-top-description'>
              <h1>WEB DESIGN</h1>
              <Link to='/webdesign'>
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

export default AppDesign;

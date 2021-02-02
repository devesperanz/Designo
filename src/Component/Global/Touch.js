import React from 'react';
import { Link } from 'react-router-dom';
function Touch() {
  return (
    <div className='container'>
      <div className='section4'>
        <div className='section4-content'>
          <h1>Let's talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div>
          <Link to='/contact'>
            <button className='btn btn-light'>GET IN TOUCH</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Touch;

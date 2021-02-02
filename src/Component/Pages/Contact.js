import React, { useState, useEffect } from 'react';
import Country from '../Global/Country';
import SweetAlert from 'react-bootstrap-sweetalert';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className='container'>
      <div className='contact'>
        <div className='contact-content col'>
          <h2>Contact Us</h2>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className='contact-form col'>
          <form
            autocomplete='off'
            className='contact-form-body'
            onSubmit={e => {
              e.preventDefault();
              setFormSubmitted(true);
            }}
          >
            <div className='contact-form-item'>
              <input
                type='text'
                className='form-control contact-form-input'
                minLength='1'
                id='contact-name'
                required
                placeholder='Name'
              />
            </div>
            <div className='contact-form-item'>
              <input
                type='email'
                className='form-control contact-form-input'
                minLength='1'
                id='contact-email'
                required
                placeholder='Email'
              />
            </div>
            <div className='contact-form-item'>
              <input
                type='tel'
                className='form-control contact-form-input'
                minLength='1'
                id='contact-phone'
                required
                placeholder='Phone'
              />
            </div>
            <div className='contact-form-item'>
              <textarea
                name='Message'
                id='CONTACT-MESSAGE'
                className='form-control contact-form-input'
                cols='30'
                rows='5'
                minLength='1'
                required
                placeholder='Message'
              />
            </div>
            <button type='submit' className='btn contact-form-submit'>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Country />
      {formSubmitted && (
        <SweetAlert
          success
          title={`Yay!`}
          onConfirm={() => {
            setFormSubmitted(false);
            window.location.reload();
          }}
        >
          Your form is submitted successfully.
        </SweetAlert>
      )}
    </div>
  );
}

export default Contact;

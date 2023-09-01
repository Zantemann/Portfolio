import React from 'react';
import ContactForm from '../components/ContactForm';
import './ContactPage.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='title'>
        <h2>Contact</h2>
      </div>
      <div className='contact-container'>
        <div className='contact-information'>
          <h2 className='info-title'>Contact information</h2>
          <div className='info-content'>
            <h4>Phone:</h4>
            <h4>045 6971369</h4>
          </div>
          <div className='info-content'>
            <h4>Email:</h4>
            <h4>santeri.ora@tuni.fi</h4>
          </div>
        </div>
        <div className='contact-form-container'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
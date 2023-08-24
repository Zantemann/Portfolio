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
          <h2>Contact information</h2>
          <h4>Phone: 123 4567890</h4>
          <h4>Email: test@test.gmail.com</h4>
        </div>
        <div className='contact-form-container'>
          <h2>Contact form</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
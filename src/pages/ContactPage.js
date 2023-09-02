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
          <div className='image-content'>
            <a href={'https://github.com/Zantemann'} target="_blank" rel="noopener noreferrer">
              <img src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} className='github-logo' />
            </a>
            <a href={'https://www.linkedin.com/in/santeriora/'} target="_blank" rel="noopener noreferrer">
              <img src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg'} className='linkedin-logo' />
            </a>
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
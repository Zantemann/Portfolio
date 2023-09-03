import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ContactFrom.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [ showForm, setShowForm ] = useState(true);
  const [ errorMessage, setErrorMessage ] = useState(false);

  const { handleSubmit, handleChange, values, touched, setTouched, errors, handleBlur, resetForm } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Email is required'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: ({ name, email, message }) => {
      sendEmail({ name, email, message });
    }
  });

  useEffect(() => {
    let timeout;
    if (Object.keys(touched).length > 0){
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setTouched({});
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [touched]);

  const sendEmail = (templateParams) => {
    // eslint-disable-next-line no-undef
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
      .then(() => {
        //console.log('SUCCESS!', response.status, response.text);
        resetForm();
        setErrorMessage(false);
      })
      .catch(() => {
        //console.log('FAILED...', err);
        setErrorMessage(true);
      });
    setShowForm(false);
  };

  return (
    <div className='form-box'>
      {showForm ? (
        <form className='contact-form' onSubmit={handleSubmit}>
          <h2 className='form-label'>Contact form</h2>
          <label htmlFor='name'>Name</label>
          <input
            className={touched.name && errors.name ? 'input-error' : ''}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            id='name'
            name='name'
            type='text'
          />
          {touched.name && errors.name ? (
            <div className='error-message'>
              {errors.name}
            </div>
          ): null}

          <label htmlFor='email'>Email</label>
          <input
            className={touched.email && errors.email ? 'input-error' : ''}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id='email'
            name='email'
            type='email'
          />
          {touched.email && errors.email ? (
            <div className='error-message'>
              {errors.email}
            </div>
          ): null}

          <label htmlFor='message'>Message</label>
          <textarea
            className={touched.message && errors.message ? 'input-error' : ''}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            id='message'
            name='message'
            type='message'
            rows='2'
          />
          {touched.message && errors.message ? (
            <div className='error-message'>
              {errors.message}
            </div>
          ): null}

          <button className='submit' type='submit'>Submit</button>
        </form>
      ) : (
        <div className='submit-message'>
          {!errorMessage ? (
            <div>
              <h2>Thank you for reaching out!</h2>
              <p>Your message has been successfully received.</p>
              <p>I will get back to you as soon as possible.</p>
            </div>
          ) : (
            <div>
              <h2>Sending contact form to email failed</h2>
            </div>
          )}
          <button className='show-button' onClick={() => setShowForm(true)}>Show Contact Form Again</button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
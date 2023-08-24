import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ContactFrom.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const sendEmail = (templateParams) => {
    try {
      // eslint-disable-next-line no-undef
      emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
    } catch (error) {
      console.log('Sending email failed', error );
    }
  };

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
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
      console.log(name, email, message);
      sendEmail({ name, email, message });
    }
  });

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
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
  );
};

export default ContactForm;
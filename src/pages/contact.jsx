import React, { useState, useRef } from 'react';
import * as emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import NavBar from '../components/Nav.jsx';

function Contact() {
  const [complete, setComplete] = useState(false)
  const form = useRef();

  let handleEmail = (e) => {
    e.preventDefault()
    let { email, name, message } = e.target;

    let templateParams = {
      email: email.value,
      name: name.value,
      message: message.value
    }
    emailjs.sendForm(process.env.REACT_APP_SERV_ID, process.env.REACT_APP_TEMP_ID, form.current, process.env.REACT_APP_USER_ID).then((response) => {
      console.log('SUCCESS!', response)
      setComplete(true)
      e.target.reset()
    }, (error) => {
      console.log('FAILED...', error);
    });

  }

  const onSubmit = (e) => {
    e.preventDefault()
    let { email, name, message } = e.target
    console.log(`${email.value} ${name.value} ${message.value}`)
    setComplete(true);
  }


  if (complete) {
    return (
      <div id='contact'>
        <motion.h3 class='contact-title'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', duration: .5 }}>MESSAGE SENT</motion.h3>
        <p className='contact-para'>Your message has been sent!</p>
        <p className='contact-para'>I will Review and Respond as soon as possible</p>
      </div>
    )
  }
  return (
    <div id='contact'>
      <NavBar />
      <motion.h3 class='contact-title'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: 1, duration: .5 }}>CONTACT</motion.h3>
      <p class='contact-para'>Thanks for taking the time to reach out.</p>
      <p class='contact-para'>How can I help you today?</p>
      <motion.form className='request-form' ref={form} onSubmit={handleEmail}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: .5, duration: 1 }}>
        <label className='request-label'>Name</label>
        <input placeholder='Your  Name Here' className="form-control" name='email' type='text' required='true' />
        <label className='request-label'>Email</label>
        <input placeholder='Your Email Here' className="form-control" name='name' type='email' required='true' />
        <label>Inquiry</label>
        <textarea placeholder='Your Inquiry Here' className="form-control" name='message' required='true' />
        <button type='submit' className="btn btn-primary send-request-btn">Send Request</button>
      </motion.form>
    </div>
  );
}

export default Contact;


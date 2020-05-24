import React,  { useState }from 'react';
import * as emailjs from 'emailjs-com';



function Contact() {
  let [from, setFrom] = useState('');
  let [subject, setSubject] = useState('');
  let [message, setMessage] = useState('');
  let [clicked, setClicked] = useState(false);
  let [messRes, setMessRes] = useState(undefined);; 
  let handleClear = (id) => { 
  
    let el = document.getElementById(id)
   el.placeholder = message;
   el.value = '';
  };
  let handleEmail = (e) => {
    console.log('hit');
    setClicked(true);
    e.preventDefault();
    let templateParams = {
      from_name: from,
      to_name: 'kyle',
      subject: subject,
      message_html: message,
    }
     
    setSubject('OK, its working');
    emailjs.send(
        'gmail',
         process.env.REACT_APP_EMAIL_TEMPLATE,
         templateParams,
         process.env.REACT_APP_USER_ID
      ).then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          handleClear('email');
          handleClear('subject');
          handleClear('message-body');
    setMessRes('true');
          
    }, (error) => {
      console.log('FAILED...', error);
      setMessRes('false');

    });
  }
  return (
    <div class='contact'>
   <div class='con-animation-area'> 
        <ul class='con-box-area'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        </div>
     <div class='contact-tl'/>
     <h1 class='contact-title'>CONTACT</h1>
     <div class='contact-ul'/>
     <div class='contact-form'>
        <div class='input-wrapper'>
          <input id='email' class ='input' placeholder = 'Email' onChange = {(e) => setFrom(e.target.value)}/>
         <input id='subject' class='input' placeholder='Subject' onChange={(e) => setSubject(e.target.value)}/>
        </div>
        <textarea id="message-body"class='input' placeholder='Message' onChange={(e) => setMessage(e.target.value)} />
        {clicked ? (<div class='message-response'>{messRes}</div>) : (
         <button class='submit-button' onClick={handleEmail}>Submit</button> 

       )  }
      </div>
      <button id = 'resume' onClick = {() => {window.open('https://resume.creddle.io/resume/7ofsw6jo663')}}>Resume</button>
      <button id='github'onClick={() => {window.open('https://github.com/kylemcloughlin')}}>Github</button>
    </div>
  );
}

export default Contact;

 
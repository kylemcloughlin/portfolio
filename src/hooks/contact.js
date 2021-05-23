import React,  { useState }from 'react';
import * as emailjs from 'emailjs-com';
import Skills from './skills.js';
import Projects from './projects.js';


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
    <div class='footer'>
    <h3 class='contact-title'>CONTACT</h3>
    <div class='contact-holder'>
      <p class='contact-para'>Please email me at <a id='github'onClick={() => {window.open('mailto:kylemcloughlindev@gmail.com?subject=inquiry')}}>kylemcloughlindev@gmail.com</a>.</p>
      <p class='contact-para'>You can also find me on <a id='github'onClick={() => {window.open('https://github.com/kylemcloughlin')}}>Github</a> or checkout my <a id = 'resume' onClick = {() => {window.open("https://resume.creddle.io/resume/cbxn0k8f0oy")}}>Resume</a>.</p>
    </div>
    </div>
  );
}

export default Contact;

 
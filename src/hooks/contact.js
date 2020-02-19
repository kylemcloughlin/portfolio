import React,  { useState }from 'react';
import * as emailjs from 'emailjs-com'



function Contact() {
  let [name, setName] = useState('')
  let [from, setFrom] = useState('')
  let [subject, setSubject] = useState('')
  let [message, setMessage] = useState('')
  let handleEmail = (e) => {
    e.preventDefault();
    let templateParams = {
      from_name: from,
      to_name: 'kyle',
      subject: subject,
      message_html: message,
    }
    emailjs.send(
      'gmail',
       process.env.REACT_APP_EMAIL_TEMPLATE,
       templateParams,
       process.env.REACT_APP_USER_ID
    )

  }
 
  return (
    <div class='contact'>
    {/* <div class='title-wrapper'> */}
     <div class='contact-tl'/>
     <h1 class='contact-title'>CONTACT</h1>
     <div class='contact-ul'/>
   {/* </div> */}
   
   
     <div class='contact-form'>
        <div class='input-wrapper'>
          <input class='input' placeholder='Email' onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div class='input-wrapper'> 
          <input class='input' placeholder='Subject' onChange={(e) => setSubject(e.target.value)}/>
        </div>
        <textarea id="message-body"class='input' placeholder='Message' onChange={(e) => setMessage(e.target.value)}/>
        <button class='submit-button' onClick={handleEmail}>Submit</button> 
      </div>
      <a id='github'>resume</a>
      <a id='resume'onClick={() => {window.open('https://github.com/kylemcloughlin')}}>Github</a>
    </div>
  );
}

export default Contact;

 
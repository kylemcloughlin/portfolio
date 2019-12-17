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
 <div class="contact">
  <div class='input-wrapper'>
    {/* <label class='label' >Email</label> */}
    <input class='input' placeholder='Email' onChange={(e) => setFrom(e.target.value)} />
  </div>
  <div class='input-wrapper'> 
    {/* <label class='label'> Subject </label> */}
    <input class='input' placeholder='Subject' onChange={(e) => setSubject(e.target.value)}/>
  </div>
  <div> 
    {/* <label class='label'>Message</label> */}
    <textarea id="message-body"class='input' placeholder='Message' onChange={(e) => setMessage(e.target.value)}/>
  </div>
    <button class='submit-button' onClick={handleEmail}>Submit</button>
  </div>
  );
}

export default Contact;
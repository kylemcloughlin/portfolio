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
    console.log(templateParams)

    emailjs.send(
    'gmail',
    process.env.REACT_APP_EMAIL_TEMPLATE,
    templateParams,
     process.env.REACT_APP_USER_ID
  )

}
 
 return (
  <div className="Contact">
    <label>Name</label>
    <input placeholder='name' onChange={(e) => setName(e.target.value)}/>
    <label>Email</label>
    <input placeholder='Email' onChange={(e) => setFrom(e.target.value)} />
    <label>Subject</label>
    <input placeholder='Subject' onChange={(e) => setSubject(e.target.value)}/>
    <label>Message</label>
    <input placeholder='Message' onChange={(e) => setMessage(e.target.value)}/>
    <button onClick={handleEmail}>Submit</button>
  </div>
  );
}

export default Contact;
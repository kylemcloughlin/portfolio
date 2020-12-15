import React from 'react';
import ruby from './photos/ruby.png';
import js from './photos/js.png';
import react from './photos/react.png';
let about = "I'm driven and goal oriented fullstack web developer passionate about new technologies and web design. a creative who aproaches each project with courious excitment while enuring the overall goal is adding value to your organization.";




// let about2 = 'i have contributed to open source projects, experience with pair-programming and working in teams. ';
function About() {
  return ( 
 <div class="about">
   <h3 class='job-titles'>FULLSTACK</h3>
   <h4 class='job-titles-2'>WITH A FRONT END FOCUS</h4>
  <div class='para-holder'>
   <p id='paragraph-1'>{about}</p> 
  </div>
   
 </div>
  );
}

export default About;
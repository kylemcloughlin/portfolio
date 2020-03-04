import React from 'react';
import ruby from './photos/ruby.png';
import js from './photos/js.png';
import react from './photos/react.png';
let about = "A driven goal oriented programmer with passions for SCSS, byebug and version control. Hardworking and motivated to produce the best product possible through continuous iteration and calculated problem solving strategies.";
let about2 = 'i have contributed to open source projects, experience with pair-programming and working in teams. ';
function About() {
  return ( 
 <div class="about">
   <h3 class='job-titles'>FRONT END FOCUSED</h3>
   <h4 class='job-titles' id='abt-title-2'> WITH FULL STACK EXPERIANCE </h4>
   <div class='about-body'> 
   <div/>
     <p id='paragraph-1'>{about}</p> 
     <h4 class='about-body-t'>MOTIVATED TO PRODUCE RESULTS</h4>
     <p id='paragraph-2'>{about2}</p> 
   </div>
   <div class='img-holder'>
     <img id='ruby' src={ruby} alt='ruby'/>
     <img id='js' src={js} alt='javascript'/>
     <img id='react' src={react} alt='react'/>
   </div>
 </div>
  );
}

export default About;
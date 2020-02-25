import React, { useState} from 'react';
import ruby from './photos/ruby.png';
import js from './photos/js.png';
import react from './photos/react.png';
let about = "As a tenacious self taught programmer, i use continuous iteratio to produce results quickly and continuously improve products.";
let about2 = 'i have contributed to open source projects, worked on engineering teams, and always stay attuned to the newest frameworks';
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
     <img id='ruby' src={ruby}/>
     <img id='js' src={js}/>
     <img id='react' src={react}/>
   </div>
 </div>
  );
}

export default About;
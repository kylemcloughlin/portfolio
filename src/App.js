import React , { useState, useEffect } from 'react';
import About from './hooks/about.js';
import Contact from './hooks/contact.js';
import Projects from './hooks/projects.js';
import Skills from './hooks/skills.js';
import './styles/style.css';


function App() {
  let [loaded, setLoaded] = useState(false);
    useEffect(() => {
       setLoaded(true)
   
  });
let  handleScroll= () => {
      const element = document.getElementById('#projects');
           window.scrollTo({
       behavior: element ? "smooth" : "auto",
       top: element.clientHeight > 850 ? 2500 : 1250,
      });

  }
  
  return (
    <div class="App">
    { loaded ? ( 
      <div>
      <div class="App-header">
      <h1 id='logo'>K</h1>
      <div class='title-div'>
      <h1 id='title'>Kyle McLoughlin</h1>
      <h3 id = 'job-title'> Full Stack Web Developer </h3> 
      <button class='projects-button' onClick={() => {handleScroll();}} >See Projects</button> 
      </div>
      <div class='animation-area'> 
      <ul class='box-area'>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      </ul>
      
      </div>
      </div> 
      
      <div class='contact'>
      <About/>
      <Skills/>
      <div class='project-holder'>
      
      <Projects key='#projects'/>
      </div>
      
      <Contact/>
      </div> 
      </div>
      ): (<div></div>)}
      
      </div>
      );
}

export default App;

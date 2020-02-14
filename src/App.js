import React,  { useState }from 'react';
import About from './hooks/about.js';
import Contact from './hooks/contact.js';
import Projects from './hooks/projects.js';
import { Link } from "react-router-dom";
import './styles/style.css';
import headerGif from './header.gif';
import { BrowserRouter } from "react-router-dom";
import ScrollHandler from './hooks/scrollHandler.js';
import Skills from './hooks/skills.js';


function App() {
  const [page, setPage] = useState(Projects);
  let style = {
    backgroundImage : headerGif
  }
  return (
    <div className="App">
      <header className="App-header" style={style}/>
      <BrowserRouter>
      <ScrollHandler/>
      <div class='overlay'></div>
        <h1 id='logo'>K</h1>
        <h1 id='title'>Kyle McLoughlin</h1>
        <h3 id = 'job-title'> Full Stack Web Developer </h3>
        <Link to={`/#projects`}>
          <button class='projects-button'>See Projects</button> 
        </Link>  
      <body>
        <div class='wrapper'>
        <About/>
        <div class='seperator'></div>
          <div class ='seperatorOverlay'></div>
          <Skills/>
          <Projects key='projects'/>
          <Contact/>
        </div>
      </body>
     </BrowserRouter>
          {/* <div class='footer'>
           <h1 class='foot-logo'>K</h1>
          </div> */}
    </div>
  );
}

export default App;

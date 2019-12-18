import React,  { useState }from 'react';
import About from './hooks/about.js';
import Contact from './hooks/contact.js';
import Projects from './hooks/projects.js';
import './styles/style.css';
import profile from './hooks/photos/testPhoto.png';
import headerGif from './header.gif';

function App() {
  const [page, setPage] = useState(Projects);
  let style = {
    backgroundImage : headerGif
  }
  return (
    <div className="App">
       <header className="App-header" style={style}>
      </header> 
      <div class='overlay'></div>
        <h1 id='logo'>K</h1>
         <h1 id='title'>Kyle McLoughlin</h1>
         <h3 id = 'job-title'> Full Stack Web Developer </h3>
      <body>
        <div class='wrapper'>
        < About />
       <div class='seperator'></div>
       < div class = 'seperatorOverlay' > </div>

        < Projects/>
        < Contact />
        </div>
      </body>
    </div>
  );
}

export default App;

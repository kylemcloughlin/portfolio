import React,  { useState }from 'react';
import About from './hooks/about.js';
import Contact from './hooks/contact.js';
import Projects from './hooks/projects.js';
import './styles/style.css';
import profile from './hooks/photos/testPhoto.png'

function App() {
  const [page, setPage] = useState(Projects);
  return (
    <div className="App">
       <header className="App-header">
       <img id='profile-photo' src={profile}/>
      <h1 id='logo'>K</h1>
       <h1 id='title'>Kyle McLoughlin</h1>
      
       <h3 id = 'job-title'> Full Stack Web Developer </h3>
        <nav class='nav-bar'>
          <button class='button' onClick={() => setPage(<About/>)}>about</button>
          <button class='button' onClick={() => setPage(<Projects/>)}>projects</button>
          <button class='button' onClick={() => setPage(<Contact/>)}>Contact</button>
        </nav>
      </header> 
      <body>
        <div class='wrapper'>
        < About />
       <div class='seperator'></div>
        {/* < Projects/> */}
        < Contact />
        </div>
      </body>
    </div>
  );
}

export default App;

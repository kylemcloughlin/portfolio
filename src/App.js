import React,  { useState }from 'react';
import About from './hooks/about.js';
import Contact from './hooks/contact.js';
import Projects from './hooks/projects.js';
// import './App.css';

function App() {
  const [page, setPage] = useState(About);
  return (
    <div className="App">
       <header className="App-header">
       <h1>Kyle McLoughlin</h1>
       <h3>Full Stack Web Developer</h3>
        <nav>
          <button onClick={() => setPage(<About/>)}>about</button>
          <button onClick={() => setPage(<Projects/>)}>projects</button>
          <button onClick={() => setPage(<Contact/>)}>Contact</button>
        </nav>
      </header> 
      <body>
        {page}
      </body>
    </div>
  );
}

export default App;

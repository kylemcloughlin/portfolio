import React from 'react';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Home from './pages/home'
import logo from './pages/photos/logo-k.png';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import email  from './pages/photos/email_white.svg';
import './styles/style.css';
import { motion } from 'framer-motion';

const appVariants = {
  start: {
    y: 200,
    x: -3333,
    height: '0%',
  },
  finish: {
    y: 200,
    transition: {
      type: 'spring',
      delay: 1,
      duration: 1.7,
    }
  }
}
function App() {

  
  return (
    <Router>
      <div className="App">
        {/* < img id= 'logo' src ={email} alt='logo-img' /> */}
  
         <Link to='Contact'>
        <motion.button 
         initial={{y:-300, opacity: 0}} 
         animate={{y: 0, opacity: 1}}    
         transition ={{ type: 'spring', delay: 1.7, duration: .7}}
        className='btn contact-btn'
        > < img src={email} alt='logo-img' />
  </motion.button> 
      </Link>
        <Switch>
          <Route path='/' exact component={Home} alt='some value'/>
          <Route path='/about' exact component={About} alt=''/>
          <Route path='/skills' exact component={Skills} alt=''/>
          <Route path='/projects' exact component={Projects} alt=''/>
          <Route path='/contact' exact component={Contact} alt=''/>
        </Switch>
      </div>
    </Router>
    );
}

export default App;

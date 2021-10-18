import React, { useState } from 'react';
import { fullList } from '../exports';
import { motion } from 'framer-motion';
import Row from '../components/Row.jsx';
import NavBar from '../components/Nav.jsx';

let List1 = [fullList[0], fullList[1], fullList[2]];
let List2 = [fullList[3], fullList[4], fullList[5]];
let List3 = [fullList[6], fullList[7], fullList[8]];

const titleVariants = {
    start: {
      opacity: 0,
    },
    finish: {
      opacity: 1,
      transition: {
        type: 'spring',
        delay: .5,
        duration: 1
      }
    }
}

function Projects() {
  let [showButton, setShowButton] = useState(true);


  return (
      <div id="projects">
      <NavBar/>
      <motion.h3
        variants={titleVariants}
        initial='start'
        animate='finish'
        exit={{ opacity: 0 }}> PAST PROJECTS</motion.h3>
      <p className='contact-para'>Here are a few design projects I've worked on recently. Want to see more? Email me.</p>
      <motion.div className='projects-wrapper'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: .5, duration: 1 }}>
        <Row list={List1}/>
        <Row list={List2} />
        <Row list={List3} />
      </motion.div>
    </div>
  );
}

export default Projects;
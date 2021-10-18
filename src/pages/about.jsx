import React from 'react';
import ruby from './photos/ruby.png';
import js from './photos/js.png';
import react from './photos/react.png';
import { skillList, about } from '../exports';
import { motion } from 'framer-motion';


function About() {
  return (
    <div id="about">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: .5, duration: .5 }}>FULLSTACK</motion.h3>
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: .5, duration: .5 }}>WITH A FRONT END FOCUS</motion.h4>
      
      <motion.p className="about-para"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'spring', delay: .5, duration: .5 }}
      >{about}</motion.p>
      {/* <div className="container"> */}
        <motion.div className="skill-card-holder"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1 , y: 0}}
        transition={{ type: 'tween', delay: .5, duration: 1 }}>
          {skillList.map((list, ind) => {
           let css = ind === 3 ?   ('last') : ('')
            return (
              <div key={list.id} className={`skill-card ${css}`}>
              
               <h2>{list.title}</h2>
                <img src={list.img} alt='skill-img' />
                <div>        
                  {list.skills.map((skill) => {
                    return (
                  <div class='skill-list-item' key={skill}>
                  <p>{skill}</p>
                  <div class='underline' />
                  </div>
                  )
                })}
                </div>
              </div>
            )
          })}
        {/* </div>s */}
      </motion.div>
    </div>
  );
}

export default About;
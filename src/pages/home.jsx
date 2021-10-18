import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import email from './photos/email_white.svg';
import { motion } from 'framer-motion';

const homeVariants = {
  start: {
    x: "-10vw",
    height: '0%',
  },
  finish: {
    height: '100%',
    x: 0,
    // top: '0em',
    transition: {
      when: 'beforeChildren',
      type: 'spring',
      delay: 1,
    }
  }
}
const childVariants = {
  start: {
    opacity: 0.1,
    x: '2000000vw',
  },
  finish: {
    opacity: 1,
    x: 0,
    // transition: {
    //   type: 'spring',
    //   // delay: 4
    // }
  }
}
const Home = () => {

  const HandleAbout = () => {
    console.log('hit')
  }

  return (
    <motion.div id='home'
      initial={{ scale: .001, borderRadius: '20em', width: '20%', height: '20%' }}
      animate={{ scale: 1, borderRadius: '0em', width: '100%', height: '100%' }}
      transition={{
        type: 'spring',
        delay: .5,
        duration: 2.5
      }}
    >
      <motion.div class="parallelogram"
        initial={{ left: -1200, opacity: 0}}
        animate={{ left: '-16em', opacity: 1 }}
        transition={{
          type: 'spring',
          transform: 'skew(-18deg)',
          delay: 2,
          duration: 2
        }}>
     
      </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', delay: 3, duration: .5 }}>
          Kyle McLoughlin</motion.h1>
        <motion.h3 id='job-title'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', delay: 1.5, duration: .5 }}> Full Stack Developer</motion.h3>
        <Link to='/about'>
          <motion.button onClick={HandleAbout} className='btn btn-primary  about-btn'
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 3, duration: .7 }}>About</motion.button>
        </Link>
        <Link to='projects'>
          <motion.button className='btn btn-primary projects-btn'
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 3, duration: .7 }}>Projects</motion.button>
        </Link>
      <Link to='Contact'>
        <motion.button
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', delay: 1.7, duration: .7 }}
          className='btn contact-btn'
        > < img src={email} alt='logo-img' />
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;
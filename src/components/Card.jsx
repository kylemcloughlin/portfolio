import React, { useState } from 'react';
import DemoModal from '../pages/modal.jsx';
import { motion } from 'framer-motion';
const cardVariants = {
  start: {

  }, 
  finish: {

  }
}

const Card = ({website}) => {
  const [opn, setOpn] = useState(false);
  const handleClick = () => {
    setOpn(!opn)
  }

  return (
     <motion.div id={`${website.styleID}`} className=' project-card' key={website.name}
        whileHover={{ scale: 1.1}}>
      <motion.h4 whileHover={{ scale: 1.1 }}>{website.name}</motion.h4>
      <h6>{website.sub}</h6>
      <button className='btn-primary card-btn' onClick={handleClick}>LEARN MORE</button>
    <DemoModal open={opn}  close={handleClick} website={website}/>
    </motion.div>
  )
}


export default Card;
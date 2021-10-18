import React, { useState } from 'react';

import Card from './Card.jsx';

const Row = ({list}) => {

  return (
    <div className='row-wrapper'>
          {list.map((website, ind) => {
            return (
                <Card website={website}/>
            )
            
          })
        }

        </div> 
  )
}



export default Row
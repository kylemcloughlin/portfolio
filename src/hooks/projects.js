import React,  { useState }from 'react';
import seed from '../exports'

function Projects() {
  let websites = seed.seed;
 console.log(websites)
  return (
    <div className="App">

      {
        websites.map(website => {
          return (
            <div class='flip-card-container'>
            <div class='flip-card'> 
<div class='flip-card-front'>
            <h1>{website.name}</h1>

</div>
<div class='flip-card-back'>
  
            <p>{website.discription}</p>
</div>
            {/* <img src={require(`${website.photos}`)} /> */}
            {/* <li>{website.keyFeatures}  </li>  */}
            {/* gon have to map key features  */}
            {/* <button>{website.linkToProject}</button> */}
            {/* <button>{website.linkToProjectsCode}</button>  */}

            </div>
          </div>
          )
        })
      }
    </div>
  );
}

export default Projects;
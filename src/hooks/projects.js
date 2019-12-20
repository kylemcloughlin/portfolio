import React,  { useState }from 'react';
import seed from '../exports'

function Projects() {
  let websites = seed.seed;
 console.log(websites)
  return (
    <div className="projects">

      {
        websites.map(website => {
         const projectStyle = {
           backgroundColor: 'blue'
         
         };

          return (
            <div class='flip-card-container'>
            <div class='flip-card'> 
<div class='flip-card-front'>
            <img class='p-img' src={require(`${website.photos}`)}/>
            <div class='card-footer' style={projectStyle}> 
            <h1 class='p-name'>{website.name} </h1>
            <li class='p-features'>{website.keyFeatures}  </li> 
            </div>
            
</div>
<div class='flip-card-back'>
            <p class='p-discription'>{website.discription}</p>
            <button class='code-but' onClick={() => {window.open(website.linkToProjectsCode)}}>code</button>
            <button class='demo-but'>Demo</button>
            {/* <button>live</button> */}

</div>

            </div>
          </div>
          )
        })
      }
    </div>
  );
}

export default Projects;
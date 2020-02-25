import React,  { useState }from 'react';
import seed from '../exports';
import DemoModal from './modal.js';


function Projects() {
  let websites = seed.seed;
 
  return (
    <div class="projects" id={`#projects`}>
      <div class='title-tl'/>    
      <h1 class='project-title'>PROJECTS PORTFOLIO</h1>
      <div class='title-ul'/>
    <div class='card-holder'>
      {websites.map(website => {     
        return (
          <div class='flip-card-container'>
            <div class='flip-card'> 
              <div class='flip-card-front'>
                <img class='p-img' src={require(`${website.photos}`)}/>
                <div class='card-footer' > 
                  <h1 class='p-name'>{website.name}</h1>
                  <div class='p-features'>
                    {website.keyFeatures.map((x)=> {
                      return (
                        <div>
                          <h6 class='list-point'>{x}</h6>
                          <div class='list-point-ul'/>
                        </div>
                      )  
                    })}
                  </div> 
                </div>       
              </div>
               <div class='flip-card-back'>
                 <p class='p-discription'>{website.discription}</p>
                 <button class='code-but' onClick={() => {window.open(website.linkToProjectsCode)}}>Code</button>
                 <DemoModal gif={website.gif} title={website.name} keyFeatures={website.keyFeatures}/>
                 {/* <button>live</button> */}
               </div> 
             </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Projects;
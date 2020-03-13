import React from 'react';
import { fullList } from '../exports';
import DemoModal from './modal.js';


function Projects() {

  console.log(fullList);
  return (
    <div class="projects" id={`#projects`}>
      <div class='title-tl'/>    
      <h1 class='project-title'>PROJECTS PORTFOLIO</h1>
      <div class='title-ul'/>
    <div class='card-holder'>
     <div class='full-list'>
      {fullList.map(website => {     
        return (
          <div class={`flip-card-container`} key={website.name}>
            <div class='flip-card'> 
              <div class='flip-card-front'>
                <img class='p-img' src={require(`${website.photos}`)} alt='project-img'/>
                <div class='card-footer' > 
                  <h1 class='p-name'>{website.name}</h1>
                  <div class='p-features'>
                    {website.keyFeatures.map((x)=> {
                      return (
                        <div key={x}>
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
                 <DemoModal gif={website.gif} title={website.name} features={website.keyFeatures} dis={website.discription}/>
                 
               </div> 
             </div>
          </div>
        )
      })}
     </div>
      </div>
    </div>
  );
}

export default Projects;
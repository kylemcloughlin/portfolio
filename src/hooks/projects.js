import React,{ useState } from 'react';
import { fullList } from '../exports';
import DemoModal from './modal.js';
console.log(fullList)
let partialList = [fullList[0], fullList[1], fullList[2], fullList[3], fullList[4]];
function Projects() {
let [list, setList] = useState(partialList);
let [showButton, setShowButton] = useState(true);


  return (
    <div class="projects" id={`#projects`}>
      {/* <div class='title-tl'/>     */}
      <h3 class='project-title'>PAST PROJECTS</h3>
      {/* <div class='title-ul'/> */}
    <div class='card-holder'>
     {/* <div class='full-list'> */}
      {list.map((website, ind) => { 
     
      let ary = ['a', 'b', 'c', 'd', 'e']
      let style = { gridArea: `${ary[ind]}`}
      return (
          <div class={`flip-card-container`} key={website.name} style={style}>
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
                 <button class='code-but' visablitiy="hidden" onClick={() => {window.open(website.linkToProjectsCode)}}>Code</button>
               { website.linkToProject ? ( <button class='demo-but' visablitiy="hidden" onClick={() => {window.open(website.linkToProject)}}>Live</button> ) : ( <div></div>)  }
               </div> 
             </div>
          </div>
        )
      
      })
      }
     {/* <button class='more-projects' style={{visibility: showButton ? 'visible' : 'hidden' }} onClick={() => {setList(fullList)
      setShowButton(false)}}>beep</button> */}
     </div>
      {/* </div> */}
    </div>
  );
}

export default Projects;
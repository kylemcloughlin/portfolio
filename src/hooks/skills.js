import React,  { useState }from 'react';
import img1 from './photos/browser.png';
import img2 from './photos/code.png';
import img3 from './photos/layers.png';
import img4 from './photos/upload.png';

const skillList = [{
  id: 'frontend',
  title: 'FRAMEWORKS & LIBRARIES',
  skills: ['REACT','VUEJS', 'ANGULAR', 'RAILS', 'DJANGO'],
  img: img1
}, {
  id: 'backend',
  title: 'LANGUAGES',
  skills: ['JAVASCRIPT', 'RUBY', 'PYTHON', 'HTML', 'CSS'],
  img: img2
}, {
  id: 'database',
  title: 'DATABASE',
  skills: ['POSTGRES','MONGODB'],
    img: img3
}, {
  id: 'deployment',
  title: 'DEPLOYMENT',
  skills: ['HEROKU', 'AWS AMPLIFIY','GIT'],
    img: img4
}]

function Skills () {
  const [count, setCount] = useState(0);
 

  return (

  < div class = 'skills-holder' >
           {skillList.map((list, ind)=> {    
             let ary = ['a', 'b', 'c', 'd']
             let style = { gridArea: `${ary[ind]}`}
             return (
               <div class='lrg-skills-holder' key={list.id} style={style}>
                 <h2 class='skill-title'>{list.title}</h2>  
                 <img class='skill-list-img' src={list.img} alt='skill-img'/>
                 <div class='skill-list'>
                 {list.skills.map((skill) =>{
                   return (
                     <div class='skill-list-item' key={skill}>
                       <h5>{skill}</h5>
                       <div class='underline'/>
                     </div>
                   )  
                  })}
                </div>
              </div>
              )
            })}

            </div>
  )
}

 export default Skills;
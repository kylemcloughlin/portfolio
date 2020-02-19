import React,  { useState }from 'react';
import img1 from './photos/computer-minimalist.png';
import img2 from './photos/webpage.png';
import img3 from './photos/database.png';
import img4 from './photos/cloud.png';

const skillList = [{
  id: 'frontend',
  title: 'FRONTEND',
  skills:  ['HTML5', 'CSS3 | SCSS | SASS', 'JavaScript', 'React | Redux', 'jQuery'],
  img: img1
}, {
  id: 'backend',
  title: 'BACKEND',
  skills: ['NodeJS', 'Express', 'Ruby'],
  img: img2
}, {
  id: 'database',
  title: 'DATABASE',
  skills: ['mongoDB', 'PostgreSQL', 'mySql'],
    img: img3
}, {
  id: 'deployment',
  title: 'DEPLOYMENT',
  skills: ['Heroku', 'Git', 'Docker'],
    img: img4
}]

function Skills () {
  const [count, setCount] = useState(0);
  let currentSkill = skillList[count];
  let visable = {
      visibility: 'visible',
      opacity: '1',
      transition: 'opacity 2 s linear'
  };
  let hidden = {
     visibility: 'hidden',
     opacity: '0',
     transition: 'visibility 0 s 2 s, opacity 2 s linear'
  };
  let rightArrowStyle = count <= 2 ? (visable) : (hidden);
  let leftArrowStyle = count <= 0 ? (hidden) : (visable);

  return (
   <div class='skills'>
     <div id='arrow-left' style={leftArrowStyle} onClick={() =>  setCount(count - 1)}></div>
     <div class='skills-holder'>
       <img class='skill-list-img' id={`${currentSkill.id}`}src={currentSkill.img}/>
       <div class='skill-list'>
         <h2 class='skill-title'>{currentSkill.title}</h2>
         {currentSkill.skills.map((skill)=> {
           return (
              <div class='skill-list-item'>
                <h5>{skill}</h5>
                <div class='underline'/>
              </div>
           )
         })}
      </div>
     </div>
         <div class='skills-wrapper'>
           {skillList.map((list)=> {
             return (
               <div class='lrg-skills-holder'>
                 <img class='skill-list-img' id={list.id} src={list.img}/>
                 <div class='skill-list'>
                 <h2 class='skill-title'>{list.title}</h2>  
                 {list.skills.map((skill) =>{
                   return (
                     <div class='skill-list-item'>
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
     <div id='arrow-right' style={rightArrowStyle} onClick={ () => setCount(count + 1)}></div>
   </div>
  )
}

 export default Skills;
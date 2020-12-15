import React,  { useState }from 'react';
import img1 from './photos/computer-minimalist.png';
import img2 from './photos/webpage.png';
import img3 from './photos/database.png';
import img4 from './photos/cloud.png';

const skillList = [{
  id: 'frontend',
  title: 'Modern Frontend ',
  skills: ['React | Redux','vueJs', 'Angular','SCSS | SASS'],
  img: img1
}, {
  id: 'backend',
  title: 'Higher Lanuages',
  skills: ['JavaScript', 'Ruby', 'Python'],
  img: img2
}, {
  id: 'database',
  title: 'DATABASE',
  skills: ['PostgreSQL','mongoDB', 'Sql'],
    img: img3
}, {
  id: 'deployment',
  title: 'DEPLOYMENT & VERSION CONTROL',
  skills: ['Heroku', 'aws amplifiy','Git'],
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

  < div class = 'skills-holder' >
     {/* <div id='arrow-left' style={leftArrowStyle} onClick={() =>  setCount(count - 1)}></div> */}
     {/* <div class='skills-holder'>
       <img class='skill-list-img' id={`${currentSkill.id}`}src={currentSkill.img} alt='current-skill-img'/>
       <div class='skill-list'>
         <h2 class='skill-title'>{currentSkill.title}</h2>
         {currentSkill.skills.map((skill)=> {
           return (
             <div class='skill-list-item' key={skill}>
                <h5>{skill}</h5>
                <div class='underline'/>
              </div>
           )
          })}
      </div>
     </div> */}
         <div class='skills-wrapper'>
           {skillList.map((list, ind)=> {    
             let ary = ['a', 'b', 'c', 'd']
             let style = { gridArea: `${ary[ind]}`}
             return (
               <div class='lrg-skills-holder' key={list.id} style={style}>
                 <h2 class='skill-title'>{list.title}</h2>  
                 <img class='skill-list-img' id={list.id} src={list.img} alt='skill-img'/>
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
     {/* <div id='arrow-right' style={rightArrowStyle} onClick={ () => setCount(count + 1)}></div> */}
            </div>
  )
}

 export default Skills;
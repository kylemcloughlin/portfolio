import React,  { useState }from 'react';
import { skillList } from '../exports';


function Skills () {
  const [count, setCount] = useState(0);
 

  return (

  < div id='skills' >
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
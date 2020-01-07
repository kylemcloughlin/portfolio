import React,  { useState }from 'react';

const skillList = [{
  title: 'test',
  list:  ['1', '2', '3']
}, {
  title: 'test-2',
  list: ['4', '5', '6']
}, {
  title: 'test-3',
  list: ['7', '8', '9']
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
let rightArrowStyle = count <= 1 ? (visable) : (hidden);
let leftArrowStyle = count <= 0 ? (hidden) : (visable);

  return (
   <div>
     <div id='arrow-left' style={leftArrowStyle} onClick={() =>  setCount(count - 1)}></div>
     <div class='skills-holder'>
       <h1>{count}</h1>
          <h2>{currentSkill.title}</h2>
        {currentSkill.list.map((skill)=> {
         return (
          <ul>{skill}</ul>
         )

         })}
     </div>
     <div id='arrow-right' style={rightArrowStyle} onClick={ () => setCount(count + 1)}></div>
   </div>
    )
}

 export default Skills;
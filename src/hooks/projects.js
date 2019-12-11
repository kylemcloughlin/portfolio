import React,  { useState }from 'react';


function Projects() {
 let websites = [{
   name: 'test0',
   photos: 'test1',
   discription: 'test2',
   keyFeatures: 'test3',
   linkToProject: 'test4',
   linkToProjectsCode: 'test5',
   
 }]
  return (
    <div className="App">
      {
        websites.map(website => {
          return (
          <div>
            <h1>{website.name}</h1>
            <p>{website.discription}</p>
            <li>{website.keyFeatures}  </li>
            <button>{website.linkToProject}</button>
            <button>{website.linkToProjectsCode}</button>

          </div>
          )
        })
      }
    </div>
  );
}

export default Projects;
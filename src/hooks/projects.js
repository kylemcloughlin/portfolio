import React,  { useState }from 'react';
import seed from '../exports'

function Projects() {
  let websites = seed.seed;
 console.log(websites)
  return (
    <div className="App">
    {/* <img src='./tes'/> */}
      {
        websites.map(website => {
          return (
          <div>
            <h1>{website.name}</h1>
          <img src={require(`${website.photos}`)} />
            <p>{website.discription}</p>
            <li>{website.keyFeatures}  </li> 
            {/* gon have to map key features  */}
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
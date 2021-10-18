import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {

  return (
    <ul className="nav">
      <li className="nav-item">
      <Link to='/about'>
        <a className="nav-link" >About</a>
      </Link>
      </li>
      <li className="nav-item">
      <Link to='/projects'>
        <a className="nav-link" >Projects</a>
      </Link>
      </li>
      <li className="nav-item">
      <Link to='/contact'>
        <a className="nav-link" >Contact Me</a>
      </Link>
      </li>
    </ul>
  )
}



export default NavBar
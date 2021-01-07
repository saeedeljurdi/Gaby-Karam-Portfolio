import React from "react";
import logo from '../images/logo.svg';
import { HashLink } from 'react-router-hash-link';

import Burger from './Burger'; 
  
  
const Nav = () => {
  return (
    <nav className="nav-bar">
      <HashLink to="/#home">
              <img src={logo} alt="logo" id="logo-name"/>
      </HashLink>
      <Burger />
          </nav>
      
          )}
        

export default Nav;

import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const Nav = styled.nav`

@media screen and (max-width: 610px) {
.nav-items {
    position: fixed;
    right: 0px;
    top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1f2235;
    transition: all 0.4s ease-in-out;
    height: 90vh;
    transform: ${({ open })=> open ? 'translateX(0%)' : 'translateX(100%)' }
  }
}

`;


const Navitems = (props) => {
    const handleClick = () => {
        props.liClick();
}
    return (
    <Nav open={props.open}>
        <ul className="nav-items">
        <li onClick={() => handleClick()}><HashLink
  smooth to='/#about'
>ABOUT</HashLink></li>
        <li onClick={() => handleClick()}><HashLink smooth to="/#experience">EXPERIENCE</HashLink></li>
        <li onClick={() => handleClick()}><HashLink smooth to="/#projects">PROJECTS</HashLink></li>
        <li onClick={() => handleClick()}><HashLink smooth to="/#skills">SKILLS</HashLink></li>
        <li onClick={() => handleClick()}><HashLink smooth to="/#education">EDUCATION</HashLink></li>
        <li onClick={() => handleClick()}><HashLink smooth to="/#achievements">ACHIEVEMENTS</HashLink></li>
        <li onClick={() => handleClick()}><HashLink smooth to="/#blogs">BLOGS</HashLink></li>
        <li onClick={() => handleClick()}><HashLink smooth to="/#contact">CONTACT</HashLink></li>
        <li onClick={() => handleClick()}><a href="https://gabykaram.com/Gaby%20Karam%20-%20CV%20Sep,%202020.pdf" target="--blank">RESUME</a></li> 
        </ul>
    </Nav>
      );
}
 
export default Navitems;
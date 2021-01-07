import React from 'react';
import styled from 'styled-components';
import Navitems from './Navitems';
import { useState } from 'react';


const Menu = styled.div`

    height: 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    display:none;
    position: absolute;
    top: 40px;
    right: 20px;
    cursor: pointer;
    z-index:1;

div.burger {
    height:2px;
    width:25px;
    margin-top: 5px;
    border-radius: 5px;
    transform-origin: -1px;
    transition: all 0.3s ease-in-out;
    &:nth-child(1){
       
        transform: ${({ open }) => open ? 'rotate(30deg)' : 'rotate(0deg)'};
        background-color: ${({open})=> open ? 'white' : '#ff4a57'};
    }
    &:nth-child(2){
        transform: ${({open})=> open ? 'translateX(100%)' : 'translateX(0%)'};
        opacity: ${({ open }) => open ? 0 : 1};
        background-color: ${({open})=> open ? 'white' : '#ff4a57'};
    }
    &:nth-child(3){
        transform-origin: -1;
        transform: ${({ open }) => open ? 'rotate(-30deg)' : 'rotate(0deg)'};
        background-color: ${({open})=> open ? 'white' : '#ff4a57'};
        
    }
}

@media screen and (max-width:610px) {
    display:block;
}

`;



const Burger = () => {
    const [open, setOpen] = useState(false);
    const liClick = () => {
        setOpen(false);
    }
    return ( 
        <> 
        <Menu open={open} onClick={() => setOpen(!open)}>    
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
        </Menu>
            <Navitems open={open} liClick={ liClick }/>
        </>
     );
}
 
export default Burger;
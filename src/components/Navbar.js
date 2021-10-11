import React from 'react';
import styled,{css} from 'styled-components';
import {useHistory} from "react-router-dom";
import {Link} from 'react-router-dom';
import About from './About';
import {menuData} from '../data/MenuData';
import {Button} from './Button';
import Contact from './Contact';
import Bars from '../images/bars.svg';
//import {FaBars} from 'react-icons/fa';
const Nav =styled.nav`
    height:60px;   
    display:flex;
    justify-content:space-between;   
    padding:1 rem 2rem;
    z-index:100;
    position:fixed;
    width:100%;
    
`;
const NavLink=css`
    color:#fff;
    display:flex;
    align-items:center;
    padding:0 1rem;
    height:100%;
    curser:pointer;
    text-decoration:none;
    `;
const Logo =styled(Link)`
${NavLink}
color:#fff;
font-style:italic;
`;
const MenuBars = styled.i`
display:none;
@media screen and (max-width:760px){
    display:block;
    background-image:url(${Bars});
    background-size:contain;
    height:45px;
    width:45px;
    cursor:pointer;
    positon:absolute;
    top:0;
    right:0;
    transform:translate(-60%,15%);
}
`;
const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right:-40px;

@media screen and (max-width:760px){
    display:none;
}
`;
const NavMenuLinks =styled(Link)`
${NavLink}
`;
const NavBtn=styled.div`
display:flex;
align-items:center;
margin-right:24px;
@media screen and (max-width:760px){
    display:none;
   
`;
const Navbar = ({toggle}) => {
    
    return (
        <Nav>
            <Logo to="/">ELIXR</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>             
                {menuData.map((item,index)=>(
                    <NavMenuLinks to ={item.link} key={index}>
                        {item.title}
                        </NavMenuLinks>
                ))}
            </NavMenu> 
           <NavBtn >
           < Button  primary="true"  >
           Contact Us
               </Button>
                
               </NavBtn>
        </Nav>
    );
};

export default Navbar;

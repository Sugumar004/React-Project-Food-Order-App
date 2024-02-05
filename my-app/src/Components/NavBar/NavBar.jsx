// NavBar.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext } from 'react';
import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"
import { NavLink } from 'react-router-dom';

function NavBar(){

  const page = useNavigate()

const cartItems = useSelector((i)=>i.food.cartItems)

// const localUserName = useSelector((i)=>i.food.loginUserName)

const registerUserName = useSelector((i)=>i.food.registerUserName)

console.log(registerUserName)

localStorage.setItem("loginUserName",registerUserName)

const loginUserName = localStorage.getItem("loginUserName")


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand >
          <img
            src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png"
            className="logo"
            height={100}
            width={100}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 mx-auto text-center" style={{ maxHeight: '100px' }} navbarScroll>
            {/* <Nav.Link  className="navlist">
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link  className="navlist">
              <h4>Recepie</h4>
            </Nav.Link>
            <Nav.Link style={{display:"flex",alignItems:"center"}}  className="navlist">
              <h4> Help </h4>
              <h4> Help <SlEarphones style={{height:"15px"}} /></h4>
            </Nav.Link>
             */}
          </Nav>
          <div className='rightnav_container'>
             <NavLink className="navLinkNormal" to="/home" exact  activeClassName="navLink">
              <div className='profile' onClick={()=>{page('/home')}}>
              <div>
              <b style={{fontSize:"15px"}}>< FaHome style={{fontSize:"25px"}} /> Home</b>
              </div>
              </div>       
             </NavLink>
             <NavLink className="navLinkNormal" to="/dishes" activeClassName="navLink">
              <div className='profile'onClick={()=>{page('/dishes')}} >
              <b style={{fontSize:"15px"}}>< MdFastfood style={{fontSize:"25px"}} /> Recepies</b>
              </div> 
             </NavLink>
             <NavLink className="navLinkNormal" to="/help" activeClassName="navLink" >
              <div className='profile' onClick={()=>{page('/help')}}>
              <b style={{fontSize:"15px"}}>< IoIosHelpCircleOutline style={{fontSize:"25px"}} /> Help</b>
              </div> 
             </NavLink>
             <NavLink className="navLinkNormal" to="/orders" activeClassName="navLink">
              <div className='order' onClick={()=>{page('/orders')}}>
              <b>Orders <IoMdCart style={{fontSize:"25px"}} /><sup > <span style={{marginTop:"-15px",color:"#FC8019",fontSize:"15px"}}>{cartItems.length}</span></sup></b>
              </div>      
             </NavLink>
             <NavLink className="navLinkNormal" to="/profile" activeClassName="navLink">
              <div className='profile' onClick={()=>{page('/profile')}}>
              <b style={{fontSize:"15px"}}><CgProfile style={{fontSize:"25px"}} /> {loginUserName}</b>
              </div>
             </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
import React from 'react';
import {  Link } from "react-router-dom";
import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';

import './Navbar.css';
const Navbar = () =>{
  


  return (
  <div>
    {/* {!isAuth() ? <NavLoggedIn /> : <NavPublic />} */}
  <li>
  
  {/* <Link  className={"link-styles"} to="/vaccines">Vaccines</Link>
      <Link  className={"link-styles"}  to="/settings">Settings</Link>
      <Link className={"link-styles"} to="/profile">Profile</Link>
      <Link className={"link-styles"} to="/dashboard">Notifications</Link> */}
      {/* <h3>Your Account</h3>
      <span class="glyphicon glyphicon-user" id="user" aria-hidden="true"></span> */}
     

  </li>
 
  <li>

  <Link  className={"link-styles"} to="/">Home</Link>
      <Link  className={"link-styles"}  to="/register">Register</Link>
      <Link className={"link-styles"} to="/login">Login</Link>
      <Link className="text-link" to="/" ><button  type="submit" className={"sumbit"} class="btn btn-outline-dark btn-lg">Log Out</button></Link>
 
  

  </li>
 

    
    
  </div>

  );
}
export default Navbar;
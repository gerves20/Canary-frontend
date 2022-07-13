import React from 'react';
import {  Link } from "react-router-dom";
import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';

import './Navbar.css';
const Navbar = () =>{
  


  return (
  <div>
    <li>
      <Link  className={"link-styles"} to="/">Home</Link>
      <Link  className={"link-styles"}  to="/register">Register</Link>
      <Link className={"link-styles"} to="/login">Login</Link>
    </li>
    
    
  </div>
  );
}
export default Navbar;
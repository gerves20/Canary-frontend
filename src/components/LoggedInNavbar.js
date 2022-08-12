import React from 'react'
// import Vector from "./public/vector.png";
import {  Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';


const LoggedInNavbar = () => {
    
  return (
    <div>
    <li class="log">
      <Link className="text-link" to="/" ><button  type="submit" className={"sumbit"} class="btn btn-outline-dark btn-lg">Log Out</button></Link>
    </li>
     
</div>

    
  )
}

export default LoggedInNavbar
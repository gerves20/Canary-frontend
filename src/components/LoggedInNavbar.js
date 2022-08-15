import React from 'react'
// import Vector from "./public/vector.png";
import {  Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoggedIn.css';


const LoggedInNavbar = () => {
    
  return (
    <div>
      <img src="vector.png"/>
      <h2 id="user">Welcome, User</h2>
    <li class="log">
      <Link className="text-link" to="/" ><button  type="submit" className={"sumbit"} id="out" class="btn btn-outline-dark btn-lg">Log Out</button></Link>
    </li>
     
</div>

    
  )
}

export default LoggedInNavbar
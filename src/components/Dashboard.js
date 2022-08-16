
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggedInNavbar from "./LoggedInNavbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  Link } from "react-router-dom";
import './Navbar.css';
import Login from "./pages/Login";
const Dashboard = ({ setAuth }) =>{
    const [firstname, setFname] = useState("");
    const [lastname, setLname] = useState("");

    const getProfile = async () => {
        try {
          const res = await fetch("http://localhost:5000/dashboard", {
            method: "POST",
            headers: { jwt_token: localStorage.token }
          });
    
          const parseData = await res.json();
          // setFname(parseData.first_name);
          // setLname(parseData.last_name);
        } catch (err) {
          console.error(err.message);
        }
      };

      

      
      useEffect(() => {
        getProfile();
      }, []);


  const showToastMessage = () => {
        toast.success('Check your email to verify your account', {
            position: toast.POSITION.TOP_RIGHT
        });
      }


    return (
    <div>
       <LoggedInNavbar/>
      <h1 id="vaxt">Your Notifications</h1>
      <div id="nav" class="nav">
        
      {/* <Link className={"link"} to="/vaccines"><button type="button" id="links"  className={"link"} class="btn btn-link">Vaccines</button></Link>
        <Link  className={"link"} to="/profile"><button type="button" id="links" className={"link"} class="btn btn-link">Profile</button></Link>
        <Link className={"link"} to="/settings"><button button type="button" className={"link"} id="links" class="btn btn-link">Settings</button></Link> */}

<Link className={"link"} to="/vaccines"><button type="button" id="links" class="btn btn-link">Vaccines</button></Link>
        <Link  className={"link"} to="/profile"><button type="button" id="links" class="btn btn-link">Profile</button></Link>
        <Link className={"link"} to="/settings"><button button type="button" id="links" class="btn btn-link">Settings</button></Link>
        <Link className={"link"} to="/dashboard"><button button type="button" id="links-1"  class="btn btn-link">Notifications</button></Link>
        </div>

        
      <h2>Welcome, User! </h2>
        <h1>Notifications: </h1>


    
  <div class="card">
  <h5 class="card-header">Notice</h5>
  <div class="card-body">
    <h5 class="card-title">COVID-19 Booster</h5>
    <p class="card-text">You are eligible for your COVID-19 booster shot. Would you like to make an appointment?</p>
    <a href="#"  id="primary" class="btn btn-primary">Not Now</a>
    <a href="#" class="btn btn-secondary">Yes</a>
  </div>
</div>

<div class="card">
  <h5 class="card-header">Notice</h5>
  <div class="card-body">
    <h5 class="card-title">Account Verification</h5>
    <p class="card-text">You have not verified your Canary account by email. Would you like to do that now? </p>
    <a href="#" class="btn btn-primary" id="primary">Not Now</a>
   
   
    <a href="#" onClick={showToastMessage} class="btn btn-secondary" id="secondary">Yes</a>
  </div>
</div>



        <div id = "button">
        <label>

        
        
        </label>

        
        </div>




       
      
      
      
    </div>
    );
  }
  export default Dashboard;

import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


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


  


    return (
    <div>
      
      

      <h2>Welcome, </h2>
        <h1>Notifications: </h1>
    
  <div class="card">
  <h5 class="card-header">Notice</h5>
  <div class="card-body">
    <h5 class="card-title">COVID-19 Booster</h5>
    <p class="card-text">You are eligible for your COVID-19 booster shot. Would you like to make an appointment?</p>
    <a href="#" class="btn btn-primary">Not Now</a>
    <a href="#" class="btn btn-secondary">Yes</a>
  </div>
</div>

<div class="card">
  <h5 class="card-header">Notice</h5>
  <div class="card-body">
    <h5 class="card-title">Account Verification</h5>
    <p class="card-text">You have not verified your Canary account by email. Would you like to do that now? </p>
    <a href="#" class="btn btn-primary" id="primary">Not Now</a>
    <a href="#" class="btn btn-secondary" id="secondary">Yes</a>
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
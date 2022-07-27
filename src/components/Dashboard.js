
import React, { useEffect, useState } from "react";

import {  Link } from "react-router-dom";
import './Navbar.css';
// import Login from "./pages/Login";
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
          setFname(parseData.first_name);
          setLname(parseData.last_name);
        } catch (err) {
          console.error(err.message);
        }
      };

      

      
      useEffect(() => {
        getProfile();
      }, []);


  


    return (
    <div>
      

      <h2>Welcome, {firstname}{lastname}</h2>
        <h1>Notifications: </h1>

        <div id = "button">
        <label>

        <Link className="text-link" to="/" ><button  type="submit" className={"sumbit"} class="btn btn-outline-dark btn-lg">Log Out</button></Link>
        
        </label>
        </div>




       
      
      
      
    </div>
    );
  }
  export default Dashboard;
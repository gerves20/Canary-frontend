import React from 'react';
import './Profile.css';

import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const  Profile = () =>{

   
    return(
        <div>
            <h1 id="personal">Your Profile</h1>
            <h3 id="profile">First Name</h3>
            <h3 id="profile">Last Name</h3>
            <h3 id="profile">Email</h3>
            <h3 id="profile">Phone Number</h3>
            <h3 id="profile">Date of Birth</h3>
            <h3 id="profile">Address</h3>
            <h3 id="profile">Country</h3>
            <h3 id="profile">State</h3>
            <button  type="submit" className={"sumbit"} class="btn btn-outline-dark btn-lg">More Information</button>
          




        </div>
        

    )

}

export default Profile;
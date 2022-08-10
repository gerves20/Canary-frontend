import React from 'react';
import './Settings.css';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const  Settings = () =>{
    return(
        <div>
            <h1 id="vaxt">Your Settings</h1>
      
        <div id="nav" class="nav">
          
        <Link className={"link"} to="/vaccines"><button type="button" id="links" class="btn btn-link">Vaccines</button></Link>
          <Link  className={"link"} to="/profile"><button type="button" id="links" class="btn btn-link">Profile</button></Link>
          <Link className={"link"} to="/settings"><button button type="button" id="links-2" class="btn btn-link">Settings</button></Link>
          <Link className={"link"} to="/dashboard"><button button type="button" id="links" class="btn btn-link">Notifications</button></Link>
          </div>

<div id="cards" >
<div class="cards" >
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Edit Profile</li>
    <li class="list-group-item">Account Settings</li>
    <li class="list-group-item">Privacy and Data</li>
    <li class="list-group-item">Security</li>
    <li class="list-group-item">Notifications</li>
  </ul>
</div>
</div>
        
</div>
       


    )

}

export default Settings;
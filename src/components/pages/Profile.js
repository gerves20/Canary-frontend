import React from 'react';
import './Profile.css';

import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const  Profile = () =>{

   
    return(
        <div>
             <h1 id="vaxt">Your Profile</h1>
      
      <div id="nav" class="nav">
        
      <Link className={"link"} to="/vaccines"><button type="button" id="links" class="btn btn-link">Vaccines</button></Link>
        <Link  className={"link"} to="/profile"><button type="button" id="links-3" class="btn btn-link">Profile</button></Link>
        
        <Link className={"link"} to="/settings"><button button type="button" id="links" class="btn btn-link">Settings</button></Link>
        <Link className={"link"} to="/dashboard"><button button type="button" id="links" class="btn btn-link">Notifications</button></Link>
        </div>
            
            <h2 id="profile">First Name</h2>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h2 id="profile">Last Name</h2>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>

            <h2 id="profile">Email</h2>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h2 id="profile">Phone Number</h2>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h2 id="profile">Date of Birth</h2>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h2 id="profile">Address</h2>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h2 id="profile">Country</h2>
            <div id="panel">z
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h2 id="profile">State</h2>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <button  type="submit" className={"sumbit"} class="btn btn-outline-dark btn-lg">More Information</button>
          




        </div>
        

    )

}

export default Profile;
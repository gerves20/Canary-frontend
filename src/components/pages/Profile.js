import React from 'react';
import './Profile.css';

import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const  Profile = () =>{

   
    return(
        <div>
            <h1 id="personal">Your Profile</h1>
            <h3 id="profile">First Name</h3>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h3 id="profile">Last Name</h3>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>

            <h3 id="profile">Email</h3>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h3 id="profile">Phone Number</h3>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h3 id="profile">Date of Birth</h3>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h3 id="profile">Address</h3>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h3 id="profile">Country</h3>
            <div id="panel">
            <div  class="panel panel-default">
            <div class="panel-body">A Basic Panel</div>
            </div>
            </div>
            <h3 id="profile">State</h3>
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
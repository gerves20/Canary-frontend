import React from 'react';
import './Profile.css';
import Collapse from 'react-bootstrap/Collapse';
import ShowMore from 'react-show-more-button';

// import LoggedInNavbar from "./LoggedInNavbar";

import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import LoggedInNavbar from '../LoggedInNavbar';

const  Profile = () =>{

  // const [ showMore, setShowMore ] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const togglePassword = () => {
    setIsShown((isShown) => !isShown);
  };


  const [open, setOpen] = useState(false);


  
   
    return(
        <div>
           <LoggedInNavbar/>
          
             <h1 id="vaxt">Your Profile</h1>
      
      <div id="nav" class="nav">
        
      <Link className={"link"} to="/vaccines"><button type="button" id="links" class="btn btn-link">Vaccines</button></Link>
        <Link  className={"link"} to="/profile"><button type="button" id="links-3" class="btn btn-link">Profile</button></Link>
        
        <Link className={"link"} to="/settings"><button button type="button" id="links" class="btn btn-link">Settings</button></Link>
        <Link className={"link"} to="/dashboard"><button button type="button" id="links" class="btn btn-link">Notifications</button></Link>
        
        
        </div>
            
        

            <div class="card-body" id="card">
              <form>
                <h6 class="heading-small text-muted mb-4">User information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-username">Username</label>
                        <input type="text" id="input-username" class="form-control form-control-alternative" placeholder="Username" value="Gab.Erves"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email">Email address</label>
                        <input type="email" id="input-email" class="form-control form-control-alternative" placeholder="gerves20@gmail.com"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-first-name">First name</label>
                        <input type="text" id="input-first-name" class="form-control form-control-alternative" placeholder="First name" value="Gabrielle"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-last-name">Last name</label>
                        <input type="text" id="input-last-name" class="form-control form-control-alternative" placeholder="Last name" value="Erves"/>
                      </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-first-name">Gender</label>
                        <input type="text" id="input-first-name" class="form-control form-control-alternative" placeholder="Gender" value="Female"/>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-last-name">Date of Birth</label>
                        <input type="text" id="input-last-name" class="form-control form-control-alternative" placeholder="Date of Birth" value="2002-06-20"/>
                      </div>
                    </div>
                    </div>
                    
                  </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-first-name">Phone Number</label>
                        <input type="text" id="input-first-name" class="form-control form-control-alternative" placeholder="Phone Number" value="718-539-1295"/>
                      </div>

                      
                      </div>
                      
                      <div class="col-lg-6">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-last-name">Password</label>
                        <input  type={isShown ? "text" : "password"} name="password" id="input-last-name" class="form-control form-control-alternative" placeholder="Password" value="ABC123"/>
                          <div className="checkbox-container">
                          <label htmlFor="checkbox">Show password?</label>
                          <input
                            id="checkbox"
                            type="checkbox"
                            checked={isShown}
                            onChange={togglePassword}
                          />
                        </div>
                     
                      </div>
                      </div>
                    </div>
                    

                
                <hr class="my-4"/>
                {/* <!-- Address --> */}
                <h6 class="heading-small text-muted mb-4">Contact information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-address">Address</label>
                        <input id="input-address" class="form-control form-control-alternative" placeholder="Home Address" value="64 Zoo Lane" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-city">City</label>
                        <input type="text" id="input-city" class="form-control form-control-alternative" placeholder="City" value="New York"/>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group focused">
                        <label class="form-control-label" for="input-country">Country</label>
                        <input type="text" id="input-country" class="form-control form-control-alternative" placeholder="Country" value="United States"/>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" for="input-country">Postal code</label>
                        <input type="number" id="input-postal-code" class="form-control form-control-alternative" placeholder="Postal code"/>
                      </div>
                    </div>
                  </div>
                 
                </div>
                
                <hr class="my-4"/>
                {/* <!-- Description --> */}
              </form>
       
      
    
  </div>
  
  


  


                   

<button  type="submit"  className={"sumbit"} class="btn btn-outline-dark btn-lg"> Add More Information</button>
        </div>
        
       

    );

};

export default Profile;
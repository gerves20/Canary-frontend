import React from 'react';
import './Register.css';
import { useState } from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () =>{

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [phonenum, setPhonenum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${fname}`)
  }
  return (
    <div >
      
      <h2>New Patient Registration</h2>

      
      <h5 className={"link-styles1"}>First Name</h5>
      <h5 className={"link-styles1"}>Last Name</h5>
      <h5 className={"link-styles1"}>Address</h5>
      <h5 className={"link-styles1"}>Date of Birth</h5>
      <h5 className={"link-styles1"}>Phone Number</h5>
      <h5 className={"link-styles1"}>Country</h5>
      <h5 className={"link-styles1"}>State</h5>
      <h5 className={"link-styles1"}>Gender</h5>
      <h5 className={"link-styles1"}>Password</h5>
      <h5 className={"link-styles1"}>Re-Type Password</h5>

      <h2 className={"link-styles2"}>Login</h2>
      <form onSubmit={handleSubmit}>

        <label 
        type="text" 
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        className={"fname"}>First Name
        
        <input type="text" />
        </label>

        <label 
        type="text" 
        name="lname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        className={"lname"}>Last Name
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"address"}>Address
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className={"dob"}>Date Of Birth
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="phonenum"
        value={phonenum}
        onChange={(e) => setPhonenum(e.target.value)}
        className={"phonenum"}>Phone Number
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"address"}>Country
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"address"}>State
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"address"}>Gender
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"address"}>Password
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"address"}>Re-Type Password
        <input type="text" />

        

        </label>

        
        <label>

        <button type="submit" className={"sumbit"} class="btn btn-outline-dark btn-lg">Submit</button>
        </label>

        
      </form>



      
    </div>
  );
}
export default Register;
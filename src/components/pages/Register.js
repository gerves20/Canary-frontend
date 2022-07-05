import React from 'react';
import './Register.css';
import Navbar from '../Navbar';
import styled from 'styled-components';

const Register = () =>{
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


      
    </div>
  );
}
export default Register;
import React from 'react';
import './Register.css';
import { useState } from 'react';
import { TextInput } from 'react';
import Select from 'react-select';

import Navbar from '../Navbar';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';



const Register = () =>{

  

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [value, setValue] = React.useState('fruit');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${fname}`)
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const options = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
    { label: 'Prefer Not To Say', value: 'prefer' },
  ];

  

  
  
  
  

  
 
  return (
    
    
    <div >
      
      <h2>New Patient Registration</h2>

      
      
      
      <form onSubmit={handleSubmit} >

      <div className="input-container">
      
  


</div>

        <label 
        type="text" 
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        className={"link-styles1"}>First Name* 
        
        <input type="text"/>
        
        </label>

        {/* <h5 className={"link-styles1"}></h5> */}

        <label 
        type="text" 
        name="lname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        className={"link-styles1"}>Last Name* 
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="address"
        placeholder="Your email here"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"link-styles1"}>Address* 
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className={"link-styles1"}>Date Of Birth* 
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="phonenum"
        value={phonenum}
        onChange={(e) => setPhonenum(e.target.value)}
        className={"link-styles1"}>Phone Number* 
        <input type="text" />

        

        </label>
        <label
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"link-styles1"}>Country* 
        <input type="text" />

        

        </label>
        <label 
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"link-styles1"}>State* 
        <input type="text" />

        

        </label>
        


        <div>
      <label className="col-md-8 col-offset-4" id= "dropdown">
        Gender*
        <select value={value} onChange={handleChange}>
        {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}

      </select>
      </label>
    </div>

    <label 
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"link-styles1"}>Email* 
        <input type="text" />

        

        </label>

        <label 
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"link-styles1"}>Username* 
        <input type="text" />

        

        </label>
      
        <label 
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"link-styles1"}>Password* 
        <input type="text" />

        

        </label>
        <label 
        htmlFor="name"
        type="text" 
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={"link-styles1"}
        >Re-Type Password* 
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
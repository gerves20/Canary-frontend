import React from 'react';
import './Register.css';
import { useState } from 'react';
import { TextInput } from 'react';
import Select from 'react-select';

import Navbar from '../Navbar';
import FloatingLabel from "react-bootstrap-floating-label";

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';




  

const Register = () =>{

  

  

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");



 
  const [value, setValue] = useState('');
  

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
      
      <h2 id="header">New Patient Registration</h2>

      
      
      
      <form onSubmit={handleSubmit} >

      <div className="input-container" >
      
      
<FloatingLabel label=" First Name *" id="myLabel" style={{width: "70%"}}  value={fname} type="text" onChange1={(e) => setFname(e.target.value)} onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Last Name* " id="myLabel" style={{width: "70%"}} value={lname} onChange1={(e) => setLname(e.target.value)} type="text" onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Date Of Birth* " id="myLabel" style={{width: "70%"}} value={dob} type="text" onChange1={(e) => setDob(e.target.value)} onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Address* " id="myLabel" style={{width: "70%"}} value={address} type="text" onChange1={(e) => setAddress(e.target.value)}onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Country* " id="myLabel" style={{width: "70%"}}  value={country} type="text" onChange1={(e) => setCountry(e.target.value)} onChange={event => console.log(event.target.value) } />
<FloatingLabel label="State* " id="myLabel" style={{width: "70%"}} value={state} type="text" onChange1={(e) => setState(e.target.value)} onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Zip Code* " id="myLabel" style={{width: "70%"}} value={zip} type="text" onChange1={(e) => setZip(e.target.value)} onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Phone Number* " id="myLabel" style={{width: "70%"}} value={phonenum} type="text" onChange1={(e) => setPhonenum(e.target.value)} onChange={event => console.log(event.target.value) } />
<div>
      <label className="col-md-8 col-offset-4" id= "dropdown">
        Gender*
        <select value={gender} onChange={handleChange} onChange1={(e) => setGender(e.target.value)}>
        {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}

      </select>
      </label>
    </div>
<FloatingLabel label="Email* " id="myLabel" style={{width: "70%"}} value={email} type="text" onChange1={(e) => setEmail(e.target.value)} name="email" onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Username* " id="myLabel" style={{width: "70%"}} value={username} type="text" onChange1={(e) => setUsername(e.target.value)} onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Password* " id="myLabel" style={{width: "70%"}} value={password} type="text" onChange1={(e) => setPassword(e.target.value)} onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Re-Type Password* " id="myLabel" style={{width: "70%"}} value={password} type="text" onChange1={(e) => setPassword(e.target.value)} onChange={event => console.log(event.target.value) } />

<label>

<button type="submit" className={"sumbit"} style={{width: "100%" }} class="btn btn-outline-dark btn-lg" id="button">Submit</button>
</label>

</div>

       

        

        
        
        </form>
        
       
        
        


    
        
        

        

        

        
        



  
 
 
        
     
        
      



      
    </div>
  );
}

export default Register;
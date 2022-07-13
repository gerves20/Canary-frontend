import React from 'react';
import './Register.css';
import { useState } from 'react';


// import Select from 'react-select';
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


// import Navbar from '../Navbar';
import FloatingLabel from "react-bootstrap-floating-label";
import Form from 'react-bootstrap/Form';

// import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
// import reactSelect from 'react-select';


const options = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
  { label: 'Prefer Not To Say', value: 'prefer' },
];



  

const Register = () =>{

  
  

  

  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword, password1] = useState("");
  // const [genders, setGenders] = useState("");
  

 
  // const [value, setValue] = React.useState('gender');
  // const [inputs, setInputs] = useState({});
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    alert(`The first you entered was: ${password1}`)
  }

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  

 
  


  
  
  

  
  
  
  

  
 
  return (
    
    
    <div >
      
      <h2 id="header">New Patient Registration</h2>

      
      <div className="input-container" id="form" >
      
      <form onSubmit={handleSubmit} >

    <div id="register">

<div class="form-floating mb-3" id="reg">
  <input type="text" name="name" style={{width: "70%"}}  value={firstname} onChange={(e) => setFname(e.target.value)} class="form-control" id="floatingInput" placeholder="Name"/>
  <label for="floatingInput">First Name*</label>
</div>
<div class="form-floating mb-3" id="reg">
  <input type="text" name="name"  class="form-control" style={{width: "70%"}} value={lastname} onChange={(e) => setLname(e.target.value)} id="floatingInput" placeholder="Name"/>
  <label for="floatingInput">Last Name*</label>
</div>
<div class="form-floating mb-3" id="reg">
  <input type="date" class="form-control" style={{width: "70%"}} value={dob} onChange={(e) => setDob(e.target.value)} id="floatingInput" placeholder="06/20/2002"/>
  <label for="floatingInput">Date of Birth*</label>
</div>
<div class="form-floating mb-3" id="reg">
  <input type="text" class="form-control" style={{width: "70%"}} value={address} name="" onChange={(e) => setAddress(e.target.value)} id="floatingInput" placeholder="address"/>
  <label for="floatingInput">Address*</label>
</div>
<div class="form-floating mb-3" id="reg">
  <input type='country' class="form-control" style={{width: "70%"}} value={country} onChange={(e) => setCountry(e.target.value)} id="floatingInput" placeholder="United States"/>
  <label for="floatingInput">Country*</label>
</div>
<div class="form-floating mb-3" id="reg">
  <input type="text" class="form-control" style={{width: "70%"}} value={state} id="floatingInput"onChange={(e) => setState(e.target.value)} placeholder="New York"/>
  <label for="floatingInput">State*</label>
</div>
<div class="form-floating mb-3" id="reg">
  <input type="text" class="form-control"  style={{width: "70%"}} value={zip} id="floatingInput" onChange={(e) => setZip(e.target.value)} placeholder="10021"/>
  <label for="floatingInput">Zip Code*</label>
</div>
<div class="form-floating mb-3" id="reg">
  <input type="tel" class="form-control"  style={{width: "70%"}} value={phonenum} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  name="phone" id="floatingInput" onChange={(e) => setPhonenum(e.target.value)} placeholder="123-456-7890"/>
  <label for="floatingInput">Phone Number*</label>
</div>

<div class="form-floating mb-3"id="reg" >
  <select class="form-select" style={{width: "70%"}} onChange={(e) => setGender(e.target.value)} value={gender} id="floatingSelect" aria-label="Floating label select example">
    <option selected>Select a Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
    <option value="prefer">Prefer not to Say</option>
    
  </select>
  <label for="floatingSelect">Gender</label>
</div>

{/* gender */}

<div class="form-floating mb-3" id="reg">
  <input type="email" class="form-control"  style={{width: "70%"}} value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address*</label>
</div>
<div class="form-floating mb-3" id="reg">
  <input type="text" class="form-control" style={{width: "70%"}} value={username} onChange={(e) => setUsername(e.target.value)} id="floatingInput" placeholder="sesame123"/>
  <label for="floatingInput">Username*</label>
</div>
<div class="form-floating mb-3" id="reg" >
  <input type="password" name="password" class="form-control" style={{width: "70%"}} value={password} onChange={(e) => setPassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password*</label>
</div>

<div class="form-floating mb-3" id="reg">
  <input type="password" name="password" class="form-control" style={{width: "70%"}} value={password1} id="floatingPassword" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
  <label for="floatingPassword">Confirm Password*</label>
</div>

</div>

   
      
      
{/* <FloatingLabel label=" First Name *" id="myLabel" style={{width: "70%", fontFamily: 'Inter' }} name="firstname" editorValue={firstname} type="text"  onChange={event => console.log(event.target.value) }>
<input  onChange={(e) => setFname(e.target.value)} value={firstname}  name="firstname" />
</FloatingLabel>
<input type="submit" />

<FloatingLabel label="Last Name* " id="myLabel" style={{width: "70%"}} name="lastname" value={lastname} onChange1={(e) => setLname(e.target.value)} type="text" onChange={event => console.log(event.target.value) } >
<input  onChange={(e) => setLname(e.target.value)} value={lastname} type="text"  name="lastname" />
</FloatingLabel>
<FloatingLabel label="Date Of Birth* " id="myLabel" style={{width: "70%"}} name="dob" value={dob} type="text" onChange={event => console.log(event.target.value) } >
<input  onChange={(e) => setDob(e.target.value)} value={dob}  name="dob" type="text" />
</FloatingLabel>
<FloatingLabel label="Address* " id="myLabel" style={{width: "70%"}} name="address" value={address} type="text" onChange1={(e) => setAddress(e.target.value)}onChange={event => console.log(event.target.value) } >
<input  onChange={(e) => setAddress(e.target.value)} value={address}  name="address" type="text"  className={"address"} />
</FloatingLabel>
<FloatingLabel label="Country* " id="myLabel" style={{width: "70%"}}  value={country} type="text" onChange1={(e) => setCountry(e.target.value)} onChange={event => console.log(event.target.value) } >
<input  onChange={(e) => setCountry(e.target.value)} value={country}  name="country" type="text" />
</FloatingLabel>
<FloatingLabel label="State* " id="myLabel" style={{width: "70%"}} value={state} type="text" onChange1={(e) => setState(e.target.value)} onChange={event => console.log(event.target.value) } >
<input  onChange={(e) => setState(e.target.value)} value={state}  name="state" type="text" />
</FloatingLabel>
<FloatingLabel label="Zip Code* " id="myLabel" style={{width: "70%"}} value={zip} type="text" onChange1={(e) => setZip(e.target.value)} onChange={event => console.log(event.target.value) } >

</FloatingLabel>
<FloatingLabel label="Phone Number* " id="myLabel" style={{width: "70%"}} value={phonenum} type="text" onChange1={(e) => setPhonenum(e.target.value)} onChange={event => console.log(event.target.value) } >

</FloatingLabel>
<div>
      <label className="col-md-8 col-offset-4" id= "dropdown">
        Gender*
      <select value={value} onChange={handleChange}>
        {options.map((option) => (
            <option value={option.value} onChange={(e) => setGender(e.target.value)}>{option.label}</option>
          ))}

      </select>
      </label>
    </div>
<FloatingLabel label="Email* " id="myLabel" style={{width: "70%"}} value={email} type="text" onChange1={(e) => setEmail(e.target.value)} name="email" onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Username* " id="myLabel" style={{width: "70%"}} value={username} type="text" onChange1={(e) => setUsername(e.target.value)} onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Password* " id="myLabel" style={{width: "70%"}} value={password} type="text" onChange1={(e) => setPassword(e.target.value)} onChange={event => console.log(event.target.value) } />
<FloatingLabel label="Re-Type Password* " id="myLabel" style={{width: "70%"}} value={password} type="text" onChange1={(e) => setPassword(e.target.value)} onChange={event => console.log(event.target.value) } />
{/* <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} /> */}
<div id="button">
<label> 

<button type="submit" className={"sumbit"} style={{width: "100%" }} class="btn btn-outline-dark btn-lg" id="button">Submit</button>
</label>
</div>








{/* <div class="floating">
    <input id="input__username" onChange={(e) => setFname(e.target.value)} class="floating__input" name="firstname" value={firstname} type="text" placeholder="First Name" />
    <label for="input__username" class="floating__label" data-content="First Name*">
    <span class="hidden--visually">
      First Name* </span></label>
  </div>

  <div class="floating">
    <input id="input__password" type="password" onChange={(e) => setLname(e.target.value)} class="floating__input" value={lastname} name="lastname"  placeholder="Last Name" />
    <label for="input__password" class="floating__label" data-content="Last Name*"><span class="hidden--visually">Last Name *</span></label>
  </div>

</div>

<div class="floating">
    <input id="input__username" class="floating__input" onChange={(e) => setDob(e.target.value)} value={dob} name="dob" type="text" placeholder="Date of Birth" />
    <label for="input__username" class="floating__label" data-content="Date of Birth *">
    <span class="hidden--visually">
      Date of Birth* </span></label>
  </div>

  <div class="floating">
    <input id="input__username" class="floating__input" onChange={(e) => setAddress(e.target.value)} value={address} name="address" type="text" placeholder="Address" />
    <label for="input__username" class="floating__label" data-content="Address*">
    <span class="hidden--visually">
      Address* </span></label>
  </div>

  <div class="floating">
    <input id="input__username" class="floating__input" onChange={(e) => setState(e.target.value)} value={state} name="state" type="text" placeholder="State" />
    <label for="input__username" class="floating__label" data-content="State *">
    <span class="hidden--visually">
      State* </span></label>
  </div>

  <div class="floating">
    <input id="input__username" class="floating__input" onChange={(e) => setZip(e.target.value)} value={zip} name="zip" type="text" placeholder="Zip Code" />
    <label for="input__username" class="floating__label" data-content="Zip Code*">
    <span class="hidden--visually">
      Zip Code* </span></label>
  </div>
  <div class="floating">
    <input id="input__username" value={phonenum} class="floating__input" onChange={(e) => setPhonenum(e.target.value)} name="phonenum" type="text" placeholder="Phone Number" />
    <label for="input__username" class="floating__label" data-content="Phone Number *">
    <span class="hidden--visually">
      Phone Number* </span></label>
  </div>


  
      <label className="col-md-8 col-offset-4" id= "dropdown">
        Gender*
        <select value={gender} onChange={handleChange} onChange1={(e) => setGender(e.target.value)}>
        {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}

      </select>
      </label>
    
        
{/* gender */}
  

  {/* <div class="floating">
    <input id="input__username"  value={email} class="floating__input" onChange={(e) => setEmail(e.target.value)} name="email" type="text" placeholder="Email" />
    <label for="input__username" class="floating__label" data-content="Email *">
    <span class="hidden--visually">
      Email* </span></label>
  </div>

  <div class="floating">
    <input id="input__username" value={username} class="floating__input" name="username" type="text" placeholder="Username" />
    <label for="input__username" class="floating__label" data-content="Username *">
    <span class="hidden--visually">
      Username* </span></label>
  </div>

  <div class="floating">
    <input id="input__username" value={password} class="floating__input" name="password" type="text" placeholder="Password" />
    <label for="input__username" class="floating__label" data-content="Password *">
    <span class="hidden--visually">
      Password* </span></label>
  </div>

  <div class="floating">
    <input id="input__username" value={password} class="floating__input" name="password" type="text" placeholder="Password" />
    <label for="input__username" class="floating__label" data-content="Re-Type Password *">
    <span class="hidden--visually">
      Re-Type Password* </span></label>
        </div> */}

</form>
  
        </div>
       
        
        
        

        
       
        
        


    
        
        

        

        

        
        



  
 
 
        
     
        
      



      
    </div>
  );
}

export default Register;
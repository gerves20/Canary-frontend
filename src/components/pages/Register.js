import React from 'react';
import './Register.css';
import { useState, useEffect} from 'react';
import { Link} from "react-router-dom";
// import LoadingSpinner from "./LoadingSpinner";
import { useForm } from 'react-hook-form'

import "./Spinner.css";
// import { Spinner, Button } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';

// import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


// import Select from 'react-select';
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


// import Navbar from '../Navbar';
// import FloatingLabel from "react-bootstrap-floating-label";
// import Form from 'react-bootstrap/Form';

// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import reactSelect from 'react-select';








  

const Register = () =>{
 
  
  const onSubmitForm = async e => { 
    
    e.preventDefault(); 
    try { const body = { userName: username, 
      email, 
      phoneNumber: phonenum, 
      password, 
      firstName: firstname, 
      lastName: lastname, 
      dateOfbirth: dob, 
      home: address, 
      country, 
      state, 
      zip, 
      genderType: gender }; 
      const response = await fetch( "http://localhost:5000/auth/register", 
      { 
        method: "POST", 
        headers: { 
          "Content-type": "application/json" },
           body: JSON.stringify(body),
           
          } 
           ); 
           console.log("You have successfully registered! Check your email for a verification link")
           const parseRes = await response.json();
           toast.success(parseRes.message);

        }catch (err) { 
          console.error(err); 
          toast.error(err.response.message);

        }
        
        
         };

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
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState('form-control');
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const [message, setMessage] = useState('');
 
  const {handleSubmit, formState} = useForm()
  const { isSubmitting } = formState
  // const [genders, setGenders] = useState("");
  
  

 
  // const [value, setValue] = React.useState('gender');
  // const [inputs, setInputs] = useState({});
  

  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   alert(`The first you entered was: ${dob}`)
  // }


  

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  // const handleFetch = () => {
  //   setIsLoading(true);
  //   fetch("http://localhost:5000/register")
  //     .then((respose) => respose.json())
  //     .then((respose) => {
  //        setUsers(respose.data)
  //        setIsLoading(false)
  //        // Optional code to simulate delay
  //        // setTimeout(() => {
  //        //   setUsers(respose.data);
  //        //   setIsLoading(false);
  //        // }, 3000);
  //     })
  //     .catch(() => {
  //        setErrorMessage("Unable to submit user list");
  //        setIsLoading(false);
  //     });
  // };
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
}
  
useEffect(() => {
  if (isCPasswordDirty) {
      if (password === cPassword) {
          setShowErrorMessage(false);
          setCPasswordClass('form-control is-valid')
      } else {
          setShowErrorMessage(true)
          setCPasswordClass('form-control is-invalid')
      }
  }
}, [cPassword])

// function submitForm(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, 4000)
//   })
// }




 
  
// const handleClick = event => {
//   event.currentTarget.disabled = true;
  
// };

  
  
  

  
  
// const renderUser = (
//   <div className="userlist-container">
//     {users.map((item, index) => (
//       <div className="user-container" key={index}>
//         <img src={item.avatar} alt="" />
//         <div className="userDetail">
//           <div className="first-name">{`${item.first_name}                
//                                  ${item.last_name}`}</div>
//           <div className="last-name">{item.email}</div>
//         </div>
//       </div>
//     ))}
//   </div>
// );
  

  
 
  return (
    
    
    <div >
      
      <h2 id="header">New Patient Registration</h2>

      
      <div className="input-container" id="form" >
      
      <form onSubmit={onSubmitForm} >

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
  <input type="date" class="form-control"  min="1900-01-01" max="2023-01-01" style={{width: "70%"}} value={dob} onChange={(e) => setDob(e.target.value)} id="floatingInput" placeholder="06/20/2002"/>
  <label for="floatingInput">Date of Birth*</label>
</div>
<div class="form-floating mb-3" id="reg">
  <input type="text" class="form-control" style={{width: "70%"}} value={address} name="" onChange={(e) => setAddress(e.target.value)} id="floatingInput" placeholder="address"/>
  <label for="floatingInput">Address*</label>
</div>
<div class="form-floating mb-3"id="reg" >
  <select class="form-select" style={{width: "70%"}} onChange={(e) => setCountry(e.target.value)} value={country} id="floatingSelect" aria-label="Floating label select example">
    <option selected>Select a Country</option>
    <option value="australia">Australia</option>
    <option value="brazil">Brazil</option>
    <option value="canada">Canada</option>
    <option value="china">China</option>
    <option value="denmark">Denmark</option>
    <option value="egypt">Egypt</option>
    <option value="finalnd">Finland</option>
    <option value="germany">Germany</option>
    <option value="hong kong">Hong Kong</option>
    <option value="india">India</option>
    <option value="japan">Japan</option>
    <option value="kenya">Kenya</option>
    <option value="lebannon">Lebannon</option>
    <option value="mexico">Mexico</option>
    <option value="nigeria">Nigeria</option>
    <option value="philippines">Philippines</option>
    <option value="puerto rico">Puerto Rico</option>
    <option value="russia">Russia</option>
    <option value="south africa">South Africa</option>
    <option value="UAE">United Arab Emirates</option>
    <option value="UK">United Kingdom</option>
    <option value="United States">United States</option>


    
  </select>
  <label for="floatingSelect">Country*</label>
</div>

<div class="form-floating mb-3"id="reg" >
  <select class="form-select" style={{width: "70%"}} onChange={(e) => setState(e.target.value)} value={state} id="floatingSelect" aria-label="Floating label select example">
    <option selected>Select a State</option>
    <option value="alabama">Alabama</option>
    <option value="alaska">Alaska</option>
    <option value="arizona">Arizona</option>
    <option value="arkansas">Arkansas</option>
    <option value="california">California</option>
    <option value="colorado">Colorado</option>
    <option value="delaware">Delaware</option>
    <option value="florida">Florida</option>
    <option value="georgia">Georgia</option>
    <option value="hawaii">Hawaii</option>
    <option value="idaho">Idaho</option>
    <option value="indiana">Indiana</option>
    <option value="iowa">Iowa</option>
    <option value="kansas">Kansas</option>
    <option value="kentucky">Kentucky</option>
    <option value="louisiana">Louisiana</option>
    <option value="maine">Maine</option>
    <option value="maryland">Maryland</option>
    <option value="massachusetts">Massachusetts</option>
    <option value="michigan">Michigan</option>
    <option value="mississippi">Mississippi</option>
    <option value="missouri">Missouri</option>
    <option value="nebraska">Nebraska</option>
    <option value="nevada">Nevada</option>
    <option value="new hampshire">New Hampshire</option>
    <option value="new jersey">New Jersey</option>
    <option value="new mexico">New Mexico</option>
    <option value="new york">New York</option>
    <option value="north carolina">North Carolina</option>
    <option value="north dakota">North Dakota</option>
    <option value="ohio">Ohio</option>
    <option value="oklahoma">Oklahoma</option>
    <option value="oregon">Oregon</option>
    <option value="pennsylvania">Pennsylvania</option>
    <option value="rhode island">Rhode Island</option>
    <option value="south carolina">South Carolina</option>
    <option value="south dakota">South Dakota</option>
    <option value="tennessee">Tennessee</option>
    <option value="texas">Texas</option>
    <option value="utah">Utah</option>
    <option value="vermont">Vermont</option>
    <option value="virginia">Virginia</option>
    <option value="washington">Washington</option>
    <option value="louisiana">Louisiana</option>
    <option value="west virginia">West Virginia</option>
    <option value="wisconsin">Wyoming</option>

  </select>
  <label for="floatingSelect">State*</label>
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
  <input type="password"  name="password" class="form-control" style={{width: "70%"}} value={password} onChange={(e) => setPassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password*</label>
</div>

<div class="form-floating mb-3" id="reg">
  <input type="password"  onChange={handleCPassword} name="password" class="form-control" style={{width: "70%"}} value={cPassword} id="floatingPassword" className={cPasswordClass} placeholder="Password"/>
  <label htmlFor="confirmPassword" for="floatingPassword">Confirm Password*</label>
</div>
{showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}

</div>

   
      
      
{/* <div className="App">
      {isLoading ? <LoadingSpinner /> : renderUser}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button type="submit" class="btn btn-outline-dark btn-lg"  disabled={isLoading}>
        Submit
    </button>
    </div> */}

<div id="button">
{/* {isLoading ? <LoadingSpinner /> : renderUser}
{errorMessage && <div className="error">{errorMessage}</div>} */}
<label> 

<button type="submit" disabled={!email || !firstname || !lastname ||!dob ||!address ||!state ||!country ||!zip ||!phonenum ||!gender ||!username || !password ||!cPassword||isSubmitting} className={"sumbit"} style={{width: "100%" }} class="btn btn-outline-dark btn-lg" id="button">
{isSubmitting && (
  
                  <span className="spinner-grow spinner-grow-sm"></span>
                  
                )}
  Submit</button>
  <ToastContainer />
  
</label>
</div>



{/* <Puff fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75} />
<Audio fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75}/>
<BallTriangle fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75}/>
<Bars fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75}/>
<Circles fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75}/>
<Grid fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75}/>
<Hearts fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75}/>
<Oval fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75}/>
<Puff fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75}/>
<Rings fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75}/>
<SpinningCircles fill="#000000" stroke="#000000" strokeOpacity={125} speed={.75}/> */}
{/* <TailSpin fill="#000000" stroke="#000000" strokeOpacity={125} speed={.75}/> */}
{/* <ThreeDots fill="#000000" stroke="#000000" strokeOpacity={.125} speed={.75}/> */}


<div className="auth-option text-center pt-2">Have an account? <Link className="text-link" to="/login" >Sign in</Link></div>






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
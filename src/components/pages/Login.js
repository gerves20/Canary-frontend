import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../Navbar';
import FloatingLabel from "react-bootstrap-floating-label";
// import 'bootstrap/dist/css/bootstrap.min.css';


import { useState } from 'react';
import './Login.css';

const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email}`)
  }
  
  return (
    <div>
      {/* <Navbar/> */}

      <h2 className={"link-styles2"}>Login</h2>
      <form onSubmit={handleSubmit}>

      <FloatingLabel label=" Email or Phone Number*" name="email" id="myLabel" style={{width: "70%"}}  value={email} type="text" onChange1={(e) => setEmail(e.target.value)} onChange={event => console.log(event.target.value) } />
      <FloatingLabel label=" Password*" name="password" id="myLabel" style={{width: "70%"}}  value={password} type="text" onChange1={(e) => setPassword(e.target.value)} onChange={event => console.log(event.target.value) } />

        

        
        <label>

        <button type="submit" className={"sumbit"} class="btn btn-outline-dark btn-lg">Submit</button>
        </label>

        
      </form>

     

      
    </div>
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login/>);


export default Login;

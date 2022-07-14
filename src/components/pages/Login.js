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
      <div className="input-container" id="form" >
      <form onSubmit={handleSubmit}>

      <div id="register">
<div class="form-floating mb-3" id="reg">
  <input type="email" class="form-control"  style={{width: "70%"}} value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address*</label>
</div>
<div class="form-floating mb-3" id="reg" >
  <input type="password" name="password" class="form-control" style={{width: "70%"}} value={password} onChange={(e) => setPassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password*</label>
</div>

        </div>

        <div id = "button">
        <label>

        <button type="submit"disabled={!email||!password} className={"sumbit"} class="btn btn-outline-dark btn-lg">Submit</button>
        </label>
        </div>

        
      </form>

     </div>

      
    </div>
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login/>);


export default Login;

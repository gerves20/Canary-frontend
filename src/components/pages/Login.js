import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../Navbar';
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

        <label 
        type="text" 
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={"email"}>Phone Number or Email
        
        <input type="text" />
        </label>

        <label 
        type="text" 
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={"password"}>Password
        <input type="text" />

        

        </label>
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

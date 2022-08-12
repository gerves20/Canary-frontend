import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../Navbar';
import FloatingLabel from "react-bootstrap-floating-label";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate} from "react-router-dom";
import { useState } from 'react';
import './Login.css';
import { toast } from 'react-toastify';



const Login = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  //const handleSubmit = (event) => {
    //event.preventDefault();
    //alert(`The email you entered was: ${email}`)
  //}
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {
        email,
        password,
      };
      const response = await fetch(
        "http://localhost:5000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();
      if (!response.ok) {
        return toast.error(parseRes.message);
        //  return navigate('/register')
    }
        toast.success(parseRes.message);
        navigate('/dashboard');
    } catch (err) {
      console.error(err);
      toast.error(err.response.message);
    }
  };
  return (
    <div>
      <Navbar/>
      <img src="vector.png" />
      <h1>{message}</h1>
      <h2 className={"link-styles2"}>Login</h2>
      <div className="input-container" id="form" >
      <form onSubmit={onSubmitForm}>
      <div id="register">
<div class="form-floating mb-3" id="reg">
  <input type="email" class="form-control"  style={{width: "70%"}} value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address*</label>
</div>
<div class="form-floating mb-3" id="reg" >
  <input type="password" name="password" class="form-control" style={{width: "70%"}} value={password} onChange={(e) => setPassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password*</label>
  <h3 id="forgot"><Link to="/forgot">Forgot Password?</Link></h3>
</div>
        </div>
        <div id = "button">
        <label>
        <button type="submit"disabled={!email||!password} className={"sumbit"} class="btn btn-outline-dark btn-lg">Login</button>
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








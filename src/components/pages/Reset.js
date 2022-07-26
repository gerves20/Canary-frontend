import React from 'react';
import './Register.css';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
const Reset = () => {
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const { token } = useParams();
    useEffect(() => {
        verifyToken();
    }, []);
    async function verifyToken() {
        try {
            const response = await fetch(`http://localhost:5000/auth/reset/${token}`);
            let data = await response.json();
            if (!response.ok) {
                return setMessage(data.message);
                //  return navigate('/register')
            }
            // setMessage(data.message);
            setIsValid(true);
        } catch (error) {
            setMessage(error.response.message);
            setIsValid(false);
        } finally {
            console.log(isValid);
            console.log(token);
        }
    }
    async function handleSubmit() {
        try {
            const response = await fetch(`http://localhost:5000/auth/update-password`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({token,password})
            }
            );
            let data = await response.json();
            if (!response.ok) {
                return setMessage(data.message);
                //  return navigate('/register')
            }
            // setMessage(data.message);
        } catch (error) {
            setMessage(error.response.message);
        }
    }
    return (
        <div id="register">
            {
                !isValid ? <h1>{message}</h1> : (
                    <>
                        <h1>{message}</h1>
                        <h1 id="header1" >Reset Password</h1>
                        <h3 id="title">Enter your new password:</h3>
                        <div>
                            <div class="form-floating mb-3" id="reg" >
                                <input type="password" name="password" class="form-control" style={{ width: "70%" }} value={password} onChange={(e) => setPassword(e.target.value)} id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">New Password*</label>
                            </div>
                        </div>
                        <h3 id="title">confirm password:</h3>
                        <div>
                            <div class="form-floating mb-3" id="reg" >
                                <input type="password" name="password" class="form-control" style={{ width: "70%" }}
                                    value={cpassword} onChange={(e) => setCpassword(e.target.value)} id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Confirm Password*</label>
                            </div>
                        </div>
                        <button  disabled={!password}
                            className="sumbit btn btn-outline-dark btn-lg "
                            onClick={handleSubmit}
                        >Submit</button>
                    </>
                )
            }
        </div>
    );
}
export default Reset;








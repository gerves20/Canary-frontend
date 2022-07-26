import React, { useState } from 'react';
import './Register.css';
import { toast } from 'react-toastify';
const Forgot = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {
                email
            };
            const response = await fetch(
                "http://localhost:5000/auth/forgot",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );
            const parseRes = await response.json();
            setMessage(parseRes.message)
            toast.success(parseRes.message);
        } catch (err) {
            setMessage(err.response.message);
            toast.error(err.response.message);
        }
    };
    return (
        <div id="register">
            <h1>{message}</h1>
            <h1 id="header1" >Forgot Password</h1>
            <h3 id="title">Enter your email to receive a reset password link:</h3>
            <div>
                <div class="form-floating mb-3" id="reg">
                    <input type="email" class="form-control" style={{ width: "70%" }} value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
            </div>
            <button
                disabled={!email}
                className="btn btn-outline-dark btn-lg sumbit"
                onClick={onSubmitForm}
            >Submit</button>
        </div>
    );
}
export default Forgot;
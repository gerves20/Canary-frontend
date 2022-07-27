import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link, useParams, useNavigate } from "react-router-dom";
const Verification = () => {
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const { token } = useParams();
    // let navigate = useNavigate();
    useEffect(() => {
        if (token) {
            verifyToken();
        }
    }, []);
    async function verifyToken() {
        try {
            const response = await fetch(`http://localhost:5000/auth/verify/${token}`);
            let data = await response.json();
            if (!response.ok) {
                return setMessage(data.message);
                //  return navigate('/register')
            }
            setMessage(data.message);
            setIsValid(true);
        } catch (error) {
            setMessage(error.response.message);
            setIsValid(false);
        } finally {
            console.log(isValid);
            console.log(token);
        }
    }
    return (
        <body>
            <div>
                {
                    isValid ? < h2 > {message}  <Link to="/login">Login</Link></h2> : <h2>{message}</h2>
                }
            </div>
        </body >
    );
}
export default Verification;
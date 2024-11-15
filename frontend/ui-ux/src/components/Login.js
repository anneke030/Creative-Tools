// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Logging in with:', { username, password });

        // Navigate to the home page after successful login
        navigate('/home');
    };

    return (
     
        <div>
            <div class="colored-box">
            <h1 className="header">sign in</h1>
            <p>Connect with the World of Design</p>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username: 
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password: 
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
            <br></br>
            <br></br>
            </div>
        </div>
    );
};

export default Login;

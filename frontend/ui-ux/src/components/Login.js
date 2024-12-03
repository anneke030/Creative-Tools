import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { username, password });
        navigate('/home'); // Navigate to the home page after login
    };

    const handleSignUp = () => {
        navigate('/home'); // Navigate to the home page after sign-up
    };

    return (
        <div className="login-container">
            {/* Sign-In Box */}
            <div className="colored-box">
                <h1>sign in</h1>
                <p>Connect with the World of Design</p>
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>

            {/* Sign-Up Options */}
            <div className="sign-up-container">
                {/* Sign-Up as Designer */}
                <div className="sign-up-box">
                    <h2>Sign Up as a Designer</h2>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <button onClick={handleSignUp}>Sign Up</button>
                </div>

                {/* Sign-Up as User */}
                <div className="sign-up-box">
                    <h2>Sign Up as a User</h2>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <button onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Login;

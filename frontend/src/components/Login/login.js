import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import CSS file for styling

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation here
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        // If validation passes, navigate to the desired page
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="wrap-input100">
                        <label htmlFor="email" className="input-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input100"
                        />
                    </div>
                    <div className="wrap-input100">
                        <label htmlFor="password" className="input-label">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input100"
                        />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button type="submit" className="login100-form-btn">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

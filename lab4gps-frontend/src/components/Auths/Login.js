import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/login/', { email, password });
      const { access, refresh } = response.data.tokens;

      // Store tokens in localStorage
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // Navigate to the dashboard or home page
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-container">
          <h1>Login</h1>
          <form onSubmit={handleLogin} className="login-form">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
          </form>
          <p>
            Forgot your password? <a href="/forgot-password">Reset it here</a>
          </p>
        </div>

        <div className="login-poster">
          <h2>New here?</h2>
          <p>
            If you haven't created an account yet, you can easily sign up and start exploring our features.
          </p>
          <a href="/signup" className="signup-link">Sign Up Now</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

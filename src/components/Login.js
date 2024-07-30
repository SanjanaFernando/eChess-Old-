// src/components/Login.js
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-logo">Logo</div>
      <div className="login-box">
        <h2>Log in</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password <a href="#">Forgot password?</a></label>
            <input type="password" id="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-button">Log in</button>
        </form>
        <div className="signup-link">
          <span>Don't have an account?</span>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

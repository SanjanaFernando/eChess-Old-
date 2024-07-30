// src/components/Signup.js
import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-logo">Logo</div>
      <div className="signup-box">
        <h2>Sign up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" placeholder="First name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" placeholder="Last name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm password" required />
          </div>
          <button type="submit" className="signup-button">Sign up</button>
        </form>
        <div className="login-link">
          <span>Already have an account?</span>
          <button className="login-button">Login</button>
        </div>
      </div>
      <div className="quote-section">
        <img src="magnus.jpeg" alt="Player" className="quote-image" />
        <p className="quote-text">
          If you want to get to the top, there's always the risk that it will isolate you from other people.
        </p>
        <p className="quote-author">@Magnus Carlsen</p>
      </div>
    </div>
  );
};

export default Signup;

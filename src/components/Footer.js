// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Join the Chess Community Today</p>
      <button className="sign-up">Sign Up</button>
      <button className="login">Login</button>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </div>
      <p>© 2024 eChess. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

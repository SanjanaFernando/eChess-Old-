// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <a href="#">Play</a>
        <a href="#">Organize</a>
        <a href="#">Tournaments</a>
      </nav>
      <div className="auth-buttons">
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

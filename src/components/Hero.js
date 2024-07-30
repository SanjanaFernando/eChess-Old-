// src/components/Hero.js
import React from 'react';
import './Hero.css';
import Footer from './Footer';
import Header from './Header';
import Features from './Features';

const Hero = () => {
  return (
    <section className='sandwitch'>
    <Header/>
    <section className="hero">
      <h1>Welcome to eChess, the ultimate online chess platform.</h1>
      <p>
      Join us and experience the thrill of competitive chess, connect with fellow players, and showcase your skills.
      </p>
      <button className="get-started">Get Started</button>
      
    </section>
    <Features/>
    <Footer/>
    </section>
  );
};

export default Hero;

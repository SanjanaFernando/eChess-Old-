// src/components/Features.js
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className='header1'>
        <h1>Experience the Thrill of Online Chess and Tournament Registration</h1>
      </div>
      <div className="inline-features1">
        <div className="feature feature1">
          <h2>Online Play</h2>
          <p>Play chess with players from around the world anytime, anywhere, and sharpen your skills.</p>
        </div>
        <div className="feature feature2">
          <h2>Tournament Registration</h2>
          <p>Register for exciting chess tournaments and compete against top players for glory and prizes.</p>
        </div>
      </div>
      <div className='header1'>
        <h1>Simplify Your Chess Experience with eChess</h1>
      </div>
      <div className='inline-features2'>
        <div className="feature feature3">
         <h2>Organize and Play Tournaments with Ease</h2>
          <p>Join our platform to register as a player or organize chess tournaments effortlessly.</p>
       </div>
        <div className="feature feature4">
         <h2>Compete Against Skilled Players in Real-Time</h2>
         <p>Challenge opponents from around the world and test your chess skills online.</p>
        </div>
       <div className="feature feature5">
         <h2>Stay Updated with Live Tournament Updates</h2>
         <p>Get real-time updates, player rankings, and tournament details at your fingertips.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

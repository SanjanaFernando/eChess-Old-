// src/components/Payment.js
import React from 'react';
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="payment-details">
        <button className="back-button">← Back</button>
        <h2>Register to Tournament</h2>
        <p className="price">LKR 5000.00 <span>per one person</span></p>
        <div className="price-breakdown">
          <p>Tournament</p>
          <p>LKR 5000.00</p>
        </div>
        <button className="promo-code">Add promotion code</button>
        <hr />
        <div className="total">
          <p>Total</p>
          <p>LKR 5000.00</p>
        </div>
      </div>
      <div className="payment-form">
        <h2>Pay with card</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card number</label>
            <input type="text" id="cardNumber" placeholder="1234 1234 1234 1234" required />
          </div>
          <div className="form-group">
            <label htmlFor="expiration">Expiration</label>
            <input type="text" id="expiration" placeholder="MM / YY" required />
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="CVC" required />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" placeholder="Sri Lanka" required />
          </div>
          <button type="submit" className="pay-button">Pay</button>
        </form>
        <p className="disclaimer">
          By providing your card information, you allow eChess to charge your card for make payments in accordance with their terms.
        </p>
      </div>
    </div>
  );
};

export default Payment;

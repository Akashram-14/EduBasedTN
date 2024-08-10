import React, { useState } from 'react';
import './paymentpage.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentDetails = {
      cardNumber,
      expiryDate,
      cvv,
      upiId,
    };
    console.log(paymentDetails);
    alert('Payment Submitted!');
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="payment-method">
          <label>
            <input
              type="radio"
              value="card"
              checked={selectedPaymentMethod === 'card'}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={selectedPaymentMethod === 'upi'}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            />
            UPI
          </label>
        </div>

        {selectedPaymentMethod === 'card' && (
          <div>
            <div className="form-group">
              <label>Card Number:</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date:</label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>CVV:</label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        )}

        {selectedPaymentMethod === 'upi' && (
          <div className="form-group">
            <label>UPI ID:</label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;

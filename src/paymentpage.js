import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './paymentpage.css';

const Payment = () => {
  const [cardData, setCardData] = useState({
    cvc: '',
    name: '',
    number: '',
    expiryMonth: '',
    expiryYear: ''
  });
  const [focused, setFocused] = useState('');
  const [phone, setPhone] = useState('');
  const [upi, setUpi] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleFocusChange = (e) => {
    setFocused(e.target.name);
  };

  const validateForm = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!cardData.name) newErrors.name = 'Name on card is required';
    if (!cardData.number) newErrors.number = 'Card number is required';
    if (!cardData.expiryMonth) newErrors.expiryMonth = 'Expiry month is required';
    if (!cardData.expiryYear) newErrors.expiryYear = 'Expiry year is required';
    if (!cardData.cvc) newErrors.cvc = 'CVC is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!upi) newErrors.upi = 'UPI ID is required';

    const cardNumberPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (cardData.number && !cardNumberPattern.test(cardData.number)) {
      newErrors.number = 'Card number format is invalid';
    }

    const expiryMonthPattern = /^(0[1-9]|1[0-2])$/;
    const expiryYearPattern = /^\d{2}$/;
    if (cardData.expiryMonth && !expiryMonthPattern.test(cardData.expiryMonth)) {
      newErrors.expiryMonth = 'Expiry month format should be MM';
    }
    if (cardData.expiryYear && !expiryYearPattern.test(cardData.expiryYear)) {
      newErrors.expiryYear = 'Expiry year format should be YY';
    }

    if (cardData.cvc && (cardData.cvc.length < 3 || cardData.cvc.length > 4)) {
      newErrors.cvc = 'CVV should be 3 or 4 digits';
    }

    if (upi && !upi.includes('@')) {
      newErrors.upi = 'UPI ID must contain "@"';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8080/api/payments/add', {
          name: cardData.name,
          number: cardData.number,
          expiryMonth: cardData.expiryMonth,
          expiryYear: cardData.expiryYear,
          cvc: cardData.cvc,
          phone: phone,
          upi: upi
        });

        if (response.status === 200) {
          setSuccessMessage('Payment successful!');
          setTimeout(() => {
            navigate('/success');
          }, 2000);
        }
      } catch (error) {
        console.error('There was an error processing your payment!', error);
      }
    }
  };

  return (
    <div className="payment-container">
      <form onSubmit={validateForm}>
        <h2>Payment Details</h2>
        <div className="input-group">
          <label htmlFor="name">Name on card</label>
          <input
            type="text"
            id="name"
            name="name"
            value={cardData.name}
            onChange={handleInputChange}
            onFocus={handleFocusChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-message"><FontAwesomeIcon icon={faInfoCircle} /> {errors.name}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="number">Card Number</label>
          <input
            type="text"
            id="number"
            name="number"
            value={cardData.number}
            onChange={handleInputChange}
            onFocus={handleFocusChange}
            placeholder="1234-5678-1234-5678"
            className={errors.number ? 'input-error' : ''}
          />
          {errors.number && <span className="error-message"><FontAwesomeIcon icon={faInfoCircle} /> {errors.number}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="expiryMonth">Expiry Month</label>
          <input
            type="text"
            id="expiryMonth"
            name="expiryMonth"
            value={cardData.expiryMonth}
            onChange={handleInputChange}
            onFocus={handleFocusChange}
            placeholder="MM"
            className={errors.expiryMonth ? 'input-error' : ''}
          />
          {errors.expiryMonth && <span className="error-message"><FontAwesomeIcon icon={faInfoCircle} /> {errors.expiryMonth}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="expiryYear">Expiry Year</label>
          <input
            type="text"
            id="expiryYear"
            name="expiryYear"
            value={cardData.expiryYear}
            onChange={handleInputChange}
            onFocus={handleFocusChange}
            placeholder="YY"
            className={errors.expiryYear ? 'input-error' : ''}
          />
          {errors.expiryYear && <span className="error-message"><FontAwesomeIcon icon={faInfoCircle} /> {errors.expiryYear}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="cvc">CVV</label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            value={cardData.cvc}
            onChange={handleInputChange}
            onFocus={handleFocusChange}
            className={errors.cvc ? 'input-error' : ''}
          />
          {errors.cvc && <span className="error-message"><FontAwesomeIcon icon={faInfoCircle} /> {errors.cvc}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={setPhone}
            inputClass={errors.phone ? 'input-error' : ''}
          />
          {errors.phone && <span className="error-message"><FontAwesomeIcon icon={faInfoCircle} /> {errors.phone}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="upi">UPI ID</label>
          <input
            type="text"
            id="upi"
            name="upi"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            onFocus={handleFocusChange}
            className={errors.upi ? 'input-error' : ''}
          />
          {errors.upi && <span className="error-message"><FontAwesomeIcon icon={faInfoCircle} /> {errors.upi}</span>}
        </div>
        <button type="submit">Submit Payment</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
      <div className="payment-icons">
        <FontAwesomeIcon icon={faCcVisa} size="2x" />
        <FontAwesomeIcon icon={faCcMastercard} size="2x" />
        <FontAwesomeIcon icon={faCcAmex} size="2x" />
        <FontAwesomeIcon icon={faCcPaypal} size="2x" />
      </div>
    </div>
  );
};

export default Payment;

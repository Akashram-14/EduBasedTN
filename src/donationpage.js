import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './donationpage.css';
import PreHeader from './preheader';
import Footer from './footer';

const DonationPage = () => {
  const { t } = useTranslation();
  const [donation, setDonation] = useState({ amount: '', name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation({ ...donation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (donation.amount && donation.name && donation.email) {
      console.log('Donation details:', donation);
      setSubmitted(true);
      // Here you would handle the actual submission to the server or payment processor
    }
  };

  return (
    <div className="donation-page">
      <PreHeader />
      <div className="donation-container">
        <h2>{t('Make a Donation')}</h2>
        {submitted ? (
          <p>{t('Thank you for your donation!')}</p>
        ) : (
          <form onSubmit={handleSubmit} className="donation-form">
            <div className="form-group">
              <label htmlFor="name">{t('Name')}:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={donation.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('Email')}:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={donation.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">{t('Donation Amount')}:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={donation.amount}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="donate-button">{t('Donate')}</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DonationPage;

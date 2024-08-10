import React, { useState } from 'react';
import './righttoinfo.css'; // Import CSS for styling
import PreHeader from './preheader';
import Footer from './footer';

const RTIRequest = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [department, setDepartment] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [query, setQuery] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      address,
      email,
      mobile,
      subject,
      department,
      preferredLanguage,
      query,
      additionalInfo,
    };

    fetch('http://localhost:8080/api/rti/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('RTI Request Submitted!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <PreHeader />
      <div className="rti-request-container">
        <h1>Right to Information Request</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Preferred Language:</label>
            <input
              type="text"
              value={preferredLanguage}
              onChange={(e) => setPreferredLanguage(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Query:</label>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Additional Information:</label>
            <textarea
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit Request</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RTIRequest;

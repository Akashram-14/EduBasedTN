import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './staffportfolio.css';
import PreHeader from './preheader';
import Footer from './footer';
import clg from './College.jpg';

const StaffPortfolio = () => {
  const { t } = useTranslation();
  const [staffInfo, setStaffInfo] = useState({
    Name: 'Akash R',
    StaffId: '727822TUIT012',
    Subject: 'DPA',
    classAndSection: 'IT - A',
    address: '20 , SKCT , Coimbatore',
    School: 'SKCT',
    Achievements: 'Helped 14 students relocate to Canada',
    Awards: 'Best Teacher Award 2024'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffInfo({
      ...staffInfo,
      [name]: value
    });
  };

  return (
    <div className="staff-portfolio-page">
      <PreHeader />
      <div className="staff-portfolio-container">
        <div className="staff-photo-container">
          <img src={clg} alt="Staff" className="staff-photo" />
        </div>
        <div className="staff-info">
          {Object.keys(staffInfo).map((field, index) => (
            <div key={index} className="detail-box">
              <p className="label">{t(field.replace(/([A-Z])/g, ' $1'))}:</p>
              <input
                type="text"
                name={field}
                value={staffInfo[field]}
                onChange={handleChange}
                className="value"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StaffPortfolio;

import React from 'react';
import { useTranslation } from 'react-i18next';
import './studentportfolio.css';
import PreHeader from './preheader';
import Footer from './footer';
import clg from './College.jpg';
import { useLocation } from 'react-router-dom';

const StudentPortfolio = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const studentData = location.state?.studentData; // Optional chaining to prevent errors

  return (
    <div className="student-portfolio-page">
      <PreHeader />
      <div className="student-portfolio-container">
        <div className="student-photo-container">
          <img src={clg} alt="Student" className="student-photo" />
        </div>
        <div className="student-info">
          {studentData ? (
            Object.keys(studentData).map((field, index) => (
              <div key={index} className="detail-box">
                <p className="label">{t(field.replace(/([A-Z])/g, ' $1').trim())}:</p>
                <input
                  type="text"
                  name={field}
                  value={studentData[field]}
                  className="value"
                  readOnly
                />
              </div>
            ))
          ) : (
            <p>{t('No student data available')}</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentPortfolio;

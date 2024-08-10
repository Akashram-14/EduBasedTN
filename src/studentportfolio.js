import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './studentportfolio.css';
import PreHeader from './preheader';
import Footer from './footer';
import clg from './College.jpg';

const StudentPortfolio = () => {
  const { t } = useTranslation();
  const [studentData, setStudentData] = useState({
    Name: 'John Doe',
    RollNo: '123456',
    ClassSection: '10-A',
    Address: '123 Main St, City, State',
    School: 'ABC High School',
    Tamil: '95',
    English: '88',
    Maths: '92',
    History: '90',
    Science: '85',
    AcademicPercentage: '90%',
    OverallPercentage: '88%',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  return (
    <div className="student-portfolio-page">
      <PreHeader />
      <div className="student-portfolio-container">
        <div className="student-photo-container">
          <img src={clg} alt="Student" className="student-photo" />
        </div>
        <div className="student-info">
          {Object.keys(studentData).map((field, index) => (
            <div key={index} className="detail-box">
              <p className="label">{t(field.replace(/([A-Z])/g, ' $1').trim())}:</p>
              <input
                type="text"
                name={field}
                value={studentData[field]}
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

export default StudentPortfolio;

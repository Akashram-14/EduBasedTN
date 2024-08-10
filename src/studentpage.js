import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './studentpage.css'; // Assuming you will add styles here
import PreHeader from './preheader';
import Footer from './footer';
import { Link } from 'react-router-dom';
import clg from './College.jpg';

const StudentPage = () => {
  const { t } = useTranslation();

  const [studentInfo, setStudentInfo] = useState({
    name: 'John Doe',
    rollNo: '727822TUIT012',
    class: '10th Grade',
    section: 'A',
    subjects: [
      { name: 'Math', mark: '98' },
      { name: 'Science', mark: '99' },
      { name: 'English', mark: '100' },
      { name: 'History', mark: '97' },
      { name: 'Geography', mark: '96' },
    ],
    academicRanking: '1',
    overallPercentage: '99%',
  });

  return (
    <div className="student-page">
      <PreHeader />
      <div className="student-info-container">
        <div className="student-photo-container">
          <img src={clg} alt="Student" className="student-photo" />
        </div>
        <div className="student-info">
          <div className="details">
            {[
              { label: 'Name', value: studentInfo.name },
              { label: 'Roll No', value: studentInfo.rollNo },
              { label: 'Class', value: studentInfo.class },
              { label: 'Section', value: studentInfo.section },
              { label: 'Academic Ranking', value: studentInfo.academicRanking },
              { label: 'Overall Percentage', value: studentInfo.overallPercentage },
            ].map((field, index) => (
              <div key={index} className="detail-box">
                <p className="label">{t(field.label)}:</p>
                <p className="value">{field.value}</p>
              </div>
            ))}
            {studentInfo.subjects.map((subject, index) => (
              <div key={index} className="detail-box">
                <p className="label">{t(subject.name)}:</p>
                <p className="value">{subject.mark}</p>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button className="result-button">
              <Link to="/result" id="button1">{t('View Result')}</Link>
            </button>
            <button className="tasks-button">
              <Link to="/task" id="button1">{t('View Tasks and Events')}</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentPage;

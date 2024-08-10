import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './resultpage.css'; // Assuming you will add styles here
import PreHeader from './preheader';
import Footer from './footer';

const ResultPage = () => {
  const { t } = useTranslation();
  const [subjects, setSubjects] = useState([
    { name: 'Math', mark: '98' },
    { name: 'Science', mark: '99' },
    { name: 'English', mark: '100' },
    { name: 'History', mark: '97' },
    { name: 'Geography', mark: '96' }
  ]);

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = subjects.map((subject, i) => 
      i === index ? { ...subject, [field]: value } : subject
    );
    setSubjects(updatedSubjects);
  };

  return (
    <div className="result-page">
      <PreHeader />
      <div className="result-info-container">
        <div className="result-info">
          <div className="detail-box">
            <p className="label">{t('Roll No')}:</p>
            <p className="value">727822TUIT012</p>
          </div>
          {subjects.map((subject, index) => (
            <div key={index} className="detail-box">
              <input
                type="text"
                name={`subjectName${index}`}
                value={subject.name}
                onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
                className="value subject-name"
                placeholder={t(`Subject ${index + 1}`)}
              />
              <input
                type="text"
                name={`subjectMark${index}`}
                value={subject.mark}
                onChange={(e) => handleSubjectChange(index, 'mark', e.target.value)}
                className="value subject-mark"
                placeholder={t('Mark')}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;

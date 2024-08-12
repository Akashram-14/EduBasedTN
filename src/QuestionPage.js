import React from 'react';
import { useTranslation } from 'react-i18next';
import './QuestionPage.css';
import PreHeader from './preheader';
import Footer from './footer';

const QuestionPapers = ({ standard }) => {
  const { t } = useTranslation();

  // Assuming you have an object containing links to question paper PDFs
  const papers = {
    math: '/path/to/math.pdf',
    science: '/path/to/science.pdf',
    english: '/path/to/english.pdf',
    history: '/path/to/history.pdf',
    geography: '/path/to/geography.pdf',
  };

  return (
    <div className="question-papers-page">
      <PreHeader />
      <div className="question-papers-container">
        {Object.keys(papers).map((subject, index) => (
          <div key={index} className="paper-box">
            <a href={papers[subject]} download>
              {t(subject.charAt(0).toUpperCase() + subject.slice(1))}
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default QuestionPapers;

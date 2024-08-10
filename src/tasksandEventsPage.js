import React from 'react';
import { useTranslation } from 'react-i18next';
import './tasksandEventsPage.css';
import PreHeader from './preheader';
import Footer from './footer';

const TasksAndEventsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="tasks-events-page">
      <PreHeader />
      <div className="content-container">
        <div className="tasks-events-box">
          <div className="tasks-section">
            <h2>{t('Tasks')}</h2>
            <ul>
              <li>Complete homework on Algebra</li>
              <li>Prepare for Science quiz</li>
              <li>Submit History project</li>
              <li>Read Chapter 5 of English textbook</li>
            </ul>
          </div>
          <div className="events-section">
            <h2>{t('Events')}</h2>
            <ul>
              <li>Science Fair - 30th July</li>
              <li>Sports Day - 5th August</li>
              <li>Parent-Teacher Meeting - 10th August</li>
              <li><a href="https://www.tnschools.gov.in/upcoming-events" target="_blank" rel="noopener noreferrer">Upcoming Events</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TasksAndEventsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './tasksandEventsPage.css';
import PreHeader from './preheader';
import Footer from './footer';

const TasksAndEventsPage = () => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('There was an error fetching the tasks!', error));
  }, []);

  const newTasks = tasks.filter(task => !task.completed);

  return (
    <div className="tasks-events-page">
      <PreHeader />
      <center>
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
          <div className="new-tasks-section">
            <h2>{t('New Tasks')}</h2>
            <ul>
              {newTasks.map(task => (
                <li key={task.id}>{task.text}</li>
              ))}
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
      </center>
      <Footer />
    </div>
  );
};

export default TasksAndEventsPage;
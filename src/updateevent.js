import React, { useState } from 'react';
import './updateevent.css';
import PreHeader from './preheader';
import Footer from './footer';

const UpdateEvents = () => {
  const initialEvents = [
    {
      id: 1,
      school: 'ABC High School',
      event: 'Science Fair',
      date: 'August 15, 2024',
      description: 'Join us for an exciting day of science experiments and displays by students.',
    },
    {
      id: 2,
      school: 'XYZ Middle School',
      event: 'Art Exhibition',
      date: 'September 20, 2024',
      description: 'Come and see the amazing artwork created by our talented students.',
    },
    {
      id: 3,
      school: 'LMN Elementary School',
      event: 'Sports Day',
      date: 'October 10, 2024',
      description: 'A fun-filled day of sports activities and competitions for all grades.',
    },
    {
      id: 4,
      school: 'PQR High School',
      event: 'Drama Night',
      date: 'November 12, 2024',
      description: 'An evening of theatrical performances by our students.',
    },
    {
      id: 5,
      school: 'STU Middle School',
      event: 'Music Concert',
      date: 'December 5, 2024',
      description: 'A concert showcasing the musical talents of our students.',
    },
    {
      id: 6,
      school: 'VWX Elementary School',
      event: 'Math Olympiad',
      date: 'January 8, 2025',
      description: 'A competitive math event for students from various grades.',
    }
  ];

  const [events, setEvents] = useState(initialEvents);
  const [editingEventId, setEditingEventId] = useState(null);
  const [formData, setFormData] = useState({
    school: '',
    event: '',
    date: '',
    description: ''
  });

  const handleEditClick = (event) => {
    setEditingEventId(event.id);
    setFormData({
      school: event.school,
      event: event.event,
      date: event.date,
      description: event.description
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveClick = () => {
    setEvents(events.map(event => (
      event.id === editingEventId ? { ...event, ...formData } : event
    )));
    setEditingEventId(null);
    setFormData({
      school: '',
      event: '',
      date: '',
      description: ''
    });
  };

  return (
    <div>
      <PreHeader />
      <div className="App">
        <div className="events-container">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              {editingEventId === event.id ? (
                <>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <button onClick={handleSaveClick}>Save</button>
                </>
              ) : (
                <>
                  <h2>{event.school}</h2>
                  <h3>{event.event}</h3>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p>{event.description}</p>
                  <button onClick={() => handleEditClick(event)}>Edit</button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateEvents;

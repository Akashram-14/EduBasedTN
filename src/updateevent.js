import React, { useState, useEffect } from 'react';
import './updateevent.css';
import PreHeader from './preheader';
import Footer from './footer';
import { FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa';

const UpdateEvents = () => {
  const [events, setEvents] = useState([]);
  const [editingEventId, setEditingEventId] = useState(null);
  const [formData, setFormData] = useState({
    school: '',
    event: '',
    date: '',
    description: ''
  });
  const [showAddEvent, setShowAddEvent] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

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

  const handleSaveClick = async () => {
    const updatedEvent = {
      id: editingEventId,
      ...formData,
    };

    // Send the updated event to the backend
    try {
      await fetch(`http://localhost:8080/api/events/${editingEventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEvent),
      });

      setEvents(events.map(event => (event.id === editingEventId ? updatedEvent : event)));
      setEditingEventId(null);
      setFormData({ school: '', event: '', date: '', description: '' });
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleAddEventClick = () => {
    setShowAddEvent(true);
    setFormData({ school: '', event: '', date: '', description: '' });
  };

  const handleAddSaveClick = async () => {
    const newEvent = {
      school: formData.school,
      event: formData.event,
      date: formData.date,
      description: formData.description
    };

    try {
      const response = await fetch('http://localhost:8080/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      const addedEvent = await response.json();
      setEvents([...events, addedEvent]);
      setShowAddEvent(false);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div>
      <PreHeader />
      <div className="App">
        <button onClick={handleAddEventClick} className="add-event-button">Add Event</button>

        <center>
          {showAddEvent && (
            <div className="event-card">
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="School Name"
              />
              <input
                type="text"
                name="event"
                value={formData.event}
                onChange={handleChange}
                placeholder="Event Name"
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
                placeholder="Event Description"
              />
              <button onClick={handleAddSaveClick}>Save</button>
            </div>
          )}
        </center>

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

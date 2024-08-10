import React, { useState } from 'react';
import PreHeader from './preheader';
import Footer from './footer';
import './individualattend.css';

const generateYearlyAttendance = () => {
  const attendance = {};
  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(2024, month + 1, 0).getDate();
    attendance[month] = Array(daysInMonth).fill(false).map(() => Math.random() > 0.5);
  }
  return attendance;
};

const IndividualAttend = () => {
  const [attendance, setAttendance] = useState(generateYearlyAttendance());
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleAttendanceToggle = (month, day) => {
    const newAttendance = { ...attendance };
    newAttendance[month][day] = !newAttendance[month][day];
    setAttendance(newAttendance);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const renderAttendance = () => {
    const date = new Date(selectedDate);
    const month = date.getMonth();
    const dayCount = new Date(date.getFullYear(), month + 1, 0).getDate();

    return Array.from({ length: dayCount }, (_, index) => (
      <div key={index} className="attendance-row">
        <div className="attendance-date">{new Date(date.getFullYear(), month, index + 1).toLocaleDateString()}</div>
        <div
          className={`attendance-status ${attendance[month][index] ? 'present' : 'absent'}`}
          onClick={() => handleAttendanceToggle(month, index)}
        >
          {attendance[month][index] ? 'Present' : 'Absent'}
        </div>
      </div>
    ));
  };

  return (
    <div>
      <PreHeader />
      <div className="attendance-container">
        <h1>Individual Attendance</h1>
        <div className="student-info">
          <p>Name: John Doe</p>
          <p>Class: 10</p>
          <p>Section: A</p>
        </div>
        <div className="date-selector">
          <label>Select Date: </label>
          <input type="date" value={selectedDate} onChange={handleDateChange} />
        </div>
        <div className="attendance-list">
          {renderAttendance()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualAttend;

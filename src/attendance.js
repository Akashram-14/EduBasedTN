import React, { useState } from 'react';
import './attendance.css';
import PreHeader from './preheader'; 
import Footer from './footer'; 

const AttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState('2024-07-01');
  const [selectedClass, setSelectedClass] = useState('1');
  const [selectedSection, setSelectedSection] = useState('A');
  const [attendanceData, setAttendanceData] = useState(null); 

  const generateMockData = () => {
    const students = Array.from({ length: 30 }, (_, i) => ({
      rollNo: i + 1,
      present: Math.random() > 0.3, 
    }));

    return {
      date: selectedDate,
      class: selectedClass,
      section: selectedSection,
      students,
    };
  };

  const handleSearch = () => {
    const data = generateMockData();
    setAttendanceData(data); 
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleSectionChange = (e) => {
    setSelectedSection(e.target.value);
  };

  return (
    <>
      <PreHeader /> 
      <div className="attendance-page">
        <div className="attendance-controls">
          <label>
            Date:
            <input type="date" value={selectedDate} onChange={handleDateChange} />
          </label>
          <label>
            Class:
            <select value={selectedClass} onChange={handleClassChange}>
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </label>
          <label>
            Section:
            <select value={selectedSection} onChange={handleSectionChange}>
              {['A', 'B', 'C', 'D', 'E', 'F'].map((section) => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>
          </label>
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        {attendanceData ? ( 
          <div className="attendance-day">
            <h3>{attendanceData.date}</h3>
            <div className="attendance-class">
              <span>Class: {attendanceData.class}</span>
              <span>Section: {attendanceData.section}</span>
            </div>
            <div className="attendance-students">
  {attendanceData.students.map((student, index) => (
    <div key={index} className={`student-attendance ${index === 28 ? 'roll-29' : ''} ${index === 29 ? 'roll-30' : ''}`}>
      <span>Roll No: {student.rollNo}</span>
      <div
        className="attendance-box"
        style={{ backgroundColor: student.present ? 'green' : 'red' }}
      ></div>
    </div>
  ))}
</div>

          </div>
        ) : (
          <p>No attendance data available for the selected date, class, and section.</p>
        )}
      </div>
      <Footer /> 
    </>
  );
};

export default AttendancePage;

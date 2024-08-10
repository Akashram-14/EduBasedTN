import React from 'react';
import './staffpage.css';
import PreHeader from './preheader'; // Ensure the path is correct
import Footer from './footer'; // Ensure the path is correct
import { Link } from 'react-router-dom';
import clg from "./College.jpg";

const StaffPage = () => {
  return (
    <>
      <PreHeader /> {/* Include the PreHeader component */}
      <div className="staff-page">
        <div className="staff-portfolio">
          <img src={clg} alt="Staff" className="staff-photo" />
          <div className="staff-details">
            <h2>Staff Name</h2>
            <p>Position: Teacher</p>
            <p>Department: Mathematics</p>
          </div>
        </div>
        <div className="staff-actions">
          <div className="action-box">
            <h3>View Student Portfolio</h3>
            <input type="text" placeholder="Enter Student Roll No" />
            <button><Link to='/studentport' id='button1'>Enter</Link></button>
          </div>
          <div className="action-box">
            <h3>Update Tasks</h3>
            <button><Link to='/update' id='button1'>Enter</Link></button>
          </div>
          <div className="action-box">
            <h3>View Attendance</h3>
            <button><Link to='/attendance' id='button1'>Attendance of the day</Link></button><br/>
            <input type="text" placeholder="Enter Student Roll No" />
            <button><Link to='/individualattend' id='button1'>View Attendance</Link></button>
          </div>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default StaffPage;

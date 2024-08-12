// adminpage.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './adminpage.css'; 
import PreHeader from './preheader';
import Footer from './footer';
import { Link, useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const { t } = useTranslation();
  const [rollNo, setRollNo] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/student?rollNo=${rollNo}`);
      if (response.ok) {
        const studentData = await response.json();
        navigate('/studentport', { state: { studentData } }); // Navigate to the student portfolio page
      } else {
        alert('Student not found');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="admin-page">
      <PreHeader />
      <div className="admin-content">
        <div className="admin-section">
          <h2>{t('Register New User')}</h2>
          <button className="enter-button"><Link to='/register' id='button1'>{t('Register')}</Link></button>
        </div>
        <div className="admin-section">
          <h2>{t('View Student Portfolio')}</h2>
          <div className="input-group">
            <input 
              type="text" 
              placeholder={t('Enter Roll No')} 
              className="input-box" 
              value={rollNo} 
              onChange={(e) => setRollNo(e.target.value)} 
              required
            />
            <button className="enter-button" onClick={handleSearch}>{t('Enter')}</button>
          </div>
        </div>
        <div className="admin-section">
          <h2>{t('View Staff Portfolio')}</h2>
          <div className="input-group">
            <input type="text" placeholder={t('Enter Staff ID')} className="input-box" required/>
            <button className="enter-button" required><Link to='/staffport' id='button1'>{t('Enter')}</Link></button>
          </div>
        </div>
        <div className="admin-section">
          <h2>{t('Update Event List')}</h2>
          <button className="enter-button"><Link to='/updateevent' id='button1'>{t('Enter')}</Link></button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;

import React from 'react';
import { useTranslation } from 'react-i18next';
import './adminpage.css'; // Assuming you will add styles here
import PreHeader from './preheader';
import Footer from './footer';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const { t } = useTranslation();

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
            <input type="text" placeholder={t('Enter Roll No')} className="input-box" required/>
            <button className="enter-button" required><Link to='/studentport' id='button1'>{t('Enter')}</Link></button>
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

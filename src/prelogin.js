import React from 'react';
import './prelogin.css';
import Header from './preheader';
import Footer from './footer';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PreLogin = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <section className="info-section">
          <div className="info-box">
            <div className="icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvYiw3pXHtUwd_rM15lgfiLbaFFP9u9L3ng&s" alt="Students" />
            </div>
            <div className="info-text">
              <p className="info-title">Students</p>
              <p className="info-count">5275203</p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon">
              <img src="https://thumbs.dreamstime.com/b/teacher-concept-illustration-icon-isolated-white-background-simple-vector-logo-teacher-concept-illustration-icon-isolated-181941315.jpg" alt="Teachers" />
            </div>
            <div className="info-text">
              <p className="info-title">Teachers</p>
              <p className="info-count">225400</p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon">
              <img src="https://tnschools.gov.in/assets/new-images/coloured_icons/schools.png" alt="Schools" />
            </div>
            <div className="info-text">
              <p className="info-title">Schools</p>
              <p className="info-count">37554</p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon">
              <img src="https://tnschools.gov.in/assets/new-images/coloured_icons/administrator.png" alt="Admins" />
            </div>
            <div className="info-text">
              <p className="info-title">Admins</p>
              <p className="info-count">14709</p>
            </div>
          </div>
        </section>
        <section className="banner-content">
          <h1 id='content'>To Ensure Standard Education For Every Student</h1>
          <button id='button2'>Join Us</button>
        </section>
        <section className="links-section">
          <div className="link-box">
            <img src="https://tnschools.gov.in/assets/new-images/coloured_icons/student.png" alt="Student Login" />
            <button><Link to ='/studentlogin' id ='button1'>{t('Student Login')}</Link></button>
          </div>
          <div className="link-box">
            <img src="https://tnschools.gov.in/assets/new-images/coloured_icons/Teacher.png" alt="Staff Login" />
            <button><Link to = '/stafflogin' id='button1'>{t('Staff Login')}</Link></button>
          </div>
          <div className="link-box">
            <img src="https://tnschools.gov.in/assets/new-images/coloured_icons/administrator.png" alt="Admin Login" />
            <button><Link to = '/adminlogin' id='button1'>{t('Admin Login')}</Link></button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PreLogin;

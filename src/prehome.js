import React from 'react';
import './prehome.css';
import Header from './preheader';
import Footer from './footer';

const PreHome = () => {
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
        <section className="banner-content8">
          <h1 id='content1'>To Ensure standard Education for All Students</h1>
          <button>Join Us</button>
        </section>
        <section className="links-section">
          <div className="link-box">
            <img src="https://tnschools.gov.in/assets/new-images/coloured_icons/6.png" alt="Question Bank" />
            <p>Assessment - 40 Years Question Bank</p>
          </div>
          <div className="link-box">
            <img src="https://tnschools.gov.in/assets/new-images/coloured_icons/1.png" alt="Ministry of Education" />
            <p>Ministry Of Education, Government of India</p>
          </div>
          <div className="link-box">
            <img src="https://tnschools.gov.in/assets/new-images/coloured_icons/2.png" alt="Open Schooling" />
            <p>National Institute of Open Schooling</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PreHome;

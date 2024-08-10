import React from 'react';
import './home.css';
import Header from './header';
import Footer from './footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <section className="banner">
          <div className="banner-content">
            <h1 id='content1'>Welcome to Tamil Nadu Schools</h1>
            <p>Education for All</p>
          </div>
        </section>
        <section className="info-section">
          <div className="info-box">
            <h2>Our Vision</h2>
            <p>Providing quality education for everyone.</p>
          </div>
          <div className="info-box">
            <h2>Our Mission</h2>
            <p>Ensuring accessible education across the state.</p>
          </div>
          <div className="info-box">
            <h2>Programs</h2>
            <p>Innovative educational programs for all age groups.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

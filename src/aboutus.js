import React from 'react';
import { useTranslation } from 'react-i18next';
import './aboutus.css';
import Footer from './footer';
import PreHeader from './preheader';
import clg from './College.jpg';
import ajain from './ajain.jpg';
import afrah from './afrah.jpg';
import saliha from './saliha.jpg';

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="missions-page">
      <PreHeader/>
      <header className="header">
        <h1>{t('Missions')}</h1>
      </header>
      <section className="mission" id="content">
        <p>{t('content')}</p>
      </section>
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src={clg} alt="Team Member 1" />
            <h3>Member 1</h3>
            <p>Project Manager</p>
          </div>
          <div className="team-member">
            <img src={afrah} alt="Team Member 2" />
            <h3>Member 2</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src={saliha} alt="Team Member 3" />
            <h3>Member 3</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img src={ajain} alt="Team Member 4" />
            <h3>Member 4</h3>
            <p>QA Specialist</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUs;

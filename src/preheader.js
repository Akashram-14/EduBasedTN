import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './preheader.css';
import logoEn from './edubasedtn-high-resolution-logo-transparent.png'; // English logo
import logoTa from './edubasedtn-high-resolution-logo-transparent.png'; // Tamil logo
import { Link } from 'react-router-dom';

const PreHeader = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en'); // Initial language

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng); // Update language state
  };

  return (
    <header className="header">
      <div className="header-top">
        <Link to='/home'><img src={language === 'en' ? logoEn : logoTa} alt="Tamil Nadu Logo" className="logo" /></Link>
        <div className="header-text">
          <h1>{t('department_of_school_education')}</h1>
          <h2>{t('government_of_tamil_nadu')}</h2>
        </div>
      </div>
      <nav className="header-nav">
        <Link to='/aboutus'>{t('about_us')}</Link>
        <Link to='/directorates'>{t('directorates')}</Link>
        <a href="#">{t('special_initiatives')}</a>
        <Link to='/righttoinfo'>{t('right_to_information')}</Link>
        <Link to='https://tnschools.gov.in/press-release'>{t('academics')}</Link>
        <a href="#"><Link to='/donate'>{t('donate_to_namma_school')}</Link></a>
        <div className="language-switch" onClick={() => switchLanguage(language === 'en' ? 'ta' : 'en')}>
          <span>{language === 'en' ? 'அ' : 'A'}</span>
        </div>
      </nav>
    </header>
  );
};

export default PreHeader;

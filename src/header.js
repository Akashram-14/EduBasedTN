import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './header.css';
import logoEn from './edubasedtn-high-resolution-logo-transparent.png'; 
import logoTa from './edubasedtn-high-resolution-logo-transparent.png'; 
import { Link } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en'); 

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng); 
  };

  return (
    <header className="header">
      <div className="header-top">
        <Link to='/'><img src={language === 'en' ? logoEn : logoTa} alt="Tamil Nadu Logo" className="logo" /></Link>
        <div className="header-text">
          <h1>{t('department_of_school_education')}</h1>
          <h2>{t('government_of_tamil_nadu')}</h2>
        </div>
        <div className="auth-buttons">
          <button><Link to = '/login' id='button1'>{t('login')}</Link></button>
        </div>
      </div>
      <nav className="header-nav">
        <a href="#"><Link to='/aboutus'>{t('about_us')}</Link></a>
        <a href="#"><Link to='/directorates'>{t('directorates')}</Link></a>
        <a href="#"><Link to='/translate'>{t('special_initiatives')}</Link></a>
        <a href="#"><Link to='/righttoinfo'>{t('right_to_information')}</Link></a>
        <a href="#"><Link to='/standards'>{t('academics')}</Link></a>
        <a href="#"><Link to='/donate'>{t('donate_to_namma_school')}</Link></a>
        <div className="language-switch" onClick={() => switchLanguage(language === 'en' ? 'ta' : 'en')}>
          <span>{language === 'en' ? 'அ' : 'A'}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

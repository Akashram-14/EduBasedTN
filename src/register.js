import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faSchool, faCalendarDays, faKey } from '@fortawesome/free-solid-svg-icons';
import logo from './edubasedtn-high-resolution-logo-transparent.png'; // Replace with the path to your logo
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const districts = ['Coimbatore', 'Erode', 'Chennai'];
const areas = {
  'Coimbatore': ['Avinashi', 'Coimbatore(South)', 'Coimbatore(North)', 'Mettupalayam', 'Palladam', 'Pollachi', 'Thiruppur', 'Udumalepet', 'Valparai'],
  'Erode': ['Bhavani', 'Erode', 'Gobichettiplayam', 'Perundurai', 'Sathyamangalam'],
  'Chennai': ['Adyar', 'Alandur', 'Ambattur', 'Anna nagar', 'Kodambakkam', 'Madhavaram', 'Manali', 'Perungudi', 'Royapuram', 'SozhanGanallur', 'Teynampet', 'Thiru-vi-ka nagar', 'Thiruvotriyur', 'Tondiarpet', 'Valasaravakkam'],
};

const RegistrationPage = () => {
  const { t, i18n } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState(''); // Changed from phoneNumber to username
  const [district, setDistrict] = useState('');
  const [school, setSchool] = useState('');
  const [availableSchools, setAvailableSchools] = useState([]);
  const [classAndSection, setClassAndSection] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('en'); // Initial language
  const navigate = useNavigate();

  useEffect(() => {
    setAvailableSchools(districts.includes(district) ? areas[district] : []);
  }, [district]);

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'en' ? 'ta' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        firstName,
        lastName,
        username,
        district,
        school,
        classAndSection,
        password
      };
      console.log('User Data:', userData); // Log user data before sending
  
      const response = await axios.post('http://localhost:8080/api/users/register', userData);
      console.log(response.data);
      navigate('/home'); // Navigate to home on successful registration
    } catch (error) {
      // Check if error response exists
      if (error.response) {
        console.error('Registration failed:', error.response.data); // Log error response
        alert('Registration failed! ' + error.response.data); // Alert for registration failure with server message
      } else {
        console.error('There was an error registering the user!', error.message); // Log general error message
        alert('Registration failed! Please try again.'); // Alert for registration failure without specific error
      }
    }
  };
  
  return (
    <div className="registration-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="registration-page">
        <div className="language-switch-button" onClick={handleLanguageSwitch}>
          {language === 'en' ? 'அ' : 'A'}
        </div>
        <h1>{t('registration_page')}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group4">
            <label id='name'>
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              {t('first_name')}:
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group4">
            <label id='name'>
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              {t('last_name')}:
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group4">
            <label id='username'>
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              {t('username')}:
            </label>
            <input
              type="text"
              value={username} // Using username state
              onChange={(e) => setUsername(e.target.value)} // Update username state
              required
            />
          </div>
          <div className="form-group4">
            <label>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
              {t('district')}:
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            >
              <option value="">{t('select_district')}</option>
              {districts.map((dist, index) => (
                <option key={index} value={dist}>{dist}</option>
              ))}
            </select>
          </div>
          <div className="form-group4">
            <label>
              <FontAwesomeIcon icon={faSchool} className="input-icon" />
              {t('school')}:
            </label>
            <select
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              required
            >
              <option value="">{t('select_school')}</option>
              {availableSchools.map((school, index) => (
                <option key={index} value={school}>{school}</option>
              ))}
            </select>
          </div>
          <div className="form-group4">
            <label id='classAndSection'>
              <FontAwesomeIcon icon={faCalendarDays} className="input-icon" />
              {t('Class and Section')}:
            </label>
            <input
              type="text"
              value={classAndSection}
              onChange={(e) => setClassAndSection(e.target.value)}
              required
            />
          </div>
          <div className="form-group4">
            <label id='password'>
              <FontAwesomeIcon icon={faKey} className="input-icon" />
              {t('Password')}:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">{t('create_unique_id')}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

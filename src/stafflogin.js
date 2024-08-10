import React, { useState } from 'react';
import './stafflogin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [isTamil, setIsTamil] = useState(false);
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const toggleLanguage = () => {
    setIsTamil(!isTamil);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', null, {
        params: {
          username: userID,
          password,
        },
      });
      if (response.status === 200) {
        // Redirect to the staff page upon successful login
        navigate('/staffpage');
      }
    } catch (error) {
      setErrorMessage('Invalid User ID or Password'); // Display error if login fails
    }
  };

  return (
    <div className={`login-container ${isTamil ? 'tamil' : 'english'}`}>
      <button className="language-toggle" onClick={toggleLanguage}>
        {isTamil ? 'A' : 'அ'}
      </button>
      <h2>{isTamil ? 'உள்நுழைவு' : 'Login'}</h2>
      <form className='form1' onSubmit={handleLogin}>
        <input
          type="text"
          placeholder={isTamil ? 'பயனர் ஐடி :' : 'User ID :'}
          className="input-field"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={isTamil ? 'கடவுச்சொல் :' : 'Password :'}
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="sign-in-button">
          {isTamil ? 'உள்நுழைய' : 'Sign in'}
        </button>
        <p className="powered-by">
          {isTamil ? 'மின்சாரம் மூலம்' : 'Powered by'} <a href="https://www.cdac.in/" target="_blank" rel="noopener noreferrer">C-DAC</a> | Version 2.0v
        </p>
      </form>
    </div>
  );
}

export default Login;

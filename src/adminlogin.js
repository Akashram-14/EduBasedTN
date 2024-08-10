import React, { useState } from 'react';
import './adminlogin.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
  const [isTamil, setIsTamil] = useState(false);
  const [username, setUsername] = useState('');
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
          username,
          password,
        },
      });

      if (response.status === 200) {
        // Redirect to admin page upon successful login
        navigate('/admin');
      }
    } catch (error) {
      setErrorMessage(isTamil ? 'தவறான பயனர் பெயர் அல்லது கடவுச்சொல்' : 'Invalid username or password');
    }
  };

  return (
    <div className={`login-container ${isTamil ? 'tamil' : 'english'}`}>
      <button className="language-toggle" onClick={toggleLanguage}>
        {isTamil ? 'A' : 'அ'}
      </button>
      <h2>{isTamil ? 'நிர்வாகி உள்நுழைவு' : 'Admin Login'}</h2>
      <form className='form1' onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder={isTamil ? 'பயனர் பெயர் :' : 'Username'} 
          className="input-field" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder={isTamil ? 'கடவுச்சொல் :' : 'Password'} 
          className="input-field" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="sign-in-button">{isTamil ? 'உள்நுழைய' : 'Sign in'}</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="powered-by">
          {isTamil ? 'மின்சாரம் மூலம்' : 'Powered by'} <a href="https://www.cdac.in/" target="_blank" rel="noopener noreferrer">C-DAC</a> | Version 2.0v
        </p>
      </form>
    </div>
  );
}

export default AdminLogin;

import React, { useState } from 'react';
import './studentlogin.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function StudentLogin() {
  const [isTamil, setIsTamil] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
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
        // Assuming a successful login redirects to the student page
        navigate('/studentpage');
      }
    } catch (error) {
      setError('Invalid username or password'); // Display error if login fails
    }
  };

  return (
    <div className={`login-container ${isTamil ? 'tamil' : 'english'}`}>
      <button className="language-toggle" onClick={toggleLanguage}>
        {isTamil ? 'A' : 'அ'}
      </button>
      <h2>{isTamil ? 'மாணவர் உள்நுழைவு' : 'Student Login'}</h2>
      <form className='form1' onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder={isTamil ? 'குறியீட்டு எண் :' : 'Username'} 
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
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <p className="powered-by">
          {isTamil ? 'மின்சாரம் மூலம்' : 'Powered by'} <a href="https://www.cdac.in/" target="_blank" rel="noopener noreferrer">C-DAC</a> | Version 2.0v
        </p>
      </form>
    </div>
  );
}

export default StudentLogin;

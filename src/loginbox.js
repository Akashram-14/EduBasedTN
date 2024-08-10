import React from 'react';
import './loginbox.css';
import Footer from './footer';
import Header from './header';

const LoginBoxes = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="container">
        <LoginBox text="Student Login" hoverText="This is for Student Login" />
        <LoginBox text="Staff Login" hoverText="This is for Staff Login" />
        <LoginBox text="Admin Login" hoverText="This is for Admin Login" />
      </div>
      <Footer />
    </div>
  );
};

const LoginBox = ({ text, hoverText }) => {
  const [line1, line2] = hoverText.split(' ', 3).concat(text).reduce((acc, word, i, arr) => {
    i < 3 ? acc[0].push(word) : acc[1].push(word);
    return acc;
  }, [[], []]);

  return (
    <div className="login-box">
      <span className="default-text">{text}</span>
      <span className="hover-text">
        <div>{line1.join(' ')}</div>
        <div>{line2.join(' ')}</div>
      </span>
    </div>
  );
};

export default LoginBoxes;
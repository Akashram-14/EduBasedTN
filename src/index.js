import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n.js';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import PreLogin from './prelogin.js';
// import PreHome from './prehome.js';
import Home from './home.js';
import RegistrationPage from './register.js';
// import AdminLogin from './adminlogin.js';
// import StaffLogin from './stafflogin.js';
// import StudentLogin from './studentlogin.js';
// import LoginBoxes from './loginbox';
// import Footer from './footer';
// import Login from './login';

import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

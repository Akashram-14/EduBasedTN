import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <span className="icon">&#128100;</span> CONTACT US
        <div className="social-icons">
          <a href="https://www.facebook.com/TamilNaduEducationDepartment" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/TNEducationDept" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/tamil-nadu-education-department" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/tamilnadu_education_department" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="content-info">
        Content of this website is designed, developed, hosted, owned and managed by Department of Information Technology, SKCT.
      </div>
      <div className="links">
        <a href="#copyright">Copyright</a>
        <a href="#privacy">Privacy</a>
        <a href="#disclaimer">Disclaimer</a>
      </div>
      <div className="copyright-info">
        &copy; 2024 Copyright : EBTN
      </div>
      <div className="footer-bottom">
        Copyright All Rights Reserved. Department of Information Technology
      </div>
    </footer>
  );
};

export default Footer;

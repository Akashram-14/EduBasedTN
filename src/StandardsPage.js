import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StandardsPage.css';
import Footer from './footer';
import PreHeader from './preheader';

const StandardsPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (standard) => {
    navigate(`/${standard}`);
  };

  return (
    <div className="standards-page">
      <PreHeader/>
      <div className="content">
        <div className="box-container">
          <div className="box" onClick={() => handleNavigate('10th')}>
            <h2>10th Standard</h2>
            <Link to='/10th'><button>View Questions</button></Link>
          </div>
          <div className="box" onClick={() => handleNavigate('9th')}>
            <h2>9th Standard</h2>
            <Link to='/9th'><button>View Questions</button></Link>
          </div>
          <div className="box" onClick={() => handleNavigate('8th')}>
            <h2>8th Standard</h2>
            <Link to='/8th'><button>View Questions</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StandardsPage;

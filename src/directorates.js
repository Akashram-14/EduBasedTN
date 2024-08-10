import React from 'react';
import './directorates.css';
import PreHeader from './preheader';
import Footer from './footer';

const Directories = () => {
  const links = [
    { title: 'Directorate of Elementary Education', url: 'http://www.dge.tn.gov.in/' },
    { title: 'Directorate of School Education', url: 'http://www.dge.tn.gov.in/' },
    { title: 'Directorate of Matriculation Schools', url: 'http://www.dge.tn.gov.in/' },
    { title: 'SCERT', url: 'http://www.dge.tn.gov.in/' },
    { title: 'Samagra Shiksha', url: 'http://www.dge.tn.gov.in/' },
    { title: 'TN Textbook Corporation', url: 'http://www.dge.tn.gov.in/' },
    { title: 'Directorate of Government Examinations', url: 'http://www.dge.tn.gov.in/' },
    { title: 'Teachers Recruitment Board', url: 'http://www.dge.tn.gov.in/' },
    { title: 'Non-Formal & Adult Education', url: 'http://www.dge.tn.gov.in/' },
    { title: 'Directorate of Public Libraries', url: 'http://www.dge.tn.gov.in/' }
  ];

  return (
    <div className="directories-page">
        <PreHeader/>
      <header className="header">
        <h1>Government Directories</h1>
      </header>
      <section className="directories">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="directory-button" target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        ))}
      </section>
      <Footer/>
    </div>
  );
};

export default Directories;

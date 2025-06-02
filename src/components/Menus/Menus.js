import React, { useState } from 'react';
import './Menus.css';
import { Link } from 'react-router-dom';
import {
  FcHome, FcDiploma1,
  FcContacts, FcReading,
  FcSoundRecordingCopyright,
} from "react-icons/fc";
import { FaBars,FaHandsHelping } from "react-icons/fa";



const Menus = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="nav-logo">
          <img src="/logo.jpg" alt="Profile" />
          <span className="nav-name">Bhawani Prasad Sah</span>
        </div>
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>
      </div>

      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <Link to="/" className="nav-link"><FcHome /> Home</Link>
        <Link to="/education" className="nav-link"><FcReading /> Education</Link>
        <Link to="/certifications" className="nav-link"><FcDiploma1 /> Certifications</Link>
        <Link to="/projects" className="nav-link"><FcSoundRecordingCopyright /> Projects</Link>
        <Link to="/community" className="nav-link"> <FaHandsHelping /> Community Involvement</Link>
        <Link to="/contact" className="nav-link"><FcContacts /> Contact</Link>
      </div>
    </div>
  );
};

export default Menus;

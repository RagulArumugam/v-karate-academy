import React from 'react';
import './header.css';
import logo from '../../assets/logo.png'; // Adjust the path based on where you store your image
import { FaHome, FaPhoneAlt, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaPhoneAlt /> Contact
            </a>
          </li>
          <li>
            <a onClick={() => window.open('https://www.instagram.com', '_blank')}>
              <FaInstagram /> Instagram
            </a>
          </li>
          <li>
            <a onClick={() => window.open('https://www.youtube.com/@v-karateacademy4498', '_blank')}>
              <FaYoutube /> YouTube
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

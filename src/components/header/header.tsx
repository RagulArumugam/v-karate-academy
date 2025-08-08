import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a
              href="https://www.instagram.com/viswa_viswanath__?igsh=NHZ3d2tzYTUxZ3Mw"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@v-karateacademy4498"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

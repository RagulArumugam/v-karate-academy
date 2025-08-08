import React from 'react';
import './about-us.css';

// ✅ Material UI icons
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const AboutUs: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p className="about-description">
          We are a dedicated karate school committed to teaching the art of self-discipline, respect, and physical fitness. Our experienced instructors provide quality training for all ages and skill levels, helping students build confidence, strength, and focus through traditional karate techniques and modern practices.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <LocationOnIcon className="icon" />
            V Karate Academy, SRC Nagar, Tiruppur, Tamil Nadu 641607, India
          </div>
          <div className="contact-item">
            <PhoneIcon className="icon" /> +91 96295 20463
          </div>
          <div className="contact-item">
            <EmailIcon className="icon" /> vkarate@gmail.com
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/viswa_viswanath__?igsh=NHZ3d2tzYTUxZ3Mw" target="_blank" rel="noopener noreferrer"><InstagramIcon className="icon" /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon className="icon" /></a>
          <a href="https://www.youtube.com/@v-karateacademy4498" target="_blank" rel="noopener noreferrer"><YouTubeIcon className="icon" /></a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

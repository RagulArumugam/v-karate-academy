import React from 'react';
import './about-us.css';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const AboutUs: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p className="about-description">
          We are a dedicated karate school committed to teaching the art of self-discipline, respect, and physical fitness. Our experienced instructors provide quality training for all ages and skill levels, helping students build confidence, strength, and focus through traditional karate techniques and modern practices.
        </p>

        <div className="contact-info">
          <div><FaMapMarkerAlt className="icon" /> V Karate Academy , SRC Nagar , Tiruppur , Tamil Nadu 641607 , India</div>
          <div><FaPhone className="icon" /> +91 96295 20463</div>
          <div><FaEnvelope className="icon" /> vkarate@gmail.com</div>
        </div>

        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from 'react';
import './followers.css';
import * as FaIcons from 'react-icons/fa';

const FollowerBanners: React.FC = () => {
  return (
    <div className="followers-container">
      <div className="follower-banner youtube">
        <FaIcons.FaYoutube className="icon" />
        <span className="platform">YouTube</span>
        <span className="count">1.3M+</span>
      </div>

      <div className="follower-banner instagram">
        <FaIcons.FaInstagram className="icon" />
        <span className="platform">Instagram</span>
        <span className="count">1M+</span>
      </div>

      <div className="follower-banner facebook">
        <FaIcons.FaFacebook className="icon" />
        <span className="platform">Facebook</span>
        <span className="count">1M+</span>
      </div>
    </div>
  );
};

export default FollowerBanners;

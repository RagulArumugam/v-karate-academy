import React from 'react';
import './followers.css';

import youtubeLogo from '../../../assets/Youtube.png';
import instagramLogo from '../../../assets/insta.webp';
import facebookLogo from '../../../assets/Facebook.png';

const FollowerBanners: React.FC = () => {
  return (
    <div className="followers-container">
      <div className="follower-banner youtube">
        <img src={youtubeLogo} alt="YouTube" className="icon-image" />
        <div className="text">
          <span className="count">1.3M+</span>
        </div>
      </div>

      <div className="follower-banner instagram">
        <img src={instagramLogo} alt="Instagram" className="icon-image" />
        <div className="text">
          <span className="count">1M+</span>
        </div>
      </div>

      <div className="follower-banner facebook">
        <img src={facebookLogo} alt="Facebook" className="icon-image" />
        <div className="text">
          <span className="count">1M+</span>
        </div>
      </div>
    </div>
  );
};

export default FollowerBanners;

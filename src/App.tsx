import React from 'react';
import Carousel from './components/carousel/carousel';
import Header from './components/header/header';
import FollowerBanners from './components/follower/followers/followers';
import './App.css'; // Assuming you have a global CSS file for styling
import ContactForm from './components/contactform/contact-form';
import AboutUs from './components/aboutus/about-us';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <FollowerBanners />
      {/* <ContactForm /> */}
      <AboutUs />
    </div>
  );
};

export default App;

import React from 'react';
import Slider from 'react-slick';
import './carousel.css';
import Image1 from "../../assets/slide.jpg"
import Image2 from "../../assets/slide2.png"

const images = [
  Image1, 
  Image2
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true, // Enable dots for pagination
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay speed in ms
    // arrows: true, // Enable previous/next arrows
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

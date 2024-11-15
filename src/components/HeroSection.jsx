import React from 'react';
import '../styles/HeroSection.scss';

const HeroSection = ({ backgroundImage, foregroundImage }) => (
  <div
    className="hero-container"
    style={{
      backgroundImage: `linear-gradient(to left, rgba(37, 45, 55, 0) 40%, #000000 95%, #09101A 100%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #000000 100%), url(${backgroundImage})`,
    }}
  >
    <div className="text-overlay">
      <h2 className='more'>More From</h2>
      <h2 className='more'>Rico the dog</h2>
      <div className="accent">RICO IS BACK!</div>
      <h1>RicoBot</h1>
      <p>Charge into a brand-new supersized adventure with RICO across
      50 exciting and diverse worlds, available now on PS5!</p>
      <button>Learn More</button>
    </div>
    {foregroundImage && (
      <img className="foreground-image" src={foregroundImage} alt="Rico the Dog" />
    )}
  </div>
);

export default HeroSection;
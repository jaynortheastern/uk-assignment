import React from 'react';
import './HeroSection.scss';

const HeroSection = ({ foregroundImage }) => (
  <div
    className="hero-container"
    
  >
    <div className="text-overlay">
      <h2 className='more'>More From</h2>
      <h2 className='more'>Rico the dog</h2>
      <div className="accent">RICO IS BACK!</div>
      <h1>RicoBot</h1>
      <p>Charge into a brand-new supersized adventure with RICO across
      50 exciting and diverse worlds, available now on PS5!</p>
      
      <a href="https://playstation.com" target="_blank" rel="noopener noreferrer">
        Learn More
      </a>

      
    </div>
    {foregroundImage && (
      <img className="foreground-image" src={foregroundImage} alt="Rico the Dog" />
    )}
  </div>
);

export default HeroSection;
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import ImageGallery from './ImageGallery';

const thumbnails = [
  {
    background: '/assets/images/1-background.png',
    foreground: '/assets/images/1-foreground-cutout.png',
    thumbnail: '/assets/images/1-thumbnail.png',
  },
  {
    background: '/assets/images/2-background.png',
    thumbnail: '/assets/images/2-thumbnail.png',
  },
  {
    background: '/assets/images/3-background.png',
    thumbnail: '/assets/images/3-thumbnail.png',
  },
  {
    background: '/assets/images/4-background.png',
    thumbnail: '/assets/images/4-thumbnail.png',
  },
  {
    background: '/assets/images/5-background.png',
    thumbnail: '/assets/images/5-thumbnail.png',
  },
  {
    background: '/assets/images/6-background.png',
    thumbnail: '/assets/images/6-thumbnail.png',
  },
];

const Layout = () => {
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);

  const handleSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="hero-gallery-container">
      <HeroSection
        backgroundImage={selectedImage.background}
        foregroundImage={selectedImage.foreground}
      />
      <ImageGallery thumbnails={thumbnails} onSelect={handleSelect} />
    </div>
  );
};

export default Layout;
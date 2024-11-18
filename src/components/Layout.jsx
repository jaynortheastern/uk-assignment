import React, { useState, useMemo, useCallback, useEffect } from 'react';
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
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    thumbnails.forEach((thumb) => {
      const img = new Image();
      img.src = thumb.background;
    });
  }, []);

  const selectedImage = useMemo(() => thumbnails[selectedIndex], [selectedIndex]);

  const handleSelect = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  return (
    <div
      className="hero-gallery-container"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(37, 45, 55, 0) 40%, #000000 95%, #09101A 100%),
          linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, #000000 100%), url(${selectedImage.background})`,
      }}
    >
      <HeroSection foregroundImage={selectedImage.foreground} />

      <ImageGallery
        thumbnails={thumbnails}
        onSelect={handleSelect}
        selectedIndex={selectedIndex}
      />
    </div>
  );
};

export default Layout;
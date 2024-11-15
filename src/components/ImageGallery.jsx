import React, { useState } from 'react';
import '../styles/ImageGallery.scss';

const ImageGallery = ({ thumbnails, onSelect }) => {
  const [selectedThumbnail, setSelectedThumbnail] = useState(0); 

  const handleSelect = (thumb, index) => {
    setSelectedThumbnail(index);
    onSelect(thumb);
  };

  return (
    <div className="gallery-container">
      {thumbnails.map((thumb, index) => (
        <div
          key={index}
          className={`thumbnail-container ${index === selectedThumbnail ? 'selected' : ''}`}
        >
          <img
            src={thumb.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail`}
            onClick={() => handleSelect(thumb, index)}
          />
        </div>
      ))}
      
    </div>
  );
};

export default ImageGallery;
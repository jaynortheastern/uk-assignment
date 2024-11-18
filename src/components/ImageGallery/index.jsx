import React from 'react';
import './ImageGallery.scss';

const ImageGallery = React.memo(({ thumbnails, onSelect, selectedIndex }) => {
  return (
    <div className="gallery-container">
      {thumbnails.map((thumb, index) => (
        <div
          key={index}
          className={`thumbnail-container 
            ${selectedIndex === index ? 'selected' : ''} 
            ${index === 0 ? 'first-selected' : ''}`}
          onClick={() => onSelect(index)}
        >
          <img
            src={thumb.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
});

export default ImageGallery;
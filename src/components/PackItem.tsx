import React, { useState } from 'react';
import { Pack } from '../context/PackContext';
import Tooltip from './Tooltip';

interface PackItemProps {
  pack: Pack;
}

const PackItem: React.FC<PackItemProps> = ({ pack }) => {
  const [mediaIndex, setMediaIndex] = useState(0);

  const media = [...pack.imageURL, ...pack.videoURL];

  const handleNextMedia = () => {
    setMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrevMedia = () => {
    setMediaIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const isVideo = media[mediaIndex].endsWith('.mp4') || media[mediaIndex].includes('video');

  return (
    <div className="pack-item">
      <div className="media-container">
        {isVideo ? (
          <video
            src={media[mediaIndex]}
            controls
            loop
            controlsList="nodownload"
            style={{ maxWidth: '100%' }}
          />
        ) : (
          <img src={media[mediaIndex]} alt="" style={{ maxWidth: '100%' }} />
        )}
        {media.length > 1 && (
          <div className="media-controls">
            <button onClick={handlePrevMedia}>❮</button>
            <button onClick={handleNextMedia}>❯</button>
          </div>
        )}
      </div>
      <h2>{pack.title}</h2>
      <Tooltip
        title={"View details"}
        description={pack.description}
        author={pack.author}
      />
      <p className="price">
        {pack.promotionalPrice ? (
          <>
            Just for <s>${pack.price.toFixed(2)}</s> <strong>${pack.promotionalPrice.toFixed(2)}</strong> now
          </>
        ) : (
          <>Just for <strong>${pack.price.toFixed(2)}</strong></>
        )}
      </p>
      <a href={pack.getUrl} className="get-now-btn" target="_blank">
        Get Now
      </a>
    </div>
  );
};

export default PackItem;

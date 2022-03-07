import React from 'react';

const Slide = ({ src, alt, active, xPos = 0 }) => {
  return (
    <div
      className={active ? 'slide slide--current' : 'slide'}
      style={{ left: xPos }}
    >
      <img className="slide__img" src={src} alt={alt} />
    </div>
  );
};

export default Slide;

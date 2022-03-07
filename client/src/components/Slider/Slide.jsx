import React from 'react';

const Slide = ({ src, alt }) => {
  return (
    <div className="slide">
      <img className="slide__img" src={src} alt={alt} />
    </div>
  );
};

export default Slide;

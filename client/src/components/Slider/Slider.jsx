import React, { useState, useEffect } from 'react';
import Slide from './Slide';

const Slider = ({ slides }) => {
  const [slide, setSlide] = useState(0);

  const controlHandler = (i) => {
    setSlide(i);
  };

  return (
    <div className="slider">
      <div className="slider__slides">
        {slides.map((slide, i) => {
          return <Slide src={slide} key={i} alt={`slide_${i + 1}`} />;
        })}
      </div>
      <div className="slider__controllers">
        {slides.map((slide, i) => {
          return (
            <div
              className="slider__controller"
              key={i}
              onClick={() => controlHandler(i)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;

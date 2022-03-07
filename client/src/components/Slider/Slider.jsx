import React, { useState, useEffect } from 'react';
import Slide from './Slide';

const Slider = ({ slides }) => {
  const [slide, setSlide] = useState(0); // current slide

  // handler for controllers at the bottom of the slider
  const controlHandler = (i) => {
    setSlide(i);
  };

  // changes slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((slide) => (slide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => console.log(slide), [slide]);

  return (
    <div className="slider">
      <div className="slider__slides">
        {slides.map((value, i) => {
          return (
            <Slide
              src={value}
              key={i}
              active={i === slide}
              alt={`slide_${i + 1}`}
            />
          );
        })}
      </div>
      <div className="slider__controllers">
        {slides.map((value, i) => {
          return (
            <div
              className={
                i === slide
                  ? 'slider__controller slider__controller--current'
                  : 'slider__controller'
              }
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

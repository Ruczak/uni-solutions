import React, { useRef, useState, useEffect } from 'react';
import { easeInOutSine } from '../../easings';

const Slide = ({ src, alt, position = 0 }) => {
  const [left, setLeft] = useState(0); // position of slide on x axis
  const ref = useRef(null); //
  const firstUpdate = useRef(true);

  useEffect(() => {
    // handling the componentDidMount
    if (firstUpdate.current) {
      firstUpdate.current = false;
      setLeft((left) => ref.current.offsetWidth * position);
      return;
    }

    // handling the componentDidUpdate
    new Promise((resolve, reject) => {
      const difference = position * ref.current.offsetWidth - left;

      let percent = 0;

      const step = () => {
        percent += 2;
        setLeft(() => left + difference * easeInOutSine(percent / 100));

        if (percent < 100) window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);
      resolve();
    });
  }, [position]);

  return (
    <div className="slide" style={{ left }} ref={ref}>
      <img className="slide__img" src={src} alt={alt} />
    </div>
  );
};

export default Slide;

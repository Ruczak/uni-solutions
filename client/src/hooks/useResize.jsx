import { useState, useLayoutEffect } from 'react';

export const useResize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const update = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', update);
    update();
    return () => window.removeEventListener('resize', update);
  }, []);
  return size;
};

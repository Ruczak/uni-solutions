import React, { useState, useRef, useEffect } from 'react';

const Project = ({ image, title, id }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (active) ref.current.classList.add('project--active');
    else ref.current.classList.remove('project--active');
  }, [active]);

  return (
    <div className="project" ref={ref} onClick={() => setActive(!active)}>
      <img
        src={`${process.env.REACT_APP_SERVER_HOST}/asset/${image}`}
        alt={image}
        className="project__img"
      />
      <span className="project__title">{title}</span>
    </div>
  );
};

export default Project;

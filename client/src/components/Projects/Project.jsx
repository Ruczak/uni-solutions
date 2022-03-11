import React from 'react';

const Project = (image, title, id) => {
  return (
    <div className="project">
      <img
        src={`http://localhost:8080/asset/${image}`}
        alt={image}
        className="project__img"
      />
      <span className="project__title">{title}</span>
    </div>
  );
};

export default Project;

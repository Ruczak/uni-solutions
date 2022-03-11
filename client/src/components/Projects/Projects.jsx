import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__panel">
        <h1 className="projects__title">Our Projects</h1>
        <div className="projects__categories">
          <span className="projects__categories-title">Category:</span>
          <span className="projects__category" data-index="0">
            All
          </span>
          {Array.from(Array(4).keys()).map((val) => {
            return (
              <span
                className="projects__category"
                key={val}
                data-index={val + 1}
              >
                Cat{val + 1}
              </span>
            );
          })}
        </div>
        <div className="project__search">
          Search:
          <input type="text" className="project__input" />
        </div>
      </div>
      <div className="projects__result"></div>
    </div>
  );
};

export default Projects;

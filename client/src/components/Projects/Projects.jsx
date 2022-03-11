import React, { useState } from 'react';
import Project from './Project';
import Masonry from './Masonry';

const Projects = () => {
  const [category, setCategory] = useState(0);

  return (
    <div className="projects">
      <div className="projects__panel">
        <h1 className="projects__title">Our Projects</h1>
        <div className="projects__categories">
          <span className="projects__categories-title">Category:</span>
          {Array.from(Array(4).keys()).map((val, i) => {
            return (
              <span
                className={
                  i === category
                    ? 'projects__category projects__category--current'
                    : 'projects__category'
                }
                key={i}
                onClick={(e) => setCategory(parseInt(e.target.dataset.index))}
                data-index={val}
              >
                {val !== 0 ? `Cat${val}` : `All`}
              </span>
            );
          })}
        </div>
        <div className="projects__search">
          Search:
          <input
            type="text"
            className="projects__input"
            placeholder="Enter keywords here..."
          />
          <button className="projects__submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <Masonry cols={3} gap="5px">
        <Project image="amazon_alington.webp" title="Title" id="1" />
        <Project image="welcome-to-uni.jpg" title="Title" id="2" />
        <Project image="italian_alps_cottage.jpg" title="Title" id="3" />
        <Project image="welcome-to-uni.jpg" title="Title" id="2" />
        <Project image="italian_alps_cottage.jpg" title="Title" id="3" />
      </Masonry>
    </div>
  );
};

export default Projects;

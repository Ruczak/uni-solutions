import React, { useState, useEffect } from 'react';
import Project from './Project';
import Masonry from './Masonry';

const Projects = () => {
  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8080/projects/categories');

      const body = await response.json();

      if (!response.ok) throw new Error(body.error);

      setCategories(body.result);
    } catch (err) {
      setError(err);
    }
  };

  const fetchProjects = async () => {
    try {
      const conditions = [];

      if (search.length > 0) conditions.push('search=' + search);
      if (category !== 0) conditions.push('category=' + category);

      let url = 'http://localhost:8080/projects';

      if (conditions.length > 0) url += '?' + conditions.join('&');

      const response = await fetch(url);

      const body = await response.json();

      if (!response.ok) throw new Error(body.error);

      console.log(url);

      setProjects(body.result);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => fetchCategories(), []);

  useEffect(() => fetchProjects(), [category]);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  return (
    <div className="projects">
      <div className="projects__panel">
        <h1 className="projects__title">Our Projects</h1>
        <div className="projects__categories">
          <span className="projects__categories-title">Category:</span>
          <span
            className={
              0 === category
                ? 'projects__category projects__category--current'
                : 'projects__category'
            }
            key={0}
            onClick={(e) => setCategory(parseInt(e.target.dataset.index))}
            data-index={0}
          >
            All
          </span>
          {categories.map((val, i) => {
            return (
              <span
                className={
                  val.id === category
                    ? 'projects__category projects__category--current'
                    : 'projects__category'
                }
                key={i + 1}
                onClick={(e) => setCategory(parseInt(e.target.dataset.index))}
                data-index={val.id}
              >
                {val !== 0 ? val.name : 'All'}
              </span>
            );
          })}
        </div>
        <form
          className="projects__search"
          onSubmit={(e) => {
            e.preventDefault();
            fetchProjects();
          }}
        >
          Search:
          <input
            type="text"
            className="projects__input"
            placeholder="Enter keywords here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="projects__submit" onClick={fetchProjects}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <Masonry cols={3} gap="5px">
        {projects.map((val, i) => {
          return (
            <Project key={i} image={val.image} title={val.name} id={val.id} />
          );
        })}
      </Masonry>
    </div>
  );
};

export default Projects;

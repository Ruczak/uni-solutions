import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(0);
  const [error, setError] = useState();

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8080/articles/categories');

      const body = await response.json();

      if (!response.ok) throw new Error(body.error);

      setCategories(body.result);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => fetchCategories(), []);

  useEffect(() => console.log(category), [category]);

  useEffect(() => {
    if (error) console.log(error);
  }, [error]);

  return (
    <div className="blog">
      <div className="blog__panel">
        <h1 className="blog__title">Blog</h1>
        <div className="blog__categories">
          <span className="blog__categories-title">Category:</span>
          {categories.map(({ id, name }, i) => {
            return (
              <span
                className={
                  category === id
                    ? 'blog__category blog__category--current'
                    : 'blog__category'
                }
                key={i}
                onClick={() => setCategory(id)}
              >
                {name}
              </span>
            );
          })}
        </div>
      </div>
      <div className="blog__articles"></div>
    </div>
  );
};

export default Blog;

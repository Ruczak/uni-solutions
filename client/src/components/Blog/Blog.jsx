import React, { useEffect, useState } from 'react';
import Article from './Article';

const Blog = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(0);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      const response = await fetch('http://localhost:8080/articles');

      const body = await response.json();

      if (!response.ok) throw new Error(body.error);

      setArticles(body.result);
    } catch (err) {
      setError(err);
    }
  };

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

  useEffect(() => fetchArticles(), [category]);

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
      <div className="blog__articles">
        {articles.map((article, i) => {
          return (
            <Article
              key={i}
              id={article.id}
              image={article.thumbnail}
              title={article.title}
              content={article.content}
              date={new Date(article.created)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

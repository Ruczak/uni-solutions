import React from 'react';

const Article = ({ id, image, title, content, date }) => {
  return (
    <div className="article">
      <img
        className="article__img"
        src={`http://localhost:8080/asset/${image}`}
        alt={image}
      />
      <h3 className="article__title">{title}</h3>
      <p className="article__content">{content}</p>
      <span className="article__date">{date.toLocaleString()}</span>
    </div>
  );
};

export default Article;

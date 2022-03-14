import React from 'react';

const Article = ({ id, image, title, content, date }) => {
  return (
    <div className="article">
      <img
        className="article__img"
        src={`${process.env.REACT_APP_SERVER_HOST}/asset/${image}`}
        alt={image}
      />
      <h3 className="article__title">{title}</h3>
      <span className="article__date">{date.toLocaleString()}</span>
      {content.split('\r').map((text, i) => {
        return (
          <p className="article__content" key={i}>
            {text}
          </p>
        );
      })}
    </div>
  );
};

export default Article;

import React from 'react';

const Link = ({ children, href }) => {
  return (
    <div className="link">
      <a href={href}>{children}</a>
    </div>
  );
};

export default Link;

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ children, href }) => {
  return (
    <div className="link">
      <RouterLink
        style={{
          textDecoration: 'none',
          color: 'black',
          width: '100%',
          display: 'inline-block'
        }}
        to={href}
      >
        {children}
      </RouterLink>
    </div>
  );
};

export default Link;

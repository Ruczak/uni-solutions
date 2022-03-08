import React from 'react';

const Hamburger = ({ onClick, size = 'xl' }) => {
  return (
    <div className="hamburger" onClick={() => onClick()}>
      <i className={`fa-solid fa-bars fa-${size}`}></i>
    </div>
  );
};

export default Hamburger;

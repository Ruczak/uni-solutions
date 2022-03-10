import React from 'react';

const Offer = ({ icon, text }) => {
  return (
    <div className="offer">
      {icon}
      <div className="offer__text">{text}</div>
    </div>
  );
};

export default Offer;

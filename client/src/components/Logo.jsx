import React from 'react';

const Logo = ({ size }) => {
  return (
    <div className="logo">
      <img
        src={`${process.env.REACT_APP_SERVER_HOST}/asset/uni-logo.png`}
        alt="Logo"
        style={{ width: size }}
      />
    </div>
  );
};

export default Logo;

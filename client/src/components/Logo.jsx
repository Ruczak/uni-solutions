import React from 'react';

const Logo = ({ size }) => {
  return (
    <div className="logo">
      <img
        src="http://localhost:8080/asset/uni-logo.png"
        alt="Logo"
        style={{ width: size }}
      />
    </div>
  );
};

export default Logo;

import React from 'react';

const AboutUs = () => {
  return (
    <div className="main-content">
      <div className="showcase">
        <img
          src="http://localhost:8080/asset/welcome-to-uni.jpg"
          alt="Showcase Image"
          className="showcase__img"
        />
        <h1 className="showcase__title">Uni Solutions</h1>
        <h2 className="showcase__subtitle">Architecture &amp; design</h2>
        <p className="showcase__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          tempor mauris, at mollis justo. Phasellus tincidunt eros turpis, a.{' '}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

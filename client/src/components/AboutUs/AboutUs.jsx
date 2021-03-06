import React from 'react';
import Offer from './Offer';
import { useResize } from '../../hooks/useResize';

const AboutUs = () => {
  const [windowWidth] = useResize();

  return (
    <React.Fragment>
      <div className="showcase">
        <img
          src={`${process.env.REACT_APP_SERVER_HOST}/asset/welcome-to-uni.jpg`}
          alt="Showcase"
          className="showcase__img"
        />
        {windowWidth < 1080 ? (
          <React.Fragment>
            <h1 className="showcase__title">Uni Solutions</h1>
            <h2 className="showcase__subtitle">Architecture &amp; design</h2>
            <p className="showcase__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              tempor mauris, at mollis justo. Phasellus tincidunt eros turpis,
              a.{' '}
            </p>
          </React.Fragment>
        ) : (
          <div className="showcase__card">
            <h1 className="showcase__title">Uni Solutions</h1>
            <h2 className="showcase__subtitle">Architecture &amp; design</h2>
            <p className="showcase__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              tempor mauris, at mollis justo. Phasellus tincidunt eros turpis,
              a.{' '}
            </p>
          </div>
        )}
      </div>
      <div className="offers">
        <h2 className="offers__title">We offer</h2>
        <Offer
          icon={<i className="fa-solid fa-hand-holding-dollar"></i>}
          text="Competitive prices"
        />
        <Offer
          icon={<i className="fa-solid fa-scale-balanced"></i>}
          text="Great price to quality ratio"
        />
        <Offer
          icon={<i className="fa-solid fa-truck"></i>}
          text="Quick and professional delivery"
        />
        <Offer
          icon={<i className="fa-solid fa-file-lines"></i>}
          text="Extensive and detailed documentation"
        />
        <Offer
          icon={<i className="fa-solid fa-users-gear"></i>}
          text="Professional staff"
        />
        <Offer
          icon={<i className="fa-solid fa-pencil"></i>}
          text="Highly customisable offers"
        />
        <Offer
          icon={<i className="fa-solid fa-trophy"></i>}
          text="Best in the market"
        />
        <Offer
          icon={<i className="fa-solid fa-headset"></i>}
          text="5 years-long customer support"
        />
        <Offer
          icon={<i className="fa-solid fa-earth-americas"></i>}
          text="Available worldwide"
        />
      </div>
    </React.Fragment>
  );
};

export default AboutUs;

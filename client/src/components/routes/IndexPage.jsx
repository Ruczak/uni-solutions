import React from 'react';
import Slider from '../Slider/Slider';
import AboutUs from '../AboutUs/AboutUs';

const IndexPage = () => {
  return (
    <React.Fragment>
      <Slider
        slides={[
          `${process.env.REACT_APP_SERVER_HOST}/asset/welcome-to-uni.jpg`,
          'https://placeimg.com/640/480/any'
        ]}
      />
      <div className="main-content">
        <AboutUs />
      </div>
    </React.Fragment>
  );
};

export default IndexPage;

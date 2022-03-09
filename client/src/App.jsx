import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Slider
        slides={[
          'http://localhost:8080/asset/welcome-to-uni.jpg',
          'https://placeimg.com/640/480/any'
        ]}
      />
    </React.Fragment>
  );
};

export default App;

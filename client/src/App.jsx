import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
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
      <Footer />
    </React.Fragment>
  );
};

export default App;

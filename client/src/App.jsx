import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';

import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ContactForm />
    </React.Fragment>
  );
};

export default App;

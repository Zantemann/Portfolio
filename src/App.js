import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';

import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import Timeline from './pages/Timeline';
import SchoolPage from './pages/SchoolPage';

const App = () => {

  return (
    <div>
      <NavigationBar />
      <Element name='home'>
        <HomePage />
      </Element>
      <Element name='timeline'>
        <Timeline />
      </Element>
      <Element name='courses'>
        <SchoolPage />
      </Element>
    </div>
  );
};

export default App;
import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';

import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import Timeline from './pages/Timeline';
import SchoolPage from './pages/SchoolPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {

  return (
    <div>
      <NavigationBar />
      <Element name='home'>
        <HomePage />
      </Element>
      <Element name='about'>
        <AboutPage />
      </Element>
      <Element name='timeline'>
        <Timeline />
      </Element>
      <Element name='courses'>
        <SchoolPage />
      </Element>
      <Element name='projects'>
        <ProjectsPage />
      </Element>
      <Element name='contact'>
        <ContactPage />
      </Element>
    </div>
  );
};

export default App;
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import fetchData from './firebase-config';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Timeline from './pages/Timeline';
import SchoolPage from './pages/SchoolPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { useInView } from 'react-intersection-observer';

const App = () => {
  const isMobile = window.innerWidth <= 768;

  let rootMargin;
  if (isMobile) {
    rootMargin = '-100px';
  } else {
    rootMargin = '-200px';
  }

  const sectionRefs = {
    'about': useInView({ rootMargin: rootMargin }),
    'studies': useInView({ rootMargin: rootMargin }),
    'courses': useInView({ rootMargin: rootMargin }),
    'projects': useInView({ rootMargin: rootMargin }),
    'contact': useInView({ rootMargin: rootMargin })
  };

  const [visibleSection, setVisibleSection] = useState(null);

  useEffect(() => {
    const updateVisibleSection = () => {
      const currentlyVisibleSection = Object.keys(sectionRefs).find(section => sectionRefs[section].inView);
      if (visibleSection !== currentlyVisibleSection) {
        setVisibleSection(currentlyVisibleSection);
      }
    };

    updateVisibleSection();
  }, [sectionRefs]);

  const [allowScroll, setAllowScroll] = useState(false);
  const [data, setData] = useState({ about: [], skills: [], timelineItems: [], courses: [], projects: [] });

  // Fetching data to components
  useEffect(() => {
    const fetchDataForAllSections = async () => {
      const aboutData = await fetchData('about');
      const skillsData = await fetchData('skills');
      const timelineData = await fetchData('timeline');
      const coursesData = await fetchData('courses');
      const projectsData = await fetchData('projects');

      setData({
        about: aboutData,
        skills: skillsData,
        timelineItems: timelineData,
        courses: coursesData,
        projects: projectsData,
      });
      setAllowScroll(true);
    };

    fetchDataForAllSections();
  }, []);

  return (
    <div>
      <NavigationBar allowScroll={allowScroll} visibleSection={visibleSection}/>
      <Element name='home'>
        <HomePage />
      </Element>
      <Element name='about' >
        <div ref={sectionRefs['about'].ref}>
          <AboutPage about={data.about} skills={data.skills}/>
        </div>
      </Element>
      <Element name='studies'>
        <div ref={sectionRefs['studies'].ref}>
          <Timeline timelineItems={data.timelineItems}/>
        </div>
      </Element>
      <Element name='courses'>
        <div ref={sectionRefs['courses'].ref}>
          <SchoolPage courses={data.courses}/>
        </div>
      </Element>
      <Element name='projects'>
        <div ref={sectionRefs['projects'].ref}>
          <ProjectsPage projects={data.projects}/>
        </div>
      </Element>
      <Element name='contact'>
        <div ref={sectionRefs['contact'].ref}>
          <ContactPage />
        </div>
      </Element>
      <Footer />
    </div>
  );
};

export default App;
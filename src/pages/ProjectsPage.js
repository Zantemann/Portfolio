import React from 'react';

import './TitleBar.css';
import './ProjectsPage.css';
import { projectsData } from '../data/projectsData';

const ProjectsPage = () => {
  return (
    <div className='projects'>
      <div className='title'>
        <h2>Projects</h2>
      </div>
      <div className='projects-container'>
        {projectsData.map((element) => {
          return (
            <div className='projectBox' key={element.title}>
              <div className='text'>
                <h2>{element.title}</h2>
                <p>{element.description}</p>
                <p>
                  <a href={element.url} target="_blank" rel="noopener noreferrer">
                    {element.title}
                  </a>
                </p>
              </div>
              <img src='https://placehold.co/200?text=Photo+Not+Found' alt="Placeholder" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
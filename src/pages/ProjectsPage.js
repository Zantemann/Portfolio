import React from 'react';

import './TitleBar.css';
import './ProjectsPage.css';

const ProjectsPage = ({ projects }) => {
  return (
    <div className='projects'>
      <div className='title'>
        <h2>Projects</h2>
      </div>
      <div className='container'>
        {(projects.length === 0) ? (
          <h2 className='info-title' style={{ padding: '40px' }}>Loading...</h2>
        ) : (
          <div className='projects-container'>
            {projects.map((element) => {
              return (
                <div className='projectBox' key={element.title}>
                  <div className='text'>
                    <div className='title-container'>
                      <h2>{element.title}</h2>
                      <div className='dev-logos'>
                        {element?.languages?.map((language) => (
                          <img src={language} key={language} />
                        ))}
                      </div>
                    </div>
                    <p>{element.description}</p>
                    <p>
                      <a href={element.url} target="_blank" rel="noopener noreferrer">
                        Github
                      </a>
                    </p>
                  </div>
                  <img src={element?.image ? element?.image : 'https://placehold.co/300?text=Photo+Not+Found'} alt={element.title} className='project-image'/>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
import React, { useEffect, useState } from 'react';
import fetchData  from '../firebase-config';
import './TitleBar.css';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('projects');
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div className='projects'>
      <div className='title'>
        <h2>Projects</h2>
      </div>
      <div className='projects-container'>
        {projects.map((element) => {
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
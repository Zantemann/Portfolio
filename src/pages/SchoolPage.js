import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from 'react-icons/io5';
import fetchData  from '../firebase-config';

import './Timeline.css';
import './TitleBar.css';

const SchoolPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('courses');
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div className='timeline'>
      <div className='title'>
        <h2>Programming courses</h2>
      </div>
      {!courses ? (
        <p>Loading...</p>
      ) : (
        <VerticalTimeline>
          {courses.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                icon={element.icon ? <img src={element.icon} style={{ padding: '8px', borderRadius: '50%' }} /> : <IoSchool style={{ color: 'white' }} /> }
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title} ({element.credits} credits)
                </h3>
                <p className="description">{element.description}</p>
                <p>
                  <a href={element.url} target="_blank" rel="noopener noreferrer">
                    {element.title}
                  </a>
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      )}
    </div>
  );
};

export default SchoolPage;
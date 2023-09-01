import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from 'react-icons/io5';

import './Timeline.css';
import './TitleBar.css';

const SchoolPage = ({ courses }) => {
  return (
    <div className='timeline'>
      <div className='title'>
        <h2>Programming courses</h2>
      </div>
      {(courses.length === 0) ? (
        <h2 className='info-title' style={{ padding: '40px' }}>Loading...</h2>
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
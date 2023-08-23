import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { courseData } from '../data/courseData';
import './Timeline.css';
import './TitleBar.css';

const SchoolPage = () => {
  return (
    <div className='timeline'>
      <div className='title'>
        <h2>Programming courses</h2>
      </div>
      <VerticalTimeline>
        {courseData.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.name}
              date={element.date}
              dateClassName="date"
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p className="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default SchoolPage;
import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { courseData } from '../data/courseData';
import { devLogos } from '../data/devLogos';

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
              key={element.id}
              date={element.date}
              dateClassName="date"
              icon={<img src={devLogos[element.icon]} style={{ padding: '6px', borderRadius: '50%' }} />}
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
    </div>
  );
};

export default SchoolPage;
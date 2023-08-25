import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from 'react-icons/io5';

import { timelineData } from '../data/timelineData';
import './Timeline.css';
import './TitleBar.css';

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className='title'>
        <h2>Studies</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.title}
              date={element.date}
              dateClassName="date"
              iconStyle={{ color: 'white' }}
              icon={<IoSchool />}
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

export default Timeline;
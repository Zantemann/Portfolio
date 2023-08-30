import React, { useState, useEffect } from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from 'react-icons/io5';
import fetchData from '../firebase-config';

import './Timeline.css';
import './TitleBar.css';

const Timeline = () => {
  const [timelineItems, setTimelineItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('timeline');
        setTimelineItems(data);
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div className='timeline'>
      <div className='title'>
        <h2>Studies</h2>
      </div>
      {!timelineItems ? (
        <h2>Loading...</h2>
      ) : (
        <VerticalTimeline>
          {timelineItems.map((element) => {
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
      )}
    </div>
  );
};

export default Timeline;

import { FaTwitter } from 'react-icons/fa';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdPlace } from 'react-icons/md';
import { FaLandmark } from 'react-icons/fa';

const HistoricalTimeline = () => {
  const events = [
    {
      date: '1906',
      title: 'Victoria Memorial',
      description: 'The Victoria Memorial is a large marble building in Kolkata, dedicated to the memory of Queen Victoria.',
      icon: <FaLandmark />,
    },
    {
      date: '1855',
      title: 'Dakshineswar Kali Temple',
      description: 'Dakshineswar Kali Temple is a Hindu temple located in Kolkata, dedicated to the goddess Kali.',
      icon: <MdPlace />,
    },
    {
      date: '1938',
      title: 'Belur Math',
      description: 'Belur Math is the headquarters of the Ramakrishna Math and Mission, founded by Swami Vivekananda.',
      icon: <FaLandmark />,
    },
    
  ];

  return (
    <div>
      <h2>Historical Timeline</h2>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.date}
            icon={event.icon}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default HistoricalTimeline;

import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function Education() {
  const cardStyle = {
    background: 'rgb(231, 226, 247)',
    padding: '20px',
    borderRadius: ' 8px',
    color: '#220f5f',
    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
  };
  const dateStyle = { color: '#e86971' };
  const dateInnerStyle = { background: '#61b8ff', color: 'rgb(8, 84, 97)' };

  return (
    <div style={{ alignItems: 'center' }}>
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="August 2008 – June 2012"
          style={dateStyle}
          dateInnerStyle={dateInnerStyle}
          bodyContainerStyle={cardStyle}
        >
          <h3>
            Pune Institute of Computer Technology, Pune, Maharashtra, India
          </h3>
          <p>
            Completed Bachelor of Engineering (BE, Computers) with First Class
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="April 2007 – March 2008"
          style={dateStyle}
          dateInnerStyle={dateInnerStyle}
          bodyContainerStyle={cardStyle}
        >
          <h3>R L T College of Science, Akola, Maharashtra, India</h3>
          <p>
            Completed Higher Secondary Certification (HSC) with Distinction.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          style={dateStyle}
          dateInnerStyle={dateInnerStyle}
          bodyContainerStyle={cardStyle}
          dateText="January 2014 – October 2016"
        >
          <h3>Noel School, Akola, Maharashtra, India</h3>
          <p>Completed Secondary School Certificate (SSC) with Distinction</p>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

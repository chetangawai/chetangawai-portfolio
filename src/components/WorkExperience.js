import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function WorkExperience() {
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
          dateText="April 2018 – Till Date"
          style={dateStyle}
          dateInnerStyle={dateInnerStyle}
          bodyContainerStyle={cardStyle}
        >
          <h3>
            Senior Software Engineer, DynaCommerce (Acquired by TechMahindra)
          </h3>
          <h4>Javascript, ReactJs, Webpack, Babel, Mocha, Chai, Enzyme</h4>
          <p>
            DynaCommerce provides end-to-end omnichannel solutions for mobile
            and fixed telcom, cable, media and utility companies.
          </p>
          <ul>
            <li>
              Responsible for developing and intergating frontEnd for
              microservices using ReactJS.
            </li>
            <li>
              Customised{' '}
              <a href="https://react.semantic-ui.com/">React Semantic Ui</a> to
              develop resuable components.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="March 2017 – February 2018"
          style={dateStyle}
          dateInnerStyle={dateInnerStyle}
          bodyContainerStyle={cardStyle}
        >
          <h3>Senior Software Engineer, LearningMate</h3>
          <h4>
            Javascript, NodeJS, ExpressJs, Angular2, ReadiumJs, Basics of AWS
            (Lambda,S3 ), Mocha
          </h4>
          <p>
            LearningMate offers innovative, efficient and customized solutions
            around curriculum and media development, assessments, engineering
            and big data.
          </p>
          <ul>
            <li>
              Responsible for handling backEnd using NodeJS for a project which
              calculates delta of the data uploaded by schools(raw format) and
              the data present with the client ( one roster format) for the same
              schools.
            </li>
            <li>
              Implement Lambda functions to trigger actions based on
              requirements.
            </li>
            <li>
              Enhanced eBook functionalities like bookmark, annotation,
              integration of rich media content using Angular2.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="003"
          style={dateStyle}
          dateInnerStyle={dateInnerStyle}
          bodyContainerStyle={cardStyle}
          dateText="January 2014 – October 2016"
        >
          <h3>Software Engineer, LetsIntern</h3>
          <h4>NodeJs, PHP, AngularJS, Jquery, SEO</h4>
          <p>
            Letsintern (acquired by Aspiring Minds) is a linkedin for students
            helping them to connect to employers, career services and each
            other.
          </p>
          <p>Migrated PHP based website to NodeJS backEnd.</p>
          <p>Handled implementation of SEO suggestions.</p>
        </TimelineItem>
        <TimelineItem
          key="004"
          style={dateStyle}
          dateInnerStyle={dateInnerStyle}
          bodyContainerStyle={cardStyle}
          dateText="January 2013 – January 2014"
        >
          <h3>Software Developer, Innoplexus</h3>
          <h4>PHP, Javascript, Jquery</h4>
          <p>
            Innoplexus is driven to help organizations manage innovation and
            complexity.
          </p>
          <p>Handled backEnd of project using PHP.</p>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

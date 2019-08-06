import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  cardTitle: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)'
  }
}));

export default function Education() {
  const cardStyle = {
    background: 'rgb(231, 226, 247)',
    padding: '20px',
    borderRadius: ' 8px',
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
  };
  const dateStyle = { color: 'rgba(0, 0, 0, 0.87)' };
  const dateInnerStyle = {
    background: 'rgb(231, 226, 247)',
    color: 'rgba(0, 0, 0, 0.87)'
  };
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom align="center">
        Education
      </Typography>
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="August 2008 – June 2012"
          style={dateStyle}
          dateInnerStyle={dateInnerStyle}
          bodyContainerStyle={cardStyle}
        >
          <h3>
            <a
              href="https://pict.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.cardTitle}
            >
              Pune Institute of Computer Technology, Pune, Maharashtra, India
            </a>
          </h3>
          <p>
            Completed Bachelor of Engineering (BE, Computers) with First Class.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="April 2007 – March 2008"
          style={dateStyle}
          dateInnerStyle={dateInnerStyle}
          bodyContainerStyle={cardStyle}
        >
          <h3>
            <a
              href="http://rltsc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.cardTitle}
            >
              R L T College of Science, Akola, Maharashtra, India
            </a>
          </h3>
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
          <h3>
            <a
              href="http://noelschool.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.cardTitle}
            >
              Noel School, Akola, Maharashtra, India
            </a>
          </h3>
          <p>Completed Secondary School Certificate (SSC) with Distinction.</p>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}

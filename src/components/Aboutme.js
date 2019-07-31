import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({}));

export default function Aboutme() {
  const classes = useStyles();

  return (
    <div style={{ alignItems: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Hey, I am Chetan Gawai.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Software Engineer based in Bangalore, India.
      </Typography>
      <Typography variant="h6" gutterBottom color="textSecondary">
        I have more than 6+ years of experience professionaly and more into
        Javascript and related technologies like ReactJS, AngularJS, NodeJs,
        JQuery.
        <br></br>I love to work with startups. I have also contributed to Stack
        overflow having scored 1500+ reputations.
      </Typography>
      <Typography variant="h6" gutterBottom color="textSecondary">
        <p>
          When I am not coding you will find me in{' '}
          <i
            style={{ fontSize: '24px', color: 'sienna' }}
            className="fas fa-utensils"
          ></i>{' '}
          kitchen experimenting with different kinds of dishes
          <br></br>or in my small garden taking care of{' '}
          <i
            className="fas fa-seedling"
            style={{ fontSize: '24px', color: 'green' }}
          ></i>
          plants.
        </p>
      </Typography>
    </div>
  );
}

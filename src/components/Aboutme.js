import React from 'react';
import Typography from '@material-ui/core/Typography';
import Resume from './Resume';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FollowMe from './FollowMe';

const useStyles = makeStyles(theme => ({
  noLine: {
    textDecoration: 'none',
    color: 'rgb(34, 15, 95)'
  }
}));

export default function Aboutme() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom align="center">
        Hey, I am Chetan Gawai.
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        color="textSecondary"
        align="center"
      >
        I have 6+ years of experience working professionally. Skilled in
        Javascript and related technologies like ReactJS, AngularJS, NodeJs,
        JQuery. Contributed to
        <a
          href="https://stackoverflow.com/users/2021046/chetan-gawai"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.noLine}
        >
          &nbsp;Stack Overflow &nbsp;
        </a>
        having reached <b>105K</b> people with <b>1600+</b> reputations. I love
        to work with startups.
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        color="textSecondary"
        align="center"
      >
        This website is developed by me using{' '}
        <a
          href="https://reactjs.org/"
          rel="noopener noreferrer"
          className={classes.noLine}
        >
          ReactJS
        </a>{' '}
        with{' '}
        <a
          href="vttps://material-ui.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.noLine}
        >
          Material UI framework.{' '}
        </a>
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        color="textSecondary"
        align="center"
      >
        <p>
          When I am not coding, you will find me in &nbsp;
          <i
            style={{ fontSize: '24px', color: 'sienna' }}
            className="fas fa-utensils"
          ></i>{' '}
          kitchen experimenting with different kinds of dishes or in my small
          garden taking care of{' '}
          <i
            className="fas fa-seedling"
            style={{ fontSize: '24px', color: 'green' }}
          ></i>
          plants.
        </p>
        <Resume />
        <FollowMe />
      </Typography>
    </Container>
  );
}

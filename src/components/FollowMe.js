import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  socialmedia: {
    padding: '.25rem 0',
    fontSize: '2rem'
  },
  socialMediaLinks: {
    padding: '0 .625rem'
  },
  socialmediaIcons: {
    color: 'rgb(34, 15, 95)'
  },
  logo: {
    width: '30px',
    height: '30px'
  }
}));

export default function FollowMe() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography variant="h6" gutterBottom>
        Follow me on:
      </Typography>
      <Typography component="span" gutterBottom>
        <div className={classes.socialmedia}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/chetangawai"
            className={classes.socialMediaLinks}
          >
            <i className={classes.socialmediaIcons + ' fab fa-github'}></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/ChetanGawai1"
            className={classes.socialMediaLinks}
          >
            <i className={classes.socialmediaIcons + ' fab fa-twitter'}></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackoverflow.com/users/2021046/chetan-gawai"
            className={classes.socialMediaLinks}
          >
            <i
              className={classes.socialmediaIcons + ' fab fa-stack-overflow'}
            ></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/chetan-gawai-66a12a17/"
            className={classes.socialMediaLinks}
          >
            <i className={classes.socialmediaIcons + ' fab fa-linkedin'}></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/gharwalaswad/"
            className={classes.socialMediaLinks}
          >
            <i className={classes.socialmediaIcons + ' fab fa-instagram'}></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gharwalaswad.com/"
            className={classes.socialMediaLinks}
          >
            <img
              src={require('./../images/logo.png')}
              className={classes.logo}
            />
          </a>
        </div>
      </Typography>
    </Container>
  );
}

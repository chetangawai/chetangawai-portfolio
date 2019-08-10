import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  },
  noLine: {
    textDecoration: 'none'
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'rgb(34, 15, 95)'
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <div style={{ alignItems: 'center' }}>
      <Typography variant="body1" gutterBottom className={classes.wrapIcon}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={require('./../pdfs/ChetanGawaiResume.pdf')}
          className={classes.noLine}
          download
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <CloudDownloadIcon className={classes.leftIcon} /> Resume
          </Button>
        </a>
      </Typography>
    </div>
  );
}

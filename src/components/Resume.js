import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  downloadIcon: {
    fontSize: '2rem'
  },
  socialMediaLinks: {
    padding: '0 .625rem'
  }
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <div style={{ alignItems: 'center' }}>
      <Paper className={classes.root} square={true}>
        <Typography variant="body1" gutterBottom>
          Download CV
        </Typography>
        <Typography variant="body1" gutterBottom>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={require('./../pdfs/ChetanGawaiResume.pdf')}
          >
            <CloudDownloadIcon className={classes.downloadIcon} />
          </a>
        </Typography>
      </Paper>
    </div>
  );
}

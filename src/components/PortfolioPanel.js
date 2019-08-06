import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DrawerContainer from './DrawerContainer';

const drawerWidth = 320;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

function PortfolioPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DrawerContainer drawerWidth={drawerWidth} />
    </div>
  );
}

export default PortfolioPanel;

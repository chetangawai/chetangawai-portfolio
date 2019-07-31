import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import NavigationBar from './NavigationBar';
import DrawerContainer from './DrawerContainer';

const drawerWidth = 320;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

function PortfolioPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationBar drawerWidth={drawerWidth} />
      <DrawerContainer drawerWidth={drawerWidth} />
    </div>
  );
}

PortfolioPanel.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.object
};

export default PortfolioPanel;

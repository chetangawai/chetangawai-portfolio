import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Aboutme from './Aboutme';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';
import TabContainer from './TabContainer';

export default function TabContent(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    appBar: {
      marginLeft: props.drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${props.drawerWidth}px)`
      }
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: props.drawerWidth,
      alignItems: 'center'
    }
  }));
  const classes = useStyles();
  const theme = useTheme();

  function handleChange(event, newValue) {
    props.onHandleChange(newValue);
  }

  const mainContent = (
    <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={props.value}
      onChangeIndex={handleChange}
      animateHeight
      containerStyle={{ flexFlow: 'column wrap' }}
    >
      <TabContainer dir={theme.direction}>
        <Aboutme />
      </TabContainer>
      <TabContainer dir={theme.direction}>
        <WorkExperience />
      </TabContainer>
      <TabContainer dir={theme.direction}>
        <Skills />
      </TabContainer>
      <TabContainer dir={theme.direction}>
        <Education />
      </TabContainer>
    </SwipeableViews>
  );

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Typography component="div">{mainContent}</Typography>
    </div>
  );
}
TabContent.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onHandleChange: PropTypes.func.isRequired
};

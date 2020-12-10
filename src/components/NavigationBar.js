import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import GradeIcon from '@material-ui/icons/Grade';
import PropTypes from 'prop-types';

export default function NavigationBar(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    appBar: {
      marginLeft: props.drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${props.drawerWidth}px)`
      },
      backgroundColor: 'rgb(34, 15, 95)'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: props.drawerWidth,
      alignItems: 'center'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    tab: {
      fontSize: 14
    },
    navBar: {
      color: 'rgb(34, 15, 95)'
    },
    indicator: {
      color: 'rgb(231, 226, 247)'
    }
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="scrollable"
      >
        <Tab label="About me" icon={<PersonIcon />} className={classes.tab} />
        <Tab
          label="Work Experience"
          icon={<WorkIcon />}
          className={classes.tab}
        />
        <Tab label="Skills" icon={<GradeIcon />} className={classes.tab} />
        <Tab label="Education" icon={<SchoolIcon />} className={classes.tab} />
        <Tab label="Blogs" icon={<PersonIcon />} className={classes.tab} />
      </Tabs>
    </div>
  );
}
NavigationBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired
};

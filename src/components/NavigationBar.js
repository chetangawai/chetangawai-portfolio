import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import GradeIcon from '@material-ui/icons/Grade';
import TabContent from './TabContent';

export default function NavigationBar(props) {
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
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    tab: {
      fontSize: 16
    }
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            style={{ flex: 'auto' }}
          >
            <Tab
              label="About me"
              icon={<PersonIcon />}
              className={classes.tab}
            />
            <Tab
              label="Work Experience"
              icon={<WorkIcon />}
              className={classes.tab}
            />
            <Tab label="Skills" icon={<GradeIcon />} className={classes.tab} />
            <Tab
              label="Education"
              icon={<SchoolIcon />}
              className={classes.tab}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <TabContent
          value={value}
          onHandleChange={handleChange}
          drawerWidth={props.drawerWidth}
        />
      </main>
    </div>
  );
}

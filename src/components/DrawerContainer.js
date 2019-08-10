import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ProfileSummary from './ProfileSummary';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import GradeIcon from '@material-ui/icons/Grade';
import TabContent from './TabContent';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';

export default function DrawerContainer(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      backgroundColor: 'rgb(34, 15, 95)'
    },
    appBarShift: {
      width: `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: props.drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      backgroundColor: 'rgb(34, 15, 95)'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    hide: {
      display: 'none'
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: props.drawerWidth,
        flexShrink: 0
      },
      [theme.breakpoints.down('sm')]: {
        width: 0,
        flexShrink: 0
      },
      backgroundColor: 'white'
    },
    drawerPaper: {
      width: props.drawerWidth,
      borderRight: '1px solid white',
      backgroundColor: 'rgb(34, 15, 95)',
      color: 'white'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'center',
      backgroundColor: 'rgb(34, 15, 95)'
    },
    toolbar: theme.mixins.toolbar,

    content: {
      flexGrow: 1
    },
    tabRoot: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224
    },
    textColor: {
      color: '#BCB8CF'
    },
    navTitle: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: props.drawerWidth
      }
    },
    tab: {
      fontSize: '0.95rem',
      maxWidth: 'none'
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
    setOpen(false);
  }
  function handleToggleDrawer() {
    setOpen(!open);
  }

  const VerticalTabs = withStyles(() => ({
    flexContainer: {
      flexDirection: 'column'
    },
    indicator: {
      display: 'none'
    }
  }))(Tabs);

  const drawer = (
    <React.Fragment>
      <div>
        <VerticalTabs value={value} onChange={handleChange}>
          <ProfileSummary drawerWidth={props.drawerWidth} />
          <Tab
            label="About me"
            icon={<PersonIcon />}
            className={classes.tab}
            value={0}
          />
          <Tab
            label="Work Experience"
            icon={<WorkIcon />}
            className={classes.tab}
            value={1}
          />
          <Tab
            label="Skills"
            icon={<GradeIcon />}
            className={classes.tab}
            value={2}
          />
          <Tab
            label="Education"
            icon={<SchoolIcon />}
            className={classes.tab}
            value={3}
          />
        </VerticalTabs>
      </div>
    </React.Fragment>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleDrawer}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClose={handleToggleDrawer}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

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
DrawerContainer.propTypes = {
  drawerWidth: PropTypes.number.isRequired
};

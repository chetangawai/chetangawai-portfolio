import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
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
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    hide: {
      display: 'none'
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: props.drawerWidth,
        flexShrink: 0
      }
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
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  function handleDrawerOpen() {
    setOpen(!open);
  }

  const VerticalTabs = withStyles(theme => ({
    flexContainer: {
      flexDirection: 'column'
    },
    indicator: {
      display: 'none'
    }
  }))(Tabs);

  const drawer = (
    <React.Fragment>
      <div className={classes.drawerHeader}>
        <Typography variant="h4" className={classes.textColor}>
          Chetan Gawai
        </Typography>
      </div>
      <Divider />
      <div
        style={{
          display: 'flex'
        }}
      >
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
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClose={handleDrawerOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
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
        <div className={classes.toolbar} />
        <TabContent
          value={value}
          onHandleChange={handleChange}
          drawerWidth={props.drawerWidth}
        />
      </main>
    </div>
  );
}

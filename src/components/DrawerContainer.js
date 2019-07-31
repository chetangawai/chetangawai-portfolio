import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ProfileSummary from './ProfileSummary';
import FollowMe from './FollowMe';

export default function DrawerContainer(props) {
  const { container } = props;

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex'
    },
    drawerPaper: {
      width: props.drawerWidth,
      height: 'inherit',
      borderBottom: '2px solid rgba(0, 0, 0, 0.12)'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: props.drawerWidth,
        flexShrink: 0
      }
    },
    mainDrawer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%'
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawer = (
    <div className={classes.mainDrawer}>
      <ProfileSummary drawerWidth={props.drawerWidth} />
      <FollowMe />
    </div>
  );

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  return (
    <nav className={classes.drawer}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
  );
}

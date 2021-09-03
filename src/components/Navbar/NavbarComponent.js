import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography, makeStyles, Tabs, Tab} from '@material-ui/core';
//imported MenuIcon 
import MenuIcon from '@material-ui/icons/Menu';
//imported live tv icon
import LiveTvIcon from '@material-ui/icons/LiveTv';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';

//customise components
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  openDraw: {
    marginLeft: "auto"
  }
}));

const NavbarComponent = () => {
  const classes = useStyles();

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           
           <LiveTvIcon />
           </IconButton>
           
          {/* Tabs */}
          <Tabs>
            <Tab icon={<LiveTvIcon />} label="Movies" />
            <Tab icon={<TrendingUpIcon />} label="Trending" />
            <Tab icon={<LocalMoviesIcon />} label="TV Series" />
          </Tabs>

          {/* Menu Icon */}
            <MenuIcon className={classes.openDraw}/>
        </Toolbar>
      </AppBar>
    )
}

export default NavbarComponent

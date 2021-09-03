import React, {useState} from 'react';

import { AppBar, Toolbar, Button, IconButton, Typography, makeStyles, Tabs, Tab, Drawer, useTheme,useMediaQuery } from '@material-ui/core';

//imported MenuIcon 
import MenuIcon from '@material-ui/icons/Menu';

//imported live tv icon
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import LiveTvIcon from '@material-ui/icons/LiveTv';

//import Drawer Component before rendering
import DrawerComponent from './DrawerComponent';

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
    marginLeft: "auto",
    cursor: "pointer",
  }
}));

const NavbarComponent = () => {

  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(true);

  //theme customizations
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
    return (
      <>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu"
              >
           
           <LiveTvIcon />
           </IconButton>
           
          {/* Tabs */}
        
        {!isMatch && 
        <Tabs>
            <Tab icon={<LiveTvIcon />} label="Movies" />
            <Tab icon={<TrendingUpIcon />} label="Trending" />
            <Tab icon={<LocalMoviesIcon />} label="TV Series" />
          </Tabs>
        }

          {/* Menu Icon */}
            <MenuIcon onClick={setOpenDrawer} className={classes.openDrawer}/>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      {
      isMatch && 
      <DrawerComponent 
          openDrawer={openDrawer} 
          setOpenDrawer={setOpenDrawer} />
      }
      </>
    )
}

export default NavbarComponent;

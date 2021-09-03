import React from 'react'

import { Drawer, List, ListItemText, ListItem, makeStyles, ListItemIcon } from "@material-ui/core";

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';


const useStyles = makeStyles(theme => ({
    drawer: {
        backgroundColor: theme.palette.common.drawer
    },
    link: {
        color: 'white',
    },
    icon: {
        color: 'yellow',
    }
}))

const DrawerComponent = ({openDrawer, setOpenDrawer}) => {

    const classes = useStyles();
    return (
       <Drawer 
       classes={{paper: classes.drawer}} 
       open={openDrawer} 
       onClose={()=> setOpenDrawer(!openDrawer)} 
       anchor='right'>

           <List className={classes.link}>
               <ListItem>
                 <ListItemIcon>
                   <LocalMoviesIcon className={classes.icon}/>
                 </ListItemIcon>
                 <ListItemText primary='Movies' />
               </ListItem>

               <ListItem>
                 <ListItemIcon>
                   <TrendingUpIcon className={classes.icon}/>
                 </ListItemIcon>
                 <ListItemText primary='Trending' />
               </ListItem>

               <ListItem>
                 <ListItemIcon>
                   <MovieFilterIcon className={classes.icon}/>
                 </ListItemIcon>
                 <ListItemText primary='Tv Series' />
               </ListItem>
           </List>
       </Drawer>
    )
}

export default DrawerComponent

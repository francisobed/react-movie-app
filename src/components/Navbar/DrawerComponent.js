import React from 'react'
import { useHistory } from 'react-router-dom'

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

    //History state
    const history = useHistory();
    
    const navigation = (link) => {
        history.push(`${link}`)
    };

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
                 <ListItemText onClick={() => navigation("")} primary='Movies' />
               </ListItem>

               <ListItem>
                 <ListItemIcon>
                   <TrendingUpIcon className={classes.icon}/>
                 </ListItemIcon>
                 <ListItemText onClick={() => navigation("trending")} primary='Trending' />
               </ListItem>

               <ListItem>
                 <ListItemIcon>
                   <MovieFilterIcon className={classes.icon}/>
                 </ListItemIcon>
                 <ListItemText onClick={() => navigation("series")} primary='Tv Series' />
               </ListItem>
           </List>
       </Drawer>
    )
}

export default DrawerComponent

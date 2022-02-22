import React from 'react';
// Material UI Elements
import { AppBar, Toolbar, Typography, makeStyles, IconButton} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

// Material UI Styles
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));


const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className="nav" id="nav">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6" className={`${classes.title} logo`} align="left">
                    My Animations
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
